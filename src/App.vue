<template>
  <div>
    <Header />
    <Master />
    <button v-on:click="say('accueil')">accueil</button>
    <button v-on:click="say('apropos')">apropos</button>
    <button v-on:click="say('mentionLegale')">mentionLegale</button>
    <button v-on:click="say('connexion')">connexion</button>

    <Accueil v-if="pageMenu == 'accueil'"/>
    <Apropos v-if="pageMenu == 'apropos'"/>
    <MentionLegale v-if="pageMenu == 'mentionLegale'"/>
    <Formulaire v-if="pageMenu == 'Form'"/>
    <Connexion v-if="pageMenu == 'connexion'"/>
    <Footer />
  </div>

</template>

<script>
import Master from './pages/Master.vue'
import Accueil from './pages/Accueil.vue'
import Apropos from './pages/Apropos.vue'
import MentionLegale from './pages/MentionLegale.vue'
import Connexion from './pages/Connexion.vue'
import Header from './template/Header'
import Footer from './template/Footer'
import Formulaire from './pages/Formulaire'
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    Accueil,
    Apropos,
    MentionLegale,
    Connexion,
    Master,
    Header,
    Footer,
    Formulaire,
  },
  data(){
    return{
      pageMenu : 'accueil',
    }
  },

  //Ecoute les valeurs qui changent
  computed: {
    ...mapState(["pseudo"]),
  },

  methods: {
      say: function (message) {
        this.pageMenu = (message)
      },
   /*    methods:{
    submit: function (submitFormValid) {
      if (submitFormValid){
        this.skills!="" && this.expe!="" && this.formation!=""
        this.pageMenu='Form'
        return true;
      }else{
        alert('formulaire invalide')
      } */
        

//Surveille si la valeur change
  watch: {
      pseudo: function(nouveauPseudo){
        //if(this.pseudo!="") ==> if(this.pseudo)
        if(nouveauPseudo!=""){
          this.pageMenu='Formulaire'
        }
      }
    }
  }
}
/*   watch: {
    form: function(nouveauProfil){
      if(this.skills){
        this.skills = ""
      } */
    
</script>