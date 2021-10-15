(this["webpackJsonpreact-movie"]=this["webpackJsonpreact-movie"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var i=c(0),s=c.n(i),n=c(16),r=c.n(n),a=c(10),o=(c(39),c(3)),l=(c(40),c(4)),j=c(1),d=function(){var e=Object(l.c)((function(e){return e})),t="/details";return void 0!==e.allMovies.detail&&(t="/details/"+e.allMovies.detail),Object(j.jsxs)("nav",{className:"navigation",children:[Object(j.jsx)(a.c,{to:"/firstReactApp/",children:"Movies"}),Object(j.jsx)(a.c,{to:t,children:"Details"}),Object(j.jsx)(a.c,{to:"/favourites",children:"Favourites"})]})},b=c(15),v=c(18),O=c.n(v),u=function(e){var t=Object(i.useRef)(null);return Object(j.jsx)("form",{onSubmit:function(c){c.preventDefault(),function(){var c,i=null===(c=t.current)||void 0===c?void 0:c.value;e.onSearch(i)}()},children:Object(j.jsx)("input",{autoFocus:!0,type:"text",ref:t,className:"search"})})},h=function(e){var t=Object(l.b)(),c=e.movie;return Object(j.jsx)("article",{className:"movie zoomfadein",onClick:function(){t({type:"SELECTED_MOVIE",playload:c.linkApi})},children:Object(j.jsxs)(a.b,{to:"/details/".concat(c.linkApi),children:[Object(j.jsxs)("div",{className:"inside",children:[Object(j.jsx)("h2",{children:c.title}),Object(j.jsx)("div",{className:"imgMovie",children:Object(j.jsx)("img",{src:c.poster,alt:"movie art"})})]}),Object(j.jsx)("footer",{className:"meta",children:c.type+" - "+c.year})]})})},m=function(e){var t=e.movies;return Object(j.jsx)("ul",{className:"moviesList",children:t.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(h,{movie:e})},e.linkApi)}))})},p="9304018a",f=function(){var e=Object(i.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1],n=Object(l.b)(),r=Object(l.c)((function(e){return e.allMovies.movies})),a=Object(i.useState)(0),o=Object(b.a)(a,2),d=o[0],v=o[1];Object(i.useEffect)((function(){void 0!==r&&(s(r),v(1))}),[r]);var h,f=function(e){return{title:e.Title,year:e.Year,linkApi:e.imdbID,type:e.Type,poster:e.Poster}};return Object(j.jsxs)("article",{className:"movies",children:[Object(j.jsx)("h1",{children:"Movies"}),Object(j.jsx)(u,{onSearch:function(e){O.a.get("https://omdbapi.com/?apikey=".concat(p,"&s=").concat(encodeURI(e))).then((function(e){if("True"===e.data.Response){var t=e.data.Search.filter((function(e){return"N/A"!==e.Poster})).map((function(e){return f(e)})),c=new Set,i=t.filter((function(e){var t=c.has(e.linkApi);return c.add(e.linkApi),!t}));s(i),v(1),n({type:"SET_MOVIE",playload:i})}else s([]),v(1)}))}}),(h=c,h.length>0?Object(j.jsx)(m,{movies:h}):1===d?Object(j.jsx)("div",{className:"searchNotFind",children:" We can't find movie or tv series with this title. Try another one. "}):Object(j.jsxs)("div",{className:"searchNotFind",children:[" Search for any movie or tv series ",Object(j.jsx)("em",{children:"(for example: batman)"})," ",Object(j.jsxs)("p",{children:["and press  ",Object(j.jsx)("strong",{children:"enter"})]})]}))]})},x=c(23),N=c.n(x),g=c(33),y=function(){var e=Object(l.c)((function(e){return e})),t=Object(l.b)(),c=Object(o.f)().movieId,s=Object(i.useRef)(null),n=Object(i.useState)({Title:"",Released:"released",Runtime:"runtime",Genre:"genre",Director:"director",Writer:"writer",Actors:"actors",Country:"country",Plot:"plot",imdbRating:"rating",Poster:"poster",imdbID:"link"}),r=Object(b.a)(n,2),a=r[0],d=r[1];Object(i.useEffect)((function(){(function(){var e=Object(g.a)(N.a.mark((function e(){var t,i;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O()("https://omdbapi.com/?apikey=".concat(p,"&i=").concat(encodeURI(c)));case 2:t=e.sent,i=t.data,d(i);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]);var v,u=function(){var c=e.allMovies.detail,i=e.allMovies.movies.find((function(e){return e.linkApi===c}));void 0!==e.allMovies.favorites&&e.allMovies.favorites.find((function(e){return e.linkApi===c}))||(e.allMovies.favorites,s.current.classList.add("pulse"),t({type:"ADD_FAVORITE",playload:i}))};return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Movie details "}),(v=a,v.Title?Object(j.jsx)("article",{className:"detailMovie zoomfadeOut",ref:s,children:Object(j.jsxs)("div",{className:"detailInside",children:[Object(j.jsx)("div",{className:"divstar",children:e.allMovies.favorites&&e.allMovies.favorites.some((function(t){return t.linkApi===e.allMovies.detail}))?Object(j.jsx)("span",{className:"star starActive",onClick:u,children:"\u2605"}):Object(j.jsx)("span",{className:"star",onClick:u,children:"\u2606"})}),Object(j.jsx)("h2",{children:v.Title}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"detailDivPicture",children:[Object(j.jsx)("img",{src:v.Poster,alt:"movie art"})," "]}),Object(j.jsxs)("div",{className:"detailText",children:[Object(j.jsxs)("p",{children:[" ",Object(j.jsx)("strong",{children:"Rating:"})," ",v.imdbRating," "]}),Object(j.jsxs)("p",{children:[" ",Object(j.jsx)("strong",{children:"Genre:"})," ",v.Genre," "]}),Object(j.jsxs)("p",{children:[" ",Object(j.jsx)("strong",{children:"Runtime:"})," ",v.Runtime," "]}),Object(j.jsxs)("p",{children:[" ",Object(j.jsx)("strong",{children:"Country:"})," ",v.Country," "]}),Object(j.jsxs)("p",{children:[" ",Object(j.jsx)("strong",{children:"Director:"})," ",v.Director,"  "]}),Object(j.jsxs)("p",{children:[" ",Object(j.jsx)("strong",{children:"Writer:"})," ",v.Writer,"  "]}),Object(j.jsxs)("p",{children:[" ",Object(j.jsx)("strong",{children:"Actor:"})," ",v.Actors," "]}),Object(j.jsxs)("p",{children:[" ",Object(j.jsx)("strong",{children:"Released:"}),"  ",v.Released]})]})]}),Object(j.jsxs)("div",{className:"plot",children:[Object(j.jsx)("strong",{children:"Plot:"})," ",v.Plot]})]})}):c?Object(j.jsx)("div",{children:"...Loading"}):Object(j.jsx)("div",{className:"zoomfadein",children:"You must search and choice movie or tv series for show his details"}))]})},A=function(){var e,t=Object(l.b)(),c=Object(l.c)((function(e){return e})),i=function(e){var i=JSON.parse(e.target.dataset.onclickparam).id,s=c.allMovies.favorites.filter((function(e){return e.linkApi!==i}));t({type:"DELETE_FAVORITE",playload:s})};return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Favourites movies"}),Object(j.jsx)("ul",{className:"moviesList",children:(e=c.allMovies.favorites,void 0===e||e.length<=0?Object(j.jsx)("div",{className:"zoomfadein",children:"You haven't saved anything yet. Search for a movie or a tv series and add it to you favourites.  "}):e.map((function(e){return Object(j.jsx)("li",{className:"leftFadeIn",children:Object(j.jsx)("article",{className:"movieFavorite",children:Object(j.jsxs)("div",{className:"inside",children:[Object(j.jsx)("h2",{children:e.title}),Object(j.jsxs)("div",{className:"imgMovie",children:[Object(j.jsx)("img",{src:e.poster,alt:"movie art"}),Object(j.jsx)(a.b,{to:"/details/".concat(e.linkApi),children:Object(j.jsx)("div",{className:"btn btnDetail",children:" Details "})}),Object(j.jsx)("div",{className:"btn btnRemove",onClick:i,"data-onclickparam":JSON.stringify({id:e.linkApi}),children:" Remove "})]})]})})},e.linkApi)})))})]})};var E=function(){return Object(j.jsxs)("div",{className:"App fadeIn",children:[Object(j.jsx)("header",{className:"App-header",children:Object(j.jsx)(d,{})}),Object(j.jsx)("main",{className:"content",children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/firstReactApp/",component:f,exact:!0}),Object(j.jsx)(o.a,{path:"/details/:movieId",component:y}),Object(j.jsx)(o.a,{path:"/details",component:y}),Object(j.jsx)(o.a,{path:"/favourites",component:A})]})})]})},M=c(13),k=c(11),R="SET_MOVIE",D="SELECTED_MOVIE",T="ADD_FAVORITE",I="DELETE_FAVORITE",S={},F=Object(M.combineReducers)({allMovies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,c=t.type,i=t.playload,s=[];switch(c){case R:return Object(k.a)(Object(k.a)({},e),{},{movies:i});case D:return Object(k.a)(Object(k.a)({},e),{},{detail:i});case T:if(void 0===e.favorites)return s.push(i),Object(k.a)(Object(k.a)({},e),{},{favorites:s});var n=e.favorites;return n.push(i),n.forEach((function(e){s.push(e)})),Object(k.a)(Object(k.a)({},e),{},{favorites:s});case I:return Object(k.a)(Object(k.a)({},e),{},{favorites:i});default:return e}}}),w=c(34),C=Object(M.createStore)(F,{},Object(w.composeWithDevTools)(Object(M.applyMiddleware)()));r.a.render(Object(j.jsx)(a.a,{children:Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(l.a,{store:C,children:Object(j.jsx)(E,{})})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.4678948b.chunk.js.map