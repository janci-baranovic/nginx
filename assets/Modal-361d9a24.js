import{_ as i,o as n,c as l,a as s,s as a}from"./index-fbd946e6.js";const c={props:["isActive"]},d=s("div",{class:"modal-background"},null,-1),r={class:"modal-content"},_={class:"box"},u=s("h2",{class:"subtitle has-text-centered"},"Určite chceš vykonať túto akciu?",-1),v={class:"field is-grouped d-flex is-justify-content-center"},m={class:"control"},p={class:"control"};function b($,t,e,f,h,k){return n(),l("div",null,[s("div",{class:a(["modal",e.isActive?"is-active":""])},[d,s("div",r,[s("div",_,[u,s("div",v,[s("p",m,[s("button",{onClick:t[0]||(t[0]=o=>this.$emit("delete")),class:"button is-danger"},"Potvrdiť vymazanie")]),s("p",p,[s("button",{onClick:t[1]||(t[1]=o=>this.$emit("closeModal")),class:"button"},"Zrušiť")])])])]),s("button",{onClick:t[2]||(t[2]=o=>this.$emit("closeModal")),class:"modal-close is-large","aria-label":"close"})],2)])}const g=i(c,[["render",b]]);export{g as M};
