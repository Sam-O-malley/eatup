function getData() {

    $.ajax({
           // url: 'https://developers.zomato.com/api/v2.1/reviews?res_id=7100538',
             url: 'https://developers.zomato.com/api/v2.1/location_details?entity_id=36932&entity_type=group',
    
           dataType: 'json',
           type: 'GET',
           async: true,
           beforeSend: function(xhr){xhr.setRequestHeader('user-key',
           'a952103b6e48c2a40500499f78ff2c5b');
       },  // This inserts the api key into the HTTP header

           success: function(response){
               console.log(response);
               var i =0
               for (i = 0; response.best_rated_restaurant.length; i++){
               console.log(response.best_rated_restaurant[0].restaurant.name, response.best_rated_restaurant[0].restaurant.location.address, response.best_rated_restaurant[0].restaurant.average_cost_for_two,  );
               }
            }
           // document.getElementById("mainContainer").innerHTML = "";
       });
    }  
    getData(); 