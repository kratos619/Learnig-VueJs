Vue.component('app-cmp', {
  data: function () {
    return {
      status: 'critical'
    }

  },
  template: '<p> server Status: {{status}}</p>'
});

new Vue({
  el: "#app",

});