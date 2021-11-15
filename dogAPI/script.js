const randomDog = document.getElementById("randomDogImage");

function showRandomDog(){
  const randomDogApi = "https://dog.ceo/api/breeds/image/random";

  fetch(randomDogApi)
    .then(function(response){
      // if response is raw, convert into json
      return response.json();
    })
    .then(function(json){
      // if response is json, use this in html 
      console.log(json);
      var imageUrl = json.message;
      //update the image with new random url
      randomDog.src=imageUrl;
    })
    .catch(function(error){
      // if there is an error, indicate the error. 
      console.log(error);
    });
}

showRandomDog();