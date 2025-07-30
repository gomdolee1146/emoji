<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import { useEmojiStore } from '@/stores/emoji';
const useEmoji = useEmojiStore()

const randomData = {
  face: ref(null),
  eyes: ref(null),
  mouth: ref(null),
  acc: ref(null),
  bg: ref(null),
};

const getEmojiInfo = computed(() => {
  return {
    accInfo: useEmoji.face || '',
    mouthInfo: useEmoji.mouth || '',
    eyesInfo: useEmoji.eyes || '',
    faceInfo: useEmoji.face || '',
    bgInfo: useEmoji.bg || '',
  }
}) 
function saveEmoji(){
  let presetData = {name: '', data: {}}
  let text = `${getEmojiInfo.value.faceInfo}${getEmojiInfo.value.eyesInfo}${getEmojiInfo.value.mouthInfo}${getEmojiInfo.value.accInfo}${getEmojiInfo.value.bgInfo}`
  presetData.name = text;
  // presetData.data = useEmoji.getEmojiInfo()
}

const emit = defineEmits(['saveRandomData'])
// watch(randomData, (newVal, oldVal) => {
//   emit('saveRandomData', randomData)
// })
</script>

<template>
  <div class="result">
    <button class="btn-random" @click="useEmoji.getRandomEmoji()"><i></i>랜덤이모지</button>
    <div class="result__wrap">
      <div class="result__bg" :style="`background-color:${getEmojiInfo.bgInfo}`"></div>
      <div class="result__box">
        <div class="result__layer" :class="`select__face-${getEmojiInfo.faceInfo}`"></div>
        <div class="result__layer" :class="`select__eyes-${getEmojiInfo.eyesInfo}`"></div>
        <div
          class="result__layer"
          :class="`select__mouth-${getEmojiInfo.mouthInfo}`"
        ></div>
        <div
          class="result__layer"
          :class="`select__acc-${acc}`"
          v-for="acc in getEmojiInfo.accInfo"
          :key="acc"
        ></div>
      </div>
    </div>
    <button class="btn-save" @click="saveEmoji">저장하기</button>
  </div>
</template>

<style scoped>

.btn-save,
.btn-random {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  height: 28px;
  line-height: 28px;
  padding: 0 10px;
  border-radius: 20px;
  background: #f1f1f1;
  font-size: 16px;
  font-weight: 700;
  color: #505050;
}
.btn-random {
  position: absolute;
  top: 12px;
  right: 12px;
}
.btn-random i {
  display: block;
  width: 18px;
  height: 18px;
  margin-left: 3px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='512' height='512' fill='none'%3E%3Cpath fill='%23000' d='M440.88 129.37 288.16 40.62a64.14 64.14 0 0 0-64.33 0L71.12 129.37a4.002 4.002 0 0 0 0 6.9L254 243.85a4.002 4.002 0 0 0 4.06 0L440.9 136.27a4.01 4.01 0 0 0 1.443-1.466 4.003 4.003 0 0 0-1.463-5.434ZM256 152c-13.25 0-24-7.16-24-16s10.75-16 24-16 24 7.16 24 16-10.75 16-24 16Zm-18 118.81L54 163.48a3.997 3.997 0 0 0-5.463 1.461A4.003 4.003 0 0 0 48 166.94v173.92a47.999 47.999 0 0 0 23.84 41.39L234 479.48a3.997 3.997 0 0 0 5.463-1.461 4.009 4.009 0 0 0 .537-1.999V274.27a4.008 4.008 0 0 0-2-3.46ZM96 368c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24Zm96-32c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24Zm266-172.49L274 271.56a4.005 4.005 0 0 0-2 3.45V476c.001.702.186 1.391.537 1.999a4.012 4.012 0 0 0 3.464 1.997c.702 0 1.391-.185 1.999-.536l162.15-97.23A48.006 48.006 0 0 0 464 340.86V167a3.999 3.999 0 0 0-6-3.49ZM320 424c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24Zm0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24Zm96 32c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24Zm0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24Z'/%3E%3C/svg%3E")
    no-repeat center / auto 100%;
}
.btn-save {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
.result {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 4px solid #f1f1f1;
  border-radius: 24px;
  overflow: hidden;
}
.result__bg {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.4;
  z-index: 0;
  aspect-ratio: 1/1;
}
.result__box {
  position: relative;
  width: 150px;
  height: 150px;
  z-index: 1;
}
.result__layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>