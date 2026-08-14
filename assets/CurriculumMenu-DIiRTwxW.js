import{B as $,v as w,z as K,a4 as Q,c as h,o as a,F as _,k as B,m as o,d as l,y as f,a as y,s as G,h as m,J as g,t as A,e as x,b as v,f as N,w as s,i as k,n as H,l as C,j as P,at as L,M as j,au as X,T as Y,P as ee,ak as U,Z as ne,ao as O,C as te,H as ie,r as S}from"./index-D19KkTj1.js";import{s as re}from"./index-DGu5YxrC.js";import{s as ae}from"./index-DjDeBiPh.js";import{s as oe,a as ce}from"./index-HwsrS8cO.js";import{_ as de}from"./plugin-vue_export-helper-DlAUqK2U.js";import"./index-DYhKJepw.js";var le=`
    .p-timeline {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        direction: ltr;
    }

    .p-timeline-left .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-left .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event {
        flex-direction: row-reverse;
    }

    .p-timeline-right .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: row-reverse;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical .p-timeline-event-opposite,
    .p-timeline-vertical .p-timeline-event-content {
        padding: dt('timeline.vertical.event.content.padding');
    }

    .p-timeline-vertical .p-timeline-event-connector {
        width: dt('timeline.event.connector.size');
    }

    .p-timeline-event {
        display: flex;
        position: relative;
        min-height: dt('timeline.event.min.height');
    }

    .p-timeline-event:last-child {
        min-height: 0;
    }

    .p-timeline-event-opposite {
        flex: 1;
    }

    .p-timeline-event-content {
        flex: 1;
    }

    .p-timeline-event-separator {
        flex: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .p-timeline-event-marker {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        align-self: baseline;
        border-width: dt('timeline.event.marker.border.width');
        border-style: solid;
        border-color: dt('timeline.event.marker.border.color');
        border-radius: dt('timeline.event.marker.border.radius');
        width: dt('timeline.event.marker.size');
        height: dt('timeline.event.marker.size');
        background: dt('timeline.event.marker.background');
    }

    .p-timeline-event-marker::before {
        content: ' ';
        border-radius: dt('timeline.event.marker.content.border.radius');
        width: dt('timeline.event.marker.content.size');
        height: dt('timeline.event.marker.content.size');
        background: dt('timeline.event.marker.content.background');
    }

    .p-timeline-event-marker::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('timeline.event.marker.border.radius');
        box-shadow: dt('timeline.event.marker.content.inset.shadow');
    }

    .p-timeline-event-connector {
        flex-grow: 1;
        background: dt('timeline.event.connector.color');
    }

    .p-timeline-horizontal {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event {
        flex-direction: column;
        flex: 1;
    }

    .p-timeline-horizontal .p-timeline-event:last-child {
        flex: 0;
    }

    .p-timeline-horizontal .p-timeline-event-separator {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event-connector {
        width: 100%;
        height: dt('timeline.event.connector.size');
    }

    .p-timeline-horizontal .p-timeline-event-opposite,
    .p-timeline-horizontal .p-timeline-event-content {
        padding: dt('timeline.horizontal.event.content.padding');
    }

    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: column-reverse;
    }

    .p-timeline-bottom .p-timeline-event {
        flex-direction: column-reverse;
    }
`,se={root:function(n){var t=n.props;return["p-timeline p-component","p-timeline-"+t.align,"p-timeline-"+t.layout]},event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},pe=$.extend({name:"timeline",style:le,classes:se}),ue={name:"BaseTimeline",extends:w,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:pe,provide:function(){return{$pcTimeline:this,$parentInstance:this}}};function T(e){"@babel/helpers - typeof";return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},T(e)}function F(e,n,t){return(n=he(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function he(e){var n=me(e,"string");return T(n)=="symbol"?n:n+""}function me(e,n){if(T(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(T(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var R={name:"Timeline",extends:ue,inheritAttrs:!1,methods:{getKey:function(n,t){return this.dataKey?Q(n,this.dataKey):t},getPTOptions:function(n,t){return this.ptm(n,{context:{index:t,count:this.value.length}})}},computed:{dataP:function(){return K(F(F({},this.layout,this.layout),this.align,this.align))}}},ve=["data-p"],fe=["data-p"],ge=["data-p"],be=["data-p"],ye=["data-p"],Ae=["data-p"],Pe=["data-p"];function Ce(e,n,t,r,p,i){return a(),h("div",o({class:e.cx("root")},e.ptmi("root"),{"data-p":i.dataP}),[(a(!0),h(_,null,B(e.value,function(c,d){return a(),h("div",o({key:i.getKey(c,d),class:e.cx("event")},{ref_for:!0},i.getPTOptions("event",d),{"data-p":i.dataP}),[l("div",o({class:e.cx("eventOpposite",{index:d})},{ref_for:!0},i.getPTOptions("eventOpposite",d),{"data-p":i.dataP}),[f(e.$slots,"opposite",{item:c,index:d})],16,ge),l("div",o({class:e.cx("eventSeparator")},{ref_for:!0},i.getPTOptions("eventSeparator",d),{"data-p":i.dataP}),[f(e.$slots,"marker",{item:c,index:d},function(){return[l("div",o({class:e.cx("eventMarker")},{ref_for:!0},i.getPTOptions("eventMarker",d),{"data-p":i.dataP}),null,16,ye)]}),d!==e.value.length-1?f(e.$slots,"connector",{key:0,item:c,index:d},function(){return[l("div",o({class:e.cx("eventConnector")},{ref_for:!0},i.getPTOptions("eventConnector",d),{"data-p":i.dataP}),null,16,Ae)]}):y("",!0)],16,be),l("div",o({class:e.cx("eventContent")},{ref_for:!0},i.getPTOptions("eventContent",d),{"data-p":i.dataP}),[f(e.$slots,"content",{item:c,index:d})],16,Pe)],16,fe)}),128))],16,ve)}R.render=Ce;var V={name:"TimesCircleIcon",extends:G};function $e(e){return _e(e)||Te(e)||ke(e)||we()}function we(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ke(e,n){if(e){if(typeof e=="string")return z(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?z(e,n):void 0}}function Te(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function _e(e){if(Array.isArray(e))return z(e)}function z(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function xe(e,n,t,r,p,i){return a(),h("svg",o({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),$e(n[0]||(n[0]=[l("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",fill:"currentColor"},null,-1)])),16)}V.render=xe;var Ie=`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.font.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`,Se={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},ze=$.extend({name:"chip",style:Ie,classes:Se}),Ke={name:"BaseChip",extends:w,props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:ze,provide:function(){return{$pcChip:this,$parentInstance:this}}},Z={name:"Chip",extends:Ke,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(n){(n.key==="Enter"||n.key==="Backspace")&&this.close(n)},close:function(n){this.visible=!1,this.$emit("remove",n)}},computed:{dataP:function(){return K({removable:this.removable})}},components:{TimesCircleIcon:V}},Be=["aria-label","data-p"],Ee=["src"];function Me(e,n,t,r,p,i){return p.visible?(a(),h("div",o({key:0,class:e.cx("root"),"aria-label":e.label},e.ptmi("root"),{"data-p":i.dataP}),[f(e.$slots,"default",{},function(){return[e.image?(a(),h("img",o({key:0,src:e.image},e.ptm("image"),{class:e.cx("image")}),null,16,Ee)):e.$slots.icon?(a(),m(g(e.$slots.icon),o({key:1,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(a(),h("span",o({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):y("",!0),e.label!==null?(a(),h("div",o({key:3,class:e.cx("label")},e.ptm("label")),A(e.label),17)):y("",!0)]}),e.removable?f(e.$slots,"removeicon",{key:0,removeCallback:i.close,keydownCallback:i.onKeydown},function(){return[(a(),m(g(e.removeIcon?"span":"TimesCircleIcon"),o({class:[e.cx("removeIcon"),e.removeIcon],onClick:i.close,onKeydown:i.onKeydown},e.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):y("",!0)],16,Be)):y("",!0)}Z.render=Me;const De={"aria-labelledby":"chip-title"},He={id:"chip-title",class:"w-fit mx-auto text-xl rounded-xs custom-chip"},Le={class:"sr-only"},q=x({__name:"TopChip",props:{chipLabel:{}},setup(e){return(n,t)=>{const r=Z;return a(),h("div",De,[l("h2",He,[v(r,{label:n.chipLabel,pt:{root:{style:{borderRadius:"var(--p-menubar-border-radius)"}}}},null,8,["label"]),l("span",Le,A(n.chipLabel),1)])])}}}),Oe=e=>getComputedStyle(document.documentElement).getPropertyValue(e).trim(),Fe={"aria-labelledby":"academic-timeline"},Ne={class:"hidden sm:block"},je={class:"flex flex-col space-y-2"},Ue=["src","alt"],Re={class:"sm:hidden block"},Ve={class:"flex flex-col space-y-2"},Ze=["src","alt"],qe=x({__name:"AcademicTimeline",setup(e){const n=N([{status:"University of Padua: Master's Degree",date:"October 2024 - October 2026 (expected)",color:"orange",image:L.master_degree,description:"I am completing a Master's Degree in Computer Engineering in the Web Information and Data Engineering curriculum. My current average is 30/30, with an expected final grade of 110/110 cum laude and graduation on October 13, 2026. My thesis is titled ‘Modular Compiler Design for Emerging Compute-near-HBM Architectures.’",icon:"pi pi-graduation-cap"},{status:"University of Padua: Bachelor's Degree",date:"October 2021 - July 2024",color:"orange",image:L.bachelor_degree,description:"I earned my Bachelor's Degree in Computer Engineering from the University of Padua, graduating on July 17, 2024, with a final score of 110/110 cum laude.",icon:"pi pi-graduation-cap"}]);return(t,r)=>{const p=re,i=R;return a(),h("section",Fe,[r[0]||(r[0]=l("h2",{id:"academic-timeline",class:"sr-only"},"Academic Timeline",-1)),v(q,{"chip-label":"Academic Timeline",class:"pb-6"}),l("div",Ne,[v(i,{value:n.value,align:"alternate"},{marker:s(c=>[l("span",{class:"flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm",style:H({backgroundColor:C(Oe)("--color-favourite_yellow")})},[l("i",{class:P(c.item.icon),"aria-hidden":"true"},null,2)],4)]),content:s(c=>[v(p,{class:"mt-4"},{title:s(()=>[k(A(c.item.status),1)]),subtitle:s(()=>[k(A(c.item.date),1)]),content:s(()=>[l("section",je,[c.item.image?(a(),h("img",{key:0,src:c.item.image,alt:`Image representing ${c.item.status}`,width:"200",class:"shadow-sm rounded-md bg-white mx-auto"},null,8,Ue)):y("",!0),l("p",null,A(c.item.description),1)])]),_:2},1024)]),_:1},8,["value"])]),l("div",Re,[v(i,{value:n.value,align:"left",pt:{eventOpposite:{style:"flex: unset"}}},{marker:s(c=>[l("span",{class:"flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm",style:H({backgroundColor:c.item.color})},[l("i",{class:P(c.item.icon),"aria-hidden":"true"},null,2)],4)]),content:s(c=>[v(p,{class:"mt-4"},{title:s(()=>[k(A(c.item.status),1)]),subtitle:s(()=>[k(A(c.item.date),1)]),content:s(()=>[l("section",Ve,[c.item.image?(a(),h("img",{key:0,src:c.item.image,alt:`Image representing ${c.item.status}`,width:"200",class:"shadow-sm rounded-md bg-white mx-auto"},null,8,Ze)):y("",!0),l("p",null,A(c.item.description),1)])]),_:2},1024)]),_:1},8,["value"])])])}}});var Je={root:"p-accordioncontent",content:"p-accordioncontent-content"},We=$.extend({name:"accordioncontent",classes:Je}),Qe={name:"BaseAccordionContent",extends:w,props:{as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:We,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},E={name:"AccordionContent",extends:Qe,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],computed:{id:function(){return"".concat(this.$pcAccordion.$id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},ariaLabelledby:function(){return"".concat(this.$pcAccordion.$id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},attrs:function(){return o(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{id:this.id,role:"region","aria-labelledby":this.ariaLabelledby,"data-pc-name":"accordioncontent","data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function Ge(e,n,t,r,p,i){return e.asChild?f(e.$slots,"default",{key:1,class:P(e.cx("root")),active:i.$pcAccordionPanel.active,a11yAttrs:i.a11yAttrs}):(a(),m(Y,o({key:0,name:"p-toggleable-content"},e.ptm("transition",i.ptParams)),{default:s(function(){return[!i.$pcAccordion.lazy||i.$pcAccordionPanel.active?j((a(),m(g(e.as),o({key:0,class:e.cx("root")},i.attrs),{default:s(function(){return[l("div",o({class:e.cx("content")},e.ptm("content",i.ptParams)),[f(e.$slots,"default")],16)]}),_:3},16,["class"])),[[X,i.$pcAccordion.lazy?!0:i.$pcAccordionPanel.active]]):y("",!0)]}),_:3},16))}E.render=Ge;var Xe={root:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon"},Ye=$.extend({name:"accordionheader",classes:Xe}),en={name:"BaseAccordionHeader",extends:w,props:{as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:Ye,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},M={name:"AccordionHeader",extends:en,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){!this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onKeydown:function(n){switch(n.code){case"ArrowDown":this.onArrowDownKey(n);break;case"ArrowUp":this.onArrowUpKey(n);break;case"Home":this.onHomeKey(n);break;case"End":this.onEndKey(n);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(n);break}},onArrowDownKey:function(n){var t=this.findNextPanel(this.findPanel(n.currentTarget));t?this.changeFocusedPanel(n,t):this.onHomeKey(n),n.preventDefault()},onArrowUpKey:function(n){var t=this.findPrevPanel(this.findPanel(n.currentTarget));t?this.changeFocusedPanel(n,t):this.onEndKey(n),n.preventDefault()},onHomeKey:function(n){var t=this.findFirstPanel();this.changeFocusedPanel(n,t),n.preventDefault()},onEndKey:function(n){var t=this.findLastPanel();this.changeFocusedPanel(n,t),n.preventDefault()},onEnterKey:function(n){this.changeActiveValue(),n.preventDefault()},findPanel:function(n){return n?.closest('[data-pc-name="accordionpanel"]')},findHeader:function(n){return te(n,'[data-pc-name="accordionheader"]')},findNextPanel:function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=t?n:n.nextElementSibling;return r?O(r,"data-p-disabled")?this.findNextPanel(r):this.findHeader(r):null},findPrevPanel:function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=t?n:n.previousElementSibling;return r?O(r,"data-p-disabled")?this.findPrevPanel(r):this.findHeader(r):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(n,t){ne(this.findHeader(t))}},computed:{id:function(){return"".concat(this.$pcAccordion.$id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},ariaControls:function(){return"".concat(this.$pcAccordion.$id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},attrs:function(){return o(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":"accordionheader","data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}},dataP:function(){return K({active:this.$pcAccordionPanel.active})}},components:{ChevronUpIcon:U,ChevronDownIcon:oe},directives:{ripple:ee}};function nn(e,n,t,r,p,i){var c=ie("ripple");return e.asChild?f(e.$slots,"default",{key:1,class:P(e.cx("root")),active:i.$pcAccordionPanel.active,a11yAttrs:i.a11yAttrs,onClick:i.onClick}):j((a(),m(g(e.as),o({key:0,"data-p":i.dataP,class:e.cx("root"),onClick:i.onClick},i.attrs),{default:s(function(){return[f(e.$slots,"default",{active:i.$pcAccordionPanel.active}),f(e.$slots,"toggleicon",{active:i.$pcAccordionPanel.active,class:P(e.cx("toggleicon"))},function(){return[i.$pcAccordionPanel.active?(a(),m(g(i.$pcAccordion.$slots.collapseicon?i.$pcAccordion.$slots.collapseicon:i.$pcAccordion.collapseIcon?"span":"ChevronUpIcon"),o({key:0,class:[i.$pcAccordion.collapseIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",i.ptParams)),null,16,["class"])):(a(),m(g(i.$pcAccordion.$slots.expandicon?i.$pcAccordion.$slots.expandicon:i.$pcAccordion.expandIcon?"span":"ChevronDownIcon"),o({key:1,class:[i.$pcAccordion.expandIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",i.ptParams)),null,16,["class"]))]})]}),_:3},16,["data-p","class","onClick"])),[[c]])}M.render=nn;var tn={root:function(n){var t=n.instance,r=n.props;return["p-accordionpanel",{"p-accordionpanel-active":t.active,"p-disabled":r.disabled}]}},rn=$.extend({name:"accordionpanel",classes:tn}),an={name:"BaseAccordionPanel",extends:w,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:rn,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},D={name:"AccordionPanel",extends:an,inheritAttrs:!1,inject:["$pcAccordion"],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return o(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{"data-pc-name":"accordionpanel","data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function on(e,n,t,r,p,i){return e.asChild?f(e.$slots,"default",{key:1,class:P(e.cx("root")),active:i.active,a11yAttrs:i.a11yAttrs}):(a(),m(g(e.as),o({key:0,class:e.cx("root")},i.attrs),{default:s(function(){return[f(e.$slots,"default")]}),_:3},16,["class"]))}D.render=on;var cn=`
    .p-accordionpanel {
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-width: dt('accordion.panel.border.width');
        border-color: dt('accordion.panel.border.color');
    }

    .p-accordionheader {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('accordion.header.padding');
        color: dt('accordion.header.color');
        background: dt('accordion.header.background');
        border-style: solid;
        border-width: dt('accordion.header.border.width');
        border-color: dt('accordion.header.border.color');
        font-weight: dt('accordion.header.font.weight');
        border-radius: dt('accordion.header.border.radius');
        transition:
            background dt('accordion.transition.duration'),
            color dt('accordion.transition.duration'),
            outline-color dt('accordion.transition.duration'),
            box-shadow dt('accordion.transition.duration');
        outline-color: transparent;
    }

    .p-accordionpanel:first-child > .p-accordionheader {
        border-width: dt('accordion.header.first.border.width');
        border-start-start-radius: dt('accordion.header.first.top.border.radius');
        border-start-end-radius: dt('accordion.header.first.top.border.radius');
    }

    .p-accordionpanel:last-child > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');
    }

    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');
    }

    .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.color');
    }

    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
        box-shadow: dt('accordion.header.focus.ring.shadow');
        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');
        outline-offset: dt('accordion.header.focus.ring.offset');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
        background: dt('accordion.header.hover.background');
        color: dt('accordion.header.hover.color');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
        background: dt('accordion.header.active.background');
        color: dt('accordion.header.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
        background: dt('accordion.header.active.hover.background');
        color: dt('accordion.header.active.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.hover.color');
    }

    .p-accordioncontent-content {
        border-style: solid;
        border-width: dt('accordion.content.border.width');
        border-color: dt('accordion.content.border.color');
        background-color: dt('accordion.content.background');
        color: dt('accordion.content.color');
        padding: dt('accordion.content.padding');
    }
`,dn={root:"p-accordion p-component"},ln=$.extend({name:"accordion",style:cn,classes:dn}),sn={name:"BaseAccordion",extends:w,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:ln,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},J={name:"Accordion",extends:sn,inheritAttrs:!1,emits:["update:value","update:activeIndex","tab-open","tab-close","tab-click"],data:function(){return{d_value:this.value}},watch:{value:function(n){this.d_value=n},activeIndex:{immediate:!0,handler:function(n){this.hasAccordionTab&&(this.d_value=this.multiple?n?.map(String):n?.toString())}}},methods:{isItemActive:function(n){var t;return this.multiple?(t=this.d_value)===null||t===void 0?void 0:t.includes(n):this.d_value===n},updateValue:function(n){var t,r=this.isItemActive(n);this.multiple?r?this.d_value=this.d_value.filter(function(p){return p!==n}):this.d_value?this.d_value.push(n):this.d_value=[n]:this.d_value=r?null:n,this.$emit("update:value",this.d_value),this.$emit("update:activeIndex",this.multiple?(t=this.d_value)===null||t===void 0?void 0:t.map(Number):Number(this.d_value)),this.$emit(r?"tab-close":"tab-open",{originalEvent:void 0,index:Number(n)})},isAccordionTab:function(n){return n.type.name==="AccordionTab"},getTabProp:function(n,t){return n.props?n.props[t]:void 0},getKey:function(n,t){return this.getTabProp(n,"header")||t},getHeaderPT:function(n,t){var r=this;return{root:o({onClick:function(i){return r.onTabClick(i,t)}},this.getTabProp(n,"headerProps"),this.getTabPT(n,"header",t)),toggleicon:o(this.getTabProp(n,"headeractionprops"),this.getTabPT(n,"headeraction",t))}},getContentPT:function(n,t){return{root:o(this.getTabProp(n,"contentProps"),this.getTabPT(n,"toggleablecontent",t)),transition:this.getTabPT(n,"transition",t),content:this.getTabPT(n,"content",t)}},getTabPT:function(n,t,r){var p=this.tabs.length,i={props:n.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:r,count:p,first:r===0,last:r===p-1,active:this.isItemActive("".concat(r))}};return o(this.ptm("accordiontab.".concat(t),i),this.ptmo(this.getTabProp(n,"pt"),t,i))},onTabClick:function(n,t){this.$emit("tab-click",{originalEvent:n,index:t})}},computed:{tabs:function(){var n=this;return this.$slots.default().reduce(function(t,r){return n.isAccordionTab(r)?t.push(r):r.children&&r.children instanceof Array&&r.children.forEach(function(p){n.isAccordionTab(p)&&t.push(p)}),t},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:D,AccordionHeader:M,AccordionContent:E,ChevronUpIcon:U,ChevronRightIcon:ce}};function pn(e,n,t,r,p,i){var c=S("AccordionHeader"),d=S("AccordionContent"),W=S("AccordionPanel");return a(),h("div",o({class:e.cx("root")},e.ptmi("root")),[i.hasAccordionTab?(a(!0),h(_,{key:0},B(i.tabs,function(u,b){return a(),m(W,{key:i.getKey(u,b),value:"".concat(b),pt:{root:i.getTabPT(u,"root",b)},disabled:i.getTabProp(u,"disabled")},{default:s(function(){return[v(c,{class:P(i.getTabProp(u,"headerClass")),pt:i.getHeaderPT(u,b)},{toggleicon:s(function(I){return[I.active?(a(),m(g(e.$slots.collapseicon?e.$slots.collapseicon:e.collapseIcon?"span":"ChevronDownIcon"),o({key:0,class:[e.collapseIcon,I.class],"aria-hidden":"true"},{ref_for:!0},i.getTabPT(u,"headericon",b)),null,16,["class"])):(a(),m(g(e.$slots.expandicon?e.$slots.expandicon:e.expandIcon?"span":"ChevronUpIcon"),o({key:1,class:[e.expandIcon,I.class],"aria-hidden":"true"},{ref_for:!0},i.getTabPT(u,"headericon",b)),null,16,["class"]))]}),default:s(function(){return[u.children&&u.children.headericon?(a(),m(g(u.children.headericon),{key:0,isTabActive:i.isItemActive("".concat(b)),active:i.isItemActive("".concat(b)),index:b},null,8,["isTabActive","active","index"])):y("",!0),u.props&&u.props.header?(a(),h("span",o({key:1,ref_for:!0},i.getTabPT(u,"headertitle",b)),A(u.props.header),17)):y("",!0),u.children&&u.children.header?(a(),m(g(u.children.header),{key:2})):y("",!0)]}),_:2},1032,["class","pt"]),v(d,{pt:i.getContentPT(u,b)},{default:s(function(){return[(a(),m(g(u)))]}),_:2},1032,["pt"])]}),_:2},1032,["value","pt","disabled"])}),128)):f(e.$slots,"default",{key:1})],16)}J.render=pn;const un={"aria-labelledby":"meaningful-experiences"},hn=["innerHTML"],mn=x({__name:"MeaningfulExperiences",setup(e){const t=[{title:"imec — Research Internship & Master’s Thesis ⚙️",content:`
            From February through August 2026, I joined the TACOS group at imec in Leuven, Belgium. I designed and
            implemented a modular FIMDRAM backend in the MLIR-based Cinnamon compiler for two compute-near-HBM
            architectures. The work introduced a dedicated dialect and intermediate representation, declarative target
            models, interchangeable lowering policies, staged verification, and reproducible compiler artifacts. It also
            became my master’s thesis: <strong>Modular Compiler Design for Emerging Compute-near-HBM Architectures</strong>.
        `},{title:"Freelance Software Development 🌐",content:`
            Since 2023, I have delivered paid production software for external organizations. My work includes
            MedjugorjeService, a multilingual radio-loan management platform with document generation and administrative
            workflows; SoleAzzurroCucce, an e-commerce platform with Nexi payments and social authentication; and
            Capricciosa Pizzerie, a managed business website for menus and events. These projects gave me end-to-end
            ownership of requirements, architecture, deployment, and long-term maintenance.
        `},{title:"CLEF 2025 — First-Author Paper 📄",content:`
            I led the implementation of Team BASETTE’s multithreaded Lucene retrieval system for the CLEF 2025
            LongEval lab. The system targeted strong retrieval quality on commodity CPU hardware. I profiled indexing
            and retrieval and built an Optuna workflow to tune BM25, preprocessing, reranking, and filtering parameters
            across time-shifted corpora.
            <div class="my-auto flex w-fit flex-wrap gap-2 pt-4">
                <a href="https://ceur-ws.org/Vol-4038/paper_268.pdf" target="_blank" rel="noopener noreferrer"
                   class="text-xs px-2 py-1 rounded-md shadow border text-favourite_yellow hover:underline hover:underline-offset-3">
                    Read the paper
                </a>
                <a href="https://bitbucket.org/upd-dei-stud-prj/seupd2425-basette" target="_blank" rel="noopener noreferrer"
                   class="text-xs px-2 py-1 rounded-md shadow border text-favourite_yellow hover:underline hover:underline-offset-3">
                    View the code
                </a>
            </div>
        `},{title:"Bachelor’s Thesis 🎓",content:`
            I designed and validated a flexible piezoresistive pressure sensor for an intelligent walker. The project
            combined sensor prototyping, Arduino-based acquisition, firmware, and experimental analysis to evaluate
            sensitivity and reliability as groundwork for predicting a user’s intended turning direction.
            <div class="my-auto w-fit pt-4">
                <a href="/files/Alberto-Bottari-Bachelor-Thesis.pdf" download
                   class="text-xs px-2 py-1 rounded-md shadow border text-favourite_yellow hover:underline hover:underline-offset-3">
                    Download the bachelor’s thesis (Italian)
                </a>
            </div>
        `},{title:"Home Infrastructure 🖥️",content:`
            I operate a Proxmox home server with virtual machines and containers. Maintaining it has given me practical
            experience with Linux administration, networking, Bash automation, reverse proxies, VPNs, storage, and
            infrastructure troubleshooting.
        `}].map((p,i)=>({...p,value:i})),r=N(0);return(p,i)=>{const c=ae;return a(),h("section",un,[i[1]||(i[1]=l("h2",{id:"meaningful-experiences",class:"sr-only"}," Meaningful Experiences ",-1)),v(q,{"chip-label":"Professional & Research Experience",class:"py-6 pt-6"}),v(c,{class:"headerless-panel p-1 sm:p-2"},{default:s(()=>[v(C(J),{value:r.value,"onUpdate:value":i[0]||(i[0]=d=>r.value=d),class:"pb-2"},{default:s(()=>[(a(!0),h(_,null,B(C(t),d=>(a(),m(C(D),{key:d.value,value:d.value,"aria-labelledby":`tab-title-${d.value}`,role:"tabpanel"},{default:s(()=>[v(C(M),{id:`tab-title-${d.value}`,"aria-expanded":r.value===d.value,"aria-controls":`tab-content-${d.value}`,class:P({"active-header":r.value===d.value})},{default:s(()=>[k(A(d.title),1)]),_:2},1032,["id","aria-expanded","aria-controls","class"]),v(C(E),{id:`tab-content-${d.value}`},{default:s(()=>[l("div",{class:"m-0",innerHTML:d.content},null,8,hn)]),_:2},1032,["id"])]),_:2},1032,["value","aria-labelledby"]))),128))]),_:1},8,["value"])]),_:1})])}}}),vn=de(mn,[["__scopeId","data-v-635971c0"]]),fn={"aria-labelledby":"academic-section"},gn={"aria-labelledby":"experiences-section"},wn=x({__name:"CurriculumMenu",setup(e){return(n,t)=>(a(),h(_,null,[l("section",fn,[t[0]||(t[0]=l("h2",{id:"academic-section",class:"sr-only"},"Academic Timeline",-1)),v(qe,{class:"pb-6"})]),l("section",gn,[t[1]||(t[1]=l("h2",{id:"experiences-section",class:"sr-only"}," Professional and Research Experience ",-1)),v(vn)])],64))}});export{wn as default};
