import{_ as n,k as a,j as c,c as i,b as p,a as m,r as d,o as l}from"./index-42c36b7c.js";import{L as u}from"./LectionCreateForm-fe80ab77.js";const h={components:{LectionCreateForm:u},data(){return{toast:null,errors:[]}},mounted(){this.toast=a()},methods:{addLection(t){c.post("/api/lections",t).then(e=>{this.$router.push("/lections"),this.showToast()}).catch(e=>{e.response.status===422&&(this.errors=e.response.data.errors)})},showToast(){this.toast.success("Lekcia bola úspešne vytvorená",{timeout:3e3,position:"top-center"})}}},_=m("h1",{class:"title has-text-centered"},"Nová lekcia",-1);function L(t,e,f,k,o,s){const r=d("LectionCreateForm");return l(),i("div",null,[_,p(r,{errors:o.errors,onLectionFormSubmitted:s.addLection},null,8,["errors","onLectionFormSubmitted"])])}const C=n(h,[["render",L]]);export{C as default};
