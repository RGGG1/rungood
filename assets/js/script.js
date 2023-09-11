window.onload = choosePic;

var myPix = new Array("assets/d1.png","assets/d2.png","assets/d3.png", "assets/d4.png","assets/d5.png","assets/d6.png", "assets/d7.png","assets/d8.png","assets/d9.png");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("gen-img").src = myPix[randomNum];
}

function imgchangedraw1() {

    var myImages1 = new Array();
        myImages1[1] = document.getElementById("gen-img").src;
        myImages1[2] = "assets/d2.png";
      var rnd = Math.floor(Math.random() * myImages1.length);
        if (rnd == 0) {
                rnd = 1;
        }

        document.getElementById("gen-img1").src = myImages1[rnd];
    }

    function imgchangedraw2() {

        var myImages1 = new Array();
            myImages1[1] = document.getElementById("gen-img").src;
            myImages1[2] = "assets/d2.png";
            myImages1[3] = "assets/d3.png";
          var rnd2 = Math.floor(Math.random() * myImages1.length);
            if (rnd2 == 0) {
                    rnd2 = 1;
            }
    
            document.getElementById("gen-img2").src = myImages1[rnd2];
        }

    function imgchangedraw3() {

        var myImages1 = new Array();
            myImages1[1] = document.getElementById("gen-img").src;
            myImages1[2] = "assets/d2.png";
            myImages1[3] = "assets/d3.png";
            myImages1[4] = "assets/d4.png";
          var rnd3 = Math.floor(Math.random() * myImages1.length);
            if (rnd3 == 0) {
                    rnd3 = 1;
            }
    
            document.getElementById("gen-img3").src = myImages1[rnd3];
        }

    function imgchangedraw4() {

        var myImages1 = new Array();
            myImages1[1] = document.getElementById("gen-img").src;
            myImages1[2] = "assets/d2.png";
            myImages1[3] = "assets/d3.png";
            myImages1[4] = "assets/d4.png";
            myImages1[5] = "assets/d5.png";
          var rnd4 = Math.floor(Math.random() * myImages1.length);
            if (rnd4 == 0) {
                    rnd4 = 1;
            }
    
            document.getElementById("gen-img4").src = myImages1[rnd4];
        }

        function imgchangedraw5() {

            var myImages1 = new Array();
                myImages1[1] = document.getElementById("gen-img").src;
                myImages1[2] = "assets/d2.png";
                myImages1[3] = "assets/d3.png";
                myImages1[4] = "assets/d4.png";
                myImages1[5] = "assets/d5.png";
                myImages1[6] = "assets/d6.png";
              var rnd5 = Math.floor(Math.random() * myImages1.length);
                if (rnd5 == 0) {
                        rnd5 = 1;
                }
        
                document.getElementById("gen-img5").src = myImages1[rnd5];
            }

        function imgchangedraw6() {

            var myImages1 = new Array();
                myImages1[1] = document.getElementById("gen-img").src;
                myImages1[2] = "assets/d2.png";
                myImages1[3] = "assets/d3.png";
                myImages1[4] = "assets/d4.png";
                myImages1[5] = "assets/d5.png";
                myImages1[6] = "assets/d6.png";
                myImages1[7] = "assets/d7.png";
              var rnd6 = Math.floor(Math.random() * myImages1.length);
                if (rnd6 == 0) {
                        rnd6 = 1;
                }
        
                document.getElementById("gen-img6").src = myImages1[rnd6];
            }

        function imgchangedraw7() {

            var myImages1 = new Array();
                myImages1[1] = document.getElementById("gen-img").src;
                myImages1[2] = "assets/d2.png";
                myImages1[3] = "assets/d3.png";
                myImages1[4] = "assets/d4.png";
                myImages1[5] = "assets/d5.png";
                myImages1[6] = "assets/d6.png";
                myImages1[7] = "assets/d7.png";
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
                myImages1[2] = "assets/d2.png";
                myImages1[3] = "assets/d3.png";
                myImages1[4] = "assets/d4.png";
                myImages1[5] = "assets/d5.png";
                myImages1[6] = "assets/d6.png";
                myImages1[7] = "assets/d7.png";
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
                myImages1[2] = "assets/d2.png";
                myImages1[3] = "assets/d3.png";
                myImages1[4] = "assets/d4.png";
                myImages1[5] = "assets/d5.png";
                myImages1[6] = "assets/d6.png";
                myImages1[7] = "assets/d7.png";
                myImages1[8] = "assets/d8.png";
                myImages1[9] = "assets/d9.png";
                myImages1[10] = "assets/d1.png";
              var rnd9 = Math.floor(Math.random() * myImages1.length);
                if (rnd9 == 0) {
                        rnd9 = 1;
                }
        
                document.getElementById("gen-img9").src = myImages1[rnd9];
            }


