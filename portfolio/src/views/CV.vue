<template>
  <header>

  </header>

  <body>
      <iframe id="cv_pdf" src="files/David_Rollinson_CV_CS.pdf" frameborder="0"></iframe>
  </body>
</template>

<style scoped>

#cv_pdf {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 70vw;
  min-height: 100vw;
  margin-bottom: 200px;
}

/*set  media rule*/
@media (max-width: 900px) { /* sets the min width of these particular style attributes */
  
  #cv_pdf {
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: auto;
  width: 100vw;
  min-height: 120vw;
  margin-bottom: 200px;
}
}
</style>
