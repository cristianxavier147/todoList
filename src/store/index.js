import { createStore } from "vuex";
import router from "../router/index";

export default createStore({
  state: {
    tareas: [],
    tarea: {
      id: "",
      nombre: "",
      cursos: [],
      estado: "",
      edad: "",
    },
  },
  mutations: {
    SET_TAREA(state, payload) {
      state.tareas.push(payload);
    },

    DELETE_TAREA(state, payload) {
      state.tareas = state.tareas.filter((item) => item.id !== payload);
    },

    PONER_TAREA(state, payload) {
      if (!state.tareas.find((item) => item.id === payload)) {
        router.push("/");
        return;
      }
      state.tarea = state.tareas.find((item) => item.id === payload);
    },

    UPDATE_TAREA(state, payload) {
      state.tareas = state.tareas.map((item) => (item.id === payload.id ? payload : item));
      router.push("/");
    },
  },
  actions: {
    setTarea({ commit }, tarea) {
      commit("SET_TAREA", tarea);
    },

    eliminarTarea({ commit }, id) {
      commit("DELETE_TAREA", id);
    },

    ponerTarea({ commit }, id) {
      commit("PONER_TAREA", id);
    },

    updateTarea({ commit }, tarea) {
      commit("UPDATE_TAREA", tarea);
    },
  },
  modules: {},
});
