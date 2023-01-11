//import "../scss/app.scss";



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
  elementImg.setAttribute('src','./images/favicon.ico');
  elementImg.setAttribute('image','');
  elementDiv.appendChild(elementImg);

  
 const elDiv = document.querySelector('.image');
 const elImg = document.querySelector('img');
 console.log(elImg);
 console.log(elDiv);
 /*
 img.cy.addEventListener('click', ()=>{
   elementImg.setAttribute('style','transform: scale(2);');
 })
*/

[elDiv, elImg].forEach(item => {
  item.addEventListener('click', ()=> {
    //handle click
    elDiv.setAttribute('style','transform: scale(2);');
    elImg.setAttribute('style','transform: scale(2);');
  })
})


});
