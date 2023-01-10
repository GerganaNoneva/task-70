import "../scss/app.scss";



window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

  let elementDiv = document.createElement('div');
  elementDiv.setAttribute('class','image');
  let mainElement = document.getElementsByClassName('main');
  mainElement[0].appendChild(elementDiv);
  let elementImg = document.createElement('img');
  elementImg.setAttribute('src','./images/pis.webp');
  elementImg.setAttribute('image','');
  elementDiv.appendChild(elementImg);

 const img = document.querySelector('.image');
 console.log(img);
 img.addEventListener('click', ()=>{
  elementImg.setAttribute('style','transform: scale(2);');
   img.style.transform="scale(2)";
 })

 

});
