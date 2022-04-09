// var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
//   if (!isChrome){
//       $('#iframeAudio').remove()
//   }
//   else {
//       $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background
//   }
//
// <script>
// function play() {
//   var audio = new Audio('audio/Spomeniks stereo mix 14 Titel_v1.0.mp3');
//   audio.play();
// }
// </script>
// <button onclick-"play();">PLAY MY AUDIO</button>

////////

// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};
//
// // Get the header
// var header = document.getElementById("myHeader");
//
// // Get the offset position of the navbar
// var sticky = header.offsetTop;
//
// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
// ----------------------------------------------
// AUDIO FUNCTIONS
// ----------------------------------------------

      function play() {
        var audio = document.getElementById("ribbon-audio");
        audio.play();
      }


  //     $button.on('click', function(event) {
  //   event.preventDefault()
  //   if(player.paused) {
  //     player.play()
  //   } else {
  //     player.pause()
  //   }
  // })
  //
  // $player.on('play', function() {
  //   $button.text('(Pause)')
  // })
  // $player.on('pause', function() {
  //   $button.text('(Play)')
  // })


  var pauseBtn = getElementById("play-pause"),
      tl = new TimelineMax();

  // tl.staggerTo(".circle", 1.5, {x:640, repeat:-1, repeatDelay:0.5, force3D:true, ease:SlowMo.ease.config(0.2, 0.5)}, 0.15)

  pauseBtn.onclick = function() {
    tl.paused(!tl.paused());
    pauseBtn.innerHTML = tl.paused() ? "PAUSE" : "PLAY";
  }


// <script>
// function play() {
//   var audio = new Audio('audio/Spomeniks stereo mix 14 Titel_v1.0.mp3);
//   audio.play();
// }
// </script>
// <button onclick-"play();">PLAY MY AUDIO</button>

// var audio = new Audio('audio/Spomeniks stereo mix 14 Titel_v1.0.mp3');
// audio.play();

// document.getElementById('audio').play();
