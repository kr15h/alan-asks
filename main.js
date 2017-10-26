$(document).ready(function(){

$.ajax( "./questions.txt" )
.done(function(data) {
  console.log("Questions loaded.");

  data = data.replace(/^\s*[\r\n]/gm, "") 
  var questions = data.split(/\n/);

  var randomQuestion = Math.round(Math.random() * questions.length);
  if(randomQuestion >= questions.length){
  	randomQuestion = 0;
  }

  $('#question').text(questions[randomQuestion]);
  $('#hiddenQuestion').val(questions[randomQuestion]);

})
.fail(function() {
  console.log("Failed to load questions.");
})

});