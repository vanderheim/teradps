angular.module('tera').controller('YesNoController', ['$scope', 'close', '$http', function($scope, close, $http) {
  $scope.loginInfo = {};
  $scope.userId = '';
  $scope.authToken = '';
  $scope.authFail = false;
  $scope.authSuccess = false;

  $scope.fetchKeys = function(){
    $http.post("/api/login", $scope.loginInfo).success(function(auth) {
      $scope.userId = auth.data.userId;
      $scope.authToken = auth.data.authToken;
      $scope.authFail = false;
      $scope.authSuccess = true;
      console.log("Successfully retrieved!");
    }).error(function() {
      $scope.authFail = true;
      $scope.authSuccess = false;
    })

  }

  $scope.close = function(result) {
 	  close(result, 500); // close, but give 500ms for bootstrap to animate
  };

}]);

angular.module('tera').controller('ModalController', ['$scope', '$http', 'ModalService', function($scope, $http, ModalService) {

  $scope.showAModal = () => {

    // Just provide a template url, a controller and call 'showModal'.
    ModalService.showModal({
      templateUrl: "client/ranking/navbar/modal.html",
      controller: "YesNoController"
    }).then(function(modal) {
      // The modal object has the element built, if this is a bootstrap modal
      // you can call 'modal' to show it, if it's a custom modal just show or hide
      // it as you need to.
      modal.element.modal();
    });

  };

}]);

angular.module('tera').controller('NavBarController', ['$scope', '$http', 'ModalService', function($scope, $http, ModalService) {

  $scope.showAModal = () => {

    // Just provide a template url, a controller and call 'showModal'.
    ModalService.showModal({
      templateUrl: "client/ranking/poison/modal.html",
      controller: "YesNoController"
    }).then(function(modal) {
      // The modal object has the element built, if this is a bootstrap modal
      // you can call 'modal' to show it, if it's a custom modal just show or hide
      // it as you need to.
      modal.element.modal();
    });

  };

}]);
