// Define a new instance for the dashboard.
// data set here can be accesed from every children component
// (the displays for the stats)


var dashboard = new Vue({
  el: '#dashboard',
  data: {
    values: [10, 20, 50, 70],
  },
})
