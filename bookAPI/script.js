let App = {
  initialize: function () {
    App.getData();
  },
  getData: function () {
    fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=1A5vWPZiW6IoNu1WsbYfUDiGtm9ArwSF')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log("calling")
        App.appendData(data);
      })
      .catch(function (err) {
        console.log('error: ' + err);
      });
  },

  appendData: function (data) {
    console.log("hello i am workingb4");
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.results.length; i++) {
      console.log("hello i am working");
      var div = document.createElement("div");
      div.innerHTML = 'List Name: ' + data.results[i].list_name + 'published on' + data.results[i].newest_published_date;
      mainContainer.appendChild(div);
    }
  },
}



