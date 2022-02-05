window.addEventListener('load',function(){

    // Variables Declared
    let colorOne = document.getElementById('color-one');
    let colorTwo = document.getElementById('color-two');
    let colorThree = document.getElementById('color-three');
    let createButton = document.getElementById('create-button');
    let linear = document.getElementById('linear-button');
    let radial = document.getElementById('radial-button');

    // To check which gradient is activated
    let gradientType = false;

    // Color One Input

    colorOne.addEventListener('change', function(e) {
        console.log(e.target.value);

        if (gradientType == true){
            document.body.style.background = 
            "linear-gradient(to bottom, " 
            + colorOne.value 
            + ", " 
            + colorTwo.value 
            + ", " 
            + colorThree.value 
            + ")";
        }
        else {
            document.body.style.background = 
            "radial-gradient(circle, " 
            + colorOne.value 
            + ", " 
            + colorTwo.value 
            + ", " 
            + colorThree.value 
            + ")";
        }
        
    })

    // Color Two Input

    colorTwo.addEventListener('change', function(e) {
        console.log(e.target.value);

        if (gradientType == true){
            document.body.style.background = 
            "linear-gradient(to bottom, " 
            + colorOne.value 
            + ", " 
            + colorTwo.value 
            + ", " 
            + colorThree.value 
            + ")";
        }
        else {
            document.body.style.background = 
            "radial-gradient(circle, " 
            + colorOne.value 
            + ", " 
            + colorTwo.value 
            + ", " 
            + colorThree.value 
            + ")";
        }
    })

    // Color Three Input

    colorThree.addEventListener('change', function(e) {
        console.log(e.target.value);

        if (gradientType == true){
            document.body.style.background = 
            "linear-gradient(to bottom, " 
            + colorOne.value 
            + ", " 
            + colorTwo.value 
            + ", " 
            + colorThree.value 
            + ")";
        }
        else {
            document.body.style.background = 
            "radial-gradient(circle, " 
            + colorOne.value 
            + ", " 
            + colorTwo.value 
            + ", " 
            + colorThree.value 
            + ")";
        }
    })

    //Linear Button

    linear.addEventListener('click', function(){
        console.log("clicked!")
        gradientType = true;

        document.body.style.background = 
        "linear-gradient(to bottom, " 
        + colorOne.value 
        + ", " 
        + colorTwo.value 
        + ", " 
        + colorThree.value 
        + ")";
    })

    //Radial Button

    radial.addEventListener('click', function(){
        console.log("clicked!")
        gradientType = false;

        document.body.style.background = 
        "radial-gradient(circle, " 
        + colorOne.value 
        + ", " 
        + colorTwo.value 
        + ", " 
        + colorThree.value 
        + ")";
    })

});



