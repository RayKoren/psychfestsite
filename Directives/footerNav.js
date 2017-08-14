angular.module('app.directives')  .directive("footernav", function(){
  return {
       templateUrl: './templates/footerNav.html',
       replace: true,
   };
});