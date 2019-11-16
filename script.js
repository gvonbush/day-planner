//Need to create time blocks that represemnt 1 hour
//Need to display standard time
//blocks should include time, user input, and a save button
//save button should save data to local storage
//include document.ready
var currentDay = $("#currentDay").text(moment().format("dddd, MMMM Do, h:mm A"));
setInterval(function () {
    currentDay = $("#currentDay").text(moment().format("dddd, MMMM Do, h:mm:ss A"));

    var hours = moment().hours(); // Number
    var min = 9
    var max = 17
    


    $(".time-block").each(function () {

        
        var currentID = parseInt($(this).attr("id"))
        // console.log(currentID)
        if (currentID < hours) {
            $(this).addClass("past")
            $(this).removeClass("future")
            $(this).removeClass("present")

        }
        else if (currentID > hours) {
            $(this).addClass("future")
            $(this).removeClass("present")
            $(this).removeClass("past")
        }
        else if (currentID === hours) {
            $(this).addClass("present")
            $(this).removeClass("future")
            $(this).removeClass("past")
        }
    })

}, 1000)
console.log(currentDay.text())

$(document).ready(function () {
    var hours = moment().hours(); // Number
    var min = 9
    var max = 17

    var savedData = localStorage.getItem("#text12")
    console.log(savedData)
    $("#text12").val(savedData)

    // for (i=min; i<=max; i++){
    //     var timeCol = $("<div>").addClass("col-2")
    //     var descrCol = $("<div>").addClass("col-8")
    //     var saveCol = $("<div>").addClass("col-2")
    //     var row = $("#"+i)
    //     if (i<12){
    //         timeCol.text(i + "AM")
    //     }
    //     else {
    //         timeCol.text(i + "PM")
    //     }
    //     row.append(timeCol)
    //     row.append(descrCol)
    //     row.append(saveCol)
    //     console.log(row)
    // }

    $(".time-block").each(function () {
        var currentID = parseInt($(this).attr("id"))
        console.log(currentID)
        if (currentID < hours) {
            $(this).addClass("past")

        }
        else if (currentID > hours) {
            $(this).addClass("future")
        }
        else if (currentID === hours) {
            $(this).addClass("present")
        }
    })
    $(".saveBtn").click(function(){
        console.log($(this).attr("text"))
        // Get text attribute from save button
        var textID = "#"+$(this).attr("text")
        // Get the value from textarea with id = textID
        console.log($(textID).val())
        localStorage.setItem(textID, $(textID).val())
       

        
    })

    console.log(hours)
})
function updateLocalStorage() {

}
//save button to local storage$this
//make "text area" in hours