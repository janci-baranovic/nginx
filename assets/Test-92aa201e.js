import{_ as x,j as c,k as v,c as e,a as t,t as d,F as u,l as h,o,f as _,v as w,n as b,h as T}from"./index-2401c57e.js";const f={data(){return{title:"",questions:[],answers:{},toast:null}},methods:{submitTest(){c.post("/api/tests/upload",this.answers).then(a=>{this.$router.push("/tests/completed"),this.showToast()})},showToast(){this.toast.success("Test bol úspešne odovzdaný",{timeout:3e3,position:"top-center"})}},mounted(){c.get("/api/tests/"+this.$route.params.id).then(a=>{this.title=a.data.title,this.questions=a.data.questions,this.answers.testId=a.data.id,this.questions.forEach(l=>this.answers[l.id]="")}),this.toast=v()}},k={class:"box"},y={class:"title has-text-centered"},V={class:"title is-5 mb-2"},U={key:0,class:"field mt-2"},g={class:"control"},B=["onUpdate:modelValue"],D={key:1},E={class:"control"},F={class:"radio"},M=["value","onUpdate:modelValue"],N={class:"control"};function j(a,l,z,C,n,r){return o(),e("div",k,[t("h1",y,d(this.title),1),t("ul",null,[(o(!0),e(u,null,h(this.questions,(s,p)=>(o(),e("li",{key:s.id,class:"mb-5"},[t("span",V,d(p+1)+". "+d(s.text),1),s.type==="text"?(o(),e("div",U,[t("div",g,[_(t("input",{class:"input is-small",type:"text","onUpdate:modelValue":i=>n.answers[s.id]=i},null,8,B),[[w,n.answers[s.id]]])])])):(o(),e("ul",D,[(o(!0),e(u,null,h(s.choices,i=>(o(),e("li",{key:i.id},[t("div",E,[t("label",F,[_(t("input",{type:"radio",name:"answer",value:i.text,"onUpdate:modelValue":m=>n.answers[s.id]=m},null,8,M),[[b,n.answers[s.id]]]),T(" "+d(i.text),1)])])]))),128))]))]))),128))]),t("div",N,[t("button",{onClick:l[0]||(l[0]=(...s)=>r.submitTest&&r.submitTest(...s)),class:"button is-success"},"Odoslať")])])}const L=x(f,[["render",j]]);export{L as default};
