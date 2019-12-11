// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import bulmaQuickview from 'bulma-quickview/src/js'

document.addEventListener("turbolinks:load", function() {
  let quickview = bulmaQuickview.attach();

  const filesInput = document.querySelectorAll("input[type='file'].file-input");
  filesInput.forEach(input => {
    input.onchange = () => {
      if (input.files.length > 0) {
        const fileName = input.parentNode.querySelector('.file-name');
        fileName.textContent = input.files[0].name;
      }
    }
  })
});
