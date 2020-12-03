exports.include = [
  'react-native-web/dist/cjs',
  'vite-plugin-startupjs/vendor/react-native-web',
  '@nx-js/observer-util',
  'react-native-dynamic-style-processor',
  '@startupjs/babel-plugin-rn-stylename-to-style/process',
  '@startupjs/babel-plugin-rn-stylename-to-style/dimensions',
  '@startupjs/babel-plugin-rn-stylename-to-style/matcher',
  'uuid',
  'arraydiff',
  'sharedb/lib/client',
  'rich-text',
  'racer-highway/lib/browser/socket',
  'hoist-non-react-statics',
  'path-to-regexp',
  '@startupjs/ui',
  '@startupjs/app',
  '@startupjs/docs',
  'startupjs',
  'events',
  'eventemitter3',
  'startupjs/app',
  'startupjs/init',
  'startupjs/orm',
  'qs',
  'fast-deep-equal',
  '@mdx-js/react',
  '@fortawesome/fontawesome-svg-core',
  '@startupjs/react-native-fontawesome',
  'react-native-svg/src/ReactNativeSVG.web.ts',
  'parse-prop-types',
  '@startupjs/prop-types',
  '@startupjs/react-is',
  '@startupjs/ui/config/colorToRGBA',
  '@startupjs/ui/config/helpers',
  'randomcolor',
  'react-native-drawer-layout-polyfill'
]

exports.exclude = [
  '@react-native-community/datetimepicker',
  '@react-native-picker/picker',
  'react',
  'react-dom',
  'react-native',
  'patch-package',
  'postinstall-postinstall',
  'nconf',
  'react-native-code-push',
  'react-native-collapsible',
  'sharedb'
]
