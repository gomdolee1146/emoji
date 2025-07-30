<script setup lang="ts">
import ResultBox from '@/components/resultBox.vue'
import SelectBox from '@/components/selectBox.vue'
import { useEmojiStore } from '@/stores/emoji';

const useEmoji = useEmojiStore()

function saveRandomData(randomData: Record<string, string>) {
  useEmoji.randomData = randomData
}

</script>

<template>
  <main class="main">
    <ResultBox @save-random-data="saveRandomData" />
    <SelectBox :randomData="useEmoji.randomData" />
  </main>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  gap: 20px;
  width: 960px;
  height: 720px;
  padding: 28px 40px;
  border-radius: 40px;
  background: #fff;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 8px 8px rgba(0, 0, 0, 0.12);
}
.main > div {
  flex: 0 0 50%;
  height: 100%;
  border-radius: 20px;
  background: #fff;
}
</style>
