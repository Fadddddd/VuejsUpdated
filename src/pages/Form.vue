<template>
<div>
    <h1>Formulaire</h1>
      <!-- <h2>Compétences</h2>
      <label for="skills">Entrez votre compétence</label>
      <input v-model="formationTabsNews.nomCompetence" placeholder="Entrez votre compétence" type="text" />
<br />

      <h2>Expérience Professionnelle</h2>
      <label for="expe">Entrez votre expérience</label>
      <input v-model="experience" placeholder="Entrez votre experience" type="text" />
      <br />

      <h2>Formation</h2>
      <label for="formation">Nom de votre formation</label>
      <input id="formation" v-model="formation" placeholder="Entrez votre formation" type="text" />
    <br/>

      <h2>Divers</h2>
      <label for="divers">Autres</label>
      <input id="divers" v-model="divers" placeholder="Qqch à ajouter" type="text"/>
   <br/>
      <button @click="saveFormation()">Soumettre</button>

</div>
<div>
<table> 
    <thead>
        <tr>
    <th>Nom de la formation </th>
  <th> competences</th>
  <th> début de la formation</th>
  <th> fin de la formation</th>
  <th> divers </th>
        </tr>
    </thead>
    <tbody>
    <tr v-for="formationTab in formationTabs" :key="formationTab">
        <td> {{formationTab.nomFormation}}</td>
        <td> {{formationTab.dateDebutFormation}}</td>
        <td> {{formationTab.dateFinFormation}}</td>
        <td> {{formationTab.divers}}</td>
    </tr>
    </tbody>
    </table> -->
    </div>
</template>

<script>
export default {
name: 'Form',

  data() {
    return {
        formationTabsNews: [
            {nomFormation: "", dateDebutFormation:"", dateFinFormation:""},
        ],
        formationTabs: [
            {nomFormation : "James Deen", dateDebutFormation : "42/42/42", dateFinFormation: "43/43/43"},
        ]
    }
  },
  methods:{
      saveFormation:function(){
          this.formationTabs.push(this.formationTabsNews);
          alert('Nouvelle formation ajoutée', this.formationTabs)
      },
  },
  }
</script>
<style>

</style>