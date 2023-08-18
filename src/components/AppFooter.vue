<template>
  <footer class="footer">
    <div style="display: flex;justify-content: center;">
      <a href=""
        style="width: 30%;height: 50px;background-image:linear-gradient(to top, rgb(208, 241, 117), rgb(219, 233, 20)) ;border-radius: 15px;font-size: xx-large; display: flex;justify-content: center;align-items: center;">Believe
        me!</a>
    </div>
    <br>
    <div class="container">
      <p class="footer-text">© ChaoSmith 2019-{{ currentYear }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style>
.footer {
  min-height: 10vh;
}

.footer-text {
  font-size: 0.9rem;
  font-weight: 200;
  color: var(--regular-text-color);
  text-align: center
}
</style>