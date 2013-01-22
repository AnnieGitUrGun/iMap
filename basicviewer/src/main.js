//  The starting point for the application to load
(function() {
    //var configOptions;
    //var i18n;
    //Needed to make jQuery compatible with Dojo AMD loader
    define.amd.jQuery = true;
    require({
        async: true, //The async loader does not accomodate the old-style Dojo modules
        parseOnLoad: true,  //True to automatically parse the HTML for Dojo components after loaded
        packages: [  //The "namespaces" for modules in the application
            {
                name: 'jquery',
                location: location.pathname.replace(/\/[^/]+$/, '') + '/src/libs/jquery/js',
                main: 'jquery-1.8.3'
            }, {
                name: 'jqueryui',
                location: location.pathname.replace(/\/[^/]+$/, '') + '/src/libs/jquery/js',
                main: 'jquery-ui-1.9.2.custom'
            }, {
                name: 'xstyle',
                location: location.pathname.replace(/\/[^/]+$/, '') + '/src/libs/xstyle',
                main: 'xstyle'
            }, {
                name: "esriTemplate",
                location: location.pathname.replace(/\/[^/]+$/, '')
            }, {
                name: "localize",
                location: location.pathname.replace(/\/[^/]+$/, '') + '/nls'
            },{
                name: "myModules",
                location: location.pathname.replace(/\/[^/]+$/, '') + '/javascript'
            }, {
                name: "apl",
                location: location.pathname.replace(/\/[^/]+$/, '') + '/apl'
            }, {
                name: "modules",
                location: location.pathname.replace(/\/[^/]+$/, '') + '/src/modules'
            }
        ]
    }
    // The modules which need to be loaded immediately during app load - most of the widgets are lazy-loaded (e.g. on button click)
    , ["jquery", "dojo/dom", "dojo/ready"/*, "dojo/parser"*/, "require", "modules/core/utilities/environment", "dijit/layout/BorderContainer", "dijit/layout/ContentPane", "dijit/Toolbar"
        , "esri/arcgis/utils"
        /*, "dijit/layout/StackContainer", "modules/core/toc/toc",*/
        /*"dojo/i18n!localize/template"*/ /* , "esri/dijit/Scalebar", "esri/tasks/locator", "esri/tasks/geometry", "esri/dijit/BasemapGallery", "esri/dijit/OverviewMap"
        , "esri/dijit/Measurement", "esri/dijit/TimeSlider", "esri/dijit/editing/Editor-all", "esri/IdentityManager", "dojox/layout/FloatingPane"
        , "esri/dijit/Bookmarks", "esri/dijit/Attribution"*//*, "myModules/custommenu"*//*, "esri/dijit/Print"*//*, "apl/ElevationsChart/Pane"*//*, "dijit/MenuItem"*/]
    //The callback to run once Dojo and the required modules are ready.  References to the instantiated objects in the array can be exposed
    // as parameters in the callback function, but a parameter does not have to be inserted for each array item
    , function($, dom, ready /*, parser*/, require, environment) {
        ready(function() {
            $(document).ready(function(){ //jQuery is now loaded and ready


                init();
            });
        });
    });
})();
