// Define a new component called button-counter
/*Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

*/


var dashboard = new Vue({
  el: '#dashboard',
  data: {
    current: '104',
    values: [10, 20, 50, 70],
  },

})



/*
var dashboard = new Vue({
  el: '#dashboard',
  data: {

  },

  methods: {

  },

  mounted() { // when the Vue app is booted up, this is run automatically.
  }

})
*/
