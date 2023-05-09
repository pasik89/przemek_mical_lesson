import "../css/normalize.css";
import "../css/main.css";
import "../scss/style.scss";
import "../img/index";
import { httpGet } from "./httpGet"
// import { httpGetBlocks } from "./httpGet"

class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <nav>
      <a><img src="img/logo.png" alt="logo"></a>
          <a>Home</a>
          <a>About</a>
          <a>Furnitures</a>
          <a>Testimonial</a>
          <a>Contact Us</a>
          <a><i class="fa-regular fa-user"></i>Login/Register</a>
          <a><i class="fa-solid fa-magnifying-glass"></i></a>
      </nav>
      `;
  }
}

customElements.define('main-header', Header);

const menuContainer = document.querySelector('.navi__menu');
const menuList = document.createElement('ul');

menuContainer.appendChild(menuList);
menuList.classList.add('navi__list');

const menuElements = await httpGet('menu');

menuElements.forEach(element => {
  const menuItemHtml = `<a class="navi__btn-link" href="#${element.url}">${element.name}</a>`
  const menuListElement = document.querySelector('.navi__list');
  const menuListItem = document.createElement('li');

  menuListElement.appendChild(menuListItem);
  menuListItem.classList.add('navi__list-element');
  menuListItem.innerHTML = menuItemHtml;
});

// blocks section

// const blocksContainer = document.querySelector('.blocks__container');
// const block = document.createElement('div');

// blocksContainer.appendChild(block);
// block.classList.add('blocks__block');

// const blocksElements = await httpGet('carousel');

// blocksElements.forEach(element => {
//   const blocksItemHtmlTitle = `<h3 class="blocks__title">${element.title}</h3>`;
//   const blocksItemHtmlImg = `<img class="blocks__image" src="${element.ImgName}">`;
//   const blocksItemHtmlContent = `<p class="blocks__content">${element.description}</p>`;
//   const blocksListElement = document.querySelector('.blocks__block');
//   const blocksItemTitle = document.createElement('h3');
//   const blocksItemImg = document.createElement('img');
//   const blocksItemContent = document.createElement('p');

//   blocksListElement.appendChild(blocksItemTitle);
//   blocksListElement.appendChild(blocksItemImg);
//   blocksListElement.appendChild(blocksItemContent);
//   blocksItemTitle.classList.add('blocks__title');
//   blocksItemImg.classList.add('blocks__image');
//   blocksItemContent.classList.add('blocks__content');
//   blocksItemTitle.innerHTML = blocksItemHtmlTitle;
//   blocksItemImg.innerHTML = blocksItemHtmlImg;
//   blocksItemContent.innerHTML = blocksItemHtmlContent;
// });

const blocksContainer = document.querySelector('.blocks__container');

const blocksElements = await httpGet('carousel');

blocksElements.forEach(element => {

  const block = document.createElement('div');
  blocksContainer.appendChild(block);
  block.classList.add('blocks__block');

  const blocksItemHtmlTitle = `<h3 class="blocks__title">${element.title}</h3>`;
  const blocksItemHtmlImg = `<img class="blocks__image" src="${element.ImgName}">`;
  const blocksItemHtmlContent = `<p class="blocks__content">${element.description}</p>`;
  const blocksListElement = document.querySelector('.blocks__block');
  const blocksItemTitle = document.createElement('h3');
  const blocksItemImg = document.createElement('img');
  const blocksItemContent = document.createElement('p');

  blocksListElement.appendChild(blocksItemTitle);
  blocksListElement.appendChild(blocksItemImg);
  blocksListElement.appendChild(blocksItemContent);
  blocksItemTitle.classList.add('blocks__title');
  blocksItemImg.classList.add('blocks__image');
  blocksItemContent.classList.add('blocks__content');
  blocksItemTitle.innerHTML = blocksItemHtmlTitle;
  blocksItemImg.innerHTML = blocksItemHtmlImg;
  blocksItemContent.innerHTML = blocksItemHtmlContent;
});