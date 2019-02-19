(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{158:function(e,t){e.exports={body:"## Dan's movement 🏃\n\nIf you already read this article \"[Why My New Blog Isn’t on Medium](https://medium.com/@dan_abramov/why-my-new-blog-isnt-on-medium-3b280282fbae)\" by [Dan Abramov](https://twitter.com/dan_abramov) than You already knew that Dan moved to [Overreacted.io](https://overreacted.io/) instead of using Medium.com.\n\nI personally love the writing experience in Medium.com, but some of Dan's reasons is also happened to me.\n\nBefore building Blog 2.0 I already have my own Blog in top Wordpress platform in [mazipanneh.com](https://mazipanneh.com/blog/). But since I'm not familiar with Wordpress, the Blog is pretty far from my own expectations in term of *User Interface* (UI), Speed, and *Developer Experience* (DX). The good things is Wordpress already releasing it's [Gutenberg](https://github.com/WordPress/gutenberg) that giving so many improvement in the writing experience. After upgrade to Gutenberg from Classic Editor, I decide to leave Medium.com and write in Wordpress (again) and success writing some articles using Gutenberg. But I am not satisfy with the DX when using Wordpress, as a *Frontend Developer* that have poor skill in PHP.\n\n## Time for Vue 🕺\n\nI already worked with [Vue](https://vuejs.org/) in the past few years and falling in love with the DX. Recently I made [smesummit.id](https://www.smesummit.id/) and [Quran Offline](https://quran-offline.netlify.com/) using [Nuxt.js](https://nuxtjs.org/) - The Vue.js Framework. I prefer Nuxt because it's focus in delivering a better DX for Vue Developer. We can generate static website easier in Nuxt, Sitemap, PWA, Feed and many other cool things. After develop [smesummit.id](https://www.smesummit.id/) and [Quran Offline](https://quran-offline.netlify.com/), it give me more confidence to implement same approach to generate my own static blog using latest technology in Vue. The big problem is I never learn about using Nuxt as Blog generator, luckily I found this article \"[Website with blog and portfolio using Vue.js + Nuxt + Markdown](https://marinaaisa.com/blog/blog-using-vue-nuxt-markdown/)\" by [Marina Aísa](https://twitter.com/MarinaAisa) and she open the codes. Based on her article and after seeing the code, I creating this Blog 2.0.\n\nWith Blog 2.0, I have full control in my Blog. I can tweak the UI, improving page load speeds and adding new content easier than I ever imagine.\n\n## Unboxing 📦\n\nBehind this Blog 2.0, `nuxt@2.4.3` is installed as main framework that organize all the things. Adding `@nuxtjs/pwa`, `@nuxtjs/sitemap` and `nuxt-webfontloader` module to this Nuxt Application.\n\n[Prism.js](https://prismjs.com/) for syntax highlighter, [Vue Tiny Lazy Load](vue-tiny-lazyload-img) for lazy loading image using Intersection Observer API.\n\nFor UI, I only adding [modern-normalize](https://github.com/sindresorhus/modern-normalize) by [Sindre Sorhus](https://github.com/sindresorhus/) and craft from scratch for the UI layouting and styling. I highly inspired by simplicity UI in Dan's [Overreacted.io](https://overreacted.io/) and pick color scheme from [Dracula Theme](https://github.com/dracula/dracula-theme). I also pick some `helpers` from Dan's repo.\n\n## It's still Beta 🅱️\n\nIt's still beta, I even have no clue about Domain I should use for this Blog 2.0. This is just for proof of concept (POC) in developing static blog using Nuxt.js. Still far away from *perfecto*, but I believe this is a good baby step.\n\nIf you interest how this Blog 2.0 built, you can see the codes in this link: [https://github.com/mazipan/blog-2.0](https://github.com/mazipan/blog-2.0)\n\n",html:'<h2>Dan\'s movement 🏃</h2>\n<p>If you already read this article &quot;<a href="https://medium.com/@dan_abramov/why-my-new-blog-isnt-on-medium-3b280282fbae">Why My New Blog Isn’t on Medium</a>&quot; by <a href="https://twitter.com/dan_abramov">Dan Abramov</a> than You already knew that Dan moved to <a href="https://overreacted.io/">Overreacted.io</a> instead of using Medium.com.</p>\n<p>I personally love the writing experience in Medium.com, but some of Dan\'s reasons is also happened to me.</p>\n<p>Before building Blog 2.0 I already have my own Blog in top Wordpress platform in <a href="https://mazipanneh.com/blog/">mazipanneh.com</a>. But since I\'m not familiar with Wordpress, the Blog is pretty far from my own expectations in term of <em>User Interface</em> (UI), Speed, and <em>Developer Experience</em> (DX). The good things is Wordpress already releasing it\'s <a href="https://github.com/WordPress/gutenberg">Gutenberg</a> that giving so many improvement in the writing experience. After upgrade to Gutenberg from Classic Editor, I decide to leave Medium.com and write in Wordpress (again) and success writing some articles using Gutenberg. But I am not satisfy with the DX when using Wordpress, as a <em>Frontend Developer</em> that have poor skill in PHP.</p>\n<h2>Time for Vue 🕺</h2>\n<p>I already worked with <a href="https://vuejs.org/">Vue</a> in the past few years and falling in love with the DX. Recently I made <a href="https://www.smesummit.id/">smesummit.id</a> and <a href="https://quran-offline.netlify.com/">Quran Offline</a> using <a href="https://nuxtjs.org/">Nuxt.js</a> - The Vue.js Framework. I prefer Nuxt because it\'s focus in delivering a better DX for Vue Developer. We can generate static website easier in Nuxt, Sitemap, PWA, Feed and many other cool things. After develop <a href="https://www.smesummit.id/">smesummit.id</a> and <a href="https://quran-offline.netlify.com/">Quran Offline</a>, it give me more confidence to implement same approach to generate my own static blog using latest technology in Vue. The big problem is I never learn about using Nuxt as Blog generator, luckily I found this article &quot;<a href="https://marinaaisa.com/blog/blog-using-vue-nuxt-markdown/">Website with blog and portfolio using Vue.js + Nuxt + Markdown</a>&quot; by <a href="https://twitter.com/MarinaAisa">Marina Aísa</a> and she open the codes. Based on her article and after seeing the code, I creating this Blog 2.0.</p>\n<p>With Blog 2.0, I have full control in my Blog. I can tweak the UI, improving page load speeds and adding new content easier than I ever imagine.</p>\n<h2>Unboxing 📦</h2>\n<p>Behind this Blog 2.0, <code>nuxt@2.4.3</code> is installed as main framework that organize all the things. Adding <code>@nuxtjs/pwa</code>, <code>@nuxtjs/sitemap</code> and <code>nuxt-webfontloader</code> module to this Nuxt Application.</p>\n<p><a href="https://prismjs.com/">Prism.js</a> for syntax highlighter, <a href="vue-tiny-lazyload-img">Vue Tiny Lazy Load</a> for lazy loading image using Intersection Observer API.</p>\n<p>For UI, I only adding <a href="https://github.com/sindresorhus/modern-normalize">modern-normalize</a> by <a href="https://github.com/sindresorhus/">Sindre Sorhus</a> and craft from scratch for the UI layouting and styling. I highly inspired by simplicity UI in Dan\'s <a href="https://overreacted.io/">Overreacted.io</a> and pick color scheme from <a href="https://github.com/dracula/dracula-theme">Dracula Theme</a>. I also pick some <code>helpers</code> from Dan\'s repo.</p>\n<h2>It\'s still Beta 🅱️</h2>\n<p>It\'s still beta, I even have no clue about Domain I should use for this Blog 2.0. This is just for proof of concept (POC) in developing static blog using Nuxt.js. Still far away from <em>perfecto</em>, but I believe this is a good baby step.</p>\n<p>If you interest how this Blog 2.0 built, you can see the codes in this link: <a href="https://github.com/mazipan/blog-2.0">https://github.com/mazipan/blog-2.0</a></p>\n',attributes:{title:"Developing Blog 2.0 with Nuxt.js",slug:"blog-2.0-in-nuxtjs",date:"2019-02-19",minute2read:5,description:"Explaining how static site called Blog 2.0 was built using Nuxt.js"},vue:{render:"return function render() { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0) }",staticRenderFns:'return [function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'div\',{staticClass:"content-markdown"},[_c(\'h2\',[_vm._v("Dan\'s movement 🏃")]),_vm._v(" "),_c(\'p\',[_vm._v("If you already read this article \\""),_c(\'a\',{attrs:{"href":"https://medium.com/@dan_abramov/why-my-new-blog-isnt-on-medium-3b280282fbae"}},[_vm._v("Why My New Blog Isn’t on Medium")]),_vm._v("\\" by "),_c(\'a\',{attrs:{"href":"https://twitter.com/dan_abramov"}},[_vm._v("Dan Abramov")]),_vm._v(" than You already knew that Dan moved to "),_c(\'a\',{attrs:{"href":"https://overreacted.io/"}},[_vm._v("Overreacted.io")]),_vm._v(" instead of using Medium.com.")]),_vm._v(" "),_c(\'p\',[_vm._v("I personally love the writing experience in Medium.com, but some of Dan\'s reasons is also happened to me.")]),_vm._v(" "),_c(\'p\',[_vm._v("Before building Blog 2.0 I already have my own Blog in top Wordpress platform in "),_c(\'a\',{attrs:{"href":"https://mazipanneh.com/blog/"}},[_vm._v("mazipanneh.com")]),_vm._v(". But since I\'m not familiar with Wordpress, the Blog is pretty far from my own expectations in term of "),_c(\'em\',[_vm._v("User Interface")]),_vm._v(" (UI), Speed, and "),_c(\'em\',[_vm._v("Developer Experience")]),_vm._v(" (DX). The good things is Wordpress already releasing it\'s "),_c(\'a\',{attrs:{"href":"https://github.com/WordPress/gutenberg"}},[_vm._v("Gutenberg")]),_vm._v(" that giving so many improvement in the writing experience. After upgrade to Gutenberg from Classic Editor, I decide to leave Medium.com and write in Wordpress (again) and success writing some articles using Gutenberg. But I am not satisfy with the DX when using Wordpress, as a "),_c(\'em\',[_vm._v("Frontend Developer")]),_vm._v(" that have poor skill in PHP.")]),_vm._v(" "),_c(\'h2\',[_vm._v("Time for Vue 🕺")]),_vm._v(" "),_c(\'p\',[_vm._v("I already worked with "),_c(\'a\',{attrs:{"href":"https://vuejs.org/"}},[_vm._v("Vue")]),_vm._v(" in the past few years and falling in love with the DX. Recently I made "),_c(\'a\',{attrs:{"href":"https://www.smesummit.id/"}},[_vm._v("smesummit.id")]),_vm._v(" and "),_c(\'a\',{attrs:{"href":"https://quran-offline.netlify.com/"}},[_vm._v("Quran Offline")]),_vm._v(" using "),_c(\'a\',{attrs:{"href":"https://nuxtjs.org/"}},[_vm._v("Nuxt.js")]),_vm._v(" - The Vue.js Framework. I prefer Nuxt because it\'s focus in delivering a better DX for Vue Developer. We can generate static website easier in Nuxt, Sitemap, PWA, Feed and many other cool things. After develop "),_c(\'a\',{attrs:{"href":"https://www.smesummit.id/"}},[_vm._v("smesummit.id")]),_vm._v(" and "),_c(\'a\',{attrs:{"href":"https://quran-offline.netlify.com/"}},[_vm._v("Quran Offline")]),_vm._v(", it give me more confidence to implement same approach to generate my own static blog using latest technology in Vue. The big problem is I never learn about using Nuxt as Blog generator, luckily I found this article \\""),_c(\'a\',{attrs:{"href":"https://marinaaisa.com/blog/blog-using-vue-nuxt-markdown/"}},[_vm._v("Website with blog and portfolio using Vue.js + Nuxt + Markdown")]),_vm._v("\\" by "),_c(\'a\',{attrs:{"href":"https://twitter.com/MarinaAisa"}},[_vm._v("Marina Aísa")]),_vm._v(" and she open the codes. Based on her article and after seeing the code, I creating this Blog 2.0.")]),_vm._v(" "),_c(\'p\',[_vm._v("With Blog 2.0, I have full control in my Blog. I can tweak the UI, improving page load speeds and adding new content easier than I ever imagine.")]),_vm._v(" "),_c(\'h2\',[_vm._v("Unboxing 📦")]),_vm._v(" "),_c(\'p\',[_vm._v("Behind this Blog 2.0, "),_c(\'code\',{pre:true},[_vm._v("nuxt@2.4.3")]),_vm._v(" is installed as main framework that organize all the things. Adding "),_c(\'code\',{pre:true},[_vm._v("@nuxtjs/pwa")]),_vm._v(", "),_c(\'code\',{pre:true},[_vm._v("@nuxtjs/sitemap")]),_vm._v(" and "),_c(\'code\',{pre:true},[_vm._v("nuxt-webfontloader")]),_vm._v(" module to this Nuxt Application.")]),_vm._v(" "),_c(\'p\',[_c(\'a\',{attrs:{"href":"https://prismjs.com/"}},[_vm._v("Prism.js")]),_vm._v(" for syntax highlighter, "),_c(\'a\',{attrs:{"href":"vue-tiny-lazyload-img"}},[_vm._v("Vue Tiny Lazy Load")]),_vm._v(" for lazy loading image using Intersection Observer API.")]),_vm._v(" "),_c(\'p\',[_vm._v("For UI, I only adding "),_c(\'a\',{attrs:{"href":"https://github.com/sindresorhus/modern-normalize"}},[_vm._v("modern-normalize")]),_vm._v(" by "),_c(\'a\',{attrs:{"href":"https://github.com/sindresorhus/"}},[_vm._v("Sindre Sorhus")]),_vm._v(" and craft from scratch for the UI layouting and styling. I highly inspired by simplicity UI in Dan\'s "),_c(\'a\',{attrs:{"href":"https://overreacted.io/"}},[_vm._v("Overreacted.io")]),_vm._v(" and pick color scheme from "),_c(\'a\',{attrs:{"href":"https://github.com/dracula/dracula-theme"}},[_vm._v("Dracula Theme")]),_vm._v(". I also pick some "),_c(\'code\',{pre:true},[_vm._v("helpers")]),_vm._v(" from Dan\'s repo.")]),_vm._v(" "),_c(\'h2\',[_vm._v("It\'s still Beta 🅱️")]),_vm._v(" "),_c(\'p\',[_vm._v("It\'s still beta, I even have no clue about Domain I should use for this Blog 2.0. This is just for proof of concept (POC) in developing static blog using Nuxt.js. Still far away from "),_c(\'em\',[_vm._v("perfecto")]),_vm._v(", but I believe this is a good baby step.")]),_vm._v(" "),_c(\'p\',[_vm._v("If you interest how this Blog 2.0 built, you can see the codes in this link: "),_c(\'a\',{attrs:{"href":"https://github.com/mazipan/blog-2.0"}},[_vm._v("https://github.com/mazipan/blog-2.0")])])]) }]',component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=function(){var e=this.$createElement;this._self._c;return this._m(0)},this.$options.staticRenderFns=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content-markdown"},[n("h2",[e._v("Dan's movement 🏃")]),e._v(" "),n("p",[e._v('If you already read this article "'),n("a",{attrs:{href:"https://medium.com/@dan_abramov/why-my-new-blog-isnt-on-medium-3b280282fbae"}},[e._v("Why My New Blog Isn’t on Medium")]),e._v('" by '),n("a",{attrs:{href:"https://twitter.com/dan_abramov"}},[e._v("Dan Abramov")]),e._v(" than You already knew that Dan moved to "),n("a",{attrs:{href:"https://overreacted.io/"}},[e._v("Overreacted.io")]),e._v(" instead of using Medium.com.")]),e._v(" "),n("p",[e._v("I personally love the writing experience in Medium.com, but some of Dan's reasons is also happened to me.")]),e._v(" "),n("p",[e._v("Before building Blog 2.0 I already have my own Blog in top Wordpress platform in "),n("a",{attrs:{href:"https://mazipanneh.com/blog/"}},[e._v("mazipanneh.com")]),e._v(". But since I'm not familiar with Wordpress, the Blog is pretty far from my own expectations in term of "),n("em",[e._v("User Interface")]),e._v(" (UI), Speed, and "),n("em",[e._v("Developer Experience")]),e._v(" (DX). The good things is Wordpress already releasing it's "),n("a",{attrs:{href:"https://github.com/WordPress/gutenberg"}},[e._v("Gutenberg")]),e._v(" that giving so many improvement in the writing experience. After upgrade to Gutenberg from Classic Editor, I decide to leave Medium.com and write in Wordpress (again) and success writing some articles using Gutenberg. But I am not satisfy with the DX when using Wordpress, as a "),n("em",[e._v("Frontend Developer")]),e._v(" that have poor skill in PHP.")]),e._v(" "),n("h2",[e._v("Time for Vue 🕺")]),e._v(" "),n("p",[e._v("I already worked with "),n("a",{attrs:{href:"https://vuejs.org/"}},[e._v("Vue")]),e._v(" in the past few years and falling in love with the DX. Recently I made "),n("a",{attrs:{href:"https://www.smesummit.id/"}},[e._v("smesummit.id")]),e._v(" and "),n("a",{attrs:{href:"https://quran-offline.netlify.com/"}},[e._v("Quran Offline")]),e._v(" using "),n("a",{attrs:{href:"https://nuxtjs.org/"}},[e._v("Nuxt.js")]),e._v(" - The Vue.js Framework. I prefer Nuxt because it's focus in delivering a better DX for Vue Developer. We can generate static website easier in Nuxt, Sitemap, PWA, Feed and many other cool things. After develop "),n("a",{attrs:{href:"https://www.smesummit.id/"}},[e._v("smesummit.id")]),e._v(" and "),n("a",{attrs:{href:"https://quran-offline.netlify.com/"}},[e._v("Quran Offline")]),e._v(', it give me more confidence to implement same approach to generate my own static blog using latest technology in Vue. The big problem is I never learn about using Nuxt as Blog generator, luckily I found this article "'),n("a",{attrs:{href:"https://marinaaisa.com/blog/blog-using-vue-nuxt-markdown/"}},[e._v("Website with blog and portfolio using Vue.js + Nuxt + Markdown")]),e._v('" by '),n("a",{attrs:{href:"https://twitter.com/MarinaAisa"}},[e._v("Marina Aísa")]),e._v(" and she open the codes. Based on her article and after seeing the code, I creating this Blog 2.0.")]),e._v(" "),n("p",[e._v("With Blog 2.0, I have full control in my Blog. I can tweak the UI, improving page load speeds and adding new content easier than I ever imagine.")]),e._v(" "),n("h2",[e._v("Unboxing 📦")]),e._v(" "),n("p",[e._v("Behind this Blog 2.0, "),n("code",{pre:!0},[e._v("nuxt@2.4.3")]),e._v(" is installed as main framework that organize all the things. Adding "),n("code",{pre:!0},[e._v("@nuxtjs/pwa")]),e._v(", "),n("code",{pre:!0},[e._v("@nuxtjs/sitemap")]),e._v(" and "),n("code",{pre:!0},[e._v("nuxt-webfontloader")]),e._v(" module to this Nuxt Application.")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://prismjs.com/"}},[e._v("Prism.js")]),e._v(" for syntax highlighter, "),n("a",{attrs:{href:"vue-tiny-lazyload-img"}},[e._v("Vue Tiny Lazy Load")]),e._v(" for lazy loading image using Intersection Observer API.")]),e._v(" "),n("p",[e._v("For UI, I only adding "),n("a",{attrs:{href:"https://github.com/sindresorhus/modern-normalize"}},[e._v("modern-normalize")]),e._v(" by "),n("a",{attrs:{href:"https://github.com/sindresorhus/"}},[e._v("Sindre Sorhus")]),e._v(" and craft from scratch for the UI layouting and styling. I highly inspired by simplicity UI in Dan's "),n("a",{attrs:{href:"https://overreacted.io/"}},[e._v("Overreacted.io")]),e._v(" and pick color scheme from "),n("a",{attrs:{href:"https://github.com/dracula/dracula-theme"}},[e._v("Dracula Theme")]),e._v(". I also pick some "),n("code",{pre:!0},[e._v("helpers")]),e._v(" from Dan's repo.")]),e._v(" "),n("h2",[e._v("It's still Beta 🅱️")]),e._v(" "),n("p",[e._v("It's still beta, I even have no clue about Domain I should use for this Blog 2.0. This is just for proof of concept (POC) in developing static blog using Nuxt.js. Still far away from "),n("em",[e._v("perfecto")]),e._v(", but I believe this is a good baby step.")]),e._v(" "),n("p",[e._v("If you interest how this Blog 2.0 built, you can see the codes in this link: "),n("a",{attrs:{href:"https://github.com/mazipan/blog-2.0"}},[e._v("https://github.com/mazipan/blog-2.0")])])])}]}}}}}}]);