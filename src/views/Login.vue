<template>
  <form @submit="handleSubmit()">
    <div class="contenedor">
      <div class="formulario">
        <formly-form :form="form" :model="model" :fields="fields">
          <v-btn @click="login">Submit</v-btn>
          <v-btn v-bind:to="{ name: 'userRegister' }">New Usser</v-btn>
        </formly-form>
      </div>
    </div>
  </form>
</template>
<script>
import axios from 'axios';
import bus from '../bus';

export default {
  name: 'Login',
  data: () => ({
    form: {},
      model: {
          email: '',
          password: '',
      },
      fields: [
          {
              key: 'email',
              type: 'input',
              required: true,
              wrapper: '<div class="col-md-12"></div>',
              templateOptions: {
                  label: 'Email',
                  placeholder: 'email Vaid',
              },
              validators: {
                length: {
                  expression: 'model[ field.key ].length > 0 ',
                  message: 'You must enter a email'
                }
              }
          },
          {
              key: 'password',
              type: 'input',
              required: true,
              wrapper: '<div class="col-md-12"></div>',
              templateOptions: {
                  label: 'Password',
                  type: 'password'
              },
              validators: {
                length: {
                  expression: 'model[ field.key ].length > 0 ',
                  message: 'You must enter a Valid Password'
                }
              }
          },
      ],
  }),
  mounted() {
    this.isLogged();
  },
  methods: {
    async login() {
      console.log(this.model.email);
      console.log(this.model.password);
      return axios({
        method: 'post',
        data: {
          email: this.model.email,
          password: this.model.password,
        },
        url: 'https://pokemon-store-api.herokuapp.com/api/login',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => {
          window.localStorage.setItem('token', res.data.token);
          window.localStorage.setItem('email', this.model.email);
          window.localStorage.setItem('id', res.data.user.uid);
          this.$swal('Felicidades!!', 'Está listo para iniciar!', 'success');
          bus.$emit('refreshLogin');
          this.$router.push({ name: 'home' });
          
        })
        .catch((error) => {
          const mensaje = error;
          this.$swal('Error', `${mensaje}`, 'error');
          this.$router.push({ name: 'login' });
        });
    },
    async isLogged() {
      const token = window.localStorage.getItem('token');
      const email = window.localStorage.getItem('email');
      const id = window.localStorage.getItem('id');
      if (token && email && id) {
        this.$router.push({ name: 'perfil' });
      }
    }
  }
}
</script>
<style scoped>
.contenedor {
  display: flex;
  align-items: center;
  position: relative;
}
.formulario{
  width: 50%;
  height: 50%;
  position: absolute;
  top: 50px;
  left: 25%;
  
}
</style>
