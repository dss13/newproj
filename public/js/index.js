var countDownDate = new Date("Jan 5, 2018 15:37:25").getTime()

var x = setInterval(function() {
    var now = new Date().getTime()
    var distance = countDownDate - now
    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

    $("#days").text(days)
    $("#hours").text(hours)
    $("#minutes").text(minutes)
    $("#seconds").text(seconds)

    if (distance < 0) {
        clearInterval(x)
        $("#timer").hide()
    }
}, 1000)

var app = angular.module('app', [])
app.controller('teamController', function($scope, $http) {
    $http.get('data/team.json').then(function(results) {
        $scope.team = results.data.data
    })
})
app.controller('speakersController', function($scope, $http) {
    $http.get('data/speakers.json').then(function(results) {
        $scope.speakers = results.data.data
    })
})

$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".scrollable").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});