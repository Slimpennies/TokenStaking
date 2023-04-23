"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5352],{35352:function(t,r,e){e.r(r),e.d(r,{Marketplace:function(){return W}});var a,i=e(17249),n=e(85430),s=e(25025),o=e(70332),c=e(8455),d=e(2593),p=e(21046),h=e(9279),l=e(19485),g=e(64146),u=e(61744),f=e(38776);let w=((a={})[a.Direct=0]="Direct",a[a.Auction=1]="Auction",a);class m{constructor(t,r){(0,i._)(this,"contractWrapper",void 0),(0,i._)(this,"storage",void 0),(0,i._)(this,"createListing",(0,n.cT)(async t=>{(0,n.cY)(t);let r=await (0,n.cU)(t.assetContractAddress),e=await (0,n.cU)(t.currencyContractAddress);await (0,n.cZ)(this.contractWrapper,this.getAddress(),r,t.tokenId,await this.contractWrapper.getSignerAddress());let a=await (0,n.bV)(this.contractWrapper.getProvider(),t.buyoutPricePerToken,e),i=Math.floor(t.startTimestamp.getTime()/1e3),s=await this.contractWrapper.getProvider().getBlock("latest"),o=s.timestamp;return i<o&&(i=o),n.aU.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createListing",args:[{assetContract:r,tokenId:t.tokenId,buyoutPricePerToken:a,currencyToAccept:(0,n.bU)(e),listingType:w.Direct,quantityToList:t.quantity,reservePricePerToken:a,secondsUntilEndTime:t.listingDurationInSeconds,startTime:d.O$.from(i)}],parse:t=>{let r=this.contractWrapper.parseLogs("ListingAdded",t?.logs);return{id:r[0].args.listingId,receipt:t}}})})),(0,i._)(this,"createListingsBatch",(0,n.cT)(async t=>{let r=await Promise.all(t.map(async t=>{let r=await this.createListing.prepare(t);return r.encode()}));return n.aU.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r],parse:t=>{let r=this.contractWrapper.parseLogs("ListingAdded",t?.logs);return r.map(r=>({id:r.args.listingId,receipt:t}))}})})),(0,i._)(this,"makeOffer",(0,n.cT)(async(t,r,e,a,i)=>{if((0,n.bT)(e))throw Error("You must use the wrapped native token address when making an offer with a native token");let s=await (0,n.bV)(this.contractWrapper.getProvider(),a,e);try{await this.getListing(t)}catch(r){throw console.error("Failed to get listing, err =",r),Error(`Error getting the listing with id ${t}`)}let o=d.O$.from(r),c=d.O$.from(s).mul(o),h=await this.contractWrapper.getCallOverrides()||{};await (0,n.bY)(this.contractWrapper,c,e,h);let l=p.Bz;return i&&(l=d.O$.from(Math.floor(i.getTime()/1e3))),n.aU.fromContractWrapper({contractWrapper:this.contractWrapper,method:"offer",args:[t,r,e,s,l],overrides:h})})),(0,i._)(this,"acceptOffer",(0,n.cT)(async(t,r)=>{await this.validateListing(d.O$.from(t));let e=await (0,n.cU)(r),a=await this.contractWrapper.readContract.offers(t,e);return n.aU.fromContractWrapper({contractWrapper:this.contractWrapper,method:"acceptOffer",args:[t,e,a.currency,a.pricePerToken]})})),(0,i._)(this,"buyoutListing",(0,n.cT)(async(t,r,e)=>{let a=await this.validateListing(d.O$.from(t)),{valid:i,error:s}=await this.isStillValidListing(a,r);if(!i)throw Error(`Listing ${t} is no longer valid. ${s}`);let o=e||await this.contractWrapper.getSignerAddress(),c=d.O$.from(r),p=d.O$.from(a.buyoutPrice).mul(c),h=await this.contractWrapper.getCallOverrides()||{};return await (0,n.bY)(this.contractWrapper,p,a.currencyContractAddress,h),n.aU.fromContractWrapper({contractWrapper:this.contractWrapper,method:"buy",args:[t,o,c,a.currencyContractAddress,p],overrides:h})})),(0,i._)(this,"updateListing",(0,n.cT)(async t=>n.aU.fromContractWrapper({contractWrapper:this.contractWrapper,method:"updateListing",args:[t.id,t.quantity,t.buyoutPrice,t.buyoutPrice,await (0,n.cU)(t.currencyContractAddress),t.startTimeInSeconds,t.secondsUntilEnd]}))),(0,i._)(this,"cancelListing",(0,n.cT)(async t=>n.aU.fromContractWrapper({contractWrapper:this.contractWrapper,method:"cancelDirectListing",args:[t]}))),this.contractWrapper=t,this.storage=r}getAddress(){return this.contractWrapper.readContract.address}async getListing(t){let r=await this.contractWrapper.readContract.listings(t);if(r.assetContract===h.d)throw new n.bf(this.getAddress(),t.toString());if(r.listingType!==w.Direct)throw new n.bg(this.getAddress(),t.toString(),"Auction","Direct");return await this.mapListing(r)}async getActiveOffer(t,r){await this.validateListing(d.O$.from(t)),(0,f.Z)(l.isAddress(r),"Address must be a valid address");let e=await this.contractWrapper.readContract.offers(t,await (0,n.cU)(r));if(e.offeror!==h.d)return await (0,n.cV)(this.contractWrapper.getProvider(),d.O$.from(t),e)}async validateListing(t){try{return await this.getListing(t)}catch(r){throw console.error(`Error getting the listing with id ${t}`),r}}async mapListing(t){return{assetContractAddress:t.assetContract,buyoutPrice:d.O$.from(t.buyoutPricePerToken),currencyContractAddress:t.currency,buyoutCurrencyValuePerToken:await (0,n.bX)(this.contractWrapper.getProvider(),t.currency,t.buyoutPricePerToken),id:t.listingId.toString(),tokenId:t.tokenId,quantity:t.quantity,startTimeInSeconds:t.startTime,asset:await (0,n.cW)(t.assetContract,this.contractWrapper.getProvider(),t.tokenId,this.storage),secondsUntilEnd:t.endTime,sellerAddress:t.tokenOwner,type:w.Direct}}async isStillValidListing(t,r){let e=await (0,n.cX)(this.contractWrapper.getProvider(),this.getAddress(),t.assetContractAddress,t.tokenId,t.sellerAddress);if(!e)return{valid:!1,error:`Token '${t.tokenId}' from contract '${t.assetContractAddress}' is not approved for transfer`};let a=this.contractWrapper.getProvider(),i=new g.CH(t.assetContractAddress,s,a),d=await i.supportsInterface(n.cd),p=await i.supportsInterface(n.ce);if(d){let r;let e=new g.CH(t.assetContractAddress,o,a);try{r=await e.ownerOf(t.tokenId)}catch(t){}let i=r?.toLowerCase()===t.sellerAddress.toLowerCase();return{valid:i,error:i?void 0:`Seller is not the owner of Token '${t.tokenId}' from contract '${t.assetContractAddress} anymore'`}}if(!p)return{valid:!1,error:"Contract does not implement ERC 1155 or ERC 721."};{let e=new g.CH(t.assetContractAddress,c,a),i=await e.balanceOf(t.sellerAddress,t.tokenId),n=i.gte(r||t.quantity);return{valid:n,error:n?void 0:`Seller does not have enough balance of Token '${t.tokenId}' from contract '${t.assetContractAddress} to fulfill the listing`}}}}class y{constructor(t,r){(0,i._)(this,"contractWrapper",void 0),(0,i._)(this,"storage",void 0),(0,i._)(this,"encoder",void 0),(0,i._)(this,"createListing",(0,n.cT)(async t=>{(0,n.cY)(t);let r=await (0,n.cU)(t.assetContractAddress),e=await (0,n.cU)(t.currencyContractAddress);await (0,n.cZ)(this.contractWrapper,this.getAddress(),r,t.tokenId,await this.contractWrapper.getSignerAddress());let a=await (0,n.bV)(this.contractWrapper.getProvider(),t.buyoutPricePerToken,e),i=await (0,n.bV)(this.contractWrapper.getProvider(),t.reservePricePerToken,e),s=Math.floor(t.startTimestamp.getTime()/1e3),o=await this.contractWrapper.getProvider().getBlock("latest"),c=o.timestamp;return s<c&&(s=c),n.aU.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createListing",args:[{assetContract:r,tokenId:t.tokenId,buyoutPricePerToken:a,currencyToAccept:(0,n.bU)(e),listingType:w.Auction,quantityToList:t.quantity,reservePricePerToken:i,secondsUntilEndTime:t.listingDurationInSeconds,startTime:d.O$.from(s)}],parse:t=>{let r=this.contractWrapper.parseLogs("ListingAdded",t?.logs);return{id:r[0].args.listingId,receipt:t}}})})),(0,i._)(this,"createListingsBatch",(0,n.cT)(async t=>{let r=await Promise.all(t.map(async t=>{let r=await this.createListing.prepare(t);return r.encode()}));return n.aU.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r],parse:t=>{let r=this.contractWrapper.parseLogs("ListingAdded",t?.logs);return r.map(r=>({id:r.args.listingId,receipt:t}))}})})),(0,i._)(this,"buyoutListing",(0,n.cT)(async t=>{let r=await this.validateListing(d.O$.from(t)),e=await (0,n.bW)(this.contractWrapper.getProvider(),r.currencyContractAddress);return this.makeBid.prepare(t,u.formatUnits(r.buyoutPrice,e.decimals))})),(0,i._)(this,"makeBid",(0,n.cT)(async(t,r)=>{let e=await this.validateListing(d.O$.from(t)),a=await (0,n.bV)(this.contractWrapper.getProvider(),r,e.currencyContractAddress);if(a.eq(d.O$.from(0)))throw Error("Cannot make a bid with 0 value");let i=await this.contractWrapper.readContract.bidBufferBps(),s=await this.getWinningBid(t);if(s){let t=(0,n.c_)(s.pricePerToken,a,i);(0,f.Z)(t,"Bid price is too low based on the current winning bid and the bid buffer")}else{let t=d.O$.from(e.reservePrice);(0,f.Z)(a.gte(t),"Bid price is too low based on reserve price")}let o=d.O$.from(e.quantity),c=a.mul(o),h=await this.contractWrapper.getCallOverrides()||{};return await (0,n.bY)(this.contractWrapper,c,e.currencyContractAddress,h),n.aU.fromContractWrapper({contractWrapper:this.contractWrapper,method:"offer",args:[t,e.quantity,e.currencyContractAddress,a,p.Bz],overrides:h})})),(0,i._)(this,"cancelListing",(0,n.cT)(async t=>{let r=await this.validateListing(d.O$.from(t)),e=d.O$.from(Math.floor(Date.now()/1e3)),a=d.O$.from(r.startTimeInEpochSeconds),i=await this.contractWrapper.readContract.winningBid(t);if(e.gt(a)&&i.offeror!==h.d)throw new n.bd(t.toString());return n.aU.fromContractWrapper({contractWrapper:this.contractWrapper,method:"closeAuction",args:[d.O$.from(t),await this.contractWrapper.getSignerAddress()]})})),(0,i._)(this,"closeListing",(0,n.cT)(async(t,r)=>{r||(r=await this.contractWrapper.getSignerAddress());let e=await this.validateListing(d.O$.from(t));try{return n.aU.fromContractWrapper({contractWrapper:this.contractWrapper,method:"closeAuction",args:[d.O$.from(t),r]})}catch(r){if(r.message.includes("cannot close auction before it has ended"))throw new n.bj(t.toString(),e.endTimeInEpochSeconds.toString());throw r}})),(0,i._)(this,"executeSale",(0,n.cT)(async t=>{let r=await this.validateListing(d.O$.from(t));try{let e=await this.getWinningBid(t);(0,f.Z)(e,"No winning bid found");let a=this.encoder.encode("closeAuction",[t,r.sellerAddress]),i=this.encoder.encode("closeAuction",[t,e.buyerAddress]);return n.aU.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[a,i]})}catch(e){if(e.message.includes("cannot close auction before it has ended"))throw new n.bj(t.toString(),r.endTimeInEpochSeconds.toString());throw e}})),(0,i._)(this,"updateListing",(0,n.cT)(async t=>n.aU.fromContractWrapper({contractWrapper:this.contractWrapper,method:"updateListing",args:[t.id,t.quantity,t.reservePrice,t.buyoutPrice,t.currencyContractAddress,t.startTimeInEpochSeconds,t.endTimeInEpochSeconds]}))),this.contractWrapper=t,this.storage=r,this.encoder=new n.ah(t)}getAddress(){return this.contractWrapper.readContract.address}async getListing(t){let r=await this.contractWrapper.readContract.listings(t);if(r.listingId.toString()!==t.toString())throw new n.bf(this.getAddress(),t.toString());if(r.listingType!==w.Auction)throw new n.bg(this.getAddress(),t.toString(),"Direct","Auction");return await this.mapListing(r)}async getWinningBid(t){await this.validateListing(d.O$.from(t));let r=await this.contractWrapper.readContract.winningBid(t);if(r.offeror!==h.d)return await (0,n.cV)(this.contractWrapper.getProvider(),d.O$.from(t),r)}async getWinner(t){let r=await this.validateListing(d.O$.from(t)),e=await this.contractWrapper.readContract.winningBid(t),a=d.O$.from(Math.floor(Date.now()/1e3)),i=d.O$.from(r.endTimeInEpochSeconds);if(a.gt(i)&&e.offeror!==h.d)return e.offeror;let n=await this.contractWrapper.readContract.queryFilter(this.contractWrapper.readContract.filters.AuctionClosed()),s=n.find(r=>r.args.listingId.eq(d.O$.from(t)));if(!s)throw Error(`Could not find auction with listingId ${t} in closed auctions`);return s.args.winningBidder}async getBidBufferBps(){return this.contractWrapper.readContract.bidBufferBps()}async getMinimumNextBid(t){let[r,e,a]=await Promise.all([this.getBidBufferBps(),this.getWinningBid(t),await this.validateListing(d.O$.from(t))]),i=e?e.currencyValue.value:a.reservePrice,s=i.add(i.mul(r).div(1e4));return(0,n.bX)(this.contractWrapper.getProvider(),a.currencyContractAddress,s)}async validateListing(t){try{return await this.getListing(t)}catch(r){throw console.error(`Error getting the listing with id ${t}`),r}}async mapListing(t){return{assetContractAddress:t.assetContract,buyoutPrice:d.O$.from(t.buyoutPricePerToken),currencyContractAddress:t.currency,buyoutCurrencyValuePerToken:await (0,n.bX)(this.contractWrapper.getProvider(),t.currency,t.buyoutPricePerToken),id:t.listingId.toString(),tokenId:t.tokenId,quantity:t.quantity,startTimeInEpochSeconds:t.startTime,asset:await (0,n.cW)(t.assetContract,this.contractWrapper.getProvider(),t.tokenId,this.storage),reservePriceCurrencyValuePerToken:await (0,n.bX)(this.contractWrapper.getProvider(),t.currency,t.reservePricePerToken),reservePrice:d.O$.from(t.reservePricePerToken),endTimeInEpochSeconds:t.endTime,sellerAddress:t.tokenOwner,type:w.Auction}}}e(13550),e(62822),e(71770),e(96200),e(54098),e(2162),e(64063);class W{get chainId(){return this._chainId}constructor(t,r,e){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new n.c$(t,r,s,a);(0,i._)(this,"abi",void 0),(0,i._)(this,"contractWrapper",void 0),(0,i._)(this,"storage",void 0),(0,i._)(this,"encoder",void 0),(0,i._)(this,"events",void 0),(0,i._)(this,"estimator",void 0),(0,i._)(this,"platformFees",void 0),(0,i._)(this,"metadata",void 0),(0,i._)(this,"app",void 0),(0,i._)(this,"roles",void 0),(0,i._)(this,"interceptor",void 0),(0,i._)(this,"direct",void 0),(0,i._)(this,"auction",void 0),(0,i._)(this,"_chainId",void 0),(0,i._)(this,"getAll",this.getAllListings),(0,i._)(this,"buyoutListing",(0,n.cT)(async(t,r,e)=>{let a=await this.contractWrapper.readContract.listings(t);if(a.listingId.toString()!==t.toString())throw new n.bf(this.getAddress(),t.toString());switch(a.listingType){case w.Direct:return(0,f.Z)(void 0!==r,"quantityDesired is required when buying out a direct listing"),await this.direct.buyoutListing.prepare(t,r,e);case w.Auction:return await this.auction.buyoutListing.prepare(t);default:throw Error(`Unknown listing type: ${a.listingType}`)}})),(0,i._)(this,"makeOffer",(0,n.cT)(async(t,r,e)=>{let a=await this.contractWrapper.readContract.listings(t);if(a.listingId.toString()!==t.toString())throw new n.bf(this.getAddress(),t.toString());let i=await this.contractWrapper.getChainID();switch(a.listingType){case w.Direct:return(0,f.Z)(e,"quantity is required when making an offer on a direct listing"),await this.direct.makeOffer.prepare(t,e,(0,n.bT)(a.currency)?n.cg[i].wrapped.address:a.currency,r);case w.Auction:return await this.auction.makeBid.prepare(t,r);default:throw Error(`Unknown listing type: ${a.listingType}`)}})),(0,i._)(this,"setBidBufferBps",(0,n.cT)(async t=>{await this.roles.verify(["admin"],await this.contractWrapper.getSignerAddress());let r=await this.getTimeBufferInSeconds();return n.aU.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setAuctionBuffers",args:[r,d.O$.from(t)]})})),(0,i._)(this,"setTimeBufferInSeconds",(0,n.cT)(async t=>{await this.roles.verify(["admin"],await this.contractWrapper.getSignerAddress());let r=await this.getBidBufferBps();return n.aU.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setAuctionBuffers",args:[d.O$.from(t),r]})})),(0,i._)(this,"allowListingFromSpecificAssetOnly",(0,n.cT)(async t=>{let r=[],e=await this.roles.get("asset");return e.includes(h.d)&&r.push(this.encoder.encode("revokeRole",[(0,n.bq)("asset"),h.d])),r.push(this.encoder.encode("grantRole",[(0,n.bq)("asset"),t])),n.aU.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r]})})),(0,i._)(this,"allowListingFromAnyAsset",(0,n.cT)(async()=>{let t=[],r=await this.roles.get("asset");for(let e in r)t.push(this.encoder.encode("revokeRole",[(0,n.bq)("asset"),e]));return t.push(this.encoder.encode("grantRole",[(0,n.bq)("asset"),h.d])),n.aU.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[t]})})),this._chainId=o,this.abi=n.e.parse(s||[]),this.contractWrapper=c,this.storage=e,this.metadata=new n.ai(this.contractWrapper,n.d2,this.storage),this.app=new n.aW(this.contractWrapper,this.metadata,this.storage),this.roles=new n.aj(this.contractWrapper,W.contractRoles),this.encoder=new n.ah(this.contractWrapper),this.estimator=new n.aO(this.contractWrapper),this.direct=new m(this.contractWrapper,this.storage),this.auction=new y(this.contractWrapper,this.storage),this.events=new n.aP(this.contractWrapper),this.platformFees=new n.aR(this.contractWrapper),this.interceptor=new n.aQ(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async getListing(t){let r=await this.contractWrapper.readContract.listings(t);if(r.assetContract===h.d)throw new n.bf(this.getAddress(),t.toString());switch(r.listingType){case w.Auction:return await this.auction.mapListing(r);case w.Direct:return await this.direct.mapListing(r);default:throw Error(`Unknown listing type: ${r.listingType}`)}}async getActiveListings(t){let r=await this.getAllListingsNoFilter(!0),e=this.applyFilter(r,t),a=d.O$.from(Math.floor(Date.now()/1e3));return e.filter(t=>t.type===w.Auction&&d.O$.from(t.endTimeInEpochSeconds).gt(a)&&d.O$.from(t.startTimeInEpochSeconds).lte(a)||t.type===w.Direct&&t.quantity>0)}async getAllListings(t){let r=await this.getAllListingsNoFilter(!1);return this.applyFilter(r,t)}async getTotalCount(){return await this.contractWrapper.readContract.totalListings()}async isRestrictedToListerRoleOnly(){let t=await this.contractWrapper.readContract.hasRole((0,n.bq)("lister"),h.d);return!t}async getBidBufferBps(){return this.contractWrapper.readContract.bidBufferBps()}async getTimeBufferInSeconds(){return this.contractWrapper.readContract.timeBuffer()}async getOffers(t){let r=await this.events.getEvents("NewOffer",{order:"desc",filters:{listingId:t}});return await Promise.all(r.map(async r=>await (0,n.cV)(this.contractWrapper.getProvider(),d.O$.from(t),{quantityWanted:r.data.quantityWanted,pricePerToken:r.data.quantityWanted.gt(0)?r.data.totalOfferAmount.div(r.data.quantityWanted):r.data.totalOfferAmount,currency:r.data.currency,offeror:r.data.offeror})))}async getAllListingsNoFilter(t){let r=await Promise.all(Array.from(Array((await this.contractWrapper.readContract.totalListings()).toNumber()).keys()).map(async r=>{let e;try{e=await this.getListing(r)}catch(t){if(t instanceof n.bf)return;console.warn(`Failed to get listing ${r}' - skipping. Try 'marketplace.getListing(${r})' to get the underlying error.`);return}if(e.type===w.Auction)return e;if(t){let{valid:t}=await this.direct.isStillValidListing(e);if(!t)return}return e}));return r.filter(t=>void 0!==t)}applyFilter(t,r){let e=[...t],a=d.O$.from(r?.start||0).toNumber(),n=d.O$.from(r?.count||i.c).toNumber();return r&&(r.seller&&(e=e.filter(t=>t.sellerAddress.toString().toLowerCase()===r?.seller?.toString().toLowerCase())),r.tokenContract&&(e=e.filter(t=>t.assetContractAddress.toString().toLowerCase()===r?.tokenContract?.toString().toLowerCase())),void 0!==r.tokenId&&(e=e.filter(t=>t.tokenId.toString()===r?.tokenId?.toString())),e=(e=e.filter((t,r)=>r>=a)).slice(0,n)),e}async prepare(t,r,e){return n.aU.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}}(0,i._)(W,"contractRoles",["admin","lister","asset"])}}]);