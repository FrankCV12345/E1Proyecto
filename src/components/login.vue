<template>
        <v-container fluid >
            <v-row align="center" justify="center" >
                <v-col  md="6" sm="9" xs="12" >
                    <v-container>
                        <v-row>  
                            <v-text-field
                                v-model="correo"
                                label="Usuario"
                                single-line
                                solo
                                ></v-text-field>       
                        </v-row>
                        <v-row>
                            <v-text-field
                                v-model="password"
                                type="password"
                                label="Password"
                                single-line
                                solo
                                ></v-text-field>
                        </v-row>
                        <v-row>
                            <v-btn color="primary" v-on:click="login" >ENTRAR</v-btn>
                        </v-row>
                        <v-row>
                            <br/>
                            <v-btn @click="dialog=true">
                                Ingresar por Facebook
                                <v-icon color="blue" >mdi-facebook-box</v-icon>
                            </v-btn>
                            <v-btn @click="dialog=true">
                                Ingresar por Twiter
                                <v-icon color="blue" >mdi-twitter-box</v-icon>
                            </v-btn>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row> 
            <v-dialog
            width="400"
            v-model="dialog"
            >
                 <v-card>
                  
                    <v-card-title
                    class="headline grey lighten-2"
                    primary-title
                    >
                    <h2>Login</h2>
                    </v-card-title>
                     <v-divider></v-divider>
                    <v-card-text>
                        
                     <h3>Ingresar por red social ?</h3>    
                    </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="ingresaPorRedSocial" > Ingresar</v-btn>
                        
                        <v-btn @click="dialog=false">Cancelar</v-btn>
                </v-card-actions>
                </v-card>
            </v-dialog>   
        </v-container>
</template>
<script>
import {AXIOS} from '../config/axios'

export default {
    name : 'login',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            correo : '',
            password:'',
            usuarios : [
                {nombre:"javier",pass:"12345678"},
                {nombre:"jose",pass:"12345678"},
                {nombre:"frank",pass:"12345678"},
                {nombre:"martin",pass:"12345678"}
            ],
            dialog:false,
            msgLoginRedesSociales:""
        }
    },
    methods : {
           login :  function(){
                let correo= this.correo;
                let password=this.password;
               for(let i = 0 ; i< this.usuarios.length ; i++){
                   if( this.usuarios[i].nombre == correo &&  this.usuarios[i].pass == password){
                       localStorage.setItem("nombre",correo)
                       this.$router.push({ name: 'menu'})
                   }
               }
           },
           ingresaPorRedSocial: function(){
               this.$router.push({name:"menu"})
           }
    }
}
</script>


<!--export const s_listClients = () => {
  return axios.get('clients',{ headers:{'Authorization': 'Bearer '+ localStorage.getItem('tokenP')}})
}-->
