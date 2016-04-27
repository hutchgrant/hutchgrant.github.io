angular.module('univFunding', [])
	
	.controller('FundController', function($scope, $http) {
	
		$http.get('./funding.json' ).then( function ( response ) {
		    $scope.univ = response.data;
		    
		    $scope.trustedJsonRequest = function() {
		      return $sce.trustAsHtml($scope.univ);
		    };

		    $scope.totalUniv = $scope.univ.length;
			$scope.title = 'Ontario University Provincial Funding';
			$scope.description = 'All financial information on what each Ontario ministry pays to each university';
			$scope.explanationTitle = "Methodology";
			var method = "methodology text";
			$scope.fundingExplanation = method;

			$scope.clearFilter = function() {
				$scope.query = '';
			};

			$scope.methodology = function(){
				$scope.explanationTitle = "Methodology";
				$scope.fundingExplanation = "methodology text";
			}

			$scope.problems = function(){
				$scope.explanationTitle = "Problems";
				$scope.fundingExplanation = "problem text";
			}

			$scope.results = function(){
				$scope.explanationTitle = "Results";
				$scope.fundingExplanation = "result text";
			}
		});
	
	});