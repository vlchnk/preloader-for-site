document.body.onload = function() {
    setTimeout(function() {
        var preloader = document.querySelector(".preloader");
        console.log(preloader);
        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        };
    }, 1000);
}