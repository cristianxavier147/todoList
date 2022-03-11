<template>
  <form @submit.prevent="procesarForm">
    <Input :tareas="tareas" />
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
      tareas: {
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
      if (this.tareas.nombre.trim() === "") {
        console.log("falta llenar datos");
        return;
      }

      //enviar data a store
      console.log("datos llenados");

      this.tareas.id = shortid.generate();

      this.setTarea(this.tareas);
      //resetear form
      this.tareas = {
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
