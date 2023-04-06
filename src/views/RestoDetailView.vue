<script setup>
import { useRestoRepository } from "@/composables";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import BaseCard from "@/components/BaseCard.vue";
import BaseContainer from "../components/BaseContainer.vue";
import BaseNavbar from '../components/BaseNavbar.vue';

const repository = useRestoRepository();
const route = useRoute();
const isLoading = ref(true);
const resto = ref({});
const fetchDetail = async () => {
  isLoading.value = true;
  try {
    const id = route.params.id;
    const { data } = await repository.show(id);
    resto.value = data;
  } catch (e) {
    console.log(e);
  }
  isLoading.value = false;
};
onMounted(() => fetchDetail());
const reviews = ref([]);
const fetchReviews = async () => {
  isLoading.value = true;
  try {
    const id = route.params.id;
    const { data } = await repository.reviews(id);
    reviews.value = data;
  } catch (e) {
    console.log(e);
  }
  isLoading.value = false;
};
onMounted(() => fetchReviews());

</script>

<template>
  <BaseNavbar />
  <BaseContainer>
    <RouterLink
      :to="{ name: 'restos' }"
      class="inline-block p-2 bg-[#272343] text-white rounded hover:bg-black"
    >

    Back
    </RouterLink>
    <BaseCard class="mt-4 bg-[#ffd803] text-black">
      <template #title>Resto</template>
    </BaseCard>

    <p class="text-2xl mt-3 font-bold w-[110px]">About this resto'</p>
    <hr class="h-[10px] w-[50px] my-4 bg-[#dde5b6] border-0 dark:bg-gray-700" />
    <BaseCard class="mt-4 ">
        <div v-if="resto.description" class="text-black">
            {{ resto.description }}
        </div>
        <div v-else class="text-black">No Description Yet</div>
    </BaseCard>

    <p class="text-2xl mt-3 font-bold ]">Located at'</p>
    <hr class="h-[10px] w-[50px] my-4 bg-[#dde5b6] border-0 dark:bg-gray-700" />
    <BaseCard class="mt-4 ">
        <p class="text-black">
            {{ resto.address }}
        </p>
    </BaseCard>

    <BaseCard class="mt-4 bg-[#ffd803] text-black">
      <template #title>Reviews</template>
    </BaseCard>

    <BaseCard v-for="review in reviews" :key="review.id" class="mt-4">
      <template #title>{{ review.user.name }}</template>
      {{ review.text }}
    </BaseCard>
   
  </BaseContainer>
</template>