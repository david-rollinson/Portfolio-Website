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

<template>
  <div>
    <header></header>

    <body>
      <div class="about_text" style="height: 50vh">
        <h3>
          <span style="letter-spacing: 1vw; text-align: center"
            >All enquiries: davrc . me @ gmail . com</span
          >
          <p></p>
          <br />
          <br /><span style="font-weight: 800; font-family: Codystar"
            >Elsewhere >
          </span>
          <a
            href="https://github.com/david-rollinson"
            target="_blank"
            rel="noreferrer noopener"
            >Github</a
          >
          |
          <a
            href="https://gitlab.doc.gold.ac.uk/droll002"
            target="_blank"
            rel="noreferrer noopener"
            >Gitlab (University)</a
          >
          |
          <a
            href="https://linkedin.com/in/rollinson-david"
            target="_blank"
            rel="noreferrer noopener"
            >LinkedIn</a
          >
          |
          <a
            href="https://droll002.notion.site/David-Rollinson-Compiled-Info-077934589fbe40f79015748231abe307"
            target="_blank"
            rel="noreferrer noopener"
            >Prev. Site (defunct)</a
          >
        </h3>
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
