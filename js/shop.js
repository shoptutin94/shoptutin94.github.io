$(document).ready(function(){
    
    $.getJSON("https://spreadsheets.google.com/feeds/list/1gWrihXlnVe57w37Wo-SmN55tAbjs4zJb4RFIFBjzAB4/od6/public/values?alt=json",
    function(data){
        data = data['feed']['entry']
        console.log(data);
        showGoods(data);
    })  

     function showGoods(data){
                var out = '';
                for(var i=0; i<data.length; i++){
                    if(data[i]['gsx$show']['$t'] != 0){
                out += ` <div class="col-lg-3 col-md-3 col-sm-2 text-center">`
                out += ` <div class="goods">`
                out += ` <h5 class="name">${data[i]['gsx$name']['$t']}</h5>`
                out += ` <img src="${data[i]['gsx$image']['$t']}" alt="">`
                out += ` <p class="sum">На складе: ${data[i]['gsx$kg']['$t']} кг</p>`
                out += ` <p class="cost">Цена: <span class="cost_style">${data[i]['gsx$cost']['$t']} </span>руб.</p>`
                out += ` </div>`
                out += ` </div>`
            }
                }
                $('.shop-field').html(out);
     }
})

