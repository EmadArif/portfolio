<script setup>

const { selected, service } = defineProps({
    selected: Boolean,
    service: {
        id: Number,
        title: String,
        des: String,
        icon: String
    }
})

</script>


<template>
    <!-- CARD -->
    <div :class="selected ? 'scale-100' : 'scale-90'"
        class=" relative transition-all cursor-pointer w-52 h-52 ">

        <div :class="selected ? 'shadow-xl shadow-black/50  bg-base-3' : ''"
            class=" z-10  
                  flex flex-col p-2 justify-evenly items-center w-52 h-52 absolute">


            <i :class="`${service.icon}`"
                class="text-second text-4xl"></i>
            <h1 class="font-bold text-xl">{{ service.title }}</h1>
            <p class="text-center text-xs text-balance text-gray-200 ">{{ service.des }}</p>
        </div>

        <div v-show="selected"
            class=" 
                  w-52 h-52 animate-pulse gradient-box triangle">
        </div>

    </div>
    <!-- CARD -->
</template>

<style scoped>
.triangle {
    width: 0;
    height: 0;
    right: -10px;
    top: 10px;

    transform: translateY(0);
    position: absolute;
    border-left: 208px solid transparent;
    border-bottom: 208px solid #F16B4E;
}
</style>