<template>
  <div class="grid-container">
    <div class="grid-item">
      <b-icon-arrow-left></b-icon-arrow-left>
      <p>Go back</p>
    </div>
    <div class="grid-item">
      <b-icon-map></b-icon-map>
      <P>My routes</P>
    </div>
    <div class="grid-item">
      <b-icon-person-fill></b-icon-person-fill>
      <p>Me</p>
    </div>
  </div>
</template>


<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #303f9f;
  padding: 10px;
  border-top: 2px solid #666666;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
}

.grid-item {
  padding: 20px;
  font-size: 1.5em;
  text-align: center;
}
</style>

<script>
export default {
  element: "footerApp"
};
</script>

