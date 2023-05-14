import{_ as b,j as p,k as x,c as u,a as t,b as o,w as r,t as l,F as g,l as y,r as v,o as _,h,p as T,d as A}from"./index-3d389b2b.js";import{M as w}from"./Modal-cdfc787a.js";const C={components:{Modal:w},data(){return{users:[],statistics:{},isActive:!1,toast:null}},methods:{deleteUser(s){p.delete("api/users/"+s).then(d=>{this.showToast(),this.isActive=!1});const e=this.users.findIndex(d=>d.id===s);e!==-1&&this.users.splice(e,1)},showToast(){this.toast.warning("Test bol úspešne vymazaný",{timeout:3e3,position:"top-center"})}},mounted(){p.get("/api/users").then(s=>{this.statistics.users=s.data.users,delete s.data.users,this.statistics.lections=s.data.lections,delete s.data.lections,this.statistics.tests=s.data.tests,delete s.data.tests,this.users=Object.keys(s.data).map(e=>({id:e,...s.data[e]}))}),this.toast=x()}},n=s=>(T("data-v-779850e8"),s=s(),A(),s),D={class:"columns"},I={class:"column is-3 has-background-light pl-6 pt-6"},z={class:"column is-9 p-6"},P={class:"level has-text-left py-4 mb-0"},S={class:"level-item has-text-centered"},V=n(()=>t("p",{class:"heading"},"Používateľov",-1)),B={class:"title"},L={class:"level-item has-text-centered"},M=n(()=>t("p",{class:"heading"},"Lekcií",-1)),N={class:"title"},j={class:"level-item has-text-centered"},E=n(()=>t("p",{class:"heading"},"Testov",-1)),F={class:"title"},U={class:"table is-fullwidth is-striped mt-6"},$=n(()=>t("thead",null,[t("th",null,"Id"),t("th",null,"Používateľské meno"),t("th",null,"Email"),t("th",null,"Dátum registrácie"),t("th",null,"Akcie")],-1));function O(s,e,d,q,a,f){const c=v("router-link"),k=v("modal");return _(),u("div",null,[t("div",D,[t("div",I,[o(c,{to:{name:"TestCreate"},class:"nav-link is-size-5 is-block is-underlined"},{default:r(()=>[h(" Pridať test ")]),_:1}),o(c,{to:{name:"LectionCreate"},class:"nav-link is-size-5 is-block is-underlined"},{default:r(()=>[h(" Pridať lekciu ")]),_:1})]),t("div",z,[t("nav",P,[t("div",S,[t("div",null,[V,t("p",B,l(this.statistics.users),1)])]),t("div",L,[t("div",null,[M,t("p",N,l(this.statistics.lections),1)])]),t("div",j,[t("div",null,[E,t("p",F,l(this.statistics.tests),1)])])]),t("table",U,[$,t("tbody",null,[(_(!0),u(g,null,y(a.users,i=>(_(),u("tr",{key:i.id},[t("td",null,l(i.id),1),t("td",null,l(i.name),1),t("td",null,l(i.email),1),t("td",null,l(i.created_at),1),t("td",null,[o(c,{to:{name:"CompletedTests",params:{user:i.id}},class:"button is-small is-info is-outlined mr-1"},{default:r(()=>[h("Testy")]),_:2},1032,["to"]),t("button",{onClick:e[0]||(e[0]=m=>a.isActive=!0),class:"button is-small is-danger is-outlined"},"Vymazať")]),o(k,{isActive:a.isActive,onCloseModal:e[1]||(e[1]=m=>a.isActive=!1),onDelete:m=>f.deleteUser(i.id)},null,8,["isActive","onDelete"])]))),128))])])])])])}const J=b(C,[["render",O],["__scopeId","data-v-779850e8"]]);export{J as default};
