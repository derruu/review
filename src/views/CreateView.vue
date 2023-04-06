<script setup>
import { useRestoRepository } from '../composables/useRestoRepository';
import BaseContainer from "../components/BaseContainer.vue";
import { reactive, ref } from 'vue';
import BaseNavbar from '../components/BaseNavbar.vue';
import { useRoute, useRouter } from 'vue-router';

const route =useRoute();
const router =useRouter();
const repository = useRestoRepository();
const resto = reactive({
    name:'',
    address:'',
    description:'',

});


const isLoading =  ref(false)
const onSubmit = () => {
    isLoading.value = true;
    try {
        repository.store(resto);

        router.replace({name: 'restos'})
    } catch (e) {
        console.error(e);
    }
    isLoading.value = false;
}
</script>
<template>

<BaseNavbar />
<BaseContainer>
        <section>
            <div class="min-h-screen p-44 pt-12">
                <div class=" bg-white h-full shadow-xl">
                    <p class="text-center pt-16 font-bold text-3xl border-b-2 mx-20">Add New Resto</p>
                    <form :action="route.path" method="post" @submit.prevent="onSubmit" class="p-12">
                        <div class="p-2 ml-9">
                            <div>
                                <label for="" class="mr-14 font-semibold text-xl">Resto Name</label>
                                <input 
                                type="text"
                                required
                                class=" border-2 bg-gray-50 rounded-lg w-full p-2 outline-none focus:ring-4 focus:ring-blue-300"
                                v-model="resto.name">
                            </div>
                            <div class="pt-7">
                                <label for="" class="mr-14 font-semibold text-xl">Address</label>
                                <input 
                                type="text"
                                required
                                class="border-2 bg-gray-50 rounded-lg w-full p-2 outline-none focus:ring-4 focus:ring-blue-300"
                                v-model="resto.address">
                                
                            </div>
                            <div class="pt-7 pb-7">
                                <label for="" class="mr-7 font-semibold text-xl">description</label>
                                <input 
                                type="text"
                                class="border-2 bg-gray-50 rounded-lg w-full p-2 pb-16 outline-none focus:ring-4 focus:ring-blue-300"
                                v-model="resto.description">

                            </div>
                            <button type="submit" class="inline-block p-1 px-3 border-2 border-black rounded shadow-[1.9px_3px_0px_2px_rgba(39,35,67,1)] hover:scale-[1.05] active:scale-1 duration-200">TAMBAHKAN</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
</BaseContainer>

</template>