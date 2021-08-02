import { storiesOf } from '`storybook/vue';
import MyButton from './../componentsMyButton.vue';

storiesOf('MyButton', module).add('simple', () => ({
  components: { MyButton },
  template: `<MyButton>KEEP IT REAL!!</MyButton>`
}));
