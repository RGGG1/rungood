function imgchange() {

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
    
      document.getElementById("gen-img").src = myImages1[rnd];
    
    }