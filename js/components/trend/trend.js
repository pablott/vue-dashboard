// Define a new component called button-counter
/*Vue.component('trend', {
  data: function () {
    return {
      count: 0
    }
  },

  props: {
    value: String,
  },

  template: '{{value}}<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
*/


Vue.component('trend', {
  data: function () {
    return {
      count: 0
    }
  },

  props: {
    current: String,
    values: Array,
  },

  watch: {
    values: function(val) {
      alert('values were changed');
    }
  },

  method: {
  },



  //template: '<button v-on:click="count++">{{value}} You clicked me {{ count }} times.</button>'
  template: `
    <div>
      <div class="indicator"></div>
      <div class="legend">
        {{values}}
      </div>
      <p ref="trend_text">INCREASE</p>
    </div>
    `
})
