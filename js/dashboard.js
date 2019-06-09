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
    `);
  }

})
