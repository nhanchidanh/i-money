<template>
  <div>
    <div class="mt-8">
      <div class="container mx-auto px-8">
        <!-- Start Form -->
        <form
          class="flex flex-col justify-start space-y-6"
          @submit.prevent="onSubmit"
        >
          <div class="row">
            <label class="flex flex-col" for="emailAddress">
              <span class="font-semibold">Email Address</span>
              <input
                type="email"
                name="emailAddress"
                id="emailAddress"
                class="
                  px-4
                  py-3
                  rounded-lg
                  border border-gray-100
                  mt-1
                  focus:outline-none focus:border-sky-500 focus:ring-2
                "
                placeholder="nhanchidanh@gmail.com..."
                v-model="email"
              />
            </label>
          </div>
          <div class="row">
            <label class="flex flex-col" for="password">
              <span class="font-semibold">Password</span>
              <input
                type="password"
                name="password"
                id="password"
                class="
                  px-4
                  py-3
                  rounded-lg
                  border border-gray-100
                  mt-1
                  focus:outline-none focus:border-sky-500 focus:ring-2
                "
                placeholder="Example"
                autocomplete="on"
                v-model="password"
              />
            </label>
          </div>
          <div class="row">
            <button
              v-if="!isPending"
              class="
                py-3
                text-center
                w-full
                bg-blue-600
                hover:bg-opacity-80
                text-white
                font-bold
                rounded-lg
                transition-all
                duration-300
              "
              type="submit"
            >
              Sign In
            </button>
            <button
              v-else
              class="
                py-3
                text-center
                w-full
                bg-blue-800
                hover:bg-opacity-80
                text-white
                font-bold
                rounded-lg
                transition-all
                duration-300
                cursor-not-allowed
              "
              disabled
              type="button"
            >
              Loading...
            </button>
          </div>
        </form>
        <!-- End Form -->
        <!-- Start Error -->
        <div v-if="error" class="text-left mt-6 text-red-600">
          <span>{{ error }}</span>
        </div>
        <!-- End Error -->
        <!-- Start Direction -->
        <div class="w-full text-center mt-6">
          <span class="font-semibold">I'm a new user.</span>
          <span class="ml-1">
            <router-link
              :to="{ name: 'Register', params: {} }"
              class="text-blue-600 font-bold"
              >Sign Up</router-link
            >
          </span>
        </div>
        <!-- End Direction -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useSignIn } from "@/composables/useSignIn";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { error, isPending, signin } = useSignIn();
    const router = useRouter();
    const email = ref("");
    const password = ref("");
    async function onSubmit() {
      // console.log({email, password});
      await signin(email.value, password.value);
      if (!error.value) router.push({ name: "Home", params: {} });
    }
    return { email, password, error, isPending, onSubmit };
  },
};
</script>
