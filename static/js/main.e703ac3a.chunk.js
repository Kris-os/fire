(this["webpackJsonpopul-front-end"]=this["webpackJsonpopul-front-end"]||[]).push([[0],{172:function(e,t,a){e.exports=a.p+"static/media/OpulIcon.f62d8699.png"},208:function(e,t,a){e.exports=a(407)},213:function(e,t,a){},405:function(e,t,a){},406:function(e,t,a){},407:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(16),l=a.n(r),o=(a(213),a(17)),i=a(18),c=a(20),m=a(19),u=a(12),p=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement(u.f,null,s.a.createElement(u.d,{data:(e=this.props.results,t=this.props.age,d(e.baseCaseResults,e.lowerMonthlySpendResults,e.oneOffPurchaseResults,t)),margin:{top:5,right:30,left:20,bottom:5},dot:"false"},s.a.createElement(u.h,{dataKey:"age",type:"number",domain:[this.props.age],ticks:h(this.props.age)},s.a.createElement(u.a,{value:"Age",offset:0,position:"insideBottom"})),s.a.createElement(u.i,null,s.a.createElement(u.a,{value:"Net-worth",dy:40,offset:-20,position:"insideTopLeft"})),s.a.createElement(u.g,null),s.a.createElement(u.b,null),s.a.createElement(u.e,{y:0,stroke:"#666666",label:""}),s.a.createElement(u.c,{name:"One-off purchase",type:"monotone",dataKey:"oneOffPurchaseResults",dot:!1,stroke:"#c7ceea",strokeWidth:4}),s.a.createElement(u.e,{x:Number(this.props.results.oneOffPurchaseDaysUntilFinancialIndependence)/365.25+Number(this.props.age),stroke:"#c7ceea",label:""}),s.a.createElement(u.c,{name:"Lower monthly spend",type:"monotone",dataKey:"lowerMonthlySpendResults",dot:!1,stroke:"#75c2a6",strokeWidth:4}),s.a.createElement(u.e,{x:Number(this.props.results.lowerMonthlySpendDaysUntilFinancialIndependence)/365.25+Number(this.props.age),stroke:"#75c2a6",label:""}),s.a.createElement(u.c,{name:"Base case",type:"monotone",dataKey:"networth",dot:!1,stroke:"#ff9aa2",strokeWidth:4}),s.a.createElement(u.e,{x:Number(this.props.results.daysUntilFinancialIndependence)/365.25+Number(this.props.age),stroke:"#ffb7b2",label:""})));var e,t}}]),a}(n.PureComponent);function d(e,t,a,n){var s,r=[];if(null==e)return r;for(s=0;s<e.length;s++)r.push({networth:e[s],lowerMonthlySpendResults:t[s],oneOffPurchaseResults:a[s],age:s/12+Number(n)});return r}function h(e){var t=Number(e),a=[];a[0]=Math.floor(t);for(var n=t+1,s=1;n<91;)Math.floor(n)%10===0&&(a[s]=Math.floor(n),s++),n++;return a}var E=a(412),y=a(409),f=a(171),b=a(170),g=a.n(b),v=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={value:e.props.initialValue},e}return Object(i.a)(a,[{key:"onInputChange",value:function(e){var t=e;null!=t&&(t=t.toFixed(this.props.precision)),null!=t&&t>this.props.max&&(t=this.props.max),null!=t&&t<this.props.min&&(t=this.props.min),this.setState({value:t}),this.props.updateState(this.props.id,t)}},{key:"render",value:function(){return s.a.createElement(g.a,{className:"form-control",id:this.props.id,min:this.props.min,max:this.props.max,onChange:this.onInputChange.bind(this),precision:this.props.precision,value:this.state.value,step:this.props.step,style:!1,snap:!0})}}]),a}(n.Component),N=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"inputs "+this.props.className},s.a.createElement("h3",null,"Inputs"),s.a.createElement("br",null),s.a.createElement(E.a,null,s.a.createElement(y.a,{className:"paddingTopAndBottomSmall"},s.a.createElement(f.a,{column:!0,sm:6},"Age"),s.a.createElement(f.a,{sm:6},s.a.createElement(v,{id:"age",updateState:this.props.updateState,min:0,max:89}))),s.a.createElement(y.a,{className:"paddingTopAndBottomSmall"},s.a.createElement(f.a,{column:!0,sm:6},"Net-worth"),s.a.createElement(f.a,{sm:6},s.a.createElement(v,{id:"networth",updateState:this.props.updateState}))),s.a.createElement(y.a,{className:"paddingTopAndBottomSmall"},s.a.createElement(f.a,{column:!0,sm:6},"Annual cost of lifestyle"),s.a.createElement(f.a,{sm:6},s.a.createElement(v,{id:"expenditure",updateState:this.props.updateState,min:0}))),s.a.createElement(y.a,{className:"paddingTopAndBottomSmall"},s.a.createElement(f.a,{column:!0,sm:6},"Annual net earnings"),s.a.createElement(f.a,{sm:6},s.a.createElement(v,{id:"netEarnings",updateState:this.props.updateState,min:0}))),s.a.createElement(y.a,{className:"paddingTopAndBottomSmall"},s.a.createElement(f.a,{column:!0,sm:6},"Inheritance to leave behind"),s.a.createElement(f.a,{sm:6},s.a.createElement(v,{id:"inheritanceToLeaveBehind",updateState:this.props.updateState,min:0})))),s.a.createElement("br",null),s.a.createElement("h3",null,"Assumptions"),s.a.createElement("br",null),s.a.createElement(E.a,null,s.a.createElement(y.a,{className:"paddingTopAndBottomSmall"},s.a.createElement(f.a,{column:!0,sm:6},"Investment return above inflation (% pa)"),s.a.createElement(f.a,{sm:6},s.a.createElement(v,{id:"returnAboveInflationAssumption",updateState:this.props.updateState,min:0,max:8,precision:1,step:.1,initialValue:4})))))}}]),a}(n.Component),x=a(413),S=a(414),k=a(172),O=a.n(k),w=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(x.a,{bg:"dark"},s.a.createElement(x.a.Brand,{href:"#home"},s.a.createElement("img",{alt:"",src:O.a,width:"140",height:"70",className:"d-inline-block align-top"})),s.a.createElement(x.a.Collapse,{id:"basic-navbar-nav"},s.a.createElement(S.a,{className:"mr-auto"},s.a.createElement(S.a.Link,{href:"#home"},"Model\xa0"),s.a.createElement(S.a.Link,{href:"#link"},"About\xa0")))))}}]),a}(n.Component),A=a(410),j=a(411),B=a(415);a(405),a(406);var M=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).updateState=function(t,a){var n=e.state.inputsDictionary;n[t]=a,e.setState({inputsDictionary:n},(function(){e.runCalcs()}))},e.state={inputsDictionary:{age:0,expenditure:0,inheritanceToLeaveBehind:0,lowerSpend:0,netEarnings:0,networth:0,oneOffPurchase:0,returnAboveInflationAssumption:4},results:{yearsMonthsDays1:[0,0,0],yearsMonthsDays2:[0,0,0],yearsMonthsDays3:[0,0,0]}},e}return Object(i.a)(a,[{key:"runCalcs",value:function(){var e=this,t="https://opulazurefunction.azurewebsites.net/api/OpulFunction?code=".concat("knQ/VjpwL2MfVud2ONtIJQmj76yBYJuTcevlVIEjmqDSGVa22AxiBg==");fetch(t,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(this.state.inputsDictionary)}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({results:t})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(w,null),s.a.createElement(A.a,{fluid:!0},s.a.createElement(y.a,{className:"align-items-start"},s.a.createElement(f.a,{md:"4",className:"padding30"},s.a.createElement("h4",null,"A financial model designed to help you with the big questions."),s.a.createElement(N,{className:"paddingTopAndBottomLarge",updateState:this.updateState,intialReturnAssumption:4})),s.a.createElement(f.a,{md:"8",className:"padding30"},s.a.createElement("h3",{className:"paddingTopAndBottomLarge"},"Projected net-worth over lifetime"),s.a.createElement("div",{style:{height:"30vw"}},s.a.createElement(p,{results:this.state.results,age:this.state.inputsDictionary.age})),s.a.createElement(j.a,null,s.a.createElement(B.a,{style:{minWidth:"300px"},className:"marginTopAndBottomLarge border-3",border:"pink"},s.a.createElement(B.a.Body,null,s.a.createElement(B.a.Text,null,s.a.createElement("h4",null,"Projected financial freedom - Age\xa0",s.a.createElement("text",{className:"bold"},this.state.results.baseCaseFinancialFreedomAge)),s.a.createElement("div",null,"\n"),s.a.createElement("text",{className:"bold"},this.state.results.yearsMonthsDays1[0]," "),"years\xa0\xa0",s.a.createElement("text",{className:"bold"},this.state.results.yearsMonthsDays1[1]," "),"months\xa0\xa0",s.a.createElement("text",{className:"bold"},this.state.results.yearsMonthsDays1[2]," ")," ","days"))),s.a.createElement(B.a,{className:"marginTopAndBottomLarge border-3",style:{minWidth:"300px"},border:"green"},s.a.createElement(B.a.Body,null,s.a.createElement(B.a.Text,null,s.a.createElement("h4",null,"Impact of reduction in lifestyle"),"Cutting back by"," ",s.a.createElement(v,{id:"lowerSpend",updateState:this.updateState})," ","a month cuts working lifetime by:",s.a.createElement("div",null,"\n"),s.a.createElement("text",{className:"bold"},this.state.results.yearsMonthsDays2[0])," ","years\xa0\xa0",s.a.createElement("text",{className:"bold"},this.state.results.yearsMonthsDays2[1])," ","months\xa0\xa0",s.a.createElement("text",{className:"bold"},this.state.results.yearsMonthsDays2[2])," ","days"))),s.a.createElement(B.a,{className:"marginTopAndBottomLarge border-3",style:{minWidth:"300px"},border:"blue"},s.a.createElement(B.a.Body,null,s.a.createElement(B.a.Text,null,s.a.createElement("h4",null,"One-off purchase"),"A one-off purchase of"," ",s.a.createElement(v,{id:"oneOffPurchase",updateState:this.updateState}),"increases working lifetime by",s.a.createElement("div",null,"\n"),s.a.createElement("text",{className:"bold"},this.state.results.yearsMonthsDays3[0])," ","years\xa0\xa0",s.a.createElement("text",{className:"bold"},this.state.results.yearsMonthsDays3[1])," ","months\xa0\xa0",s.a.createElement("text",{className:"bold"},this.state.results.yearsMonthsDays3[2])," ","days"))),s.a.createElement(B.a,{className:"marginTopAndBottomLarge border-3",style:{minWidth:"300px"}},s.a.createElement(B.a.Body,null,s.a.createElement(B.a.Text,null,s.a.createElement("h4",null,"Getting a head start"),"2 years of saving an extra"," ",s.a.createElement("text",{className:"bold"},"200")," a month reduces working lifetime by",s.a.createElement("div",null,"\n"),s.a.createElement("text",{className:"bold"},this.state.results.yearsMonthsDays2[0])," ","years\xa0\xa0",s.a.createElement("text",{className:"bold"},this.state.results.yearsMonthsDays2[1])," ","months\xa0\xa0",s.a.createElement("text",{className:"bold"},this.state.results.yearsMonthsDays2[2])," ","days"))))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[208,1,2]]]);
//# sourceMappingURL=main.e703ac3a.chunk.js.map