"use strict";

const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows());
   }
};

if (isMobile.any()) {
   document.body.classList.add('_touch');

   let menuArrows = document.querySelectorAll('.menu__arrow');
   if (menuArrows.length > 0){
      for (let index = 0; index < menuArrows.length; index++) {
         const menuArrow = menuArrows[index];
         menuArrow.addEventListener('click', function(e) {
            menuArrow.parentElement.classList.toggle('_active');
         });
      }
   }

   
} else {
   document.body.classList.add('_pc');
}

const burger = document.querySelector('.menu__icon');
if (burger) {
   const menuBody = document.querySelector('.menu__body');
   burger.addEventListener('click', function(e){
   document.body.classList.toggle('_lock');
   burger.classList.toggle('_active');
   menuBody.classList.toggle('_active');
   });
}

const scr = document.querySelectorAll('.menu__link[data-go-to]');
if (scr.length > 0) {
   scr.forEach(scr => {
      scr.addEventListener('click', scroll);
   });

   function scroll(e) {
      const scrL = e.target;
      if (scrL.dataset.goTo && document.querySelector(scrL.dataset.goTo)) {
         const goToBlock = document.querySelector(scrL.dataset.goTo);
         const goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

         window.scrollTo({
            top: goToBlockValue,
            behavior: 'smooth',
         })
         e.preventDefault();
      }
   }
}
