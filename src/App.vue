<template>
 <div>
    <navbar></navbar>
    
    <section>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quis veritatis aut aperiam. Provident inventore impedit, quis debitis ullam illo saepe nihil id tempora beatae? Commodi pariatur voluptatibus amet fuga?

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia perferendis porro, adipisci, quisquam temporibus veritatis necessitatibus, nostrum inventore rem explicabo accusamus iure sit doloribus. Modi, repellendus! Beatae ad tenetur nihil?
      
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus rem quae cumque ab voluptatum debitis laudantium laborum nemo, distinctio voluptates eos assumenda suscipit saepe, architecto nobis! Quod dolor magni necessitatibus?
    </section>
    <footerApp></footerApp>
  </div>
</template>

<script>
import navbar from "./components/navbar";
import footerApp from "./components/footer";
export default {
  components: { navbar, footerApp}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
