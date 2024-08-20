<script setup>
const { show } = defineProps({
    show: Boolean
})
</script>

<template>
    <div v-show="show"
        class="overlay transition-all z-50 absolute flex flex-col justify-center items-center w-svw h-svh bg-base-2/50">
        <div class="w-2/3 h-2/3 bg-base border border-gray-200/50">sad</div>
        <slot></slot> <!-- slot outlet -->
    </div>
</template>

<style scoped>
.overlay {
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
}
</style>