// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import $ from 'jquery'

import 'select2'
import 'select2/dist/css/select2.min.css'

import 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import Swal from 'sweetalert2'
window.Swal = Swal

// Task1: select2
$(document).on("turbolinks:load", function() {
  $('.js-example-basic-single').select2();

  $(".js-example-tags").select2({
    // select2 - 搜尋選項
    tags: true,
    // select2 - 自定義tags
    tokenSeparators: [',', ' ']
  });





  // SweetAlert 完成！
  $('.btn-primary').on('click',function(e){
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure?',
      text: "You will create a product!?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Loading',
          showConfirmButton: false,
          text: '..........'
        });
        document.querySelector('form').submit();
      }
    })
  });


});



// "You will create a product!?"

import 'tempusdominus-bootstrap-4'
import 'tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.min.css'
