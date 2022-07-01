if (!self.define) {
    let e, i = {};
    const a = (a, s) => (a = new URL(a + ".js", s).href, i[a] || new Promise((i => {
        if ("document" in self) {
            const e = document.createElement("script");
            e.src = a, e.onload = i, document.head.appendChild(e)
        } else e = a, importScripts(a), i()
    })).then((() => {
        let e = i[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e
    })));
    self.define = (s, c) => {
        const t = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (i[t]) return;
        let n = {};
        const r = e => a(e, t), d = {module: {uri: t}, exports: n, require: r};
        i[t] = Promise.all(s.map((e => d[e] || r(e)))).then((e => (c(...e), n)))
    }
}
define(["./workbox-5f5b08d6"], (function (e) {
    "use strict";
    importScripts(), self.skipWaiting(), e.clientsClaim(), e.precacheAndRoute([{
        url: "/_next/static/chunks/112-9b5c9c9513dd5907.js",
        revision: "9b5c9c9513dd5907"
    }, {
        url: "/_next/static/chunks/212-951c209c7c656816.js",
        revision: "951c209c7c656816"
    }, {
        url: "/_next/static/chunks/244-b10b9ee7b3072d45.js",
        revision: "b10b9ee7b3072d45"
    }, {
        url: "/_next/static/chunks/249-4711e1e74b11ad69.js",
        revision: "4711e1e74b11ad69"
    }, {
        url: "/_next/static/chunks/278-60d864479d904a27.js",
        revision: "60d864479d904a27"
    }, {
        url: "/_next/static/chunks/343-309d9dce005b6af9.js",
        revision: "309d9dce005b6af9"
    }, {
        url: "/_next/static/chunks/352-8b7df8858e8eb436.js",
        revision: "8b7df8858e8eb436"
    }, {
        url: "/_next/static/chunks/411-628ab8899d07e762.js",
        revision: "628ab8899d07e762"
    }, {
        url: "/_next/static/chunks/424-710349afcff99d95.js",
        revision: "710349afcff99d95"
    }, {
        url: "/_next/static/chunks/476-019011beac828cee.js",
        revision: "019011beac828cee"
    }, {
        url: "/_next/static/chunks/753-fcd174110fbafaa7.js",
        revision: "fcd174110fbafaa7"
    }, {
        url: "/_next/static/chunks/859-c5578951e7a7d290.js",
        revision: "c5578951e7a7d290"
    }, {
        url: "/_next/static/chunks/911-a78baf39750be6e1.js",
        revision: "a78baf39750be6e1"
    }, {
        url: "/_next/static/chunks/framework-4556c45dd113b893.js",
        revision: "4556c45dd113b893"
    }, {
        url: "/_next/static/chunks/main-5035a05945ec0e6e.js",
        revision: "5035a05945ec0e6e"
    }, {
        url: "/_next/static/chunks/pages/_app-8b325775f0b48127.js",
        revision: "8b325775f0b48127"
    }, {
        url: "/_next/static/chunks/pages/_error-0a004b8b8498208d.js",
        revision: "0a004b8b8498208d"
    }, {
        url: "/_next/static/chunks/pages/about-dd7f0f5adba197ff.js",
        revision: "dd7f0f5adba197ff"
    }, {
        url: "/_next/static/chunks/pages/contacts-dc3f2aafa0104f8e.js",
        revision: "dc3f2aafa0104f8e"
    }, {
        url: "/_next/static/chunks/pages/crm-develop-825722a6d0ed3913.js",
        revision: "825722a6d0ed3913"
    }, {
        url: "/_next/static/chunks/pages/index-610b9f4efefcd8af.js",
        revision: "610b9f4efefcd8af"
    }, {
        url: "/_next/static/chunks/pages/keys-4fb81af83a4ee673.js",
        revision: "4fb81af83a4ee673"
    }, {
        url: "/_next/static/chunks/pages/keys/_document-bf81339d553a206e.js",
        revision: "bf81339d553a206e"
    }, {
        url: "/_next/static/chunks/pages/keys/avto-estetica-36ebc7ed5a30e1ba.js",
        revision: "36ebc7ed5a30e1ba"
    }, {
        url: "/_next/static/chunks/pages/keys/carriage-app-e378504762d4fca8.js",
        revision: "e378504762d4fca8"
    }, {
        url: "/_next/static/chunks/pages/keys/crm-system-524c517e9e416722.js",
        revision: "524c517e9e416722"
    }, {
        url: "/_next/static/chunks/pages/keys/ecovtor-3c88a00dc894f03e.js",
        revision: "3c88a00dc894f03e"
    }, {
        url: "/_next/static/chunks/pages/keys/hock-team-f241f95529128165.js",
        revision: "f241f95529128165"
    }, {
        url: "/_next/static/chunks/pages/keys/llumar-eb3b2872e05ebc1b.js",
        revision: "eb3b2872e05ebc1b"
    }, {
        url: "/_next/static/chunks/pages/keys/stroy-mat-4036a0c7ddba052e.js",
        revision: "4036a0c7ddba052e"
    }, {
        url: "/_next/static/chunks/pages/marketplace-seo-df70fe52b23734f1.js",
        revision: "df70fe52b23734f1"
    }, {
        url: "/_next/static/chunks/pages/mobile-develop-833dfb9af94f1e3f.js",
        revision: "833dfb9af94f1e3f"
    }, {
        url: "/_next/static/chunks/pages/reviews-ce9217672d65c073.js",
        revision: "ce9217672d65c073"
    }, {
        url: "/_next/static/chunks/pages/seo-3ea1e3411759a29d.js",
        revision: "3ea1e3411759a29d"
    }, {
        url: "/_next/static/chunks/pages/tariffs-56776c405d1e9326.js",
        revision: "56776c405d1e9326"
    }, {
        url: "/_next/static/chunks/pages/vacancy-6ceba62d55a59d51.js",
        revision: "6ceba62d55a59d51"
    }, {
        url: "/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",
        revision: "99442aec5788bccac9b2f0ead2afdd6b"
    }, {
        url: "/_next/static/chunks/webpack-d5baedca4d4d8761.js",
        revision: "d5baedca4d4d8761"
    }, {
        url: "/_next/static/css/1ccb389410ec2f85.css",
        revision: "1ccb389410ec2f85"
    }, {
        url: "/_next/static/css/32fe3a4032539777.css",
        revision: "32fe3a4032539777"
    }, {
        url: "/_next/static/css/3d9d293cd2bc3737.css",
        revision: "3d9d293cd2bc3737"
    }, {
        url: "/_next/static/css/4b6431281c7468b7.css",
        revision: "4b6431281c7468b7"
    }, {
        url: "/_next/static/css/5f6477f38bdc075a.css",
        revision: "5f6477f38bdc075a"
    }, {
        url: "/_next/static/css/6f824005b3ac514f.css",
        revision: "6f824005b3ac514f"
    }, {
        url: "/_next/static/css/7217fe77e7ec2577.css",
        revision: "7217fe77e7ec2577"
    }, {
        url: "/_next/static/css/79f5ac5022179d76.css",
        revision: "79f5ac5022179d76"
    }, {
        url: "/_next/static/css/860d172a7bc99e10.css",
        revision: "860d172a7bc99e10"
    }, {
        url: "/_next/static/css/920f2b6dafb056b3.css",
        revision: "920f2b6dafb056b3"
    }, {
        url: "/_next/static/css/997815a4ad3b2d00.css",
        revision: "997815a4ad3b2d00"
    }, {
        url: "/_next/static/css/9fcf29cfc411e49e.css",
        revision: "9fcf29cfc411e49e"
    }, {
        url: "/_next/static/css/afa928a5a27c775d.css",
        revision: "afa928a5a27c775d"
    }, {
        url: "/_next/static/css/b8fd6207831f7fda.css",
        revision: "b8fd6207831f7fda"
    }, {
        url: "/_next/static/css/bf8ca9dd6b3f84d2.css",
        revision: "bf8ca9dd6b3f84d2"
    }, {
        url: "/_next/static/css/cad01fc85cbb0287.css",
        revision: "cad01fc85cbb0287"
    }, {
        url: "/_next/static/css/e886b977f4369c30.css",
        revision: "e886b977f4369c30"
    }, {
        url: "/_next/static/media/0.effd9815.png",
        revision: "effd9815"
    }, {
        url: "/_next/static/media/1devMobile.ce903f45.svg",
        revision: "ce903f45"
    }, {
        url: "/_next/static/media/1slide.f18d9990.png",
        revision: "f18d9990"
    }, {
        url: "/_next/static/media/1stepIconCRM.d2e17a78.svg",
        revision: "d2e17a78"
    }, {
        url: "/_next/static/media/2.e7171cad.png",
        revision: "e7171cad"
    }, {
        url: "/_next/static/media/2devMobile.fdfc830a.svg",
        revision: "fdfc830a"
    }, {
        url: "/_next/static/media/2stepIconCRM.025fec7d.svg",
        revision: "025fec7d"
    }, {
        url: "/_next/static/media/3devMobile.00c188bb.svg",
        revision: "00c188bb"
    }, {
        url: "/_next/static/media/3stepIconCRM.0b43d1cb.svg",
        revision: "0b43d1cb"
    }, {
        url: "/_next/static/media/4devMobile.ae58229d.svg",
        revision: "ae58229d"
    }, {
        url: "/_next/static/media/4stepIconCRM.e5b78feb.svg",
        revision: "e5b78feb"
    }, {
        url: "/_next/static/media/5devMobile.96e9452e.svg",
        revision: "96e9452e"
    }, {
        url: "/_next/static/media/5stepIconCRM.c51f5db3.svg",
        revision: "c51f5db3"
    }, {
        url: "/_next/static/media/6devMobile.f5f8b374.svg",
        revision: "f5f8b374"
    }, {
        url: "/_next/static/media/6stepIconCRM.dbc49577.svg",
        revision: "dbc49577"
    }, {
        url: "/_next/static/media/ArrowNextGray.45206285.png",
        revision: "45206285"
    }, {
        url: "/_next/static/media/ArrowPrevGray.568580d7.png",
        revision: "568580d7"
    }, {
        url: "/_next/static/media/GothamProBlack.264f28c8.ttf",
        revision: "264f28c8"
    }, {
        url: "/_next/static/media/GothamProBlack.4a2d3a0a.eot",
        revision: "4a2d3a0a"
    }, {
        url: "/_next/static/media/GothamProBlack.76cd0db7.woff",
        revision: "76cd0db7"
    }, {
        url: "/_next/static/media/GothamProBold.0483dd98.eot",
        revision: "0483dd98"
    }, {
        url: "/_next/static/media/GothamProBold.0858cd0f.woff",
        revision: "0858cd0f"
    }, {
        url: "/_next/static/media/GothamProBold.18fb9230.ttf",
        revision: "18fb9230"
    }, {
        url: "/_next/static/media/GothamProLight.8e45c519.woff",
        revision: "8e45c519"
    }, {
        url: "/_next/static/media/GothamProLight.8f9025ae.ttf",
        revision: "8f9025ae"
    }, {
        url: "/_next/static/media/GothamProLight.aafb6ad1.eot",
        revision: "aafb6ad1"
    }, {
        url: "/_next/static/media/GothamProMedium.575e7265.ttf",
        revision: "575e7265"
    }, {
        url: "/_next/static/media/GothamProMedium.9eb3147d.eot",
        revision: "9eb3147d"
    }, {
        url: "/_next/static/media/GothamProMedium.d53f0a9a.woff",
        revision: "d53f0a9a"
    }, {
        url: "/_next/static/media/GothamProRegular.29fc9a17.woff",
        revision: "29fc9a17"
    }, {
        url: "/_next/static/media/GothamProRegular.c25d4c22.ttf",
        revision: "c25d4c22"
    }, {
        url: "/_next/static/media/GothamProRegular.d4f9d5ae.eot",
        revision: "d4f9d5ae"
    }, {
        url: "/_next/static/media/arrNextRev.9ae7b199.svg",
        revision: "6ee397a2b6c7bb50d8d4c2875d87dfbb"
    }, {
        url: "/_next/static/media/arrPrevRev.a882d070.svg",
        revision: "a882d070"
    }, {
        url: "/_next/static/media/arrPrevRev.a882d070.svg",
        revision: "b7b7bfab7464ee73f2e5b6d913ac7c1f"
    }, {
        url: "/_next/static/media/bc-mini-seo.d1197352.png",
        revision: "d1197352"
    }, {
        url: "/_next/static/media/blank-about.07de8f58.svg",
        revision: "07de8f58"
    }, {
        url: "/_next/static/media/calendar.c31bed12.svg",
        revision: "c31bed12"
    }, {
        url: "/_next/static/media/circle.ae461b23.svg",
        revision: "ae461b23"
    }, {
        url: "/_next/static/media/cloud-grid.739e52e9.svg",
        revision: "739e52e9"
    }, {
        url: "/_next/static/media/contract.286de515.svg",
        revision: "286de515"
    }, {
        url: "/_next/static/media/darts.c21fabed.png",
        revision: "c21fabed"
    }, {
        url: "/_next/static/media/dev-first.88d61f49.svg",
        revision: "88d61f49"
    }, {
        url: "/_next/static/media/dev-fourth.8ba7158c.svg",
        revision: "8ba7158c"
    }, {
        url: "/_next/static/media/dev-sixth.4422da15.svg",
        revision: "4422da15"
    }, {
        url: "/_next/static/media/dev-third.2f80b78e.svg",
        revision: "2f80b78e"
    }, {
        url: "/_next/static/media/dev.-second.ba1dac68.svg",
        revision: "ba1dac68"
    }, {
        url: "/_next/static/media/exit-modal.1bd33c59.svg",
        revision: "1bd33c59"
    }, {
        url: "/_next/static/media/female-bg.23237434.png",
        revision: "23237434"
    }, {
        url: "/_next/static/media/gears.a83b6de6.svg",
        revision: "a83b6de6"
    }, {
        url: "/_next/static/media/grey-bg-right-itemsvg.cbf0df3e.svg",
        revision: "cbf0df3e"
    }, {
        url: "/_next/static/media/grey-item-bg-left.36d43539.svg",
        revision: "36d43539"
    }, {
        url: "/_next/static/media/hero-bg.32b517c1.jpg",
        revision: "32b517c1"
    }, {
        url: "/_next/static/media/it-bgjpg.159d59a7.jpg",
        revision: "159d59a7"
    }, {
        url: "/_next/static/media/key-seo-veni.46dae0ba.svg",
        revision: "06523aded6f4390b99cab51f4414fc7b"
    }, {
        url: "/_next/static/media/keys-seo-auto.f2115e3f.svg",
        revision: "e83a9571048a257a3250112b08f74b4e"
    }, {
        url: "/_next/static/media/keys-seo-eco.3377e5de.svg",
        revision: "49cde43b06ceaa66b1c06a4602353f9a"
    }, {
        url: "/_next/static/media/keys-seo-lumar.823736ff.svg",
        revision: "cd3797ad6292a6f8d8eb30aa5b0b0c46"
    }, {
        url: "/_next/static/media/keys-seo-stroy.511b5355.svg",
        revision: "3e372935d6cadbdd29b1d58603fb666c"
    }, {
        url: "/_next/static/media/left-bg-pink.727bb6e8.svg",
        revision: "727bb6e8"
    }, {
        url: "/_next/static/media/left-slide-review.3d977045.svg",
        revision: "3d977045"
    }, {
        url: "/_next/static/media/lider-bg.89c29822.jpg",
        revision: "89c29822"
    }, {
        url: "/_next/static/media/literals.09fd5d3f.svg",
        revision: "09fd5d3f"
    }, {
        url: "/_next/static/media/logo-header.00a29a00.svg",
        revision: "00a29a00"
    }, {
        url: "/_next/static/media/mac-grid.da260c85.svg",
        revision: "da260c85"
    }, {
        url: "/_next/static/media/mailRight.b8f7ecaf.png",
        revision: "b8f7ecaf"
    }, {
        url: "/_next/static/media/mainLeft.80da989e.png",
        revision: "80da989e"
    }, {
        url: "/_next/static/media/male-bg.3a629e46.png",
        revision: "3a629e46"
    }, {
        url: "/_next/static/media/market-grid.230efdbc.svg",
        revision: "230efdbc"
    }, {
        url: "/_next/static/media/marketplace-img.20ce0d7d.svg",
        revision: "20ce0d7d"
    }, {
        url: "/_next/static/media/mini-app-bg.ca32aa06.svg",
        revision: "ca32aa06"
    }, {
        url: "/_next/static/media/miniPhone.eebf1a06.png",
        revision: "2d524e146781f26a0f097f3c982bd292"
    }, {
        url: "/_next/static/media/mobile-hand.c5c4ae17.png",
        revision: "c5c4ae17"
    }, {
        url: "/_next/static/media/op-right-offer.aef628b5.svg",
        revision: "aef628b5"
    }, {
        url: "/_next/static/media/right-bg-pink.751fdc8c.svg",
        revision: "751fdc8c"
    }, {
        url: "/_next/static/media/search-big.90a411a7.svg",
        revision: "90a411a7"
    }, {
        url: "/_next/static/media/search.8dd25869.svg",
        revision: "8dd25869"
    }, {
        url: "/_next/static/media/seo-mini.53ca48b9.svg",
        revision: "53ca48b9"
    }, {
        url: "/_next/static/media/seo-report.8f6d1d00.png",
        revision: "8f6d1d00"
    }, {
        url: "/_next/static/media/seoLeft.b3786c42.svg",
        revision: "b3786c42"
    }, {
        url: "/_next/static/media/seoRight.22628d69.svg",
        revision: "22628d69"
    }, {
        url: "/_next/static/media/site-grid.d98abe42.svg",
        revision: "d98abe42"
    }, {
        url: "/_next/static/media/visit-card-grid.71fd246d.svg",
        revision: "71fd246d"
    }, {
        url: "/_next/static/t-D9exVWQw0YfC9RH5FIB/_buildManifest.js",
        revision: "cb15847cb8ff46754f0dcb94c10bffd5"
    }, {
        url: "/_next/static/t-D9exVWQw0YfC9RH5FIB/_middlewareManifest.js",
        revision: "fb2823d66b3e778e04a3f681d0d2fb19"
    }, {
        url: "/_next/static/t-D9exVWQw0YfC9RH5FIB/_ssgManifest.js",
        revision: "b6652df95db52feb4daf4eca35380933"
    }, {url: "/icon-192x192.png", revision: "a38f649dc4351240c0eb0f813d2cdb57"}, {
        url: "/icon-256x256.png",
        revision: "f88fc9eca3664e8a79ebce956f7dff57"
    }, {url: "/icon-384x384.png", revision: "5074cce8149b69bddce57721a472f422"}, {
        url: "/icon-512x512.png",
        revision: "4e55d5910bd5c1e6f4b2c1b72ebe7439"
    }, {url: "/img/1acovtor.png", revision: "af7ade3bc13ce33d5ed0a9318654afdb"}, {
        url: "/img/1crm.png",
        revision: "1d9f1c4c10f1dbb29b706830845059fc"
    }, {url: "/img/1devMobile.svg", revision: "34993e65ebb9bff44a9f8be25378a5d4"}, {
        url: "/img/1estetic.png",
        revision: "8ef5e8a2c74e2a52a7082cd822e1ce8f"
    }, {url: "/img/1hockey.png", revision: "79a06be8b43172046fe510f914028e55"}, {
        url: "/img/1lumar.png",
        revision: "9fb9b3a69b9eb473f4f6bfd09a22531c"
    }, {url: "/img/1slide.png", revision: "73f0e186410ef3d15069891c6d8937e0"}, {
        url: "/img/1stepIconCRM.png",
        revision: "705291191cedb711dea8c9e05699caaf"
    }, {url: "/img/1stepIconCRM.svg", revision: "8490f1f6a455b34847f074aa7aa7239f"}, {
        url: "/img/1stroimat.png",
        revision: "0dc47187790491bcb936bfb3338037c8"
    }, {url: "/img/2.png", revision: "b6a669a005071403455e4a6d2b57aadd"}, {
        url: "/img/2acovtor.png",
        revision: "dc6fa966701e8e2bddd31e732a26a043"
    }, {url: "/img/2crm.png", revision: "5d28ccf63bda00fb713e420b9c54b8ab"}, {
        url: "/img/2devMobile.svg",
        revision: "1f2d3e00b70b827ea1a9dd00b3edf9ce"
    }, {url: "/img/2estetic.png", revision: "c19ba4ed50d904150060f620200fd858"}, {
        url: "/img/2hockey.png",
        revision: "7ed29a24c8f7b057c3df5c2179501774"
    }, {url: "/img/2lumar.png", revision: "897590733df20297677966f479c12b4e"}, {
        url: "/img/2stepIconCRM.png",
        revision: "0249e50f8ca0aba33e27a906c721bc05"
    }, {url: "/img/2stepIconCRM.svg", revision: "f037c285ed056f18c56436d7b7dd99e2"}, {
        url: "/img/2stroimat.png",
        revision: "0520a0d3b988c61f75a42f21323ee7ef"
    }, {url: "/img/3acovtor.png", revision: "0d580fb2a3990e7bfe779be77b560f1e"}, {
        url: "/img/3crm.png",
        revision: "622984fba20e7d361d6530ecf434e505"
    }, {url: "/img/3devMobile.png", revision: "08f0fdb9be9a74822b0f122b244af72e"}, {
        url: "/img/3devMobile.svg",
        revision: "3779b90d91d23335b46b0b37edbb6eda"
    }, {url: "/img/3estetic.png", revision: "898b541147cbe8f64c181fed95d58f7e"}, {
        url: "/img/3hockey.png",
        revision: "836406484999e27c19f4ee4246a34686"
    }, {url: "/img/3lumar.png", revision: "97f4a2d581eaff56a7dd9955e0db2782"}, {
        url: "/img/3stepIconCRM.png",
        revision: "70ed52f30b68543c0399eef78a5fe9f3"
    }, {url: "/img/3stepIconCRM.svg", revision: "f23ae4d3bfa48018877fec495f51c04c"}, {
        url: "/img/3stroimat.png",
        revision: "1fefb28293a315a33e0334312814de8d"
    }, {url: "/img/4acovtor.png", revision: "62934474fdeeeda08d852897fef44990"}, {
        url: "/img/4crm.png",
        revision: "69f2eb608dfeb9f3bc2a8210ff168a7a"
    }, {url: "/img/4devMobile.svg", revision: "0d053d33065cceb8f01365c393171711"}, {
        url: "/img/4estetic.png",
        revision: "48638f330aca6184291e4546734e035b"
    }, {url: "/img/4hockey.png", revision: "a929d5a38170f970340a3724874e96cc"}, {
        url: "/img/4lumar.png",
        revision: "deb4415dec0f218e2adeb5fc99b99447"
    }, {url: "/img/4stepIconCRM.png", revision: "1e914336c86a96b2a4f32ec352f339bd"}, {
        url: "/img/4stepIconCRM.svg",
        revision: "2fd4b21cd942110745aef2752c49c6e4"
    }, {url: "/img/4stroimat.png", revision: "5f4708bd443d8b2aeae35d56bc999703"}, {
        url: "/img/5acovtor.png",
        revision: "a0b08c014b3cdd5f305b1e8fd5bb3342"
    }, {url: "/img/5crm.png", revision: "4bf42fac7aab7c81a2311f3f241eb099"}, {
        url: "/img/5devMobile.png",
        revision: "eb16f02479e9bea84f5711637c1c7527"
    }, {url: "/img/5devMobile.svg", revision: "003466f1aa4bc9ed28a0bad4dff9fc48"}, {
        url: "/img/5estetic.png",
        revision: "c62672fffa1bf115f296305f27ed9bc1"
    }, {url: "/img/5hockey.png", revision: "1055550776ea96357fc910bb0e1f9ec4"}, {
        url: "/img/5lumar.png",
        revision: "07f977d949791acd13ea8619692b4cf8"
    }, {url: "/img/5stepIconCRM.png", revision: "3e81e6c201051ef17c3212aa318516d2"}, {
        url: "/img/5stepIconCRM.svg",
        revision: "ab7d453f6dda496319ffde0adc7d137f"
    }, {url: "/img/5stroimat.png", revision: "5f144126093cd10569cb1341cde2afd6"}, {
        url: "/img/6acovtor.png",
        revision: "483ebd5017f74c69ada484af83c00f0a"
    }, {url: "/img/6crm.png", revision: "69f2eb608dfeb9f3bc2a8210ff168a7a"}, {
        url: "/img/6devMobile.svg",
        revision: "45f6807bf25933cfbad083afa2584cca"
    }, {url: "/img/6estetic.png", revision: "48839b01d244d95533a75cda23de7173"}, {
        url: "/img/6hockey.png",
        revision: "bc582c1cc1a4974ace4a56dd96a97fdf"
    }, {url: "/img/6lumar.png", revision: "ac7fd6e61fe5f2631f261f9f350c8449"}, {
        url: "/img/6stepIconCRM.png",
        revision: "a095d5d7b78ea1e25dfe496081913de8"
    }, {url: "/img/6stepIconCRM.svg", revision: "f2bcc060eb49ae6af1e2d78fd60eb42d"}, {
        url: "/img/6stroimat.png",
        revision: "8c6a390aedc57356ec68c544bbeb21b7"
    }, {url: "/img/7crm.png", revision: "06ce9090a6185e723dc8ac0e08a88a33"}, {
        url: "/img/app1.png",
        revision: "d12506b5c3c03505a7c4f59f2299244e"
    }, {url: "/img/app2.png", revision: "f7cf1772bfe60ebdc3798965b59bd191"}, {
        url: "/img/app3.png",
        revision: "a0cd147e68e4fd5f89d6172fa7557591"
    }, {url: "/img/app4.png", revision: "9826ed9e03e7a63dc3356e6957c73c15"}, {
        url: "/img/app5.png",
        revision: "ecea03879bc0683a0522725e98d3777e"
    }, {url: "/img/app6.png", revision: "7aa71db327339e7dbf782cfec237f806"}, {
        url: "/img/auto-gadjets.png",
        revision: "31aa97acd8e143f1d74178ca97d316db"
    }, {
        url: "/img/black-gadjets-block.jpg",
        revision: "4b5241f4ffd7aab31246f2f4c33cf4b8"
    }, {url: "/img/circle-contract.png", revision: "c411713384ae02aafd5ccc0d97b24a3e"}, {
        url: "/img/circle-cubs.png",
        revision: "8a1cb44547414049a815ea5fe5aa7ef6"
    }, {url: "/img/circle-mac.png", revision: "52d874c58df7b1680ee9bd1a937b72ed"}, {
        url: "/img/circle-phone.png",
        revision: "e329c3766b574e4ba85ac91d05ee595c"
    }, {url: "/img/eko-mobile.jpg", revision: "d8612a62724f20536414b18fada73772"}, {
        url: "/img/female-sort.png",
        revision: "b8b5129aba3869517907277ec80d1c6f"
    }, {url: "/img/graffik1-3.png", revision: "ba701cf1d779fb281ad48d07ac152db1"}, {
        url: "/img/keys-crm-red.svg",
        revision: "3e9e2beed4535d9b6bca2de2f50a48ba"
    }, {url: "/img/keys-phones-blue.svg", revision: "4d43c4fc1aa45308f03b6c7fd26de41c"}, {
        url: "/img/llumar-pad.png",
        revision: "d078c879c1980d186261b8c2f1092852"
    }, {url: "/img/logo-evo.svg", revision: "be2ed85d778436b4bc912717d94ab5e3"}, {
        url: "/img/logo-header.svg",
        revision: "0fcea3ddccefda6e80739876c956a9ca"
    }, {url: "/img/map-placemark.svg", revision: "1943c7cae30fdd3563e722b14035a35b"}, {
        url: "/img/mob-crm.svg",
        revision: "be2575affcdb575626406840ec893897"
    }, {url: "/img/mob-phones.svg", revision: "88494ff94c7ae7583e3d99907ada1788"}, {
        url: "/img/orange-img-phone.jpg",
        revision: "c58b72a761c315d33447d0c801313076"
    }, {
        url: "/img/orange-img-phone.png",
        revision: "fc3c3a8ee7e2a854e1169a25ad4c46ed"
    }, {url: "/img/orange-phone-block.jpg", revision: "b61c438c06421b82d777a2e3955823d2"}, {
        url: "/img/pad-hockey.png",
        revision: "33b5d51665f6fd2ee104f2782740be88"
    }, {url: "/img/pad-keys.png", revision: "d6c6543ee9b4e2d1c5ebe42ce9a79311"}, {
        url: "/img/pad-mobile.jpg",
        revision: "b9493d581843393a24331dc73509d8ad"
    }, {url: "/img/photoOfClient.png", revision: "d0605969528ff3d9a53746ca6ea8a3dd"}, {
        url: "/img/seo-month.png",
        revision: "9ad492fbdeec5e06eb3d152fe4427ff7"
    }, {
        url: "/manifest.json",
        revision: "5480ddd2e81d3fbfd3bb16d05cc9c533"
    }], {ignoreURLParametersMatching: []}), e.cleanupOutdatedCaches(), e.registerRoute("/", new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [{
            cacheWillUpdate: async ({
                                        request: e,
                                        response: i,
                                        event: a,
                                        state: s
                                    }) => i && "opaqueredirect" === i.type ? new Response(i.body, {
                status: 200,
                statusText: "OK",
                headers: i.headers
            }) : i
        }]
    }), "GET"), e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i, new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [new e.ExpirationPlugin({maxEntries: 4, maxAgeSeconds: 31536e3})]
    }), "GET"), e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i, new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [new e.ExpirationPlugin({maxEntries: 4, maxAgeSeconds: 604800})]
    }), "GET"), e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [new e.ExpirationPlugin({maxEntries: 4, maxAgeSeconds: 604800})]
    }), "GET"), e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [new e.ExpirationPlugin({maxEntries: 64, maxAgeSeconds: 86400})]
    }), "GET"), e.registerRoute(/\/_next\/image\?url=.+$/i, new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [new e.ExpirationPlugin({maxEntries: 64, maxAgeSeconds: 86400})]
    }), "GET"), e.registerRoute(/\.(?:mp3|wav|ogg)$/i, new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400})]
    }), "GET"), e.registerRoute(/\.(?:mp4)$/i, new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400})]
    }), "GET"), e.registerRoute(/\.(?:js)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400})]
    }), "GET"), e.registerRoute(/\.(?:css|less)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400})]
    }), "GET"), e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i, new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400})]
    }), "GET"), e.registerRoute(/\.(?:json|xml|csv)$/i, new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400})]
    }), "GET"), e.registerRoute((({url: e}) => {
        if (!(self.origin === e.origin)) return !1;
        const i = e.pathname;
        return !i.startsWith("/api/auth/") && !!i.startsWith("/api/")
    }), new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({maxEntries: 16, maxAgeSeconds: 86400})]
    }), "GET"), e.registerRoute((({url: e}) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/")
    }), new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400})]
    }), "GET"), e.registerRoute((({url: e}) => !(self.origin === e.origin)), new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 3600})]
    }), "GET")
}));
