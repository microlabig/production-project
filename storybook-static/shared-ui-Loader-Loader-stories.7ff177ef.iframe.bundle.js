"use strict";(self.webpackChunkproduction_project=self.webpackChunkproduction_project||[]).push([[533],{"./src/shared/ui/Loader/Loader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,Light:()=>Light,Dark:()=>Dark,__namedExportsOrder:()=>__namedExportsOrder});var _Light$parameters,_Light$parameters2,_Dark$parameters,_Dark$parameters2,shared_config_storybook_ThemeDecorator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/config/storybook/ThemeDecorator.tsx"),shared_providers_theme_provider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/providers/theme-provider/index.ts");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"shared/Loader",component:__webpack_require__("./src/shared/ui/Loader/Loader.tsx").a};var Light={},Dark={decorators:[(0,shared_config_storybook_ThemeDecorator__WEBPACK_IMPORTED_MODULE_0__.F)(shared_providers_theme_provider__WEBPACK_IMPORTED_MODULE_1__.Q2.DARK)]};Light.parameters=_objectSpread(_objectSpread({},Light.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Light$parameters=Light.parameters)||void 0===_Light$parameters?void 0:_Light$parameters.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_Light$parameters2=Light.parameters)||void 0===_Light$parameters2||null===(_Light$parameters2=_Light$parameters2.docs)||void 0===_Light$parameters2?void 0:_Light$parameters2.source)})}),Dark.parameters=_objectSpread(_objectSpread({},Dark.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Dark$parameters=Dark.parameters)||void 0===_Dark$parameters?void 0:_Dark$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  decorators: [ThemeDecorator(Theme.DARK)]\n}"},null===(_Dark$parameters2=Dark.parameters)||void 0===_Dark$parameters2||null===(_Dark$parameters2=_Dark$parameters2.docs)||void 0===_Dark$parameters2?void 0:_Dark$parameters2.source)})});var __namedExportsOrder=["Light","Dark"]},"./src/shared/lib/classNames/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function classNames(cls){var mods=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return[cls].concat(_toConsumableArray((arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]).filter(Boolean)),_toConsumableArray(Object.entries(mods).filter((function(_ref){var value=_slicedToArray(_ref,2)[1];return Boolean(value)})).map((function(_ref3){return _slicedToArray(_ref3,1)[0]})))).join(" ")}__webpack_require__.d(__webpack_exports__,{A:()=>classNames})},"./src/shared/ui/Loader/Loader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Loader_Loader_Loader});__webpack_require__("./node_modules/react/index.js");var classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Loader=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Loader/Loader.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Loader.Z,options);Loader.Z&&Loader.Z.locals&&Loader.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Loader_Loader_Loader(props){return(0,jsx_runtime.jsxs)("div",{className:(0,classNames.A)("lds-ellipsis",{},[props.className]),children:[(0,jsx_runtime.jsx)("div",{}),(0,jsx_runtime.jsx)("div",{}),(0,jsx_runtime.jsx)("div",{}),(0,jsx_runtime.jsx)("div",{})]})}Loader_Loader_Loader.displayName="Loader";try{Loader_Loader_Loader.displayName="Loader",Loader_Loader_Loader.__docgenInfo={description:"",displayName:"Loader",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Loader/Loader.tsx#Loader"]={docgenInfo:Loader_Loader_Loader.__docgenInfo,name:"Loader",path:"src/shared/ui/Loader/Loader.tsx#Loader"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Loader/Loader.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".lds-ellipsis{position:relative;display:inline-block;width:80px;height:80px}.lds-ellipsis div{position:absolute;top:33px;width:13px;height:13px;border-radius:50%;background:var(--inverted-bg-color);animation-timing-function:cubic-bezier(0, 1, 1, 0)}.lds-ellipsis div:nth-child(1){left:8px;animation:lds-ellipsis1 .6s infinite}.lds-ellipsis div:nth-child(2){left:8px;animation:lds-ellipsis2 .6s infinite}.lds-ellipsis div:nth-child(3){left:32px;animation:lds-ellipsis2 .6s infinite}.lds-ellipsis div:nth-child(4){left:56px;animation:lds-ellipsis3 .6s infinite}@keyframes lds-ellipsis1{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes lds-ellipsis3{0%{transform:scale(1)}100%{transform:scale(0)}}@keyframes lds-ellipsis2{0%{transform:translate(0, 0)}100%{transform:translate(24px, 0)}}","",{version:3,sources:["webpack://./src/shared/ui/Loader/Loader.scss"],names:[],mappings:"AAAA,cACI,iBAAA,CAEA,oBAAA,CACA,UAAA,CACA,WAAA,CAGJ,kBACI,iBAAA,CACA,QAAA,CAEA,UAAA,CACA,WAAA,CACA,iBAAA,CAEA,mCAAA,CAEA,kDAAA,CAGJ,+BACI,QAAA,CAEA,oCAAA,CAGJ,+BACI,QAAA,CAEA,oCAAA,CAGJ,+BACI,SAAA,CAEA,oCAAA,CAGJ,+BACI,SAAA,CAEA,oCAAA,CAGJ,yBACI,GACI,kBAAA,CAGJ,KACI,kBAAA,CAAA,CAIR,yBACI,GACI,kBAAA,CAGJ,KACI,kBAAA,CAAA,CAIR,yBACI,GACI,yBAAA,CAGJ,KACI,4BAAA,CAAA",sourcesContent:[".lds-ellipsis {\n    position: relative;\n\n    display: inline-block;\n    width: 80px;\n    height: 80px;\n}\n\n.lds-ellipsis div {\n    position: absolute;\n    top: 33px;\n\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n\n    background: var(--inverted-bg-color);\n\n    animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n\n.lds-ellipsis div:nth-child(1) {\n    left: 8px;\n\n    animation: lds-ellipsis1 0.6s infinite;\n}\n\n.lds-ellipsis div:nth-child(2) {\n    left: 8px;\n\n    animation: lds-ellipsis2 0.6s infinite;\n}\n\n.lds-ellipsis div:nth-child(3) {\n    left: 32px;\n\n    animation: lds-ellipsis2 0.6s infinite;\n}\n\n.lds-ellipsis div:nth-child(4) {\n    left: 56px;\n\n    animation: lds-ellipsis3 0.6s infinite;\n}\n\n@keyframes lds-ellipsis1 {\n    0% {\n        transform: scale(0);\n    }\n\n    100% {\n        transform: scale(1);\n    }\n}\n\n@keyframes lds-ellipsis3 {\n    0% {\n        transform: scale(1);\n    }\n\n    100% {\n        transform: scale(0);\n    }\n}\n\n@keyframes lds-ellipsis2 {\n    0% {\n        transform: translate(0, 0);\n    }\n\n    100% {\n        transform: translate(24px, 0);\n    }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);