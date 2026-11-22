module.exports = [
"[project]/src/lib/ai/openai.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "openAiCompatible",
    ()=>openAiCompatible
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ai$2f$provider$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ai/provider.ts [app-route] (ecmascript)");
;
;
function toWire(system, messages) {
    const out = [
        {
            role: "system",
            content: system
        }
    ];
    for (const m of messages){
        if (m.role === "user") out.push({
            role: "user",
            content: m.content
        });
        else if (m.role === "assistant") {
            out.push({
                role: "assistant",
                content: m.content || null,
                ...m.toolCalls?.length ? {
                    tool_calls: m.toolCalls.map((t)=>({
                            id: t.id,
                            type: "function",
                            function: {
                                name: t.name,
                                arguments: JSON.stringify(t.arguments)
                            }
                        }))
                } : {}
            });
        } else out.push({
            role: "tool",
            tool_call_id: m.toolCallId,
            content: m.content
        });
    }
    return out;
}
function openAiCompatible() {
    const url = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].aiBaseUrl}/chat/completions`;
    return {
        name: `openai-compatible:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].aiModel}`,
        async chat (req) {
            const payload = JSON.stringify({
                model: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].aiModel,
                temperature: 0.2,
                messages: toWire(req.system, req.messages),
                tools: req.tools.map((t)=>({
                        type: "function",
                        function: {
                            name: t.name,
                            description: t.description,
                            parameters: t.parameters
                        }
                    })),
                tool_choice: "auto"
            });
            let lastError = "";
            for(let attempt = 0; attempt < 2; attempt++){
                try {
                    const res = await fetch(url, {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            authorization: `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].aiApiKey}`
                        },
                        body: payload,
                        signal: AbortSignal.timeout(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].aiTimeoutMs)
                    });
                    if (res.status === 429 || res.status >= 500) {
                        lastError = `HTTP ${res.status}`;
                        await new Promise((r)=>setTimeout(r, 800));
                        continue;
                    }
                    if (!res.ok) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ai$2f$provider$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AiUnavailable"](`AI provider returned HTTP ${res.status}`);
                    const json = await res.json();
                    const msg = json.choices?.[0]?.message;
                    if (!msg) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ai$2f$provider$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AiUnavailable"]("AI provider returned an empty response");
                    const toolCalls = (msg.tool_calls ?? []).map((t, i)=>{
                        let args = {};
                        try {
                            const p = JSON.parse(t.function?.arguments || "{}");
                            if (p && typeof p === "object" && !Array.isArray(p)) args = p;
                        } catch  {}
                        return {
                            id: t.id || `call_${Date.now()}_${i}`,
                            name: String(t.function?.name ?? ""),
                            arguments: args
                        };
                    });
                    return {
                        text: typeof msg.content === "string" ? msg.content : "",
                        toolCalls,
                        usage: {
                            in: json.usage?.prompt_tokens ?? 0,
                            out: json.usage?.completion_tokens ?? 0
                        }
                    };
                } catch (e) {
                    if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ai$2f$provider$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AiUnavailable"]) throw e;
                    lastError = e.name === "TimeoutError" ? "timeout" : e.message;
                }
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ai$2f$provider$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AiUnavailable"](`AI provider unavailable (${lastError})`);
        }
    };
}
}),
];

//# sourceMappingURL=src_lib_ai_openai_ts_1vcydniesdn2k._.js.map