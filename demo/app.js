const Vue = require('vue');
const VueCode = require('vue-code');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/css/css');
require('codemirror/mode/markdown/markdown');

new Vue({
  el: '#app',
  data: {
    code: `\
console.log("hello, world");

body {
  background: white;
}

Test \`markdown\`.`,
    options: {
      mode: 'javascript',
    },
    modes: [
      'javascript',
      'css',
      'markdown',
    ],
  },
  computed: {
    mode: {
      get: function () {
        return this.options.mode;
      },
      set: function (mode) {
        this.options = Object.assign({}, this.options, {
          mode,
        });
      },
    },
  },
  components: {
    VueCode,
  },
});
