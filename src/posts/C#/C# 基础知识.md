---
title: C# 基础知识
Date: 2024-6-19
category: C#
tag: 
  - C# 语法
  - WebSocket
  - XML 反序列化
  - MVVM Toolkit
---

## 语法

### C#中的按值和按引用传递

按值传递给函数时，变量传递的是副本；按引用传递给函数时，变量传递的是本身。

#### 按值传递[^1]

1. 整数类型（如 int、long、short）、
2. 浮点数类型（如 float、double、decimal）、
3. 布尔类型（bool）、
4. 字符型（char）、
5. 枚举类型（enum）、
6. [结构类型](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/builtin-types/struct)（struct）。

#### 按引用传递[^2]

1. 类（class）、
2. 接口（interface）、
3. [委托](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/builtin-types/reference-types#the-delegate-type)（delegate）、
4. [记录](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/builtin-types/record)（record）、
5. [内置引用类型](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/builtin-types/reference-types)（dynamic、object、string）

`in` 修饰符允许编译器为自变量创建一个临时变量，并传递对该自变量的只读引用[^3]。

`ref` 关键字会将修饰的变量按引用传递[^4]。

`out` 修饰符会在函数返回之前给变量赋值[^5]。

### C# 的里终结器与 IDisposable 接口作用

[参考](https://learn.microsoft.com/zh-cn/dotnet/csharp/programming-guide/classes-and-structs/finalizers)

终结器（即析构器）用于清理非托管资源，仅能由 GC 调用，调用时间不确定，应避免大资源或或耗时操作通过此进行。

IDisposable 接口用于释放非托管资源，由使用者显示调用，一般搭配 `using` 使用。

## 使用

### WebSocket

```c#
[ApiController]
[Route("[controller]")]
public class ExampleWsController : ControllerBase
{
    private WebSocket socket;

    private void SendMessage(string message)
    {
        socket.SendAsync(new ArraySegment<byte>(Encoding.UTF8.GetBytes(message)), WebSocketMessageType.Text, true, CancellationToken.None);
    }

    private async Task HandleWebSocket()
    {
        try
        {
            while (socket.State == WebSocketState.Open)
            {
                var buffer = new byte[1024 * 4];
                var result = await socket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None); // 获得客户端消息
                while (!result.CloseStatus.HasValue)
                {
                    // 解析请求后按不同情况处理
                    var messageFromClient = Encoding.UTF8.GetString(buffer, 0, result.Count);
                    switch (messageFromClient)
                    {
                        case "message1":
                            break;
                        case "message2":
                            break;
                        case "message3":
                            break;
                    }
                }
            }
        }
        catch (Exception ex)
        {
            // Handle exceptions
        }
        finally
        {
            if (socket.State == WebSocketState.Open)
                await socket.CloseAsync(WebSocketCloseStatus.NormalClosure, "Connection closed by client", CancellationToken.None);
        }
    }

    [HttpGet("GetExampleWs")]
    public async Task GetExampleWs()
    {
        if (HttpContext.WebSockets.IsWebSocketRequest)
        {
            // 建立连接
            socket = await HttpContext.WebSockets.AcceptWebSocketAsync();
            await Task.Run(() => HandleWebSocket());
        }
        else
        {
            HttpContext.Response.StatusCode = 400;
        }
    }
}
```

`GetExampleWs()` 用于建立ws连接，请求url路径为 `ws://localhost/ExampleWs/ExampleWs`.

`HandleWebSocket()` 用于处理发送过来的请求，或者向对方发送消息。

### XML 反序列化

当 XML 中有值需要反序列化为枚举时，需用 `[XmlEnum()]`来建立映射关系[^7]。

例如：

```xml
<EnumValue>1</EnumValue>
```

```c#
/// <summary>
/// 用于接收反序列化的对象
/// </summary>
[Serializable]
public class XmlExample {
    [XmlElement("EnumValue")]
    EnumExample EnumValue {get; set;}
}

[Serializable]
public enum EnumExample {
    [XmlEnum("1")]
    Example = 1,
}
```

需用 `[XmlEnum("1")]` 来建立XML中对应值与枚举中对应类型的映射关系。

PS: [序列化对象参考](https://learn.microsoft.com/zh-cn/dotnet/standard/serialization/how-to-serialize-an-object)，[反序列化对象参考](https://learn.microsoft.com/zh-cn/dotnet/standard/serialization/how-to-deserialize-an-object)

### 重写相等操作

- 相等操作要满足数学上相等的定义：

  [参考](https://www.cnblogs.com/yyfh/p/12245916.html)

  - 自反性、

    x.equals(x) 等于 true

  - 对称性、

    x.equals(y) 等于 y.equals(x)

  - 传递性、

    x.equals(y) 返回 true，并且 y.equals(z) 也返回 true，那么 x.equals(z) 必须返回 true

  - 一致性、

    如果多次将对象与另一个对象比较，结果始终相同。只要未修改 x 和 y 的应用对象，x.equals(y) 连续调用 x.equals(y) 返回相同的值

  - 非 null

    如果 x 不是 null，y 为 null，则 x.equals(y) 必须为 false

- 重载等于操作时需要实现的接口

  `Equals(object?)` 和 `GetHashCode()` 可以用 VS 默认实现[^6]，或参考下面的样例代码。

  ```c#
  public class Example : IEquatable<Example>
  {
      public int Member1;
      public double Member2;
      public static bool operator ==(Example left, Example right)
      {
          return left.Member1 == right.Member1 && left.Member2 == right.Member2;
      }
      
      public static bool operator !=(Example left, Example right)
      {
          return left.Member1 != right.Member1 || left.Member2 != right.Member2;
      }
      
      public override bool Equals([NotNullWhen(true)] object? obj)
      {
          return GetType() != obj?.GetType() || Equals(obj);
      }
      
      public bool Equals(Example? other)
      {
          return other is not null && (ReferenceEquals(this, other) || other == this);
      }
      
      public override int GetHashCode()
      {
          return HashCode.Combine(Member1, Member2);
      }
  }
  ```

  `operator==` 和 `Equals` 要在语义上相等。

  由于重载了 `operator==`，`Object.Equals(object?)` 语义要与其一致，则需重载；而 `Object.Equals(object?)` 改变后会影响 `Object.GetHashCode()`，也需要重载。

### MVVM Toolkit 工具包

[官网](https://learn.microsoft.com/zh-cn/dotnet/communitytoolkit/mvvm/)

建议使用平台：.Net 8，较早的平台可能会出现奇怪的 Bug。

[观察属性](https://learn.microsoft.com/zh-cn/dotnet/communitytoolkit/mvvm/generators/observableproperty)

用法

```c#
[ObservableProperty]
private string? name;
```

等价于

```c#
public string? Name
{
    get => name;
    set => SetProperty(ref name, value);
}
```

> [!NOTE]
>
> 带批注字段需要位于具有必要 `INotifyPropertyChanged` 基础结构的[分部类](https://learn.microsoft.com/zh-cn/dotnet/csharp/programming-guide/classes-and-structs/partial-classes-and-methods)中才能发挥作用。
>
> 将基于字段名称创建生成的属性的名称。 字段命名采用 `lowerCamel`、`_lowerCamel` 或者 `m_lowerCamel`，都会转换为 `UpperCamel`。 生成的属性将始终具有公共访问器，但在声明该字段时可以使用任何可见性（建议使用 `private`）。

[中继命令属性](https://learn.microsoft.com/zh-cn/dotnet/communitytoolkit/mvvm/generators/relaycommand)

用法

```c#
[RelayCommand]
private void GreetUser()
{
    
}
```

等价于

```c#
private RelayCommand? greetUserCommand;

public IRelayCommand GreetUserCommand => greetUserCommand ??= new RelayCommand(GreetUser);
```

> [!Note]
>
> 为了正常工作，带批注的方法需要位于[分部类](https://learn.microsoft.com/zh-cn/dotnet/csharp/programming-guide/classes-and-structs/partial-classes-and-methods)中。 如果对类型进行嵌套，则必须也将声明语法树中的所有类型批注为分部。 
>
> 将基于方法名称创建生成的命令的名称。 生成器将使用方法名称并在末尾追加“Command”，并且去除“On”前缀（如果存在）。 此外，对于异步方法，“Async”后缀也会在追加“Command”之前去除。

### PostSharp

#### WPF 的 Binding 操作

##### INotifyPropertyChanged 绑定

数据类的成员变量的set属性自动实现 INotifyPropertyChanged（搜索关键词：`Automatically implement INotifyPropertyChanged`）

使用 [PostSharp.Patterns.Model](https://www.nuget.org/packages/PostSharp.Patterns.Model/)

只需要在类上添加`[NotifyPropertyChanged]` [^8]。

##### ICommand 绑定

命令类的简化实现

使用 [PostSharp.Pattern.Xaml](https://www.nuget.org/packages/PostSharp.Patterns.Xaml/) [^9]。

`region` 处为命令的名称，`ExecuteName` 为执行命令的函数（ `object` 参数根据情况添加，可有可无）。

```c#
class A {
    
    #region Name

    [Command]
    public ICommand NameCommand { get; set; }

    public void ExecuteName(object? parameter)
    {
        // ...
    }

    #endregion
}
```

XAML 文件配置，需要传入参数时添加 `CommandParameter`

```xaml
<Button Command={Bingding NameCommand} CommandParameter="" />
```



[^1]: [值类型 - C# | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/builtin-types/value-types)
[^2]: [引用类型 - C# | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/keywords/reference-types)
[^3]: [`in` 修饰符 - C# | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/keywords/method-parameters#in-parameter-modifier)
[^4]: [`ref` 关键字 - C# | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/keywords/ref)
[^5]: [`out` 修饰符 - C# | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/keywords/method-parameters#out-parameter-modifier)
[^6]: [生成 C# Equals 和 GetHashCode 方法重写 - Visual Studio (Windows) | Microsoft Learn](https://learn.microsoft.com/zh-cn/visualstudio/ide/reference/generate-equals-gethashcode-methods?view=vs-2022)
[^7]: [.net - C# deserializing enums from integers - Stack Overflow](https://stackoverflow.com/questions/9944421/c-sharp-deserializing-enums-from-integers)
[^8]: [Implementing INotifyPropertyChanged | PostSharp](https://doc.postsharp.net/il/model/notifypropertychanged/inotifypropertychanged-add)
[^9]: [Command | PostSharp](https://doc.postsharp.net/il/xaml/command)