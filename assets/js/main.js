(function(){
  var header=document.querySelector('.site-header');
  var onScroll=function(){header.classList.toggle('scrolled',window.scrollY>10)};
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();

  var toggle=document.querySelector('.menu-toggle'),nav=document.getElementById('site-nav');
  toggle.addEventListener('click',function(){
    var open=toggle.getAttribute('aria-expanded')==='true';
    toggle.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open);
  });
  nav.querySelectorAll('ul a').forEach(function(a){a.addEventListener('click',function(){
    toggle.setAttribute('aria-expanded','false');nav.classList.remove('open');});});

  // Light up process steps as they scroll into view
  var steps=document.querySelectorAll('.steps li');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target);}});
    },{rootMargin:'0px 0px -25% 0px'});
    steps.forEach(function(s){io.observe(s)});
  }else{steps.forEach(function(s){s.classList.add('on')});}
})();

// Analytics: count clicks on the Microsoft Forms links (only if Google Analytics is installed)
(function(){
  document.addEventListener('click',function(e){
    var a=e.target.closest('a[href*="forms.cloud.microsoft"]');
    if(!a||typeof window.gtag!=='function')return;
    var type=a.href.indexOf('/r/VK1JnLX5KL')>-1?'landlord':'renter';
    window.gtag('event','generate_lead',{form_type:type,page_language:document.documentElement.lang});
  });
})();
