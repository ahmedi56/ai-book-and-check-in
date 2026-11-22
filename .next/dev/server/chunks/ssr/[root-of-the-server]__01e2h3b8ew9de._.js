module.exports = [
(()=>{"use strict";return[
"[project]/src/app/app/[slug]/settings/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "default",
    ()=>SettingsPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/booking/availability.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/page.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ai$2f$provider$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ai/provider.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$providers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/notify/providers.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/time.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsPanel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SettingsPanel.tsx [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$providers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$providers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
const metadata = {
    title: "Settings"
};
async function SettingsPage({ params }) {
    const { slug } = await params;
    const { business, role, user } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pageMember"])(slug, "settings");
    const ctx = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loadContext"])(business.id);
    const [agent, faqs] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAgent"])(business.id),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFaqs"])(business.id)
    ]);
    const owner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["can"])(role, "team");
    const members = owner ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["q"])("SELECT u.id, u.name, u.email, m.role FROM memberships m JOIN users u ON u.id = m.user_id WHERE m.business_id = $1 ORDER BY m.created_at", [
        business.id
    ]) : [];
    const invitations = owner ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["q"])("SELECT id, email, role FROM invitations WHERE business_id = $1 AND accepted_at IS NULL AND expires_at > now() ORDER BY created_at DESC", [
        business.id
    ]) : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-3xl space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-extrabold",
                children: "Settings"
            }, void 0, false, {
                fileName: "[project]/src/app/app/[slug]/settings/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsPanel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SettingsPanel"], {
                businessId: business.id,
                business: business,
                policies: ctx.policies,
                hours: ctx.hours.map((h)=>({
                        weekday: h.weekday,
                        open: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["minutesToLabel"])(h.open_min),
                        close: h.close_min === 1440 ? "24:00" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["minutesToLabel"])(h.close_min)
                    })),
                closures: ctx.closures.map((c)=>({
                        id: c.id,
                        label: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fmtDate"])(c.starts_at, business.timezone)} to ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fmtDate"])(new Date(c.ends_at.getTime() - 1), business.timezone)}`,
                        reason: c.reason
                    })),
                resources: ctx.resources.filter((r)=>r.active).map((r)=>({
                        id: r.id,
                        name: r.name,
                        capacity: r.capacity,
                        type: r.type
                    })),
                services: ctx.services.filter((s)=>s.active).map((s)=>({
                        id: s.id,
                        name: s.name,
                        description: s.description,
                        duration_min: s.duration_min,
                        price_cents: s.price_cents,
                        currency: s.currency,
                        resource_type: s.resource_type
                    })),
                agent: agent,
                faqs: faqs,
                ai: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ai$2f$provider$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aiProviderInfo"])(),
                email: {
                    delivers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$providers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["emailProvider"])().delivers,
                    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$providers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["emailProvider"])().name
                },
                team: owner ? {
                    members,
                    invitations,
                    me: user.id
                } : null
            }, void 0, false, {
                fileName: "[project]/src/app/app/[slug]/settings/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/app/[slug]/settings/page.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/icon.png.mjs { IMAGE => \"[project]/src/app/icon.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$icon$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/icon.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$icon$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 48,
    height: 48
};
}),
"[project]/src/components/SettingsPanel.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingsPanel",
    ()=>SettingsPanel
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const SettingsPanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SettingsPanel() from the server but SettingsPanel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/SettingsPanel.tsx", "SettingsPanel");
}),
"[project]/src/components/SettingsPanel.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsPanel$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/SettingsPanel.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsPanel$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/lib/ai/provider.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AiUnavailable",
    ()=>AiUnavailable,
    "aiProvider",
    ()=>aiProvider,
    "aiProviderInfo",
    ()=>aiProviderInfo,
    "setAiProviderForTests",
    ()=>setAiProviderForTests
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/env.ts [app-rsc] (ecmascript)");
;
class AiUnavailable extends Error {
}
let override = null;
function setAiProviderForTests(p) {
    override = p;
}
async function aiProvider() {
    if (override) return override;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].aiProvider === "openai" && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].aiBaseUrl && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].aiApiKey && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].aiModel) {
        return (await __turbopack_context__.A("[project]/src/lib/ai/openai.ts [app-rsc] (ecmascript, async loader)")).openAiCompatible();
    }
    return (await __turbopack_context__.A("[project]/src/lib/ai/local.ts [app-rsc] (ecmascript, async loader)")).localAssistant;
}
function aiProviderInfo() {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].aiProvider === "openai" && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].aiBaseUrl && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].aiApiKey && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].aiModel) {
        return {
            kind: "llm",
            label: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].aiModel} via ${new URL(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].aiBaseUrl).host}`
        };
    }
    return {
        kind: "basic",
        label: "Built-in basic assistant (no AI model connected)"
    };
}
}),
"[project]/src/lib/audit.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "audit",
    ()=>audit,
    "log",
    ()=>log
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
async function audit(entry, db) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["q"])("INSERT INTO audit_logs (business_id, user_id, action, entity, entity_id, detail) VALUES ($1,$2,$3,$4,$5,$6)", [
        entry.businessId,
        entry.userId,
        entry.action,
        entry.entity ?? "",
        entry.entityId ?? "",
        JSON.stringify(entry.detail ?? {})
    ], db);
}
function log(level, msg, fields = {}) {
    const line = JSON.stringify({
        t: new Date().toISOString(),
        level,
        msg,
        ...fields
    });
    if (level === "error") console.error(line);
    else console.log(line);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/business.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "createBusiness",
    ()=>createBusiness,
    "eraseCustomer",
    ()=>eraseCustomer,
    "getAgent",
    ()=>getAgent,
    "getFaqs",
    ()=>getFaqs,
    "getPublicBusiness",
    ()=>getPublicBusiness,
    "saveLogo",
    ()=>saveLogo,
    "slugify",
    ()=>slugify,
    "updateSettings",
    ()=>updateSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/errors.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/time.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/audit.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/booking/availability.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const RESOURCE_NOUN = {
    restaurant: {
        type: "table",
        noun: "Table",
        service: "Table reservation"
    },
    salon: {
        type: "staff",
        noun: "Stylist",
        service: "Appointment"
    },
    clinic: {
        type: "staff",
        noun: "Practitioner",
        service: "Consultation"
    },
    hotel: {
        type: "room",
        noun: "Room",
        service: "Room booking"
    },
    repair: {
        type: "staff",
        noun: "Technician",
        service: "Service appointment"
    },
    other: {
        type: "slot",
        noun: "Slot",
        service: "Booking"
    }
};
function slugify(name) {
    const s = name.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40);
    return s.length >= 3 ? s : `business-${s}`.replace(/-$/, "");
}
function parseHours(hours) {
    const out = hours.map((h)=>({
            weekday: h.weekday,
            open_min: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["labelToMinutes"])(h.open),
            close_min: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["labelToMinutes"])(h.close)
        }));
    for (const h of out)if (h.close_min <= h.open_min) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invalid"])("Closing time must be after opening time (hours past midnight are not supported yet).");
    for (const a of out)for (const b of out){
        if (a !== b && a.weekday === b.weekday && a.open_min < b.close_min && b.open_min < a.close_min) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invalid"])("Opening periods on the same day overlap.");
    }
    return out;
}
async function setPolicies(db, businessId, p) {
    const keys = Object.keys(p).filter((k)=>p[k] !== undefined);
    if (!keys.length) return;
    // Keys come from a strict zod schema, never from raw input.
    const sets = keys.map((k, i)=>`${k} = $${i + 2}`).join(", ");
    await db.query(`UPDATE business_policies SET ${sets} WHERE business_id = $1`, [
        businessId,
        ...keys.map((k)=>p[k])
    ]);
}
async function createBusiness(userId, input) {
    const hours = parseHours(input.hours);
    const kind = RESOURCE_NOUN[input.type];
    const base = slugify(input.name);
    for(let attempt = 0; attempt < 6; attempt++){
        const slug = attempt === 0 ? base : `${base}-${Math.random().toString(36).slice(2, 6)}`;
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tx"])(async (db)=>{
                const b = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["one"])(`INSERT INTO businesses (slug, name, type, timezone, description, address, phone, contact_email)
           VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING id`, [
                    slug,
                    input.name,
                    input.type,
                    input.timezone,
                    input.description,
                    input.address,
                    input.phone,
                    input.contact_email
                ], db);
                await db.query("INSERT INTO memberships (user_id, business_id, role) VALUES ($1,$2,'owner')", [
                    userId,
                    b.id
                ]);
                await db.query("INSERT INTO business_policies (business_id) VALUES ($1)", [
                    b.id
                ]);
                await setPolicies(db, b.id, input.policies);
                await db.query("INSERT INTO agent_configs (business_id) VALUES ($1)", [
                    b.id
                ]);
                await setAgent(db, b.id, input.agent);
                await db.query("INSERT INTO services (business_id, name, resource_type) VALUES ($1,$2,$3)", [
                    b.id,
                    input.service_name || kind.service,
                    kind.type
                ]);
                for (const h of hours)await db.query("INSERT INTO opening_hours (business_id, weekday, open_min, close_min) VALUES ($1,$2,$3,$4)", [
                    b.id,
                    h.weekday,
                    h.open_min,
                    h.close_min
                ]);
                let n = 0;
                for (const row of input.capacity){
                    for(let i = 0; i < row.count; i++){
                        n++;
                        await db.query("INSERT INTO resources (business_id, type, name, capacity, sort) VALUES ($1,$2,$3,$4,$5)", [
                            b.id,
                            kind.type,
                            `${row.label || kind.noun} ${n}`,
                            row.capacity,
                            n
                        ]);
                    }
                }
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["audit"])({
                    businessId: b.id,
                    userId,
                    action: "business.created"
                }, db);
                return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["one"])(`SELECT ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BUSINESS_COLUMNS"]} FROM businesses b WHERE b.id = $1`, [
                    b.id
                ], db);
            });
        } catch (e) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pgCode"])(e) === "23505" && e.constraint === "businesses_slug_key") continue;
            throw e;
        }
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppError"]("slug_taken", "Could not create a unique address for this business. Try a slightly different name.", 409);
}
async function setAgent(db, businessId, a) {
    const keys = Object.keys(a).filter((k)=>a[k] !== undefined);
    if (!keys.length) return;
    const sets = keys.map((k, i)=>`${k} = $${i + 2}`).join(", ");
    await db.query(`UPDATE agent_configs SET ${sets} WHERE business_id = $1`, [
        businessId,
        ...keys.map((k)=>a[k])
    ]);
}
async function updateSettings(businessId, userId, s) {
    const hours = s.hours ? parseHours(s.hours) : null;
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tx"])(async (db)=>{
        if (s.profile) {
            const keys = Object.keys(s.profile).filter((k)=>s.profile[k] !== undefined);
            if (keys.length) {
                const sets = keys.map((k, i)=>`${k} = $${i + 2}`).join(", ");
                await db.query(`UPDATE businesses SET ${sets} WHERE id = $1`, [
                    businessId,
                    ...keys.map((k)=>s.profile[k])
                ]);
            }
        }
        if (s.online_booking_enabled !== undefined) await db.query("UPDATE businesses SET online_booking_enabled = $2 WHERE id = $1", [
            businessId,
            s.online_booking_enabled
        ]);
        if (s.ai_enabled !== undefined) await db.query("UPDATE businesses SET ai_enabled = $2 WHERE id = $1", [
            businessId,
            s.ai_enabled
        ]);
        if (s.policies) await setPolicies(db, businessId, s.policies);
        if (s.agent) await setAgent(db, businessId, s.agent);
        if (hours) {
            await db.query("DELETE FROM opening_hours WHERE business_id = $1", [
                businessId
            ]);
            for (const h of hours)await db.query("INSERT INTO opening_hours (business_id, weekday, open_min, close_min) VALUES ($1,$2,$3,$4)", [
                businessId,
                h.weekday,
                h.open_min,
                h.close_min
            ]);
        }
        if (s.faqs) {
            await db.query("DELETE FROM faqs WHERE business_id = $1", [
                businessId
            ]);
            let i = 0;
            for (const f of s.faqs)await db.query("INSERT INTO faqs (business_id, question, answer, sort) VALUES ($1,$2,$3,$4)", [
                businessId,
                f.question,
                f.answer,
                i++
            ]);
        }
        if (s.resources) {
            // Resources referenced by past bookings are never deleted, only retired.
            const keep = s.resources.filter((r)=>r.id).map((r)=>r.id);
            await db.query("UPDATE resources SET active = false WHERE business_id = $1 AND NOT (id = ANY($2::uuid[]))", [
                businessId,
                keep
            ]);
            let i = 0;
            for (const r of s.resources){
                i++;
                if (r.id) await db.query("UPDATE resources SET name = $3, capacity = $4, type = $5, active = true, sort = $6 WHERE business_id = $1 AND id = $2", [
                    businessId,
                    r.id,
                    r.name,
                    r.capacity,
                    r.type,
                    i
                ]);
                else await db.query("INSERT INTO resources (business_id, name, capacity, type, sort) VALUES ($1,$2,$3,$4,$5)", [
                    businessId,
                    r.name,
                    r.capacity,
                    r.type,
                    i
                ]);
            }
        }
        if (s.services) {
            const keep = s.services.filter((r)=>r.id).map((r)=>r.id);
            await db.query("UPDATE services SET active = false WHERE business_id = $1 AND NOT (id = ANY($2::uuid[]))", [
                businessId,
                keep
            ]);
            let i = 0;
            for (const v of s.services){
                i++;
                const args = [
                    v.name,
                    v.description,
                    v.duration_min,
                    v.price_cents,
                    v.currency,
                    v.resource_type,
                    i
                ];
                if (v.id) await db.query("UPDATE services SET name=$3, description=$4, duration_min=$5, price_cents=$6, currency=$7, resource_type=$8, sort=$9, active=true WHERE business_id=$1 AND id=$2", [
                    businessId,
                    v.id,
                    ...args
                ]);
                else await db.query("INSERT INTO services (business_id, name, description, duration_min, price_cents, currency, resource_type, sort) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)", [
                    businessId,
                    ...args
                ]);
            }
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["audit"])({
            businessId,
            userId,
            action: "settings.updated",
            detail: {
                sections: Object.keys(s)
            }
        }, db);
    });
}
async function getPublicBusiness(slug) {
    if (!/^[a-z0-9-]{3,50}$/.test(slug)) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["one"])(`SELECT ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BUSINESS_COLUMNS"]} FROM businesses b WHERE b.slug = $1`, [
        slug
    ]);
}
const getAgent = async (businessId)=>await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["one"])("SELECT name, tone, languages, greeting, extra_instructions, handoff_contact FROM agent_configs WHERE business_id = $1", [
        businessId
    ]);
const getFaqs = (businessId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["q"])("SELECT question, answer FROM faqs WHERE business_id = $1 ORDER BY sort", [
        businessId
    ]);
// ---- logo upload ---------------------------------------------------------------
const SIGNATURES = [
    {
        mime: "image/png",
        test: (b)=>b.subarray(0, 8).equals(Buffer.from([
                0x89,
                0x50,
                0x4e,
                0x47,
                0x0d,
                0x0a,
                0x1a,
                0x0a
            ]))
    },
    {
        mime: "image/jpeg",
        test: (b)=>b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff
    },
    {
        mime: "image/webp",
        test: (b)=>b.subarray(0, 4).toString() === "RIFF" && b.subarray(8, 12).toString() === "WEBP"
    }
];
async function saveLogo(businessId, userId, bytes) {
    if (bytes.length === 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invalid"])("The file is empty.");
    if (bytes.length > 1_000_000) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppError"]("too_large", "Logo must be smaller than 1 MB.", 413);
    const sig = SIGNATURES.find((s)=>s.test(bytes));
    if (!sig) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invalid"])("Logo must be a PNG, JPEG or WebP image.");
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["q"])("UPDATE businesses SET logo = $2, logo_mime = $3 WHERE id = $1", [
        businessId,
        bytes,
        sig.mime
    ]);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["audit"])({
        businessId,
        userId,
        action: "logo.updated"
    });
}
async function eraseCustomer(businessId, userId, customerId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tx"])(async (db)=>{
        const live = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["one"])("SELECT 1 FROM reservations WHERE business_id = $1 AND customer_id = $2 AND status IN ('pending','confirmed') AND starts_at > now() LIMIT 1", [
            businessId,
            customerId
        ], db);
        if (live) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppError"]("has_upcoming", "Cancel this customer's upcoming reservations before deleting their data.", 409);
        const res = await db.query("UPDATE customers SET name = 'Deleted customer', email = NULL, phone = NULL, notify_consent = false, erased_at = now() WHERE business_id = $1 AND id = $2 AND erased_at IS NULL", [
            businessId,
            customerId
        ]);
        if (!res.rowCount) return false;
        await db.query("UPDATE reservations SET notes = '' WHERE business_id = $1 AND customer_id = $2", [
            businessId,
            customerId
        ]);
        await db.query("UPDATE notification_jobs SET status = 'cancelled', recipient = '' WHERE business_id = $1 AND reservation_id IN (SELECT id FROM reservations WHERE customer_id = $2) AND status = 'queued'", [
            businessId,
            customerId
        ]);
        await db.query("UPDATE notification_jobs SET recipient = '' WHERE business_id = $1 AND reservation_id IN (SELECT id FROM reservations WHERE customer_id = $2)", [
            businessId,
            customerId
        ]);
        // Chat transcripts of their bookings contain what they typed (name, email, phone): remove them too.
        await db.query("DELETE FROM messages WHERE conversation_id IN (SELECT c.id FROM conversations c JOIN reservations r ON r.id = c.reservation_id WHERE r.business_id = $1 AND r.customer_id = $2)", [
            businessId,
            customerId
        ]);
        await db.query("UPDATE conversations SET escalation = NULL WHERE business_id = $1 AND reservation_id IN (SELECT id FROM reservations WHERE customer_id = $2)", [
            businessId,
            customerId
        ]);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["audit"])({
            businessId,
            userId,
            action: "customer.erased",
            entity: "customer",
            entityId: customerId
        }, db);
        return true;
    });
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/notify/providers.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "SendError",
    ()=>SendError,
    "emailProvider",
    ()=>emailProvider,
    "setEmailProviderForTests",
    ()=>setEmailProviderForTests
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$nodemailer__$5b$external$5d$__$28$nodemailer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$nodemailer$29$__ = __turbopack_context__.i("[externals]/nodemailer [external] (nodemailer, esm_import, [project]/node_modules/nodemailer)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/env.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$nodemailer__$5b$external$5d$__$28$nodemailer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$nodemailer$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$nodemailer__$5b$external$5d$__$28$nodemailer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$nodemailer$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
class SendError extends Error {
    transient;
    constructor(message, transient){
        super(message), this.transient = transient;
    }
}
const logProvider = {
    name: "log",
    delivers: false,
    async send () {
        return {};
    }
};
function smtpProvider() {
    const transport = __TURBOPACK__imported__module__$5b$externals$5d2f$nodemailer__$5b$external$5d$__$28$nodemailer$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$nodemailer$29$__["default"].createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: process.env.SMTP_USER ? {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        } : undefined,
        connectionTimeout: 10_000,
        socketTimeout: 15_000,
        tls: process.env.SMTP_TLS_INSECURE === "1" ? {
            rejectUnauthorized: false
        } : undefined
    });
    return {
        name: "smtp",
        delivers: true,
        async send (email) {
            try {
                const info = await transport.sendMail({
                    from: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].emailFrom,
                    to: email.to,
                    subject: email.subject,
                    text: email.text,
                    html: email.html
                });
                if (info.rejected?.length) throw new SendError(`Recipient rejected: ${info.rejected.join(", ")}`, false);
                return {
                    id: info.messageId
                };
            } catch (e) {
                if (e instanceof SendError) throw e;
                const code = e.responseCode;
                // 5xx from the mail server is a definitive "no"; everything else (4xx, timeouts, DNS) may succeed later.
                throw new SendError(e.message, !(code && code >= 500));
            }
        }
    };
}
let override = null;
let cached = null;
function emailProvider() {
    if (override) return override;
    if (!cached) cached = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].emailProvider === "smtp" && process.env.SMTP_HOST ? smtpProvider() : logProvider;
    return cached;
}
function setEmailProviderForTests(p) {
    override = p;
    cached = null;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
]})(),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/app/[slug]/settings/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/app/[slug]/settings/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/icon.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/icon.1pot3hjr6hw1c.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__01e2h3b8ew9de._.js.map