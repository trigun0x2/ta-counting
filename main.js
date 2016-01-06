var TA = window.TA;
var ans = null;
var triviaState = false;
TA.twitch.chat.on('say', function(data){
  console.log(data);
  if (data.message == '!trivia' && !triviaState){
    $.get('http://jservice.io/api/random', function(trivia){
      TA.twitch.chat.say(trivia[0].question);
      ans = trivia[0].answer;
      console.warn(ans);
      triviaState = true;
    });
  }

  if (data.message == ans){
    TA.twitch.chat.say(data.from + " has answered correctly!");
    triviaState = false;
  }
});
