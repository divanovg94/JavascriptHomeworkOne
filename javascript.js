

 robots = [];


function addRobot(event){
    event.preventDefault()
    let robotName = document.getElementById("name").value;
	let robotComment = document.getElementById("id-robot-comment").value;
    let commentCheck = document.getElementById("id-robot-comment").style.visibility;

    if(robotName == "" ){

        alert("Plis enter robot name.");
        
    }else{
        if(commentCheck == "visible" && robotComment == ""){
            alert("Plis enter phrase.");
          
        }
        else{
            let robot = {
                name: document.getElementById("name").value,
                type: document.getElementById("select-type").value,
                color: document.getElementById("color").value,
                canJump: document.getElementById("can-jump").checked,
                canTalk: document.getElementById("can-talk").checked,
                canBlink: document.getElementById("can-blink").checked,
                comment: document.getElementById("id-robot-comment").value
            }
  
    robots.push(robot);
        }

    }

}
 

function CommentShow() {
	let isChecked = document.getElementById("can-talk").checked;

	if(document.getElementById("can-talk").checked){
        document.getElementById("id-robot-comment").style.visibility = "visible";
    }
	else{
        document.getElementById("id-robot-comment").style.visibility = "hidden";
    }
}

function robotCanJump(){
   
        document.getElementById('id-robot-head').style.animation="head-jump 4s infinite";
        document.getElementById('id-robot-left-hand').style.animation="left-hand-jump 4s infinite";
        document.getElementById('robot-body').style.animation="body-jump 4s infinite";
        document.getElementById('id-robot-right-hand').style.animation ="right-hand-jump 4s infinite";
        document.getElementById('robot-left-leg').style.animation="left-leg-jump 4s infinite";
        document.getElementById('robot-right-leg').style.animation="right-leg-jump 4s infinite";
}
function robotCanTalk(){
   
    document.getElementById('id-mouth').style.animation="speak 2s 5";
}
function robotCanBlink(){
    document.getElementById('id-right-eye').style.animation="blink 4s infinite";
}
function showRobot(event){
    
    event.preventDefault()
    
    if( robots.length !== 0) {
    let currentRobot = robots.length - 1 ;
        // Change Robot Name
     
        document.getElementById("robot-name").innerHTML = robots[currentRobot].name;
        
        if(robots[currentRobot].type == "Female"){
            document.getElementById("robot-body").style.borderTop = "75px solid "+robots[currentRobot].color;
            document.getElementById("robot-body").style.borderBottom = "75px solid "+robots[currentRobot].color;
        }else{
            document.getElementById("robot-body").style.borderTop = "150px solid "+robots[currentRobot].color;
            document.getElementById("robot-body").style.borderBottom = "0px";
           
        }
        
        let canJump = document.getElementById("can-jump").checked;
	    if(canJump){
		    robotCanJump();
	    }
        let canTalk = document.getElementById("can-talk").checked;
        if(canTalk){

            document.getElementById("p-bubble").innerHTML = robots[currentRobot].comment;
            document.getElementById("bubble-id").style.visibility = "visible";
            setTimeout(function(){
                document.getElementById("bubble-id").style.visibility = "hidden";
            }, 10000);
            robotCanTalk();
        }
        let canBlink = document.getElementById("can-blink").checked;
        if(canBlink){
            robotCanBlink();
        }
        document.getElementById("id-robot").style.visibility = "visible";
 


    }else{
        alert("There is no robot to show.");
    }

}


document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById("create-button").addEventListener('click', addRobot);
	 document.getElementById("show-button").addEventListener('click', showRobot);
});
