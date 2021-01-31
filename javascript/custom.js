AOS.init();

function smoothTo(section) {
  document.querySelector(section).scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('scroll', function() {
  activeMenuLinkBasedOnSection('#contactLink', '#contactSection');
  activeMenuLinkBasedOnSection('#aboutLink', '#aboutSection');
  activeMenuLinkBasedOnSection('#profileLink', '#profileSection');
});

function activeMenuLinkBasedOnSection(linkId, sectionId) {
  var section = document.querySelector(sectionId).getBoundingClientRect();
  
  if(section.top >= 0 && section.bottom <= window.innerHeight ||
    section.top < window.innerHeight && section.bottom >= 0) {
    $(".menu-link").removeClass('text-secondary').addClass('text-white');
    $(linkId).addClass('text-secondary');
  }
}

$('.count').each(function () {
  var $this = $(this);
  jQuery({ Counter: 0 }).animate({ Counter: $this.attr('data-stop') }, {
    duration: 8000,
    easing: 'swing',
    step: function (now) {
      $this.text(Math.ceil(now));
    }
  });
});