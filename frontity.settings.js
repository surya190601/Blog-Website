const settings = {
  "name": "incresco-blog-website",
  "state": {
    "frontity": {
      "url": "http://13.233.138.129",
      "title": "Incresco",
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
              "Home",
              "#"
            ],
            [
              "Who we are",
              "#"
            ],
            [
              "Client",
              "#"
            ],
            [
              "Service",
              "#"
            ],
            [
              "Blog",
              "/"
            ],
            [
              "Career",
              "#"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://13.233.138.129"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
