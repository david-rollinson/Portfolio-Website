<template>
  <div>
    <header></header>

    <body>
      <div class="about_text" style="display: flex; flex-direction: column; height: 50vh">
        <h3>
          <p>CV available upon request.</p>
          <span style="letter-spacing: 1vw; text-align: center"
            > davrc . me @ gmail . com</span
          >
          <br />
          <br />
        </h3>
          <div style="font-weight: 300; word-spacing: 1vw">
            <a
              href="https://github.com/david-rollinson"
              target="_blank"
              rel="noreferrer noopener"
              >Github</a
            >
            |
            <a
              href="https://linkedin.com/in/rollinson-david"
              target="_blank"
              rel="noreferrer noopener"
              >LinkedIn</a
            >
          </div>
      </div>
      <div class="footer">
        <p>
          This website is an ongoing project, created in Vue.js.
          <a
            href="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fdevushkabeam.netlify.app%2F"
            target="_blank"
            rel="noreferrer noopener"
            >Web stats.</a
          >
        </p>
      </div>
    </body>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  mounted() {
    window.scrollTo({ top: 0, left: 0 });
  },
  unmounted() {

  },
  methods: {
    handleInfoScroll (event) {

    }
  },
  props: {

  },
};
</script>

<style scoped>
.footer {
  display: block;
  position: relative;
  bottom: 100px;
  overflow: visible;
  font-size: 15px;
  text-align: center;
}

/*set  media rule*/
@media (max-width: 900px) {
  /* sets the min width of these particular style attributes */
}

/* .closing-about span{
  color: yellow;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 100%;
  bottom: 200px;
} */
</style>
