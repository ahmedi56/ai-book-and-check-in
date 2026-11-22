(()=>{"use strict";module.exports = [
"[project]/src/components/AuthForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthForm",
    ()=>AuthForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function AuthForm({ mode, next, email: presetEmail }) {
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    async function submit(e) {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        setBusy(true);
        setError("");
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"])(`/api/auth/${mode}`, {
                body: {
                    email: f.get("email"),
                    password: f.get("password"),
                    ...mode === "signup" ? {
                        name: f.get("name")
                    } : {}
                }
            });
            // Full navigation so every server component sees the new session.
            window.location.assign(next.startsWith("/") && !next.startsWith("//") ? next : "/app");
        } catch (err) {
            setError(err.message);
            setBusy(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: submit,
        className: "space-y-4",
        children: [
            mode === "signup" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                label: "Your name",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    name: "name",
                    required: true,
                    minLength: 2,
                    maxLength: 80,
                    autoComplete: "name",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inputClass"]
                }, void 0, false, {
                    fileName: "[project]/src/components/AuthForm.tsx",
                    lineNumber: 27,
                    columnNumber: 54
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AuthForm.tsx",
                lineNumber: 27,
                columnNumber: 29
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                label: "Email",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    name: "email",
                    type: "email",
                    required: true,
                    defaultValue: presetEmail,
                    autoComplete: "email",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inputClass"]
                }, void 0, false, {
                    fileName: "[project]/src/components/AuthForm.tsx",
                    lineNumber: 28,
                    columnNumber: 28
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AuthForm.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                label: "Password",
                hint: mode === "signup" ? "At least 10 characters." : undefined,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    name: "password",
                    type: "password",
                    required: true,
                    minLength: mode === "signup" ? 10 : 1,
                    autoComplete: mode === "signup" ? "new-password" : "current-password",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inputClass"]
                }, void 0, false, {
                    fileName: "[project]/src/components/AuthForm.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AuthForm.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Notice"], {
                tone: "error",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/AuthForm.tsx",
                lineNumber: 32,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                type: "submit",
                disabled: busy,
                className: "w-full",
                children: busy ? "One moment…" : mode === "signup" ? "Create account" : "Sign in"
            }, void 0, false, {
                fileName: "[project]/src/components/AuthForm.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-[15px] text-ink-soft",
                children: [
                    mode === "signup" ? "Already have an account? " : "New here? ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "font-semibold text-brand",
                        href: `${mode === "signup" ? "/login" : "/signup"}?next=${encodeURIComponent(next)}`,
                        children: mode === "signup" ? "Sign in" : "Create an account"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AuthForm.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AuthForm.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AuthForm.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiError",
    ()=>ApiError,
    "api",
    ()=>api,
    "newKey",
    ()=>newKey
]);
"use client";
class ApiError extends Error {
    code;
    status;
    data;
    constructor(message, code, status, data){
        super(message), this.code = code, this.status = status, this.data = data;
    }
}
async function api(path, opts = {}) {
    let res;
    try {
        res = await fetch(path, {
            method: opts.method ?? (opts.body !== undefined ? "POST" : "GET"),
            headers: {
                ...opts.body !== undefined ? {
                    "content-type": "application/json"
                } : {},
                ...opts.headers
            },
            body: opts.body !== undefined ? JSON.stringify(opts.body) : undefined
        });
    } catch  {
        throw new ApiError("No connection. Check your internet and try again.", "network", 0);
    }
    const json = await res.json().catch(()=>({}));
    if (!res.ok) throw new ApiError(json?.error?.message ?? "Something went wrong.", json?.error?.code ?? "error", res.status, json?.error?.data);
    return json;
}
const newKey = ()=>crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}),
"[project]/src/components/ui.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "Card",
    ()=>Card,
    "Field",
    ()=>Field,
    "Logo",
    ()=>Logo,
    "Notice",
    ()=>Notice,
    "STATUS_LABEL",
    ()=>STATUS_LABEL,
    "SourceTag",
    ()=>SourceTag,
    "StatusBadge",
    ()=>StatusBadge,
    "cx",
    ()=>cx,
    "inputClass",
    ()=>inputClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const cx = (...c)=>c.filter(Boolean).join(" ");
;
const BTN = {
    primary: "bg-brand text-white hover:bg-brand-deep",
    quiet: "bg-white text-ink ring-1 ring-line hover:bg-paper",
    danger: "bg-white text-rose ring-1 ring-rose/40 hover:bg-rose-soft",
    mint: "bg-mint text-white hover:brightness-95"
};
function Button({ variant = "primary", className, ...p }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ...p,
        className: cx("inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 text-[15px] font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50", BTN[variant], className)
    }, void 0, false, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
const inputClass = "block w-full min-h-11 rounded-xl border border-line bg-white px-3 text-[15px] text-ink placeholder:text-muted/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-sky/40";
function Field({ label, hint, children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: cx("block", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mb-1 block text-sm font-semibold text-ink-soft",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            children,
            hint ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mt-1 block text-[13px] text-muted",
                children: hint
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 30,
                columnNumber: 15
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
function Notice({ tone = "info", children }) {
    const tones = {
        info: "bg-white ring-line text-ink-soft",
        error: "bg-rose-soft ring-rose/30 text-rose",
        ok: "bg-mint-soft ring-mint/40 text-ink",
        warn: "bg-amber-soft ring-amber/30 text-amber"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: tone === "error" ? "alert" : "status",
        className: cx("rounded-xl px-4 py-3 text-[15px] ring-1", tones[tone]),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 37,
        columnNumber: 10
    }, this);
}
const STATUS_LABEL = {
    pending: "Tentative",
    confirmed: "Confirmed",
    checked_in: "Arrived",
    completed: "Completed",
    cancelled: "Cancelled",
    no_show: "No-show"
};
const STATUS_TONE = {
    pending: "bg-amber-soft text-amber",
    confirmed: "bg-[#e3edff] text-brand-deep",
    checked_in: "bg-mint-soft text-[#087a5d]",
    completed: "bg-paper text-ink-soft ring-1 ring-line",
    cancelled: "bg-rose-soft text-rose",
    no_show: "bg-rose-soft text-rose"
};
function StatusBadge({ status }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: cx("inline-flex items-center rounded-full px-2.5 py-0.5 text-[13px] font-semibold whitespace-nowrap", STATUS_TONE[status] ?? "bg-paper"),
        children: STATUS_LABEL[status] ?? status
    }, void 0, false, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 48,
        columnNumber: 10
    }, this);
}
const SOURCE_LABEL = {
    ai: "Assistant",
    web: "Booking form",
    staff: "Staff"
};
function SourceTag({ source }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-[13px] text-muted",
        children: SOURCE_LABEL[source] ?? source
    }, void 0, false, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 53,
        columnNumber: 10
    }, this);
}
function Card({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: cx("overflow-hidden rounded-2xl bg-surface ring-1 ring-line", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 57,
        columnNumber: 10
    }, this);
}
function Logo({ size = 36 }) {
    // eslint-disable-next-line @next/next/no-img-element
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "/logo-192.png",
        alt: "",
        width: size,
        height: size,
        className: "shrink-0"
    }, void 0, false, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 62,
        columnNumber: 10
    }, this);
}
}),
];})()

//# sourceMappingURL=src_components_0l7_rf8hnrhbi._.js.map