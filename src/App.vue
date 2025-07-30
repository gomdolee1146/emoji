<script setup lang="ts">
</script>

<template>
  <RouterView />
</template>

<style>
@font-face {
  font-family: 'HancomMalangMalang-Regular';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2406-1@1.0/HancomMalangMalang-Regular.woff2')
    format('woff2');
  font-weight: 400;
  font-style: normal;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'HancomMalangMalang-Regular';
  font-size: 16px;
}
ul,
li {
  list-style: none;
}
button,
input {
  border: 0;
  background-color: none;
  background-image: none;
  -webkit-appearance: none;
  appearance: none;
  outline: none;
}
button {
  cursor: pointer;
}
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #e8e8e8;
}</style>