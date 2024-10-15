<template>

    <div class="px-5 sm:px-0 w-full max-w-md mx-auto text-white">
        <h2 class="text-2xl font-bold mb-6 text-center">Contact Us</h2>

        <form @submit.prevent="handleSubmit"
            class="space-y-4">
            <input v-model="form.name"
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                required
                class="mt-1 block bg-base-2 border-2 border-second/30 w-full px-3 py-2 focus:border focus:border-second   rounded-md shadow-sm focus:outline-none focus:bg-base-2  sm:text-sm">
            <input v-model="form.email"
                placeholder="example@email.com"
                type="email"
                id="email"
                name="email"
                required
                class="mt-1 block bg-base-2 border-2 border-second/30 w-full px-3 py-2 focus:border focus:border-second   rounded-md shadow-sm focus:outline-none focus:bg-base-2  sm:text-sm">
            <input v-model="form.subject"
                placeholder="Subject"
                type="text"
                id="subject"
                name="subject"
                required
                class="mt-1 block bg-base-2 border-2 border-second/30 w-full px-3 py-2 focus:border focus:border-second   rounded-md shadow-sm focus:outline-none focus:bg-base-2  sm:text-sm">
            <textarea v-model="form.message"
                placeholder="Message"
                id="message"
                name="message"
                rows="4"
                style="resize: none;"
                required
                class="mt-1 block bg-base-2 border-2 border-second/30 w-full px-3 py-2 focus:border focus:border-second   rounded-md shadow-sm focus:outline-none focus:bg-base-2  sm:text-sm"></textarea>
            <button type="submit"
                class="cursor-pointer w-full flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-second hover:bg-second-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-second-hover gap-2">
                <i v-show="submitting"
                    class="fa-solid fa-circle-notch text-xl animate-spin"></i>
                Submitting
            </button>

        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const form = ref({
    name: '',
    subject: '',
    email: '',
    message: ''
})

const submitting = ref(false)

const publicKey = import.meta.env.VITE_PUBLIC_KEY
const serviceID = import.meta.env.VITE_SERVICE_ID
const templateID = import.meta.env.VITE_TEMPLATE_ID

function handleSubmit() {
    if (submitting.value)
        return;
    console.log(form.value);
    submitting.value = true;

    new Promise((resolve) => {
        setTimeout(() => {
            emailjs
                .send(serviceID, templateID, form.value, {
                    publicKey: publicKey,
                }).then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },

                    submitting.value = false
                );

        }, 1000);
    });


}


</script>