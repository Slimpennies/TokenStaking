"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[697],{40190:function(e,t,r){let a;r.d(t,{CV:function(){return U},Id:function(){return E},t0:function(){return k},zv:function(){return A},uc:function(){return J},jb:function(){return Q},zb:function(){return P},AV:function(){return L},Ic:function(){return en},Vs:function(){return ei},kD:function(){return F}});let n=Symbol(),s=Symbol(),i=(e,t)=>new Proxy(e,t),l=Object.getPrototypeOf,o=new WeakMap,c=e=>e&&(o.has(e)?o.get(e):l(e)===Object.prototype||l(e)===Array.prototype),d=e=>"object"==typeof e&&null!==e,u=e=>{if(Array.isArray(e))return Array.from(e);let t=Object.getOwnPropertyDescriptors(e);return Object.values(t).forEach(e=>{e.configurable=!0}),Object.create(l(e),t)},f=e=>e[s]||e,p=(e,t,r,a)=>{if(!c(e))return e;let l=a&&a.get(e);if(!l){let t=f(e);l=Object.values(Object.getOwnPropertyDescriptors(t)).some(e=>!e.configurable&&!e.writable)?[t,u(t)]:[t],null==a||a.set(e,l)}let[o,d]=l,g=r&&r.get(o);return g&&!!d===g[1].f||((g=((e,t)=>{let r={f:t},a=!1,i=(t,n)=>{if(!a){let a=r.a.get(e);if(a||(a={},r.a.set(e,a)),"w"===t)a.w=!0;else{let e=a[t];e||(e=new Set,a[t]=e),e.add(n)}}},l={get:(t,a)=>a===s?e:(i("k",a),p(Reflect.get(t,a),r.a,r.c)),has:(t,s)=>s===n?(a=!0,r.a.delete(e),!0):(i("h",s),Reflect.has(t,s)),getOwnPropertyDescriptor:(e,t)=>(i("o",t),Reflect.getOwnPropertyDescriptor(e,t)),ownKeys:e=>(i("w"),Reflect.ownKeys(e))};return t&&(l.set=l.deleteProperty=()=>!1),[l,r]})(o,!!d))[1].p=i(d||o,g[0]),r&&r.set(o,g)),g[1].a=t,g[1].c=r,g[1].p},g=(e,t,r,a)=>{if(Object.is(e,t))return!1;if(!d(e)||!d(t))return!0;let n=r.get(f(e));if(!n)return!0;if(a){let r=a.get(e);if(r&&r.n===t)return r.g;a.set(e,{n:t,g:!1})}let s=null;try{for(let r of n.h||[])if(s=Reflect.has(e,r)!==Reflect.has(t,r))return s;if(!0===n.w){if(s=((e,t)=>{let r=Reflect.ownKeys(e),a=Reflect.ownKeys(t);return r.length!==a.length||r.some((e,t)=>e!==a[t])})(e,t))return s}else for(let r of n.o||[])if(s=!!Reflect.getOwnPropertyDescriptor(e,r)!=!!Reflect.getOwnPropertyDescriptor(t,r))return s;for(let i of n.k||[])if(s=g(e[i],t[i],r,a))return s;return null===s&&(s=!0),s}finally{a&&a.set(e,{n:t,g:s})}},h=e=>c(e)&&e[s]||null,b=(e,t=!0)=>{o.set(e,t)},w=e=>"object"==typeof e&&null!==e,m=new WeakMap,y=new WeakSet,v=(e=Object.is,t=(e,t)=>new Proxy(e,t),r=e=>w(e)&&!y.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),a=e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},n=new WeakMap,s=(e,t,r=a)=>{let i=n.get(e);if((null==i?void 0:i[0])===t)return i[1];let l=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return b(l,!0),n.set(e,[t,l]),Reflect.ownKeys(e).forEach(t=>{if(Object.getOwnPropertyDescriptor(l,t))return;let a=Reflect.get(e,t),n={value:a,enumerable:!0,configurable:!0};if(y.has(a))b(a,!1);else if(a instanceof Promise)delete n.value,n.get=()=>r(a);else if(m.has(a)){let[e,t]=m.get(a);n.value=s(e,t(),r)}Object.defineProperty(l,t,n)}),l},i=new WeakMap,l=[1,1],o=a=>{if(!w(a))throw Error("object required");let n=i.get(a);if(n)return n;let c=l[0],d=new Set,u=(e,t=++l[0])=>{c!==t&&(c=t,d.forEach(r=>r(e,t)))},f=l[1],p=(e=++l[1])=>(f===e||d.size||(f=e,b.forEach(([t])=>{let r=t[1](e);r>c&&(c=r)})),c),g=e=>(t,r)=>{let a=[...t];a[1]=[e,...a[1]],u(a,r)},b=new Map,v=(e,t)=>{if(b.has(e))throw Error("prop listener already exists");if(d.size){let r=t[3](g(e));b.set(e,[t,r])}else b.set(e,[t])},C=e=>{var t;let r=b.get(e);r&&(b.delete(e),null==(t=r[1])||t.call(r))},I=e=>{d.add(e),1===d.size&&b.forEach(([e,t],r)=>{if(t)throw Error("remove already exists");let a=e[3](g(r));b.set(r,[e,a])});let t=()=>{d.delete(e),0===d.size&&b.forEach(([e,t],r)=>{t&&(t(),b.set(r,[e]))})};return t},O=Array.isArray(a)?[]:Object.create(Object.getPrototypeOf(a)),j={deleteProperty(e,t){let r=Reflect.get(e,t);C(t);let a=Reflect.deleteProperty(e,t);return a&&u(["delete",[t],r]),a},set(t,a,n,s){let l=Reflect.has(t,a),c=Reflect.get(t,a,s);if(l&&(e(c,n)||i.has(n)&&e(c,i.get(n))))return!0;C(a),w(n)&&(n=h(n)||n);let d=n;if(n instanceof Promise)n.then(e=>{n.status="fulfilled",n.value=e,u(["resolve",[a],e])}).catch(e=>{n.status="rejected",n.reason=e,u(["reject",[a],e])});else{!m.has(n)&&r(n)&&(d=o(n));let e=!y.has(d)&&m.get(d);e&&v(a,e)}return Reflect.set(t,a,d,s),u(["set",[a],n,c]),!0}},E=t(O,j);i.set(a,E);let W=[O,p,s,I];return m.set(E,W),Reflect.ownKeys(a).forEach(e=>{let t=Object.getOwnPropertyDescriptor(a,e);"value"in t&&(E[e]=a[e],delete t.value,delete t.writable),Object.defineProperty(O,e,t)}),E})=>[o,m,y,e,t,r,a,n,s,i,l],[C]=v();function I(e={}){return C(e)}function O(e,t,r){let a;let n=m.get(e);n||console.warn("Please use proxy object");let s=[],i=n[3],l=!1,o=e=>{if(s.push(e),r){t(s.splice(0));return}a||(a=Promise.resolve().then(()=>{a=void 0,l&&t(s.splice(0))}))},c=i(o);return l=!0,()=>{l=!1,c()}}var j=r(7945);let E={ethereumClient:void 0,setEthereumClient(e){a=e},client(){if(a)return a;throw Error("ClientCtrl has no client set")}},W=I({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),L={state:W,subscribe:e=>O(W,()=>e(W)),push(e,t){e!==W.view&&(W.view=e,t&&(W.data=t),W.history.push(e))},reset(e){W.view=e,W.history=[e]},replace(e){W.history.length>1&&(W.history[W.history.length-1]=e,W.view=e)},goBack(){if(W.history.length>1){W.history.pop();let[e]=W.history.slice(-1);W.view=e}},setData(e){W.data=e}},A={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",W3M_VERSION:"W3M_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:()=>"u">typeof window&&!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid:()=>A.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isIos(){let e=navigator.userAgent.toLowerCase();return A.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),isArray:e=>Array.isArray(e)&&e.length>0,formatNativeUrl(e,t,r){if(A.isHttpUrl(e))return this.formatUniversalUrl(e,t,r);let a=e;a.includes("://")||(a=`${a=e.replaceAll("/","").replaceAll(":","")}://`),this.setWalletConnectDeepLink(a,r);let n=encodeURIComponent(t);return`${a}wc?uri=${n}`},formatUniversalUrl(e,t,r){if(!A.isHttpUrl(e))return this.formatNativeUrl(e,t,r);let a=e;e.endsWith("/")&&(a=e.slice(0,-1)),this.setWalletConnectDeepLink(a,r);let n=encodeURIComponent(t);return`${a}/wc?uri=${n}`},wait:async e=>new Promise(t=>{setTimeout(t,e)}),openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){localStorage.setItem(A.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))},setWalletConnectAndroidDeepLink(e){let[t]=e.split("?");localStorage.setItem(A.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))},setWeb3ModalVersionInStorage(){"u">typeof localStorage&&localStorage.setItem(A.W3M_VERSION,"2.3.6")},getWalletRouterData(){var e;let t=null==(e=L.state.data)?void 0:e.Wallet;if(!t)throw Error('Missing "Wallet" view data');return t},getSwitchNetworkRouterData(){var e;let t=null==(e=L.state.data)?void 0:e.SwitchNetwork;if(!t)throw Error('Missing "SwitchNetwork" view data');return t}},M=I({selectedChain:void 0,chains:void 0,standaloneChains:void 0,standaloneUri:void 0,isStandalone:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1,isInjectedMobile:!1,walletConnectVersion:1}),P={state:M,subscribe:e=>O(M,()=>e(M)),setChains(e){M.chains=e},setStandaloneChains(e){M.standaloneChains=e},setStandaloneUri(e){M.standaloneUri=e},getSelectedChain(){let e=E.client().getNetwork().chain;return e&&(M.selectedChain=e),M.selectedChain},setSelectedChain(e){M.selectedChain=e},setIsStandalone(e){M.isStandalone=e},setIsCustomDesktop(e){M.isCustomDesktop=e},setIsCustomMobile(e){M.isCustomMobile=e},setIsDataLoaded(e){M.isDataLoaded=e},setIsUiLoaded(e){M.isUiLoaded=e},setWalletConnectVersion(e){M.walletConnectVersion=e},setIsInjectedMobile(e){M.isInjectedMobile=e}},S=I({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chainImages:void 0,tokenImages:void 0,tokenContracts:void 0,standaloneChains:void 0,enableStandaloneMode:!1,enableNetworkView:!1,enableAccountView:!0,enableExplorer:!0,defaultChain:void 0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),k={state:S,subscribe:e=>O(S,()=>e(S)),setConfig(e){var t,r,a,n;P.setStandaloneChains(e.standaloneChains),P.setIsStandalone(!!(null!=(t=e.standaloneChains)&&t.length)||!!e.enableStandaloneMode),P.setIsCustomMobile(!!(null!=(r=e.mobileWallets)&&r.length)),P.setIsCustomDesktop(!!(null!=(a=e.desktopWallets)&&a.length)),P.setWalletConnectVersion(null!=(n=e.walletConnectVersion)?n:1),P.state.isStandalone||(P.setChains(E.client().chains),P.setIsInjectedMobile(A.isMobile()&&E.client().isInjectedProviderInstalled())),e.defaultChain&&P.setSelectedChain(e.defaultChain),A.setWeb3ModalVersionInStorage(),Object.assign(S,e)}},N=I({address:void 0,profileName:void 0,profileAvatar:void 0,profileLoading:!1,balanceLoading:!1,balance:void 0,isConnected:!1}),U={state:N,subscribe:e=>O(N,()=>e(N)),getAccount(){let e=E.client().getAccount();N.address=e.address,N.isConnected=e.isConnected},async fetchProfile(e,t){var r;try{N.profileLoading=!0;let a=t??N.address,n=null==(r=P.state.chains)?void 0:r.find(e=>1===e.id);if(a&&n){let[t,r]=await Promise.all([E.client().fetchEnsName({address:a,chainId:1}),E.client().fetchEnsAvatar({address:a,chainId:1})]);r&&await e(r),N.profileName=t,N.profileAvatar=r}}finally{N.profileLoading=!1}},async fetchBalance(e){try{let t;let{chain:r}=E.client().getNetwork(),{tokenContracts:a}=k.state;r&&a&&(t=a[r.id]),N.balanceLoading=!0;let n=e??N.address;if(n){let e=await E.client().fetchBalance({address:n,token:t});N.balance={amount:e.formatted,symbol:e.symbol}}}finally{N.balanceLoading=!1}},setAddress(e){N.address=e},setIsConnected(e){N.isConnected=e},resetBalance(){N.balance=void 0},resetAccount(){N.address=void 0,N.isConnected=!1,N.profileName=void 0,N.profileAvatar=void 0,N.balance=void 0}},D="https://explorer-api.walletconnect.com";async function R(e,t){let r=new URL(e,D);return r.searchParams.append("projectId",k.state.projectId),Object.entries(t).forEach(([e,t])=>{t&&r.searchParams.append(e,String(t))}),(await fetch(r)).json()}let x={getDesktopListings:async e=>R("/w3m/v1/getDesktopListings",e),getMobileListings:async e=>R("/w3m/v1/getMobileListings",e),getInjectedListings:async e=>R("/w3m/v1/getInjectedListings",e),getAllListings:async e=>R("/w3m/v1/getAllListings",e),getWalletImageUrl:e=>`${D}/w3m/v1/getWalletImage/${e}?projectId=${k.state.projectId}`,getAssetImageUrl:e=>`${D}/w3m/v1/getAssetImage/${e}?projectId=${k.state.projectId}`};var T=Object.defineProperty,V=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,$=(e,t,r)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,K=(e,t)=>{for(var r in t||(t={}))_.call(t,r)&&$(e,r,t[r]);if(V)for(var r of V(t))B.call(t,r)&&$(e,r,t[r]);return e};let H=A.isMobile(),z=I({wallets:{listings:[],total:0,page:1},injectedWallets:[],search:{listings:[],total:0,page:1},recomendedWallets:[]}),J={state:z,async getRecomendedWallets(){let{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=k.state;if("NONE"===e||"ALL"===t&&!e)return z.recomendedWallets;if(A.isArray(e)){let t={recommendedIds:e.join(",")},{listings:r}=await x.getAllListings(t),a=Object.values(r);a.sort((t,r)=>{let a=e.indexOf(t.id),n=e.indexOf(r.id);return a-n}),z.recomendedWallets=a}else{let{standaloneChains:e,walletConnectVersion:r}=P.state,a=e?.join(","),n=A.isArray(t),s={page:1,entries:A.RECOMMENDED_WALLET_AMOUNT,chains:a,version:r,excludedIds:n?t.join(","):void 0},{listings:i}=H?await x.getMobileListings(s):await x.getDesktopListings(s);z.recomendedWallets=Object.values(i)}return z.recomendedWallets},async getWallets(e){let t=K({},e),{explorerRecommendedWalletIds:r,explorerExcludedWalletIds:a}=k.state,{recomendedWallets:n}=z;if("ALL"===a)return z.wallets;t.search||(n.length?t.excludedIds=n.map(e=>e.id).join(","):A.isArray(r)&&(t.excludedIds=r.join(","))),A.isArray(a)&&(t.excludedIds=[t.excludedIds,a].filter(Boolean).join(","));let{page:s,search:i}=e,{listings:l,total:o}=H?await x.getMobileListings(t):await x.getDesktopListings(t),c=Object.values(l),d=i?"search":"wallets";return z[d]={listings:[...z[d].listings,...c],total:o,page:s??1},{listings:c,total:o}},async getInjectedWallets(){let{listings:e}=await x.getInjectedListings({}),t=Object.values(e);return z.injectedWallets=t,z.injectedWallets},getWalletImageUrl:e=>x.getWalletImageUrl(e),getAssetImageUrl:e=>x.getAssetImageUrl(e),resetSearch(){z.search={listings:[],total:0,page:1}}},q=I({pairingUri:"",pairingError:!1}),F={state:q,subscribe:e=>O(q,()=>e(q)),setPairingUri(e){q.pairingUri=e},setPairingError(e){q.pairingError=e}},G=I({open:!1}),Q={state:G,subscribe:e=>O(G,()=>e(G)),open:async e=>new Promise(t=>{let{isStandalone:r,isUiLoaded:a,isDataLoaded:n}=P.state,{pairingUri:s}=F.state,{isConnected:i}=U.state,{enableNetworkView:l}=k.state;if(r?(P.setStandaloneUri(e?.uri),P.setStandaloneChains(e?.standaloneChains),L.reset("ConnectWallet")):null!=e&&e.route?L.reset(e.route):i?L.reset("Account"):l?L.reset("SelectNetwork"):L.reset("ConnectWallet"),a&&n&&(r||s||i))G.open=!0,t();else{let e=setInterval(()=>{let r=P.state,a=F.state;r.isUiLoaded&&r.isDataLoaded&&(r.isStandalone||a.pairingUri||i)&&(clearInterval(e),G.open=!0,t())},200)}}),close(){G.open=!1}};var X=Object.defineProperty,Y=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,et=(e,t,r)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,er=(e,t)=>{for(var r in t||(t={}))Z.call(t,r)&&et(e,r,t[r]);if(Y)for(var r of Y(t))ee.call(t,r)&&et(e,r,t[r]);return e};let ea=I({themeMode:"u">typeof matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),en={state:ea,subscribe:e=>O(ea,()=>e(ea)),setThemeConfig(e){let{themeMode:t,themeVariables:r}=e;t&&(ea.themeMode=t),r&&(ea.themeVariables=er({},r))}},es=I({open:!1,message:"",variant:"success"}),ei={state:es,subscribe:e=>O(es,()=>e(es)),openToast(e,t){es.open=!0,es.message=e,es.variant=t},closeToast(){es.open=!1}};"u">typeof window&&(window.Buffer||(window.Buffer=j.Buffer),window.global||(window.global=window),window.process||(window.process={env:{}}))},80697:function(e,t,r){r.r(t),r.d(t,{Web3Modal:function(){return d}});var a=r(40190),n=Object.defineProperty,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&o(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&o(e,r,t[r]);return e};class d{constructor(e){this.openModal=a.jb.open,this.closeModal=a.jb.close,this.subscribeModal=a.jb.subscribe,this.setTheme=a.Ic.setThemeConfig,a.Ic.setThemeConfig(e),a.t0.setConfig(c({enableStandaloneMode:!0},e)),this.initUi()}async initUi(){if("u">typeof window){await Promise.all([r.e(8745),r.e(5350)]).then(r.bind(r,35350));let e=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",e),a.zb.setIsUiLoaded(!0)}}}}}]);