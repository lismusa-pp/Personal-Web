document.addEventListener("DOMContentLoaded", function() {
    console.log("Faqja u ngarkua me sukses!");
  });

  document.getElementById('darkModeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
  });
  
  // Fade-in on scroll
$(window).on('scroll', function () {
  $('section').each(function () {
    const top = $(this).offset().top - 100;
    if ($(window).scrollTop() > top) {
      $(this).css('opacity', 1).css('transform', 'translateY(0)');
    }
  });
});
