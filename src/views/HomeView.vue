<template>
  <form @submit.prevent="procesarForm">
    <Input :tareas="tareas" />
  </form>
</template>

<script>
import Input from "../components/Input";
export default {
  name: "HomeView",
  components: {
    Input,
  },
  data() {
    return {
      tareas: {
        nombre: "",
        cursos: [],
        estado: "",
        edad: "",
      },
    };
  },

  methods: {
    procesarForm() {
      console.log(this.tareas);
    },
  },
};
</script>
