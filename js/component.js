var list = new Vue({
  el: '#alerts',
  data: {
    items: '', // initialize empty array
  },

  mounted() { // when the Vue app is booted up, this is run automatically.
  }

})

// Load JSON, parse, create objects
loadJSON(function(response) {
  // Parse JSON string into items reactive data
  list.items = JSON.parse(response);
  console.log(response);
  console.log(JSON.parse(response));
  console.log(list.items);
});
