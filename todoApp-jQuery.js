$(document).ready(function(){

    var listItems = ["Get groceries", "Pay bills", "Do laundry", "Wash car"];

    function renderAll() {
        $('ol').html('');
        
        for (var i = 0; i < listItems.length; i++) {
            $("ol").append("<li>" + listItems[i] + "</li>");
        }
        
        $("li").click(listItemClick);
    }

    function listItemClick(clickEvent) {
      var listItem = clickEvent.target;
      var textDecoration = listItem.style.textDecoration;
       if(textDecoration === "line-through") {
        listItem.style.textDecoration = "";
     } else {
       listItem.style.textDecoration = "line-through";
     }
    }

    $("form").submit(function(event) {
        event.preventDefault();

        var input = $(".input");
        var newItem = input.val();

        listItems.push(newItem);
        renderAll();

        input.val('');
    });
    
    renderAll();
});