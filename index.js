let n = 0;

function changebody() {
    let backbody = document.getElementsByTagName("body")[0];

      if (n === 0) {

        backbody.style.backgroundColor = "rgb(219, 132, 51)";
        n = 1;

      } else {

        backbody.style.backgroundColor = "rgb(69, 148, 50)";
        n = 0;

      }

    

  }

  /*
const bt = document.getElementById('cambio');
bt.addEventListener('click', function() {

changebody();

});    */