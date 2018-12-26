// $(document).ready(function(){
    
//     $.getJSON("https://spreadsheets.google.com/feeds/list/1gWrihXlnVe57w37Wo-SmN55tAbjs4zJb4RFIFBjzAB4/od6/public/values?alt=json",
//     function(data){
//         data = data['feed']['entry']
//         console.log(data);
//         showGoods(data);
//     })  

window.onload = function(){
    // послать запрос

    let getJSON = function(url, callback){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType= 'json';
        xhr.onload = function(){
            let status = xhr.status;
            if(status == 200){
                callback(null, xhr.response)    
               
                
            }
            else{
                callback(status,xhr.response);
            }
        };
        xhr.send();
        
    }

    getJSON('https://spreadsheets.google.com/feeds/list/1gCFewzakIekxL5P1s74TZ055SNalSHXiw-Bkf-N0Tz0/od6/public/values?alt=json', function(err,data){
        console.log(data); 
        if(err !== null){
            alert('Error: ' +  err);
        }
        else{
            data = data['feed']['entry'];
            console.log(data);
            document.querySelector('.shop-field').innerHTML = showGoods(data);
        }


    
    });

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
        out += ` <p class="buy"><button class="btn btn-success" data="${data[i]['gsx$id']['$t']}">Купить</button></p>`
        out += ` </div>`
        out += ` </div>`
    }
        }
        return out;
}

}

//      function showGoods(data){
//                 var out = '';
//                 for(var i=0; i<data.length; i++){
//                     if(data[i]['gsx$show']['$t'] != 0){
//                 out += ` <div class="col-lg-3 col-md-3 col-sm-2 text-center">`
//                 out += ` <div class="goods">`
//                 out += ` <h5 class="name">${data[i]['gsx$name']['$t']}</h5>`
//                 out += ` <img src="${data[i]['gsx$image']['$t']}" alt="">`
//                 out += ` <p class="sum">На складе: ${data[i]['gsx$kg']['$t']} кг</p>`
//                 out += ` <p class="cost">Цена: <span class="cost_style">${data[i]['gsx$cost']['$t']} </span>руб.</p>`
//                 out += ` </div>`
//                 out += ` </div>`
//             }
//                 }
//                 $('.shop-field').html(out);
//      }
// })

