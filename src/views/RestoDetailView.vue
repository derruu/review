<script setup>
import { useRestoRepository, useReviewsRepository } from "@/composables";
import { ref, onMounted, reactive } from "vue"
import { useRoute, useRouter, RouterLink } from "vue-router";
import BaseCard from "@/components/BaseCard.vue";
import BaseContainer from "../components/BaseContainer.vue";
import BaseNavbar from '../components/BaseNavbar.vue';


const repository = useRestoRepository();
const reviewRepository = useReviewsRepository();
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


const reviewValue = ref([]);


const fetchReviews = async () => {
  isLoading.value = true;
  try {
    const id = route.params.id;
    const { data } = await repository.reviews(id);
    reviewValue.value = data;
  } catch (e) {
    console.log(e);
  }
  isLoading.value = false;
};
onMounted(() => fetchReviews());
const id = route.params.id;
const review_data = reactive({
  rating: "",
  text: "",
  resto_id: id,
})

const onSubmit = async () => {
  isLoading.value = true;
  try {
    await reviewRepository.store(review_data);
    window.location.reload();
  } catch (e) {
    console.error(e);
  }
  isLoading.value = false;
};

onMounted(() => {
  fetchReviews();

});


</script>

<template>
  <BaseNavbar />
  <BaseContainer>
    <RouterLink :to="{ name: 'restos' }"
      class="inline-block p-1 px-3 border-2 border-black rounded shadow-[1.9px_3px_0px_2px_rgba(39,35,67,1)] hover:scale-[1.05] active:scale-1 duration-200 ">
      Back
    </RouterLink>
    <button class="p-4">
      <RouterLink :to="{ name: 'update', params: { id: route.params.id } }"
        class="inline-block p-1 px-3 border-2 border-black rounded shadow-[1.9px_3px_0px_2px_rgba(39,35,67,1)] hover:scale-[1.05] active:scale-1 duration-200 ">
        Edit
      </RouterLink>
    </button>

    <BaseCard class="my-4 text-center bg-[#ffd803]">
      <template #title>
        {{ resto.name }}
      </template>
    </BaseCard>

    <p class="text-2xl mt-3 font-bold w-[110px]">Description</p>
    <hr class="h-[10px] w-[50px] my-4 bg-[#ffd803] border-0 dark:bg-gray-700" />
    <BaseCard class="mt-4 ">
      <div v-if="resto.description" class="text-black">
        {{ resto.description }}
      </div>
      <div v-else class="text-black">No Description Yet</div>
    </BaseCard>

    <p class="text-2xl mt-3 font-bold ]">Located at</p>
    <hr class="h-[10px] w-[50px] my-4 bg-[#ffd803] border-0 dark:bg-gray-700" />
    <BaseCard class="mt-4 ">
      <p class="text-black">
        {{ resto.address }}
      </p>
    </BaseCard>

    <BaseCard class="mt-4 bg-[#ffd803] text-black">
      <template #title>Reviews</template>
    </BaseCard>
    <div class="mt-5 max-w-screen-xl mx-auto p-4">
      <h1 class="text-xl font-bold">Berikan review untuk restoran ini</h1>
      <form class="mt-5" :action="route.path" @submit.prevent="onSubmit">
        <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-100 ">
          <div class="px-4 py-2 bg-gray-100 rounded-t-lg ">
            <label for="review">Your review</label>
            <textarea id="review" rows="4"
              class="w-full px-0 text-sm text-gray-900 bg-gray-100 border-0  focus:ring-0  outline-none"
              v-model="review_data.text" placeholder="Write a review..." required></textarea>
          </div>

          <p class="font-[Poppins] ml-3">Your rating</p>
          <input type="number" class="m-3 bg-gray-300 p-1 border border-gray-100 rounded-md outline-none" min="1" max="5"
            placeholder="1 - 5" v-model="review_data.rating">

          <div class="flex items-center justify-between px-3 py-2 border-t bg-gray-50">
            <button type="submit"
              class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 ">
              Post review
            </button>
          </div>
        </div>
      </form>
    </div>

    <BaseCard class="mt-4 bg-[#ffd803] text-black">
      <template #title>Review Dari Ngawi'ers</template>
    </BaseCard>

    <div class="grid grid-cols-12 gap-4">
      <BaseCard v-for="review in reviewValue" :key="review.id" class="col-span-6">
        <template #title>{{ review.user.name }}</template>
        <h1>{{ review.rating }}</h1>
        {{ review.text }}
      </BaseCard>
    </div>

  </BaseContainer>
</template>