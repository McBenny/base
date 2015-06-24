exports.config =

  paths:
    public: 'public'
    watched: ['app']

  modules:
    wrapper: false
    definition: false

  skip_files: []

  files:
    javascripts:
      joinTo:
        'js/scripts/vendor.js': /^bower_components/
        'js/main.js': /^app/

    stylesheets:
      defaultExtension: 'scss'
      joinTo:
        'css/styles.min.css': /^app/
      order:
        before: []

  plugins:
    sass:
      mode: 'ruby'
      options: ['--style compressed']