module.exports = [
(()=>{"use strict";return[
"[project]/src/app/api/businesses/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/http.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ratelimit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ratelimit.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/schemas.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ratelimit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ratelimit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const POST = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["route"])(async (req)=>{
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireUser"])();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ratelimit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rateLimit"])(`business:create:${user.id}`, 10, 3600);
    const input = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["body"])(req, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createBusinessSchema"]);
    const business = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createBusiness"])(user.id, input);
    return {
        business: {
            id: business.id,
            slug: business.slug,
            name: business.name
        }
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
"[project]/src/lib/business.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "createBusiness",
    ()=>createBusiness,
    "eraseCustomer",
    ()=>eraseCustomer,
    "getAgent",
    ()=>getAgent,
    "getFaqs",
    ()=>getFaqs,
    "getPublicBusiness",
    ()=>getPublicBusiness,
    "saveLogo",
    ()=>saveLogo,
    "slugify",
    ()=>slugify,
    "updateSettings",
    ()=>updateSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/errors.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/time.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/audit.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/booking/availability.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const RESOURCE_NOUN = {
    restaurant: {
        type: "table",
        noun: "Table",
        service: "Table reservation"
    },
    salon: {
        type: "staff",
        noun: "Stylist",
        service: "Appointment"
    },
    clinic: {
        type: "staff",
        noun: "Practitioner",
        service: "Consultation"
    },
    hotel: {
        type: "room",
        noun: "Room",
        service: "Room booking"
    },
    repair: {
        type: "staff",
        noun: "Technician",
        service: "Service appointment"
    },
    other: {
        type: "slot",
        noun: "Slot",
        service: "Booking"
    }
};
function slugify(name) {
    const s = name.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40);
    return s.length >= 3 ? s : `business-${s}`.replace(/-$/, "");
}
function parseHours(hours) {
    const out = hours.map((h)=>({
            weekday: h.weekday,
            open_min: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["labelToMinutes"])(h.open),
            close_min: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["labelToMinutes"])(h.close)
        }));
    for (const h of out)if (h.close_min <= h.open_min) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalid"])("Closing time must be after opening time (hours past midnight are not supported yet).");
    for (const a of out)for (const b of out){
        if (a !== b && a.weekday === b.weekday && a.open_min < b.close_min && b.open_min < a.close_min) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalid"])("Opening periods on the same day overlap.");
    }
    return out;
}
async function setPolicies(db, businessId, p) {
    const keys = Object.keys(p).filter((k)=>p[k] !== undefined);
    if (!keys.length) return;
    // Keys come from a strict zod schema, never from raw input.
    const sets = keys.map((k, i)=>`${k} = $${i + 2}`).join(", ");
    await db.query(`UPDATE business_policies SET ${sets} WHERE business_id = $1`, [
        businessId,
        ...keys.map((k)=>p[k])
    ]);
}
async function createBusiness(userId, input) {
    const hours = parseHours(input.hours);
    const kind = RESOURCE_NOUN[input.type];
    const base = slugify(input.name);
    for(let attempt = 0; attempt < 6; attempt++){
        const slug = attempt === 0 ? base : `${base}-${Math.random().toString(36).slice(2, 6)}`;
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tx"])(async (db)=>{
                const b = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["one"])(`INSERT INTO businesses (slug, name, type, timezone, description, address, phone, contact_email)
           VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING id`, [
                    slug,
                    input.name,
                    input.type,
                    input.timezone,
                    input.description,
                    input.address,
                    input.phone,
                    input.contact_email
                ], db);
                await db.query("INSERT INTO memberships (user_id, business_id, role) VALUES ($1,$2,'owner')", [
                    userId,
                    b.id
                ]);
                await db.query("INSERT INTO business_policies (business_id) VALUES ($1)", [
                    b.id
                ]);
                await setPolicies(db, b.id, input.policies);
                await db.query("INSERT INTO agent_configs (business_id) VALUES ($1)", [
                    b.id
                ]);
                await setAgent(db, b.id, input.agent);
                await db.query("INSERT INTO services (business_id, name, resource_type) VALUES ($1,$2,$3)", [
                    b.id,
                    input.service_name || kind.service,
                    kind.type
                ]);
                for (const h of hours)await db.query("INSERT INTO opening_hours (business_id, weekday, open_min, close_min) VALUES ($1,$2,$3,$4)", [
                    b.id,
                    h.weekday,
                    h.open_min,
                    h.close_min
                ]);
                let n = 0;
                for (const row of input.capacity){
                    for(let i = 0; i < row.count; i++){
                        n++;
                        await db.query("INSERT INTO resources (business_id, type, name, capacity, sort) VALUES ($1,$2,$3,$4,$5)", [
                            b.id,
                            kind.type,
                            `${row.label || kind.noun} ${n}`,
                            row.capacity,
                            n
                        ]);
                    }
                }
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["audit"])({
                    businessId: b.id,
                    userId,
                    action: "business.created"
                }, db);
                return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["one"])(`SELECT ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_COLUMNS"]} FROM businesses b WHERE b.id = $1`, [
                    b.id
                ], db);
            });
        } catch (e) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgCode"])(e) === "23505" && e.constraint === "businesses_slug_key") continue;
            throw e;
        }
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]("slug_taken", "Could not create a unique address for this business. Try a slightly different name.", 409);
}
async function setAgent(db, businessId, a) {
    const keys = Object.keys(a).filter((k)=>a[k] !== undefined);
    if (!keys.length) return;
    const sets = keys.map((k, i)=>`${k} = $${i + 2}`).join(", ");
    await db.query(`UPDATE agent_configs SET ${sets} WHERE business_id = $1`, [
        businessId,
        ...keys.map((k)=>a[k])
    ]);
}
async function updateSettings(businessId, userId, s) {
    const hours = s.hours ? parseHours(s.hours) : null;
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tx"])(async (db)=>{
        if (s.profile) {
            const keys = Object.keys(s.profile).filter((k)=>s.profile[k] !== undefined);
            if (keys.length) {
                const sets = keys.map((k, i)=>`${k} = $${i + 2}`).join(", ");
                await db.query(`UPDATE businesses SET ${sets} WHERE id = $1`, [
                    businessId,
                    ...keys.map((k)=>s.profile[k])
                ]);
            }
        }
        if (s.online_booking_enabled !== undefined) await db.query("UPDATE businesses SET online_booking_enabled = $2 WHERE id = $1", [
            businessId,
            s.online_booking_enabled
        ]);
        if (s.ai_enabled !== undefined) await db.query("UPDATE businesses SET ai_enabled = $2 WHERE id = $1", [
            businessId,
            s.ai_enabled
        ]);
        if (s.policies) await setPolicies(db, businessId, s.policies);
        if (s.agent) await setAgent(db, businessId, s.agent);
        if (hours) {
            await db.query("DELETE FROM opening_hours WHERE business_id = $1", [
                businessId
            ]);
            for (const h of hours)await db.query("INSERT INTO opening_hours (business_id, weekday, open_min, close_min) VALUES ($1,$2,$3,$4)", [
                businessId,
                h.weekday,
                h.open_min,
                h.close_min
            ]);
        }
        if (s.faqs) {
            await db.query("DELETE FROM faqs WHERE business_id = $1", [
                businessId
            ]);
            let i = 0;
            for (const f of s.faqs)await db.query("INSERT INTO faqs (business_id, question, answer, sort) VALUES ($1,$2,$3,$4)", [
                businessId,
                f.question,
                f.answer,
                i++
            ]);
        }
        if (s.resources) {
            // Resources referenced by past bookings are never deleted, only retired.
            const keep = s.resources.filter((r)=>r.id).map((r)=>r.id);
            await db.query("UPDATE resources SET active = false WHERE business_id = $1 AND NOT (id = ANY($2::uuid[]))", [
                businessId,
                keep
            ]);
            let i = 0;
            for (const r of s.resources){
                i++;
                if (r.id) await db.query("UPDATE resources SET name = $3, capacity = $4, type = $5, active = true, sort = $6 WHERE business_id = $1 AND id = $2", [
                    businessId,
                    r.id,
                    r.name,
                    r.capacity,
                    r.type,
                    i
                ]);
                else await db.query("INSERT INTO resources (business_id, name, capacity, type, sort) VALUES ($1,$2,$3,$4,$5)", [
                    businessId,
                    r.name,
                    r.capacity,
                    r.type,
                    i
                ]);
            }
        }
        if (s.services) {
            const keep = s.services.filter((r)=>r.id).map((r)=>r.id);
            await db.query("UPDATE services SET active = false WHERE business_id = $1 AND NOT (id = ANY($2::uuid[]))", [
                businessId,
                keep
            ]);
            let i = 0;
            for (const v of s.services){
                i++;
                const args = [
                    v.name,
                    v.description,
                    v.duration_min,
                    v.price_cents,
                    v.currency,
                    v.resource_type,
                    i
                ];
                if (v.id) await db.query("UPDATE services SET name=$3, description=$4, duration_min=$5, price_cents=$6, currency=$7, resource_type=$8, sort=$9, active=true WHERE business_id=$1 AND id=$2", [
                    businessId,
                    v.id,
                    ...args
                ]);
                else await db.query("INSERT INTO services (business_id, name, description, duration_min, price_cents, currency, resource_type, sort) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)", [
                    businessId,
                    ...args
                ]);
            }
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["audit"])({
            businessId,
            userId,
            action: "settings.updated",
            detail: {
                sections: Object.keys(s)
            }
        }, db);
    });
}
async function getPublicBusiness(slug) {
    if (!/^[a-z0-9-]{3,50}$/.test(slug)) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["one"])(`SELECT ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$booking$2f$availability$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_COLUMNS"]} FROM businesses b WHERE b.slug = $1`, [
        slug
    ]);
}
const getAgent = async (businessId)=>await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["one"])("SELECT name, tone, languages, greeting, extra_instructions, handoff_contact FROM agent_configs WHERE business_id = $1", [
        businessId
    ]);
const getFaqs = (businessId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"])("SELECT question, answer FROM faqs WHERE business_id = $1 ORDER BY sort", [
        businessId
    ]);
// ---- logo upload ---------------------------------------------------------------
const SIGNATURES = [
    {
        mime: "image/png",
        test: (b)=>b.subarray(0, 8).equals(Buffer.from([
                0x89,
                0x50,
                0x4e,
                0x47,
                0x0d,
                0x0a,
                0x1a,
                0x0a
            ]))
    },
    {
        mime: "image/jpeg",
        test: (b)=>b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff
    },
    {
        mime: "image/webp",
        test: (b)=>b.subarray(0, 4).toString() === "RIFF" && b.subarray(8, 12).toString() === "WEBP"
    }
];
async function saveLogo(businessId, userId, bytes) {
    if (bytes.length === 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalid"])("The file is empty.");
    if (bytes.length > 1_000_000) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]("too_large", "Logo must be smaller than 1 MB.", 413);
    const sig = SIGNATURES.find((s)=>s.test(bytes));
    if (!sig) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invalid"])("Logo must be a PNG, JPEG or WebP image.");
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"])("UPDATE businesses SET logo = $2, logo_mime = $3 WHERE id = $1", [
        businessId,
        bytes,
        sig.mime
    ]);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["audit"])({
        businessId,
        userId,
        action: "logo.updated"
    });
}
async function eraseCustomer(businessId, userId, customerId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tx"])(async (db)=>{
        const live = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["one"])("SELECT 1 FROM reservations WHERE business_id = $1 AND customer_id = $2 AND status IN ('pending','confirmed') AND starts_at > now() LIMIT 1", [
            businessId,
            customerId
        ], db);
        if (live) throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]("has_upcoming", "Cancel this customer's upcoming reservations before deleting their data.", 409);
        const res = await db.query("UPDATE customers SET name = 'Deleted customer', email = NULL, phone = NULL, notify_consent = false, erased_at = now() WHERE business_id = $1 AND id = $2 AND erased_at IS NULL", [
            businessId,
            customerId
        ]);
        if (!res.rowCount) return false;
        await db.query("UPDATE reservations SET notes = '' WHERE business_id = $1 AND customer_id = $2", [
            businessId,
            customerId
        ]);
        await db.query("UPDATE notification_jobs SET status = 'cancelled', recipient = '' WHERE business_id = $1 AND reservation_id IN (SELECT id FROM reservations WHERE customer_id = $2) AND status = 'queued'", [
            businessId,
            customerId
        ]);
        await db.query("UPDATE notification_jobs SET recipient = '' WHERE business_id = $1 AND reservation_id IN (SELECT id FROM reservations WHERE customer_id = $2)", [
            businessId,
            customerId
        ]);
        // Chat transcripts of their bookings contain what they typed (name, email, phone): remove them too.
        await db.query("DELETE FROM messages WHERE conversation_id IN (SELECT c.id FROM conversations c JOIN reservations r ON r.id = c.reservation_id WHERE r.business_id = $1 AND r.customer_id = $2)", [
            businessId,
            customerId
        ]);
        await db.query("UPDATE conversations SET external_id = NULL WHERE business_id = $1 AND reservation_id IN (SELECT id FROM reservations WHERE customer_id = $2)", [
            businessId,
            customerId
        ]);
        await db.query("UPDATE conversations SET escalation = NULL WHERE business_id = $1 AND reservation_id IN (SELECT id FROM reservations WHERE customer_id = $2)", [
            businessId,
            customerId
        ]);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$audit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["audit"])({
            businessId,
            userId,
            action: "customer.erased",
            entity: "customer",
            entityId: customerId
        }, db);
        return true;
    });
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
"[project]/src/lib/schemas.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BUSINESS_TYPES",
    ()=>BUSINESS_TYPES,
    "RESOURCE_TYPES",
    ()=>RESOURCE_TYPES,
    "agentSchema",
    ()=>agentSchema,
    "createBusinessSchema",
    ()=>createBusinessSchema,
    "customerSchema",
    ()=>customerSchema,
    "faqsSchema",
    ()=>faqsSchema,
    "hoursSchema",
    ()=>hoursSchema,
    "policiesSchema",
    ()=>policiesSchema,
    "profileSchema",
    ()=>profileSchema,
    "publicBookingSchema",
    ()=>publicBookingSchema,
    "resourcesSchema",
    ()=>resourcesSchema,
    "servicesSchema",
    ()=>servicesSchema,
    "settingsSchema",
    ()=>settingsSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .string>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .array>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .object>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .number>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .boolean>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .enum>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$union$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .union>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$literal$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .literal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$email$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .email>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$uuid$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .uuid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$iso$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .iso>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/time.ts [app-route] (ecmascript)");
;
;
const hhmm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().regex(/^([01]?\d|2[0-4]):[0-5]\d$/, "Use HH:MM");
const short = (max)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().max(max);
const BUSINESS_TYPES = [
    "restaurant",
    "salon",
    "clinic",
    "hotel",
    "repair",
    "other"
];
const RESOURCE_TYPES = [
    "table",
    "staff",
    "room",
    "equipment",
    "slot"
];
const hoursSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    weekday: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().min(1).max(7),
    open: hhmm,
    close: hhmm
})).max(28);
const policiesSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    slot_interval_min: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().min(5).max(240),
    default_duration_min: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().min(5).max(1440),
    buffer_min: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().min(0).max(240),
    max_party_size: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().min(1).max(500),
    min_notice_min: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().min(0).max(43200),
    max_advance_days: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().min(1).max(730),
    early_checkin_min: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().min(0).max(1440),
    late_grace_min: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().min(0).max(1440),
    cancel_cutoff_min: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().min(0).max(43200),
    reminder_hours_before: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().min(0).max(168),
    email_notifications: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__["z"].boolean(),
    cancellation_policy: short(1000),
    late_policy: short(1000),
    arrival_instructions: short(1000)
}).partial();
const profileSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(2).max(80),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum(BUSINESS_TYPES),
    timezone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().refine(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isValidZone"], "Unknown time zone"),
    description: short(1000),
    address: short(200),
    phone: short(40),
    contact_email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$union$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$literal$3e$__["z"].literal(""),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$email$3e$__["z"].email().max(160)
    ])
}).partial();
const agentSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(1).max(40),
    tone: short(120),
    languages: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(2).max(30)).min(1).max(8),
    greeting: short(300),
    extra_instructions: short(2000),
    handoff_contact: short(200)
}).partial();
const resourcesSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$uuid$3e$__["z"].uuid().optional(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(1).max(60),
    capacity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().min(1).max(500),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum(RESOURCE_TYPES).default("table")
})).max(300);
const servicesSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$uuid$3e$__["z"].uuid().optional(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(1).max(80),
    description: short(500).default(""),
    duration_min: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().min(5).max(1440).nullable().default(null),
    price_cents: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().min(0).max(100_000_000).nullable().default(null),
    currency: short(8).default(""),
    resource_type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum(RESOURCE_TYPES).default("table")
})).min(1).max(50);
const faqsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    question: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(2).max(300),
    answer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(1).max(2000)
})).max(100);
const createBusinessSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(2).max(80),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum(BUSINESS_TYPES).default("restaurant"),
    timezone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().refine(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isValidZone"], "Unknown time zone"),
    description: short(1000).default(""),
    address: short(200).default(""),
    phone: short(40).default(""),
    contact_email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$union$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$literal$3e$__["z"].literal(""),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$email$3e$__["z"].email().max(160)
    ]).default(""),
    hours: hoursSchema.min(1, "Add at least one opening period"),
    // "4 tables of 2" style input: each row expands into `count` resources.
    capacity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
        label: short(40).default(""),
        capacity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().min(1).max(500),
        count: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().min(1).max(100)
    })).min(1).max(20),
    service_name: short(80).default(""),
    policies: policiesSchema.default({}),
    agent: agentSchema.default({})
});
const settingsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    profile: profileSchema.optional(),
    policies: policiesSchema.optional(),
    hours: hoursSchema.optional(),
    resources: resourcesSchema.optional(),
    services: servicesSchema.optional(),
    agent: agentSchema.optional(),
    faqs: faqsSchema.optional(),
    online_booking_enabled: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__["z"].boolean().optional(),
    ai_enabled: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__["z"].boolean().optional()
});
const customerSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(2).max(80),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().max(160).optional().nullable(),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().max(30).optional().nullable(),
    consent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$boolean$3e$__["z"].boolean().optional()
});
const publicBookingSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    serviceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$uuid$3e$__["z"].uuid().optional().nullable(),
    startsAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$iso$3e$__["z"].iso.datetime({
        offset: true
    }),
    partySize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$number$3e$__["z"].number().int().min(1).max(500),
    customer: customerSchema,
    notes: short(500).optional(),
    idempotencyKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(8).max(100),
    // Honeypot: real visitors never fill this hidden field.
    website: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().max(0).optional()
});
}),
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

//# sourceMappingURL=%5Broot-of-the-server%5D__19ck0pukn47g0._.js.map