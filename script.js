let item = document.querySelector('.icon-hamburger');
item.addEventListener("click", function() {
      document.body.classList.toggle('menu-open');
});


let items = document.querySelectorAll('.header__menu a');



items.forEach((item) => {
  item.addEventListener("click", function() {

    items.forEach((item) => {
      item.classList.add('underline');
    });
  });
});



let img_parallax = document.querySelectorAll('.img-parallax');

window.addEventListener('scroll', function() {
  let win_pos = window.pageXOffset;

  img_parallax.forEach((item) => { /* posizionamento win pos della finestra */
    let element_move = item.getBoundingClientRect(); /* posizionamento degli elementi */

    if(win_pos > element_move.top ){

      item.style.transform = "translateY(" + element_move.top * -1 * 0.3 + "px)";
    }

    });
  });

