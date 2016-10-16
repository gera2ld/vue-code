var Vue = require('vue');
var CodeMirror = require('codemirror');

var defaultOptions = {
  lineNumbers: true,
  tabSize: 2,
};

var Code = {
  props: ['code', 'options'],
  render: function (createElement) {
    return createElement('div');
  },
  watch: {
    code: 'update',
  },
  methods: {
    update: function (code) {
      var _this = this;
      code = code || '';
      if (code !== _this.cached) {
        _this.cached = code;
        _this.cm && _this.cm.setValue(code);
      }
    },
  },
  created: function () {
    this.update(this.code);
  },
  mounted: function () {
    var _this = this;
    _this.cm = CodeMirror(_this.$el, Object.assign({}, defaultOptions, _this.options, {
      value: this.cached || '',
    }));
    _this.cm.on('change', function (cm) {
      _this.$emit('changed', _this.cached = cm.getValue());
    });
  },
};

module.exports = Vue.extend(Code);
