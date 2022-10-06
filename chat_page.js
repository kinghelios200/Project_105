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

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                console.log(firebase_message_id);
                console.log(message_data);
                name = message_data['name'];
                message = message_data['message'];
                like = message_data['like'];
                name_with_tag = "<h4>" + name + "</h4>";
                message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>Likes :" + like + "</button>";
                row = name_with_tag + message_with_tag + like_button;
                document.getElementById("output").innerHTML += row;
                console.log("check 1");
                //End code
            }
        });
    });
}
getData();