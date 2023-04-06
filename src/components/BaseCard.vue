<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
import BaseCardTitle from "@/components/BaseCardTitle.vue";
import BaseCardBody from "@/components/BaseCardBody.vue";
defineProps({
  to: {
    type: Object,
    default: undefined,
  },
});
</script>

<template>
  <RouterLink
    v-if="to"
    :to="to"
    class="block bg-[#bae8e8] p-4 rounded select-none shadow-[3px_3px_0px_3px_rbga(52, 70, 36, 1)] hover:scale-[1.02] min-h-full"
  >
    <BaseCardTitle v-if="!!$slots.title">
      <slot name="title" />
    </BaseCardTitle>

    <BaseCardBody>
      <slot />
    </BaseCardBody>
  </RouterLink>

  <div v-else class="block bg-[#bae8e8] shadow p-4 rounded select-none min-h-full">
    <BaseCardTitle v-if="!!$slots.title">
      <slot name="title" />
    </BaseCardTitle>

    <BaseCardBody>
      <slot />
    </BaseCardBody>
  </div>
</template>