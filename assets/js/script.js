/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 

window.onload = choosePic;

var myPix = new Array("assets/az1.png","assets/bayc1.png","assets/broh1.png", "assets/cdb1.png","assets/cp1.png","assets/meeg1.png", "assets/pp1.png","assets/d8.png","assets/d9.png");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("gen-img").src = myPix[randomNum];
}

function imgchangedraw1() {

    var myImages1 = new Array();
        myImages1[1] = document.getElementById("gen-img").src;
        myImages1[2] = "assets/az1.png";
      var rnd = Math.floor(Math.random() * myImages1.length);
        if (rnd == 0) {
                rnd = 1;
        }

        document.getElementById("gen-img1").src = myImages1[rnd];
    }

    function imgchangedraw2() {

        var myImages1 = new Array();
            myImages1[1] = document.getElementById("gen-img").src;
            myImages1[2] = "assets/az1.png";
            myImages1[3] = "assets/bayc1.png";
          var rnd2 = Math.floor(Math.random() * myImages1.length);
            if (rnd2 == 0) {
                    rnd2 = 1;
            }
    
            document.getElementById("gen-img2").src = myImages1[rnd2];
        }

    function imgchangedraw3() {

        var myImages1 = new Array();
            myImages1[1] = document.getElementById("gen-img").src;
            myImages1[2] = "assets/az1.png";
            myImages1[3] = "assets/bayc1.png";
            myImages1[4] = "assets/broh1.png";
          var rnd3 = Math.floor(Math.random() * myImages1.length);
            if (rnd3 == 0) {
                    rnd3 = 1;
            }
    
            document.getElementById("gen-img3").src = myImages1[rnd3];
        }

    function imgchangedraw4() {

        var myImages1 = new Array();
            myImages1[1] = document.getElementById("gen-img").src;
            myImages1[2] = "assets/az1.png";
            myImages1[3] = "assets/bayc1.png";
            myImages1[4] = "assets/broh1.png";
            myImages1[5] = "assets/cdb1.png";
          var rnd4 = Math.floor(Math.random() * myImages1.length);
            if (rnd4 == 0) {
                    rnd4 = 1;
            }
    
            document.getElementById("gen-img4").src = myImages1[rnd4];
        }

        function imgchangedraw5() {

            var myImages1 = new Array();
                myImages1[1] = document.getElementById("gen-img").src;
                myImages1[2] = "assets/az1.png";
                myImages1[3] = "assets/bayc1.png";
                myImages1[4] = "assets/broh1.png";
                myImages1[5] = "assets/cdb1.png";
                myImages1[6] = "assets/meeg1.png";
              var rnd5 = Math.floor(Math.random() * myImages1.length);
                if (rnd5 == 0) {
                        rnd5 = 1;
                }
        
                document.getElementById("gen-img5").src = myImages1[rnd5];
            }

        function imgchangedraw6() {

            var myImages1 = new Array();
                myImages1[1] = document.getElementById("gen-img").src;
                myImages1[2] = "assets/az1.png";
                myImages1[3] = "assets/bayc1.png";
                myImages1[4] = "assets/broh1.png";
                myImages1[5] = "assets/cdb1.png";
                myImages1[6] = "assets/meeg1.png";
                myImages1[7] = "assets/pp1.png";
              var rnd6 = Math.floor(Math.random() * myImages1.length);
                if (rnd6 == 0) {
                        rnd6 = 1;
                }
        
                document.getElementById("gen-img6").src = myImages1[rnd6];
            }

        function imgchangedraw7() {

            var myImages1 = new Array();
                myImages1[1] = document.getElementById("gen-img").src;
                myImages1[2] = "assets/az1.png";
                myImages1[3] = "assets/bayc1.png";
                myImages1[4] = "assets/broh1.png";
                myImages1[5] = "assets/cdb1.png";
                myImages1[6] = "assets/meeg1.png";
                myImages1[7] = "assets/pp1.png";
                myImages1[8] = "assets/d8.png";
              var rnd7 = Math.floor(Math.random() * myImages1.length);
                if (rnd7 == 0) {
                        rnd7 = 1;
                }
        
                document.getElementById("gen-img7").src = myImages1[rnd7];
            }

    function imgchangedraw8() {

            var myImages1 = new Array();
                myImages1[1] = document.getElementById("gen-img").src;
                myImages1[2] = "assets/az1.png";
                myImages1[3] = "assets/bayc1.png";
                myImages1[4] = "assets/broh1.png";
                myImages1[5] = "assets/cdb1.png";
                myImages1[6] = "assets/meeg1.png";
                myImages1[7] = "assets/pp1.png";
                myImages1[8] = "assets/d8.png";
                myImages1[9] = "assets/d9.png";
              var rnd8 = Math.floor(Math.random() * myImages1.length);
                if (rnd8 == 0) {
                        rnd8 = 1;
                }
        
                document.getElementById("gen-img8").src = myImages1[rnd8];
            }

    function imgchangedraw9() {

            var myImages1 = new Array();
                myImages1[1] = document.getElementById("gen-img").src;
                myImages1[2] = "assets/az1.png";
                myImages1[3] = "assets/bayc1.png";
                myImages1[4] = "assets/broh1.png";
                myImages1[5] = "assets/cdb1.png";
                myImages1[6] = "assets/meeg1.png";
                myImages1[7] = "assets/pp1.png";
                myImages1[8] = "assets/d8.png";
                myImages1[9] = "assets/d9.png";
                myImages1[10] = "assets/10.png";
              var rnd9 = Math.floor(Math.random() * myImages1.length);
                if (rnd9 == 0) {
                        rnd9 = 1;
                }
        
                document.getElementById("gen-img9").src = myImages1[rnd9];
            }


/* Anybet */

function betWin()
{
const bet = document.getElementById("bet");
console.log(bet.value)

const win = document.getElementById("win");
console.log(win.value)

const oddsTotal = parseFloat(bet.value) + parseFloat(win.value);
console.log(oddsTotal)

const playerWinChance = ((parseFloat(bet.value) / oddsTotal)*1000);
console.log(playerWinChance)



const min = 1;
const max = 1150;
winningNumber = Math.round(Math.random() * (max - min) + (min));
console.log(winningNumber);

if (playerWinChance >= winningNumber) {
    outcome = "You Win";
    

  } else {
    outcome = "You Lose";
}

console.log(outcome)
}

