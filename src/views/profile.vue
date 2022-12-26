<template>
  <!-- Start Info -->
  <div class="row" v-if="user">
    <div class="container mx-auto p-8">
      <div class="text-center">
        <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            size="xs"
            alt="User's Profile Avatar"
            class="w-full h-auto object-cover"
          />
        </div>
        <div class="font-bold text-2xl mt-3 text-blue-600">{{user.displayName}}</div>
        <p class="font-semibold text-gray-400 mt-1">{{user.email}}</p>
      </div>
    </div>
  </div>
  <!-- End Info -->

  <!-- Start menu -->
  <div class="row">
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <h3 class="font-bold text-xl text-blue-600 mb-2">General</h3>
        </div>
      </div>
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <ul>
            <li v-for="(profileOption, index) in profileOptions" :key="profileOption.name">
              <router-link
                :to="profileOption.route"
                class="flex justify-between items-center py-3"
                :class="{'text-red-600': index === profileOptions.length-1}"
              >
                <div class="flex items-center text-left">
                  <i class="fa-solid text-2xl" :class="profileOption.icon"></i>
                  <h5 class="font-semibold ml-3">{{profileOption.name}}</h5>
                </div>
                <div class="text-right">
                  <i class="fa-solid fa-angle-right"></i>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- End menu -->
</template>

<script>
import { reactive } from "vue";
import { PROFILE_OPTIONS } from "@/constants";
import { useUser } from "@/composables/useUser";
export default {
  setup() {
    const profileOptions = reactive(PROFILE_OPTIONS);

    const { getUser } = useUser();
    const { user } = getUser();

    return {
      profileOptions, user
    };
  },
};
</script>