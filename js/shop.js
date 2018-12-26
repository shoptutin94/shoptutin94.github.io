$(document).ready(function(){
    
    $.getJSON("https://spreadsheets.google.com/feeds/list/1gWrihXlnVe57w37Wo-SmN55tAbjs4zJb4RFIFBjzAB4/od6/public/values?alt=json",
    function(data){
        console.log(data);
    })  


})

