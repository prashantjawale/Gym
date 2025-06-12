/*global GmCXt,guideMe*/
let configPath = null;
if (typeof guideMe === 'undefined') {
     
    guideMe = {};
}
if (!guideMe.baseUrl) {
    guideMe.baseUrl = "https://stagecdn.guideme.io/guideme-player/ent/";
}
configPath = guideMe.baseUrl + 'config.js';
let playerExtImgUrl = "";

function getScript(source, callback) {
    if (source) {
        let el = document.createElement('script');
        el.onload = callback;
        el.src = source;

        document.head.appendChild(el);
    } else {
        console.log("Invalid config path");
    }
}

function getScriptCB() {

    GmCXt.conf.baseUrl = guideMe.baseUrl;
    let a = document.createElement('script');

    if (GmCXt.conf.allowedDomains && GmCXt.conf.allowedDomains.length && window.location.hostname.length > 0) {
        let foundDomain = false;
        for (let i = 0; i < GmCXt.conf.allowedDomains.length; i++) {
            if (window.location.hostname.indexOf(GmCXt.conf.allowedDomains[i]) >= 0) {
                foundDomain = true;
                break;
            }
        }

        if (foundDomain) {
            loadGuideMeClientFiles();
        }
    } else {
        loadGuideMeClientFiles();
    }

    function loadGuideMeClientFiles() {
        if (window.self === window.top) {
            a.src = GmCXt.conf.baseUrl + 'gm_client_1749726991038.js';
        } else {
            a.src = GmCXt.conf.baseUrl + 'gm_client_iframe_1749726991038.js';
        }
        document.head.appendChild(a);
    }
};

function detectExtension() {
    if(playerExtImgUrl){
        let img;
        img = new Image();
	    img.src = playerExtImgUrl;
	    img.onload = function() {
	        console.log("MyGuide player Extension installed, Skiping client JS load.");
	    };
	    img.onerror = function() {
	        getScript(configPath, getScriptCB );
	    };
    } else{
        getScript(configPath, getScriptCB );
    }
    
}

detectExtension();