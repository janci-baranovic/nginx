import{_ as T,o,c as i,a as l,t as h,b as m,w as f,h as p,i as g,g as r,r as d,j as v,k as y,m as x,u as A,F as k,l as C}from"./index-a675c8ae.js";import{L as w}from"./Loader-ca4ead24.js";import{M as D}from"./Modal-cf688ad3.js";const V={props:{test:Object,user:Object},components:{Modal:D},emits:["handleDelete"],data(){return{isActive:!1}}},B={class:"subtitle mb-1"},N={class:"mb-4"};function j(n,e,t,b,s,_){const c=d("router-link"),u=d("modal");return o(),i("div",null,[l("h2",B,h(t.test.title),1),l("p",N,"Počet otázok: "+h(t.test.questions_count),1),m(c,{to:{name:"Test",params:{id:t.test.id}},class:"button is-success"},{default:f(()=>[p("Začať test")]),_:1},8,["to"]),t.user.is_admin?(o(),g(c,{key:0,to:{name:"TestEdit",params:{id:t.test.id}},class:"button is-info ml-2"},{default:f(()=>[p("Upraviť test")]),_:1},8,["to"])):r("",!0),t.user.is_admin?(o(),i("a",{key:1,onClick:e[0]||(e[0]=a=>s.isActive=!0),class:"button is-danger is-outlined ml-2"},"Vymazať test")):r("",!0),m(u,{isActive:s.isActive,onCloseModal:e[1]||(e[1]=a=>s.isActive=!1),onDelete:e[2]||(e[2]=a=>this.$emit("deleteTest",t.test.id))},null,8,["isActive"])])}const z=T(V,[["render",j]]),L={components:{Loader:w,TestCard:z},data(){return{tests:[],loading:!1,toast:null}},mounted(){this.loading=!0,v.get("/api/tests").then(n=>{this.tests=n.data}).finally(()=>this.loading=!1),this.toast=y()},methods:{deleteTest(n){v.delete("api/tests/"+n).then(t=>{this.showToast()});const e=this.tests.findIndex(t=>t.id===n);e!==-1&&this.tests.splice(e,1)},showToast(){this.toast.warning("Test bol úspešne vymazaný",{timeout:3e3,position:"top-center"})}},computed:{...x(A,{user:"authUser"})}},M={class:"has-text-centered"},S={key:0,class:"title"},q={key:1,class:"title"},E={class:"columns"},F={class:"column is-half is-offset-one-quarter"};function O(n,e,t,b,s,_){const c=d("loader"),u=d("test-card");return o(),i(k,null,[s.loading?(o(),g(c,{key:0})):r("",!0),l("div",M,[!s.loading&&s.tests.length?(o(),i("h1",S,"Testy, ktoré môžeš absolvovať")):r("",!0),!s.loading&&!s.tests.length?(o(),i("h1",q,"Zatiaľ pre vás neboli vytvorené žiadne testy")):r("",!0),l("div",E,[l("div",F,[(o(!0),i(k,null,C(s.tests,a=>(o(),i("div",{class:"box has-text-left",key:a.id},[m(u,{test:a,user:n.user,onDeleteTest:_.deleteTest},null,8,["test","user","onDeleteTest"])]))),128))])])])],64)}const P=T(L,[["render",O]]);export{P as default};
