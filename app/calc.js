var ptCalc = angular.module('PT-Calculator', []);

ptCalc.value('CalcDefaults', {
  storage: 10,
  noServers: 1,
  
  wkBackups: 1,
  yrBackups: 1,
  mthBackups: 1,
  dlBackups: 1,
  
  yrChange: 0.05,
  dlChange: 0.01,

  compressionRate: 0.4
});

ptCalc.service('storageDataService', function(CalcDefaults) {
  return {
    compressData: function(storage) {
      return Math.ceil(storage * CalcDefaults.compressionRate);
    },

    getAnnualGrowth: function(yrChange) {
      return 1 + yrChange;
    },

    getDelta: function(storage, yrChange, dlChange) {
      var compressedData = this.compressData(storage);
      return Math.ceil(compressedData * this.getAnnualGrowth(yrChange) * dlChange);
    }
  };
});

ptCalc.controller('PtCalcCtrl', function($scope) {
  $scope.outsourced = {
    status: "Outsourced"
  };
});