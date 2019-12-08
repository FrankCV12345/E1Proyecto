<template>
    <v-container fluid >
        <v-toolbar
            dark
            color="teal"
        >
        <v-toolbar-title>Busqueda usuarios :</v-toolbar-title>
        <v-autocomplete
        v-model="select"
        :loading="loading"
        :items="items"
        :search-input.sync="search"
        cache-items
        class="mx-4"
        flat
        hide-no-data
        hide-details
        label="Ejemplo : jose"
        solo-inverted
         @change="muestraUsuarioBusqueda(select)"
        ></v-autocomplete>
        <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        </v-toolbar>
            <v-row  justify="center" >
                <v-col  md="6" sm="9" xs="12" >
                    <h1>Tus amigos : </h1>
                    <v-list>
                        <v-list-item
                            v-for="usuario in usuarios"
                            :key="usuario.nombre"
                            @click="muestraUsuario(usuario)"
                        >
                            <v-list-item-content>
                            <v-list-item-title v-text="usuario.nombre"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-col>
            </v-row>


    <v-dialog
      v-model="dialog"
      width="900"
    >

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >

         <v-icon size="85">mdi-account</v-icon><h1>{{usuarioSelected.nombre}}</h1>  
            <v-spacer/>       
          <h1>Calificación  : {{usuarioSelected.cantidadEstrellas}} / 5</h1>
          
          
        </v-card-title>

        <v-card-text>
         
          <v-list>
                        <v-list-item
                            v-for="comentario in usuarioSelected.listaComentarios"
                            :key="comentario.comentario"
                        >
                        <v-list-item-icon>
                            <v-icon v-if="comentario.isNewFasle == true" color="blue" >mdi-check</v-icon>
                            <v-icon v-else color="red"> mdi-minus</v-icon>
                        </v-list-item-icon>

                            <v-list-item-content>
                            <v-list-item-title v-text="comentario.comentario"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
            </v-list>
         
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>





    </v-container>
</template>
<script>
export default {
     name : 'menu',
    data() {
        return {
            usuarios:[
                {nombre:"Franklin Campos",cantidadEstrellas:3,listaComentarios:[
                    {comentario:"comnetario 01",isNewFasle:false},
                    {comentario:"comnetario 02",isNewFasle:true},
                    {comentario:"comnetario 03",isNewFasle:true}
                ]},
                
                {nombre:"Jose Peralta",cantidadEstrellas:3,listaComentarios:[
                    {comentario:"La política neoliberal debe ser ajustada para no sufrir la violencia social que hay en Chile",isNewFasle:true},
                    {comentario:"La población debe estar atenta a las decisiones del JNE y sus tachas a los postulantes al congreso",isNewFasle:false},
                    {comentario:"La realización de la final de la Conmebol Libertadores corre peligro de no realizarse debido a que la Municipalidad de Ate no ha otorgado  el permiso correspondiente ",isNewFasle:true},
                    {comentario:"A partir del próximo año los trabajadores que vayan en bicicleta a su centro laboral gozarán de 10 días más de vacaciones al año",isNewFasle:false},
                    {comentario:"Gisela Valcárcel y Magali Medina  dejaran la televisión para dedicarse a escribir libros áutobiograficos",isNewFasle:false},
                    {comentario:"Andrés Hurtado convence a Mario Vargas Llosa para que sea parte de su plancha presidencial de cara al 2021",isNewFasle:false}                    
                    
                ]},
                
                {nombre:"Javier Cano",cantidadEstrellas:1,listaComentarios:[
                    {comentario:"Quedan conformados los JEE para Elecciones congresales de enero",isNewFasle:false},
                    {comentario:"Elecciones congresales 2020: se instalaran 60 jurados especiales.",isNewFasle:false},
                    {comentario:"Mulder tras declararse inadmisible lista del APRA: “Creo que hay un exceso de burocratismo en el JNE.”",isNewFasle:true},
                    {comentario:"JEE tacha a 22 listas de candidatos a elecciones 2020.",isNewFasle:false},
                    {comentario:"Se anuncian banderazos y la algarabía ya empezó, por ejemplo, en la ‘Calle de las Pizzas’, de Miraflores, donde una ‘caravana’ del Flamengose reunió con alegres cánticos cariocas, cervezas y caipiriñas.",isNewFasle:false},
                    {comentario:"Municipalidad de Miraflores envía invitación a los hinchas de River Plate y Flamengo",isNewFasle:false},
                    {comentario:"Las calle de Miraflores se pintaron de rjo y negro con la ‘torcida’ del Flamengo que se apostaron en no las calles de las Pizzas para empezar a calentar la previa de la final contra River Plate",isNewFasle:false},
                    {comentario:"Los hinchas de River coparon el Óvalo de Miraflores con un 'banderazo' Más de diez mil hinchas de RIver se convocaron en el Óvalo de Miraflores, en Lima, como gran paso previo a la final de la Copa Libertadores, en la que el equipo de Marcelo Gallardo se enfrentará",isNewFasle:false}
                ]}
                ,
                {nombre:"Martin",cantidadEstrellas:5,listaComentarios:[
                    {comentario:"#ÚltimoMinuto Con una diferencia de votos de 5 a 2, el Pleno del Tribunal Constitucional desestimó el nombramiento del primo de Pedro Olaechea. #NoAlAsaltoDelTC #VamosBien ",isNewFasle:true},
                    {comentario:"I think Instagram is not working. #InstagramDown",isNewFasle:true},
                    {comentario:"Mensaje del presidente @MartinVizcarraC para los peruanos que residen en el exterior.",isNewFasle:true},
                    {comentario:"#ÚltimoMinuto El presidente Martín Vizcarra hará juramentar el nuevo gabinete del premier Zeballos..",isNewFasle:true},
                    {comentario:"Simplemente hermoso, dejemos de quejarnos y disfrutemos de está fiesta. Para luego no arrepentirnos de no haber visto lo vivido😭⚽️", isNewFasle:true},
                    {comentario:"#LibertadoresEnLima #CopaLibertadores2019 #FutbolesPasion", isNewFasle:true},
                    {comentario:"Llegando de tomarme la respectiva foto con la copa debo decir que incluso no siendo muy fan del futbol, reconozco que es super paja el ambiente y la buena onda que se arma ante una final  #LibertadoresEnLima #River #Flamengo", isNewFasle:false},
                    {comentario:"#FanFest #LibertadoresEnLima  😎👏⚽💥#Mengao", isNewFasle:true}
                ]}

            ],
            select: null,
            loading:false,
            items:[
                "Martin",
                "Javier Cano",
                "Jose Peralta",
                "Franklin Campos"
            ],
            search:null,
            dialog:false,
            usuarioSelected :  {nombre:"",cantidadEstrellas:null,listaComentarios:[
                    
                ]}
        }
    }
    ,
    methods :{
        muestraUsuario:function(usuario){
                this.BuscaUsuarioEnLista(usuario.nombre)
                this.dialog =true;

            },
        muestraUsuarioBusqueda:function(select){
                this.BuscaUsuarioEnLista(select)
                this.dialog =true;
               
            },
            BuscaUsuarioEnLista: function(nombreUser){
                for(let  i  =0 ; i < this.usuarios.length ; i++){
                    if(nombreUser == this.usuarios[i].nombre){
                        this.usuarioSelected = this.usuarios[i]
                    }
                }

            }
        }
}






</script>