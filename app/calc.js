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

ptCalc.controller('PtCalcCtrl', function($scope) {
  $scope.outsourced = {
    status: "Outsourced"
  };
});