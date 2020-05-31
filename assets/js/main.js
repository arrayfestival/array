$(function () {
  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  var userAgent = navigator.userAgent || navigator.vendor || window.opera
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    // This is here to make sure that hover state in .card--avatar actually triggers!
    $(document).on('touchend', function (e) {
    })
  }
})
