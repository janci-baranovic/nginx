import{_,m as p,u as n,e as h,c as l,a as s,f as r,v as d,t as c,g as u,o as i}from "./index-3d389b2b.js";const m={data(){return{userData:{email:"",password:""}}},computed:{...p(n,{errors:"authErrors"})},methods:{...h(n,{login:"handleLogin"})}},f={class:"section"},v={class:"columns is-mobile"},g={class:"column is-4 is-offset-4"},b={class:"box"},w={class:"field"},D=s("label",{class:"label"},"Email",-1),k={class:"control"},y={key:0,class:"help has-text-danger"},x={class:"field"},V=s("label",{class:"label"},"Heslo",-1),B={class:"control"},E={key:0,class:"help has-text-danger"},S={class:"field"},A={class:"control"},C=s("strong",null,"Prihlásiť",-1),L=[C];function N(a, e, U, H, t, M){return i(),l("div",null,[s("section",f,[s("div",v,[s("div",g,[s("div",b,[s("div",w,[D,s("div",k,[r(s("input",{"onUpdate:modelValue":e[0]||(e[0]= o=>t.userData.email=o),class:"input",type:"email"},null,512),[[d,t.userData.email]])]),a.errors.email?(i(),l("p",y,c(this.errors.email[0]),1)):u("",!0)]),s("div",x,[V,s("div",B,[r(s("input",{"onUpdate:modelValue":e[1]||(e[1]= o=>t.userData.password=o),class:"input",type:"password"},null,512),[[d,t.userData.password]])]),a.errors.password?(i(),l("p",E,c(this.errors.password[0]),1)):u("",!0)]),s("div",S,[s("p",A,[s("button",{onClick:e[2]||(e[2]= o=>a.login(this.userData)),class:"button is-success is-fullwidth"},L)])])])])])])])}const T=_(m,[["render",N]]);export{T as default};
