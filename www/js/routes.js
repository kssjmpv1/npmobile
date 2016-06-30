angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.myInventory', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/myInventory.html',
        controller: 'myInventoryCtrl'
      }
    }
  })

  .state('tabsController.requests', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/requests.html',
        controller: 'requestsCtrl'
      }
    }
  })

  .state('tabsController.settings', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.itemInfo'
      2) Using $state.go programatically:
        $state.go('tabsController.itemInfo');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page6
      /page1/tab5/page6
  */
  .state('tabsController.itemInfo', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/itemInfo.html',
        controller: 'itemInfoCtrl'
      },
      'tab5': {
        templateUrl: 'templates/itemInfo.html',
        controller: 'itemInfoCtrl'
      }
    }
  })

  .state('tabsController.browse', {
    url: '/page7',
    views: {
      'tab5': {
        templateUrl: 'templates/browse.html',
        controller: 'browseCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});