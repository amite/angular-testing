describe("PtCalcCtrl", function() {
  var scope, ctrl;

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller(PtCalcCtrl, { $scope: scope });
  }));

  it('should change greeting value if name value is changed', function() {
    scope.name = "Frederik";
    scope.$digest();
    expect(scope.greeting).toBe("Greetings Frederik");
  });

});