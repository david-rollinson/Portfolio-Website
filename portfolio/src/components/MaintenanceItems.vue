<template>
    <!-- this should probably eventually be refactored into a new file? -->
      <div class="maintenanceMsg">
        <h2>
          <slot name="heading"></slot>
          <!-- //the maintenance message should be dropped in here somehow  -->
        </h2>
        <slot></slot>
        </div>
</template>
  
  <style scoped>
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
  
  h2 {
    font-family: codystar;
    font-size: 1.2rem;
    font-weight: 500;
    /* margin-bottom: 0.4rem; */
    color: var(--color-heading);
  }
  </style>
