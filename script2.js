play_video=function(url){
  x=`<a class="close" onclick="main_fun()"></a>
  <div class="hs-responsive-embed-youtube"><iframe id="load-video1"
  src="https://www.youtube.com/embed/${url}?rel=0&amp&showinfo=1" frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen=""></iframe></div>;
  <br>
  <br>
  <br>`;

  document.getElementById("hide-this").style.display="none";
  document.getElementById("video_section").innerHTML=x;
  window.scrollTo(0,0);
}


main_fun =function(){
  location.reload();
}

access_alert = function(){
  alert("access granted only to pro members");
}

alert_regester = function(){
  alert("regesrtatin complete ");
}

alert_contact =function(){
  alert("you feedback was sucessfully sent");
}

give_alert =function(){
  window.open('videos.html','_self');
}