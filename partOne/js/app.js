new Vue({
  el: "#app",
  data: {
    title: "hi iam Vue Js from title!",
    link: "www.google.com"
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    },
    sayhello: function() {
      this.title = "world";
      return this.title;
    }
  }
});
