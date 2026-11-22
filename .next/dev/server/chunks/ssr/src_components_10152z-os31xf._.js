(()=>{"use strict";module.exports = [
"[project]/src/components/SlotPicker.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SlotPicker",
    ()=>SlotPicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function SlotPicker({ endpoint, date, party, selected, onPick }) {
    const [day, setDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!date || !party) return;
        let live = true;
        setDay(null);
        setError("");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"])(`${endpoint}${endpoint.includes("?") ? "&" : "?"}date=${date}&party=${party}`).then((d)=>{
            if (live) setDay(d);
        }).catch((e)=>{
            if (live) setError(e.message);
        });
        return ()=>{
            live = false;
        };
    }, [
        endpoint,
        date,
        party
    ]);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        role: "alert",
        className: "text-rose",
        children: error
    }, void 0, false, {
        fileName: "[project]/src/components/SlotPicker.tsx",
        lineNumber: 24,
        columnNumber: 21
    }, this);
    if (!day) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-muted",
        "aria-busy": "true",
        children: "Checking availability…"
    }, void 0, false, {
        fileName: "[project]/src/components/SlotPicker.tsx",
        lineNumber: 25,
        columnNumber: 20
    }, this);
    if (!day.open) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "rounded-xl bg-paper px-4 py-3 text-ink-soft",
        children: [
            day.closedReason ?? "Closed on this day.",
            " Try another date."
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SlotPicker.tsx",
        lineNumber: 26,
        columnNumber: 25
    }, this);
    const free = day.slots.filter((s)=>s.available);
    if (free.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "rounded-xl bg-paper px-4 py-3 text-ink-soft",
        children: [
            "Nothing is free on this day for ",
            party,
            " ",
            party === 1 ? "guest" : "guests",
            ". Try another date."
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SlotPicker.tsx",
        lineNumber: 28,
        columnNumber: 33
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "radiogroup",
        "aria-label": "Available times",
        className: "grid grid-cols-4 gap-2 sm:grid-cols-5",
        children: day.slots.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                role: "radio",
                "aria-checked": selected === s.start,
                disabled: !s.available,
                onClick: ()=>onPick(selected === s.start ? null : {
                        start: s.start,
                        time: s.time
                    }),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("min-h-11 rounded-xl text-[15px] font-semibold tabular transition-colors", !s.available && "cursor-not-allowed bg-paper text-muted/50 line-through", s.available && selected !== s.start && "bg-white ring-1 ring-line hover:ring-brand", selected === s.start && "bg-brand text-white"),
                children: s.time
            }, s.start, false, {
                fileName: "[project]/src/components/SlotPicker.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/SlotPicker.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/TicketActions.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TicketActions",
    ()=>TicketActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SlotPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SlotPicker.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const icsDate = (iso)=>iso.replace(/[-:]/g, "").replace(/\.\d{3}/, "");
const icsText = (s)=>s.replace(/[\;,]/g, (c)=>`\\${c}`).replace(/\n/g, "\\n");
function TicketActions(p) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(p.date < p.today ? p.today : p.date);
    const [party, setParty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(p.partySize);
    const [slot, setSlot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    function downloadCalendar() {
        const ics = [
            "BEGIN:VCALENDAR",
            "VERSION:2.0",
            "PRODID:-//AI Book & Check In//EN",
            "BEGIN:VEVENT",
            `UID:${p.calendar.reference}-${icsDate(p.calendar.start)}@ai-book-checkin`,
            `DTSTAMP:${icsDate(new Date().toISOString())}`,
            `DTSTART:${icsDate(p.calendar.start)}`,
            `DTEND:${icsDate(p.calendar.end)}`,
            `SUMMARY:${icsText(p.calendar.title)}`,
            `LOCATION:${icsText(p.calendar.location)}`,
            `DESCRIPTION:${icsText(`Reference ${p.calendar.reference}\n${window.location.href}`)}`,
            "END:VEVENT",
            "END:VCALENDAR"
        ].join("\r\n");
        const a = document.createElement("a");
        a.href = URL.createObjectURL(new Blob([
            ics
        ], {
            type: "text/calendar"
        }));
        a.download = `reservation-${p.calendar.reference}.ics`;
        a.click();
        setTimeout(()=>URL.revokeObjectURL(a.href), 1000);
    }
    async function run(fn, message) {
        setBusy(true);
        setError("");
        try {
            await fn();
            setDone(message);
            setMode("idle");
            setSlot(null);
            router.refresh();
        } catch (e) {
            setError(e.message);
        } finally{
            setBusy(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "no-print mt-5 space-y-3",
        children: [
            done && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Notice"], {
                tone: "ok",
                children: done
            }, void 0, false, {
                fileName: "[project]/src/components/TicketActions.tsx",
                lineNumber: 47,
                columnNumber: 16
            }, this),
            p.live && mode === "idle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "quiet",
                                onClick: ()=>window.print(),
                                children: "Print or save as PDF"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TicketActions.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "quiet",
                                onClick: downloadCalendar,
                                children: "Add to calendar"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TicketActions.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TicketActions.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    p.canChange ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "quiet",
                                onClick: ()=>{
                                    setMode("reschedule");
                                    setDone("");
                                },
                                children: "Change date or time"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TicketActions.tsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "danger",
                                onClick: ()=>{
                                    setMode("cancel");
                                    setDone("");
                                },
                                children: "Cancel reservation"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TicketActions.tsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TicketActions.tsx",
                        lineNumber: 55,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-[15px] text-ink-soft",
                        children: p.whyNot
                    }, void 0, false, {
                        fileName: "[project]/src/components/TicketActions.tsx",
                        lineNumber: 59,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TicketActions.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, this),
            !p.live && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: p.bookAgainHref,
                className: "flex min-h-11 items-center justify-center rounded-xl bg-brand font-semibold text-white",
                children: "Make a new reservation"
            }, void 0, false, {
                fileName: "[project]/src/components/TicketActions.tsx",
                lineNumber: 62,
                columnNumber: 19
            }, this),
            mode === "cancel" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 rounded-2xl bg-white p-5 ring-1 ring-line",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-semibold",
                        children: "Cancel this reservation?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TicketActions.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[15px] text-ink-soft",
                        children: "Your ticket will stop working straight away. This cannot be undone."
                    }, void 0, false, {
                        fileName: "[project]/src/components/TicketActions.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Notice"], {
                        tone: "error",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/TicketActions.tsx",
                        lineNumber: 68,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "quiet",
                                disabled: busy,
                                onClick: ()=>{
                                    setMode("idle");
                                    setError("");
                                },
                                children: "Keep it"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TicketActions.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "danger",
                                disabled: busy,
                                className: "flex-1",
                                onClick: ()=>run(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"])(`/api/t/${p.token}`, {
                                            method: "DELETE"
                                        }), "Your reservation is cancelled."),
                                children: busy ? "Cancelling…" : "Yes, cancel it"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TicketActions.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TicketActions.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TicketActions.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this),
            mode === "reschedule" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 rounded-2xl bg-white p-5 ring-1 ring-line",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-semibold",
                        children: "Choose a new date and time"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TicketActions.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Date",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inputClass"],
                                    value: date,
                                    min: p.today,
                                    max: p.maxDate,
                                    onChange: (e)=>{
                                        setDate(e.target.value);
                                        setSlot(null);
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TicketActions.tsx",
                                    lineNumber: 80,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/TicketActions.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Field"], {
                                label: "People",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inputClass"],
                                    value: party,
                                    onChange: (e)=>{
                                        setParty(Number(e.target.value));
                                        setSlot(null);
                                    },
                                    children: Array.from({
                                        length: Math.max(p.maxParty, p.partySize)
                                    }, (_, i)=>i + 1).map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: n
                                        }, n, false, {
                                            fileName: "[project]/src/components/TicketActions.tsx",
                                            lineNumber: 83,
                                            columnNumber: 104
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TicketActions.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/TicketActions.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TicketActions.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SlotPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SlotPicker"], {
                        endpoint: `/api/t/${p.token}`,
                        date: date,
                        party: party,
                        selected: slot?.start ?? null,
                        onPick: setSlot
                    }, void 0, false, {
                        fileName: "[project]/src/components/TicketActions.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Notice"], {
                        tone: "error",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/TicketActions.tsx",
                        lineNumber: 88,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "quiet",
                                disabled: busy,
                                onClick: ()=>{
                                    setMode("idle");
                                    setError("");
                                },
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TicketActions.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                disabled: busy || !slot,
                                className: "flex-1",
                                onClick: ()=>run(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"])(`/api/t/${p.token}`, {
                                            method: "PATCH",
                                            body: {
                                                startsAt: slot.start,
                                                partySize: party
                                            }
                                        }), "Your reservation has been moved. Your ticket stays the same."),
                                children: busy ? "Saving…" : slot ? `Move to ${slot.time}` : "Choose a time"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TicketActions.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TicketActions.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TicketActions.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TicketActions.tsx",
        lineNumber: 46,
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

//# sourceMappingURL=src_components_10152z-os31xf._.js.map