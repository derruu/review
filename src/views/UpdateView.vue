<script setup>
import BaseNavbar from '../components/BaseNavbar.vue';
import { useRestoRepository  } from '../composables/useRestoRepository';

import { reactive } from "vue";
import { useRoute, useRouter } from 'vue-router';
const repository = useRestoRepository();

const route = useRoute();
const router = useRouter();
const restos = ({})
const onSubmit = async () => {
    const id = route.params.id;
    try {
        await repository.update(id, restos)
        router.replace({name: "restos"}) 
    } catch (e) {
        console.log(e);
    }
}
</script>

<template>
    <Navbar />
        <section class="col-span-full row-span-3 mx-10">
            <div class="min-h-screen p-44 pt-12">
                <div class=" bg-white h-full shadow-xl">
                    <p class="text-center pt-16 font-bold text-3xl">Edit</p>
                    <form :action="route.path" method="post" class="p-12" @submit.prevent="onSubmit">
                        <div class="p-2 ml-9">
                            <div>
                                <label for="" class="mr-14 font-semibold text-xl">Resto Name</label>
                                <input type="text" v-model=restos.name
                                class=" border-2 bg-gray-50 rounded-lg w-full p-2 outline-none ">
                            </div>
                            <div class="pt-7">
                                <label for="" class="mr-14 font-semibold text-xl">Address</label>
                                <input type="text" v-model=restos.address
                                class="border-2 bg-gray-50 rounded-lg w-full p-2 outline-none">
                            </div>
                            <div class="pt-7 pb-7">
                                <label for="" class="mr-7 font-semibold text-xl">description</label>
                                <input type="text" v-model=restos.description
                                class="border-2 bg-gray-50 rounded-lg w-full p-2 pb-16 outline-none">
                            </div>
                            <button type="submit" class="inline-block p-1 px-3 border-2 border-black rounded shadow-[1.9px_3px_0px_2px_rgba(39,35,67,1)] hover:scale-[1.05] active:scale-1 duration-200 ">Edit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
</template>