vue-code
===

![NPM](https://img.shields.io/npm/v/vue-code.svg)
![License](https://img.shields.io/npm/l/vue-code.svg)
![Downloads](https://img.shields.io/npm/dt/vue-code.svg)

A code editor based on Vue.js and CodeMirror.

Installation
---
``` sh
$ npm i vue-code
```

Usage
---
``` html
<vue-code :code="code" :options="options" @changed="onUpdate"></vue-code>
```

``` js
import Vue from 'vue';
import VueCode from 'vue-code';

// require additional CodeMirror files
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';

new Vue({
  el: '#my-selector',
  components: {
    VueCode,
  },
  data: {
    code: 'console.log("hello, world");',
    options: {
      mode: 'javascript',
    },
  },
  methods: {
    onUpdate(value) {
      this.code = value;
    },
  },
});
```

Snapshots
---
![](snapshot.png)
