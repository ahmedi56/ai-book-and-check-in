module.exports = [
"[project]/src/instrumentation.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Runs once when the server starts.
__turbopack_context__.s([
    "register",
    ()=>register
]);
async function register() {
    if (("TURBOPACK compile-time value", "nodejs") === "nodejs" && process.env.WORKER_IN_PROCESS !== "0") {
        const { startWorker } = await __turbopack_context__.A("[project]/src/lib/notify/worker.ts [instrumentation] (ecmascript, async loader)");
        startWorker();
    }
}
}),
];

//# sourceMappingURL=src_instrumentation_ts_07j_8w1ivtswj._.js.map