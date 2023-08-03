<template>
  <div>
    <header></header>

    <body>
      <div class="intro_text">
        <h3>
          <p class="note">
            † Note: this website's
            <a
              href="https://github.com/david-rollinson/Portfolio-Website/tree/maintenance/portfolio"
              target="_blank"
              rel="noreferrer noopener"
              >construction</a
            >
            is ongoing and content is still being updated. Older projects are
            <a
              href="https://droll002.notion.site/droll002/David-Rollinson-Compiled-Info-077934589fbe40f79015748231abe307"
              target="_blank"
              rel="noreferrer noopener"
              >here.</a
            >
          </p>
          <span style="font-weight: 400">David Rollinson</span> is a London-based creative
          technologist who vitalises spaces and materials with interactive
          technologies. At the centre of their work in experiential environment
          design and development are computational systems used to investigate
          phenomenology and social valuation. Their creative skills readily to
          hand include experience design, 2D/3D graphical programming, CGI
          design and animation, custom electronics and creative ML. Last year
          they combined these into a hypermedia installation exhibited at
          Bargehouse Gallery, Southbank.
          <p>
            <span style="font-weight: 400">Recently</span> they were a resident
            creative technologist at
            <a
              href="https://thebeamslondon.com/thin-air/"
              target="_blank"
              rel="noreferrer noopener"
              >Thin Air</a
            >, where they also assisted in the development of 'Cyclops Retina,
            Light Barrier 2.4' by Kimchi and Chips with Rosa Menkman.
          </p>
        </h3>
      </div>
      <div class="user-directive">
      <p><a @click="pushToWork">⤑</a></p>
      </div>
    </body>
  </div>
</template>

<style scoped>
.note {
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 5px;
}

.user-directive {
  --fontSize: 24px;
  position: relative;
  bottom: 0px;
  width: var(--fontSize);
  height: var(--fontSize);
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  /* background-color: aqua; */
  text-shadow: 2rem 2rem 20rem black;
  font-family: Codystar;
  font-size: var(--fontSize);
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-name: arrow;
  animation-duration: 3.5s;
  line-height: 12px;

  transition: 0.5s;
}

.user-directive p {
  color: rgba(0, 0, 255, 0.6);
  transform: rotate(90deg);
  text-shadow: 0px 0px 9px;
  padding-bottom: 5px;
  padding-left: 5px;
}

.user-directive a {
  text-decoration: none;
}

.user-directive:hover{
  background-color: yellow;
  filter: drop-shadow(0.2rem 0.2rem 1rem yellow);
  border-radius: 50%;
}

/*set animation params*/
@keyframes arrow {
  from { transform: translate(0px, 0px); }
  50%  { transform: translate(0px, 20px); } 
  to   { transform: translate(0px, 0px); }  
}

/*set  media rule*/
@media (max-width: 900px) {
  /* sets the min width of these particular style attributes */
  .user-directive {
  bottom: 100px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      deltaCount: 0,
    }
  },
  mounted () {
    window.addEventListener('wheel', this.handleScroll);
    window.addEventListener('touchmove', this.handleScroll);
  },
  unmounted () {
    window.removeEventListener('wheel', this.handleScroll);
    window.removeEventListener('touchmove', this.handleScroll);
    this.deltaCount = 0;
  },
  methods: {
    handleScroll (event) {
      //If deltaY (part of the WheelEvent object) is less than doc height i.e. a scroll down past the bottom edge of the page, push to next router page.
      this.deltaCount += event.deltaY;
      // console.log(document.body.offsetHeight);
      if(window.innerHeight + this.deltaCount > document.body.offsetHeight) {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        this.pushToWork();
        
      } else if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        this.pushToWork();
      }
    },
    pushToWork() {
      this.$router.push({ name: 'Work' })
    }
  }
}

</script>
