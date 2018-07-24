<template>
  <div id="app">
    <div class="vertical-scroll">
      <div class="long-text">
        <ol>
          <li v-for="n in 200" :key="n">I have {{n}} doggo!</li>
        </ol>
      </div>
    </div>
    <div class="horizontal-scroll">
      <div class="long-text">
        <p class="horizontal-text">
          <span v-for="n in 200" :key="n">I have {{n}} doggo!</span>
        </p>
      </div>
    </div>
    <SmoothScroll class="smooth-vertical-scroll">
      <div class="long-text">
        <ol>
          <li v-for="n in 200" :key="n">I have {{n}} doggo!</li>
        </ol>
      </div>
    </SmoothScroll>
    <SmoothScroll class="smooth-horizontal-scroll">
      <div class="long-text">
        <p class="horizontal-text">
          <span v-for="n in 200" :key="n">I have {{n}} doggo!</span>
        </p>
      </div>
    </SmoothScroll>
  </div>
</template>

<script>
import SmoothScroll from './components/SmoothScroll'

export default {
  name: 'app',
  components: {
    SmoothScroll,
  },
}
</script>

<style>
html, body, #app {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

</style>

<style scoped>
#app {
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.vertical-scroll {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 50%;
  height: 50%;
  overflow: auto;
}

.horizontal-scroll {
  position: absolute;
  top: 0%;
  left: 50%;
  width: 50%;
  height: 50%;
  overflow: auto;
}

.smooth-vertical-scroll {
  position: absolute;
  top: 50%;
  left: 0%;
  width: 50%;
  height: 50%;
}

.smooth-horizontal-scroll {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 50%;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.long-text {
  padding: 3em;
}

.horizontal-text {
  width: 2000px;
}

</style>
