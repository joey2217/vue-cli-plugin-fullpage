<template>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">First section ...</div>
      <div class="section">Second section ...</div>
      <div class="section">Second section ...</div>
    </full-page>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      options: {
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec'],
      },
    };
  },
};
</script>
