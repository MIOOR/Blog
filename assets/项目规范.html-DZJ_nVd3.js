import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,d as s,e as a,r as e,o as h}from"./app-ROPDmvpc.js";const k="/assets/image-20240118164329920-SSMoqUHT.png",r="/assets/image-20240118165537916-Cj911sL5.png",p={};function o(d,i){const t=e("Mermaid");return h(),l("div",null,[i[0]||(i[0]=s(`<h2 id="项目开发规范" tabindex="-1"><a class="header-anchor" href="#项目开发规范"><span>项目开发规范</span></a></h2><p><a href="https://learn.microsoft.com/zh-cn/dotnet/standard/design-guidelines/" target="_blank" rel="noopener noreferrer">参考</a></p><h3 id="类设计" tabindex="-1"><a class="header-anchor" href="#类设计"><span>类设计</span></a></h3><h4 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h4><ol><li><p>类是暴露抽象最优先的选择。因为接口一旦发布，其成员将永远固定。所以要优先定义类而不是接口。</p></li><li><p>要用抽象类而不是用接口来解除契约与实现之间的耦合，除非接口永不变<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>。</p></li><li><p>一个接口只做一件事情。</p></li><li><p>通过接口来实现多重继承，但要避免记号接口（没有成员的接口）<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup>。</p></li><li><p>仅把最长的重载成员定义成重载成员中唯一的虚成员，而较短的重载只是调用一下较长的重载。</p><div class="language-c# line-numbers-mode" data-highlighter="shiki" data-ext="c#" data-title="c#" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Indexof</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">string</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">){</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Indexof</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">	public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Indexof</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">string</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> startIndex</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">){</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Indexof</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">startIndex</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">Length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">	public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> virtual</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Indexof</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">string</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> startIndex</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> count</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">){</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        //do real work here</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>要优先使用成员重载，而不是定义有默认参数的成员<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup>。</p></li></ol><h2 id="项目文档" tabindex="-1"><a class="header-anchor" href="#项目文档"><span>项目文档</span></a></h2><h3 id="c-的注释文档" tabindex="-1"><a class="header-anchor" href="#c-的注释文档"><span>C# 的注释文档</span></a></h3><p><a href="https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/xmldoc/" target="_blank" rel="noopener noreferrer">参考</a></p><p>注释文档可以方便开发人员查看类和 API 的详细信息；也可以通过相关工具<sup class="footnote-ref"><a href="#footnote4">[4]</a><a class="footnote-anchor" id="footnote-ref4"></a></sup><sup class="footnote-ref"><a href="#footnote5">[5]</a><a class="footnote-anchor" id="footnote-ref5"></a></sup><sup class="footnote-ref"><a href="#footnote6">[6]</a><a class="footnote-anchor" id="footnote-ref6"></a></sup>生成网页或 PDF 文件的形式的可读文档。</p><h4 id="参考格式" tabindex="-1"><a class="header-anchor" href="#参考格式"><span>参考格式</span></a></h4><p>在 VS 中键入<code>///</code>后，会自动生成一个注释文档框架。</p><div class="language-c# line-numbers-mode" data-highlighter="shiki" data-ext="c#" data-title="c#" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/// </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&lt;</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">summary</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/// 这是一个示例类，用于演示注释文档的格式</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/// </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">summary</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ExampleClass</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /// </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&lt;</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">summary</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /// 这是一个示例方法，用于演示注释文档的格式</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /// </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">summary</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /// </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&lt;</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">param</span><span style="--shiki-light:#986801;--shiki-light-font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> name</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">=</span><span style="--shiki-light:#50A14F;--shiki-light-font-style:italic;--shiki-dark:#98C379;--shiki-dark-font-style:italic;">&quot;param1&quot;</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&gt;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">参数1的说明</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">param</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /// </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&lt;</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">param</span><span style="--shiki-light:#986801;--shiki-light-font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> name</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">=</span><span style="--shiki-light:#50A14F;--shiki-light-font-style:italic;--shiki-dark:#98C379;--shiki-dark-font-style:italic;">&quot;param2&quot;</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&gt;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">参数2的说明</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">param</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /// </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&lt;</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">returns</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&gt;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">返回值的说明</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">returns</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /// </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&lt;</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">exception</span><span style="--shiki-light:#986801;--shiki-light-font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> cref</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">=</span><span style="--shiki-light:#50A14F;--shiki-light-font-style:italic;--shiki-dark:#98C379;--shiki-dark-font-style:italic;">&quot;System.ArgumentException&quot;</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&gt;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">如果参数不符合要求，则会抛出 ArgumentException 异常</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">exception</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /// </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&lt;</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">remarks</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /// 这个方法做了什么事情的额外说明</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /// </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">remarks</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ExampleMethod</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> param1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">string</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> param2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 方法的具体实现</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，使用了 <code>&lt;summary&gt;</code> 标记来描述类和方法的概要信息，<code>&lt;param&gt;</code> 标记来描述方法的参数信息，<code>&lt;returns&gt;</code> 标记来描述方法的返回值信息，<code>&lt;exception&gt;</code> 标记来描述可能抛出的异常信息，<code>&lt;remarks&gt;</code> 标记来提供额外的说明信息。</p><p>PS: <a href="https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/xmldoc/recommended-tags" target="_blank" rel="noopener noreferrer">所有的文档标记</a>、<a href="https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/xmldoc/examples" target="_blank" rel="noopener noreferrer">详细示例</a></p><h4 id="构建在线或-pdf-文档" tabindex="-1"><a class="header-anchor" href="#构建在线或-pdf-文档"><span>构建在线或 PDF 文档</span></a></h4><p>采用 DocFX 构建网站<sup class="footnote-ref"><a href="#footnote7">[7]</a><a class="footnote-anchor" id="footnote-ref7"></a></sup>。</p><h5 id="第一步-配置参数" tabindex="-1"><a class="header-anchor" href="#第一步-配置参数"><span>第一步 配置参数</span></a></h5><ol><li><p>建立一个文件夹（文件位置与需要构建网址的项目位置无关）作为构建和生成网站的根目录。</p></li><li><p>在 CMD 中定位到该文件夹下，之后输入 <code>docfx init</code> 初始化构建工具。</p><p>docfx 初始化配置时会出现以下选项</p><figure><img src="`+k+'" alt="docfx选项" tabindex="0" loading="lazy"><figcaption>docfx选项</figcaption></figure><p>第一个为网站名，直接回车默认为 <code>mysite</code>。</p><p>第二个为是否生成 API 文档，直接默认回车。</p><p>第三个为项目位置（即项目相对于该文件夹的位置），他是以当前文件夹的上一级为起始位置，默认回车文件路径为 <code>../src</code>。</p><p>第四个为 md 文档的位置。可以在该目录下编写 md 文件，构建时会生成对应的网页。</p><p>第五个为是否允许搜索引擎爬虫爬取，输入 <code>n</code> 回车。</p><p>第六个为是否生成 PDF 文档，默认回车。</p><p>选项输入完后，生成的配置文件</p><figure><img src="'+r+'" alt="配置文件" tabindex="0" loading="lazy"><figcaption>配置文件</figcaption></figure></li></ol><h5 id="第二步-生成并访问" tabindex="-1"><a class="header-anchor" href="#第二步-生成并访问"><span>第二步 生成并访问</span></a></h5><ol><li><p>输入</p><div class="language-cmd line-numbers-mode" data-highlighter="shiki" data-ext="cmd" data-title="cmd" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">docfx C:\\</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Users</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\\</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Lenovo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\\</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Documents</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\\我的文档\\工作\\</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">docfx_web_demo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\\docfx.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">json</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">serve</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> -</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 9020</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>构建在线服务器。<code>-p</code> 指定端口，没有指定时默认为8080。<code>-n</code> 指定服务器 IP，没有时仅本机可以访问。</p></li><li><p>访问 <code>http://localhost:9020</code> 即可。</p></li></ol><h2 id="框架设计" tabindex="-1"><a class="header-anchor" href="#框架设计"><span>框架设计</span></a></h2><h3 id="uml" tabindex="-1"><a class="header-anchor" href="#uml"><span>UML</span></a></h3><h4 id="状态图" tabindex="-1"><a class="header-anchor" href="#状态图"><span>状态图</span></a></h4><p>描述在不同状态切换的图。</p><h5 id="图表示" tabindex="-1"><a class="header-anchor" href="#图表示"><span>图表示</span></a></h5>',25)),a(t,{id:"mermaid-155",code:"eJwrLkksSXXJTEwvSszlSsksSk0uyczPU/AJ4lIAgmitWAVdXTuFYJAqQysF5/y8lEyQAkN9R7BCQ7AyiDRYJYRtpGAFV2oEVWqErhTMNFZAMtUYqtQYrBTsNIXg0oLUIrBShWqwMNwUiIFwLkRTLcQWhCaE85FtMoHaZIJNOcjXSGpNoWpNuQB6aFmj"}),i[1]||(i[1]=s('<p>当两个或多个状态会在同一条件下执行同一操作转到另一状态时，可用 <code>SuperState</code> 表示。</p><h5 id="表格表示" tabindex="-1"><a class="header-anchor" href="#表格表示"><span>表格表示</span></a></h5><table><thead><tr><th>当前状态</th><th>事件</th><th>新状态</th><th>动作</th></tr></thead><tbody><tr><td>起始</td><td>Condition1</td><td>State1</td><td>Action1</td></tr><tr><td>State1</td><td>Condition2</td><td>State2</td><td>Action2</td></tr><tr><td>State1</td><td>Condition3</td><td>State3</td><td>Action3</td></tr><tr><td>SuperState</td><td>Condition4</td><td>State1</td><td>Action4</td></tr><tr><td>SuperState</td><td>Condition5</td><td>结束</td><td>Action5</td></tr></tbody></table><p>在开发和维护有限状态机（FSM）方面，采用文本语言通常要比图形更容易一些。</p><h4 id="时序图" tabindex="-1"><a class="header-anchor" href="#时序图"><span>时序图</span></a></h4><p>描述物件在时间序列中的交叉作用<sup class="footnote-ref"><a href="#footnote8">[8]</a><a class="footnote-anchor" id="footnote-ref8"></a></sup>。</p>',6)),a(t,{id:"mermaid-261",code:"eJyFUMtKw0AUXSdfMctKDe6DBpSIXRQpUtxP0mmIJJlxZoJ014WLIggVUtBuQsFHEURciEHp3yQZ+xeOKQnaLLq7nHvueVyGzkMU2Mh0oUOhryrQ5piC/QAHAx+HDGDrDNlcVQik3LVdAgMOOtBB/5FDn3h4gNZQ24OMVTvzQFVUZV0ZaIbRLBSBDtrYcYMG8onb2wZEHl9g2ttSlWPMEWijPge4X8umAxG9tbrdzvdsnl1P0s8nEcW7Ft0xxPSyxTk5+e3IZIfCRfrVgklrab8HjhAvwVUK6V0eNSu+ZJ9CzzUhR40/Iau1JtlaWYkiFnpcDhbGXqlWEGqf0MEqLSM4YPKVG1qnyX2aPIvFzXL2niYvsmyaDIveEl4OpyJ+ENE8H32Iu69sMSk2+e1rNn7MR+PsKlZ/AO6XxbY="}),i[2]||(i[2]=s('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>P<sub>77</sub> | .NET 设计规范：约定、惯用法与模式（第2版） <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li><li id="footnote2" class="footnote-item"><p>4.6 接口设计 P<sub>82</sub> | .NET 设计规范：约定、惯用法与模式（第2版） <a href="#footnote-ref2" class="footnote-backref">↩︎</a></p></li><li id="footnote3" class="footnote-item"><p>P<sub>106</sub> | .NET 设计规范：约定、惯用法与模式（第2版） <a href="#footnote-ref3" class="footnote-backref">↩︎</a></p></li><li id="footnote4" class="footnote-item"><p><a href="https://dotnet.github.io/docfx/" target="_blank" rel="noopener noreferrer">DocFX</a> 是适用于 .NET 的 API 文档生成器，能通过源代码和 Markdown 文件生成静态 HTML 网站或 PDF 文档。 <a href="#footnote-ref4" class="footnote-backref">↩︎</a></p></li><li id="footnote5" class="footnote-item"><p><a href="https://github.com/EWSoftware/SHFB" target="_blank" rel="noopener noreferrer">Sandcastle</a> 工具为包含概念性和 API 参考页面的托管类库创建帮助文件。 <a href="#footnote-ref5" class="footnote-backref">↩︎</a></p></li><li id="footnote6" class="footnote-item"><p><a href="https://github.com/doxygen/doxygen" target="_blank" rel="noopener noreferrer">Doxygen</a> 通过一系列已记录的源文件生成在线文档浏览器（使用 HTML）或离线参考手册（使用 LaTeX）。 此外，还支持生成 RTF (MS Word)、PostScript、hyperlinked PDF、compressed HTML、DocBook 和 Unix 手册页形式的输出。 <a href="#footnote-ref6" class="footnote-backref">↩︎</a></p></li><li id="footnote7" class="footnote-item"><p>[根据注释创建API文档 | WOW-CSharp](<a href="https://github.com/sogeisetsu/WOW-Csharp/blob/master/c%23" target="_blank" rel="noopener noreferrer">https://github.com/sogeisetsu/WOW-Csharp/blob/master/c%23</a> <a href="http://xn--API-th2el20dnjgt3dszg9kn99arj6h.md" target="_blank" rel="noopener noreferrer">根据注释创建API文档.md</a>) <a href="#footnote-ref7" class="footnote-backref">↩︎</a></p></li><li id="footnote8" class="footnote-item"><p><a href="https://zh.wikipedia.org/zh-cn/%E6%97%B6%E5%BA%8F%E5%9B%BE" target="_blank" rel="noopener noreferrer">时序图 - 维基百科</a> <a href="#footnote-ref8" class="footnote-backref">↩︎</a></p></li></ol></section>',2))])}const A=n(p,[["render",o],["__file","项目规范.html.vue"]]),y=JSON.parse('{"path":"/posts/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E9%A1%B9%E7%9B%AE%E8%A7%84%E8%8C%83.html","title":"项目规范","lang":"zh-CN","frontmatter":{"title":"项目规范","date":"2024-06-19T00:00:00.000Z","category":"软件开发","tag":["注释文档","UML","类设计"],"description":"项目开发规范 参考 类设计 最佳实践 类是暴露抽象最优先的选择。因为接口一旦发布，其成员将永远固定。所以要优先定义类而不是接口。 要用抽象类而不是用接口来解除契约与实现之间的耦合，除非接口永不变[1]。 一个接口只做一件事情。 通过接口来实现多重继承，但要避免记号接口（没有成员的接口）[2]。 仅把最长的重载成员定义成重载成员中唯一的虚成员，而较短的重...","head":[["meta",{"property":"og:url","content":"https://mioor.top/posts/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/%E9%A1%B9%E7%9B%AE%E8%A7%84%E8%8C%83.html"}],["meta",{"property":"og:site_name","content":"MIOOR"}],["meta",{"property":"og:title","content":"项目规范"}],["meta",{"property":"og:description","content":"项目开发规范 参考 类设计 最佳实践 类是暴露抽象最优先的选择。因为接口一旦发布，其成员将永远固定。所以要优先定义类而不是接口。 要用抽象类而不是用接口来解除契约与实现之间的耦合，除非接口永不变[1]。 一个接口只做一件事情。 通过接口来实现多重继承，但要避免记号接口（没有成员的接口）[2]。 仅把最长的重载成员定义成重载成员中唯一的虚成员，而较短的重..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-29T06:58:45.000Z"}],["meta",{"property":"article:author","content":"MIOOR"}],["meta",{"property":"article:tag","content":"注释文档"}],["meta",{"property":"article:tag","content":"UML"}],["meta",{"property":"article:tag","content":"类设计"}],["meta",{"property":"article:published_time","content":"2024-06-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-29T06:58:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"项目规范\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-06-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-29T06:58:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MIOOR\\",\\"url\\":\\"http://mioor.top\\"}]}"]]},"headers":[{"level":2,"title":"项目开发规范","slug":"项目开发规范","link":"#项目开发规范","children":[{"level":3,"title":"类设计","slug":"类设计","link":"#类设计","children":[]}]},{"level":2,"title":"项目文档","slug":"项目文档","link":"#项目文档","children":[{"level":3,"title":"C# 的注释文档","slug":"c-的注释文档","link":"#c-的注释文档","children":[]}]},{"level":2,"title":"框架设计","slug":"框架设计","link":"#框架设计","children":[{"level":3,"title":"UML","slug":"uml","link":"#uml","children":[]}]}],"git":{"createdTime":1730116452000,"updatedTime":1730185125000,"contributors":[{"name":"MIOOR","email":"yangwenyao07@gmail.com","commits":2}]},"readingTime":{"minutes":4.78,"words":1433},"filePathRelative":"posts/软件开发/项目规范.md","localizedDate":"2024年6月19日","excerpt":"<h2>项目开发规范</h2>\\n<p><a href=\\"https://learn.microsoft.com/zh-cn/dotnet/standard/design-guidelines/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">参考</a></p>\\n<h3>类设计</h3>\\n<h4>最佳实践</h4>\\n<ol>\\n<li>\\n<p>类是暴露抽象最优先的选择。因为接口一旦发布，其成员将永远固定。所以要优先定义类而不是接口。</p>\\n</li>\\n<li>\\n<p>要用抽象类而不是用接口来解除契约与实现之间的耦合，除非接口永不变<sup class=\\"footnote-ref\\"><a href=\\"#footnote1\\">[1]</a><a class=\\"footnote-anchor\\" id=\\"footnote-ref1\\"></a></sup><a class=\\"footnote-anchor\\" id=\\"footnote-ref1\\">。</a></p><a class=\\"footnote-anchor\\" id=\\"footnote-ref1\\">\\n</a></li><a class=\\"footnote-anchor\\" id=\\"footnote-ref1\\">\\n<li>\\n<p>一个接口只做一件事情。</p>\\n</li>\\n</a><li><a class=\\"footnote-anchor\\" id=\\"footnote-ref1\\">\\n</a><p><a class=\\"footnote-anchor\\" id=\\"footnote-ref1\\">通过接口来实现多重继承，但要避免记号接口（没有成员的接口）<sup class=\\"footnote-ref\\"></sup></a><a href=\\"#footnote2\\">[2]</a><a class=\\"footnote-anchor\\" id=\\"footnote-ref2\\">。</a></p><a class=\\"footnote-anchor\\" id=\\"footnote-ref2\\">\\n</a></li><a class=\\"footnote-anchor\\" id=\\"footnote-ref2\\">\\n<li>\\n<p>仅把最长的重载成员定义成重载成员中唯一的虚成员，而较短的重载只是调用一下较长的重载。</p>\\n<div class=\\"language-c# line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"c#\\" data-title=\\"c#\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">public</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> class</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> String</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    public</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> int</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> Indexof</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">string</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\"> s</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">){</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">        return</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> Indexof</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">s</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">0</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">\\tpublic</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> int</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> Indexof</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">string</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\"> s</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">int</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\"> startIndex</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">){</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">        return</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> Indexof</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">s</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">startIndex</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">s</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">Length</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">\\tpublic</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> virtual</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> int</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> Indexof</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">string</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\"> s</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">int</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\"> startIndex</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">int</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\"> count</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">){</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">        //do real work here</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</a><li><a class=\\"footnote-anchor\\" id=\\"footnote-ref2\\">\\n</a><p><a class=\\"footnote-anchor\\" id=\\"footnote-ref2\\">要优先使用成员重载，而不是定义有默认参数的成员<sup class=\\"footnote-ref\\"></sup></a><a href=\\"#footnote3\\">[3]</a><a class=\\"footnote-anchor\\" id=\\"footnote-ref3\\">。</a></p><a class=\\"footnote-anchor\\" id=\\"footnote-ref3\\">\\n</a></li><a class=\\"footnote-anchor\\" id=\\"footnote-ref3\\">\\n</a></ol>","autoDesc":true}');export{A as comp,y as data};
