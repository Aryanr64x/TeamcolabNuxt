<template>
  <div class="px-52">
    <div class="text-4xl font-semibold pt-24">
      {{ title }}
    </div>
    <div class="flex items-center mt-4">
      <img
        class="rounded-full h-9 w-9 mr-4"
        src="https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3JhbmdlJTIwZmxvd2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        alt="Author's Image"
      />
      <span class="font-semibold text-lg"> {{ creator }} </span>
    </div>
    <div class="mt-4 font-medium">
      {{ formatDateTime(createdAt) }}
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleBlogHeader",
  props: ["title", "createdAt", "creator"],
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