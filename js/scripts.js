$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("#sentence").val();
    var words = [];

    words = userInput.split(" ");

    var longWords = words.filter(function(word){
      return word.length > 3;
    });
    longWords.reverse();

    var string = longWords.join(',');

    $(".output").text(string);

  });
});
