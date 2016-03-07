$(document).ready(function(){

    var listItems = ["Get groceries", "Pay bills", "Do laundry", "Wash car"];

    function renderAll() {
        var $list = $('ol.list');
        $list.html('');
        
        for (var i = 0; i < listItems.length; i++) {
            $list.append('<input type="checkbox" name="task" value="'+ listItems[i] + '">' + listItems[i] + '<br>');
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