Package.describe({
  name: 'c12o16h1:force-to-www',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'force-to-www)',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/c12o16h1/force-to-www',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use('webapp', 'server');
  api.use('ecmascript');
  api.mainModule('index.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.mainModule('index-tests.js');
});
