<script setup>
import FAQJson from '@/data/faq.json'
import FAQCard from '@/components/FAQCard.vue';
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
    <section id="questions"
        class="bg-base-2 text-white">
        <div class="container py-20">
            <h1 class="works-title  text-xl text-center relative text-second capitalize underline underline-offset-4 font-bold tracking-wide after:w-1/3 before:w-1/3
                md:after:w-2/5 md:before:w-2/5 mb-8
                ">FAQ</h1>
            <h1 class="text-center font-bold text-4xl mb-10 capitalize">Some questions</h1>

            <div class="grid mt-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 flex-wrap">

                <FAQCard v-for="q in FAQJson"
                    :key="q.id"
                    :question="q"
                    :show="toggledDetailsId == q.id"
                    @click="setToggleDetailsId(`${q.id}`)" />

            </div>
        </div>
    </section>

</template>

<style scoped></style>