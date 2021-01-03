
var firebaseConfig = {
      apiKey: "AIzaSyAO0ESjx91OwLJzg-2Jy1km4cZ8h_GSxI0",
      authDomain: "bahhhh-e607d.firebaseapp.com",
      databaseURL: "https://bahhhh-e607d-default-rtdb.firebaseio.com",
      projectId: "bahhhh-e607d",
      storageBucket: "bahhhh-e607d.appspot.com",
      messagingSenderId: "411291169405",
      appId: "1:411291169405:web:4daef18906f8b20e533714"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!"
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Room name- "+Room_names)
        row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id' >#"+Room_names+"<div><hr>";
        document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function add_room(){
      rome_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

getData();
function log_out(){
      
      window.location="log_out.html";
}