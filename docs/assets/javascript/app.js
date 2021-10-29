document.body.addEventListener("touchstart", function () {
    var allVideos = document.querySelectorAll('video');
    for (var i = 0; i < allVideos.length; i++) {
        allVideos[i].play();
    }
},{ once: true });