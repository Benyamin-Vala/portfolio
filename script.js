var btn_dark = document.getElementById('DarkBTN');
var texts = document.getElementsByClassName('Text');
var dark = '#282a36';
var clicked = false;
var btn_content = document.getElementById('btn-content');
var classdisabaling = document.getElementById('navbarSupportedContent');
var clicked2 = false;

btn_content.addEventListener('click', function onClick() {
  if (clicked2 == false) {
    clicked2 = true;
    classdisabaling.style.display = 'none';
  } else {
    clicked2 = false;
    classdisabaling.style.display = 'block';
  }
});

btn_dark.addEventListener('click', function onClick() {
  if (clicked == false) {
    clicked = true;
    document.body.style.backgroundColor = '#282a36';
    for (var i = 0; i < texts.length; i++) {
      texts[i].style.color = '#fff';
    }
  } else {
    clicked = false;
    document.body.style.backgroundColor = '#fff';

    for (var i = 0; i < texts.length; i++) {
      texts[i].style.color = '#000';
    }
  }
});
