import{_ as n,j as o,k as i,i as p,r as c,o as u}from"./index-2395daeb.js";import{T as m}from"./TestCreateForm-d0844c84.js";const h={components:{TestCreateForm:m},data(){return{id:this.$route.params.id,test:{},errors:[],toast:null}},mounted(){o.get("/api/tests/"+this.id).then(s=>{this.test=s.data}),this.toast=i()},methods:{updateTest(s){o.put("/api/tests/"+this.id,s).then(t=>{t.status===201&&(this.$router.push("/tests"),this.showToast())}).catch(t=>{t.response.status===422&&(this.errors=t.response.data.errors)})},showToast(){this.toast.success("Test bol úspešne upravený",{timeout:3e3,position:"top-center"})}}};function d(s,t,_,f,e,r){const a=c("test-create-form");return u(),p(a,{test:e.test,errors:e.errors,onTestFormSubmitted:r.updateTest},null,8,["test","errors","onTestFormSubmitted"])}const x=n(h,[["render",d]]);export{x as default};
