new Vue({
  el: "#app",
  data: {
    title: "hi iam Vue Js from title!",
    link: "www.google.com",
    // link output by rawhtml
    fulllink: '<a href="www.google.com">go to google </a>',
    counter: 0,
    x: 0,
    y: 0
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    },
    sayhello: function() {
      this.title = "world";
      return this.title;
    },
    incressCounter: function(step) {
      this.counter += step;
    },
    updateCorr: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertme: function() {
      alert("you enter space");
    }
  }
});
