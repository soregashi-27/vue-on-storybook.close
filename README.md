# vue-on-storybook

> A Vue.js project made by webpack-simple package on storybook.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Checkout version

```
# Checkout vue version
npm list vue
```

## Install storybook devdependencies
```
# Storybook6.* can be used with vue-loader15.* above.
npm ERR! Could not resolve dependency:
npm ERR! peer vue-loader@"^15.7.0" from @storybook/vue@6.3.6
npm ERR! node_modules/@storybook/vue
npm ERR!   dev @storybook/vue@"*" from the root project

# vue-loader install
npm i vue-loader@15.9.8
(※Currently stable version(2021/08/03))

# storybook6.* install 
npm install -D @storybook/vue

```


For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
