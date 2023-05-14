import{m as y,u as x,_ as g,o as n,c as i,a as s,t as A,b as u,w as p,h as f,i as k,g as r,F as h,r as d,j as v,k as C,l as $}from"./index-3d389b2b.js";import{M as b}from"./Modal-cdfc787a.js";import{L as D}from"./Loader-0eb9366a.js";const T={name:"LectionCard",props:{lection:Object},emits:["handleDelete"],components:{Modal:b},data(){return{isActive:!1}},computed:{...y(x,{user:"authUser"})}},w={class:"card"},M={class:"card-image"},V={class:"image is-3by2"},B=["src"],H={class:"card-content"},N={class:"content"},S={class:"title is-5"},j=["innerHTML"],z={class:"card-footer"};function E(e,t,a,L,o,_){const c=d("router-link"),m=d("modal");return n(),i(h,null,[s("div",w,[s("div",M,[s("figure",V,[s("img",{src:"http://localhost:8000"+a.lection.image,alt:"Placeholder image"},null,8,B)])]),s("div",H,[s("div",N,[s("h3",S,A(this.lection.title),1),s("p",{innerHTML:this.lection.content.substring(0,150)+"..."},null,8,j)])]),s("footer",z,[u(c,{to:{name:"Lection",params:{id:this.lection.id}},class:"card-footer-item has-text-primary"},{default:p(()=>[f(" Začať lekciu ")]),_:1},8,["to"]),e.user&&e.user.is_admin?(n(),k(c,{key:0,to:{name:"LectionEdit",params:{id:this.lection.id}},class:"card-footer-item"},{default:p(()=>[f("Upraviť")]),_:1},8,["to"])):r("",!0),e.user&&e.user.is_admin?(n(),i("a",{key:1,onClick:t[0]||(t[0]=l=>o.isActive=!0),class:"card-footer-item has-text-danger"}," Vymazať ")):r("",!0)])]),u(m,{isActive:o.isActive,onCloseModal:t[1]||(t[1]=l=>o.isActive=!1),onDelete:t[2]||(t[2]=l=>this.$emit("handleDelete",this.lection.id))},null,8,["isActive"])],64)}const F=g(T,[["render",E]]),U={name:"Lections",components:{LectionCard:F,Loader:D},data(){return{lections:[],loading:!1,toast:null}},mounted(){this.loading=!0,v.get("/api/lections").then(e=>{this.lections=e.data}).finally(()=>this.loading=!1),this.toast=C()},methods:{deleteLection(e){v.delete("api/lections/"+e).then(a=>{this.showToast()});const t=this.lections.findIndex(a=>a.id===e);t!==-1&&this.lections.splice(t,1)},showToast(){this.toast.warning("Lekcia bola úspešne vymazaná",{timeout:3e3,position:"top-center"})}}},Z={key:1,class:"title has-text-centered"},I={class:"columns is-multiline"};function O(e,t,a,L,o,_){const c=d("loader"),m=d("lection-card");return n(),i(h,null,[o.loading?(n(),k(c,{key:0})):r("",!0),!o.loading&&!o.lections.length?(n(),i("h1",Z,"Zatiaľ neboli vytvorené žiadne lekcie")):r("",!0),s("div",I,[(n(!0),i(h,null,$(o.lections,l=>(n(),i("div",{class:"column is-4",key:l.id},[u(m,{lection:l,onHandleDelete:_.deleteLection},null,8,["lection","onHandleDelete"])]))),128))])],64)}const J=g(U,[["render",O]]);export{J as default};
