// Define a new instance for the dashboard.
// data set here can be accesed from every children component
// (the displays for the stats)


var dashboard = new Vue({
  el: '#dashboard',
  data: {
    values: [10, 20, 50, 70],
  },

  // This gets executed on startup of instance
  mounted: function () {
    console.log(`
      DASHBOARD
      How to use: copy and paste these commands in inspector's command line
      dashboard.$data.values = [10,10,50,25,45]
      dashboard.$data.values = [10,10,45]
      dashboard.$data.values = [10,10,50,25,100,32.7]
      dashboard.add_value()
      dashboard.remove_value()
      dashboard.randomize()
    `);
  },

  methods: {
    // Push random value to array
    add_value: function () {
      // Random number from 0 to 100, make sure is passed as int not string
      var rand = parseInt(Math.random() * 100);
      // Push number to values array
      this.values.push(rand);
    },

    // Remove value from array
    remove_value: function () {
      if (this.values.length > 2) {
        // Remove last element from array
        this.values.pop();
      } else {
        console.log('Can\'t delete any more values');
        return false;
      }
    },

    // Randomize all values inside array
    randomize: function () {
      for (var i = 0; i < this.values.length; i++) {
        // Random number from 0 to 100, make sure is passed as int not string
        var rand = parseInt(Math.random() * 100);
        this.values[i] = rand;
        // Push so Vue can actually propagate the changes
        // (just changing the value of an array item is not enough!)
        this.values.push();
      }
    }

  } // methods
})
