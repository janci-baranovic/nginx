import{_ as r,j as s,k as a,c,a as p,t as d,b as l,r as u,o as h}from"./index-2401c57e.js";import{L as m}from"./LectionCreateForm-309112a8.js";const _={components:{LectionCreateForm:m},data(){return{lection:{},errors:[],id:this.$route.params.id,toast:null}},methods:{updateLection(t){t.append("_method","put"),s.post("/api/lections/"+this.id,t,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{this.$router.push("/lection/"+this.id),this.showToast()}).catch(e=>{console.log(e),e.response.status===422&&(this.errors=e.response.data.errors)})},showToast(){this.toast.success("Lekcia bola úspešne upravená",{timeout:3e3,position:"top-center"})}},mounted(){s.get("/api/lections/"+this.id).then(t=>{this.lection=t.data.data}),this.toast=a()}},L={class:"title has-text-centered"};function f(t,e,k,x,o,i){const n=u("LectionCreateForm");return h(),c("div",null,[p("h1",L,"Edituješ lekciu "+d(this.$route.params.id),1),l(n,{lection:o.lection,errors:o.errors,onLectionFormSubmitted:i.updateLection},null,8,["lection","errors","onLectionFormSubmitted"])])}const b=r(_,[["render",f]]);export{b as default};
