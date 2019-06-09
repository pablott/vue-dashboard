var alerts = new Vue({
  el: '#alerts',
  data: {
    items: '', // initialize empty array
    sorted: false, // soeted flag
  },

  methods: {
    // Method for unrolling alerts alerts
    see_more: function(event) {
      // Check if tab was clicked
      if (event) {
        console.log('alerts $refs', this.$refs);
        console.log('event.target', event.target);

        // Change height to show every item
        this.$refs.list.style.height = '100%';
        // Disable tab and shade it
        event.target.disabled = true;
        event.target.style.opacity = '.5';
      }
    },
    // Method for sorting list by importance
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Description
    sort: function(event) {
      if (!this.sorted) {
        // Sort by importance
        this.items.sort(function(a, b) {
          var importanceA = a.importance.toUpperCase(); // ignore upper and lowercase
          var importanceB = b.importance.toUpperCase(); // ignore upper and lowercase
          if (importanceA > importanceB) {
            return -1;
          }
          if (importanceA < importanceB) {
            return 1;
          }

          // importance must be equal
          return 0;
        });
        this.sorted = true;
        this.$refs.sorting.innerText = 'IMPORTANCE ▼';
      } else {
        // If it is sorted, reset the flag, change button text and reverse sorting
        this.sorted = false;
        this.$refs.sorting.innerText = 'IMPORTANCE ▲';
        this.items.reverse();
      }
    }
  },

  mounted() { // when the Vue app is booted up, this is run automatically.
  }

})

// Load JSON with alerts items, parse, create objects
loadJSON(function(response) {
  // Parse JSON string into items reactive data
  alerts.items = JSON.parse(response);
  console.log('alerts response:', response);
  console.log('alerts JSON.parse:', JSON.parse(response));
  console.log('alerts Vue el items:', alerts.items);
});
