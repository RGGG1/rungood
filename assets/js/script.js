window.onload = choosePic;

var myPix = new Array("assets/1.png","assets/2.png","assets/3.png", "assets/4.png","assets/5.png","assets/6.png", "assets/7.png","assets/8.png","assets/9.png");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("gen-img").src = myPix[randomNum];

}


    function imgchangedraw() {

        var myImages1 = new Array();
            myImages1[1] = "assets/1.png";
            myImages1[2] = "assets/2.png";
            myImages1[3] = "assets/3.png";
            myImages1[4] = "assets/4.png";
            myImages1[5] = "assets/5.png";
            myImages1[2] = "assets/6.png";
            myImages1[3] = "assets/7.png";
            myImages1[4] = "assets/8.png";
            myImages1[5] = "assets/9.png";
            myImages1[5] = "assets/10.png";
          var rnd = Math.floor(Math.random() * myImages1.length);
            if (rnd == 0) {
                    rnd = 1;
            }

        var rnd2 = Math.floor(Math.random() * myImages1.length);
            if (rnd2 == 0) {
                    rnd2 = 1;
            }

            var rnd3 = Math.floor(Math.random() * myImages1.length);
            if (rnd3 == 0) {
                    rnd3 = 1;
            }
        
        var rnd4 = Math.floor(Math.random() * myImages1.length);
            if (rnd4 == 0) {
                    rnd4 = 1;
            }

            var rnd5 = Math.floor(Math.random() * myImages1.length);
            if (rnd5 == 0) {
                    rnd5 = 1;
            }
            
            var rnd6 = Math.floor(Math.random() * myImages1.length);
            if (rnd6 == 0) {
                    rnd6 = 1;
            }

            var rnd7 = Math.floor(Math.random() * myImages1.length);
            if (rnd7 == 0) {
                    rnd7 = 1;
            }

            var rnd8 = Math.floor(Math.random() * myImages1.length);
            if (rnd8 == 0) {
                    rnd8 = 1;
            }

            var rnd9 = Math.floor(Math.random() * myImages1.length);
            if (rnd9 == 0) {
                    rnd9 = 1;
            }

                 
            document.getElementById("gen-img1").src = myImages1[rnd];
            document.getElementById("gen-img2").src = myImages1[rnd2];
            document.getElementById("gen-img3").src = myImages1[rnd3];
            document.getElementById("gen-img4").src = myImages1[rnd4];
            document.getElementById("gen-img5").src = myImages1[rnd5];
            document.getElementById("gen-img6").src = myImages1[rnd6];
            document.getElementById("gen-img7").src = myImages1[rnd7];
            document.getElementById("gen-img8").src = myImages1[rnd8];
            document.getElementById("gen-img9").src = myImages1[rnd9];
            }