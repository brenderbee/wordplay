$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("#sentence").val();
    var words = [];

    words = userInput.split(" ");

    var longWords = words.filter(function(word){
      return word.length > 3;
    });
    // var longWords = words.forEach(function(word) {
    //   return word.length > 3;
    // });

    console.log(longWords);

  });
});
