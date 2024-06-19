# Request Response Lecture

Start by getting the attendees familiar with the basics of

```js
new Request('url')
new Response()
```

These are the foundations of what `fetch` operates on.

```js
// These are the same:
fetch('site.com')

const req = new Request('site.com')
fetch(req)
```
