function setTimer (duration) {
     // eslint-disable-next-line no-unused-vars
     return new Promise ((resolve, reject) => {
       setTimeout(() => {
         resolve();
       }, duration)
     }
     )}

module.exports = setTimer;