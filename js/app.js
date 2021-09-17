let _window = $(window),
    _nav = $('.l-header'),
    headerBottom = $('.l-main-mv').height();

_window.on('scroll', function() {
  if (_window.scrollTop() > headerBottom) {
    _nav.addClass('transform');
  } else {
    _nav.removeClass('transform');
  }
});

_window.trigger('scroll');