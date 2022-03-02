<template>
<div id="app">
    <h1>Ceci est un formulaire</h1>
<form>
  <label for="cptces">Ajoutez une compétence:</label><br>
  <input type="text" id="cptces" name="cptces" required><br>
  <input type="submit" value="Validez" /><br>
  <label for="formation">Ajoutez une formation:</label><br>
  <input type="text" id="formation" name="formation" required>
  <input type="date" id="start" name="trip-start"
    value="2022-02-23" min="2000-01-01" max="2055-12-31" required>
    <input type="submit" value="Validez" /><br>
  <label for="divers">Divers:</label><br>
  <input type="text" id="divers" name="divers" required><br>
  <input type="submit" value="Validez" /><br>
<label for="experiences">Expériences:</label><br>
  <input type="text" id="experiences" name="experiences" required>

  <input type="submit" value="Validez" />
</form>
</div>
</template>

<script>
var firstTable = new Vue({
  el: '#firstTable',
  data: {
    rows: [
      { cptces: 1, formation: "Chandler Bing", divers: '305-917-1301', experiences: 'IT Manager' },
      { cptces: 2, formation: "Ross Geller", divers: '210-684-8953', experiences: 'Paleontologist' },
      { cptces: 3, formation: "Rachel Green", divers: '765-338-0312', experiences: 'Waitress'},
      { cptces: 4, formation: "Monica Geller", divers: '714-541-3336', experiences: 'Head Chef' },
      { cptces: 5, formation: "Joey Tribbiani", divers: '972-297-6037', experiences: 'Actor' },
      { cptces: 6, formation: "Phoebe Buffay", divers: '760-318-8376', experiences: 'Masseuse' }
    ]
  }
});
</script>