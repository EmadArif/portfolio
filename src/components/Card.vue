<script setup>


const { work } = defineProps({
    work: {
        id: Number,
        img: String,
        title: String,
        des: String,
        link: String
    }
})

function openLink() {
    if (work.link) {
        window.open(work.link, '_blank');
    }
}

</script>

<template>

    <div @click="openLink"
        :style="`animation-delay: ${work.id / 20}s;`"
        class="card shadow-xl
                    w-[calc(100%/1-6px)] sm:w-[calc(100%/2-12px)] md:w-[calc(100%/3-12px)] lg:w-[calc(100%/4-6px)] h-40 cursor-pointer relative overflow-hidden bg-black">





        <img v-if="work.img"
            class="card-img w-full h-full object-cover transition-all duration-300 opacity-60"
            :src="work.img"
            alt="">
        <img v-else
            class="card-img w-full h-full object-cover transition-all duration-300 opacity-60"
            src="../assets/idea2.svg"
            alt="">



        <div class="card-text h-1/3  absolute z-10 text-white bottom-3 px-2">
            <h2 class="card-title text-nowrap text-xl  font-bold uppercase">{{ work.title }}</h2>
            <p class="card-info font-semibold overflow-ellipsis text-xs text-wrap line-clamp-2">
                {{ work.des }}
            </p>
        </div>
    </div>

</template>

<style scoped>
@keyframes fade-in {
    from {
        opacity: 0;
        transform: scale(0.8);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

.card {
    animation: fade-in 0.5s backwards;
}

.card:hover img {
    opacity: 1;
}

.card:hover .card-img {
    cursor: pointer;
    transform: scale(1.05);
    opacity: 1;
}
</style>