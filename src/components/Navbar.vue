<script setup>
import { ref } from 'vue';

const selectedLink = ref(0)
const navToggled = ref(false)
selectedLink.value = 1;
const defaultClass = ref('hidden')

const links = [
    {
        id: 1,
        name: 'Home',
        link: 'home',
    },
    {
        id: 2,
        name: 'About',
        link: 'about',
    },
    {
        id: 3,
        name: 'Works',
        link: 'works',
    },
    {
        id: 4,
        name: 'Skills',
        link: 'skills',
    }
    ,
    {
        id: 5,
        name: 'Services',
        link: 'services',
    },
    {
        id: 6,
        name: 'Questions',
        link: 'questions',
    },
    {
        id: 7,
        name: 'Contact',
        link: 'contact',
    },
]

function toggleNav() {
    defaultClass.value = ''
    navToggled.value = !navToggled.value;
    console.log(navToggled.value);
}

function selectLink(id) {
    selectedLink.value = id;
}

</script>


<template>
    <header class="md:bg-blur fixed w-full z-50 top-0 border-b border-base-2">
        <div class="relative nav bg-blur container py-3">



            <div class="relative nav transition-all flex flex-row gap-5 md:gap-0  items-center justify-between">



                <div class="logo flex items-center justify-center bg-second min-w-11 min-h-11 text-white">
                    <h1 class="text-4xl font-semibold">E.</h1>
                </div>

                <button :class="navToggled ? 'rotate-90' : 'rotate-0'"
                    @click="toggleNav"
                    class="w-10 h-10 visible md:hidden transition-all text-white">

                    <i :key="Date.now()"
                        class="transition-all btn-show fa-solid fa-bars text-3xl ">
                    </i>
                </button>

                <ul class="hidden md:visible text-white md:flex items-center justify-between lg:gap-2">

                    <a v-for="link in links"
                        :key="link.id"
                        :href="`#${link.link}`"
                        @click="selectLink(link.id)"
                        :class="selectedLink === link.id ? 'bg-second hover:text-white hover:bg-second-hover ' : ''"
                        class="px-2 py-1 hover:text-second transition-all duration-300">{{ link.name }}</a>
                </ul>

            </div>
        </div>

        <div v-show="navToggled"
            class="md:hidden absolut h-fulle border-b border-b-gray-100 bg-blur w-full top-0 ">
            <ul :class="navToggled ? `${defaultClass} show-menu` : ` ${defaultClass} hide-menu`"
                class=" text-white py-3 px-8 flex flex-col items-end gap-1 text-end">

                <a v-for="link in links"
                    :key="link.id"
                    :href="`#${link.link}`"
                    @click="selectLink(link.id)"
                    :class="selectedLink === link.id ? 'pe-5 bg-second hover:text-white hover:bg-second-hover ' : ''"
                    class="px-2 py-1 w-full hover:text-second transition-all duration-300">{{ link.name }}</a>
            </ul>

        </div>
    </header>

</template>

<style scoped>
.bg-blur {
    backdrop-filter: blur(6px);
}

@keyframes show-menu {
    from {
        opacity: 0;
        transform: translateX(60%);
    }

    to {
        opacity: 1;
        transform: translateX();
    }
}

@keyframes hide-menu {
    from {
        opacity: 1;
        transform: translateX(0);
    }

    to {
        opacity: 0;
        transform: translateX(60%);
    }
}


.show-menu {
    animation: show-menu 0.2s backwards;
}

.hide-menu {
    animation: hide-menu 0.2s forwards;
}
</style>
