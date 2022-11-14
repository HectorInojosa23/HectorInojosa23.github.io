let n = 0;

function changebody() {
    let backbody = document.getElementsByTagName("body")[0];

      if (n === 0) {

        backbody.style.backgroundColor = "rgb(255, 209, 157)";
        n = 1;

      } else {

        backbody.style.backgroundColor = "rgb(168, 245, 149)";
        n = 0;

      }

    

  }

  /*
const bt = document.getElementById('cambio');
bt.addEventListener('click', function() {

changebody();

});    */