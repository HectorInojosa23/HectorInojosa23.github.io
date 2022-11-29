let n = 0;

let nav = document.getElementById("nav__repo"); 
let navcompleto = document.getElementById("nav");                   

function repo() {
    

      if (n == 0) {

        nav.style.transition = "1.5s";
        navcompleto.style.background = "linear-gradient(to right, #18181a85, #5253537c, #09044d80)";
        nav.style.height = "232px";
        nav.style.opacity = "1";
        n = 1;

      } else {

        navcompleto.style.background = "";
        nav.style.height = "0";
        nav.style.opacity = "0";
    
        n = 0;

      } 

  }

function cerrar() {


    if (n == 1) {

        nav.style.transition = "0s";
        navcompleto.style.background = "";
        nav.style.height = "0";
        nav.style.opacity = "0";
        
      
        n = 0;

      }

}


  window.addEventListener('resize', function () {
        cerrar();
  });
  
const bt = document.getElementById('hrepo');
bt.addEventListener('click', function() {
           repo();
});    