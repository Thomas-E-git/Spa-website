<template>
    <div>
        <div class="entete mx-auto">
            <div class="pic d-none d-md-block">
            </div>
            <div class="text-center text-primary mx-auto card1">
                <h1 class="mx-auto">LES SOINS</h1>
                <p class="h6 px-3">Bonjour ceci est le texte de présentation des soins Bonjour ceci est le texte de présentation des soins Bonjour ceci est le texte de présentation des soins Bonjour ceci est le texte de présentation des soins Bonjour ceci est le texte de présentation des soins Bonjour ceci est le texte de présentation des soins Bonjour ceci est le texte de présentation des soins Bonjour ceci est le texte de présentation des soins</p> 
            </div>
        </div>
        <div class="d-flex justify-content-between flex-wrap w-75 mx-auto mt-3 mt-md-1">
            <div class="position-relative card mt-3 mt-md-4 mt-lg-5">
                <b-card-img :src="require('../assets/cards/modelage.jpg')" class="w-100 card-img"></b-card-img>
                <p class="font-weight-bold h5 text-center card-title">MODELAGES</p>
                <div class="card-info text-center w-100 mt-4 mt-lg-0 mt-xl-0">
                    <p class="text-primary font-italic d-none d-lg-block mb-xl-5">Plongez dans une expèrience unique au coeur de notre Spa<br>Diverses prestations au choix pour éveiller vos sens</p>
                    <router-link to="/Modelage" class="card-button h6">Voir les soins</router-link>
                </div>
            </div>
            <div class="position-relative card mt-3 mt-md-4 mt-lg-5">
                <b-card-img :src="require('../assets/cards/visage.jpg')" class="w-100"></b-card-img>
                <p class="font-weight-bold h5 text-center card-title">SOINS VISAGE</p>
                <div class="card-info text-center w-100 mt-4 mt-lg-0 mt-xl-0">
                    <p class="text-primary font-italic d-none d-lg-block mb-xl-5">Tous les soins sont prodigués avec des produits naturels<br>Accordez vous un instant de détente entre nos mains</p>
                    <router-link to="/Visage" class="card-button h6">Voir les soins</router-link>
                </div>
            </div> 
            <div class="position-relative card mt-3 mt-md-4 mt-lg-5">
                <b-card-img :src="require('../assets/cards/corps.jpg')" class="w-100"></b-card-img>
                <p class="font-weight-bold h5 text-center card-title">SOINS CORPS</p>
                <div class="card-info text-center w-100 mt-4 mt-lg-0 mt-xl-0">
                    <p class="text-primary font-italic d-none d-lg-block mb-xl-5">Découvrez les bienfaits des minéraux sur le corps et l'esprit<br>Nos practiciennes sont qualifiées et expérimentées</p>
                    <router-link to="/Corps" class="card-button h6">Voir les soins</router-link>
                </div>
            </div> 
            <div class="position-relative card mt-3 mt-md-4 mt-lg-5">
                <b-card-img :src="require('../assets/cards/mains.jpg')" class="w-100"></b-card-img>
                <p class="font-weight-bold h5 text-center card-title">MAINS & PIEDS</p>
                <div class="card-info text-center w-100 mt-4 mt-lg-0 mt-xl-0">
                    <p class="text-primary font-italic d-none d-lg-block mb-xl-5">Des soins et prestations adaptés aux futures ou jeunes mamans<br>Vous serez encadrées par des professionnels qualifiées</p>
                    <router-link to="/Mains" class="card-button h6">Voir les soins</router-link>
                </div>
            </div> 
        </div>
    </div>
    
    
</template>

<script>
export default {
    name: "Soins",
}
</script>

<style lang="scss" scoped>
    .entete {
        position: relative;
        width: 100%;
        height: 500px;
    }
    .pic {
        width: 100%;
        height: 350px;
        background-image: url("../assets/soins/entete.jpg");
        background-size: cover;
    }
    .card1 {
        background-color: white;
        border: solid #4d3219;
        width: 500px;
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translateX(-50%);
    }
    @media screen and (max-width: 767px) {
        .entete {
            width: 100%;
            height: auto;
            background: none;
        }
        .card1 {
            position: relative;
            width: 100%;
            background: none;
            border: none;
            height: auto;
        }
    }
    .card-title {
    
    background-color: rgba(114, 139, 114);
    
  }
</style>