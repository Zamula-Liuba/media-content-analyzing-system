/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "ddf46626c2f68566ecf3450071560561"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.74cb0bfc.css",
    "revision": "7a0ddcc6f932da6ed33671fef9ff3223"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.bcca8832.js",
    "revision": "726f3122da92e460c95addfda9f4f8a6"
  },
  {
    "url": "assets/js/11.bbb3c67c.js",
    "revision": "cd5955cb204c164d23e02aef7af737de"
  },
  {
    "url": "assets/js/12.c7b5dc0e.js",
    "revision": "643be881368b7b26c4189492911192ba"
  },
  {
    "url": "assets/js/13.8b426f51.js",
    "revision": "89e70a45291e9b471c5da1854e931b6d"
  },
  {
    "url": "assets/js/14.f64bb280.js",
    "revision": "c4da67746b649141bcbe97fafaf931b1"
  },
  {
    "url": "assets/js/15.dd6495a9.js",
    "revision": "892d61a940a2b08d1bce99029307e879"
  },
  {
    "url": "assets/js/16.089c74b8.js",
    "revision": "a9308e8917b1b33a0f488b1cc5bf72b0"
  },
  {
    "url": "assets/js/17.0aafed0b.js",
    "revision": "16b973326838f20f687b44bf8a4edbfe"
  },
  {
    "url": "assets/js/18.3f271283.js",
    "revision": "331207464db29c382b194542074fb72f"
  },
  {
    "url": "assets/js/19.337f1515.js",
    "revision": "d60b28d18871c810aab33facca50c5ce"
  },
  {
    "url": "assets/js/2.c5f90675.js",
    "revision": "02b489d0a4c720d6e4aeadc93f41a8b7"
  },
  {
    "url": "assets/js/20.f3a81d27.js",
    "revision": "596b0be6ffd897974fde50da9a2ec0bb"
  },
  {
    "url": "assets/js/21.27a9c7cf.js",
    "revision": "7a88062e71850e8ea9e027dd3223f0e2"
  },
  {
    "url": "assets/js/22.9d2f9eda.js",
    "revision": "42d1713ed8c4326424dfec6c495e4bf8"
  },
  {
    "url": "assets/js/23.d8c22e06.js",
    "revision": "113d7b4855011f67247a53d9688698d2"
  },
  {
    "url": "assets/js/24.5f94dd5f.js",
    "revision": "e8bc9ed28fc89ff9f7a1fd17d1fe0026"
  },
  {
    "url": "assets/js/26.41c3dbc7.js",
    "revision": "7446249a5077cad4f0e3f0331ac7a596"
  },
  {
    "url": "assets/js/3.e160610e.js",
    "revision": "4e70ee80fbdecb74273c9a30f7e0cf39"
  },
  {
    "url": "assets/js/4.b72891af.js",
    "revision": "af8b6f903a49a03b3b3dc1c50bdd3808"
  },
  {
    "url": "assets/js/5.5a201875.js",
    "revision": "e3a0ee4acdd3e0bfa81e822855cc5efb"
  },
  {
    "url": "assets/js/6.78dc9da1.js",
    "revision": "82f35cebc0e451020fb56a93d5b85ec9"
  },
  {
    "url": "assets/js/7.4e77f9ee.js",
    "revision": "fdbdfa30be6c08e948af6ffa88c7ae22"
  },
  {
    "url": "assets/js/8.9cb72a87.js",
    "revision": "a5da757118dc892ce77a5cb1ae673305"
  },
  {
    "url": "assets/js/9.81b555de.js",
    "revision": "5a43e5727333d7611169895e955a7cfa"
  },
  {
    "url": "assets/js/app.7f2733e2.js",
    "revision": "c70ab5f3b7043d0e6ea8e1ab0f25d487"
  },
  {
    "url": "conclusion/index.html",
    "revision": "f4c77181259cc7773ae415d0b0b12885"
  },
  {
    "url": "design/index.html",
    "revision": "06cba955d42719d53a257e584e9a4d73"
  },
  {
    "url": "index.html",
    "revision": "8548ba5419713fbcb805dbde6249738a"
  },
  {
    "url": "intro/index.html",
    "revision": "231022dea828497c7426d72ca90d1d51"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "fe33e1e2814324e397ffb3650d865963"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "596448f4bdfe66407d6432f9a22ba577"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "8e99e28f7fac0033ee52a097af9a1162"
  },
  {
    "url": "software/index.html",
    "revision": "61954d42aef43a816991341b8dd02825"
  },
  {
    "url": "test/index.html",
    "revision": "73b5268eb127b1bf94e458d0587b83c7"
  },
  {
    "url": "use cases/index.html",
    "revision": "fccb15d16499e25af583e5235ff6f4a0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
