module.exports = [
"[project]/src/lib/ai/local.ts [app-route] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/src_lib_ai_local_ts_1mpq7cyfapyw1._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/src/lib/ai/local.ts [app-route] (ecmascript)");
    });
});
}),
"[project]/src/lib/ai/openai.ts [app-route] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/src_lib_ai_openai_ts_1vcydniesdn2k._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/src/lib/ai/openai.ts [app-route] (ecmascript)");
    });
});
}),
];