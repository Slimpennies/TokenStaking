(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{88509:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(43150)}])},43150:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return d}});var t=s(53704),n=s(56995),c=s(8802),o=s(15141);s(76574);var i=s(21902),r=s(75500),l=s.n(r);let _="0x9c5B82d68C54fff9c615022B51dE17bc3Ee03aD2";function d(){let e=(0,n.SFn)(),[a,s]=(0,i.useState)(0),{contract:r,isLoading:d}=(0,n.cqn)(_,"custom"),{data:m}=(0,n.doQ)(r,"rewardToken"),{data:u}=(0,n.doQ)(r,"stakingToken"),{contract:f,isLoading:h}=(0,n.cqn)(u,"token"),{contract:x,isLoading:k}=(0,n.cqn)(m,"token"),{data:j,refetch:p}=(0,n.mMq)(f,e),{data:y,refetch:b}=(0,n.mMq)(x,e),{data:w,refetch:N,isLoading:T}=(0,n.doQ)(r,"getStakeInfo",[e]);(0,i.useEffect)(()=>{setInterval(()=>{g()},1e4)},[]);let g=()=>{b(),p(),N()},H=a?c.parseUnits(a.toString(),"gwei"):0;return(0,t.jsx)("div",{className:l().container,children:(0,t.jsxs)("main",{className:l().main,children:[(0,t.jsx)("h1",{className:l().title,children:"Welcome to Giraffe Staking"}),(0,t.jsxs)("p",{className:l().description,children:["Stake Giraffe Token to earn Baby Giraffe Token. ",(0,t.jsx)("br",{}),"Stake tokens: Enter amount, approve, then stake. ",(0,t.jsx)("br",{}),"Unstake tokens: Enter amount then unstake. ",(0,t.jsx)("br",{}),"Claim Rewards: Click Claim Rewards. ",(0,t.jsx)("br",{})]}),(0,t.jsx)("div",{className:l().connect,children:(0,t.jsx)(n.RZ8,{})}),(0,t.jsxs)("div",{className:l().stakeContainer,children:[(0,t.jsx)("input",{className:l().textbox,type:"number",value:a,onChange:e=>s(e.target.value)}),(0,t.jsx)(n.tnh,{className:l().button,contractAddress:u,action:async e=>{await e.call("approve",[_,H],{gasLimit:12e4}),o.Am.success("Tokens approved successfully!")},children:"Approve!"}),(0,t.jsx)(n.tnh,{className:l().button,contractAddress:_,action:async e=>{await e.call("stake",[H]),o.Am.success("Tokens staked successfully!")},children:"Stake!"}),(0,t.jsx)(n.tnh,{className:l().button,contractAddress:_,action:async e=>{await e.call("withdraw",[H]),o.Am.success("Tokens unstaked successfully!")},children:"Unstake!"}),(0,t.jsx)(n.tnh,{className:l().button,contractAddress:_,action:async e=>{await e.call("claimRewards"),o.Am.success("Rewards claimed successfully!")},children:"Claim rewards!"})]}),(0,t.jsxs)("div",{className:l().grid,children:[(0,t.jsxs)("a",{className:l().card,children:[(0,t.jsx)("h2",{children:"Giraffe Balance (Your Wallet)"}),(0,t.jsx)("p",{children:null==j?void 0:j.displayValue})]}),(0,t.jsxs)("a",{className:l().card,children:[(0,t.jsx)("h2",{children:"Baby Giraffe Balance (Your Wallet)"}),(0,t.jsx)("p",{children:null==y?void 0:y.displayValue})]}),(0,t.jsxs)("a",{className:l().card,children:[(0,t.jsx)("h2",{children:"Giraffe Tokens Staked"}),(0,t.jsx)("p",{children:w&&c.formatUnits(w[0].toString(),"gwei")})]}),(0,t.jsxs)("a",{className:l().card,children:[(0,t.jsx)("h2",{children:" Claimable Baby Giraffe"}),(0,t.jsx)("p",{children:w&&c.formatEther(w[1].toString())})]})]})]})})}},75500:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",stakeContainer:"Home_stakeContainer__NZ_yT",textbox:"Home_textbox__eou49",button:"Home_button__Zs7A2",title:"Home_title__T09hD",description:"Home_description__41Owk",connect:"Home_connect__lnU7w",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb",footer:"Home_footer____T7K","Toastify__toast-container":"Home_Toastify__toast-container__Bp6mC",Toastify__toast:"Home_Toastify__toast__v37jo","Toastify__toast--success":"Home_Toastify__toast--success__eEu56","Toastify__toast--error":"Home_Toastify__toast--error__RyrhA"}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=88509)}),_N_E=e.O()}]);