<script setup>
import Call from './Call.vue';
import expJson from '@/data/experiences.json'
</script>

<template>
    <section class="bg-base-2 text-white"
        id="about">
        <div class="container py-20 relative overflow-hidden">
            <h1
                class="about-title text-xl relative text-second capitalize underline underline-offset-4 font-bold tracking-wide">
                About
                me</h1>
            <div class="overflow-hidden flex gap-6 lg:gap-x-20 flex-col md:flex-row">
                <div class="relative content-left md:w-2/3">
                    <h1 class="fade-left mt-5 font-semibold text-balance">
                        If Internet Explorer was strong, it would ask you to be your favorite browser, so you must
                        be strong to pass every difficult step.
                    </h1>
                    <p class="fade-left mt-5 text-xs text-gray-200 text-balance">
                        I'm a programmer driven by finding elegant solutions to complex challenges. My approach focuses
                        on breaking down problems, simplifying tasks, and collaborating effectively with my team. This
                        method consistently delivers exceptional results, increasing efficiency and improving the
                        quality of our work.
                    </p>

                    <div class="years fade-left mt-5 grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3 ">

                        <div v-for="e in expJson"
                            class="flex justify-start items-center border border-gray-100 p-1">
                            <h1 class="font-bold text-6xl mr-2 px-2 md:text-7xl text-second">{{ e.years }}</h1>

                            <h1 class="font-bold capitalize text-sm  base">Years of<span
                                    class="block ">{{ e.title }}</span>
                            </h1>
                        </div>

                    </div>

                </div>

                <div class="rig md:w-1/3 flex flex-col justify-between pb-3">
                    <div>
                        <h1 class="mt-5 text-xl font-semibold text-balance">
                            Any Type Of Query & Discussion
                        </h1>
                        <p class="mt-3 tracking-wider text-xs text-gray-200">
                            Let's talk with me
                        </p>
                    </div>

                    <Call />

                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about-title::after {
    content: '';
    border-bottom: 1px solid #F26C4F;
    width: 50%;
    left: 120px;
    top: 50%;
    position: absolute;
}

.content-left .fade-left:nth-child(1) {
    animation-delay: 0.3s;
}

.content-left .fade-left:nth-child(2) {
    animation-delay: 0.4s;
}

.content-left .fade-left:nth-child(3) {
    animation-delay: 0.5s;
}
</style>