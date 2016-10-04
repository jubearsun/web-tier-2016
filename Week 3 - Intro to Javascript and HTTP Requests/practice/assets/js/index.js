$(document).ready(function() {

  $('#color__gen').click(function(e) {
    superagent.get('http://webtier2016.christianle.com/v1/color')
    .end(function(err, res) {
      if (err) {
        $('.hex__response')
          .text("Your request failed...please try again.")
          .css({
            color: 'red'
          });
        console.log(err);
      } else {
        $('#color__gen')
          .css({
            border: '2px solid ' + res.body.hex,
            color: res.body.hex
          })
        $('#hex__response')
          .text(res.body.hex)
          .css({color: res.body.hex});
        console.log(res);
      }
    });
  })

  $('#submit').click(function(e) {
    e.preventDefault();

    var sender = $('#name').val();
    var addr = $('#email').val();
    var msg = $('#message').val();

    superagent.post('http://webtier2016.christianle.com/v1/contact')
      .send({
        name: sender,
        email: addr,
        message: msg
      })
      .end(function(err, res) {
        if (err) {
          $('#message__response')
            .text("Your request failed...please try again.")
            .css({
              color: 'red'
            })
          console.log("YOU FAILED");
          console.log(err);
        } else {
          $('#message__response')
            .text(res.body.message)
            .css({
              color: 'green'
            })
          console.log("YOU SUCCEEDED!!!! huehuehue");
          console.log(res);
        }
      })
  });
});

