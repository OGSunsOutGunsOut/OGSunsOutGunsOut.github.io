function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

function contactButtonClicked(e) {
    e.preventDefault();

    var submitMessage = document.getElementById('submitMessage');
    submitMessage.textContent = "Thanks for submitting";
    
}

function domReady() {
    var submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', contactButtonClicked);
}

ready(domReady);