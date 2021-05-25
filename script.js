
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

firebase.database().ref('/choiceOfPlayer2').set({
  choice2:""
    });
firebase.database().ref('/choiceOfPlayer1').set({
  choice1:""
    });

    /////////////////////////////
$("#send").click(function(){
  var userNAME= sessionStorage.getItem("player");
var msg=$("#sendMes").val();

 firebase.database().ref('/chat').set({
   name:userNAME,
  messages:msg
    });
});
          
firebase.database().ref('/chat').on('value',(snap)=>{
  var json=snap.val();
$("#mesajlasma").append(json.name+':'+json.messages+"<br>");
$("#sendMes").val("");
});
//////////////////////////////////////
                   
          firebase.database().ref().on('value',(snap)=>{
            var json=snap.val();
            var cho1=json.choiceOfPlayer1.choice1;
            var cho2=json.choiceOfPlayer2.choice2;
        
            console.log(cho1);
            console.log(cho2);
            if(cho1==""){
              $("#img4").css("opacity","0.5");
              $("#img5").css("opacity","0.5");
              $("#img6").css("opacity","0.5");

              $("#img4").css("pointer-events","none");
              $("#img5").css("pointer-events","none");
              $("#img6").css("pointer-events","none");

              $("#img1").css("opacity","1");
              $("#img2").css("opacity","1");
              $("#img3").css("opacity","1");

              $("#img1").css("pointer-events","all");
              $("#img2").css("pointer-events","all");
              $("#img3").css("pointer-events","all");
         
              }
              else{
                $("#img1").css("opacity","0.5");
                $("#img2").css("opacity","0.5");
                $("#img3").css("opacity","0.5");
  
                $("#img1").css("pointer-events","none");
                $("#img2").css("pointer-events","none");
                $("#img3").css("pointer-events","none");

                $("#img4").css("opacity","1");
                $("#img5").css("opacity","1");
                $("#img6").css("opacity","1");
  
                $("#img4").css("pointer-events","all");
                $("#img5").css("pointer-events","all");
                $("#img6").css("pointer-events","all");
              }
          });

     

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
firebase.database().ref('/chat').remove();

}
});


    firebase.database().ref("/player1").once("value", snapshot => {
    
   if (snapshot.exists()){
firebase.database().ref('/player2').set({
username:PlayerName,
profile_picture :IMGsrc,
});
firebase.database().ref("/player2").once("value", snapshot => {
    
  var json=snapshot.val();
  sessionStorage.setItem("player", json.username);
  });

   }
   else{

firebase.database().ref('/player1').set({
username:PlayerName,
profile_picture :IMGsrc,
});
firebase.database().ref("/player1").once("value", snapshot => {
    
var json=snapshot.val();
sessionStorage.setItem("player", json.username);
});
   }

});
 });


var check=0;
  //message 
  $("#message").click(function(){
      if(check==0){
          check=1;
          $(".chat").css("opacity","1");
          $(".mesajlasma").css("opacity","1");
          $("#sendMes").css("opacity","1");  
     $("#send").css("opacity","1");
      }
      else{
        $(".chat").css("opacity","0");
        $(".mesajlasma").css("opacity","0");
        $("#sendMes").css("opacity","0");  
   $("#send").css("opacity","0");

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
        choice2:"scissors"
          });
    $('#selectedIMG2').attr('src',this.src);
});

  
var current1=250;
var current2=250;
var marginLeft2=0;
//avatar picture...
firebase.database().ref('/player1').on('value',(snap)=>{
    var json=snap.val();

    $("#Player1AvatarPic").attr("src",json.profile_picture);
    $(".player1NAME").text(json.username);
  });
  

  //.........second

  firebase.database().ref('/player2').on('value',(snap)=>{
    var json=snap.val();
    $("#Player2AvatarPic").attr("src",json.profile_picture);
    $(".player2NAME").text(json.username);
  });


  firebase.database().ref().on('value',(snap)=>{
    var json=snap.val();
    var cho1=json.choiceOfPlayer1.choice1;
    var cho2=json.choiceOfPlayer2.choice2;
var username1=json.player1.username;
var username2=json.player2.username;
var user1Pic=json.player1.profile_picture;
var user2Pic=json.player2.profile_picture;

     if(cho1=="paper"&& cho2=="paper"){
      firebase.database().ref('/choiceOfPlayer2').set({
        choice2:""
          });
          firebase.database().ref('/choiceOfPlayer1').set({
            choice1:""
              });
     }
 else if(cho1=="paper"&& cho2=="rock"){
      current2=current2-50;
      marginLeft2=marginLeft2+50;
      $("#player2Heart").css("width", current2+'px');
      $("#player2Heart").css("margin-left", marginLeft2+'px');
       firebase.database().ref('/choiceOfPlayer2').set({
        choice2:""
          });
          firebase.database().ref('/choiceOfPlayer1').set({
            choice1:""
              });
              if(current2==0){
                $("#ResultWinner").css("opacity","1");
                $("#ResultWinner").css("pointer-events","all");
                $("#WinnerNAME").html(username1);
                $("#winnerPicture").attr("src",user1Pic);
                $("#reload").click(function(){  window.location.reload(); });
                
               }
    }
  else if(cho1=="paper"&& cho2=="scissors"){
    current1=current1-50;
      $("#player1Heart").css("width", current1+'px');
       firebase.database().ref('/choiceOfPlayer2').set({
        choice2:""
          });
          firebase.database().ref('/choiceOfPlayer1').set({
            choice1:""
              });
              if(current1==0){
                $("#ResultWinner").css("opacity","1");
                $("#ResultWinner").css("pointer-events","all");
                $("#WinnerNAME").html(username2);
                $("#winnerPicture").attr("src",user2Pic);
                $("#reload").click(function(){  window.location.reload(); });
                
              }
    }
   else if(cho1=="rock"&& cho2=="paper"){
  
      current1=current1-50;
      $("#player1Heart").css("width", current1+'px');
       firebase.database().ref('/choiceOfPlayer2').set({
        choice2:""
          });
          firebase.database().ref('/choiceOfPlayer1').set({
            choice1:""
              });
              if(current1==0){
                $("#ResultWinner").css("opacity","1");
                $("#ResultWinner").css("pointer-events","all");
                $("#WinnerNAME").html(username2);
                $("#winnerPicture").attr("src",user2Pic);
                $("#reload").click(function(){  window.location.reload(); });
                
              }

    }
   else if(cho1=="rock"&& cho2=="rock"){
       firebase.database().ref('/choiceOfPlayer2').set({
        choice2:""
          });
          firebase.database().ref('/choiceOfPlayer1').set({
            choice1:""
              });
     }
  else if(cho1=="rock"&& cho2=="scissors"){
     current2=current2-50;
      marginLeft2=marginLeft2+50;
      $("#player2Heart").css("width", current2+'px');
      $("#player2Heart").css("margin-left", marginLeft2+'px');

       firebase.database().ref('/choiceOfPlayer2').set({
        choice2:""
          });
          firebase.database().ref('/choiceOfPlayer1').set({
            choice1:""
              });
              if(current2==0){
                $("#ResultWinner").css("opacity","1");
                $("#ResultWinner").css("pointer-events","all");
                $("#WinnerNAME").html(username1);
                $("#winnerPicture").attr("src",user1Pic);
                $("#reload").click(function(){  window.location.reload(); });
                
               }
    
    }
   else if(cho1=="scissors"&& cho2=="paper"){
     current2=current2-50;
      marginLeft2=marginLeft2+50;
      $("#player2Heart").css("width", current2+'px');
      $("#player2Heart").css("margin-left", marginLeft2+'px');
       firebase.database().ref('/choiceOfPlayer2').set({
        choice2:""
          });
          firebase.database().ref('/choiceOfPlayer1').set({
            choice1:""
              });
   
              if(current2==0){
                $("#ResultWinner").css("opacity","1");
                $("#ResultWinner").css("pointer-events","all");
                $("#WinnerNAME").html(username1);
                $("#winnerPicture").attr("src",user1Pic);
                $("#reload").click(function(){  window.location.reload(); });
                
               }
    }
   else if(cho1=="scissors"&& cho2=="rock"){
      current1=current1-50;
      $("#player1Heart").css("width", current1+'px');
       firebase.database().ref('/choiceOfPlayer2').set({
        choice2:""
          });
          firebase.database().ref('/choiceOfPlayer1').set({
            choice1:""
              });
              if(current1==0){
                $("#ResultWinner").css("opacity","1");
                $("#ResultWinner").css("pointer-events","all");
                $("#WinnerNAME").html(username2);
                $("#winnerPicture").attr("src",user2Pic);
                $("#reload").click(function(){  window.location.reload(); });
                
              }
 }
  else if(cho1=="scissors"&& cho2=="scissors"){
    firebase.database().ref('/choiceOfPlayer2').set({
      choice2:""
        });
        firebase.database().ref('/choiceOfPlayer1').set({
          choice1:""
            });
  }


  });
