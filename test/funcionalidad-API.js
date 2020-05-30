
var pirateSpeak = require('pirate-speak');
class Message{
    constructor(original){
        this.original=original;
        }


translateMsg(original)
{

   this.original = pirateSpeak.translate(original);
    return this.original;
}
}
module.exports=Message;