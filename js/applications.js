import { HttpRequestsShared } from './httpRequestClass'

export class Applications {
    applicationForm = document.querySelector('#applicationForm');
    applicationsContainer = document.querySelector('.applications__container');
    applicationsSubmitBtn = document.querySelector('.contact__button');

    getContactFormData() {
      const contactFormData = new FormData(this.applicationForm); 

      return Object.fromEntries(contactFormData);
    }

    getApplications() {
      return HttpRequestsShared.fetchMethod('applications', null, 'GET');
    }

    sendApplication() {
      const body = JSON.stringify(this.getContactFormData());

      return HttpRequestsShared.fetchMethod('applications', body, 'POST')
    }

    createApplications() {
      this.getApplications().then((res) => {
        return res.json()
      })
      .then((applications) => {
        applications.forEach(element => {
          this.appendApplication(element);
        });
      })
    }

    appendApplication(application) {
      const applicationsListElement = document.createElement('div');
  
      const applicationElementHTML = `
          <div class="applications__item applications__title">${application.fullName}</div>
          <div class="applications__item applications__image">${application.email}</div>
          <div class="applications__item applications__content">${application.phoneNumber}</div>
          <div class="applications__item applications__content">${application.message}</div>
      `

      this.applicationsContainer.appendChild(applicationsListElement);
      applicationsListElement.classList.add('applications__block');

      applicationsListElement.innerHTML = applicationElementHTML;
    }
  }