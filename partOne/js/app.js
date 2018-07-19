new Vue({
  el: "#app",
  data: {
    title: "hi iam Vue Js from title!",
    link: "www.google.com",
    // link output by rawhtml
    fulllink: '<a href="www.google.com">go to google </a>',
    counter: 0
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    },
    sayhello: function() {
      this.title = "world";
      return this.title;
    },
    incressCounter: function() {
      this.counter++;
    }
  }
});
