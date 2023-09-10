function imgchange() {

    var myImages1 = new Array();
        myImages1[1] = "assets/blue.png";
        myImages1[2] = "assets/pink.png";
        myImages1[3] = "assets/red.png";
        myImages1[4] = "assets/orange.png";
        myImages1[5] = "assets/green.png";
      var rnd = Math.floor(Math.random() * myImages1.length);
        if (rnd == 0) {
                rnd = 1;
        }
    
      document.getElementById("gen-img").src = myImages1[rnd];
    
    }