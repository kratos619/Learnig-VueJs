new Vue({
  el: "#app",
  data: {
    counter: 0,
    result: ""
  },
  methods: {
    increse: function() {
      this.counter++;
      this.result = this.counter > 5 ? "Greater 5" : "smaller 5";
    }
  }
});
