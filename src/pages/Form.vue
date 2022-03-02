<template>
  <div>
    <button v-on:click="say('competences')">Compétences</button>
    <button v-on:click="say('experiences')">Expériences</button>
    <button v-on:click="say('formations')">Formations</button>
    <button v-on:click="say('divers')">Divers</button>

    <Accueil v-if="elementForm == 'competences'"/>
    <Apropos v-if="elementForm == 'experiences'"/>
    <MentionLegale v-if="elementForm == 'formations'"/>
    <Connexion v-if="elementForm == 'divers'"/>

  </div>

</template>

<script>
import competences from './elementForm/competences.vue'
import experiences from './elementForm/experiences.vue'
import divers from './elementForm/divers.vue'
import formations from './elementForm/formations.vue'


export default {
  name: 'App',
  components: {
    competences,
    experiences,
    divers,
    formations
  },
  data(){
    return{
      elementForm : 'competences'
    }
  },

  methods: {
    say: function (message) {
      this.elementForm = (message)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
