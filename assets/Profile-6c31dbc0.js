import{_ as v,k as b,j as k,m as x,u as g,c as i,a as s,h as r,t as n,f as m,v as p,b as l,g as h,w as y,F as w,r as _,o as c}from"./index-2395daeb.js";const D={data(){return{toast:null,errors:[]}},mounted(){this.toast=b()},methods:{updateUser(){this.errors=[],k.put("/api/users/"+this.user.id,{name:this.user.name,email:this.user.email}).then(e=>{this.showToast()}).catch(e=>{e.response.status===422&&(this.errors=e.response.data.errors)})},showToast(){this.toast.success("Profilové údaje boli upravené",{timeout:3e3,position:"top-center"})}},computed:{...x(g,{user:"authUser"}),formatDate(){const e={year:"numeric",month:"long",day:"numeric"};return new Date(this.user.created_at).toLocaleDateString("sk-SK",e)}}},U=s("h1",{class:"title is-4 mb-6 has-text-centered"},"Osobné informácie",-1),T={class:"columns"},V={class:"column is-4 is-offset-4 has-text-centered"},C={class:"mb-4"},S={class:"box"},N={class:"field"},B={class:"control has-icons-left"},P={class:"icon is-small is-left"},j={key:0,class:"help has-text-danger has-text-left"},z={class:"field"},F={class:"control has-icons-left"},A={class:"icon is-small is-left"},E={key:0,class:"help has-text-danger has-text-left"};function K(e,t,L,M,u,a){const d=_("font-awesome-icon"),f=_("router-link");return c(),i(w,null,[U,s("div",T,[s("div",V,[s("p",null,[r("Dátum registrácie: "),s("strong",null,n(a.formatDate),1)]),s("p",C,[r("Posledná aktualizácia: "),s("strong",null,n(a.formatDate),1)]),s("div",S,[s("div",N,[s("div",B,[m(s("input",{class:"input",type:"text","onUpdate:modelValue":t[0]||(t[0]=o=>e.user.name=o)},null,512),[[p,e.user.name]]),s("span",P,[l(d,{icon:"fa-solid fa-user"})])]),u.errors.name?(c(),i("p",j,n(this.errors.name[0]),1)):h("",!0)]),s("div",z,[s("div",F,[m(s("input",{class:"input",type:"text","onUpdate:modelValue":t[1]||(t[1]=o=>e.user.email=o)},null,512),[[p,e.user.email]]),s("span",A,[l(d,{icon:"fa-solid fa-envelope"})])]),u.errors.email?(c(),i("p",E,n(this.errors.email[0]),1)):h("",!0)]),s("button",{onClick:t[2]||(t[2]=(...o)=>a.updateUser&&a.updateUser(...o)),class:"button is-primary is-block mb-4"},"Uložiť")]),l(f,{to:{name:"CompletedTests"},class:"button is-link is-outlined"},{default:y(()=>[r("Zobraziť vypracované testy")]),_:1})])])],64)}const Z=v(D,[["render",K]]);export{Z as default};
