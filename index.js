/*let n = 0;

function changebody() {
    let backbody = document.getElementsByTagName("body")[0];

      if (n === 0) {

        backbody.style.backgroundColor = "rgb(219, 132, 51)";
        n = 1;

      } else {

        backbody.style.backgroundColor = "rgb(159, 233, 130)";
        n = 0;

      }

    

  }*/

  /*
const bt = document.getElementById('cambio');
bt.addEventListener('click', function() {

changebody();

});    */



window.addEventListener ('load', () => {

/*
  let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; 
  console.log(timeZone);


  const d = new Date();
  let hour = d.getHours();*/


  const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
          
          entry.target.classList.add('show');
        } 
    
    });
  
  
  });
  
  
  const hiddenElement = document.querySelectorAll('.hidden');
  hiddenElement.forEach((el) => observer.observe(el));



});