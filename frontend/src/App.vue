<template>
  <div id="app">
    <div>
      <b-navbar toggleable="md" type="light" variant="white">
        
        <b-navbar-toggle target="nav-collapse">
          <template>
            <font-awesome-icon :icon="['fas', 'calendar-alt']" class="h3 m-0"/>
          </template>
        </b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/Reservation" class="font-weight-bold">
              <div class="d-md-flex flex-column align-items-center">
                <font-awesome-icon :icon="['fas', 'calendar-check']" class="h4 d-none d-md-block"/>
                <p>RÉSERVER</p>
              </div>
            </b-nav-item>
            <b-nav-item class="ml-md-3" v-b-popover.hover.top="'Ouvert du Mardi au Dimanche de 10h à 20h '" title="Horaires d'ouverture">
              <div class="d-md-flex flex-column align-items-center">
                <font-awesome-icon :icon="['fas', 'clock']" class="h4 d-none d-md-block"/>
                <p>Horaires</p>
              </div>
            </b-nav-item>
            <b-nav-item class="ml-md-3 mr-md-2" v-b-popover.hover.top="'13 rue exemple, quartier chartrons Bordeaux - 33000'" title="Adresse complète">
              <div class="d-md-flex flex-column align-items-center">
                <font-awesome-icon :icon="['fas', 'map-pin']" class="h4 d-none d-md-block"/>
                <p>Adresse</p>
              </div>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>

        <b-navbar-brand id="brand" to="/" class="p-0 mx-auto my-0 col-4 col-md-3 col-lg-2">
          <img id="logo" src="./assets/JAGANEE-logo-removebg-dim.png" class="img-fluid" alt="logo jaganee">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse2">
          <template>
            <font-awesome-icon :icon="['fas', 'user']" class="h3 m-0"/>
          </template>
        </b-navbar-toggle>
        <b-collapse id="nav-collapse2" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/Contact" class="ml-auto mr-md-3">
              <div class="d-md-flex flex-column align-items-center">
                <font-awesome-icon :icon="['fas', 'mobile-alt']" class="h4 d-none d-md-block"/>
                <p>Contact</p>
              </div>
            </b-nav-item>
            <b-nav-item to="/Connexion" class="ml-auto mr-md-3">
              <div class="d-md-flex flex-column align-items-center">
                <font-awesome-icon :icon="['fas', 'id-badge']" class="h4 d-none d-md-block"/>
                <p>Connexion</p>
              </div>
            </b-nav-item>
            <b-nav-item to="/Inscription" class="ml-auto">
              <div class="d-md-flex flex-column align-items-center">
                <font-awesome-icon :icon="['fas', 'user-plus']" class="h4 d-none d-md-block"/>
                <p>Inscription</p>
              </div>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>

      </b-navbar>
      <b-navbar toggleable="md" type="dark" variant="primary" class="py-0">
        <b-navbar-toggle target="nav-collapse3" class="mx-auto text-secondary">
          <template #default="{ expanded }">
            <div v-if="expanded"> MENU <font-awesome-icon :icon="['fas', 'chevron-circle-up']" /></div>
            <div v-else> MENU <font-awesome-icon :icon="['fas', 'chevron-circle-down']" /></div>
          </template>
        </b-navbar-toggle>
        <b-collapse id="nav-collapse3" is-nav class="mx-auto"> 
          <b-navbar-nav class="w-75 mx-auto d-flex justify-content-around font-weight-bold">
            <b-nav-item to="/Spa">SPA</b-nav-item>
            <b-nav-item to="/Soins">SOINS</b-nav-item>
            <b-nav-item to="/Mamans">FUTURE MAMAN</b-nav-item>
            <b-nav-item to="/Litotherapie">LITHOTHÉRAPIE</b-nav-item>
            <b-nav-item to="/About">NOTRE CONCEPT</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <div class="bg-secondary bandeau"></div>
    </div>
    <router-view/>
    <footer class="text-center mt-5">
      <div class="bandeau2 bg-primary">
        <div class="bandeau bg-secondary"></div>
      </div>
      <div class="d-flex justify-content-between footer1 mt-3">
        <div class="col-12 col-sm-4">
          <div class="font-weight-bold text-primary">JAGANEE</div>
          Centre de bien être<br>13 rue exemple, quartier chartrons<br>Bordeaux - 33000<br>Tél: 0556000000
          </div>
        <div class="col-md-4 d-none d-sm-block">
          <div class="font-weight-bold text-primary">SUIVEZ-NOUS</div>
          <div>
            <div class="mt-3">
              <a href=""><font-awesome-icon :icon="['fab', 'facebook-f']" class="h3 mr-3"/></a>
              <a href=""><font-awesome-icon :icon="['fab', 'instagram']" class="h3 ml-3"/></a>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-none d-sm-block">
          <div class="font-weight-bold text-primary">PLAN</div>
          <div class="mx-auto w-75 carte">
            <img src="./assets/france.png" alt="carte de France" class="france">
            <img src="./assets/bordeaux.png" alt="carte de France" class="bordeaux">
          </div>
        </div>
      </div>
      <div class="d-sm-none mt-3">
        <div class="font-weight-bold text-primary">SUIVEZ-NOUS</div>
        <div>
          <div class="mt-3">
            <a href=""><font-awesome-icon :icon="['fab', 'facebook-f']" class="h3 mr-3"/></a>
            <a href=""><font-awesome-icon :icon="['fab', 'instagram']" class="h3 ml-3"/></a>
          </div>
        </div>
      </div>
      <div class="d-flex flex-wrap justify-content-around my-5 bg-primary py-1">
        <router-link to="/Contact" class="text-secondary text-decoration-none h6">Contact</router-link>
        <router-link to="/Galerie" class="text-secondary text-decoration-none h6">Galerie</router-link>
        <router-link to="/Reservation" class="text-secondary text-decoration-none h6">Réservation</router-link>
        <router-link to="/About" class="text-secondary text-decoration-none h6">Valeurs et expertise</router-link>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">

#logo {
  
  padding: 0;
}
#brand {
  display: flex;
  justify-content: center;
}

.bandeau {
  height: 10px;
}
.bandeau2 {
  height: 30px;
}
.france {
  position: relative;
  width: 100%;
  &:hover {
    transform: scale(2);
    opacity: 0;
    transform-origin: 20% bottom;
    transition: 1.5s ease-in-out;
    + .bordeaux {
      opacity: 1;
      transition: 2s ease-in-out;
    }
  }
}
.bordeaux {
  position: absolute;
  top: 0;
  right: 10%;
  opacity: 0;
  width: 75%;
  z-index: -1;
  mix-blend-mode: multiply;
}
.carte {
  overflow: hidden;
}
</style>
