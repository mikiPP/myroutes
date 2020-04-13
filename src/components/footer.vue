<template>
  <div class="grid-container">
    <div class="grid-item">
      <b-icon-arrow-left class="icon"></b-icon-arrow-left>
      <p>Go back</p>
    </div>
    <div class="grid-item">
      <b-icon-map class="icon"></b-icon-map>
      <P>My routes</P>
    </div>
    <div class="grid-item">
      <b-icon-person-fill class="icon"></b-icon-person-fill>
      <p>Me</p>
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #303f9f;
  border-top: 2px solid #666666;
  width: 100%;
  height: auto;
}

.grid-item {
  padding: 20px;
  text-align: center;
  font-size: 1em;
  color: white;
}

.icon {
  font-size: 2.5em;
  color: white;
}
</style>

<script>
export default {
  element: "footerApp"
};
</script>
