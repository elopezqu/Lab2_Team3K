function convertirPalabra(){
  let tagWord = document.getElementById("word");
  let word = tagWord.value;
  let newWord = "";
  for (let i=word.length; i>0; i--){
   newWord += word.substring(i-1,i);
  }
}
