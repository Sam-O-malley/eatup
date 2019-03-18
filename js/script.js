console.log("certain death after formative");




function getData() {

$.ajax({
// url: 'https://developers.zomato.com/api/v2.1/reviews?res_id=7100538',
 // url: 'https://developers.zomato.com/api/v2.1/cuisines?city_id=71',
url: 'https://developers.zomato.com/api/v2.1/location_details?entity_id=71&entity_type=city',

   dataType: 'json',
   type: 'GET',
   async: true,
   beforeSend: function(xhr){xhr.setRequestHeader('user-key','0d4d795b7b6b0e26ad6f107918004ec4');
      },// This inserts the api key into the HTTP header
        success: function(response) 
      { 
      console.log(response);
        
      for(var i = 0; i < response.best_rated_restaurant.length; i++){
          
      
        console.log(response.best_rated_restaurant[i].restaurant.name,response.best_rated_restaurant[i].restaurant.location.address,
          response.best_rated_restaurant[i].restaurant.user_rating.aggregate_rating); 
         document.getElementById('dataBox').innerHTML += "<div class='rest_name'>" + response.best_rated_restaurant[i].restaurant.name + "</div>" + response.best_rated_restaurant[i].restaurant.location.address + response.best_rated_restaurant[i].restaurant.user_rating.aggregate_rating +"<br/>";


         }

      } 
    

    });
    }

