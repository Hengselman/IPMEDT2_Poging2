// -------Global Variables-------
var playSounds = true;
var cname = "verhaalnummer";
var debug = false;

/*-----------------Audio Toggle------------------*/
var audioFoto = document.getElementById("audioFoto");
var toggle = document.getElementById("toggle");

function swapImage(){
  if(toggle.checked == true){
    audioFoto.src = "img/soundOff.png";
    playSounds = false;
  } else {
    audioFoto.src = "img/soundOn.png";
    playSounds = true;
  }
}


// -----------Cookie Testing-----------

if (debug){
  console.log(document.cookie)
}

function setVerhaalCookie(cookiename, number, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  if (getVerhaalCookie(cname) <= number){
    document.cookie = cookiename + "=" + number +  ";" + expires + ";path=/";
    console.log("cookie veranderd naar: " + number)
  }
}

function resetVerhaalCookie() {{
  var d = new Date();
  d.setTime(d.getTime() + (1*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=0;" + expires + ";path=/";
  console.log("reset verhaal cookie to: 0")
}

}

function getVerhaalCookie(cookiename){
  var name = cookiename + "="
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


console.log("Loaded main.js")