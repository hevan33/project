


// creating variables
var employee, first, days, duration;
var counter = 5;
$(function(){
    $("#insert").on("click",function(){ 
        // getting data from form
         employee = $("#employee").val();
         first = $("#first-day").val();
         days = $("#last-day").val();
         days = parseFloat(days);
         first = parseFloat(first);
         // checking compatibility
         if (days<=first){
            alert ("insert proper informations!")
         }else{
             // making counter +1
            counter = counter + 1;
            //creating grid-column value
            duration = first + "/" + days;
            // adding css and html of new element
            $("." + employee).append("<li id='chart-li-" + counter + "'></li>"  );
            $("#chart-li-" + counter ).css("background-color", "#0080FF")
            $("#chart-li-" + counter ).css("grid-column", duration)

         }

        
    })
 // removing datasets after a click
    $("li").click(function(){
        $(this).remove();
        
    })
    //deleting new elements
    
    var diff = 0;
    $("#undo").click(function(){
        $("#chart-li-" + counter ).remove();
        counter = counter-1;
        
    })
})

