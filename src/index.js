import Vue from 'vue';
import CodeMirror from 'codemirror';

const defaultOptions = {
  lineNumbers: true,
  tabSize: 2,
};

export default Vue.extend({
  props: ['value', 'options'],
  render(h) {
    return h('div');
  },
  watch: {
    value: 'update',
    options(options, oldOptions) {
      const {cm} = this;
      if (!cm) return;
      Object.keys(options)
      .concat(Object.keys(oldOptions))
      .forEach(key => {
        if (options[key] !== oldOptions[key]) {
          cm.setOption(key, options[key]);
        }
      });
    },
  },
  methods: {
    update(value) {
      if (value === this.cached) return;
      this.cm && this.cm.setValue(this.cached = value);
    },
  },
  mounted() {
    this.cm = CodeMirror(this.$el, Object.assign({}, defaultOptions, this.options));
    this.cm.on('change', cm => {
      this.$emit('input', this.cached = cm.getValue());
    });
    this.update(this.value);
  },
});
