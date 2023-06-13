<template>
  <header>
  </header>

  <body>
    <div class="intro_text">
    <h3>
      <p><span style="font-weight: 600; font-size: medium;" >† Please note that this website is currently undergoing construction and content is still being updated. For full details, see <a href="https://droll002.notion.site/droll002/David-Rollinson-Compiled-Info-077934589fbe40f79015748231abe307" target="_blank" rel="noreferrer noopener">my previous site.</a></span></p>
      <span style="font-weight: 600;" >David Rollinson</span> is a creative technologist who vitalises spaces and materials with interactive technologies. At the centre of their work in experiential environment design and development are computational systems used to investigate phenomenology and social valuation. Their creative skills readily to hand include experience design, 2D/3D graphical programming, CGI design and animation, custom electronics and creative ML. They recently combined these into a hypermedia installation exhibited at Bargehouse Gallery, Southbank. <p><span style ="font-weight: 600;" >Currently</span> they are a resident creative technologist at The Beams - Centre for New Culture, where they also assisted in the development of 'Cyclops Retina, Light Barrier 2.4' by Kimchi and Chips with Rosa Menkman.</p></h3>
    </div>

    <div class="marquee">
      <p>This is my marquee.</p>
    </div>
  
  </body>
</template>

<style scoped>

/*set  media rule*/
@media (max-width: 900px) { /* sets the min width of these particular style attributes */

}

.marquee {
  background: blue;
  position: relative;
  width: 100%;
  max-height: 100px;
  filter: drop-shadow(0 0rem 1rem blue);
  overflow: hidden;
}

.marquee p{
  margin: 0;
  font-size: 3ch;
  color: white;
  position: relative;
  transform: translateX(100%);
  animation: scroll-left 15s linear infinite;
}

@keyframes scroll-left {
  0%  {
    transform: translateX(100%);
  }
  100%  {
    transform: translateX(-100%);
  }
}

</style>

<script setup>

</script>