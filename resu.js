$(document).ready(function(){
    $("#Submit").click(function(){
        var name = $("#Name").val().trim();
        if(name !==""){
            $("#messege").text("April fool", + name + "!");
            $("#result").fadeln();
        }else{
            alert("Please enter your name.");
        }
    });
});
