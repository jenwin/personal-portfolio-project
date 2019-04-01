
$(document).ready(() => {
  function scrollToAnchor(anchor) {
    const $navAnchor = $("section[data-name='"+ anchor +"']");
    const $position = $navAnchor.offset().top;
    $('html,body').animate({
      scrollTop: $position
    }, 'slow');
  };

  $('.nav-link').on('click', function() {
    scrollToAnchor(this.id);
  });
});