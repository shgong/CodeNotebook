var projectsData = {

data: [{
    "name":"Hacknocraft Google Analytics System",
    "thumb":"thumbnail/11.png",
    "img":"project/11.jpg",
    "tag":["Statistical Analysis","Google Analytics"],
    "content":'<p>Designed an analytical system for an iOS applications in Hacknocraft with Google Analytics. Use Userid, Custom Metric, Custom Dimension and Event Tracker feature of Google Analytics iOS SDK to extract information. Build several custom reports including NewVsReturn, activation difference, deposit event analysis, cohort analysis and behavior flow to data mine useful information for the clients and the plugine developers.</p>'
},{
    "name":"Science Surveyor",
    "thumb":"thumbnail/19.png",
    "img":"project/19.jpg",
    "tag":["Python","Machine Learning","Natural Language Processing","Network Analysis"],
    "content":'<p>Worked on an idea network platform to extract idea centrality and content information on large literature corpus.Calculated a rough pairwise similarity on frequency matrix with Hadoop and applied 5-shingle language processing on selected pairs to generate a shingle network of articles for Python graph-tool network analysis.</p>'
},{
    "name":"Gesture Control for Automobile",
    "thumb":"thumbnail/1.png",
    "img":"",
    "tag":["Image Processing","C++","Python","OpenCV","Machine Learning"],
    "content":'<iframe src="http://player.vimeo.com/video/107796771?title=0&byline=0&portrait=0" class="video-responsive" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><p> Isolate the hand from the webcam feed using Haar cascades, then matched to one of three patterns: Closed fist, open palm, one finger up. Once a gesture for palm is recognized, the isolated hand is fed into the second module, which identifies fingertips and begins tracking them. </p> <p>When a finger is lost in tracking, or does not move for a second, the tracking is stopped, and the movement history of the finger is sent to a vector-based gesture matching software which predicts the command a user has specified. </p>'
},{
    "name":"Automatic Music Composition",
    "thumb":"thumbnail/18.png",
    "img":"project/18.jpg",
    "tag":["Matlab","Artificial Intelligence","Machine Learning","Music Processing"],
    "content":'<p>Designed a genetic algorithm system in MATLAB to generate music pieces from a series of mutations. Trained the prediction artificial intelligence with music feature data extracted from song databases. Applied machine learning to generate the transition pattern with hidden Markov model. </p>'
},{
    "name":"CRM Web Application",
    "thumb":"thumbnail/6.png",
    "img":"project/6.jpg",
    "tag":["Web Development","Java","Javascript","SQL","UI/UX Design"],
    "content":" <p>Developed the JavaEE based web application with MySQL database, Amazon Web Service(including message and queue), Java Jersey framework and REST API.</p> <p>Designed the user interface using Photoshop and implemented with jQuery, AngularJS, html/css.</p><p>Guided by Professor Donald Ferguson.</p>"
},{
    "name":"Cryogenic Measurement Design",
    "thumb":"thumbnail/2.png",
    "img":"project/2.jpg",
    "tag":["Physics","Circuit Design","Altium","Mathematica","Electronics","Statistical Analysis"],
    "content":"<p>In this system, I set up a series of filters including RC filter, LC filter and powder filter from room temperature to the mixing chamber. I chose proper components to design the mixing chamber filter, designed a triplex PCB with 24 parallel filtering circuit using the conductor-based coplanar waveguide model. After tha parts assembled, the filter was added to the measuring circuit in themixing chamber of the refrigerator, and connected with other filters in higher temperature. Guided by Professor Ning Kang.</p>"
},{
    "name":"Teeume.com",
    "thumb":"thumbnail/3.png",
    "img":"project/3.jpg",
    "tag":["Web Development","Javascript","SQL","UI/UX Design","Google Analytics"],
    "content":"<p>Revised the navigation structure and visual design of the website.  Worked with production division to adjust database system for order tracking and demand analysis. Changed the relationship between customer entity and orders and added new features for tracking.</p><p>Click <a href='http://www.teeume.com'>HERE</a> to visit the website.</p>"
},{
    "name":"Graphic Design Collection",
    "thumb":"thumbnail/13.png",
    "img":"project/13.jpg",
    "tag":["Graphic Design","Adobe Photoshop","Adobe Illustrator",'Javascript'],
    "content":"<p>A collection of various graphic design projects as a designer at Pi Design Association, including flyers, posters, exhibition panels, namecards, T-shirts, logos and web interfaces. </p>"
},{
    "name":"Artificial Intelligence Agents",
    "thumb":"thumbnail/15.png",
    "img":"project/15.jpg",
    "tag":["Artificial Intelligence","Python","Lisp"],
    "content":'<p>Various AI projects including a pattern matcher (Lisp), Sokoban Agent, Gomoku Agent and Inference Agent (Python). </p> <p>Using different techniques including heuristic searching tree, minimax algorithm, alpha beta prune, CSP back/forward tracking and first order logic. </p> '
},{
    "name":"Multiple Instance Learning",
    "thumb":"thumbnail/17.png",
    "img":"project/17.jpg",
    "tag":["Python","Machine Learning","Statistical Analysis"],
    "content":'<p> Research the assumption hierarchy of Multiple Instance Learning, from the presence/threshold/count-based standard assumptions to probability assumption like boosting and distance assuptions including MILES, GMIL and BartMIP. </p> <p>Implement key problem with Naive MIL, Metadata-SVM, Diverse Density and MILES and compare the result in a APRS table.</p>'
},{
    "name":"Physics Simulation Engine",
    "thumb":"thumbnail/16.png",
    "img":"project/16.jpg",
    "tag":["C++","Artificial Intelligence","Physics"],
    "content":'<p>Build a C++ physics simulation engine with various physics laws and phenomenon. </p> <p>Start from Explicit and Implicit Euler, implement physics forces including gravity, elasticity, collision, fluid activity and electromagnetic forces. Also use feed back control to design a biped robot artificial intelligence. </p> '
},{
    "name":"Image Processing and Extraction",
    "thumb":"thumbnail/14.png",
    "img":"project/14.jpg",
    "tag":["Image Processing","Matlab","Java","OpenCV"],
    "content":'<p>Use matlab to extract information from microscope photos, apply sobel edge extraction after smooth the image, dilate the image to make lines more clear, apply imfill and imclearborder to filter out noise.</p><p> When the image is corrupted, apply the fast fourier transform, analyze the symetric properties in the fourier space, use notch filter to clear the interuptions. </p> '
},{
    "name":"Girl&Giant",
    "thumb":"thumbnail/9.png",
    "img":"project/9.jpg",
    "tag":["Game Design","Unity3D","C#","Adobe Photoshop","UI/UX Design"],
    "content":'<p>An indie action game about a girl and a giant.</p>'
},{
    "name":"BDWM Anniversary T-shirt",
    "thumb":"thumbnail/12.png",
    "img":"project/12.jpg",
    "tag":["Graphic Design","Adobe Photoshop","Adobe Illustrator"],
    "content":"<p>Won the first place of the design competetion in both 2012 and 2013.</p><p> Sold a few thousands among the campus.</p>"
},{
    "name":"Project Yi",
    "thumb":"thumbnail/10.png",
    "img":"project/10.jpg",
    "tag":["Game Design","GameMaker","Adobe Photoshop","UI/UX Design"],
    "content":"<p>A indie danmaku game inspired from ancient chinese mythology.</p>"
},{
    "name":"Mingde Exchange Program Report",
    "thumb":"thumbnail/8.png",
    "img":"project/8.jpg",
    "tag":["Book Design","Graphic Design","Adobe InDesign"],
    "content":"<p>Report book of Mingde 2013 Winter Exchange Program to London School of Economics and Political Science & Edinburgh University.</p>"
},{

    "name":"PISTG",
    "thumb":"thumbnail/4.png",
    "img":"",
    "tag":["Game Design","GameMaker","Adobe Photoshop","UI/UX Design"],
    "content":'<iframe src="http://player.vimeo.com/video/55931671?title=0&byline=0&portrait=0&badge=0" class="video-responsive" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe><p></p><p>In this game, I tried to visualize the language of some classical Chinese poems. I choose eight sentences each describes a season. I use the objects, actions, routines and  shape of leaves to show the feeling in the poem. When the stages form a circle in the order of seasons, when the first four seasons are over,  reincarnation begins. The seasons will repeat again and again,  you may get lost in the river of time, or you may wake up from the endless nightmare.</p>'
},{
    "name":"BDWMViewer",
    "thumb":"thumbnail/5.png",
    "img":"project/5.jpg",
    "tag":["Browser Extension","Chrome","Firefox","Javascript","AJAX"],
    "content":"<p>A userscript extension for chrome and firefox, features in short-cuts and image preview for the BBS system of Peking University. Generate a preview display of images in lower hierarchy pages which will improve reading experience on image based pages.</p>"
},{
    "name":"Quantum Mechanics Simulations",
    "thumb":"thumbnail/7.png",
    "img":"project/7.jpg",
    "tag":["Physics","Mathematica"],
    "content":"<p>Simulate different physics potentials of quantum mechanics potentials. </p><p>Advanced Quantum Mechanics Project of Peking University.</p>"
},],



category: [{
    "name":"Programming",
    "child":["C++","Python","C#","Java","SQL","Javascript","Lisp","Matlab"]
},{
    "name":"Design",
    "child":["Graphic Design","Game Design","Circuit Design","Book Design","UI/UX Design"]
},{
    "name":"Application",
    "child":["Adobe Photoshop","Adobe Illustrator","Adobe InDesign","Google Analytics","Mathematica","Unity3D"]
},{
    "name":"Topics",
    "child":["Artificial Intelligence","Electronics","Image Processing","Music Processing","Machine Learning","Physics","Statistical Analysis"]
}]




};
