<template>
  <form @submit="handleSubmit()">
    <div class="contenedor">
      <div class="formulario">
        <formly-form :form="form" :model="model" :fields="fields">
          <v-btn>Submit</v-btn>
          <v-btn v-bind:to="{ name: 'userRegister' }">New Usser</v-btn>
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
          userName: '',
          password: '',
      },
      fields: [
          {
              key: 'name',
              type: 'input',
              required: true,
              wrapper: '<div class="col-md-12"></div>',
              templateOptions: {
                  label: 'Username / Email',
                  placeholder: 'Username Vaid',
              },
              validators: {
                length: {
                  expression: 'model[ field.key ].length > 0 ',
                  message: 'You must enter a UserName'
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
                  message: 'You must enter a UserName'
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
  width: 50%;
  height: 50%;
  position: absolute;
  top: 50px;
  left: 25%;
  
}
</style>
