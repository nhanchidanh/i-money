<template>
  <form @submit.prevent="onSubmit">
    <!-- Start: Main Form -->
    <div class="row mt-8">
      <div class="rounded-lg py-4">
        <div class="container mx-auto px-8">
          <div class="row">
            <label for="total" class="flex items-end">
              <div class="w-10 text-right leading-10 mr-4 pb-1">
                <span
                  class="
                    inline-block
                    px-1
                    text-black
                    border border-black
                    rounded
                    text-sm
                    font-bold
                  "
                  >USD</span
                >
              </div>
              <div class="flex flex-col border-b border-gray-200 pb-1">
                <span class="font-semibold text-xs text-black">Total</span>
                <input
                  id="total"
                  type="text"
                  placeholder="0"
                  class="text-4xl text-black w-full outline-none mt-1"
                  v-model="total"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="category" class="flex items-center">
              <div
                class="
                  flex
                  items-center
                  flex-none
                  w-10
                  text-right
                  leading-10
                  mr-4
                "
              >
                <span
                  class="inline-block ml-auto rounded-full w-8 h-8 bg-blue-300"
                ></span>
              </div>
              <div class="flex-1 border-b border-gray-200 py-3">
                <input
                  id="category"
                  type="text"
                  placeholder="Select a category"
                  class="text-xl text-black w-full outline-none"
                  v-model="category"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="note" class="flex items-center">
              <div
                class="
                  flex
                  items-center
                  flex-none
                  w-10
                  text-right
                  leading-10
                  mr-4
                "
              >
                <span class="flex-none w-10 mr-4"
                  ><i class="fa-solid fa-note-sticky"></i
                ></span>
              </div>
              <div class="flex-1 border-b border-gray-200 py-3">
                <input
                  id="note"
                  type="text"
                  placeholder="Note"
                  class="text-black w-full outline-none"
                  v-model="note"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="time" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-black"
                  ><i class="fa-solid fa-calendar-days"></i
                ></span>
              </div>
              <div class="flex-1 py-2 border-b border-gray-200">
                <div class="text-black w-full">{{ new Date() }}</div>
              </div>
            </label>
          </div>
          <div class="row">
            <label for="" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-black"
                  ><i class="fa-solid fa-pen"></i
                ></span>
              </div>
              <div class="flex-1 py-2">
                <div class="text-black w-full">My Wallet</div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
    <!-- End: Main Form -->

    <div class="row mt-8" v-if="!isMoreDetails">
      <button
        @click="isMoreDetails = true"
        class="bg-gray-200 rounded-lg py-3 w-full text-blue-600 font-semibold"
      >
        More Details
      </button>
    </div>
    <template v-if="isMoreDetails">
      <!-- Start: Advance Form -->
      <div class="row mt-8">
        <div class="rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="location" class="flex items-center">
                <div
                  class="
                    flex
                    items-center
                    flex-none
                    w-10
                    text-right
                    leading-10
                    mr-4
                  "
                >
                  <span class="flex-none w-10 mr-4"
                    ><i class="fa-solid fa-location-dot"></i
                  ></span>
                </div>
                <div class="flex-1 border-b border-gray-200 py-3">
                  <input
                    id="location"
                    type="text"
                    placeholder="Select a location"
                    class="text-black w-full outline-none"
                    v-model="location"
                  />
                </div>
              </label>
            </div>
            <div class="row">
              <label for="withPerson" class="flex items-center">
                <div
                  class="
                    flex
                    items-center
                    flex-none
                    w-10
                    text-right
                    leading-10
                    mr-4
                  "
                >
                  <span class="flex-none w-10 mr-4"
                    ><i class="fa-solid fa-users"></i
                  ></span>
                </div>
                <div class="flex-1 border-b border-gray-200 py-3">
                  <input
                    id="withPerson"
                    type="text"
                    placeholder="With person"
                    class="text-black w-full outline-none"
                    v-model="person"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <!-- End: Advance Form -->
      <!-- Start: Upload photos -->
      <div class="row mt-8">
        <div class="rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="file" class="flex items-center text-blue-600">
                <div
                  class="
                    flex
                    items-center
                    flex-none
                    w-10
                    text-right
                    leading-10
                    mr-4
                  "
                >
                  <span class="flex-none w-10 mr-4"
                    ><i class="fa-solid fa-camera"></i
                  ></span>
                </div>
                <div
                  class="flex-1 border-b border-gray-200 py-3 cursor-pointer"
                >
                  <div class="w-full font-semibold">Upload images</div>
                  <input
                    @change="onChangeFile"
                    type="file"
                    name="file"
                    id="file"
                    class="w-0 h-0 overflow-hidden absolute"
                  />
                </div>
              </label>
              <div class="text-red-600 my-3">{{ errorFile }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- End: Upload photos -->
    </template>
    <div class="row mt-8">
      <button
        class="bg-gray-400 rounded-lg py-3 w-full text-blue-800 font-semibold"
      >
        Add transaction
      </button>
    </div>
  </form>
</template>
<script>
import { ref } from "vue";
import { useUser } from "@/composables/useUser";
import useCollection from "@/composables/useCollection";
import useStorage from "@/composables/useStorage";

export default {
  setup() {
    const isMoreDetails = ref(false);
    const { getUser } = useUser();
    const { error, addRecord } = useCollection("transactions");
    const { url, uploadFile } = useStorage("transactions");

    const total = ref(0);
    const category = ref("");
    const note = ref("");
    const time = ref(new Date());
    const location = ref("");
    const person = ref("");
    const file = ref(null);
    const errorFile = ref(null);

    function onChangeFile(e) {
      const selected = e.target.files[0];
      const typesFile = ["image/png", "image/jpg"];
      if (selected && typesFile.includes(selected.type)) {
        file.value = selected;
      } else {
        file.value = null;
        errorFile.value = "Please select a file type png or jpg";
      }
    }

    async function onSubmit() {
      if (file.value) {
        await uploadFile(file.value);
      }
      // console.log(url);
      const { user } = getUser();

      const transaction = {
        total: +total.value,
        category: category.value,
        note: note.value,
        time: time.value,
        location: location.value,
        person: person.value,
        userId: user.value.uid,
        thumbnail: url.value,
      };
      await addRecord(transaction);
      console.log("created");
    }

    return {
      isMoreDetails,
      total,
      category,
      note,
      time,
      location,
      person,
      errorFile,
      onChangeFile,
      onSubmit,
    };
  },
};
</script>