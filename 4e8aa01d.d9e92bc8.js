(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),o=(n(0),n(93)),i={id:"common-gh",title:"Common handler properties",sidebar_label:"Common handler properties"},c={unversionedId:"api/gesture-handlers/common-gh",id:"api/gesture-handlers/common-gh",isDocsHomePage:!1,title:"Common handler properties",description:"This page covers the common set of properties all gesture handler components expose.",source:"@site/docs/api/gesture-handlers/common-gh.md",slug:"/api/gesture-handlers/common-gh",permalink:"/react-native-gesture-handler/docs/api/gesture-handlers/common-gh",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/api/gesture-handlers/common-gh.md",version:"current",sidebar_label:"Common handler properties",sidebar:"docs",previous:{title:"Running Example App",permalink:"/react-native-gesture-handler/docs/example"},next:{title:"PanGestureHandler",permalink:"/react-native-gesture-handler/docs/api/gesture-handlers/pan-gh"}},s=[{value:"Units",id:"units",children:[]},{value:"Properties",id:"properties",children:[{value:"<code>enabled</code>",id:"enabled",children:[]},{value:"<code>shouldCancelWhenOutside</code>",id:"shouldcancelwhenoutside",children:[]},{value:"<code>simultaneousHandlers</code>",id:"simultaneoushandlers",children:[]},{value:"<code>waitFor</code>",id:"waitfor",children:[]},{value:"<code>hitSlop</code>",id:"hitslop",children:[]},{value:"<code>onGestureEvent</code>",id:"ongestureevent",children:[]},{value:"<code>onHandlerStateChange</code>",id:"onhandlerstatechange",children:[]}]},{value:"Event data",id:"event-data",children:[{value:"<code>state</code>",id:"state",children:[]},{value:"<code>numberOfPointers</code>",id:"numberofpointers",children:[]}]}],l={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This page covers the common set of properties all gesture handler components expose."),Object(o.b)("h3",{id:"units"},"Units"),Object(o.b)("p",null,'All handler component properties and event attributes that represent onscreen dimensions are expressed in screen density independent units we refer to as "points".\nThese are the units commonly used in React Native ecosystem (e.g. in the ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://facebook.github.io/react-native/docs/flexbox.html"}),"layout system"),").\nThey do not map directly to physical pixels but instead to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.apple.com/library/content/documentation/2DDrawing/Conceptual/DrawingPrintingiOS/GraphicsDrawingOverview/GraphicsDrawingOverview.html#//apple_ref/doc/uid/TP40010156-CH14-SW7"}),"iOS's points")," and to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.android.com/guide/topics/resources/more-resources#Dimension"}),"dp")," units on Android."),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("p",null,"This section describes properties that can be used with all gesture handler components:"),Object(o.b)("h3",{id:"enabled"},Object(o.b)("inlineCode",{parentName:"h3"},"enabled")),Object(o.b)("p",null,"Accepts a boolean value.\nIndicates whether the given handler should be analyzing stream of touch events or not.\nWhen set to ",Object(o.b)("inlineCode",{parentName:"p"},"false")," we can be sure that the handler's state will ",Object(o.b)("strong",{parentName:"p"},"never")," become ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#active"}),Object(o.b)("inlineCode",{parentName:"a"},"ACTIVE")),".\nIf the value gets updated while the handler already started recognizing a gesture, then the handler's state it will immediately change to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#failed"}),Object(o.b)("inlineCode",{parentName:"a"},"FAILED"))," or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#cancelled"}),Object(o.b)("inlineCode",{parentName:"a"},"CANCELLED"))," (depending on its current state).\nDefault value is ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("h3",{id:"shouldcancelwhenoutside"},Object(o.b)("inlineCode",{parentName:"h3"},"shouldCancelWhenOutside")),Object(o.b)("p",null,"Accepts a boolean value.\nWhen ",Object(o.b)("inlineCode",{parentName:"p"},"true")," the handler will ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#cancelled"}),"cancel")," or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#failed"}),"fail")," recognition (depending on its current state) whenever the finger leaves the area of the connected view.\nDefault value of this property is different depending on the handler type.\nMost handlers' ",Object(o.b)("inlineCode",{parentName:"p"},"shouldCancelWhenOutside")," property defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"false")," except for the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"longpress-gh"}),Object(o.b)("inlineCode",{parentName:"a"},"LongPressGestureHandler"))," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"tap-gh"}),Object(o.b)("inlineCode",{parentName:"a"},"TapGestureHandler"))," which default to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("h3",{id:"simultaneoushandlers"},Object(o.b)("inlineCode",{parentName:"h3"},"simultaneousHandlers")),Object(o.b)("p",null,"Accepts a react ref object or an array of refs to other handler components (refs should be created using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/refs-and-the-dom.html"}),Object(o.b)("inlineCode",{parentName:"a"},"React.createRef()")),"). When set, the handler will be allowed to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#active"}),"activate")," even if one or more of the handlers provided by their refs are in an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#active"}),Object(o.b)("inlineCode",{parentName:"a"},"ACTIVE"))," state. It will also prevent the provided handlers from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#cancelled"}),"cancelling")," the current handler when they ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#active"}),"activate"),". Read more in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/interactions#simultaneous-recognition"}),"cross handler interaction")," section."),Object(o.b)("h3",{id:"waitfor"},Object(o.b)("inlineCode",{parentName:"h3"},"waitFor")),Object(o.b)("p",null,"Accepts a react ref object or an array of refs to other handler components (refs should be created using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/refs-and-the-dom.html"}),Object(o.b)("inlineCode",{parentName:"a"},"React.createRef()")),"). When set the handler will not ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#active"}),"activate")," as long as the handlers provided by their refs are in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#began"}),Object(o.b)("inlineCode",{parentName:"a"},"BEGAN"))," state. Read more in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/interactions#awaiting-other-handlers"}),"cross handler interaction")," section."),Object(o.b)("h3",{id:"hitslop"},Object(o.b)("inlineCode",{parentName:"h3"},"hitSlop")),Object(o.b)("p",null,"This parameter enables control over what part of the connected view area can be used to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#began"}),"begin")," recognizing the gesture.\nWhen a negative number is provided the bounds of the view will reduce the area by the given number of points in each of the sides evenly."),Object(o.b)("p",null,"Instead you can pass an object to specify how each boundary side should be reduced by providing different number of points for ",Object(o.b)("inlineCode",{parentName:"p"},"left"),", ",Object(o.b)("inlineCode",{parentName:"p"},"right"),", ",Object(o.b)("inlineCode",{parentName:"p"},"top")," or ",Object(o.b)("inlineCode",{parentName:"p"},"bottom")," sides.\nYou can alternatively provide ",Object(o.b)("inlineCode",{parentName:"p"},"horizontal")," or ",Object(o.b)("inlineCode",{parentName:"p"},"vertical")," instead of specifying directly ",Object(o.b)("inlineCode",{parentName:"p"},"left"),", ",Object(o.b)("inlineCode",{parentName:"p"},"right")," or ",Object(o.b)("inlineCode",{parentName:"p"},"top")," and ",Object(o.b)("inlineCode",{parentName:"p"},"bottom"),".\nFinally, the object can also take ",Object(o.b)("inlineCode",{parentName:"p"},"width")," and ",Object(o.b)("inlineCode",{parentName:"p"},"height")," attributes.\nWhen ",Object(o.b)("inlineCode",{parentName:"p"},"width")," is set it is only allow to specify one of the sides ",Object(o.b)("inlineCode",{parentName:"p"},"right")," or ",Object(o.b)("inlineCode",{parentName:"p"},"left"),".\nSimilarly when ",Object(o.b)("inlineCode",{parentName:"p"},"height")," is provided only ",Object(o.b)("inlineCode",{parentName:"p"},"top")," or ",Object(o.b)("inlineCode",{parentName:"p"},"bottom")," can be set.\nSpecifying ",Object(o.b)("inlineCode",{parentName:"p"},"width")," or ",Object(o.b)("inlineCode",{parentName:"p"},"height")," is useful if we only want the gesture to activate on the edge of the view. In which case for example we can set ",Object(o.b)("inlineCode",{parentName:"p"},"left: 0")," and ",Object(o.b)("inlineCode",{parentName:"p"},"width: 20")," which would make it possible for the gesture to be recognize when started no more than 20 points from the left edge."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"IMPORTANT:")," Note that this parameter is primarily designed to reduce the area where gesture can activate. Hence it is only supported for all the values (except ",Object(o.b)("inlineCode",{parentName:"p"},"width")," and ",Object(o.b)("inlineCode",{parentName:"p"},"height"),") to be non positive (0 or lower). Although on Android it is supported for the values to also be positive and therefore allow to expand beyond view bounds but not further than the parent view bounds. To achieve this effect on both platforms you can use React Native's View ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/view.html#props"}),"hitSlop")," property."),Object(o.b)("h3",{id:"ongestureevent"},Object(o.b)("inlineCode",{parentName:"h3"},"onGestureEvent")),Object(o.b)("p",null,"Takes a callback that is going to be triggered for each subsequent touch event while the handler is in an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#active"}),"ACTIVE")," state. Event payload depends on the particular handler type. Common set of event data attributes is documented ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#event-data"}),"below")," and handler specific attributes are documented on the corresponding handler pages. E.g. event payload for ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"rotation-gh#event-data"}),Object(o.b)("inlineCode",{parentName:"a"},"PinchGestureHandler"))," contains ",Object(o.b)("inlineCode",{parentName:"p"},"scale")," attribute that represents how the distance between fingers changed since when the gesture started."),Object(o.b)("p",null,"Instead of a callback ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/animated.html#event"}),Object(o.b)("inlineCode",{parentName:"a"},"Animated.event"))," object can be used. Also Animated events with ",Object(o.b)("inlineCode",{parentName:"p"},"useNativeDriver")," flag enabled ",Object(o.b)("strong",{parentName:"p"},"are fully supported"),"."),Object(o.b)("h3",{id:"onhandlerstatechange"},Object(o.b)("inlineCode",{parentName:"h3"},"onHandlerStateChange")),Object(o.b)("p",null,"Takes a callback that is going to be triggered when ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state"}),"state")," of the given handler changes."),Object(o.b)("p",null,"The event payload contains the same payload as in case of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#ongestureevent"}),Object(o.b)("inlineCode",{parentName:"a"},"onGestureEvent"))," including handler specific event attributes some handlers may provide."),Object(o.b)("p",null,"In addition ",Object(o.b)("inlineCode",{parentName:"p"},"onHandlerStateChange")," event payload contains ",Object(o.b)("inlineCode",{parentName:"p"},"oldState")," attribute which represents the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state"}),"state")," of the handler right before the change."),Object(o.b)("p",null,"Instead of a callback ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/animated.html#event"}),Object(o.b)("inlineCode",{parentName:"a"},"Animated.event"))," object can be used. Also Animated events with ",Object(o.b)("inlineCode",{parentName:"p"},"useNativeDriver")," flag enabled ",Object(o.b)("strong",{parentName:"p"},"are fully supported"),"."),Object(o.b)("h2",{id:"event-data"},"Event data"),Object(o.b)("p",null,"This section describes the attributes of event object being provided to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#ongestureevent"}),Object(o.b)("inlineCode",{parentName:"a"},"onGestureEvent"))," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#onhandlerstatechange"}),Object(o.b)("inlineCode",{parentName:"a"},"onHandlerStateChange"))," callbacks:"),Object(o.b)("h3",{id:"state"},Object(o.b)("inlineCode",{parentName:"h3"},"state")),Object(o.b)("p",null,"Current ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state"}),"state")," of the handler. Expressed as one of the constants exported under ",Object(o.b)("inlineCode",{parentName:"p"},"State")," object by the library. Refer to the section about ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state"}),"handler state")," to learn more about how to use it."),Object(o.b)("h3",{id:"numberofpointers"},Object(o.b)("inlineCode",{parentName:"h3"},"numberOfPointers")),Object(o.b)("p",null,"Represents the number of pointers (fingers) currently placed on the screen."))}d.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(n),h=a,u=b["".concat(i,".").concat(h)]||b[h]||p[h]||o;return n?r.a.createElement(u,c(c({ref:t},l),{},{components:n})):r.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);