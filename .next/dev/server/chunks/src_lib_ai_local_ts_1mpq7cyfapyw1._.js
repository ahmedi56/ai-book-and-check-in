module.exports = [
"[project]/src/lib/ai/local.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "localAssistant",
    ()=>localAssistant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/luxon/build/es6/luxon.mjs [app-route] (ecmascript)");
;
// ------------------------------------------------------------------ parsing
const NUM_WORDS = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    a: 1,
    couple: 2
};
const MONTHS = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
];
const DAYS = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
];
const EMAIL = /[^\s@<>,;]+@[^\s@<>,;]+\.[a-z]{2,}/i;
const PHONE = /(?:\+|\b)\d[\d\s().-]{6,}\d\b/;
const REF_STRICT = /\b[2-9A-HJ-NP-Z]{6}\b/;
const num = (s)=>/^\d+$/.test(s) ? Number(s) : NUM_WORDS[s];
const pad = (n)=>String(n).padStart(2, "0");
function parseDate(raw, now) {
    const t = raw.toLowerCase();
    const today = now.startOf("day");
    const future = (d)=>d < today ? d.plus({
            years: 1
        }) : d;
    let m;
    if (m = /\b(\d{4})-(\d{2})-(\d{2})\b/.exec(t)) {
        const d = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DateTime"].fromISO(m[0], {
            zone: now.zone
        });
        if (d.isValid) return {
            date: d.toISODate(),
            rest: t.replace(m[0], " ")
        };
    }
    if (/\bday after tomorrow\b/.test(t)) return {
        date: today.plus({
            days: 2
        }).toISODate(),
        rest: t.replace(/day after tomorrow/, " ")
    };
    if (m = /\b(tomorrow|tmrw|tmr)\b/.exec(t)) return {
        date: today.plus({
            days: 1
        }).toISODate(),
        rest: t.replace(m[0], " ")
    };
    if (m = /\b(today|tonight|this evening|this afternoon)\b/.exec(t)) return {
        date: today.toISODate(),
        rest: t.replace(/\btoday\b/, " ")
    };
    const mon = MONTHS.map((x)=>`${x}|${x.slice(0, 3)}`).join("|");
    if ((m = new RegExp(`\\b(\\d{1,2})(?:st|nd|rd|th)?(?:\\s+of)?\\s+(${mon})\\b`).exec(t)) || (m = new RegExp(`\\b(${mon})\\s+(\\d{1,2})(?:st|nd|rd|th)?\\b`).exec(t))) {
        const dayFirst = /^\d/.test(m[1]);
        const day = Number(dayFirst ? m[1] : m[2]);
        const month = MONTHS.findIndex((x)=>x.startsWith((dayFirst ? m[2] : m[1]).slice(0, 3))) + 1;
        const d = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DateTime"].fromObject({
            year: today.year,
            month,
            day
        }, {
            zone: now.zone
        });
        if (d.isValid) return {
            date: future(d).toISODate(),
            rest: t.replace(m[0], " ")
        };
    }
    if (m = /\b(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?\b/.exec(t)) {
        const year = m[3] ? m[3].length === 2 ? 2000 + Number(m[3]) : Number(m[3]) : today.year;
        const d = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DateTime"].fromObject({
            year,
            month: Number(m[2]),
            day: Number(m[1])
        }, {
            zone: now.zone
        });
        if (d.isValid) return {
            date: (m[3] ? d : future(d)).toISODate(),
            rest: t.replace(m[0], " ")
        };
    }
    if (m = new RegExp(`\\b(?:(next|this)\\s+)?(${DAYS.map((x)=>`${x}|${x.slice(0, 3)}`).join("|")})\\b`).exec(t)) {
        const target = DAYS.findIndex((x)=>x.startsWith(m[2].slice(0, 3))) + 1;
        let diff = (target - today.weekday + 7) % 7;
        if (diff === 0 && m[1] === "next") diff = 7;
        return {
            date: today.plus({
                days: diff
            }).toISODate(),
            rest: t.replace(m[0], " ")
        };
    }
    if (m = /\b(?:on\s+)?the\s+(\d{1,2})(?:st|nd|rd|th)\b/.exec(t)) {
        let d = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DateTime"].fromObject({
            year: today.year,
            month: today.month,
            day: Number(m[1])
        }, {
            zone: now.zone
        });
        if (d.isValid && d < today) d = d.plus({
            months: 1
        });
        if (d.isValid) return {
            date: d.toISODate(),
            rest: t.replace(m[0], " ")
        };
    }
    return null;
}
function parseTime(text, ctx, asked) {
    const t = text.toLowerCase();
    const out = {};
    const fix = (h, mi, ap)=>{
        if (ap) {
            const pm = ap.startsWith("p");
            if (h === 12) h = pm ? 12 : 0;
            else if (pm) h += 12;
        } else if (h >= 1 && h <= 11 && h * 60 + mi < ctx.earliestOpen) h += 12;
        return h <= 23 && mi <= 59 ? `${pad(h)}:${pad(mi)}` : undefined;
    };
    let m;
    if (m = /\b(\d{1,2})[:.h](\d{2})\s*(am|pm|a\.m\.|p\.m\.)?/.exec(t)) out.time = fix(Number(m[1]), Number(m[2]), m[3]);
    else if (m = /\b(\d{1,2})\s*(am|pm|a\.m\.|p\.m\.)(?![a-z])/.exec(t)) out.time = fix(Number(m[1]), 0, m[2]);
    else if (/\b(noon|midday)\b/.test(t)) out.time = "12:00";
    else if (m = /\b(?:at|around|about|by|for)\s+(\d{1,2})\s*(?:o'?clock)\b/.exec(t)) out.time = fix(Number(m[1]), 0);
    else if (m = /\b(?:at|around|about|by)\s+(\d{1,2})\b(?!\s*(?:people|persons|guests|pax|adults|[\/-]|\d))/.exec(t)) out.time = fix(Number(m[1]), 0);
    else if (asked === "time" && (m = /^\s*(\d{1,2})\s*(?:please|pls|thanks)?[.!]?\s*$/.exec(t))) out.time = fix(Number(m[1]), 0);
    if (!out.time) {
        if (/\b(morning|breakfast)\b/.test(t)) out.window = [
            0,
            12 * 60
        ];
        else if (/\blunch(time)?\b/.test(t)) out.window = [
            11 * 60 + 30,
            14 * 60 + 30
        ];
        else if (/\bafternoon\b/.test(t)) out.window = [
            12 * 60,
            17 * 60
        ];
        else if (/\b(evening|tonight|dinner|night)\b/.test(t)) out.window = [
            17 * 60,
            24 * 60
        ];
    }
    return out;
}
function parseParty(text, asked) {
    const t = text.toLowerCase();
    const w = `\\d{1,3}|${Object.keys(NUM_WORDS).filter((k)=>k !== "a").join("|")}`;
    let m;
    if (m = new RegExp(`\\b(${w})\\s*(?:people|persons?|guests?|pax|of us|adults|seats|covers|diners)\\b`).exec(t)) return num(m[1]);
    if (m = new RegExp(`\\b(?:table|party|group|booking|reservation)\\s+(?:for|of)\\s+(${w})\\b(?!\\s*(?:[:.]\\d|am|pm|o'?clock))`).exec(t)) return num(m[1]);
    if (m = new RegExp(`\\bfor\\s+(${w})\\b(?!\\s*(?:[:.]\\d|am|pm|o'?clock|\\/|days?|nights?|hours?|minutes?))`).exec(t)) return num(m[1]);
    if (/\b(just me|myself|alone|solo|only me)\b/.test(t)) return 1;
    if (/\b(a couple|the two of us|both of us|me and my (wife|husband|partner|friend|girlfriend|boyfriend))\b/.test(t)) return 2;
    if (asked === "party" && (m = new RegExp(`^\\s*(?:we are|we're|it's|just)?\\s*(${w})\\s*(?:please|pls)?[.!]?\\s*$`).exec(t))) return num(m[1]);
    return undefined;
}
const NOT_NAMES = /^(looking|sorry|not|going|interested|here|trying|hoping|wondering|calling|booking|fine|good|ok|okay|sure|yes|no|the|a|an|thanks|thank|hello|hi|hey|please|tomorrow|today|tonight)$/i;
function parseName(text, asked) {
    const cleaned = text.replace(EMAIL, " ").replace(PHONE, " ");
    let m = /(?:my name is|my name's|name is|the name is|under the name(?: of)?|name:)\s+([\p{L}][\p{L}'’-]*(?:\s+[\p{L}][\p{L}'’-]*){0,3})/iu.exec(cleaned);
    if (!m) m = /(?:\bI am|\bI'm|\bthis is|\bunder|\bit'?s for|\bfor)\s+([A-Z][\p{L}'’-]+(?:\s+[A-Z][\p{L}'’-]+){0,3})/u.exec(cleaned);
    let name = m?.[1];
    if (!name && asked === "name") {
        const bare = cleaned.replace(/^(it'?s|its|sure|ok|okay|yes|please|put it under|under)\b[, ]*/i, "").replace(/[.,!]+$/g, "").trim();
        if (/^[\p{L}][\p{L}'’-]*(?:\s+[\p{L}][\p{L}'’-]*){0,3}$/u.test(bare)) name = bare;
    }
    if (!name) return undefined;
    name = name.replace(/\s+(and|at|on|for|please|thanks|my|with)\b.*$/i, "").trim();
    const first = name.split(/\s+/)[0];
    if (name.length < 2 || NOT_NAMES.test(first) || DAYS.includes(first.toLowerCase()) || MONTHS.includes(first.toLowerCase())) return undefined;
    return name.split(/\s+/).map((p)=>p[0].toUpperCase() + p.slice(1)).join(" ");
}
function parseReference(text, asked) {
    let m = /\b(?:ref(?:erence)?|code|booking(?: number| id)?)\b[\s:#-]*([A-Za-z0-9]{6})\b/i.exec(text);
    if (m && /\d|[A-Z]{6}/.test(m[1])) return m[1].toUpperCase();
    m = REF_STRICT.exec(text);
    if (m) return m[0];
    if (asked === "reference" && (m = /^\s*([A-Za-z0-9]{6})\s*[.!]?\s*$/.exec(text))) return m[1].toUpperCase();
    return undefined;
}
function whatWasAsked(assistantText) {
    const t = assistantText.toLowerCase();
    if (t.includes("what name")) return "name";
    if (t.includes("email address or phone")) return "contact";
    if (t.includes("how many")) return "party";
    if (t.includes("booking reference")) return "reference";
    if (t.includes("which time") || t.includes("what time") || t.includes("would one of those work") || t.includes("which would you like")) return "time";
    if (t.includes("what day") || t.includes("which day")) return "date";
    return null;
}
const YES = /^\s*(yes|yep|yeah|yup|y|ok|okay|sure|correct|confirm(ed)?|please do|go ahead|that'?s right|that is right|perfect|sounds good|do it|book it|absolutely|definitely|looks good|all good)\b/i;
const NO = /^\s*(no|nope|nah|n|wait|stop|don'?t|do not|not yet|hold on|actually)\b/i;
const HUMAN = /\b(human|real person|a person|someone|somebody|staff|manager|owner|agent|representative|speak (to|with)|talk (to|with)|call me)\b/i;
const UPSET = /\b(complain|complaint|terrible|awful|unacceptable|disgusting|refund|rude|food poisoning|allerg(y|ic) reaction|lawyer|sue)\b/i;
// ------------------------------------------------------------------- helpers
function parseResult(m) {
    try {
        const v = JSON.parse(m.content);
        return v && typeof v === "object" ? v : {};
    } catch  {
        return {};
    }
}
const TERMINAL = new Set([
    "confirmed",
    "cancelled",
    "rescheduled",
    "escalated",
    "already_cancelled"
]);
function buildState(messages, ctx) {
    const now = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$luxon$2f$build$2f$es6$2f$luxon$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DateTime"].fromISO(ctx.now, {
        zone: ctx.tz
    });
    // Start after the last completed action so an old booking's details are not reused.
    let from = 0;
    messages.forEach((m, i)=>{
        if (m.role === "tool" && TERMINAL.has(String(parseResult(m).status))) from = i + 1;
    });
    const state = {
        intent: null,
        phone: ctx.knownPhone
    };
    let changed = false, lastAssistant = "", lastAsked = null;
    for(let i = from; i < messages.length; i++){
        const m = messages[i];
        if (m.role === "assistant" && m.content) lastAssistant = m.content;
        if (m.role !== "user") continue;
        const asked = whatWasAsked(lastAssistant);
        const before = JSON.stringify(state);
        const text = m.content;
        const low = text.toLowerCase();
        if (/\b(cancel)\b/.test(low) && !/\b(policy|fee|charge|can i cancel|how (do|can) i cancel|cancel that)\b/.test(low)) state.intent = "cancel";
        else if (/\b(reschedul\w*|move (my|the|our)|change (my|the|our) (booking|reservation|table|time)|different (time|day)|postpone|push (it|my))\b/.test(low)) state.intent = "reschedule";
        else if (/\b(book|reserve|reservation|table|appointment|availability|available|slot)\b/.test(low) && !state.intent) state.intent = "book";
        const d = parseDate(text, now);
        if (d) state.date = d.date;
        const rest = d ? d.rest : low;
        const tm = parseTime(rest, ctx, asked);
        if (tm.time) {
            state.time = tm.time;
            state.window = undefined;
        } else if (tm.window) {
            state.window = tm.window;
            state.time = undefined;
        }
        // "the first one" / "the earlier one" after being offered alternatives is resolved by the caller.
        const p = parseParty(rest, asked);
        if (p) state.party = p;
        const e = EMAIL.exec(text);
        if (e) state.email = e[0].replace(/[.,;]+$/, "");
        const ph = PHONE.exec(text.replace(EMAIL, " ").replace(/\b\d{4}-\d{2}-\d{2}\b/, " "));
        if (ph && ph[0].replace(/\D/g, "").length >= 7) state.phone = ph[0].trim();
        const n = parseName(text, asked);
        if (n) state.name = n;
        const r = parseReference(text, asked);
        if (r) state.reference = r;
        changed = JSON.stringify(state) !== before;
        lastAsked = asked;
    }
    return {
        state,
        changed,
        lastAsked
    };
}
const call = (name, args)=>({
        text: "",
        toolCalls: [
            {
                id: `local_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`,
                name,
                arguments: args
            }
        ]
    });
const say = (text)=>({
        text,
        toolCalls: []
    });
const guests = (n)=>`${n} ${Number(n) === 1 ? "guest" : "guests"}`;
const listAlts = (alts)=>(Array.isArray(alts) ? alts : []).map((a)=>`${a.day} at ${a.time}`).join("; ");
function contactLine(ctx) {
    const c = [
        ctx.handoffContact,
        ctx.phone,
        ctx.email
    ].filter(Boolean)[0];
    return c ? ` You can reach the team at ${c}.` : "";
}
// ------------------------------------------------------- answering questions
const STOP = new Set("a an the is are do does you your i we my our can could would will to of for in on at it be have has what when where how which and or with there any about me us this that".split(" "));
const words = (s)=>s.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").split(/\s+/).filter((w)=>w.length > 1 && !STOP.has(w)).map((w)=>w.replace(/(ing|es|s)$/, ""));
function answerInfo(text, ctx) {
    const low = text.toLowerCase();
    // The owner's own FAQs come first.
    const q = new Set(words(text));
    let best = null;
    for (const f of ctx.faqs){
        const fw = [
            ...new Set(words(f.question))
        ];
        if (!fw.length) continue;
        const hit = fw.filter((w)=>q.has(w)).length;
        const score = hit / fw.length;
        if (hit >= Math.min(2, fw.length) && score >= 0.5 && (!best || score > best.score)) best = {
            score,
            answer: f.answer
        };
    }
    if (best) return best.answer;
    if (/\b(open|opening|hours|close|closing|closed)\b/.test(low)) return `Our opening hours are:\n${ctx.hoursText}`;
    if (/\b(where|address|located|location|directions|find you)\b/.test(low)) return ctx.address ? `We are at ${ctx.address}.` : "I don't have the address on file." + contactLine(ctx);
    if (/\b(phone|telephone|call you|contact|email)\b/.test(low)) {
        const parts = [
            ctx.phone && `phone ${ctx.phone}`,
            ctx.email && `email ${ctx.email}`
        ].filter(Boolean);
        return parts.length ? `You can contact us by ${parts.join(" or ")}.` : "I don't have contact details on file.";
    }
    if (/\bcancel|cancellation\b/.test(low)) return ctx.cancellationPolicy;
    if (/\b(late|running behind|delayed)\b/.test(low)) return ctx.latePolicy;
    if (/\b(price|prices|cost|how much|charge|fee)\b/.test(low)) {
        const priced = ctx.services.filter((s)=>s.price);
        return priced.length ? priced.map((s)=>`${s.name}: ${s.price}`).join("\n") : "I don't have pricing information." + contactLine(ctx);
    }
    if (/\b(large|big) (group|party)\b/.test(low)) return `Online bookings go up to ${ctx.maxParty} guests. For larger groups, please contact us directly.${contactLine(ctx)}`;
    return null;
}
const localAssistant = {
    name: "local-basic",
    async chat (req) {
        const { messages, context: ctx } = req;
        const last = messages[messages.length - 1];
        if (!last) return say(`Hello! I can help you book at ${ctx.businessName}. What day, what time, and how many guests?`);
        const { state, changed, lastAsked } = buildState(messages, ctx);
        return last.role === "tool" ? afterTool(last, messages, state, ctx) : afterUser(last.content, messages, state, changed, lastAsked, ctx);
    }
};
function ownReference(messages) {
    for(let i = messages.length - 1; i >= 0; i--){
        const m = messages[i];
        if (m.role === "tool" && m.name === "create_reservation") {
            const r = parseResult(m);
            if (r.status === "confirmed") return String(r.reference);
        }
    }
    return undefined;
}
function afterUser(text, messages, state, changed, lastAsked, ctx) {
    // 1. Is the customer answering a "shall I confirm?" question?
    let lastToolIdx = -1;
    for(let i = messages.length - 2; i >= 0; i--){
        if (messages[i].role === "tool") {
            lastToolIdx = i;
            break;
        }
        if (messages[i].role === "user") break;
    }
    if (lastToolIdx >= 0) {
        const tool = messages[lastToolIdx];
        const res = parseResult(tool);
        if (res.status === "needs_confirmation") {
            if (YES.test(text)) {
                const origin = messages.slice(0, lastToolIdx).reverse().find((m)=>m.role === "assistant" && !!m.toolCalls?.some((t)=>t.id === tool.toolCallId));
                const original = origin?.toolCalls?.find((t)=>t.id === tool.toolCallId);
                if (original) return call(original.name, original.arguments);
            } else if (NO.test(text) && !changed) {
                return say("No problem — nothing has been changed. What would you like to do instead?");
            }
        }
        // Follow-up contact details after a hand-over to staff.
        if (res.status === "escalated" && changed && (state.email || state.phone || state.name)) {
            return call("escalate_to_human", {
                reason: "Customer left contact details",
                summary: recent(messages),
                customer_name: state.name,
                customer_contact: state.email ?? state.phone
            });
        }
    }
    // 2. Wants a person, or is upset.
    if (HUMAN.test(text) && !/\b(for|table for) (someone|somebody)\b/i.test(text) || UPSET.test(text)) {
        return call("escalate_to_human", {
            reason: UPSET.test(text) ? "Customer appears upset or has a complaint" : "Customer asked for a person",
            summary: recent(messages),
            customer_name: state.name,
            customer_contact: state.email ?? state.phone
        });
    }
    const contact = state.email ?? state.phone;
    // 3. Existing reservations.
    if (state.intent === "cancel" || state.intent === "reschedule") {
        const reference = state.reference ?? ownReference(messages);
        if (!reference) return say("Sure. What's your booking reference? It's the 6-character code on your ticket.");
        if (state.intent === "cancel") return call("cancel_reservation", {
            reference,
            contact
        });
        if (!state.date && !state.time) return say("Of course. What day and time would you like to move it to?");
        if (!state.date) return say("Which day would you like to move it to?");
        if (!state.time) return say("What time would you like instead?");
        return call("reschedule_reservation", {
            reference,
            contact,
            new_date: state.date,
            new_time: state.time,
            party_size: state.party
        });
    }
    // 4. A question rather than a booking step.
    const bookingSignal = changed || state.intent === "book";
    if (!bookingSignal || !changed && /\?|\b(what|when|where|how|do you|is there|are you|can i)\b/i.test(text)) {
        const info = answerInfo(text, ctx);
        if (info) return say(info);
        if (!bookingSignal && !state.date && !state.party && !state.time) {
            if (/^\s*(hi|hello|hey|good (morning|afternoon|evening))\b/i.test(text)) return say(`Hello! I can help you book at ${ctx.businessName}. What day, what time, and how many guests?`);
            if (/\b(thanks|thank you|cheers|bye|goodbye)\b/i.test(text)) return say("You're welcome! See you soon.");
            return say(`I'm a basic booking assistant: I can check availability, make a booking, or change or cancel one. I don't have an answer to that — would you like me to pass your question to the team?${contactLine(ctx)}`);
        }
    }
    // 5. Booking: ask for what is missing, checking real availability as soon as we can.
    if (!state.date && !state.party) return say(state.time ? "Happy to help. What day, and how many guests?" : "Happy to help. What day, what time, and how many guests?");
    if (!state.party) return say("How many guests will there be?");
    if (state.party > ctx.maxParty) return say(`Online bookings go up to ${ctx.maxParty} guests. For a group of ${state.party}, please contact us directly.${contactLine(ctx)}`);
    if (!state.date) return say("What day would you like to come?");
    if (!state.time) return call("check_availability", {
        date: state.date,
        party_size: state.party
    });
    if (state.name && contact) {
        return call("create_reservation", {
            date: state.date,
            time: state.time,
            party_size: state.party,
            customer_name: state.name,
            email: state.email,
            phone: state.phone
        });
    }
    // Re-check the chosen time only when it (or the date/party) has just changed; otherwise just ask for what is missing.
    if (lastAsked === "name" || lastAsked === "contact") return askMissing(state, "");
    return call("check_availability", {
        date: state.date,
        party_size: state.party,
        time: state.time
    });
}
function askMissing(state, lead) {
    if (!state.name) return say(`${lead}What name should I put the reservation under?`.trim());
    return say(`${lead}Thanks${state.name ? `, ${state.name.split(" ")[0]}` : ""}. What email address or phone number should I use for your confirmation?`.trim());
}
function recent(messages) {
    return messages.filter((m)=>m.role === "user").slice(-4).map((m)=>m.content).join(" | ").slice(0, 900);
}
function afterTool(tool, messages, state, ctx) {
    const r = parseResult(tool);
    const status = String(r.status ?? "");
    const s = r.summary ?? {};
    if (status === "rate_limited") return say("I've had too many lookup attempts in this conversation. Please try again later or contact us directly." + contactLine(ctx));
    if (status === "booking_disabled") return say(`Online reservations are paused at the moment.${contactLine(ctx)}`);
    if (status === "not_found") {
        return say(state.email || state.phone ? "I couldn't find a reservation with that reference and contact detail. Please check the 6-character booking reference and the email or phone number used to book." : "To find your booking I also need the email address or phone number you booked with.");
    }
    if (status === "change_not_allowed") return say(`${r.message}${contactLine(ctx)}`);
    switch(tool.name){
        case "check_availability":
            {
                if (status === "ok") {
                    let times = r.free_times ?? [];
                    if (state.window) {
                        const inWindow = times.filter((t)=>{
                            const m = Number(t.slice(0, 2)) * 60 + Number(t.slice(3));
                            return m >= state.window[0] && m <= state.window[1];
                        });
                        if (inWindow.length) times = inWindow;
                    }
                    const shown = times.slice(0, 10);
                    return say(`On ${r.day} I have these times free for ${guests(r.party_size)}: ${shown.join(", ")}${times.length > shown.length ? " and later" : ""}. Which time would you like?`);
                }
                if (status === "none_available") {
                    const alts = listAlts(r.alternatives);
                    return say(`Sorry, nothing is free on ${r.day} (${r.reason})${alts ? ` The nearest I can offer: ${alts}. Would one of those work?` : " I couldn't find anything in the next two weeks either."}`);
                }
                if (status === "available") return askMissing(state, `Good news — ${r.time} on ${r.day} is available for ${guests(r.party_size)}. `);
                if (status === "unavailable") {
                    const alts = listAlts(r.alternatives);
                    return say(`Sorry, ${r.time} on ${r.day} isn't available. ${r.reason}${alts ? ` I can offer: ${alts}. Which would you like?` : ""}`);
                }
                break;
            }
        case "create_reservation":
            {
                if (status === "needs_confirmation") {
                    return say(`Please check the details:\n• ${s.when}\n• ${guests(s.party_size)}\n• Name: ${s.name}\n• Contact: ${s.email ?? s.phone}\n\nShall I confirm this reservation? (yes / no)`);
                }
                if (status === "confirmed") return say(`Your reservation is confirmed. Reference ${r.reference} — ${r.when}, ${guests(r.party_size)}.\nYour ticket with QR code: ${r.ticket_url}`);
                if (status === "unavailable" || status === "slot_unavailable") {
                    const alts = listAlts(r.alternatives);
                    return say(`Sorry, that time isn't available. ${r.reason ?? r.message ?? ""}${alts ? ` I can offer: ${alts}. Which would you like?` : ""}`);
                }
                break;
            }
        case "get_reservation":
            if (status === "found") return say(`Reference ${r.reference}: ${r.when}, ${guests(r.party_size)}, under ${r.name}. Status: ${String(r.reservation_status).replace("_", " ")}.`);
            break;
        case "generate_ticket":
            if (status === "ok") return say(`Here is your ticket: ${r.ticket_url}`);
            if (status === "cancelled") return say(String(r.message));
            break;
        case "cancel_reservation":
            if (status === "needs_confirmation") return say(`I found your reservation: ${s.when}, ${guests(s.party_size)}, under ${s.name} (reference ${s.reference}).\n\nDo you want me to cancel it? (yes / no)`);
            if (status === "cancelled") return say(`Done — reservation ${r.reference} is cancelled. Its ticket is no longer valid.`);
            if (status === "already_cancelled") return say(`Reservation ${r.reference} was already cancelled.`);
            break;
        case "reschedule_reservation":
            if (status === "needs_confirmation") return say(`I can move reservation ${s.reference} from ${s.from} to ${s.to} for ${guests(s.party_size)}.\n\nShall I confirm the change? (yes / no)`);
            if (status === "rescheduled") return say(`Done — reservation ${r.reference} is now ${r.when}, ${guests(r.party_size)}. Your ticket stays the same: ${r.ticket_url}`);
            if (status === "unavailable" || status === "slot_unavailable") {
                const alts = listAlts(r.alternatives);
                return say(`Sorry, that time isn't available. ${r.reason ?? r.message ?? ""}${alts ? ` I can offer: ${alts}. Which would you like?` : ""}`);
            }
            break;
        case "escalate_to_human":
            if (status === "escalated") {
                return say(`I've passed this to the team — they can see our conversation.${r.contact ? ` You can also reach them at ${r.contact}.` : ""}${r.has_customer_contact ? "" : " Could you leave your name and a phone number or email so they can get back to you?"}`);
            }
            break;
    }
    return say(typeof r.message === "string" && r.message ? r.message : "Sorry, something went wrong with that request. Please try again or contact us directly." + contactLine(ctx));
}
}),
];

//# sourceMappingURL=src_lib_ai_local_ts_1mpq7cyfapyw1._.js.map