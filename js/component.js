var list = new Vue({
  el: '#alerts',
  data: {
    //items: [{"name":"Adam"},{"name":"Emma"}], // initialize empty array
    items: '', // initialize empty array
    message: 'xxx',
    test_array: [{
        message: 'Foo'
      },
      {
        message: 'Bar'
      }
    ]
  },


  mounted() { // when the Vue app is booted up, this is run automatically.
    //var self = this // create a closure to access component in the callback below
    //loadJSON(function(response) {
    // Parse JSON string into object
    //self.items = JSON.parse(response);
    //self.items = [1,4,3];
    //console.log(response);
    //console.log(JSON.parse(response));
    //console.log(self.items);
    //});

    //self.message = 'ggg';
  }

})


//list.items = [1,4,3];
//list.items = [{name:"Adam"},{name:"Emma"}]; // initialize empty array
list.message = 'ggg';
loadJSON(function(response) {
  // Parse JSON string into object
  list.items = JSON.parse(response);
  //self.items = [1,4,3];
  console.log(response);
  console.log(JSON.parse(response));
  console.log(list.items);
});









/*


var example1 = new Vue({
  el: '#item_list',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
*/
