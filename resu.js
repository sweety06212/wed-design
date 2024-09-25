function vote(){
    var name = document.getElementById("Name").Value;
    var SRN = document.getElementById("SRN").value;
    var pass = 100* Math.random();
    var result = document.getElementById("result").value;
    result.innerHTML = Name + ", you have scored: " + pass.toFixed
    (2) +"%";

    if (marks>= 0 && marks <= 35){
        resultMessage = name + " has faild with " + marks + " marks ";
    }else if (marks> 35 && marks <=60){
        resultMessage = name + " has passed with " + marks + "marks";
    }else if (marks> 60 && marks <=80){
        resultMessage = name + "has passed with merit, scoring marks"+ marks + "marks";
    }else if(marks> 80 && marks <=100){
        resultMessage = name + "has passed with distinction" + marks + "marks";
    }
      
    result.innerHTML = resultMessage;

    
}
 
