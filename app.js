  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDEY6ddkaECHBEJ0ztmB--0SiVB7-s6xQ0",
    authDomain: "onlinersp-ee5e8.firebaseapp.com",
    projectId: "onlinersp-ee5e8",
    storageBucket: "onlinersp-ee5e8.appspot.com",
    messagingSenderId: "9629743199",
    appId: "1:9629743199:web:a4670b31fc0af1ec7143ea"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database= firebase.database();

  //getting values




//   //bu yazma array yaratdim
//    firebase.database().ref('users').set({
//      username: "ksnk",
//      profile_picture : "ddk"
//    });
// var starCountRef = firebase.database().ref('users');
// starCountRef.on('value', (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });