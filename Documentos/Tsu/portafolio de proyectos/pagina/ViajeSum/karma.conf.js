module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),  // Puedes mantener Chrome si lo necesitas
      require('karma-firefox-launcher'), // Asegúrate de incluir el lanzador de Firefox
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        // opciones de configuración para Jasmine
      },
    },
    jasmineHtmlReporter: {
      suppressAll: true // elimina los rastros duplicados
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/viaje-sum'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    browsers: ['Firefox'], // Cambia a 'Chrome' si prefieres usar Chrome
    restartOnFileChange: true
  });
};
