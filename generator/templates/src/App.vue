<template>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <h2>Second 1</h2>
      </div>
      <div class="section">
        <h2>Second 2</h2>
      </div>
      <div class="section">
        <h2>Second 3</h2>
      </div>
    </full-page>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      options: {
        menu: "#menu",
        anchors: ["page1", "page2", "page3"],
        sectionsColor: ["#41b883", "#ff5f45", "#0798ec"]
      }
    };
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.section{
  text-align: center;
  color: aliceblue;
}
</style>

