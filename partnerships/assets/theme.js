// Aevivo Clinical · shared client behaviour
(function(){
  var nav = document.getElementById('nav');
  if (nav && !nav.classList.contains('solid')) {
    window.addEventListener('scroll', function(){
      if (window.scrollY > 60) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    }, { passive: true });
  }

  document.querySelectorAll('.faq-q').forEach(function(btn){
    btn.addEventListener('click', function(){
      btn.parentElement.classList.toggle('open');
    });
  });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
  }
})();
