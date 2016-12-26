(function () {
  'use strict';
  //If the number of items in the textbox is less than or equal to 3
  //(e.g., 1, 2, or 3), a message should show up under to the textbox
  //saying "Enjoy!".
  //If the number of items is greater than 3 (4, 5, and above),
  //the message "Too much!" should show up under the textbox.
  //(Hint: To implement this behavior you can utilize the split method.
  //If the textbox is empty and the user clicks the "Check If Too Much" button,
  //the message "Please enter data first" should show up.

  var message1 = "Enjoy!";
  var message2 = "Too much!";
  var message3 = "Please enter data first";

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {

    $scope.calculateItems = function() {
      //If the textbox is empty and the user clicks the button,
      //the message "Please enter data first" should show up.
      if(!$scope.items) {
        $scope.answer = message3;
        return;
      }
      var arr = ($scope.items).split(',');
      console.log(arr);
      //If the number of items in the textbox is less than or equal to 3
      //a message should show up under to the textbox saying "Enjoy!".
      if(arr.length < 4) {
        $scope.answer = message1;
      }
      else {
        $scope.answer = message2;
      }
    };
  }
})();
