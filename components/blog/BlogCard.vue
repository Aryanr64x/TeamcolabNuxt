<template>
  <div
    class="
      cursor-pointer
      hover:shadow-xl
      bg-red
      hover:shadow-black
      duration-500
      flex flex-col
      justify-between
    "
    @click="$router.push({ path: '/blog/' + post.attributes.slug })"
  >
    <div>
      <div class="">
        <img class="h-full w-full" :src="'http://localhost:1337'+post.attributes.image.data.attributes.url" alt="Preview Image of the blog " />
      </div>
      <div class="px-2 pt-2 pb-2">
        <div class="text-2xl font-bold">
          {{ post.attributes.title }}
        </div>
        <div class="mt-2">
          {{ post.attributes.description }}
        </div>
        <div class="h-full"></div>
      </div>
    </div>
    <div class="flex items-center p-2">
      <img class="h-8 w-8 rounded-full mr-2" src="" alt="" />
      <div class="font-semibold"></div>
      <div class="grow"></div>
      <div class="text-sm">{{  formatDateTime(post.attributes.createdAt)  }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: ["post"],

  methods: {
    formatDateTime(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
  },
};
</script>

<style>
</style>