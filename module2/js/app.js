(function() {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
		var buyList = this;

		buyList.items = ShoppingListCheckOffService.getToBuyItems();
		buyList.buyItem = function (itemIndex) {
			ShoppingListCheckOffService.buyItem(itemIndex);
		};
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var boughtList = this;

		boughtList.items = ShoppingListCheckOffService.getBoughtItems();
	}

	function ShoppingListCheckOffService() {
		var service = this;

		//arrays hold to buy and bought items
		var boughtItems = [];
		var toBuyItems = [
			{
				name: 'croissant',
      			quantity: 5
			},
			{
				name: 'milk',
      			quantity: 1
			},
			{
				name: 'eggs',
      			quantity: 12
			},
			{
				name: 'coffee',
      			quantity: 2
			},
			{
				name: 'apple',
      			quantity: 4
			}

		];

		service.buyItem = function (itemIndex) {
			var item = toBuyItems.splice(itemIndex, 1)[0]
			boughtItems.push(item);
		};

		service.getBoughtItems = function () {
			return boughtItems;
		};

		service.getToBuyItems = function () {
			return toBuyItems;
		};
	}

})();