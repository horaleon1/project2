import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    pedido: true,
    minutos: 0,
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
  mutations: {},
  actions: {
   
  },
  getters: {}
});
