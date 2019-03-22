// google.charts.load('current', {'packages':['corechart']});
// var mockarooKey;
// var minAge = 10;
// var maxAge = 100;

var minAverage = 0;
var maxAverage = 100;

$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 100,
    values: [ 0, 100 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      minAverage = ui.values[ 0 ];
      maxAverage = ui.values[ 1 ];

  },
  stop:function(event, ui){
      getData();
  }
  });

});

function getData() {

    $.ajax({
           // url: 'https://developers.zomato.com/api/v2.1/reviews?res_id=7100538',
             url: 'https://developers.zomato.com/api/v2.1/location_details?city_id=71&entity_id=36932&entity_type=group',
    
           dataType: 'json',
           type: 'GET',
           async: true,
           beforeSend: function(xhr){xhr.setRequestHeader('user-key',
           'a952103b6e48c2a40500499f78ff2c5b');
       },  // This inserts the api key into the HTTP header

           success: function(response){
               console.log(response);
               var i =0;
               for (i = 0; i < response.best_rated_restaurant.length; i++){
              //  console.log(response.best_rated_restaurant[0].restaurant.name, response.best_rated_restaurant[0].restaurant.location.address, response.best_rated_restaurant[0].restaurant.average_cost_for_two,  );
               console.log(response.best_rated_restaurant[i].restaurant.average_cost_for_two); 
              }
            }
       });
    
  }