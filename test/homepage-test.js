/**
 * Webshop selenium testcases using Nodejs
 */

describe('Webshopiis Tests:', function() {

	var assert = require('assert');
	var webdriver = require('selenium-webdriver');
	var test = require('selenium-webdriver/testing');
	var driver;
	const myTimeOut = 15000;
	var url = "<PUT URL HERE>";
	this.timeout(myTimeOut);

	before(function() {
	});

	after(function() {
	});

	beforeEach(function() {
		driver = new webdriver.Builder().
			withCapabilities(webdriver.Capabilities.chrome()).
			build();
		driver.get(url);
	});

	afterEach(function() {
		driver.quit();
	});

	// test cases

	it('test_StartPage_title_equals_webshop_909qs', function(done) {
		driver.getTitle().then(function(title) {
			setTimeout(done, myTimeOut);
			assert.equal("webshop_909qs", title);
			done();
		});

	});

	it('test_Karten_link_existiert', function(done) {
		var elem = driver.findElement(webdriver.By.css("#mainNavigationBackground > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)")).then(function(title) {
			setTimeout(done, myTimeOut);
			assert(elem != null);
			done();
		});
	});

	it('test_Artikel_link_existiert', function(done) {
		var elem = driver.findElement(webdriver.By.css("#mainNavigationBackground > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")).then(function(title) {
			setTimeout(done, myTimeOut);
			assert(elem != null);
			done();
		});
	});

	it('test_Abonnements_link_existiert', function(done) {
		var elem = driver.findElement(webdriver.By.css("#mainNavigationBackground > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)")).then(function(title) {
			setTimeout(done, myTimeOut);
			assert(elem != null);
			done();
		});
	});

	it('test_Geschenkgutscheine_link_existiert', function(done) {
		var elem = driver.findElement(webdriver.By.css("#mainNavigationBackground > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)")).then(function(title) {
			setTimeout(done, myTimeOut);
			assert(elem != null);
			done();
		});
	});

	it('test_Mein_Konto_link_existiert', function(done) {
		var elem = driver.findElement(webdriver.By.css("#mainNavigationBackground > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")).then(function(title) {
			setTimeout(done, myTimeOut);
			assert(elem != null);
			done();
		});
	});
});
