demoApp.filter('greet', function(){
	return function (name) {
		return 'Hello, ' + name + '!';
	};
});