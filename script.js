        //define
var IMGsrc="https://i.pinimg.com/736x/4b/26/4e/4b264e320ab57c8849f76071862a0447.jpg";
var PlayerName="Guest";

//function to get the avatar image soure
    $("#av1").click(function(){
   IMGsrc=this.src;
    console.log(IMGsrc);
    $("#av1").css("border","10px double rgb(32, 194, 59)");
    $("#av2").css("border","7px dashed whitesmoke");
    $("#av3").css("border","7px dashed whitesmoke");
    $("#av4").css("border","7px dashed whitesmoke");
    $("#av5").css("border","7px dashed whitesmoke");
    $("#av6").css("border","7px dashed whitesmoke");
        });
        $("#av2").click(function(){
           IMGsrc=this.src;
    console.log(IMGsrc);
    $("#av2").css("border","10px double rgb(32, 194, 59)");
    $("#av1").css("border","7px dashed whitesmoke");
    $("#av3").css("border","7px dashed whitesmoke");
    $("#av4").css("border","7px dashed whitesmoke");
    $("#av5").css("border","7px dashed whitesmoke");
    $("#av6").css("border","7px dashed whitesmoke");
        });
        $("#av3").click(function(){
    IMGsrc=this.src;
    console.log(IMGsrc);
    $("#av3").css("border","10px double rgb(32, 194, 59)");
    $("#av2").css("border","7px dashed whitesmoke");
    $("#av1").css("border","7px dashed whitesmoke");
    $("#av4").css("border","7px dashed whitesmoke");
    $("#av5").css("border","7px dashed whitesmoke");
    $("#av6").css("border","7px dashed whitesmoke");
        });
        $("#av4").click(function(){
    IMGsrc=this.src;
    console.log(IMGsrc);
    $("#av4").css("border","10px double rgb(32, 194, 59)");
    $("#av2").css("border","7px dashed whitesmoke");
    $("#av3").css("border","7px dashed whitesmoke");
    $("#av1").css("border","7px dashed whitesmoke");
    $("#av5").css("border","7px dashed whitesmoke");
    $("#av6").css("border","7px dashed whitesmoke");
        });
        $("#av5").click(function(){
    IMGsrc=this.src;
    console.log(IMGsrc);
    $("#av5").css("border","10px double rgb(32, 194, 59)");
    $("#av2").css("border","7px dashed whitesmoke");
    $("#av3").css("border","7px dashed whitesmoke");
    $("#av4").css("border","7px dashed whitesmoke");
    $("#av1").css("border","7px dashed whitesmoke");
    $("#av6").css("border","7px dashed whitesmoke");
        });
        $("#av6").click(function(){
     IMGsrc=this.src;
    console.log(IMGsrc);
    $("#av6").css("border","10px double rgb(32, 194, 59)");
    $("#av2").css("border","7px dashed whitesmoke");
    $("#av3").css("border","7px dashed whitesmoke");
    $("#av4").css("border","7px dashed whitesmoke");
    $("#av5").css("border","7px dashed whitesmoke");
    $("#av1").css("border","7px dashed whitesmoke");
        });
   


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


 //online player define function
 $("#PlayButton").click(function(){
   PlayerName=$("#avName").val();
   if(PlayerName==""){
       PlayerName="Guest";
   }
    firebase.database().ref("/player2").once("value", snapshot => {
   if (snapshot.exists()){
   
firebase.database().ref('/player2').remove();
   
firebase.database().ref('/player1').remove();
}
});


    firebase.database().ref("/player1").once("value", snapshot => {
   if (snapshot.exists()){
    console.log("birinci online");



firebase.database().ref('/player2').set({
username:PlayerName,
profile_picture :IMGsrc
});
     
   }
   else{
    console.log("NOexists!"); 
    console.log("birinci online deyilmis");

firebase.database().ref('/player1').set({
username:PlayerName,
profile_picture :IMGsrc
});
   }

});
     

 });


//Button 
document.addEventListener("DOMContentLoaded", function(){
    var el = document.querySelector(".button-bird");
    var text = document.querySelector(".button-bird__text");
        el.addEventListener('click', function() {
          el.classList.toggle('active');

          if(el.classList.contains('active')){
              console.log('true');
              text.innerHTML = 'Loading...';
              setTimeout(function(){ window.location.href = './play.html';}, 2500);
             
          }else{
              text.innerHTML = 'Loading...';
             
          }
      });
  });
var check=0;
  //message 
  $("#message").click(function(){
      if(check==0){
          check=1;
   $(".chat").css("height","440px");
   $(".mesajlasma").css("height","330px");
   $("#sendMes").css("height","50px");
      }
      else{
        $(".chat").css("height","0px");
        $(".mesajlasma").css("height","0px");
        $("#sendMes").css("height","0px");  
        check=0;
      }
  });


  //selected choice
  
  $("#img1").click(function(){
    firebase.database().ref('/choiceOfPlayer1').set({
      choice1:"paper"
        });
    $('#selectedIMG1').attr('src',this.src);
  
  });

  $("#img2").click(function(){
    firebase.database().ref('/choiceOfPlayer1').set({
        choice1:"rock"
          });
$('#selectedIMG1').attr('src','./images/rock.png');
    
});

$("#img3").click(function(){
    firebase.database().ref('/choiceOfPlayer1').set({
        choice1:"scissors"
          });
    $('#selectedIMG1').attr('src',this.src);
});

$("#img4").click(function(){
    firebase.database().ref('/choiceOfPlayer2').set({
        choice2:"paper"
          });
    $('#selectedIMG2').attr('src',this.src);
});

$("#img5").click(function(){
    firebase.database().ref('/choiceOfPlayer2').set({
        choice2:"rock"
          });
    $('#selectedIMG2').attr('src',this.src);
});

$("#img6").click(function(){
    firebase.database().ref('/choiceOfPlayer2').set({
        choice:"scissors"
          });
    $('#selectedIMG2').attr('src',this.src);
});

  
    

//avatar picture...
firebase.database().ref('/player1').on('value',(snap)=>{
    var json=snap.val();
    console.log(json.profile_picture);
    $("#Player1AvatarPic").attr("src",json.profile_picture);
  });

  //.........second

  firebase.database().ref('/player2').on('value',(snap)=>{
    var json=snap.val();
    console.log(json.profile_picture);
    $("#Player2AvatarPic").attr("src",json.profile_picture);
  });