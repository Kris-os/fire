(this["webpackJsonpopul-front-end"]=this["webpackJsonpopul-front-end"]||[]).push([[0],{193:function(e,t,a){e.exports=a(392)},198:function(e,t,a){},390:function(e,t,a){},391:function(e,t,a){},392:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(36),l=a.n(r),o=(a(198),a(17)),c=a(18),i=a(20),m=a(19),u=a(21),d=a(12),p=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(d.f,null,s.a.createElement(d.d,{data:(e=this.props.results,t=this.props.age,h(e.baseCaseResults,e.lowerMonthlySpendResults,e.oneOffPurchaseResults,t)),margin:{top:5,right:30,left:20,bottom:5},dot:"false"},s.a.createElement(d.h,{dataKey:"age",type:"number",domain:[this.props.age],ticks:y(this.props.age)},s.a.createElement(d.a,{value:"Age",offset:0,position:"insideBottom"})),s.a.createElement(d.i,null,s.a.createElement(d.a,{value:"Net-worth",dy:40,offset:-20,position:"insideTopLeft"})),s.a.createElement(d.g,null),s.a.createElement(d.b,null),s.a.createElement(d.e,{y:0,stroke:"#666666",label:""}),s.a.createElement(d.c,{name:"One-off purchase",type:"monotone",dataKey:"oneOffPurchaseResults",dot:!1,stroke:"#c7ceea",strokeWidth:4}),s.a.createElement(d.e,{x:Number(this.props.results.oneOffPurchaseDaysUntilFinancialIndependence)/365.25+Number(this.props.age),stroke:"#c7ceea",label:""}),s.a.createElement(d.c,{name:"Lower monthly spend",type:"monotone",dataKey:"lowerMonthlySpendResults",dot:!1,stroke:"#75c2a6",strokeWidth:4}),s.a.createElement(d.e,{x:Number(this.props.results.lowerMonthlySpendDaysUntilFinancialIndependence)/365.25+Number(this.props.age),stroke:"#75c2a6",label:""}),s.a.createElement(d.c,{name:"Base case",type:"monotone",dataKey:"networth",dot:!1,stroke:"#ff9aa2",strokeWidth:4}),s.a.createElement(d.e,{x:Number(this.props.results.daysUntilFinancialIndependence)/365.25+Number(this.props.age),stroke:"#ffb7b2",label:""})));var e,t}}]),t}(n.PureComponent);function h(e,t,a,n){var s,r=[];if(null==e)return r;for(s=0;s<e.length;s++)r.push({networth:e[s],lowerMonthlySpendResults:t[s],oneOffPurchaseResults:a[s],age:s/12+Number(n)});return r}function y(e){var t=Number(e),a=[];a[0]=Math.floor(t);for(var n=t+1,s=1;n<91;)Math.floor(n)%10===0&&(a[s]=Math.floor(n),s++),n++;return a}var f=a(396),E=a(393),b=a(162),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={value:0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"onInputChange",value:function(e){this.setState({value:e.target.value}),this.props.updateState(this.props.id,e.target.value)}},{key:"render",value:function(){return s.a.createElement(f.a.Control,{type:"number",onChange:this.onInputChange.bind(this)})}}]),t}(n.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"inputs "+this.props.className},s.a.createElement("h3",null,"Inputs"),s.a.createElement("br",null),s.a.createElement(f.a,null,s.a.createElement(E.a,{className:"paddingTopAndBottomSmall"},s.a.createElement(b.a,{column:!0,sm:6},"Age"),s.a.createElement(b.a,{sm:6},s.a.createElement(g,{id:"age",updateState:this.props.updateState}))),s.a.createElement(E.a,{className:"paddingTopAndBottomSmall"},s.a.createElement(b.a,{column:!0,sm:6},"Net-worth"),s.a.createElement(b.a,{sm:6},s.a.createElement(g,{id:"networth",updateState:this.props.updateState}))),s.a.createElement(E.a,{className:"paddingTopAndBottomSmall"},s.a.createElement(b.a,{column:!0,sm:6},"Annual cost of lifestyle"),s.a.createElement(b.a,{sm:6},s.a.createElement(g,{id:"expenditure",updateState:this.props.updateState}))),s.a.createElement(E.a,{className:"paddingTopAndBottomSmall"},s.a.createElement(b.a,{column:!0,sm:6},"Annual net earnings"),s.a.createElement(b.a,{sm:6}," ",s.a.createElement(g,{id:"netEarnings",updateState:this.props.updateState}))),s.a.createElement(E.a,{className:"paddingTopAndBottomSmall"},s.a.createElement(b.a,{column:!0,sm:6},"Margin of safety"),s.a.createElement(b.a,{sm:6}," ",s.a.createElement(g,{id:"marginOfSafety",updateState:this.props.updateState})))))}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("header",{className:"App-header"},"Opul")}}]),t}(n.Component),O=a(394),S=a(395),j=a(397);a(390),a(391);var w=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).updateState=function(t,a){var n=e.state.inputsDictionary;n[t]=a,e.setState({inputsDictionary:n},(function(){e.runCalcs()}))},e.state={inputsDictionary:{age:0,networth:0,expenditure:0,netEarnings:0,marginOfSafety:0,lowerSpend:0,oneOffPurchase:0},results:{yearsMonthsDays1:[0,0,0],yearsMonthsDays2:[0,0,0],yearsMonthsDays3:[0,0,0]}},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"runCalcs",value:function(){var e=this,t="https://opulazurefunction.azurewebsites.net/api/OpulFunction?code=".concat("knQ/VjpwL2MfVud2ONtIJQmj76yBYJuTcevlVIEjmqDSGVa22AxiBg==");fetch(t,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(this.state.inputsDictionary)}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({results:t})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(v,null),s.a.createElement(O.a,{fluid:!0},s.a.createElement(E.a,{className:"align-items-center"},s.a.createElement(b.a,{md:"4",className:"padding30"},s.a.createElement(N,{className:"paddingTopAndBottomLarge",updateState:this.updateState})),s.a.createElement(b.a,{md:"8",className:"padding30"},s.a.createElement("h3",{className:"paddingTopAndBottomLarge"},"Projected net-worth over lifetime"),s.a.createElement("div",{style:{height:"30vw"}},s.a.createElement(p,{results:this.state.results,age:this.state.inputsDictionary.age})),s.a.createElement(S.a,null,s.a.createElement(j.a,{style:{minWidth:"300px"},className:"marginTopAndBottomLarge border-3",border:"pink"},s.a.createElement(j.a.Body,null,s.a.createElement(j.a.Text,null,s.a.createElement("h4",null,"Projected financial freedom - Age\xa0",s.a.createElement("text",{className:"bold"},this.state.results.baseCaseFinancialFreedomAge)),s.a.createElement("div",null,"\n"),s.a.createElement("text",{className:"bold"},this.state.results.yearsMonthsDays1[0]," "),"years\xa0\xa0",s.a.createElement("text",{className:"bold"},this.state.results.yearsMonthsDays1[1]," "),"months\xa0\xa0",s.a.createElement("text",{className:"bold"},this.state.results.yearsMonthsDays1[2]," ")," ","days"))),s.a.createElement(j.a,{className:"marginTopAndBottomLarge border-3",style:{minWidth:"300px"},border:"green"},s.a.createElement(j.a.Body,null,s.a.createElement(j.a.Text,null,s.a.createElement("h4",null,"Impact of reduction in lifestyle"),"Cutting back by"," ",s.a.createElement(g,{id:"lowerSpend",updateState:this.updateState})," ","a month cuts working lifetime by:",s.a.createElement("div",null,"\n"),s.a.createElement("text",{className:"bold"},this.state.results.yearsMonthsDays2[0])," ","years\xa0\xa0",s.a.createElement("text",{className:"bold"},this.state.results.yearsMonthsDays2[1])," ","months\xa0\xa0",s.a.createElement("text",{className:"bold"},this.state.results.yearsMonthsDays2[2])," ","days"))),s.a.createElement(j.a,{className:"marginTopAndBottomLarge border-3",style:{minWidth:"300px"},border:"blue"},s.a.createElement(j.a.Body,null,s.a.createElement(j.a.Text,null,s.a.createElement("h4",null,"One-off purchase"),"A one-off purchase of"," ",s.a.createElement(g,{id:"oneOffPurchase",updateState:this.updateState}),"increases working lifetime by",s.a.createElement("div",null,"\n"),s.a.createElement("text",{className:"bold"},this.state.results.yearsMonthsDays3[0])," ","years\xa0\xa0",s.a.createElement("text",{className:"bold"},this.state.results.yearsMonthsDays3[1])," ","months\xa0\xa0",s.a.createElement("text",{className:"bold"},this.state.results.yearsMonthsDays3[2])," ","days"))),s.a.createElement(j.a,{className:"marginTopAndBottomLarge border-3",style:{minWidth:"300px"}},s.a.createElement(j.a.Body,null,s.a.createElement(j.a.Text,null,s.a.createElement("h4",null,"Getting a head start"),"2 years of saving an extra"," ",s.a.createElement("text",{className:"bold"},"200")," a month reduces working lifetime by",s.a.createElement("div",null,"\n"),s.a.createElement("text",{className:"bold"},this.state.results.yearsMonthsDays2[0])," ","years\xa0\xa0",s.a.createElement("text",{className:"bold"},this.state.results.yearsMonthsDays2[1])," ","months\xa0\xa0",s.a.createElement("text",{className:"bold"},this.state.results.yearsMonthsDays2[2])," ","days"))))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[193,1,2]]]);
//# sourceMappingURL=main.cde66f7c.chunk.js.map