function myFunction(x) {
    x.classList.toggle("change");
}

var opts = {
    auto : false,
    fullScreen : true,
    swipe : false
};
makeBSS('.num2', opts);

$(document).ready(function(){

  currentYear();

  function currentYear(){
    const date = new Date();
    const autoDate = document.querySelector('#autoDate');
    autoDate.textContent = date.getFullYear();
  }

  $('form').submit(function() {

      var error;

     if ( !$('input').val() ) {
          error = true
      }

      if (error) {
           alert('there are errors')
           return false
      }

  });

})
