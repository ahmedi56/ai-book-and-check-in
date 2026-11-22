module.exports = [
(()=>{"use strict";return[
"[project]/src/app/api/b/[bid]/checkin/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .object>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .string>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$uuid$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .uuid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .boolean>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$reservations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/booking/reservations.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/errors.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/http.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$present$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/present.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ratelimit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ratelimit.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/audit.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$reservations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$present$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ratelimit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$reservations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$present$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ratelimit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
const schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().max(400).optional(),
    reservationId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$uuid$3e$__["z"].uuid().optional(),
    commit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__["z"].boolean().default(false),
    override: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__["z"].boolean().default(false)
});
const POST = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["route"])(async (req, { bid })=>{
    const { business, user, role } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireMember"])(bid, "checkin");
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ratelimit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rateLimit"])(`checkin:${user.id}`, 240, 60);
    const input = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["body"])(req, schema);
    if (!input.code && !input.reservationId) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalid"])("Nothing to verify.");
    const method = input.code ? "qr" : "manual";
    const v = input.code ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$reservations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["verifyTicket"])(business.id, input.code) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$reservations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["verifyReservation"])(business.id, input.reservationId);
    const full = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["can"])(role, "customers.full");
    if (!input.commit || !v.reservation) {
        if (v.result === "invalid") await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["audit"])({
            businessId: business.id,
            userId: user.id,
            action: "checkin.invalid_scan"
        });
        return {
            result: v.result,
            message: v.message,
            checkedIn: false,
            reservation: v.reservation ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$present$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["presentReservation"])(v.reservation, business.timezone, full) : null
        };
    }
    const done = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$reservations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["checkIn"])(business.id, v.reservation.id, user.id, method, {
        override: input.override
    });
    if (done.checkedIn) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["audit"])({
        businessId: business.id,
        userId: user.id,
        action: "checkin",
        entity: "reservation",
        entityId: v.reservation.id,
        detail: {
            method,
            override: input.override
        }
    });
    return {
        result: done.result,
        message: done.message,
        checkedIn: done.checkedIn,
        reservation: done.reservation ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$present$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["presentReservation"])(done.reservation, business.timezone, full) : null
    };
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/audit.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "audit",
    ()=>audit,
    "log",
    ()=>log
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
async function audit(entry, db) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"])("INSERT INTO audit_logs (business_id, user_id, action, entity, entity_id, detail) VALUES ($1,$2,$3,$4,$5,$6)", [
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
"[project]/src/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "acceptInvitation",
    ()=>acceptInvitation,
    "authenticate",
    ()=>authenticate,
    "can",
    ()=>can,
    "createInvitation",
    ()=>createInvitation,
    "currentUser",
    ()=>currentUser,
    "endSession",
    ()=>endSession,
    "getInvitation",
    ()=>getInvitation,
    "listMemberships",
    ()=>listMemberships,
    "registerUser",
    ()=>registerUser,
    "requireMember",
    ()=>requireMember,
    "requireUser",
    ()=>requireUser,
    "startSession",
    ()=>startSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/errors.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/crypto.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/booking/availability.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const COOKIE = "abc_session";
const SESSION_DAYS = 30;
// What each role may do. Checked on the server for every request; the UI only hides what would fail.
const PERMISSIONS = {
    staff: [
        "reservations.read",
        "reservations.create",
        "checkin",
        "conversations.read",
        "ai.toggle"
    ],
    manager: [
        "reservations.read",
        "reservations.create",
        "checkin",
        "conversations.read",
        "reservations.manage",
        "settings",
        "ai.toggle",
        "customers.full",
        "customers.erase"
    ],
    owner: [
        "reservations.read",
        "reservations.create",
        "checkin",
        "conversations.read",
        "reservations.manage",
        "settings",
        "ai.toggle",
        "customers.full",
        "customers.erase",
        "team"
    ]
};
const can = (role, p)=>PERMISSIONS[role].includes(p);
async function registerUser(input) {
    const email = input.email.trim().toLowerCase();
    const name = input.name.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 160) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalid"])("Please enter a valid email address.");
    if (name.length < 2 || name.length > 80) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalid"])("Please enter your name.");
    if (input.password.length < 10 || input.password.length > 200) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalid"])("Choose a password of at least 10 characters.");
    const hash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hashPassword"])(input.password);
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["one"])("INSERT INTO users (email, name, password_hash) VALUES ($1,$2,$3) RETURNING id, email, name", [
            email,
            name,
            hash
        ]);
    } catch (e) {
        if (e.code === "23505") throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]("email_taken", "An account with this email already exists. Sign in instead.", 409);
        throw e;
    }
}
// Verifying against a dummy hash when the user does not exist keeps response time the same either way.
const DUMMY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hashPassword"])("dummy-password-for-timing");
async function authenticate(email, password) {
    const row = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["one"])("SELECT id, email, name, password_hash FROM users WHERE lower(email) = $1", [
        email.trim().toLowerCase()
    ]);
    const ok = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyPassword"])(password, row?.password_hash ?? await DUMMY);
    if (!row || !ok) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]("bad_credentials", "Email or password is incorrect.", 401);
    return {
        id: row.id,
        email: row.email,
        name: row.name
    };
}
async function startSession(userId) {
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["randomToken"])(32);
    const expires = new Date(Date.now() + SESSION_DAYS * 864e5);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"])("INSERT INTO sessions (user_id, token_hash, expires_at) VALUES ($1,$2,$3)", [
        userId,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sha256"])(token),
        expires
    ]);
    (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])()).set(COOKIE, token, {
        httpOnly: true,
        sameSite: "lax",
        secure: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].appUrl.startsWith("https://"),
        path: "/",
        expires
    });
}
async function endSession() {
    const jar = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const token = jar.get(COOKIE)?.value;
    if (token) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"])("DELETE FROM sessions WHERE token_hash = $1", [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sha256"])(token)
    ]);
    jar.delete(COOKIE);
}
async function currentUser() {
    const token = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])()).get(COOKIE)?.value;
    if (!token) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["one"])("SELECT u.id, u.email, u.name FROM sessions s JOIN users u ON u.id = s.user_id WHERE s.token_hash = $1 AND s.expires_at > now()", [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sha256"])(token)
    ]);
}
async function requireUser() {
    const u = await currentUser();
    if (!u) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unauthorized"])();
    return u;
}
async function requireMember(slugOrId, permission) {
    const user = await requireUser();
    const isId = /^[0-9a-f]{8}-[0-9a-f-]{27}$/i.test(slugOrId);
    const row = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["one"])(`SELECT ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_COLUMNS"]}, m.role
       FROM memberships m JOIN businesses b ON b.id = m.business_id
      WHERE m.user_id = $1 AND ${isId ? "b.id = $2" : "b.slug = $2"}`, [
        user.id,
        slugOrId
    ]);
    if (!row) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["notFound"])("Business not found");
    const { role, ...business } = row;
    if (permission && !can(role, permission)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["forbidden"])();
    return {
        user,
        business,
        role
    };
}
async function listMemberships(userId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"])("SELECT b.id, b.slug, b.name, m.role FROM memberships m JOIN businesses b ON b.id = m.business_id WHERE m.user_id = $1 ORDER BY b.name", [
        userId
    ]);
}
async function createInvitation(businessId, invitedBy, email, role) {
    const e = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalid"])("Please enter a valid email address.");
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["randomToken"])(32);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"])("INSERT INTO invitations (business_id, email, role, token_hash, invited_by, expires_at) VALUES ($1,$2,$3,$4,$5, now() + interval '7 days')", [
        businessId,
        e,
        role,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sha256"])(token),
        invitedBy
    ]);
    return token;
}
async function getInvitation(token) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["one"])(`SELECT i.id, i.business_id, b.name AS business_name, i.email, i.role FROM invitations i JOIN businesses b ON b.id = i.business_id
      WHERE i.token_hash = $1 AND i.accepted_at IS NULL AND i.expires_at > now()`, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sha256"])(token)
    ]);
}
async function acceptInvitation(token, user) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tx"])(async (db)=>{
        const inv = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["one"])(`SELECT i.id, i.business_id, i.email, i.role, b.slug FROM invitations i JOIN businesses b ON b.id = i.business_id
        WHERE i.token_hash = $1 AND i.accepted_at IS NULL AND i.expires_at > now() FOR UPDATE OF i`, [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sha256"])(token)
        ], db);
        if (!inv) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]("invite_invalid", "This invitation is no longer valid.", 410);
        if (inv.email !== user.email.toLowerCase()) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["forbidden"])(`This invitation was sent to ${inv.email}. Sign in with that email to accept it.`);
        await db.query("INSERT INTO memberships (user_id, business_id, role) VALUES ($1,$2,$3) ON CONFLICT (user_id, business_id) DO NOTHING", [
            user.id,
            inv.business_id,
            inv.role
        ]);
        await db.query("UPDATE invitations SET accepted_at = now() WHERE id = $1", [
            inv.id
        ]);
        return inv.slug;
    });
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/booking/availability.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "BUSINESS_COLUMNS",
    ()=>BUSINESS_COLUMNS,
    "checkSlot",
    ()=>checkSlot,
    "durationOf",
    ()=>durationOf,
    "findAlternatives",
    ()=>findAlternatives,
    "getDayAvailability",
    ()=>getDayAvailability,
    "loadBusy",
    ()=>loadBusy,
    "loadContext",
    ()=>loadContext,
    "pickService",
    ()=>pickService,
    "reasonText",
    ()=>reasonText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/luxon/build/es6/luxon.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/errors.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/time.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const BUSINESS_COLUMNS = "b.id, b.slug, b.name, b.type, b.timezone, b.description, b.address, b.phone, b.contact_email, (b.logo IS NOT NULL) AS has_logo, b.online_booking_enabled, b.ai_enabled";
async function loadContext(businessId, db) {
    const business = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["one"])(`SELECT ${BUSINESS_COLUMNS} FROM businesses b WHERE b.id = $1`, [
        businessId
    ], db);
    if (!business) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["notFound"])("Business not found");
    // Sequential on purpose: `db` may be a single transaction connection, which runs one query at a time.
    const policies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["one"])("SELECT * FROM business_policies WHERE business_id = $1", [
        businessId
    ], db);
    const services = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"])("SELECT id, name, description, duration_min, price_cents, currency, resource_type, active FROM services WHERE business_id = $1 ORDER BY sort, name", [
        businessId
    ], db);
    const resources = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"])("SELECT id, type, name, capacity, active FROM resources WHERE business_id = $1 ORDER BY capacity, sort, name", [
        businessId
    ], db);
    const hours = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"])("SELECT weekday, open_min, close_min FROM opening_hours WHERE business_id = $1 ORDER BY weekday, open_min", [
        businessId
    ], db);
    const closures = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"])("SELECT id, starts_at, ends_at, reason FROM closures WHERE business_id = $1 AND ends_at > now() - interval '1 day' ORDER BY starts_at", [
        businessId
    ], db);
    return {
        business,
        policies: policies,
        services,
        resources,
        hours,
        closures
    };
}
function pickService(ctx, serviceId) {
    const active = ctx.services.filter((s)=>s.active);
    if (serviceId) return active.find((s)=>s.id === serviceId) ?? null;
    return active[0] ?? null;
}
const durationOf = (ctx, s)=>s.duration_min ?? ctx.policies.default_duration_min;
async function loadBusy(businessId, from, to, db) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"])(`SELECT id, resource_id, starts_at, blocked_until FROM reservations
      WHERE business_id = $1 AND status IN ('pending','confirmed','checked_in')
        AND starts_at < $3 AND blocked_until > $2`, [
        businessId,
        from,
        to
    ], db);
}
function checkSlot(ctx, service, start, partySize, busy, opts = {}) {
    const { policies: p, business } = ctx;
    const now = opts.now ?? new Date();
    const duration = durationOf(ctx, service);
    const end = new Date(start.getTime() + duration * 60_000);
    const blockedUntil = new Date(end.getTime() + p.buffer_min * 60_000);
    const fail = (reason)=>({
            ok: false,
            reason,
            start,
            end,
            blockedUntil,
            candidates: []
        });
    const local = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DateTime"].fromJSDate(start, {
        zone: business.timezone
    });
    const startMin = local.hour * 60 + local.minute;
    const endMin = startMin + duration;
    if (start.getTime() <= now.getTime()) return fail("past");
    if (!opts.staff) {
        if (start.getTime() < now.getTime() + p.min_notice_min * 60_000) return fail("too_soon");
        const lastDay = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DateTime"].fromJSDate(now, {
            zone: business.timezone
        }).startOf("day").plus({
            days: p.max_advance_days + 1
        });
        if (local >= lastDay) return fail("too_far");
        if (partySize > p.max_party_size) return fail("party_too_large");
    }
    const todays = ctx.hours.filter((h)=>h.weekday === local.weekday);
    if (todays.length === 0) return fail("closed");
    const window = todays.find((h)=>startMin >= h.open_min && endMin <= h.close_min);
    if (!window) return fail("outside_hours");
    if (!opts.staff && (startMin - window.open_min) % p.slot_interval_min !== 0) return fail("off_grid");
    if (ctx.closures.some((c)=>c.starts_at < end && c.ends_at > start)) return fail("closure");
    const fitting = ctx.resources.filter((r)=>r.active && r.type === service.resource_type && r.capacity >= partySize);
    if (fitting.length === 0) return fail("no_capacity");
    const candidates = fitting.filter((r)=>!busy.some((b)=>b.resource_id === r.id && b.id !== opts.excludeReservationId && b.starts_at < blockedUntil && b.blocked_until > start));
    if (candidates.length === 0) return fail("full");
    // Smallest fitting resource first, so a party of 2 does not take the only table for 6.
    candidates.sort((a, b)=>a.capacity - b.capacity);
    return {
        ok: true,
        reason: "ok",
        start,
        end,
        blockedUntil,
        candidates
    };
}
async function getDayAvailability(businessId, args, db, preloaded) {
    const ctx = preloaded ?? await loadContext(businessId, db);
    const service = pickService(ctx, args.serviceId);
    if (!service) return {
        date: args.date,
        open: false,
        closedReason: "No bookable service is configured.",
        slots: []
    };
    const day = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dayStart"])(args.date, ctx.business.timezone);
    if (!day.isValid) return {
        date: args.date,
        open: false,
        closedReason: "Invalid date.",
        slots: []
    };
    const todays = ctx.hours.filter((h)=>h.weekday === day.weekday);
    if (todays.length === 0) return {
        date: args.date,
        open: false,
        closedReason: "Closed on this day.",
        slots: []
    };
    const dayEnd = day.plus({
        days: 1
    });
    const fullClosure = ctx.closures.find((c)=>c.starts_at <= day.toJSDate() && c.ends_at >= dayEnd.toJSDate());
    if (fullClosure) return {
        date: args.date,
        open: false,
        closedReason: fullClosure.reason || "Closed on this day.",
        slots: []
    };
    const busy = await loadBusy(businessId, day.minus({
        days: 1
    }).toJSDate(), dayEnd.plus({
        days: 1
    }).toJSDate(), db);
    const duration = durationOf(ctx, service);
    const slots = [];
    for (const h of todays){
        for(let m = h.open_min; m + duration <= h.close_min; m += ctx.policies.slot_interval_min){
            // Build the instant from local wall-clock time so daylight-saving changes are handled by the zone.
            const start = day.set({
                hour: Math.floor(m / 60),
                minute: m % 60
            });
            if (start.hour * 60 + start.minute !== m) continue; // wall-clock time skipped by a DST jump
            const c = checkSlot(ctx, service, start.toJSDate(), args.partySize, busy, args);
            slots.push({
                start: start.toUTC().toISO(),
                time: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["minutesToLabel"])(m),
                available: c.ok,
                reason: c.reason,
                free: c.candidates.length
            });
        }
    }
    return {
        date: args.date,
        open: true,
        closedReason: null,
        slots
    };
}
async function findAlternatives(businessId, args, db) {
    const ctx = await loadContext(businessId, db);
    const limit = args.limit ?? 4;
    const out = [];
    const wanted = args.time ? toMin(args.time) : null;
    const first = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dayStart"])(args.date, ctx.business.timezone);
    if (!first.isValid) return out;
    for(let i = 0; i <= (args.days ?? 14) && out.length < limit; i++){
        const date = first.plus({
            days: i
        }).toISODate();
        const day = await getDayAvailability(businessId, {
            ...args,
            date
        }, db, ctx);
        let free = day.slots.filter((s)=>s.available);
        if (wanted !== null) free = [
            ...free
        ].sort((a, b)=>Math.abs(toMin(a.time) - wanted) - Math.abs(toMin(b.time) - wanted));
        for (const s of free.slice(0, limit - out.length))out.push({
            date,
            time: s.time,
            start: s.start
        });
    }
    return out;
}
const toMin = (t)=>Number(t.slice(0, 2)) * 60 + Number(t.slice(3, 5));
function reasonText(reason, ctx) {
    switch(reason){
        case "closed":
            return "We are closed that day.";
        case "outside_hours":
            return "That time is outside our opening hours.";
        case "off_grid":
            return `Bookings start every ${ctx.policies.slot_interval_min} minutes.`;
        case "closure":
            return "We are closed at that time.";
        case "too_soon":
            return "That time is too soon to book online.";
        case "too_far":
            return `Bookings open up to ${ctx.policies.max_advance_days} days ahead.`;
        case "past":
            return "That time has already passed.";
        case "party_too_large":
            return `Online bookings are limited to ${ctx.policies.max_party_size} guests. Please contact us for larger groups.`;
        case "no_capacity":
            return "We cannot seat a group of that size.";
        case "full":
            return "That time is fully booked.";
        default:
            return "";
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/booking/reservations.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/luxon/build/es6/luxon.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/errors.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/crypto.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$realtime$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/realtime.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$jobs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/notify/jobs.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/booking/availability.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$realtime$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$jobs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$realtime$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$jobs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["one"])(`${RESERVATION_SELECT} WHERE r.business_id = $1 AND r.id = $2`, [
        businessId,
        id
    ], db);
}
async function addEvent(db, r, kind, from, to, actor, detail = {}) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"])(`INSERT INTO reservation_events (reservation_id, business_id, kind, from_status, to_status, actor_type, actor_user_id, detail)
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
    if (name.length < 2 || name.length > 80) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalid"])("Please enter the name for the reservation.");
    if (email && (!EMAIL_RE.test(email) || email.length > 160)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalid"])("That email address does not look right.");
    if (phone && (phone.replace(/\D/g, "").length < 6 || phone.length > 30)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalid"])("That phone number does not look right.");
    if (!email && !phone) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalid"])("Please give an email address or a phone number so we can reach you.");
    return {
        name,
        email,
        phone,
        consent: c.consent !== false
    };
}
async function createReservation(input) {
    const ctx = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loadContext"])(input.businessId);
    const staff = input.source === "staff";
    if (!staff && !ctx.business.online_booking_enabled) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]("booking_disabled", "Online reservations are currently paused. Please contact us directly.", 409);
    }
    const service = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pickService"])(ctx, input.serviceId);
    if (!service) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalid"])("This service cannot be booked.");
    if (!Number.isInteger(input.partySize) || input.partySize < 1) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalid"])("Please tell us how many guests.");
    const start = new Date(input.startsAt);
    if (Number.isNaN(start.getTime())) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalid"])("Invalid date or time.");
    const customer = cleanCustomer(input.customer);
    const notes = (input.notes ?? "").trim().slice(0, 500);
    const key = input.idempotencyKey?.slice(0, 100) || null;
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tx"])(async (db)=>{
            // Bookings for one business are taken one at a time. This keeps racing requests from
            // deadlocking each other on the overlap constraint; the constraint itself stays the guarantee.
            await db.query("SELECT pg_advisory_xact_lock(hashtextextended($1, 0))", [
                input.businessId
            ]);
            // A retried request (double click, network retry, AI repeating a tool call) returns the first result.
            if (key) {
                const prior = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["one"])("SELECT id FROM reservations WHERE business_id = $1 AND idempotency_key = $2", [
                    input.businessId,
                    key
                ], db);
                if (prior) return existing(input.businessId, prior.id, db);
            }
            const busy = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loadBusy"])(input.businessId, new Date(start.getTime() - 864e5), new Date(start.getTime() + 2 * 864e5), db);
            const check = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkSlot"])(ctx, service, start, input.partySize, busy, {
                staff,
                now: input.now
            });
            if (!check.ok) throw await unavailable(ctx, check.reason, input, service.id);
            const customerId = await upsertCustomer(db, input.businessId, customer);
            // The same person cannot hold two live bookings that overlap.
            const dup = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["one"])(`SELECT reference FROM reservations
          WHERE business_id = $1 AND customer_id = $2 AND status IN ('pending','confirmed','checked_in')
            AND starts_at < $4 AND ends_at > $3 LIMIT 1`, [
                input.businessId,
                customerId,
                check.start,
                check.end
            ], db);
            if (dup) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]("duplicate_booking", `You already have a reservation at that time (reference ${dup.reference}).`, 409, {
                reference: dup.reference
            });
            // Try each free resource. The exclusion constraint is the final arbiter: if another
            // request took this resource a millisecond ago, the insert fails and we try the next one.
            let id = null;
            for (const res of check.candidates){
                for(let attempt = 0; attempt < 3 && !id; attempt++){
                    await db.query("SAVEPOINT try_insert");
                    try {
                        const row = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["one"])(`INSERT INTO reservations (business_id, reference, customer_id, service_id, resource_id, party_size,
                                         starts_at, ends_at, blocked_until, status, source, notes, idempotency_key, conversation_id, created_by)
               VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15) RETURNING id`, [
                            input.businessId,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["newReference"])(),
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
                        const code = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgCode"])(e), constraint = e.constraint;
                        if (code === "23P01") break; // resource just taken → next resource
                        if (code === "40P01") continue; // deadlock with a racing insert → try again
                        if (code === "23505" && constraint === "reservations_business_id_reference_key") continue; // reference clash → new reference
                        throw e;
                    }
                }
                if (id) break;
            }
            if (!id) throw await unavailable(ctx, "full", input, service.id);
            const ticket = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["one"])("INSERT INTO tickets (reservation_id, business_id) VALUES ($1,$2) RETURNING id", [
                id,
                input.businessId
            ], db);
            const reservation = await getReservation(input.businessId, id, db);
            await addEvent(db, reservation, "created", null, reservation.status, input.actor, {
                source: input.source
            });
            if (input.conversationId) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"])("UPDATE conversations SET reservation_id = $2, outcome = 'booked', updated_at = now() WHERE id = $1 AND business_id = $3", [
                    input.conversationId,
                    id,
                    input.businessId
                ], db);
            }
            if (reservation.status === "confirmed") await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$jobs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["enqueueForReservation"])(db, ctx.policies, reservation, "confirmation", customer.consent);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$realtime$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["publish"])({
                businessId: input.businessId,
                type: "reservation.created",
                id
            }, db);
            return {
                reservation,
                ticketToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ticketToken"])(ticket.id),
                duplicateRequest: false
            };
        });
    } catch (e) {
        // Two identical requests raced: the loser hits the unique idempotency key. Return the winner's booking.
        if (key && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgCode"])(e) === "23505" && e.constraint === "reservations_business_id_idempotency_key_key") {
            const prior = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["one"])("SELECT id FROM reservations WHERE business_id = $1 AND idempotency_key = $2", [
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
        ticketToken: reservation.ticket_id ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ticketToken"])(reservation.ticket_id) : "",
        duplicateRequest: true
    };
}
async function unavailable(ctx, reason, input, serviceId, excludeReservationId) {
    const local = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DateTime"].fromISO(input.startsAt).setZone(ctx.business.timezone);
    const alternatives = local.isValid ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findAlternatives"])(input.businessId, {
        date: local.toISODate(),
        time: local.toFormat("HH:mm"),
        partySize: input.partySize,
        serviceId,
        staff: input.source === "staff",
        excludeReservationId
    }) : [];
    return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]("slot_unavailable", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["reasonText"])(reason, ctx) || "That time is not available.", 409, {
        reason,
        alternatives
    });
}
async function upsertCustomer(db, businessId, c) {
    const digits = c.phone ? c.phone.replace(/\D/g, "") : "";
    const found = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["one"])(`SELECT id FROM customers
      WHERE business_id = $1 AND erased_at IS NULL AND lower(name) = lower($2)
        AND (($3::text IS NOT NULL AND lower(email) = $3) OR ($4 <> '' AND phone_digits = $4))
      ORDER BY created_at LIMIT 1`, [
        businessId,
        c.name,
        c.email,
        digits
    ], db);
    if (found) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"])("UPDATE customers SET email = coalesce($2, email), phone = coalesce($3, phone), notify_consent = $4 WHERE id = $1", [
            found.id,
            c.email,
            c.phone,
            c.consent
        ], db);
        return found.id;
    }
    const row = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["one"])("INSERT INTO customers (business_id, name, email, phone, notify_consent) VALUES ($1,$2,$3,$4,$5) RETURNING id", [
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tx"])(async (db)=>{
        const cur = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["one"])("SELECT id, business_id, status, starts_at FROM reservations WHERE business_id = $1 AND id = $2 FOR UPDATE", [
            businessId,
            id
        ], db);
        if (!cur) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["notFound"])("Reservation not found");
        if (cur.status === "cancelled") return await getReservation(businessId, id, db); // already done: idempotent
        const ctx = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loadContext"])(businessId, db);
        if (opts.enforceCustomerRules) {
            const can = customerCanChange(cur, ctx.policies);
            if (!can.allowed) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]("change_not_allowed", can.reason, 409);
        } else if (![
            "pending",
            "confirmed"
        ].includes(cur.status)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]("bad_status", `A reservation that is ${cur.status.replace("_", " ")} cannot be cancelled.`, 409);
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"])("UPDATE reservations SET status = 'cancelled', cancelled_at = now(), updated_at = now() WHERE id = $1", [
            id
        ], db);
        // The ticket stops working the moment the booking is cancelled.
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"])("UPDATE tickets SET status = 'revoked', revoked_at = now() WHERE reservation_id = $1", [
            id
        ], db);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$jobs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cancelQueuedReminders"])(db, id);
        await addEvent(db, cur, "cancelled", cur.status, "cancelled", actor, opts.reason ? {
            reason: opts.reason.slice(0, 300)
        } : {});
        const r = await getReservation(businessId, id, db);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$jobs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["enqueueForReservation"])(db, ctx.policies, r, "cancellation");
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$realtime$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["publish"])({
            businessId,
            type: "reservation.updated",
            id
        }, db);
        return r;
    });
}
async function rescheduleReservation(businessId, id, change, actor, opts = {}) {
    const ctx = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loadContext"])(businessId);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tx"])(async (db)=>{
        const cur = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["one"])("SELECT id, business_id, status, starts_at, party_size, service_id, source FROM reservations WHERE business_id = $1 AND id = $2 FOR UPDATE", [
            businessId,
            id
        ], db);
        if (!cur) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["notFound"])("Reservation not found");
        if (![
            "pending",
            "confirmed"
        ].includes(cur.status)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]("bad_status", `A reservation that is ${cur.status.replace("_", " ")} cannot be changed.`, 409);
        if (opts.enforceCustomerRules) {
            if (!ctx.business.online_booking_enabled) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]("booking_disabled", "Online changes are currently paused. Please contact us directly.", 409);
            const can = customerCanChange(cur, ctx.policies);
            if (!can.allowed) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]("change_not_allowed", can.reason, 409);
        }
        const staff = actor.type === "staff";
        const start = change.startsAt ? new Date(change.startsAt) : cur.starts_at;
        if (Number.isNaN(start.getTime())) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalid"])("Invalid date or time.");
        const party = change.partySize ?? cur.party_size;
        if (!Number.isInteger(party) || party < 1) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalid"])("Please tell us how many guests.");
        const service = ctx.services.find((s)=>s.id === cur.service_id);
        const timeChanged = start.getTime() !== cur.starts_at.getTime() || party !== cur.party_size;
        if (timeChanged) {
            await db.query("SELECT pg_advisory_xact_lock(hashtextextended($1, 0))", [
                businessId
            ]);
            const busy = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loadBusy"])(businessId, new Date(start.getTime() - 864e5), new Date(start.getTime() + 2 * 864e5), db);
            const check = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkSlot"])(ctx, service, start, party, busy, {
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
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"])(`UPDATE reservations SET resource_id = $2, starts_at = $3, ends_at = $4, blocked_until = $5, party_size = $6, updated_at = now() WHERE id = $1`, [
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
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgCode"])(e) !== "23P01") throw e;
                }
            }
            if (!moved) throw await unavailable(ctx, "full", {
                businessId,
                startsAt: start.toISOString(),
                partySize: party,
                source: staff ? "staff" : "web"
            }, service.id, id);
        }
        if (change.notes !== undefined) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"])("UPDATE reservations SET notes = $2, updated_at = now() WHERE id = $1", [
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$jobs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["moveReminder"])(db, ctx.policies, r);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$jobs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["enqueueForReservation"])(db, ctx.policies, r, "reschedule");
        } else if (change.notes !== undefined) {
            await addEvent(db, cur, "note_updated", cur.status, cur.status, actor);
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$realtime$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["publish"])({
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tx"])(async (db)=>{
        const cur = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["one"])("SELECT id, business_id, status FROM reservations WHERE business_id = $1 AND id = $2 FOR UPDATE", [
            businessId,
            id
        ], db);
        if (!cur) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["notFound"])("Reservation not found");
        if (cur.status === to) return await getReservation(businessId, id, db);
        if (!allowedFrom[to].includes(cur.status)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]("bad_status", `A reservation that is ${cur.status.replace("_", " ")} cannot be marked ${to.replace("_", " ")}.`, 409);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"])("UPDATE reservations SET status = $2, updated_at = now() WHERE id = $1", [
            id,
            to
        ], db);
        await addEvent(db, cur, to, cur.status, to, actor);
        const r = await getReservation(businessId, id, db);
        if (to === "confirmed") {
            const ctx = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loadContext"])(businessId, db);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$jobs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["enqueueForReservation"])(db, ctx.policies, r, "confirmation");
        }
        if (to === "no_show") await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$jobs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cancelQueuedReminders"])(db, id);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$realtime$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["publish"])({
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
    const ticketId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyTicketToken"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extractTicketToken"])(String(scanned ?? "")));
    if (!ticketId) return INVALID;
    const r = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["one"])(`${RESERVATION_SELECT} WHERE t.id = $1 AND r.business_id = $2`, [
        ticketId,
        businessId
    ], db);
    if (!r) return INVALID;
    const ctx = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loadContext"])(businessId, db);
    return {
        ...evaluate(r, ctx.policies, now),
        reservation: r
    };
}
async function verifyReservation(businessId, reservationId, now = new Date(), db) {
    const r = await getReservation(businessId, reservationId, db);
    if (!r) return INVALID;
    const ctx = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loadContext"])(businessId, db);
    return {
        ...evaluate(r, ctx.policies, now),
        reservation: r
    };
}
async function checkIn(businessId, reservationId, userId, method, opts = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tx"])(async (db)=>{
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
        const updated = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"])("UPDATE reservations SET status = 'checked_in', checked_in_at = now(), updated_at = now() WHERE id = $1 AND business_id = $2 AND status = 'confirmed' RETURNING id", [
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"])("INSERT INTO checkins (reservation_id, business_id, user_id, method, override) VALUES ($1,$2,$3,$4,$5)", [
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$jobs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cancelQueuedReminders"])(db, reservationId);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$realtime$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["publish"])({
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
    const ticketId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyTicketToken"])(token);
    if (!ticketId) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["one"])(`${RESERVATION_SELECT} WHERE t.id = $1`, [
        ticketId
    ], db);
}
async function findReservationByReferenceAndContact(businessId, reference, contact, db) {
    const ref = reference.toUpperCase().replace(/[^A-Z0-9]/g, "");
    const c = contact.trim().toLowerCase();
    const digits = c.replace(/\D/g, "");
    if (ref.length !== 6 || c.length < 4) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["one"])(`${RESERVATION_SELECT} WHERE r.business_id = $1 AND r.reference = $2
       AND ((c.email IS NOT NULL AND lower(c.email) = $3) OR ($4 <> '' AND length($4) >= 6 AND c.phone_digits = $4))`, [
        businessId,
        ref,
        c,
        digits
    ], db);
}
async function reservationHistory(businessId, id) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"])(`SELECT e.kind, e.from_status, e.to_status, e.actor_type, u.name AS actor_name, e.detail, e.created_at
       FROM reservation_events e LEFT JOIN users u ON u.id = e.actor_user_id
      WHERE e.business_id = $1 AND e.reservation_id = $2 ORDER BY e.id`, [
        businessId,
        id
    ]);
}
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/booking/search.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/time.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$reservations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/booking/reservations.ts [app-route] (ecmascript) <locals>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$reservations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$reservations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
    if (f.from) add("r.starts_at >= ?", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dayStart"])(f.from, tz).toJSDate());
    if (f.to) add("r.starts_at < ?", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dayStart"])(f.to, tz).plus({
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$reservations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RESERVATION_SELECT"]} WHERE ${w} ORDER BY ${order} LIMIT ${limit} OFFSET ${offset}`, params),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"])(`SELECT count(*)::int AS n FROM reservations r JOIN customers c ON c.id = r.customer_id WHERE ${w}`, params)
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isIsoDate"])(v) ? v : undefined;
    };
    const mins = (k)=>{
        const v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["labelToMinutes"])(sp.get(k) ?? "");
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
"[project]/src/lib/crypto.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/env.ts [app-route] (ecmascript)");
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
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createHmac"])("sha256", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].ticketSecret).update(`ticket:${ticketId}`).digest().subarray(0, 24).toString("base64url");
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
    return Buffer.from((0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["hkdfSync"])("sha256", process.env.SECRETS_KEY || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].ticketSecret, "abc-secrets-v1", "integration-credentials", 32));
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
"[project]/src/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/env.ts [app-route] (ecmascript)");
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
            connectionString: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].databaseUrl,
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
"[project]/src/lib/env.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/lib/errors.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** An error that is safe to show to the caller. Anything else becomes a generic 500. */ __turbopack_context__.s([
    "AppError",
    ()=>AppError,
    "forbidden",
    ()=>forbidden,
    "invalid",
    ()=>invalid,
    "notFound",
    ()=>notFound,
    "unauthorized",
    ()=>unauthorized
]);
class AppError extends Error {
    code;
    status;
    data;
    constructor(code, message, status = 400, data){
        super(message), this.code = code, this.status = status, this.data = data;
    }
}
const notFound = (what = "Not found")=>new AppError("not_found", what, 404);
const forbidden = (msg = "You do not have permission to do this.")=>new AppError("forbidden", msg, 403);
const unauthorized = ()=>new AppError("unauthorized", "Please sign in.", 401);
const invalid = (msg, data)=>new AppError("invalid", msg, 400, data);
}),
"[project]/src/lib/http.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "body",
    ()=>body,
    "clientIp",
    ()=>clientIp,
    "route",
    ()=>route
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/errors.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/audit.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
function route(fn) {
    return async (req, ctx)=>{
        try {
            if (![
                "GET",
                "HEAD",
                "OPTIONS"
            ].includes(req.method)) assertSameOrigin(req);
            const out = await fn(req, await ctx.params);
            if (out instanceof Response) return out;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(out ?? {
                ok: true
            });
        } catch (e) {
            if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: {
                        code: e.code,
                        message: e.message,
                        ...e.data ? {
                            data: e.data
                        } : {}
                    }
                }, {
                    status: e.status
                });
            }
            if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodError"]) {
                const first = e.issues[0];
                const where = first?.path?.length ? `${first.path.join(".")}: ` : "";
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: {
                        code: "invalid",
                        message: `${where}${first?.message ?? "Invalid input"}`
                    }
                }, {
                    status: 400
                });
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["log"])("error", "unhandled route error", {
                path: new URL(req.url).pathname,
                method: req.method,
                error: e.message
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: {
                    code: "server_error",
                    message: "Something went wrong on our side. Please try again."
                }
            }, {
                status: 500
            });
        }
    };
}
function assertSameOrigin(req) {
    const origin = req.headers.get("origin");
    if (!origin) return; // non-browser clients send no Origin and carry no ambient cookies of a victim
    const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
    let originHost = "";
    try {
        originHost = new URL(origin).host;
    } catch  {}
    if (!host || originHost !== host) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]("bad_origin", "Cross-site request blocked.", 403);
}
async function body(req, schema, maxBytes = 64_000) {
    const raw = await req.text();
    if (raw.length > maxBytes) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]("too_large", "Request is too large.", 413);
    let json;
    try {
        json = raw ? JSON.parse(raw) : {};
    } catch  {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]("invalid", "Invalid JSON.", 400);
    }
    return schema.parse(json);
}
function clientIp(req) {
    return (req.headers.get("x-forwarded-for")?.split(",")[0] ?? req.headers.get("x-real-ip") ?? "local").trim().slice(0, 60);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/notify/jobs.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
async function insertJob(db, r, kind, dedupeKey, runAt = new Date()) {
    // ON CONFLICT DO NOTHING: retrying the surrounding operation can never queue the same message twice.
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"])(`INSERT INTO notification_jobs (business_id, reservation_id, kind, recipient, dedupe_key, run_at)
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
    const ok = consent ?? (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["one"])("SELECT notify_consent FROM customers WHERE id = $1", [
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
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"])("UPDATE notification_jobs SET status = 'cancelled', updated_at = now() WHERE reservation_id = $1 AND kind = 'reminder' AND status = 'queued'", [
        reservationId
    ], db);
}
async function moveReminder(db, p, r) {
    const at = reminderTime(p, r);
    if (!at) return cancelQueuedReminders(db, r.id);
    const moved = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"])("UPDATE notification_jobs SET run_at = $2, updated_at = now() WHERE dedupe_key = $1 AND status = 'queued' RETURNING id", [
        `reminder:${r.id}`,
        at
    ], db);
    if (moved.length === 0 && p.email_notifications && r.customer_email) await insertJob(db, r, "reminder", `reminder:${r.id}`, at);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/present.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "presentReservation",
    ()=>presentReservation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/luxon/build/es6/luxon.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$search$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/booking/search.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$search$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$search$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function presentReservation(r, tz, fullContact) {
    const s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DateTime"].fromJSDate(r.starts_at, {
        zone: tz
    });
    const e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DateTime"].fromJSDate(r.ends_at, {
        zone: tz
    });
    return {
        id: r.id,
        reference: r.reference,
        status: r.status,
        source: r.source,
        partySize: r.party_size,
        startsAt: r.starts_at.toISOString(),
        endsAt: r.ends_at.toISOString(),
        date: s.toISODate(),
        time: s.toFormat("HH:mm"),
        endTime: e.toFormat("HH:mm"),
        customerId: r.customer_id,
        customerName: r.customer_name,
        email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$search$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["maskEmail"])(r.customer_email, fullContact),
        phone: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$search$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["maskPhone"])(r.customer_phone, fullContact),
        service: r.service_name,
        resource: r.resource_name,
        notes: r.notes,
        checkedInAt: r.checked_in_at?.toISOString() ?? null,
        createdAt: r.created_at.toISOString(),
        ticketStatus: r.ticket_status
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/ratelimit.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "rateLimit",
    ()=>rateLimit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/errors.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
async function rateLimit(key, limit, windowSec) {
    if (process.env.RATE_LIMIT_DISABLED === "1") return;
    const rows = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"])(`INSERT INTO rate_limits (key, window_start, count)
     VALUES ($1, to_timestamp(floor(extract(epoch from now()) / $2) * $2), 1)
     ON CONFLICT (key, window_start) DO UPDATE SET count = rate_limits.count + 1
     RETURNING count`, [
        key,
        windowSec
    ]);
    if (Math.random() < 0.01) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"])("DELETE FROM rate_limits WHERE window_start < now() - interval '1 day'").catch(()=>{});
    }
    if (rows[0].count > limit) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]("rate_limited", "Too many requests. Please wait a moment and try again.", 429);
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/realtime.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "publish",
    ()=>publish,
    "subscribe",
    ()=>subscribe
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/env.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/audit.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const CHANNEL = "abc_events";
async function publish(ev, db) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"])("SELECT pg_notify($1, $2)", [
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
            connectionString: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$env$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].databaseUrl
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["log"])("error", "realtime listen failed", {
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
"[project]/src/lib/time.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/luxon/build/es6/luxon.mjs [app-route] (ecmascript)");
;
const isValidZone = (tz)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IANAZone"].isValidZone(tz);
const isIsoDate = (s)=>/^\d{4}-\d{2}-\d{2}$/.test(s) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DateTime"].fromISO(s).isValid;
function dayStart(date, tz) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DateTime"].fromISO(date, {
        zone: tz
    }).startOf("day");
}
function todayIn(tz, now = new Date()) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DateTime"].fromJSDate(now, {
        zone: tz
    }).toISODate();
}
function localDate(d, tz) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DateTime"].fromJSDate(d, {
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
    return (typeof d === "string" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DateTime"].fromISO(d) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DateTime"].fromJSDate(d)).setZone(tz);
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
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/node:util [external] (node:util, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0563kac0-yl_z._.js.map