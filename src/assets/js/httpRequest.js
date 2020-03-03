

  function makeHttpRequest(url, method, data) {

    return fetch(url , {
        method: method,
        body: data
    }).then(response => {
        return response.json();
    })
}

module.exports =  makeHttpRequest;
