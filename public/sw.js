if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let b={};const d=e=>a(e,r),f={module:{uri:r},exports:b,require:d};i[r]=Promise.all(c.map((e=>f[e]||d(e)))).then((e=>(s(...e),b)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts("fallback-F585mL9TmWoZOGaqcgLZ0.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/F585mL9TmWoZOGaqcgLZ0/_buildManifest.js",revision:"8054b2002fdba96c7bf17a3c6414b4cc"},{url:"/_next/static/F585mL9TmWoZOGaqcgLZ0/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/F585mL9TmWoZOGaqcgLZ0/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/106-7fc7c18adf736914.js",revision:"7fc7c18adf736914"},{url:"/_next/static/chunks/124-65860edf0391f61a.js",revision:"65860edf0391f61a"},{url:"/_next/static/chunks/237-4f70e93a15d5f182.js",revision:"4f70e93a15d5f182"},{url:"/_next/static/chunks/352-8b7df8858e8eb436.js",revision:"8b7df8858e8eb436"},{url:"/_next/static/chunks/411-b2c95ec03fd1f268.js",revision:"b2c95ec03fd1f268"},{url:"/_next/static/chunks/426-3e266210404d6ecd.js",revision:"3e266210404d6ecd"},{url:"/_next/static/chunks/432-e6a89a75119c97e4.js",revision:"e6a89a75119c97e4"},{url:"/_next/static/chunks/510-5693ae8a8e7378ad.js",revision:"5693ae8a8e7378ad"},{url:"/_next/static/chunks/523-066d5ea886047402.js",revision:"066d5ea886047402"},{url:"/_next/static/chunks/610-4c227f801b57f642.js",revision:"4c227f801b57f642"},{url:"/_next/static/chunks/664-41844e7ff48658f9.js",revision:"41844e7ff48658f9"},{url:"/_next/static/chunks/692-f19e8a96463d8a43.js",revision:"f19e8a96463d8a43"},{url:"/_next/static/chunks/706-abafe733428ee019.js",revision:"abafe733428ee019"},{url:"/_next/static/chunks/782-c234d1800a8cca2f.js",revision:"c234d1800a8cca2f"},{url:"/_next/static/chunks/799-30831ea04478343d.js",revision:"30831ea04478343d"},{url:"/_next/static/chunks/871-a85b1dd32adb9d0c.js",revision:"a85b1dd32adb9d0c"},{url:"/_next/static/chunks/925-c34532131559ab40.js",revision:"c34532131559ab40"},{url:"/_next/static/chunks/968-ca29dad10643c2de.js",revision:"ca29dad10643c2de"},{url:"/_next/static/chunks/996-1f3dcc674d3abf95.js",revision:"1f3dcc674d3abf95"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"5f4595e5518b5600"},{url:"/_next/static/chunks/main-784e916df6ec1917.js",revision:"784e916df6ec1917"},{url:"/_next/static/chunks/pages/404-4855281e44a10b56.js",revision:"4855281e44a10b56"},{url:"/_next/static/chunks/pages/_app-304855837db88ba8.js",revision:"304855837db88ba8"},{url:"/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"0a004b8b8498208d"},{url:"/_next/static/chunks/pages/_offline-607e03ccc3f4e766.js",revision:"607e03ccc3f4e766"},{url:"/_next/static/chunks/pages/about-3e7af1607c1aa1a2.js",revision:"3e7af1607c1aa1a2"},{url:"/_next/static/chunks/pages/admin-it-industrial-private-page-aed862f79b976857.js",revision:"aed862f79b976857"},{url:"/_next/static/chunks/pages/contacts-293cd98482faf9f6.js",revision:"293cd98482faf9f6"},{url:"/_next/static/chunks/pages/crm-develop-646c57dfbf9d40a5.js",revision:"646c57dfbf9d40a5"},{url:"/_next/static/chunks/pages/index-a513ce454bb0de28.js",revision:"a513ce454bb0de28"},{url:"/_next/static/chunks/pages/keys-1cd0537830252881.js",revision:"1cd0537830252881"},{url:"/_next/static/chunks/pages/keys/avto-estetica-853b13ea09247072.js",revision:"853b13ea09247072"},{url:"/_next/static/chunks/pages/keys/carriage-app-c40cd76607cf9b1f.js",revision:"c40cd76607cf9b1f"},{url:"/_next/static/chunks/pages/keys/crm-system-b9dfb948c68dc2e5.js",revision:"b9dfb948c68dc2e5"},{url:"/_next/static/chunks/pages/keys/ecovtor-0992141328a05cf6.js",revision:"0992141328a05cf6"},{url:"/_next/static/chunks/pages/keys/hock-team-23e8823fc749df59.js",revision:"23e8823fc749df59"},{url:"/_next/static/chunks/pages/keys/llumar-2bc5291c432eceec.js",revision:"2bc5291c432eceec"},{url:"/_next/static/chunks/pages/keys/stroy-mat-9b23d5bf41499e1e.js",revision:"9b23d5bf41499e1e"},{url:"/_next/static/chunks/pages/marketplace-seo-2a199fb66c4c9611.js",revision:"2a199fb66c4c9611"},{url:"/_next/static/chunks/pages/mobile-develop-ef91e8c6627424bb.js",revision:"ef91e8c6627424bb"},{url:"/_next/static/chunks/pages/reviews-49aea347f3f3e615.js",revision:"49aea347f3f3e615"},{url:"/_next/static/chunks/pages/seo-8518f3f967f440a2.js",revision:"8518f3f967f440a2"},{url:"/_next/static/chunks/pages/tariffs-17a622ce7e78af3d.js",revision:"17a622ce7e78af3d"},{url:"/_next/static/chunks/pages/vacancy-1b4cb26f754d87cb.js",revision:"1b4cb26f754d87cb"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-bafef977baab8f05.js",revision:"bafef977baab8f05"},{url:"/_next/static/css/0b2a61134d3256f6.css",revision:"0b2a61134d3256f6"},{url:"/_next/static/css/1369cb703046e678.css",revision:"1369cb703046e678"},{url:"/_next/static/css/1779e993e01214d4.css",revision:"1779e993e01214d4"},{url:"/_next/static/css/2421173f20795cf8.css",revision:"2421173f20795cf8"},{url:"/_next/static/css/3fbb85edd9fdca5f.css",revision:"3fbb85edd9fdca5f"},{url:"/_next/static/css/4406647cd97c584c.css",revision:"4406647cd97c584c"},{url:"/_next/static/css/4a228f75164fc929.css",revision:"4a228f75164fc929"},{url:"/_next/static/css/5ff78d5f8f050580.css",revision:"5ff78d5f8f050580"},{url:"/_next/static/css/69caa239ead78388.css",revision:"69caa239ead78388"},{url:"/_next/static/css/8554946adaa400d1.css",revision:"8554946adaa400d1"},{url:"/_next/static/css/91af8579f80fe2ba.css",revision:"91af8579f80fe2ba"},{url:"/_next/static/css/aa1f03fcfa29b340.css",revision:"aa1f03fcfa29b340"},{url:"/_next/static/css/ae6ba671c8abe30d.css",revision:"ae6ba671c8abe30d"},{url:"/_next/static/css/b5f5021fb461a368.css",revision:"b5f5021fb461a368"},{url:"/_next/static/css/bb5f7e6dedd07564.css",revision:"bb5f7e6dedd07564"},{url:"/_next/static/css/c81ec284010b1b1f.css",revision:"c81ec284010b1b1f"},{url:"/_next/static/css/d6889115653c7147.css",revision:"d6889115653c7147"},{url:"/_next/static/css/da0e806d4651af22.css",revision:"da0e806d4651af22"},{url:"/_next/static/css/e3f952c6825e62d0.css",revision:"e3f952c6825e62d0"},{url:"/_next/static/css/e8e4ea3898a9241c.css",revision:"e8e4ea3898a9241c"},{url:"/_next/static/media/0.5bee18f9.WebP",revision:"5bee18f9"},{url:"/_next/static/media/1devMobile.06ee719d.svg",revision:"06ee719d"},{url:"/_next/static/media/1slide.4305088b.WebP",revision:"4305088b"},{url:"/_next/static/media/1stepIconCRM.c1c909f4.svg",revision:"c1c909f4"},{url:"/_next/static/media/2.25ee9f5c.WebP",revision:"25ee9f5c"},{url:"/_next/static/media/2devMobile.7c648da7.svg",revision:"7c648da7"},{url:"/_next/static/media/2stepIconCRM.b98beda3.svg",revision:"b98beda3"},{url:"/_next/static/media/3devMobile.0b023a3f.svg",revision:"0b023a3f"},{url:"/_next/static/media/3stepIconCRM.33f6a3f1.svg",revision:"33f6a3f1"},{url:"/_next/static/media/4devMobile.ab8eb3fe.svg",revision:"ab8eb3fe"},{url:"/_next/static/media/4stepIconCRM.63eff1e6.svg",revision:"63eff1e6"},{url:"/_next/static/media/5devMobile.95512393.svg",revision:"95512393"},{url:"/_next/static/media/5stepIconCRM.ca5b2925.svg",revision:"ca5b2925"},{url:"/_next/static/media/6devMobile.2e5520f3.svg",revision:"2e5520f3"},{url:"/_next/static/media/6stepIconCRM.c2200425.svg",revision:"c2200425"},{url:"/_next/static/media/ArrowPrevGray.b5a11580.svg",revision:"b5a11580"},{url:"/_next/static/media/GothamProBlack.264f28c8.ttf",revision:"264f28c8"},{url:"/_next/static/media/GothamProBlack.4a2d3a0a.eot",revision:"4a2d3a0a"},{url:"/_next/static/media/GothamProBlack.76cd0db7.woff",revision:"76cd0db7"},{url:"/_next/static/media/GothamProBold.0483dd98.eot",revision:"0483dd98"},{url:"/_next/static/media/GothamProBold.0858cd0f.woff",revision:"0858cd0f"},{url:"/_next/static/media/GothamProBold.18fb9230.ttf",revision:"18fb9230"},{url:"/_next/static/media/GothamProLight.8e45c519.woff",revision:"8e45c519"},{url:"/_next/static/media/GothamProLight.8f9025ae.ttf",revision:"8f9025ae"},{url:"/_next/static/media/GothamProLight.aafb6ad1.eot",revision:"aafb6ad1"},{url:"/_next/static/media/GothamProMedium.575e7265.ttf",revision:"575e7265"},{url:"/_next/static/media/GothamProMedium.9eb3147d.eot",revision:"9eb3147d"},{url:"/_next/static/media/GothamProMedium.d53f0a9a.woff",revision:"d53f0a9a"},{url:"/_next/static/media/GothamProRegular.29fc9a17.woff",revision:"29fc9a17"},{url:"/_next/static/media/GothamProRegular.c25d4c22.ttf",revision:"c25d4c22"},{url:"/_next/static/media/GothamProRegular.d4f9d5ae.eot",revision:"d4f9d5ae"},{url:"/_next/static/media/bc-mini-seo.6e6a58c0.WebP",revision:"6e6a58c0"},{url:"/_next/static/media/blank-about.c47a9af8.svg",revision:"c47a9af8"},{url:"/_next/static/media/calendar.5a50ee51.svg",revision:"5a50ee51"},{url:"/_next/static/media/circle.c9e0cf83.svg",revision:"c9e0cf83"},{url:"/_next/static/media/cloud-grid.6cd61614.svg",revision:"6cd61614"},{url:"/_next/static/media/contract.349fe7b1.svg",revision:"349fe7b1"},{url:"/_next/static/media/darts.2e67f1a9.WebP",revision:"2e67f1a9"},{url:"/_next/static/media/dev-first.c2917dbd.svg",revision:"c2917dbd"},{url:"/_next/static/media/dev-fourth.65abc56c.svg",revision:"65abc56c"},{url:"/_next/static/media/dev-sixth.0d1cb3af.svg",revision:"0d1cb3af"},{url:"/_next/static/media/dev-third.89b6d0ff.svg",revision:"89b6d0ff"},{url:"/_next/static/media/dev.-second.4fa7d632.svg",revision:"4fa7d632"},{url:"/_next/static/media/exit-modal.794f74ea.svg",revision:"794f74ea"},{url:"/_next/static/media/female-bg.ae620afb.WebP",revision:"ae620afb"},{url:"/_next/static/media/gears.54fa9627.svg",revision:"54fa9627"},{url:"/_next/static/media/grey-bg-right-itemsvg.d63d0a89.svg",revision:"d63d0a89"},{url:"/_next/static/media/grey-item-bg-left.7fa4d169.svg",revision:"7fa4d169"},{url:"/_next/static/media/hero-bg.f5ba7e4a.WebP",revision:"f5ba7e4a"},{url:"/_next/static/media/it-bgjpg.159d59a7.WebP",revision:"159d59a7"},{url:"/_next/static/media/key-seo-veni.95b6b544.svg",revision:"bcaea7bd11ca8e9652eec46468b483e5"},{url:"/_next/static/media/keys-seo-auto.a57701e8.svg",revision:"2210c8617e42267e17f5099628053de3"},{url:"/_next/static/media/keys-seo-eco.3bf373e7.svg",revision:"6b54c2d0f46b86259114f9ab59b83ea7"},{url:"/_next/static/media/keys-seo-lumar.1bc21dc8.svg",revision:"f2eac3bec46c241ccec4fdfde923b78a"},{url:"/_next/static/media/keys-seo-stroy.9cd9ae13.svg",revision:"ee44ece12427ab488e716e5013ebc1e6"},{url:"/_next/static/media/left-bg-pink.0c28f2aa.svg",revision:"0c28f2aa"},{url:"/_next/static/media/left-slide-review.3e7fa9f5.svg",revision:"3e7fa9f5"},{url:"/_next/static/media/lider-bg.b29cc453.WebP",revision:"b29cc453"},{url:"/_next/static/media/literals.7a497415.svg",revision:"7a497415"},{url:"/_next/static/media/logo-header.16730ffb.svg",revision:"16730ffb"},{url:"/_next/static/media/mac-grid.a60e1d4d.svg",revision:"a60e1d4d"},{url:"/_next/static/media/mailRight.f2e269e5.WebP",revision:"f2e269e5"},{url:"/_next/static/media/mainLeft.9c5d4390.WebP",revision:"9c5d4390"},{url:"/_next/static/media/male-bg.ddf8c21c.WebP",revision:"ddf8c21c"},{url:"/_next/static/media/market-grid.7cc34089.svg",revision:"7cc34089"},{url:"/_next/static/media/marketplace-img.32b525d1.svg",revision:"32b525d1"},{url:"/_next/static/media/mini-app-bg.3daafe1a.svg",revision:"3daafe1a"},{url:"/_next/static/media/miniPhone.eebf1a06.WebP",revision:"2d524e146781f26a0f097f3c982bd292"},{url:"/_next/static/media/mobile-hand.c5c4ae17.WebP",revision:"c5c4ae17"},{url:"/_next/static/media/op-right-offer.5f70cd54.svg",revision:"5f70cd54"},{url:"/_next/static/media/right-bg-pink.522fd7a8.svg",revision:"522fd7a8"},{url:"/_next/static/media/search-big.e608ea82.svg",revision:"e608ea82"},{url:"/_next/static/media/search.a2d00657.svg",revision:"a2d00657"},{url:"/_next/static/media/seo-mini.a7185d8a.svg",revision:"a7185d8a"},{url:"/_next/static/media/seo-report.fba4159d.WebP",revision:"fba4159d"},{url:"/_next/static/media/seoRight.0d6507ba.svg",revision:"0d6507ba"},{url:"/_next/static/media/site-grid.7ffacd73.svg",revision:"7ffacd73"},{url:"/_next/static/media/visit-card-grid.5ea50dbf.svg",revision:"5ea50dbf"},{url:"/_offline",revision:"F585mL9TmWoZOGaqcgLZ0"},{url:"/icon-192x192.png",revision:"a38f649dc4351240c0eb0f813d2cdb57"},{url:"/icon-256x256.png",revision:"f88fc9eca3664e8a79ebce956f7dff57"},{url:"/icon-384x384.png",revision:"5074cce8149b69bddce57721a472f422"},{url:"/icon-512x512.png",revision:"4e55d5910bd5c1e6f4b2c1b72ebe7439"},{url:"/img/0.WebP",revision:"19273da9db0bf16ffc68c5cdb759c7f7"},{url:"/img/0_lmwjv.WebP",revision:"19273da9db0bf16ffc68c5cdb759c7f7"},{url:"/img/0_oumup.WebP",revision:"19273da9db0bf16ffc68c5cdb759c7f7"},{url:"/img/0_oumup_70sae.WebP",revision:"19273da9db0bf16ffc68c5cdb759c7f7"},{url:"/img/0_ppv7h.WebP",revision:"19273da9db0bf16ffc68c5cdb759c7f7"},{url:"/img/0_xzj96.WebP",revision:"19273da9db0bf16ffc68c5cdb759c7f7"},{url:"/img/1acovtor.WebP",revision:"e15c33bfc26be8f2b2a02d856503d012"},{url:"/img/1crm.WebP",revision:"bbbfe7d27598e4886b812ad575686d45"},{url:"/img/1crm_2chhu.WebP",revision:"bbbfe7d27598e4886b812ad575686d45"},{url:"/img/1crm_2chhu_4e0tw.WebP",revision:"bbbfe7d27598e4886b812ad575686d45"},{url:"/img/1crm_2chhu_4e0tw_169fe.WebP",revision:"bbbfe7d27598e4886b812ad575686d45"},{url:"/img/1crm_5xtni.WebP",revision:"bbbfe7d27598e4886b812ad575686d45"},{url:"/img/1crm_5xtni_3nfbu.WebP",revision:"bbbfe7d27598e4886b812ad575686d45"},{url:"/img/1crm_5xtni_3nfbu_p6755.WebP",revision:"bbbfe7d27598e4886b812ad575686d45"},{url:"/img/1crm_5xtni_v4tzl.WebP",revision:"bbbfe7d27598e4886b812ad575686d45"},{url:"/img/1crm_5xtni_zyv3e.WebP",revision:"bbbfe7d27598e4886b812ad575686d45"},{url:"/img/1crm_ni64b.WebP",revision:"bbbfe7d27598e4886b812ad575686d45"},{url:"/img/1crm_ni64b_gm61i.WebP",revision:"bbbfe7d27598e4886b812ad575686d45"},{url:"/img/1crm_sspsl.WebP",revision:"bbbfe7d27598e4886b812ad575686d45"},{url:"/img/1crm_vbblk.WebP",revision:"bbbfe7d27598e4886b812ad575686d45"},{url:"/img/1crm_vbblk_okhv7.WebP",revision:"bbbfe7d27598e4886b812ad575686d45"},{url:"/img/1devMobile.svg",revision:"c2c4e0d9a58f3846a7d79edc97426d32"},{url:"/img/1estetic.WebP",revision:"1567b8f0e3aa6b0228d5320978a0416d"},{url:"/img/1estetic_vo9vd.WebP",revision:"1567b8f0e3aa6b0228d5320978a0416d"},{url:"/img/1estetic_vo9vd_hk9bq.WebP",revision:"1567b8f0e3aa6b0228d5320978a0416d"},{url:"/img/1estetic_vo9vd_iberd.WebP",revision:"1567b8f0e3aa6b0228d5320978a0416d"},{url:"/img/1estetic_vo9vd_s0um6.WebP",revision:"1567b8f0e3aa6b0228d5320978a0416d"},{url:"/img/1estetic_vo9vd_s0um6_f1h37.WebP",revision:"1567b8f0e3aa6b0228d5320978a0416d"},{url:"/img/1estetic_vo9vd_x3b4z.WebP",revision:"1567b8f0e3aa6b0228d5320978a0416d"},{url:"/img/1estetic_vo9vd_x3b4z_dptox.WebP",revision:"1567b8f0e3aa6b0228d5320978a0416d"},{url:"/img/1hockey.WebP",revision:"a033c97353a72af64ad5370eaa7483d6"},{url:"/img/1lumar.WebP",revision:"022c75c9fa5643ee42937b38b29f9229"},{url:"/img/1lumar_0afpy.WebP",revision:"022c75c9fa5643ee42937b38b29f9229"},{url:"/img/1lumar_0afpy_ctyhn.WebP",revision:"022c75c9fa5643ee42937b38b29f9229"},{url:"/img/1lumar_0afpy_cyotu.WebP",revision:"022c75c9fa5643ee42937b38b29f9229"},{url:"/img/1lumar_0afpy_dtng8.WebP",revision:"022c75c9fa5643ee42937b38b29f9229"},{url:"/img/1lumar_0afpy_dtng8_6ocxi.WebP",revision:"022c75c9fa5643ee42937b38b29f9229"},{url:"/img/1lumar_0afpy_dtng8_6ocxi_jyxud.WebP",revision:"022c75c9fa5643ee42937b38b29f9229"},{url:"/img/1lumar_0afpy_hw34x.WebP",revision:"022c75c9fa5643ee42937b38b29f9229"},{url:"/img/1lumar_0afpy_lb1r5.WebP",revision:"022c75c9fa5643ee42937b38b29f9229"},{url:"/img/1lumar_0afpy_lb1r5_8ems3.WebP",revision:"022c75c9fa5643ee42937b38b29f9229"},{url:"/img/1lumar_0afpy_xdmaz.WebP",revision:"022c75c9fa5643ee42937b38b29f9229"},{url:"/img/1lumar_2z4ux.WebP",revision:"022c75c9fa5643ee42937b38b29f9229"},{url:"/img/1lumar_3vi4v.WebP",revision:"022c75c9fa5643ee42937b38b29f9229"},{url:"/img/1lumar_4y8qt.WebP",revision:"022c75c9fa5643ee42937b38b29f9229"},{url:"/img/1lumar_7fo7f.WebP",revision:"022c75c9fa5643ee42937b38b29f9229"},{url:"/img/1lumar_7fo7f_k7v3k.WebP",revision:"022c75c9fa5643ee42937b38b29f9229"},{url:"/img/1lumar_8j8fd.WebP",revision:"022c75c9fa5643ee42937b38b29f9229"},{url:"/img/1lumar_8k1ap.WebP",revision:"022c75c9fa5643ee42937b38b29f9229"},{url:"/img/1lumar_8k1ap_pg1ut.WebP",revision:"022c75c9fa5643ee42937b38b29f9229"},{url:"/img/1lumar_e152o.WebP",revision:"022c75c9fa5643ee42937b38b29f9229"},{url:"/img/1lumar_ea04d.WebP",revision:"022c75c9fa5643ee42937b38b29f9229"},{url:"/img/1lumar_fp1y4.WebP",revision:"022c75c9fa5643ee42937b38b29f9229"},{url:"/img/1lumar_hoadw.WebP",revision:"022c75c9fa5643ee42937b38b29f9229"},{url:"/img/1lumar_hoadw_167nk.WebP",revision:"022c75c9fa5643ee42937b38b29f9229"},{url:"/img/1lumar_liv2t.WebP",revision:"022c75c9fa5643ee42937b38b29f9229"},{url:"/img/1lumar_q8zeq.WebP",revision:"022c75c9fa5643ee42937b38b29f9229"},{url:"/img/1lumar_ticwq.WebP",revision:"022c75c9fa5643ee42937b38b29f9229"},{url:"/img/1lumar_ufy6z.WebP",revision:"022c75c9fa5643ee42937b38b29f9229"},{url:"/img/1lumar_ulwms.WebP",revision:"022c75c9fa5643ee42937b38b29f9229"},{url:"/img/1slide.WebP",revision:"9d92883f89b7f25632808ae4f8f17884"},{url:"/img/1stepIconCRM.svg",revision:"c4c0d4de9003246d8c698d3b86e38a12"},{url:"/img/1stroimat.WebP",revision:"a1b78e969692dd273ce77401754cf780"},{url:"/img/1stroimat_eyqy4.WebP",revision:"a1b78e969692dd273ce77401754cf780"},{url:"/img/1stroimat_ltyz9.WebP",revision:"a1b78e969692dd273ce77401754cf780"},{url:"/img/1stroimat_qo0fs.WebP",revision:"a1b78e969692dd273ce77401754cf780"},{url:"/img/1stroimat_u870a.WebP",revision:"a1b78e969692dd273ce77401754cf780"},{url:"/img/2.WebP",revision:"62bf2bf8dc89ffd520ccaff5b7a4edda"},{url:"/img/2_n8bte.WebP",revision:"62bf2bf8dc89ffd520ccaff5b7a4edda"},{url:"/img/2acovtor.WebP",revision:"2089aa5d62330fe58f8a9d83a91394e9"},{url:"/img/2crm.WebP",revision:"3cec1b178d0c0f23260a124abc0ee08d"},{url:"/img/2devMobile.svg",revision:"55fb1c396a2bd83844738dd45705cb9f"},{url:"/img/2estetic.WebP",revision:"99ab32c1075bbaa2cf0d1db4fc556fd7"},{url:"/img/2estetic_1ivez.WebP",revision:"99ab32c1075bbaa2cf0d1db4fc556fd7"},{url:"/img/2estetic_1ivez_2z3tn.WebP",revision:"99ab32c1075bbaa2cf0d1db4fc556fd7"},{url:"/img/2estetic_1ivez_5sss7.WebP",revision:"99ab32c1075bbaa2cf0d1db4fc556fd7"},{url:"/img/2estetic_1ivez_a5bnt.WebP",revision:"99ab32c1075bbaa2cf0d1db4fc556fd7"},{url:"/img/2hockey.WebP",revision:"54c266520357511ea22c6bf61377b730"},{url:"/img/2hockey_4vlwd.WebP",revision:"54c266520357511ea22c6bf61377b730"},{url:"/img/2hockey_e3seg.WebP",revision:"54c266520357511ea22c6bf61377b730"},{url:"/img/2hockey_e3seg_8sn8x.WebP",revision:"54c266520357511ea22c6bf61377b730"},{url:"/img/2hockey_euq4c.WebP",revision:"54c266520357511ea22c6bf61377b730"},{url:"/img/2hockey_euq4c_g6z87.WebP",revision:"54c266520357511ea22c6bf61377b730"},{url:"/img/2lumar.WebP",revision:"3af7a465f43b85741400b971dc5fb279"},{url:"/img/2stepIconCRM.svg",revision:"4e8bd1f66b718e4e917df8f4c62d7f52"},{url:"/img/2stroimat.WebP",revision:"e4114b8147ce7496257a5dcffeff9f25"},{url:"/img/2stroimat_9ingr.WebP",revision:"e4114b8147ce7496257a5dcffeff9f25"},{url:"/img/3acovtor.WebP",revision:"f8f491d611046f94f969a988d64e8ee1"},{url:"/img/3crm.WebP",revision:"0c8775b7bced831366f3193947f4cdfd"},{url:"/img/3devMobile.svg",revision:"af9cafcc13d6b4e8343d5b53b561f441"},{url:"/img/3estetic.WebP",revision:"30d147cb027e7b75dac5144269d0bf23"},{url:"/img/3estetic_2z7y7.WebP",revision:"30d147cb027e7b75dac5144269d0bf23"},{url:"/img/3hockey.WebP",revision:"e779078309e75c3976093ac9a6bbe2d4"},{url:"/img/3lumar.WebP",revision:"4c6a6032e5050632c5394097192138ee"},{url:"/img/3stepIconCRM.svg",revision:"4562986cc9f9ff54cb7e7a8cb04ac0c5"},{url:"/img/3stroimat.WebP",revision:"f91f73176380b60905350e3ccce380ac"},{url:"/img/4acovtor.WebP",revision:"27c2b80d26500ff0533ad73c7143c5dc"},{url:"/img/4crm.WebP",revision:"87d81aea33091d8a86394a60d1fc9182"},{url:"/img/4devMobile.svg",revision:"4a933364073a2af4f4cb3157de53549a"},{url:"/img/4estetic.WebP",revision:"f3d5eb63dbffa1fa91bcffac8cdcb2fa"},{url:"/img/4hockey.WebP",revision:"c2a1aa8b98a75cdc8fd6232eae48c67e"},{url:"/img/4lumar.WebP",revision:"92c96b01fc27e117ff20ff8dba1d8720"},{url:"/img/4stepIconCRM.svg",revision:"cc0e473675dc569f28b00e424a36cb66"},{url:"/img/4stroimat.WebP",revision:"335e4a90e37c092a66a65d42d9f73548"},{url:"/img/4stroimat_8yep4.WebP",revision:"335e4a90e37c092a66a65d42d9f73548"},{url:"/img/5acovtor.WebP",revision:"8e7354b38a45a7701a2fd394510f5a53"},{url:"/img/5crm.WebP",revision:"6e63a7ac2aa7f0b157be28ffc5b148da"},{url:"/img/5devMobile.svg",revision:"a88f0908abacc30137d6cf344e0d70f7"},{url:"/img/5estetic.WebP",revision:"84bd2d1be63cce3e6c8e10898a836e65"},{url:"/img/5hockey.WebP",revision:"3d9360ba4fc017b2fb963cdec00950fb"},{url:"/img/5lumar.WebP",revision:"2e3525fbc440bd2a17428a31415f8cbc"},{url:"/img/5stepIconCRM.svg",revision:"d6bf5da7b635e3936e4d1bbe488ed81d"},{url:"/img/5stroimat.WebP",revision:"c8d98e26e3500a2fc629b5f684e571cd"},{url:"/img/6acovtor.WebP",revision:"dfe901a2e752118c947fce93ff2ac5dc"},{url:"/img/6crm.WebP",revision:"1fdac6b1596413bcf9e01ddfffa73792"},{url:"/img/6devMobile.svg",revision:"0c265dcbee3015b439121fe804a46445"},{url:"/img/6estetic.WebP",revision:"a6e2d057b8d145f2588d2bdd5bcc4754"},{url:"/img/6hockey.WebP",revision:"4a3c4062ffc8d1689b9d1382d426415b"},{url:"/img/6lumar.WebP",revision:"b80be21259ba7df7663b4ec1fa55bc41"},{url:"/img/6stepIconCRM.svg",revision:"9aaac904354143abf1a67eaf55a1e354"},{url:"/img/6stroimat.WebP",revision:"979e62c9ed32a6f9b60f119fdf14aca6"},{url:"/img/ArrowPrevGray.svg",revision:"26698c5d90aeabe0fbeeab1a4c74e2bf"},{url:"/img/DizNSkAW0AEjNjz (1)_kinsn.jpg",revision:"63e1b7f1bc477d8d8367afca5d5d152b"},{url:"/img/active-arrow-slide.svg",revision:"32f172a2ea9a1316faa8924e8d09a8f4"},{url:"/img/app1.WebP",revision:"67743e0a7ec765ed7fdd962bc713c08d"},{url:"/img/app2.WebP",revision:"83f3f5f14a1dd4d36ebb1c7f73759d30"},{url:"/img/app3.WebP",revision:"cb629383fb9854e8169daf302c51436f"},{url:"/img/app4.WebP",revision:"ce8e837269c3291e19087a4d8b2aaeb4"},{url:"/img/app5.WebP",revision:"0ee6934478ae356adc8c9d5af378776c"},{url:"/img/app6.WebP",revision:"5869bb82876da53555f13582f5e93660"},{url:"/img/arrNextRev.svg",revision:"32f172a2ea9a1316faa8924e8d09a8f4"},{url:"/img/arrow-active-header.svg",revision:"962a3b7b73170d558208796c344d34fb"},{url:"/img/arrow-down.svg",revision:"fb855128786db26e287d4659717ccf53"},{url:"/img/arrow-slide.svg",revision:"e4b080332c4357a67ac7fc537477642d"},{url:"/img/auto-estetica.svg",revision:"799a1a036bfeb0f36875376c1318b093"},{url:"/img/auto-gadjets.WebP",revision:"a2ea796c167c6268a0bae71f44edc463"},{url:"/img/bc-mini-seo.WebP",revision:"4e71039a4499dd61c45a1a0a570faac8"},{url:"/img/black-gadjets-block.WebP",revision:"73dfffd101ea8b0344ae79762c574559"},{url:"/img/black-gadjets-block_zfzas.WebP",revision:"73dfffd101ea8b0344ae79762c574559"},{url:"/img/blank-about.svg",revision:"f34a1e69239f05732dfb5e4a3dd976b8"},{url:"/img/calendar.svg",revision:"0b2b4a288219e34abf458e6b14117333"},{url:"/img/circle-contract-1.WebP",revision:"fa3296011d93a3b0625e109cb85a4b2d"},{url:"/img/circle-contract.WebP",revision:"fa3296011d93a3b0625e109cb85a4b2d"},{url:"/img/circle-contract_a8wio.WebP",revision:"fa3296011d93a3b0625e109cb85a4b2d"},{url:"/img/circle-contract_b483o.WebP",revision:"fa3296011d93a3b0625e109cb85a4b2d"},{url:"/img/circle-cubs-1.WebP",revision:"6bcb6a31717d50b723298a795aa0fd8c"},{url:"/img/circle-cubs.WebP",revision:"6bcb6a31717d50b723298a795aa0fd8c"},{url:"/img/circle-cubs_7amds.WebP",revision:"6bcb6a31717d50b723298a795aa0fd8c"},{url:"/img/circle-cubs_7oezq.WebP",revision:"6bcb6a31717d50b723298a795aa0fd8c"},{url:"/img/circle-cubs_cjri8.WebP",revision:"6bcb6a31717d50b723298a795aa0fd8c"},{url:"/img/circle-cubs_fq4i6.WebP",revision:"6bcb6a31717d50b723298a795aa0fd8c"},{url:"/img/circle-cubs_guce2.WebP",revision:"6bcb6a31717d50b723298a795aa0fd8c"},{url:"/img/circle-cubs_id7rd.WebP",revision:"6bcb6a31717d50b723298a795aa0fd8c"},{url:"/img/circle-cubs_mj64n.WebP",revision:"6bcb6a31717d50b723298a795aa0fd8c"},{url:"/img/circle-cubs_p0j6z.WebP",revision:"6bcb6a31717d50b723298a795aa0fd8c"},{url:"/img/circle-cubs_p0j6z_mq80j.WebP",revision:"6bcb6a31717d50b723298a795aa0fd8c"},{url:"/img/circle-cubs_pdy13.WebP",revision:"6bcb6a31717d50b723298a795aa0fd8c"},{url:"/img/circle-cubs_rytvm.WebP",revision:"6bcb6a31717d50b723298a795aa0fd8c"},{url:"/img/circle-cubs_vajal.WebP",revision:"6bcb6a31717d50b723298a795aa0fd8c"},{url:"/img/circle-cubs_vdx23.WebP",revision:"6bcb6a31717d50b723298a795aa0fd8c"},{url:"/img/circle-cubs_x1sea.WebP",revision:"6bcb6a31717d50b723298a795aa0fd8c"},{url:"/img/circle-cubs_yc6o5.WebP",revision:"6bcb6a31717d50b723298a795aa0fd8c"},{url:"/img/circle-mac-1.WebP",revision:"d43b5a92d9907326c45317a7768def53"},{url:"/img/circle-mac.WebP",revision:"d43b5a92d9907326c45317a7768def53"},{url:"/img/circle-phone.WebP",revision:"f610340940e507046ccc1b12403cfaf2"},{url:"/img/circle.svg",revision:"f8371f8f2cb5232b33a9bb75bd801f27"},{url:"/img/cloud-grid.svg",revision:"863088d5855e7c814a4bdfa7ade48dad"},{url:"/img/contract.svg",revision:"f76808b1eb99e47ae15384c1a665703d"},{url:"/img/crm-control.svg",revision:"b459b3dbd3c41d4d8618573f43d15458"},{url:"/img/crm-design.svg",revision:"19ea735f2e88b07883874b0c05083b4b"},{url:"/img/crm-int.svg",revision:"fb036f5eb56e469e91afaa0799d27884"},{url:"/img/crm-screen.svg",revision:"571d6421c3ddffcc8ec2125221d8f16f"},{url:"/img/crm-settings.svg",revision:"a8f2a902c1f765d15b2826631f832fad"},{url:"/img/crm-w.svg",revision:"ab604e77e229d8e6a6f6f120e28a7564"},{url:"/img/darts.WebP",revision:"d16543c2373495da33e7db4e20d70e37"},{url:"/img/darts_05oh0.WebP",revision:"d16543c2373495da33e7db4e20d70e37"},{url:"/img/darts_18ejf.WebP",revision:"d16543c2373495da33e7db4e20d70e37"},{url:"/img/darts_adet6.WebP",revision:"d16543c2373495da33e7db4e20d70e37"},{url:"/img/darts_adet6_mg7f7.WebP",revision:"d16543c2373495da33e7db4e20d70e37"},{url:"/img/dev-fifth.svg",revision:"54a607db236536f59b1bf0c83ff129c8"},{url:"/img/dev-first.svg",revision:"1ca7a9b1997d4090639ac46d179ee318"},{url:"/img/dev-fourth.svg",revision:"6d6400b849084addf65cfebf669f1f53"},{url:"/img/dev-sixth.svg",revision:"3e2362d2c287f43d5f3c09a2d39140d2"},{url:"/img/dev-third.svg",revision:"d27d4129ca1994f66146c239394cd34d"},{url:"/img/dev.-second.svg",revision:"bf3b22131af13a2f15ed439c6dcf8e77"},{url:"/img/eco-logo.svg",revision:"1264dd1e2f8c429e45fd71ddc7f1966f"},{url:"/img/ekvador.svg",revision:"b231fc9a4f63ac789ac2ca7bc5d03c24"},{url:"/img/exit-modal.svg",revision:"467ce0067807360a8b3baf2dad2e42c9"},{url:"/img/female-bg.WebP",revision:"a134997a8dfb9634d258a81d2b475faf"},{url:"/img/female-sort.WebP",revision:"468d8348ed1c297a3d2eeff862f6fddb"},{url:"/img/female-sort_t4c05.WebP",revision:"468d8348ed1c297a3d2eeff862f6fddb"},{url:"/img/gears.svg",revision:"02ba0d96adf88961d50b371774f900d7"},{url:"/img/gps-pink.svg",revision:"bd5759acff0c183ca9b8d95c88493b92"},{url:"/img/graffik1.svg",revision:"c96b8ce9b6f34e1f521168d37421c556"},{url:"/img/grey-bg-right-itemsvg.svg",revision:"0431db7890ab8ea0f8cbcfff8a16efb0"},{url:"/img/grey-item-bg-left.svg",revision:"e2ea2164a3ec7af6b153190bb8fcff21"},{url:"/img/greyBigLogo.svg",revision:"28b4515bebdd977d2915594dae8aaaa4"},{url:"/img/headphones-pink.svg",revision:"6c181c7ab71d1cc578b577b7d32ebd5d"},{url:"/img/hero-bg.WebP",revision:"72abd1bb7bddc94ef42fbb360bd07c47"},{url:"/img/hero-bg_nayki.WebP",revision:"72abd1bb7bddc94ef42fbb360bd07c47"},{url:"/img/hockey-logo.svg",revision:"e09d76437bd0df5080249d34e074b474"},{url:"/img/home.svg",revision:"105054f14ee221de5be6b4a49cea3615"},{url:"/img/it-bgjpg.WebP",revision:"bcf57fbdf4d41d82e60e7117adaca076"},{url:"/img/key-seo-veni.svg",revision:"bcaea7bd11ca8e9652eec46468b483e5"},{url:"/img/keys-auto-logo.svg",revision:"799a1a036bfeb0f36875376c1318b093"},{url:"/img/keys-crm-logo.svg",revision:"64d2f7c966e7e16d37c6d6aa48c2ab94"},{url:"/img/keys-crm-red.webp",revision:"142cbf604df68c9c23d44c3cfde222cd"},{url:"/img/keys-eco-logo.svg",revision:"1264dd1e2f8c429e45fd71ddc7f1966f"},{url:"/img/keys-hockey-logo.svg",revision:"e09d76437bd0df5080249d34e074b474"},{url:"/img/keys-llumar-logo.svg",revision:"efe346b306c47a94c910b9e441c7cdc0"},{url:"/img/keys-mobile-logo.svg",revision:"bd23bbfabe3b17d34f8528f242dbeb06"},{url:"/img/keys-phones-blue.svg",revision:"102a9b18d0aaa73d087af7f60e597a82"},{url:"/img/keys-seo-auto.svg",revision:"2210c8617e42267e17f5099628053de3"},{url:"/img/keys-seo-eco.svg",revision:"6b54c2d0f46b86259114f9ab59b83ea7"},{url:"/img/keys-seo-lumar.svg",revision:"f2eac3bec46c241ccec4fdfde923b78a"},{url:"/img/keys-seo-stroy.svg",revision:"ee44ece12427ab488e716e5013ebc1e6"},{url:"/img/keys-stroy-logo.svg",revision:"105054f14ee221de5be6b4a49cea3615"},{url:"/img/left-bg-pink.svg",revision:"803f2cae45e8335b42def5c8e855ee16"},{url:"/img/left-slide-review.svg",revision:"e4b080332c4357a67ac7fc537477642d"},{url:"/img/lider-bg.WebP",revision:"7b3e5c0e25adc06e9d4d55a8133c3d85"},{url:"/img/lider-bg_8wa6l.WebP",revision:"7b3e5c0e25adc06e9d4d55a8133c3d85"},{url:"/img/lider-bg_pt67e.WebP",revision:"7b3e5c0e25adc06e9d4d55a8133c3d85"},{url:"/img/lider-bg_vbrxx.WebP",revision:"7b3e5c0e25adc06e9d4d55a8133c3d85"},{url:"/img/literals.svg",revision:"65c02ee88d8715402a97f97bba44ad19"},{url:"/img/llumar-logo-crm.svg",revision:"105187a333e6db4d61b6065dfd7d64c4"},{url:"/img/llumar-logo.svg",revision:"edfd7ff4684aeb9efe927c17055e0390"},{url:"/img/llumar-pad.WebP",revision:"2c59be1dc4ca71e567b244b0553f0c68"},{url:"/img/llumar-pad_7u6kj.WebP",revision:"2c59be1dc4ca71e567b244b0553f0c68"},{url:"/img/llumar-pad_h20ru.WebP",revision:"2c59be1dc4ca71e567b244b0553f0c68"},{url:"/img/llumar-pad_h20ru_mo5d2.WebP",revision:"2c59be1dc4ca71e567b244b0553f0c68"},{url:"/img/logo-blue.svg",revision:"bc7b745961d913516347370e67bf312b"},{url:"/img/logo-evo.svg",revision:"b231fc9a4f63ac789ac2ca7bc5d03c24"},{url:"/img/logo-header.svg",revision:"ae4654bd163c0d52892c5ee5d264283b"},{url:"/img/mac-grid.svg",revision:"7c54f179b63910ec2e2da17eb065fbb8"},{url:"/img/mailRight.WebP",revision:"04dda2ca7d693bc93677481f1f19f15b"},{url:"/img/mailRight_4970s.WebP",revision:"04dda2ca7d693bc93677481f1f19f15b"},{url:"/img/mainLeft.WebP",revision:"a937d721fa0bd369fce1de2788350a0b"},{url:"/img/male-bg.WebP",revision:"1004a9ebdfd632de8bf5a7fca7aada34"},{url:"/img/map-placemark.svg",revision:"c3a55b9615f34e5fc94cd9485bf323db"},{url:"/img/market-grid.svg",revision:"98f8ab9e2f8714801aea9969d526afcf"},{url:"/img/marketplace-img.svg",revision:"28b4515bebdd977d2915594dae8aaaa4"},{url:"/img/mini-app-bg.svg",revision:"9faaeae0801b475169789fd45fbe4e2f"},{url:"/img/miniPhone.WebP",revision:"2d524e146781f26a0f097f3c982bd292"},{url:"/img/mob-analitic.svg",revision:"317a309df7840e4fc002506c0f5bdd82"},{url:"/img/mob-crm.svg",revision:"0a2bf80bc195db1c9ca2215c128dfa73"},{url:"/img/mob-design.svg",revision:"b30a6befe77de028c4381d1744b1bd0a"},{url:"/img/mob-develop.svg",revision:"9c5a3ad93e73c59ce8891ea5a2f4d500"},{url:"/img/mob-phones.svg",revision:"190e0c801f22f0e3135293b383ac5438"},{url:"/img/mob-project.svg",revision:"0a70be904a4d098dffc47d91803d5af2"},{url:"/img/mob-seo.svg",revision:"61dafcc5e3cbf5c7bc816172f89e51dc"},{url:"/img/mob-test.svg",revision:"2be5f2d0e6685e6651d1d00a97a03f3b"},{url:"/img/mobile-hand.WebP",revision:"fd13e1502634baa8512101750ef8b484"},{url:"/img/ok-arrow.svg",revision:"89802935de4f48d4d88ec73a55ed8995"},{url:"/img/op-right-offer.svg",revision:"4af5fe3f3e530ab58e6ec68a76acf0d4"},{url:"/img/orange-img-phone.WebP",revision:"87d13f87ec751b2756d7214388983b91"},{url:"/img/orange-img-phone_kukor.WebP",revision:"87d13f87ec751b2756d7214388983b91"},{url:"/img/orange-phone-block.WebP",revision:"3cc7eeeb09a5f15962c2bf5d3fa99659"},{url:"/img/orange-phone-block_b24l3.WebP",revision:"3cc7eeeb09a5f15962c2bf5d3fa99659"},{url:"/img/orange-phone-block_b24l3_faqe5.WebP",revision:"3cc7eeeb09a5f15962c2bf5d3fa99659"},{url:"/img/pad-hockey.WebP",revision:"9cc934441739d2e0ce404cc76a42b34f"},{url:"/img/pad-hockey_sd9pw.WebP",revision:"9cc934441739d2e0ce404cc76a42b34f"},{url:"/img/pad-hockey_sd9pw_db5v5.WebP",revision:"9cc934441739d2e0ce404cc76a42b34f"},{url:"/img/pad-hockey_ubzky.WebP",revision:"9cc934441739d2e0ce404cc76a42b34f"},{url:"/img/pad-keys.WebP",revision:"38c381084bc9b2fb64f8cbfb2b40b6f0"},{url:"/img/pad-keys_kjztf.WebP",revision:"38c381084bc9b2fb64f8cbfb2b40b6f0"},{url:"/img/pad-keys_qgy8e.WebP",revision:"38c381084bc9b2fb64f8cbfb2b40b6f0"},{url:"/img/phone-pink.svg",revision:"f34d90d1ac1a3b050e282dadadfea102"},{url:"/img/photoOfClient.WebP",revision:"a592c90cbb183ac47d6e02a6fcbb9d84"},{url:"/img/photoOfClient_w0svx.WebP",revision:"a592c90cbb183ac47d6e02a6fcbb9d84"},{url:"/img/pink-bg-left.svg",revision:"83179e6e50f466a3ab4cbe0830dc9c27"},{url:"/img/pink-bg-right.svg",revision:"35bbf4dd114945d03cd6543e4e84f350"},{url:"/img/right-bg-pink.svg",revision:"35bbf4dd114945d03cd6543e4e84f350"},{url:"/img/search-big.svg",revision:"0d6e235b7405dd6fdd4080d08876ff2c"},{url:"/img/search.svg",revision:"2cfd1b0399b6a287e02652bd5aa6122d"},{url:"/img/seo-calendar.svg",revision:"5d901118a6d25d45f858223bbde9c4ee"},{url:"/img/seo-clients.svg",revision:"ac09d163e57a33ce4bff6a729925ef27"},{url:"/img/seo-control.svg",revision:"fff811c3dfdc000e4940a6a2e7c90cf0"},{url:"/img/seo-count.svg",revision:"dc127f21ad8ad50c0e7b232e9c66c881"},{url:"/img/seo-key.svg",revision:"1d34615f87fb377ee2438660a5878fac"},{url:"/img/seo-links.svg",revision:"6c051ed49cee11d951634210d190fe0e"},{url:"/img/seo-mini.svg",revision:"a8b27f9f3016ffd72aca9e3861ab0c25"},{url:"/img/seo-month.WebP",revision:"15be9eef5cf361d01a2a25b77b0c3108"},{url:"/img/seo-ready.svg",revision:"cfed5d72d99cbc820c1b32925b87e643"},{url:"/img/seo-report-arrow.svg",revision:"9fbf3004cc864a237a98a796da46e2a0"},{url:"/img/seo-report.WebP",revision:"6ed19b7073339583c04daaff5950dfa5"},{url:"/img/seo-report_8n2g5.WebP",revision:"6ed19b7073339583c04daaff5950dfa5"},{url:"/img/seo-report_8n2g5_9650i.WebP",revision:"6ed19b7073339583c04daaff5950dfa5"},{url:"/img/seo-setting.svg",revision:"3af6df620704402725a70eac7138a985"},{url:"/img/seo-stonks.svg",revision:"7a5f2c7175aa2842a1ccc2d755fdf3b6"},{url:"/img/seo-text.svg",revision:"6469c0d6313f86919162020aabef9a69"},{url:"/img/seoLeft.svg",revision:"f3815b9c49a38159daeb364f729059d7"},{url:"/img/seoRight.svg",revision:"ff83e982d893f1f00be2705da475d60f"},{url:"/img/seoStable1.svg",revision:"ac09d163e57a33ce4bff6a729925ef27"},{url:"/img/seoStable2.svg",revision:"7a5f2c7175aa2842a1ccc2d755fdf3b6"},{url:"/img/seoStable3.svg",revision:"5d901118a6d25d45f858223bbde9c4ee"},{url:"/img/seoStable4.svg",revision:"dc127f21ad8ad50c0e7b232e9c66c881"},{url:"/img/site-grid.svg",revision:"1a065cd0fb68e120644145c1647ccbab"},{url:"/img/tg-active.svg",revision:"c8208b4fafa03cd4b3a944e10e0658ba"},{url:"/img/tg-footer-active.svg",revision:"ba10dece3f53f30ed61093f630b203e1"},{url:"/img/tg-footer.svg",revision:"47ce05d0e4c2762154d32a2fa6512624"},{url:"/img/tg.svg",revision:"518ea1d0a907841cc5729c01b6be402f"},{url:"/img/visit-card-grid.svg",revision:"2c8b722e07ce0a6ca942fd0fd341408d"},{url:"/img/whatsapp-active.svg",revision:"91f730b229230de55c46032e2c5102fe"},{url:"/img/whatsapp-footer-active.svg",revision:"803ca4bb618ba887930c1b94e9c3b360"},{url:"/img/whatsapp-footer.svg",revision:"89c4ad9744af15875cf8ca47bf2c9242"},{url:"/img/whatsapp.svg",revision:"6a9dab85c638177f249493e1ba242531"},{url:"/manifest.json",revision:"e776b1d6f90d0296aaaa65f5ea63d8a4"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:a,state:c})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
