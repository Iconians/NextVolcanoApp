<script setup lang="ts">
import { supabase } from '../../supabase.js'
import { ref } from 'vue'
import ScoresComp from '../components/scoresComp.vue'
import { useToast } from 'vue-toast-notification'

const toast = useToast()

const scores = ref<{ user_name: string; score: number }[] | null>([])
const backgroundMusic = ref<HTMLAudioElement | null>(null)

const playBackgroundMusic = () => {
  if (backgroundMusic.value) {
    backgroundMusic.value.play()
  }
}

const fetchScores = async () => {
  const { data: score, error: fetchError } = await supabase
    .from('high_score')
    .select('user_name, score')
    .order('score', { ascending: false })
    .limit(10)
  if (fetchError) {
    toast.error('Error fetching scores')
  }
  scores.value = score
}

fetchScores()
playBackgroundMusic()
</script>

<template>
  <section
    class="highScoreSection section h-full w-full text-center bg-stHelensWithPlume bg-cover bg-center text-white"
  >
    <div class="pageWrapper flex flex-col justify-around h-full">
      <div class="">
        <h1 class="text-3xl">High Scores</h1>
      </div>
      <scores-comp :scores="scores" />
      <div>
        <router-link class="mr-8 text-2xl color-change" to="/">Home</router-link>
        <router-link class="text-2xl color-change" to="/userPage">Profile</router-link>
      </div>
    </div>
  </section>
  <audio ref="backgroundMusic" src="/lava-loop-3.wav" autoplay loop></audio>
</template>

<style scoped>
.highScoreSection {
  position: relative;
}
.highScoreSection::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: black;
  opacity: 0.4;
  z-index: 1;
}
.pageWrapper {
  position: relative;
  z-index: 2;
}

.scroll::-webkit-scrollbar {
  width: 10px;
}

.scroll::-webkit-scrollbar-track {
  background: none;
}

.color-change {
  animation: colorChange 3s infinite;
}

.color-change:hover {
  animation: hoverColorChange 2s infinite;
  border-radius: 20px;
  padding: 10px;
}

@keyframes colorChange {
  0% {
    color: red;
  }
  50% {
    color: yellow;
  }
  100% {
    color: red;
  }
}

@keyframes hoverColorChange {
  0% {
    background-color: red;
    color: black;
  }
  50% {
    background-color: yellow;
    color: red;
  }
  100% {
    background-color: red;
    color: black;
  }
}
</style>
