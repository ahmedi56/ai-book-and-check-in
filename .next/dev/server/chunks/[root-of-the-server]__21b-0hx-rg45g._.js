(()=>{"use strict";module.exports = [
"[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
var mod = await __turbopack_context__.y("pg-587764f78a6c7a9c");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/node_modules/zod/v4/classic/errors.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ZodError",
    ()=>ZodError,
    "ZodRealError",
    ()=>ZodRealError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/core/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/core/core.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/core/util.js [app-route] (ecmascript)");
;
;
;
/* Prototypes that already carry the lazy helper methods. Seeded with the
 * intrinsics so that `init` on a foreign object — it accepts any object —
 * can never install an accessor onto a prototype we do not own. */ const _installedErrorProtos = /* @__PURE__ */ new WeakSet([
    Object.prototype,
    Error.prototype
]);
/* Helper methods live as non-enumerable lazy getters on the shared
 * prototype instead of own properties on every instance. On first
 * access the getter allocates the per-instance closure and caches it
 * as a non-enumerable own property, so detached usage still works and
 * the allocation only happens for methods actually touched. */ function _lazyMethod(proto, key, make) {
    Object.defineProperty(proto, key, {
        configurable: true,
        enumerable: false,
        get () {
            const value = make(this);
            Object.defineProperty(this, key, {
                value,
                configurable: true,
                writable: true
            });
            return value;
        },
        set (value) {
            Object.defineProperty(this, key, {
                value,
                configurable: true,
                writable: true
            });
        }
    });
}
const initializer = (inst, issues)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$ZodError"].init(inst, issues);
    inst.name = "ZodError";
    const proto = Object.getPrototypeOf(inst);
    if (_installedErrorProtos.has(proto)) return;
    _installedErrorProtos.add(proto);
    _lazyMethod(proto, "format", (self)=>(mapper)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatError"](self, mapper));
    _lazyMethod(proto, "flatten", (self)=>(mapper)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flattenError"](self, mapper));
    _lazyMethod(proto, "addIssue", (self)=>(issue)=>{
            self.issues.push(issue);
            self.message = JSON.stringify(self.issues, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonStringifyReplacer"], 2);
        });
    _lazyMethod(proto, "addIssues", (self)=>(issues)=>{
            self.issues.push(...issues);
            self.message = JSON.stringify(self.issues, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonStringifyReplacer"], 2);
        });
    Object.defineProperty(proto, "isEmpty", {
        configurable: true,
        enumerable: false,
        get () {
            return this.issues.length === 0;
        }
    });
};
const ZodError = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$constructor"]("ZodError", initializer);
const ZodRealError = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$constructor"]("ZodError", initializer, undefined, {
    Parent: Error
}); // /** @deprecated Use `z.core.$ZodErrorMapCtx` instead. */
 // export type ErrorMapCtx = core.$ZodErrorMapCtx;
}),
"[project]/node_modules/zod/v4/core/core.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$ZodAsyncError",
    ()=>$ZodAsyncError,
    "$ZodEncodeError",
    ()=>$ZodEncodeError,
    "$brand",
    ()=>$brand,
    "$constructor",
    ()=>$constructor,
    "NEVER",
    ()=>NEVER,
    "config",
    ()=>config,
    "globalConfig",
    ()=>globalConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/core/util.js [app-route] (ecmascript)");
var _a;
;
const NEVER = /*@__PURE__*/ Object.freeze({
    status: "aborted"
});
/* Shared descriptor for installing `_zod`; defineProperty reads it
 * synchronously, so reusing one object avoids a per-instance allocation. */ const _zodDesc = {
    value: undefined,
    enumerable: false
};
// null where suppressing the capture would be unrecoverable: `parse()` puts the frames back with `captureStackTrace`, so without it the throw would lose its stack. also latched to null once `stackTraceLimit` proves unassignable, which a realm can do at any point by hardening Error
let _E = "captureStackTrace" in Error ? Error : null;
// v8 captures a stack trace inside the Error constructor, which dominates a failed parse; costs only the frames, and parse() restores those. the constructor must RUN: Object.create is cheaper and passes instanceof, but Error.isError and util.types.isNativeError check an internal slot
function newError(Definition) {
    const E = _E;
    if (E) {
        const saved = E.stackTraceLimit;
        if (typeof saved === "number") {
            try {
                E.stackTraceLimit = 0;
            } catch  {
                _E = null;
                return new Definition();
            }
            try {
                return new Definition();
            } finally{
                E.stackTraceLimit = saved;
            }
        }
    }
    return new Definition();
}
/*@__NO_SIDE_EFFECTS__*/ function $constructor(name, initializer, /** This trait's members, installed once on every prototype that composes it. They cannot be declared in the initializer above: that runs per instance, and the prototype is shared. */ proto, params) {
    // Prototype for this constructor's `_zod` internals. Lazily-derived fields (`values`, `pattern`, `optin`, …) install here once rather than as an accessor on every instance.
    const zodProto = {};
    // Assigning the fields in the constructor body is what gives instances in-object slots; building the object literally and reparenting it costs a second allocation and a generic property copy.
    function Internals(def) {
        this.def = def;
        this.constr = _;
        this.traits = new Set();
    }
    Internals.prototype = zodProto;
    const protoMembers = proto;
    // One trait's members land on every prototype whose chain composes it, so the answer is per prototype rather than per trait.
    const initialized = protoMembers && new WeakSet();
    function init(inst, def) {
        if (!inst._zod) {
            _zodDesc.value = new Internals(def);
            try {
                Object.defineProperty(inst, "_zod", _zodDesc);
            } finally{
                // Cleared even on throw, so the shared descriptor never leaks one instance's internals into the next.
                _zodDesc.value = undefined;
            }
        } else if (inst._zod.traits.has(name)) {
            return;
        }
        inst._zod.traits.add(name);
        initializer(inst, def);
        if (initialized) {
            // `super(def)` from a user subclass gives `this` a prototype the subclass owns, and installing there would overwrite whatever the subclass declared. `constr` built the instance, so its prototype is the one below the subclass's that should carry the members. A receiver whose chain never reaches that prototype installs on its own, which for a plain object handed straight to `init` means `Object.prototype` — unchanged from before.
            const own = Object.getPrototypeOf(inst);
            const ctorProto = inst._zod.constr.prototype;
            let up = own;
            while(up && up !== ctorProto)up = Object.getPrototypeOf(up);
            const target = up ?? own;
            if (!initialized.has(target)) {
                initialized.add(target);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["members"])(target, protoMembers);
            }
        }
        // support prototype modifications; for-in avoids the array allocation of Object.keys on the (usually empty) prototype
        const proto = _.prototype;
        for(const k in proto){
            if (!Object.prototype.hasOwnProperty.call(proto, k)) continue;
            if (!(k in inst)) {
                inst[k] = proto[k].bind(inst);
            }
        }
    }
    // doesn't work if Parent has a constructor with arguments
    const Parent = params?.Parent ?? Object;
    class Definition extends Parent {
    }
    Object.defineProperty(Definition, "name", {
        value: name
    });
    function _(def) {
        const inst = params?.Parent ? newError(Definition) : this;
        init(inst, def);
        const deferred = inst._zod.deferred;
        if (deferred) {
            for (const fn of deferred){
                fn();
            }
            // Released: initializers run once, and the list would otherwise be retained for the schema's lifetime.
            inst._zod.deferred = undefined;
        }
        // Global post-processor hook. Internal: installed by `import "zod/compile"` to enable AOT compilation for every constructed schema. Runs last, once the instance is fully built, because it hands the instance to compile(). The post-processor is expected to be reentrancy-guarded by its own implementation.
        const pp = globalThis.__zod_globalConfig?.postProcessor;
        if (pp) pp(inst);
        return inst;
    }
    Object.defineProperty(_, "init", {
        value: init
    });
    Object.defineProperty(_, Symbol.hasInstance, {
        value: (inst)=>{
            if (params?.Parent && inst instanceof params.Parent) return true;
            return inst?._zod?.traits?.has(name);
        }
    });
    Object.defineProperty(_, "name", {
        value: name
    });
    return _;
}
const $brand = /*@__PURE__*/ Symbol("zod_brand");
class $ZodAsyncError extends Error {
    constructor(){
        super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
    }
}
class $ZodEncodeError extends Error {
    constructor(name){
        super(`Encountered unidirectional transform during encode: ${name}`);
        this.name = "ZodEncodeError";
    }
}
(_a = globalThis).__zod_globalConfig ?? (_a.__zod_globalConfig = {});
const globalConfig = globalThis.__zod_globalConfig;
function config(newConfig) {
    if (newConfig) Object.assign(globalConfig, newConfig);
    return globalConfig;
}
}),
"[project]/node_modules/zod/v4/core/errors.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$ZodError",
    ()=>$ZodError,
    "$ZodRealError",
    ()=>$ZodRealError,
    "flattenError",
    ()=>flattenError,
    "formatError",
    ()=>formatError,
    "prettifyError",
    ()=>prettifyError,
    "toDotPath",
    ()=>toDotPath,
    "treeifyError",
    ()=>treeifyError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/core/core.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/core/util.js [app-route] (ecmascript)");
;
;
/* Computing the message eagerly is expensive (pretty-printed JSON of all
 * issues), so defer it until first read. The accessor functions and
 * descriptors are shared across instances to keep error construction
 * cheap; the computed message is cached on the internals object. The
 * setter preserves plain assignment semantics for consumers that
 * overwrite `message`. */ function _getMessage() {
    const internals = this._zod;
    internals.message ?? (internals.message = JSON.stringify(internals.def, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonStringifyReplacer"], 2));
    return internals.message;
}
function _setMessage(value) {
    this._zod.message = value;
}
const _messageDesc = {
    get: _getMessage,
    set: _setMessage,
    enumerable: true,
    configurable: true
};
const _issuesDesc = {
    value: undefined,
    enumerable: false
};
/* Prototypes that already carry the lazy `toString`. Seeded with the
 * intrinsics so that `init` on a foreign object — it accepts any object —
 * can never install an accessor onto a prototype we do not own. */ const _installedToString = /* @__PURE__ */ new WeakSet([
    Object.prototype,
    Error.prototype
]);
const initializer = (inst, def)=>{
    inst.name = "$ZodError";
    // `_zod` is already non-enumerable: $constructor's init defined it with this same descriptor
    _issuesDesc.value = def;
    Object.defineProperty(inst, "issues", _issuesDesc);
    // Clear the shared slot; a retained `value` pins the last error's issues.
    _issuesDesc.value = undefined;
    Object.defineProperty(inst, "message", _messageDesc);
    /* `toString` lives as a non-enumerable lazy getter on the shared
     * prototype; on first access it caches a per-instance closure so
     * detached usage still works. */ const proto = Object.getPrototypeOf(inst);
    if (!_installedToString.has(proto)) {
        _installedToString.add(proto);
        Object.defineProperty(proto, "toString", {
            configurable: true,
            enumerable: false,
            get () {
                const value = ()=>this.message;
                Object.defineProperty(this, "toString", {
                    value,
                    configurable: true,
                    writable: true
                });
                return value;
            },
            set (value) {
                Object.defineProperty(this, "toString", {
                    value,
                    configurable: true,
                    writable: true
                });
            }
        });
    }
};
const $ZodError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$constructor"])("$ZodError", initializer);
const $ZodRealError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$constructor"])("$ZodError", initializer, undefined, {
    Parent: Error
});
/** Get-or-create `obj[key]` as an own data property. A path segment naming an inherited member
 * ("toString", "constructor") would otherwise read through to the prototype, and assigning
 * "__proto__" would hit the setter instead of creating a key. */ function node(obj, key, make) {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) {
        if (key === "__proto__") {
            Object.defineProperty(obj, key, {
                value: make(),
                writable: true,
                enumerable: true,
                configurable: true
            });
        } else {
            obj[key] = make();
        }
    }
    return obj[key];
}
function flattenError(error, mapper = (issue)=>issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of error.issues){
        if (sub.path.length > 0) {
            node(fieldErrors, sub.path[0], ()=>[]).push(mapper(sub));
        } else {
            formErrors.push(mapper(sub));
        }
    }
    return {
        formErrors,
        fieldErrors
    };
}
function formatError(error, mapper = (issue)=>issue.message) {
    const fieldErrors = {
        _errors: []
    };
    const processError = (error, path = [])=>{
        for (const issue of error.issues){
            if (issue.code === "invalid_union" && issue.errors.length) {
                issue.errors.map((issues)=>processError({
                        issues
                    }, [
                        ...path,
                        ...issue.path
                    ]));
            } else if (issue.code === "invalid_key") {
                processError({
                    issues: issue.issues
                }, [
                    ...path,
                    ...issue.path
                ]);
            } else if (issue.code === "invalid_element") {
                processError({
                    issues: issue.issues
                }, [
                    ...path,
                    ...issue.path
                ]);
            } else {
                const fullpath = [
                    ...path,
                    ...issue.path
                ];
                if (fullpath.length === 0) {
                    fieldErrors._errors.push(mapper(issue));
                } else {
                    let curr = fieldErrors;
                    let i = 0;
                    while(i < fullpath.length){
                        const el = fullpath[i];
                        const terminal = i === fullpath.length - 1;
                        // `_errors` is reserved by this legacy format, so merge a matching path segment into the current node instead of treating its array as a child.
                        if (el === "_errors") {
                            if (terminal) curr._errors.push(mapper(issue));
                            i++;
                            continue;
                        }
                        // A path element may collide with an inherited property name such as
                        // "__proto__" or "constructor". Truthiness checks read the prototype
                        // (so no node is created, then ._errors.push throws), and bracket
                        // assignment of "__proto__" hits the setter instead of creating an
                        // own key. Guard the read with hasOwnProperty and create the node
                        // with defineProperty so any path element becomes a real own key.
                        if (!Object.prototype.hasOwnProperty.call(curr, el)) {
                            Object.defineProperty(curr, el, {
                                value: {
                                    _errors: []
                                },
                                enumerable: true,
                                writable: true,
                                configurable: true
                            });
                        }
                        const node = curr[el];
                        if (terminal) {
                            node._errors.push(mapper(issue));
                        }
                        curr = node;
                        i++;
                    }
                }
            }
        }
    };
    processError(error);
    return fieldErrors;
}
function treeifyError(error, mapper = (issue)=>issue.message) {
    const result = {
        errors: []
    };
    const processError = (error, path = [])=>{
        var _a;
        for (const issue of error.issues){
            if (issue.code === "invalid_union" && issue.errors.length) {
                // regular union error
                issue.errors.map((issues)=>processError({
                        issues
                    }, [
                        ...path,
                        ...issue.path
                    ]));
            } else if (issue.code === "invalid_key") {
                processError({
                    issues: issue.issues
                }, [
                    ...path,
                    ...issue.path
                ]);
            } else if (issue.code === "invalid_element") {
                processError({
                    issues: issue.issues
                }, [
                    ...path,
                    ...issue.path
                ]);
            } else {
                const fullpath = [
                    ...path,
                    ...issue.path
                ];
                if (fullpath.length === 0) {
                    result.errors.push(mapper(issue));
                    continue;
                }
                let curr = result;
                let i = 0;
                while(i < fullpath.length){
                    const el = fullpath[i];
                    const terminal = i === fullpath.length - 1;
                    if (typeof el === "string") {
                        curr.properties ?? (curr.properties = {});
                        // el may collide with an inherited property name ("__proto__",
                        // "constructor", ...); ??= reads the prototype so the node is never
                        // created and curr.errors.push throws. Guard with hasOwnProperty and
                        // create the node with defineProperty so "__proto__" becomes a real
                        // own key rather than invoking the prototype setter.
                        if (!Object.prototype.hasOwnProperty.call(curr.properties, el)) {
                            Object.defineProperty(curr.properties, el, {
                                value: {
                                    errors: []
                                },
                                enumerable: true,
                                writable: true,
                                configurable: true
                            });
                        }
                        curr = curr.properties[el];
                    } else {
                        curr.items ?? (curr.items = []);
                        (_a = curr.items)[el] ?? (_a[el] = {
                            errors: []
                        });
                        curr = curr.items[el];
                    }
                    if (terminal) {
                        curr.errors.push(mapper(issue));
                    }
                    i++;
                }
            }
        }
    };
    processError(error);
    return result;
}
function toDotPath(_path) {
    const segs = [];
    const path = _path.map((seg)=>typeof seg === "object" ? seg.key : seg);
    for (const seg of path){
        if (typeof seg === "number") segs.push(`[${seg}]`);
        else if (typeof seg === "symbol") segs.push(`[${JSON.stringify(String(seg))}]`);
        else if (/[^\w$]/.test(seg)) segs.push(`[${JSON.stringify(seg)}]`);
        else {
            if (segs.length) segs.push(".");
            segs.push(seg);
        }
    }
    return segs.join("");
}
function prettifyError(error) {
    const lines = [];
    // sort by path length
    const issues = [
        ...error.issues
    ].sort((a, b)=>(a.path ?? []).length - (b.path ?? []).length);
    // Process each issue
    for (const issue of issues){
        lines.push(`✖ ${issue.message}`);
        if (issue.path?.length) lines.push(`  → at ${toDotPath(issue.path)}`);
    }
    // Convert Map to formatted string
    return lines.join("\n");
}
}),
"[project]/node_modules/zod/v4/core/util.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BIGINT_FORMAT_RANGES",
    ()=>BIGINT_FORMAT_RANGES,
    "CONSTANT_CATCH",
    ()=>CONSTANT_CATCH,
    "Class",
    ()=>Class,
    "NUMBER_FORMAT_RANGES",
    ()=>NUMBER_FORMAT_RANGES,
    "aborted",
    ()=>aborted,
    "allowsEval",
    ()=>allowsEval,
    "assert",
    ()=>assert,
    "assertEqual",
    ()=>assertEqual,
    "assertIs",
    ()=>assertIs,
    "assertNever",
    ()=>assertNever,
    "assertNotEqual",
    ()=>assertNotEqual,
    "assignProp",
    ()=>assignProp,
    "attachSchema",
    ()=>attachSchema,
    "base64ToUint8Array",
    ()=>base64ToUint8Array,
    "base64urlToUint8Array",
    ()=>base64urlToUint8Array,
    "cached",
    ()=>cached,
    "captureStackTrace",
    ()=>captureStackTrace,
    "cleanEnum",
    ()=>cleanEnum,
    "cleanRegex",
    ()=>cleanRegex,
    "clone",
    ()=>clone,
    "cloneDef",
    ()=>cloneDef,
    "codePointLength",
    ()=>codePointLength,
    "constantCatch",
    ()=>constantCatch,
    "createTransparentProxy",
    ()=>createTransparentProxy,
    "defineLazy",
    ()=>defineLazy,
    "defineLazyInternal",
    ()=>defineLazyInternal,
    "derived",
    ()=>derived,
    "esc",
    ()=>esc,
    "escapeRegex",
    ()=>escapeRegex,
    "explicitlyAborted",
    ()=>explicitlyAborted,
    "extend",
    ()=>extend,
    "finalizeIssue",
    ()=>finalizeIssue,
    "floatSafeRemainder",
    ()=>floatSafeRemainder,
    "getElementAtPath",
    ()=>getElementAtPath,
    "getEnumValues",
    ()=>getEnumValues,
    "getLengthableOrigin",
    ()=>getLengthableOrigin,
    "getParsedType",
    ()=>getParsedType,
    "getSizableOrigin",
    ()=>getSizableOrigin,
    "hexToUint8Array",
    ()=>hexToUint8Array,
    "hide",
    ()=>hide,
    "installLazyProp",
    ()=>installLazyProp,
    "isObject",
    ()=>isObject,
    "isPlainObject",
    ()=>isPlainObject,
    "issue",
    ()=>issue,
    "joinValues",
    ()=>joinValues,
    "jsonStringifyReplacer",
    ()=>jsonStringifyReplacer,
    "members",
    ()=>members,
    "merge",
    ()=>merge,
    "mergeDefs",
    ()=>mergeDefs,
    "normalizeParams",
    ()=>normalizeParams,
    "nullish",
    ()=>nullish,
    "numKeys",
    ()=>numKeys,
    "objectClone",
    ()=>objectClone,
    "omit",
    ()=>omit,
    "optionalKeys",
    ()=>optionalKeys,
    "own",
    ()=>own,
    "parsedType",
    ()=>parsedType,
    "partial",
    ()=>partial,
    "pick",
    ()=>pick,
    "prefixIssues",
    ()=>prefixIssues,
    "primitiveTypes",
    ()=>primitiveTypes,
    "promiseAllObject",
    ()=>promiseAllObject,
    "propertyKeyTypes",
    ()=>propertyKeyTypes,
    "randomString",
    ()=>randomString,
    "rawShape",
    ()=>rawShape,
    "required",
    ()=>required,
    "safeExtend",
    ()=>safeExtend,
    "shallowClone",
    ()=>shallowClone,
    "slugify",
    ()=>slugify,
    "stringifyPrimitive",
    ()=>stringifyPrimitive,
    "toZod",
    ()=>toZod,
    "uint8ArrayToBase64",
    ()=>uint8ArrayToBase64,
    "uint8ArrayToBase64url",
    ()=>uint8ArrayToBase64url,
    "uint8ArrayToHex",
    ()=>uint8ArrayToHex,
    "unwrapMessage",
    ()=>unwrapMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/core/core.js [app-route] (ecmascript)");
;
function assertEqual(val) {
    return val;
}
function assertNotEqual(val) {
    return val;
}
function toZod() {
    return (schema)=>schema;
}
function assertIs(_arg) {}
function assertNever(_x) {
    throw new Error("Unexpected value in exhaustive check");
}
function assert(_) {}
function getEnumValues(entries) {
    const numericValues = Object.values(entries).filter((v)=>typeof v === "number");
    const values = Object.entries(entries).filter(([k, _])=>numericValues.indexOf(+k) === -1).map(([_, v])=>v);
    return values;
}
function joinValues(array, separator = "|") {
    return array.map((val)=>stringifyPrimitive(val)).join(separator);
}
function jsonStringifyReplacer(_, value) {
    if (typeof value === "bigint") return value.toString();
    return value;
}
// the accessor lives on a shared prototype: an own accessor makes every box a dictionary-mode object (~360 B and a slow load per read against ~100 B and an inlined getter here)
class Cached {
    constructor(getter){
        this._getter = getter;
        this._value = undefined;
    }
    get value() {
        const getter = this._getter;
        if (getter !== undefined) {
            this._value = getter();
            this._getter = undefined;
        }
        return this._value;
    }
}
function cached(getter) {
    return new Cached(getter);
}
function nullish(input) {
    return input === null || input === undefined;
}
function cleanRegex(source) {
    const start = source.startsWith("^") ? 1 : 0;
    const end = source.endsWith("$") ? source.length - 1 : source.length;
    return source.slice(start, end);
}
function floatSafeRemainder(val, step) {
    const ratio = val / step;
    const roundedRatio = Math.round(ratio);
    // `val` and `step` each round to a double before the division rounds again, so a true decimal multiple's quotient can sit up to 1.5 of these scaled epsilons from the integer. A 1x tolerance therefore rejected 2.03 as a multiple of 0.07; 4x covers the worst case with margin.
    const tolerance = 4 * Number.EPSILON * Math.max(Math.abs(ratio), 1);
    if (Math.abs(ratio - roundedRatio) < tolerance) return 0;
    return ratio - roundedRatio;
}
const EVALUATING = /* @__PURE__*/ Symbol("evaluating");
function defineLazy(object, key, getter) {
    let value = undefined;
    Object.defineProperty(object, key, {
        get () {
            if (value === EVALUATING) {
                // Circular reference detected, return undefined to break the cycle
                return undefined;
            }
            if (value === undefined) {
                value = EVALUATING;
                value = getter();
            }
            return value;
        },
        set (v) {
            Object.defineProperty(object, key, {
                value: v
            });
        // object[key] = v;
        },
        configurable: true
    });
}
function objectClone(obj) {
    return Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
}
function assignProp(target, prop, value) {
    Object.defineProperty(target, prop, {
        value,
        writable: true,
        enumerable: true,
        configurable: true
    });
}
function rawShape(def) {
    const desc = Object.getOwnPropertyDescriptor(def, "shape");
    return desc?.get ? desc.get.raw : desc?.value;
}
// where a builder reads its source's keys and descriptors, resolving only a shape a def answers for itself. A shape resolves by object spread, so only its enumerable keys are ever part of it.
function sourceShape(schema) {
    return rawShape(schema._zod.def) ?? schema._zod.def.shape;
}
// a key whose value is not settled yet, self-caching so every read after the first gets the same one
function deferProp(target, key, getter) {
    Object.defineProperty(target, key, {
        get () {
            const value = getter();
            assignProp(this, key, value);
            return value;
        },
        enumerable: true,
        configurable: true
    });
}
// Writes a settled key. A plain assignment is much cheaper than `defineProperty` and produces the same descriptor, but it runs whatever setter already answers to the key — an accessor this shape deferred, or an inherited one, which `__proto__` has on every object and prototype pollution can add for any name.
function putProp(target, key, value) {
    if (key in target) assignProp(target, key, value);
    else target[key] = value;
}
/**
 * Copies `keys` of `source`'s shape onto `target`, each value passed through `wrap`.
 *
 * A key the source has resolved is copied through now, so the derived shape states it outright and nothing has to resolve it to learn what it holds. A key the source still defers stays deferred, and reads back through the source's own `shape`, so it resolves once and both shapes get that one schema.
 */ function mirrorShape(target, source, keys, wrap) {
    const raw = sourceShape(source);
    for (const key of keys){
        const desc = Object.getOwnPropertyDescriptor(raw, key);
        if (!desc.enumerable) continue;
        if (desc.get) {
            deferProp(target, key, ()=>{
                const value = source._zod.def.shape[key];
                return wrap ? wrap(value, key) : value;
            });
        } else putProp(target, key, wrap ? wrap(desc.value, key) : desc.value);
    }
}
// same, for a plain shape a caller passed rather than a schema's
function mirrorProps(target, source) {
    for (const key of Reflect.ownKeys(source)){
        const desc = Object.getOwnPropertyDescriptor(source, key);
        if (!desc.enumerable) continue;
        if (desc.get) deferProp(target, key, ()=>source[key]);
        else putProp(target, key, desc.value);
    }
}
function mergeDefs(...defs) {
    const mergedDescriptors = {};
    for (const def of defs){
        const descriptors = Object.getOwnPropertyDescriptors(def);
        Object.assign(mergedDescriptors, descriptors);
    }
    return Object.defineProperties({}, mergedDescriptors);
}
function cloneDef(schema) {
    return mergeDefs(schema._zod.def);
}
function getElementAtPath(obj, path) {
    if (!path) return obj;
    return path.reduce((acc, key)=>acc?.[key], obj);
}
function promiseAllObject(promisesObj) {
    const keys = Object.keys(promisesObj);
    const promises = keys.map((key)=>promisesObj[key]);
    return Promise.all(promises).then((results)=>{
        const resolvedObj = {};
        for(let i = 0; i < keys.length; i++){
            resolvedObj[keys[i]] = results[i];
        }
        return resolvedObj;
    });
}
function randomString(length = 10) {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let str = "";
    for(let i = 0; i < length; i++){
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}
function esc(str) {
    return JSON.stringify(str);
}
function slugify(input) {
    return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args)=>{};
function isObject(data) {
    return typeof data === "object" && data !== null && !Array.isArray(data);
}
const allowsEval = /* @__PURE__*/ cached(()=>{
    // Skip the probe under `jitless`: strict CSPs report the caught `new Function` as a `securitypolicyviolation` even though the throw is swallowed.
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["globalConfig"].jitless) {
        return false;
    }
    // @ts-ignore
    if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) {
        return false;
    }
    try {
        const F = Function;
        new F("");
        return true;
    } catch (_) {
        return false;
    }
});
function isPlainObject(o) {
    if (isObject(o) === false) return false;
    // modified constructor
    const ctor = o.constructor;
    if (ctor === undefined) return true;
    if (typeof ctor !== "function") return true;
    // modified prototype
    const prot = ctor.prototype;
    if (isObject(prot) === false) return false;
    // ctor doesn't have static `isPrototypeOf`
    if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
        return false;
    }
    return true;
}
function shallowClone(o) {
    if (isPlainObject(o)) return {
        ...o
    };
    if (Array.isArray(o)) return [
        ...o
    ];
    if (o instanceof Map) return new Map(o);
    if (o instanceof Set) return new Set(o);
    return o;
}
function numKeys(data) {
    let keyCount = 0;
    for(const key in data){
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            keyCount++;
        }
    }
    return keyCount;
}
const getParsedType = (data)=>{
    const t = typeof data;
    switch(t){
        case "undefined":
            return "undefined";
        case "string":
            return "string";
        case "number":
            return Number.isNaN(data) ? "nan" : "number";
        case "boolean":
            return "boolean";
        case "function":
            return "function";
        case "bigint":
            return "bigint";
        case "symbol":
            return "symbol";
        case "object":
            if (Array.isArray(data)) {
                return "array";
            }
            if (data === null) {
                return "null";
            }
            if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
                return "promise";
            }
            if (typeof Map !== "undefined" && data instanceof Map) {
                return "map";
            }
            if (typeof Set !== "undefined" && data instanceof Set) {
                return "set";
            }
            if (typeof Date !== "undefined" && data instanceof Date) {
                return "date";
            }
            // @ts-ignore
            if (typeof File !== "undefined" && data instanceof File) {
                return "file";
            }
            return "object";
        default:
            throw new Error(`Unknown data type: ${t}`);
    }
};
const propertyKeyTypes = /* @__PURE__*/ new Set([
    "string",
    "number",
    "symbol"
]);
const primitiveTypes = /* @__PURE__*/ new Set([
    "string",
    "number",
    "bigint",
    "boolean",
    "symbol",
    "undefined"
]);
function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone(inst, def, params) {
    const cl = new inst._zod.constr(def ?? inst._zod.def);
    if (!def || params?.parent) cl._zod.parent = inst;
    return cl;
}
function normalizeParams(_params) {
    const params = _params;
    if (!params) return {};
    if (typeof params === "string") return {
        error: ()=>params
    };
    if (params?.message !== undefined) {
        if (params?.error !== undefined) throw new Error("Cannot specify both `message` and `error` params");
        params.error = params.message;
    }
    delete params.message;
    if (typeof params.error === "string") return {
        ...params,
        error: ()=>params.error
    };
    return params;
}
function createTransparentProxy(getter) {
    let target;
    return new Proxy({}, {
        get (_, prop, receiver) {
            target ?? (target = getter());
            return Reflect.get(target, prop, receiver);
        },
        set (_, prop, value, receiver) {
            target ?? (target = getter());
            return Reflect.set(target, prop, value, receiver);
        },
        has (_, prop) {
            target ?? (target = getter());
            return Reflect.has(target, prop);
        },
        deleteProperty (_, prop) {
            target ?? (target = getter());
            return Reflect.deleteProperty(target, prop);
        },
        ownKeys (_) {
            target ?? (target = getter());
            return Reflect.ownKeys(target);
        },
        getOwnPropertyDescriptor (_, prop) {
            target ?? (target = getter());
            return Reflect.getOwnPropertyDescriptor(target, prop);
        },
        defineProperty (_, prop, descriptor) {
            target ?? (target = getter());
            return Reflect.defineProperty(target, prop, descriptor);
        }
    });
}
function stringifyPrimitive(value) {
    if (typeof value === "bigint") return value.toString() + "n";
    if (typeof value === "string") return `"${value}"`;
    return `${value}`;
}
function optionalKeys(shape) {
    return Object.keys(shape).filter((k)=>{
        return shape[k]._zod.optin !== undefined && shape[k]._zod.optout === "optional";
    });
}
const NUMBER_FORMAT_RANGES = /*@__PURE__*/ (()=>({
        safeint: [
            Number.MIN_SAFE_INTEGER,
            Number.MAX_SAFE_INTEGER
        ],
        int32: [
            -2147483648,
            2147483647
        ],
        uint32: [
            0,
            4294967295
        ],
        float32: [
            -3.4028234663852886e38,
            3.4028234663852886e38
        ],
        float64: [
            -Number.MAX_VALUE,
            Number.MAX_VALUE
        ]
    }))();
const BIGINT_FORMAT_RANGES = {
    int64: [
        /* @__PURE__*/ BigInt("-9223372036854775808"),
        /* @__PURE__*/ BigInt("9223372036854775807")
    ],
    uint64: [
        /* @__PURE__*/ BigInt(0),
        /* @__PURE__*/ BigInt("18446744073709551615")
    ]
};
function pick(schema, mask) {
    const currDef = schema._zod.def;
    const checks = currDef.checks;
    const hasChecks = checks && checks.length > 0;
    if (hasChecks) {
        throw new Error(".pick() cannot be used on object schemas containing refinements");
    }
    const newShape = {};
    mirrorShape(newShape, schema, maskedKeys(schema, mask));
    return clone(schema, mergeDefs(currDef, {
        shape: newShape,
        checks: []
    }));
}
// the mask keys that select something, checked against the source's shape without resolving it
function maskedKeys(schema, mask) {
    const raw = sourceShape(schema);
    const keys = [];
    // `for...in` skips symbols, so a symbol in the mask would select nothing
    for (const key of Reflect.ownKeys(mask)){
        if (!Object.getOwnPropertyDescriptor(raw, key)?.enumerable) {
            throw new Error(`Unrecognized key: "${String(key)}"`);
        }
        if (mask[key]) keys.push(key);
    }
    return keys;
}
function omit(schema, mask) {
    const currDef = schema._zod.def;
    const checks = currDef.checks;
    const hasChecks = checks && checks.length > 0;
    if (hasChecks) {
        throw new Error(".omit() cannot be used on object schemas containing refinements");
    }
    const omitted = new Set(maskedKeys(schema, mask));
    const newShape = {};
    mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)).filter((key)=>!omitted.has(key)));
    return clone(schema, mergeDefs(currDef, {
        shape: newShape,
        checks: []
    }));
}
function extend(schema, shape) {
    if (!isPlainObject(shape)) {
        throw new Error("Invalid input to extend: expected a plain object");
    }
    const checks = schema._zod.def.checks;
    const hasChecks = checks && checks.length > 0;
    if (hasChecks) {
        // Only throw if new shape overlaps with existing shape. Use getOwnPropertyDescriptor to check key existence without accessing values
        const existingShape = sourceShape(schema);
        for (const key of Reflect.ownKeys(shape)){
            if (Object.getOwnPropertyDescriptor(existingShape, key) !== undefined) {
                throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
            }
        }
    }
    return clone(schema, mergeDefs(schema._zod.def, {
        shape: extended(schema, shape)
    }));
}
// the source's keys, then the caller's overlaid on top
function extended(schema, shape) {
    const newShape = {};
    mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)));
    mirrorProps(newShape, shape);
    return newShape;
}
function safeExtend(schema, shape) {
    if (!isPlainObject(shape)) {
        throw new Error("Invalid input to safeExtend: expected a plain object");
    }
    return clone(schema, mergeDefs(schema._zod.def, {
        shape: extended(schema, shape)
    }));
}
function merge(a, b) {
    if (!b?._zod?.def) {
        throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
    }
    if (a._zod.def.checks?.length) {
        throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
    }
    const newShape = {};
    mirrorShape(newShape, a, Reflect.ownKeys(sourceShape(a)));
    mirrorShape(newShape, b, Reflect.ownKeys(sourceShape(b)));
    const def = mergeDefs(a._zod.def, {
        shape: newShape,
        get catchall () {
            return b._zod.def.catchall;
        },
        checks: b._zod.def.checks ?? []
    });
    return clone(a, def);
}
function partial(Class, schema, mask, name = "partial") {
    const currDef = schema._zod.def;
    const checks = currDef.checks;
    const hasChecks = checks && checks.length > 0;
    if (hasChecks) {
        throw new Error(`.${name}() cannot be used on object schemas containing refinements`);
    }
    const selected = mask ? new Set(maskedKeys(schema, mask)) : undefined;
    const newShape = {};
    mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)), Class && ((value, key)=>selected && !selected.has(key) ? value : new Class({
            type: "optional",
            innerType: value
        })));
    return clone(schema, mergeDefs(schema._zod.def, {
        shape: newShape,
        checks: []
    }));
}
function required(Class, schema, mask) {
    const selected = mask ? new Set(maskedKeys(schema, mask)) : undefined;
    const newShape = {};
    mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)), (value, key)=>// overwrite with non-optional
        selected && !selected.has(key) ? value : new Class({
            type: "nonoptional",
            innerType: value
        }));
    return clone(schema, mergeDefs(schema._zod.def, {
        shape: newShape
    }));
}
function aborted(x, startIndex = 0) {
    if (x.aborted === true) return true;
    for(let i = startIndex; i < x.issues.length; i++){
        if (x.issues[i]?.continue !== true) {
            return true;
        }
    }
    return false;
}
function explicitlyAborted(x, startIndex = 0) {
    if (x.aborted === true) return true;
    for(let i = startIndex; i < x.issues.length; i++){
        if (x.issues[i]?.continue === false) {
            return true;
        }
    }
    return false;
}
function prefixIssues(path, issues) {
    return issues.map((iss)=>{
        var _a;
        (_a = iss).path ?? (_a.path = []);
        iss.path.unshift(path);
        return iss;
    });
}
function unwrapMessage(message) {
    return typeof message === "string" ? message : message?.message;
}
function attachSchema(issues, start, inst) {
    var _a;
    for(let i = start; i < issues.length; i++){
        (_a = issues[i]).schema ?? (_a.schema = inst);
    }
}
function finalizeIssue(iss, ctx, config) {
    var _a;
    // A schema that raised an issue itself owns it outright, and outranks any stamp an enclosing check left in `attachSchema`. String formats and z.custom() are schema and check at once, so when they act as a check they defer to that stamp instead.
    const traits = iss.inst?._zod?.traits;
    if (traits?.has("$ZodType")) {
        if (traits.has("$ZodCheck")) (_a = iss).schema ?? (_a.schema = iss.inst);
        else iss.schema = iss.inst;
    }
    // Decreasing specificity, first map to return a message wins. `inst` is whatever raised the issue, so a check's own map outranks the owning schema's.
    const schemaError = iss.schema !== iss.inst ? iss.schema?._zod.def?.error : undefined;
    const message = iss.message ? iss.message : unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(schemaError?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config.customError?.(iss)) ?? unwrapMessage(config.localeError?.(iss)) ?? "Invalid input";
    // an explicit own-key copy beats object rest with excluded keys, which v8 routes through a generic runtime call; Object.keys rather than for-in so an issue pushed with a prototype does not leak inherited keys, and an own __proto__ key is dropped rather than assigned through the setter
    const full = {};
    for (const k of Object.keys(iss)){
        if (k === "inst" || k === "schema" || k === "continue" || k === "input" || k === "__proto__") continue;
        full[k] = iss[k];
    }
    full.path ?? (full.path = []);
    full.message = message;
    if (ctx?.reportInput) {
        full.input = iss.input;
    }
    return full;
}
function getSizableOrigin(input) {
    if (input instanceof Set) return "set";
    if (input instanceof Map) return "map";
    // @ts-ignore
    if (input instanceof File) return "file";
    return "unknown";
}
const highSurrogate = /[\uD800-\uDBFF]/;
function codePointLength(str) {
    const units = str.length;
    if (!highSurrogate.test(str)) return units;
    let count = units;
    for(let i = 0; i < units - 1; i++){
        if ((str.charCodeAt(i) & 0xfc00) === 0xd800 && (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            count--;
            i++;
        }
    }
    return count;
}
function getLengthableOrigin(input) {
    if (Array.isArray(input)) return "array";
    if (typeof input === "string") return "string";
    return "unknown";
}
function parsedType(data) {
    const t = typeof data;
    switch(t){
        case "number":
            {
                return Number.isNaN(data) ? "nan" : "number";
            }
        case "object":
            {
                if (data === null) {
                    return "null";
                }
                if (Array.isArray(data)) {
                    return "array";
                }
                const obj = data;
                if (obj && Object.getPrototypeOf(obj) !== Object.prototype && "constructor" in obj && obj.constructor) {
                    return obj.constructor.name;
                }
            }
    }
    return t;
}
function issue(...args) {
    const [iss, input, inst] = args;
    if (typeof iss === "string") {
        return {
            message: iss,
            code: "custom",
            input,
            inst
        };
    }
    return {
        ...iss
    };
}
function cleanEnum(obj) {
    return Object.entries(obj).filter(([k, _])=>{
        // return true if NaN, meaning it's not a number, thus a string key
        return Number.isNaN(Number.parseInt(k, 10));
    }).map((el)=>el[1]);
}
function base64ToUint8Array(base64) {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for(let i = 0; i < binaryString.length; i++){
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
}
function uint8ArrayToBase64(bytes) {
    let binaryString = "";
    for(let i = 0; i < bytes.length; i++){
        binaryString += String.fromCharCode(bytes[i]);
    }
    return btoa(binaryString);
}
function base64urlToUint8Array(base64url) {
    const base64 = base64url.replace(/-/g, "+").replace(/_/g, "/");
    const padding = "=".repeat((4 - base64.length % 4) % 4);
    return base64ToUint8Array(base64 + padding);
}
function uint8ArrayToBase64url(bytes) {
    return uint8ArrayToBase64(bytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function hexToUint8Array(hex) {
    const cleanHex = hex.replace(/^0x/, "");
    if (cleanHex.length % 2 !== 0) {
        throw new Error("Invalid hex string length");
    }
    const bytes = new Uint8Array(cleanHex.length / 2);
    for(let i = 0; i < cleanHex.length; i += 2){
        bytes[i / 2] = Number.parseInt(cleanHex.slice(i, i + 2), 16);
    }
    return bytes;
}
function uint8ArrayToHex(bytes) {
    return Array.from(bytes).map((b)=>b.toString(16).padStart(2, "0")).join("");
}
class Class {
    constructor(..._args){}
}
function members(proto, table) {
    for(const key in table){
        const desc = Object.getOwnPropertyDescriptor(table, key);
        // a getter installs as written, so it stays live: `description` reads through to the registry on every access. not enumerable: an object literal's is, and a prototype member never was
        if (desc.get) Object.defineProperty(proto, key, {
            ...desc,
            enumerable: false
        });
        else defineBound(proto, key, desc.value);
    }
}
function own(inst, key, value, enumerable = true) {
    Object.defineProperty(inst, key, {
        configurable: true,
        writable: true,
        enumerable,
        value
    });
    return value;
}
function hide(inst, key, value) {
    return own(inst, key, value, false);
}
/*@__NO_SIDE_EFFECTS__*/ function derived(computes, table) {
    for(const key in computes){
        const compute = computes[key];
        // an object literal's accessor is configurable and enumerable, and `members` copies the descriptor as written
        Object.defineProperty(table, key, {
            configurable: true,
            enumerable: true,
            get () {
                return own(this, key, compute(this));
            },
            set (value) {
                own(this, key, value);
            }
        });
    }
    return table;
}
function defineBound(proto, key, fn) {
    Object.defineProperty(proto, key, {
        configurable: true,
        get () {
            // vitest's spyOn calls a prototype getter bare to find the function it wraps, so a nullish receiver answers the raw method
            return this == null ? fn : own(this, key, fn.bind(this));
        },
        set (value) {
            own(this, key, value);
        }
    });
}
/** Returns the prototype to install on, or `undefined` if this group is already installed on it. */ function claim(inst, sentinel) {
    const proto = Object.getPrototypeOf(inst);
    // Runs on every construction, so `in` rather than the costlier `hasOwnProperty.call`. Sentinels are keys the group itself defines.
    return sentinel in proto ? undefined : proto;
}
// The internals whose init chain is installing. A second call for the same one is a derived constructor overriding its base, so it must not construct another schema in between or the override is dropped.
let installing;
// Set while a getter is running, so a value that resolved through a recursion break is not memoized. One shared descriptor shadows the key for the duration, which costs no per-key allocation.
let broke = false;
const breaker = {
    configurable: true,
    get () {
        broke = true;
        return undefined;
    }
};
function defineLazyInternal(inst, key, compute) {
    const proto = Object.getPrototypeOf(inst._zod);
    if (key in proto && installing !== inst._zod) {
        // A repeat construction: everything is installed already. Cleared here so the reference is not held past the first construction of every type.
        installing = undefined;
        return;
    }
    installing = inst._zod;
    Object.defineProperty(proto, key, {
        configurable: true,
        get () {
            // Shadowed before computing so a re-entrant read from a recursive schema resolves to undefined instead of running the getter again.
            Object.defineProperty(this, key, breaker);
            const outer = broke;
            broke = false;
            try {
                const value = compute(this);
                // A result that resolved through a recursion break is recomputed once the graph is complete; everything else memoizes, undefined included.
                if (broke) delete this[key];
                else Object.defineProperty(this, key, {
                    configurable: true,
                    writable: true,
                    value
                });
                broke = broke || outer;
                return value;
            } catch (err) {
                // A compute that threw memoizes nothing, so a later read runs it again and fails the same way. The shadow goes with it, since leaving it installed would answer undefined for every later read.
                delete this[key];
                broke = broke || outer;
                throw err;
            }
        },
        set (value) {
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                value
            });
        }
    });
}
function installLazyProp(inst, key, make, enumerable) {
    const proto = claim(inst, key);
    if (!proto) return;
    Object.defineProperty(proto, key, {
        configurable: true,
        get () {
            // Shadowed before computing, so a re-entrant read from a self-referential shape resolves to undefined instead of running the getter again. A data property rather than an accessor: an own accessor is the dictionary-mode transition this exists to avoid.
            const desc = {
                configurable: true,
                writable: true,
                enumerable,
                value: undefined
            };
            Object.defineProperty(this, key, desc);
            // a compute that throws leaves the shadow behind, so later reads answer undefined instead of re-throwing; `defineLazy` did the same, and `defineLazyInternal`'s delete-on-catch would cost bytes in every bundle for a case only a throwing user getter reaches
            desc.value = make(this);
            Object.defineProperty(this, key, desc);
            return desc.value;
        },
        set (value) {
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                enumerable,
                value
            });
        }
    });
}
const CONSTANT_CATCH = "~constantCatch";
function constantCatch(value) {
    const fn = ()=>value;
    fn[CONSTANT_CATCH] = true;
    return fn;
}
}),
];})()

//# sourceMappingURL=%5Broot-of-the-server%5D__21b-0hx-rg45g._.js.map