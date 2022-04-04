import { reactive } from 'vue';

const ThemeStore = reactive({
  darkmode: false,
  toggle() {
    this.darkmode = !this.darkmode;
  },
});

export default ThemeStore;
