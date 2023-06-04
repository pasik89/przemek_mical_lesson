import { HttpRequestsShared } from "./httpRequestClass"

export class Applications {
    applications = [];
    applicationsForm = document.querySelector('#applicationsForm');
    applicationsContainer = document.querySelector("#applicationsContainer");

    getContactFormData() {
        const contactFormData = new FormData(this.applicationsForm);

        return Object.fromEntries(contactFormData);
    }

    getApplications() {
        this.applications = HttpRequestsShared.fetchMethod('applications', null, 'GET');
    }

    sendApplications() {
        const body = JSON.stringify(this.getContactFormData());
        console.log(body);
        return HttpRequestsShared.fetchMethod('applications', body, 'POST')
            .then((response) => {
                this.getApplications();

                return response.json();
            })
            .then((data) => {
                this.appendApplication(data);
            })
    }

    createApplications() {
        this.getApplications((applications) => {
            applications.forEach(element => {
                this.appendItem(element)
            });
        })
    }

    appendApplication(application) {
        const applicationsListElement = document.createElement('div');

        const applicationsElementHTML = `
        <div class="applications__block">
            <div class="applications__item applications__title">${application.fullName}</div>
            <div class="applications__item applications__image">${application.email}</div>
            <div class="applications__item applications__content">${application.phoneNumber}</div>
            <div class="applications__item applications__content">${application.message}</div>
        </div>`

        this.applicationsContainer.appendChild(applicationsListElement);
        applicationsListElement.classList.add('applications_block');

        applicationsListElement.innerHTML = applicationsElementHTML;
    }
}