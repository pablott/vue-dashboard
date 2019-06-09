Vue.component('bars', {
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
    bars: function () {
      // Get max_value to normalize bar height
      var max_value = Math.max(...this.values);

      // Create array to store bar heights (normalize to %)
      var bars = [];

      // Go through values, calculate normalize value and store in array
      for (var i = 0; i < this.values.length; i++) {
        var height = this.values[i]/max_value * 100;
        bars.push(height);
      }

      // Log
      console.log('bars: max_value', max_value);
      console.log('bars: bars', bars);

      return bars;
    }
  },

  method: {
  },

  // Template using string literals for splitting it in multilines
  template: `
    <div>
      <div class="bars">
        <div class="bar_wrapper" v-for="bar in bars">
          <div class="bar_bg"></div>
          <div class="bar_fg" v-bind:style="{ height: bar + '%' }"></div>
        </div>
      </div>

      <div class="legend">
        Last {{values.length}} months
      </div>
    </div>
    `
})
