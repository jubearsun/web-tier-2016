# Practice

The best way to learn something in the development world is to just jump in and break everything.

## SuperAgent

Outside of writing Javascript, this weeks main takeaway should be making AJAX/HTTP requests using
Javascript and handling responses via callbacks.

SuperAgent is a client-side HTTP request library. It's also a Node.js module for server-side
requests but that's another topic. SuperAgent will allow you to make HTTP requests in Javascript
to any endpoint (granted you might not have permissions and things will fail).

*You can view the documentation for SuperAgent [here](http://visionmedia.github.io/superagent/)*

For your practice, you'll be using both `GET` and `POST` requests. Your requests will look something
like this for `GET` requests.

```js
superagent.get('http://webtier2016.christianle.com/v1/color')
  .query({
    red: 150,
    blue: 200
  })
  .end(function(err, res) {
    // Handle Response or Error
  });
```

Look through the SuperAgent documentation and see what's different for `POST` requests

## Things you should try

* Make a button that changes color using the `/v1/color` endpoint everytime you click on it.
* Make a form that submits the necessary data to `/v1/contact`
  * Check `http://webtier2016.christianle.com/documentation` for the required fields
  * Also remember the endpoint fails 25% of the time, make your form handle errors too!

