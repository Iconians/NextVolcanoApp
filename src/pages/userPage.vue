<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '../../supabase'
import updatePasswordComp from '@/components/updatePasswordComp.vue'
import ScoreHistory from '@/components/ScoreHistory.vue'
import UserPageBtns from '@/components/userPageBtns.vue'
import { useToast } from 'vue-toast-notification'

interface Score {
  correct: number
  incorrect: number
  timeStamp: string | null | undefined
}

const userName = ref('')
const userScore = ref<Score[]>([])
const backgroundMusic = ref<HTMLAudioElement | null>(null)
const toast = useToast()

const playBackgroundMusic = () => {
  if (backgroundMusic.value) {
    backgroundMusic.value.play()
  }
}

function safeParse(jsonString: string) {
  try {
    return JSON.parse(jsonString)
  } catch (error) {
    console.error('Failed to parse JSON string:', error)
    toast.error('Failed to parse user data')
    return null
  }
}

const findUser = async () => {
  const { data } = await supabase.auth.getSession()
  const userData = data.session?.user
  const user = await supabase
    .from('profile')
    .select('display_name, score')
    .eq('user_id', userData?.id)
  if (user.data !== null) {
    userName.value = user.data[0].display_name
    const parsedScores = user.data[0].score.map(safeParse).filter(Boolean)
    if (parsedScores !== null) {
      userScore.value = parsedScores.slice().reverse()
    }
  }
}

const updateUsername = (newUserName: string) => {
  userName.value = newUserName
}

findUser()
playBackgroundMusic()
</script>

<template>
  <section
    class="section height h-full w-full text-center text-white bg-activeVolcano bg-cover userPageSection"
  >
    <div class="overflow-y-auto scroll w-full bg-black/40 rounded-[50px] pt-[20px]">
      <div class="userName text-3xl">{{ userName }}'s Profile</div>
      <div class="flex flex-wrap justify-around w-full m-auto mt-5">
        <score-history :userScore="userScore" />
        <update-password-comp @updateUsername="updateUsername" />
      </div>
      <user-page-btns />
    </div>
  </section>
  <audio ref="backgroundMusic" src="/lava-loop-3.wav" autoplay loop></audio>
</template>

<style scoped>
.scroll::-webkit-scrollbar {
  width: 10px;
}

.scroll::-webkit-scrollbar-track {
  background: none;
}

@media (max-width: 1115px) {
  .section {
    overflow: auto;
  }
}
@media (max-width: 400px) {
  .section {
    height: unset;
  }
}

@keyframes colorChange {
  0% {
    background-color: red;
  }
  50% {
    background-color: yellow;
  }
  100% {
    background-color: red;
  }
}
</style>
