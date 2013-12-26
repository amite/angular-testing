describe("PtCalcCtrl", function() {
  
  var $rootScope, $scope, ctrl;

  beforeEach(function() {
    module('PT-Calculator');

    inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      ctrl = $injector.get('$controller')("PtCalcCtrl", {$scope: $scope});
    });
  });

  describe("Initialization", function() {
    it("should set the status of outsourced to outsourced", function() {
      expect($scope.outsourced.status).toEqual("Outsourced");
    });
  });

});