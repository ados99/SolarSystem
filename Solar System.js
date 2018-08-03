$(function() {
  var mercury = $('.mercury-orbit');
  var button = $('.button');
  button.on('click', function(){
    mercury-orbit.toggleClass('active');
    if(mercury-orbit.hasClass('active'))
      button.text('Stop Rotation');
    else
      button.text('Start Rotation');
  });
});