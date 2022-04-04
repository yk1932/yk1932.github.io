let express = require("express");
let Datastore = require('nedb');

//initialize app
let app = express();

//tell your express to accept json information and parse it
app.use(express.json());
app.use(express.urlencoded({
  extended:true
}));

//initialize database
let db = new Datastore({
  filename: 'posts.db',
  timestampData: true
}); //creates a new one if needed

// db. = db.sort((a, b) => b.createdAt - a.createdAt);

db.loadDatabase();


//app variables
let posts = [];

app.use(express.static('public'));

app.post('/message', (req,res) => {
  console.log(req.body);

  //add db here
  db.insert(req.body, function(err,newDoc){
    console.log(newDoc)
  });
  posts.push(req.body);
  res.json({"message":"OK"});
})

app.get('/messages',(req,res) => {
  let dataToSend;
  db.find({}, function(err,docs){
    console.log(docs);
    dataToSend = {data: docs};
    res.json(dataToSend);
  })
})

// what port should we listen to?
app.listen(8000, () => {
  console.log("the server is up and running!");
  })

  