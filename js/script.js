console.log("certain death after formative");


function getData() {

$.ajax({
// url: 'https://developers.zomato.com/api/v2.1/reviews?res_id=7100538',
 // url: 'https://developers.zomato.com/api/v2.1/cuisines?city_id=71',
url: 'https://developers.zomato.com/api/v2.1/location_details?entity_id=71&entity_type=city',

   dataType: 'json',
   type: 'GET',
   async: true,
   beforeSend: function(xhr){ xhr.setRequestHeader('user-key','0d4d795b7b6b0e26ad6f107918004ec4');
      },// This inserts the api key into the HTTP header
        success: function(response) 
      { 
      console.log(response);
        
        var zomato_api = document.getElementById('zomato_data');

      for(var i = 0; i < response.best_rated_restaurant.length; i++){
          
     var api_container = document.createElement('div');

      // console.log(response.best_rated_restaurant[i].restaurant.offers.photos_url);

      // var zomato_img = document.createElement("img");

      // zomato_img.src = (response.best_rated_restaurant[i].restaurant.photos_url);

      // var src = document.getElementById('zomato_img-display');

      // src.appendChild(zomato_img);

     api_container.className += 'card-body databox';

     api_container.innerHTML += ( '<img class=img_container id=zomato_img-display src="response.best_rated_restaurant[i].restaurant.offers.photos_url">' );

     api_container.innerHTML += ( '<h3 class=card-title id="restaurant_title">' + response.best_rated_restaurant[i].restaurant.name);

      api_container.innerHTML += ('<span> Address </span><br><p class=card-title  id="restaurant_address">'  + response.best_rated_restaurant[i].restaurant.location.address);

      api_container.innerHTML += (' <span> Rating </span><p class=card-title id="restaurant_rating" >' + response.best_rated_restaurant[i].restaurant.user_rating.aggregate_rating);

      console.log(api_container.innerHTML += ('<h4 class=card-title>' + response.best_rated_restaurant[i].restaurant.cuisines));

  
      console.log(zomato_api);  
        zomato_api.appendChild(api_container);
      }


      } 
    

    });

    }

// cusines
    function getData_cuisines() {

      $.ajax({
      url: 'https://developers.zomato.com/api/v2.1/cuisines?city_id=71',
      
        dataType: 'json',
        type: 'GET',
        async: true,
        beforeSend: function(xhr){ xhr.setRequestHeader('user-key','0d4d795b7b6b0e26ad6f107918004ec4');
           },// This inserts the api key into the HTTP header
             success: function(response)
           {
           console.log(response);
      
             var zomato_api = document.getElementById('zomatoCuisine_data');
      
           for(var i = 0; i < response.cuisines.length; i++){
      
          var api_container = document.createElement('div');
      
      
          api_container.className += 'card-body databox';
      
      
          api_container.innerHTML += ( '<h3 class=card-title id="restaurant_title">' + response.cuisines[i].cuisine.cuisine_name);
      
      
               console.log(zomato_api);
               zomato_api.appendChild(api_container);
              }
           }
      
      
         });
      
         }

