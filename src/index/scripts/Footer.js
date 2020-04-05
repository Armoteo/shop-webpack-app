//button footer

let faceButton = document.querySelector('#facebook'),
    twitterButton = document.querySelector('#twitter'),
    googleButton = document.querySelector('#google'),
    linkedinButton = document.querySelector('#linkedin');

    faceButton.addEventListener('click', function(){
        window.location = "https://www.facebook.com/";
    });
    twitterButton.addEventListener('click', function(){
        window.location = "https://twitter.com/?lang=uk";
    }); 
    googleButton.addEventListener('click', function(){
        window.location = "https://aboutme.google.com/u/0/?referer=gplus";
    });
    linkedinButton.addEventListener('click', function(){
        window.location = "https://www.linkedin.com/";
    });
