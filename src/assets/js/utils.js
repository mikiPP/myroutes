export  class Utils {

  setTimer = duration => {
      // eslint-disable-next-line no-unused-vars
      return new Promise ((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, duration)
      }
      )}

  setItem  = (name, value) => {
     localStorage.setItem(name,JSON.stringify(value));
  }

  removeItem = name => {
    localStorage.removeItem(name);
  }

  getItem = name => {
    return localStorage.getItem(name);
  }
}