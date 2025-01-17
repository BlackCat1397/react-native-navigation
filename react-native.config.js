module.exports = {
  dependency: {
    platforms: {
      ios: {},
      android: {
        sourceDir: './lib/android/app/',
        packageImportPath: 'import com.reactnativenavigation.react.NavigationPackage;',
        packageInstance: 'new NavigationPackage(reactNativeHost)',
      },
    },
    assets: [],
    hooks: {
      postlink: 'node node_modules/react-native-navigation/autolink/postlink/run',
    },
  },
  project: {
    android: {
      sourceDir: './playground/android/',
    },
  },
};
