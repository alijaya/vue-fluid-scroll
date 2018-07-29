# vue-fluid-scroll

Vue Component for creating fluid scroll. Sometimes you need to scroll with the scrollbar, but the scrolling not fluid enough (because there's a 'step' when you scroll. You want it smoothly transitioned. This is what you need!

[See here the Demo](https://alijaya.github.io/vue-fluid-scroll/)

## Installation

```npm
npm install --save vue-fluid-scroll
```

or

```bash
yarn add vue-fluid-scroll
```

## Import

### Global Registration

```javascript
import Vue from 'vue'
import VueFluidScroll from 'vue-fluid-scroll'

Vue.component('vue-fluid-scroll', VueFluidScroll)
```

### In Component Registration:

```html
<template>
  ...
</template>
<script>
import VueFluidScroll from 'vue-fluid-scroll'

export default {
  name: 'YourComponentName',
  components: {
    VueFluidScroll,
    ...
  },
  ...
}
</script>
```

### Not Using Webpack

If you don't use webpack (for example in CodePen etc):

```html
<link rel="stylesheet" href="node-modules/vue-fluid-scroll/dist/vue-fluid-scroll.css" />
<script src="node-modules/vue-fluid-scroll/dist/vue-fluid-scroll.umd.js"></script>
```

or use unpkg

```html
<link rel="stylesheet" href="https://unpkg.com/vue-fluid-scroll/dist/vue-fluid-scroll.css" />
<script src="https://unpkg.com/vue-fluid-scroll/dist/vue-fluid-scroll.umd.js"></script>
```

and then you still need to register it:

```javascript
Vue.component('vue-fluid-scroll', VueFluidScroll)
```

## Basic Usage

VueFluidScroll uses [VueFakeScroll](https://github.com/alijaya/vue-fake-scroll), maybe you want to read the documentation about that to see how it works.

You can treat this component as a normal div, and because you want to make scrollable area, you need to specify the dimension `width` and `height` of this component.

```html
<template>
  <VueFluilScroll class="scroll">
    ...
  </VueFluidScroll>
</template>

<style scoped>
.scroll {
  width: 100px;
  height: 200px;
}
</style>
```

## Example

[See the Demo](https://alijaya.github.io/vue-fluid-scroll/) and [the corresponding code](https://github.com/alijaya/vue-fluid-scroll/blob/master/src/App.vue)

## Caveats

It has the same caveats as `VueFakeScroll`, you can read it [here](https://github.com/alijaya/vue-fake-scroll/#caveats).

You can style the component with the `margin` and `border`, but please don't style it with `padding`, because it behaves a little bit different than regular div. If you need a `padding`, just make a `div` as a direct child of this component, and set the `width` and `height` to `100%` and then you can put the `padding` in this `div`.

Example:

```html
<template>
  <VueFluidScroll class="outer">
    <div class="inner">
      ... another child here
    </div>
  </VueFluidScroll>
</template>
<style scoped>
.outer {
  width: 400px;
  height: 400px;
  margin: 50px;
  border: 10px;
}
.inner {
  padding: 50px;
}
</style>
```
