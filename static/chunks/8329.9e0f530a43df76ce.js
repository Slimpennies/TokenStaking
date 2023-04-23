"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8329],{45231:function(e,t,i){i.d(t,{A:function(){return h},C:function(){return o},R:function(){return l},S:function(){return m},U:function(){return w},a:function(){return d},b:function(){return u}});var n=i(15629),s=i(34461),r=i(15449);class o extends r.Z{constructor(e){let{chains:t=s.gL9,options:i}=e;super(),(0,n._)(this,"id",void 0),(0,n._)(this,"name",void 0),(0,n._)(this,"chains",void 0),(0,n._)(this,"options",void 0),(0,n._)(this,"ready",void 0),this.chains=t,this.options=i}getBlockExplorerUrls(e){let t=e.explorers?.map(e=>e.url)??[];return t.length>0?t:void 0}isChainUnsupported(e){return!this.chains.some(t=>t.chainId===e)}updateChains(e){this.chains=e}}class a extends Error{constructor(e,t){let{cause:i,code:s,data:r}=t;if(!Number.isInteger(s))throw Error('"code" must be an integer.');if(!e||"string"!=typeof e)throw Error('"message" must be a nonempty string.');super(e),(0,n._)(this,"cause",void 0),(0,n._)(this,"code",void 0),(0,n._)(this,"data",void 0),this.cause=i,this.code=s,this.data=r}}class c extends a{constructor(e,t){let{cause:i,code:n,data:s}=t;if(!(Number.isInteger(n)&&n>=1e3&&n<=4999))throw Error('"code" must be an integer such that: 1000 <= code <= 4999');super(e,{cause:i,code:n,data:s})}}class h extends Error{constructor(){super(...arguments),(0,n._)(this,"name","AddChainError"),(0,n._)(this,"message","Error adding chain")}}class d extends Error{constructor(e){let{chainId:t,connectorId:i}=e;super(`Chain "${t}" not configured for connector "${i}".`),(0,n._)(this,"name","ChainNotConfigured")}}class u extends Error{constructor(){super(...arguments),(0,n._)(this,"name","ConnectorNotFoundError"),(0,n._)(this,"message","Connector not found")}}class l extends a{constructor(e){super("Resource unavailable",{cause:e,code:-32002}),(0,n._)(this,"name","ResourceUnavailable")}}class m extends c{constructor(e){super("Error switching chain",{cause:e,code:4902}),(0,n._)(this,"name","SwitchChainError")}}class w extends c{constructor(e){super("User rejected request",{cause:e,code:4001}),(0,n._)(this,"name","UserRejectedRequestError")}}},66453:function(e,t,i){i.d(t,{n:function(){return n}});function n(e){return"string"==typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"==typeof e?Number(e):e}},28329:function(e,t,i){i.r(t),i.d(t,{MetaMaskConnector:function(){return g}});var n=i(20656),s=i(15629),r=i(45231),o=i(58984),a=i(75438),c=i(37570),h=i(33285),d=i(66453);i(15449);var u=new WeakMap,l=new WeakMap;class m extends r.C{constructor(e){let t={shimDisconnect:!0,shimChainChangedDisconnect:!0,getProvider:()=>{if((0,o.a)(globalThis.window))return globalThis.window.ethereum},...e.options};super({chains:e.chains,options:t}),(0,s._)(this,"id",void 0),(0,s._)(this,"name",void 0),(0,s._)(this,"ready",void 0),(0,n._)(this,u,{writable:!0,value:void 0}),(0,n._)(this,l,{writable:!0,value:void 0}),(0,s._)(this,"connectorStorage",void 0),(0,s._)(this,"shimDisconnectKey","injected.shimDisconnect"),(0,s._)(this,"onAccountsChanged",async e=>{0===e.length?await this.onDisconnect():this.emit("change",{account:a.getAddress(e[0])})}),(0,s._)(this,"onChainChanged",e=>{let t=(0,d.n)(e),i=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:i}})}),(0,s._)(this,"onDisconnect",async()=>{if(this.options.shimChainChangedDisconnect&&(0,n.b)(this,l)){(0,n.a)(this,l,!1);return}this.emit("disconnect"),this.options.shimDisconnect&&await this.connectorStorage.removeItem(this.shimDisconnectKey)});let i=t.getProvider();if("string"==typeof t.name)this.name=t.name;else if(i){let e=function(e){if(!e)return"Injected";let t=e=>e.isAvalanche?"Core Wallet":e.isBitKeep?"BitKeep":e.isBraveWallet?"Brave Wallet":e.isCoinbaseWallet?"Coinbase Wallet":e.isExodus?"Exodus":e.isFrame?"Frame":e.isKuCoinWallet?"KuCoin Wallet":e.isMathWallet?"MathWallet":e.isOneInchIOSWallet||e.isOneInchAndroidWallet?"1inch Wallet":e.isOpera?"Opera":e.isPortal?"Ripio Portal":e.isTally?"Tally":e.isTokenPocket?"TokenPocket":e.isTokenary?"Tokenary":e.isTrust||e.isTrustWallet?"Trust Wallet":e.isMetaMask?"MetaMask":void 0;if(e.providers?.length){let i=new Set,n=1;for(let s of e.providers){let e=t(s);e||(e=`Unknown Wallet #${n}`,n+=1),i.add(e)}let s=[...i];return s.length?s:s[0]??"Injected"}return t(e)??"Injected"}(i);t.name?this.name=t.name(e):"string"==typeof e?this.name=e:this.name=e[0]}else this.name="Injected";this.id="injected",this.ready=!!i,this.connectorStorage=e.connectorStorage}async connect(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{let t=await this.getProvider();if(!t)throw new r.b;this.setupListeners(),this.emit("message",{type:"connecting"});let i=await t.request({method:"eth_requestAccounts"}),n=a.getAddress(i[0]),s=await this.getChainId(),o=this.isChainUnsupported(s);if(e.chainId&&s!==e.chainId)try{await this.switchChain(e.chainId),s=e.chainId,o=this.isChainUnsupported(e.chainId)}catch(t){console.error(`Could not switch to chain id: ${e.chainId}`,t)}this.options.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");let c={account:n,chain:{id:s,unsupported:o},provider:t};return this.emit("connect",c),c}catch(e){if(this.isUserRejectedRequestError(e))throw new r.U(e);if(-32002===e.code)throw new r.R(e);throw e}}async disconnect(){let e=await this.getProvider();e?.removeListener&&(e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&await this.connectorStorage.removeItem(this.shimDisconnectKey))}async getAccount(){let e=await this.getProvider();if(!e)throw new r.b;let t=await e.request({method:"eth_accounts"});return a.getAddress(t[0])}async getChainId(){let e=await this.getProvider();if(!e)throw new r.b;return e.request({method:"eth_chainId"}).then(d.n)}async getProvider(){let e=this.options.getProvider();return e&&(0,n.a)(this,u,e),(0,n.b)(this,u)}async getSigner(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,i]=await Promise.all([this.getProvider(),this.getAccount()]);return new c.Q(t,e).getSigner(i)}async isAuthorized(){try{if(this.options.shimDisconnect&&!await this.connectorStorage.getItem(this.shimDisconnectKey))return!1;let e=await this.getProvider();if(!e)throw new r.b;let t=await this.getAccount();return!!t}catch{return!1}}async switchChain(e){this.options.shimChainChangedDisconnect&&(0,n.a)(this,l,!0);let t=await this.getProvider();if(!t)throw new r.b;let i=h.hexValue(e);try{await t.request({method:"wallet_switchEthereumChain",params:[{chainId:i}]});let n=this.chains.find(t=>t.chainId===e);if(n)return n;return{chainId:e,name:`Chain ${i}`,slug:`${i}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpc:[""],chain:"",shortName:"",testnet:!0}}catch(s){let n=this.chains.find(t=>t.chainId===e);if(!n)throw new r.a({chainId:e,connectorId:this.id});if(4902===s.code||s?.data?.originalError?.code===4902)try{return await t.request({method:"wallet_addEthereumChain",params:[{chainId:i,chainName:n.name,nativeCurrency:n.nativeCurrency,rpcUrls:n.rpc,blockExplorerUrls:this.getBlockExplorerUrls(n)}]}),n}catch(e){if(this.isUserRejectedRequestError(e))throw new r.U(s);throw new r.A}if(this.isUserRejectedRequestError(s))throw new r.U(s);throw new r.S(s)}}async setupListeners(){let e=await this.getProvider();e.on&&(e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect))}isUserRejectedRequestError(e){return 4001===e.code}}var w=new WeakMap;class g extends m{constructor(e){let t={name:"MetaMask",shimDisconnect:!0,shimChainChangedDisconnect:!0,getProvider(){function e(e){let t=!!e?.isMetaMask;if(t&&(!e.isBraveWallet||e._events||e._state)&&!e.isAvalanche&&!e.isKuCoinWallet&&!e.isPortal&&!e.isTokenPocket&&!e.isTokenary)return e}if((0,o.a)(globalThis.window))return globalThis.window.ethereum?.providers?globalThis.window.ethereum.providers.find(e):e(globalThis.window.ethereum)},...e.options};super({chains:e.chains,options:t,connectorStorage:e.connectorStorage}),(0,s._)(this,"id","metaMask"),(0,n._)(this,w,{writable:!0,value:void 0}),(0,n.a)(this,w,t.UNSTABLE_shimOnConnectSelectAccount)}async connect(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{let t=await this.getProvider();if(!t)throw new r.b;this.setupListeners(),this.emit("message",{type:"connecting"});let i=null;if((0,n.b)(this,w)&&this.options?.shimDisconnect&&!this.connectorStorage.getItem(this.shimDisconnectKey)){i=await this.getAccount().catch(()=>null);let e=!!i;if(e)try{await t.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}catch(e){if(this.isUserRejectedRequestError(e))throw new r.U(e)}}if(!i){let e=await t.request({method:"eth_requestAccounts"});i=a.getAddress(e[0])}let s=await this.getChainId(),o=this.isChainUnsupported(s);if(e.chainId&&s!==e.chainId)try{await this.switchChain(e.chainId),s=e.chainId,o=this.isChainUnsupported(e.chainId)}catch(t){console.error(`Could not switch to chain id : ${e.chainId}`,t)}this.options?.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");let c={chain:{id:s,unsupported:o},provider:t,account:i};return this.emit("connect",c),c}catch(e){if(this.isUserRejectedRequestError(e))throw new r.U(e);if(-32002===e.code)throw new r.R(e);throw e}}async switchAccount(){let e=await this.getProvider();await e.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}}}}]);