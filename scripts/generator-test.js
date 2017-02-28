var appScripts = require('@ionic/app-scripts');
console.log('appScripts: ', appScripts.generateNonTab);

appScripts.generateNonTab({
  type: 'page',
  name: 'my page',
  includeSpec: true,
  includeNgModule: true
}).then((fileCreated) => {
  console.log('filesCreated: ', fileCreated);
});
