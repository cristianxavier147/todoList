<template>
  <input type="text" class="form form-control" v-model.trim="tarea.nombre" />
  <!-- input check -->
  <div class="d-flex my-4">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="Node" id="curso1" v-model="tarea.cursos" />
      <label class="form-check-label" for="curso1"> Node Js </label>
    </div>
    <div class="form-check">
      <input class="form-check-input mx-1" type="checkbox" value="Javascript" id="curso2" v-model="tarea.cursos" />
      <label class="form-check-label" for="curso2"> JavaScript </label>
    </div>
    <div class="form-check">
      <input class="form-check-input mx-1" type="checkbox" value="Vue" id="curso3" v-model="tarea.cursos" />
      <label class="form-check-label" for="curso3"> Vue </label>
    </div>
  </div>
  <!-- input radio -->
  <div class="d-flex">
    <div class="form-check">
      <input class="form-check-input" type="radio" value="relax" id="estado1" v-model="tarea.estado" />
      <label class="form-check-label" for="estado1"> Relax </label>
    </div>
    <div class="form-check">
      <input class="form-check-input mx-1" type="radio" value="tranquilo" id="estado2" v-model="tarea.estado" />
      <label class="form-check-label" for="estado2">Tranquilo</label>
    </div>
    <div class="form-check">
      <input class="form-check-input mx-1" type="radio" value="alegre" id="estado3" v-model="tarea.estado" />
      <label class="form-check-label" for="estado3">Alegre</label>
    </div>
  </div>
  <!-- input number -->
  <input type="number" class="form form-control my-4" v-model.number="tarea.edad" />
  <!-- input submit -->
  <input type="submit" class="form form-control btn btn-warning my-2" :disabled="disabledBtn" />
  {{ tarea }}
</template>

<script>
export default {
  name: "Input",
  props: ["tarea"],
  computed: {
    disabledBtn() {
      return this.tarea.nombre.trim() === "" ? true : false;
    },
  },
};
</script>

<style></style>
