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
 *  	- General
 *		- Commons
 *      - head
 *			.Header
 *  		.Navigation
 *     		.Search
 *     		.Footer
 *     	- Pages
 *     		.Index
 *     		.Contact
 *     		
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
$project__name = 'The Project Name';





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
			88  88 888888    db    8888b.  888888 88""Yb 
			88  88 88__     dPYb    8I  Yb 88__   88__dP 
			888888 88""    dP__Yb   8I  dY 88""   88"Yb  
			88  88 888888 dP""""Yb 8888Y"  888888 88  Yb 
		*/
$header__menu = 'Menu';
$backHome = 'Back to the homepage';



		/*
			88b 88    db    Yb    dP 88  dP""b8    db    888888 88  dP"Yb  88b 88 
			88Yb88   dPYb    Yb  dP  88 dP   `"   dPYb     88   88 dP   Yb 88Yb88 
			88 Y88  dP__Yb    YbdP   88 Yb  "88  dP__Yb    88   88 Yb   dP 88 Y88 
			88  Y8 dP""""Yb    YP    88  YboodP dP""""Yb   88   88  YbodP  88  Y8 
		*/
$navigation__texts = array(
	'products' => 'Our Products',
	'services' => 'Our Services',
	'contact' => 'Contacts'
);
$navigation__search = 'Search';
$contact__title = 'Contact us';
$contact__btn = 'Contact us';



		/*
			88  88 888888    db    8888b.  88""Yb    db    88b 88 8888b.  
			88  88 88__     dPYb    8I  Yb 88__dP   dPYb   88Yb88  8I  Yb 
			888888 88""    dP__Yb   8I  dY 88""Yb  dP__Yb  88 Y88  8I  dY 
			88  88 888888 dP""""Yb 8888Y"  88oodP dP""""Yb 88  Y8 8888Y"  
		*/
$headband__title = 'Change<br />is in<br />the <em>air</em>';



		/*
			 dP""b8  dP"Yb  88b 88 888888    db     dP""b8 888888 
			dP   `" dP   Yb 88Yb88   88     dPYb   dP   `"   88   
			Yb      Yb   dP 88 Y88   88    dP__Yb  Yb        88   
			 YboodP  YbodP  88  Y8   88   dP""""Yb  YboodP   88   
		*/
$contact__title = 'Our contacts';





/*
                                                    
                                                    
  `7MM"""YMM                   mm                   
    MM    `7                   MM                   
    MM   d  ,pW"Wq.   ,pW"Wq.mmMMmm .gP"Ya `7Mb,od8 
    MM""MM 6W'   `Wb 6W'   `Wb MM  ,M'   Yb  MM' "' 
    MM   Y 8M     M8 8M     M8 MM  8M""""""  MM     
    MM     YA.   ,A9 YA.   ,A9 MM  YM.    ,  MM     
  .JMML.    `Ybmd9'   `Ybmd9'  `Mbmo`Mbmmd'.JMML.   
                                                    
                                                    
*/
$footer__back_to_top = 'Back to the top of the page';
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
$p404__text = 'Too bad. This page doesn\'t exist anymore.';
$p404__back = 'Back to the previous page';
$p404__home = 'Homepage';
