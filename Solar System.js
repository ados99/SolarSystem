
var sun = $("#sun").find('.tooltiptext').first()
var mercury = $("#mercury-orbit").find('.tooltiptext')
var planets = ["uranus-orbit", "saturn-orbit", "jupiter-orbit", "mars-orbit","earth-orbit",
"venus-orbit","mercury-orbit","neptune-orbit","center"]

planets.forEach(element => {
  var planet = $("#" + element).find('.tooltiptext').first()
  $("#" + element).mouseover(function(evt){
    planet.css("visibility","visible")
  });
  $("#" + element).mouseout(function(){
   planet.css("visibility","hidden")
  });

})

$("#startstop").click(function () {
  if($("#startstop").text() === 'Start Rotation')
  {
    $("#neptune-orbit").css("-webkit-animation", "spin-right 60s infinite linear")
    $("#uranus-orbit").css("-webkit-animation", "spin-right 50s linear infinite")
    $("#saturn-orbit").css("-webkit-animation", "spin-right 44s linear infinite")
    $("#jupiter-orbit").css("-webkit-animation", "spin-right 38s linear infinite")
    $("#mars-orbit").css("-webkit-animation", "spin-right 28s linear infinite")
    $("#earth-orbit").css("-webkit-animation", "spin-right 20s linear infinite")
    $("#venus-orbit").css("-webkit-animation", "spin-right 12s linear infinite")
    $("#mercury-orbit").css("-webkit-animation", "spin-right 6s linear infinite")
    $("#startstop").text('Stop Rotation')
  }
  else if($("#startstop").text() === 'Stop Rotation'){
    planets.forEach(element=>{
      $("#"+element).css("-webkit-animation-play-state", "paused")
    })
    $("#startstop").text('Start Rotation')
  }
})

  





// $("#neptune-orbit").mouseout(function(){
//   neptune.css("visibility","hidden")
// });

// $("#uranus-orbit").mouseout(function(){
//   uranus.css("visibility","hidden")
// });

// $('#saturn-orbit').mouseover(function (evt) {
//   evt.stopPropagation();
//   saturn.css("visibility","visible")
// });

// $("#saturn-orbit").mouseout(function(){
//   saturn.css("visibility","hidden")
// });


