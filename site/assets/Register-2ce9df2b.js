import{_ as p,m as _,u,e as m,c as l,a as s,f as i,v as r,t as d,g as c,o as n}from "./index-3d389b2b.js";const h={data(){return{userData:{name:"",email:"",password:"",password_confirmation:""}}},computed:{..._(u,{errors:"authErrors"})},methods:{...m(u,{register:"handleRegistration"})}},f={class:"section"},v={class:"columns is-mobile"},b={class:"column is-4 is-offset-4"},w={class:"box"},D={class:"field"},g=s("label",{class:"label"},"Meno",-1),y={class:"control"},k={key:0,class:"help has-text-danger"},V={class:"field"},x=s("label",{class:"label"},"Email",-1),U={class:"control"},B={key:0,class:"help has-text-danger"},E={class:"field"},S=s("label",{class:"label"},"Heslo",-1),A={class:"control"},C={key:0,class:"help has-text-danger"},M={class:"field"},N=s("label",{class:"label"},"Potvrď heso",-1),R={class:"control"},H={class:"field"},P={class:"control"},T=s("strong",null,"Zaregistrovať",-1),Z=[T];function j(a, e, q, z, t, F){return n(),l("section",f,[s("div",v,[s("div",b,[s("div",w,[s("div",D,[g,s("div",y,[i(s("input",{"onUpdate:modelValue":e[0]||(e[0]= o=>t.userData.name=o),class:"input",type:"text"},null,512),[[r,t.userData.name]])]),a.errors.name?(n(),l("p",k,d(this.errors.name[0]),1)):c("",!0)]),s("div",V,[x,s("div",U,[i(s("input",{"onUpdate:modelValue":e[1]||(e[1]= o=>t.userData.email=o),class:"input",type:"email"},null,512),[[r,t.userData.email]])]),a.errors.email?(n(),l("p",B,d(this.errors.email[0]),1)):c("",!0)]),s("div",E,[S,s("div",A,[i(s("input",{"onUpdate:modelValue":e[2]||(e[2]= o=>t.userData.password=o),class:"input",type:"password"},null,512),[[r,t.userData.password]])]),a.errors.password?(n(),l("p",C,d(this.errors.password[0]),1)):c("",!0)]),s("div",M,[N,s("div",R,[i(s("input",{"onUpdate:modelValue":e[3]||(e[3]= o=>t.userData.password_confirmation=o),class:"input",type:"password"},null,512),[[r,t.userData.password_confirmation]])])]),s("div",H,[s("p",P,[s("button",{onClick:e[4]||(e[4]= o=>a.register(this.userData)),class:"button is-success is-fullwidth"},Z)])])])])])])}const I=p(h,[["render",j]]);export{I as default};
