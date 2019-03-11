console.log("certain death after formative");


var dataJSON;


    var key;
$.ajax({
    url: "config.json",
    dataType: "json",
    type: "GET",
    success:function(data){
        key = data[0].API_KEY; //key from config.json
        console.log(key)
        getData(); //minAge, maxAge, minIncome, maxIncome); // function call with values provided in this file
    },
    error:function(error){
        console.log("ERROR");
        console.log(error);
    }
    
    function getData(){
        console.log("https://developers.zomato.com/api/v2.1/cities?q=wellington%20new%20zealand
        ="0d4d795b7b6b0e26ad6f107918004ec4"+key);
        $.ajax({
            url: "https://developers.zomato.com/api/v2.1/cities?q=wellington%20new%20zealand
            ="0d4d795b7b6b0e26ad6f107918004ec4"+key,
            dataType: "json",
            type: "GET",