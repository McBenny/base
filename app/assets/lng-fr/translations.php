<?php
/*
        CCCCCCCCCCCCC                                                                                               
     CCC::::::::::::C                                                                                               
   CC:::::::::::::::C                                                                                               
  C:::::CCCCCCCC::::C                                                                                               
 C:::::C       CCCCCC  ooooooooooo     mmmmmmm    mmmmmmm     mmmmmmm    mmmmmmm     ooooooooooo  nnnn  nnnnnnnn    
C:::::C              oo:::::::::::oo mm:::::::m  m:::::::mm mm:::::::m  m:::::::mm oo:::::::::::oon:::nn::::::::nn  
C:::::C             o:::::::::::::::m::::::::::mm::::::::::m::::::::::mm::::::::::o:::::::::::::::n::::::::::::::nn 
C:::::C             o:::::ooooo:::::m::::::::::::::::::::::m::::::::::::::::::::::o:::::ooooo:::::nn:::::::::::::::n
C:::::C             o::::o     o::::m:::::mmm::::::mmm:::::m:::::mmm::::::mmm:::::o::::o     o::::o n:::::nnnn:::::n
C:::::C             o::::o     o::::m::::m   m::::m   m::::m::::m   m::::m   m::::o::::o     o::::o n::::n    n::::n
C:::::C             o::::o     o::::m::::m   m::::m   m::::m::::m   m::::m   m::::o::::o     o::::o n::::n    n::::n
 C:::::C       CCCCCo::::o     o::::m::::m   m::::m   m::::m::::m   m::::m   m::::o::::o     o::::o n::::n    n::::n
  C:::::CCCCCCCC::::o:::::ooooo:::::m::::m   m::::m   m::::m::::m   m::::m   m::::o:::::ooooo:::::o n::::n    n::::n
   CC:::::::::::::::o:::::::::::::::m::::m   m::::m   m::::m::::m   m::::m   m::::o:::::::::::::::o n::::n    n::::n
     CCC::::::::::::Coo:::::::::::oom::::m   m::::m   m::::m::::m   m::::m   m::::moo:::::::::::oo  n::::n    n::::n
        CCCCCCCCCCCCC  ooooooooooo  mmmmmm   mmmmmm   mmmmmmmmmmm   mmmmmm   mmmmmm  ooooooooooo    nnnnnn    nnnnnn
 */
/**
 *  	- Général
 *		- Communs
 *      - head
 *			- Entête
 *  		- Navigation
 *     		- Recherche
 *     		- Footer
 *     	- Pages
 *     		- Index
 *     		- Category
 *     		- Liste Actus
 *     		- Liste résultats
 *     		- Article
 */
/*
                                                                 
                                                             ,,  
    .g8"""bgd                                              `7MM  
  .dP'     `M                                                MM  
  dM'       `   .gP"Ya `7MMpMMMb.  .gP"Ya `7Mb,od8 ,6"Yb.    MM  
  MM           ,M'   Yb  MM    MM ,M'   Yb  MM' "'8)   MM    MM  
  MM.    `7MMF'8M""""""  MM    MM 8M""""""  MM     ,pm9MM    MM  
  `Mb.     MM  YM.    ,  MM    MM YM.    ,  MM    8M   MM    MM  
    `"bmmmdPY   `Mbmmd'.JMML  JMML.`Mbmmd'.JMML.  `Moo9^Yo..JMML.
                                                                 
                                                                 
*/
$project__name = 'FullSIX Air';





/*
                                           
                                       ,,  
  `7MMF'  `7MMF'                     `7MM  
    MM      MM                         MM  
    MM      MM  .gP"Ya   ,6"Yb.   ,M""bMM  
    MMmmmmmmMM ,M'   Yb 8)   MM ,AP    MM  
    MM      MM 8M""""""  ,pm9MM 8MI    MM  
    MM      MM YM.    , 8M   MM `Mb    MM  
  .JMML.  .JMML.`Mbmmd' `Moo9^Yo.`Wbmd"MML.
                                           
                                           
*/
$head__meta__keywords = '';
$head__meta__description = '';

$head__title = 'Default title - '.$project__name;





/*
                                                     
                                                     
  `7MM"""YMM              mm            mm           
    MM    `7              MM            MM           
    MM   d    `7MMpMMMb.mmMMmm .gP"Ya mmMMmm .gP"Ya  
    MMmmMM      MM    MM  MM  ,M'   Yb  MM  ,M'   Yb 
    MM   Y  ,   MM    MM  MM  8M""""""  MM  8M"""""" 
    MM     ,M   MM    MM  MM  YM.    ,  MM  YM.    , 
  .JMMmmmmMMM .JMML  JMML.`Mbmo`Mbmmd'  `Mbmo`Mbmmd' 
                                                     
                                                     
*/
$header__menu = 'Menu';
$retourIndex = 'Retour à la page d\'accueil';



/*
                                                                                     
                                  ,,                          ,,                     
  `7MN.   `7MF'                   db                   mm     db                     
    MMN.    M                                          MM                            
    M YMb   M  ,6"Yb.`7M'   `MF'`7MM  .P"Ybmmm ,6"Yb.mmMMmm `7MM  ,pW"Wq.`7MMpMMMb.  
    M  `MN. M 8)   MM  VA   ,V    MM :MI  I8  8)   MM  MM     MM 6W'   `Wb MM    MM  
    M   `MM.M  ,pm9MM   VA ,V     MM  WmmmP"   ,pm9MM  MM     MM 8M     M8 MM    MM  
    M     YMM 8M   MM    VVV      MM 8M       8M   MM  MM     MM YA.   ,A9 MM    MM  
  .JML.    YM `Moo9^Yo.   W     .JMML.YMMMMMb `Moo9^Yo.`Mbmo.JMML.`Ybmd9'.JMML  JMML.
                                     6'     dP                                       
                                     Ybmmmd'                                         
*/
$navigation__texts = array(
	'mission' => 'Notre mission',
	'group' => 'Le groupe',
	'services' => 'Nos services et expertises',
	'contact' => 'Contacts'
);
$contact__title = 'Contactez-nous';
$contact__btn = 'Contactez-nous';


/*
	88  88 888888    db    8888b.  88""Yb    db    88b 88 8888b.  
	88  88 88__     dPYb    8I  Yb 88__dP   dPYb   88Yb88  8I  Yb 
	888888 88""    dP__Yb   8I  dY 88""Yb  dP__Yb  88 Y88  8I  dY 
	88  88 888888 dP""""Yb 8888Y"  88oodP dP""""Yb 88  Y8 8888Y"  
*/
$headband__title = 'Change<br />is in<br />the <em>air</em>';


/*
	8b    d8 88 .dP"Y8 .dP"Y8 88  dP"Yb  88b 88 
	88b  d88 88 `Ybo." `Ybo." 88 dP   Yb 88Yb88 
	88YbdP88 88 o.`Y8b o.`Y8b 88 Yb   dP 88 Y88 
	88 YY 88 88 8bodP' 8bodP' 88  YbodP  88  Y8 
*/
$mission__title = 'Notre mission';
$mission__text = 'En quelques mois, le mobile est devenu absolument central dans la vie des gens. Il est désormais au cœur des usages des consommateurs, et est devenu le point de contact principal d\'une marque avec son client.';
$mission__text2 = '<strong>Fullsix AIR</strong> accompagne les marques dans l\'élaboration de leur stratégie Mobile First et la mise en place des dispositifs marketing associés.';


/*
	 dP""b8 88""Yb  dP"Yb  88   88 88""Yb 
	dP   `" 88__dP dP   Yb 88   88 88__dP 
	Yb  "88 88"Yb  Yb   dP Y8   8P 88"""  
	 YboodP 88  Yb  YbodP  `YbodP' 88     
*/
$group__title = 'Le groupe';
$group__title2 = 'Fullsix AIR est une agence de Fullsix Group';
$group__text = 'FullSIX est le premier groupe de communication <em>indépendant</em> en Europe';
$group__text2 = 'Fondé en 1998, il compte aujourd\'hui 20 agences réparties dans 11 pays, sur 4 continents pour un plus d\'un millier de collaborateurs.<br />Nous aidons nos clients à accroitre radicalement leurs performances en mettant le Digital et la Data au cœur de leurs stratégies afin de synchroniser systématiquement leur communication avec leurs consommateurs.';



/*
	   db     dP""b8 888888 88b 88  dP""b8 88 888888 .dP"Y8 
	  dPYb   dP   `" 88__   88Yb88 dP   `" 88 88__   `Ybo." 
	 dP__Yb  Yb  "88 88""   88 Y88 Yb      88 88""   o.`Y8b 
	dP""""Yb  YboodP 888888 88  Y8  YboodP 88 888888 8bodP' 
*/
$agencies__title = 'Nos agences';
$agencies__text = array(
	array(
		'subject' => 'Relationnel, digital,<br />e-commerce',
		'url' => $path.'/images/fullsix.svg',
		'alt' => 'Fullsix'
	),
	array(
		'subject' => 'Marque, publicité',
		'url' => $path.'/images/fullsixadvertising.svg',
		'alt' => 'Fullsix advertising'
	),
	array(
		'subject' => 'Stratégies,<br />achats médias',
		'url' => $path.'/images/fullsixmedia.svg',
		'alt' => 'Fullsix media'
	),
	array(
		'subject' => 'Analytics,<br />data, insights',
		'url' => $path.'/images/fullsixdata.svg',
		'alt' => 'Fullsix data'
	),
	array(
		'subject' => 'Création de trafic, <br />expérience magasin,<br />RoPo',
		'url' => $path.'/images/fullsixretail.svg',
		'alt' => 'Fullsix retail'
	),
	array(
		'subject' => 'Référencement<br />SEO / SEA',
		'url' => $path.'/images/fullsixsearch.svg',
		'alt' => 'Fullsix search'
	),
	array(
		'subject' => 'Conception, réalisation<br />de services digitaux',
		'url' => $path.'/images/ekino.svg',
		'alt' => 'ekino'
	),
	array(
		'subject' => 'Communication<br />intégrée',
		'url' => $path.'/images/grandunion.svg',
		'alt' => 'grandunion'
	),
	array(
		'subject' => 'Incubation de<br />Start-ups digitales',
		'url' => $path.'/images/fullbooster.svg',
		'alt' => 'Fullbooster'
	),
	array(
		'subject' => 'Stratégies digitales<br />en mobilité',
		'url' => $path.'/images/fullsixair.svg',
		'alt' => 'Fullsix air'
	)
);



/*
	.dP"Y8 888888 88""Yb Yb    dP 88  dP""b8 888888 .dP"Y8 
	`Ybo." 88__   88__dP  Yb  dP  88 dP   `" 88__   `Ybo." 
	o.`Y8b 88""   88"Yb    YbdP   88 Yb      88""   o.`Y8b 
	8bodP' 888888 88  Yb    YP    88  YboodP 888888 8bodP' 
*/
$services__title = 'Les services et expertises de Fullsix AIR';
$services__title2 = 'Nous intégrons l\'ensemble des enjeux du marketing <em>«en mobilité»</em>';
$services__text = array(
	'tl' => 'Evaluation potentiel qualitatif et quantitatif',
	'tr' => 'Diagnostic Flash \'\'Mobile Friendly\'\'',
	'br' => 'Veille concurrentielle',
	'bl' => 'Roadmap priorisée des projets mobilité'
);



/*
	888888 Yb  dP 88""Yb 888888 88""Yb 888888 88 .dP"Y8 888888 .dP"Y8 
	88__    YbdP  88__dP 88__   88__dP   88   88 `Ybo." 88__   `Ybo." 
	88""    dPYb  88"""  88""   88"Yb    88   88 o.`Y8b 88""   o.`Y8b 
	888888 dP  Yb 88     888888 88  Yb   88   88 8bodP' 888888 8bodP' 
*/
$expertises__title = 'Toutes les expertises';
$expertises__text = array(
	'evaluation' => array(
		'title' => 'Cadrage',
		'elts' => array(
			'Diagnostic Flash «Mobile Friendly»',
			'Veille concurrentielle',
			'Evaluation potentiel qualitatif et quantitatif',
			'Roadmap priorisée des projets mobilité'
		)
	),
	'site' => array(
		'title' => 'Site mobile',
		'elts' => array(
			'Application mobile',
			'Dispositif réseaux sociaux en mobilité',
			'Objets connectés et autres interface',
			'Réseaux iBeacon'
		)
	),
	'advert' => array(
		'title' => 'Publicité',
		'elts' => array(
			'Search mobile',
			'Affichage, Presse, «mobile enhanced»',
			'Second screen. TV synchronisée',
			'Formats publicitaires innovants sur mobiles',
			'Campagne de message push en mobilité'
		)
	),
	'clients' => array(
		'title' => 'Relation clients en mobilité',
		'elts' => array(
			'Programme de fidélisation dématérialisé',
			'M-commerce et ROPO (omnicanal)',
			'Paiement sans contact',
			'Data catching mobile'
		)
	),
);



/*
	8b    d8    db    88""Yb 
	88b  d88   dPYb   88__dP 
	88YbdP88  dP__Yb  88"""  
	88 YY 88 dP""""Yb 88     
*/
$map__title = 'Plan d\'accès';
$map__itinerary = 'Itinéraire';


/*
	 dP""b8  dP"Yb  88b 88 888888    db     dP""b8 888888 
	dP   `" dP   Yb 88Yb88   88     dPYb   dP   `"   88   
	Yb      Yb   dP 88 Y88   88    dP__Yb  Yb        88   
	 YboodP  YbodP  88  Y8   88   dP""""Yb  YboodP   88   
*/
$contact__title = 'Nos contacts';


/*
                                                    
                                                    
  `7MM"""YMM                   mm                   
    MM    `7                   MM                   
    MM   d  ,pW"Wq.   ,pW"Wq.mmMMmm .gP"Ya `7Mb,od8 
    MM""MM 6W'   `Wb 6W'   `Wb MM  ,M'   Yb  MM' "' 
    MM   Y 8M     M8 8M     M8 MM  8M""""""  MM     
    MM     YA.   ,A9 YA.   ,A9 MM  YM.    ,  MM     
  .JMML.    `Ybmd9'   `Ybmd9'  `Mbmo`Mbmmd'.JMML.   
                                                    
                                                    
*/
$footer__back_to_top = 'Retour en haut de la page';
$footer__text = array(
	'tel' => 'Tel.',
	'fax' => 'Fax.'
);




/*
PPPPPPPPPPPPPPPPP                                                                       
P::::::::::::::::P                                                                      
P::::::PPPPPP:::::P                                                                     
PP:::::P     P:::::P                                                                    
  P::::P     P:::::aaaaaaaaaaaaa    ggggggggg   ggggg   eeeeeeeeeeee       ssssssssss   
  P::::P     P:::::a::::::::::::a  g:::::::::ggg::::g ee::::::::::::ee   ss::::::::::s  
  P::::PPPPPP:::::Paaaaaaaaa:::::ag:::::::::::::::::ge::::::eeeee:::::ess:::::::::::::s 
  P:::::::::::::PP          a::::g::::::ggggg::::::ge::::::e     e:::::s::::::ssss:::::s
  P::::PPPPPPPPP     aaaaaaa:::::g:::::g     g:::::ge:::::::eeeee::::::es:::::s  ssssss 
  P::::P           aa::::::::::::g:::::g     g:::::ge:::::::::::::::::e   s::::::s      
  P::::P          a::::aaaa::::::g:::::g     g:::::ge::::::eeeeeeeeeee       s::::::s   
  P::::P         a::::a    a:::::g::::::g    g:::::ge:::::::e          ssssss   s:::::s 
PP::::::PP       a::::a    a:::::g:::::::ggggg:::::ge::::::::e         s:::::ssss::::::s
P::::::::P       a:::::aaaa::::::ag::::::::::::::::g e::::::::eeeeeeee s::::::::::::::s 
P::::::::P        a::::::::::aa:::agg::::::::::::::g  ee:::::::::::::e  s:::::::::::ss  
PPPPPPPPPP         aaaaaaaaaa  aaaa  gggggggg::::::g    eeeeeeeeeeeeee   sssssssssss    
                                             g:::::g                                    
                                 gggggg      g:::::g                                    
                                 g:::::gg   gg:::::g                                    
                                  g::::::ggg:::::::g                                    
                                   gg:::::::::::::g                                     
                                     ggg::::::ggg                                       
                                        gggggg
 */
/*
                                                
                          ,,                    
  `7MMF'                `7MM                    
    MM                    MM                    
    MM  `7MMpMMMb.   ,M""bMM  .gP"Ya `7M'   `MF'
    MM    MM    MM ,AP    MM ,M'   Yb  `VA ,V'  
    MM    MM    MM 8MI    MM 8M""""""    XMX    
    MM    MM    MM `Mb    MM YM.    ,  ,V' VA.  
  .JMML..JMML  JMML.`Wbmd"MML.`Mbmmd'.AM.   .MA.
                                                
                                                
*/
$slug = 'Lorem ipsum Nulla ea nulla enim eiusmod anim magna laborum.';



/*
                                  
                                  
                                  
                                  
       ,AM   ,pP""Yq.       ,AM   
      AVMM  6W'    `Wb     AVMM   
    ,W' MM  8M      M8   ,W' MM   
  ,W'   MM  YA.    ,A9 ,W'   MM   
  AmmmmmMMmm `Ybmmd9'  AmmmmmMMmm 
        MM                   MM   
        MM                   MM   
*/
$p404__text = 'Cette page n\'est malheureusement pas disponible.';
$p404__back = 'Retour à la page précédente';
$p404__home = 'Page d\'accueil';
