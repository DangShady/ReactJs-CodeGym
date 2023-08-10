let input =  document.querySelector("#input")
let result =  document.querySelector("#result")
function check(){
    var inputValue = +input.value;
    $.ajax({
        url : `http://api.iamdien.com:8000/get_name/?id=${inputValue}`,
        // url: "https://cellphones.com.vn/mobile/samsung.html",
        type: "GET", 
        data : {},
        success: function(response, textStatus, jqXHR) {
            result.innerHTML = response
        },
        error: function (jqXHR, textStatus, errorThrown) {
    
        }
    })
}

function randomHandle(){
    $.ajax({
        url:"http://api.iamdien.com:8000/random_number/",
        type: "GET", 
        data : {},
        success: function(response, textStatus, jqXHR){
            input.value = response
check()
        } , 
        error: function (jqXHR, textStatus, errorThrown) {
    
        } 
    })
}

