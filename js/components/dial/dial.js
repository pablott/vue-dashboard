Vue.component('dial', {
  data: function () {
    return {
      // data in a component is set inside a function to keep reactivity
    }
  },

  props: {
    // Take values from parent instance
    values: Array,
  },

  // It is discouraged mutating props of a component, so we have to use computed{} instead.
  // This mutates values for the template without touching the prop 'values'.
  // 'values' on parent instance can be mutated and it will propagate to children components.
  computed: {
    dial_values: function () {
      // Get max_value to normalize dial
      var max_value = Math.max(...this.values);

      // Get sum of values to normalize dial
      var sum_value = this.values.reduce((a, b) => a + b, 0);

      // Calculate rotation normalized to 180deg
      var rotation = (max_value/sum_value * 180);

      // Log
      console.log('dial: max_value', max_value);
      console.log('dial: sum_value', sum_value);
      console.log('dial: rotation', rotation);

      // In this case return an object because we need two values
      // (instead of just one expression)
      return {rotation,sum_value};
    }
  },

  method: {
  },

  // Template using string literals for splitting it in multilines
  template: `
    <div>
      <div class="dial">

        <div class="dial_wrapper">
          <div class="dial_bg"></div>
          <div class="dial_fg" :style="{ transform: 'rotate('+ dial_values.rotation +'deg)'}"></div>
        </div>

        <div class="indicator">{{dial_values.sum_value}}</div>
      </div>

      <div class="legend">
        Active clients
      </div>
    </div>
    `
})
