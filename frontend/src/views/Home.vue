<template>
  <div class="home">
    <div class="d-flex justify-content-between mt-3">
      <div class="ml-3 ml-md-5 social d-flex flex-wrap justify-content-start">
        <a href=""><div  class="mr-3 mr-sm-4 mr-md-5 border border-secondary text-primary icone pt-1 text-center">
          <font-awesome-icon :icon="['fab', 'facebook-f']" class="h4"/>
        </div></a>
        <a href=""><div class="border border-secondary text-primary icone pt-1 text-center">
          <font-awesome-icon :icon="['fab', 'instagram']" class="h4"/>
        </div></a>
      </div>
      <div class="title">
        <h1 class="text-center text-primary h3">Centre de bien être à Bordeaux</h1>
        <div class="bg-secondary trait"></div>
        <div class="bg-primary trait2"></div>
        <h2 class="text-center font-italic text-primary mb-3 h5 mt-1">Slogan de Jaganee à trouver par la suite</h2>
      </div>
      <div class="mr-3 mr-md-5 d-flex flex-row justify-content-end local">
        <a href=""><div class="h6 ml-3 border border-secondary text-primary icone pt-1 text-center">
          <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="h4"/>
        </div></a>
        <p class="d-none d-md-inline-block ml-2 ml-md-3 h6 mt-md-1">Itinéraires</p>
      </div>
    </div>
    
    
    <b-carousel
      id="carousel1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      class="mx-auto"
    >
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            src="../assets/carousel/carousel1.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            src="../assets/carousel/carousel2.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            src="../assets/carousel/carousel3.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            src="../assets/carousel/carousel4.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            src="../assets/carousel/carousel5.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>

    <section class="d-none d-md-block">
      <div class="text-primary h6 h-100 d-flex justify-content-between align-items-center font-italic">
        <p class="ml-1 ml-lg-5 mt-3 mt-lg-5 text-justify text-center info">Jaganee est la combinaison des mots Hindi Jaganaa et Panee qui signifient respectivement éveil et eau</p>
        <p class="mr-1 mr-lg-5 mt-3 mt-lg-5 text-justify text-center info">Ressentez la douceur des soins 100% naturels et les bienfaits du Spa dans une ambiance chaleureuse</p>
      </div>
      <div class="wave wave1"></div>
      <div class="wave wave2"></div>
      <div class="wave wave3"></div>
      <div class="wave wave4"></div>
    </section>

    <div class="trait bg-primary mt-3"></div>

    <div class="d-flex justify-content-between flex-wrap w-75 mx-auto mt-3 mt-md-1">
      <div class="position-relative card mt-3 mt-md-4 mt-lg-5">
        <b-card-img :src="require('../assets/cards/card-spa.jpg')" class="w-100 card-img"></b-card-img>
        <p class="font-weight-bold h5 text-center card-title">LE SPA</p>
        <div class="card-info text-center w-100 mt-4 mt-lg-0 mt-xl-0">
          <p class="text-primary font-italic d-none d-lg-block mb-xl-5">Plongez dans une expèrience unique au coeur de notre Spa<br>Diverses prestations au choix pour éveiller vos sens</p>
          <router-link to="/Spa" class="card-button h6">Voir la carte</router-link>
        </div>
      </div>
      <div class="position-relative card mt-3 mt-md-4 mt-lg-5">
        <b-card-img :src="require('../assets/cards/card-soins.jpg')" class="w-100"></b-card-img>
        <p class="font-weight-bold h5 text-center card-title">LES SOINS</p>
        <div class="card-info text-center w-100 mt-4 mt-lg-0 mt-xl-0">
          <p class="text-primary font-italic d-none d-lg-block mb-xl-5">Tous les soins sont prodigués avec des produits naturels<br>Accordez vous un instant de détente entre nos mains</p>
          <router-link to="/Soins" class="card-button h6">Voir la carte</router-link>
        </div>
      </div> 
      <div class="position-relative card mt-3 mt-md-4 mt-lg-5">
        <b-card-img :src="require('../assets/cards/card-lito.jpg')" class="w-100"></b-card-img>
        <p class="font-weight-bold h5 text-center card-title">LITHOTHÉRAPIE</p>
        <div class="card-info text-center w-100 mt-4 mt-lg-0 mt-xl-0">
          <p class="text-primary font-italic d-none d-lg-block mb-xl-5">Découvrez les bienfaits des minéraux sur le corps et l'esprit<br>Nos practiciennes sont qualifiées et expérimentées</p>
          <router-link to="/Litotherapie" class="card-button h6">Voir la carte</router-link>
        </div>
      </div> 
      <div class="position-relative card mt-3 mt-md-4 mt-lg-5">
        <b-card-img :src="require('../assets/cards/card-maman.jpg')" class="w-100"></b-card-img>
        <p class="font-weight-bold h5 text-center card-title">GROSSESSE</p>
        <div class="card-info text-center w-100 mt-4 mt-lg-0 mt-xl-0">
          <p class="text-primary font-italic d-none d-lg-block mb-xl-5">Des soins et prestations adaptés aux futures ou jeunes mamans<br>Vous serez encadrées par des professionnelles qualifiées</p>
          <router-link to="Mamans" class="card-button h6">Voir la carte</router-link>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
  export default {
  name: 'Home',
  components: {
    
  },
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>
    
<style lang="scss">
  
  #carousel1 {
    width: 90%;
  }

  @media screen and (max-width: 480px) {
    #carousel1 {
      width: 100%;
    }
  }

  .trait {
    height: 3px;
    width: 20%;
    margin: auto;
    margin-top: 0;
    position: absolute;
    left: 40%;
  }
  .trait2 {
    height: 3px;
    width: 10%;
    margin: auto;
    margin-top: 0;
    position: relative;
  }

  .social {
    width: 15%;
  }
  .local {
    width: 15%;
  }
  .icone {
    min-width: 32px;
    min-height: 32px;
    max-width: 32px;
    max-height: 32px;
    border-radius: 25%;
    
  }

  .icone:hover {
    background-color: #9dbd9a;
  }

  section {
    position: relative;
    margin: auto;
    width: 90%;
    height: 13rem;
    background-image: url("../assets/JAGANEE-logo-removebg-dim.png");
    background-size: 20rem;
    background-repeat: no-repeat;
    background-position: center;
    overflow: hidden;
  }
  section .wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: url("../assets/wave.png");
    background-size: 1000px 100px;
  }
  section .wave.wave1
  {
    animation: animate 30s linear infinite;
    z-index: 1000;
    opacity: 1;
    animation-delay: 0s;
    bottom: 0;
  }
  section .wave.wave2
  {
    animation: animate2 15s linear infinite;
    z-index: 999;
    opacity: 0.5;
    animation-delay: -5s;
    bottom: 10px;
  }
  section .wave.wave3
  {
    animation: animate 30s linear infinite;
    z-index: 998;
    opacity: 0.2;
    animation-delay: -2s;
    bottom: 15px;
  }
  section .wave.wave4
  {
    animation: animate2 5s linear infinite;
    z-index: 997;
    opacity: 0.7;
    animation-delay: -5s;
    bottom: 20px;
  }
  @keyframes animate {
    0% {
      background-position-x: 0;
    }
    100%{
      background-position-x: 1000px;
    }
  }
  @keyframes animate2 {
    0% {
      background-position-x: 0;
    }
    100%{
      background-position-x: -1000px;
    }
  }

  .info {
    width: 20%;
  }

  .card {
    width: 48%;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color:#9dbd9a;
      opacity: 0;
      z-index: -1;
      transition: opacity 250ms;
    }
    &:hover {
      &::after {
        opacity: 0.8;
        z-index: 2;
        transition: opacity 400ms;
      }
      & > .card-title {
        color: #4d3219;
        border: none;
        background:none;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
        letter-spacing: 0.4rem;
      }
      & > .card-info {
        opacity: 1;
        z-index: 4;
        transition: opacity 400ms;
      }
    }
    &-title {
      z-index: 3;
    }
    &-info {
      position: absolute;
      top: 35%;
      opacity: 0;
      font-weight:600;
    }
    &-button {
      border: solid #4d3219;
      border-radius: 5%;
      text-decoration:none;
      padding: 0.5rem;
      color: #9dbd9a;
      background-color: #4d3219;
      cursor: pointer;
      &:hover {
        color: #4d3219;
        background-color: #9dbd9a;
      }
    }
  }

  @media screen and (max-width: 480px) {
    .card {
      width: 100%;
    }
    .card-title {
      font-size: 0.7rem;
      letter-spacing: 0.3rem;
      font-weight: bolder;
    }
  }
  @media screen and (min-width: 480px) and (max-width: 766px)  {
    .card-title {
      font-size: 0.6rem;
      font-weight:900;
    }
  }
  .card-title {
    position: absolute;
    left: 6%;
    top: 7%;
    letter-spacing: 0.3rem;
    border: solid #4d3219;
    border-radius: 5%;
    padding: 0.5rem;
    background-color: rgba(114, 139, 114, 0.5);
    color: #4d3219;
  }
</style>

