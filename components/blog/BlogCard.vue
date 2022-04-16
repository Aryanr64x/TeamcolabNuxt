<template>
  <div
    class="
      cursor-pointer
      hover:shadow-xl
      bg-red
      hover:shadow-black
      duration-500
      border-black border-2
      flex 
      flex-col
      justify-between

    "
  >
    <div>
      <div class="border-black border-2 overflow-clip">
        <img
          class="h-full w-full"
          :src="urlFor(post.mainImage.asset)"
          alt="Preview Image of the blog "
        />
      </div>
      <div class="px-2 pt-2 pb-2">
        <div class="text-2xl font-bold">
          {{ post.title }}
        </div>
        <div class="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
          quibusdam!
        </div>
        <div class="h-full"></div>
      </div>
    </div>
    <div class="flex items-center p-2">
      <img
        class="h-8 w-8 rounded-full mr-2"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Zack_Snyder_by_Gage_Skidmore_2.jpg/1200px-Zack_Snyder_by_Gage_Skidmore_2.jpg"
        alt=""
      />
      <div class="font-semibold">Zack Snyder</div>
      <div class="grow"></div>
      <div class="text-sm">22 december, 2022</div>
    </div>
  </div>
</template>

<script>
import imageUrlBuilder from "@sanity/image-url";
import client from "../../sanity/sanity_client";
import { SanityBlocks } from "sanity-blocks-vue-component";

export default {
  name: "BlogCard",
  props: ["post"],
  components: {
    SanityBlocks,
  },
  methods: {
    urlFor(source) {
      const builder = imageUrlBuilder(client);
      return builder.image(source);
    },
  },
};
</script>

<style>
</style>