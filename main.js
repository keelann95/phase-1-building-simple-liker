// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Create a hidden modal immediately
const modal = document.createElement('div');
modal.classList.add('hidden');
modal.id = 'modal';
modal.textContent = 'Error!';
document.body.appendChild(modal);

document.addEventListener('DOMContentLoaded', () => {
  // Add event listeners to like buttons
  document.querySelectorAll('.like-glyph').forEach(glyph => {
    glyph.addEventListener('click', (e) => {
      mimicServerCall()
        .then(() => {
          if (e.target.textContent === EMPTY_HEART) {
            e.target.textContent = FULL_HEART;
            e.target.classList.add('activated-heart');
          } else {
            e.target.textContent = EMPTY_HEART;
            e.target.classList.remove('activated-heart');
          }
        })
        .catch(error => {
          const modal = document.getElementById('modal');
          modal.textContent = error;
          modal.classList.remove('hidden');
          setTimeout(() => {
            modal.classList.add('hidden');
          }, 5000);
        });
    });
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}