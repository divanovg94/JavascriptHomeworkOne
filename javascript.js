const robotPhrases = ["I want to eat", "I am MR. Robot", "Mr. robot run run!","How old are you?","Is your software up to date?"];
const selectPhrases = Math.floor(Math.random() * 5);

setTimeout(() => {alert(robotPhrases[selectPhrases]);}, 2000);

function Robot(name,color,type,message){
    this.name = name;
    this.color = color;
    this.type = type;
    this.message = message;

}

const robotOne = new Robot('Goshko','orange','male','');
const robotTwo = new Robot('Vanq','blue','female','');

robotTwo.message = "Hello,"+robotTwo.name+". "+robotPhrases[selectPhrases];


