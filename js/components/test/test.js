// Define a new component called button-counter
// NOTE: this is just a test component taken from:
// https://vuejs.org/v2/guide/components.html
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
