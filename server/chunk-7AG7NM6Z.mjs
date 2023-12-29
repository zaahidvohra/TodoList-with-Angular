import './polyfills.server.mjs';
import{$ as Me,A as C,B as pe,C as me,D as h,E as k,F as ge,G as l,H as Y,I as T,J as K,K as ve,R as ye,S as Q,U as _e,V as Ce,W as Ve,X as be,Y as De,a as le,b as de,c as ue,d as O,da as Ae,e as N,f as p,g as A,ga as Ee,h as m,ha as ee,i as g,j as _,k as ce,l as $,m as q,n as he,o as z,p as Z,q as f,r as d,s as fe,t as v,u as D,v as y,w as J,x as X,y as s,z as a}from"./chunk-QRE744C3.mjs";import{a as V,b as M}from"./chunk-KRLCULJA.mjs";var we=t=>({strike:t}),Fe=(()=>{let e=class e{constructor(){this.todoDelete=new v,this.todoCheckbox=new v}onCheckboxClick(i){this.todoCheckbox.emit(i)}onClick(i){this.todoDelete.emit(i),console.log("On click triggered")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["app-todo-list"]],inputs:{todo:"todo"},outputs:{todoDelete:"todoDelete",todoCheckbox:"todoCheckbox"},decls:11,vars:8,consts:[[1,"my-3",2,"background-color","rgba(255, 255, 255, 0.1)","backdrop-filter","blur(10px)","border-radius","8px","padding","15px"],[2,"color","#fff","text-shadow","1px 1px 2px rgba(0, 0, 0, 0.5)",3,"ngClass"],[1,"form-check"],["type","checkbox","id","exampleCheck1",1,"form-check-input",3,"click"],["for","exampleCheck1",1,"form-check-label",2,"color","#fff","text-shadow","1px 1px 2px rgba(0, 0, 0, 0.5)"],[1,"btn","btn-sm","btn-danger","mt-2",3,"click"]],template:function(r,o){r&1&&(s(0,"div",0)(1,"h3",1),l(2),a(),s(3,"p",1),l(4),a(),s(5,"div",2)(6,"input",3),h("click",function(){return o.onCheckboxClick(o.todo)}),a(),s(7,"label",4),l(8,"Mark as done"),a()(),s(9,"button",5),h("click",function(){return o.onClick(o.todo)}),l(10,"Delete"),a()()),r&2&&(f(1),y("ngClass",K(4,we,!o.todo.active)),f(1),Y(o.todo.title),f(1),y("ngClass",K(6,we,!o.todo.active)),f(1),Y(o.todo.desc))},dependencies:[_e],styles:[".strike[_ngcontent-%COMP%]{text-decoration:line-through}"]});let t=e;return t})();var Pe=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(d(Z),d(z))},e.\u0275dir=_({type:e});let t=e;return t})(),lt=(()=>{let e=class e extends Pe{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=he(e)))(o||e)}})(),e.\u0275dir=_({type:e,features:[D]});let t=e;return t})(),je=new A("NgValueAccessor");var dt={provide:je,useExisting:O(()=>H),multi:!0};function ut(){let t=Q()?Q().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var ct=new A("CompositionEventMode"),H=(()=>{let e=class e extends Pe{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!ut())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(d(Z),d(z),d(ct,8))},e.\u0275dir=_({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&h("input",function(c){return o._handleInput(c.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(c){return o._compositionEnd(c.target.value)})},features:[T([dt]),D]});let t=e;return t})();var Ge=new A("NgValidators"),Be=new A("NgAsyncValidators");function Ue(t){return t!=null}function Re(t){return me(t)?le(t):t}function He(t){let e={};return t.forEach(n=>{e=n!=null?V(V({},e),n):e}),Object.keys(e).length===0?null:e}function Le(t,e){return e.map(n=>n(t))}function ht(t){return!t.validate}function We(t){return t.map(e=>ht(e)?e:n=>e.validate(n))}function ft(t){if(!t)return null;let e=t.filter(Ue);return e.length==0?null:function(n){return He(Le(n,e))}}function ie(t){return t!=null?ft(We(t)):null}function pt(t){if(!t)return null;let e=t.filter(Ue);return e.length==0?null:function(n){let i=Le(n,e).map(Re);return ue(i).pipe(de(He))}}function ne(t){return t!=null?pt(We(t)):null}function xe(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function mt(t){return t._rawValidators}function gt(t){return t._rawAsyncValidators}function te(t){return t?Array.isArray(t)?t:[t]:[]}function j(t,e){return Array.isArray(t)?t.includes(e):t===e}function Se(t,e){let n=te(e);return te(t).forEach(r=>{j(n,r)||n.push(r)}),n}function Ie(t,e){return te(e).filter(n=>!j(t,n))}var G=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=ie(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ne(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},w=class extends G{get formDirective(){return null}get path(){return null}},I=class extends G{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},B=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},vt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},pi=M(V({},vt),{"[class.ng-submitted]":"isSubmitted"}),$e=(()=>{let e=class e extends B{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(d(I,2))},e.\u0275dir=_({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&J("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[D]});let t=e;return t})(),qe=(()=>{let e=class e extends B{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(d(w,10))},e.\u0275dir=_({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&J("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[D]});let t=e;return t})();var F="VALID",P="INVALID",E="PENDING",x="DISABLED";function ze(t){return(L(t)?t.validators:t)||null}function yt(t){return Array.isArray(t)?ie(t):t||null}function Ze(t,e){return(L(e)?e.asyncValidators:t)||null}function _t(t){return Array.isArray(t)?ne(t):t||null}function L(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Ct(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new N(1e3,"");if(!i[n])throw new N(1001,"")}function Vt(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new N(1002,"")})}var U=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===F}get invalid(){return this.status===P}get pending(){return this.status==E}get disabled(){return this.status===x}get enabled(){return this.status!==x}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Se(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Se(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ie(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ie(e,this._rawAsyncValidators))}hasValidator(e){return j(this._rawValidators,e)}hasAsyncValidator(e){return j(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=E,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=x,this.errors=null,this._forEachChild(i=>{i.disable(M(V({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(M(V({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=F,this._forEachChild(i=>{i.enable(M(V({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(M(V({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===F||this.status===E)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?x:F}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=E,this._hasOwnPendingAsyncValidator=!0;let n=Re(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new v,this.statusChanges=new v}_calculateStatus(){return this._allControlsDisabled()?x:this.errors?P:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(E)?E:this._anyControlsHaveStatus(P)?P:F}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){L(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=yt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=_t(this._rawAsyncValidators)}},R=class extends U{constructor(e,n,i){super(ze(n),Ze(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){Vt(this,!0,e),Object.keys(e).forEach(i=>{Ct(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var re=new A("CallSetDisabledState",{providedIn:"root",factory:()=>oe}),oe="always";function bt(t,e){return[...e.path,t]}function Je(t,e,n=oe){Xe(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Mt(t,e),Et(t,e),At(t,e),Dt(t,e)}function Oe(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Dt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function Xe(t,e){let n=mt(t);e.validator!==null?t.setValidators(xe(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=gt(t);e.asyncValidator!==null?t.setAsyncValidators(xe(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Oe(e._rawValidators,r),Oe(e._rawAsyncValidators,r)}function Mt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Ye(t,e)})}function At(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Ye(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Ye(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Et(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function wt(t,e){t==null,Xe(t,e)}function Ft(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function xt(t){return Object.getPrototypeOf(t.constructor)===lt}function St(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function It(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===H?n=o:xt(o)?i=o:r=o}),r||i||n||null}var Ot={provide:w,useExisting:O(()=>se)},S=(()=>Promise.resolve())(),se=(()=>{let e=class e extends w{constructor(i,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._directives=new Set,this.ngSubmit=new v,this.form=new R({},ie(i),ne(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(i){S.then(()=>{let r=this._findContainer(i.path);i.control=r.registerControl(i.name,i.control),Je(i.control,i,this.callSetDisabledState),i.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(i)})}getControl(i){return this.form.get(i.path)}removeControl(i){S.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name),this._directives.delete(i)})}addFormGroup(i){S.then(()=>{let r=this._findContainer(i.path),o=new R({});wt(o,i),r.registerControl(i.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(i){S.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name)})}getFormGroup(i){return this.form.get(i.path)}updateModel(i,r){S.then(()=>{this.form.get(i.path).setValue(r)})}setValue(i){this.control.setValue(i)}onSubmit(i){return this.submitted=!0,St(this.form,this._directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(i){return i.pop(),i.length?this.form.get(i):this.form}};e.\u0275fac=function(r){return new(r||e)(d(Ge,10),d(Be,10),d(re,8))},e.\u0275dir=_({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,o){r&1&&h("submit",function(c){return o.onSubmit(c)})("reset",function(){return o.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[T([Ot]),D]});let t=e;return t})();function Ne(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function ke(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Nt=class extends U{constructor(e=null,n,i){super(ze(n),Ze(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),L(n)&&(n.nonNullable||n.initialValueIsDefault)&&(ke(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ne(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ne(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ke(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var kt={provide:I,useExisting:O(()=>ae)},Te=(()=>Promise.resolve())(),ae=(()=>{let e=class e extends I{constructor(i,r,o,u,c,ot){super(),this._changeDetectorRef=c,this.callSetDisabledState=ot,this.control=new Nt,this._registered=!1,this.name="",this.update=new v,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=It(this,u)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),Ft(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Je(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){Te.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&ye(r);Te.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?bt(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(d(w,9),d(Ge,10),d(Be,10),d(je,10),d(fe,8),d(re,8))},e.\u0275dir=_({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[T([kt]),D,ce]});let t=e;return t})(),Ke=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=_({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var Tt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=g({type:e}),e.\u0275inj=p({});let t=e;return t})();var Pt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=g({type:e}),e.\u0275inj=p({imports:[Tt]});let t=e;return t})();var Qe=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:re,useValue:i.callSetDisabledState??oe}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=g({type:e}),e.\u0275inj=p({imports:[Pt]});let t=e;return t})();var et=(()=>{let e=class e{constructor(){this.todoAdd=new v}onSubmit(){let i={sno:8,title:this.title,desc:this.desc,active:!0};this.todoAdd.emit(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["app-add-todo"]],outputs:{todoAdd:"todoAdd"},decls:14,vars:2,consts:[[1,"my-3","todo-container"],[3,"ngSubmit"],[1,"form-group"],["for","title"],["type","text","name","title","id","title","aria-describedby","emailHelp",1,"form-control",3,"ngModel","ngModelChange"],["for","desc"],["type","text","name","Description","id","desc",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-sm","btn-primary"]],template:function(r,o){r&1&&(s(0,"div",0)(1,"h4"),l(2,"Add a Todo"),a(),s(3,"form",1),h("ngSubmit",function(){return o.onSubmit()}),s(4,"div",2)(5,"label",3),l(6,"Todo Title"),a(),s(7,"input",4),h("ngModelChange",function(c){return o.title=c}),a()(),s(8,"div",2)(9,"label",5),l(10,"Todo Description"),a(),s(11,"input",6),h("ngModelChange",function(c){return o.desc=c}),a()(),s(12,"button",7),l(13,"Add Todo"),a()()()),r&2&&(f(7),y("ngModel",o.title),f(4),y("ngModel",o.desc))},dependencies:[Ke,H,$e,qe,ae,se],styles:[".todo-container[_ngcontent-%COMP%]{background-color:#333!important;color:#fff!important;padding:15px!important}.todo-container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .todo-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#fff!important}.todo-container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{background-color:#444!important;color:#fff!important}.todo-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:10px!important}"]});let t=e;return t})();function Bt(t,e){t&1&&(s(0,"div",6),l(1,"No Todos to display"),a())}function Ut(t,e){if(t&1){let n=pe();s(0,"div")(1,"app-todo-list",8),h("todoDelete",function(r){$(n);let o=k(2);return q(o.deleteTodo(r))})("todoCheckbox",function(r){$(n);let o=k(2);return q(o.toggleTodo(r))}),a()()}if(t&2){let n=e.$implicit;f(1),y("todo",n)}}function Rt(t,e){if(t&1&&X(0,Ut,2,1,"div",7),t&2){let n=k();y("ngForOf",n.todos)}}var tt=(()=>{let e=class e{deleteTodo(i){console.log(i);let r=this.todos.indexOf(i);this.todos.splice(r,1),localStorage.setItem("todos",JSON.stringify(this.todos))}addTodo(i){console.log(i),this.todos.push(i),localStorage.setItem("todos",JSON.stringify(this.todos))}toggleTodo(i){let r=this.todos.indexOf(i);this.todos[r].active=!this.todos[r].active,localStorage.setItem("todos",JSON.stringify(this.todos))}constructor(){if(typeof localStorage<"u"){let i=localStorage.getItem("todos");if(i===null)this.todos=[];else{let r=JSON.parse(i);this.todos=Array.isArray(r)?r:[]}}else this.todos=[]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["app-todo"]],decls:9,vars:2,consts:[[1,"container",2,"background-color","#333","backdrop-filter","blur(10px)","border-radius","10px","padding","20px","margin-top","50px"],[1,"text-center","mb-4",2,"color","#fff","text-shadow","2px 2px 4px rgba(0, 0, 0, 0.5)"],[3,"todoAdd"],[1,"mb-3",2,"color","#fff","text-shadow","2px 2px 4px rgba(0, 0, 0, 0.5)"],["style","color: #fff;",4,"ngIf","ngIfElse"],["elseBlock",""],[2,"color","#fff"],[4,"ngFor","ngForOf"],[3,"todo","todoDelete","todoCheckbox"]],template:function(r,o){if(r&1&&(s(0,"div",0)(1,"h1",1),l(2,"Todo list in Angular"),a(),s(3,"app-add-todo",2),h("todoAdd",function(c){return o.addTodo(c)}),a(),s(4,"h4",3),l(5,"Your Todos"),a(),X(6,Bt,2,0,"div",4)(7,Rt,1,1,"ng-template",null,5,ve),a()),r&2){let u=ge(8);f(6),y("ngIf",o.todos.length===0)("ngIfElse",u)}},dependencies:[Ce,Ve,Fe,et]});let t=e;return t})();var it=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["app-about"]],decls:36,vars:0,consts:[[1,"container",2,"margin-top","50px","border-radius","50px"],[1,"py-3","py-md-5",2,"background-color","#333","color","#fff","border-radius","10px"],[1,"container"],[1,"row","gy-3","gy-md-4","gy-lg-0","align-items-lg-center"],[1,"col-12","col-lg-6","col-xl-5"],["loading","lazy","src","./assets/img/about2.jpeg","alt","About 1",1,"img-fluid","rounded"],[1,"col-12","col-lg-6","col-xl-7"],[1,"row","justify-content-xl-center"],[1,"col-12","col-xl-11"],[1,"mb-3"],[1,"lead","fs-4","text-secondary","mb-3"],[1,"mb-5"],[1,"row","gy-4","gy-md-0","gx-xxl-5X"],[1,"col-12","col-md-6"],[1,"d-flex"],[1,"me-4","text-primary"],[1,"fa-solid","fa-code","fa-2xl",2,"color","#005eff"],[2,"margin-bottom","10px"],[1,"h4","mb-3"],[1,"text-secondary","mb-0"],[1,"d-flex","flex-column","align-items-start"],[1,"d-flex","align-items-center","mb-3"],["href","https://github.com/zaahidvohra","target","_blank",1,"text-decoration-none","me-3"],[1,"fab","fa-github-square","fa-2x",2,"color","#fff"],["href","https://www.linkedin.com/in/zaahid-vohra-17048a203/","target","_blank",1,"text-decoration-none","me-3"],[1,"fab","fa-linkedin","fa-2x",2,"color","#fff"],["href","mailto:zaahidvohra120@gmail.com","target","_blank",1,"text-decoration-none"],[1,"far","fa-envelope","fa-2x",2,"color","#fff"]],template:function(r,o){r&1&&(s(0,"div",0)(1,"section",1)(2,"div",2)(3,"div",3)(4,"div",4),C(5,"img",5),a(),s(6,"div",6)(7,"div",7)(8,"div",8)(9,"h2",9),l(10,"About this Angular Project"),a(),s(11,"p",10),l(12,"Welcome to our Angular To-Do List project! We're thrilled to have you join us on this productivity journey. Our project was born from a desire to create a simple yet powerful tool to help individuals manage their tasks efficiently."),a(),s(13,"p",11),l(14,"This project originated as part of my internship training, where I delved into the realms of Angular, eager to apply my theoretical knowledge to practical, real-world scenarios. The idea of a to-do list emerged as the perfect canvas to hone my skills while crafting a tool that could assist users in organizing their tasks effectively."),a(),s(15,"div",12)(16,"div",13)(17,"div",14)(18,"div",15),C(19,"i",16),a(),s(20,"div",17)(21,"h2",18),l(22,"Zaahid Vohra "),s(23,"p",19),l(24,"I am Batman"),a()()()()()(),s(25,"div",13)(26,"div",20)(27,"h3",9),l(28,"Contact Me"),a(),s(29,"div",21)(30,"a",22),C(31,"i",23),a(),s(32,"a",24),C(33,"i",25),a(),s(34,"a",26),C(35,"i",27),a()()()()()()()()()()())}});let t=e;return t})();var Ht=[{path:"",component:tt},{path:"about",component:it}],nt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=g({type:e}),e.\u0275inj=p({imports:[ee.forRoot(Ht),ee]});let t=e;return t})();var W=(()=>{let e=class e{constructor(){this.title="todo-list"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["app-root"]],decls:16,vars:0,consts:[[2,"background-color","#333"],[1,"navbar","navbar-expand-lg","navbar-dark"],[1,"container-fluid","justify-content-center",2,"margin-right","130px"],["routerLink","/",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse","justify-content-center"],[1,"navbar-nav"],[1,"nav-item"],["aria-current","page","routerLink","/",1,"nav-link","active"],["routerLink","/about",1,"nav-link"]],template:function(r,o){r&1&&(s(0,"div",0)(1,"nav",1)(2,"div",2)(3,"a",3),l(4,"Todo Project"),a(),s(5,"button",4),C(6,"span",5),a(),s(7,"div",6)(8,"ul",7)(9,"li",8)(10,"a",9),l(11,"Home"),a()(),s(12,"li",8)(13,"a",10),l(14,"About"),a()()()()()()(),C(15,"router-outlet"))},dependencies:[Ae,Ee]});let t=e;return t})();var rt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=g({type:e,bootstrap:[W]}),e.\u0275inj=p({providers:[De()],imports:[be,nt,Qe]});let t=e;return t})();var Lt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=g({type:e,bootstrap:[W]}),e.\u0275inj=p({imports:[rt,Me]});let t=e;return t})();export{Lt as a};
