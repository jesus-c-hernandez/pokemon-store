<template>
  <form @submit="handleSubmit()">
    <div class="contenedor">
      <div class="formulario">
        <formly-form :form="form" :model="model" :fields="fields">
        </formly-form>
        <v-btn @click="updateUsser">Update Perfil</v-btn>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CategoriesItems',
  data: () => ({
      id: '',
      form: {},
      model: {
          name: '',
          lastName: '',
          email: '',
          address: '',
          phone: ''
      },
      fields: [
          {
              key: 'name',
              type: 'input',
              required: true,
              wrapper: '<div class="col-md-12"></div>',
              templateOptions: {
                  label: 'Name',
                  placeholder: 'Username Vaid'
              },
              validators: {
                length: {
                  expression: 'model[ field.key ].length > 3 ',
                  message: 'You must enter more than 3 characters'
                }
              }
          },
          {
              key: 'lastName',
              type: 'input',
              required: true,
              wrapper: '<div class="col-md-12"></div>',
              templateOptions: {
                  label: 'Last Name',
                  placeholder: 'Username Vaid'
              },
              validators: {
                length: {
                  expression: 'model[ field.key ].length > 3 ',
                  message: 'You must enter more than 3 characters'
                }
              }
          },
          {
              key: 'email',
              type: 'input',
              required: true,
              wrapper: '<div class="col-md-12"></div>',
              templateOptions: {
                  label: 'Email',
                  disabled: false
              }
          },
          {
              key: 'address',
              type: 'input',
              required: true,
              wrapper: '<div class="col-md-12"></div>',
              templateOptions: {
                  label: 'Address',
                  placeholder: 'Username Vaid'
              },
              validators: {
                length: {
                  expression: 'model[ field.key ].length > 5 ',
                  message: 'You must enter more than 5 characters'
                }
              }
          },
          {
              key: 'phone',
              type: 'input',
              required: true,
              wrapper: '<div class="col-md-12"></div>',
              templateOptions: {
                  label: 'Phone Number',
                  placeholder: 'Username Vaid'
              },
              validators: {
                length: {
                  expression: 'model[ field.key ].length > 5 ',
                  message: 'You must enter more than 5 characters'
                }
              }
          },
      ],
  }),
  mounted() {
    this.default();
  },
  methods: {
    async updateUsser() {
        return axios({
          method: 'put',
          data: {
            name: this.model.name,
            lastName: this.model.lastName,
            email: this.model.email,
            address: this.model.address,
            phone: this.model.phone,
          },
          url: `https://poke-store-api.onrender.com/api/users/${this.id}`,
          headers: {
          'Content-Type': 'application/json',
          "x-token": window.localStorage.getItem('token'),
          },
        }).then((result) => {
            this.$swal(
              '¡Excelente!',
              'Se ha actualizado exitosamente',
              'success',
            );
            // // console.log(result.data.token);
            // localStorage.setItem('token', result.data.token);
            this.$router.push({ name: 'login' });
          }).catch((error) => {
            const mensaje = error.response.data;
            this.$swal('Error', `${mensaje}`, 'error');
          });
      // }
      // return true;
    },
    limpiar() {
      this.$refs.form.reset();
    },
    async default() {
      this.id = window.localStorage.getItem('id');
      return axios({
        method: 'get',
        url: `https://poke-store-api.onrender.com/api/users/${this.id}`,
        headers: {
          'Content-Type': 'application/json',
          "x-token": window.localStorage.getItem('token'),
        },
      }).then((res) => {
          console.log(res.data.user);
          this.model.name = res.data.user.name
          this.model.lastName = res.data.user.lastName
          this.model.address = res.data.user.address
          this.model.email = res.data.user.email
          this.model.phone = res.data.user.phone
        })
        .catch((error) => {
          const mensaje = error;
          this.$swal('Error', `${mensaje}`, 'error');
          this.$router.push({ name: 'home' });
        });

      
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
  width: 60%;
  height: 800px;
  position: absolute;
  top: 20px;
  left: 15%;
}
</style>
