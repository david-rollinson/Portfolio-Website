<template>
  <div>
    <header></header>

    <body>
      <div class="intro_text">
        <h3>
          <p class="note">
            † Note: See this website's development on my
            <a
              href="https://github.com/david-rollinson/Portfolio-Website/tree/maintenance/portfolio"
              target="_blank"
              rel="noreferrer noopener"
              >Github</a
            >
            . Scroll down or use the navigation panel to see recent projects.
          </p>
          <span style="font-weight: 400">David Rollinson</span> is a London-based creative
          technology professional currently providing technical support to animated feature films. They have worked on projects from CGI design and animation to graphical programming, custom electronics, installation design and HCI.
          At the centre of their work runs their interest in creative programming for space and screen. Last year
          they exhibited a hypermedia installation at
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

<script>
export default {
  data() {
    return {
      deltaCount: 0,
    }
  },
  mounted () {
    window.scrollTo({ top: 0, left: 0 });
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

<style scoped>
.note {
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 5px;
}

.user-directive {
  --fontSize: 24px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  margin-top: 15px;
  width: 100%;

  width: calc(var(--fontSize) + 10px);
  height: calc(var(--fontSize) + 10px);

  text-align: center;

  text-shadow: 2rem 2rem 20rem black;
  font-family: Codystar;
  font-size: var(--fontSize);

  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-name: arrow;
  animation-duration: 3.5s;

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
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  }
}
</style>
