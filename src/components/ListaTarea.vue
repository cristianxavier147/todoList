<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Curso</th>
        <th scope="col">Estado</th>
        <th scope="col">Edad</th>
        <th scope="col">Acción</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="tarea in tareas" :key="tarea.id">
        <th scope="row">{{ tarea.id }}</th>
        <td>{{ tarea.nombre }}</td>
        <td>{{ tarea.cursos.join(", ") }}</td>
        <td>{{ tarea.estado }}</td>
        <td>{{ tarea.edad }}</td>
        <td>
          <button class="btn btn-danger btn-sm" @click="eliminarTarea(tarea.id)">Eliminar</button>
          <router-link
            :to="{
              name: 'Editar',
              params: {
                id: tarea.id,
              },
            }"
            class="btn btn-warning btn-sm mx-1"
          >
            Editar
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ListaTarea",
  computed: {
    ...mapState(["tareas"]),
  },

  methods: {
    ...mapActions(["eliminarTarea"]),
  },
};
</script>

<style></style>
