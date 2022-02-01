<template>
  <div>
    <Section>
      <Button />
    </Section>
    <RemoteSection>
      <RemoteButton />
    </RemoteSection>
  </div>
</template>

<script>
import Section from "./components/Section.vue";

export default {
  name: "App",
  components: {
    Section,
    Button: () => import("./components/Button.vue"),
    RemoteButton: () =>
      import.meta.env.DEV
        ? import("../../home/src/components/Button.vue")
        : import("home/home-button"),
    RemoteSection: () =>
      import.meta.env.DEV
        ? import("../../home/src/components/Section.vue")
        : import("home/home-section"),
  },
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
