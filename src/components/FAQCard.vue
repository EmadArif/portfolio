<script setup>

const { question, show } = defineProps({
    question: {},
    show: Boolean
})
function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}
</script>

<template>
    <div class="card after:bg-second h-20 relative flex flex-col justify-center items-start
    bg-gray-100
                    px-4 py-4 gap-2
                    shadow-xl cursor-pointer  transition-all
                    ">


        <div class="flex h-full w-full justify-between items-start">

            <h1 class="text-sm  capitalize  text-center text-second w-10 font-bold">{{ pad(question.id) }}
            </h1>

            <p class="text-sm capitalize text-white text-start w-full line-clamp-2 mx-4 font-bold">
                {{ question.q }}
            </p>

            <i
                class="more transition-all text-sm fa-solid fa-arrow-right-long self-start text-second w-10 text-center "></i>
        </div>


        <div v-show="show"
            class="z-10 after:bg-second question-overlay min-h-full w-full top-0 left-0 absolute flex bg-base-3  p-6 ">

            <div class="relative text-sm flex flex-col justify-center gap-1 items-start">

                <img src="../assets/ques.svg"
                    class="absolute -z0 opacity-10 w-full h-full object-cover right-0"
                    alt="">

                <div v-for="s in question.steps"
                    :key="s.id"
                    class="">
                    <div class="z-10 w-full flex flex-col">

                        <div class="flex h-full w-full justify-between items-start">

                            <h1 class=" capitalize text-white text-center w-10 font-bold">{{ pad(s.id) }}
                            </h1>

                            <p class="capitalize text-white text-start w-full mx-4 font-bold">
                                {{ s.title }}
                            </p>
                        </div>

                        <p class="py-2 text-xs text-balance text-gray-200 bg">{{ s.des }}</p>
                    </div>

                </div>

            </div>
            <div class="less transition-all w-1/3 text-end text-second"><i
                    class="fa-solid fa-arrow-down-long text-sm"></i></div>

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

.question-overlay {
    animation: scale-up 0.2s backwards;
}

.card::after {
    content: '';
    width: 4px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
}

.question-overlay::after {
    content: '';
    width: 4px;
    height: 100%;
    position: absolute;
    z-index: 999px;
    left: 0;
    top: 0;
}

.card:hover .more {
    transform: translateX(5px);
}

.question-overlay:hover .less {
    transform: translateY(5px);
}
</style>