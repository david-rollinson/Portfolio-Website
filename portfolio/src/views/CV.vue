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
      <div class="cv_container"></div>
      <iframe
        id="cv_pdf"
        src="files/David_Rollinson_CV_CS.pdf"
        frameborder="0"
      ></iframe>
    </body>
  </div>
</template>

<style scoped>
.cv_container {
  position: relative;
  margin-top: 20vh;
}

#cv_pdf {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 60vw;
  min-height: 100vw;
  margin-bottom: 200px;
}

/*set  media rule*/
@media (max-width: 900px) {
  /* sets the min width of these particular style attributes */
  .cv_container {
    display: block;
    position: relative;
    margin-top: 5vw;
  }

  #cv_pdf {
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: auto;
    width: 90vw;
    min-height: 120vw;
    margin-bottom: 200px;
  }
}
</style>
