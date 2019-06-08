var list = new Vue({
  el: '#alerts',
  data: {
    items: '', // initialize empty array
  },

  methods: {
    greet: function (event) {
      // Pick
      if (event) {
        console.log('list $refs', this.$refs);
        this.$refs.list.style.height = '100%'
        //alert(event.target.tagName)
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
