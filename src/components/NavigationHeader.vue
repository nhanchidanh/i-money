<template>
  <header id="header" class="py-8">
    <div class="container mx-auto px-8">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <div
            v-if="meta.leading"
            class="w-10 h-10 overflow-hidden rounded-full"
          >
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              size="sm"
              alt="User's Profile Avater"
              class="w-full h-auto object-cover"
            />
          </div>
          <h1 class="text-xl font-bold ml-2 text-black">{{ meta.text }}</h1>
        </div>
        <div class="flex">
          <ul>
            <li>
              <i class="fa-solid fa-bell text-2xl"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    return {
      meta: computed(() => {
        return route.meta;
      }),
    };
  },
};
</script>