angular.module('app.directives')  .directive("subfooter", function(){
  return {
       templateUrl: './templates/subFooter.html',
       replace: true,
   };
});
