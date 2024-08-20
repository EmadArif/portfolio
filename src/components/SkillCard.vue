<script setup>
import { ref, onMounted } from 'vue';

const { skill } = defineProps({
    skill: {},
    showDetails: {
        type: Boolean,
        value: false
    }
})

</script>

<template>
    <div class="h-20 relative flex flex-col justify-center items-start
                    px-4 gap-2
                    shadow-xl"
        :class="skill.details ? `cursor-pointer border border-second-hover/35 hover:border-second transition-all` : ``">


        <div class="flex w-full justify-between items-center">

            <h1 :class="skill.details ? 'text-white' : 'text-gray-200'"
                class="text-sm capitalize">{{ skill.title }}</h1>
            <h1 class=" text-sm"
                :class="skill.details ? 'text-white' : 'text-gray-200'">{{ skill.value }}%</h1>
        </div>

        <div class="w-full h-2 bg-gray-100">
            <div :style="`width:${skill.value}%;`"
                class="h-2 bg-second">
            </div>
        </div>
        <i v-show="skill.details"
            class="fa-solid fa-arrow-right-long text-xs self-end text-second"></i>
        <div v-show="showDetails && skill.details"
            class="skill-overlay min-h-full w-full top-0 left-0 absolute flex bg-second-100 p-4">

            <div class="w-2/3 text-sm flex flex-col justify-center gap-1 items-start">
                <li v-for="d in skill.details"
                    :key="d.id"
                    class="text-nowrap">{{ d.title }}</li>

            </div>
            <div class="w-1/3 text-end"><i class="fa-solid fa-arrow-down-long text-sm"></i></div>

        </div>
    </div>
</template>

<style scoped>
@keyframes scale-up {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.skill-overlay {
    animation: scale-up 0.2s backwards;
}
</style>