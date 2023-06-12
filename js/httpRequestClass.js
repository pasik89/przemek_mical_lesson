export class HttpRequestsShared {
    static getMethod(endpoint) {
      return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
  
        xhr.open('GET', `http://localhost:3000/${endpoint}`);
  
        xhr.onload = function () {
            const status = xhr.status;
  
            if (status == 200) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject(status);
            }
        };
  
        xhr.send();
      });
    }
  
    static postMethod(endpoint, body) {
      return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        // Content-Type: application/json
        xhr.open('POST', `http://localhost:3000/${endpoint}`, true);
        xhr.setRequestHeader('Content-Type', 'application/json')
  
        xhr.onload = function () {
            const status = xhr.status;
  
            if (status == 200) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject(status);
            }
        };
  
        xhr.send(body);
      });
    }

      
    static fetchMethod(endpoint, body, method) {
      return fetch(`http://localhost:3000/${endpoint}`, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body
      })
    }
  }