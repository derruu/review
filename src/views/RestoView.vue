<script setup>
import { useRestoRepository } from "@/composables";
import { ref, onMounted } from "vue";
import BaseCard from "../components/BaseCard.vue";
import BaseContainer from "../components/BaseContainer.vue";

const repository = useRestoRepository();
const isLoading = ref(true);
const restos = ref([]);
const fetchRestos = async () => {
  isLoading.value = true;
  try {
    const { data } = await repository.index();
    restos.value = data;
  } catch (e) {
    console.error(e);
  }
  isLoading.value = false;
};
onMounted(() => fetchRestos());

const excerpt = (text, maxLenght = 10, indicator = "...") => {
  let textCopy = text;

  if (textCopy.length > maxLenght) {
      textCopy = textCopy.substring(0, maxLenght) + indicator;
  }
  return textCopy;
};
</script>

<template>
  <div class="min-h-screen mx-auto ">
        <div class="bg-amber-400">
            <nav class="flex justify-end shadow-lg">
                <p class="mr-auto px-10 py-5 text-3xl font-Righteous select-none">RESTO|CUYY</p>
                <ul class="flex px-20 py-5 gap-10 font-medium">
                    <RouterLink to="" class="hover:underline select-none font-Poppins  hover:text-white duration-500">Home</RouterLink>
                    <RouterLink to="/create" class="hover:underline select-none font-Poppins  hover:text-white duration-500">Add Resto</RouterLink>
                    <RouterLink to="/profile" class="hover:underline select-none font-Poppins  hover:text-white duration-500">Account</RouterLink>
                </ul>
            </nav>
        </div>
<BaseContainer>
    <div class="grid grid-cols-12 gap-4">
      <div v-for="resto in restos" :key="resto.id" class="col-span-4">
        <BaseCard :to="{ name: 'restos-show', params: { id: resto.id } }">
          <template #title>{{ resto.name }}</template>
          {{ excerpt(resto.description, 40) }}
        </BaseCard>
      </div>
    </div>
  </BaseContainer>
</div>
</template>