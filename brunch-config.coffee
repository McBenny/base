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
        'js/scripts/vendor.js': /^(vendor|bower_components)/
        'js/main.js': /^app/
      order:
# Tell the full order if it matters in any way or the default alphabetical order will apply regardless of the directories
        before: [
          'app/scripts/functionals/base.js',
          'app/scripts/functionals/helpers.js'
          'app/scripts/functionals/functions.js'
          'app/scripts/functionals/general.js'
        ]

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