Vue.component('trend', {
  data: function () {
    return {
      // data in a component is set inside a function to keep reactivity
    }
  },

  props: {
    // Take values from parent instance
    values: Array,
  },

  watch: {
    // Watch the changes, this does nothing, just showing the feature and logging
    values: function(val) {
      console.log('trend: values were changed to: ', val);
    }
  },

  // It is discouraged mutating props of a component, so we have to use computed{} instead.
  // This mutates values for the template without touching the prop 'values'.
  // 'values' on parent instance can be mutated and it will propagate to children components.
  computed: {
    // Compute values from 'values'
    get_current: function () {
      var current = this.values[this.values.length-1];
      return current;
    },

    get_diff: function () {
      var current = this.values[this.values.length-1];
      var previous = this.values[this.values.length-2];
      var diff = current-previous;
      return diff;
    },

    get_trend_text: function () {
      var current = this.values[this.values.length-1];
      var previous = this.values[this.values.length-2];

      if (current>previous) {
        trend_text = 'Increase';
      } else {
        trend_text = 'Decrease';
      }
      return trend_text;
    }
  },

  method: {
  },

  // Template using string literals for splitting it in multilines
  template: `
    <div>
      <div class="indicator">
        {{get_current}}/{{get_diff}}
      </div>
      <div class="legend">
        {{get_trend_text}}
      </div>
    </div>
    `
})
