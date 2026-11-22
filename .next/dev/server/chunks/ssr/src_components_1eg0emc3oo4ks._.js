(()=>{"use strict";module.exports = [
"[project]/src/components/AiSwitch.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AiSwitch",
    ()=>AiSwitch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/api.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function AiSwitch({ businessId, enabled }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [on, setOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(enabled);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    async function toggle() {
        setBusy(true);
        const next = !on;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"])(`/api/b/${businessId}/settings`, {
                method: "PATCH",
                body: {
                    ai_enabled: next
                }
            });
            setOn(next);
            router.refresh();
        } catch (e) {
            window.alert(e.message);
        } finally{
            setBusy(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        role: "switch",
        "aria-checked": on,
        disabled: busy,
        onClick: toggle,
        "data-testid": "ai-switch",
        className: `inline-flex min-h-10 items-center gap-2 rounded-full px-3 text-sm font-semibold ring-1 transition-colors ${on ? "bg-mint-soft text-[#087a5d] ring-mint/40" : "bg-amber-soft text-amber ring-amber/40"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `relative h-5 w-9 rounded-full transition-colors ${on ? "bg-mint" : "bg-muted/50"}`,
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `absolute top-0.5 size-4 rounded-full bg-white transition-all ${on ? "left-[18px]" : "left-0.5"}`
                }, void 0, false, {
                    fileName: "[project]/src/components/AiSwitch.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AiSwitch.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            on ? "Assistant on" : "Assistant paused"
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AiSwitch.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/LiveRefresh.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LiveRefresh",
    ()=>LiveRefresh
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function LiveRefresh({ businessId }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("connecting");
    const timer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let closed = false;
        let lastPulse = null;
        let gotEvent = false;
        const refresh = ()=>{
            if (timer.current) clearTimeout(timer.current);
            timer.current = setTimeout(()=>router.refresh(), 250);
        };
        // Refresh only if the data fingerprint differs from the last one seen.
        const checkPulse = async ()=>{
            try {
                const res = await fetch(`/api/b/${businessId}/pulse`, {
                    cache: "no-store"
                });
                if (!res.ok) return;
                const { v } = await res.json();
                if (lastPulse !== null && v !== lastPulse && !closed) refresh();
                lastPulse = v;
            } catch  {}
        };
        void checkPulse();
        const es = new EventSource(`/api/b/${businessId}/events`);
        es.addEventListener("hello", ()=>{
            gotEvent = true;
            setState("live");
        });
        es.onmessage = ()=>{
            gotEvent = true;
            setState("live");
            void checkPulse();
        };
        es.onerror = ()=>{
            gotEvent = false;
            setState("checking");
        };
        // If the connection opens but nothing ever arrives through it, something in between is
        // holding the stream back: fall back to checking.
        const settle = setTimeout(()=>{
            if (!gotEvent && !closed) setState("checking");
        }, 6000);
        const poll = setInterval(()=>{
            if (!gotEvent && document.visibilityState === "visible") void checkPulse();
        }, 10_000);
        const onVisible = ()=>{
            if (document.visibilityState === "visible") void checkPulse();
        };
        document.addEventListener("visibilitychange", onVisible);
        return ()=>{
            closed = true;
            es.close();
            clearInterval(poll);
            clearTimeout(settle);
            document.removeEventListener("visibilitychange", onVisible);
            if (timer.current) clearTimeout(timer.current);
        };
    }, [
        businessId,
        router
    ]);
    const label = state === "live" ? "Live updates" : state === "checking" ? "Checking for changes every 10 seconds" : "Connecting";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex items-center gap-1.5 text-[13px] text-muted",
        title: label,
        "data-testid": "live-state",
        "data-state": state,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `size-2 rounded-full ${state === "connecting" ? "bg-amber" : "bg-mint"}`,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/LiveRefresh.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "hidden sm:inline",
                children: state === "live" ? "Live" : state === "checking" ? "Auto-updating" : "Connecting"
            }, void 0, false, {
                fileName: "[project]/src/components/LiveRefresh.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LiveRefresh.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/SignOut.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignOut",
    ()=>SignOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/api.ts [app-ssr] (ecmascript)");
"use client";
;
;
function SignOut() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: "rounded-lg px-2 py-1.5 text-sm font-semibold text-ink-soft hover:bg-paper",
        onClick: async ()=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"])("/api/auth/logout", {
                method: "POST"
            }).catch(()=>{});
            window.location.assign("/");
        },
        children: "Sign out"
    }, void 0, false, {
        fileName: "[project]/src/components/SignOut.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/StaffNav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StaffNav",
    ()=>StaffNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const ICONS = {
    today: "M8 2v4M16 2v4M3 10h18M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM9 15l2 2 4-4",
    list: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
    calendar: "M3 5h18v16H3zM3 10h18M9 5v16M15 5v16",
    scan: "M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M8 8h3v3H8zM13 13h3v3h-3zM13 8h3M8 13v3",
    chat: "M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z",
    settings: "M4 7h10M18 7h2M4 17h4M12 17h8M14 4.5v5M8 14.5v5"
};
function StaffNav({ slug, escalations, canSettings }) {
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const base = `/app/${slug}`;
    const items = [
        {
            href: base,
            label: "Today",
            icon: "today",
            exact: true
        },
        {
            href: `${base}/reservations`,
            label: "Reservations",
            icon: "list"
        },
        {
            href: `${base}/calendar`,
            label: "Calendar",
            icon: "calendar"
        },
        {
            href: `${base}/checkin`,
            label: "Check-in",
            icon: "scan"
        },
        {
            href: `${base}/conversations`,
            label: "Conversations",
            icon: "chat",
            badge: escalations
        },
        ...canSettings ? [
            {
                href: `${base}/settings`,
                label: "Settings",
                icon: "settings"
            }
        ] : []
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "Main",
        className: "fixed inset-x-0 bottom-0 z-20 flex border-t border-line bg-white/95 backdrop-blur md:static md:block md:w-56 md:shrink-0 md:border-0 md:bg-transparent md:py-4",
        children: items.map((it)=>{
            const active = it.exact ? path === it.href : path.startsWith(it.href);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: it.href,
                "aria-current": active ? "page" : undefined,
                className: `relative flex min-h-14 flex-1 flex-col items-center justify-center gap-0.5 text-[11px] font-semibold md:mb-1 md:min-h-11 md:flex-row md:justify-start md:gap-3 md:rounded-xl md:px-3 md:text-[15px] ${active ? "text-brand md:bg-white md:ring-1 md:ring-line" : "text-ink-soft hover:text-ink"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "22",
                        height: "22",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.8",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: ICONS[it.icon]
                        }, void 0, false, {
                            fileName: "[project]/src/components/StaffNav.tsx",
                            lineNumber: 32,
                            columnNumber: 177
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/StaffNav.tsx",
                        lineNumber: 32,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: it.label.length > 9 ? "max-md:hidden" : "",
                        children: it.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/StaffNav.tsx",
                        lineNumber: 33,
                        columnNumber: 13
                    }, this),
                    it.label.length > 9 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "md:hidden",
                        children: it.label === "Reservations" ? "List" : "Chats"
                    }, void 0, false, {
                        fileName: "[project]/src/components/StaffNav.tsx",
                        lineNumber: 34,
                        columnNumber: 37
                    }, this),
                    it.badge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute top-1.5 right-[22%] rounded-full bg-rose px-1.5 text-[11px] leading-5 font-bold text-white md:static md:ml-auto",
                        "aria-label": `${it.badge} waiting for staff`,
                        children: it.badge
                    }, void 0, false, {
                        fileName: "[project]/src/components/StaffNav.tsx",
                        lineNumber: 35,
                        columnNumber: 25
                    }, this) : null
                ]
            }, it.href, true, {
                fileName: "[project]/src/components/StaffNav.tsx",
                lineNumber: 30,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/StaffNav.tsx",
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
];})()

//# sourceMappingURL=src_components_1eg0emc3oo4ks._.js.map