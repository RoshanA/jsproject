<<<<<<< HEAD
=======
var tableData = document.getElementById("addData");

tableData.onclick = function(){

>>>>>>> 612f85dd9d79a7a36b01795a62ea62a5c19edd8f

var url = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json";
url += '?' + $.param({
  'api-key': "3d68093903fd47f48ca09fdb284aadb6"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(data) {
  console.log(data);
   $.each(data.results, function(i, item) {
                $('<tr>').html(
                    '<td>'+item.title+'</td>'+
                    '<td>'+item.description+'</td>'+
                    '<td>'+item.author+'</td>'+
                    '<td>'+item.publisher+'</td>'
                ).appendTo('#books');

            });
        }).fail(function(err) {
  throw err;
});

<<<<<<< HEAD

=======
};
>>>>>>> 612f85dd9d79a7a36b01795a62ea62a5c19edd8f
