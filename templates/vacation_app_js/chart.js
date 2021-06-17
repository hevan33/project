


// creating variables
var employee, first, days, duration;
var counter = 0;
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
 

    //removing last added element
    $("#undo").click(function(){
        for(i=0;i<1;i){
            //checking if element exists
            if ( ($( "#chart-li-" + counter ).length)>0 ) {
                // if yes, removing it
                $("#chart-li-" + counter ).remove();
            counter = counter-1;
            i = i +1;
            // if no, chcecking another possibility 
            }else{
                counter = counter-1;
                
            }
        }


        
        
    })
    // removing all added elements
    $("#clear").click(function(){
        for(counter;counter>0;counter--){
            $("#chart-li-" + counter ).remove();
        }
    })
    // removing row's elements on click
    $(".chart-row-bars").click(function(){
        $(this).empty();
        $(this).css("list-style","none")
        $(this).css("display","grid")
        $(this).css("padding","15px 0")
        $(this).css("margin","0")
        $(this).css("grid-template-columns","repeat(12, 1fr)")
        $(this).css("grid-gap","10px 0")
        $(this).css("border-bottom","1px solid #000")
    })
})


