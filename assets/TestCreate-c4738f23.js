import{_ as a,k as n,j as c,i,r as p,o as m}from"./index-3d389b2b.js";import{T as u}from"./TestCreateForm-bf0a1136.js";const _={components:{TestCreateForm:u},data(){return{errors:[],toast:null}},mounted(){this.toast=n()},methods:{saveTest(s){c.post("/api/tests",s).then(t=>{t.status===200&&(this.$router.push("/tests"),this.showToast())}).catch(t=>{t.response.status===422&&(this.errors=t.response.data.errors)})},showToast(){this.toast.success("Test bol úspešne vytvorený",{timeout:3e3,position:"top-center"})}}};function h(s,t,f,T,e,o){const r=p("test-create-form");return m(),i(r,{errors:e.errors,onTestFormSubmitted:o.saveTest},null,8,["errors","onTestFormSubmitted"])}const v=a(_,[["render",h]]);export{v as default};
