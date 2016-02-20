angular.module('app', [])
  .controller('TodoListController', function($http) {
    var app = this;
    app.test = "hello"
    console.log(app.value)

    app.click = function(koy) {
      $http.post('/test', { _data : koy }).then(function success (response) {
        console.log(response);
      })
    }

    app.show = function(){
      $http.get('/click').success(function (response){
        console.log(response);
      })
    }


  });
