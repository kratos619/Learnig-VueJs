new Vue({
  el: "#app",
  data: {
    title: "hi iam Vue Js!"
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    }
  }
});
