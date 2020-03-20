//= wrapped

//= require_self
//= require_tree translations

angular.module('streama.translations', ['pascalprecht.translate'])
	.config(function ($translateProvider) {
		$translateProvider.determinePreferredLanguage();
		$translateProvider.fallbackLanguage('pt');
	})

	.run(function ($rootScope) {
		$rootScope.availableLanguages = ['cn', 'en', 'fr', 'es', 'de', 'kr', 'nl', 'pt', 'da', 'ja', 'it', 'ar', 'ru', 'hu'];
	});
