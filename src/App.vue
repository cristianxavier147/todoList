<template>
  <Navbar />
  <div class="container my-5">
    <router-view />
  </div>
</template>

<script>
import Navbar from "../src/components/Navbar";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style></style>
