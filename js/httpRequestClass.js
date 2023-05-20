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
  
    postMethod(endpoint, body) {
      return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
  
        xhr.open('POST', `http://localhost:3000/${endpoint}`, body);
  
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
  }