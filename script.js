//Need to create time blocks that represemnt 1 hour
//Need to display standard time
//blocks should include time, user input, and a save button
//save button should save data to local storage
//include document.ready
var currentDay = $("#currentDay").text(moment().format("dddd, MMMM Do, h:mm A"));
setInterval(function(){
   currentDay = $("#currentDay").text(moment().format("dddd, MMMM Do, h:mm:ss A"));
},1000)
console.log(currentDay.text())

$(document).ready(function(){
    var hours=moment().hours(); // Number
    var min=9
    var max=17
    
    $(".time-block").each(function(){
        var currentID=parseInt($(this).attr("id"))
        console.log(currentID)
        if (currentID < hours){
            $(this).addClass("past")
            
        }
        else if (currentID > hours){
            $(this).addClass("future")
        }
        else if (currentID === hours){
            $(this).addClass("present")
        }
    })
    console.log(hours)
})
function updateLocalStorage(){

}
//save button to local storage$this
//make "text area" in hours