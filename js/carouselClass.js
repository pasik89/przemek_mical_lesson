import { HttpRequestsShared } from './httpRequestClass'

export class Carousel {
  blockElements = [];
  blockContainer = document.querySelector('.blocks__container');

  getCarouselItems() {
    this.blockElements = HttpRequestsShared.getMethod('carousel');
  }


  postCarouselItems() {
    const requestBody = JSON.stringify({
      "title": "Change wheels",
      "imgName": "thr2.png",
      "description": "nasze teksty",
      "type": "common"
    })

    return HttpRequestsShared.fetchMethod('carousel', requestBody, 'POST')
  }

  createCarouselElements() {
    this.blockElements.then((blockElements) => {
      blockElements.forEach(element => {
        this.appendItem(element)
      });
    })
  }

  appendItem(element) {
    const blocksListElement = document.createElement('div');

    const carouselElementHTML = `
                      <h3 class="blocks__title">${element.title}</h3>
                      <img class="blocks__image" src="img/${element.imgName}">
                      <p class="blocks__content">${element.description}</p>
                      `;

    this.blockContainer.appendChild(blocksListElement);
    blocksListElement.classList.add('blocks__block');

    blocksListElement.innerHTML = carouselElementHTML;
  }
}