let inputElement = document.getElementById("userInput");
let lyricsCount = inputElement.value;
let text = "";

function refreshPage(){
    window.location.reload();
} 

for (let i = 0; i < lyricsCount; i++) {
  text += "This is the  song that never ends" + "<br>" + "Yes, it goes on and on, my friends!!!" + "<br>" + "Some people started singing it not knowing what it was," + "<br>" + "And they'll continue singing it forever just because" + "<br>";
}

document.getElementById("demo").innerHTML = text;

