TA.init();

var ans = null;
var triviaState = false;
TA.on('twitch.chat', function(data){
  if (data.message == '!trivia' && triviaState){
    $.get('http://jservice.io/api/random', function(trivia){
      TA.chat(trivia[0].question);
      ans = trivia[0].answer;
      triviaState = true;
    });
  }

  if (data.message == ans){
    TA.chat(data.user + " has answered correctly!");
    triviaState = false;
  }
});
