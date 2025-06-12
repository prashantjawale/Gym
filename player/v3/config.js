if (GmCXt === undefined) {
    var GmCXt = {};
}

GmCXt.conf = {};
GmCXt.conf.version = "2025.3.1";
GmCXt.conf.env = "Test";

GmCXt.conf.creatorApp = 'mgExt';
GmCXt.conf.playerApp = 'mgPlayer';
GmCXt.conf.appName = "mgPlayer";

GmCXt.conf.allowedDomains = [];
GmCXt.conf.appTypeExt = 'Extension';
GmCXt.conf.appTypeScript = 'JScript';
GmCXt.conf.appTypeElectron = 'electron';
GmCXt.conf.Premise = 'Premise';
GmCXt.conf.runEnv = "browser";
GmCXt.conf.msgPrefix = "mgPlayerJSTest_";

GmCXt.conf.showWidget = false;

GmCXt.conf.playerExtension = GmCXt.conf.playerApp + GmCXt.conf.appTypeExt;
GmCXt.conf.playerJS = GmCXt.conf.playerApp + GmCXt.conf.appTypeScript;

GmCXt.conf.websiteUrl = "https://myguide.org";
GmCXt.conf.privacyPolicyUrl = "https://www.edcast.com/corp/privacy-policy/";
GmCXt.conf.termsURL = "https://www.edcast.com/corp/terms-of-service/";
GmCXt.conf.feedbackDetails = "mailto:support@csod.com?Subject=MyGuide Feedback";
GmCXt.conf.adminEmail = "<a href='mailto:admin@edcast.com' target='_top'>admin@edcast.com</a>";
GmCXt.conf.hideCaptcha = "";

try {
    chrome.runtime.onMessage.addListener(function() {
        return true;
    });
    GmCXt.conf.appType = GmCXt.conf.appTypeExt;
} catch (e) {
    try {
        let uri = safari.extension.baseURI;
        if (uri !== null) {
            GmCXt.conf.appType = GmCXt.conf.appTypeExt;
        }
    } catch (e2) {
        GmCXt.conf.appType = GmCXt.conf.appTypeScript;
    }
}

// Default true, guideme icon will be visible on all urls. 
// If false, guideme icon will only be visible on urls where user have created tours. 

GmCXt.conf.allUrls = true;

GmCXt.setConfig = function() {
    GmCXt.conf.clientJsBaseUrl = "https://stagecdn.guideme.io/guideme-player/ent/";
    GmCXt.conf.chromeExtensionUrl = "";
    GmCXt.conf.webServiceUrl = "https://qa-api.guideme.io/v3/";
    GmCXt.conf.staticContentPath = "https://stagecdn.guideme.io/guideme-assests/";
    GmCXt.conf.webPortalUrl = "https://qa-admin.myguide.org/";
    GmCXt.conf.analyticsPath = "https://analytics-qa.guideme.io/";
    GmCXt.conf.analyticsPortalUrl = "https://analytics-qa.myguide.org/";

    GmCXt.conf.cdn = "https://stagecdn.guideme.io/";
    GmCXt.conf.jsonStorageUrl = "https://stage-mycdn.guideme.io/";
	
    GmCXt.conf.ssoRedirectionUrl = "https://qa-sso.guideme.io/saml2/sp/sso/";
    GmCXt.conf.ssoApiUrl = "https://qa-sso.guideme.io/saml2/sp/session/";
    GmCXt.conf.ssoConfigUrl = "https://stagecdn.guideme.io/guideme-auth-qa/objects/";
    GmCXt.conf.publicTimestampUrl = "https://stagecdn.guideme.io/guideme-auth-qa/timestamp/";
};

GmCXt.setConfig();

(function() {
    if (GmCXt.conf.appType === GmCXt.conf.appTypeExt) {

        let root = '';

        if (GmCXt.browserApp === 'Safari') {
            root = safari.extension.baseURI;
        } else if (GmCXt.browserApp === 'firefox' ) {

            root = chrome.extension.getURL('');

        } else {
            root = chrome.runtime.getURL('');
        }
    }

})();

GmCXt.conf.appConfig = {
    login: {guideme: 1},
    testme: 1,
    customer: 'myguide',
    desktopCommunication: false,
    iframeInjection: true
};