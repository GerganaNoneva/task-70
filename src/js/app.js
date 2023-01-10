import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

  let elementImg = document.createElement('div');
  elementImg.setAttribute('class','image');
  let mainElement = document.getElementsByClassName('main');
  mainElement[0].appendChild(elementImg);
  let elImg = document.createElement('img');
  elImg.setAttribute('src','./images/favicon.ico');
  elImg.setAttribute('image','');
  elementImg.appendChild(elImg);

    const img = document.querySelector('.image');
    console.log(img);
    img.addEventListener('click', ()=>{
      img.style.transform="scale(2)";
    })

});
