import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.Key !== 'loglevel:webpack-dev-server') {
          arr.push(localStorage.getItem(localStorage.key(i) as string));
        }
      }
    }
    return arr;
  },
};

export const useEmojiStore = defineStore('emoji', () => {
  const face = ref('')
  const eyes = ref('')
  const mouth = ref('')
  const acc = ref([])
  const bg = ref('')
  const presetData = storage.fetch()

  function addPreset(state: any, presetData: any) {
    let pName = presetData.name
    let pData = presetData.data

    const presetObj = { item: pData };
    localStorage.setItem(pName, JSON.stringify(presetObj));
    state.presetData.push(presetObj);
  }

  function removePreset(state: any, payload: any){
    localStorage.removeItem(payload.presetData.item);
    state.presetData.splice(payload.index, 1);
  }

  function getImageLength(imgType: string): number {
    const length:Record<string, number> = {acc: 9, eyes: 13, face: 5, mouth: 12 }
    return length[imgType]
  }

  function getRandomColor(){
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  function getRandomNum(max: number) {
    return Math.floor(Math.random() * (max - 1)) + 1;
  }

  let randomData = {}

  function getRandomEmoji() {
    const faceInfo = getRandomNum(getImageLength('face'));
    const eyesInfo = getRandomNum(getImageLength('eyes'));
    const mouthInfo = getRandomNum(getImageLength('mouth'));
    const accInfo = getRandomNum(getImageLength('acc'));
    const bgInfo = getRandomColor();

    randomData = {
      face: faceInfo,
      eyes: eyesInfo,
      mouth: mouthInfo,
      acc: accInfo,
      bg: bgInfo,
    }
  }

  return { face, eyes, mouth, acc, bg, randomData, addPreset, removePreset, getRandomEmoji }
})