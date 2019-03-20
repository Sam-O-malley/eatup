// google.charts.load('current', {'packages':['corechart']});
// var mockarooKey;
var minIncome = 100;
var maxIncome = 200;
// var minAge = 10;
// var maxAge = 100;

$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 100000,
    values: [ 10000, 50000 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      minIncome = ui.values[ 0 ];
      maxIncome = ui.values[ 1 ];

  },
  stop:function(event, ui){
      getData();
  }
  });

})

//   function getData(){
//     $.ajax({
//         url: 'https://my.api.mockaroo.com/ageincome2.json?key='+mockarooKey+'&min_income='+minIncome+'&max_income='+maxIncome+'&min_age='+minAge+'&max_age='+maxAge+"&count=100",
//         dataType: 'json',
//         type: 'get',
//         success:function(data){
//             console.log(data);

//             var dataTable = new google.visualization.DataTable();
//             // dataTable.addColumn("number", "Age");
//             dataTable.addColumn("number", "Income");

//             for (var i = 0; i < data.length; i++) {
//                 dataTable.addRow([data[i].age, data[i].annual_income])
//             }

//             var options = {
//                 title: 'Age Vs Income Scatter Chart'
//             }

//             // var chart = new google.visualization.ScatterChart(document.getElementById('scatterChart'));
//             // chart.draw(dataTable, options)
//         },
//         error:function(error){
//             console.log(error);
//             console.log('Something went wrong while getting the Mockaroo data')
//         }
//     })
// }