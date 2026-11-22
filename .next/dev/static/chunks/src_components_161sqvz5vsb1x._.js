(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/SettingsPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingsPanel",
    ()=>SettingsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];
const RESOURCE_TYPES = [
    [
        "table",
        "Table"
    ],
    [
        "staff",
        "Staff member"
    ],
    [
        "room",
        "Room"
    ],
    [
        "equipment",
        "Equipment"
    ],
    [
        "slot",
        "Slot"
    ]
];
const int = (v)=>Math.max(0, Math.floor(Number(v) || 0));
/** One independently saved block of settings. */ function Section({ title, hint, children, onSave, saveLabel = "Save" }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        busy: false,
        ok: "",
        error: ""
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-bold",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/SettingsPanel.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-0.5 text-[15px] text-ink-soft",
                children: hint
            }, void 0, false, {
                fileName: "[project]/src/components/SettingsPanel.tsx",
                lineNumber: 36,
                columnNumber: 16
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 space-y-4",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/SettingsPanel.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            onSave && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        disabled: state.busy,
                        onClick: async ()=>{
                            setState({
                                busy: true,
                                ok: "",
                                error: ""
                            });
                            try {
                                await onSave();
                                setState({
                                    busy: false,
                                    ok: "Saved",
                                    error: ""
                                });
                                router.refresh();
                            } catch (e) {
                                setState({
                                    busy: false,
                                    ok: "",
                                    error: e.message
                                });
                            }
                        },
                        children: state.busy ? "Saving…" : saveLabel
                    }, void 0, false, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    state.ok && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        role: "status",
                        className: "font-semibold text-[#087a5d]",
                        children: state.ok
                    }, void 0, false, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 45,
                        columnNumber: 24
                    }, this),
                    state.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        role: "alert",
                        className: "text-rose",
                        children: state.error
                    }, void 0, false, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 46,
                        columnNumber: 27
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SettingsPanel.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SettingsPanel.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(Section, "r1dLWqIiRjVfrrtRiJF5C5es2/8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Section;
function SettingsPanel(p) {
    _s1();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const save = (body)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])(`/api/b/${p.businessId}/settings`, {
            method: "PATCH",
            body
        });
    const [online, setOnline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(p.business.online_booking_enabled);
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: p.business.name,
        description: p.business.description,
        address: p.business.address,
        phone: p.business.phone,
        contact_email: p.business.contact_email,
        timezone: p.business.timezone
    });
    const [logoMsg, setLogoMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [hours, setHours] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(p.hours);
    const [closure, setClosure] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        from: "",
        to: "",
        reason: ""
    });
    const [closureMsg, setClosureMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [resources, setResources] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(p.resources);
    const [services, setServices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(p.services);
    const [pol, setPol] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(p.policies);
    const [agent, setAgent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        ...p.agent,
        languages: p.agent.languages.join(", ")
    });
    const [faqs, setFaqs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(p.faqs);
    const [wa, setWa] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        phoneNumberId: p.whatsapp.phoneNumberId,
        displayNumber: p.whatsapp.displayNumber,
        accessToken: ""
    });
    const [ph, setPh] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        number: p.phone.number,
        sms: p.phone.sms,
        voice: p.phone.voice,
        transferTo: p.phone.transferTo
    });
    const [invite, setInvite] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        email: "",
        role: "staff",
        url: "",
        error: ""
    });
    const polNum = (key, label, hint, max = 100000)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
            label: label,
            hint: hint,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "number",
                min: 0,
                max: max,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"],
                value: Number(pol[key]),
                onChange: (e)=>setPol({
                        ...pol,
                        [key]: int(e.target.value)
                    })
            }, void 0, false, {
                fileName: "[project]/src/components/SettingsPanel.tsx",
                lineNumber: 73,
                columnNumber: 38
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/SettingsPanel.tsx",
            lineNumber: 73,
            columnNumber: 5
        }, this);
    const polText = (key, label, hint)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
            label: label,
            hint: hint,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                rows: 2,
                maxLength: 1000,
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"]} py-2`,
                value: String(pol[key]),
                onChange: (e)=>setPol({
                        ...pol,
                        [key]: e.target.value
                    })
            }, void 0, false, {
                fileName: "[project]/src/components/SettingsPanel.tsx",
                lineNumber: 76,
                columnNumber: 38
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/SettingsPanel.tsx",
            lineNumber: 76,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "flex flex-wrap items-center justify-between gap-3 p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold",
                                children: "Online reservations"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[15px] text-ink-soft",
                                children: online ? "Customers can book on your booking page." : "Customers cannot book online. Staff can still add reservations."
                            }, void 0, false, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: online ? "danger" : "mint",
                        onClick: async ()=>{
                            await save({
                                online_booking_enabled: !online
                            });
                            setOnline(!online);
                            router.refresh();
                        },
                        children: online ? "Turn off online reservations" : "Turn on online reservations"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SettingsPanel.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Business profile",
                onSave: ()=>save({
                        profile
                    }),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                        label: "Name",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"],
                            value: profile.name,
                            maxLength: 80,
                            onChange: (e)=>setProfile({
                                    ...profile,
                                    name: e.target.value
                                })
                        }, void 0, false, {
                            fileName: "[project]/src/components/SettingsPanel.tsx",
                            lineNumber: 90,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                        label: "Short description",
                        hint: "Shown at the top of your booking page.",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            rows: 2,
                            maxLength: 1000,
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"]} py-2`,
                            value: profile.description,
                            onChange: (e)=>setProfile({
                                    ...profile,
                                    description: e.target.value
                                })
                        }, void 0, false, {
                            fileName: "[project]/src/components/SettingsPanel.tsx",
                            lineNumber: 91,
                            columnNumber: 88
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Address",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"],
                                    value: profile.address,
                                    maxLength: 200,
                                    onChange: (e)=>setProfile({
                                            ...profile,
                                            address: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 93,
                                    columnNumber: 34
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Phone",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"],
                                    value: profile.phone,
                                    maxLength: 40,
                                    onChange: (e)=>setProfile({
                                            ...profile,
                                            phone: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 94,
                                    columnNumber: 32
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Contact email",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"],
                                    value: profile.contact_email,
                                    maxLength: 160,
                                    onChange: (e)=>setProfile({
                                            ...profile,
                                            contact_email: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 95,
                                    columnNumber: 40
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Time zone",
                                hint: "Changing this does not move existing reservations.",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"],
                                    value: profile.timezone,
                                    onChange: (e)=>setProfile({
                                            ...profile,
                                            timezone: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 96,
                                    columnNumber: 94
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                        label: "Logo",
                        hint: "PNG, JPEG or WebP, up to 1 MB. Shown on the booking page and on tickets.",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "file",
                            accept: "image/png,image/jpeg,image/webp",
                            className: "block text-[15px]",
                            onChange: async (e)=>{
                                const f = e.target.files?.[0];
                                if (!f) return;
                                setLogoMsg("Uploading…");
                                const res = await fetch(`/api/b/${p.businessId}/logo`, {
                                    method: "POST",
                                    body: f
                                });
                                const j = await res.json().catch(()=>({}));
                                setLogoMsg(res.ok ? "Logo updated." : j?.error?.message ?? "Upload failed.");
                                if (res.ok) router.refresh();
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/SettingsPanel.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    logoMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        role: "status",
                        className: "text-[15px] text-ink-soft",
                        children: logoMsg
                    }, void 0, false, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 109,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SettingsPanel.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Opening hours",
                hint: "Add two periods on one day for a lunch and dinner service.",
                onSave: ()=>save({
                        hours
                    }),
                children: DAYS.map((d, i)=>{
                    const rows = hours.map((h, idx)=>({
                            h,
                            idx
                        })).filter((x)=>x.h.weekday === i + 1);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-28 font-semibold",
                                children: d
                            }, void 0, false, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 117,
                                columnNumber: 15
                            }, this),
                            rows.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted",
                                children: "Closed"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 118,
                                columnNumber: 37
                            }, this),
                            rows.map(({ h, idx })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            "aria-label": `${d} opens`,
                                            type: "time",
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"]} w-[7.5rem]`,
                                            value: h.open,
                                            onChange: (e)=>setHours(hours.map((x, j)=>j === idx ? {
                                                        ...x,
                                                        open: e.target.value
                                                    } : x))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SettingsPanel.tsx",
                                            lineNumber: 121,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted",
                                            children: "to"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SettingsPanel.tsx",
                                            lineNumber: 122,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            "aria-label": `${d} closes`,
                                            type: "time",
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"]} w-[7.5rem]`,
                                            value: h.close === "24:00" ? "23:59" : h.close,
                                            onChange: (e)=>setHours(hours.map((x, j)=>j === idx ? {
                                                        ...x,
                                                        close: e.target.value
                                                    } : x))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SettingsPanel.tsx",
                                            lineNumber: 123,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            "aria-label": `Remove ${d} period`,
                                            className: "rounded-lg px-2 py-1 text-rose hover:bg-rose-soft",
                                            onClick: ()=>setHours(hours.filter((_, j)=>j !== idx)),
                                            children: "Remove"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SettingsPanel.tsx",
                                            lineNumber: 124,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 120,
                                    columnNumber: 17
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "rounded-lg px-2 py-1 font-semibold text-brand hover:bg-paper",
                                onClick: ()=>setHours([
                                        ...hours,
                                        {
                                            weekday: i + 1,
                                            open: rows.length ? "18:00" : "12:00",
                                            close: "22:00"
                                        }
                                    ]),
                                children: "Add period"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 127,
                                columnNumber: 15
                            }, this)
                        ]
                    }, d, true, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 116,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/SettingsPanel.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Closures and holidays",
                hint: "Whole days when nobody can book.",
                children: [
                    p.closures.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-ink-soft",
                        children: "No closures planned."
                    }, void 0, false, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 134,
                        columnNumber: 36
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "divide-y divide-line rounded-xl ring-1 ring-line",
                        children: p.closures.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-center justify-between gap-3 px-4 py-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: c.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                                lineNumber: 138,
                                                columnNumber: 23
                                            }, this),
                                            c.reason ? `, ${c.reason}` : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "font-semibold text-rose",
                                        onClick: async ()=>{
                                            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])(`/api/b/${p.businessId}/closures?id=${c.id}`, {
                                                method: "DELETE"
                                            });
                                            router.refresh();
                                        },
                                        children: "Remove"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 139,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, c.id, true, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 137,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid items-end gap-3 sm:grid-cols-[1fr_1fr_1.4fr_auto]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "From",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"],
                                    value: closure.from,
                                    onChange: (e)=>setClosure({
                                            ...closure,
                                            from: e.target.value,
                                            to: closure.to || e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 145,
                                    columnNumber: 31
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "To",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"],
                                    value: closure.to,
                                    onChange: (e)=>setClosure({
                                            ...closure,
                                            to: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 146,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Reason (shown to customers)",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"],
                                    maxLength: 120,
                                    value: closure.reason,
                                    onChange: (e)=>setClosure({
                                            ...closure,
                                            reason: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 147,
                                    columnNumber: 54
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "quiet",
                                disabled: !closure.from || !closure.to,
                                onClick: async ()=>{
                                    try {
                                        const r = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])(`/api/b/${p.businessId}/closures`, {
                                            body: closure
                                        });
                                        setClosureMsg(r.existingReservations ? `Added. ${r.existingReservations} existing reservation(s) fall inside this closure and were not cancelled — review them in Reservations.` : "Added.");
                                        setClosure({
                                            from: "",
                                            to: "",
                                            reason: ""
                                        });
                                        router.refresh();
                                    } catch (e) {
                                        setClosureMsg(e.message);
                                    }
                                },
                                children: "Add closure"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    closureMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Notice"], {
                        tone: "info",
                        children: closureMsg
                    }, void 0, false, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 156,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SettingsPanel.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: p.business.type === "restaurant" ? "Tables" : "Resources",
                hint: "What a booking occupies. Each can hold one booking at a time. Removing one keeps its past reservations.",
                onSave: ()=>save({
                        resources
                    }),
                children: [
                    resources.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid items-end gap-2 sm:grid-cols-[1.4fr_0.7fr_1fr_auto]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "Name",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"],
                                        maxLength: 60,
                                        value: r.name,
                                        onChange: (e)=>setResources(resources.map((x, j)=>j === i ? {
                                                    ...x,
                                                    name: e.target.value
                                                } : x))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 162,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "Capacity",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: 1,
                                        max: 500,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"],
                                        value: r.capacity,
                                        onChange: (e)=>setResources(resources.map((x, j)=>j === i ? {
                                                    ...x,
                                                    capacity: Math.max(1, int(e.target.value))
                                                } : x))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 163,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "Type",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"],
                                        value: r.type,
                                        onChange: (e)=>setResources(resources.map((x, j)=>j === i ? {
                                                    ...x,
                                                    type: e.target.value
                                                } : x)),
                                        children: RESOURCE_TYPES.map(([v, l])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: v,
                                                children: l
                                            }, v, false, {
                                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                                lineNumber: 164,
                                                columnNumber: 215
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 164,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "quiet",
                                    onClick: ()=>setResources(resources.filter((_, j)=>j !== i)),
                                    children: "Remove"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, r.id ?? `new-${i}`, true, {
                            fileName: "[project]/src/components/SettingsPanel.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "quiet",
                        onClick: ()=>setResources([
                                ...resources,
                                {
                                    name: `${p.business.type === "restaurant" ? "Table" : "Resource"} ${resources.length + 1}`,
                                    capacity: 2,
                                    type: resources[0]?.type ?? "table"
                                }
                            ]),
                        children: [
                            "Add ",
                            p.business.type === "restaurant" ? "a table" : "a resource"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SettingsPanel.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Services",
                hint: "What customers book. Leave length empty to use the standard booking length.",
                onSave: ()=>save({
                        services
                    }),
                children: [
                    services.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid items-end gap-2 rounded-xl bg-paper p-3 sm:grid-cols-[1.5fr_0.7fr_0.7fr_0.6fr_1fr_auto]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "Name",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"],
                                        maxLength: 80,
                                        value: s.name,
                                        onChange: (e)=>setServices(services.map((x, j)=>j === i ? {
                                                    ...x,
                                                    name: e.target.value
                                                } : x))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 174,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "Length (min)",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: 5,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"],
                                        value: s.duration_min ?? "",
                                        onChange: (e)=>setServices(services.map((x, j)=>j === i ? {
                                                    ...x,
                                                    duration_min: e.target.value ? int(e.target.value) : null
                                                } : x))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 175,
                                        columnNumber: 41
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "Price",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: 0,
                                        step: "0.01",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"],
                                        value: s.price_cents != null ? s.price_cents / 100 : "",
                                        onChange: (e)=>setServices(services.map((x, j)=>j === i ? {
                                                    ...x,
                                                    price_cents: e.target.value ? Math.round(Number(e.target.value) * 100) : null
                                                } : x))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 176,
                                        columnNumber: 34
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "Currency",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"],
                                        maxLength: 8,
                                        value: s.currency,
                                        onChange: (e)=>setServices(services.map((x, j)=>j === i ? {
                                                    ...x,
                                                    currency: e.target.value
                                                } : x))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 177,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    label: "Uses",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"],
                                        value: s.resource_type,
                                        onChange: (e)=>setServices(services.map((x, j)=>j === i ? {
                                                    ...x,
                                                    resource_type: e.target.value
                                                } : x)),
                                        children: RESOURCE_TYPES.map(([v, l])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: v,
                                                children: l
                                            }, v, false, {
                                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                                lineNumber: 178,
                                                columnNumber: 231
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 178,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this),
                                services.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "quiet",
                                    onClick: ()=>setServices(services.filter((_, j)=>j !== i)),
                                    children: "Remove"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 179,
                                    columnNumber: 37
                                }, this)
                            ]
                        }, s.id ?? `new-${i}`, true, {
                            fileName: "[project]/src/components/SettingsPanel.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "quiet",
                        onClick: ()=>setServices([
                                ...services,
                                {
                                    name: "New service",
                                    description: "",
                                    duration_min: null,
                                    price_cents: null,
                                    currency: services[0]?.currency ?? "",
                                    resource_type: services[0]?.resource_type ?? "table"
                                }
                            ]),
                        children: "Add a service"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SettingsPanel.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Booking rules",
                onSave: ()=>save({
                        policies: pol
                    }),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 sm:grid-cols-3",
                        children: [
                            polNum("default_duration_min", "Booking length (min)"),
                            polNum("slot_interval_min", "Times every (min)"),
                            polNum("buffer_min", "Gap between bookings (min)", "Time to reset before the next booking."),
                            polNum("max_party_size", "Largest online booking"),
                            polNum("min_notice_min", "Minimum notice (min)", "How far ahead customers must book."),
                            polNum("max_advance_days", "Book up to (days ahead)"),
                            polNum("cancel_cutoff_min", "Changes close (min before)", "Customers can change or cancel until then."),
                            polNum("early_checkin_min", "Check-in opens (min before)"),
                            polNum("late_grace_min", "Hold late arrivals (min)")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    polText("cancellation_policy", "Cancellation policy", "Shown to customers and used by the assistant."),
                    polText("late_policy", "Late arrival policy"),
                    polText("arrival_instructions", "Arrival instructions", "Printed on the ticket, for example: ask for the host at the entrance.")
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SettingsPanel.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Assistant",
                hint: p.ai.kind === "llm" ? `Connected model: ${p.ai.label}.` : "No AI model is connected, so the built-in basic assistant answers. It understands common English booking phrases only. Connect a model in the server configuration (see README).",
                onSave: ()=>save({
                        agent: {
                            ...agent,
                            languages: agent.languages.split(",").map((s)=>s.trim()).filter(Boolean)
                        },
                        faqs: faqs.filter((f)=>f.question.trim() && f.answer.trim())
                    }),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Name",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"],
                                    maxLength: 40,
                                    value: agent.name,
                                    onChange: (e)=>setAgent({
                                            ...agent,
                                            name: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 205,
                                    columnNumber: 31
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Tone",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"],
                                    maxLength: 120,
                                    value: agent.tone,
                                    onChange: (e)=>setAgent({
                                            ...agent,
                                            tone: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 206,
                                    columnNumber: 31
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Languages",
                                hint: "Comma separated. The first is the default.",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"],
                                    value: agent.languages,
                                    onChange: (e)=>setAgent({
                                            ...agent,
                                            languages: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 207,
                                    columnNumber: 86
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Hand-over contact",
                                hint: "Given to customers when a person is needed.",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"],
                                    maxLength: 200,
                                    value: agent.handoff_contact,
                                    onChange: (e)=>setAgent({
                                            ...agent,
                                            handoff_contact: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 208,
                                    columnNumber: 95
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                        label: "Greeting",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"],
                            maxLength: 300,
                            value: agent.greeting,
                            onChange: (e)=>setAgent({
                                    ...agent,
                                    greeting: e.target.value
                                })
                        }, void 0, false, {
                            fileName: "[project]/src/components/SettingsPanel.tsx",
                            lineNumber: 210,
                            columnNumber: 33
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                        label: "Extra instructions",
                        hint: "Anything the assistant should always do or never do.",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            rows: 3,
                            maxLength: 2000,
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"]} py-2`,
                            value: agent.extra_instructions,
                            onChange: (e)=>setAgent({
                                    ...agent,
                                    extra_instructions: e.target.value
                                })
                        }, void 0, false, {
                            fileName: "[project]/src/components/SettingsPanel.tsx",
                            lineNumber: 211,
                            columnNumber: 103
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2 font-semibold",
                                children: "Questions customers often ask"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: faqs.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 rounded-xl bg-paper p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                "aria-label": "Question",
                                                placeholder: "Question",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"],
                                                maxLength: 300,
                                                value: f.question,
                                                onChange: (e)=>setFaqs(faqs.map((x, j)=>j === i ? {
                                                            ...x,
                                                            question: e.target.value
                                                        } : x))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                                lineNumber: 217,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                "aria-label": "Answer",
                                                placeholder: "Answer",
                                                rows: 2,
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"]} py-2`,
                                                maxLength: 2000,
                                                value: f.answer,
                                                onChange: (e)=>setFaqs(faqs.map((x, j)=>j === i ? {
                                                            ...x,
                                                            answer: e.target.value
                                                        } : x))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                                lineNumber: 218,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "font-semibold text-rose",
                                                onClick: ()=>setFaqs(faqs.filter((_, j)=>j !== i)),
                                                children: "Remove"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                                lineNumber: 219,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 216,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "quiet",
                                className: "mt-3",
                                onClick: ()=>setFaqs([
                                        ...faqs,
                                        {
                                            question: "",
                                            answer: ""
                                        }
                                    ]),
                                children: "Add a question"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SettingsPanel.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Customer emails",
                hint: p.email.delivers ? `Emails are sent through ${p.email.name.toUpperCase()}.` : "No email provider is set up, so nothing is sent yet. Bookings and tickets still work; each message is recorded as not sent. See the README to connect SMTP.",
                onSave: ()=>save({
                        policies: {
                            email_notifications: pol.email_notifications,
                            reminder_hours_before: pol.reminder_hours_before
                        }
                    }),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                className: "size-5 accent-[var(--color-brand)]",
                                checked: Boolean(pol.email_notifications),
                                onChange: (e)=>setPol({
                                        ...pol,
                                        email_notifications: e.target.checked
                                    })
                            }, void 0, false, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, this),
                            "Email customers their confirmation, changes and cancellation"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-xs",
                        children: polNum("reminder_hours_before", "Reminder (hours before)", "0 turns reminders off.", 168)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SettingsPanel.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Phone number: texts and calls",
                hint: p.phone.connected ? `Connected to ${p.phone.number}. Customers can ${[
                    p.phone.sms && "text",
                    p.phone.voice && "call"
                ].filter(Boolean).join(" or ") || "not reach the assistant on"} this number and the assistant answers.` : "Give the assistant a regular phone number. Customers text it or call it, and it books with the same rules as your booking page.",
                saveLabel: p.phone.connected ? "Update number" : "Connect number",
                onSave: p.phone.platformReady ? ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])(`/api/b/${p.businessId}/integrations/phone`, {
                        method: "PUT",
                        body: ph
                    }) : undefined,
                children: [
                    !p.phone.platformReady && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Notice"], {
                        tone: "warn",
                        children: "Phone is not switched on for this installation yet. The server needs TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN from a Twilio account. See docs/PHONE.md."
                    }, void 0, false, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 240,
                        columnNumber: 36
                    }, this),
                    p.phone.platformReady && !p.phone.publicUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Notice"], {
                        tone: "warn",
                        children: "The phone provider can only reach a public https address. This server is running at a local address, so texts and calls will not arrive until it is deployed."
                    }, void 0, false, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 241,
                        columnNumber: 57
                    }, this),
                    p.phone.lastError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Notice"], {
                        tone: "error",
                        children: [
                            p.phone.lastError,
                            " In the US this usually means the number is not yet registered for business texting."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 242,
                        columnNumber: 31
                    }, this),
                    p.phone.platformReady && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 sm:grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                        label: "Assistant's phone number",
                                        hint: "The number you bought from the provider, in international format.",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"],
                                            type: "tel",
                                            placeholder: "+14155550100",
                                            value: ph.number,
                                            onChange: (e)=>setPh({
                                                    ...ph,
                                                    number: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SettingsPanel.tsx",
                                            lineNumber: 246,
                                            columnNumber: 128
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                        label: "Staff number for hand-over (optional)",
                                        hint: "Callers are connected here when they ask for a person. It must be a different number.",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"],
                                            type: "tel",
                                            placeholder: "+14155550199",
                                            value: ph.transferTo,
                                            onChange: (e)=>setPh({
                                                    ...ph,
                                                    transferTo: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SettingsPanel.tsx",
                                            lineNumber: 247,
                                            columnNumber: 161
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 245,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        className: "size-5 accent-[var(--color-brand)]",
                                        checked: ph.sms,
                                        onChange: (e)=>setPh({
                                                ...ph,
                                                sms: e.target.checked
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 249,
                                        columnNumber: 58
                                    }, this),
                                    "Answer text messages"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 249,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        className: "size-5 accent-[var(--color-brand)]",
                                        checked: ph.voice,
                                        onChange: (e)=>setPh({
                                                ...ph,
                                                voice: e.target.checked
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 250,
                                        columnNumber: 58
                                    }, this),
                                    "Answer phone calls"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 250,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[15px] text-ink-soft",
                                children: [
                                    "Addresses to enter for this number at the provider. Messaging: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold break-all",
                                        children: p.phone.smsUrl
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 251,
                                        columnNumber: 117
                                    }, this),
                                    ". Voice: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold break-all",
                                        children: p.phone.voiceUrl
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 251,
                                        columnNumber: 191
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 251,
                                columnNumber: 13
                            }, this),
                            p.phone.connected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "font-semibold text-rose",
                                onClick: async ()=>{
                                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])(`/api/b/${p.businessId}/integrations/phone`, {
                                        method: "DELETE"
                                    });
                                    router.refresh();
                                },
                                children: "Disconnect this number"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 252,
                                columnNumber: 35
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 244,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SettingsPanel.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "WhatsApp",
                hint: p.whatsapp.connected ? `Connected${p.whatsapp.displayNumber ? ` to ${p.whatsapp.displayNumber}` : ""}. Customers who message this number are answered by the assistant.` : "Let customers book by messaging your WhatsApp Business number. The assistant answers there with the same rules as on your booking page.",
                saveLabel: p.whatsapp.connected ? "Update connection" : "Connect WhatsApp",
                onSave: p.whatsapp.platformReady ? async ()=>{
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])(`/api/b/${p.businessId}/integrations/whatsapp`, {
                        method: "PUT",
                        body: wa
                    });
                    setWa({
                        ...wa,
                        accessToken: ""
                    });
                } : undefined,
                children: [
                    !p.whatsapp.platformReady && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Notice"], {
                        tone: "warn",
                        children: "WhatsApp is not switched on for this installation yet. The server needs WHATSAPP_APP_SECRET and WHATSAPP_VERIFY_TOKEN from a Meta developer app. See docs/WHATSAPP.md."
                    }, void 0, false, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 261,
                        columnNumber: 39
                    }, this),
                    p.whatsapp.platformReady && !p.whatsapp.publicUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Notice"], {
                        tone: "warn",
                        children: "Meta can only deliver messages to a public https address. This server is running at a local address, so WhatsApp will not reach it until it is deployed."
                    }, void 0, false, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 262,
                        columnNumber: 63
                    }, this),
                    p.whatsapp.status === "needs_attention" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Notice"], {
                        tone: "error",
                        children: [
                            "Replies are failing: ",
                            p.whatsapp.lastError,
                            " The access token has probably expired. Paste a new one below."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 263,
                        columnNumber: 53
                    }, this),
                    p.whatsapp.platformReady && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 sm:grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                        label: "Phone number ID",
                                        hint: "From Meta: WhatsApp, API Setup. Digits only; not the phone number itself.",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"],
                                            inputMode: "numeric",
                                            value: wa.phoneNumberId,
                                            onChange: (e)=>setWa({
                                                    ...wa,
                                                    phoneNumberId: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SettingsPanel.tsx",
                                            lineNumber: 267,
                                            columnNumber: 127
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 267,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                        label: "WhatsApp number (for display)",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"],
                                            placeholder: "+1 555 010 0000",
                                            value: wa.displayNumber,
                                            onChange: (e)=>setWa({
                                                    ...wa,
                                                    displayNumber: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SettingsPanel.tsx",
                                            lineNumber: 268,
                                            columnNumber: 60
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 268,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 266,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Access token",
                                hint: p.whatsapp.connected ? "Stored encrypted and never shown again. Paste a token only to replace it." : "A permanent System User token is best; temporary tokens stop working after about a day.",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    autoComplete: "off",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"],
                                    value: wa.accessToken,
                                    onChange: (e)=>setWa({
                                            ...wa,
                                            accessToken: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 271,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 270,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[15px] text-ink-soft",
                                children: [
                                    "Webhook address to enter in Meta: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold break-all",
                                        children: p.whatsapp.webhookUrl
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SettingsPanel.tsx",
                                        lineNumber: 273,
                                        columnNumber: 88
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 273,
                                columnNumber: 13
                            }, this),
                            p.whatsapp.connected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "font-semibold text-rose",
                                onClick: async ()=>{
                                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])(`/api/b/${p.businessId}/integrations/whatsapp`, {
                                        method: "DELETE"
                                    });
                                    router.refresh();
                                },
                                children: "Disconnect WhatsApp"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 274,
                                columnNumber: 38
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 265,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SettingsPanel.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            p.team && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Team",
                hint: "Staff can view, add and check in reservations. Managers can also change, cancel and edit settings.",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "divide-y divide-line rounded-xl ring-1 ring-line",
                        children: [
                            p.team.members.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-center justify-between gap-3 px-4 py-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: m.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 43
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-ink-soft",
                                                    children: m.email
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 69
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SettingsPanel.tsx",
                                            lineNumber: 284,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "capitalize text-ink-soft",
                                                    children: m.role
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 59
                                                }, this),
                                                m.role !== "owner" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "font-semibold text-rose",
                                                    onClick: async ()=>{
                                                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])(`/api/b/${p.businessId}/team?user=${m.id}`, {
                                                            method: "DELETE"
                                                        });
                                                        router.refresh();
                                                    },
                                                    children: "Remove"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 42
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SettingsPanel.tsx",
                                            lineNumber: 285,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, m.id, true, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 283,
                                    columnNumber: 15
                                }, this)),
                            p.team.invitations.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-center justify-between gap-3 px-4 py-2.5 text-ink-soft",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                v.email,
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted",
                                                    children: [
                                                        "(invited as ",
                                                        v.role,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SettingsPanel.tsx",
                                            lineNumber: 292,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "font-semibold text-rose",
                                            onClick: async ()=>{
                                                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])(`/api/b/${p.businessId}/team?invitation=${v.id}`, {
                                                    method: "DELETE"
                                                });
                                                router.refresh();
                                            },
                                            children: "Withdraw"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SettingsPanel.tsx",
                                            lineNumber: 293,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, v.id, true, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 291,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 281,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid items-end gap-3 sm:grid-cols-[1.6fr_1fr_auto]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Email to invite",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"],
                                    value: invite.email,
                                    onChange: (e)=>setInvite({
                                            ...invite,
                                            email: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 298,
                                    columnNumber: 44
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 298,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "Role",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputClass"],
                                    value: invite.role,
                                    onChange: (e)=>setInvite({
                                            ...invite,
                                            role: e.target.value
                                        }),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "staff",
                                            children: "Staff"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SettingsPanel.tsx",
                                            lineNumber: 299,
                                            columnNumber: 149
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "manager",
                                            children: "Manager"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SettingsPanel.tsx",
                                            lineNumber: 299,
                                            columnNumber: 185
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SettingsPanel.tsx",
                                    lineNumber: 299,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 299,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "quiet",
                                disabled: !invite.email,
                                onClick: async ()=>{
                                    try {
                                        const r = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"])(`/api/b/${p.businessId}/team`, {
                                            body: {
                                                email: invite.email,
                                                role: invite.role
                                            }
                                        });
                                        setInvite({
                                            email: "",
                                            role: "staff",
                                            url: r.inviteUrl,
                                            error: ""
                                        });
                                        router.refresh();
                                    } catch (e) {
                                        setInvite({
                                            ...invite,
                                            error: e.message,
                                            url: ""
                                        });
                                    }
                                },
                                children: "Create invitation"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 300,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 297,
                        columnNumber: 11
                    }, this),
                    invite.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Notice"], {
                        tone: "error",
                        children: invite.error
                    }, void 0, false, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 305,
                        columnNumber: 28
                    }, this),
                    invite.url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Notice"], {
                        tone: "ok",
                        children: [
                            "Send this link to your colleague (valid for 7 days). It is not emailed automatically.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 306,
                                columnNumber: 129
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold break-all",
                                "data-testid": "invite-url",
                                children: invite.url
                            }, void 0, false, {
                                fileName: "[project]/src/components/SettingsPanel.tsx",
                                lineNumber: 306,
                                columnNumber: 135
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SettingsPanel.tsx",
                        lineNumber: 306,
                        columnNumber: 26
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SettingsPanel.tsx",
                lineNumber: 280,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SettingsPanel.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s1(SettingsPanel, "hKwc0AwbRInkde40lrRoXEY88QE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = SettingsPanel;
var _c, _c1;
__turbopack_context__.k.register(_c, "Section");
__turbopack_context__.k.register(_c1, "SettingsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ...p,
        className: cx("inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 text-[15px] font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50", BTN[variant], className)
    }, void 0, false, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Button;
const inputClass = "block w-full min-h-11 rounded-xl border border-line bg-white px-3 text-[15px] text-ink placeholder:text-muted/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-sky/40";
function Field({ label, hint, children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: cx("block", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mb-1 block text-sm font-semibold text-ink-soft",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            children,
            hint ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c1 = Field;
function Notice({ tone = "info", children }) {
    const tones = {
        info: "bg-white ring-line text-ink-soft",
        error: "bg-rose-soft ring-rose/30 text-rose",
        ok: "bg-mint-soft ring-mint/40 text-ink",
        warn: "bg-amber-soft ring-amber/30 text-amber"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: tone === "error" ? "alert" : "status",
        className: cx("rounded-xl px-4 py-3 text-[15px] ring-1", tones[tone]),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 37,
        columnNumber: 10
    }, this);
}
_c2 = Notice;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: cx("inline-flex items-center rounded-full px-2.5 py-0.5 text-[13px] font-semibold whitespace-nowrap", STATUS_TONE[status] ?? "bg-paper"),
        children: STATUS_LABEL[status] ?? status
    }, void 0, false, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 48,
        columnNumber: 10
    }, this);
}
_c3 = StatusBadge;
const SOURCE_LABEL = {
    ai: "Assistant",
    web: "Booking form",
    staff: "Staff"
};
function SourceTag({ source }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-[13px] text-muted",
        children: SOURCE_LABEL[source] ?? source
    }, void 0, false, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 53,
        columnNumber: 10
    }, this);
}
_c4 = SourceTag;
function Card({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: cx("overflow-hidden rounded-2xl bg-surface ring-1 ring-line", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 57,
        columnNumber: 10
    }, this);
}
_c5 = Card;
function Logo({ size = 36 }) {
    // eslint-disable-next-line @next/next/no-img-element
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
_c6 = Logo;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Button");
__turbopack_context__.k.register(_c1, "Field");
__turbopack_context__.k.register(_c2, "Notice");
__turbopack_context__.k.register(_c3, "StatusBadge");
__turbopack_context__.k.register(_c4, "SourceTag");
__turbopack_context__.k.register(_c5, "Card");
__turbopack_context__.k.register(_c6, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=src_components_161sqvz5vsb1x._.js.map