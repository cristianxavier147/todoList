<template>
  <form @submit.prevent="procesarForm">
    <Input :tarea="tarea" />
    <ListaTarea />
  </form>
</template>

<script>
const shortid = require("shortid");
import Input from "../components/Input";
import ListaTarea from "../components/ListaTarea";
import { mapActions } from "vuex";
export default {
  name: "HomeView",
  components: {
    Input,
    ListaTarea,
  },
  data() {
    return {
      tarea: {
        id: "",
        nombre: "",
        cursos: [],
        estado: "",
        edad: "",
      },
    };
  },

  methods: {
    ...mapActions(["setTarea"]),
    procesarForm() {
      if (this.tarea.nombre.trim() === "") {
        console.log("falta llenar datos");
        return;
      }

      this.tarea.id = shortid.generate();

      this.setTarea(this.tarea);
      //resetear form
      this.tarea = {
        id: "",
        nombre: "",
        cursos: [],
        estado: "",
        edad: "",
      };
    },
  },
};
</script>
