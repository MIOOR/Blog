# Flask

### Response

[出处](https://flask.palletsprojects.com/en/3.0.x/quickstart/#a-minimal-application)

The logic that Flask applies to converting return values into response objects is as follows:

1. If a response object of the correct type is returned it's directly returned from the view.
2. If it's a string, a response object is created with that data and the default parameters.
3. If it's an iterator or generator returning strings or bytes, it is treated as a streaming response.
4. If it's a dict or list, a response object is created using [`jsonify()`](https://flask.palletsprojects.com/en/3.0.x/api/#flask.json.jsonify).
5. If a tuple is returned the items in the tuple can provide extra information. Such tuples have to be in the form `(response, status)`, `(response, headers)`, or `(response, status, headers)`. The `status` value will override the status code and `headers` can be a list or dictionary of additional header values.
6. If none of that works, Flask will assume the return value is a valid WSGI application and convert that into a response object.