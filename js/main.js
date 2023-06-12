import "../css/normalize.css";
import "../css/main.css";
import "../scss/style.scss";
import "../img/index";
import { httpGet } from "./httpGet"
import { Carousel } from "./carouselClass"
import { Applications } from "./applications";

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



/*
 *
 * Tworzenie i dodawanie elementów HTML na stronie
 * 
 */

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

const blocksElements = await httpGet('carousel');


/*
 *
 * Operacje na tablicach
 * 
 */



 /*
  * @decription
  * Array find() method  
  */

const singleFoundedElement = blocksElements.find((element) => element.title === "Auto Diagnose");

console.log(singleFoundedElement.title)

 /*
  * @decription
  * Array map() method
  */
const mappedBlocksElements = blocksElements.map((element) => ({ ...element, cosTam: 'aaa'}));

console.log('blocksElements:: ', blocksElements)
console.log('mappedBlocksElements:: ', mappedBlocksElements)

 /*
  * @decription
  * Array filter() method  
  */

const filteredBlocksElements = blocksElements.filter((element) => element.type === 'common');

let filterCostam = [];

for(let i = 0; i < blocksElements.length; i++) {
  if(blocksElements[i].type === 'common') {
    filterCostam.push(blocksElements[i])
  }
}

// 108 linijka to jest to samo co linijki od 110 do 116

console.log('filteredBlocksElements:: ', filteredBlocksElements)

  /*
  * @decription
  * Array reduce() method and sum array  
  */


const newArray = [1, 2, 3, 5,  67];

console.log(newArray[0] + newArray[1] + newArray[2])

let sum = 0;

newArray.forEach(element => {
  sum = sum + element;
})

console.log(sum);

const reduceSummedArray = newArray.reduce((a, b) => {
  return a + b;
}, 0)

console.log('reduceSummedArray:: ', reduceSummedArray)

const modifiedObject = blocksElements.reduce((prev, curr) => {
  const { type } = curr;

  const filterEl = (searchType) => blocksElements.filter(element => element.type === searchType) 

  return { ...prev, [type]: filterEl(type) }
}, {})

console.log(modifiedObject);





/*
 *
 * Operacje na obiektach
 * 
 */


  /*
  * @decription
  * Object assing() method  
  */

const obj1 = {
  user: 'Przemek',
  role: 'ADMIN',
}

const obj2 = {
  isAuthorized: true,
  userAge: 30
}

const userInfoObject = Object.assign(obj1, obj2);

console.log('assignedObject:: ', userInfoObject)


  /*
  * @decription
  * Object keys() method  
  */

const objectKeys = Object.keys(userInfoObject);

console.log('objectKeys:: ', objectKeys)

  /*
  * @decription
  * Object values() method  
  */

  const objectValues = Object.values(userInfoObject);

  console.log('objectValues:: ', objectValues)
  console.log('objectValues:: ', objectValues.find(el => el === 'Przemek'))
 

  
  /*
  * @decription
  * Object entries() method  
  */
  console.log('Object.entries(userInfoObject):: ', Object.entries(userInfoObject))
  for(let [key, value] of Object.entries(userInfoObject)) {
    console.log('Object.entries Key:: ', key)
    console.log('Object.entries value:: ', value)

    console.log(`To jest klucz: ${key}, a to jest wartość: ${value}`)
  }



  /*
  * @decription
  * Object create() method  
  */

  
  const test = Object.create(obj1);

  console.log('obj1:: ', obj1)
  console.log('test:: ', test)


test.test = "kacper"

// test.test2 = []

  console.log('obj1:: ', obj1)
  console.log('test:: ', test.user)
  console.log('test:: ', test.role)
  console.log('test:: ', test.test)
  console.log('test:: ', test?.test2?.map((el) => el))
  console.log('test.hasOwnProperty:: ', test.hasOwnProperty('test'))


  class User {
    friendsList = ['Adrianek', 'Przemek', 'Nikolina', 'Monika']

    constructor(name, surname) {
      this.name = name
      this.surname = surname
    }

    jakasMetoda() {
      console.log(this.friendsList);
    }

    wypiszImieINazwisko() {
      console.log('WYPISZ', this.name, this.surname)
    }
  }

  const userClassObject = new User();

console.log(userClassObject.jakasMetoda())

class Kacper extends User {
  enemies = ['Pijany Adrianek']

  constructor() {
    super('Kacper', "Pasik")
  }

  wypiszImieINazwisko() {
    console.log('WYPISZ', this.name, this.surname)
  }
}


const kacperUserClassObject = new Kacper();

console.log(kacperUserClassObject.wypiszImieINazwisko())

class Przemek extends User {
  enemies = ['Pijany Adrianek']

  constructor() {
    super('Przemek', "Lisowski")
  }

  wypiszImieINazwisko() {
    console.log('WYPISZ', this.name, this.surname)
  }
}

const przemekUserClassObject = new Przemek();

console.log(przemekUserClassObject.wypiszImieINazwisko())


class SpecificUser extends User {
  test = 'test'

  constructor(specificName, specificSurname) {
    super(specificName, specificSurname)
  }
}

const adrianUserClassObject = new SpecificUser('Adrian', 'Śliwiński');
const nikolinaUserClassObject = new SpecificUser('Nikolina', 'Śliwińska');

console.log(adrianUserClassObject.wypiszImieINazwisko())
console.log(nikolinaUserClassObject.wypiszImieINazwisko())
console.log(nikolinaUserClassObject.test)



// CAROUSEL SECTION

const carouselObj = new Carousel();

carouselObj.createCarouselElements();

const buttonPost = document.getElementById('test');

buttonPost.addEventListener('click', () => {
  carouselObj.postElement()
  .then((response) => {
    carouselObj.getCarouselItems();

    return response.json();
  })
  .then((data) => {
    carouselObj.appendItem(data);
  })
})


// APPLICATIONS SECTION

const applications = new Applications();

applications.createApplications();

applications.applicationsSubmitBtn.addEventListener('click', (event) => {
  event.preventDefault();

  applications.sendApplication().then((response) => {
    applications.getApplications();

    return response.json();
  })
  .then((data) => {
    applications.appendApplication(data);
  });
})
