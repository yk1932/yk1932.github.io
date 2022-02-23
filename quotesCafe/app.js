var home = document.getElementById('home');
var svgOne = document.getElementById('svgOne');
var svgTwo = document.getElementById('svgTwo');
var svgThree = document.getElementById('svgThree');
var svgFour = document.getElementById('svgFour');

var homeButton = document.getElementById('homeButton');
var svgTwoFloor = document.getElementById('svgTwoFloor');
var svgThreeFloor = document.getElementById('svgTwoFloor');
var welcomeBookOne = document.getElementById('welcomeBookOne');
var welcomeBookTwo = document.getElementById('welcomeBookTwo');
var click = document.getElementById("click");
var knock = document.getElementById("knock");
var openDoor = document.getElementById("openDoor");
var closeBook = document.getElementById("closeBook");
var openBook = document.getElementById("openBook");





//Interaction 1: Click on door to enter cafe

home.addEventListener("mouseover", () =>{
home.style.fill = '#433D37';
knock.play();
});

home.addEventListener("mouseout", () =>{
home.style.fill = '#6C6259';
});

home.addEventListener("click", () =>{
svgOne.style.display = 'none';
svgTwo.style.display = 'unset';
document.getElementById("player").play();
openDoor.play();
});

//Interaction 2: Click on floor to go back to home

svgTwoFloor.addEventListener("mouseover", () =>{
    svgTwoFloor.style.fill = 'white';
  });

svgTwoFloor.addEventListener("mouseout", () =>{
svgTwoFloor.style.fill = '#F1ECE7';
});

svgTwoFloor.addEventListener("click", () =>{
svgTwo.style.display = 'none';
svgOne.style.display = 'unset';
});

//Interaction 3: Click on welcome book to browse

welcomeBookOne.addEventListener("mouseover", () =>{
    welcomeBookOne.style.fill = '#B8C7C7';
    welcomeBookTwo.style.fill = '#B8C7C7';

  });

welcomeBookOne.addEventListener("mouseout", () =>{
    welcomeBookOne.style.fill = '#77B9B9';
    welcomeBookTwo.style.fill = '#77B9B9';
});

welcomeBookOne.addEventListener("click", () =>{
    svgTwo.style.display = 'none';
    svgThree.style.display = 'unset';
    openBook.play();
});

welcomeBookTwo.addEventListener("mouseover", () =>{
    welcomeBookOne.style.fill = '#B8C7C7';
    welcomeBookTwo.style.fill = '#B8C7C7';
  });

welcomeBookTwo.addEventListener("mouseout", () =>{
    welcomeBookOne.style.fill = '#77B9B9';
    welcomeBookTwo.style.fill = '#77B9B9';
});

welcomeBookTwo.addEventListener("click", () =>{
    svgTwo.style.display = 'none';
    svgThree.style.display = 'unset';
    openBook.play()
});

//Interaction 4: Back button on svg three leads user back to cafe

var svgThreeBackButton = document.getElementById('svgThreeBackButton');

svgThreeBackButton.addEventListener("mouseover", () =>{
    svgThreeBackButton.style.fill = 'beige';
  });

svgThreeBackButton.addEventListener("mouseout", () =>{
    svgThreeBackButton.style.fill = '#FCFAF4';
});

svgThreeBackButton.addEventListener("click", () =>{
    svgTwo.style.display = 'unset';
    svgThree.style.display = 'none';
    closeBook.play()
});

//Interaction 5: Click on any of the books on bookshelve opens svgFour

var bookCover = document.getElementById("bookCover");
var books = document.getElementsByClassName("books");
var bookOne = document.getElementById("bookOne");
var bookTwo = document.getElementById("bookTwo");
var bookThree = document.getElementById("bookThree");
var bookFour = document.getElementById("bookFour");
var bookFive = document.getElementById("bookFive");
var bookSix = document.getElementById("bookSix");
var bookSeven = document.getElementById("bookSeven");
var bookEight = document.getElementById("bookEight");

//book one

bookOne.addEventListener("mouseover", () =>{
    bookOne.style.fill="white";
    });
    
bookOne.addEventListener("mouseout", () =>{
    bookOne.style.fill="#EF9262";
    });

bookOne.addEventListener("click", () =>{
    displayPoem();
    svgFour.style.display = 'unset';
    svgTwo.style.display = 'none';
    bookCover.style.fill = "#EF9262";
    openBook.play();
    });

//book two

bookTwo.addEventListener("mouseover", () =>{
    bookTwo.style.fill="white";
    });
    
bookTwo.addEventListener("mouseout", () =>{
    bookTwo.style.fill="#FFD87E";
    });
    
bookTwo.addEventListener("click", () =>{
    displayPoem();
    svgFour.style.display = 'unset';
    svgTwo.style.display = 'none';
    bookCover.style.fill = "#FFD87E";
    openBook.play();
    });

//book three

bookThree.addEventListener("mouseover", () =>{
    bookThree.style.fill="white";
    });
    
bookThree.addEventListener("mouseout", () =>{
    bookThree.style.fill="#CAB177";
    });
    
bookThree.addEventListener("click", () =>{
    displayPoem();
    svgFour.style.display = 'unset';
    svgTwo.style.display = 'none';
    bookCover.style.fill = "#CAB177";
    openBook.play();
    });

//book four

bookFour.addEventListener("mouseover", () =>{
    bookFour.style.fill="white";
    });
    
bookFour.addEventListener("mouseout", () =>{
    bookFour.style.fill="#B198C3";
    });
    
bookFour.addEventListener("click", () =>{
    displayPoem();
    svgFour.style.display = 'unset';
    svgTwo.style.display = 'none';
    bookCover.style.fill = "#B198C3";
    openBook.play();
    });

//book five

bookFive.addEventListener("mouseover", () =>{
    bookFive.style.fill="white";
    });
    
bookFive.addEventListener("mouseout", () =>{
    bookFive.style.fill="#E89FCB";
    });
    
bookFive.addEventListener("click", () =>{
    displayPoem();
    svgFour.style.display = 'unset';
    svgTwo.style.display = 'none';
    bookCover.style.fill = "#E89FCB";
    openBook.play();
    });

//book six

bookSix.addEventListener("mouseover", () =>{
    bookSix.style.fill="white";
    });
    
bookSix.addEventListener("mouseout", () =>{
    bookSix.style.fill="#BF8484";
    });
    
bookSix.addEventListener("click", () =>{
    displayPoem();
    svgFour.style.display = 'unset';
    svgTwo.style.display = 'none';
    bookCover.style.fill = "#BF8484";
    openBook.play();
    });


//book seven

bookSeven.addEventListener("mouseover", () =>{
    bookSeven.style.fill="white";
    });
    
bookSeven.addEventListener("mouseout", () =>{
    bookSeven.style.fill="#BF8484";
    });
    
bookSeven.addEventListener("click", () =>{
    displayPoem();
    svgFour.style.display = 'unset';
    svgTwo.style.display = 'none';
    bookCover.style.fill = "#BF8484";
    openBook.play();
    });
    
//book eight

bookEight.addEventListener("mouseover", () =>{
    bookEight.style.fill="white";
    });
    
bookEight.addEventListener("mouseout", () =>{
    bookEight.style.fill="#7B80EE";
    });
    
bookEight.addEventListener("click", () =>{
    displayPoem();
    svgFour.style.display = 'unset';
    svgTwo.style.display = 'none';
    bookCover.style.fill = "#7B80EE";
    openBook.play();
    });

//Back Button
var bookBackButton = document.getElementById("bookBackButton");

bookBackButton.addEventListener("mouseover", () =>{
    bookBackButton.style.fill="beige";
    });
    
bookBackButton.addEventListener("mouseout", () =>{
    bookBackButton.style.fill="white";
    });

bookBackButton.addEventListener("click", () =>{
    svgFour.style.display = 'none';
    svgTwo.style.display = 'unset';
    closeBook.play()
    });

//API Fetch - Poem title and content

var poemTitle = document.getElementById('poemTitle');
var poemAuthor = document.getElementById('poemAuthor');
var poemContent = document.getElementById('poemContent');
var poemContentTwo = document.getElementById('poemContentTwo');
var poemContentThree = document.getElementById('poemContentThree');
var poemContentFour = document.getElementById('poemContentFour');
var poemContentFive = document.getElementById('poemContentFive');
var poemContentSix = document.getElementById('poemContentSix');
var poemContentSeven = document.getElementById('poemContentSeven');
var poemContentEight = document.getElementById('poemContentEight');
var poemContentNine = document.getElementById('poemContentNine');
var poemContentTen = document.getElementById('poemContentTen');



function displayPoem() {
    //Empty the content before displaying poem
    poemTitle.innerHTML = '';
    poemContent.innerHTML = '';
    poemContentTwo.innerHTML = '';
    poemContentThree.innerHTML = '';
    poemContentFour.innerHTML = '';
    poemContentFive.innerHTML = '';
    poemContentSix.innerHTML = '';
    poemContentSeven.innerHTML = '';
    poemContentEight.innerHTML = '';
    poemContentNine.innerHTML = '';
    poemContentTen.innerHTML = '';
    poemAuthor.innerHTML = '';

    //Fetch API and display title and content
    fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1')
    .then(response => response.json())
    .then(data => {
        poemAuthor.innerHTML = data.quotes[0].author;

        let lineOne = data.quotes[0].text.slice(0, 40);
        let lineTwo = data.quotes[0].text.slice(40,80);
        let lineThree = data.quotes[0].text.slice(80,120);
        let lineFour = data.quotes[0].text.slice(120,160);
        let lineFive = data.quotes[0].text.slice(160,200);
        let lineSix = data.quotes[0].text.slice(200,240);
        let lineSeven = data.quotes[0].text.slice(240,280);
        let lineEight = data.quotes[0].text.slice(280,320);
        let lineNine = data.quotes[0].text.slice(320,360);
        let lineTen = data.quotes[0].text.slice(360,400);

        poemContent.innerHTML = lineOne;
        poemContentTwo.innerHTML = lineTwo;
        poemContentThree.innerHTML = lineThree;
        poemContentFour.innerHTML = lineFour;
        poemContentFive.innerHTML = lineFive;
        poemContentSix.innerHTML = lineSix;
        poemContentSeven.innerHTML = lineSeven;
        poemContentEight.innerHTML = lineEight;
        poemContentNine.innerHTML = lineNine;
        poemContentTen.innerHTML = lineTen;

        })


    .catch(error => {
        console.log("Error!!! : " + error);
    })
}










