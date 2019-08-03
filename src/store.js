import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
Vue.use(axios);

export const store = new Vuex.Store({
  state: {
    pedido: true,
    pedir:false,
    minutos: 22,
    segundosRestantes: 20,
    direccion: {
      calle: "Tonala",
      numero: 10,
      colonia: "Roma Norte"
    },
    paciente: {
      nombre: "Jorge",
      apellido: "Perez"
    },

    user: {
      nombre: {
        primerNombre: "-",
        apellido: "-"
      },
      edad: "-",
      estado: "-",
      correoElectronico: "-",
      contraseña: "-",
      telefono: "-",
      direccion: {
        calle: "-",
        numero: "-",
        colonia: "-",
        codigoPostal: "-"
      },
      historial: "-",
      padecimiento:'-',
      alergias:'-',
      polizaSeguro:{
        compania:'-',
        numero:'-'
      }
    },

    userAmbulance: {
      tripulacion: {
        one: {
          nombre: {
            primerNombre: "-",
            apellido: "-"
          },
          correoElectronico: "-",
          contraseña: "-",
          telefono: "-"
        },
        two: {
          nombre: {
            primerNombre: "-",
            apellido: "-"
          },
          correoElectronico: "-",
          contraseña: "-",
          telefono: "-"
        },
        three: {
          nombre: {
            primerNombre: "-",
            apellido: "-"
          },
          correoElectronico: "-",
          contraseña: "-",
          telefono: "-"
        }
      },
      historial:'-'
    },
    alertAmbulance: false
  },
  mutations: {
    getData2(state, data2){
      state.data2 = data2
    }

  },
  actions: {

    loadData(){
      axios 
      .get('https://randomuser.me/api/')
      .then(data => {
        console.log(data.results[0].name.first)
        let data2 = data.results[0].name.first
        this.commit('getData2',data2)
      })
      .catch( error => console.log(error))
    }

  },

  getters: {}
});
