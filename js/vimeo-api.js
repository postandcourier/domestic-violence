var iframe = document.getElementById('player_1');

// $f == Froogaloop
var player = $f(iframe);

var pauseButton = document.getElementById("pause-button");
pauseButton.addEventListener("click", function() {
  player.api("pause");
});