module.exports = [
(()=>{"use strict";return[
"[project]/src/lib/audit.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "audit",
    ()=>audit,
    "log",
    ()=>log
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [instrumentation] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
async function audit(entry, db) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["q"])("INSERT INTO audit_logs (business_id, user_id, action, entity, entity_id, detail) VALUES ($1,$2,$3,$4,$5,$6)", [
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
"[project]/src/lib/crypto.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decryptSecret",
    ()=>decryptSecret,
    "encryptSecret",
    ()=>encryptSecret,
    "extractTicketToken",
    ()=>extractTicketToken,
    "hashPassword",
    ()=>hashPassword,
    "newReference",
    ()=>newReference,
    "normalizeReference",
    ()=>normalizeReference,
    "randomToken",
    ()=>randomToken,
    "sha256",
    ()=>sha256,
    "ticketToken",
    ()=>ticketToken,
    "verifyPassword",
    ()=>verifyPassword,
    "verifyTicketToken",
    ()=>verifyTicketToken
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:util [external] (node:util, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/env.ts [instrumentation] (ecmascript)");
;
;
;
const scrypt = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["scrypt"]);
const randomToken = (bytes = 32)=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomBytes"])(bytes).toString("base64url");
const sha256 = (s)=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createHash"])("sha256").update(s).digest("hex");
async function hashPassword(password) {
    const salt = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomBytes"])(16);
    const key = await scrypt(password, salt, 64);
    return `scrypt$${salt.toString("base64url")}$${key.toString("base64url")}`;
}
async function verifyPassword(password, stored) {
    const [scheme, saltB64, keyB64] = stored.split("$");
    if (scheme !== "scrypt" || !saltB64 || !keyB64) return false;
    const expected = Buffer.from(keyB64, "base64url");
    const actual = await scrypt(password, Buffer.from(saltB64, "base64url"), expected.length);
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["timingSafeEqual"])(actual, expected);
}
// ---- ticket tokens -----------------------------------------------------------
// token = base64url(ticket uuid, 16 bytes) + "." + base64url(HMAC-SHA256(secret, uuid), 24 bytes)
// The uuid is random and says nothing about the customer; the signature lets the server
// reject forged or guessed tokens before touching the database.
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function sign(ticketId) {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createHmac"])("sha256", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["env"].ticketSecret).update(`ticket:${ticketId}`).digest().subarray(0, 24).toString("base64url");
}
function ticketToken(ticketId) {
    const raw = Buffer.from(ticketId.replace(/-/g, ""), "hex").toString("base64url");
    return `${raw}.${sign(ticketId)}`;
}
function verifyTicketToken(token) {
    if (typeof token !== "string" || token.length > 80) return null;
    const [raw, sig] = token.split(".");
    if (!raw || !sig) return null;
    const hex = Buffer.from(raw, "base64url").toString("hex");
    if (hex.length !== 32) return null;
    const id = `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
    if (!UUID_RE.test(id)) return null;
    const a = Buffer.from(sig);
    const b = Buffer.from(sign(id));
    if (a.length !== b.length || !(0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["timingSafeEqual"])(a, b)) return null;
    return id;
}
function extractTicketToken(scanned) {
    const s = scanned.trim();
    const m = s.match(/\/t\/([A-Za-z0-9_-]+\.[A-Za-z0-9_-]+)/);
    return m ? m[1] : s;
}
// ---- booking references ------------------------------------------------------
const REF_ALPHABET = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ"; // no 0/O/1/I
function newReference() {
    const b = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomBytes"])(6);
    let out = "";
    for(let i = 0; i < 6; i++)out += REF_ALPHABET[b[i] % REF_ALPHABET.length];
    return out;
}
const normalizeReference = (s)=>s.toUpperCase().replace(/[^A-Z0-9]/g, "");
// ---- secrets at rest -----------------------------------------------------------
// Third-party credentials saved by a business (e.g. a WhatsApp access token) are encrypted with
// AES-256-GCM under a key derived from SECRETS_KEY (or TICKET_SECRET when that is not set).
function secretsKey() {
    return Buffer.from((0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["hkdfSync"])("sha256", process.env.SECRETS_KEY || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["env"].ticketSecret, "abc-secrets-v1", "integration-credentials", 32));
}
function encryptSecret(plain) {
    const iv = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomBytes"])(12);
    const c = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createCipheriv"])("aes-256-gcm", secretsKey(), iv);
    const body = Buffer.concat([
        c.update(plain, "utf8"),
        c.final()
    ]);
    return `v1.${iv.toString("base64url")}.${c.getAuthTag().toString("base64url")}.${body.toString("base64url")}`;
}
function decryptSecret(stored) {
    const [v, iv, tag, body] = stored.split(".");
    if (v !== "v1" || !iv || !tag || !body) throw new Error("Unreadable stored secret");
    const d = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createDecipheriv"])("aes-256-gcm", secretsKey(), Buffer.from(iv, "base64url"));
    d.setAuthTag(Buffer.from(tag, "base64url"));
    return Buffer.concat([
        d.update(Buffer.from(body, "base64url")),
        d.final()
    ]).toString("utf8");
}
}),
"[project]/src/lib/db.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "closePool",
    ()=>closePool,
    "one",
    ()=>one,
    "pgCode",
    ()=>pgCode,
    "pool",
    ()=>pool,
    "q",
    ()=>q,
    "tx",
    ()=>tx
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/env.ts [instrumentation] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
// One pool per process (also survives dev hot reloads).
const g = globalThis;
function pool() {
    if (!g.__abcPool) {
        g.__abcPool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["Pool"]({
            connectionString: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["env"].databaseUrl,
            max: 10,
            idleTimeoutMillis: 30_000
        });
        g.__abcPool.on("error", (e)=>console.error(JSON.stringify({
                level: "error",
                msg: "pg pool error",
                error: e.message
            })));
    }
    return g.__abcPool;
}
async function q(text, params = [], db) {
    const res = await (db ?? pool()).query(text, params);
    return res.rows;
}
async function one(text, params = [], db) {
    const rows = await q(text, params, db);
    return rows[0] ?? null;
}
async function tx(fn) {
    const client = await pool().connect();
    try {
        await client.query("BEGIN");
        const out = await fn(client);
        await client.query("COMMIT");
        return out;
    } catch (e) {
        await client.query("ROLLBACK").catch(()=>{});
        throw e;
    } finally{
        client.release();
    }
}
function pgCode(e) {
    return typeof e === "object" && e !== null && "code" in e ? String(e.code) : undefined;
}
async function closePool() {
    if (g.__abcPool) {
        await g.__abcPool.end();
        g.__abcPool = undefined;
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/env.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "env",
    ()=>env
]);
// Central, validated access to configuration. Nothing here is ever sent to the browser.
function required(name) {
    const v = process.env[name];
    if (!v) throw new Error(`Missing required environment variable ${name}. See .env.example.`);
    return v;
}
const env = {
    get databaseUrl () {
        return required("DATABASE_URL");
    },
    get appUrl () {
        return (process.env.APP_URL || "http://localhost:3000").replace(/\/+$/, "");
    },
    get ticketSecret () {
        const s = required("TICKET_SECRET");
        if (("TURBOPACK compile-time value", "development") === "production" && (s.length < 32 || s.startsWith("change-me"))) //TURBOPACK unreachable
        ;
        return s;
    },
    get aiProvider () {
        return process.env.AI_PROVIDER === "openai" ? "openai" : "local";
    },
    get aiBaseUrl () {
        return (process.env.AI_BASE_URL || "").replace(/\/+$/, "");
    },
    get aiApiKey () {
        return process.env.AI_API_KEY || "";
    },
    get aiModel () {
        return process.env.AI_MODEL || "";
    },
    get aiTimeoutMs () {
        return Number(process.env.AI_TIMEOUT_MS) || 20000;
    },
    get emailProvider () {
        return process.env.EMAIL_PROVIDER === "smtp" ? "smtp" : "log";
    },
    get emailFrom () {
        return process.env.EMAIL_FROM || "AI Book & Check In <no-reply@example.com>";
    },
    get isProd () {
        return ("TURBOPACK compile-time value", "development") === "production";
    }
};
}),
"[project]/src/lib/notify/providers.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/env.ts [instrumentation] (ecmascript)");
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
                    from: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["env"].emailFrom,
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
    if (!cached) cached = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["env"].emailProvider === "smtp" && process.env.SMTP_HOST ? smtpProvider() : logProvider;
    return cached;
}
function setEmailProviderForTests(p) {
    override = p;
    cached = null;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/notify/templates.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "renderEmail",
    ()=>renderEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/crypto.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/env.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/time.ts [instrumentation] (ecmascript)");
;
;
;
const esc = (s)=>s.replace(/[&<>"']/g, (c)=>({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        })[c]);
function renderEmail(kind, d) {
    const when = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["fmtDateLong"])(d.starts_at, d.timezone)} at ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["fmtTime"])(d.starts_at, d.timezone)} (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["tzLabel"])(d.starts_at, d.timezone)})`;
    const link = d.ticket_id ? `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["env"].appUrl}/t/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["ticketToken"])(d.ticket_id)}` : "";
    const guests = `${d.party_size} ${d.party_size === 1 ? "guest" : "guests"}`;
    const head = {
        confirmation: {
            subject: `Reservation confirmed — ${d.business_name}`,
            intro: "Your reservation is confirmed."
        },
        reminder: {
            subject: `Reminder: your reservation at ${d.business_name}`,
            intro: "A reminder of your upcoming reservation."
        },
        reschedule: {
            subject: `Reservation updated — ${d.business_name}`,
            intro: "Your reservation has been updated. Here are the new details."
        },
        cancellation: {
            subject: `Reservation cancelled — ${d.business_name}`,
            intro: "Your reservation has been cancelled."
        }
    };
    const { subject, intro } = head[kind];
    const lines = [
        `Hello ${d.customer_name},`,
        "",
        intro,
        "",
        `${d.business_name}`,
        `${when}`,
        `${guests} · ${d.service_name}`,
        `Reference: ${d.reference}`
    ];
    if (kind !== "cancellation") {
        if (link) lines.push("", `Your ticket (show the QR code on arrival): ${link}`);
        if (d.arrival_instructions) lines.push("", d.arrival_instructions);
        if (d.cancellation_policy) lines.push("", d.cancellation_policy);
    } else {
        lines.push("", "The ticket for this reservation is no longer valid.");
    }
    if (d.address || d.phone) lines.push("", [
        d.address,
        d.phone
    ].filter(Boolean).join(" · "));
    const text = lines.join("\n");
    const html = `<!doctype html><html><body style="margin:0;background:#f4f7fb;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:#0f1f3d">
<div style="max-width:520px;margin:0 auto;padding:24px">
<div style="background:#fff;border-radius:16px;padding:28px;border:1px solid #e3e9f2">
<p style="margin:0 0 6px;font-size:14px;color:#5b6b85">${esc(d.business_name)}</p>
<h1 style="margin:0 0 16px;font-size:20px">${esc(intro)}</h1>
<p style="margin:0 0 4px;font-size:16px"><strong>${esc(when)}</strong></p>
<p style="margin:0 0 4px">${esc(guests)} · ${esc(d.service_name)}</p>
<p style="margin:0 0 16px">Name: ${esc(d.customer_name)} · Reference: <strong>${esc(d.reference)}</strong></p>
${kind !== "cancellation" && link ? `<p style="margin:0 0 16px"><a href="${esc(link)}" style="display:inline-block;background:#1a6bf0;color:#fff;text-decoration:none;padding:12px 20px;border-radius:10px;font-weight:600">Open your ticket</a></p>` : ""}
${kind === "cancellation" ? `<p style="margin:0 0 16px;color:#5b6b85">The ticket for this reservation is no longer valid.</p>` : ""}
${kind !== "cancellation" && d.arrival_instructions ? `<p style="margin:0 0 12px;color:#33435e">${esc(d.arrival_instructions)}</p>` : ""}
${kind !== "cancellation" && d.cancellation_policy ? `<p style="margin:0 0 12px;color:#5b6b85;font-size:14px">${esc(d.cancellation_policy)}</p>` : ""}
<p style="margin:16px 0 0;color:#5b6b85;font-size:13px">${esc([
        d.address,
        d.phone
    ].filter(Boolean).join(" · "))}</p>
</div></div></body></html>`;
    return {
        to: d.customer_email,
        subject,
        text,
        html
    };
}
}),
"[project]/src/lib/notify/worker.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "processDueJobs",
    ()=>processDueJobs,
    "startWorker",
    ()=>startWorker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/audit.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$providers$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/notify/providers.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$templates$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/notify/templates.ts [instrumentation] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$providers$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$providers$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const STALE_LOCK = "5 minutes";
async function processDueJobs(limit = 10) {
    const tally = {
        sent: 0,
        failed: 0,
        retried: 0,
        notSent: 0,
        cancelled: 0
    };
    // A worker that died mid-send leaves a job "sending"; put it back in the queue.
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["q"])(`UPDATE notification_jobs SET status = 'queued', updated_at = now() WHERE status = 'sending' AND locked_at < now() - interval '${STALE_LOCK}'`);
    const jobs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["q"])(`UPDATE notification_jobs SET status = 'sending', locked_at = now(), attempts = attempts + 1, updated_at = now()
      WHERE id IN (SELECT id FROM notification_jobs WHERE status = 'queued' AND run_at <= now() ORDER BY run_at LIMIT $1 FOR UPDATE SKIP LOCKED)
      RETURNING id, reservation_id, kind, recipient, attempts, max_attempts`, [
        limit
    ]);
    for (const job of jobs){
        const provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$providers$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["emailProvider"])();
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["one"])(`SELECT b.name AS business_name, b.timezone, b.address, b.phone, p.arrival_instructions, p.cancellation_policy,
                c.name AS customer_name, c.email AS customer_email, c.notify_consent, c.erased_at,
                r.reference, r.party_size, r.starts_at, r.status, s.name AS service_name, t.id AS ticket_id
           FROM reservations r
           JOIN businesses b ON b.id = r.business_id
           JOIN business_policies p ON p.business_id = b.id
           JOIN customers c ON c.id = r.customer_id
           JOIN services s ON s.id = r.service_id
           LEFT JOIN tickets t ON t.reservation_id = r.id
          WHERE r.id = $1`, [
                job.reservation_id
            ]);
            // Re-check at send time: the booking may have changed since the job was queued.
            const stale = !data || !data.customer_email || !data.notify_consent || data.erased_at || (job.kind === "cancellation" ? data.status !== "cancelled" : ![
                "confirmed",
                "pending"
            ].includes(data.status)) || job.kind === "reminder" && data.starts_at.getTime() < Date.now();
            if (stale) {
                await finish(job.id, "cancelled", null);
                tally.cancelled++;
                continue;
            }
            const email = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$templates$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["renderEmail"])(job.kind, data);
            const res = await provider.send(email);
            if (!provider.delivers) {
                // Be honest: nothing left the server.
                await attempt(job.id, provider.name, false, null, "No email provider configured; message was not sent.");
                await finish(job.id, "not_sent", "No email provider configured.");
                tally.notSent++;
            } else {
                await attempt(job.id, provider.name, true, res.id ?? null, null);
                await finish(job.id, "sent", null);
                tally.sent++;
            }
        } catch (e) {
            const msg = e.message.slice(0, 500);
            const transient = e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$providers$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["SendError"] ? e.transient : true;
            await attempt(job.id, provider.name, false, null, msg);
            if (transient && job.attempts < job.max_attempts) {
                // Exponential backoff: 1, 2, 4, 8 minutes...
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["q"])(`UPDATE notification_jobs SET status = 'queued', last_error = $2, locked_at = NULL,
                  run_at = now() + make_interval(mins => $3), updated_at = now() WHERE id = $1`, [
                    job.id,
                    msg,
                    2 ** (job.attempts - 1)
                ]);
                tally.retried++;
            } else {
                await finish(job.id, "failed", msg);
                tally.failed++;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["log"])("warn", "notification failed", {
                    job: job.id,
                    kind: job.kind,
                    attempts: job.attempts
                });
            }
        }
    }
    return tally;
}
async function attempt(jobId, provider, ok, providerId, error) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["q"])("INSERT INTO notification_attempts (job_id, provider, ok, provider_id, error) VALUES ($1,$2,$3,$4,$5)", [
        jobId,
        provider,
        ok,
        providerId,
        error
    ]);
}
async function finish(jobId, status, error) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["q"])("UPDATE notification_jobs SET status = $2, last_error = $3, locked_at = NULL, updated_at = now() WHERE id = $1", [
        jobId,
        status,
        error
    ]);
}
const g = globalThis;
function startWorker(intervalMs = 5000) {
    if (g.__abcWorker) return;
    let running = false;
    g.__abcWorker = setInterval(async ()=>{
        if (running) return;
        running = true;
        try {
            await processDueJobs();
        } catch (e) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["log"])("error", "worker tick failed", {
                error: e.message
            });
        } finally{
            running = false;
        }
    }, intervalMs);
    g.__abcWorker.unref?.();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["log"])("info", "notification worker started", {
        intervalMs
    });
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/time.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WEEKDAYS",
    ()=>WEEKDAYS,
    "dayStart",
    ()=>dayStart,
    "fmtDate",
    ()=>fmtDate,
    "fmtDateLong",
    ()=>fmtDateLong,
    "fmtDateTime",
    ()=>fmtDateTime,
    "fmtTime",
    ()=>fmtTime,
    "isIsoDate",
    ()=>isIsoDate,
    "isValidZone",
    ()=>isValidZone,
    "labelToMinutes",
    ()=>labelToMinutes,
    "localDate",
    ()=>localDate,
    "minutesToLabel",
    ()=>minutesToLabel,
    "todayIn",
    ()=>todayIn,
    "tzLabel",
    ()=>tzLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/luxon/build/es6/luxon.mjs [instrumentation] (ecmascript)");
;
const isValidZone = (tz)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["IANAZone"].isValidZone(tz);
const isIsoDate = (s)=>/^\d{4}-\d{2}-\d{2}$/.test(s) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["DateTime"].fromISO(s).isValid;
function dayStart(date, tz) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["DateTime"].fromISO(date, {
        zone: tz
    }).startOf("day");
}
function todayIn(tz, now = new Date()) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["DateTime"].fromJSDate(now, {
        zone: tz
    }).toISODate();
}
function localDate(d, tz) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["DateTime"].fromJSDate(d, {
        zone: tz
    }).toISODate();
}
function minutesToLabel(min) {
    const h = Math.floor(min / 60) % 24;
    const m = min % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}
function labelToMinutes(s) {
    const m = /^(\d{1,2}):(\d{2})$/.exec(s.trim());
    if (!m) return null;
    const h = Number(m[1]), mi = Number(m[2]);
    if (h > 24 || mi > 59 || h === 24 && mi > 0) return null;
    return h * 60 + mi;
}
function fmtTime(d, tz) {
    return toDT(d, tz).toFormat("HH:mm");
}
function fmtDate(d, tz) {
    return toDT(d, tz).toFormat("ccc d LLL yyyy");
}
function fmtDateLong(d, tz) {
    return toDT(d, tz).toFormat("cccc d LLLL yyyy");
}
function fmtDateTime(d, tz) {
    return toDT(d, tz).toFormat("ccc d LLL yyyy, HH:mm");
}
function tzLabel(d, tz) {
    return toDT(d, tz).toFormat("ZZZZ");
}
function toDT(d, tz) {
    return (typeof d === "string" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["DateTime"].fromISO(d) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["DateTime"].fromJSDate(d)).setZone(tz);
}
const WEEKDAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];
}),
]})(),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:util [external] (node:util, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1986zoixm63yf._.js.map