import { createApp } from 'vue' //on importe le createApp qui existe dans le vue d'où les moustaches
import { createStore } from 'vuex'

import App from './App.vue' //ici c le fichier. c le body du projet

//les valeurs qui sont contenues dans le store ne peuvent pas changer. Le state=le store. Ca peut changer uniquement dans des mutations. A chq x qu'on veut rajouter des choses des éléments dans le state, faudra aussi le faire dans les mutations. Qd il sera trop plein, faudra un fichier store pr contenir les infos telles que noms, adresses etc mais on peut compartimentaliser les infos. Mémoire à court session.
const store = createStore({
  state() {
    return {
      pseudo: "Fad",
      password: "haha"
    }
  },
  mutations: {
    setPseudo (state, pseudo) {
      console.error("setting pseudo", pseudo)
      state.pseudo = pseudo
    },
    setPassword(state, password) {
      console.error("setting password", password)
      state.password = password
    }
  }
});

const app = createApp(App)

app.use(store);
//app.use(store) faut mount app sinon ça crée un conflit. On utilise Vuex pr le store car VueJs n'a pas le store. Attention aux versions car elles ne sont pas toutes compatibles entre elles(VueX et VueJs)
app.mount("#app")