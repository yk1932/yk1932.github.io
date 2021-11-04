// Function 1: How many of the same HTML elements are on the page. (For example, if you included 10 <p> tags, 
//it should return a statement that says something like, “There are 10 paragraph tags on this page.”)


function paragraphTag() {
    document.getElementById("bottomDiv1").innerHTML = document.querySelectorAll('p').length + ' p-tags';
  }

  // Function 2: How many elements are inside your first ID

  function colorsCount() {
    document.getElementById("bottomDiv2").innerHTML = document.querySelectorAll('.color').length + ' colors';
  }

  // Function 3: How many elements are inside your second ID

  function drinksCount(){
    document.getElementById("bottomDiv3").innerHTML = document.querySelectorAll('.drink').length + ' drinks';
  }


  //Function 4: How many elements are inside your third ID

 function foodCount(){
    document.getElementById("bottomDiv4").innerHTML = document.querySelectorAll('.food').length + ' foods';
  }
