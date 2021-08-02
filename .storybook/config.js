import { configure } from '@storybook/vue';
// import Vue from 'vue';

function loadStories() {
  require('../src/stories/index.stories');
}

configure(loadStories, module);
