# aaron-calculator-native

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Native
# Release
```
keytool -genkey -v -keystore file/location/where/you/want/to/save/appkeystore_ks.jks -keyalg RSA -keysize 2048 -validity 10000 -alias YourApplicatioNameAlias
```
```
tns build android --release --key-store-path /keystore/file/location/appkeystore_ks.jks  --key-store-password thepassword --key-store-alias YourApplicatioNameAlias --key-store-alias-password thepassword
```

# Debug
```
tns build android --bundle --env.uglify
```

