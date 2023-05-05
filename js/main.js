import "../css/normalize.css";
import "../css/main.css";
import "../scss/style.scss";
import "../img/index";
import { httpGet } from "./httpGet"

class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <nav>
      <a><img src="img/logo.png" alt="logo"></a>
          <a>Home </a>
          <a>About </a>
          <a>Furnitures </a>
          <a>Testimonial </a>
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
