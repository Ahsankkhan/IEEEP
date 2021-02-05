(function(window, undefined) {
  var dictionary = {
    "715a85d5-52e9-4f80-a462-f87abf616598": "Local",
    "30f0f438-2468-4a4d-ba1b-e41cf4b39032": "Contactus",
    "8147a5c6-9c9a-46fe-9f4e-14f55da37800": "aboutus",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "f4aaf4fb-e6d0-403b-ba09-a1cd616eaf13": "Event",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);