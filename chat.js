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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



