<template>
    <v-form v-model="valid">
        <v-container>
            <h2 class="mt-5 text-center">PokeShopee</h2>
            <h3 class="mt-2 text-center titulo">Capturalos a todos aquí!!!</h3>
        <v-row>
        <div class="col ml-15" >
            <!-- <img height="500" src="../assets/tipos/ice.png"/> -->
            <img height="250" src="../assets/tipos/abot.jpg"/>
        </div>

        <div class="col pl-1">
            <v-row>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
            </v-row>
        </div>
        </v-row>

        <v-divider class="mt-10"></v-divider>

        <h2 class="mt-10 ml-15">Contact us</h2>

        <v-row>
        <div class="col ml-15" >
            <v-row>
            <v-col
            cols="12"
            md="4"
            >
            <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="Name"
                required
            ></v-text-field>
            </v-col>

            <v-col
            cols="12"
            md="4"
            >
            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
            ></v-text-field>
            </v-col>
            </v-row>

            <v-textarea
            name="input-7-1"
            filled
            label="Message"
            auto-grow
            value=""
            class="mt-5"
            ></v-textarea>

            <v-btn
            color="warning"
            elevation="2"
            x-large
            @click="addCart"
            >Send</v-btn>
        </div>

        <div class="col pl-1">
            <v-list>
                <v-list-item>
                    <v-list-item-action>
                    <v-icon>mdi-phone</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                    <v-list-item-title>(650) 555-1234</v-list-item-title>
                    </v-list-item-content>
                    
                </v-list-item>
                    <v-list-item>
                    <v-list-item-action>
                    <v-icon>mdi-email</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                    <v-list-item-title>poke.shopee@gmail.com</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

            </v-list>
        </div>

        </v-row>
        </v-container>
    </v-form>    
</template>

<script>
export default {
    data: () => ({
        valid: false,
        firstname: '',
        lastname: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => v.length <= 10 || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
    }),
    methods: {
    addCart() {
    this.$swal(
        '¡Excelente!',
        'Mensaje enviado',
        'success',
            );
        }
    }
}
</script>

<style scoped>
.titulo{
color: #ffd700 !important;
}
</style>
