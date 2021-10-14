var firebaseConfig = {
      apiKey: "AIzaSyD8Q505l2p2UOpXHXs0HyfBq88i9ReUn4s",
      authDomain: "kwitter-fa5cf.firebaseapp.com",
      databaseURL: "https://kwitter-fa5cf-default-rtdb.firebaseio.com",
      projectId: "kwitter-fa5cf",
      storageBucket: "kwitter-fa5cf.appspot.com",
      messagingSenderId: "417309350891",
      appId: "1:417309350891:web:362f50bc93a56a571857ae"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("username");
room_name=localStorage.getItem("room_name");

function send(){
msg =document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0






})
document.getElementById("msg").value="";




}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
