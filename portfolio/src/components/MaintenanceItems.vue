<template>
    <!-- this should probably eventually be refactored into a new file? -->
      <div class="maintenanceMsg" draggable="true">
        <h1>
          <slot name="heading"></slot>
          <!-- //the maintenance message should be dropped in here somehow  -->
        </h1>
        </div>
</template>
  
  <style scoped>
  .maintenanceMsg {
    height: 100vh;
    vertical-align: middle;
    display: flex;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  /* .details {
    flex: 1;
    margin-left: 1rem;
  } */
  
  h1 {
    font-family: Codystar;
    font-size: 26px;
    font-weight: 800;
    color: black;
    position:absolute;
  }

  h1:hover {
    cursor:move;
  }
  
  </style>