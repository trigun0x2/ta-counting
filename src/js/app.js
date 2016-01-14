var TA = window.TA;

class TwitchCounts {
  constructor() {
    this.currentNumber = 0;
    this.maxNumber = 10;
    this.buffer = 0;
    this.bufferSize = 3;

    TA.twitch.chat.on('say', (data) => {
      if (data.message == (this.currentNumber + 1).toString() && this.buffer <= this.bufferSize){
        this.currentNumber += 1;
      } else if (data.message == this.currentNumber && this.buffer <= this.bufferSize){
        this.buffer += 1;
      } else {
        this.currentNumber = 0;
        TA.twitch.chat.say("Reset, try again 4Head");
      }
      $("#current-number").text(this.currentNumber);
      if (this.currentNumber == this.maxNumber){
        TA.twitch.chat.say("HOLY CRAP YOU DID IT CHAT!! PogChamp PogChamp");
        this.currentNumber = 0;
      }
      console.log(this.currentNumber);
    });
  };

}

var counting = new TwitchCounts();
