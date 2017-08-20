function myFun(){
var input = document.getElementById("input").value;

var totalWords = 0;
var totalSentences = 0;
var avgWordsPerSentences = 0;
var totalSpaces = 0;

   for(var i = 0; i <= input.length; i++){
       if(input[i] == " "){
           totalSpaces++;
        totalWords++;
           
       }
   if(input[i] == "." || input[i] == "?" || input[i] == "!" ){
       totalSentences++;
   }
       
       } 
    avgWordsPerSentences = totalWords / totalSentences;
    
    document.getElementById("totalwords").innerHTML = totalWords;
    document.getElementById("totalsentences").innerHTML = totalSentences;
    document.getElementById("averagewords").innerHTML = avgWordsPerSentences;
    document.getElementById("totalspaces").innerHTML = totalSpaces;
    
}