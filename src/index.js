import CodeMirror from 'codemirror';

const defaultOptions = {
  lineNumbers: true,
  tabSize: 2,
};

export default {
  props: ['value', 'options'],
  render: h => h('div'),
  watch: {
    value: 'update',
    options(options, oldOptions) {
      const {cm} = this;
      if (!cm) return;
      for (const key in Object.assign({}, oldOptions, options)) {
        if (options[key] !== oldOptions[key]) {
          cm.setOption(key, options[key]);
        }
      }
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
    this.$emit('ready', this.cm);
    this.cm.on('change', cm => {
      this.$emit('input', this.cached = cm.getValue());
    });
    this.update(this.value);
  },
};
