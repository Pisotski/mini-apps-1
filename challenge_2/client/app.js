//make sure on click of submit to prevent defult behavior
// require('../server').listen(8000, '127.0.0.1');
// console.log('Listening on port 8000...');
$(document).ready(function() {
  $('form').on('submit', function(e){
    e.preventDefault();
    var message = $('textarea').val();
    app.send(message);
    $('textarea').val('');
  });
});

var app = {
  init: function() {
    var $body = $('body');

  },
  server: 'http://127.0.0.1:3000/reports',

  send: function(message) {
    $.ajax({
      url: app.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function(data) {
        console.log(typeof JSON.parse(data), 'hi');
        var node =  document.createTextNode(data);
        $('body').append(node);
      },
      error: function(error) {
        console.log('error');
      }
    });
  },
  fetch: function() {
    $.ajax({
      url: app.server,
      type: 'GET',
      success: function(data) {
        console.log(data, 'from app.fetch')
      },
      error: function(error) {
        console.log('error')
      }
    });
  }
}
