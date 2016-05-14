/**
 * Created by Sandeep on 01/06/14.
 */
'use strict';
angular.module('YeddnaApp',['ui.router','YeddnaApp.controllers','YeddnaApp.services','youtube-embed','ngMap','geolocation','angularReverseGeocode','ngResource','AngularGM','LocalStorageModule','pascalprecht.translate']);

angular.module('YeddnaApp').config(function($stateProvider,$httpProvider){
    $stateProvider.state('home',{
        url:'/',
        templateUrl:'partials/pages/home.html',
        controller:'HomeController'
    }).state('login',{
       url:'/login',
       templateUrl:'partials/pages/login.html',
       controller:'LoginController'
    }).state('register',{
       url:'/register',
       templateUrl:'partials/pages/register.html',
       controller:'RegisterController'
    }).state('profile',{
       url:'/profile',
       templateUrl:'partials/pages/profile.html',
       controller:'ProfileController'
    }).state('logout',{
       url:'/logout',
       controller:'LogoutController'
    }).state('projects',{
       url:'/projects',
       templateUrl:'partials/projects/projects.html',
       controller:'ProjectListController'
    }).state('viewProject',{
       url:'/projects/:id/view',
       templateUrl:'partials/projects/project-view.html',
       controller:'ProjectViewController'
    }).state('newProject',{
        url:'/projects/new',
        templateUrl:'partials/projects/project-add.html',
        controller:'ProjectCreateController'
    }).state('searchbycat',{
        url:'/projects/:cat/show',
        templateUrl:'partials/projects/projects.html',
        controller:'ProjectSearchController'
    }).state('events',{
       url:'/events',
       templateUrl:'partials/events/event.html',
       controller:'EventsListController'
    }).state('viewEvent',{
       url:'/events/:id/view',
       templateUrl:'partials/events/event-view.html',
       controller:'EventsViewController'
    }).state('newEvent',{
        url:'/events/new',
        templateUrl:'partials/events/event-add.html',
        controller:'EventsCreateController'
    }).state('successstorys',{
        url:'/successstorys',
        templateUrl:'partials/successstorys/successstorys.html',
        controller:'SuccessstorysListController'
    }).state('viewSuccessstory',{
       url:'/successstorys/:id/view',
       templateUrl:'partials/successstorys/successstorys-view.html',
       controller:'SuccessstorysViewController'
    }).state('newSuccessstory',{
        url:'/successstorys/new',
        templateUrl:'partials/successstorys/successstorys-add.html',
        controller:'SuccessstorysCreateController'
    }).state('editSuccessstory',{
        url:'/successstorys/:id/edit',
        templateUrl:'partials/successstorys/successstorys-edit.html',
        controller:'SuccessstorysEditController'
    }).state('faqs',{
        url:'/faqs',
        templateUrl:'partials/faqs/faqs.html',
        controller:'FaqsCtrl' 
    }).state('articles',{
        url:'/articles',
        templateUrl:'partials/article/article.html',
        controller:'FeedCtrl' 
    }).state('about',{
        url:'/about',
        templateUrl:'partials/pages/about.html',
        controller:'AboutController'     
    });
}).run(function($state){
   $state.go('home');
});
angular.module('YeddnaApp').run(function($rootScope, localStorageService) {
    $rootScope.token = localStorageService.get('token');
    $rootScope.endpoint = "http://localhost:3000/";
});

angular.module('YeddnaApp').config(function($translateProvider){
$translateProvider.fallbackLanguage('en');
$translateProvider.registerAvailableLanguageKeys(['en','fr'],{
	
	'en_*':'en',
	'fr_*':'fr'
})
$translateProvider.translations('en',{
    hea:"Explore",
    heae:"All projects",
    st:"Start",
    mai:"Now you Help",
    ev:"Event",
    joi:"join our events",
    qu:"Any question?",
    suc:"Success Stories",
    ss:"Tunisian SS",
    ab:"About Us",
    wa:"what is Yeddna.com?",
    lo:"login",
    jo:"Join",
    sen:"Send to us",
    you:"You are here :",
    don:"Donate",
	Question:"Have a Community Project in Need of Funding?",
    foo:"Yeddna.com is the first 100% Tunisian Humanitarian Crowdfunding Platform in our country.",
    fo:"All rights reserved.",
    su:" Subscribe for our newsletter",
    con:"Contact Info",
    yed:"About Yeddna.com",
    title:"THANK YOU to all who participated in making the smile these students , whether through donations or effort",
    desc:"Like all good citizens concerned about the future of our children who are our future , an adorable group of colleagues in the same company took the initiative to renovate , in collaboration with TUNAIDE , primary school El Mechtel 2 in el Agba which also includes students of poor families.motivated by the good cause, the youth were mobilized for the investigation , collection, shopping, work ... and despite the reduced number and short , they have successfully met the challenge to surprise children in September.Books and supplies were also provided for poor students.Action will continue in its second part to develop the reading room and outside space and counted on the help of generous souls to ensure better conditions for our students.",
    slog:"Our Slogan is 'You don't need a reason to help people' .",
    home:"The first Tunisian Humanitarian crowdfunding platform",
    wel:"Welcome to Yeddna.com",
    amz:"Amazing Ideas",
    tou:"Every thing start by idea",
    com:"Community",
    make:"Make the problem public",
    pouv:"Public Power",
    avec:" With many contribution you can start",
    near:"NearBy Projects",
    delo:"View Details",
    see:"See More",
    upc:"Upcoming Events",
    fund:"Fundraising Seminar",
    rais:"Fundraising Seminar about the honesty of our platform (in Habib bourguiba,Tunis).",
    char:"Charity Marathon",
    part:"You can get guaranteed entry in the 2016 TCS Ariana City Marathon by running with Official Charity Partners",
    safia:"Safia Event",
    role:"Safia Event 2016. our partner safia will speak about the significance role of our platform",
    need:"Do you have a Community Project in Need of Funding?",
    sss:"Send to us",
    qj:"All Success Storys",
    test:"Development of the Pediatric Service playground in the hospital Charles.Nicolle",
    desc:"With a grant received from the Joint Group C.M.D. et R.O.I, we could develop the outside area of the hospital's Charles Nicolle pediatric department to a true playground for children. Thus, we have repainted and repaired the slide already present in the area . We installed on the floor an artificial grass carpet just outside the slide to cushion the descent. We also installed a turnstile for children , a rocking swing, coordination wheel / balance scale and a table tennis for the teens. The new playground was a sensation with children. Members of the medical team of the pediatric department also enjoyed the new space. We thanks the joint group for their support and participation in this initiative.",
    source:"TUNAIDE Association",
    devv:" Web Devoleper",
    teamm:"Our Team 3W-4twin2",
    
	BUTTON_LANG_EN:"En",
	BUTTON_LANG_FR:"Fr"
});
$translateProvider.translations('fr',{
    hea:"Explorer",
    heae:"Tous les projets",
    st:"Démarrer",
    mai:"Maintenant vos Aide",
    ev:"Événements",
    joi:"rejoindre nos événements",
    qu:"Des questions?",
    suc:"Histoires de réussite",
    ss:"HR Tunisienne",
    ab:"À propos de nous",
    wa:"C'est quoi Yeddna.com?",
    lo:"S'identifier",
    jo:"Joindre",
    sen:"Envoyez-nous",
    you:"Tu es là :",
    don:"Faire un don",
	Question:"Avoir un projet communautaire nécessitant une aide financière ?",
    foo:"Yeddna.com est la première plate-forme de crowdfunding humanitaire 100% Tunisien dans notre pays.",
    fo:"Tous les droits sont réservés.",
    su:"Abonnez-vous à notre newsletter",
    con:"Informations de contact",
    yed:"A propos de Yeddna.com",
    title:"MERCI à tous ceux qui ont participé à rendre le sourire à ces élèves, que ce soit par les dons ou l'effort",
    desc:"Comme tous bons citoyens, soucieux de l'avenir de nos enfants qui sont notre futur, un adorable collectif de collègues dans une même entreprise ont pris l'Initiative de rénover, en collaboration avec TUNAIDE, l'école primaire El Mechtel 2 à el Agba, qui compte aussi des élèves de familles démunies.motivés par la bonne cause, les jeunes se sont mobilisés pour l'enquête, la collecte, les achats, les travaux...et malgrè le nombre réduit et la courte durée, ils ont réussi à relever le défit pour faire la surprise aux enfants à la rentrée.Des livres et fournitures ont été aussi assurés pour les élèves démunis. l'action continuera en sa 2ème partie pour aménager la salle de lecture et l'espace extérieur et on compte sur l'aide des âmes généreuses pour assurer de meilleures conditions pour nos élèves.",
    slog:"Notre slogan est 'On n'a pas besoin d'une raison pour aider les gens '.",
    home:"La première plate-forme de Crowdfunding Humanitaire Tunisienne",
    wel:"Bienvenue à Yeddna.com",
    amz:"Des Idées Surprenantes",
    tou:"Tout commence par une idée",
    com:"Communauté",
    make:"Publier le problème",
    pouv:"Pouvoir public",
    avec:"Avec beaucoup de contribution que vous pouvez commencer",
    near:"Projets à proximité",
    delo:"Voir les détails",
    see:"Voir plus",
    upc:"Prochaine évènements",
    fund:"Séminaire de collecte de fonds",
    rais:"Séminaire pour collecte de fonds sur l'honnêteté de notre plate-forme ( Habib bourguiba , Tunis).",
    char:"Marathon de charité",
    part:"Vous pouvez obtenir l'entrée garanti dans 2016 TCS  Marathon Ariana,en exécutant avec des partenaires Officiel de Charité ",
    safia:"Événement organisé par Safia",
    role:"Événement Safia 2016. Notre partenaire safia parlera du rôle significative de notre plate-forme...",
    need:"Avez-vous un projet communautaire nécessitant une aide financière?",
    sss:"Envoyez-nous",
    qj:"Tous les histoires de réussite ",
    test:"Développement de l' aire de jeux du service de pédiatrie à l'hôpital Charles.Nicolle",
    desc:"Grâce à une subvention reçue du Groupe mixte C.M.D. et R.O.I, nous avons pu développer la région en dehors du service de pédiatrie de l'hôpital Charles Nicolle  à un véritable terrain de jeux pour les enfants. Ainsi, nous avons repeint et réparé la diapositive déjà présente dans la région. Nous avons installé sur le sol un tapis de gazon artificiel juste à l'extérieur de la glissière pour amortir la descente. Nous avons également installé un tourniquet pour les enfants, une balançoire à bascule, la coordination roue / échelle de l'équilibre et un tennis de table pour les adolescents. Le nouveau terrain de jeu était une sensation avec les enfants. Les membres de l'équipe médicale du service de pédiatrie a également apprécié le nouvel espace. Nous remercions le groupe conjoint pour leur soutien et leur participation à cette initiative.",
    source:"Association TUNAIDE",
    devv:"Développeur Web",
    teamm:"Les mombres de l'équipe 3W-4twin2",
    
	BUTTON_LANG_EN:"An",
	BUTTON_LANG_FR:"Fr"
});	
$translateProvider.useSanitizeValueStrategy('escape');
$translateProvider.preferredLanguage('en');
});
angular.module('YeddnaApp').controller('controllers',['$scope','$translate',function($scope,$translate){
	$scope.changeLanguage = function(key){
		$translate.use(key);
	};
}]);