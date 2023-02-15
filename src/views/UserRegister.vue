<template>
  <form @submit="handleSubmit()">
    <div class="contenedor">
      <div class="formulario">
        <formly-form :form="form" :model="model" :fields="fields">
        </formly-form>
        <v-btn @click="addUsser">Submit</v-btn>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CategoriesItems',
  data: () => ({
      form: {},
      model: {
          name: '',
          lastName: '',
          password: '',
          confirmPassword: '',
          email: '',
          address: '',
          phone: ''
      },
      fields: [
          {
              key: 'name',
              default: 'Hola',
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
          {
              key: 'confirmPassword',
              type: 'input',
              required: true,
              wrapper: '<div class="col-md-12"></div>',
              templateOptions: {
                  label: 'Confirm Password',
                  type: 'password'
              },
              validators: {
                sameAsPass: {
                    expression: function(field, model){
                        //assume that 'password' is a previously defined field in the schema
                        console.log(model[ field.key ]);
                        return model[ field.key ] === model.password;
                    },
                    message: 'Your passwords must match'
                },
              }
          },
          {
              key: 'email',
              type: 'input',
              required: true,
              wrapper: '<div class="col-md-12"></div>',
              templateOptions: {
                  label: 'Email',
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
    async addUsser() {
      // console.log(this.$refs.form);
      // if (this.$refs.form.validate()) {
      //   // acciones si es válida la forma (formulario)
      // const body= {
      //       name: this.model.name,
      //       lastName: this.model.lastName,
      //       password: this.model.password,
      //       email: this.model.email,
      //       address: this.model.address,
      //     }
      // console.log(body);
        return axios({
          method: 'post',
          data: {
            name: this.model.name,
            lastName: this.model.lastName,
            password: this.model.password,
            email: this.model.email,
            address: this.model.address,
            phone: this.model.phone,
          },
          url: 'https://poke-store-api.onrender.com/api/users',
        }).then((result) => {
            this.$swal(
              '¡Excelente!',
              'Ha sido registrado satisfactoriamente',
              'success',
            );
            // console.log(result.data.token);
            localStorage.setItem('token', result.data.token);
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
