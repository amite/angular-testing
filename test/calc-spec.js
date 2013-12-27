describe("PtCalcCtrl", function() {
  
  var $rootScope, $scope, ctrl;

  beforeEach(function() {
    module('PT-Calculator');

    inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      ctrl = $injector.get('$controller')("PtCalcCtrl", {$scope: $scope});
      defaults = $injector.get('CalcDefaults');
    });
  });

  describe('Setting Calculator defaults', function () {
    
    it("should instantiate with storage of 10 GB", function() {
      expect(defaults.storage).toEqual(10);
    });

    it("should instantiate with 1 server", function() {
      expect(defaults.noServers).toEqual(1);
    });

    it("should instantiate with 1 weekly Backup", function() {
      expect(defaults.wkBackups).toEqual(1);
    });

    it("should instantiate with 1 yearly Backup", function() {
      expect(defaults.yrBackups).toEqual(1);
    });

    it("should instantiate with 1 monthly Backup", function() {
      expect(defaults.mthBackups).toEqual(1);
    });

    it("should instantiate with 1 daily Backup", function() {
      expect(defaults.dlBackups).toEqual(1);
    });

    it("should instantiate with a yearly change rate of 0.05", function() {
      expect(defaults.yrChange).toEqual(0.05);
    });

    it("should instantiate with a daily change rate of 0.01", function() {
      expect(defaults.dlChange).toEqual(0.01);
    });

    it("should instantiate with a compression rate of 0.4", function() {
      expect(defaults.compressionRate).toEqual(0.4);
    });

  });

  describe("Initialization", function() {
    it("should set the status of outsourced to outsourced", function() {
      expect($scope.outsourced.status).toEqual("Outsourced");
    });
  });

});