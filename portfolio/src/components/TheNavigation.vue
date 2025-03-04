<template>
  <div class="navigation-panel">
  <nav onclick>
    <!-- 'style:' tag to account for paragraph indent -->
    <RouterLink to="/">David <br>Rollinson</RouterLink>
    <RouterLink to="/work" :class="{ 'work-link': $route.path.startsWith('/work') }">Selected <br>Projects</RouterLink>
    <RouterLink to="/info">Info</RouterLink>
  </nav>
</div>
</template>
