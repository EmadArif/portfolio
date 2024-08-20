<script setup>
import skillsJson from '@/data/skills.json'
import SkillCard from './SkillCard.vue';
import { ref } from 'vue';

const toggledDetailsId = ref('');

function setToggleDetailsId(id) {
    if (toggledDetailsId.value === id) {
        toggledDetailsId.value = '';
        return;
    }
    toggledDetailsId.value = id;
}

</script>

<template>

    <section id="skills"
        class="bg-base-2 relative text-white">

        <div class="container py-20 overflow-hidden">
            <h1 class="about-title text-xl relative 
                text-end  text-second capitalize underline underline-offset-4 font-bold tracking-wide">
                Skills</h1>
            <div v-for="st in skillsJson"
                :key="st.id"
                class="mt-5 border border-gray-100 shadow-2xl p-5">

                <h1 class="uppercase text-xl relative sec-title">{{ st.title }}</h1>

                <div class="grid mt-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 flex-wrap">
                    <SkillCard v-for="s in st.skills"
                        :key="s.id"
                        :skill="s"
                        :showDetails="toggledDetailsId === `${st.id}-${s.id}`"
                        @click="setToggleDetailsId(`${st.id}-${s.id}`)" />
                </div>
            </div>
        </div>

    </section>

</template>

<style scoped>
.about-title::after {
    content: '';
    border-bottom: 1px solid #F26C4F;
    width: 100%;
    right: 70px;
    top: 50%;
    position: absolute;
}
</style>