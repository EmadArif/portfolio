<script setup>
import Call from './Call.vue';
</script>

<template>
    <section class="bg-base text-white md:pt-20 pt-32"
        id="home">
        <div class="container -z-20">
            <div class="relative py-5 gap-6 flex justify-between md:h-96 md:flex-row flex-col h-[500px] items-end">

                <div
                    class="fade-left relative h-full z-20 img flex justify-start items-end  w-full md:w-3/4  overflow-hidden">

                    <div class="social absolute flex items-center  w-1/3 justify-start gap-2 text-2xl">

                        <a href="">
                            <i class="fa-brands fa-facebook"></i>
                        </a>

                        <a href="">
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <a href="">
                            <i class="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                    <img class="absolute  translate-x-1/3 h-full bottom-0 right-0"
                        src="../assets/person4.svg"
                        alt="">

                    <h1 class="-z-10  text-second text-6xl font-bold absolute top-0 left-0 uppercase">emad
                        arif<span class="block text-white">saleh</span></h1>

                    <img class="-z-20 -left-1/3 absolute scale-x-[-1] h-full w-full top-0 opacity-10"
                        src="../assets/idea2.svg"
                        alt="">
                </div>

                <div class="info relative h-full flex flex-col justify-between text md:w-1/4">
                    <div class="content">
                        <h1 class=" text-2xl font-bold">I'm developer and 3d desginer</h1>
                        <p class=" text-sm mt-3 text-balance">Programming enthusiast, creative interior
                            designer,
                            video game
                            design enthusiast
                            and interested in everything new in the world of technology.</p>
                    </div>

                    <img class="absolute h-full  bottom-0 opacity-20 right-0"
                        src="../assets/idea2.svg"
                        alt="">
                    <Call />

                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* .info .content h1 {
    animation-delay: 0.1s;
}

.info .content p {
    animation-delay: 0.2s;
}

.info .contacts {
    animation-delay: 0.3s;
} */
</style>