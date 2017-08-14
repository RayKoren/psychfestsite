angular.module('app.directives')  .directive("topnav", function(){
  return {
       templateUrl: './templates/topNav.html',
       replace: true,
   };
});