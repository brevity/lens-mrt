Package.describe({
  summary:'A meteor package for displaying nlm data with the elife lens viewer.'
});

Package.on_use(function (api, where) {
  api.export('lens');
  //api.add_files('idx.js', ['server']);
});

Npm.depends({
    "substance-util": "0.2.0",
    "substance-surface": "0.4.0-1",
    "substance-operator": "0.3.0-1",
    "substance-document": "0.6.0-1",
    "substance-data": "0.9.0-1",
    "substance-chronicle": "0.3.0-1",
    "substance-application": "0.2.0-1",
    "lens-article": "0.1.0",
    "lens-reader": "0.1.0",
    "lens-outline": "0.2.0",
    "lens-converter": "0.1.0"
});
