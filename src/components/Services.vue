<script setup>
import { ref } from 'vue';
import ServiceCard from './ServiceCard.vue';
import servJson from '@/data/services.json'
const selectedId = ref(1)
</script>

<template>
    <section id="services"
        class="bg-base text-white">
        <div class="container py-20">
            <h1 class="works-title  text-xl text-center relative text-second capitalize underline underline-offset-4 font-bold tracking-wide after:w-1/3 before:w-1/3
                md:after:w-2/5 md:before:w-2/5 mb-8
                ">
                Services</h1>
            <h1 class="text-center font-bold text-4xl mb-10">What We Do <span class="animate-pulse">?</span></h1>
            <div class="flex justify-center items-center gap-9 flex-wrap">

                <ServiceCard @click="() => { selectedId = s.id }"
                    v-for="s in servJson"
                    :selected="selectedId === s.id"
                    :key="s.id"
                    :service="s" />

            </div>

        </div>
    </section>
</template>

<style scoped></style>