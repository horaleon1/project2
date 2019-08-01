import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    pedido:true,
    minutos:0,
    segundosRestantes:10,
    direccion:{
      calle: 'Tonala',
      numero: 10,
      colonia: 'Roma Norte'
    },
    paciente:{
      nombre: 'Jorge',
      apellido: 'Perez'
    }
  },
  mutations:{
    
  },
  actions:{

  },
  getters:{

  }
})