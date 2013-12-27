describe("PtCalcCtrl", function() {
  
  var $rootScope, $scope, ctrl, defaults, storageService;

  beforeEach(function() {
    module('PT-Calculator');

    inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      ctrl = $injector.get('$controller')("PtCalcCtrl", {$scope: $scope});
      defaults = $injector.get('CalcDefaults');
      storageService = $injector.get('storageDataService');
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

describe("storageDataService", function() {
  
  var defaults, storageDataService;
    beforeEach(function() {
      module('PT-Calculator');

      inject(function($injector) {
        defaults = $injector.get('CalcDefaults');
        storageDataService = $injector.get('storageDataService', {defaults: defaults});
      });
  });

  describe("compressData", function(defaults) {
    
    it("can compress data", function() {
      var compressedData = storageDataService.compressData(1000);
      expect(compressedData).toEqual(400);
    });
  
  });

  describe("getAnnualGrowth", function() {
    it("calculates Annual Growth when passed in the yearly change rate", function() {
      var annualGrowth = storageDataService.getAnnualGrowth(1.2);
      expect(annualGrowth).toEqual(2.2);
    });
  });

  describe("getDelta", function() {
    it("calculates the storage delta when passed in the storage and yearly and daily change rates", function() {
      var delta = storageDataService.getDelta(1000, 1.3, 5);
      expect(delta).toEqual(4600);
    });
  });

});







