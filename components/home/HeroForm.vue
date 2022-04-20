<template>
 <!-- In this component remounting causes trouble with AOS .. just know that we can always use animate .css with something that 
  is at the topp of a page  -->
  <div
    class="
      mt-12
      flex
      pl-2
      sm:pl-0
      flex-col
      items-center
      sm:flex-row
      justify-center
      xl:block
    "
    
  >
    <input
      class="
        placeholder:text-gray-800
        text-black
        p-2
        rounded-md
        w-full
        sm:w-2/3
        mr-4
      "
      placeholder="Provide Email For Early Access.."
      type="email"
      v-model="email"
    />
    <button
      @click="submitEmail()"
      class="
        bg-yellow-500
        text-gray-800
        py-2
        px-3
        rounded-md
        mt-4
        sm:mt-0
        hover:shadow-md hover:shadow-black hover:bg-yellow-600 hover:text-white
        transition-all
        duration-500
      "
    >
      Get Early Access
    </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HeroForm",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async submitEmail() {
      try {
        await axios.post("http://localhost:1337/api/emails", {
          data: {
            email: this.email,
          },
        });
        this.showModal();
        this.email = '';
      } catch (e) {
        console.log(e);
      }
    },

    showModal() {
      this.$dialog.alert(
        {
          title: "Thanks for that",
          body: "You will soon get an HAVING the demo version of our final product 😀😀 ",
        },
        { verification: "OKI DOKI" }
      );
    },
  },
};
</script>

<style>
</style>