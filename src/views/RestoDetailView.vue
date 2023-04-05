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

    <BaseCard class="mt-4">
      <template #title>{{ resto.name }}</template>
      {{ resto.description }}
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