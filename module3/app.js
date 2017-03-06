(function() {
	'use strict';

	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', FoundItemsDirective);


	function FoundItemsDirective() {
		var ddo = {
    		templateUrl: 'foundItemsTemplate.html',
    		scope: {
			    found: '<',
			    onRemove: '&'
		    },
    		controller: NarrowItDownController,
    		controllerAs: 'ctrl',
    		bindToController: true
  	};

		return ddo;
	}


	NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
	function NarrowItDownController(MenuSearchService) {
		
		var ctrl = this;

		ctrl.searchItems = function() {
			var promise = MenuSearchService.getMatchedMenuItems($scope.searchTerm);
					promise.then(function(result) {
						ctrl.found = result;
					})
					.catch(function (error) {
			    		console.log("Something went terribly wrong.");
			  		});
		}

		ctrl.removeItem = function (itemIndex) {
		    ctrl.found.splice(itemIndex, 1);
		 }; 

	}

	MenuSearchService.$inject = ['$http'];
	function MenuSearchService() {
		var service = this;

		service.getMatchedMenuItems = function(searchTerm) {
			//Reaching out to the server using the $http to retrieve the list of all the menu items
			//once it gets all the menu items, it should loop through them to pick out the ones
			//whose description matches the searchTerm.
			//Once a list of found items is compiled, it should return that list (wrapped in a promise).
			return $http({
      			method: "GET",
      			url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    			}).then(function(result) {
    				// process result and only keep items that match
    				var foundItems = result.data;

    				//return processed items
    				return foundItems;
    			});
		}
	}




})();