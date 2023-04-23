"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[477],{97596:function(t,r,e){e.d(r,{S:function(){return i}});var a=e(17249),s=e(85430);class i{get chainId(){return this._chainId}constructor(t,r,e){(0,a._)(this,"contractWrapper",void 0),(0,a._)(this,"storage",void 0),(0,a._)(this,"erc721",void 0),(0,a._)(this,"_chainId",void 0),(0,a._)(this,"transfer",(0,s.cT)(async(t,r)=>this.erc721.transfer.prepare(t,r))),(0,a._)(this,"setApprovalForAll",(0,s.cT)(async(t,r)=>this.erc721.setApprovalForAll.prepare(t,r))),(0,a._)(this,"setApprovalForToken",(0,s.cT)(async(t,r)=>s.aU.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[await (0,s.cU)(t),r]}))),this.contractWrapper=t,this.storage=r,this.erc721=new s.au(this.contractWrapper,this.storage,e),this._chainId=e}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async getAll(t){return this.erc721.getAll(t)}async getOwned(t){return t&&(t=await (0,s.cU)(t)),this.erc721.getOwned(t)}async getOwnedTokenIds(t){return t&&(t=await (0,s.cU)(t)),this.erc721.getOwnedTokenIds(t)}async totalSupply(){return this.erc721.totalCirculatingSupply()}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,r){return this.erc721.isApproved(t,r)}}},40477:function(t,r,e){e.r(r),e.d(r,{NFTCollection:function(){return c}});var a=e(17249),s=e(85430),i=e(97596),n=e(9279);e(13550),e(62822),e(71770),e(96200),e(54098),e(2162),e(64063);class c extends i.S{constructor(t,r,e){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new s.c$(t,r,n,i);super(h,e,o),(0,a._)(this,"abi",void 0),(0,a._)(this,"metadata",void 0),(0,a._)(this,"app",void 0),(0,a._)(this,"roles",void 0),(0,a._)(this,"encoder",void 0),(0,a._)(this,"estimator",void 0),(0,a._)(this,"events",void 0),(0,a._)(this,"sales",void 0),(0,a._)(this,"platformFees",void 0),(0,a._)(this,"royalties",void 0),(0,a._)(this,"owner",void 0),(0,a._)(this,"signature",void 0),(0,a._)(this,"interceptor",void 0),(0,a._)(this,"mint",(0,s.cT)(async t=>this.erc721.mint.prepare(t))),(0,a._)(this,"mintTo",(0,s.cT)(async(t,r)=>this.erc721.mintTo.prepare(t,r))),(0,a._)(this,"mintBatch",(0,s.cT)(async t=>this.erc721.mintBatch.prepare(t))),(0,a._)(this,"mintBatchTo",(0,s.cT)(async(t,r)=>this.erc721.mintBatchTo.prepare(t,r))),(0,a._)(this,"burn",(0,s.cT)(t=>this.erc721.burn.prepare(t))),this.abi=s.e.parse(n||[]),this.metadata=new s.ai(this.contractWrapper,s.d8,this.storage),this.app=new s.aW(this.contractWrapper,this.metadata,this.storage),this.roles=new s.aj(this.contractWrapper,c.contractRoles),this.royalties=new s.ak(this.contractWrapper,this.metadata),this.sales=new s.al(this.contractWrapper),this.encoder=new s.ah(this.contractWrapper),this.estimator=new s.aO(this.contractWrapper),this.events=new s.aP(this.contractWrapper),this.platformFees=new s.aR(this.contractWrapper),this.interceptor=new s.aQ(this.contractWrapper),this.signature=new s.ax(this.contractWrapper,this.storage),this.owner=new s.aT(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async isTransferRestricted(){let t=await this.contractWrapper.readContract.hasRole((0,s.bq)("transfer"),n.d);return!t}async getMintTransaction(t,r){return this.erc721.getMintTransaction(t,r)}async prepare(t,r,e){return s.aU.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}}(0,a._)(c,"contractRoles",["admin","minter","transfer"])}}]);