<template>
  <div class="connexion">
      <h1>Connexion</h1>
      <input v-model="pseudo" />
    <input v-model="password" input type="password"/>
      <button @click="saveConnexion">Connexion</button>
  </div>
</template>
  

<script>
import { mapMutations } from "vuex";
export default {
  name: 'ConnexionForm',
  data: function() {
    return {
      pseudo: "",
      password: "",
    }
  },
  methods: {
    ...mapMutations(["setPseudo"]),
    ...mapMutations(["setPassword"]),
    saveConnexion() {
       if(this.pseudo == 'Fad'){
          alert("bien joué")
         }else{
           alert("loser")
       }
       if(this.password == 'haha'){
         alert("bienvenue")
       }else{
         alert("envahisseur!")
       }
        this.setPseudo(this.pseudo);
        this.setPassword(this.password);
    }
  }
}
</script>