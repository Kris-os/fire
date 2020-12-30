(this["webpackJsonpopul-front-end"]=this["webpackJsonpopul-front-end"]||[]).push([[0],{189:function(e,a,t){e.exports=t.p+"static/media/OpulIcon.f62d8699.png"},224:function(e,a,t){e.exports=t(424)},229:function(e,a,t){},423:function(e,a,t){},424:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(22),s=t.n(r),o=(t(229),t(11)),i=t(43),c=t(47),m=t(431),u=t(427),d=t(170),p=t(169),y=t.n(p);var f=function(e){var a=Object(n.useState)(e.initialValue),t=Object(o.a)(a,2),r=t[0],s=t[1];return l.a.createElement(y.a,{className:"form-control",min:e.min,max:e.max,onChange:function(a){var t=a;null!=t&&(t=t.toFixed(e.precision)),null!=t&&t>e.max&&(t=e.max),null!=t&&t<e.min&&(t=e.min),s(t),e.updateInputs(e.inputId,t)}.bind(this),precision:e.precision,value:r,step:e.step,style:!1,snap:!0})};var h=function(e){var a=function(e){e.preventDefault()};return l.a.createElement("div",{className:"inputs"},l.a.createElement("h3",{className:"marginTopAndBottomLarge"},"How can I reach financial freedom?"),l.a.createElement("div",{style:{textAlign:"left"}},"Step 1 - Choose the lifestyle you want to live. Understand there's a trade-off between the cost of your lifestyle and how many years you will work. Use the lifestyle tool to help make this choice.",l.a.createElement("br",null),"Step 2 - Invest. ",l.a.createElement("br",null)," Step 3 - Track progress & update as life changes",l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("h3",{className:"marginTopAndBottomLarge"},"Your ",l.a.createElement("text",{className:"bold baseCaseColor"},"current situation")),l.a.createElement("br",null),l.a.createElement(m.a,{onSubmit:a,style:{textAlign:"right"}},l.a.createElement(u.a,{className:"paddingTopAndBottomSmall"},l.a.createElement(d.a,{sm:6},"Age"),l.a.createElement(d.a,{sm:6},l.a.createElement(f,{inputId:"age",updateInputs:e.updateInputs,min:0,max:88}))),l.a.createElement(u.a,{className:"paddingTopAndBottomSmall"},l.a.createElement(d.a,{sm:6},"Net-worth"),l.a.createElement(d.a,{sm:6},l.a.createElement(f,{inputId:"networth",updateInputs:e.updateInputs}))),l.a.createElement(u.a,{className:"paddingTopAndBottomSmall"},l.a.createElement(d.a,{sm:6},"Earnings per year (after tax)"),l.a.createElement(d.a,{sm:6},l.a.createElement(f,{inputId:"netEarnings",updateInputs:e.updateInputs,min:0}))),l.a.createElement(u.a,{className:"paddingTopAndBottomSmall"},l.a.createElement(d.a,{sm:6},"Lifestyle cost per year"),l.a.createElement(d.a,{sm:6},l.a.createElement(f,{inputId:"expenditure",updateInputs:e.updateInputs,min:0}))),l.a.createElement(u.a,{className:"paddingTopAndBottomSmall"},l.a.createElement(d.a,{sm:6},"Inheritance to leave behind"),l.a.createElement(d.a,{sm:6},l.a.createElement(f,{inputId:"inheritanceToLeaveBehind",updateInputs:e.updateInputs,min:0})))),l.a.createElement("br",null),l.a.createElement("h3",null,"Assumptions"),l.a.createElement("br",null),l.a.createElement(m.a,{onSubmit:a,style:{textAlign:"right"}},l.a.createElement(u.a,{className:"paddingTopAndBottomSmall"},l.a.createElement(d.a,{sm:6},"Investment return above inflation (% pa)"),l.a.createElement(d.a,{sm:6},l.a.createElement(f,{inputId:"returnAboveInflationAssumption",updateInputs:e.updateInputs,min:0,max:8,precision:1,step:.1,initialValue:4}))),l.a.createElement(u.a,{className:"paddingTopAndBottomSmall"},l.a.createElement(d.a,{sm:6},"Salary growth per year above inflation (% pa)"),l.a.createElement(d.a,{sm:6},l.a.createElement(f,{inputId:"salaryGrowthAssumption",updateInputs:e.updateInputs,min:0,max:10,precision:1,step:.1,initialValue:3}))),l.a.createElement(u.a,{className:"paddingTopAndBottomSmall"},l.a.createElement(d.a,{sm:6},"Years until salary growth stops"),l.a.createElement(d.a,{sm:6},l.a.createElement(f,{inputId:"salaryGrowthYearsAssumption",updateInputs:e.updateInputs,min:0,max:30,initialValue:15}))),l.a.createElement(u.a,{className:"paddingTopAndBottomSmall"},l.a.createElement(d.a,{sm:6},"State pension age"),l.a.createElement(d.a,{sm:6},l.a.createElement(f,{inputId:"statePensionAgeAssumption",updateInputs:e.updateInputs,min:55,max:75,initialValue:65}))),l.a.createElement(u.a,{className:"paddingTopAndBottomSmall"},l.a.createElement(d.a,{sm:6},"State pension amount per year"),l.a.createElement(d.a,{sm:6},l.a.createElement(f,{inputId:"statePensionAmountAssumption",updateInputs:e.updateInputs,min:0,initialValue:0}))),l.a.createElement(u.a,{className:"paddingTopAndBottomSmall"},l.a.createElement(d.a,{sm:6},"You live in a developed country"),l.a.createElement(d.a,{sm:6})),l.a.createElement(u.a,{className:"paddingTopAndBottomSmall"},l.a.createElement(d.a,{sm:6},"Everything is linked to inflation"),l.a.createElement(d.a,{sm:6}))))},E=t(429),g=t(434),b=t(171),v=t(172),x=t(193),N=t(192),w=t(12),A=function(e){Object(x.a)(t,e);var a=Object(N.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(v.a)(t,[{key:"render",value:function(){return l.a.createElement(w.f,null,l.a.createElement(w.d,{data:(e=this.props.results,a=this.props.age,I(e.currentSituationCase.results,e.lowerMonthlySpendCase.results,e.lowerDailySpendCase.results,e.oneOffPurchaseCase.results,null===e.alternateLifestyle1Case?null:e.alternateLifestyle1Case.results,null===e.alternateLifestyle2Case?null:e.alternateLifestyle2Case.results,a)),margin:{top:5,right:30,left:20,bottom:5},dot:"false"},l.a.createElement(w.h,{dataKey:"age",type:"number",domain:[this.props.age],ticks:k(this.props.age)},l.a.createElement(w.a,{value:"Age",offset:0,position:"insideBottom"})),l.a.createElement(w.i,null,l.a.createElement(w.a,{value:"Net-worth",dy:40,offset:-20,position:"insideTopLeft"})),l.a.createElement(w.g,null),l.a.createElement(w.b,null),l.a.createElement(w.e,{y:0,stroke:"#666666",label:""}),l.a.createElement(w.c,{name:"One-off purchase",type:"monotone",dataKey:"oneOffPurchaseResults",dot:!1,stroke:"#c7ceea",strokeWidth:4}),l.a.createElement(w.e,{x:Number(this.props.results.oneOffPurchaseCase.daysUntilFinancialFreedom)/365.25+Number(this.props.age),stroke:"#c7ceea",label:""}),l.a.createElement(w.c,{name:"Lower monthly spend",type:"monotone",dataKey:"lowerMonthlySpendResults",dot:!1,stroke:"#75c2a6",strokeWidth:4}),l.a.createElement(w.e,{x:Number(this.props.results.lowerMonthlySpendCase.daysUntilFinancialFreedom)/365.25+Number(this.props.age),stroke:"#75c2a6",label:""}),l.a.createElement(w.c,{name:"Lower daily spend",type:"monotone",dataKey:"lowerDailySpendResults",dot:!1,stroke:"#1a7451",strokeWidth:4}),l.a.createElement(w.e,{x:Number(this.props.results.lowerDailySpendCase.daysUntilFinancialFreedom)/365.25+Number(this.props.age),stroke:"#1a7451",label:""}),l.a.createElement(w.c,{name:"Alternate lifestyle 1",type:"monotone",dataKey:"alternateLifestyle1Results",dot:!1,stroke:"#22b7ce",strokeWidth:4}),l.a.createElement(w.c,{name:"Alternate lifestyle 2",type:"monotone",dataKey:"alternateLifestyle2Results",dot:!1,stroke:"#053f75",strokeWidth:4}),l.a.createElement(w.c,{name:"Current situation",type:"monotone",dataKey:"networth",dot:!1,stroke:"#ff9aa2",strokeWidth:4}),l.a.createElement(w.e,{x:Number(this.props.results.currentSituationCase.daysUntilFinancialFreedom)/365.25+Number(this.props.age),stroke:"#ffb7b2",label:""})));var e,a}}]),t}(n.PureComponent);function I(e,a,t,n,l,r,s){var o,i=[];if(null==e)return i;for(o=0;o<e.length;o++)i.push({networth:e[o],lowerMonthlySpendResults:a[o],lowerDailySpendResults:t[o],oneOffPurchaseResults:n[o],alternateLifestyle1Results:null===l?null:l[o],alternateLifestyle2Results:null===r?null:r[o],age:o/12+Number(s)});return i}function k(e){var a=Number(e),t=[];t[0]=Math.floor(a);for(var n=a+1,l=1;n<91;)Math.floor(n)%10===0&&(t[l]=Math.floor(n),l++),n++;return t}var C=t(428),S=t(435);var L=function(e){var a=e.age,t=e.lifeExpectancyResults;return l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("text",{className:"italic"},"How much time do I have? How much healthy time?"),l.a.createElement("br",null),l.a.createElement("br",null),"You are ",l.a.createElement("text",{className:"bold"},a)," years old. ",l.a.createElement("br",null),"Your life expectancy is age"," ",l.a.createElement("text",{className:"bold"},t.lifeExpectancyAge)," ","(in"," ",l.a.createElement("text",{className:"bold"},t.lifeExpectancyYearsLeft)," ","years).",l.a.createElement("br",null),"Your healthy life expectancy is age"," ",l.a.createElement("text",{className:"bold"},t.healthyLifeExpectancyAge)," ","(in"," ",l.a.createElement("text",{className:"bold"},t.healthyLifeExpectancyYearsLeft)," ","years). This is the number of years you are expected to be in good health.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"italic"},"Life expectancies are calculated from"," ",l.a.createElement("a",{href:"https://www.who.int/data/gho/data/indicators/indicator-details/GHO/healthy-life-expectancy-(hale)-at-birth-(years)"},"WHO data"),"."))};var T=function(e){var a=e.age,t=e.lifeExpectancyResults;return l.a.createElement(S.a,{border:"dark",className:"border-3 marginTopAndBottomLarge"},l.a.createElement(S.a.Body,null,l.a.createElement(S.a.Text,null,l.a.createElement("h4",{className:"bold darkColor"},"Your life expectancies"),l.a.createElement(L,{age:a,lifeExpectancyResults:t}))))},O=t(184),B=t.n(O);var M=function(e){var a=e.yearsMonthsDays;return l.a.createElement("div",null,l.a.createElement("text",{className:"bold"},null===a?null:a.years," "),"years\xa0\xa0",l.a.createElement("text",{className:"bold"},null===a?null:a.months," "),"months\xa0\xa0",l.a.createElement("text",{className:"bold"},null===a?null:a.days," ")," ","days.")};var D=function(e){var a=e.currentSituationCase;return Date.prototype.addDays=function(e){var a=new Date(this.valueOf());return a.setDate(a.getDate()+e),a},l.a.createElement(S.a,{className:"border-3 marginTopAndBottomLarge",border:"pink"},l.a.createElement(S.a.Body,null,l.a.createElement(S.a.Text,{tag:"div"},l.a.createElement("h4",null,l.a.createElement("text",{className:"baseCaseColor bold"},"Your financial freedom age:\xa0",a.financialFreedomAge)),l.a.createElement(M,{yearsMonthsDays:a.yearsMonthsDays}),l.a.createElement("br",null),"(",B()(function(){var e=new Date;return e=e.addDays(a.daysUntilFinancialFreedom)}()).format("MMMM Do YYYY"),")",l.a.createElement("br",null),l.a.createElement("br",null),"Under your current situation, you spend"," ",l.a.createElement("text",{className:"bold"},a.percentHleWorking,"%")," ","of your remaining healthy life expectancy working, and"," ",l.a.createElement("text",{className:"bold"},100-a.percentHleWorking,"%")," ","financially free.")))};var P=function(e){var a,t=e.updateInputs,n=e.lowerSpendCase,r=e.frequency,s=e.improvement,o=e.themeColor;return l.a.createElement(S.a,{className:"border-3 marginTopAndBottomLarge",border:o},l.a.createElement(S.a.Body,null,l.a.createElement(S.a.Text,null,l.a.createElement("h4",{className:"bold ".concat(o)},"Effect of a ",r," habit?"),"Reducing your lifestyle by",l.a.createElement(f,{inputId:"lowerSpend".concat((a=r,"string"!==typeof a?"":a.charAt(0).toUpperCase()+a.slice(1))),updateInputs:t}),r," increases the time you have financially free by:",l.a.createElement("br",null),l.a.createElement(M,{yearsMonthsDays:n.yearsMonthsDays}),l.a.createElement("br",null),"Under this scenario, you spend"," ",l.a.createElement("text",{className:"bold"},n.percentHleWorking,"%")," of your healthy life expectancy working, and"," ",l.a.createElement("text",{className:"bold"},100-n.percentHleWorking,"%")," ","financially free.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"italic"},"Compared to your current situation, you will have"," ",l.a.createElement("text",{className:"bold"},s,"%")," more of your healthy life free instead of working."))))};var j=function(e){var a=e.oneOffPurchaseCase,t=e.updateInputs;return l.a.createElement(S.a,{className:"border-3 marginTopAndBottomLarge",border:"blue"},l.a.createElement(S.a.Body,null,l.a.createElement(S.a.Text,null,l.a.createElement("h4",{className:"bold oneOffPurchaseColor"},"Opportunity cost of spending"),"The opportunity cost of spending money is your time. Saving and investing instead of spending means more of your lifetime financially free.",l.a.createElement("br",null),l.a.createElement("br",null),"A purchase of",l.a.createElement(f,{inputId:"oneOffPurchase",updateInputs:t}),"means less financial freedom of",l.a.createElement("br",null),l.a.createElement(M,{yearsMonthsDays:a.yearsMonthsDays}),l.a.createElement("br",null),l.a.createElement("text",{className:"italic"},"Whilst this calculation is a useful to understand the opportunity cost of spending money as measured in your time, it is rare that our purchases are truly one-off. Consider a phone or a laptop, that needs replacing every few years. Most purchases are better modelled as a change in lifestyle or a habit."," "))))};var W=function(e){var a=e.updateInputs,t=e.expenditure,r=e.netEarnings,s=e.alternateLifestyle1Case,m=e.alternateLifestyle2Case,u=Object(n.useState)({alternateLifestyle1:0,alternateLifestyle2:0}),d=Object(o.a)(u,2),p=d[0],y=d[1],h=function(e,t){y((function(a){return Object(c.a)(Object(c.a)({},a),{},Object(i.a)({},e,t))})),a(e,t)};return l.a.createElement(S.a,{className:"border-3 marginTopAndBottomLarge",border:"cyan"},l.a.createElement(S.a.Body,null,l.a.createElement(S.a.Text,null,l.a.createElement("h4",{className:"bold cyan"},"Lifestyle tool"),"The cost of your lifestyle has a big impact on your financial freedom. There is a balance between more time financially free and a more expensive lifestyle. Use this tool to help decide the best balance for you.",l.a.createElement("br",null),l.a.createElement("br",null),"From your Current Situation inputs your current lifestyle is"," ",l.a.createElement("text",{className:"bold"},t)," per year.","(saving ",l.a.createElement("text",{className:"bold"},r-t)," per year).",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"cyan"},l.a.createElement("text",{className:"bold"},"Alternate Lifestyle 1 "),"(cost per year)",l.a.createElement(f,{inputId:"alternateLifestyle1",updateInputs:h}),l.a.createElement("div",{className:"italic"},"(saving"," ",l.a.createElement("text",{className:"bold"},r-p.alternateLifestyle1)," ","per year). ",l.a.createElement("br",null)),"Means more time financially free by:",l.a.createElement(M,{yearsMonthsDays:null===s?null:s.yearsMonthsDays})),l.a.createElement("br",null),l.a.createElement("div",{className:"darkBlue"},l.a.createElement("text",{className:"bold"},"Alternate Lifestyle 2 "),"(cost per year)",l.a.createElement(f,{inputId:"alternateLifestyle2",updateInputs:h}),l.a.createElement("div",{className:"italic"},"(saving"," ",l.a.createElement("text",{className:"bold"},r-p.alternateLifestyle2)," ","per year)."),"Means more time financially free by:",l.a.createElement(M,{yearsMonthsDays:null===m?null:m.yearsMonthsDays})))))};var Y=function(e){var a=e.age,t=e.results,n=e.updateInputs,r=e.expenditure,s=e.netEarnings;function o(e){var a=t.currentSituationCase.percentHleWorking-e;return isNaN(a)?"-":a}return l.a.createElement("div",null,l.a.createElement("h3",{className:"marginTopAndBottomLarge"},"Financial freedom toolkit"),l.a.createElement(C.a,null,l.a.createElement(T,{age:a,lifeExpectancyResults:t.lifeExpectancyResults}),l.a.createElement(D,{currentSituationCase:t.currentSituationCase}),l.a.createElement(P,{lowerSpendCase:t.lowerMonthlySpendCase,updateInputs:n,improvement:o(t.lowerMonthlySpendCase.percentHleWorking),frequency:"monthly",themeColor:"monthlyHabit"}),l.a.createElement(P,{lowerSpendCase:t.lowerDailySpendCase,updateInputs:n,improvement:o(t.lowerDailySpendCase.percentHleWorking),frequency:"daily",themeColor:"dailyHabit"}),l.a.createElement(W,{expenditure:r,updateInputs:n,netEarnings:s,alternateLifestyle1Case:t.alternateLifestyle1Case,alternateLifestyle2Case:t.alternateLifestyle2Case}),l.a.createElement(j,{oneOffPurchaseCase:t.oneOffPurchaseCase,updateInputs:n})),l.a.createElement("br",null),l.a.createElement("h4",{className:"marginTopAndBottomLarge"},"Your journey to financial freedom visualised:"),l.a.createElement("div",{className:"paddingBottomLarge",style:{height:"30vw",minHeight:"225px"}},l.a.createElement(A,{results:t,age:a})))},F={currentSituationCase:{yearsMonthsDays:{years:[],months:[],days:[]}},lowerMonthlySpendCase:{yearsMonthsDays:{years:[],months:[],days:[]}},lowerDailySpendCase:{yearsMonthsDays:{years:[],months:[],days:[]}},oneOffPurchaseCase:{yearsMonthsDays:{years:[],months:[],days:[]}},alternateLifestyle1Case:{yearsMonthsDays:{years:[],months:[],days:[]}},alternateLifestyle2Case:{yearsMonthsDays:{years:[],months:[],days:[]}},lifeExpectancyResults:{lifeExpectancyYearsLeft:[],healthyLifeExpectancyYearsLeft:[],lifeExpectancyAge:[],healthyLifeExpectancyAge:[]}};var H=function(){var e="",a=Object(n.useState)({age:0,alternateLifestyle1:0,alternateLifestyle2:0,expenditure:0,inheritanceToLeaveBehind:0,lowerSpendMonthly:0,lowerSpendDaily:0,netEarnings:0,networth:0,oneOffPurchase:0,returnAboveInflationAssumption:4,salaryGrowthAssumption:3,salaryGrowthYearsAssumption:15,statePensionAgeAssumption:65,statePensionAmountAssumption:0}),t=Object(o.a)(a,2),r=t[0],s=t[1],m=Object(n.useState)(F),p=Object(o.a)(m,2),y=p[0],f=p[1],b=Object(n.useCallback)(function(e,a){var t;return function(){for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];var s=this;t&&clearTimeout(t),t=setTimeout((function(){t=null,e.apply(s,l)}),a)}}((function(a){return function(a){var t=x(),n=Object(g.a)().toString();e=n,a.id=n,fetch(t,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(a)}).then(N).then((function(e){return e.json()})).then((function(a){a.id===e&&f(a)})).catch((function(e){console.log(e),f(F)}))}(a)}),650),[]),v=function(e,a){s((function(t){return Object(c.a)(Object(c.a)({},t),{},Object(i.a)({},e,a))}))},x=function(){return"https://opulazurefunction.azurewebsites.net/api/OpulFunction?code=".concat("knQ/VjpwL2MfVud2ONtIJQmj76yBYJuTcevlVIEjmqDSGVa22AxiBg==")};function N(e){if(!e.ok)throw Error(e.statusText);return e}return Object(n.useEffect)((function(){r.expenditure>0?b(r):f(F)}),[r]),Object(n.useEffect)((function(){var e=x();fetch(e,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:""})}),[]),l.a.createElement(E.a,{fluid:!0},l.a.createElement(u.a,{className:"align-items-start"},l.a.createElement(d.a,{lg:"5",className:"padding30"},l.a.createElement(h,{updateInputs:v})),l.a.createElement(d.a,{lg:"7",className:"padding30"},l.a.createElement(Y,{age:r.age,results:y,updateInputs:v,expenditure:r.expenditure,netEarnings:r.netEarnings}))))},R=t(432),U=t(433),V=t(31);var G=function(e){var a=e.activePage,t=e.setActivePage,n=e.pageId,r=e.pageName;return l.a.createElement(U.a.Link,{as:V.b,to:"/"+n,className:"".concat(a===n?"selected":""),onClick:function(){t(n)}},r)},K=t(189),q=t.n(K);var J=function(e){var a=e.activePage,t=e.setActivePage;return l.a.createElement(R.a,{bg:"dark",expand:"lg",style:{display:"flex",alignItems:"left"}},l.a.createElement(R.a.Brand,null,l.a.createElement(U.a.Link,{as:V.b,to:"/"},l.a.createElement("img",{alt:"",src:q.a,width:"140",height:"70",className:"d-inline-block align-top"}))),l.a.createElement(R.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(R.a.Collapse,{className:"basic-navbar-nav"},l.a.createElement(U.a,{className:"mr-auto"},l.a.createElement(U.a.Item,null,l.a.createElement(G,{activePage:a,setActivePage:t,pageId:"home",pageName:"Home"})),l.a.createElement(U.a.Item,null,l.a.createElement(G,{activePage:a,setActivePage:t,pageId:"toolkit",pageName:"Toolkit"})),l.a.createElement(U.a.Item,null,l.a.createElement(G,{activePage:a,setActivePage:t,pageId:"about",pageName:"About"})))))},z=t(430);var Q=function(e){var a=e.setActivePage;return l.a.createElement(E.a,{fluid:!0},l.a.createElement(u.a,null,l.a.createElement(d.a,{xl:"3"}),l.a.createElement(d.a,{xl:"6",className:"padding30"},l.a.createElement("div",{style:{textAlign:"left",maxWidth:"800px",margin:"auto"}},l.a.createElement("h4",{className:"bold"},"Opul"),l.a.createElement("h5",null,"A platform to help you reach financial freedom. Giving you financial tools used by billion dollar investors - we do the complicated math, so you can make better decisions."),l.a.createElement("br",null),l.a.createElement("h4",{className:"bold"},"What is Financial Freedom?"),l.a.createElement("h5",null,"A state of freedom where you can spend your time as you wish, free from the need to work for money. Waking up each day and deciding how you want to live it. The only requirement - enough financial wealth to support your desired lifestyle.",l.a.createElement("br",null),l.a.createElement("br",null),"The default age in society for financial freedom is after we have used up most of our health and time, aged 65 to 70. This is when our Governments provide pensions."," ",l.a.createElement("text",{className:"bold"},"However, it is possible to reach financial freedom much sooner than this."," "),"Across most of the world, 10 years of work is enough to keep you sheltered, fed and happy for the rest of your days.",l.a.createElement("br",null),l.a.createElement("br",null),"You have a choice how simple or luxurious your lifestyle is. This is actually the ",l.a.createElement("text",{className:"bold"},"same choice")," as the number of years you will have to work. This is shown in the [Lifestyle] section.",l.a.createElement("br",null),l.a.createElement("br",null),"The Opul toolkit helps you make this decision and answer other questions such as:",l.a.createElement("br",null),l.a.createElement("ul",{className:"italic"},l.a.createElement("li",null,"How much wealth do I need?"),l.a.createElement("li",null,"When can I reach Financial Freedom? "),l.a.createElement("li",null,"What is the trade-off between lifestyle and years worked?"))),l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement(V.b,{to:"/toolkit"},l.a.createElement(z.a,{variant:"primary",size:"lg",onClick:function(){console.log("test"),a("toolkit")}},"Go to toolkit"))))),l.a.createElement(d.a,{xl:"3"})))},$=(t(423),t(10));var X=function(){var e=Object(n.useState)("home"),a=Object(o.a)(e,2),t=a[0],r=a[1];return l.a.createElement(V.a,{basename:"/"},l.a.createElement("div",{className:"App"},l.a.createElement(J,{activePage:t,setActivePage:r}),l.a.createElement($.c,null,l.a.createElement($.a,{path:"/",exact:!0,render:function(){return l.a.createElement(Q,{setActivePage:r})}}),l.a.createElement($.a,{path:"/home",render:function(){return l.a.createElement(Q,{setActivePage:r})}}),l.a.createElement($.a,{path:"/toolkit",component:H}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[224,1,2]]]);
//# sourceMappingURL=main.32b8a2c3.chunk.js.map