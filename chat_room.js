// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKxVX-AM-7w2neKoxdo7GkJjjCMnqsM18",
  authDomain: "project-101-c69ae.firebaseapp.com",
  databaseURL: "https://project-101-c69ae-default-rtdb.firebaseio.com",
  projectId: "project-101-c69ae",
  storageBucket: "project-101-c69ae.appspot.com",
  messagingSenderId: "405943347937",
  appId: "1:405943347937:web:82c528d52b85d2cea9e5a0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
  firebase.database().ref("/").on('value',
    function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code
        row = "<div class='room_name' id='" + Room_names + "' onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>"
        document.getElementById("output").innerHTML += row;
        //End code
      });
    });
}
getData();

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
}

function redirectToRoomName(name) {
  localStorage.setItem("room_name", name);
  window.location = "chat_page.html";
}