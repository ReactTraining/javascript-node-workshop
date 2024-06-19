# Request Response Lecture

Start by getting the attendees familiar with the basics of

```js
new Request('url')
new Response()
```

## Request

These are the foundations of what `fetch` operates on.

```js
// These are the same:
fetch('site.com')

const req = new Request('site.com')
fetch(req)
```

## Response

`fetch` returns a promise that "resolves" an instance of Response:

https://developer.mozilla.org/en-US/docs/Web/API/fetch#return_value

If the response contains JSON data, you can resolve that from the response object:

```js
fetch().then((res) => res.json())
```
