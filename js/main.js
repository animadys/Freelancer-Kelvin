const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onClick = () => {
  if (nav.classList.toggle('open')) {
    
//    Меняет иконку кнопки на крестик, если класс "open" добавлен
    navBtnImg.src = "./img/icons/nav-close.svg"; 
    
    } else {
//      Меняет иконку на бургер, если класс "open" удален
    navBtnImg.src = "./img/icons/nav-open.svg";
  }
}
