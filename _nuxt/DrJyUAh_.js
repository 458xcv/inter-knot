import{ab as _}from"./DpJ7IUQu.js";import{t as J,a as g,z as B,l as E,b as z,T as D,f as j,i as O,m as W,s as x}from"./lQIaumHY.js";var C={0:"Drawing",1:"Hentai",2:"Neutral",3:"Porn",4:"Sexy"},v=function(l,n,t,r){function a(e){return e instanceof t?e:new t(function(s){s(e)})}return new(t||(t=Promise))(function(e,s){function o(c){try{i(r.next(c))}catch(d){s(d)}}function u(c){try{i(r.throw(c))}catch(d){s(d)}}function i(c){c.done?e(c.value):a(c.value).then(o,u)}i((r=r.apply(l,n||[])).next())})},m=function(l,n){var t={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},r,a,e,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(i){return function(c){return u([i,c])}}function u(i){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,i[0]&&(t=0)),t;)try{if(r=1,a&&(e=i[0]&2?a.return:i[0]?a.throw||((e=a.return)&&e.call(a),0):a.next)&&!(e=e.call(a,i[1])).done)return e;switch(a=0,e&&(i=[i[0]&2,e.value]),i[0]){case 0:case 1:e=i;break;case 4:return t.label++,{value:i[1],done:!1};case 5:t.label++,a=i[1],i=[0];continue;case 7:i=t.ops.pop(),t.trys.pop();continue;default:if(e=t.trys,!(e=e.length>0&&e[e.length-1])&&(i[0]===6||i[0]===2)){t=0;continue}if(i[0]===3&&(!e||i[1]>e[0]&&i[1]<e[3])){t.label=i[1];break}if(i[0]===6&&t.label<e[1]){t.label=e[1],e=i;break}if(e&&t.label<e[2]){t.label=e[2],t.ops.push(i);break}e[2]&&t.ops.pop(),t.trys.pop();continue}i=n.call(l,t)}catch(c){i=[6,c],a=0}finally{r=e=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},b=function(l,n,t){if(t||arguments.length===2)for(var r=0,a=n.length,e;r<a;r++)(e||!(r in n))&&(e||(e=Array.prototype.slice.call(n,0,r)),e[r]=n[r]);return l.concat(e||Array.prototype.slice.call(n))},y={MobileNetV2:{path:"mobilenet_v2",numOfWeightBundles:1},MobileNetV2Mid:{path:"mobilenet_v2_mid",numOfWeightBundles:2,options:{type:"graph"}},InceptionV3:{path:"inception_v3",numOfWeightBundles:6,options:{size:299}}},N="MobileNetV2",w=224;function M(l){return!!l&&l in y}function F(l,n){return v(this,void 0,void 0,function(){var t,r,a=this;return m(this,function(e){switch(e.label){case 0:return t=b([],Array(n),!0).map(function(s,o){return v(a,void 0,void 0,function(){var u,i,c,d,h,p;return m(this,function(f){switch(f.label){case 0:u=o+1,i="group1-shard".concat(u,"of").concat(n),c=i.replace(/-/g,"_"),f.label=1;case 1:return f.trys.push([1,4,,5]),h=global[c],h?[3,3]:[4,_(()=>import("../models/".concat(l,"/").concat(i,".min.js")),[],import.meta.url)];case 2:h=f.sent().default,f.label=3;case 3:return d=h,[2,(p={},p[i]=d,p)];case 4:throw f.sent(),new Error("Could not load the weight data. Make sure you are importing the ".concat(i,".min.js bundle."));case 5:return[2]}})})}),[4,Promise.all(t)];case 1:return r=e.sent(),[2,Object.assign.apply(Object,b([{}],r,!1))]}})})}function T(l){return v(this,void 0,void 0,function(){var n,t,r,a,e,s,o;return m(this,function(u){switch(u.label){case 0:if(!M(l))return[2,l];n=y[l],t=n.path,r=n.numOfWeightBundles,u.label=1;case 1:return u.trys.push([1,4,,5]),e=global.model,e?[3,3]:[4,_(()=>import("../models/".concat(t,"/model.min.js")),[],import.meta.url)];case 2:e=u.sent().default,u.label=3;case 3:return a=e,[3,5];case 4:throw u.sent(),new Error("Could not load the model. Make sure you are importing the model.min.js bundle.");case 5:return[4,F(t,r)];case 6:return s=u.sent(),o=new k(a,s),[2,o]}})})}function H(l,n){var t;return n===void 0&&(n={size:w}),v(this,void 0,void 0,function(){var r,a;return m(this,function(e){switch(e.label){case 0:if(J==null)throw new Error("Cannot find TensorFlow.js. If you are using a <script> tag, please also include @tensorflow/tfjs on the page before using this model.");return l===void 0?l=N:M(l)&&(n=(t=y[l].options)!==null&&t!==void 0?t:n),n.size=(n==null?void 0:n.size)||w,[4,T(l)];case 1:return r=e.sent(),a=new I(r,n),[4,a.load()];case 2:return e.sent(),[2,a]}})})}var k=function(){function l(n,t){this.modelJson=n,this.weightDataBase64=t}return l.prototype.arrayBufferFromBase64=function(n){for(var t=Buffer.from(n,"base64").toString("binary"),r=t.length,a=new Uint8Array(r),e=0;e<r;e++)a[e]=t.charCodeAt(e);return a.buffer},l.prototype.load=function(){return v(this,void 0,void 0,function(){var n,t,r,a,e,s,o,u,i,c,d,h,p,f;return m(this,function(V){if(n={modelTopology:this.modelJson.modelTopology,format:this.modelJson.format,generatedBy:this.modelJson.generatedBy,convertedBy:this.modelJson.convertedBy},this.modelJson.weightsManifest!=null){for(t=[],r=[],a=0,e=this.modelJson.weightsManifest;a<e.length;a++){for(s=e[a],o=0,u=s.paths;o<u.length;o++){if(i=u[o],c=this.weightDataBase64[i],!c)throw new Error("Could not find the weight data. Make sure you are importing the correct weight bundle for the model: ".concat(i,".min.js."));d=this.arrayBufferFromBase64(c),r.push(new Uint8Array(d))}t.push.apply(t,s.weights)}for(n.weightSpecs=t,h=new Uint8Array(r.reduce(function(S,A){return S+A.length},0)),p=0,f=0;f<r.length;f++)h.set(r[f],p),p+=r[f].byteLength;n.weightData=h.buffer}return this.modelJson.trainingConfig!=null&&(n.trainingConfig=this.modelJson.trainingConfig),this.modelJson.userDefinedMetadata!=null&&(n.userDefinedMetadata=this.modelJson.userDefinedMetadata),[2,n]})})},l}(),I=function(){function l(n,t){this.intermediateModels={},this.options=t,this.normalizationOffset=x(255),this.urlOrIOHandler=n,typeof n=="string"&&!n.startsWith("indexeddb://")&&!n.startsWith("localstorage://")&&!n.endsWith("model.json")?this.urlOrIOHandler="".concat(n,"model.json"):this.urlOrIOHandler=n}return l.prototype.load=function(){return v(this,void 0,void 0,function(){var n,t,r,a,e,s,o=this;return m(this,function(u){switch(u.label){case 0:return n=this.options,t=n.size,r=n.type,r!=="graph"?[3,2]:(a=this,[4,z(this.urlOrIOHandler)]);case 1:return a.model=u.sent(),[3,4];case 2:return e=this,[4,E(this.urlOrIOHandler)];case 3:e.model=u.sent(),this.endpoints=this.model.layers.map(function(i){return i.name}),u.label=4;case 4:return s=g(function(){return o.model.predict(B([1,t,t,3]))}),[4,s.data()];case 5:return u.sent(),s.dispose(),[2]}})})},l.prototype.infer=function(n,t){var r=this;if(t!=null&&this.endpoints.indexOf(t)===-1)throw new Error("Unknown endpoint ".concat(t,". Available endpoints: ").concat(this.endpoints,"."));return g(function(){n instanceof D||(n=j(n));var a=n.toFloat().div(r.normalizationOffset),e=a,s=r.options.size;if(n.shape[0]!==s||n.shape[1]!==s){var o=!0;e=O.resizeBilinear(a,[s,s],o)}var u=e.reshape([1,s,s,3]),i;if(t==null)i=r.model;else{if(r.model.hasOwnProperty("layers")&&r.intermediateModels[t]==null){var c=r.model.layers.find(function(d){return d.name===t});r.intermediateModels[t]=W({inputs:r.model.inputs,outputs:c.output})}i=r.intermediateModels[t]}return i.predict(u)})},l.prototype.classify=function(n,t){return t===void 0&&(t=5),v(this,void 0,void 0,function(){var r,a;return m(this,function(e){switch(e.label){case 0:return r=this.infer(n),[4,L(r,t)];case 1:return a=e.sent(),r.dispose(),[2,a]}})})},l}();function L(l,n){return v(this,void 0,void 0,function(){var t,r,o,a,e,o,s,o;return m(this,function(u){switch(u.label){case 0:return[4,l.data()];case 1:for(t=u.sent(),r=[],o=0;o<t.length;o++)r.push({value:t[o],index:o});for(r.sort(function(i,c){return c.value-i.value}),a=new Float32Array(n),e=new Int32Array(n),o=0;o<n;o++)a[o]=r[o].value,e[o]=r[o].index;for(s=[],o=0;o<e.length;o++)s.push({className:C[e[o]],probability:a[o]});return[2,s]}})})}export{I as NSFWJS,H as load};
