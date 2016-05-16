var url = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json";
url += '?' + $.param({
  'api-key': "3d68093903fd47f48ca09fdb284aadb6"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

console.log(url);