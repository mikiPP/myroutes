

  function makeHttpRequest(url, method, body, headers) {

    return fetch(url , {
        method: method,
        body,
        headers
    }).then(response => {
        if(200 <= response.status < 300) {
            return response.json();
        } else {
          return response.json().then( error => {
                 console.log(error);
                 throw new Error("Something went wrong.... SERVER");
             });
        }
    }).catch( err => {
        console.log(err);
        throw new Error("Something went wrong....");
    })
}

module.exports =  makeHttpRequest;
