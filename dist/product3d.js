/* Three.js license:
The MIT License

Copyright © 2010-2026 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

Apple mark path: Simple Icons, CC0-1.0. Trademark rights not granted.
Own detailed Blender GLB demonstration, not official Apple CAD. HDRI: Studio Small 09, Sergej Majboroda / Poly Haven, CC0. */
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var _h=0,al=1,Th=2;var dr=1,Eh=2,mi=3,Rn=0,Yt=1,un=2,Ui=0,Ss=1,ol=2,ll=3,cl=4,Ah=5;var Fi=100,wh=101,Rh=102,Ch=103,Ph=104,Ih=200,Lh=201,Dh=202,Nh=203,hl=204,ul=205,Uh=206,Fh=207,Oh=208,Bh=209,zh=210,kh=211,Hh=212,Gh=213,Vh=214,ta=0,na=1,ia=2,as=3,sa=4,ra=5,aa=6,oa=7,dl=0,Wh=1,Xh=2,Cn=0,fl=1,pl=2,ml=3,fr=4,gl=5,xl=6,yl=7,Zo="attached",qh="detached",vl=300,Oi=301,bs=302,Bi=303,Ea=304,bn=1e3,Kt=1001,os=1002,xt=1003,Aa=1004;var zi=1005;var ot=1006,_s=1007;var ln=1008;var $t=1009,Ml=1010,Sl=1011,Ts=1012,wa=1013,vn=1014,It=1015,Zt=1016,Ra=1017,Ca=1018,ki=1020,bl=35902,_l=35899,Tl=1021,El=1022,en=1023,Vn=1026,$n=1027,Pa=1028,Ia=1029,gi=1030,La=1031;var Da=1033,pr=33776,mr=33777,gr=33778,xr=33779,Na=35840,Ua=35841,Fa=35842,Oa=35843,Ba=36196,za=37492,ka=37496,Ha=37488,Ga=37489,yr=37490,Va=37491,Wa=37808,Xa=37809,qa=37810,Ya=37811,Za=37812,Ka=37813,Ja=37814,ja=37815,Qa=37816,$a=37817,eo=37818,to=37819,no=37820,io=37821,so=36492,ro=36494,ao=36495,oo=36283,lo=36284,vr=36285,co=36286;var Ai=2300,wi=2301,$r=2302,Ko=2303,Jo=2400,jo=2401,Qo=2402,Yh=2500;var Al=0,Mr=1,Es=2,Zh=3200;var ho=0,Kh=1,ei="",mt="srgb",_t="srgb-linear",Hs="linear",et="srgb";var ea=7680;var Jh=519,jh=512,Qh=513,$h=514,wl=515,eu=516,tu=517,Rl=518,Cl=519,Pl=35044;var Il="300 es",hn=2e3,ls=2001;function nd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function id(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function cs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nu(){let i=cs("canvas");return i.style.display="block",i}var Oc={},hs=null;function Gs(...i){let e="THREE."+i.shift();hs?hs("log",e,...i):console.log(e,...i)}function iu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Te(...i){i=iu(i);let e="THREE."+i.shift();if(hs)hs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ie(...i){i=iu(i);let e="THREE."+i.shift();if(hs)hs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ei(...i){let e=i.join(" ");e in Oc||(Oc[e]=!0,Te(...i))}function su(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var ru={[ta]:ta,[ia]:aa,[sa]:sa,[as]:ra,[na]:na,[aa]:ia,[oa]:oa,[ra]:as},_n=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bc=1234567,zs=Math.PI/180,Ri=180/Math.PI;function Pn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function We(i,e,t){return Math.max(e,Math.min(t,i))}function Ll(i,e){return(i%e+e)%e}function sd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function rd(i,e,t){return i!==e?(t-i)/(e-i):0}function ks(i,e,t){return(1-t)*i+t*e}function ad(i,e,t,n){return ks(i,e,1-Math.exp(-t*n))}function od(i,e=1){return e-Math.abs(Ll(i,e*2)-e)}function ld(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function cd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function hd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ud(i,e){return i+Math.random()*(e-i)}function dd(i){return i*(.5-Math.random())}function fd(i){i!==void 0&&(Bc=i);let e=Bc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pd(i){return i*zs}function md(i){return i*Ri}function gd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function xd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Dl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yd(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),x=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*x,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*x,o*c);break;case"ZYZ":i.set(l*x,l*f,o*h,o*c);break;default:Te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function uo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Nl(i,e){if(e.constructor===Float32Array)return i;let t=uo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Ul(i,e){if(e.constructor===Float32Array)return i;let t=uo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Hi={DEG2RAD:zs,RAD2DEG:Ri,generateUUID:Pn,clamp:We,euclideanModulo:Ll,mapLinear:sd,inverseLerp:rd,lerp:ks,damp:ad,pingpong:od,smoothstep:ld,smootherstep:cd,randInt:hd,randFloat:ud,randFloatSpread:dd,seededRandom:fd,degToRad:pd,radToDeg:md,isPowerOfTwo:gd,ceilPowerOfTwo:xd,floorPowerOfTwo:Dl,setQuaternionFromProperEuler:yd,normalize:Ul,denormalize:Nl},Be=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},an=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],x=r[a+2],M=r[a+3];if(d!==M||l!==u||c!==f||h!==x){let p=l*u+c*f+h*x+d*M;p<0&&(u=-u,f=-f,x=-x,M=-M,p=-p);let m=1-o;if(p<.9995){let b=Math.acos(p),w=Math.sin(b);m=Math.sin(m*b)/w,o=Math.sin(o*b)/w,l=l*m+u*o,c=c*m+f*o,h=h*m+x*o,d=d*m+M*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+x*o,d=d*m+M*o;let b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],x=r[a+3];return e[t]=o*x+h*d+l*f-c*u,e[t+1]=l*x+h*u+c*d-o*f,e[t+2]=c*x+h*f+o*u-l*d,e[t+3]=h*x-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*x,this._y=c*f*d-u*h*x,this._z=c*h*x+u*f*d,this._w=c*h*d-u*f*x;break;case"YXZ":this._x=u*h*d+c*f*x,this._y=c*f*d-u*h*x,this._z=c*h*x-u*f*d,this._w=c*h*d+u*f*x;break;case"ZXY":this._x=u*h*d-c*f*x,this._y=c*f*d+u*h*x,this._z=c*h*x+u*f*d,this._w=c*h*d-u*f*x;break;case"ZYX":this._x=u*h*d-c*f*x,this._y=c*f*d+u*h*x,this._z=c*h*x-u*f*d,this._w=c*h*d+u*f*x;break;case"YZX":this._x=u*h*d+c*f*x,this._y=c*f*d+u*h*x,this._z=c*h*x-u*f*d,this._w=c*h*d-u*f*x;break;case"XZY":this._x=u*h*d-c*f*x,this._y=c*f*d-u*h*x,this._z=c*h*x+u*f*d,this._w=c*h*d+u*f*x;break;default:Te("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return To.copy(this).projectOnVector(e),this.sub(To)}reflect(e){return this.sub(To.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},To=new F,zc=new an,De=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],x=n[8],M=s[0],p=s[3],m=s[6],b=s[1],w=s[4],_=s[7],R=s[2],E=s[5],g=s[8];return r[0]=a*M+o*b+l*R,r[3]=a*p+o*w+l*E,r[6]=a*m+o*_+l*g,r[1]=c*M+h*b+d*R,r[4]=c*p+h*w+d*E,r[7]=c*m+h*_+d*g,r[2]=u*M+f*b+x*R,r[5]=u*p+f*w+x*E,r[8]=u*m+f*_+x*g,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,x=t*d+n*u+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/x;return e[0]=d*M,e[1]=(s*c-h*n)*M,e[2]=(o*n-s*a)*M,e[3]=u*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=f*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ei("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Eo.makeScale(e,t)),this}rotate(e){return Ei("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Eo.makeRotation(-e)),this}translate(e,t){return Ei("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Eo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Eo=new De,kc=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hc=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vd(){let i={enabled:!0,workingColorSpace:_t,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===et&&(s.r=Gn(s.r),s.g=Gn(s.g),s.b=Gn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(s.r=rs(s.r),s.g=rs(s.g),s.b=rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ei?Hs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[_t]:{primaries:e,whitePoint:n,transfer:Hs,toXYZ:kc,fromXYZ:Hc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mt},outputColorSpaceConfig:{drawingBufferColorSpace:mt}},[mt]:{primaries:e,whitePoint:n,transfer:et,toXYZ:kc,fromXYZ:Hc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mt}}}),i}var Ge=vd();function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Xi,la=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xi===void 0&&(Xi=cs("canvas")),Xi.width=e.width,Xi.height=e.height;let s=Xi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Xi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=cs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Gn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gn(t[n]/255)*255):t[n]=Gn(t[n]);return{data:t,width:e.width,height:e.height}}else return Te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Md=0,us=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Pn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ao(s[a].image)):r.push(Ao(s[a]))}else r=Ao(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ao(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?la.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Te("Texture: Unable to serialize Texture."),{})}var Sd=0,wo=new F,St=class i extends _n{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Kt,s=Kt,r=ot,a=ln,o=en,l=$t,c=i.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Pn(),this.name="",this.source=new us(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(wo).x}get height(){return this.source.getSize(wo).y}get depth(){return this.source.getSize(wo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Te(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Te(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bn:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case os:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bn:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case os:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=vl;St.DEFAULT_ANISOTROPY=1;var nt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],x=l[9],M=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(x+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,_=(f+1)/2,R=(m+1)/2,E=(h+u)/4,g=(d+M)/4,S=(x+p)/4;return w>_&&w>R?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=E/n,r=g/n):_>R?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=S/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=g/r,s=S/r),this.set(n,s,r,t),this}let b=Math.sqrt((p-x)*(p-x)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(p-x)/b,this.y=(d-M)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ca=class extends _n{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ot,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new St({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new us(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends ca{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Vs=class extends St{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=xt,this.minFilter=xt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ha=class extends St{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=xt,this.minFilter=xt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Fe=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,h,d,u,f,x,M,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,u,f,x,M,p)}set(e,t,n,s,r,a,o,l,c,h,d,u,f,x,M,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=x,m[11]=M,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/qi.setFromMatrixColumn(e,0).length(),r=1/qi.setFromMatrixColumn(e,1).length(),a=1/qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,x=o*h,M=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+x*c,t[5]=u-M*c,t[9]=-o*l,t[2]=M-u*c,t[6]=x+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,x=c*h,M=c*d;t[0]=u+M*o,t[4]=x*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-x,t[6]=M+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,x=c*h,M=c*d;t[0]=u-M*o,t[4]=-a*d,t[8]=x+f*o,t[1]=f+x*o,t[5]=a*h,t[9]=M-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,x=o*h,M=o*d;t[0]=l*h,t[4]=x*c-f,t[8]=u*c+M,t[1]=l*d,t[5]=M*c+u,t[9]=f*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,x=o*l,M=o*c;t[0]=l*h,t[4]=M-u*d,t[8]=x*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+x,t[10]=u-M*d}else if(e.order==="XZY"){let u=a*l,f=a*c,x=o*l,M=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+M,t[5]=a*h,t[9]=f*d-x,t[2]=x*d-f,t[6]=o*h,t[10]=M*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bd,e,_d)}lookAt(e,t,n){let s=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ii.crossVectors(n,nn),ii.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ii.crossVectors(n,nn)),ii.normalize(),Rr.crossVectors(nn,ii),s[0]=ii.x,s[4]=Rr.x,s[8]=nn.x,s[1]=ii.y,s[5]=Rr.y,s[9]=nn.y,s[2]=ii.z,s[6]=Rr.z,s[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],x=n[2],M=n[6],p=n[10],m=n[14],b=n[3],w=n[7],_=n[11],R=n[15],E=s[0],g=s[4],S=s[8],N=s[12],P=s[1],L=s[5],U=s[9],O=s[13],C=s[2],H=s[6],V=s[10],G=s[14],te=s[3],X=s[7],J=s[11],ee=s[15];return r[0]=a*E+o*P+l*C+c*te,r[4]=a*g+o*L+l*H+c*X,r[8]=a*S+o*U+l*V+c*J,r[12]=a*N+o*O+l*G+c*ee,r[1]=h*E+d*P+u*C+f*te,r[5]=h*g+d*L+u*H+f*X,r[9]=h*S+d*U+u*V+f*J,r[13]=h*N+d*O+u*G+f*ee,r[2]=x*E+M*P+p*C+m*te,r[6]=x*g+M*L+p*H+m*X,r[10]=x*S+M*U+p*V+m*J,r[14]=x*N+M*O+p*G+m*ee,r[3]=b*E+w*P+_*C+R*te,r[7]=b*g+w*L+_*H+R*X,r[11]=b*S+w*U+_*V+R*J,r[15]=b*N+w*O+_*G+R*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],x=e[3],M=e[7],p=e[11],m=e[15],b=l*f-c*u,w=o*f-c*d,_=o*u-l*d,R=a*f-c*h,E=a*u-l*h,g=a*d-o*h;return t*(M*b-p*w+m*_)-n*(x*b-p*R+m*E)+s*(x*w-M*R+m*g)-r*(x*_-M*E+p*g)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],x=e[12],M=e[13],p=e[14],m=e[15],b=t*o-n*a,w=t*l-s*a,_=t*c-r*a,R=n*l-s*o,E=n*c-r*o,g=s*c-r*l,S=h*M-d*x,N=h*p-u*x,P=h*m-f*x,L=d*p-u*M,U=d*m-f*M,O=u*m-f*p,C=b*O-w*U+_*L+R*P-E*N+g*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/C;return e[0]=(o*O-l*U+c*L)*H,e[1]=(s*U-n*O-r*L)*H,e[2]=(M*g-p*E+m*R)*H,e[3]=(u*E-d*g-f*R)*H,e[4]=(l*P-a*O-c*N)*H,e[5]=(t*O-s*P+r*N)*H,e[6]=(p*_-x*g-m*w)*H,e[7]=(h*g-u*_+f*w)*H,e[8]=(a*U-o*P+c*S)*H,e[9]=(n*P-t*U-r*S)*H,e[10]=(x*E-M*_+m*b)*H,e[11]=(d*_-h*E-f*b)*H,e[12]=(o*N-a*L-l*S)*H,e[13]=(t*L-n*N+s*S)*H,e[14]=(M*w-x*R-p*b)*H,e[15]=(h*R-d*w+u*b)*H,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,x=r*d,M=a*h,p=a*d,m=o*d,b=l*c,w=l*h,_=l*d,R=n.x,E=n.y,g=n.z;return s[0]=(1-(M+m))*R,s[1]=(f+_)*R,s[2]=(x-w)*R,s[3]=0,s[4]=(f-_)*E,s[5]=(1-(u+m))*E,s[6]=(p+b)*E,s[7]=0,s[8]=(x+w)*g,s[9]=(p-b)*g,s[10]=(1-(u+M))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=qi.set(s[0],s[1],s[2]).length(),o=qi.set(s[4],s[5],s[6]).length(),l=qi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),pn.copy(this);let c=1/a,h=1/o,d=1/l;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=d,pn.elements[9]*=d,pn.elements[10]*=d,t.setFromRotationMatrix(pn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=hn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),x,M;if(l)x=r/(a-r),M=a*r/(a-r);else if(o===hn)x=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===ls)x=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=hn,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),x,M;if(l)x=1/(a-r),M=a/(a-r);else if(o===hn)x=-2/(a-r),M=-(a+r)/(a-r);else if(o===ls)x=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},qi=new F,pn=new Fe,bd=new F(0,0,0),_d=new F(1,1,1),ii=new F,Rr=new F,nn=new F,Gc=new Fe,Vc=new an,Wn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Te("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vc.setFromEuler(this),this.setFromQuaternion(Vc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wn.DEFAULT_ORDER="XYZ";var Ws=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Td=0,Wc=new F,Yi=new an,Un=new Fe,Cr=new F,Ps=new F,Ed=new F,Ad=new an,Xc=new F(1,0,0),qc=new F(0,1,0),Yc=new F(0,0,1),Zc={type:"added"},wd={type:"removed"},Zi={type:"childadded",child:null},Ro={type:"childremoved",child:null},ct=class i extends _n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new Wn,n=new an,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Fe},normalMatrix:{value:new De}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(Xc,e)}rotateY(e){return this.rotateOnAxis(qc,e)}rotateZ(e){return this.rotateOnAxis(Yc,e)}translateOnAxis(e,t){return Wc.copy(e).applyQuaternion(this.quaternion),this.position.add(Wc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xc,e)}translateY(e){return this.translateOnAxis(qc,e)}translateZ(e){return this.translateOnAxis(Yc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cr.copy(e):Cr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Ps,Cr,this.up):Un.lookAt(Cr,Ps,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),Yi.setFromRotationMatrix(Un),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ie("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zc),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null):Ie("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wd),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zc),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,e,Ed),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,Ad,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ct.DEFAULT_UP=new F(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rn=class extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rd={type:"move"},ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let M of e.hand.values()){let p=t.getJointPose(M,n),m=this._getHandJoint(c,M);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,x=.005;c.inputState.pinching&&u>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new rn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function Co(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var we=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ge.workingColorSpace){if(e=Ll(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Co(a,r,e+1/3),this.g=Co(a,r,e),this.b=Co(a,r,e-1/3)}return Ge.colorSpaceToWorking(this,s),this}setStyle(e,t=mt){function n(r){r!==void 0&&parseFloat(r)<1&&Te("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Te("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Te("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){let n=au[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Te("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return Ge.workingToColorSpace(Bt.copy(this),e),Math.round(We(Bt.r*255,0,255))*65536+Math.round(We(Bt.g*255,0,255))*256+Math.round(We(Bt.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(Bt.copy(this),t);let n=Bt.r,s=Bt.g,r=Bt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=mt){Ge.workingToColorSpace(Bt.copy(this),e);let t=Bt.r,n=Bt.g,s=Bt.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(Pr);let n=ks(si.h,Pr.h,t),s=ks(si.s,Pr.s,t),r=ks(si.l,Pr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bt=new we;we.NAMES=au;var Xs=class extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},mn=new F,Fn=new F,Po=new F,On=new F,Ki=new F,Ji=new F,Kc=new F,Io=new F,Lo=new F,Do=new F,No=new nt,Uo=new nt,Fo=new nt,ci=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),mn.subVectors(e,t),s.cross(mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){mn.subVectors(s,t),Fn.subVectors(n,t),Po.subVectors(e,t);let a=mn.dot(mn),o=mn.dot(Fn),l=mn.dot(Po),c=Fn.dot(Fn),h=Fn.dot(Po),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,x=(a*h-o*l)*u;return r.set(1-f-x,x,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(a,On.y),l.addScaledVector(o,On.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return No.setScalar(0),Uo.setScalar(0),Fo.setScalar(0),No.fromBufferAttribute(e,t),Uo.fromBufferAttribute(e,n),Fo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(No,r.x),a.addScaledVector(Uo,r.y),a.addScaledVector(Fo,r.z),a}static isFrontFacing(e,t,n,s){return mn.subVectors(n,t),Fn.subVectors(e,t),mn.cross(Fn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),mn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ki.subVectors(s,n),Ji.subVectors(r,n),Io.subVectors(e,n);let l=Ki.dot(Io),c=Ji.dot(Io);if(l<=0&&c<=0)return t.copy(n);Lo.subVectors(e,s);let h=Ki.dot(Lo),d=Ji.dot(Lo);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Ki,a);Do.subVectors(e,r);let f=Ki.dot(Do),x=Ji.dot(Do);if(x>=0&&f<=x)return t.copy(r);let M=f*c-l*x;if(M<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(Ji,o);let p=h*x-f*d;if(p<=0&&d-h>=0&&f-x>=0)return Kc.subVectors(r,s),o=(d-h)/(d-h+(f-x)),t.copy(s).addScaledVector(Kc,o);let m=1/(p+M+u);return a=M*m,o=u*m,t.copy(n).addScaledVector(Ki,a).addScaledVector(Ji,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xt=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gn):gn.fromBufferAttribute(r,a),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ir.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ir.copy(n.boundingBox)),Ir.applyMatrix4(e.matrixWorld),this.union(Ir)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Is),Lr.subVectors(this.max,Is),ji.subVectors(e.a,Is),Qi.subVectors(e.b,Is),$i.subVectors(e.c,Is),ri.subVectors(Qi,ji),ai.subVectors($i,Qi),Si.subVectors(ji,$i);let t=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-Si.z,Si.y,ri.z,0,-ri.x,ai.z,0,-ai.x,Si.z,0,-Si.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-Si.y,Si.x,0];return!Oo(t,ji,Qi,$i,Lr)||(t=[1,0,0,0,1,0,0,0,1],!Oo(t,ji,Qi,$i,Lr))?!1:(Dr.crossVectors(ri,ai),t=[Dr.x,Dr.y,Dr.z],Oo(t,ji,Qi,$i,Lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Bn=[new F,new F,new F,new F,new F,new F,new F,new F],gn=new F,Ir=new Xt,ji=new F,Qi=new F,$i=new F,ri=new F,ai=new F,Si=new F,Is=new F,Lr=new F,Dr=new F,bi=new F;function Oo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){bi.fromArray(i,r);let o=s.x*Math.abs(bi.x)+s.y*Math.abs(bi.y)+s.z*Math.abs(bi.z),l=e.dot(bi),c=t.dot(bi),h=n.dot(bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Hn=Cd();function Cd(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Pd(i){Math.abs(i)>65504&&Te("DataUtils.toHalfFloat(): Value out of range."),i=We(i,-65504,65504),Hn.floatView[0]=i;let e=Hn.uint32View[0],t=e>>23&511;return Hn.baseTable[t]+((e&8388607)>>Hn.shiftTable[t])}function Id(i){let e=i>>10;return Hn.uint32View[0]=Hn.mantissaTable[Hn.offsetTable[e]+(i&1023)]+Hn.exponentTable[e],Hn.floatView[0]}var hi=class{static toHalfFloat(e){return Pd(e)}static fromHalfFloat(e){return Id(e)}},Mt=new F,Nr=new Be,Ld=0,Dt=class extends _n{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ld++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Pl,this.updateRanges=[],this.gpuType=It,this.version=0,this._normalizationScale=e!==void 0?uo(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Nr.fromBufferAttribute(this,t),Nr.applyMatrix3(e),this.setXY(t,Nr.x,Nr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Nl(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ul(e,this.array)}};var qs=class extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ys=class extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Nt=class extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Dd=new Xt,Ls=new F,Bo=new F,Jt=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Dd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ls.subVectors(e,this.center);let t=Ls.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ls,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ls.copy(e.center).add(Bo)),this.expandByPoint(Ls.copy(e.center).sub(Bo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Nd=0,cn=new Fe,zo=new ct,es=new F,sn=new Xt,Ds=new Xt,Rt=new F,jt=class i extends _n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nd(e)?Ys:qs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return zo.lookAt(e),zo.updateMatrix(),this.applyMatrix4(zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Nt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(sn.min,Ds.min),sn.expandByPoint(Rt),Rt.addVectors(sn.max,Ds.max),sn.expandByPoint(Rt)):(sn.expandByPoint(Ds.min),sn.expandByPoint(Ds.max))}sn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Rt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Rt.fromBufferAttribute(o,c),l&&(es.fromBufferAttribute(e,c),Rt.add(es)),s=Math.max(s,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Dt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let N=0;N<n.count;N++)o[N]=new F,l[N]=new F;let h=new F,d=new F,u=new F,f=new Be,x=new Be,M=new Be,p=new F,m=new F;function b(N,P,L){c[N]=c[P]=c[L]=1,h.fromBufferAttribute(n,N),d.fromBufferAttribute(n,P),u.fromBufferAttribute(n,L),f.fromBufferAttribute(r,N),x.fromBufferAttribute(r,P),M.fromBufferAttribute(r,L),d.sub(h),u.sub(h),x.sub(f),M.sub(f);let U=1/(x.x*M.y-M.x*x.y);isFinite(U)&&(p.copy(d).multiplyScalar(M.y).addScaledVector(u,-x.y).multiplyScalar(U),m.copy(u).multiplyScalar(x.x).addScaledVector(d,-M.x).multiplyScalar(U),o[N].add(p),o[P].add(p),o[L].add(p),l[N].add(m),l[P].add(m),l[L].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let N=0,P=w.length;N<P;++N){let L=w[N],U=L.start,O=L.count;for(let C=U,H=U+O;C<H;C+=3)b(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let _=new F,R=new F,E=new F,g=new F;function S(N){E.fromBufferAttribute(s,N),g.copy(E);let P=o[N];_.copy(P),_.sub(E.multiplyScalar(E.dot(P))).normalize(),R.crossVectors(g,P);let U=R.dot(l[N])<0?-1:1;a.setXYZW(N,_.x,_.y,_.z,U)}for(let N=0,P=n.count;N<P;++N)c[N]&&S(N);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,d=new F;if(e)for(let u=0,f=e.count;u<f;u+=3){let x=e.getX(u+0),M=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,x=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?f=l[M]*o.data.stride+o.offset:f=l[M]*h;for(let m=0;m<h;m++)u[x++]=c[f++]}return new Dt(u,h,d)}if(this.index===null)return Te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},fs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Pl,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Jc(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Jc(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Jc(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Pn()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Wt=new F,ps=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?uo(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Gs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Gs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Nl(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ul(e,this.data.array)}},ko=new F,Ud=new F,Fd=new De,xn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ko.subVectors(n,t).cross(Ud.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(ko),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Fd.getNormalMatrix(e),s=this.coplanarPoint(ko).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Od=0,qt=class extends _n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=Ss,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hl,this.blendDst=ul,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ea,this.stencilZFail=ea,this.stencilZPass=ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Te(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Te(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new we().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new xn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Be().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Be().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var zn=new F,Ho=new F,Ur=new F,Fr=new F,Ci=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ho.copy(e).add(t).multiplyScalar(.5),Ur.copy(t).sub(e).normalize(),Fr.copy(this.origin).sub(Ho);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ur),o=Fr.dot(this.direction),l=-Fr.dot(Ur),c=Fr.lengthSq(),h=Math.abs(1-a*a),d,u,f,x;if(h>0)if(d=a*l-o,u=a*o-l,x=r*h,d>=0)if(u>=-x)if(u<=x){let M=1/h;d*=M,u*=M,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-x?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=x?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ho).addScaledVector(Ur,u),f}intersectSphere(e,t){if(e.radius<0)return null;zn.subVectors(e.center,this.origin);let n=zn.dot(this.direction),s=zn.dot(zn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,x=t.x-a.x,M=t.y-a.y,p=t.z-a.z,m=n.x-a.x,b=n.y-a.y,w=n.z-a.z,_=Math.abs(l),R=Math.abs(c),E=Math.abs(h),g,S,N,P,L,U,O,C,H,V,G,te;if(_>=R&&_>=E?(N=l,U=d,H=x,te=m,l>=0?(g=c,S=h,P=u,L=f,O=M,C=p,V=b,G=w):(g=h,S=c,P=f,L=u,O=p,C=M,V=w,G=b)):R>=E?(N=c,U=u,H=M,te=b,c>=0?(g=h,S=l,P=f,L=d,O=p,C=x,V=w,G=m):(g=l,S=h,P=d,L=f,O=x,C=p,V=m,G=w)):(N=h,U=f,H=p,te=w,h>=0?(g=l,S=c,P=d,L=u,O=x,C=M,V=m,G=b):(g=c,S=l,P=u,L=d,O=M,C=x,V=b,G=m)),N===0)return null;let X=g/N,J=S/N,ee=1/N,xe=P-X*U,be=L-J*U,Z=O-X*H,he=C-J*H,fe=V-X*te,Re=G-J*te,pe=fe*he-Re*Z,Le=xe*Re-be*fe,ht=Z*be-he*xe;if(s){if(pe<0||Le<0||ht<0)return null}else if((pe<0||Le<0||ht<0)&&(pe>0||Le>0||ht>0))return null;let Ce=pe+Le+ht;if(Ce===0)return null;let Xe=ee*(pe*U+Le*H+ht*te);return(Ce>0?Xe<0:Xe>0)?null:this.at(Xe/Ce,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Tn=class extends qt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},jc=new Fe,_i=new Ci,Or=new Jt,Qc=new F,Br=new F,zr=new F,kr=new F,Go=new F,Hr=new F,$c=new F,Gr=new F,Ct=class extends ct{constructor(e=new jt,t=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Hr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Go.fromBufferAttribute(d,e),a?Hr.addScaledVector(Go,h):Hr.addScaledVector(Go.sub(t),h))}t.add(Hr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(r),_i.copy(e.ray).recast(e.near),!(Or.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Or,Qc)===null||_i.origin.distanceToSquared(Qc)>(e.far-e.near)**2))&&(jc.copy(r).invert(),_i.copy(e.ray).applyMatrix4(jc),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=u.length;x<M;x++){let p=u[x],m=a[p.materialIndex],b=Math.max(p.start,f.start),w=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let _=b,R=w;_<R;_+=3){let E=o.getX(_),g=o.getX(_+1),S=o.getX(_+2);s=Vr(this,m,e,n,c,h,d,E,g,S),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let p=x,m=M;p<m;p+=3){let b=o.getX(p),w=o.getX(p+1),_=o.getX(p+2);s=Vr(this,a,e,n,c,h,d,b,w,_),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,M=u.length;x<M;x++){let p=u[x],m=a[p.materialIndex],b=Math.max(p.start,f.start),w=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let _=b,R=w;_<R;_+=3){let E=_,g=_+1,S=_+2;s=Vr(this,m,e,n,c,h,d,E,g,S),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let p=x,m=M;p<m;p+=3){let b=p,w=p+1,_=p+2;s=Vr(this,a,e,n,c,h,d,b,w,_),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Bd(i,e,t,n,s,r,a,o){let l;if(e.side===Yt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Rn,o),l===null)return null;Gr.copy(o),Gr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Gr);return c<t.near||c>t.far?null:{distance:c,point:Gr.clone(),object:i}}function Vr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Br),i.getVertexPosition(l,zr),i.getVertexPosition(c,kr);let h=Bd(i,e,t,n,Br,zr,kr,$c);if(h){let d=new F;ci.getBarycoord($c,Br,zr,kr,d),s&&(h.uv=ci.getInterpolatedAttribute(s,o,l,c,d,new Be)),r&&(h.uv1=ci.getInterpolatedAttribute(r,o,l,c,d,new Be)),a&&(h.normal=ci.getInterpolatedAttribute(a,o,l,c,d,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new F,materialIndex:0};ci.getNormal(Br,zr,kr,u.normal),h.face=u,h.barycoord=d}return h}var Ns=new nt,eh=new nt,th=new nt,zd=new nt,nh=new Fe,Wr=new F,Vo=new Jt,ih=new Fe,Wo=new Ci,Zs=class extends Ct{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Zo,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Xt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wr),this.boundingBox.expandByPoint(Wr)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Jt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wr),this.boundingSphere.expandByPoint(Wr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vo.copy(this.boundingSphere),Vo.applyMatrix4(s),e.ray.intersectsSphere(Vo)!==!1&&(ih.copy(s).invert(),Wo.copy(e.ray).applyMatrix4(ih),!(this.boundingBox!==null&&Wo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Wo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Zo?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===qh?this.bindMatrixInverse.copy(this.bindMatrix).invert():Te("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;eh.fromBufferAttribute(s.attributes.skinIndex,e),th.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Ns.copy(t),t.set(0,0,0,0)):(Ns.set(t.x,t.y,t.z,1),t.set(0,0,0)),Ns.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=th.getComponent(r);if(a!==0){let o=eh.getComponent(r);nh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(zd.copy(Ns).applyMatrix4(nh),a)}}return t.isVector4&&(t.w=Ns.w),t.applyMatrix4(this.bindMatrixInverse)}},ms=class extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}},En=class extends St{constructor(e=null,t=1,n=1,s,r,a,o,l,c=xt,h=xt,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},sh=new Fe,kd=new Fe,Ks=class i{constructor(e=[],t=[]){this.uuid=Pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Te("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:kd;sh.multiplyMatrices(o,t[r]),sh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new En(t,e,e,en,It);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Te("Skeleton: No bone found with UUID:",r),a=new ms),this.bones.push(a),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Xn=class extends Dt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ts=new Fe,rh=new Fe,Xr=[],ah=new Xt,Hd=new Fe,Us=new Ct,Fs=new Jt,Js=class extends Ct{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Hd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ts),ah.copy(e.boundingBox).applyMatrix4(ts),this.boundingBox.union(ah)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ts),Fs.copy(e.boundingSphere).applyMatrix4(ts),this.boundingSphere.union(Fs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Us.geometry=this.geometry,Us.material=this.material,Us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fs.copy(this.boundingSphere),Fs.applyMatrix4(n),e.ray.intersectsSphere(Fs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ts),rh.multiplyMatrices(n,ts),Us.matrixWorld=rh,Us.raycast(e,Xr);for(let a=0,o=Xr.length;a<o;a++){let l=Xr[a];l.instanceId=r,l.object=this,t.push(l)}Xr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Xn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new En(new Float32Array(s*this.count),s,this.count,Pa,It));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ti=new Jt,Gd=new Be(.5,.5),qr=new F,ui=class{constructor(e=new xn,t=new xn,n=new xn,s=new xn,r=new xn,a=new xn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],x=r[8],M=r[9],p=r[10],m=r[11],b=r[12],w=r[13],_=r[14],R=r[15];if(s[0].setComponents(c-a,f-h,m-x,R-b).normalize(),s[1].setComponents(c+a,f+h,m+x,R+b).normalize(),s[2].setComponents(c+o,f+d,m+M,R+w).normalize(),s[3].setComponents(c-o,f-d,m-M,R-w).normalize(),n)s[4].setComponents(l,u,p,_).normalize(),s[5].setComponents(c-l,f-u,m-p,R-_).normalize();else if(s[4].setComponents(c-l,f-u,m-p,R-_).normalize(),t===hn)s[5].setComponents(c+l,f+u,m+p,R+_).normalize();else if(t===ls)s[5].setComponents(l,u,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){Ti.center.set(0,0,0);let t=Gd.distanceTo(e.center);return Ti.radius=.7071067811865476+t,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(qr.x=s.normal.x>0?e.max.x:e.min.x,qr.y=s.normal.y>0?e.max.y:e.min.y,qr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},oh=new Fe,ua=class i{constructor(){this.coordinateSystem=hn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];oh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ui),n[s].setFromProjectionMatrix(oh,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ui),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var gs=class extends qt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},da=new F,fa=new F,lh=new Fe,Os=new Ci,Yr=new Jt,Xo=new F,ch=new F,Pi=class extends ct{constructor(e=new jt,t=new gs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)da.fromBufferAttribute(t,s-1),fa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=da.distanceTo(fa);e.setAttribute("lineDistance",new Nt(n,1))}else Te("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(s),Yr.radius+=r,e.ray.intersectsSphere(Yr)===!1)return;lh.copy(s).invert(),Os.copy(e.ray).applyMatrix4(lh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let M=f,p=x-1;M<p;M+=c){let m=h.getX(M),b=h.getX(M+1),w=Zr(this,e,Os,l,m,b,M);w&&t.push(w)}if(this.isLineLoop){let M=h.getX(x-1),p=h.getX(f),m=Zr(this,e,Os,l,M,p,x-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let M=f,p=x-1;M<p;M+=c){let m=Zr(this,e,Os,l,M,M+1,M);m&&t.push(m)}if(this.isLineLoop){let M=Zr(this,e,Os,l,x-1,f,x-1);M&&t.push(M)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Zr(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(da.fromBufferAttribute(o,s),fa.fromBufferAttribute(o,r),t.distanceSqToSegment(da,fa,Xo,ch)>n)return;Xo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Xo);if(!(c<e.near||c>e.far))return{distance:c,point:ch.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var hh=new F,uh=new F,js=class extends Pi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)hh.fromBufferAttribute(t,s),uh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+hh.distanceTo(uh);e.setAttribute("lineDistance",new Nt(n,1))}else Te("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Qs=class extends Pi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},xs=class extends qt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},dh=new Fe,$o=new Ci,Kr=new Jt,Jr=new F,$s=class extends ct{constructor(e=new jt,t=new xs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(s),Kr.radius+=r,e.ray.intersectsSphere(Kr)===!1)return;dh.copy(s).invert(),$o.copy(e.ray).applyMatrix4(dh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let x=u,M=f;x<M;x++){let p=c.getX(x);Jr.fromBufferAttribute(d,p),fh(Jr,p,l,s,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let x=u,M=f;x<M;x++)Jr.fromBufferAttribute(d,x),fh(Jr,x,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function fh(i,e,t,n,s,r,a){let o=$o.distanceSqToPoint(i);if(o<t){let l=new F;$o.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var er=class extends St{constructor(e=[],t=Oi,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var qn=class extends St{constructor(e,t,n=vn,s,r,a,o=xt,l=xt,c,h=Vn,d=1){if(h!==Vn&&h!==$n)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new us(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},tr=class extends qn{constructor(e,t=vn,n=Oi,s,r,a=xt,o=xt,l,c=Vn){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},nr=class extends St{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ys=class i extends jt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Nt(c,3)),this.setAttribute("normal",new Nt(h,3)),this.setAttribute("uv",new Nt(d,2));function x(M,p,m,b,w,_,R,E,g,S,N){let P=_/g,L=R/S,U=_/2,O=R/2,C=E/2,H=g+1,V=S+1,G=0,te=0,X=new F;for(let J=0;J<V;J++){let ee=J*L-O;for(let xe=0;xe<H;xe++){let be=xe*P-U;X[M]=be*b,X[p]=ee*w,X[m]=C,c.push(X.x,X.y,X.z),X[M]=0,X[p]=0,X[m]=E>0?1:-1,h.push(X.x,X.y,X.z),d.push(xe/g),d.push(1-J/S),G+=1}}for(let J=0;J<S;J++)for(let ee=0;ee<g;ee++){let xe=u+ee+H*J,be=u+ee+H*(J+1),Z=u+(ee+1)+H*(J+1),he=u+(ee+1)+H*J;l.push(xe,be,he),l.push(be,Z,he),te+=6}o.addGroup(f,te,N),f+=te,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ii=class i extends jt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,f=[],x=[],M=[],p=[];for(let m=0;m<h;m++){let b=m*u-a;for(let w=0;w<c;w++){let _=w*d-r;x.push(_,-b,0),M.push(0,0,1),p.push(w/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<o;b++){let w=b+c*m,_=b+c*(m+1),R=b+1+c*(m+1),E=b+1+c*m;f.push(w,_,E),f.push(_,R,E)}this.setIndex(f),this.setAttribute("position",new Nt(x,3)),this.setAttribute("normal",new Nt(M,3)),this.setAttribute("uv",new Nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var ir=class extends qt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new we(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Gi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(ph(s))s.isRenderTargetTexture?(Te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(ph(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function zt(i){let e={};for(let t=0;t<i.length;t++){let n=Gi(i[t]);for(let s in n)e[s]=n[s]}return e}function ph(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Vd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}var ou={clone:Gi,merge:zt},Wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,An=class extends qt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wd,this.fragmentShader=Xd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gi(e.uniforms),this.uniformsGroups=Vd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new we().setHex(s.value);break;case"v2":this.uniforms[n].value=new Be().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new nt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new De().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Fe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},pa=class extends An{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Yn=class extends qt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ho,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Pt=class extends Yn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ei('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ei('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ma=class extends qt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ga=class extends qt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function li(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Bs(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function qd(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function mh(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function Yd(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var wn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},xa=class extends wn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jo,endingEnd:Jo}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case jo:r=e,o=2*t-n;break;case Qo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case jo:a=e,l=2*n-t;break;case Qo:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,x=(n-t)/(s-t),M=x*x,p=M*x,m=-u*p+2*u*M-u*x,b=(1+u)*p+(-1.5-2*u)*M+(-.5+u)*x+1,w=(-1-f)*p+(1.5+f)*M+.5*x,_=f*p-f*M;for(let R=0;R!==o;++R)r[R]=m*a[h+R]+b*a[c+R]+w*a[l+R]+_*a[d+R];return r}},ya=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},va=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ma=class extends wn{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let x=(n-t)/(s-t),M=1-x;for(let p=0;p!==o;++p)r[p]=a[c+p]*M+a[l+p]*x;return r}let u=o*2,f=e-1;for(let x=0;x!==o;++x){let M=a[c+x],p=a[l+x],m=f*u+x*2,b=d[m],w=d[m+1],_=e*u+x*2,R=h[_],E=h[_+1],g=Kd(n,t,b,R,s);r[x]=lu(g,M,w,E,p)}return r}};function lu(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Zd(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Kd(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=lu(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Zd(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Qt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=li(t,this.TimeBufferType),this.values=li(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:li(e.times,Array),values:li(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Bs(e.settings)&&(n.settings={inTangents:li(e.settings.inTangents,Array),outTangents:li(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new va(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ma(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ai:t=this.InterpolantFactoryMethodDiscrete;break;case wi:t=this.InterpolantFactoryMethodLinear;break;case $r:t=this.InterpolantFactoryMethodSmooth;break;case Ko:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Te("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ai;case this.InterpolantFactoryMethodLinear:return wi;case this.InterpolantFactoryMethodSmooth:return $r;case this.InterpolantFactoryMethodBezier:return Ko}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Bs(this.settings)&&(gh(this.settings.inTangents,e),gh(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Bs(this.settings)&&(xh(this.settings.inTangents,e),xh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ie("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ie("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ie("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ie("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&id(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ie("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===$r,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let x=0;x!==n;++x){let M=t[d+x];if(M!==t[u+x]||M!==t[f+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Bs(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function gh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function xh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Qt.prototype.ValueTypeName="";Qt.prototype.TimeBufferType=Float32Array;Qt.prototype.ValueBufferType=Float32Array;Qt.prototype.DefaultInterpolation=wi;var Zn=class extends Qt{constructor(e,t,n){super(e,t,n)}};Zn.prototype.ValueTypeName="bool";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=Ai;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var sr=class extends Qt{constructor(e,t,n,s){super(e,t,n,s)}};sr.prototype.ValueTypeName="color";var Kn=class extends Qt{constructor(e,t,n,s){super(e,t,n,s)}};Kn.prototype.ValueTypeName="number";var Sa=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)an.slerpFlat(r,0,a,c-o,a,c,l);return r}},Jn=class extends Qt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Sa(this.times,this.values,this.getValueSize(),e)}};Jn.prototype.ValueTypeName="quaternion";Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var jn=class extends Qt{constructor(e,t,n){super(e,t,n)}};jn.prototype.ValueTypeName="string";jn.prototype.ValueBufferType=Array;jn.prototype.DefaultInterpolation=Ai;jn.prototype.InterpolantFactoryMethodLinear=void 0;jn.prototype.InterpolantFactoryMethodSmooth=void 0;var di=class extends Qt{constructor(e,t,n,s){super(e,t,n,s)}};di.prototype.ValueTypeName="vector";var rr=class{constructor(e="",t=-1,n=[],s=Yh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Pn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(jd(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Qt.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=qd(l);l=mh(l,1,h),c=mh(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Kn(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let d=h[1],u=s[d];u||(s[d]=u=[]),u.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Jd(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Kn;case"vector":case"vector2":case"vector3":case"vector4":return di;case"color":return sr;case"quaternion":return Jn;case"bool":case"boolean":return Zn;case"string":return jn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function jd(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Jd(i.type);if(i.times===void 0){let n=[],s=[];Yd(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Bs(i.settings)&&(t.settings={inTangents:li(i.settings.inTangents,Float32Array),outTangents:li(i.settings.outTangents,Float32Array)}),t}var Sn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(yh(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!yh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function yh(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var ba=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],x=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},cu=new ba,yn=class{constructor(e){this.manager=e!==void 0?e:cu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};yn.DEFAULT_MATERIAL_NAME="__DEFAULT";var kn={},el=class extends Error{constructor(e,t){super(e),this.response=t}},Li=class extends yn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Sn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(kn[e]!==void 0){kn[e].push({onLoad:t,onProgress:n,onError:s});return}kn[e]=[],kn[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Te("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=kn[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,x=f!==0,M=0,p=new ReadableStream({start(m){b();function b(){d.read().then(({done:w,value:_})=>{if(w)m.close();else{M+=_.byteLength;let R=new ProgressEvent("progress",{lengthComputable:x,loaded:M,total:f});for(let E=0,g=h.length;E<g;E++){let S=h[E];S.onProgress&&S.onProgress(R)}m.enqueue(_),b()}},w=>{m.error(w)})}}});return new Response(p)}else throw new el(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(x=>f.decode(x))}}}).then(c=>{Sn.add(`file:${e}`,c);let h=kn[e];delete kn[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=kn[e];if(h===void 0)throw this.manager.itemError(e),c;delete kn[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ns=new WeakMap,_a=class extends yn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Sn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=ns.get(a);d===void 0&&(d=[],ns.set(a,d)),d.push({onLoad:t,onError:s})}return a}let o=cs("img");function l(){h(),t&&t(this);let d=ns.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}ns.delete(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),Sn.remove(`image:${e}`);let u=ns.get(this)||[];for(let f=0;f<u.length;f++){let x=u[f];x.onError&&x.onError(d)}ns.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Sn.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var ar=class extends yn{constructor(e){super(e)}load(e,t,n,s){let r=this,a=new En,o=new Li(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){s!==void 0?s(h):Ie(h);return}r._applyTexData(a,c),t&&t(a,c)},n,s),a}createDataTexture(e){let t=new En;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Kt,e.wrapT=t.wrapT!==void 0?t.wrapT:Kt,e.magFilter=t.magFilter!==void 0?t.magFilter:ot,e.minFilter=t.minFilter!==void 0?t.minFilter:ot,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=ln),t.mipmapCount===1&&(e.minFilter=ot),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},fi=class extends yn{constructor(e){super(e)}load(e,t,n,s){let r=new St,a=new _a(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Di=class extends ct{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},or=class extends Di{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},qo=new Fe,vh=new F,Mh=new F,vs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=$t,this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ui,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;vh.setFromMatrixPosition(e.matrixWorld),t.position.copy(vh),Mh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){qo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(qo,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ls||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(qo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},jr=new F,Qr=new an,Mn=new F,lr=class extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(jr,Qr,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jr,Qr,Mn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(jr,Qr,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jr,Qr,Mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},oi=new F,Sh=new Be,bh=new Be,bt=class extends lr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ri*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ri*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,Sh,bh),t.subVectors(bh,Sh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(zs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},tl=class extends vs{constructor(){super(new bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ri*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},cr=class extends Di{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new tl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},nl=class extends vs{constructor(){super(new bt(90,1,.5,500)),this.isPointLightShadow=!0}},hr=class extends Di{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new nl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ni=class extends lr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},il=class extends vs{constructor(){super(new Ni(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pi=class extends Di{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new il}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Qn=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Yo=new WeakMap,ur=class extends yn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Te("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Te("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Sn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Yo.has(a)===!0?(s&&s(Yo.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Sn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Yo.set(l,c),Sn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Sn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var is=-90,ss=1,Ms=class extends ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new bt(is,ss,e,t);s.layers=this.layers,this.add(s);let r=new bt(is,ss,e,t);r.layers=this.layers,this.add(r);let a=new bt(is,ss,e,t);a.layers=this.layers,this.add(a);let o=new bt(is,ss,e,t);o.layers=this.layers,this.add(o);let l=new bt(is,ss,e,t);l.layers=this.layers,this.add(l);let c=new bt(is,ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=M,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Ta=class extends bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Ol="\\[\\]\\.:\\/",Qd=new RegExp("["+Ol+"]","g"),Bl="[^"+Ol+"]",$d="[^"+Ol.replace("\\.","")+"]",ef=/((?:WC+[\/:])*)/.source.replace("WC",Bl),tf=/(WCOD+)?/.source.replace("WCOD",$d),nf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bl),sf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bl),rf=new RegExp("^"+ef+tf+nf+sf+"$"),af=["material","materials","bones","map"],sl=class{constructor(e,t,n){let s=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},st=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qd,"")}static parseTrackName(e){let t=rf.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);af.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Te("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ie("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ie("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ie("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ie("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ie("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ie("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};st.Composite=sl;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ox=new Float32Array(1);var rl=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function zl(i,e,t,n){let s=of(n);switch(t){case Tl:return i*e;case Pa:return i*e/s.components*s.byteLength;case Ia:return i*e/s.components*s.byteLength;case gi:return i*e*2/s.components*s.byteLength;case La:return i*e*2/s.components*s.byteLength;case El:return i*e*3/s.components*s.byteLength;case en:return i*e*4/s.components*s.byteLength;case Da:return i*e*4/s.components*s.byteLength;case pr:case mr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gr:case xr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ua:case Oa:return Math.max(i,16)*Math.max(e,8)/4;case Na:case Fa:return Math.max(i,8)*Math.max(e,8)/2;case Ba:case za:case Ha:case Ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ka:case yr:case Va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case $a:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case eo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case to:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case no:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case io:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case so:case ro:case ao:return Math.ceil(i/4)*Math.ceil(e/4)*16;case oo:case lo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case vr:case co:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function of(i){switch(i){case $t:case Ml:return{byteLength:1,components:1};case Ts:case Sl:case Zt:return{byteLength:2,components:1};case Ra:case Ca:return{byteLength:2,components:4};case vn:case wa:case It:return{byteLength:4,components:1};case bl:case _l:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Iu(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function cf(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,x)=>f.start-x.start);let u=0;for(let f=1;f<d.length;f++){let x=d[u],M=d[f];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++u,d[u]=M)}d.length=u+1;for(let f=0,x=d.length;f<x;f++){let M=d[f];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var hf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,df=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ff=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,vf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_f=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,If=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Df=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Nf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Uf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zf="gl_FragColor = linearToOutputTexel( gl_FragColor );",kf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Gf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$f=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ep=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,tp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,np=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ip=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ap=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,op=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,up=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,dp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_p=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ep=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ip=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Lp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Up=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Op=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$p=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,em=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,im=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ym=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_m=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Am=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Im=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,km=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:hf,alphahash_pars_fragment:uf,alphamap_fragment:df,alphamap_pars_fragment:ff,alphatest_fragment:pf,alphatest_pars_fragment:mf,aomap_fragment:gf,aomap_pars_fragment:xf,batching_pars_vertex:yf,batching_vertex:vf,begin_vertex:Mf,beginnormal_vertex:Sf,bsdfs:bf,iridescence_fragment:_f,bumpmap_pars_fragment:Tf,clipping_planes_fragment:Ef,clipping_planes_pars_fragment:Af,clipping_planes_pars_vertex:wf,clipping_planes_vertex:Rf,color_fragment:Cf,color_pars_fragment:Pf,color_pars_vertex:If,color_vertex:Lf,common:Df,defaultnormal_vertex:Nf,displacementmap_pars_vertex:Uf,displacementmap_vertex:Ff,emissivemap_fragment:Of,emissivemap_pars_fragment:Bf,colorspace_fragment:zf,colorspace_pars_fragment:kf,envmap_fragment:Hf,envmap_common_pars_fragment:Gf,envmap_pars_fragment:Vf,envmap_pars_vertex:Wf,envmap_physical_pars_fragment:tp,envmap_vertex:Xf,fog_vertex:qf,fog_pars_vertex:Yf,fog_fragment:Zf,fog_pars_fragment:Kf,gradientmap_pars_fragment:Jf,lightmap_pars_fragment:jf,lights_lambert_fragment:Qf,lights_lambert_pars_fragment:$f,lights_pars_begin:ep,lights_toon_fragment:np,lights_toon_pars_fragment:ip,lights_phong_fragment:sp,lights_phong_pars_fragment:rp,lights_physical_fragment:ap,lights_physical_pars_fragment:op,lights_fragment_begin:lp,lights_fragment_maps:cp,lights_fragment_end:hp,lightprobes_pars_fragment:up,logdepthbuf_fragment:dp,logdepthbuf_pars_fragment:fp,logdepthbuf_pars_vertex:pp,logdepthbuf_vertex:mp,map_fragment:gp,map_pars_fragment:xp,map_particle_fragment:yp,map_particle_pars_fragment:vp,metalnessmap_fragment:Mp,metalnessmap_pars_fragment:Sp,morphinstance_vertex:bp,morphcolor_vertex:_p,morphnormal_vertex:Tp,morphtarget_pars_vertex:Ep,morphtarget_vertex:Ap,normal_fragment_begin:wp,normal_fragment_maps:Rp,normal_pars_fragment:Cp,normal_pars_vertex:Pp,normal_vertex:Ip,normalmap_pars_fragment:Lp,clearcoat_normal_fragment_begin:Dp,clearcoat_normal_fragment_maps:Np,clearcoat_pars_fragment:Up,iridescence_pars_fragment:Fp,opaque_fragment:Op,packing:Bp,premultiplied_alpha_fragment:zp,project_vertex:kp,dithering_fragment:Hp,dithering_pars_fragment:Gp,roughnessmap_fragment:Vp,roughnessmap_pars_fragment:Wp,shadowmap_pars_fragment:Xp,shadowmap_pars_vertex:qp,shadowmap_vertex:Yp,shadowmask_pars_fragment:Zp,skinbase_vertex:Kp,skinning_pars_vertex:Jp,skinning_vertex:jp,skinnormal_vertex:Qp,specularmap_fragment:$p,specularmap_pars_fragment:em,tonemapping_fragment:tm,tonemapping_pars_fragment:nm,transmission_fragment:im,transmission_pars_fragment:sm,uv_pars_fragment:rm,uv_pars_vertex:am,uv_vertex:om,worldpos_vertex:lm,background_vert:cm,background_frag:hm,backgroundCube_vert:um,backgroundCube_frag:dm,cube_vert:fm,cube_frag:pm,depth_vert:mm,depth_frag:gm,distance_vert:xm,distance_frag:ym,equirect_vert:vm,equirect_frag:Mm,linedashed_vert:Sm,linedashed_frag:bm,meshbasic_vert:_m,meshbasic_frag:Tm,meshlambert_vert:Em,meshlambert_frag:Am,meshmatcap_vert:wm,meshmatcap_frag:Rm,meshnormal_vert:Cm,meshnormal_frag:Pm,meshphong_vert:Im,meshphong_frag:Lm,meshphysical_vert:Dm,meshphysical_frag:Nm,meshtoon_vert:Um,meshtoon_frag:Fm,points_vert:Om,points_frag:Bm,shadow_vert:zm,shadow_frag:km,sprite_vert:Hm,sprite_frag:Gm},ge={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Ln={basic:{uniforms:zt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:zt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new we(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:zt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:zt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:zt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new we(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:zt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:zt([ge.points,ge.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:zt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:zt([ge.common,ge.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:zt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:zt([ge.sprite,ge.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:zt([ge.common,ge.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:zt([ge.lights,ge.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Ln.physical={uniforms:zt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new De},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};var fo={r:0,b:0,g:0},Vm=new Fe,Lu=new De;Lu.set(-1,0,0,0,1,0,0,0,1);function Wm(i,e,t,n,s,r){let a=new we(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){let _=b.backgroundBlurriness>0;w=e.get(w,_)}return w}function x(b){let w=!1,_=f(b);_===null?p(a,o):_&&_.isColor&&(p(_,1),w=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(b,w){let _=f(w);_&&_.isCubeTexture?(c===void 0&&(c=new Ct(new ys(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Gi(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,E,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Vm.makeRotationFromEuler(w.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Lu),c.material.toneMapped=Ge.getTransfer(_.colorSpace)!==et,(h!==_||d!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ct(new Ii(2,2),new An({name:"BackgroundMaterial",uniforms:Gi(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Ge.getTransfer(_.colorSpace)!==et,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,w){b.getRGB(fo,Fl(i)),t.buffers.color.setClear(fo.r,fo.g,fo.b,w,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),o=w,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,p(a,o)},render:x,addToRenderList:M,dispose:m}}function Xm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(L,U,O,C,H){let V=!1,G=d(L,C,O,U);r!==G&&(r=G,c(r.object)),V=f(L,C,O,H),V&&x(L,C,O,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,_(L,U,O,C),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function d(L,U,O,C){let H=C.wireframe===!0,V=n[U.id];V===void 0&&(V={},n[U.id]=V);let G=L.isInstancedMesh===!0?L.id:0,te=V[G];te===void 0&&(te={},V[G]=te);let X=te[O.id];X===void 0&&(X={},te[O.id]=X);let J=X[H];return J===void 0&&(J=u(l()),X[H]=J),J}function u(L){let U=[],O=[],C=[];for(let H=0;H<t;H++)U[H]=0,O[H]=0,C[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:C,object:L,attributes:{},index:null}}function f(L,U,O,C){let H=r.attributes,V=U.attributes,G=0,te=O.getAttributes();for(let X in te)if(te[X].location>=0){let ee=H[X],xe=V[X];if(xe===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(xe=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(xe=L.instanceColor)),ee===void 0||ee.attribute!==xe||xe&&ee.data!==xe.data)return!0;G++}return r.attributesNum!==G||r.index!==C}function x(L,U,O,C){let H={},V=U.attributes,G=0,te=O.getAttributes();for(let X in te)if(te[X].location>=0){let ee=V[X];ee===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor));let xe={};xe.attribute=ee,ee&&ee.data&&(xe.data=ee.data),H[X]=xe,G++}r.attributes=H,r.attributesNum=G,r.index=C}function M(){let L=r.newAttributes;for(let U=0,O=L.length;U<O;U++)L[U]=0}function p(L){m(L,0)}function m(L,U){let O=r.newAttributes,C=r.enabledAttributes,H=r.attributeDivisors;O[L]=1,C[L]===0&&(i.enableVertexAttribArray(L),C[L]=1),H[L]!==U&&(i.vertexAttribDivisor(L,U),H[L]=U)}function b(){let L=r.newAttributes,U=r.enabledAttributes;for(let O=0,C=U.length;O<C;O++)U[O]!==L[O]&&(i.disableVertexAttribArray(O),U[O]=0)}function w(L,U,O,C,H,V,G){G===!0?i.vertexAttribIPointer(L,U,O,H,V):i.vertexAttribPointer(L,U,O,C,H,V)}function _(L,U,O,C){M();let H=C.attributes,V=O.getAttributes(),G=U.defaultAttributeValues;for(let te in V){let X=V[te];if(X.location>=0){let J=H[te];if(J===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(J=L.instanceColor)),J!==void 0){let ee=J.normalized,xe=J.itemSize,be=e.get(J);if(be===void 0)continue;let Z=be.buffer,he=be.type,fe=be.bytesPerElement,Re=he===i.INT||he===i.UNSIGNED_INT||J.gpuType===wa;if(J.isInterleavedBufferAttribute){let pe=J.data,Le=pe.isInterleavedBuffer===!0?pe.stride:pe.itemSize,ht=J.offset;if(pe.isInstancedInterleavedBuffer||pe.isInstancedBufferAttribute){for(let Ce=0;Ce<X.locationSize;Ce++)m(X.location+Ce,pe.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ce=0;Ce<X.locationSize;Ce++)p(X.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let Ce=0;Ce<X.locationSize;Ce++)w(X.location+Ce,xe/X.locationSize,he,ee,Le*fe,(ht+xe/X.locationSize*Ce)*fe,Re)}else{if(J.isInstancedBufferAttribute){for(let pe=0;pe<X.locationSize;pe++)m(X.location+pe,J.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let pe=0;pe<X.locationSize;pe++)p(X.location+pe);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let pe=0;pe<X.locationSize;pe++)w(X.location+pe,xe/X.locationSize,he,ee,xe*fe,xe/X.locationSize*pe*fe,Re)}}else if(G!==void 0){let ee=G[te];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(X.location,ee);break;case 3:i.vertexAttrib3fv(X.location,ee);break;case 4:i.vertexAttrib4fv(X.location,ee);break;default:i.vertexAttrib1fv(X.location,ee)}}}}b()}function R(){N();for(let L in n){let U=n[L];for(let O in U){let C=U[O];for(let H in C){let V=C[H];for(let G in V)h(V[G].object),delete V[G];delete C[H]}}delete n[L]}}function E(L){if(n[L.id]===void 0)return;let U=n[L.id];for(let O in U){let C=U[O];for(let H in C){let V=C[H];for(let G in V)h(V[G].object),delete V[G];delete C[H]}}delete n[L.id]}function g(L){for(let U in n){let O=n[U];for(let C in O){let H=O[C];if(H[L.id]===void 0)continue;let V=H[L.id];for(let G in V)h(V[G].object),delete V[G];delete H[L.id]}}}function S(L){for(let U in n){let O=n[U],C=L.isInstancedMesh===!0?L.id:0,H=O[C];if(H!==void 0){for(let V in H){let G=H[V];for(let te in G)h(G[te].object),delete G[te];delete H[V]}delete O[C],Object.keys(O).length===0&&delete n[U]}}}function N(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:P,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:g,initAttributes:M,enableAttribute:p,disableUnusedAttributes:b}}function qm(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ym(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==en&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let S=g===Zt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==$t&&g!==It&&!S&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Te("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Te("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:_,maxSamples:R,samples:E}}function Zm(i){let e=this,t=null,n=0,s=!1,r=!1,a=new xn,o=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let x=d.clippingPlanes,M=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||x===null||x.length===0||r&&!p)r?h(null):c();else{let b=r?0:n,w=b*4,_=m.clippingState||null;l.value=_,_=h(x,u,w,f);for(let R=0;R!==w;++R)_[R]=t[R];m.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,x){let M=d!==null?d.length:0,p=null;if(M!==0){if(p=l.value,x!==!0||p===null){let m=f+M*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,_=f;w!==M;++w,_+=4)a.copy(d[w]).applyMatrix4(b,o),a.normal.toArray(p,_),p[_+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}var _r=class extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new er(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ys(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:Ui});r.uniforms.tEquirect.value=t;let a=new Ct(s,r),o=t.minFilter;return t.minFilter===ln&&(t.minFilter=ot),new Ms(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},hu=256,Km=3,Jm=20,Du=256,Nu=16,jm=3,Qm=new F,$m=new we,Vi=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ms(1,10,null),this._boxMesh=new Ct(new ys(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Qm}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,x=l.autoClearStencil,M=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(e.background=l.getClearColor($m));let p=new Ms(n,s,h);return p.position.copy(o),p.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=x,e.background=M,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=du(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(hu,Dl(e))}_fromTexture(e,t){e.mapping===Oi||e.mapping===bs?this._setSize(e.image.length===0?hu:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=uu(e,!1,!1),n=Math.log2(e)-Km;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=uu(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Oi||e.mapping===bs?(this._cubemapMaterial===null&&(this._cubemapMaterial=fu()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=du()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=eg(),this._integrationMaterial=tg());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Nu);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-jm)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Du*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=ng());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function uu(i,e,t){return new _r(i,{minFilter:ln,generateMipmaps:e,type:Zt,colorSpace:_t,depthBuffer:t})}function Tr(i,e,t){return new An({name:i,uniforms:e,vertexShader:ke.cube_vert,fragmentShader:t,side:Yt,blending:Ui,depthTest:!1,depthWrite:!1})}function eg(){return Tr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Du}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function tg(){return Tr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Nu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ng(){return Tr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Jm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function du(){return Tr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function fu(){return Tr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ig(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Bi||f===Ea)if(e.has(u)){let x=e.get(u).texture;return o(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let M=new _r(x.height);return M.fromEquirectangularTexture(i,u),e.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,x=f===Bi||f===Ea,M=f===Oi||f===bs;if(x||M){let p=t.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Vi(i)),p=x?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let b=u.image;return x&&b&&b.height>0||M&&b&&l(b)?(n===null&&(n=new Vi(i)),p=x?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,f){return f===Bi?u.mapping=Oi:f===Ea&&(u.mapping=bs),u}function l(u){let f=0,x=6;for(let M=0;M<x;M++)u[M]!==void 0&&f++;return f===x}function c(u){let f=u.target;f.removeEventListener("dispose",c);let x=e.get(f);x!==void 0&&(e.delete(f),x.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function sg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ei("WebGLRenderer: "+n+" extension not supported."),s}}}function rg(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(x=>delete s[x]);function o(x){l(x.target)}function l(x){x.index!==null&&e.remove(x.index);for(let p in x.attributes)e.remove(x.attributes[p]);x.removeEventListener("dispose",o),delete s[x.id],a.unregister(x);let M=r.get(x);M&&(e.remove(M),r.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function c(x,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),t.memory.geometries++),M}function h(x){let M=x.attributes;for(let p in M)e.update(M[p],i.ARRAY_BUFFER)}function d(x){let M=x.index,p=x.attributes.position,m=0;if(p===void 0)return;let b=M!==null?M.array.length:p.array.length/3-1,w=p.count>=65535?Ys:qs,_=new w(Math.ceil(b/3)*6,1),R=_.array;if(M!==null){let g=M.array;m=M.version;for(let S=0,N=0;S<b;S+=3){let P=g[S+0],L=g[S+1],U=g[S+2];R[N++]=P,R[N++]=L,R[N++]=L,R[N++]=U,R[N++]=U,R[N++]=P}}else{m=p.version;for(let g=0,S=0;g<b;g+=3){let N=g+0,P=g+1,L=g+2;R[S++]=N,R[S++]=P,R[S++]=P,R[S++]=L,R[S++]=L,R[S++]=N}}_.version=m;let E=r.get(x);E&&e.remove(E),r.set(x,_)}function u(x){let M=r.get(x);if(M){let p=x.index;p!==null&&M.version<p.version&&d(x)}else d(x);return r.get(x)}function f(){for(let x in s){let M=s[x].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function ag(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let M=0;for(let p=0;p<f;p++)M+=u[p];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function og(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ie("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function lg(i,e,t){let n=new WeakMap,s=new nt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let N=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",N)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],w=0;f===!0&&(w=1),x===!0&&(w=2),M===!0&&(w=3);let _=o.attributes.position.count*w,R=1;_>e.maxTextureSize&&(R=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let E=new Float32Array(_*R*4*d),g=new Vs(E,_,R,d);g.type=It,g.needsUpdate=!0;let S=w*4;for(let P=0;P<d;P++){let L=p[P],U=m[P],O=b[P],C=_*R*4*P;for(let H=0;H<L.count;H++){let V=H*S;f===!0&&(s.fromBufferAttribute(L,H),E[C+V+0]=s.x,E[C+V+1]=s.y,E[C+V+2]=s.z,E[C+V+3]=0),x===!0&&(s.fromBufferAttribute(U,H),E[C+V+4]=s.x,E[C+V+5]=s.y,E[C+V+6]=s.z,E[C+V+7]=0),M===!0&&(s.fromBufferAttribute(O,H),E[C+V+8]=s.x,E[C+V+9]=s.y,E[C+V+10]=s.z,E[C+V+11]=O.itemSize===4?s.w:1)}}u={count:d,texture:g,size:new Be(_,R)},n.set(o,u),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];let x=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function cg(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var hg={[fl]:"LINEAR_TONE_MAPPING",[pl]:"REINHARD_TONE_MAPPING",[ml]:"CINEON_TONE_MAPPING",[fr]:"ACES_FILMIC_TONE_MAPPING",[xl]:"AGX_TONE_MAPPING",[yl]:"NEUTRAL_TONE_MAPPING",[gl]:"CUSTOM_TONE_MAPPING"};function ug(i,e,t,n,s,r){let a=new on(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new jt;h.setAttribute("position",new Nt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Nt([0,2,0,0,2,0],2));let d=new pa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Ct(h,d),f=new Ni(-1,1,1,-1,0,1),x=null,M=null,p=!1,m,b=null,w=[],_=!1;this.setSize=function(R,E){a.setSize(R,E),o!==null&&o.setSize(R,E),l!==null&&l.setSize(R,E);for(let g=0;g<w.length;g++){let S=w[g];S.setSize&&S.setSize(R,E)}},this.setEffects=function(R){w=R,_=w.length>0&&w[0].isRenderPass===!0;let E=a.width,g=a.height;w.length>0&&o===null&&(o=new on(E,g,{type:Zt,depthBuffer:!1,stencilBuffer:!1}),l=new on(E,g,{type:Zt,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&w.some(N=>N.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new qn(E,g),r===!0&&(c.format=$n,c.type=ki)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let N=0;N<w.length;N++){let P=w[N];P.setSize&&P.setSize(E,g),S&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(R,E){if(p||R.toneMapping===Cn&&w.length===0)return!1;if(b=E,E!==null){let g=E.width,S=E.height;(a.width!==g||a.height!==S)&&this.setSize(g,S)}return _===!1&&R.setRenderTarget(a),m=R.toneMapping,R.toneMapping=Cn,!0},this.hasRenderPass=function(){return _},this.end=function(R,E){R.toneMapping=m,p=!0;let g=a,S=o;for(let N=0;N<w.length;N++){let P=w[N];P.enabled!==!1&&(P.render(R,S,g,E),P.needsSwap!==!1&&(g=S,S=S===o?l:o))}if(x!==R.outputColorSpace||M!==R.toneMapping){x=R.outputColorSpace,M=R.toneMapping,d.defines={},Ge.getTransfer(x)===et&&(d.defines.SRGB_TRANSFER="");let N=hg[M];N&&(d.defines[N]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=g.texture,R.setRenderTarget(b),R.render(u,f),b=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Uu=new St,Fu=new qn(1,1),Ou=new tr(1),Bu=new Vs,zu=new ha,ku=new er,pu=[],mu=[],gu=new Float32Array(16),xu=new Float32Array(9),yu=new Float32Array(4);function ws(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=pu[s];if(r===void 0&&(r=new Float32Array(s),pu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Et(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function go(i,e){let t=mu[e];t===void 0&&(t=new Int32Array(e),mu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function dg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),Et(t,e)}}function pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),Et(t,e)}}function mg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),Et(t,e)}}function gg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;yu.set(n),i.uniformMatrix2fv(this.addr,!1,yu),Et(t,n)}}function xg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;xu.set(n),i.uniformMatrix3fv(this.addr,!1,xu),Et(t,n)}}function yg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;gu.set(n),i.uniformMatrix4fv(this.addr,!1,gu),Et(t,n)}}function vg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Mg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2iv(this.addr,e),Et(t,e)}}function Sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3iv(this.addr,e),Et(t,e)}}function bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4iv(this.addr,e),Et(t,e)}}function _g(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2uiv(this.addr,e),Et(t,e)}}function Eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3uiv(this.addr,e),Et(t,e)}}function Ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4uiv(this.addr,e),Et(t,e)}}function xo(i){return i.version===0&&(i.compareFunction=Cl,i.needsUpdate=!0),i}function wg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=xo(Fu):r=Uu,t.setTexture2D(e||r,s)}function Rg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||zu,s)}function Cg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=xo(Ou):r=ku,t.setTextureCube(e||r,s)}function Pg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Bu,s)}function Ig(i){switch(i){case 5126:return dg;case 35664:return fg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return xg;case 35676:return yg;case 5124:case 35670:return vg;case 35667:case 35671:return Mg;case 35668:case 35672:return Sg;case 35669:case 35673:return bg;case 5125:return _g;case 36294:return Tg;case 36295:return Eg;case 36296:return Ag;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Pg}}function Lg(i,e){i.uniform1fv(this.addr,e)}function Dg(i,e){let t=ws(e,this.size,2);i.uniform2fv(this.addr,t)}function Ng(i,e){let t=ws(e,this.size,3);i.uniform3fv(this.addr,t)}function Ug(i,e){let t=ws(e,this.size,4);i.uniform4fv(this.addr,t)}function Fg(i,e){let t=ws(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Og(i,e){let t=ws(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Bg(i,e){let t=ws(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function zg(i,e){i.uniform1iv(this.addr,e)}function kg(i,e){i.uniform2iv(this.addr,e)}function Hg(i,e){i.uniform3iv(this.addr,e)}function Gg(i,e){i.uniform4iv(this.addr,e)}function Vg(i,e){i.uniform1uiv(this.addr,e)}function Wg(i,e){i.uniform2uiv(this.addr,e)}function Xg(i,e){i.uniform3uiv(this.addr,e)}function qg(i,e){i.uniform4uiv(this.addr,e)}function Yg(i,e,t){let n=this.cache,s=e.length,r=go(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=xo(Fu):a=Uu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Zg(i,e,t){let n=this.cache,s=e.length,r=go(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||zu,r[a])}function Kg(i,e,t){let n=this.cache,s=e.length,r=go(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=xo(Ou):a=ku;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function Jg(i,e,t){let n=this.cache,s=e.length,r=go(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Bu,r[a])}function jg(i){switch(i){case 5126:return Lg;case 35664:return Dg;case 35665:return Ng;case 35666:return Ug;case 35674:return Fg;case 35675:return Og;case 35676:return Bg;case 5124:case 35670:return zg;case 35667:case 35671:return kg;case 35668:case 35672:return Hg;case 35669:case 35673:return Gg;case 5125:return Vg;case 36294:return Wg;case 36295:return Xg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return Yg;case 35679:case 36299:case 36307:return Zg;case 35680:case 36300:case 36308:case 36293:return Kg;case 36289:case 36303:case 36311:case 36292:return Jg}}var Gl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ig(t.type)}},Vl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jg(t.type)}},Wl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},kl=/(\w+)(\])?(\[|\.)?/g;function vu(i,e){i.seq.push(e),i.map[e.id]=e}function Qg(i,e,t){let n=i.name,s=n.length;for(kl.lastIndex=0;;){let r=kl.exec(n),a=kl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){vu(t,c===void 0?new Gl(o,i,e):new Vl(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Wl(o),vu(t,d)),t=d}}}var As=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Qg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Mu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var $g=37297,e0=0;function t0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Su=new De;function n0(i){Ge._getMatrix(Su,Ge.workingColorSpace,i);let e=`mat3( ${Su.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(i)){case Hs:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Te("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function bu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+t0(i.getShaderSource(e),o)}else return r}function i0(i,e){let t=n0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var s0={[fl]:"Linear",[pl]:"Reinhard",[ml]:"Cineon",[fr]:"ACESFilmic",[xl]:"AgX",[yl]:"Neutral",[gl]:"Custom"};function r0(i,e){let t=s0[e];return t===void 0?(Te("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var po=new F;function a0(){Ge.getLuminanceCoefficients(po);let i=po.x.toFixed(4),e=po.y.toFixed(4),t=po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function l0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function c0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function br(i){return i!==""}function _u(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Tu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var h0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xl(i){return i.replace(h0,u0)}function u0(i,e){let t=ke[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Xl(t)}var d0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eu(i){return i.replace(d0,f0)}function f0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Au(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var p0={[dr]:"SHADOWMAP_TYPE_PCF",[mi]:"SHADOWMAP_TYPE_VSM"};function m0(i){return p0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var g0={[bs]:"ENVMAP_MODE_REFRACTION"};function x0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":g0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var y0={[dl]:"ENVMAP_BLENDING_MULTIPLY",[Wh]:"ENVMAP_BLENDING_MIX",[Xh]:"ENVMAP_BLENDING_ADD"};function v0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":y0[i.combine]||"ENVMAP_BLENDING_NONE"}function M0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=m0(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=x0(t),d=v0(t),u=o0(t),f=l0(r),x=s.createProgram(),M,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(br).join(`
`),M.length>0&&(M+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(br).join(`
`),p.length>0&&(p+=`
`)):(M=[Au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),p=[Au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?ke.tonemapping_pars_fragment:"",t.toneMapping!==Cn?r0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,i0("linearToOutputTexel",t.outputColorSpace),a0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(br).join(`
`)),a=Xl(a),a=_u(a,t),a=Tu(a,t),o=Xl(o),o=_u(o,t),o=Tu(o,t),a=Eu(a),o=Eu(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,p=["#define varying in",t.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=m+M+a,w=m+p+o,_=Mu(s,s.VERTEX_SHADER,b),R=Mu(s,s.FRAGMENT_SHADER,w);s.attachShader(x,_),s.attachShader(x,R),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(P){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(x)||"",U=s.getShaderInfoLog(_)||"",O=s.getShaderInfoLog(R)||"",C=L.trim(),H=U.trim(),V=O.trim(),G=!0,te=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,_,R);else{let X=bu(s,_,"vertex"),J=bu(s,R,"fragment");Ie("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+C+`
`+X+`
`+J)}else C!==""?Te("WebGLProgram: Program Info Log:",C):(H===""||V==="")&&(te=!1);te&&(P.diagnostics={runnable:G,programLog:C,vertexShader:{log:H,prefix:M},fragmentShader:{log:V,prefix:p}})}s.deleteShader(_),s.deleteShader(R),g=new As(s,x),S=c0(s,x)}let g;this.getUniforms=function(){return g===void 0&&E(this),g};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(x,$g)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=e0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=_,this.fragmentShader=R,this}var S0=0,ql=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Yl(e),t.set(e,n)),n}},Yl=class{constructor(e){this.id=S0++,this.code=e,this.usedTimes=0}};function b0(i){return i===gi||i===yr||i===vr}function _0(i,e,t,n,s,r){let a=new Ws,o=new ql,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(g){return l.add(g),g===0?"uv":`uv${g}`}function x(g,S,N,P,L,U){let O=P.fog,C=L.geometry,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,V=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,G=e.get(g.envMap||H,V),te=u[g.type],X=n.precision;g.precision!==null&&(X=n.getMaxPrecision(g.precision),X!==g.precision&&Te("WebGLProgram.getParameters:",g.precision,"not supported, using",X,"instead."));let J=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,ee=J!==void 0?J.length:0,xe=0;C.morphAttributes.position!==void 0&&(xe=1),C.morphAttributes.normal!==void 0&&(xe=2),C.morphAttributes.color!==void 0&&(xe=3);let be,Z,he,fe;if(te){let me=Ln[te];be=me.vertexShader,Z=me.fragmentShader}else{be=g.vertexShader,Z=g.fragmentShader;let me=o.getVertexShaderStage(g),tt=o.getFragmentShaderStage(g);o.update(g,me,tt),he=me.id,fe=tt.id}let Re=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),Le=L.isInstancedMesh===!0,ht=L.isBatchedMesh===!0,Ce=!!g.map,Xe=!!g.matcap,$e=!!G,He=$e&&G.isPMREMTexture===!0,gt=!!g.aoMap,ut=!!g.lightMap,yt=!!g.bumpMap&&g.wireframe===!1,rt=!!g.normalMap,tn=!!g.displacementMap,dt=!!g.emissiveMap,kt=!!g.metalnessMap,Ht=!!g.roughnessMap,Gt=g.anisotropy>0,A=g.clearcoat>0,lt=g.diffuseRoughness>0,Ze=g.dispersion>0,je=g.retroreflectivity>0,q=g.iridescence>0,Ke=g.sheen>0,Pe=g.transmission>0,Ne=Gt&&!!g.anisotropyMap,T=A&&!!g.clearcoatMap,y=A&&!!g.clearcoatNormalMap,z=A&&!!g.clearcoatRoughnessMap,ne=lt&&!!g.diffuseRoughnessMap,$=q&&!!g.iridescenceMap,re=q&&!!g.iridescenceThicknessMap,ue=Ke&&!!g.sheenColorMap,K=Ke&&!!g.sheenRoughnessMap,j=!!g.specularMap,oe=!!g.specularColorMap,I=!!g.specularIntensityMap,Q=Pe&&!!g.transmissionMap,Y=Pe&&!!g.thicknessMap,le=!!g.gradientMap,se=!!g.alphaMap,ae=g.alphaTest>0,Ee=!!g.alphaHash,ze=!!g.extensions,ie=Cn;g.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(ie=i.toneMapping);let Ae=He?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Oe={shaderID:te,shaderType:g.type,shaderName:g.name,vertexShader:be,fragmentShader:Z,defines:g.defines,customVertexShaderID:he,customFragmentShaderID:fe,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:X,batching:ht,batchingColor:ht&&L._colorsTexture!==null,instancing:Le,instancingColor:Le&&L.instanceColor!==null,instancingMorph:Le&&L.morphTexture!==null,outputColorSpace:Re===null?i.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Ge.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ce,matcap:Xe,envMap:$e,envMapMode:$e&&G.mapping,envMapPMREM:He,envMapMaxLod:He?Ae.length-1:null,envMapSize:He?Ae[0].width:null,aoMap:gt,lightMap:ut,bumpMap:yt,normalMap:rt,displacementMap:tn,emissiveMap:dt,normalMapObjectSpace:rt&&g.normalMapType===Kh,normalMapTangentSpace:rt&&g.normalMapType===ho,packedNormalMap:rt&&g.normalMapType===ho&&b0(g.normalMap.format),metalnessMap:kt,roughnessMap:Ht,anisotropy:Gt,anisotropyMap:Ne,clearcoat:A,clearcoatMap:T,clearcoatNormalMap:y,clearcoatRoughnessMap:z,diffuseRoughness:lt,diffuseRoughnessMap:ne,dispersion:Ze,retroreflection:je,iridescence:q,iridescenceMap:$,iridescenceThicknessMap:re,sheen:Ke,sheenColorMap:ue,sheenRoughnessMap:K,specularMap:j,specularColorMap:oe,specularIntensityMap:I,transmission:Pe,transmissionMap:Q,thicknessMap:Y,gradientMap:le,opaque:g.transparent===!1&&g.blending===Ss&&g.alphaToCoverage===!1,alphaMap:se,alphaTest:ae,alphaHash:Ee,combine:g.combine,mapUv:Ce&&f(g.map.channel),aoMapUv:gt&&f(g.aoMap.channel),lightMapUv:ut&&f(g.lightMap.channel),bumpMapUv:yt&&f(g.bumpMap.channel),normalMapUv:rt&&f(g.normalMap.channel),displacementMapUv:tn&&f(g.displacementMap.channel),emissiveMapUv:dt&&f(g.emissiveMap.channel),metalnessMapUv:kt&&f(g.metalnessMap.channel),roughnessMapUv:Ht&&f(g.roughnessMap.channel),anisotropyMapUv:Ne&&f(g.anisotropyMap.channel),clearcoatMapUv:T&&f(g.clearcoatMap.channel),clearcoatNormalMapUv:y&&f(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&f(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ne&&f(g.diffuseRoughnessMap.channel),iridescenceMapUv:$&&f(g.iridescenceMap.channel),iridescenceThicknessMapUv:re&&f(g.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&f(g.sheenColorMap.channel),sheenRoughnessMapUv:K&&f(g.sheenRoughnessMap.channel),specularMapUv:j&&f(g.specularMap.channel),specularColorMapUv:oe&&f(g.specularColorMap.channel),specularIntensityMapUv:I&&f(g.specularIntensityMap.channel),transmissionMapUv:Q&&f(g.transmissionMap.channel),thicknessMapUv:Y&&f(g.thicknessMap.channel),alphaMapUv:se&&f(g.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(rt||Gt),vertexNormals:!!C.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!C.attributes.uv&&(Ce||se),fog:!!O,useFog:g.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||C.attributes.normal===void 0&&rt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pe,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:xe,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:U.filter(me=>me.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,decodeVideoTexture:Ce&&g.map.isVideoTexture===!0&&Ge.getTransfer(g.map.colorSpace)===et,decodeVideoTextureEmissive:dt&&g.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(g.emissiveMap.colorSpace)===et,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===un,flipSided:g.side===Yt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ze&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&g.extensions.multiDraw===!0||ht)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Oe.vertexUv1s=l.has(1),Oe.vertexUv2s=l.has(2),Oe.vertexUv3s=l.has(3),l.clear(),Oe}function M(g){let S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(let N in g.defines)S.push(N),S.push(g.defines[N]);return g.isRawShaderMaterial===!1&&(p(S,g),m(S,g),S.push(i.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function p(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapPMREM),g.push(S.envMapMaxLod),g.push(S.envMapSize),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.diffuseRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.numSunLights),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numSunLightShadows),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.numLightProbeGrids),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function m(g,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function b(g){let S=u[g.type],N;if(S){let P=Ln[S];N=ou.clone(P.uniforms)}else N=g.uniforms;return N}function w(g,S){let N=h.get(S);return N!==void 0?++N.usedTimes:(N=new M0(i,S,g,s),c.push(N),h.set(S,N)),N}function _(g){if(--g.usedTimes===0){let S=c.indexOf(g);c[S]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function R(g){o.remove(g)}function E(){o.dispose()}return{getParameters:x,getProgramCacheKey:M,getUniforms:b,acquireProgram:w,releaseProgram:_,releaseShaderCache:R,programs:c,dispose:E}}function T0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function E0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function wu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ru(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,x,M,p,m){let b=i[e];return b===void 0?(b={id:u.id,object:u,geometry:f,material:x,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:p,group:m},i[e]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=x,b.materialVariant=a(u),b.groupOrder=M,b.renderOrder=u.renderOrder,b.z=p,b.group=m),e++,b}function l(u,f,x,M,p,m,b){b.reversedDepth===!0&&(p=-p);let w=o(u,f,x,M,p,m);x.transmission>0?n.push(w):x.transparent===!0?s.push(w):t.push(w)}function c(u,f,x,M,p,m){let b=o(u,f,x,M,p,m);x.transmission>0?n.unshift(b):x.transparent===!0?s.unshift(b):t.unshift(b)}function h(u,f){t.length>1&&t.sort(u||E0),n.length>1&&n.sort(f||wu),s.length>1&&s.sort(f||wu)}function d(){for(let u=e,f=i.length;u<f;u++){let x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function A0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Ru,i.set(n,[a])):s>=r.length?(a=new Ru,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function w0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new we};break;case"SpotLight":t={position:new F,direction:new F,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function R0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var C0=0;function P0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function I0(i){let e=new w0,t=R0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new Fe,a=new Fe;function o(c){let h=0,d=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,x=0,M=0,p=0,m=0,b=0,w=0,_=0,R=0,E=0,g=0,S=0,N=0,P=0;c.sort(P0);for(let U=0,O=c.length;U<O;U++){let C=c[U],H=C.color,V=C.intensity,G=C.distance,te=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===gi?te=C.shadow.map.texture:te=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=H.r*V,d+=H.g*V,u+=H.b*V;else if(C.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(C.sh.coefficients[X],V);P++}else if(C.isSunLight){let X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let J=C.shadow,ee=t.get(C);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[x]=ee,n.sunShadowMap[x]=te;let xe=J.getViewportCount();for(let be=0;be<xe;be++)n.sunShadowMatrix[M+be]=J.getMatrix(be),n.sunShadowCascade[M+be]=J._cascadeData[be];M+=xe,x++}n.sun[f]=X,f++}else if(C.isDirectionalLight){let X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let J=C.shadow,ee=t.get(C);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,n.directionalShadow[p]=ee,n.directionalShadowMap[p]=te,n.directionalShadowMatrix[p]=C.shadow.matrix,R++}n.directional[p]=X,p++}else if(C.isSpotLight){let X=e.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(H).multiplyScalar(V),X.distance=G,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,n.spot[b]=X;let J=C.shadow;if(C.map&&(n.spotLightMap[S]=C.map,S++,J.updateMatrices(C),C.castShadow&&N++),n.spotLightMatrix[b]=J.matrix,C.castShadow){let ee=t.get(C);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,n.spotShadow[b]=ee,n.spotShadowMap[b]=te,g++}b++}else if(C.isRectAreaLight){let X=e.get(C);X.color.copy(H).multiplyScalar(V),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),n.rectArea[w]=X,w++}else if(C.isPointLight){let X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){let J=C.shadow,ee=t.get(C);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,ee.shadowCameraNear=J.camera.near,ee.shadowCameraFar=J.camera.far,n.pointShadow[m]=ee,n.pointShadowMap[m]=te,n.pointShadowMatrix[m]=C.shadow.matrix,E++}n.point[m]=X,m++}else if(C.isHemisphereLight){let X=e.get(C);X.skyColor.copy(C.color).multiplyScalar(V),X.groundColor.copy(C.groundColor).multiplyScalar(V),n.hemi[_]=X,_++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let L=n.hash;(L.sunLength!==f||L.directionalLength!==p||L.pointLength!==m||L.spotLength!==b||L.rectAreaLength!==w||L.hemiLength!==_||L.numSunShadows!==x||L.numDirectionalShadows!==R||L.numPointShadows!==E||L.numSpotShadows!==g||L.numSpotMaps!==S||L.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=p,n.spot.length=b,n.rectArea.length=w,n.point.length=m,n.hemi.length=_,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+S-N,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=P,L.sunLength=f,L.directionalLength=p,L.pointLength=m,L.spotLength=b,L.rectAreaLength=w,L.hemiLength=_,L.numSunShadows=x,L.numDirectionalShadows=R,L.numPointShadows=E,L.numSpotShadows=g,L.numSpotMaps=S,L.numLightProbes=P,n.version=C0++)}function l(c,h){let d=0,u=0,f=0,x=0,M=0,p=0,m=h.matrixWorldInverse;for(let b=0,w=c.length;b<w;b++){let _=c[b];if(_.isSunLight){let R=n.sun[d];R.direction.setFromMatrixPosition(_.matrixWorld),R.direction.transformDirection(m),d++}else if(_.isDirectionalLight){let R=n.directional[u];R.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),u++}else if(_.isSpotLight){let R=n.spot[x];R.position.setFromMatrixPosition(_.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),x++}else if(_.isRectAreaLight){let R=n.rectArea[M];R.position.setFromMatrixPosition(_.matrixWorld),R.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),R.halfWidth.set(_.width*.5,0,0),R.halfHeight.set(0,_.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),M++}else if(_.isPointLight){let R=n.point[f];R.position.setFromMatrixPosition(_.matrixWorld),R.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){let R=n.hemi[p];R.direction.setFromMatrixPosition(_.matrixWorld),R.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function Cu(i){let e=new I0(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function o(d){n.push(d)}function l(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function L0(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Cu(i),e.set(s,[o])):r>=a.length?(o=new Cu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var D0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,U0=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],F0=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Pu=new Fe,Sr=new F,Hl=new F;function O0(i,e,t){let n=new ui,s=new Be,r=new Be,a=new nt,o=new ma,l=new ga,c={},h=t.maxTextureSize,d={[Rn]:Yt,[Yt]:Rn,[un]:un},u=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:D0,fragmentShader:N0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let x=new jt;x.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Ct(x,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dr;let m=this.type;this.render=function(E,g,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Eh&&(Te("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=dr);let N=i.getRenderTarget(),P=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Ui),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let O=m!==this.type;O&&g.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(H=>H.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,H=E.length;C<H;C++){let V=E[C],G=V.shadow;if(G===void 0){Te("WebGLShadowMap:",V,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let te=G.getFrameExtents();s.multiply(te),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,G.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=X,G.map===null||O===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===mi){if(V.isPointLight){Te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new on(s.x,s.y,{format:gi,type:Zt,minFilter:ot,magFilter:ot,generateMipmaps:!1}),G.map.texture.name=V.name+".shadowMap",G.map.depthTexture=new qn(s.x,s.y,It),G.map.depthTexture.name=V.name+".shadowMapDepth",G.map.depthTexture.format=Vn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=xt,G.map.depthTexture.magFilter=xt}else V.isPointLight?(G.map=new _r(s.x),G.map.depthTexture=new tr(s.x,vn)):(G.map=new on(s.x,s.y),G.map.depthTexture=new qn(s.x,s.y,vn)),G.map.depthTexture.name=V.name+".shadowMap",G.map.depthTexture.format=Vn,this.type===dr?(G.map.depthTexture.compareFunction=X?Rl:wl,G.map.depthTexture.minFilter=ot,G.map.depthTexture.magFilter=ot):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=xt,G.map.depthTexture.magFilter=xt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let J=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();V.isPointLight!==!0&&G.updateMatrices(V,S);let ee=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:S.layers;for(let xe=0;xe<J;xe++){let be=G.getCamera(xe);if(V.isPointLight){let Z=G.camera,he=G.matrix,fe=V.distance||Z.far;fe!==Z.far&&(Z.far=fe,Z.updateProjectionMatrix()),Sr.setFromMatrixPosition(V.matrixWorld),Z.position.copy(Sr),Hl.copy(Z.position),Hl.add(U0[xe]),Z.up.copy(F0[xe]),Z.lookAt(Hl),Z.updateMatrixWorld(),he.makeTranslation(-Sr.x,-Sr.y,-Sr.z),Pu.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Pu,Z.coordinateSystem,Z.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,xe),i.clear();else{xe===0&&(i.setRenderTarget(G.map),i.clear());let Z=G.getViewport(xe);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),U.viewport(a)}n=G.getFrustum(xe),_(g,S,be,V,ee,this.type)}G.isPointLightShadow!==!0&&this.type===mi&&b(G,S),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(N,P,L)};function b(E,g){let S=e.update(M);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new on(s.x,s.y,{format:gi,type:Zt}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(g,null,S,u,M,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(g,null,S,f,M,null)}function w(E,g,S,N){let P=null,L=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)P=L;else if(P=S.isPointLight===!0?l:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let U=P.uuid,O=g.uuid,C=c[U];C===void 0&&(C={},c[U]=C);let H=C[O];H===void 0&&(H=P.clone(),C[O]=H,g.addEventListener("dispose",R)),P=H}if(P.visible=g.visible,P.wireframe=g.wireframe,N===mi?P.side=g.shadowSide!==null?g.shadowSide:g.side:P.side=g.shadowSide!==null?g.shadowSide:d[g.side],P.alphaMap=g.alphaMap,P.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,P.map=g.map,P.clipShadows=g.clipShadows,P.clippingPlanes=g.clippingPlanes,P.clipIntersection=g.clipIntersection,P.displacementMap=g.displacementMap,P.displacementScale=g.displacementScale,P.displacementBias=g.displacementBias,P.wireframeLinewidth=g.wireframeLinewidth,P.linewidth=g.linewidth,S.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let U=i.properties.get(P);U.light=S}return P}function _(E,g,S,N,P,L){if(E.visible===!1)return;if(E.layers.test(P)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===mi)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let C=e.update(E),H=E.material;if(Array.isArray(H)){let V=C.groups;for(let G=0,te=V.length;G<te;G++){let X=V[G],J=H[X.materialIndex];if(J&&J.visible){let ee=w(E,J,N,L);E.onBeforeShadow(i,E,g,S,C,ee,X),i.renderBufferDirect(S,null,C,ee,E,X),E.onAfterShadow(i,E,g,S,C,ee,X)}}}else if(H.visible){let V=w(E,H,N,L);E.onBeforeShadow(i,E,g,S,C,V,null),i.renderBufferDirect(S,null,C,V,E,null),E.onAfterShadow(i,E,g,S,C,V,null)}}let O=E.children;for(let C=0,H=O.length;C<H;C++)_(O[C],g,S,N,P,L)}function R(E){E.target.removeEventListener("dispose",R);for(let S in c){let N=c[S],P=E.target.uuid;P in N&&(N[P].dispose(),delete N[P])}}}function B0(i,e){function t(){let I=!1,Q=new nt,Y=null,le=new nt(0,0,0,0);return{setMask:function(se){Y!==se&&!I&&(i.colorMask(se,se,se,se),Y=se)},setLocked:function(se){I=se},setClear:function(se,ae,Ee,ze,ie){ie===!0&&(se*=ze,ae*=ze,Ee*=ze),Q.set(se,ae,Ee,ze),le.equals(Q)===!1&&(i.clearColor(se,ae,Ee,ze),le.copy(Q))},reset:function(){I=!1,Y=null,le.set(-1,0,0,0)}}}function n(){let I=!1,Q=!1,Y=null,le=null,se=null;return{setReversed:function(ae){if(Q!==ae){let Ee=e.get("EXT_clip_control");ae?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),Q=ae;let ze=se;se=null,this.setClear(ze)}},getReversed:function(){return Q},setTest:function(ae){ae?pe(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(ae){Y!==ae&&!I&&(i.depthMask(ae),Y=ae)},setFunc:function(ae){if(Q&&(ae=ru[ae]),le!==ae){switch(ae){case ta:i.depthFunc(i.NEVER);break;case na:i.depthFunc(i.ALWAYS);break;case ia:i.depthFunc(i.LESS);break;case as:i.depthFunc(i.LEQUAL);break;case sa:i.depthFunc(i.EQUAL);break;case ra:i.depthFunc(i.GEQUAL);break;case aa:i.depthFunc(i.GREATER);break;case oa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=ae}},setLocked:function(ae){I=ae},setClear:function(ae){se!==ae&&(se=ae,Q&&(ae=1-ae),i.clearDepth(ae))},reset:function(){I=!1,Y=null,le=null,se=null,Q=!1}}}function s(){let I=!1,Q=null,Y=null,le=null,se=null,ae=null,Ee=null,ze=null,ie=null;return{setTest:function(Ae){I||(Ae?pe(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(Ae){Q!==Ae&&!I&&(i.stencilMask(Ae),Q=Ae)},setFunc:function(Ae,Oe,me){(Y!==Ae||le!==Oe||se!==me)&&(i.stencilFunc(Ae,Oe,me),Y=Ae,le=Oe,se=me)},setOp:function(Ae,Oe,me){(ae!==Ae||Ee!==Oe||ze!==me)&&(i.stencilOp(Ae,Oe,me),ae=Ae,Ee=Oe,ze=me)},setLocked:function(Ae){I=Ae},setClear:function(Ae){ie!==Ae&&(i.clearStencil(Ae),ie=Ae)},reset:function(){I=!1,Q=null,Y=null,le=null,se=null,ae=null,Ee=null,ze=null,ie=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,x=[],M=null,p=!1,m=null,b=null,w=null,_=null,R=null,E=null,g=null,S=new we(0,0,0),N=0,P=!1,L=null,U=null,O=null,C=null,H=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,te=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=te>=1):X.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=te>=2);let J=null,ee={},xe=i.getParameter(i.SCISSOR_BOX),be=i.getParameter(i.VIEWPORT),Z=new nt().fromArray(xe),he=new nt().fromArray(be);function fe(I,Q,Y,le){let se=new Uint8Array(4),ae=i.createTexture();i.bindTexture(I,ae),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ee=0;Ee<Y;Ee++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D(Q+Ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return ae}let Re={};Re[i.TEXTURE_2D]=fe(i.TEXTURE_2D,i.TEXTURE_2D,1),Re[i.TEXTURE_CUBE_MAP]=fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[i.TEXTURE_2D_ARRAY]=fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Re[i.TEXTURE_3D]=fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pe(i.DEPTH_TEST),a.setFunc(as),yt(!1),rt(al),pe(i.CULL_FACE),gt(Ui);function pe(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Le(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function ht(I,Q){return u[I]!==Q?(i.bindFramebuffer(I,Q),u[I]=Q,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Q),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function Ce(I,Q){let Y=x,le=!1;if(I){Y=f.get(Q),Y===void 0&&(Y=[],f.set(Q,Y));let se=I.textures;if(Y.length!==se.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,Ee=se.length;ae<Ee;ae++)Y[ae]=i.COLOR_ATTACHMENT0+ae;Y.length=se.length,le=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,le=!0);le&&i.drawBuffers(Y)}function Xe(I){return M!==I?(i.useProgram(I),M=I,!0):!1}let $e={[Fi]:i.FUNC_ADD,[wh]:i.FUNC_SUBTRACT,[Rh]:i.FUNC_REVERSE_SUBTRACT};$e[Ch]=i.MIN,$e[Ph]=i.MAX;let He={[Ih]:i.ZERO,[Lh]:i.ONE,[Dh]:i.SRC_COLOR,[hl]:i.SRC_ALPHA,[zh]:i.SRC_ALPHA_SATURATE,[Oh]:i.DST_COLOR,[Uh]:i.DST_ALPHA,[Nh]:i.ONE_MINUS_SRC_COLOR,[ul]:i.ONE_MINUS_SRC_ALPHA,[Bh]:i.ONE_MINUS_DST_COLOR,[Fh]:i.ONE_MINUS_DST_ALPHA,[kh]:i.CONSTANT_COLOR,[Hh]:i.ONE_MINUS_CONSTANT_COLOR,[Gh]:i.CONSTANT_ALPHA,[Vh]:i.ONE_MINUS_CONSTANT_ALPHA};function gt(I,Q,Y,le,se,ae,Ee,ze,ie,Ae){if(I===Ui){p===!0&&(Le(i.BLEND),p=!1);return}if(p===!1&&(pe(i.BLEND),p=!0),I!==Ah){if(I!==m||Ae!==P){if((b!==Fi||R!==Fi)&&(i.blendEquation(i.FUNC_ADD),b=Fi,R=Fi),Ae)switch(I){case Ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ol:i.blendFunc(i.ONE,i.ONE);break;case ll:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ie("WebGLState: Invalid blending: ",I);break}else switch(I){case Ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ol:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ll:Ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cl:Ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ie("WebGLState: Invalid blending: ",I);break}w=null,_=null,E=null,g=null,S.set(0,0,0),N=0,m=I,P=Ae}return}se=se||Q,ae=ae||Y,Ee=Ee||le,(Q!==b||se!==R)&&(i.blendEquationSeparate($e[Q],$e[se]),b=Q,R=se),(Y!==w||le!==_||ae!==E||Ee!==g)&&(i.blendFuncSeparate(He[Y],He[le],He[ae],He[Ee]),w=Y,_=le,E=ae,g=Ee),(ze.equals(S)===!1||ie!==N)&&(i.blendColor(ze.r,ze.g,ze.b,ie),S.copy(ze),N=ie),m=I,P=!1}function ut(I,Q){I.side===un?Le(i.CULL_FACE):pe(i.CULL_FACE);let Y=I.side===Yt;Q&&(Y=!Y),yt(Y),I.blending===Ss&&I.transparent===!1?gt(Ui):gt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let le=I.stencilWrite;o.setTest(le),le&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),dt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function yt(I){L!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),L=I)}function rt(I){I!==_h?(pe(i.CULL_FACE),I!==U&&(I===al?i.cullFace(i.BACK):I===Th?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),U=I}function tn(I){I!==O&&(G&&i.lineWidth(I),O=I)}function dt(I,Q,Y){I?(pe(i.POLYGON_OFFSET_FILL),(C!==Q||H!==Y)&&(C=Q,H=Y,a.getReversed()&&(Q=-Q,Y=-Y),i.polygonOffset(Q,Y))):Le(i.POLYGON_OFFSET_FILL)}function kt(I){I?pe(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function Ht(I){I===void 0&&(I=i.TEXTURE0+V-1),J!==I&&(i.activeTexture(I),J=I)}function Gt(I,Q,Y){Y===void 0&&(J===null?Y=i.TEXTURE0+V-1:Y=J);let le=ee[Y];le===void 0&&(le={type:void 0,texture:void 0},ee[Y]=le),(le.type!==I||le.texture!==Q)&&(J!==Y&&(i.activeTexture(Y),J=Y),i.bindTexture(I,Q||Re[I]),le.type=I,le.texture=Q)}function A(){let I=ee[J];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function lt(){try{i.compressedTexImage2D(...arguments)}catch(I){Ie("WebGLState:",I)}}function Ze(){try{i.compressedTexImage3D(...arguments)}catch(I){Ie("WebGLState:",I)}}function je(){try{i.texSubImage2D(...arguments)}catch(I){Ie("WebGLState:",I)}}function q(){try{i.texSubImage3D(...arguments)}catch(I){Ie("WebGLState:",I)}}function Ke(){try{i.compressedTexSubImage2D(...arguments)}catch(I){Ie("WebGLState:",I)}}function Pe(){try{i.compressedTexSubImage3D(...arguments)}catch(I){Ie("WebGLState:",I)}}function Ne(){try{i.texStorage2D(...arguments)}catch(I){Ie("WebGLState:",I)}}function T(){try{i.texStorage3D(...arguments)}catch(I){Ie("WebGLState:",I)}}function y(){try{i.texImage2D(...arguments)}catch(I){Ie("WebGLState:",I)}}function z(){try{i.texImage3D(...arguments)}catch(I){Ie("WebGLState:",I)}}function ne(I){return d[I]!==void 0?d[I]:i.getParameter(I)}function $(I,Q){d[I]!==Q&&(i.pixelStorei(I,Q),d[I]=Q)}function re(I){Z.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Z.copy(I))}function ue(I){he.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),he.copy(I))}function K(I,Q){let Y=c.get(Q);Y===void 0&&(Y=new WeakMap,c.set(Q,Y));let le=Y.get(I);le===void 0&&(le=i.getUniformBlockIndex(Q,I.name),i.uniformBlockBinding(Q,le,le),Y.set(I,le))}function j(I,Q,Y){let se=c.get(Q).get(I);l[se]!==Y&&(i.bindBufferBase(i.UNIFORM_BUFFER,se,Y),l[se]=Y)}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},J=null,ee={},u={},l={},f=new WeakMap,x=[],M=null,p=!1,m=null,b=null,w=null,_=null,R=null,E=null,g=null,S=new we(0,0,0),N=0,P=!1,L=null,U=null,O=null,C=null,H=null,Z.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:pe,disable:Le,bindFramebuffer:ht,drawBuffers:Ce,useProgram:Xe,setBlending:gt,setMaterial:ut,setFlipSided:yt,setCullFace:rt,setLineWidth:tn,setPolygonOffset:dt,setScissorTest:kt,activeTexture:Ht,bindTexture:Gt,unbindTexture:A,compressedTexImage2D:lt,compressedTexImage3D:Ze,texImage2D:y,texImage3D:z,pixelStorei:$,getParameter:ne,updateUBOMapping:K,uniformBlockBinding:j,texStorage2D:Ne,texStorage3D:T,texSubImage2D:je,texSubImage3D:q,compressedTexSubImage2D:Ke,compressedTexSubImage3D:Pe,scissor:re,viewport:ue,reset:oe}}function z0(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,h=new WeakMap,d=new Set,u,f=new WeakMap,x=new Set,M=new FinalizationRegistry(T=>x.delete(T)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,y){return p?new OffscreenCanvas(T,y):cs("canvas")}function b(T,y,z){let ne=1,$=Ne(T);if(($.width>z||$.height>z)&&(ne=z/Math.max($.width,$.height)),ne<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let re=Math.floor(ne*$.width),ue=Math.floor(ne*$.height);u===void 0&&(u=m(re,ue));let K=y?m(re,ue):u;return K.width=re,K.height=ue,K.getContext("2d").drawImage(T,0,0,re,ue),Te("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+re+"x"+ue+")."),K}else return"data"in T&&Te("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function w(T){return T.generateMipmaps}function _(T){i.generateMipmap(T)}function R(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(T,y,z,ne,$,re=!1){if(T!==null){if(i[T]!==void 0)return i[T];Te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ue;ne&&(ue=e.get("EXT_texture_norm16"),ue||Te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=y;if(y===i.RED&&(z===i.FLOAT&&(K=i.R32F),z===i.HALF_FLOAT&&(K=i.R16F),z===i.UNSIGNED_BYTE&&(K=i.R8),z===i.UNSIGNED_SHORT&&ue&&(K=ue.R16_EXT),z===i.SHORT&&ue&&(K=ue.R16_SNORM_EXT)),y===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.R8UI),z===i.UNSIGNED_SHORT&&(K=i.R16UI),z===i.UNSIGNED_INT&&(K=i.R32UI),z===i.BYTE&&(K=i.R8I),z===i.SHORT&&(K=i.R16I),z===i.INT&&(K=i.R32I)),y===i.RG&&(z===i.FLOAT&&(K=i.RG32F),z===i.HALF_FLOAT&&(K=i.RG16F),z===i.UNSIGNED_BYTE&&(K=i.RG8),z===i.UNSIGNED_SHORT&&ue&&(K=ue.RG16_EXT),z===i.SHORT&&ue&&(K=ue.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RG8UI),z===i.UNSIGNED_SHORT&&(K=i.RG16UI),z===i.UNSIGNED_INT&&(K=i.RG32UI),z===i.BYTE&&(K=i.RG8I),z===i.SHORT&&(K=i.RG16I),z===i.INT&&(K=i.RG32I)),y===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGB8UI),z===i.UNSIGNED_SHORT&&(K=i.RGB16UI),z===i.UNSIGNED_INT&&(K=i.RGB32UI),z===i.BYTE&&(K=i.RGB8I),z===i.SHORT&&(K=i.RGB16I),z===i.INT&&(K=i.RGB32I)),y===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),z===i.UNSIGNED_INT&&(K=i.RGBA32UI),z===i.BYTE&&(K=i.RGBA8I),z===i.SHORT&&(K=i.RGBA16I),z===i.INT&&(K=i.RGBA32I)),y===i.RGB&&(z===i.UNSIGNED_SHORT&&ue&&(K=ue.RGB16_EXT),z===i.SHORT&&ue&&(K=ue.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),y===i.RGBA){let j=re?Hs:Ge.getTransfer($);z===i.FLOAT&&(K=i.RGBA32F),z===i.HALF_FLOAT&&(K=i.RGBA16F),z===i.UNSIGNED_BYTE&&(K=j===et?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&ue&&(K=ue.RGBA16_EXT),z===i.SHORT&&ue&&(K=ue.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function g(T,y){let z;return T?y===null||y===vn||y===ki?z=i.DEPTH24_STENCIL8:y===It?z=i.DEPTH32F_STENCIL8:y===Ts&&(z=i.DEPTH24_STENCIL8,Te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===vn||y===ki?z=i.DEPTH_COMPONENT24:y===It?z=i.DEPTH_COMPONENT32F:y===Ts&&(z=i.DEPTH_COMPONENT16),z}function S(T,y){return w(T)===!0||T.isFramebufferTexture&&T.minFilter!==xt&&T.minFilter!==ot?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function N(T){let y=new WeakRef(T);n.get(T).__ref=y,x.add(y),M.register(T,y,y)}function P(T){let y=n.get(T).__ref;y!==void 0&&(x.delete(y),M.unregister(y))}function L(T){O(T.target)}function U(T){C(T.target)}function O(T){T.removeEventListener("dispose",L),P(T),V(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&d.delete(T)}function C(T){T.removeEventListener("dispose",U),P(T),te(T)}function H(){for(let T of x){let y=T.deref();y!==void 0&&(y.isRenderTarget===!0?C(y):O(y))}x.clear(),d.clear()}function V(T){let y=n.get(T);if(y.__webglInit===void 0)return;let z=T.source,ne=f.get(z);if(ne){let $=ne[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&G(T),Object.keys(ne).length===0&&f.delete(z)}n.remove(T)}function G(T){let y=n.get(T);i.deleteTexture(y.__webglTexture);let z=T.source,ne=f.get(z);delete ne[y.__cacheKey],a.memory.textures--}function te(T){let y=n.get(T);y.__depthDisposeCallback&&y.__depthDisposeCallback();let z=T.depthTexture;if(z&&z.renderTarget===T&&O(z),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let re=0;re<y.__webglFramebuffer[$].length;re++)i.deleteFramebuffer(y.__webglFramebuffer[$][re]);else i.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)i.deleteFramebuffer(y.__webglFramebuffer[$]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let ne=T.textures;for(let $=0,re=ne.length;$<re;$++){let ue=n.get(ne[$]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),a.memory.textures--),n.remove(ne[$])}n.remove(T)}let X=0;function J(){X=0}function ee(){return X}function xe(T){X=T}function be(){let T=X;return T>=s.maxTextures&&Te("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,T}function Z(T){let y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.mipmapsAutoUpdate),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function he(T,y){let z=n.get(T);if(T.isVideoTexture&&Ke(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&z.__version!==T.version){let ne=T.image;if(ne===null)Te("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Te("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(z,T,y);return}}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+y)}function fe(T,y){let z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){ut(z,T,y);return}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+y)}function Re(T,y){let z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){ut(z,T,y);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+y)}function pe(T,y){let z=n.get(T);if(T.version>0&&z.__version!==T.version){yt(z,T,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+y)}let Le={[bn]:i.REPEAT,[Kt]:i.CLAMP_TO_EDGE,[os]:i.MIRRORED_REPEAT},ht={[xt]:i.NEAREST,[Aa]:i.NEAREST_MIPMAP_NEAREST,[zi]:i.NEAREST_MIPMAP_LINEAR,[ot]:i.LINEAR,[_s]:i.LINEAR_MIPMAP_NEAREST,[ln]:i.LINEAR_MIPMAP_LINEAR},Ce={[jh]:i.NEVER,[Cl]:i.ALWAYS,[Qh]:i.LESS,[wl]:i.LEQUAL,[$h]:i.EQUAL,[Rl]:i.GEQUAL,[eu]:i.GREATER,[tu]:i.NOTEQUAL};function Xe(T,y){if(y.type===It&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===ot||y.magFilter===_s||y.magFilter===zi||y.magFilter===ln||y.minFilter===ot||y.minFilter===_s||y.minFilter===zi||y.minFilter===ln)&&Te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Le[y.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Le[y.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Le[y.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ht[y.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ht[y.minFilter]),y.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ce[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===xt||y.minFilter!==zi&&y.minFilter!==ln||y.type===It&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function $e(T,y){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",L),N(y));let ne=y.source,$=f.get(ne);$===void 0&&($={},f.set(ne,$));let re=Z(y);if(re!==T.__cacheKey){$[re]===void 0&&($[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),$[re].usedTimes++;let ue=$[T.__cacheKey];ue!==void 0&&($[T.__cacheKey].usedTimes--,ue.usedTimes===0&&G(y)),T.__cacheKey=re,T.__webglTexture=$[re].texture}return z}function He(T,y,z){return Math.floor(Math.floor(T/z)/y)}function gt(T,y,z,ne){let re=T.updateRanges;if(re.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,z,ne,y.data);else{re.sort((I,Q)=>I.start-Q.start);let ue=0;for(let I=1;I<re.length;I++){let Q=re[ue],Y=re[I],le=Q.start+Q.count,se=He(Y.start,y.width,4),ae=He(Q.start,y.width,4);Y.start<=le+1&&se===ae&&He(Y.start+Y.count-1,y.width,4)===se?Q.count=Math.max(Q.count,Y.start+Y.count-Q.start):(++ue,re[ue]=Y)}re.length=ue+1;let K=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),oe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let I=0,Q=re.length;I<Q;I++){let Y=re[I],le=Math.floor(Y.start/4),se=Math.ceil(Y.count/4),ae=le%y.width,Ee=Math.floor(le/y.width),ze=se,ie=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ee),t.texSubImage2D(i.TEXTURE_2D,0,ae,Ee,ze,ie,z,ne,y.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,oe)}}function ut(T,y,z){let ne=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ne=i.TEXTURE_3D);let $=$e(T,y),re=y.source;t.bindTexture(ne,T.__webglTexture,i.TEXTURE0+z);let ue=n.get(re);if(re.version!==ue.__version||$===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let ie=Ge.getPrimaries(Ge.workingColorSpace),Ae=y.colorSpace===ei?null:Ge.getPrimaries(y.colorSpace),Oe=y.colorSpace===ei||ie===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let j=b(y.image,!1,s.maxTextureSize);j=Pe(y,j);let oe=r.convert(y.format,y.colorSpace),I=r.convert(y.type),Q=E(y.internalFormat,oe,I,y.normalized,y.colorSpace,y.isVideoTexture);Xe(ne,y);let Y,le=y.mipmaps,se=y.isVideoTexture!==!0,ae=ue.__version===void 0||$===!0,Ee=re.dataReady,ze=S(y,j);if(y.isDepthTexture)Q=g(y.format===$n,y.type),ae&&(se?t.texStorage2D(i.TEXTURE_2D,1,Q,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,Q,j.width,j.height,0,oe,I,null));else if(y.isDataTexture)if(le.length>0){se&&ae&&t.texStorage2D(i.TEXTURE_2D,ze,Q,le[0].width,le[0].height);for(let ie=0,Ae=le.length;ie<Ae;ie++)Y=le[ie],se?Ee&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Y.width,Y.height,oe,I,Y.data):t.texImage2D(i.TEXTURE_2D,ie,Q,Y.width,Y.height,0,oe,I,Y.data);y.generateMipmaps=!1}else se?(ae&&t.texStorage2D(i.TEXTURE_2D,ze,Q,j.width,j.height),Ee&&gt(y,j,oe,I)):t.texImage2D(i.TEXTURE_2D,0,Q,j.width,j.height,0,oe,I,j.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){se&&ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ze,Q,le[0].width,le[0].height,j.depth);for(let ie=0,Ae=le.length;ie<Ae;ie++)if(Y=le[ie],y.format!==en)if(oe!==null)if(se){if(Ee)if(y.layerUpdates.size>0){let Oe=zl(Y.width,Y.height,y.format,y.type);for(let me of y.layerUpdates){let tt=Y.data.subarray(me*Oe/Y.data.BYTES_PER_ELEMENT,(me+1)*Oe/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,me,Y.width,Y.height,1,oe,tt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Y.width,Y.height,j.depth,oe,Y.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,Q,Y.width,Y.height,j.depth,0,Y.data,0,0);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?Ee&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Y.width,Y.height,j.depth,oe,I,Y.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,Q,Y.width,Y.height,j.depth,0,oe,I,Y.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{se&&ae&&t.texStorage2D(i.TEXTURE_2D,ze,Q,le[0].width,le[0].height);for(let ie=0,Ae=le.length;ie<Ae;ie++)Y=le[ie],y.format!==en?oe!==null?se?Ee&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,Y.width,Y.height,oe,Y.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,Q,Y.width,Y.height,0,Y.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?Ee&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Y.width,Y.height,oe,I,Y.data):t.texImage2D(i.TEXTURE_2D,ie,Q,Y.width,Y.height,0,oe,I,Y.data)}else if(y.isDataArrayTexture)if(se){if(ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ze,Q,j.width,j.height,j.depth),Ee)if(y.layerUpdates.size>0){let ie=zl(j.width,j.height,y.format,y.type);for(let Ae of y.layerUpdates){let Oe=j.data.subarray(Ae*ie/j.data.BYTES_PER_ELEMENT,(Ae+1)*ie/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ae,j.width,j.height,1,oe,I,Oe)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,oe,I,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,j.width,j.height,j.depth,0,oe,I,j.data);else if(y.isData3DTexture)se?(ae&&t.texStorage3D(i.TEXTURE_3D,ze,Q,j.width,j.height,j.depth),Ee&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,oe,I,j.data)):t.texImage3D(i.TEXTURE_3D,0,Q,j.width,j.height,j.depth,0,oe,I,j.data);else if(y.isFramebufferTexture){if(ae)if(se)t.texStorage2D(i.TEXTURE_2D,ze,Q,j.width,j.height);else{let ie=j.width,Ae=j.height;for(let Oe=0;Oe<ze;Oe++)t.texImage2D(i.TEXTURE_2D,Oe,Q,ie,Ae,0,oe,I,null),ie>>=1,Ae>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let ie=i.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),j.parentNode!==ie){ie.appendChild(j),d.add(y),ie.onpaint=Ae=>{let Oe=Ae.changedElements;for(let me of d)Oe.includes(me.image)&&(me.needsUpdate=!0)},ie.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let Oe=i.RGBA,me=i.RGBA,tt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Oe,me,tt,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(le.length>0){if(se&&ae){let ie=Ne(le[0]);t.texStorage2D(i.TEXTURE_2D,ze,Q,ie.width,ie.height)}for(let ie=0,Ae=le.length;ie<Ae;ie++)Y=le[ie],se?Ee&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,oe,I,Y):t.texImage2D(i.TEXTURE_2D,ie,Q,oe,I,Y);y.generateMipmaps=!1}else if(se){if(ae){let ie=Ne(j);t.texStorage2D(i.TEXTURE_2D,ze,Q,ie.width,ie.height)}Ee&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,I,j)}else t.texImage2D(i.TEXTURE_2D,0,Q,oe,I,j);w(y)&&y.mipmapsAutoUpdate===!0&&_(ne),ue.__version=re.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function yt(T,y,z){if(y.image.length!==6)return;let ne=$e(T,y),$=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+z);let re=n.get($);if($.version!==re.__version||ne===!0){t.activeTexture(i.TEXTURE0+z);let ue=Ge.getPrimaries(Ge.workingColorSpace),K=y.colorSpace===ei?null:Ge.getPrimaries(y.colorSpace),j=y.colorSpace===ei||ue===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let oe=y.isCompressedTexture||y.image[0].isCompressedTexture,I=y.image[0]&&y.image[0].isDataTexture,Q=[];for(let me=0;me<6;me++)!oe&&!I?Q[me]=b(y.image[me],!0,s.maxCubemapSize):Q[me]=I?y.image[me].image:y.image[me],Q[me]=Pe(y,Q[me]);let Y=Q[0],le=r.convert(y.format,y.colorSpace),se=r.convert(y.type),ae=E(y.internalFormat,le,se,y.normalized,y.colorSpace),Ee=y.isVideoTexture!==!0,ze=re.__version===void 0||ne===!0,ie=$.dataReady,Ae=S(y,Y);Xe(i.TEXTURE_CUBE_MAP,y);let Oe;if(y.isDepthTexture){if(ae=g(y.format===$n,y.type),ze)if(Ee)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ae,Y.width,Y.height);else for(let me=0;me<6;me++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ae,Y.width,Y.height,0,le,se,null)}else if(oe){Ee&&ze&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,ae,Y.width,Y.height);for(let me=0;me<6;me++){Oe=Q[me].mipmaps;for(let tt=0;tt<Oe.length;tt++){let At=Oe[tt];y.format!==en?le!==null?Ee?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,tt,0,0,At.width,At.height,le,At.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,tt,ae,At.width,At.height,0,At.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,tt,0,0,At.width,At.height,le,se,At.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,tt,ae,At.width,At.height,0,le,se,At.data)}}}else{if(Oe=y.mipmaps,Ee&&ze){Oe.length>0&&Ae++;let me=Ne(Q[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,ae,me.width,me.height)}for(let me=0;me<6;me++)if(I){Ee?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Q[me].width,Q[me].height,le,se,Q[me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ae,Q[me].width,Q[me].height,0,le,se,Q[me].data);for(let tt=0;tt<Oe.length;tt++){let ti=Oe[tt].image[me].image;Ee?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,tt+1,0,0,ti.width,ti.height,le,se,ti.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,tt+1,ae,ti.width,ti.height,0,le,se,ti.data)}}else{Ee?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,le,se,Q[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ae,le,se,Q[me]);for(let tt=0;tt<Oe.length;tt++){let At=Oe[tt];Ee?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,tt+1,0,0,le,se,At.image[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,tt+1,ae,le,se,At.image[me])}}}w(y)&&y.mipmapsAutoUpdate===!0&&_(i.TEXTURE_CUBE_MAP),re.__version=$.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function rt(T,y,z,ne,$,re){let ue=r.convert(z.format,z.colorSpace),K=r.convert(z.type),j=E(z.internalFormat,ue,K,z.normalized,z.colorSpace),oe=n.get(y),I=n.get(z);if(I.__renderTarget=y,!oe.__hasExternalTextures){let Q=Math.max(1,y.width>>re),Y=Math.max(1,y.height>>re);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,re,j,Q,Y,y.depth,0,ue,K,null):t.texImage2D($,re,j,Q,Y,0,ue,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),q(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,$,I.__webglTexture,0,je(y)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,$,I.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function tn(T,y,z){if(i.bindRenderbuffer(i.RENDERBUFFER,T),y.depthBuffer){let ne=y.depthTexture,$=ne&&ne.isDepthTexture?ne.type:null,re=g(y.stencilBuffer,$),ue=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;q(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je(y),re,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,je(y),re,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,re,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,T)}else{let ne=y.textures;for(let $=0;$<ne.length;$++){let re=ne[$],ue=r.convert(re.format,re.colorSpace),K=r.convert(re.type),j=E(re.internalFormat,ue,K,re.normalized,re.colorSpace);q(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je(y),j,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,je(y),j,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,j,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(T,y,z){let ne=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(y.depthTexture);$.__renderTarget=y;let re=ne?y.depthTexture.image[0]:y.depthTexture.image;(!$.__webglTexture||re.width!==y.width||re.height!==y.height)&&(re.width=y.width,re.height=y.height,y.depthTexture.needsUpdate=!0),ne?pe(y.depthTexture,0):he(y.depthTexture,0);let ue=$.__webglTexture,K=je(y),j=ne?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,oe=y.depthTexture.format===$n?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Vn)q(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,j,ue,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,oe,j,ue,0);else if(y.depthTexture.format===$n)q(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,j,ue,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,oe,j,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function kt(T){let y=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){let ne=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ne){let $=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ne.removeEventListener("dispose",$)};ne.addEventListener("dispose",$),y.__depthDisposeCallback=$}y.__boundDepthTexture=ne}if(T.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let ne=0;ne<6;ne++)dt(y.__webglFramebuffer[ne],T,ne);else T.texture.mipmaps.length>0?dt(y.__webglFramebuffer[0],T,0):dt(y.__webglFramebuffer,T,0);else if(z){y.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[ne]),y.__webglDepthbuffer[ne]===void 0)y.__webglDepthbuffer[ne]=i.createRenderbuffer(),tn(y.__webglDepthbuffer[ne],T,!1);else{let $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=y.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,re)}}else if(T.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),tn(y.__webglDepthbuffer,T,!1);else{let $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,re)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(T,y,z){let ne=n.get(T);y!==void 0&&rt(ne.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&kt(T)}function Gt(T){let y=T.texture,z=n.get(T),ne=n.get(y);T.addEventListener("dispose",U),N(T);let $=T.textures,re=T.isWebGLCubeRenderTarget===!0,ue=$.length>1;if(ue||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=y.version,a.memory.textures++),re){z.__webglFramebuffer=[];for(let K=0;K<6;K++)if(y.mipmaps.length>0){z.__webglFramebuffer[K]=[];for(let j=0;j<y.mipmaps.length;j++)z.__webglFramebuffer[K][j]=i.createFramebuffer()}else z.__webglFramebuffer[K]=i.createFramebuffer()}else{if(y.mipmaps.length>0){z.__webglFramebuffer=[];for(let K=0;K<y.mipmaps.length;K++)z.__webglFramebuffer[K]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ue)for(let K=0,j=$.length;K<j;K++){let oe=n.get($[K]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&q(T)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let K=0;K<$.length;K++){let j=$[K];z.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[K]);let oe=r.convert(j.format,j.colorSpace),I=r.convert(j.type),Q=E(j.internalFormat,oe,I,j.normalized,j.colorSpace,T.isXRRenderTarget===!0),Y=je(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,Q,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,z.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),tn(z.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,y);for(let K=0;K<6;K++)if(y.mipmaps.length>0)for(let j=0;j<y.mipmaps.length;j++)rt(z.__webglFramebuffer[K][j],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,j);else rt(z.__webglFramebuffer[K],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);w(y)?_(i.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}else if(ue){for(let K=0,j=$.length;K<j;K++){let oe=$[K],I=n.get(oe),Q=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Q=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,I.__webglTexture),Xe(Q,oe),rt(z.__webglFramebuffer,T,oe,i.COLOR_ATTACHMENT0+K,Q,0),w(oe)&&_(Q)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(K=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,ne.__webglTexture),Xe(K,y),y.mipmaps.length>0)for(let j=0;j<y.mipmaps.length;j++)rt(z.__webglFramebuffer[j],T,y,i.COLOR_ATTACHMENT0,K,j);else rt(z.__webglFramebuffer,T,y,i.COLOR_ATTACHMENT0,K,0);w(y)?_(K):y.mipmaps.length>0&&i.texParameteri(K,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}T.depthBuffer&&kt(T)}function A(T){let y=T.textures;for(let z=0,ne=y.length;z<ne;z++){let $=y[z];if(w($)&&$.mipmapsAutoUpdate===!0){let re=R(T),ue=n.get($).__webglTexture;t.bindTexture(re,ue),_(re),t.unbindTexture()}}}let lt=[];function Ze(T){if(T.samples>0){if(q(T)===!1){let y=T.textures,z=T.width,ne=T.height,$=i.COLOR_BUFFER_BIT,re=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(T),K=y.length>1;if(K)for(let oe=0;oe<y.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let oe=0;oe<y.length;oe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[oe]);let I=n.get(y[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,I,0)}i.blitFramebuffer(0,0,z,ne,0,0,z,ne,$,i.NEAREST),l===!0&&(lt.length=0,lt.push(i.COLOR_ATTACHMENT0+oe),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&lt.push(re),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let oe=0;oe<y.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,ue.__webglColorRenderbuffer[oe]);let I=n.get(y[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,I,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function je(T){return Math.min(s.maxSamples,T.samples)}function q(T){let y=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ke(T){let y=a.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function Pe(T,y){let z=T.colorSpace,ne=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==_t&&z!==ei&&(Ge.getTransfer(z)===et?(ne!==en||$!==$t)&&Te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ie("WebGLTextures: Unsupported texture color space:",z)),y}function Ne(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=be,this.resetTextureUnits=J,this.getTextureUnits=ee,this.setTextureUnits=xe,this.setTexture2D=he,this.setTexture2DArray=fe,this.setTexture3D=Re,this.setTextureCube=pe,this.rebindTextures=Ht,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=q,this.dispose=H}function k0(i,e){function t(n,s=ei){let r,a=Ge.getTransfer(s);if(n===$t)return i.UNSIGNED_BYTE;if(n===Ra)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ca)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_l)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ml)return i.BYTE;if(n===Sl)return i.SHORT;if(n===Ts)return i.UNSIGNED_SHORT;if(n===wa)return i.INT;if(n===vn)return i.UNSIGNED_INT;if(n===It)return i.FLOAT;if(n===Zt)return i.HALF_FLOAT;if(n===Tl)return i.ALPHA;if(n===El)return i.RGB;if(n===en)return i.RGBA;if(n===Vn)return i.DEPTH_COMPONENT;if(n===$n)return i.DEPTH_STENCIL;if(n===Pa)return i.RED;if(n===Ia)return i.RED_INTEGER;if(n===gi)return i.RG;if(n===La)return i.RG_INTEGER;if(n===Da)return i.RGBA_INTEGER;if(n===pr||n===mr||n===gr||n===xr)if(a===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Na||n===Ua||n===Fa||n===Oa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Na)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ba||n===za||n===ka||n===Ha||n===Ga||n===yr||n===Va)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ba||n===za)return a===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ka)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ha)return r.COMPRESSED_R11_EAC;if(n===Ga)return r.COMPRESSED_SIGNED_R11_EAC;if(n===yr)return r.COMPRESSED_RG11_EAC;if(n===Va)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===Ka||n===Ja||n===ja||n===Qa||n===$a||n===eo||n===to||n===no||n===io)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ya)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Za)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ka)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ja)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ja)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$a)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===eo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===to)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===no)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===io)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===so||n===ro||n===ao)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===so)return a===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ro)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ao)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===oo||n===lo||n===vr||n===co)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===oo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===lo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===co)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var H0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,G0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Zl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new nr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new An({vertexShader:H0,fragmentShader:G0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ct(new Ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kl=class extends _n{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,x=null,M=typeof XRWebGLBinding<"u",p=new Zl,m={},b=t.getContextAttributes(),w=null,_=null,R=[],E=[],g=new Be,S=null,N=null,P=new bt;P.viewport=new nt;let L=new bt;L.viewport=new nt;let U=[P,L],O=new Ta,C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let he=R[Z];return he===void 0&&(he=new ds,R[Z]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Z){let he=R[Z];return he===void 0&&(he=new ds,R[Z]=he),he.getGripSpace()},this.getHand=function(Z){let he=R[Z];return he===void 0&&(he=new ds,R[Z]=he),he.getHandSpace()};function V(Z){let he=E.indexOf(Z.inputSource);if(he===-1)return;let fe=R[he];fe!==void 0&&(fe.update(Z.inputSource,Z.frame,c||a),fe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",te);for(let Z=0;Z<R.length;Z++){let he=E[Z];he!==null&&(E[Z]=null,R[Z].disconnect(he))}C=null,H=null,p.reset();for(let Z in m)delete m[Z];if(e.setRenderTarget(w),f=null,u=null,d=null,s=null,_=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(g.width,g.height,!1),N!==null){let Z=N.camera;Z.fov=N.fov,Z.zoom=N.zoom,Z.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",G),s.addEventListener("inputsourceschange",te),b.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(g),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Re=null,pe=null;b.depth&&(pe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=b.stencil?$n:Vn,Re=b.stencil?ki:vn);let Le={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Le),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new on(u.textureWidth,u.textureHeight,{format:en,type:$t,depthTexture:new qn(u.textureWidth,u.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let fe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new on(f.framebufferWidth,f.framebufferHeight,{format:en,type:$t,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),be.setContext(s),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function te(Z){for(let he=0;he<Z.removed.length;he++){let fe=Z.removed[he],Re=E.indexOf(fe);Re>=0&&(E[Re]=null,R[Re].disconnect(fe))}for(let he=0;he<Z.added.length;he++){let fe=Z.added[he],Re=E.indexOf(fe);if(Re===-1){for(let Le=0;Le<R.length;Le++)if(Le>=E.length){E.push(fe),Re=Le;break}else if(E[Le]===null){E[Le]=fe,Re=Le;break}if(Re===-1)break}let pe=R[Re];pe&&pe.connect(fe)}}function X(Z,he){he===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(he.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let he=Z.near,fe=Z.far;p.texture!==null&&(p.depthNear>0&&(he=p.depthNear),p.depthFar>0&&(fe=p.depthFar)),O.near=L.near=P.near=he,O.far=L.far=P.far=fe,(C!==O.near||H!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),C=O.near,H=O.far),O.layers.mask=Z.layers.mask|6,P.layers.mask=O.layers.mask&-5,L.layers.mask=O.layers.mask&-3;let Re=Z.parent,pe=O.cameras;X(O,Re);for(let Le=0;Le<pe.length;Le++)X(pe[Le],Re);O.projectionMatrix.copy(P.projectionMatrix),O.projectionMatrixInverse.copy(P.projectionMatrixInverse),N===null&&Z.isPerspectiveCamera&&(N={camera:Z,fov:Z.fov,zoom:Z.zoom}),J(Z,O,Re)};function J(Z,he,fe){fe===null?Z.matrix.copy(he.matrixWorld):(Z.matrix.copy(fe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(he.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ri*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(Z){return m[Z]};let ee=null;function xe(Z,he){if(h=he.getViewerPose(c||a),x=he,h!==null){let fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Re=!1;fe.length!==O.cameras.length&&(O.cameras.length=0,Re=!0);for(let Ce=0;Ce<fe.length;Ce++){let Xe=fe[Ce],$e=null;if(f!==null)$e=f.getViewport(Xe);else{let gt=d.getViewSubImage(u,Xe);$e=gt.viewport,Ce===0&&(e.setRenderTargetTextures(_,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(_))}let He=U[Ce];He===void 0&&(He=new bt,He.layers.enable(Ce),He.viewport=new nt,U[Ce]=He),He.matrix.fromArray(Xe.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Xe.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set($e.x,$e.y,$e.width,$e.height),Ce===0&&(O.matrix.copy(He.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Re===!0&&O.cameras.push(He)}let pe=s.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=n.getBinding();let Ce=d.getDepthInformation(fe[0]);Ce&&Ce.isValid&&Ce.texture&&p.init(Ce,s.renderState)}if(pe&&pe.includes("camera-access")&&M){e.state.unbindTexture(),d=n.getBinding();for(let Ce=0;Ce<fe.length;Ce++){let Xe=fe[Ce].camera;if(Xe){let $e=m[Xe];$e||($e=new nr,m[Xe]=$e);let He=d.getCameraImage(Xe);$e.sourceTexture=He}}}}for(let fe=0;fe<R.length;fe++){let Re=E[fe],pe=R[fe];Re!==null&&pe!==void 0&&pe.update(Re,he,c||a)}ee&&ee(Z,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),x=null}let be=new Iu;be.setAnimationLoop(xe),this.setAnimationLoop=function(Z){ee=Z},this.dispose=function(){}}},V0=new Fe,Hu=new De;Hu.set(-1,0,0,0,1,0,0,0,1);function W0(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Fl(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,b,w,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,_)):m.isMeshMatcapMaterial?(r(p,m),x(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),M(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,b,w):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Yt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Yt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let b=e.get(m),w=b.envMap,_=b.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(V0.makeRotationFromEuler(_)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Hu),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=w*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,b){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Yt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,m){m.matcap&&(p.matcap.value=m.matcap)}function M(p,m){let b=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function X0(i,e,t,n){let s={},r={};function a(b,w){let _=w.program;n.uniformBlockBinding(b,_,s[b.id])}function o(b,w){let _=s[b.id];_===void 0&&(x(b),_=l(b),s[b.id]=_,b.addEventListener("dispose",p));let R=w.program;n.updateUBOMapping(b,R);let E=e.render.frame;r[b.id]!==E&&(c(b),r[b.id]=E)}function l(b){let w=i.createBuffer(),_=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,_,R),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function c(b){let w=s[b.id],_=b.uniforms,R=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let E=0,g=_.length;E<g;E++){let S=_[E];if(Array.isArray(S))for(let N=0,P=S.length;N<P;N++)h(S[N],E,N,R);else h(S,E,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(b,w,_,R){if(u(b,w,_,R)===!0){let E=b.__offset,g=b.value;if(Array.isArray(g)){let S=0;for(let N=0;N<g.length;N++){let P=g[N],L=M(P,!0);d(P,b.__data,S),S+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else d(g,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,b.__data)}}function d(b,w,_){typeof b=="number"||typeof b=="boolean"?w[_]=b:b.isMatrix3?(w[_]=b.elements[0],w[_+1]=b.elements[1],w[_+2]=b.elements[2],w[_+3]=0,w[_+4]=b.elements[3],w[_+5]=b.elements[4],w[_+6]=b.elements[5],w[_+7]=0,w[_+8]=b.elements[6],w[_+9]=b.elements[7],w[_+10]=b.elements[8],w[_+11]=0):ArrayBuffer.isView(b)?w.set(b.subarray(0,w.length-_),_):b.toArray(w,_)}function u(b,w,_,R){let E=b.value,g=w+"_"+_;if(Array.isArray(E)){R[g]===void 0&&(R[g]=[]);let S=R[g],N=!1;for(let P=0;P<E.length;P++)f(E[P],S,P)===!0&&(N=!0);return N}return f(E,R,g)}function f(b,w,_){if(w[_]===void 0)return typeof b=="number"||typeof b=="boolean"?w[_]=b:ArrayBuffer.isView(b)?w[_]=b.slice():w[_]=b.clone(),!0;{let R=w[_];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return w[_]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(R.equals(b)===!1)return R.copy(b),!0}}return!1}function x(b){let w=b.uniforms,_=0,R=16;for(let g=0,S=w.length;g<S;g++){let N=Array.isArray(w[g])?w[g]:[w[g]];for(let P=0,L=N.length;P<L;P++){let U=N[P],O=Array.isArray(U.value)?U.value:[U.value],C=Array.isArray(w[g])||Array.isArray(U.value),H=_;for(let G=0,te=O.length;G<te;G++){let X=O[G],J=M(X,C),ee=_%R,xe=ee%J.boundary,be=ee+xe;_+=xe,be!==0&&R-be<J.storage&&(_+=R-be),G===0&&(H=_),_+=J.storage}let V=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new V((_-H)/Float32Array.BYTES_PER_ELEMENT),U.__offset=H}}let E=_%R;return E>0&&(_+=R-E),b.__size=_,b.__cache={},this}function M(b,w){let _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=16,_.storage=48):b.isMatrix4?(_.boundary=16,_.storage=64):b.isTexture?Te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(_.boundary=16,_.storage=b.byteLength):Te("WebGLRenderer: Unsupported uniform value type.",b),w===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function p(b){let w=b.target;w.removeEventListener("dispose",p),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function m(){for(let b in s)i.deleteBuffer(s[b]);s={},r={}}return{bind:a,update:o,dispose:m}}var q0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),In=null;function Y0(){return In===null&&(In=new En(q0,16,16,gi,Zt),In.name="DFG_LUT",In.minFilter=ot,In.magFilter=ot,In.wrapS=Kt,In.wrapT=Kt,In.generateMipmaps=!1,In.needsUpdate=!0),In}var mo=class{constructor(e={}){let{canvas:t=nu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=$t}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let M=f,p=new Set([Da,La,Ia]),m=new Set([$t,vn,Ts,ki,Ra,Ca]),b=new Uint32Array(4),w=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},R=null,E=null,g=[],S=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,L=!1,U=null,O=null,C=null,H=null;this._outputColorSpace=mt;let V=0,G=0,te=null,X=-1,J=null,ee=new nt,xe=new nt,be=null,Z=new we(0),he=0,fe=t.width,Re=t.height,pe=1,Le=null,ht=null,Ce=new nt(0,0,fe,Re),Xe=new nt(0,0,fe,Re),$e=!1,He=new ui,gt=new ua,ut=!1,yt=!1,rt=new Fe,tn=new F,dt=new nt,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ht=!1;function Gt(){return te===null?pe:1}let A=n;function lt(v,D){return t.getContext(v,D)}let Ze,je,q,Ke,Pe,Ne,T,y,z,ne,$,re,ue,K,j,oe,I,Q,Y,le,se,ae,Ee;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",me,!1),A===null){let D="webgl2";if(A=lt(D,v),A===null)throw lt(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ze()}catch(v){throw t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Ie("WebGLRenderer: "+v.message),v}function ze(){Ze=new sg(A),Ze.init(),se=new k0(A,Ze),je=new Ym(A,Ze,e,se),q=new B0(A,Ze),je.reversedDepthBuffer&&u&&q.buffers.depth.setReversed(!0),O=A.createFramebuffer(),C=A.createFramebuffer(),H=A.createFramebuffer(),Ke=new og(A),Pe=new T0,Ne=new z0(A,Ze,q,Pe,je,se,Ke),T=new ig(P),y=new cf(A),ae=new Xm(A,y),z=new rg(A,y,Ke,ae),ne=new cg(A,z,y,ae,Ke),Q=new lg(A,je,Ne),j=new Zm(Pe),$=new _0(P,T,Ze,je,ae,j),re=new W0(P,Pe),ue=new A0,K=new L0(Ze),I=new Wm(P,T,q,ne,x,l),oe=new O0(P,ne,je),Ee=new X0(A,Ke,je,q),Y=new qm(A,Ze,Ke),le=new ag(A,Ze,Ke),Ke.programs=$.programs,P.capabilities=je,P.extensions=Ze,P.properties=Pe,P.renderLists=ue,P.shadowMap=oe,P.state=q,P.info=Ke}M!==$t&&(N=new ug(M,t.width,t.height,o,s,r));let ie=new Kl(P,A);this.xr=ie,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let v=Ze.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Ze.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(v){v!==void 0&&(pe=v,this.setSize(fe,Re,!1))},this.getSize=function(v){return v.set(fe,Re)},this.setSize=function(v,D,W=!0){if(ie.isPresenting){Te("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=v,Re=D,t.width=Math.floor(v*pe),t.height=Math.floor(D*pe),W===!0&&(t.style.width=v+"px",t.style.height=D+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(fe*pe,Re*pe).floor()},this.setDrawingBufferSize=function(v,D,W){fe=v,Re=D,pe=W,t.width=Math.floor(v*W),t.height=Math.floor(D*W),this.setViewport(0,0,v,D)},this.setEffects=function(v){if(M===$t){Ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let D=0;D<v.length;D++)if(v[D].isOutputPass===!0){Te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(ee)},this.getViewport=function(v){return v.copy(Ce)},this.setViewport=function(v,D,W,B){v.isVector4?Ce.set(v.x,v.y,v.z,v.w):Ce.set(v,D,W,B),q.viewport(ee.copy(Ce).multiplyScalar(Gt()).round())},this.getScissor=function(v){return v.copy(Xe)},this.setScissor=function(v,D,W,B){v.isVector4?Xe.set(v.x,v.y,v.z,v.w):Xe.set(v,D,W,B),q.scissor(xe.copy(Xe).multiplyScalar(Gt()).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(v){q.setScissorTest($e=v)},this.setOpaqueSort=function(v){Le=v},this.setTransparentSort=function(v){ht=v},this.getClearColor=function(v){return v.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,W=!0){let B=0;if(v){let k=!1;if(te!==null){let de=te.texture.format;k=p.has(de)}if(k){let de=te.texture.type,ve=m.has(de),ce=I.getClearColor(),ye=I.getClearAlpha(),_e=ce.r,Ue=ce.g,qe=ce.b;ve?(b[0]=_e,b[1]=Ue,b[2]=qe,b[3]=ye,A.clearBufferuiv(A.COLOR,0,b)):(w[0]=_e,w[1]=Ue,w[2]=qe,w[3]=ye,A.clearBufferiv(A.COLOR,0,w))}else B|=A.COLOR_BUFFER_BIT}D&&(B|=A.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(B|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&A.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),U=v},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",me,!1),I.dispose(),ue.dispose(),K.dispose(),Ne.dispose(),Pe.dispose(),T.dispose(),ne.dispose(),z.dispose(),ae.dispose(),Ee.dispose(),$.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",wc),ie.removeEventListener("sessionend",Rc),yi.stop()};function Ae(v){v.preventDefault(),Gs("WebGLRenderer: Context Lost."),L=!0}function Oe(){Gs("WebGLRenderer: Context Restored."),L=!1;let v=Ke.autoReset,D=oe.enabled,W=oe.autoUpdate,B=oe.needsUpdate,k=oe.type;ze(),Ke.autoReset=v,oe.enabled=D,oe.autoUpdate=W,oe.needsUpdate=B,oe.type=k}function me(v){Ie("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function tt(v){let D=v.target;D.removeEventListener("dispose",tt),At(D)}function At(v){ti(v),Pe.remove(v)}function ti(v){let D=Pe.get(v).programs;D!==void 0&&(D.forEach(function(W){$.releaseProgram(W)}),v.isShaderMaterial&&$.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,W,B,k,de){D===null&&(D=kt);let ve=k.isMesh&&k.matrixWorld.determinantAffine()<0,ce=$u(v,D,W,B,k);q.setMaterial(B,ve);let ye=W.index,_e=1;if(B.wireframe===!0){if(ye=z.getWireframeAttribute(W),ye===void 0)return;_e=2}let Ue=W.drawRange,qe=W.attributes.position,Me=Ue.start*_e,Ye=(Ue.start+Ue.count)*_e;de!==null&&(Me=Math.max(Me,de.start*_e),Ye=Math.min(Ye,(de.start+de.count)*_e)),ye!==null?(Me=Math.max(Me,0),Ye=Math.min(Ye,ye.count)):qe!=null&&(Me=Math.max(Me,0),Ye=Math.min(Ye,qe.count));let vt=Ye-Me;if(vt<0||vt===1/0)return;ae.setup(k,B,ce,W,ye);let at,it=Y;if(ye!==null&&(at=y.get(ye),it=le,it.setIndex(at)),k.isMesh)B.wireframe===!0?(q.setLineWidth(B.wireframeLinewidth*Gt()),it.setMode(A.LINES)):it.setMode(A.TRIANGLES);else if(k.isLine){let Ut=B.linewidth;Ut===void 0&&(Ut=1),q.setLineWidth(Ut*Gt()),k.isLineSegments?it.setMode(A.LINES):k.isLineLoop?it.setMode(A.LINE_LOOP):it.setMode(A.LINE_STRIP)}else k.isPoints?it.setMode(A.POINTS):k.isSprite&&it.setMode(A.TRIANGLES);if(k.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))it.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Ut=k._multiDrawStarts,Se=k._multiDrawCounts,Vt=k._multiDrawCount,Qe=ye?y.get(ye).bytesPerElement:1,vi=Pe.get(B).currentProgram.getUniforms();for(let Ft=0;Ft<Vt;Ft++)vi.setValue(A,"_gl_DrawID",Ft),it.render(Ut[Ft]/Qe,Se[Ft])}else if(k.isInstancedMesh)it.renderInstances(Me,vt,k.count);else if(W.isInstancedBufferGeometry){let Ut=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Se=Math.min(W.instanceCount,Ut);it.renderInstances(Me,vt,Se)}else it.render(Me,vt)};function Ac(v,D,W,B){U!==null&&v.isNodeMaterial&&U.setObject(B,v),ut===!0&&j.setState(v,W,!1),v.transparent===!0&&v.side===un&&v.forceSinglePass===!1?(v.side=Yt,v.needsUpdate=!0,Cs(v,D,B),v.side=Rn,v.needsUpdate=!0,Cs(v,D,B),v.side=un):Cs(v,D,B)}this.compile=function(v,D,W=null){W===null&&(W=v),U!==null&&U.renderStart(v,D,W),E=K.get(W),E.init(D),S.push(E),W.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),v!==W&&v.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),E.setupLights(),U!==null&&U.updateLights(E.state.lightsArray),yt=this.localClippingEnabled,ut=j.init(this.clippingPlanes,yt),ut===!0&&j.setGlobalState(this.clippingPlanes,D),U!==null&&oe.render(E.state.shadowsArray,W,D);let B=new Set;return v.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let de=k.material;if(de)if(Array.isArray(de))for(let ve=0;ve<de.length;ve++){let ce=de[ve];Ac(ce,W,D,k),B.add(ce)}else Ac(de,W,D,k),B.add(de)}),E=S.pop(),U!==null&&U.renderEnd(),B},this.compileAsync=function(v,D,W=null){let B=this.compile(v,D,W);return new Promise(k=>{function de(){if(B.forEach(function(ve){let ye=Pe.get(ve).currentProgram;(ye===void 0||ye.isReady())&&B.delete(ve)}),B.size===0){k(v);return}setTimeout(de,10)}Ze.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let bo=null;function ju(v){bo&&bo(v)}function wc(){yi.stop()}function Rc(){yi.start()}let yi=new Iu;yi.setAnimationLoop(ju),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(v){bo=v,ie.setAnimationLoop(v),v===null?yi.stop():yi.start()},ie.addEventListener("sessionstart",wc),ie.addEventListener("sessionend",Rc),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){Ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(v,D);let W=ie.enabled===!0&&ie.isPresenting===!0,B=N!==null&&(te===null||W)&&N.begin(P,te);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(D),D=ie.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,D,te),E=K.get(v,S.length),E.init(D),E.state.textureUnits=Ne.getTextureUnits(),S.push(E),rt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?gt.setFromArrayCamera(D):He.setFromProjectionMatrix(rt,hn,D.reversedDepth),yt=this.localClippingEnabled,ut=j.init(this.clippingPlanes,yt),R=ue.get(v,g.length),R.init(),g.push(R),this.info.render.frame++,ie.enabled===!0&&ie.isPresenting===!0){let ve=P.xr.getDepthSensingMesh();ve!==null&&_o(ve,D,-1/0,P.sortObjects)}_o(v,D,0,P.sortObjects),R.finish(),U!==null&&U.updateLights(E.state.lightsArray),P.sortObjects===!0&&R.sort(Le,ht),Ht=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Ht&&I.addToRenderList(R,v),this.info.autoReset===!0&&this.info.reset(),ut===!0&&j.beginShadows();let k=E.state.shadowsArray;if(oe.render(k,v,D),ut===!0&&j.endShadows(),(B&&N.hasRenderPass())===!1){let ve=R.opaque,ce=R.transmissive;if(E.setupLights(),D.isArrayCamera){let ye=D.cameras;if(ce.length>0)for(let _e=0,Ue=ye.length;_e<Ue;_e++){let qe=ye[_e];Pc(ve,ce,v,qe)}Ht&&I.render(v);for(let _e=0,Ue=ye.length;_e<Ue;_e++){let qe=ye[_e];Cc(R,v,qe,qe.viewport)}}else ce.length>0&&Pc(ve,ce,v,D),Ht&&I.render(v),Cc(R,v,D)}te!==null&&G===0&&(Ne.updateMultisampleRenderTarget(te),Ne.updateRenderTargetMipmap(te)),B&&N.end(P),v.isScene===!0&&v.onAfterRender(P,v,D),ae.resetDefaultState(),X=-1,J=null,S.pop(),S.length>0?(E=S[S.length-1],Ne.setTextureUnits(E.state.textureUnits),ut===!0&&j.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,g.pop(),g.length>0?R=g[g.length-1]:R=null,U!==null&&U.renderEnd()};function _o(v,D,W,B){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)W=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)E.pushLight(v),v.castShadow&&E.pushShadow(v);else if(v.isSprite){let ve=D.isArrayCamera?gt:He;if(!v.frustumCulled||v.intersectsFrustum(ve)){B&&dt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(rt);let ce=ne.update(v),ye=v.material;ye.visible&&R.push(v,ce,ye,W,dt.z,null,D)}}else if(v.isMesh||v.isLine||v.isPoints){let ve=D.isArrayCamera?gt:He;if(!v.frustumCulled||v.intersectsFrustum(ve)){let ce=ne.update(v),ye=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),dt.copy(v.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),dt.copy(ce.boundingSphere.center)),dt.applyMatrix4(v.matrixWorld).applyMatrix4(rt)),Array.isArray(ye)){let _e=ce.groups;for(let Ue=0,qe=_e.length;Ue<qe;Ue++){let Me=_e[Ue],Ye=ye[Me.materialIndex];Ye&&Ye.visible&&R.push(v,ce,Ye,W,dt.z,Me,D)}}else ye.visible&&R.push(v,ce,ye,W,dt.z,null,D)}}}let de=v.children;for(let ve=0,ce=de.length;ve<ce;ve++)_o(de[ve],D,W,B)}function Cc(v,D,W,B){let{opaque:k,transmissive:de,transparent:ve}=v;E.setupLightsView(W),ut===!0&&j.setGlobalState(P.clippingPlanes,W),B&&q.viewport(ee.copy(B)),k.length>0&&Ar(k,D,W),de.length>0&&Ar(de,D,W),ve.length>0&&Ar(ve,D,W),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function Pc(v,D,W,B){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[B.id]===void 0){let Me=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[B.id]=new on(1,1,{generateMipmaps:!0,type:Me?Zt:$t,minFilter:ln,samples:Math.max(4,je.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}let de=E.state.transmissionRenderTarget[B.id],ve=B.viewport||ee;de.setSize(ve.z*P.transmissionResolutionScale,ve.w*P.transmissionResolutionScale);let ce=P.getRenderTarget(),ye=P.getActiveCubeFace(),_e=P.getActiveMipmapLevel();P.setRenderTarget(de),P.getClearColor(Z),he=P.getClearAlpha(),he<1&&P.setClearColor(16777215,.5),P.clear(),Ht&&I.render(W);let Ue=P.toneMapping;P.toneMapping=Cn;let qe=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),E.setupLightsView(B),ut===!0&&j.setGlobalState(P.clippingPlanes,B),Ar(v,W,B),Ne.updateMultisampleRenderTarget(de),Ne.updateRenderTargetMipmap(de),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let Ye=0,vt=D.length;Ye<vt;Ye++){let at=D[Ye],{object:it,geometry:Ut,material:Se,group:Vt}=at;if(Se.side===un&&it.layers.test(B.layers)){let Qe=Se.side;Se.side=Yt,Se.needsUpdate=!0,Ic(it,W,B,Ut,Se,Vt),Se.side=Qe,Se.needsUpdate=!0,Me=!0}}Me===!0&&(Ne.updateMultisampleRenderTarget(de),Ne.updateRenderTargetMipmap(de))}P.setRenderTarget(ce,ye,_e),P.setClearColor(Z,he),qe!==void 0&&(B.viewport=qe),P.toneMapping=Ue}function Ar(v,D,W){let B=D.isScene===!0?D.overrideMaterial:null;for(let k=0,de=v.length;k<de;k++){let ve=v[k],{object:ce,geometry:ye,group:_e}=ve,Ue=ve.material;Ue.allowOverride===!0&&B!==null&&(Ue=B),ce.layers.test(W.layers)&&Ic(ce,D,W,ye,Ue,_e)}}function Ic(v,D,W,B,k,de){U!==null&&k.isNodeMaterial&&U.setObject(v,k),v.onBeforeRender(P,D,W,B,k,de),v.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),k.onBeforeRender(P,D,W,B,v,de),k.transparent===!0&&k.side===un&&k.forceSinglePass===!1?(k.side=Yt,k.needsUpdate=!0,P.renderBufferDirect(W,D,B,k,v,de),k.side=Rn,k.needsUpdate=!0,P.renderBufferDirect(W,D,B,k,v,de),k.side=un):P.renderBufferDirect(W,D,B,k,v,de),v.onAfterRender(P,D,W,B,k,de)}function Lc(v){let D=0;for(let W of v)W.texture!==null&&D++;return D}function Cs(v,D,W){D.isScene!==!0&&(D=kt);let B=Pe.get(v),k=E.state.lights,de=E.state.shadowsArray,ve=k.state.version,ce=$.getParameters(v,k.state,de,D,W,E.state.lightProbeGridArray),ye=$.getProgramCacheKey(ce),_e=B.programs;B.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,B.fog=D.fog;let Ue=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;B.envMap=T.get(v.envMap||B.environment,Ue),B.envMapRotation=B.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,_e===void 0&&(v.addEventListener("dispose",tt),_e=new Map,B.programs=_e,B.programVariants=new Map);let qe=_e.get(ye);if(qe!==void 0){if(B.currentProgram===qe&&B.lightsStateVersion===ve)return Nc(v,ce),qe}else ce.uniforms=$.getUniforms(v),U!==null&&v.isNodeMaterial&&U.build(v,W,ce),v.onBeforeCompile(ce,P),qe=$.acquireProgram(ce,ye),_e.set(ye,qe),B.uniforms=ce.uniforms;let Me=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Me.clippingPlanes=j.uniform),Nc(v,ce),B.needsLights=td(v),B.lightsStateVersion=ve,B.needsLights&&(Me.ambientLightColor.value=k.state.ambient,Me.lightProbe.value=k.state.probe,Me.sunLights.value=k.state.sun,Me.sunLightShadows.value=k.state.sunShadow,Me.directionalLights.value=k.state.directional,Me.directionalLightShadows.value=k.state.directionalShadow,Me.spotLights.value=k.state.spot,Me.spotLightShadows.value=k.state.spotShadow,Me.rectAreaLights.value=k.state.rectArea,Me.ltc_1.value=k.state.rectAreaLTC1,Me.ltc_2.value=k.state.rectAreaLTC2,Me.pointLights.value=k.state.point,Me.pointLightShadows.value=k.state.pointShadow,Me.hemisphereLights.value=k.state.hemi,Me.sunShadowMatrix.value=k.state.sunShadowMatrix,Me.sunShadowCascade.value=k.state.sunShadowCascade,Me.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Me.spotLightMatrix.value=k.state.spotLightMatrix,Me.spotLightMap.value=k.state.spotLightMap,Me.pointShadowMatrix.value=k.state.pointShadowMatrix),B.numLightProbeGrids=Lc(E.state.lightProbeGridArray),B.currentProgram=qe,B.uniformsList=null,qe}function Qu(v,D,W,B,k){let de=Pe.get(v),ve=de.currentProgram.id+","+B+","+k,ce=de.programVariants.get(ve);return ce===void 0?(ce=Cs(v,D,W),de.programVariants.set(ve,ce)):(de.currentProgram=ce,de.uniformsList=null,de.outputColorSpace=B,de.toneMapping=k),ce}function Dc(v){if(v.uniformsList===null){let D=v.currentProgram.getUniforms();v.uniformsList=As.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function Nc(v,D){let W=Pe.get(v);W.outputColorSpace=D.outputColorSpace,W.batching=D.batching,W.batchingColor=D.batchingColor,W.instancing=D.instancing,W.instancingColor=D.instancingColor,W.instancingMorph=D.instancingMorph,W.skinning=D.skinning,W.morphTargets=D.morphTargets,W.morphNormals=D.morphNormals,W.morphColors=D.morphColors,W.morphTargetsCount=D.morphTargetsCount,W.numClippingPlanes=D.numClippingPlanes,W.numIntersection=D.numClipIntersection,W.vertexAlphas=D.vertexAlphas,W.vertexTangents=D.vertexTangents,W.toneMapping=D.toneMapping}function $u(v,D,W,B,k){D.isScene!==!0&&(D=kt),Ne.resetTextureUnits();let de=D.fog,ve=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?D.environment:null,ce=te===null?P.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ge.workingColorSpace,ye=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,_e=T.get(B.envMap||ve,ye),Ue=B.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,qe=!!W.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Me=!!W.morphAttributes.position,Ye=!!W.morphAttributes.normal,vt=!!W.morphAttributes.color,at=Cn;B.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(at=P.toneMapping);let it=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ut=it!==void 0?it.length:0,Se=Pe.get(B),Vt=E.state.lights;if(ut===!0&&(yt===!0||v!==J)){let ft=v===J&&B.id===X;j.setState(B,v,ft)}let Qe=!1,vi=!1;B.version===Se.__version?Se.needsLights&&Se.lightsStateVersion!==Vt.state.version||k.isBatchedMesh&&Se.batching===!1||!k.isBatchedMesh&&Se.batching===!0||k.isBatchedMesh&&Se.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&Se.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&Se.instancing===!1||!k.isInstancedMesh&&Se.instancing===!0||k.isSkinnedMesh&&Se.skinning===!1||!k.isSkinnedMesh&&Se.skinning===!0||k.isInstancedMesh&&Se.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Se.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Se.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Se.instancingMorph===!1&&k.morphTexture!==null||Se.envMap!==_e||B.fog===!0&&Se.fog!==de||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==j.numPlanes||Se.numIntersection!==j.numIntersection)||Se.vertexAlphas!==Ue||Se.vertexTangents!==qe||Se.morphTargets!==Me||Se.morphNormals!==Ye||Se.morphColors!==vt||Se.morphTargetsCount!==Ut||Se.numLightProbeGrids!==Lc(E.state.lightProbeGridArray)?Qe=!0:(Se.outputColorSpace!==ce||Se.toneMapping!==at)&&(vi=!0):(Qe=!0,Se.__version=B.version);let Ft=Se.currentProgram;(Qe===!0||vi===!0)&&(Ft=vi===!0?Qu(B,D,k,ce,at):Cs(B,D,k),U&&B.isNodeMaterial&&U.onUpdateProgram(B,Ft,Se));let wr=!1,ni=!1,Mi=!1,Je=Ft.getUniforms(),Lt=Se.uniforms;if(q.useProgram(Ft.program)&&(wr=!0,ni=!0,Mi=!0),B.id!==X&&(X=B.id,ni=!0),wr||J!==v){q.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Je.setValue(A,"projectionMatrix",v.projectionMatrix),Je.setValue(A,"viewMatrix",v.matrixWorldInverse);let wt=Je.map.cameraPosition;wt!==void 0&&wt.setValue(A,tn.setFromMatrixPosition(v.matrixWorld)),je.logarithmicDepthBuffer&&Je.setValue(A,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Je.setValue(A,"isOrthographic",v.isOrthographicCamera===!0),J!==v&&(J=v,ni=!0,Mi=!0)}if(Se.needsLights&&(Vt.state.sunShadowMap.length>0&&Je.setValue(A,"sunShadowMap",Vt.state.sunShadowMap,Ne),Vt.state.directionalShadowMap.length>0&&Je.setValue(A,"directionalShadowMap",Vt.state.directionalShadowMap,Ne),Vt.state.spotShadowMap.length>0&&Je.setValue(A,"spotShadowMap",Vt.state.spotShadowMap,Ne),Vt.state.pointShadowMap.length>0&&Je.setValue(A,"pointShadowMap",Vt.state.pointShadowMap,Ne)),k.isSkinnedMesh){Je.setOptional(A,k,"bindMatrix"),Je.setOptional(A,k,"bindMatrixInverse");let ft=k.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),Je.setValue(A,"boneTexture",ft.boneTexture,Ne))}k.isBatchedMesh&&(Je.setOptional(A,k,"batchingTexture"),Je.setValue(A,"batchingTexture",k._matricesTexture,Ne),Je.setOptional(A,k,"batchingIdTexture"),Je.setValue(A,"batchingIdTexture",k._indirectTexture,Ne),Je.setOptional(A,k,"batchingColorTexture"),k._colorsTexture!==null&&Je.setValue(A,"batchingColorTexture",k._colorsTexture,Ne));let fn=W.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&Q.update(k,W,Ft),(ni||Se.receiveShadow!==k.receiveShadow)&&(Se.receiveShadow=k.receiveShadow,Je.setValue(A,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&D.environment!==null&&(Lt.envMapIntensity.value=D.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=Y0()),ni){if(Je.setValue(A,"toneMappingExposure",P.toneMappingExposure),Se.needsLights&&ed(Lt,Mi),de&&B.fog===!0&&re.refreshFogUniforms(Lt,de),re.refreshMaterialUniforms(Lt,B,pe,Re,E.state.transmissionRenderTarget[v.id]),Se.needsLights&&Se.numLightProbeGrids>0){let ft=_,wt=0;for(let Nn of E.state.lightProbeGridArray)Nn.texture!==null&&(ft.textures[wt]=Nn.texture,ft.min[wt]=Nn.boundingBox.min,ft.max[wt]=Nn.boundingBox.max,ft.resolution[wt]=Nn.resolution,wt++);for(let Nn in ft)ft[Nn].length=wt;Lt.probesSH.value=ft.textures,Lt.probesMin.value=ft.min,Lt.probesMax.value=ft.max,Lt.probesResolution.value=ft.resolution}As.upload(A,Dc(Se),Lt,Ne)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(As.upload(A,Dc(Se),Lt,Ne),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Je.setValue(A,"center",k.center),Je.setValue(A,"modelViewMatrix",k.modelViewMatrix),Je.setValue(A,"normalMatrix",k.normalMatrix),Je.setValue(A,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){let ft=B.uniformsGroups;for(let wt=0,Nn=ft.length;wt<Nn;wt++){let Fc=ft[wt];Ee.update(Fc,Ft),Ee.bind(Fc,Ft)}}return Ft}function ed(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.sunLights.needsUpdate=D,v.sunLightShadows.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function td(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(v,D,W){let B=Pe.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Pe.get(v.texture).__webglTexture=D,Pe.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:W,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){let W=Pe.get(v);W.__webglFramebuffer=D,W.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(v,D=0,W=0){te=v,V=D,G=W;let B=null,k=!1,de=!1;if(v){let ce=Pe.get(v);if(ce.__useDefaultFramebuffer!==void 0){q.bindFramebuffer(A.FRAMEBUFFER,ce.__webglFramebuffer),ee.copy(v.viewport),xe.copy(v.scissor),be=v.scissorTest,q.viewport(ee),q.scissor(xe),q.setScissorTest(be),X=-1;return}else if(ce.__webglFramebuffer===void 0)Ne.setupRenderTarget(v);else if(ce.__hasExternalTextures)Ne.rebindTextures(v,Pe.get(v.texture).__webglTexture,Pe.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ue=v.depthTexture;if(ce.__boundDepthTexture!==Ue){if(Ue!==null&&Pe.has(Ue)&&(v.width!==Ue.image.width||v.height!==Ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(v)}}let ye=v.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(de=!0);let _e=Pe.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(_e[D])?B=_e[D][W]:B=_e[D],k=!0):v.samples>0&&Ne.useMultisampledRTT(v)===!1?B=Pe.get(v).__webglMultisampledFramebuffer:Array.isArray(_e)?B=_e[W]:B=_e,ee.copy(v.viewport),xe.copy(v.scissor),be=v.scissorTest}else ee.copy(Ce).multiplyScalar(pe).floor(),xe.copy(Xe).multiplyScalar(pe).floor(),be=$e;if(W!==0&&(B=O),q.bindFramebuffer(A.FRAMEBUFFER,B)&&q.drawBuffers(v,B),q.viewport(ee),q.scissor(xe),q.setScissorTest(be),k){let ce=Pe.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+D,ce.__webglTexture,W)}else if(de){let ce=D;for(let ye=0;ye<v.textures.length;ye++){let _e=Pe.get(v.textures[ye]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+ye,_e.__webglTexture,W,ce)}}else if(v!==null&&W!==0){let ce=Pe.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ce.__webglTexture,W)}X=-1};function Uc(v){let D=Pe.get(v);return(D.__readFormat!==v.format||D.__readType!==v.type)&&(D.__readFormat=v.format,D.__readType=v.type,D.__formatReadable=je.textureFormatReadable(v.format),D.__typeReadable=je.textureTypeReadable(v.type)),D}this.readRenderTargetPixels=function(v,D,W,B,k,de,ve,ce=0){if(!(v&&v.isWebGLRenderTarget)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Pe.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ve!==void 0&&(ye=ye[ve],Array.isArray(ye)&&(ye=ye[0])),ye){q.bindFramebuffer(A.FRAMEBUFFER,ye);try{let _e=v.textures[ce],Ue=_e.format,qe=_e.type;v.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+ce);let Me=Uc(_e);if(Me.__formatReadable===!1){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Me.__typeReadable===!1){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-B&&W>=0&&W<=v.height-k&&A.readPixels(D,W,B,k,se.convert(Ue),se.convert(qe),de)}finally{let _e=te!==null?Pe.get(te).__webglFramebuffer:null;q.bindFramebuffer(A.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(v,D,W,B,k,de,ve,ce=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Pe.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ve!==void 0&&(ye=ye[ve],Array.isArray(ye)&&(ye=ye[0])),ye)if(D>=0&&D<=v.width-B&&W>=0&&W<=v.height-k){q.bindFramebuffer(A.FRAMEBUFFER,ye);let _e=v.textures[ce],Ue=_e.format,qe=_e.type;v.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+ce);let Me=Uc(_e);if(Me.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Me.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ye=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ye),A.bufferData(A.PIXEL_PACK_BUFFER,de.byteLength,A.STREAM_READ),A.readPixels(D,W,B,k,se.convert(Ue),se.convert(qe),0),A.bindBuffer(A.PIXEL_PACK_BUFFER,null);let vt=te!==null?Pe.get(te).__webglFramebuffer:null;q.bindFramebuffer(A.FRAMEBUFFER,vt);let at=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await su(A,at,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Ye),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,de),A.bindBuffer(A.PIXEL_PACK_BUFFER,null),A.deleteBuffer(Ye),A.deleteSync(at),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,W=0){let B=Math.pow(2,-W),k=Math.floor(v.image.width*B),de=Math.floor(v.image.height*B),ve=D!==null?D.x:0,ce=D!==null?D.y:0;Ne.setTexture2D(v,0),A.copyTexSubImage2D(A.TEXTURE_2D,W,0,0,ve,ce,k,de),q.unbindTexture()},this.copyTextureToTexture=function(v,D,W=null,B=null,k=0,de=0){let ve,ce,ye,_e,Ue,qe,Me,Ye,vt,at=v.isCompressedTexture?v.mipmaps[de]:v.image;if(W!==null)ve=W.max.x-W.min.x,ce=W.max.y-W.min.y,ye=W.isBox3?W.max.z-W.min.z:1,_e=W.min.x,Ue=W.min.y,qe=W.isBox3?W.min.z:0;else{let Je=Math.pow(2,-k);ve=Math.floor(at.width*Je),ce=Math.floor(at.height*Je),v.isDataArrayTexture?ye=at.depth:v.isData3DTexture?ye=Math.floor(at.depth*Je):ye=1,_e=0,Ue=0,qe=0}B!==null?(Me=B.x,Ye=B.y,vt=B.z):(Me=0,Ye=0,vt=0);let it=se.convert(D.format),Ut=se.convert(D.type),Se;D.isData3DTexture?(Ne.setTexture3D(D,0),Se=A.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Ne.setTexture2DArray(D,0),Se=A.TEXTURE_2D_ARRAY):(Ne.setTexture2D(D,0),Se=A.TEXTURE_2D),q.activeTexture(A.TEXTURE0),q.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,D.flipY),q.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),q.pixelStorei(A.UNPACK_ALIGNMENT,D.unpackAlignment);let Vt=q.getParameter(A.UNPACK_ROW_LENGTH),Qe=q.getParameter(A.UNPACK_IMAGE_HEIGHT),vi=q.getParameter(A.UNPACK_SKIP_PIXELS),Ft=q.getParameter(A.UNPACK_SKIP_ROWS),wr=q.getParameter(A.UNPACK_SKIP_IMAGES);q.pixelStorei(A.UNPACK_ROW_LENGTH,at.width),q.pixelStorei(A.UNPACK_IMAGE_HEIGHT,at.height),q.pixelStorei(A.UNPACK_SKIP_PIXELS,_e),q.pixelStorei(A.UNPACK_SKIP_ROWS,Ue),q.pixelStorei(A.UNPACK_SKIP_IMAGES,qe);let ni=v.isDataArrayTexture||v.isData3DTexture,Mi=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){let Je=Pe.get(v),Lt=Pe.get(D),fn=Pe.get(Je.__renderTarget),ft=Pe.get(Lt.__renderTarget);q.bindFramebuffer(A.READ_FRAMEBUFFER,fn.__webglFramebuffer),q.bindFramebuffer(A.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let wt=0;wt<ye;wt++)ni&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Pe.get(v).__webglTexture,k,qe+wt),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Pe.get(D).__webglTexture,de,vt+wt)),A.blitFramebuffer(_e,Ue,_e+ve,Ue+ce,Me,Ye,Me+ve,Ye+ce,A.DEPTH_BUFFER_BIT,A.NEAREST);q.bindFramebuffer(A.READ_FRAMEBUFFER,null),q.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(k!==0||v.isRenderTargetTexture||Pe.has(v)){let Je=Pe.get(v),Lt=Pe.get(D);q.bindFramebuffer(A.READ_FRAMEBUFFER,C),q.bindFramebuffer(A.DRAW_FRAMEBUFFER,H);for(let fn=0;fn<ye;fn++)ni?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Je.__webglTexture,k,qe+fn):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Je.__webglTexture,k),Mi?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Lt.__webglTexture,de,vt+fn):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Lt.__webglTexture,de),k!==0?A.blitFramebuffer(_e,Ue,_e+ve,Ue+ce,Me,Ye,Me+ve,Ye+ce,A.COLOR_BUFFER_BIT,A.NEAREST):Mi?A.copyTexSubImage3D(Se,de,Me,Ye,vt+fn,_e,Ue,ve,ce):A.copyTexSubImage2D(Se,de,Me,Ye,_e,Ue,ve,ce);q.bindFramebuffer(A.READ_FRAMEBUFFER,null),q.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Mi?v.isDataTexture||v.isData3DTexture?A.texSubImage3D(Se,de,Me,Ye,vt,ve,ce,ye,it,Ut,at.data):D.isCompressedArrayTexture?A.compressedTexSubImage3D(Se,de,Me,Ye,vt,ve,ce,ye,it,at.data):A.texSubImage3D(Se,de,Me,Ye,vt,ve,ce,ye,it,Ut,at):v.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,de,Me,Ye,ve,ce,it,Ut,at.data):v.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,de,Me,Ye,at.width,at.height,it,at.data):A.texSubImage2D(A.TEXTURE_2D,de,Me,Ye,ve,ce,it,Ut,at);q.pixelStorei(A.UNPACK_ROW_LENGTH,Vt),q.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Qe),q.pixelStorei(A.UNPACK_SKIP_PIXELS,vi),q.pixelStorei(A.UNPACK_SKIP_ROWS,Ft),q.pixelStorei(A.UNPACK_SKIP_IMAGES,wr),de===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&A.generateMipmap(Se),q.unbindTexture()},this.initRenderTarget=function(v){Pe.get(v).__webglFramebuffer===void 0&&Ne.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Ne.setTextureCube(v,0):v.isData3DTexture?Ne.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Ne.setTexture2DArray(v,0):Ne.setTexture2D(v,0),q.unbindTexture()},this.resetState=function(){V=0,G=0,te=null,q.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}};function Jl(i,e){if(e===Al)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Es||e===Mr){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Es)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Gu(i){let e=new Map,t=new Map,n=i.clone();return Vu(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Vu(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Vu(i.children[n],e.children[n],t)}var yo=class extends yn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ic(t)}),this.register(function(t){return new sc(t)}),this.register(function(t){return new rc(t)}),this.register(function(t){return new pc(t)}),this.register(function(t){return new mc(t)}),this.register(function(t){return new gc(t)}),this.register(function(t){return new oc(t)}),this.register(function(t){return new lc(t)}),this.register(function(t){return new cc(t)}),this.register(function(t){return new hc(t)}),this.register(function(t){return new nc(t)}),this.register(function(t){return new uc(t)}),this.register(function(t){return new ac(t)}),this.register(function(t){return new fc(t)}),this.register(function(t){return new dc(t)}),this.register(function(t){return new ec(t)}),this.register(function(t){return new vo(t,Ve.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new vo(t,Ve.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new xc(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Qn.extractUrlBase(e);a=Qn.resolveURL(c,this.path)}else a=Qn.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Li(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Zu){try{a[Ve.KHR_BINARY_GLTF]=new yc(e)}catch(d){s&&s(d);return}r=JSON.parse(a[Ve.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Ec(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case Ve.KHR_MATERIALS_UNLIT:a[d]=new tc;break;case Ve.KHR_DRACO_MESH_COMPRESSION:a[d]=new vc(r,this.dracoLoader);break;case Ve.KHR_TEXTURE_TRANSFORM:a[d]=new Mc;break;case Ve.KHR_MESH_QUANTIZATION:a[d]=new Sc;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function K0(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function pt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ec=class{constructor(e){this.parser=e,this.name=Ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new we(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],_t);let d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new pi(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new hr(h),c.distance=d;break;case"spot":c=new cr(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Dn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},tc=class{constructor(){this.name=Ve.KHR_MATERIALS_UNLIT}getMaterialType(){return Tn}extendParams(e,t,n){let s=[];e.color=new we(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],_t),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,mt))}return Promise.all(s)}},nc=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},ic=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return pt(this.parser,e,this.name)!==null?Pt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(r,r)}return Promise.all(s)}},sc=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return pt(this.parser,e,this.name)!==null?Pt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},rc=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_DISPERSION}getMaterialType(e){return pt(this.parser,e,this.name)!==null?Pt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},ac=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return pt(this.parser,e,this.name)!==null?Pt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},oc=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SHEEN}getMaterialType(e){return pt(this.parser,e,this.name)!==null?Pt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],_t)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,mt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},lc=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return pt(this.parser,e,this.name)!==null?Pt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},cc=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_VOLUME}getMaterialType(e){return pt(this.parser,e,this.name)!==null?Pt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(r[0],r[1],r[2],_t),Promise.all(s)}},hc=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IOR}getMaterialType(e){return pt(this.parser,e,this.name)!==null?Pt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},uc=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SPECULAR}getMaterialType(e){return pt(this.parser,e,this.name)!==null?Pt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(r[0],r[1],r[2],_t),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,mt)),Promise.all(s)}},dc=class{constructor(e){this.parser=e,this.name=Ve.EXT_MATERIALS_BUMP}getMaterialType(e){return pt(this.parser,e,this.name)!==null?Pt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},fc=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return pt(this.parser,e,this.name)!==null?Pt:null}extendMaterialParams(e,t){let n=pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},pc=class{constructor(e){this.parser=e,this.name=Ve.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},mc=class{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},gc=class{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},vo=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,d=s.byteStride,u=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(f),h,d,u,s.mode,s.filter),f})})}else return null}},xc=class{constructor(e){this.name=Ve.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==dn.TRIANGLES&&c.mode!==dn.TRIANGLE_STRIP&&c.mode!==dn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,f=[];for(let x of d){let M=new Fe,p=new F,m=new an,b=new F(1,1,1),w=new Js(x.geometry,x.material,u);for(let R=0;R<u;R++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,R),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,R),l.SCALE&&b.fromBufferAttribute(l.SCALE,R),w.setMatrixAt(R,M.compose(p,m,b));let _=null;for(let R in l)if(R==="_COLOR_0"){let E=l[R];w.instanceColor=new Xn(E.array,E.itemSize,E.normalized)}else if(R!=="TRANSLATION"&&R!=="ROTATION"&&R!=="SCALE"){if(_===null){let g=w.geometry;_=new jt,_.name=g.name;for(let S in g.attributes)_.setAttribute(S,g.attributes[S]);for(let S in g.morphAttributes)_.morphAttributes[S]=g.morphAttributes[S];g.index!==null&&_.setIndex(g.index),_.morphTargetsRelative=g.morphTargetsRelative;for(let S of g.groups)_.addGroup(S.start,S.count,S.materialIndex);g.boundingBox!==null&&(_.boundingBox=g.boundingBox.clone()),g.boundingSphere!==null&&(_.boundingSphere=g.boundingSphere.clone()),_.drawRange.start=g.drawRange.start,_.drawRange.count=g.drawRange.count,_.userData=Object.assign({},g.userData),w.geometry=_}let E=l[R];_.setAttribute(R,new Xn(E.array,E.itemSize,E.normalized))}ct.prototype.copy.call(w,x),this.parser.assignFinalMaterial(w),f.push(w)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Zu="glTF",Er=12,Wu={JSON:1313821514,BIN:5130562},yc=class{constructor(e){this.name=Ve.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Er),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Zu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Er,r=new DataView(e,Er),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Wu.JSON){let c=new Uint8Array(e,Er+a,o);this.content=n.decode(c)}else if(l===Wu.BIN){let c=Er+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},vc=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ve.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let d=_c[h]||h.toLowerCase();o[d]=a[h]}for(let h in e.attributes){let d=_c[h]||h.toLowerCase();if(a[h]!==void 0){let u=n.accessors[e.attributes[h]],f=Rs[u.componentType];c[d]=f.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){s.decodeDracoFile(h,function(f){for(let x in f.attributes){let M=f.attributes[x],p=l[x];p!==void 0&&(M.normalized=p)}d(f)},o,c,_t,u)})})}},Mc=class{constructor(){this.name=Ve.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Sc=class{constructor(){this.name=Ve.KHR_MESH_QUANTIZATION}},Mo=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,d=(n-t)/h,u=d*d,f=u*d,x=e*c,M=x-c,p=-2*f+3*u,m=f-u,b=1-p,w=m-u+d;for(let _=0;_!==o;_++){let R=a[M+_+o],E=a[M+_+l]*h,g=a[x+_+o],S=a[x+_]*h;r[_]=b*R+w*E+p*g+m*S}return r}},J0=new an,bc=class extends Mo{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return J0.fromArray(r).normalize().toArray(r),r}},dn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Rs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Xu={9728:xt,9729:ot,9984:Aa,9985:_s,9986:zi,9987:ln},qu={33071:Kt,33648:os,10497:bn},jl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_c={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},j0={CUBICSPLINE:void 0,LINEAR:wi,STEP:Ai},Ql={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Q0(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Yn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Rn})),i.DefaultMaterial}function Wi(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Dn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function $0(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let d=e[c];if(n){let u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;a.push(u)}if(s){let u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;o.push(u)}if(r){let u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],d=c[1],u=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=d),r&&(i.morphAttributes.color=u),i.morphTargetsRelative=!0,i})}function ex(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function tx(i){let e,t=i.extensions&&i.extensions[Ve.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+$l(t.attributes):e=i.indices+":"+$l(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+$l(i.targets[n]);return e}function $l(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Tc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function nx(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var ix=new Fe,Ec=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new K0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?(this.textureLoader=new fi(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new ur(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Li(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Wi(r,o,s),Dn(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Qn.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=jl[s.type],o=Rs[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Dt(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=jl[s.type],c=Rs[s.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,x=s.normalized===!0,M,p;if(f&&f!==d){let m=Math.floor(u/f),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,w=t.cache.get(b);w||(M=new c(o,m*f,s.count*f/h),w=new fs(M,f/h),t.cache.add(b,w)),p=new ps(w,l,u%f/h,x)}else o===null?M=new c(s.count*l):M=new c(o,u,s.count*l),p=new Dt(M,l,x);if(s.sparse!==void 0){let m=jl.SCALAR,b=Rs[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,R=new b(a[1],w,s.sparse.count*m),E=new c(a[2],_,s.sparse.count*l);o!==null&&(p=new Dt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let g=0,S=R.length;g<S;g++){let N=R[g];if(p.setX(N,E[g*l]),l>=2&&p.setY(N,E[g*l+1]),l>=3&&p.setZ(N,E[g*l+2]),l>=4&&p.setW(N,E[g*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=x}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let u=(r.samplers||{})[a.sampler]||{};return h.magFilter=Xu[u.magFilter]||ot,h.minFilter=Xu[u.minFilter]||ln,h.wrapS=qu[u.wrapS]||bn,h.wrapT=qu[u.wrapT]||bn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==xt&&h.minFilter!==ot,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(u){return new Promise(function(f,x){t.parse(u,f,x)})});else{if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(u){return new Promise(function(f,x){let M=f;t.isImageBitmapLoader===!0&&(M=function(p){let m=new St(p);m.needsUpdate=!0,f(m)}),t.load(Qn.resolveURL(u,r.path),M,void 0,x)})})}let d=h.then(function(u){return c===!0&&o.revokeObjectURL(l),Dn(u,a),u.userData.mimeType=a.mimeType||nx(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=d,d}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ve.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ve.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new xs,qt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new gs,qt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Yn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Ve.KHR_MATERIALS_UNLIT]){let d=s[Ve.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,r,t))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new we(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],_t),o.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,mt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=un);let h=r.alphaMode||Ql.OPAQUE;if(h===Ql.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ql.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Tn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Be(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==Tn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Tn){let d=r.emissiveFactor;o.emissive=new we().setRGB(d[0],d[1],d[2],_t)}return r.emissiveTexture!==void 0&&a!==Tn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,mt)),Promise.all(c).then(function(){let d=new a(o);return r.name&&(d.name=r.name),Dn(d,r),t.associations.set(d,{materials:e}),r.extensions&&Wi(s,d,r),d})}createUniqueName(e){let t=st.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Yu(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=tx(c),d=s[h];if(d)a.push(d.promise);else{let u;c.extensions&&c.extensions[Ve.KHR_DRACO_MESH_COMPRESSION]?u=r(c):u=Yu(new jt,c,t),c.mode===dn.TRIANGLE_STRIP?u=u.then(f=>Jl(f,Mr)):c.mode===dn.TRIANGLE_FAN&&(u=u.then(f=>Jl(f,Es))),s[h]={primitive:c,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?Q0(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let f=0,x=h.length;f<x;f++){let M=h[f],p=a[f],m,b=c[f];if(p.mode===dn.TRIANGLES||p.mode===dn.TRIANGLE_STRIP||p.mode===dn.TRIANGLE_FAN||p.mode===void 0){let w=r.isSkinnedMesh===!0,_=M.hasAttribute("skinIndex")&&M.hasAttribute("skinWeight");w&&_===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=w&&_?new Zs(M,b):new Ct(M,b),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(p.mode===dn.LINES)m=new js(M,b);else if(p.mode===dn.LINE_STRIP)m=new Pi(M,b);else if(p.mode===dn.LINE_LOOP)m=new Qs(M,b);else if(p.mode===dn.POINTS)m=new $s(M,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&ex(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Dn(m,r),p.extensions&&Wi(s,m,p),t.assignFinalMaterial(m),d.push(m)}for(let f=0,x=d.length;f<x;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&Wi(s,d[0],r),d[0];let u=new rn;r.extensions&&Wi(s,u,r),t.associations.set(u,{meshes:e});for(let f=0,x=d.length;f<x;f++)u.add(d[f]);return u})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new bt(Hi.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ni(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Dn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let d=a[c];if(d){o.push(d);let u=new Fe;r!==null&&u.fromArray(r.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ks(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let d=0,u=s.channels.length;d<u;d++){let f=s.channels[d],x=s.samplers[f.sampler],M=f.target,p=M.node,m=s.parameters!==void 0?s.parameters[x.input]:x.input,b=s.parameters!==void 0?s.parameters[x.output]:x.output;M.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",b)),c.push(x),h.push(M))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){let u=d[0],f=d[1],x=d[2],M=d[3],p=d[4],m=[];for(let w=0,_=u.length;w<_;w++){let R=u[w],E=f[w],g=x[w],S=M[w],N=p[w];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();let P=n._createAnimationTracks(R,E,g,S,N);if(P)for(let L=0;L<P.length;L++)m.push(P[L])}let b=new rr(r,void 0,m);return Dn(b,s),b})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,ix)});for(let f=0,x=d.length;f<x;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){let f=h.userData.pivot,x=d[0];h.pivot=new F().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],x.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new ms:c.length>1?h=new rn:c.length===1?h=c[0]:h=new ct,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=a),Dn(h,r),r.extensions&&Wi(n,h,r),r.matrix!==void 0){let d=new Fe;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let d=s.associations.get(h);s.associations.set(h,{...d})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new rn;n.name&&(r.name=s.createUniqueName(n.name)),Dn(r,n),n.extensions&&Wi(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,d=l.length;h<d;h++){let u=l[h];u.parent!==null?r.add(Gu(u)):r.add(u)}let c=h=>{let d=new Map;for(let[u,f]of s.associations)(u instanceof qt||u instanceof St)&&d.set(u,f);return h.traverse(u=>{let f=s.associations.get(u);f!=null&&d.set(u,f)}),d};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}xi[r.path]===xi.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(xi[r.path]){case xi.weights:h=Kn;break;case xi.rotation:h=Jn;break;case xi.translation:case xi.scale:h=di;break;default:n.itemSize===1?h=Kn:h=di;break}let d=s.interpolation!==void 0?j0[s.interpolation]:wi,u=this._getArrayFromAccessor(n);for(let f=0,x=l.length;f<x;f++){let M=new h(l[f]+"."+xi[r.path],t.array,u,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),a.push(M)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Tc(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Jn?bc:Mo;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function sx(i,e,t){let n=e.attributes,s=new Xt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),o.normalized){let h=Tc(Rs[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new F,l=new F;for(let c=0,h=r.length;c<h;c++){let d=r[c];if(d.POSITION!==void 0){let u=t.json.accessors[d.POSITION],f=u.min,x=u.max;if(f!==void 0&&x!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(x[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(x[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(x[2]))),u.normalized){let M=Tc(Rs[u.componentType]);l.multiplyScalar(M)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Jt;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Yu(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=_c[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Ge.workingColorSpace!==_t&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ge.workingColorSpace}" not supported.`),Dn(i,e),sx(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?$0(i,e.targets,t):i})}var So=class extends ar{constructor(e){super(e),this.type=Zt}parse(e){let a=function(S,N){switch(S){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(N||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(N||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(N||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(N||""))}},d=function(S,N,P){N=N||1024;let U=S.pos,O=-1,C=0,H="",V=String.fromCharCode.apply(null,new Uint16Array(S.subarray(U,U+128)));for(;0>(O=V.indexOf(`
`))&&C<N&&U<S.byteLength;)H+=V,C+=V.length,U+=128,V=String.fromCharCode.apply(null,new Uint16Array(S.subarray(U,U+128)));return-1<O?(P!==!1&&(S.pos+=C+O+1),H+V.slice(0,O)):!1},u=function(S){let N=/^#\?(\S+)/,P=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,U=/^\s*FORMAT=(\S+)\s*$/,O=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,C={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},H,V;for((S.pos>=S.byteLength||!(H=d(S)))&&a(1,"no header found"),(V=H.match(N))||a(3,"bad initial token"),C.valid|=1,C.programtype=V[1],C.string+=H+`
`;H=d(S),H!==!1;){if(C.string+=H+`
`,H.charAt(0)==="#"){C.comments+=H+`
`;continue}if((V=H.match(P))&&(C.gamma=parseFloat(V[1])),(V=H.match(L))&&(C.exposure=parseFloat(V[1])),(V=H.match(U))&&(C.valid|=2,C.format=V[1]),(V=H.match(O))&&(C.valid|=4,C.height=parseInt(V[1],10),C.width=parseInt(V[2],10)),C.valid&2&&C.valid&4)break}return C.valid&2||a(3,"missing format specifier"),C.valid&4||a(3,"missing image size specifier"),C},f=function(S,N,P){let L=N;if(L<8||L>32767||S[0]!==2||S[1]!==2||S[2]&128)return new Uint8Array(S);L!==(S[2]<<8|S[3])&&a(3,"wrong scanline width");let U=new Uint8Array(4*N*P);U.length||a(4,"unable to allocate buffer space");let O=0,C=0,H=4*L,V=new Uint8Array(4),G=new Uint8Array(H),te=P;for(;te>0&&C<S.byteLength;){C+4>S.byteLength&&a(1),V[0]=S[C++],V[1]=S[C++],V[2]=S[C++],V[3]=S[C++],(V[0]!=2||V[1]!=2||(V[2]<<8|V[3])!=L)&&a(3,"bad rgbe scanline format");let X=0,J;for(;X<H&&C<S.byteLength;){J=S[C++];let xe=J>128;if(xe&&(J-=128),(J===0||X+J>H)&&a(3,"bad scanline data"),xe){let be=S[C++];for(let Z=0;Z<J;Z++)G[X++]=be}else G.set(S.subarray(C,C+J),X),X+=J,C+=J}let ee=L;for(let xe=0;xe<ee;xe++){let be=0;U[O]=G[xe+be],be+=L,U[O+1]=G[xe+be],be+=L,U[O+2]=G[xe+be],be+=L,U[O+3]=G[xe+be],O+=4}te--}return U},x=function(S,N,P,L){let U=S[N+3],O=Math.pow(2,U-128)/255;P[L+0]=S[N+0]*O,P[L+1]=S[N+1]*O,P[L+2]=S[N+2]*O,P[L+3]=1},M=function(S,N,P,L){let U=S[N+3],O=Math.pow(2,U-128)/255;P[L+0]=hi.toHalfFloat(Math.min(S[N+0]*O,65504)),P[L+1]=hi.toHalfFloat(Math.min(S[N+1]*O,65504)),P[L+2]=hi.toHalfFloat(Math.min(S[N+2]*O,65504)),P[L+3]=hi.toHalfFloat(1)},p=new Uint8Array(e);p.pos=0;let m=u(p),b=m.width,w=m.height,_=f(p.subarray(p.pos),b,w),R,E,g;switch(this.type){case It:g=_.length/4;let S=new Float32Array(g*4);for(let P=0;P<g;P++)x(_,P*4,S,P*4);R=S,E=It;break;case Zt:g=_.length/4;let N=new Uint16Array(g*4);for(let P=0;P<g;P++)M(_,P*4,N,P*4);R=N,E=Zt;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:b,height:w,data:R,header:m.string,gamma:m.gamma,exposure:m.exposure,type:E,colorSpace:_t,minFilter:ot,magFilter:ot,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};function rx(i,e){if(e){e.mapping=Bi;let c=new Vi(i),h=c.fromEquirectangular(e);return e.dispose(),c.dispose(),h}let t=1024,n=512,s=new Float32Array(t*n*4),r=[{u:.13,v:.38,su:.038,sv:.2,power:5,tint:[1,.94,.86]},{u:.64,v:.43,su:.052,sv:.26,power:3.2,tint:[.83,.91,1]},{u:.88,v:.23,su:.16,sv:.09,power:2.4,tint:[1,1,1]}];for(let c=0;c<n;c++)for(let h=0;h<t;h++){let d=h/(t-1),u=c/(n-1),f=(c*t+h)*4,x=.045+.065*Math.max(0,Math.sin(u*Math.PI));s[f]=s[f+1]=s[f+2]=x;for(let M of r){let p=Math.min(Math.abs(d-M.u),1-Math.abs(d-M.u)),m=Math.exp(-((p/M.su)**8+((u-M.v)/M.sv)**8))*M.power;for(let b=0;b<3;b++)s[f+b]+=m*M.tint[b]}s[f+3]=1}let a=new En(s,t,n,en,It);a.mapping=Bi,a.colorSpace=_t,a.needsUpdate=!0;let o=new Vi(i),l=o.fromEquirectangular(a);return a.dispose(),o.dispose(),l}function ax(i){return i instanceof Pt?i.clone():new Pt({name:i.name,color:i.color.clone(),metalness:i.metalness,roughness:i.roughness,map:i.map,normalMap:i.normalMap,roughnessMap:i.roughnessMap,metalnessMap:i.metalnessMap,emissive:i.emissive.clone(),emissiveMap:i.emissiveMap,emissiveIntensity:i.emissiveIntensity,transparent:i.transparent,opacity:i.opacity,side:i.side})}function Ku(i){i.computeBoundingBox();let e=i.boundingBox;if(!e)return;let t=e.getSize(new F),n=t.y>t.z?1:2,s=n===1?e.min.y:e.min.z,r=n===1?t.y:t.z;if(!r||!t.x)return;let a=i.attributes.position,o=new Float32Array(a.count*2);for(let l=0;l<a.count;l++)o[l*2]=(a.getX(l)-e.min.x)/t.x,o[l*2+1]=((n===1?a.getY(l):a.getZ(l))-s)/r;i.setAttribute("uv",new Nt(o,2))}async function Ju(i,e){let[t,n,s,r]=await Promise.all([new yo().loadAsync(e.modelUrl),e.opticsUrl?new fi().loadAsync(e.opticsUrl).catch(()=>null):Promise.resolve(null),e.surfaceUrl?new fi().loadAsync(e.surfaceUrl).catch(()=>null):Promise.resolve(null),e.environmentUrl?new So().loadAsync(e.environmentUrl).catch(()=>null):Promise.resolve(null)]);n&&(n.colorSpace=mt,n.anisotropy=4),s&&(s.wrapS=s.wrapT=bn,s.repeat.set(2,4),s.anisotropy=4),t.scene.updateMatrixWorld(!0);let a=t.scene.getObjectByName("PremiumPhone18_Demonstration");if(!a)throw new Error("Expected product root is absent");a.removeFromParent(),a.updateMatrixWorld(!0);let o=new Xt().setFromObject(a),l=o.getSize(new F);if(l.z>l.y&&l.z>l.x&&(a.rotateX(-Math.PI/2),a.updateMatrixWorld(!0),o.setFromObject(a),l=o.getSize(new F)),l.y<=0||!Number.isFinite(l.y))throw new Error("Invalid model bounds");a.scale.multiplyScalar(4.12/l.y),a.updateMatrixWorld(!0),o.setFromObject(a),a.position.sub(o.getCenter(new F));let c=new rn;c.add(a);let h=[],d=new Set,u=new Set,f=new Set;n&&f.add(n),s&&f.add(s);let x=0;if(a.traverse(A=>{if(!(A instanceof Ct))return;x++,A.castShadow=!0,A.receiveShadow=!1,u.add(A.geometry);let Ze=(Array.isArray(A.material)?A.material:[A.material]).map(je=>{if(!(je instanceof Yn))return je;let q=ax(je);d.add(q);for(let Ke of Object.values(q))Ke instanceof St&&f.add(Ke);return(q.name.startsWith("FINISH_")||q.name==="POLISHED_CHAMFER")&&(h.push(q),q.name.includes("FRAME")||q.name.includes("DECK")?(q.metalness=.8,q.roughness=.48,q.clearcoat=.1,q.anisotropy=.3,q.envMapIntensity=.9):q.name==="POLISHED_CHAMFER"?(q.metalness=1,q.roughness=.24,q.envMapIntensity=1):(q.metalness=.12,q.roughness=.29,q.clearcoat=.65,q.clearcoatRoughness=.2,q.envMapIntensity=1),s&&q.name.startsWith("FINISH_")&&(Ku(A.geometry),q.roughnessMap=s,q.bumpMap=s,q.bumpScale=q.name.includes("BACK")?4e-5:18e-5)),q.name.startsWith("OPTICAL_GLASS")&&(q.color.set("#172334"),q.metalness=0,q.roughness=.045,q.clearcoat=.45,q.transmission=.18,q.thickness=.045,q.ior=1.62,q.iridescence=.15,q.iridescenceIOR=1.33,q.iridescenceThicknessRange=[100,250],q.envMapIntensity=.85),n&&A.name.includes("aspheric_coated_cover")&&(Ku(A.geometry),q.map=n,q.color.set("#ffffff"),q.metalness=.12,q.roughness=.18,q.transmission=.08,q.clearcoat=.75,q.clearcoatRoughness=.08,q.iridescence=.08),q.name==="ANTENNA_POLYMER"&&q.color.set("#28292b"),q});A.material=Array.isArray(A.material)?Ze:Ze[0]}),!h.length)throw new Error("Model has no configurable finish materials");let M=document.createElement("canvas");M.className="product-canvas",M.setAttribute("aria-hidden","true");let p=new mo({canvas:M,alpha:!0,antialias:!0,powerPreference:"low-power"}),m=Math.min(devicePixelRatio,innerWidth<700?1.25:1.5);p.setPixelRatio(m),p.setClearColor(0,0),p.outputColorSpace=mt,p.toneMapping=fr,p.toneMappingExposure=1,p.shadowMap.enabled=!0,p.shadowMap.type=mi;let b=new Xs;b.add(c);let w=rx(p,r);b.environment=w.texture,b.environmentIntensity=.75;let _=new pi("#fff6e8",.8);_.position.set(-3.4,5.4,4.5),_.castShadow=!0,_.shadow.mapSize.set(1024,1024),_.shadow.camera.left=-4,_.shadow.camera.right=4,_.shadow.camera.top=4,_.shadow.camera.bottom=-4,_.shadow.normalBias=.025,_.shadow.bias=-1e-4,_.shadow.radius=5,_.shadow.blurSamples=8,b.add(_);let R=new pi("#d7e5f5",.2);R.position.set(4,0,2),b.add(R),b.add(new or("#edf1f6","#151b28",.08));let E=new Ct(new Ii(12,12),new ir({color:"#000000",opacity:.07}));E.rotation.x=-Math.PI/2,E.position.y=-2.26,E.receiveShadow=!0,b.add(E);let g=new bt(31,1,.1,60);g.position.set(0,.03,9.6);let S=e.theme||"pia",N={pia:[.035,-.22,-.025],ls:[.075,-.43,-.065],ll:[.025,.12,0],londrina:[.045,-.18,.045],fg:[.035,-.36,-.025]}[S]||[.035,-.22,-.025],P=N[0],L=N[1],U=N[2],O=0,C=!0,H=!0,V=!1,G=0,te=e.reveal!==!1,X=1.15,J=1.15,ee=new we(e.finish);function xe(A){return ee.clone()}h.forEach(A=>A.color.copy(xe(A))),c.rotation.set(P,L,U);let be=matchMedia("(prefers-reduced-motion: reduce)");be.matches&&(te=!1);function Z(){te&&(te=!1,be.matches||(G=performance.now()),fe())}function he(){te=!1,G=0}function fe(){!O&&H&&C&&!document.hidden&&!V&&(O=requestAnimationFrame(Re))}function Re(){if(O=0,!H||!C||document.hidden||V)return;let A=performance.now(),lt=be.matches?1:.17;c.rotation.x+=(P-c.rotation.x)*lt,c.rotation.y+=(L-c.rotation.y)*lt,c.rotation.z+=(U-c.rotation.z)*lt;let Ze=0;if(h.forEach(q=>{let Ke=xe(q);q.color.lerp(Ke,lt),Ze+=Math.abs(q.color.r-Ke.r)+Math.abs(q.color.g-Ke.g)+Math.abs(q.color.b-Ke.b)}),X+=(J-X)*lt,b.environmentRotation.y=X,G){let q=Math.min(1,(A-G)/1150),Ke=1-(1-q)**3;c.rotation.y=L-(1-Ke)*.62,c.rotation.x=P+(1-Ke)*.08,c.position.y=-(1-Ke)*.2,c.scale.setScalar(.96+.04*Ke),M.style.opacity=String(Math.min(1,q*3)),b.environmentRotation.y=X+(1-Ke)*.055,i.dataset.reveal=q>=1?"settled":"presenting",q>=1&&(G=0)}else c.position.y=0,c.scale.setScalar(1),M.style.opacity="1";p.render(b,g),i.dataset.angle=c.rotation.y.toFixed(3),i.dataset.finish=ee.getHexString(),i.dataset.triangles=String(p.info.render.triangles),i.dataset.frames=String(Number(i.dataset.frames||0)+1),i.dataset.frameMs=(performance.now()-A).toFixed(2),(Math.abs(P-c.rotation.x)+Math.abs(L-c.rotation.y)+Math.abs(U-c.rotation.z)+Math.abs(J-X)>.002||Ze>.003||G)&&fe()}function pe(){let A=i.getBoundingClientRect();!A.width||!A.height||(p.setSize(A.width,A.height,!1),g.aspect=A.width/A.height,g.updateProjectionMatrix(),fe())}let Le=new ResizeObserver(pe);Le.observe(i);let ht=new IntersectionObserver(A=>{C=A[0]?.isIntersecting??!0,!C&&O?(cancelAnimationFrame(O),O=0):fe()},{rootMargin:"80px"});ht.observe(i);function Ce(){document.hidden&&O?(cancelAnimationFrame(O),O=0):fe()}document.addEventListener("visibilitychange",Ce);let Xe=-1,$e=0,He=0,gt=0,ut=0,yt=!1;function rt(A){!H||A.button!==0||(he(),Xe=A.pointerId,$e=gt=A.clientX,He=ut=A.clientY,yt=!1,i.focus({preventScroll:!0}))}function tn(A){if(A.pointerId!==Xe)return;let lt=A.clientX-$e,Ze=A.clientY-He;!yt&&Math.abs(lt)>5&&Math.abs(lt)>Math.abs(Ze)*1.1&&(yt=!0,i.setPointerCapture(Xe)),yt&&(L+=(A.clientX-gt)*.012,P=Hi.clamp(P+(A.clientY-ut)*.006,-.5,.5),fe()),gt=A.clientX,ut=A.clientY}function dt(A){A.pointerId===Xe&&(i.hasPointerCapture(Xe)&&i.releasePointerCapture(Xe),Xe=-1,yt=!1)}function kt(A){A.target!==i||!H||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(A.key)||(A.preventDefault(),he(),A.key==="Home"?L=N[1]:A.key==="End"?L=Math.PI-.16:A.key==="ArrowLeft"?L-=Math.PI/8:A.key==="ArrowRight"?L+=Math.PI/8:P=Hi.clamp(P+(A.key==="ArrowUp"?-.12:.12),-.5,.5),fe())}function Ht(A){A.preventDefault(),H=!1,O&&cancelAnimationFrame(O),O=0,i.dataset.renderer="fallback",e.onFail()}function Gt(){be.matches&&(he(),J=1.15),fe()}return i.addEventListener("pointerdown",rt),i.addEventListener("pointermove",tn),i.addEventListener("pointerup",dt),i.addEventListener("pointercancel",dt),i.addEventListener("keydown",kt),M.addEventListener("webglcontextlost",Ht),be.addEventListener("change",Gt),document.addEventListener("brand:intro-finished",Z),i.append(M),i.dataset.renderer="webgl",i.dataset.geometry="detailed-blender-glb",i.dataset.meshes=String(x),pe(),document.querySelector("[data-brand-intro]:not([hidden])")||Z(),fe(),{setFinish(A){ee=new we(A),J=1.15,fe()},rotate(A){he(),L+=A,fe()},setView(A){he(),P=N[0],L=A==="front"?Math.PI-.16:N[1],U=N[2],fe()},setEnabled(A){H=A,M.hidden=!A,i.dataset.renderer=A?"webgl":"fallback",!A&&O&&(cancelAnimationFrame(O),O=0),A&&fe()},async capture(){he(),h.forEach(q=>q.color.copy(xe(q))),c.rotation.set(P,L,U),c.position.y=0,c.scale.setScalar(1),M.style.opacity="1",b.environmentRotation.y=1.15;let A=p.getSize(new Be),lt=g.aspect,Ze=p.getPixelRatio();p.setPixelRatio(1),p.setSize(1e3,1200,!1),g.aspect=1e3/1200,g.updateProjectionMatrix(),p.render(b,g);let je=await new Promise(q=>M.toBlob(q,"image/png"));if(p.setPixelRatio(Ze),p.setSize(A.x,A.y,!1),g.aspect=lt,g.updateProjectionMatrix(),fe(),!(je instanceof Blob))throw new Error("Canvas export failed");return je},dispose(){V=!0,O&&cancelAnimationFrame(O),Le.disconnect(),ht.disconnect(),document.removeEventListener("visibilitychange",Ce),document.removeEventListener("brand:intro-finished",Z),be.removeEventListener("change",Gt),i.removeEventListener("pointerdown",rt),i.removeEventListener("pointermove",tn),i.removeEventListener("pointerup",dt),i.removeEventListener("pointercancel",dt),i.removeEventListener("keydown",kt),M.removeEventListener("webglcontextlost",Ht),u.forEach(A=>A.dispose()),d.forEach(A=>A.dispose()),f.forEach(A=>A.dispose()),E.geometry.dispose(),E.material.dispose(),_.shadow.dispose(),w.dispose(),p.dispose(),M.remove()}}}var AM=(i,e)=>Ju(i,{...e,opticsUrl:"data:image/webp;base64,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",surfaceUrl:"data:image/webp;base64,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"});export{AM as createProductViewer};
