<template>
  Editar {{ $route.params.id }}
  {{ tarea }}
  <form @submit.prevent="updateTarea(tarea)">
    <Input :tarea="tarea" />
  </form>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Input from "../components/Input";

export default {
  name: "EditarView",
  components: {
    Input,
  },
  computed: {
    ...mapState(["tarea"]),
  },

  methods: {
    ...mapActions(["ponerTarea", "updateTarea"]),
  },

  created() {
    this.ponerTarea(this.$route.params.id);
  },
};
</script>

<style></style>
