function login(){
    nickname=document.getElementById("username").value;
    localStorage.setItem("username",nickname);
    window.location="kwitter_room.html";
    }