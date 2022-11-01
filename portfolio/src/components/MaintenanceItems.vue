<template>
    <!-- this should probably eventually be refactored into a new file? -->
      <div class="maintenanceMsg">
        <h1>
          <slot name="heading"></slot>
          <!-- //the maintenance message should be dropped in here somehow  -->
        </h1>
        <slot></slot>
        </div>
</template>
  
  <style scoped>

  @font-face {
    font-family: 'Codystar', sans-serif;
    src: local(Codystar),
    url(./fonts/Codystar.ttf);
  }
  @font-face {
    font-family: 'Montserrat Alternates', sans-serif;
    src: local(Montserrat),
    url(./fonts/Montserrat.ttf);
  }
  @font-face {
    font-family: 'Assistant', sans-serif;
    src: local(Assistant),
    url(./fonts/Assistant.ttf);
  }
  .maintenanceMsg {
    margin-top: 50%;
    height: 100%;
    vertical-align: middle;
    display: flex;
    place-content: center;
    align-items: center;
  }
  
  /* .details {
    flex: 1;
    margin-left: 1rem;
  } */
  
  h1 {
    font-family: Codystar;
    font-size: 1.2rem;
    font-weight: 500;
    /* margin-bottom: 0.4rem; */
    color: black;
  }
  </style>
