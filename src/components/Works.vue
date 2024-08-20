<script setup>
import worksJson from '@/data/works.json'

import { computed, ref } from 'vue';
import Card from '@/components/Card.vue'

const selectedWorkId = ref(1);
const selectedWorks = computed(() => {
    return worksJson.find(x => x.id === selectedWorkId.value);

});

function selectWorks(id) {
    selectedWorkId.value = id;


}

</script>

<template>

    <section id="works"
        class="bg-base text-white">
        <div class="container py-20">
            <h1 class="works-title  text-xl text-center relative text-second capitalize underline underline-offset-4 font-bold tracking-wide after:w-1/3 before:w-1/3
                md:after:w-2/5 md:before:w-2/5 mb-8
                ">
                Works</h1>

            <div class="flex flex-wrap justify-center items-center gap-2">
                <button v-for="w in worksJson"
                    :key="w.id"
                    @click="selectWorks(w.id)"
                    :class="selectedWorkId === w.id ? 'bg-second font-bold animate-bounce transition-all' : ''"
                    class="px-2 py-1">{{ w.title }}
                </button>
            </div>

            <div class="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mt-10">
                <Card v-for="w in selectedWorks.works"
                    @click="console.log('asd')"
                    :key="Date.now() + w.id"
                    :work="w" />
            </div>
        </div>
    </section>


</template>

<style scoped>
.works-title::after {
    content: '';
    border-bottom: 1px solid #F26C4F;
    left: 0;
    top: 50%;
    position: absolute;
}

.works-title::before {
    content: '';
    border-bottom: 1px solid #F26C4F;
    right: 0;
    top: 50%;
    position: absolute;
}
</style>