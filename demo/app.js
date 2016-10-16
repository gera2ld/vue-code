const Vue = require('vue');
const VueCode = require('vue-code');
require('codemirror/mode/javascript/javascript');

new Vue({
  el: '#app',
  data: {
    code: 'console.log("hello, world");',
    options: {
      mode: 'javascript',
    },
  },
  components: {
    VueCode,
  },
  methods: {
    onUpdate(value) {
      this.code = value;
    },
  },
});
