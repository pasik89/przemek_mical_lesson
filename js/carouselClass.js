import { HttpRequestsShared } from './httpRequestClass'

export class Carousel {
    blockElements = [];
    blockContainer = document.querySelector('.blocks__container');
  
    getCarouselItems() {
      this.blockElements = HttpRequestsShared.getMethod('carousel');
    }
  
    postElement() {
      const requestBody = JSON.stringify({
        title: "AAA",
        imgName: "thr1.png",
        description: "sadfsdagsdfgfsdgf.",
        type: "innyTyp"
      })

      return HttpRequestsShared.fetchMethod(
        'carousel',
        requestBody,
        'POST'
      )
    }

    createCarouselElements() {
      this.getCarouselItems();

      this.blockElements.then((blockElements) => {
        blockElements.forEach(element => {
          this.appendItem(element);
        });
      })
    }

    appendItem(element) {
      const blocksListElement = document.createElement('div');
  
      const carouselElementHTML = `
      <div class="blocks__block">
                      <h3 class="blocks__title">${element.title}</h3>
                      <img class="blocks__image" src="img/${element.imgName}">
                      <p class="blocks__content">${element.description}</p>
                      </div>`

      this.blockContainer.appendChild(blocksListElement);
      blocksListElement.classList.add('blocks__block');

      blocksListElement.innerHTML = carouselElementHTML;
    }
  }