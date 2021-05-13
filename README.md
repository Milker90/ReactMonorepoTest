## 运行步骤

### 配置环境

```
yarn install
```

### 运行 iOS

```
cd packages/mobile/ios
pod install --verbose
cd ..
npx react-native run-ios --device iPhone(iPhone是硬件设备名称)
```

### 运行 android

```
cd packages/mobile
npx react-native run-android
```

### 运行 web

```
cd /packages/web-cra
yarn start
```
