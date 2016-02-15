Package.describe({
  name: 'astrocoders:creditcardform',
  version: '1.1.0',
  summary: 'Add jessepollak card lib to client',
  git: 'https://github.com/Astrocoders/meteor-credit-card-form',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('card.js', 'client');
});
