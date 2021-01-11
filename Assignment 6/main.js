Vue.component('Pokemon', {
  props: {
    name: {
      type: String,
      required: true
    },
    evoName: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    evoImage: {
      type: String,
      required: true
    }
  },
  data: function()  {
    return {
      currentName: null,
      currentImage: null
    }
  },
  template: `
  <div class="pokemon" @mouseover="devolve()" @mouseout="evolve()">
    <p>{{ currentName }}</p>
    <img class="poke-image" :src="currentImage" />
  </div>
  `,
  methods: {
    devolve () {
      this.currentName = this.name;
      this.currentImage = this.image;
    },
    evolve () {
      this.currentName = this.evoName;
      this.currentImage = this.evoImage;
    }
  },
  created() {
    this.currentName = this.evoName;
    this.currentImage = this.evoImage;
  }
})

var app = new Vue({
  el: '#app',
  data: {
    pokemon: [
      { id: 1, name: 'Bulbasaur', image: 'img/bulbasaur.png', evoName: 'Ivysaur', evoImage: 'img/ivysaur.png'},
      { id: 2, name: 'Charmander', image: 'img/charmander.png', evoName: 'Charmeleon', evoImage: 'img/charmeleon.png'},
      { id: 3, name: 'Squirtle', image: 'img/squirtle.png', evoName: 'Wartortle', evoImage: 'img/wartortle.png'},
      { id: 4, name: 'Pikachu', image: 'img/pikachu.png', evoName: 'Raichu', evoImage: 'img/raichu.png'}
    ]
  }
});