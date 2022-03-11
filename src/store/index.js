import { createStore } from "vuex";

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
      console.log(state.tareas);
    },

    DELETE_TAREA(state, payload) {
      state.tareas = state.tareas.filter((item) => item.id !== payload);
    },
  },
  actions: {
    setTarea({ commit }, tarea) {
      commit("SET_TAREA", tarea);
    },

    eliminarTarea({ commit }, id) {
      commit("DELETE_TAREA", id);
    },
  },
  modules: {},
});
