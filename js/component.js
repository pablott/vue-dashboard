var list = new Vue({
  el: '#alerts',
  data: {
    items: '', // initialize empty array
  },

  methods: {
    // Method for unrolling alerts list
    see_more: function (event) {
      // Check if tab was clicked
      if (event) {
        console.log('list $refs', this.$refs);
        console.log('event.target', event.target);

        // Change height to show every item
        this.$refs.list.style.height = '100%';
        // Disable tab and shade it
        event.target.disabled = true;
        event.target.style.opacity = '.5';
      }
    }
  },

  mounted() { // when the Vue app is booted up, this is run automatically.
  }

})

// Load JSON, parse, create objects
loadJSON(function(response) {
  // Parse JSON string into items reactive data
  list.items = JSON.parse(response);
  console.log('list response:', response);
  console.log('list JSON.parse:', JSON.parse(response));
  console.log('list Vue el items:', list.items);
});
