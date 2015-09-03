$(document).ready(function() {
  // use the code below to bind the form to the submit
  $('#magic-eight-ball').submit(function(e) {
  e.preventDefault();

  // list of possible answers to a question
  var answer = ['Without a doubt', 'Yes', 'Outlook good', 'Ask again later', 'Cannot predict now', 'My reply is no', 'Outlook not so good', 'No'];

  // add Math.random to receive answers from the 'answer' array above
  var random = answer[Math.floor(Math.random() * answer.length)];

  // use variable 'random' to apply effect to answer
  $('div#answer').text(random).fadeIn('slow');
  });

});
