$(function() {
   $('.scroll-down').click (function() {
     $('html, body').animate({scrollTop: $('#mo').offset().top }, 'slow');
     return false;
   });
 });


 $(".requirepass").on("keyup", function () {
     if($(this).val()==''){
     $('.rounded-circle').css({background:'rgba(50, 50, 50, 0.9)'});
     $('.rounded-circle').css({border:'1px solid black'});
     $('.service-icon').css({color:'rgba(50, 50, 50, 0.2) !important'});
   }
 else{
   $('.rounded-circle').css({background:'rgba(250, 250, 250, 0.8)'});
   $('.rounded-circle').css({border:'1.4px solid white'});
   $('.service-icon').css({color:'rgba(0, 0, 0, 1.0) !important'});
   }

 });

 // background-color: rgba(0,0,0,0.0);
 // color: rgba(0, 0, 0, 1.0);
 // border:2px solid white;
 // height: 6rem;
 // width: 8rem;
 // display: block;
 // line-height: 5.8rem;
 // font-size: 2.5rem;

 $(".input").on("keyup", function () {
     if($(this).val()==''){
     $('.rounded-box').css({border:'2px solid rgba(250, 250, 250, 0.3)'});
     $('.rounded-box').css({color:'rgba(250, 250, 250, 0.3)'});
   }
 else{
   $('.rounded-box').css({border:'2px solid white'});
   $('.rounded-box').css({color:'white'});
   }

 });


 var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 50 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #fff }";
  document.body.appendChild(css);
};
