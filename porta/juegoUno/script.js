window.addEventListener('load', function () {

    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 720;

    class InputHandler {
        constructor() {
          this.keys = [];
          window.addEventListener ('keydown', e => {
                if ((e.key === 'ArrowDown' 
                || e.key === 'ArrowUp'
                || e.key === 'ArrowLeft'
                || e.key === 'ArrowRight'
                ) && this.keys.indexOf(e.key) === -1) {

                    this.keys.push(e.key);
                    
                }
               
                console.log(this.keys);

          });

          window.addEventListener ('keyup', e => {
            if (e.key === 'ArrowDown' 
            || e.key === 'ArrowUp'
            || e.key === 'ArrowLeft'
            || e.key === 'ArrowRight'
            ) {

                this.keys.splice(this.keys.indexOf(e.key), 1);
                
            }
            

      });


        }
      }

    class player {

    }

    class background {
        
    }

    class Enemy {

    }

    function handleEnemis () {

    }

    function displayStatusText () {

    }


    function aanimate () {


    }


    const input = new InputHandler();

});