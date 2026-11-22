module.exports = [
(()=>{"use strict";return[
"[project]/src/app/app/[slug]/calendar/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "default",
    ()=>CalendarPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/luxon/build/es6/luxon.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/booking/availability.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/booking/search.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/page.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/time.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
const metadata = {
    title: "Calendar"
};
const BAR = {
    confirmed: "bg-brand text-white",
    pending: "bg-amber-soft text-amber ring-1 ring-amber/40",
    checked_in: "bg-mint text-white",
    completed: "bg-line text-ink-soft"
};
async function CalendarPage({ params, searchParams }) {
    const { slug } = await params;
    const { business } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pageMember"])(slug);
    const tz = business.timezone;
    const today = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["todayIn"])(tz);
    const sp = await searchParams;
    const date = sp.date && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isIsoDate"])(sp.date) ? sp.date : today;
    const day = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DateTime"].fromISO(date, {
        zone: tz
    });
    const ctx = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loadContext"])(business.id);
    const [{ rows }, avail] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listReservations"])(business.id, tz, {
            from: date,
            to: date,
            limit: 200
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDayAvailability"])(business.id, {
            date,
            partySize: 1,
            staff: true,
            now: new Date(0)
        }, undefined, ctx)
    ]);
    const live = rows.filter((r)=>![
            "cancelled",
            "no_show"
        ].includes(r.status));
    const hours = ctx.hours.filter((h)=>h.weekday === day.weekday);
    const winStart = hours.length ? Math.floor(Math.min(...hours.map((h)=>h.open_min)) / 60) * 60 : 9 * 60;
    const winEnd = hours.length ? Math.ceil(Math.max(...hours.map((h)=>h.close_min)) / 60) * 60 : 21 * 60;
    const span = winEnd - winStart;
    const resources = ctx.resources.filter((r)=>r.active || live.some((x)=>x.resource_id === r.id));
    const ticks = Array.from({
        length: span / 60 + 1
    }, (_, i)=>winStart + i * 60);
    const total = resources.filter((r)=>r.active).length;
    const pos = (d)=>{
        const l = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DateTime"].fromJSDate(d, {
            zone: tz
        });
        return (l.hour * 60 + l.minute - winStart) / span * 100;
    };
    const link = (d)=>`/app/${slug}/calendar?date=${d.toISODate()}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-end justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-extrabold",
                                children: "Calendar"
                            }, void 0, false, {
                                fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-ink-soft",
                                children: [
                                    day.toFormat("cccc d LLLL yyyy"),
                                    date === today ? " (today)" : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: link(day.minus({
                                    days: 1
                                })),
                                className: "inline-flex min-h-11 items-center rounded-xl px-4 font-semibold ring-1 ring-line hover:bg-white",
                                children: "Previous day"
                            }, void 0, false, {
                                fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/app/${slug}/calendar`,
                                className: "inline-flex min-h-11 items-center rounded-xl px-4 font-semibold ring-1 ring-line hover:bg-white",
                                children: "Today"
                            }, void 0, false, {
                                fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: link(day.plus({
                                    days: 1
                                })),
                                className: "inline-flex min-h-11 items-center rounded-xl px-4 font-semibold ring-1 ring-line hover:bg-white",
                                children: "Next day"
                            }, void 0, false, {
                                fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                method: "get",
                className: "flex items-end gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mb-1 block text-sm font-semibold text-ink-soft",
                                children: "Jump to date"
                            }, void 0, false, {
                                fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                                lineNumber: 53,
                                columnNumber: 34
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "date",
                                name: "date",
                                defaultValue: date,
                                className: "min-h-11 rounded-xl border border-line bg-white px-3"
                            }, void 0, false, {
                                fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                                lineNumber: 53,
                                columnNumber: 118
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "min-h-11 rounded-xl bg-ink px-4 font-semibold text-white",
                        children: "Go"
                    }, void 0, false, {
                        fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            !avail.open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                className: "px-6 py-10 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-display text-xl font-bold",
                        children: avail.closedReason ?? "Closed"
                    }, void 0, false, {
                        fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                        lineNumber: 58,
                        columnNumber: 50
                    }, this),
                    live.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-rose",
                        children: [
                            live.length,
                            " existing ",
                            live.length === 1 ? "reservation falls" : "reservations fall",
                            " on this day."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                        lineNumber: 58,
                        columnNumber: 152
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mb-2 text-lg font-bold",
                                children: [
                                    "Free ",
                                    business.type === "restaurant" ? "tables" : "places",
                                    " by start time"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1.5",
                                children: avail.slots.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-[4.2rem] rounded-lg px-1 py-1.5 text-center ring-1 ${s.free === 0 ? "bg-rose-soft ring-rose/30" : s.free < total && s.free <= Math.max(1, total * 0.25) ? "bg-amber-soft ring-amber/30" : "bg-white ring-line"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[13px] text-ink-soft tabular",
                                                children: s.time
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                                                lineNumber: 66,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-display text-lg leading-tight font-bold tabular",
                                                children: [
                                                    s.free,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[13px] font-medium text-muted",
                                                        children: [
                                                            "/",
                                                            total
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 95
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                                                lineNumber: 67,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, s.start, true, {
                                        fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mb-2 text-lg font-bold",
                                children: [
                                    "Timeline ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-sans text-base font-medium text-muted",
                                        children: [
                                            live.length,
                                            " ",
                                            live.length === 1 ? "reservation" : "reservations",
                                            ", ",
                                            live.reduce((n, r)=>n + r.party_size, 0),
                                            " guests"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 61
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                                className: "overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-[640px] p-3 pr-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative ml-28 h-6 text-[13px] text-muted tabular",
                                            children: ticks.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute -translate-x-1/2",
                                                    style: {
                                                        left: `${(t - winStart) / span * 100}%`
                                                    },
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["minutesToLabel"])(t)
                                                }, t, false, {
                                                    fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 37
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 17
                                        }, this),
                                        resources.map((res)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center border-t border-line",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-28 shrink-0 py-2 pr-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `truncate text-[15px] font-semibold ${res.active ? "" : "text-muted line-through"}`,
                                                                children: res.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[13px] text-muted",
                                                                children: [
                                                                    "seats ",
                                                                    res.capacity
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                                                                lineNumber: 84,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative h-12 flex-1",
                                                        style: {
                                                            backgroundImage: "linear-gradient(to right, var(--color-line) 1px, transparent 1px)",
                                                            backgroundSize: `${60 / span * 100}% 100%`
                                                        },
                                                        children: live.filter((r)=>r.resource_id === res.id).map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/app/${slug}/reservations/${r.id}`,
                                                                title: `${r.customer_name}, ${r.party_size} guests, ${r.reference}`,
                                                                className: `absolute top-1.5 bottom-1.5 overflow-hidden rounded-lg px-2 text-[13px] leading-9 font-semibold whitespace-nowrap ${BAR[r.status] ?? "bg-line"}`,
                                                                style: {
                                                                    left: `${Math.max(0, pos(r.starts_at))}%`,
                                                                    width: `${Math.max(3, pos(r.ends_at) - pos(r.starts_at))}%`
                                                                },
                                                                children: [
                                                                    r.customer_name,
                                                                    " (",
                                                                    r.party_size,
                                                                    ")"
                                                                ]
                                                            }, r.id, true, {
                                                                fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                                                                lineNumber: 88,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, res.id, true, {
                                                fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                                                lineNumber: 81,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/app/[slug]/calendar/page.tsx",
        lineNumber: 40,
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
"[project]/src/components/ui.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: cx("block", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mb-1 block text-sm font-semibold text-ink-soft",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            children,
            hint ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-[13px] text-muted",
        children: SOURCE_LABEL[source] ?? source
    }, void 0, false, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 53,
        columnNumber: 10
    }, this);
}
function Card({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
"[project]/src/lib/booking/reservations.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "RESERVATION_SELECT",
    ()=>RESERVATION_SELECT,
    "cancelReservation",
    ()=>cancelReservation,
    "checkIn",
    ()=>checkIn,
    "cleanCustomer",
    ()=>cleanCustomer,
    "createReservation",
    ()=>createReservation,
    "customerCanChange",
    ()=>customerCanChange,
    "findReservationByReferenceAndContact",
    ()=>findReservationByReferenceAndContact,
    "getReservation",
    ()=>getReservation,
    "getReservationByTicketToken",
    ()=>getReservationByTicketToken,
    "humanMinutes",
    ()=>humanMinutes,
    "rescheduleReservation",
    ()=>rescheduleReservation,
    "reservationHistory",
    ()=>reservationHistory,
    "setStatus",
    ()=>setStatus,
    "verifyReservation",
    ()=>verifyReservation,
    "verifyTicket",
    ()=>verifyTicket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/luxon/build/es6/luxon.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/errors.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/crypto.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$realtime$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/realtime.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/notify/jobs.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/booking/availability.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$realtime$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$realtime$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
const RESERVATION_SELECT = `
  SELECT r.id, r.business_id, r.reference, r.status, r.source, r.party_size, r.starts_at, r.ends_at, r.notes,
         r.created_at, r.updated_at, r.cancelled_at, r.checked_in_at,
         c.id AS customer_id, c.name AS customer_name, c.email AS customer_email, c.phone AS customer_phone,
         s.id AS service_id, s.name AS service_name, rs.id AS resource_id, rs.name AS resource_name,
         t.id AS ticket_id, t.status AS ticket_status
    FROM reservations r
    JOIN customers c  ON c.id = r.customer_id
    JOIN services  s  ON s.id = r.service_id
    JOIN resources rs ON rs.id = r.resource_id
    LEFT JOIN tickets t ON t.reservation_id = r.id`;
async function getReservation(businessId, id, db) {
    if (!/^[0-9a-f-]{36}$/i.test(id)) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["one"])(`${RESERVATION_SELECT} WHERE r.business_id = $1 AND r.id = $2`, [
        businessId,
        id
    ], db);
}
async function addEvent(db, r, kind, from, to, actor, detail = {}) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["q"])(`INSERT INTO reservation_events (reservation_id, business_id, kind, from_status, to_status, actor_type, actor_user_id, detail)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`, [
        r.id,
        r.business_id,
        kind,
        from,
        to,
        actor.type,
        actor.userId ?? null,
        JSON.stringify(detail)
    ], db);
}
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
function cleanCustomer(c) {
    const name = (c.name ?? "").trim().replace(/\s+/g, " ");
    const email = c.email?.trim().toLowerCase() || null;
    const phone = c.phone?.trim() || null;
    if (name.length < 2 || name.length > 80) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invalid"])("Please enter the name for the reservation.");
    if (email && (!EMAIL_RE.test(email) || email.length > 160)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invalid"])("That email address does not look right.");
    if (phone && (phone.replace(/\D/g, "").length < 6 || phone.length > 30)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invalid"])("That phone number does not look right.");
    if (!email && !phone) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invalid"])("Please give an email address or a phone number so we can reach you.");
    return {
        name,
        email,
        phone,
        consent: c.consent !== false
    };
}
async function createReservation(input) {
    const ctx = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loadContext"])(input.businessId);
    const staff = input.source === "staff";
    if (!staff && !ctx.business.online_booking_enabled) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppError"]("booking_disabled", "Online reservations are currently paused. Please contact us directly.", 409);
    }
    const service = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pickService"])(ctx, input.serviceId);
    if (!service) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invalid"])("This service cannot be booked.");
    if (!Number.isInteger(input.partySize) || input.partySize < 1) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invalid"])("Please tell us how many guests.");
    const start = new Date(input.startsAt);
    if (Number.isNaN(start.getTime())) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invalid"])("Invalid date or time.");
    const customer = cleanCustomer(input.customer);
    const notes = (input.notes ?? "").trim().slice(0, 500);
    const key = input.idempotencyKey?.slice(0, 100) || null;
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tx"])(async (db)=>{
            // Bookings for one business are taken one at a time. This keeps racing requests from
            // deadlocking each other on the overlap constraint; the constraint itself stays the guarantee.
            await db.query("SELECT pg_advisory_xact_lock(hashtextextended($1, 0))", [
                input.businessId
            ]);
            // A retried request (double click, network retry, AI repeating a tool call) returns the first result.
            if (key) {
                const prior = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["one"])("SELECT id FROM reservations WHERE business_id = $1 AND idempotency_key = $2", [
                    input.businessId,
                    key
                ], db);
                if (prior) return existing(input.businessId, prior.id, db);
            }
            const busy = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loadBusy"])(input.businessId, new Date(start.getTime() - 864e5), new Date(start.getTime() + 2 * 864e5), db);
            const check = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkSlot"])(ctx, service, start, input.partySize, busy, {
                staff,
                now: input.now
            });
            if (!check.ok) throw await unavailable(ctx, check.reason, input, service.id);
            const customerId = await upsertCustomer(db, input.businessId, customer);
            // The same person cannot hold two live bookings that overlap.
            const dup = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["one"])(`SELECT reference FROM reservations
          WHERE business_id = $1 AND customer_id = $2 AND status IN ('pending','confirmed','checked_in')
            AND starts_at < $4 AND ends_at > $3 LIMIT 1`, [
                input.businessId,
                customerId,
                check.start,
                check.end
            ], db);
            if (dup) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppError"]("duplicate_booking", `You already have a reservation at that time (reference ${dup.reference}).`, 409, {
                reference: dup.reference
            });
            // Try each free resource. The exclusion constraint is the final arbiter: if another
            // request took this resource a millisecond ago, the insert fails and we try the next one.
            let id = null;
            for (const res of check.candidates){
                for(let attempt = 0; attempt < 3 && !id; attempt++){
                    await db.query("SAVEPOINT try_insert");
                    try {
                        const row = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["one"])(`INSERT INTO reservations (business_id, reference, customer_id, service_id, resource_id, party_size,
                                         starts_at, ends_at, blocked_until, status, source, notes, idempotency_key, conversation_id, created_by)
               VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15) RETURNING id`, [
                            input.businessId,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["newReference"])(),
                            customerId,
                            service.id,
                            res.id,
                            input.partySize,
                            check.start,
                            check.end,
                            check.blockedUntil,
                            staff && input.tentative ? "pending" : "confirmed",
                            input.source,
                            notes,
                            key,
                            input.conversationId ?? null,
                            input.actor.userId ?? null
                        ], db);
                        id = row.id;
                        await db.query("RELEASE SAVEPOINT try_insert");
                    } catch (e) {
                        await db.query("ROLLBACK TO SAVEPOINT try_insert");
                        const code = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pgCode"])(e), constraint = e.constraint;
                        if (code === "23P01") break; // resource just taken → next resource
                        if (code === "40P01") continue; // deadlock with a racing insert → try again
                        if (code === "23505" && constraint === "reservations_business_id_reference_key") continue; // reference clash → new reference
                        throw e;
                    }
                }
                if (id) break;
            }
            if (!id) throw await unavailable(ctx, "full", input, service.id);
            const ticket = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["one"])("INSERT INTO tickets (reservation_id, business_id) VALUES ($1,$2) RETURNING id", [
                id,
                input.businessId
            ], db);
            const reservation = await getReservation(input.businessId, id, db);
            await addEvent(db, reservation, "created", null, reservation.status, input.actor, {
                source: input.source
            });
            if (input.conversationId) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["q"])("UPDATE conversations SET reservation_id = $2, outcome = 'booked', updated_at = now() WHERE id = $1 AND business_id = $3", [
                    input.conversationId,
                    id,
                    input.businessId
                ], db);
            }
            if (reservation.status === "confirmed") await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["enqueueForReservation"])(db, ctx.policies, reservation, "confirmation", customer.consent);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$realtime$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["publish"])({
                businessId: input.businessId,
                type: "reservation.created",
                id
            }, db);
            return {
                reservation,
                ticketToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ticketToken"])(ticket.id),
                duplicateRequest: false
            };
        });
    } catch (e) {
        // Two identical requests raced: the loser hits the unique idempotency key. Return the winner's booking.
        if (key && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pgCode"])(e) === "23505" && e.constraint === "reservations_business_id_idempotency_key_key") {
            const prior = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["one"])("SELECT id FROM reservations WHERE business_id = $1 AND idempotency_key = $2", [
                input.businessId,
                key
            ]);
            if (prior) return existing(input.businessId, prior.id);
        }
        throw e;
    }
}
async function existing(businessId, id, db) {
    const reservation = await getReservation(businessId, id, db);
    return {
        reservation,
        ticketToken: reservation.ticket_id ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ticketToken"])(reservation.ticket_id) : "",
        duplicateRequest: true
    };
}
async function unavailable(ctx, reason, input, serviceId, excludeReservationId) {
    const local = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DateTime"].fromISO(input.startsAt).setZone(ctx.business.timezone);
    const alternatives = local.isValid ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findAlternatives"])(input.businessId, {
        date: local.toISODate(),
        time: local.toFormat("HH:mm"),
        partySize: input.partySize,
        serviceId,
        staff: input.source === "staff",
        excludeReservationId
    }) : [];
    return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppError"]("slot_unavailable", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["reasonText"])(reason, ctx) || "That time is not available.", 409, {
        reason,
        alternatives
    });
}
async function upsertCustomer(db, businessId, c) {
    const digits = c.phone ? c.phone.replace(/\D/g, "") : "";
    const found = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["one"])(`SELECT id FROM customers
      WHERE business_id = $1 AND erased_at IS NULL AND lower(name) = lower($2)
        AND (($3::text IS NOT NULL AND lower(email) = $3) OR ($4 <> '' AND phone_digits = $4))
      ORDER BY created_at LIMIT 1`, [
        businessId,
        c.name,
        c.email,
        digits
    ], db);
    if (found) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["q"])("UPDATE customers SET email = coalesce($2, email), phone = coalesce($3, phone), notify_consent = $4 WHERE id = $1", [
            found.id,
            c.email,
            c.phone,
            c.consent
        ], db);
        return found.id;
    }
    const row = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["one"])("INSERT INTO customers (business_id, name, email, phone, notify_consent) VALUES ($1,$2,$3,$4,$5) RETURNING id", [
        businessId,
        c.name,
        c.email,
        c.phone,
        c.consent
    ], db);
    return row.id;
}
function customerCanChange(r, p, now = new Date()) {
    if (![
        "pending",
        "confirmed"
    ].includes(r.status)) return {
        allowed: false,
        reason: `This reservation is ${r.status.replace("_", " ")}.`
    };
    const cutoff = r.starts_at.getTime() - p.cancel_cutoff_min * 60_000;
    if (now.getTime() > cutoff) {
        return {
            allowed: false,
            reason: `Changes online close ${humanMinutes(p.cancel_cutoff_min)} before the reservation. Please contact us directly.`
        };
    }
    return {
        allowed: true,
        reason: ""
    };
}
function humanMinutes(min) {
    if (min === 0) return "at the time of";
    if (min % 1440 === 0) return `${min / 1440} day${min === 1440 ? "" : "s"}`;
    if (min % 60 === 0) return `${min / 60} hour${min === 60 ? "" : "s"}`;
    return `${min} minutes`;
}
async function cancelReservation(businessId, id, actor, opts = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tx"])(async (db)=>{
        const cur = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["one"])("SELECT id, business_id, status, starts_at FROM reservations WHERE business_id = $1 AND id = $2 FOR UPDATE", [
            businessId,
            id
        ], db);
        if (!cur) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])("Reservation not found");
        if (cur.status === "cancelled") return await getReservation(businessId, id, db); // already done: idempotent
        const ctx = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loadContext"])(businessId, db);
        if (opts.enforceCustomerRules) {
            const can = customerCanChange(cur, ctx.policies);
            if (!can.allowed) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppError"]("change_not_allowed", can.reason, 409);
        } else if (![
            "pending",
            "confirmed"
        ].includes(cur.status)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppError"]("bad_status", `A reservation that is ${cur.status.replace("_", " ")} cannot be cancelled.`, 409);
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["q"])("UPDATE reservations SET status = 'cancelled', cancelled_at = now(), updated_at = now() WHERE id = $1", [
            id
        ], db);
        // The ticket stops working the moment the booking is cancelled.
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["q"])("UPDATE tickets SET status = 'revoked', revoked_at = now() WHERE reservation_id = $1", [
            id
        ], db);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cancelQueuedReminders"])(db, id);
        await addEvent(db, cur, "cancelled", cur.status, "cancelled", actor, opts.reason ? {
            reason: opts.reason.slice(0, 300)
        } : {});
        const r = await getReservation(businessId, id, db);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["enqueueForReservation"])(db, ctx.policies, r, "cancellation");
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$realtime$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["publish"])({
            businessId,
            type: "reservation.updated",
            id
        }, db);
        return r;
    });
}
async function rescheduleReservation(businessId, id, change, actor, opts = {}) {
    const ctx = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loadContext"])(businessId);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tx"])(async (db)=>{
        const cur = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["one"])("SELECT id, business_id, status, starts_at, party_size, service_id, source FROM reservations WHERE business_id = $1 AND id = $2 FOR UPDATE", [
            businessId,
            id
        ], db);
        if (!cur) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])("Reservation not found");
        if (![
            "pending",
            "confirmed"
        ].includes(cur.status)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppError"]("bad_status", `A reservation that is ${cur.status.replace("_", " ")} cannot be changed.`, 409);
        if (opts.enforceCustomerRules) {
            if (!ctx.business.online_booking_enabled) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppError"]("booking_disabled", "Online changes are currently paused. Please contact us directly.", 409);
            const can = customerCanChange(cur, ctx.policies);
            if (!can.allowed) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppError"]("change_not_allowed", can.reason, 409);
        }
        const staff = actor.type === "staff";
        const start = change.startsAt ? new Date(change.startsAt) : cur.starts_at;
        if (Number.isNaN(start.getTime())) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invalid"])("Invalid date or time.");
        const party = change.partySize ?? cur.party_size;
        if (!Number.isInteger(party) || party < 1) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invalid"])("Please tell us how many guests.");
        const service = ctx.services.find((s)=>s.id === cur.service_id);
        const timeChanged = start.getTime() !== cur.starts_at.getTime() || party !== cur.party_size;
        if (timeChanged) {
            await db.query("SELECT pg_advisory_xact_lock(hashtextextended($1, 0))", [
                businessId
            ]);
            const busy = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loadBusy"])(businessId, new Date(start.getTime() - 864e5), new Date(start.getTime() + 2 * 864e5), db);
            const check = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkSlot"])(ctx, service, start, party, busy, {
                staff,
                excludeReservationId: id
            });
            if (!check.ok) throw await unavailable(ctx, check.reason, {
                businessId,
                startsAt: start.toISOString(),
                partySize: party,
                source: staff ? "staff" : "web"
            }, service.id, id);
            let moved = false;
            for (const res of check.candidates){
                await db.query("SAVEPOINT try_move");
                try {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["q"])(`UPDATE reservations SET resource_id = $2, starts_at = $3, ends_at = $4, blocked_until = $5, party_size = $6, updated_at = now() WHERE id = $1`, [
                        id,
                        res.id,
                        check.start,
                        check.end,
                        check.blockedUntil,
                        party
                    ], db);
                    await db.query("RELEASE SAVEPOINT try_move");
                    moved = true;
                    break;
                } catch (e) {
                    await db.query("ROLLBACK TO SAVEPOINT try_move");
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pgCode"])(e) !== "23P01") throw e;
                }
            }
            if (!moved) throw await unavailable(ctx, "full", {
                businessId,
                startsAt: start.toISOString(),
                partySize: party,
                source: staff ? "staff" : "web"
            }, service.id, id);
        }
        if (change.notes !== undefined) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["q"])("UPDATE reservations SET notes = $2, updated_at = now() WHERE id = $1", [
            id,
            change.notes.trim().slice(0, 500)
        ], db);
        const r = await getReservation(businessId, id, db);
        if (timeChanged) {
            await addEvent(db, cur, "rescheduled", cur.status, cur.status, actor, {
                from: cur.starts_at.toISOString(),
                to: r.starts_at.toISOString(),
                party_from: cur.party_size,
                party_to: party
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["moveReminder"])(db, ctx.policies, r);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["enqueueForReservation"])(db, ctx.policies, r, "reschedule");
        } else if (change.notes !== undefined) {
            await addEvent(db, cur, "note_updated", cur.status, cur.status, actor);
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$realtime$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["publish"])({
            businessId,
            type: "reservation.updated",
            id
        }, db);
        return r;
    });
}
async function setStatus(businessId, id, to, actor) {
    const allowedFrom = {
        confirmed: [
            "pending"
        ],
        no_show: [
            "confirmed"
        ],
        completed: [
            "checked_in"
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tx"])(async (db)=>{
        const cur = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["one"])("SELECT id, business_id, status FROM reservations WHERE business_id = $1 AND id = $2 FOR UPDATE", [
            businessId,
            id
        ], db);
        if (!cur) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])("Reservation not found");
        if (cur.status === to) return await getReservation(businessId, id, db);
        if (!allowedFrom[to].includes(cur.status)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppError"]("bad_status", `A reservation that is ${cur.status.replace("_", " ")} cannot be marked ${to.replace("_", " ")}.`, 409);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["q"])("UPDATE reservations SET status = $2, updated_at = now() WHERE id = $1", [
            id,
            to
        ], db);
        await addEvent(db, cur, to, cur.status, to, actor);
        const r = await getReservation(businessId, id, db);
        if (to === "confirmed") {
            const ctx = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loadContext"])(businessId, db);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["enqueueForReservation"])(db, ctx.policies, r, "confirmation");
        }
        if (to === "no_show") await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cancelQueuedReminders"])(db, id);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$realtime$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["publish"])({
            businessId,
            type: "reservation.updated",
            id
        }, db);
        return r;
    });
}
function evaluate(r, p, now) {
    if (r.status === "cancelled" || r.ticket_status === "revoked") return {
        result: "cancelled",
        message: "This reservation was cancelled. The ticket is no longer valid."
    };
    if (r.status === "checked_in" || r.status === "completed") return {
        result: "already_checked_in",
        message: "This guest has already been checked in."
    };
    if (r.status === "no_show") return {
        result: "expired",
        message: "This reservation was marked as a no-show."
    };
    if (r.status === "pending") return {
        result: "not_confirmed",
        message: "This reservation has not been confirmed yet."
    };
    const start = r.starts_at.getTime();
    if (now.getTime() < start - p.early_checkin_min * 60_000) return {
        result: "too_early",
        message: `Too early: check-in opens ${p.early_checkin_min} minutes before the reservation.`
    };
    if (now.getTime() > start + p.late_grace_min * 60_000) return {
        result: "expired",
        message: `Late arrival: the ${p.late_grace_min}-minute grace period has passed.`
    };
    return {
        result: "valid",
        message: "Reservation found and ready for check-in."
    };
}
const INVALID = {
    result: "invalid",
    message: "Ticket not recognised. Look the guest up by name or reference.",
    reservation: null
};
async function verifyTicket(businessId, scanned, now = new Date(), db) {
    const ticketId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyTicketToken"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extractTicketToken"])(String(scanned ?? "")));
    if (!ticketId) return INVALID;
    const r = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["one"])(`${RESERVATION_SELECT} WHERE t.id = $1 AND r.business_id = $2`, [
        ticketId,
        businessId
    ], db);
    if (!r) return INVALID;
    const ctx = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loadContext"])(businessId, db);
    return {
        ...evaluate(r, ctx.policies, now),
        reservation: r
    };
}
async function verifyReservation(businessId, reservationId, now = new Date(), db) {
    const r = await getReservation(businessId, reservationId, db);
    if (!r) return INVALID;
    const ctx = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loadContext"])(businessId, db);
    return {
        ...evaluate(r, ctx.policies, now),
        reservation: r
    };
}
async function checkIn(businessId, reservationId, userId, method, opts = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tx"])(async (db)=>{
        const v = await verifyReservation(businessId, reservationId, opts.now ?? new Date(), db);
        if (!v.reservation) return {
            ...v,
            checkedIn: false
        };
        const overridable = v.result === "too_early" || v.result === "expired";
        const noShowOverride = v.reservation.status === "no_show";
        if (v.result !== "valid" && !(opts.override && overridable && !noShowOverride)) return {
            ...v,
            checkedIn: false
        };
        const updated = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["q"])("UPDATE reservations SET status = 'checked_in', checked_in_at = now(), updated_at = now() WHERE id = $1 AND business_id = $2 AND status = 'confirmed' RETURNING id", [
            reservationId,
            businessId
        ], db);
        if (updated.length === 0) {
            const again = await verifyReservation(businessId, reservationId, opts.now ?? new Date(), db);
            return {
                ...again,
                checkedIn: false
            };
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["q"])("INSERT INTO checkins (reservation_id, business_id, user_id, method, override) VALUES ($1,$2,$3,$4,$5)", [
            reservationId,
            businessId,
            userId,
            method,
            v.result !== "valid"
        ], db);
        await addEvent(db, v.reservation, "checked_in", "confirmed", "checked_in", {
            type: "staff",
            userId
        }, {
            method,
            override: v.result !== "valid" ? v.result : undefined
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cancelQueuedReminders"])(db, reservationId);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$realtime$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["publish"])({
            businessId,
            type: "reservation.updated",
            id: reservationId
        }, db);
        const r = await getReservation(businessId, reservationId, db);
        return {
            result: "valid",
            message: "Checked in.",
            reservation: r,
            checkedIn: true
        };
    });
}
async function getReservationByTicketToken(token, db) {
    const ticketId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyTicketToken"])(token);
    if (!ticketId) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["one"])(`${RESERVATION_SELECT} WHERE t.id = $1`, [
        ticketId
    ], db);
}
async function findReservationByReferenceAndContact(businessId, reference, contact, db) {
    const ref = reference.toUpperCase().replace(/[^A-Z0-9]/g, "");
    const c = contact.trim().toLowerCase();
    const digits = c.replace(/\D/g, "");
    if (ref.length !== 6 || c.length < 4) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["one"])(`${RESERVATION_SELECT} WHERE r.business_id = $1 AND r.reference = $2
       AND ((c.email IS NOT NULL AND lower(c.email) = $3) OR ($4 <> '' AND length($4) >= 6 AND c.phone_digits = $4))`, [
        businessId,
        ref,
        c,
        digits
    ], db);
}
async function reservationHistory(businessId, id) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["q"])(`SELECT e.kind, e.from_status, e.to_status, e.actor_type, u.name AS actor_name, e.detail, e.created_at
       FROM reservation_events e LEFT JOIN users u ON u.id = e.actor_user_id
      WHERE e.business_id = $1 AND e.reservation_id = $2 ORDER BY e.id`, [
        businessId,
        id
    ]);
}
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/booking/search.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "listReservations",
    ()=>listReservations,
    "maskEmail",
    ()=>maskEmail,
    "maskPhone",
    ()=>maskPhone,
    "parseFilters",
    ()=>parseFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/time.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$reservations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/booking/reservations.ts [app-rsc] (ecmascript) <locals>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$reservations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$reservations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const STATUSES = [
    "pending",
    "confirmed",
    "checked_in",
    "completed",
    "cancelled",
    "no_show"
];
async function listReservations(businessId, tz, f) {
    const where = [
        "r.business_id = $1"
    ];
    const params = [
        businessId
    ];
    const add = (sql, ...vals)=>{
        let s = sql;
        for (const v of vals){
            params.push(v);
            s = s.replace("?", `$${params.length}`);
        }
        where.push(s);
    };
    if (f.from) add("r.starts_at >= ?", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dayStart"])(f.from, tz).toJSDate());
    if (f.to) add("r.starts_at < ?", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dayStart"])(f.to, tz).plus({
        days: 1
    }).toJSDate());
    const statuses = (f.status ?? []).filter((s)=>STATUSES.includes(s));
    if (statuses.length) add("r.status = ANY(?)", statuses);
    if (f.checkedIn === true) add("r.checked_in_at IS NOT NULL");
    if (f.checkedIn === false) add("r.checked_in_at IS NULL");
    if (f.partyMin) add("r.party_size >= ?", f.partyMin);
    if (f.partyMax) add("r.party_size <= ?", f.partyMax);
    if (f.serviceId && /^[0-9a-f-]{36}$/i.test(f.serviceId)) add("r.service_id = ?", f.serviceId);
    if (f.source && [
        "web",
        "ai",
        "staff"
    ].includes(f.source)) add("r.source = ?", f.source);
    if (f.timeFrom !== undefined || f.timeTo !== undefined) {
        params.push(tz);
        const local = `(extract(hour from r.starts_at AT TIME ZONE $${params.length}) * 60 + extract(minute from r.starts_at AT TIME ZONE $${params.length}))`;
        if (f.timeFrom !== undefined) add(`${local} >= ?`, f.timeFrom);
        if (f.timeTo !== undefined) add(`${local} <= ?`, f.timeTo);
    }
    const term = (f.q ?? "").trim().slice(0, 80);
    if (term) {
        const like = `%${term.toLowerCase().replace(/[\\%_]/g, "\\$&")}%`;
        const ref = term.toUpperCase().replace(/[^A-Z0-9]/g, "");
        const digits = term.replace(/\D/g, "");
        const parts = [];
        params.push(like);
        parts.push(`lower(c.name) LIKE $${params.length}`);
        if (ref.length >= 3) {
            params.push(`%${ref}%`);
            parts.push(`r.reference LIKE $${params.length}`);
        }
        // Phone search needs at least 4 digits so short numbers cannot be used to enumerate customers.
        if (digits.length >= 4 && digits.length === term.replace(/[\s+().-]/g, "").length) {
            params.push(`%${digits}%`);
            parts.push(`c.phone_digits LIKE $${params.length}`);
        }
        where.push(`(${parts.join(" OR ")})`);
    }
    const order = f.sort === "created" ? "r.created_at DESC" : f.sort === "time_desc" ? "r.starts_at DESC, r.id" : "r.starts_at ASC, r.id";
    const limit = Math.min(Math.max(f.limit ?? 50, 1), 200);
    const offset = Math.max(f.offset ?? 0, 0);
    const w = where.join(" AND ");
    const [rows, count] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["q"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$reservations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RESERVATION_SELECT"]} WHERE ${w} ORDER BY ${order} LIMIT ${limit} OFFSET ${offset}`, params),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["q"])(`SELECT count(*)::int AS n FROM reservations r JOIN customers c ON c.id = r.customer_id WHERE ${w}`, params)
    ]);
    return {
        rows,
        total: count[0].n
    };
}
function maskPhone(phone, full) {
    if (!phone) return null;
    if (full) return phone;
    const d = phone.replace(/\D/g, "");
    return d.length <= 4 ? "••••" : `••• ${d.slice(-4)}`;
}
function maskEmail(email, full) {
    if (!email) return null;
    if (full) return email;
    const [u, dom] = email.split("@");
    return `${u.slice(0, 1)}•••@${dom}`;
}
function parseFilters(sp) {
    const int = (k)=>{
        const v = Number(sp.get(k));
        return Number.isInteger(v) && v > 0 ? v : undefined;
    };
    const date = (k)=>{
        const v = sp.get(k) ?? "";
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isIsoDate"])(v) ? v : undefined;
    };
    const mins = (k)=>{
        const v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["labelToMinutes"])(sp.get(k) ?? "");
        return v === null ? undefined : v;
    };
    const ci = sp.get("checkedIn");
    const sort = sp.get("sort");
    return {
        q: sp.get("q") ?? undefined,
        from: date("from"),
        to: date("to"),
        status: sp.get("status")?.split(",").filter(Boolean),
        checkedIn: ci === "yes" ? true : ci === "no" ? false : undefined,
        timeFrom: mins("timeFrom"),
        timeTo: mins("timeTo"),
        partyMin: int("partyMin"),
        partyMax: int("partyMax"),
        serviceId: sp.get("service") ?? undefined,
        source: sp.get("source") ?? undefined,
        sort: sort === "created" || sort === "time_desc" ? sort : "time",
        limit: int("limit"),
        offset: Number(sp.get("offset")) > 0 ? Number(sp.get("offset")) : 0
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/notify/jobs.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "cancelQueuedReminders",
    ()=>cancelQueuedReminders,
    "enqueueForReservation",
    ()=>enqueueForReservation,
    "moveReminder",
    ()=>moveReminder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
async function insertJob(db, r, kind, dedupeKey, runAt = new Date()) {
    // ON CONFLICT DO NOTHING: retrying the surrounding operation can never queue the same message twice.
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["q"])(`INSERT INTO notification_jobs (business_id, reservation_id, kind, recipient, dedupe_key, run_at)
     VALUES ($1,$2,$3,$4,$5,$6) ON CONFLICT (dedupe_key) DO NOTHING`, [
        r.business_id,
        r.id,
        kind,
        r.customer_email,
        dedupeKey,
        runAt
    ], db);
}
function reminderTime(p, r) {
    if (p.reminder_hours_before <= 0) return null;
    const at = new Date(r.starts_at.getTime() - p.reminder_hours_before * 3600_000);
    return at.getTime() > Date.now() + 60_000 ? at : null; // booked inside the reminder window: no reminder
}
async function enqueueForReservation(db, p, r, kind, consent) {
    if (!p.email_notifications || !r.customer_email) return;
    const ok = consent ?? (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["one"])("SELECT notify_consent FROM customers WHERE id = $1", [
        r.customer_id
    ], db))?.notify_consent;
    if (!ok) return;
    if (kind === "confirmation") {
        await insertJob(db, r, "confirmation", `confirmation:${r.id}`);
        const at = reminderTime(p, r);
        if (at) await insertJob(db, r, "reminder", `reminder:${r.id}`, at);
    } else if (kind === "cancellation") {
        await insertJob(db, r, "cancellation", `cancellation:${r.id}`);
    } else {
        await insertJob(db, r, "reschedule", `reschedule:${r.id}:${r.starts_at.toISOString()}`);
    }
}
async function cancelQueuedReminders(db, reservationId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["q"])("UPDATE notification_jobs SET status = 'cancelled', updated_at = now() WHERE reservation_id = $1 AND kind = 'reminder' AND status = 'queued'", [
        reservationId
    ], db);
}
async function moveReminder(db, p, r) {
    const at = reminderTime(p, r);
    if (!at) return cancelQueuedReminders(db, r.id);
    const moved = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["q"])("UPDATE notification_jobs SET run_at = $2, updated_at = now() WHERE dedupe_key = $1 AND status = 'queued' RETURNING id", [
        `reminder:${r.id}`,
        at
    ], db);
    if (moved.length === 0 && p.email_notifications && r.customer_email) await insertJob(db, r, "reminder", `reminder:${r.id}`, at);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/realtime.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "publish",
    ()=>publish,
    "subscribe",
    ()=>subscribe
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/env.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/audit.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const CHANNEL = "abc_events";
async function publish(ev, db) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["q"])("SELECT pg_notify($1, $2)", [
        CHANNEL,
        JSON.stringify(ev)
    ], db);
}
const g = globalThis;
const bus = g.__abcBus ??= {
    listeners: new Set(),
    client: null,
    connecting: false
};
async function ensureListening() {
    if (bus.client || bus.connecting) return;
    bus.connecting = true;
    try {
        const client = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["Client"]({
            connectionString: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].databaseUrl
        });
        await client.connect();
        await client.query(`LISTEN ${CHANNEL}`);
        client.on("notification", (n)=>{
            if (!n.payload) return;
            try {
                const ev = JSON.parse(n.payload);
                for (const l of bus.listeners)l(ev);
            } catch  {}
        });
        const drop = ()=>{
            bus.client = null;
            client.removeAllListeners();
            client.end().catch(()=>{});
            if (bus.listeners.size) setTimeout(()=>ensureListening(), 2000);
        };
        client.on("error", drop);
        client.on("end", ()=>{
            if (bus.client === client) drop();
        });
        bus.client = client;
    } catch (e) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["log"])("error", "realtime listen failed", {
            error: e.message
        });
        if (bus.listeners.size) setTimeout(()=>ensureListening(), 5000);
    } finally{
        bus.connecting = false;
    }
}
function subscribe(businessId, fn) {
    const wrapped = (ev)=>{
        if (ev.businessId === businessId) fn(ev);
    };
    bus.listeners.add(wrapped);
    void ensureListening();
    return ()=>bus.listeners.delete(wrapped);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
]})(),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/app/[slug]/calendar/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/app/[slug]/calendar/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/icon.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/icon.1pot3hjr6hw1c.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__16kggdfqijfso._.js.map