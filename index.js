var text = document.getElementById("text");
var button = document.getElementById("button");
var head = document.getElementById("head");
var head1 = document.getElementById("head1");
const firebaseConfig = {  
  
  apiKey: "AIzaSyCdn9V1g8kfGBCadJSuvxK89F0dBWWE9F4",
  authDomain: "delpiapp05.firebaseapp.com",
  databaseURL: "https://delpiapp05.firebaseio.com",
  projectId: "delpiapp05",
  storageBucket: "delpiapp05.appspot.com",
  messagingSenderId: "268595622844",
  appId: "1:268595622844:web:bc6459832109c90875b1b9"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

database = firebase.database();

var ref = database.ref("bullyReport");

ref.on('value', gotData, errData);

function gotData(data){

  var namesIds = document.getElementsByClassName("Jam");

  for (var i = 0 ; i < namesIds.length ; i + 1){
    namesIds[i].remove();
  }
 var object = data.val();

var nameId1 = Object.keys(object);

for (var i = 0 ; i < nameId1.length ; i++){
  var k = nameId1[i];

  var name = object[k].name;

  var grade =object[k].grade;

  var nameId = object[k].nameId;

  var offenses = object[k].offenses;

  var report = object[k].report;

  var section = object[k].section;

  console.log(nameId, name, grade, offenses, report, section);

  var li = document.createElement("li");

  li.innerHTML = "grade: " + grade +' / ' + "name: " + name + ' / ' + "nameId: " + nameId +' / ' + "type of offense: " + offenses + ' / ' + "report :" + report + ' / ' + "section: " + section;

  li.className = "Jam";

  document.body.appendChild(li);

}

}

function errData(err){

  console.log("err");

  console.log(err);

}
function myclick() {

    var val = text.value;
    
    window.alert(val);
    }

