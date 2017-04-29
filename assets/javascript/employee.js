// Initialize Firebase
var config = {
  apiKey: "AIzaSyCdJzK9_TremO4_gA18kXt91Odalr5hSvc",
  authDomain: "myfirstproject-b04dd.firebaseapp.com",
  databaseURL: "https://myfirstproject-b04dd.firebaseio.com",
  projectId: "myfirstproject-b04dd",
  storageBucket: "myfirstproject-b04dd.appspot.com",
  messagingSenderId: "94314040395"
};
firebase.initializeApp(config);

var database = firebase.database();

var name = "";
var role = "";
var startDate = "";
var monthlyRate = "";

$("#add-user").on("click", function(){
  event.preventDefault();

  name = $("#name-input").val().trim();
  role = $("#role-input").val().trim();
  startDate = $("#date-input").val().trim();
  monthlyRate = $("#rate-input").val().trim();

  database.ref().push({
    name: name,
    role: role,
    startDate: startDate,
    monthlyRate: monthlyRate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  })
})

database.ref().on("child_added", function(snapshot) {
  console.log(snapshot.val().name);
  console.log(snapshot.val().role);
  console.log(snapshot.val().startDate);
  console.log(snapshot.val().monthlyRate);
  console.log(snapshot.val().dateAdded);

  $(".table").append(' <tr class="table2"><th>' + snapshot.val().name + 
    '</th><th>' + snapshot.val().role + 
    '</th><th> ' + snapshot.val().date + 
    '</th><th> placeholder </th><th>' + snapshot.val().rate +'</th></tr>');

  // http://uci.bootcampcontent.com/UCI-Coding-Bootcamp/03-17-Class-Content/tree/master/uci20170313-m_w/07-firebase/1-Class-Content/7.3/Activities/01-TimeSheet
})
