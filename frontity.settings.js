const settings = {
  "name": "blog-frontity",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Accueil",
              "/"
            ],
            [
              "A propos",
              "a-propos"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          // "url": "https://test.frontity.org"
          // "api": "https://test.frontity.org/wp-json"
          //"api": "http://frontity.local/wp-json" 
          //"api": "https://public-api.wordpress.com/wp/v2/sites/goiblas.wordpress.com" 
          "api": "https://revisions-ndrc.arrami.me/wp-json"       
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
