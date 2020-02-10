<template>
  <div>
    <md-toolbar class="md-large md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>
        </div>

        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-icon>Test</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>Tittle</md-icon>
          </md-button>
        </div>
      </div>

      <div class="md-toolbar-row md-toolbar-offset">
        <h3 class="md-title">Title on a second row</h3>
      </div>
    </md-toolbar>
  </div>
</template>

<style lang="css" scoped>
.md-toolbar + .md-toolbar {
  margin-top: 16px;
}
</style>

<script>
export default {
  element: "navbar"
};
</script>

