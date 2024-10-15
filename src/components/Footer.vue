<script setup>

import contact from '@/data/contact.json'
import EmailForm from './EmailForm.vue';

</script>

<template>
    <div class="relative grid grid-cols-1 md:grid-cols-2">
        <div
            class="z-50 logo absolute top-[-22px] translate-x-1/2 right-1/2 flex items-center justify-center bg-second w-11 h-11 text-white">
            <h1 class="text-4xl font-semibold">E.</h1>
        </div>

        <section id="contact"
            class="bg-base relative text-white">

            <div class="container pt-20 overflow-hidden flex flex-col justify-center w-full items-center">
                <h1 class="about-title text-sm relative
                    text-start  text-second capitalize underline underline-offset-4 font-bold tracking-wide">
                    Get in touch</h1>
                <div class=" mt-3">
                    <h1 class="capitalize font-bold text-3xl">Talk or Meet With me</h1>
                    <div class="flex gap-5 py-5 flex-col">
                        <div v-for="c in contact"
                            class="flex justify-start items-center gap-4">
                            <i :class="c.icon"
                                class="text-3xl text-second w-10"></i>
                            <div>
                                <h3 class="text-[10px] text-gray-200 capitalize pb-1">{{ c.title }}
                                </h3>
                                <a v-if="c.link"
                                    class="font-semibold text-sm"
                                    :href="c.link"
                                    target="_blank">{{ c.contact }}</a>

                                <p v-else
                                    class="font-semibold text-sm">{{ c.contact }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-20">
            <EmailForm />
        </section>

    </div>
</template>

<style scoped></style>