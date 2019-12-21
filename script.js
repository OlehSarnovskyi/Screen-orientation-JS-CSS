//                                                          First solution
// if (window.innerWidth > window.innerHeight) {
//     alert("Please use Landscape!");
// }

//                                                          Second solution
// if (window.matchMedia("(orientation: portrait)").matches) {
//     // you're in PORTRAIT mode
//     console.log('portrait');
// }
// if (window.matchMedia("(orientation: landscape)").matches) {
//     // you're in LANDSCAPE mode
//     console.log('landscape');
// }

//                                                          Third solution
// // Listen for orientation changes
// window.addEventListener("orientationchange", function () {
//     // Announce the new orientation number
//     alert(window.orientation);
// }, false);