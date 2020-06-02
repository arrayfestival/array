$(function () {
  // This is here to make sure that hover state in .card--avatar actually triggers!
  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  var userAgent = navigator.userAgent || navigator.vendor || window.opera
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    $(document).on('touchend', function (e) {
    })
  }

  // Animate in the main logo, then the intro cards, then the dates,
  // then main colour cards, then main background.
  // Finally animate out type 7 grey cards to reveal more of the background
  if ($('html').hasClass('js')) {
    gsap.to('.logo-main', {duration: 1.5, opacity: 1, delay: .5})
    var $introCards = $('.card--type-1')
    $introCards.each(function (index, elem) {
      gsap.to(elem, {duration: .5, opacity: 1, delay: (index / 4) + 1.5})
    })
    var $timeCards = $('.card--time')
    $timeCards.each(function (index, elem) {
      gsap.to(elem, {duration: .5, opacity: 1, delay: index + 2.5})
    })
    var $remainingCards = $('.card:not(.card--type-1):not(.card--type-6):not(.card--type-7):not(.card--time), .logo, .artist-image')
    $remainingCards.each(function (index, elem) {
      var delay = 3 + (Math.random() * 2)
      gsap.to(elem, {duration: 1, opacity: 1, delay: delay})
    })
    gsap.to($('.container-background'), {duration: .5, opacity: 1, delay: 6})
    var gapCards = $('.card--type-7')
    gapCards.each(function (index, elem) {
      var delay = 6 + (Math.random() * 2)
      gsap.to(elem, {duration: .5, opacity: 0, delay: delay})
    })
  }
})
