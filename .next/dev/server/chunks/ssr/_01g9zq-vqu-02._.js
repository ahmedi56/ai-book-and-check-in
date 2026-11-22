module.exports = [
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata,
    "viewport",
    ()=>viewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
;
;
;
const metadata = {
    title: {
        default: "AI Book & Check In",
        template: "%s — AI Book & Check In"
    },
    description: "Customers book automatically. AI handles the conversation. You check the list and verify arrivals."
};
const viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#1f5fe0"
};
/**
 * Development only. Some browser extensions (Bitdefender's is one) stamp attributes such as
 * bis_skin_checked="1" on every <div> as the page loads, before React takes over. React then
 * reports a "hydration mismatch" on every page even though the app's own HTML is correct
 * (verified: the server response never contains these attributes, and a browser without the
 * extension reports nothing). This script, placed first in <head>, removes those specific
 * foreign attributes as they appear so the development error overlay stays quiet.
 * - Not included in production builds, where React does not report attribute differences.
 * - It stops after 15 seconds or 5,000 removals, so an extension that keeps re-adding its
 *   attribute cannot make the page spin.
 */ const STRIP_EXTENSION_ATTRIBUTES = `(function(){var re=/^(bis_|__processed_)/,n=0,o=new MutationObserver(function(ms){for(var i=0;i<ms.length;i++){var m=ms[i];if(m.type==="attributes"&&re.test(m.attributeName)&&m.target.hasAttribute(m.attributeName)){m.target.removeAttribute(m.attributeName);if(++n>5000){o.disconnect();return}}}});o.observe(document.documentElement,{attributes:true,subtree:true});setTimeout(function(){o.disconnect()},15000)})();`;
function RootLayout({ children }) {
    return(// suppressHydrationWarning on <html> and <body> only: extensions (password managers, grammar
    // checkers, antivirus) routinely add attributes to these two elements. It applies to these
    // elements' own attributes, not to anything inside them.
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        suppressHydrationWarning: true,
        children: [
            ("TURBOPACK compile-time value", "development") === "development" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                    dangerouslySetInnerHTML: {
                        __html: STRIP_EXTENSION_ATTRIBUTES
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 32,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                className: "min-h-dvh",
                suppressHydrationWarning: true,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this));
}
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=_01g9zq-vqu-02._.js.map