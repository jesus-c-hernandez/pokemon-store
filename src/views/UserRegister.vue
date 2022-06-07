<template>
  <form @submit="handleSubmit()">
    <div class="contenedor">
      <div class="formulario">
        <formly-form :form="form" :model="model" :fields="fields">
          <v-btn>Submit</v-btn>
        </formly-form>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  name: 'CategoriesItems',
  data () {
  return {
      form: {},
      model: {
          name: '',
          lastName: '',
          password: '',
          confirmPassword: '',
          email: '',
          address: ''
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
      ],
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
  width: 70%;
  height: 70%;
  position: absolute;
  top: 50px;
  left: 15%;
  
}
</style>
