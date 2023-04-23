"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4862],{1138:function(t,r,a){a.d(r,{S:function(){return n}});var e=a(78863),s=a(19088);class n{get chainId(){return this._chainId}constructor(t,r,a){(0,e._)(this,"contractWrapper",void 0),(0,e._)(this,"storage",void 0),(0,e._)(this,"erc20",void 0),(0,e._)(this,"_chainId",void 0),(0,e._)(this,"transfer",(0,s.cT)(async(t,r)=>this.erc20.transfer.prepare(t,r))),(0,e._)(this,"transferFrom",(0,s.cT)(async(t,r,a)=>this.erc20.transferFrom.prepare(t,r,a))),(0,e._)(this,"setAllowance",(0,s.cT)(async(t,r)=>this.erc20.setAllowance.prepare(t,r))),(0,e._)(this,"transferBatch",(0,s.cT)(async t=>this.erc20.transferBatch.prepare(t))),this.contractWrapper=t,this.storage=r,this.erc20=new s.ap(this.contractWrapper,this.storage,a),this._chainId=a}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async get(){return this.erc20.get()}async balance(){return await this.erc20.balance()}async balanceOf(t){return this.erc20.balanceOf(t)}async totalSupply(){return await this.erc20.totalSupply()}async allowance(t){return await this.erc20.allowance(t)}async allowanceOf(t,r){return await this.erc20.allowanceOf(t,r)}}},14862:function(t,r,a){a.r(r),a.d(r,{Token:function(){return h}});var e=a(78863),s=a(19088),n=a(40677),i=a(8629);class c{constructor(t,r){(0,e._)(this,"events",void 0),(0,e._)(this,"contractWrapper",void 0),this.contractWrapper=t,this.events=r}async getAllHolderBalances(){let t=await this.events.getEvents("Transfer"),r=t.map(t=>t.data),a={};return r.forEach(t=>{let r=t?.from,e=t?.to,s=t?.value;r!==n.d&&(r in a||(a[r]=i.O$.from(0)),a[r]=a[r].sub(s)),e!==n.d&&(e in a||(a[e]=i.O$.from(0)),a[e]=a[e].add(s))}),Promise.all(Object.keys(a).map(async t=>({holder:t,balance:await (0,s.bX)(this.contractWrapper.getProvider(),this.contractWrapper.readContract.address,a[t])})))}}var o=a(1138);a(16388),a(56537),a(15449),a(75477),a(47317),a(1556),a(65500);class h extends o.S{constructor(t,r,a){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,p=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new s.c$(t,r,i,n);super(p,a,o),(0,e._)(this,"abi",void 0),(0,e._)(this,"metadata",void 0),(0,e._)(this,"app",void 0),(0,e._)(this,"roles",void 0),(0,e._)(this,"encoder",void 0),(0,e._)(this,"estimator",void 0),(0,e._)(this,"history",void 0),(0,e._)(this,"events",void 0),(0,e._)(this,"platformFees",void 0),(0,e._)(this,"sales",void 0),(0,e._)(this,"signature",void 0),(0,e._)(this,"interceptor",void 0),(0,e._)(this,"mint",(0,s.cT)(async t=>this.erc20.mint.prepare(t))),(0,e._)(this,"mintTo",(0,s.cT)(async(t,r)=>this.erc20.mintTo.prepare(t,r))),(0,e._)(this,"mintBatchTo",(0,s.cT)(async t=>this.erc20.mintBatchTo.prepare(t))),(0,e._)(this,"delegateTo",(0,s.cT)(async t=>s.aU.fromContractWrapper({contractWrapper:this.contractWrapper,method:"delegate",args:[await (0,s.cU)(t)]}))),(0,e._)(this,"burn",(0,s.cT)(t=>this.erc20.burn.prepare(t))),(0,e._)(this,"burnFrom",(0,s.cT)(async(t,r)=>this.erc20.burnFrom.prepare(t,r))),this.abi=s.e.parse(i||[]),this.metadata=new s.ai(this.contractWrapper,s.df,this.storage),this.app=new s.aW(this.contractWrapper,this.metadata,this.storage),this.roles=new s.aj(this.contractWrapper,h.contractRoles),this.sales=new s.al(this.contractWrapper),this.events=new s.aP(this.contractWrapper),this.history=new c(this.contractWrapper,this.events),this.encoder=new s.ah(this.contractWrapper),this.estimator=new s.aO(this.contractWrapper),this.platformFees=new s.aR(this.contractWrapper),this.interceptor=new s.aQ(this.contractWrapper),this.signature=new s.as(this.contractWrapper,this.roles)}async getVoteBalance(){return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress())}async getVoteBalanceOf(t){return await this.erc20.getValue(await this.contractWrapper.readContract.getVotes(t))}async getDelegation(){return await this.getDelegationOf(await this.contractWrapper.getSignerAddress())}async getDelegationOf(t){return await this.contractWrapper.readContract.delegates(await (0,s.cU)(t))}async isTransferRestricted(){let t=await this.contractWrapper.readContract.hasRole((0,s.bq)("transfer"),n.d);return!t}async getMintTransaction(t,r){return this.erc20.getMintTransaction(t,r)}async prepare(t,r,a){return s.aU.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:a})}async call(t,r,a){return this.contractWrapper.call(t,r,a)}}(0,e._)(h,"contractRoles",["admin","minter","transfer"])}}]);