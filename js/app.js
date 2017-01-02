var myApp=angular.module('myApp',['ui.router','ngGrid','listModule']);


myApp.config(function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise('/login');
	$stateProvider
		.state('login',{
			url:'/login',
			templateUrl:'tpls/login.html'
		})
		.state('main',{
			url:'/main',
			views:{
				'':{
					templateUrl:'tpls/main.html'
				},
				'toolbar@main':{
					templateUrl:'tpls/toolbar.html'
				}
			}
		})
		.state('main.list',{
			url:'/list/{index:[0-9]{1,5}}',
			views:{
				'':{
					templateUrl:'tpls/list.html'
				},
				'according@main.list':{
					templateUrl:'tpls/according.html'
				},
				'grid@main.list':{
					templateUrl:'tpls/grid.html'
				}
			}
		})
		.state('main.add',{
			url:'/addform',
			templateUrl:'tpls/addform.html'
		})
		.state('main.update',{
			url:'/updateform',
			templateUrl:'tpls/update.html'
		})
	
});
