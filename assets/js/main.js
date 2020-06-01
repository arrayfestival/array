$(function () {
  // This is here to make sure that hover state in .card--avatar actually triggers!
  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  var userAgent = navigator.userAgent || navigator.vendor || window.opera
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    $(document).on('touchend', function (e) {
    })
  }

  // Animate in the main logo, then the intro cards, then the dates, then everything else after a random delay
  gsap.to('.logo-main', {duration: 1.5, opacity: 1, delay: .5})
  var $introCards = $('.card--type-1')
  $introCards.each(function (index, elem) {
    gsap.to(elem, {duration: .5, opacity: 1, delay: (index / 4) + 1})
  })
  var $timeCards = $('.card--time')
  $timeCards.each(function (index, elem) {
    gsap.to(elem, {duration: .5, opacity: 1, delay: index + 2})
  })
  var $remainingCards = $('.card:not(.card--type-1):not(.card--time), .logo, .artist-image')
  $remainingCards.each(function (index, elem) {
    var delay = 2.5 + (Math.random() * 3)
    var direction = Math.floor(Math.random() * 4)
    var sign = ''
    if (direction === 1 || direction === 2) {
      sign = '-'
    }
    if (direction === 2 || direction === 3) {
      gsap.from(elem, {duration: 1, x: sign + '30', delay: delay})
    } else {
      gsap.from(elem, {duration: 1, y: sign + '30', delay: delay})
    }
    gsap.to(elem, {duration: 1, opacity: 1, delay: delay})
  })
})
