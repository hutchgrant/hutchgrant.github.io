var univFunding = angular.module('univFunding', ['ui-bootstrap']);
	
	function MyAppController($scope, $http, $sce)
	{
	
	$http.get('./funding.json' ).then( function ( response ) {
	    $scope.univ = response.data;
	    
	    $scope.trustedJsonRequest = function() {
	      return $sce.trustAsHtml($scope.univ);
	    };

	    $scope.totalUniv = $scope.univ.length;
		$scope.title = 'Ontario University Provincial Funding';
		$scope.description = 'All financial information on what each Ontario ministry pays to each university';

		$scope.clearFilter = function() {
			$scope.query = '';
		};

	});
	
	}