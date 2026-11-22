module.exports = [
(()=>{"use strict";return[
"[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
var mod = await __turbopack_context__.y("pg-587764f78a6c7a9c");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/node_modules/dijkstrajs/dijkstra.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/ var dijkstra = {
    single_source_shortest_paths: function(graph, s, d) {
        // Predecessor map for each node that has been encountered.
        // node ID => predecessor node ID
        var predecessors = {};
        // Costs of shortest paths from s to all nodes encountered.
        // node ID => cost
        var costs = {};
        costs[s] = 0;
        // Costs of shortest paths from s to all nodes encountered; differs from
        // `costs` in that it provides easy access to the node that currently has
        // the known shortest path from s.
        // XXX: Do we actually need both `costs` and `open`?
        var open = dijkstra.PriorityQueue.make();
        open.push(s, 0);
        var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
        while(!open.empty()){
            // In the nodes remaining in graph that have a known cost from s,
            // find the node, u, that currently has the shortest path from s.
            closest = open.pop();
            u = closest.value;
            cost_of_s_to_u = closest.cost;
            // Get nodes adjacent to u...
            adjacent_nodes = graph[u] || {};
            // ...and explore the edges that connect u to those nodes, updating
            // the cost of the shortest paths to any or all of those nodes as
            // necessary. v is the node across the current edge from u.
            for(v in adjacent_nodes){
                if (adjacent_nodes.hasOwnProperty(v)) {
                    // Get the cost of the edge running from u to v.
                    cost_of_e = adjacent_nodes[v];
                    // Cost of s to u plus the cost of u to v across e--this is *a*
                    // cost from s to v that may or may not be less than the current
                    // known cost to v.
                    cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
                    // If we haven't visited v yet OR if the current known cost from s to
                    // v is greater than the new cost we just found (cost of s to u plus
                    // cost of u to v across e), update v's cost in the cost list and
                    // update v's predecessor in the predecessor list (it's now u).
                    cost_of_s_to_v = costs[v];
                    first_visit = typeof costs[v] === 'undefined';
                    if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                        costs[v] = cost_of_s_to_u_plus_cost_of_e;
                        open.push(v, cost_of_s_to_u_plus_cost_of_e);
                        predecessors[v] = u;
                    }
                }
            }
        }
        if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
            var msg = [
                'Could not find a path from ',
                s,
                ' to ',
                d,
                '.'
            ].join('');
            throw new Error(msg);
        }
        return predecessors;
    },
    extract_shortest_path_from_predecessor_list: function(predecessors, d) {
        var nodes = [];
        var u = d;
        var predecessor;
        while(u){
            nodes.push(u);
            predecessor = predecessors[u];
            u = predecessors[u];
        }
        nodes.reverse();
        return nodes;
    },
    find_path: function(graph, s, d) {
        var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
        return dijkstra.extract_shortest_path_from_predecessor_list(predecessors, d);
    },
    /**
   * A very naive priority queue implementation.
   */ PriorityQueue: {
        make: function(opts) {
            var T = dijkstra.PriorityQueue, t = {}, key;
            opts = opts || {};
            for(key in T){
                if (T.hasOwnProperty(key)) {
                    t[key] = T[key];
                }
            }
            t.queue = [];
            t.sorter = opts.sorter || T.default_sorter;
            return t;
        },
        default_sorter: function(a, b) {
            return a.cost - b.cost;
        },
        /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */ push: function(value, cost) {
            var item = {
                value: value,
                cost: cost
            };
            this.queue.push(item);
            this.queue.sort(this.sorter);
        },
        /**
     * Return the highest priority element in the queue.
     */ pop: function() {
            return this.queue.shift();
        },
        empty: function() {
            return this.queue.length === 0;
        }
    }
};
// node.js module exports
if ("TURBOPACK compile-time truthy", 1) {
    module.exports = dijkstra;
}
}),
"[project]/node_modules/luxon/build/es6/luxon.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DateTime",
    ()=>DateTime,
    "Duration",
    ()=>Duration,
    "FixedOffsetZone",
    ()=>FixedOffsetZone,
    "IANAZone",
    ()=>IANAZone,
    "Info",
    ()=>Info,
    "Interval",
    ()=>Interval,
    "InvalidZone",
    ()=>InvalidZone,
    "Settings",
    ()=>Settings,
    "SystemZone",
    ()=>SystemZone,
    "VERSION",
    ()=>VERSION,
    "Zone",
    ()=>Zone
]);
// these aren't really private, but nor are they really useful to document
/**
 * @private
 */ class LuxonError extends Error {
}
/**
 * @private
 */ class InvalidDateTimeError extends LuxonError {
    constructor(reason){
        super(`Invalid DateTime: ${reason.toMessage()}`);
    }
}
/**
 * @private
 */ class InvalidIntervalError extends LuxonError {
    constructor(reason){
        super(`Invalid Interval: ${reason.toMessage()}`);
    }
}
/**
 * @private
 */ class InvalidDurationError extends LuxonError {
    constructor(reason){
        super(`Invalid Duration: ${reason.toMessage()}`);
    }
}
/**
 * @private
 */ class ConflictingSpecificationError extends LuxonError {
}
/**
 * @private
 */ class InvalidUnitError extends LuxonError {
    constructor(unit){
        super(`Invalid unit ${unit}`);
    }
}
/**
 * @private
 */ class InvalidArgumentError extends LuxonError {
}
/**
 * @private
 */ class ZoneIsAbstractError extends LuxonError {
    constructor(){
        super("Zone is an abstract class");
    }
}
/**
 * @private
 */ const n = "numeric", s = "short", l = "long";
const DATE_SHORT = {
    year: n,
    month: n,
    day: n
};
const DATE_MED = {
    year: n,
    month: s,
    day: n
};
const DATE_MED_WITH_WEEKDAY = {
    year: n,
    month: s,
    day: n,
    weekday: s
};
const DATE_FULL = {
    year: n,
    month: l,
    day: n
};
const DATE_HUGE = {
    year: n,
    month: l,
    day: n,
    weekday: l
};
const TIME_SIMPLE = {
    hour: n,
    minute: n
};
const TIME_WITH_SECONDS = {
    hour: n,
    minute: n,
    second: n
};
const TIME_WITH_SHORT_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    timeZoneName: s
};
const TIME_WITH_LONG_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    timeZoneName: l
};
const TIME_24_SIMPLE = {
    hour: n,
    minute: n,
    hourCycle: "h23"
};
const TIME_24_WITH_SECONDS = {
    hour: n,
    minute: n,
    second: n,
    hourCycle: "h23"
};
const TIME_24_WITH_SHORT_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    hourCycle: "h23",
    timeZoneName: s
};
const TIME_24_WITH_LONG_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    hourCycle: "h23",
    timeZoneName: l
};
const DATETIME_SHORT = {
    year: n,
    month: n,
    day: n,
    hour: n,
    minute: n
};
const DATETIME_SHORT_WITH_SECONDS = {
    year: n,
    month: n,
    day: n,
    hour: n,
    minute: n,
    second: n
};
const DATETIME_MED = {
    year: n,
    month: s,
    day: n,
    hour: n,
    minute: n
};
const DATETIME_MED_WITH_SECONDS = {
    year: n,
    month: s,
    day: n,
    hour: n,
    minute: n,
    second: n
};
const DATETIME_MED_WITH_WEEKDAY = {
    year: n,
    month: s,
    day: n,
    weekday: s,
    hour: n,
    minute: n
};
const DATETIME_FULL = {
    year: n,
    month: l,
    day: n,
    hour: n,
    minute: n,
    timeZoneName: s
};
const DATETIME_FULL_WITH_SECONDS = {
    year: n,
    month: l,
    day: n,
    hour: n,
    minute: n,
    second: n,
    timeZoneName: s
};
const DATETIME_HUGE = {
    year: n,
    month: l,
    day: n,
    weekday: l,
    hour: n,
    minute: n,
    timeZoneName: l
};
const DATETIME_HUGE_WITH_SECONDS = {
    year: n,
    month: l,
    day: n,
    weekday: l,
    hour: n,
    minute: n,
    second: n,
    timeZoneName: l
};
/**
 * @interface
 */ class Zone {
    /**
   * The type of zone
   * @abstract
   * @type {string}
   */ get type() {
        throw new ZoneIsAbstractError();
    }
    /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */ get name() {
        throw new ZoneIsAbstractError();
    }
    /**
   * The IANA name of this zone.
   * Defaults to `name` if not overwritten by a subclass.
   * @abstract
   * @type {string}
   */ get ianaName() {
        return this.name;
    }
    /**
   * Returns whether the offset is known to be fixed for the whole year.
   * @abstract
   * @type {boolean}
   */ get isUniversal() {
        throw new ZoneIsAbstractError();
    }
    /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */ offsetName(ts, opts) {
        throw new ZoneIsAbstractError();
    }
    /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */ formatOffset(ts, format) {
        throw new ZoneIsAbstractError();
    }
    /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */ offset(ts) {
        throw new ZoneIsAbstractError();
    }
    /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */ equals(otherZone) {
        throw new ZoneIsAbstractError();
    }
    /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */ get isValid() {
        throw new ZoneIsAbstractError();
    }
}
let singleton$1 = null;
/**
 * Represents the local zone for this JavaScript environment.
 * @implements {Zone}
 */ class SystemZone extends Zone {
    /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */ static get instance() {
        if (singleton$1 === null) {
            singleton$1 = new SystemZone();
        }
        return singleton$1;
    }
    /** @override **/ get type() {
        return "system";
    }
    /** @override **/ get name() {
        return new Intl.DateTimeFormat().resolvedOptions().timeZone;
    }
    /** @override **/ get isUniversal() {
        return false;
    }
    /** @override **/ offsetName(ts, { format, locale }) {
        return parseZoneInfo(ts, format, locale);
    }
    /** @override **/ formatOffset(ts, format) {
        return formatOffset(this.offset(ts), format);
    }
    /** @override **/ offset(ts) {
        return -new Date(ts).getTimezoneOffset();
    }
    /** @override **/ equals(otherZone) {
        return otherZone.type === "system";
    }
    /** @override **/ get isValid() {
        return true;
    }
}
const dtfCache = new Map();
function makeDTF(zoneName) {
    let dtf = dtfCache.get(zoneName);
    if (dtf === undefined) {
        dtf = new Intl.DateTimeFormat("en-US", {
            hour12: false,
            timeZone: zoneName,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            era: "short"
        });
        dtfCache.set(zoneName, dtf);
    }
    return dtf;
}
const typeToPos = {
    year: 0,
    month: 1,
    day: 2,
    era: 3,
    hour: 4,
    minute: 5,
    second: 6
};
function hackyOffset(dtf, date) {
    const formatted = dtf.format(date).replace(/\u200E/g, ""), parsed = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(formatted), [, fMonth, fDay, fYear, fadOrBc, fHour, fMinute, fSecond] = parsed;
    return [
        fYear,
        fMonth,
        fDay,
        fadOrBc,
        fHour,
        fMinute,
        fSecond
    ];
}
function partsOffset(dtf, date) {
    const formatted = dtf.formatToParts(date);
    const filled = [];
    for(let i = 0; i < formatted.length; i++){
        const { type, value } = formatted[i];
        const pos = typeToPos[type];
        if (type === "era") {
            filled[pos] = value;
        } else if (!isUndefined(pos)) {
            filled[pos] = parseInt(value, 10);
        }
    }
    return filled;
}
const ianaZoneCache = new Map();
/**
 * A zone identified by an IANA identifier, like America/New_York
 * @implements {Zone}
 */ class IANAZone extends Zone {
    /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */ static create(name) {
        let zone = ianaZoneCache.get(name);
        if (zone === undefined) {
            ianaZoneCache.set(name, zone = new IANAZone(name));
        }
        return zone;
    }
    /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */ static resetCache() {
        ianaZoneCache.clear();
        dtfCache.clear();
    }
    /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @deprecated For backward compatibility, this forwards to isValidZone, better use `isValidZone()` directly instead.
   * @return {boolean}
   */ static isValidSpecifier(s) {
        return this.isValidZone(s);
    }
    /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */ static isValidZone(zone) {
        if (!zone) {
            return false;
        }
        try {
            new Intl.DateTimeFormat("en-US", {
                timeZone: zone
            }).format();
            return true;
        } catch (e) {
            return false;
        }
    }
    constructor(name){
        super();
        /** @private **/ this.zoneName = name;
        /** @private **/ this.valid = IANAZone.isValidZone(name);
    }
    /**
   * The type of zone. `iana` for all instances of `IANAZone`.
   * @override
   * @type {string}
   */ get type() {
        return "iana";
    }
    /**
   * The name of this zone (i.e. the IANA zone name).
   * @override
   * @type {string}
   */ get name() {
        return this.zoneName;
    }
    /**
   * Returns whether the offset is known to be fixed for the whole year:
   * Always returns false for all IANA zones.
   * @override
   * @type {boolean}
   */ get isUniversal() {
        return false;
    }
    /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */ offsetName(ts, { format, locale }) {
        return parseZoneInfo(ts, format, locale, this.name);
    }
    /**
   * Returns the offset's value as a string
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */ formatOffset(ts, format) {
        return formatOffset(this.offset(ts), format);
    }
    /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @override
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */ offset(ts) {
        if (!this.valid) return NaN;
        const date = new Date(ts);
        if (isNaN(date)) return NaN;
        const dtf = makeDTF(this.name);
        let [year, month, day, adOrBc, hour, minute, second] = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date);
        if (adOrBc === "BC") {
            year = -Math.abs(year) + 1;
        }
        // because we're using hour12 and https://bugs.chromium.org/p/chromium/issues/detail?id=1025564&can=2&q=%2224%3A00%22%20datetimeformat
        const adjustedHour = hour === 24 ? 0 : hour;
        const asUTC = objToLocalTS({
            year,
            month,
            day,
            hour: adjustedHour,
            minute,
            second,
            millisecond: 0
        });
        let asTS = +date;
        const over = asTS % 1000;
        asTS -= over >= 0 ? over : 1000 + over;
        return (asUTC - asTS) / (60 * 1000);
    }
    /**
   * Return whether this Zone is equal to another zone
   * @override
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */ equals(otherZone) {
        return otherZone.type === "iana" && otherZone.name === this.name;
    }
    /**
   * Return whether this Zone is valid.
   * @override
   * @type {boolean}
   */ get isValid() {
        return this.valid;
    }
}
// todo - remap caching
let intlLFCache = {};
function getCachedLF(locString, opts = {}) {
    const key = JSON.stringify([
        locString,
        opts
    ]);
    let dtf = intlLFCache[key];
    if (!dtf) {
        dtf = new Intl.ListFormat(locString, opts);
        intlLFCache[key] = dtf;
    }
    return dtf;
}
const intlDTCache = new Map();
function getCachedDTF(locString, opts = {}) {
    const key = JSON.stringify([
        locString,
        opts
    ]);
    let dtf = intlDTCache.get(key);
    if (dtf === undefined) {
        dtf = new Intl.DateTimeFormat(locString, opts);
        intlDTCache.set(key, dtf);
    }
    return dtf;
}
const intlNumCache = new Map();
function getCachedINF(locString, opts = {}) {
    const key = JSON.stringify([
        locString,
        opts
    ]);
    let inf = intlNumCache.get(key);
    if (inf === undefined) {
        inf = new Intl.NumberFormat(locString, opts);
        intlNumCache.set(key, inf);
    }
    return inf;
}
const intlRelCache = new Map();
function getCachedRTF(locString, opts = {}) {
    const { base, ...cacheKeyOpts } = opts; // exclude `base` from the options
    const key = JSON.stringify([
        locString,
        cacheKeyOpts
    ]);
    let inf = intlRelCache.get(key);
    if (inf === undefined) {
        inf = new Intl.RelativeTimeFormat(locString, opts);
        intlRelCache.set(key, inf);
    }
    return inf;
}
let sysLocaleCache = null;
function systemLocale() {
    if (sysLocaleCache) {
        return sysLocaleCache;
    } else {
        sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
        return sysLocaleCache;
    }
}
const intlResolvedOptionsCache = new Map();
function getCachedIntResolvedOptions(locString) {
    let opts = intlResolvedOptionsCache.get(locString);
    if (opts === undefined) {
        opts = new Intl.DateTimeFormat(locString).resolvedOptions();
        intlResolvedOptionsCache.set(locString, opts);
    }
    return opts;
}
const weekInfoCache = new Map();
function getCachedWeekInfo(locString) {
    let data = weekInfoCache.get(locString);
    if (!data) {
        const locale = new Intl.Locale(locString);
        // browsers currently implement this as a property, but spec says it should be a getter function
        data = "getWeekInfo" in locale ? locale.getWeekInfo() : locale.weekInfo;
        // minimalDays was removed from WeekInfo: https://github.com/tc39/proposal-intl-locale-info/issues/86
        if (!("minimalDays" in data)) {
            data = {
                ...fallbackWeekSettings,
                ...data
            };
        }
        weekInfoCache.set(locString, data);
    }
    return data;
}
function parseLocaleString(localeStr) {
    // I really want to avoid writing a BCP 47 parser
    // see, e.g. https://github.com/wooorm/bcp-47
    // Instead, we'll do this:
    // a) if the string has no -u extensions, just leave it alone
    // b) if it does, use Intl to resolve everything
    // c) if Intl fails, try again without the -u
    // private subtags and unicode subtags have ordering requirements,
    // and we're not properly parsing this, so just strip out the
    // private ones if they exist.
    const xIndex = localeStr.indexOf("-x-");
    if (xIndex !== -1) {
        localeStr = localeStr.substring(0, xIndex);
    }
    const uIndex = localeStr.indexOf("-u-");
    if (uIndex === -1) {
        return [
            localeStr
        ];
    } else {
        let options;
        let selectedStr;
        try {
            options = getCachedDTF(localeStr).resolvedOptions();
            selectedStr = localeStr;
        } catch (e) {
            const smaller = localeStr.substring(0, uIndex);
            options = getCachedDTF(smaller).resolvedOptions();
            selectedStr = smaller;
        }
        const { numberingSystem, calendar } = options;
        return [
            selectedStr,
            numberingSystem,
            calendar
        ];
    }
}
function intlConfigString(localeStr, numberingSystem, outputCalendar) {
    if (outputCalendar || numberingSystem) {
        if (!localeStr.includes("-u-")) {
            localeStr += "-u";
        }
        if (outputCalendar) {
            localeStr += `-ca-${outputCalendar}`;
        }
        if (numberingSystem) {
            localeStr += `-nu-${numberingSystem}`;
        }
        return localeStr;
    } else {
        return localeStr;
    }
}
function mapMonths(f) {
    const ms = [];
    for(let i = 1; i <= 12; i++){
        const dt = DateTime.utc(2009, i, 1);
        ms.push(f(dt));
    }
    return ms;
}
function mapWeekdays(f) {
    const ms = [];
    for(let i = 1; i <= 7; i++){
        const dt = DateTime.utc(2016, 11, 13 + i);
        ms.push(f(dt));
    }
    return ms;
}
function listStuff(loc, length, englishFn, intlFn) {
    const mode = loc.listingMode();
    if (mode === "error") {
        return null;
    } else if (mode === "en") {
        return englishFn(length);
    } else {
        return intlFn(length);
    }
}
function supportsFastNumbers(loc) {
    if (loc.numberingSystem && loc.numberingSystem !== "latn") {
        return false;
    } else {
        return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || getCachedIntResolvedOptions(loc.locale).numberingSystem === "latn";
    }
}
/**
 * @private
 */ class PolyNumberFormatter {
    constructor(intl, forceSimple, opts){
        this.padTo = opts.padTo || 0;
        this.floor = opts.floor || false;
        const { padTo, floor, ...otherOpts } = opts;
        if (!forceSimple || Object.keys(otherOpts).length > 0) {
            const intlOpts = {
                useGrouping: false,
                ...opts
            };
            if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
            this.inf = getCachedINF(intl, intlOpts);
        }
    }
    format(i) {
        if (this.inf) {
            const fixed = this.floor ? Math.floor(i) : i;
            return this.inf.format(fixed);
        } else {
            // to match the browser's numberformatter defaults
            const fixed = this.floor ? Math.floor(i) : roundTo(i, 3);
            return padStart(fixed, this.padTo);
        }
    }
}
/**
 * @private
 */ class PolyDateFormatter {
    constructor(dt, intl, opts){
        this.opts = opts;
        this.originalZone = undefined;
        let z = undefined;
        if (this.opts.timeZone) {
            // Don't apply any workarounds if a timeZone is explicitly provided in opts
            this.dt = dt;
        } else if (dt.zone.type === "fixed") {
            // UTC-8 or Etc/UTC-8 are not part of tzdata, only Etc/GMT+8 and the like.
            // That is why fixed-offset TZ is set to that unless it is:
            // 1. Representing offset 0 when UTC is used to maintain previous behavior and does not become GMT.
            // 2. Unsupported by the browser:
            //    - some do not support Etc/
            //    - < Etc/GMT-14, > Etc/GMT+12, and 30-minute or 45-minute offsets are not part of tzdata
            const gmtOffset = -1 * (dt.offset / 60);
            const offsetZ = gmtOffset >= 0 ? `Etc/GMT+${gmtOffset}` : `Etc/GMT${gmtOffset}`;
            if (dt.offset !== 0 && IANAZone.create(offsetZ).valid) {
                z = offsetZ;
                this.dt = dt;
            } else {
                // Not all fixed-offset zones like Etc/+4:30 are present in tzdata so
                // we manually apply the offset and substitute the zone as needed.
                z = "UTC";
                this.dt = dt.offset === 0 ? dt : dt.setZone("UTC").plus({
                    minutes: dt.offset
                });
                this.originalZone = dt.zone;
            }
        } else if (dt.zone.type === "system") {
            this.dt = dt;
        } else if (dt.zone.type === "iana") {
            this.dt = dt;
            z = dt.zone.name;
        } else {
            // Custom zones can have any offset / offsetName so we just manually
            // apply the offset and substitute the zone as needed.
            z = "UTC";
            this.dt = dt.setZone("UTC").plus({
                minutes: dt.offset
            });
            this.originalZone = dt.zone;
        }
        const intlOpts = {
            ...this.opts
        };
        intlOpts.timeZone = intlOpts.timeZone || z;
        this.dtf = getCachedDTF(intl, intlOpts);
    }
    format() {
        if (this.originalZone) {
            // If we have to substitute in the actual zone name, we have to use
            // formatToParts so that the timezone can be replaced.
            return this.formatToParts().map(({ value })=>value).join("");
        }
        return this.dtf.format(this.dt.toJSDate());
    }
    formatToParts() {
        const parts = this.dtf.formatToParts(this.dt.toJSDate());
        if (this.originalZone) {
            return parts.map((part)=>{
                if (part.type === "timeZoneName") {
                    const offsetName = this.originalZone.offsetName(this.dt.ts, {
                        locale: this.dt.locale,
                        format: this.opts.timeZoneName
                    });
                    return {
                        ...part,
                        value: offsetName
                    };
                } else {
                    return part;
                }
            });
        }
        return parts;
    }
    resolvedOptions() {
        return this.dtf.resolvedOptions();
    }
}
/**
 * @private
 */ class PolyRelFormatter {
    constructor(intl, isEnglish, opts){
        this.opts = {
            style: "long",
            ...opts
        };
        if (!isEnglish && hasRelative()) {
            this.rtf = getCachedRTF(intl, opts);
        }
    }
    format(count, unit) {
        if (this.rtf) {
            return this.rtf.format(count, unit);
        } else {
            return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
        }
    }
    formatToParts(count, unit) {
        if (this.rtf) {
            return this.rtf.formatToParts(count, unit);
        } else {
            return [];
        }
    }
}
const fallbackWeekSettings = {
    firstDay: 1,
    minimalDays: 4,
    weekend: [
        6,
        7
    ]
};
/**
 * @private
 */ class Locale {
    static fromOpts(opts) {
        return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.weekSettings, opts.defaultToEN);
    }
    static create(locale, numberingSystem, outputCalendar, weekSettings, defaultToEN = false) {
        const specifiedLocale = locale || Settings.defaultLocale;
        // the system locale is useful for human-readable strings but annoying for parsing/formatting known formats
        const localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale());
        const numberingSystemR = numberingSystem || Settings.defaultNumberingSystem;
        const outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
        const weekSettingsR = validateWeekSettings(weekSettings) || Settings.defaultWeekSettings;
        return new Locale(localeR, numberingSystemR, outputCalendarR, weekSettingsR, specifiedLocale);
    }
    static resetCache() {
        sysLocaleCache = null;
        intlDTCache.clear();
        intlNumCache.clear();
        intlRelCache.clear();
        intlResolvedOptionsCache.clear();
        weekInfoCache.clear();
    }
    static fromObject({ locale, numberingSystem, outputCalendar, weekSettings } = {}) {
        return Locale.create(locale, numberingSystem, outputCalendar, weekSettings);
    }
    constructor(locale, numbering, outputCalendar, weekSettings, specifiedLocale){
        const [parsedLocale, parsedNumberingSystem, parsedOutputCalendar] = parseLocaleString(locale);
        this.locale = parsedLocale;
        this.numberingSystem = numbering || parsedNumberingSystem || null;
        this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
        this.weekSettings = weekSettings;
        this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
        this.weekdaysCache = {
            format: {},
            standalone: {}
        };
        this.monthsCache = {
            format: {},
            standalone: {}
        };
        this.meridiemCache = null;
        this.eraCache = {};
        this.specifiedLocale = specifiedLocale;
        this.fastNumbersCached = null;
    }
    get fastNumbers() {
        if (this.fastNumbersCached == null) {
            this.fastNumbersCached = supportsFastNumbers(this);
        }
        return this.fastNumbersCached;
    }
    listingMode() {
        const isActuallyEn = this.isEnglish();
        const hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
        return isActuallyEn && hasNoWeirdness ? "en" : "intl";
    }
    clone(alts) {
        if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
            return this;
        } else {
            return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, validateWeekSettings(alts.weekSettings) || this.weekSettings, alts.defaultToEN || false);
        }
    }
    redefaultToEN(alts = {}) {
        return this.clone({
            ...alts,
            defaultToEN: true
        });
    }
    redefaultToSystem(alts = {}) {
        return this.clone({
            ...alts,
            defaultToEN: false
        });
    }
    months(length, format = false) {
        return listStuff(this, length, months, ()=>{
            // Workaround for "ja" locale: formatToParts does not label all parts of the month
            // as "month" and for this locale there is no difference between "format" and "non-format".
            // As such, just use format() instead of formatToParts() and take the whole string
            const monthSpecialCase = this.intl === "ja" || this.intl.startsWith("ja-");
            format &= !monthSpecialCase;
            const intl = format ? {
                month: length,
                day: "numeric"
            } : {
                month: length
            }, formatStr = format ? "format" : "standalone";
            if (!this.monthsCache[formatStr][length]) {
                const mapper = !monthSpecialCase ? (dt)=>this.extract(dt, intl, "month") : (dt)=>this.dtFormatter(dt, intl).format();
                this.monthsCache[formatStr][length] = mapMonths(mapper);
            }
            return this.monthsCache[formatStr][length];
        });
    }
    weekdays(length, format = false) {
        return listStuff(this, length, weekdays, ()=>{
            const intl = format ? {
                weekday: length,
                year: "numeric",
                month: "long",
                day: "numeric"
            } : {
                weekday: length
            }, formatStr = format ? "format" : "standalone";
            if (!this.weekdaysCache[formatStr][length]) {
                this.weekdaysCache[formatStr][length] = mapWeekdays((dt)=>this.extract(dt, intl, "weekday"));
            }
            return this.weekdaysCache[formatStr][length];
        });
    }
    meridiems() {
        return listStuff(this, undefined, ()=>meridiems, ()=>{
            // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
            // for AM and PM. This is probably wrong, but it's makes parsing way easier.
            if (!this.meridiemCache) {
                const intl = {
                    hour: "numeric",
                    hourCycle: "h12"
                };
                this.meridiemCache = [
                    DateTime.utc(2016, 11, 13, 9),
                    DateTime.utc(2016, 11, 13, 19)
                ].map((dt)=>this.extract(dt, intl, "dayperiod"));
            }
            return this.meridiemCache;
        });
    }
    eras(length) {
        return listStuff(this, length, eras, ()=>{
            const intl = {
                era: length
            };
            // This is problematic. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
            // to definitely enumerate them.
            if (!this.eraCache[length]) {
                this.eraCache[length] = [
                    DateTime.utc(-40, 1, 1),
                    DateTime.utc(2017, 1, 1)
                ].map((dt)=>this.extract(dt, intl, "era"));
            }
            return this.eraCache[length];
        });
    }
    extract(dt, intlOpts, field) {
        const df = this.dtFormatter(dt, intlOpts), results = df.formatToParts(), matching = results.find((m)=>m.type.toLowerCase() === field);
        return matching ? matching.value : null;
    }
    numberFormatter(opts = {}) {
        // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
        // (in contrast, the rest of the condition is used heavily)
        return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
    }
    dtFormatter(dt, intlOpts = {}) {
        return new PolyDateFormatter(dt, this.intl, intlOpts);
    }
    relFormatter(opts = {}) {
        return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
    }
    listFormatter(opts = {}) {
        return getCachedLF(this.intl, opts);
    }
    isEnglish() {
        return this.locale === "en" || this.locale.toLowerCase() === "en-us" || getCachedIntResolvedOptions(this.intl).locale.startsWith("en-us");
    }
    getWeekSettings() {
        if (this.weekSettings) {
            return this.weekSettings;
        } else if (!hasLocaleWeekInfo()) {
            return fallbackWeekSettings;
        } else {
            return getCachedWeekInfo(this.locale);
        }
    }
    getStartOfWeek() {
        return this.getWeekSettings().firstDay;
    }
    getMinDaysInFirstWeek() {
        return this.getWeekSettings().minimalDays;
    }
    getWeekendDays() {
        return this.getWeekSettings().weekend;
    }
    equals(other) {
        return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
    }
    toString() {
        return `Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`;
    }
}
let singleton = null;
/**
 * A zone with a fixed offset (meaning no DST)
 * @implements {Zone}
 */ class FixedOffsetZone extends Zone {
    /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */ static get utcInstance() {
        if (singleton === null) {
            singleton = new FixedOffsetZone(0);
        }
        return singleton;
    }
    /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */ static instance(offset) {
        return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
    }
    /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */ static parseSpecifier(s) {
        if (s) {
            const r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
            if (r) {
                return new FixedOffsetZone(signedOffset(r[1], r[2]));
            }
        }
        return null;
    }
    constructor(offset){
        super();
        /** @private **/ this.fixed = offset;
    }
    /**
   * The type of zone. `fixed` for all instances of `FixedOffsetZone`.
   * @override
   * @type {string}
   */ get type() {
        return "fixed";
    }
    /**
   * The name of this zone.
   * All fixed zones' names always start with "UTC" (plus optional offset)
   * @override
   * @type {string}
   */ get name() {
        return this.fixed === 0 ? "UTC" : `UTC${formatOffset(this.fixed, "narrow")}`;
    }
    /**
   * The IANA name of this zone, i.e. `Etc/UTC` or `Etc/GMT+/-nn`
   *
   * @override
   * @type {string}
   */ get ianaName() {
        if (this.fixed === 0) {
            return "Etc/UTC";
        } else {
            return `Etc/GMT${formatOffset(-this.fixed, "narrow")}`;
        }
    }
    /**
   * Returns the offset's common name at the specified timestamp.
   *
   * For fixed offset zones this equals to the zone name.
   * @override
   */ offsetName() {
        return this.name;
    }
    /**
   * Returns the offset's value as a string
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */ formatOffset(ts, format) {
        return formatOffset(this.fixed, format);
    }
    /**
   * Returns whether the offset is known to be fixed for the whole year:
   * Always returns true for all fixed offset zones.
   * @override
   * @type {boolean}
   */ get isUniversal() {
        return true;
    }
    /**
   * Return the offset in minutes for this zone at the specified timestamp.
   *
   * For fixed offset zones, this is constant and does not depend on a timestamp.
   * @override
   * @return {number}
   */ offset() {
        return this.fixed;
    }
    /**
   * Return whether this Zone is equal to another zone (i.e. also fixed and same offset)
   * @override
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */ equals(otherZone) {
        return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
    }
    /**
   * Return whether this Zone is valid:
   * All fixed offset zones are valid.
   * @override
   * @type {boolean}
   */ get isValid() {
        return true;
    }
}
/**
 * A zone that failed to parse. You should never need to instantiate this.
 * @implements {Zone}
 */ class InvalidZone extends Zone {
    constructor(zoneName){
        super();
        /**  @private */ this.zoneName = zoneName;
    }
    /** @override **/ get type() {
        return "invalid";
    }
    /** @override **/ get name() {
        return this.zoneName;
    }
    /** @override **/ get isUniversal() {
        return false;
    }
    /** @override **/ offsetName() {
        return null;
    }
    /** @override **/ formatOffset() {
        return "";
    }
    /** @override **/ offset() {
        return NaN;
    }
    /** @override **/ equals() {
        return false;
    }
    /** @override **/ get isValid() {
        return false;
    }
}
/**
 * @private
 */ function normalizeZone(input, defaultZone) {
    if (isUndefined(input) || input === null) {
        return defaultZone;
    } else if (input instanceof Zone) {
        return input;
    } else if (isString(input)) {
        const lowered = input.toLowerCase();
        if (lowered === "default") return defaultZone;
        else if (lowered === "local" || lowered === "system") return SystemZone.instance;
        else if (lowered === "utc" || lowered === "gmt") return FixedOffsetZone.utcInstance;
        else return FixedOffsetZone.parseSpecifier(lowered) || IANAZone.create(input);
    } else if (isNumber(input)) {
        return FixedOffsetZone.instance(input);
    } else if (typeof input === "object" && "offset" in input && typeof input.offset === "function") {
        // This is dumb, but the instanceof check above doesn't seem to really work
        // so we're duck checking it
        return input;
    } else {
        return new InvalidZone(input);
    }
}
const numberingSystems = {
    arab: "[\u0660-\u0669]",
    arabext: "[\u06F0-\u06F9]",
    bali: "[\u1B50-\u1B59]",
    beng: "[\u09E6-\u09EF]",
    deva: "[\u0966-\u096F]",
    fullwide: "[\uFF10-\uFF19]",
    gujr: "[\u0AE6-\u0AEF]",
    hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
    khmr: "[\u17E0-\u17E9]",
    knda: "[\u0CE6-\u0CEF]",
    laoo: "[\u0ED0-\u0ED9]",
    limb: "[\u1946-\u194F]",
    mlym: "[\u0D66-\u0D6F]",
    mong: "[\u1810-\u1819]",
    mymr: "[\u1040-\u1049]",
    orya: "[\u0B66-\u0B6F]",
    tamldec: "[\u0BE6-\u0BEF]",
    telu: "[\u0C66-\u0C6F]",
    thai: "[\u0E50-\u0E59]",
    tibt: "[\u0F20-\u0F29]",
    latn: "\\d"
};
const numberingSystemsUTF16 = {
    arab: [
        1632,
        1641
    ],
    arabext: [
        1776,
        1785
    ],
    bali: [
        6992,
        7001
    ],
    beng: [
        2534,
        2543
    ],
    deva: [
        2406,
        2415
    ],
    fullwide: [
        65296,
        65303
    ],
    gujr: [
        2790,
        2799
    ],
    khmr: [
        6112,
        6121
    ],
    knda: [
        3302,
        3311
    ],
    laoo: [
        3792,
        3801
    ],
    limb: [
        6470,
        6479
    ],
    mlym: [
        3430,
        3439
    ],
    mong: [
        6160,
        6169
    ],
    mymr: [
        4160,
        4169
    ],
    orya: [
        2918,
        2927
    ],
    tamldec: [
        3046,
        3055
    ],
    telu: [
        3174,
        3183
    ],
    thai: [
        3664,
        3673
    ],
    tibt: [
        3872,
        3881
    ]
};
const hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
function parseDigits(str) {
    let value = parseInt(str, 10);
    if (isNaN(value)) {
        value = "";
        for(let i = 0; i < str.length; i++){
            const code = str.charCodeAt(i);
            if (str[i].search(numberingSystems.hanidec) !== -1) {
                value += hanidecChars.indexOf(str[i]);
            } else {
                for(const key in numberingSystemsUTF16){
                    const [min, max] = numberingSystemsUTF16[key];
                    if (code >= min && code <= max) {
                        value += code - min;
                    }
                }
            }
        }
        return parseInt(value, 10);
    } else {
        return value;
    }
}
// cache of {numberingSystem: {append: regex}}
const digitRegexCache = new Map();
function resetDigitRegexCache() {
    digitRegexCache.clear();
}
function digitRegex({ numberingSystem }, append = "") {
    const ns = numberingSystem || "latn";
    let appendCache = digitRegexCache.get(ns);
    if (appendCache === undefined) {
        appendCache = new Map();
        digitRegexCache.set(ns, appendCache);
    }
    let regex = appendCache.get(append);
    if (regex === undefined) {
        regex = new RegExp(`${numberingSystems[ns]}${append}`);
        appendCache.set(append, regex);
    }
    return regex;
}
let now = ()=>Date.now(), defaultZone = "system", defaultLocale = null, defaultNumberingSystem = null, defaultOutputCalendar = null, twoDigitCutoffYear = 60, throwOnInvalid, defaultWeekSettings = null;
/**
 * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
 */ class Settings {
    /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */ static get now() {
        return now;
    }
    /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */ static set now(n) {
        now = n;
    }
    /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */ static set defaultZone(zone) {
        defaultZone = zone;
    }
    /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */ static get defaultZone() {
        return normalizeZone(defaultZone, SystemZone.instance);
    }
    /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */ static get defaultLocale() {
        return defaultLocale;
    }
    /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */ static set defaultLocale(locale) {
        defaultLocale = locale;
    }
    /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */ static get defaultNumberingSystem() {
        return defaultNumberingSystem;
    }
    /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */ static set defaultNumberingSystem(numberingSystem) {
        defaultNumberingSystem = numberingSystem;
    }
    /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */ static get defaultOutputCalendar() {
        return defaultOutputCalendar;
    }
    /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */ static set defaultOutputCalendar(outputCalendar) {
        defaultOutputCalendar = outputCalendar;
    }
    /**
   * @typedef {Object} WeekSettings
   * @property {number} firstDay
   * @property {number} minimalDays
   * @property {number[]} weekend
   */ /**
   * @return {WeekSettings|null}
   */ static get defaultWeekSettings() {
        return defaultWeekSettings;
    }
    /**
   * Allows overriding the default locale week settings, i.e. the start of the week, the weekend and
   * how many days are required in the first week of a year.
   * Does not affect existing instances.
   *
   * @param {WeekSettings|null} weekSettings
   */ static set defaultWeekSettings(weekSettings) {
        defaultWeekSettings = validateWeekSettings(weekSettings);
    }
    /**
   * Get the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
   * @type {number}
   */ static get twoDigitCutoffYear() {
        return twoDigitCutoffYear;
    }
    /**
   * Set the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
   * @type {number}
   * @example Settings.twoDigitCutoffYear = 0 // all 'yy' are interpreted as 20th century
   * @example Settings.twoDigitCutoffYear = 99 // all 'yy' are interpreted as 21st century
   * @example Settings.twoDigitCutoffYear = 50 // '49' -> 2049; '50' -> 1950
   * @example Settings.twoDigitCutoffYear = 1950 // interpreted as 50
   * @example Settings.twoDigitCutoffYear = 2050 // ALSO interpreted as 50
   */ static set twoDigitCutoffYear(cutoffYear) {
        twoDigitCutoffYear = cutoffYear % 100;
    }
    /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */ static get throwOnInvalid() {
        return throwOnInvalid;
    }
    /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */ static set throwOnInvalid(t) {
        throwOnInvalid = t;
    }
    /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */ static resetCaches() {
        Locale.resetCache();
        IANAZone.resetCache();
        DateTime.resetCache();
        resetDigitRegexCache();
    }
}
class Invalid {
    constructor(reason, explanation){
        this.reason = reason;
        this.explanation = explanation;
    }
    toMessage() {
        if (this.explanation) {
            return `${this.reason}: ${this.explanation}`;
        } else {
            return this.reason;
        }
    }
}
const nonLeapLadder = [
    0,
    31,
    59,
    90,
    120,
    151,
    181,
    212,
    243,
    273,
    304,
    334
], leapLadder = [
    0,
    31,
    60,
    91,
    121,
    152,
    182,
    213,
    244,
    274,
    305,
    335
];
function unitOutOfRange(unit, value) {
    return new Invalid("unit out of range", `you specified ${value} (of type ${typeof value}) as a ${unit}, which is invalid`);
}
function dayOfWeek(year, month, day) {
    const d = new Date(Date.UTC(year, month - 1, day));
    if (year < 100 && year >= 0) {
        d.setUTCFullYear(d.getUTCFullYear() - 1900);
    }
    const js = d.getUTCDay();
    return js === 0 ? 7 : js;
}
function computeOrdinal(year, month, day) {
    return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}
function uncomputeOrdinal(year, ordinal) {
    const table = isLeapYear(year) ? leapLadder : nonLeapLadder, month0 = table.findIndex((i)=>i < ordinal), day = ordinal - table[month0];
    return {
        month: month0 + 1,
        day
    };
}
function isoWeekdayToLocal(isoWeekday, startOfWeek) {
    return (isoWeekday - startOfWeek + 7) % 7 + 1;
}
/**
 * @private
 */ function gregorianToWeek(gregObj, minDaysInFirstWeek = 4, startOfWeek = 1) {
    const { year, month, day } = gregObj, ordinal = computeOrdinal(year, month, day), weekday = isoWeekdayToLocal(dayOfWeek(year, month, day), startOfWeek);
    let weekNumber = Math.floor((ordinal - weekday + 14 - minDaysInFirstWeek) / 7), weekYear;
    if (weekNumber < 1) {
        weekYear = year - 1;
        weekNumber = weeksInWeekYear(weekYear, minDaysInFirstWeek, startOfWeek);
    } else if (weekNumber > weeksInWeekYear(year, minDaysInFirstWeek, startOfWeek)) {
        weekYear = year + 1;
        weekNumber = 1;
    } else {
        weekYear = year;
    }
    return {
        weekYear,
        weekNumber,
        weekday,
        ...timeObject(gregObj)
    };
}
function weekToGregorian(weekData, minDaysInFirstWeek = 4, startOfWeek = 1) {
    const { weekYear, weekNumber, weekday } = weekData, weekdayOfJan4 = isoWeekdayToLocal(dayOfWeek(weekYear, 1, minDaysInFirstWeek), startOfWeek), yearInDays = daysInYear(weekYear);
    let ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 7 + minDaysInFirstWeek, year;
    if (ordinal < 1) {
        year = weekYear - 1;
        ordinal += daysInYear(year);
    } else if (ordinal > yearInDays) {
        year = weekYear + 1;
        ordinal -= daysInYear(weekYear);
    } else {
        year = weekYear;
    }
    const { month, day } = uncomputeOrdinal(year, ordinal);
    return {
        year,
        month,
        day,
        ...timeObject(weekData)
    };
}
function gregorianToOrdinal(gregData) {
    const { year, month, day } = gregData;
    const ordinal = computeOrdinal(year, month, day);
    return {
        year,
        ordinal,
        ...timeObject(gregData)
    };
}
function ordinalToGregorian(ordinalData) {
    const { year, ordinal } = ordinalData;
    const { month, day } = uncomputeOrdinal(year, ordinal);
    return {
        year,
        month,
        day,
        ...timeObject(ordinalData)
    };
}
/**
 * Check if local week units like localWeekday are used in obj.
 * If so, validates that they are not mixed with ISO week units and then copies them to the normal week unit properties.
 * Modifies obj in-place!
 * @param obj the object values
 */ function usesLocalWeekValues(obj, loc) {
    const hasLocaleWeekData = !isUndefined(obj.localWeekday) || !isUndefined(obj.localWeekNumber) || !isUndefined(obj.localWeekYear);
    if (hasLocaleWeekData) {
        const hasIsoWeekData = !isUndefined(obj.weekday) || !isUndefined(obj.weekNumber) || !isUndefined(obj.weekYear);
        if (hasIsoWeekData) {
            throw new ConflictingSpecificationError("Cannot mix locale-based week fields with ISO-based week fields");
        }
        if (!isUndefined(obj.localWeekday)) obj.weekday = obj.localWeekday;
        if (!isUndefined(obj.localWeekNumber)) obj.weekNumber = obj.localWeekNumber;
        if (!isUndefined(obj.localWeekYear)) obj.weekYear = obj.localWeekYear;
        delete obj.localWeekday;
        delete obj.localWeekNumber;
        delete obj.localWeekYear;
        return {
            minDaysInFirstWeek: loc.getMinDaysInFirstWeek(),
            startOfWeek: loc.getStartOfWeek()
        };
    } else {
        return {
            minDaysInFirstWeek: 4,
            startOfWeek: 1
        };
    }
}
function hasInvalidWeekData(obj, minDaysInFirstWeek = 4, startOfWeek = 1) {
    const validYear = isInteger(obj.weekYear), validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear, minDaysInFirstWeek, startOfWeek)), validWeekday = integerBetween(obj.weekday, 1, 7);
    if (!validYear) {
        return unitOutOfRange("weekYear", obj.weekYear);
    } else if (!validWeek) {
        return unitOutOfRange("week", obj.weekNumber);
    } else if (!validWeekday) {
        return unitOutOfRange("weekday", obj.weekday);
    } else return false;
}
function hasInvalidOrdinalData(obj) {
    const validYear = isInteger(obj.year), validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));
    if (!validYear) {
        return unitOutOfRange("year", obj.year);
    } else if (!validOrdinal) {
        return unitOutOfRange("ordinal", obj.ordinal);
    } else return false;
}
function hasInvalidGregorianData(obj) {
    const validYear = isInteger(obj.year), validMonth = integerBetween(obj.month, 1, 12), validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));
    if (!validYear) {
        return unitOutOfRange("year", obj.year);
    } else if (!validMonth) {
        return unitOutOfRange("month", obj.month);
    } else if (!validDay) {
        return unitOutOfRange("day", obj.day);
    } else return false;
}
function hasInvalidTimeData(obj) {
    const { hour, minute, second, millisecond } = obj;
    const validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0, validMinute = integerBetween(minute, 0, 59), validSecond = integerBetween(second, 0, 59), validMillisecond = integerBetween(millisecond, 0, 999);
    if (!validHour) {
        return unitOutOfRange("hour", hour);
    } else if (!validMinute) {
        return unitOutOfRange("minute", minute);
    } else if (!validSecond) {
        return unitOutOfRange("second", second);
    } else if (!validMillisecond) {
        return unitOutOfRange("millisecond", millisecond);
    } else return false;
}
/*
  This is just a junk drawer, containing anything used across multiple classes.
  Because Luxon is small(ish), this should stay small and we won't worry about splitting
  it up into, say, parsingUtil.js and basicUtil.js and so on. But they are divided up by feature area.
*/ /**
 * @private
 */ // TYPES
function isUndefined(o) {
    return typeof o === "undefined";
}
function isNumber(o) {
    return typeof o === "number";
}
function isInteger(o) {
    return typeof o === "number" && o % 1 === 0;
}
function isString(o) {
    return typeof o === "string";
}
function isDate(o) {
    return Object.prototype.toString.call(o) === "[object Date]";
}
// CAPABILITIES
function hasRelative() {
    try {
        return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
    } catch (e) {
        return false;
    }
}
function hasLocaleWeekInfo() {
    try {
        return typeof Intl !== "undefined" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
    } catch (e) {
        return false;
    }
}
// OBJECTS AND ARRAYS
function maybeArray(thing) {
    return Array.isArray(thing) ? thing : [
        thing
    ];
}
function bestBy(arr, by, compare) {
    if (arr.length === 0) {
        return undefined;
    }
    return arr.reduce((best, next)=>{
        const pair = [
            by(next),
            next
        ];
        if (!best) {
            return pair;
        } else if (compare(best[0], pair[0]) === best[0]) {
            return best;
        } else {
            return pair;
        }
    }, null)[1];
}
function pick(obj, keys) {
    return keys.reduce((a, k)=>{
        a[k] = obj[k];
        return a;
    }, {});
}
function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
function validateWeekSettings(settings) {
    if (settings == null) {
        return null;
    } else if (typeof settings !== "object") {
        throw new InvalidArgumentError("Week settings must be an object");
    } else {
        if (!integerBetween(settings.firstDay, 1, 7) || !integerBetween(settings.minimalDays, 1, 7) || !Array.isArray(settings.weekend) || settings.weekend.some((v)=>!integerBetween(v, 1, 7))) {
            throw new InvalidArgumentError("Invalid week settings");
        }
        return {
            firstDay: settings.firstDay,
            minimalDays: settings.minimalDays,
            weekend: Array.from(settings.weekend)
        };
    }
}
// NUMBERS AND STRINGS
function integerBetween(thing, bottom, top) {
    return isInteger(thing) && thing >= bottom && thing <= top;
}
// x % n but takes the sign of n instead of x
function floorMod(x, n) {
    return x - n * Math.floor(x / n);
}
function padStart(input, n = 2) {
    const isNeg = input < 0;
    let padded;
    if (isNeg) {
        padded = "-" + ("" + -input).padStart(n, "0");
    } else {
        padded = ("" + input).padStart(n, "0");
    }
    return padded;
}
function parseInteger(string) {
    if (isUndefined(string) || string === null || string === "") {
        return undefined;
    } else {
        return parseInt(string, 10);
    }
}
function parseFloating(string) {
    if (isUndefined(string) || string === null || string === "") {
        return undefined;
    } else {
        return parseFloat(string);
    }
}
function parseMillis(fraction) {
    // Return undefined (instead of 0) in these cases, where fraction is not set
    if (isUndefined(fraction) || fraction === null || fraction === "") {
        return undefined;
    } else {
        const f = parseFloat("0." + fraction) * 1000;
        return Math.floor(f);
    }
}
function roundTo(number, digits, rounding = "round") {
    const factor = 10 ** digits;
    switch(rounding){
        case "expand":
            return number > 0 ? Math.ceil(number * factor) / factor : Math.floor(number * factor) / factor;
        case "trunc":
            return Math.trunc(number * factor) / factor;
        case "round":
            return Math.round(number * factor) / factor;
        case "floor":
            return Math.floor(number * factor) / factor;
        case "ceil":
            return Math.ceil(number * factor) / factor;
        default:
            throw new RangeError(`Value rounding ${rounding} is out of range`);
    }
}
// DATE BASICS
function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}
function daysInMonth(year, month) {
    const modMonth = floorMod(month - 1, 12) + 1, modYear = year + (month - modMonth) / 12;
    if (modMonth === 2) {
        return isLeapYear(modYear) ? 29 : 28;
    } else {
        return [
            31,
            null,
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31
        ][modMonth - 1];
    }
}
// convert a calendar object to a local timestamp (epoch, but with the offset baked in)
function objToLocalTS(obj) {
    let d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond);
    // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that
    if (obj.year < 100 && obj.year >= 0) {
        d = new Date(d);
        // set the month and day again, this is necessary because year 2000 is a leap year, but year 100 is not
        // so if obj.year is in 99, but obj.day makes it roll over into year 100,
        // the calculations done by Date.UTC are using year 2000 - which is incorrect
        d.setUTCFullYear(obj.year, obj.month - 1, obj.day);
    }
    return +d;
}
// adapted from moment.js: https://github.com/moment/moment/blob/000ac1800e620f770f4eb31b5ae908f6167b0ab2/src/lib/units/week-calendar-utils.js
function firstWeekOffset(year, minDaysInFirstWeek, startOfWeek) {
    const fwdlw = isoWeekdayToLocal(dayOfWeek(year, 1, minDaysInFirstWeek), startOfWeek);
    return -fwdlw + minDaysInFirstWeek - 1;
}
function weeksInWeekYear(weekYear, minDaysInFirstWeek = 4, startOfWeek = 1) {
    const weekOffset = firstWeekOffset(weekYear, minDaysInFirstWeek, startOfWeek);
    const weekOffsetNext = firstWeekOffset(weekYear + 1, minDaysInFirstWeek, startOfWeek);
    return (daysInYear(weekYear) - weekOffset + weekOffsetNext) / 7;
}
function untruncateYear(year) {
    if (year > 99) {
        return year;
    } else return year > Settings.twoDigitCutoffYear ? 1900 + year : 2000 + year;
}
// PARSING
function parseZoneInfo(ts, offsetFormat, locale, timeZone = null) {
    const date = new Date(ts), intlOpts = {
        hourCycle: "h23",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    };
    if (timeZone) {
        intlOpts.timeZone = timeZone;
    }
    const modified = {
        timeZoneName: offsetFormat,
        ...intlOpts
    };
    const parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find((m)=>m.type.toLowerCase() === "timezonename");
    return parsed ? parsed.value : null;
}
// signedOffset('-5', '30') -> -330
function signedOffset(offHourStr, offMinuteStr) {
    let offHour = parseInt(offHourStr, 10);
    // don't || this because we want to preserve -0
    if (Number.isNaN(offHour)) {
        offHour = 0;
    }
    const offMin = parseInt(offMinuteStr, 10) || 0, offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
    return offHour * 60 + offMinSigned;
}
// COERCION
function asNumber(value) {
    const numericValue = Number(value);
    if (typeof value === "boolean" || value === "" || !Number.isFinite(numericValue)) throw new InvalidArgumentError(`Invalid unit value ${value}`);
    return numericValue;
}
function normalizeObject(obj, normalizer) {
    const normalized = {};
    for(const u in obj){
        if (hasOwnProperty(obj, u)) {
            const v = obj[u];
            if (v === undefined || v === null) continue;
            normalized[normalizer(u)] = asNumber(v);
        }
    }
    return normalized;
}
/**
 * Returns the offset's value as a string
 * @param {number} ts - Epoch milliseconds for which to get the offset
 * @param {string} format - What style of offset to return.
 *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
 * @return {string}
 */ function formatOffset(offset, format) {
    const hours = Math.trunc(Math.abs(offset / 60)), minutes = Math.trunc(Math.abs(offset % 60)), sign = offset >= 0 ? "+" : "-";
    switch(format){
        case "short":
            return `${sign}${padStart(hours, 2)}:${padStart(minutes, 2)}`;
        case "narrow":
            return `${sign}${hours}${minutes > 0 ? `:${minutes}` : ""}`;
        case "techie":
            return `${sign}${padStart(hours, 2)}${padStart(minutes, 2)}`;
        default:
            throw new RangeError(`Value format ${format} is out of range for property format`);
    }
}
function timeObject(obj) {
    return pick(obj, [
        "hour",
        "minute",
        "second",
        "millisecond"
    ]);
}
/**
 * @private
 */ const monthsLong = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const monthsShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
const monthsNarrow = [
    "J",
    "F",
    "M",
    "A",
    "M",
    "J",
    "J",
    "A",
    "S",
    "O",
    "N",
    "D"
];
function months(length) {
    switch(length){
        case "narrow":
            return [
                ...monthsNarrow
            ];
        case "short":
            return [
                ...monthsShort
            ];
        case "long":
            return [
                ...monthsLong
            ];
        case "numeric":
            return [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12"
            ];
        case "2-digit":
            return [
                "01",
                "02",
                "03",
                "04",
                "05",
                "06",
                "07",
                "08",
                "09",
                "10",
                "11",
                "12"
            ];
        default:
            return null;
    }
}
const weekdaysLong = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];
const weekdaysShort = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun"
];
const weekdaysNarrow = [
    "M",
    "T",
    "W",
    "T",
    "F",
    "S",
    "S"
];
function weekdays(length) {
    switch(length){
        case "narrow":
            return [
                ...weekdaysNarrow
            ];
        case "short":
            return [
                ...weekdaysShort
            ];
        case "long":
            return [
                ...weekdaysLong
            ];
        case "numeric":
            return [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ];
        default:
            return null;
    }
}
const meridiems = [
    "AM",
    "PM"
];
const erasLong = [
    "Before Christ",
    "Anno Domini"
];
const erasShort = [
    "BC",
    "AD"
];
const erasNarrow = [
    "B",
    "A"
];
function eras(length) {
    switch(length){
        case "narrow":
            return [
                ...erasNarrow
            ];
        case "short":
            return [
                ...erasShort
            ];
        case "long":
            return [
                ...erasLong
            ];
        default:
            return null;
    }
}
function meridiemForDateTime(dt) {
    return meridiems[dt.hour < 12 ? 0 : 1];
}
function weekdayForDateTime(dt, length) {
    return weekdays(length)[dt.weekday - 1];
}
function monthForDateTime(dt, length) {
    return months(length)[dt.month - 1];
}
function eraForDateTime(dt, length) {
    return eras(length)[dt.year < 0 ? 0 : 1];
}
function formatRelativeTime(unit, count, numeric = "always", narrow = false) {
    const units = {
        years: [
            "year",
            "yr."
        ],
        quarters: [
            "quarter",
            "qtr."
        ],
        months: [
            "month",
            "mo."
        ],
        weeks: [
            "week",
            "wk."
        ],
        days: [
            "day",
            "day",
            "days"
        ],
        hours: [
            "hour",
            "hr."
        ],
        minutes: [
            "minute",
            "min."
        ],
        seconds: [
            "second",
            "sec."
        ]
    };
    const lastable = [
        "hours",
        "minutes",
        "seconds"
    ].indexOf(unit) === -1;
    if (numeric === "auto" && lastable) {
        const isDay = unit === "days";
        switch(count){
            case 1:
                return isDay ? "tomorrow" : `next ${units[unit][0]}`;
            case -1:
                return isDay ? "yesterday" : `last ${units[unit][0]}`;
            case 0:
                return isDay ? "today" : `this ${units[unit][0]}`;
        }
    }
    const isInPast = Object.is(count, -0) || count < 0, fmtValue = Math.abs(count), singular = fmtValue === 1, lilUnits = units[unit], fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
    return isInPast ? `${fmtValue} ${fmtUnit} ago` : `in ${fmtValue} ${fmtUnit}`;
}
function stringifyTokens(splits, tokenToString) {
    let s = "";
    for (const token of splits){
        if (token.literal) {
            s += token.val;
        } else {
            s += tokenToString(token.val);
        }
    }
    return s;
}
const macroTokenToFormatOpts = {
    D: DATE_SHORT,
    DD: DATE_MED,
    DDD: DATE_FULL,
    DDDD: DATE_HUGE,
    t: TIME_SIMPLE,
    tt: TIME_WITH_SECONDS,
    ttt: TIME_WITH_SHORT_OFFSET,
    tttt: TIME_WITH_LONG_OFFSET,
    T: TIME_24_SIMPLE,
    TT: TIME_24_WITH_SECONDS,
    TTT: TIME_24_WITH_SHORT_OFFSET,
    TTTT: TIME_24_WITH_LONG_OFFSET,
    f: DATETIME_SHORT,
    ff: DATETIME_MED,
    fff: DATETIME_FULL,
    ffff: DATETIME_HUGE,
    F: DATETIME_SHORT_WITH_SECONDS,
    FF: DATETIME_MED_WITH_SECONDS,
    FFF: DATETIME_FULL_WITH_SECONDS,
    FFFF: DATETIME_HUGE_WITH_SECONDS
};
/**
 * @private
 */ class Formatter {
    static create(locale, opts = {}) {
        return new Formatter(locale, opts);
    }
    static parseFormat(fmt) {
        // white-space is always considered a literal in user-provided formats
        // the " " token has a special meaning (see unitForToken)
        let current = null, currentFull = "", bracketed = false;
        const splits = [];
        for(let i = 0; i < fmt.length; i++){
            const c = fmt.charAt(i);
            if (c === "'") {
                // turn '' into a literal signal quote instead of just skipping the empty literal
                if (currentFull.length > 0 || bracketed) {
                    splits.push({
                        literal: bracketed || /^\s+$/.test(currentFull),
                        val: currentFull === "" ? "'" : currentFull
                    });
                }
                current = null;
                currentFull = "";
                bracketed = !bracketed;
            } else if (bracketed) {
                currentFull += c;
            } else if (c === current) {
                currentFull += c;
            } else {
                if (currentFull.length > 0) {
                    splits.push({
                        literal: /^\s+$/.test(currentFull),
                        val: currentFull
                    });
                }
                currentFull = c;
                current = c;
            }
        }
        if (currentFull.length > 0) {
            splits.push({
                literal: bracketed || /^\s+$/.test(currentFull),
                val: currentFull
            });
        }
        return splits;
    }
    static macroTokenToFormatOpts(token) {
        return macroTokenToFormatOpts[token];
    }
    constructor(locale, formatOpts){
        this.opts = formatOpts;
        this.loc = locale;
        this.systemLoc = null;
    }
    formatWithSystemDefault(dt, opts) {
        if (this.systemLoc === null) {
            this.systemLoc = this.loc.redefaultToSystem();
        }
        const df = this.systemLoc.dtFormatter(dt, {
            ...this.opts,
            ...opts
        });
        return df.format();
    }
    dtFormatter(dt, opts = {}) {
        return this.loc.dtFormatter(dt, {
            ...this.opts,
            ...opts
        });
    }
    formatDateTime(dt, opts) {
        return this.dtFormatter(dt, opts).format();
    }
    formatDateTimeParts(dt, opts) {
        return this.dtFormatter(dt, opts).formatToParts();
    }
    formatInterval(interval, opts) {
        const df = this.dtFormatter(interval.start, opts);
        return df.dtf.formatRange(interval.start.toJSDate(), interval.end.toJSDate());
    }
    resolvedOptions(dt, opts) {
        return this.dtFormatter(dt, opts).resolvedOptions();
    }
    num(n, p = 0, signDisplay = undefined) {
        // we get some perf out of doing this here, annoyingly
        if (this.opts.forceSimple) {
            return padStart(n, p);
        }
        const opts = {
            ...this.opts
        };
        if (p > 0) {
            opts.padTo = p;
        }
        if (signDisplay) {
            opts.signDisplay = signDisplay;
        }
        return this.loc.numberFormatter(opts).format(n);
    }
    formatDateTimeFromString(dt, fmt) {
        const knownEnglish = this.loc.listingMode() === "en", useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", string = (opts, extract)=>this.loc.extract(dt, opts, extract), formatOffset = (opts)=>{
            if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
                return "Z";
            }
            return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
        }, meridiem = ()=>knownEnglish ? meridiemForDateTime(dt) : string({
                hour: "numeric",
                hourCycle: "h12"
            }, "dayperiod"), month = (length, standalone)=>knownEnglish ? monthForDateTime(dt, length) : string(standalone ? {
                month: length
            } : {
                month: length,
                day: "numeric"
            }, "month"), weekday = (length, standalone)=>knownEnglish ? weekdayForDateTime(dt, length) : string(standalone ? {
                weekday: length
            } : {
                weekday: length,
                month: "long",
                day: "numeric"
            }, "weekday"), maybeMacro = (token)=>{
            const formatOpts = Formatter.macroTokenToFormatOpts(token);
            if (formatOpts) {
                return this.formatWithSystemDefault(dt, formatOpts);
            } else {
                return token;
            }
        }, era = (length)=>knownEnglish ? eraForDateTime(dt, length) : string({
                era: length
            }, "era"), tokenToString = (token)=>{
            // Where possible: https://cldr.unicode.org/translation/date-time/date-time-symbols
            switch(token){
                // ms
                case "S":
                    return this.num(dt.millisecond);
                case "u":
                // falls through
                case "SSS":
                    return this.num(dt.millisecond, 3);
                // seconds
                case "s":
                    return this.num(dt.second);
                case "ss":
                    return this.num(dt.second, 2);
                // fractional seconds
                case "uu":
                    return this.num(Math.floor(dt.millisecond / 10), 2);
                case "uuu":
                    return this.num(Math.floor(dt.millisecond / 100));
                // minutes
                case "m":
                    return this.num(dt.minute);
                case "mm":
                    return this.num(dt.minute, 2);
                // hours
                case "h":
                    return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
                case "hh":
                    return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
                case "H":
                    return this.num(dt.hour);
                case "HH":
                    return this.num(dt.hour, 2);
                // offset
                case "Z":
                    // like +6
                    return formatOffset({
                        format: "narrow",
                        allowZ: this.opts.allowZ
                    });
                case "ZZ":
                    // like +06:00
                    return formatOffset({
                        format: "short",
                        allowZ: this.opts.allowZ
                    });
                case "ZZZ":
                    // like +0600
                    return formatOffset({
                        format: "techie",
                        allowZ: this.opts.allowZ
                    });
                case "ZZZZ":
                    // like EST
                    return dt.zone.offsetName(dt.ts, {
                        format: "short",
                        locale: this.loc.locale
                    });
                case "ZZZZZ":
                    // like Eastern Standard Time
                    return dt.zone.offsetName(dt.ts, {
                        format: "long",
                        locale: this.loc.locale
                    });
                // zone
                case "z":
                    // like America/New_York
                    return dt.zoneName;
                // meridiems
                case "a":
                    return meridiem();
                // dates
                case "d":
                    return useDateTimeFormatter ? string({
                        day: "numeric"
                    }, "day") : this.num(dt.day);
                case "dd":
                    return useDateTimeFormatter ? string({
                        day: "2-digit"
                    }, "day") : this.num(dt.day, 2);
                // weekdays - standalone
                case "c":
                    // like 1
                    return this.num(dt.weekday);
                case "ccc":
                    // like 'Tues'
                    return weekday("short", true);
                case "cccc":
                    // like 'Tuesday'
                    return weekday("long", true);
                case "ccccc":
                    // like 'T'
                    return weekday("narrow", true);
                // weekdays - format
                case "E":
                    // like 1
                    return this.num(dt.weekday);
                case "EEE":
                    // like 'Tues'
                    return weekday("short", false);
                case "EEEE":
                    // like 'Tuesday'
                    return weekday("long", false);
                case "EEEEE":
                    // like 'T'
                    return weekday("narrow", false);
                // months - standalone
                case "L":
                    // like 1
                    return useDateTimeFormatter ? string({
                        month: "numeric",
                        day: "numeric"
                    }, "month") : this.num(dt.month);
                case "LL":
                    // like 01, doesn't seem to work
                    return useDateTimeFormatter ? string({
                        month: "2-digit",
                        day: "numeric"
                    }, "month") : this.num(dt.month, 2);
                case "LLL":
                    // like Jan
                    return month("short", true);
                case "LLLL":
                    // like January
                    return month("long", true);
                case "LLLLL":
                    // like J
                    return month("narrow", true);
                // months - format
                case "M":
                    // like 1
                    return useDateTimeFormatter ? string({
                        month: "numeric"
                    }, "month") : this.num(dt.month);
                case "MM":
                    // like 01
                    return useDateTimeFormatter ? string({
                        month: "2-digit"
                    }, "month") : this.num(dt.month, 2);
                case "MMM":
                    // like Jan
                    return month("short", false);
                case "MMMM":
                    // like January
                    return month("long", false);
                case "MMMMM":
                    // like J
                    return month("narrow", false);
                // years
                case "y":
                    // like 2014
                    return useDateTimeFormatter ? string({
                        year: "numeric"
                    }, "year") : this.num(dt.year);
                case "yy":
                    // like 14
                    return useDateTimeFormatter ? string({
                        year: "2-digit"
                    }, "year") : this.num(dt.year.toString().slice(-2), 2);
                case "yyyy":
                    // like 0012
                    return useDateTimeFormatter ? string({
                        year: "numeric"
                    }, "year") : this.num(dt.year, 4);
                case "yyyyyy":
                    // like 000012
                    return useDateTimeFormatter ? string({
                        year: "numeric"
                    }, "year") : this.num(dt.year, 6);
                // eras
                case "G":
                    // like AD
                    return era("short");
                case "GG":
                    // like Anno Domini
                    return era("long");
                case "GGGGG":
                    return era("narrow");
                case "kk":
                    return this.num(dt.weekYear.toString().slice(-2), 2);
                case "kkkk":
                    return this.num(dt.weekYear, 4);
                case "W":
                    return this.num(dt.weekNumber);
                case "WW":
                    return this.num(dt.weekNumber, 2);
                case "n":
                    return this.num(dt.localWeekNumber);
                case "nn":
                    return this.num(dt.localWeekNumber, 2);
                case "ii":
                    return this.num(dt.localWeekYear.toString().slice(-2), 2);
                case "iiii":
                    return this.num(dt.localWeekYear, 4);
                case "o":
                    return this.num(dt.ordinal);
                case "ooo":
                    return this.num(dt.ordinal, 3);
                case "q":
                    // like 1
                    return this.num(dt.quarter);
                case "qq":
                    // like 01
                    return this.num(dt.quarter, 2);
                case "X":
                    return this.num(Math.floor(dt.ts / 1000));
                case "x":
                    return this.num(dt.ts);
                default:
                    return maybeMacro(token);
            }
        };
        return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
    }
    formatDurationFromString(dur, fmt) {
        const invertLargest = this.opts.signMode === "negativeLargestOnly" ? -1 : 1;
        const tokenToField = (token)=>{
            switch(token[0]){
                case "S":
                    return "milliseconds";
                case "s":
                    return "seconds";
                case "m":
                    return "minutes";
                case "h":
                    return "hours";
                case "d":
                    return "days";
                case "w":
                    return "weeks";
                case "M":
                    return "months";
                case "y":
                    return "years";
                default:
                    return null;
            }
        }, tokenToString = (lildur, info)=>(token)=>{
                const mapped = tokenToField(token);
                if (mapped) {
                    const inversionFactor = info.isNegativeDuration && mapped !== info.largestUnit ? invertLargest : 1;
                    let signDisplay;
                    if (this.opts.signMode === "negativeLargestOnly" && mapped !== info.largestUnit) {
                        signDisplay = "never";
                    } else if (this.opts.signMode === "all") {
                        signDisplay = "always";
                    } else {
                        // "auto" and "negative" are the same, but "auto" has better support
                        signDisplay = "auto";
                    }
                    return this.num(lildur.get(mapped) * inversionFactor, token.length, signDisplay);
                } else {
                    return token;
                }
            }, tokens = Formatter.parseFormat(fmt), realTokens = tokens.reduce((found, { literal, val })=>literal ? found : found.concat(val), []), collapsed = dur.shiftTo(...realTokens.map(tokenToField).filter((t)=>t)), durationInfo = {
            isNegativeDuration: collapsed < 0,
            // this relies on "collapsed" being based on "shiftTo", which builds up the object
            // in order
            largestUnit: Object.keys(collapsed.values)[0]
        };
        return stringifyTokens(tokens, tokenToString(collapsed, durationInfo));
    }
}
/*
 * This file handles parsing for well-specified formats. Here's how it works:
 * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
 * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
 * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
 * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
 * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
 * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
 */ const ianaRegex = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function combineRegexes(...regexes) {
    const full = regexes.reduce((f, r)=>f + r.source, "");
    return RegExp(`^${full}$`);
}
function combineExtractors(...extractors) {
    return (m)=>extractors.reduce(([mergedVals, mergedZone, cursor], ex)=>{
            const [val, zone, next] = ex(m, cursor);
            return [
                {
                    ...mergedVals,
                    ...val
                },
                zone || mergedZone,
                next
            ];
        }, [
            {},
            null,
            1
        ]).slice(0, 2);
}
function parse(s, ...patterns) {
    if (s == null) {
        return [
            null,
            null
        ];
    }
    for (const [regex, extractor] of patterns){
        const m = regex.exec(s);
        if (m) {
            return extractor(m);
        }
    }
    return [
        null,
        null
    ];
}
function simpleParse(...keys) {
    return (match, cursor)=>{
        const ret = {};
        let i;
        for(i = 0; i < keys.length; i++){
            ret[keys[i]] = parseInteger(match[cursor + i]);
        }
        return [
            ret,
            null,
            cursor + i
        ];
    };
}
// ISO and SQL parsing
const offsetRegex = /(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/;
const isoExtendedZone = `(?:${offsetRegex.source}?(?:\\[(${ianaRegex.source})\\])?)?`;
const isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
const isoTimeRegex = RegExp(`${isoTimeBaseRegex.source}${isoExtendedZone}`);
const isoTimeExtensionRegex = RegExp(`(?:[Tt]${isoTimeRegex.source})?`);
const isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
const isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/;
const isoOrdinalRegex = /(\d{4})-?(\d{3})/;
const extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay");
const extractISOOrdinalData = simpleParse("year", "ordinal");
const sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/; // dumbed-down version of the ISO one
const sqlTimeRegex = RegExp(`${isoTimeBaseRegex.source} ?(?:${offsetRegex.source}|(${ianaRegex.source}))?`);
const sqlTimeExtensionRegex = RegExp(`(?: ${sqlTimeRegex.source})?`);
function int(match, pos, fallback) {
    const m = match[pos];
    return isUndefined(m) ? fallback : parseInteger(m);
}
function extractISOYmd(match, cursor) {
    const item = {
        year: int(match, cursor),
        month: int(match, cursor + 1, 1),
        day: int(match, cursor + 2, 1)
    };
    return [
        item,
        null,
        cursor + 3
    ];
}
function extractISOTime(match, cursor) {
    const item = {
        hours: int(match, cursor, 0),
        minutes: int(match, cursor + 1, 0),
        seconds: int(match, cursor + 2, 0),
        milliseconds: parseMillis(match[cursor + 3])
    };
    return [
        item,
        null,
        cursor + 4
    ];
}
function extractISOOffset(match, cursor) {
    const local = !match[cursor] && !match[cursor + 1], fullOffset = signedOffset(match[cursor + 1], match[cursor + 2]), zone = local ? null : FixedOffsetZone.instance(fullOffset);
    return [
        {},
        zone,
        cursor + 3
    ];
}
function extractIANAZone(match, cursor) {
    const zone = match[cursor] ? IANAZone.create(match[cursor]) : null;
    return [
        {},
        zone,
        cursor + 1
    ];
}
// ISO time parsing
const isoTimeOnly = RegExp(`^T?${isoTimeBaseRegex.source}$`);
// ISO duration parsing
const isoDuration = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function extractISODuration(match) {
    const [s, yearStr, monthStr, weekStr, dayStr, hourStr, minuteStr, secondStr, millisecondsStr] = match;
    const hasNegativePrefix = s[0] === "-";
    const negativeSeconds = secondStr && secondStr[0] === "-";
    const maybeNegate = (num, force = false)=>num !== undefined && (force || num && hasNegativePrefix) ? -num : num;
    return [
        {
            years: maybeNegate(parseFloating(yearStr)),
            months: maybeNegate(parseFloating(monthStr)),
            weeks: maybeNegate(parseFloating(weekStr)),
            days: maybeNegate(parseFloating(dayStr)),
            hours: maybeNegate(parseFloating(hourStr)),
            minutes: maybeNegate(parseFloating(minuteStr)),
            seconds: maybeNegate(parseFloating(secondStr), secondStr === "-0"),
            milliseconds: maybeNegate(parseMillis(millisecondsStr), negativeSeconds)
        }
    ];
}
// These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that
const obsOffsets = {
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
};
function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    const result = {
        year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
        month: monthsShort.indexOf(monthStr) + 1,
        day: parseInteger(dayStr),
        hour: parseInteger(hourStr),
        minute: parseInteger(minuteStr)
    };
    if (secondStr) result.second = parseInteger(secondStr);
    if (weekdayStr) {
        result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
    }
    return result;
}
// RFC 2822/5322
const rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function extractRFC2822(match) {
    const [, weekdayStr, dayStr, monthStr, yearStr, hourStr, minuteStr, secondStr, obsOffset, milOffset, offHourStr, offMinuteStr] = match, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
    let offset;
    if (obsOffset) {
        offset = obsOffsets[obsOffset];
    } else if (milOffset) {
        offset = 0;
    } else {
        offset = signedOffset(offHourStr, offMinuteStr);
    }
    return [
        result,
        new FixedOffsetZone(offset)
    ];
}
function preprocessRFC2822(s) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return s.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
// http date
const rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, rfc850 = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function extractRFC1123Or850(match) {
    const [, weekdayStr, dayStr, monthStr, yearStr, hourStr, minuteStr, secondStr] = match, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
    return [
        result,
        FixedOffsetZone.utcInstance
    ];
}
function extractASCII(match) {
    const [, weekdayStr, monthStr, dayStr, hourStr, minuteStr, secondStr, yearStr] = match, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
    return [
        result,
        FixedOffsetZone.utcInstance
    ];
}
const isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
const isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
const isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
const isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
const extractISOYmdTimeAndOffset = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone);
const extractISOWeekTimeAndOffset = combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset, extractIANAZone);
const extractISOOrdinalDateAndTime = combineExtractors(extractISOOrdinalData, extractISOTime, extractISOOffset, extractIANAZone);
const extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
/*
 * @private
 */ function parseISODate(s) {
    return parse(s, [
        isoYmdWithTimeExtensionRegex,
        extractISOYmdTimeAndOffset
    ], [
        isoWeekWithTimeExtensionRegex,
        extractISOWeekTimeAndOffset
    ], [
        isoOrdinalWithTimeExtensionRegex,
        extractISOOrdinalDateAndTime
    ], [
        isoTimeCombinedRegex,
        extractISOTimeAndOffset
    ]);
}
function parseRFC2822Date(s) {
    return parse(preprocessRFC2822(s), [
        rfc2822,
        extractRFC2822
    ]);
}
function parseHTTPDate(s) {
    return parse(s, [
        rfc1123,
        extractRFC1123Or850
    ], [
        rfc850,
        extractRFC1123Or850
    ], [
        ascii,
        extractASCII
    ]);
}
function parseISODuration(s) {
    return parse(s, [
        isoDuration,
        extractISODuration
    ]);
}
const extractISOTimeOnly = combineExtractors(extractISOTime);
function parseISOTimeOnly(s) {
    return parse(s, [
        isoTimeOnly,
        extractISOTimeOnly
    ]);
}
const sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
const sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
const extractISOTimeOffsetAndIANAZone = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
function parseSQL(s) {
    return parse(s, [
        sqlYmdWithTimeExtensionRegex,
        extractISOYmdTimeAndOffset
    ], [
        sqlTimeCombinedRegex,
        extractISOTimeOffsetAndIANAZone
    ]);
}
const INVALID$2 = "Invalid Duration";
// unit conversion constants
const lowOrderMatrix = {
    weeks: {
        days: 7,
        hours: 7 * 24,
        minutes: 7 * 24 * 60,
        seconds: 7 * 24 * 60 * 60,
        milliseconds: 7 * 24 * 60 * 60 * 1000
    },
    days: {
        hours: 24,
        minutes: 24 * 60,
        seconds: 24 * 60 * 60,
        milliseconds: 24 * 60 * 60 * 1000
    },
    hours: {
        minutes: 60,
        seconds: 60 * 60,
        milliseconds: 60 * 60 * 1000
    },
    minutes: {
        seconds: 60,
        milliseconds: 60 * 1000
    },
    seconds: {
        milliseconds: 1000
    }
}, casualMatrix = {
    years: {
        quarters: 4,
        months: 12,
        weeks: 52,
        days: 365,
        hours: 365 * 24,
        minutes: 365 * 24 * 60,
        seconds: 365 * 24 * 60 * 60,
        milliseconds: 365 * 24 * 60 * 60 * 1000
    },
    quarters: {
        months: 3,
        weeks: 13,
        days: 91,
        hours: 91 * 24,
        minutes: 91 * 24 * 60,
        seconds: 91 * 24 * 60 * 60,
        milliseconds: 91 * 24 * 60 * 60 * 1000
    },
    months: {
        weeks: 4,
        days: 30,
        hours: 30 * 24,
        minutes: 30 * 24 * 60,
        seconds: 30 * 24 * 60 * 60,
        milliseconds: 30 * 24 * 60 * 60 * 1000
    },
    ...lowOrderMatrix
}, daysInYearAccurate = 146097.0 / 400, daysInMonthAccurate = 146097.0 / 4800, accurateMatrix = {
    years: {
        quarters: 4,
        months: 12,
        weeks: daysInYearAccurate / 7,
        days: daysInYearAccurate,
        hours: daysInYearAccurate * 24,
        minutes: daysInYearAccurate * 24 * 60,
        seconds: daysInYearAccurate * 24 * 60 * 60,
        milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000
    },
    quarters: {
        months: 3,
        weeks: daysInYearAccurate / 28,
        days: daysInYearAccurate / 4,
        hours: daysInYearAccurate * 24 / 4,
        minutes: daysInYearAccurate * 24 * 60 / 4,
        seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
        milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000 / 4
    },
    months: {
        weeks: daysInMonthAccurate / 7,
        days: daysInMonthAccurate,
        hours: daysInMonthAccurate * 24,
        minutes: daysInMonthAccurate * 24 * 60,
        seconds: daysInMonthAccurate * 24 * 60 * 60,
        milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1000
    },
    ...lowOrderMatrix
};
// units ordered by size
const orderedUnits$1 = [
    "years",
    "quarters",
    "months",
    "weeks",
    "days",
    "hours",
    "minutes",
    "seconds",
    "milliseconds"
];
const reverseUnits = orderedUnits$1.slice(0).reverse();
// clone really means "create another instance just like this one, but with these changes"
function clone$1(dur, alts, clear = false) {
    // deep merge for vals
    const conf = {
        values: clear ? alts.values : {
            ...dur.values,
            ...alts.values || {}
        },
        loc: dur.loc.clone(alts.loc),
        conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy,
        matrix: alts.matrix || dur.matrix
    };
    return new Duration(conf);
}
function durationToMillis(matrix, vals) {
    let sum = vals.milliseconds ?? 0;
    for (const unit of reverseUnits.slice(1)){
        if (vals[unit]) {
            sum += vals[unit] * matrix[unit]["milliseconds"];
        }
    }
    return sum;
}
// NB: mutates parameters
function normalizeValues(matrix, vals) {
    // the logic below assumes the overall value of the duration is positive
    // if this is not the case, factor is used to make it so
    const factor = durationToMillis(matrix, vals) < 0 ? -1 : 1;
    orderedUnits$1.reduceRight((previous, current)=>{
        if (!isUndefined(vals[current])) {
            if (previous) {
                const previousVal = vals[previous] * factor;
                const conv = matrix[current][previous];
                // if (previousVal < 0):
                // lower order unit is negative (e.g. { years: 2, days: -2 })
                // normalize this by reducing the higher order unit by the appropriate amount
                // and increasing the lower order unit
                // this can never make the higher order unit negative, because this function only operates
                // on positive durations, so the amount of time represented by the lower order unit cannot
                // be larger than the higher order unit
                // else:
                // lower order unit is positive (e.g. { years: 2, days: 450 } or { years: -2, days: 450 })
                // in this case we attempt to convert as much as possible from the lower order unit into
                // the higher order one
                //
                // Math.floor takes care of both of these cases, rounding away from 0
                // if previousVal < 0 it makes the absolute value larger
                // if previousVal >= it makes the absolute value smaller
                const rollUp = Math.floor(previousVal / conv);
                vals[current] += rollUp * factor;
                vals[previous] -= rollUp * conv * factor;
            }
            return current;
        } else {
            return previous;
        }
    }, null);
    // try to convert any decimals into smaller units if possible
    // for example for { years: 2.5, days: 0, seconds: 0 } we want to get { years: 2, days: 182, hours: 12 }
    orderedUnits$1.reduce((previous, current)=>{
        if (!isUndefined(vals[current])) {
            if (previous) {
                const fraction = vals[previous] % 1;
                vals[previous] -= fraction;
                vals[current] += fraction * matrix[previous][current];
            }
            return current;
        } else {
            return previous;
        }
    }, null);
}
// Remove all properties with a value of 0 from an object
function removeZeroes(vals) {
    const newVals = {};
    for (const [key, value] of Object.entries(vals)){
        if (value !== 0) {
            newVals[key] = value;
        }
    }
    return newVals;
}
/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime#plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration.fromMillis}, {@link Duration.fromObject}, or {@link Duration.fromISO}.
 * * **Unit values** See the {@link Duration#years}, {@link Duration#months}, {@link Duration#weeks}, {@link Duration#days}, {@link Duration#hours}, {@link Duration#minutes}, {@link Duration#seconds}, {@link Duration#milliseconds} accessors.
 * * **Configuration** See  {@link Duration#locale} and {@link Duration#numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link Duration#plus}, {@link Duration#minus}, {@link Duration#normalize}, {@link Duration#set}, {@link Duration#reconfigure}, {@link Duration#shiftTo}, and {@link Duration#negate}.
 * * **Output** To convert the Duration into other representations, see {@link Duration#as}, {@link Duration#toISO}, {@link Duration#toFormat}, and {@link Duration#toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */ class Duration {
    /**
   * @private
   */ constructor(config){
        const accurate = config.conversionAccuracy === "longterm" || false;
        let matrix = accurate ? accurateMatrix : casualMatrix;
        if (config.matrix) {
            matrix = config.matrix;
        }
        /**
     * @access private
     */ this.values = config.values;
        /**
     * @access private
     */ this.loc = config.loc || Locale.create();
        /**
     * @access private
     */ this.conversionAccuracy = accurate ? "longterm" : "casual";
        /**
     * @access private
     */ this.invalid = config.invalid || null;
        /**
     * @access private
     */ this.matrix = matrix;
        /**
     * @access private
     */ this.isLuxonDuration = true;
    }
    /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */ static fromMillis(count, opts) {
        return Duration.fromObject({
            milliseconds: count
        }, opts);
    }
    /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the custom conversion system to use
   * @return {Duration}
   */ static fromObject(obj, opts = {}) {
        if (obj == null || typeof obj !== "object") {
            throw new InvalidArgumentError(`Duration.fromObject: argument expected to be an object, got ${obj === null ? "null" : typeof obj}`);
        }
        return new Duration({
            values: normalizeObject(obj, Duration.normalizeUnit),
            loc: Locale.fromObject(opts),
            conversionAccuracy: opts.conversionAccuracy,
            matrix: opts.matrix
        });
    }
    /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */ static fromDurationLike(durationLike) {
        if (isNumber(durationLike)) {
            return Duration.fromMillis(durationLike);
        } else if (Duration.isDuration(durationLike)) {
            return durationLike;
        } else if (typeof durationLike === "object") {
            return Duration.fromObject(durationLike);
        } else {
            throw new InvalidArgumentError(`Unknown duration argument ${durationLike} of type ${typeof durationLike}`);
        }
    }
    /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the preset conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */ static fromISO(text, opts) {
        const [parsed] = parseISODuration(text);
        if (parsed) {
            return Duration.fromObject(parsed, opts);
        } else {
            return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
        }
    }
    /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */ static fromISOTime(text, opts) {
        const [parsed] = parseISOTimeOnly(text);
        if (parsed) {
            return Duration.fromObject(parsed, opts);
        } else {
            return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
        }
    }
    /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */ static invalid(reason, explanation = null) {
        if (!reason) {
            throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
        }
        const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
        if (Settings.throwOnInvalid) {
            throw new InvalidDurationError(invalid);
        } else {
            return new Duration({
                invalid
            });
        }
    }
    /**
   * @private
   */ static normalizeUnit(unit) {
        const normalized = {
            year: "years",
            years: "years",
            quarter: "quarters",
            quarters: "quarters",
            month: "months",
            months: "months",
            week: "weeks",
            weeks: "weeks",
            day: "days",
            days: "days",
            hour: "hours",
            hours: "hours",
            minute: "minutes",
            minutes: "minutes",
            second: "seconds",
            seconds: "seconds",
            millisecond: "milliseconds",
            milliseconds: "milliseconds"
        }[unit ? unit.toLowerCase() : unit];
        if (!normalized) throw new InvalidUnitError(unit);
        return normalized;
    }
    /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */ static isDuration(o) {
        return o && o.isLuxonDuration || false;
    }
    /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */ get locale() {
        return this.isValid ? this.loc.locale : null;
    }
    /**
   * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
   *
   * @type {string}
   */ get numberingSystem() {
        return this.isValid ? this.loc.numberingSystem : null;
    }
    /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `w` for weeks
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * Tokens can be escaped by wrapping with single quotes.
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @param {'negative'|'all'|'negativeLargestOnly'} [opts.signMode=negative] - How to handle signs
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @example Duration.fromObject({ days: 6, seconds: 2 }).toFormat("d s", { signMode: "all" }) //=> "+6 +2"
   * @example Duration.fromObject({ days: -6, seconds: -2 }).toFormat("d s", { signMode: "all" }) //=> "-6 -2"
   * @example Duration.fromObject({ days: -6, seconds: -2 }).toFormat("d s", { signMode: "negativeLargestOnly" }) //=> "-6 2"
   * @return {string}
   */ toFormat(fmt, opts = {}) {
        // reverse-compat since 1.2; we always round down now, never up, and we do it by default
        const fmtOpts = {
            ...opts,
            floor: opts.round !== false && opts.floor !== false
        };
        return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID$2;
    }
    /**
   * Returns a string representation of a Duration with all units included.
   * To modify its behavior, use `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
   * @param {Object} opts - Formatting options. Accepts the same keys as the options parameter of the native `Intl.NumberFormat` constructor, as well as `listStyle`.
   * @param {string} [opts.listStyle='narrow'] - How to format the merged list. Corresponds to the `style` property of the options parameter of the native `Intl.ListFormat` constructor.
   * @param {boolean} [opts.showZeros=true] - Show all units previously used by the duration even if they are zero
   * @example
   * ```js
   * var dur = Duration.fromObject({ months: 1, weeks: 0, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 month, 0 weeks, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 month, 0 weeks, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 mth, 0 wks, 5 hr, 6 min'
   * dur.toHuman({ showZeros: false }) //=> '1 month, 5 hours, 6 minutes'
   * ```
   */ toHuman(opts = {}) {
        if (!this.isValid) return INVALID$2;
        const showZeros = opts.showZeros !== false;
        const l = orderedUnits$1.map((unit)=>{
            const val = this.values[unit];
            if (isUndefined(val) || val === 0 && !showZeros) {
                return null;
            }
            return this.loc.numberFormatter({
                style: "unit",
                unitDisplay: "long",
                ...opts,
                unit: unit.slice(0, -1)
            }).format(val);
        }).filter((n)=>n);
        return this.loc.listFormatter({
            type: "conjunction",
            style: opts.listStyle || "narrow",
            ...opts
        }).format(l);
    }
    /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */ toObject() {
        if (!this.isValid) return {};
        return {
            ...this.values
        };
    }
    /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */ toISO() {
        // we could use the formatter, but this is an easier way to get the minimum string
        if (!this.isValid) return null;
        let s = "P";
        if (this.years !== 0) s += this.years + "Y";
        if (this.months !== 0 || this.quarters !== 0) s += this.months + this.quarters * 3 + "M";
        if (this.weeks !== 0) s += this.weeks + "W";
        if (this.days !== 0) s += this.days + "D";
        if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) s += "T";
        if (this.hours !== 0) s += this.hours + "H";
        if (this.minutes !== 0) s += this.minutes + "M";
        if (this.seconds !== 0 || this.milliseconds !== 0) // this will handle "floating point madness" by removing extra decimal places
        // https://stackoverflow.com/questions/588004/is-floating-point-math-broken
        s += roundTo(this.seconds + this.milliseconds / 1000, 3) + "S";
        if (s === "P") s += "T0S";
        return s;
    }
    /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */ toISOTime(opts = {}) {
        if (!this.isValid) return null;
        const millis = this.toMillis();
        if (millis < 0 || millis >= 86400000) return null;
        opts = {
            suppressMilliseconds: false,
            suppressSeconds: false,
            includePrefix: false,
            format: "extended",
            ...opts,
            includeOffset: false
        };
        const dateTime = DateTime.fromMillis(millis, {
            zone: "UTC"
        });
        return dateTime.toISOTime(opts);
    }
    /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */ toJSON() {
        return this.toISO();
    }
    /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */ toString() {
        return this.toISO();
    }
    /**
   * Returns a string representation of this Duration appropriate for the REPL.
   * @return {string}
   */ [Symbol.for("nodejs.util.inspect.custom")]() {
        if (this.isValid) {
            return `Duration { values: ${JSON.stringify(this.values)} }`;
        } else {
            return `Duration { Invalid, reason: ${this.invalidReason} }`;
        }
    }
    /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */ toMillis() {
        if (!this.isValid) return NaN;
        return durationToMillis(this.matrix, this.values);
    }
    /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */ valueOf() {
        return this.toMillis();
    }
    /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */ plus(duration) {
        if (!this.isValid) return this;
        const dur = Duration.fromDurationLike(duration), result = {};
        for (const k of orderedUnits$1){
            if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
                result[k] = dur.get(k) + this.get(k);
            }
        }
        return clone$1(this, {
            values: result
        }, true);
    }
    /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */ minus(duration) {
        if (!this.isValid) return this;
        const dur = Duration.fromDurationLike(duration);
        return this.plus(dur.negate());
    }
    /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */ mapUnits(fn) {
        if (!this.isValid) return this;
        const result = {};
        for (const k of Object.keys(this.values)){
            result[k] = asNumber(fn(this.values[k], k));
        }
        return clone$1(this, {
            values: result
        }, true);
    }
    /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */ get(unit) {
        return this[Duration.normalizeUnit(unit)];
    }
    /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */ set(values) {
        if (!this.isValid) return this;
        const mixed = {
            ...this.values,
            ...normalizeObject(values, Duration.normalizeUnit)
        };
        return clone$1(this, {
            values: mixed
        });
    }
    /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */ reconfigure({ locale, numberingSystem, conversionAccuracy, matrix } = {}) {
        const loc = this.loc.clone({
            locale,
            numberingSystem
        });
        const opts = {
            loc,
            matrix,
            conversionAccuracy
        };
        return clone$1(this, opts);
    }
    /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */ as(unit) {
        return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
    }
    /**
   * Reduce this Duration to its canonical representation in its current units.
   * Assuming the overall value of the Duration is positive, this means:
   * - excessive values for lower-order units are converted to higher-order units (if possible, see first and second example)
   * - negative lower-order units are converted to higher order units (there must be such a higher order unit, otherwise
   *   the overall value would be negative, see third example)
   * - fractional values for higher-order units are converted to lower-order units (if possible, see fourth example)
   *
   * If the overall value is negative, the result of this method is equivalent to `this.negate().normalize().negate()`.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ days: 5000 }).normalize().toObject() //=> { days: 5000 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @example Duration.fromObject({ years: 2.5, days: 0, hours: 0 }).normalize().toObject() //=> { years: 2, days: 182, hours: 12 }
   * @return {Duration}
   */ normalize() {
        if (!this.isValid) return this;
        const vals = this.toObject();
        normalizeValues(this.matrix, vals);
        return clone$1(this, {
            values: vals
        }, true);
    }
    /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */ rescale() {
        if (!this.isValid) return this;
        const vals = removeZeroes(this.normalize().shiftToAll().toObject());
        return clone$1(this, {
            values: vals
        }, true);
    }
    /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */ shiftTo(...units) {
        if (!this.isValid) return this;
        if (units.length === 0) {
            return this;
        }
        units = units.map((u)=>Duration.normalizeUnit(u));
        const built = {}, accumulated = {}, vals = this.toObject();
        let lastUnit;
        for (const k of orderedUnits$1){
            if (units.indexOf(k) >= 0) {
                lastUnit = k;
                let own = 0;
                // anything we haven't boiled down yet should get boiled to this unit
                for(const ak in accumulated){
                    own += this.matrix[ak][k] * accumulated[ak];
                    accumulated[ak] = 0;
                }
                // plus anything that's already in this unit
                if (isNumber(vals[k])) {
                    own += vals[k];
                }
                // only keep the integer part for now in the hopes of putting any decimal part
                // into a smaller unit later
                const i = Math.trunc(own);
                built[k] = i;
                accumulated[k] = (own * 1000 - i * 1000) / 1000;
            // otherwise, keep it in the wings to boil it later
            } else if (isNumber(vals[k])) {
                accumulated[k] = vals[k];
            }
        }
        // anything leftover becomes the decimal for the last unit
        // lastUnit must be defined since units is not empty
        for(const key in accumulated){
            if (accumulated[key] !== 0) {
                built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
            }
        }
        normalizeValues(this.matrix, built);
        return clone$1(this, {
            values: built
        }, true);
    }
    /**
   * Shift this Duration to all available units.
   * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
   * @return {Duration}
   */ shiftToAll() {
        if (!this.isValid) return this;
        return this.shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds");
    }
    /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */ negate() {
        if (!this.isValid) return this;
        const negated = {};
        for (const k of Object.keys(this.values)){
            negated[k] = this.values[k] === 0 ? 0 : -this.values[k];
        }
        return clone$1(this, {
            values: negated
        }, true);
    }
    /**
   * Removes all units with values equal to 0 from this Duration.
   * @example Duration.fromObject({ years: 2, days: 0, hours: 0, minutes: 0 }).removeZeros().toObject() //=> { years: 2 }
   * @return {Duration}
   */ removeZeros() {
        if (!this.isValid) return this;
        const vals = removeZeroes(this.values);
        return clone$1(this, {
            values: vals
        }, true);
    }
    /**
   * Get the years.
   * @type {number}
   */ get years() {
        return this.isValid ? this.values.years || 0 : NaN;
    }
    /**
   * Get the quarters.
   * @type {number}
   */ get quarters() {
        return this.isValid ? this.values.quarters || 0 : NaN;
    }
    /**
   * Get the months.
   * @type {number}
   */ get months() {
        return this.isValid ? this.values.months || 0 : NaN;
    }
    /**
   * Get the weeks
   * @type {number}
   */ get weeks() {
        return this.isValid ? this.values.weeks || 0 : NaN;
    }
    /**
   * Get the days.
   * @type {number}
   */ get days() {
        return this.isValid ? this.values.days || 0 : NaN;
    }
    /**
   * Get the hours.
   * @type {number}
   */ get hours() {
        return this.isValid ? this.values.hours || 0 : NaN;
    }
    /**
   * Get the minutes.
   * @type {number}
   */ get minutes() {
        return this.isValid ? this.values.minutes || 0 : NaN;
    }
    /**
   * Get the seconds.
   * @return {number}
   */ get seconds() {
        return this.isValid ? this.values.seconds || 0 : NaN;
    }
    /**
   * Get the milliseconds.
   * @return {number}
   */ get milliseconds() {
        return this.isValid ? this.values.milliseconds || 0 : NaN;
    }
    /**
   * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
   * on invalid DateTimes or Intervals.
   * @return {boolean}
   */ get isValid() {
        return this.invalid === null;
    }
    /**
   * Returns an error code if this Duration became invalid, or null if the Duration is valid
   * @return {string}
   */ get invalidReason() {
        return this.invalid ? this.invalid.reason : null;
    }
    /**
   * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
   * @type {string}
   */ get invalidExplanation() {
        return this.invalid ? this.invalid.explanation : null;
    }
    /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */ equals(other) {
        if (!this.isValid || !other.isValid) {
            return false;
        }
        if (!this.loc.equals(other.loc)) {
            return false;
        }
        function eq(v1, v2) {
            // Consider 0 and undefined as equal
            if (v1 === undefined || v1 === 0) return v2 === undefined || v2 === 0;
            return v1 === v2;
        }
        for (const u of orderedUnits$1){
            if (!eq(this.values[u], other.values[u])) {
                return false;
            }
        }
        return true;
    }
}
const INVALID$1 = "Invalid Interval";
// checks if the start is equal to or before the end
function validateStartEnd(start, end) {
    if (!start || !start.isValid) {
        return Interval.invalid("missing or invalid start");
    } else if (!end || !end.isValid) {
        return Interval.invalid("missing or invalid end");
    } else if (end < start) {
        return Interval.invalid("end before start", `The end of an interval must be after its start, but you had start=${start.toISO()} and end=${end.toISO()}`);
    } else {
        return null;
    }
}
/**
 * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
 *
 * Here is a brief overview of the most commonly used methods and getters in Interval:
 *
 * * **Creation** To create an Interval, use {@link Interval.fromDateTimes}, {@link Interval.after}, {@link Interval.before}, or {@link Interval.fromISO}.
 * * **Accessors** Use {@link Interval#start} and {@link Interval#end} to get the start and end.
 * * **Interrogation** To analyze the Interval, use {@link Interval#count}, {@link Interval#length}, {@link Interval#hasSame}, {@link Interval#contains}, {@link Interval#isAfter}, or {@link Interval#isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link Interval#set}, {@link Interval#splitAt}, {@link Interval#splitBy}, {@link Interval#divideEqually}, {@link Interval.merge}, {@link Interval.xor}, {@link Interval#union}, {@link Interval#intersection}, or {@link Interval#difference}.
 * * **Comparison** To compare this Interval to another one, use {@link Interval#equals}, {@link Interval#overlaps}, {@link Interval#abutsStart}, {@link Interval#abutsEnd}, {@link Interval#engulfs}
 * * **Output** To convert the Interval into other representations, see {@link Interval#toString}, {@link Interval#toLocaleString}, {@link Interval#toISO}, {@link Interval#toISODate}, {@link Interval#toISOTime}, {@link Interval#toFormat}, and {@link Interval#toDuration}.
 */ class Interval {
    /**
   * @private
   */ constructor(config){
        /**
     * @access private
     */ this.s = config.start;
        /**
     * @access private
     */ this.e = config.end;
        /**
     * @access private
     */ this.invalid = config.invalid || null;
        /**
     * @access private
     */ this.isLuxonInterval = true;
    }
    /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */ static invalid(reason, explanation = null) {
        if (!reason) {
            throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
        }
        const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
        if (Settings.throwOnInvalid) {
            throw new InvalidIntervalError(invalid);
        } else {
            return new Interval({
                invalid
            });
        }
    }
    /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */ static fromDateTimes(start, end) {
        const builtStart = friendlyDateTime(start), builtEnd = friendlyDateTime(end);
        const validateError = validateStartEnd(builtStart, builtEnd);
        if (validateError == null) {
            return new Interval({
                start: builtStart,
                end: builtEnd
            });
        } else {
            return validateError;
        }
    }
    /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */ static after(start, duration) {
        const dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(start);
        return Interval.fromDateTimes(dt, dt.plus(dur));
    }
    /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */ static before(end, duration) {
        const dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(end);
        return Interval.fromDateTimes(dt.minus(dur), dt);
    }
    /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */ static fromISO(text, opts) {
        const [s, e] = (text || "").split("/", 2);
        if (s && e) {
            let start, startIsValid;
            try {
                start = DateTime.fromISO(s, opts);
                startIsValid = start.isValid;
            } catch (e) {
                startIsValid = false;
            }
            let end, endIsValid;
            try {
                end = DateTime.fromISO(e, opts);
                endIsValid = end.isValid;
            } catch (e) {
                endIsValid = false;
            }
            if (startIsValid && endIsValid) {
                return Interval.fromDateTimes(start, end);
            }
            if (startIsValid) {
                const dur = Duration.fromISO(e, opts);
                if (dur.isValid) {
                    return Interval.after(start, dur);
                }
            } else if (endIsValid) {
                const dur = Duration.fromISO(s, opts);
                if (dur.isValid) {
                    return Interval.before(end, dur);
                }
            }
        }
        return Interval.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
    /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */ static isInterval(o) {
        return o && o.isLuxonInterval || false;
    }
    /**
   * Returns the start of the Interval
   * @type {DateTime}
   */ get start() {
        return this.isValid ? this.s : null;
    }
    /**
   * Returns the end of the Interval. This is the first instant which is not part of the interval
   * (Interval is half-open).
   * @type {DateTime}
   */ get end() {
        return this.isValid ? this.e : null;
    }
    /**
   * Returns the last DateTime included in the interval (since end is not part of the interval)
   * @type {DateTime}
   */ get lastDateTime() {
        return this.isValid ? this.e ? this.e.minus(1) : null : null;
    }
    /**
   * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
   * @type {boolean}
   */ get isValid() {
        return this.invalidReason === null;
    }
    /**
   * Returns an error code if this Interval is invalid, or null if the Interval is valid
   * @type {string}
   */ get invalidReason() {
        return this.invalid ? this.invalid.reason : null;
    }
    /**
   * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
   * @type {string}
   */ get invalidExplanation() {
        return this.invalid ? this.invalid.explanation : null;
    }
    /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */ length(unit = "milliseconds") {
        return this.isValid ? this.toDuration(...[
            unit
        ]).get(unit) : NaN;
    }
    /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; this operation will always use the locale of the start DateTime
   * @return {number}
   */ count(unit = "milliseconds", opts) {
        if (!this.isValid) return NaN;
        const start = this.start.startOf(unit, opts);
        let end;
        if (opts?.useLocaleWeeks) {
            end = this.end.reconfigure({
                locale: start.locale
            });
        } else {
            end = this.end;
        }
        end = end.startOf(unit, opts);
        return Math.floor(end.diff(start, unit).get(unit)) + (end.valueOf() !== this.end.valueOf());
    }
    /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */ hasSame(unit) {
        return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
    }
    /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */ isEmpty() {
        return this.s.valueOf() === this.e.valueOf();
    }
    /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */ isAfter(dateTime) {
        if (!this.isValid) return false;
        return this.s > dateTime;
    }
    /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */ isBefore(dateTime) {
        if (!this.isValid) return false;
        return this.e <= dateTime;
    }
    /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */ contains(dateTime) {
        if (!this.isValid) return false;
        return this.s <= dateTime && this.e > dateTime;
    }
    /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */ set({ start, end } = {}) {
        if (!this.isValid) return this;
        return Interval.fromDateTimes(start || this.s, end || this.e);
    }
    /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */ splitAt(...dateTimes) {
        if (!this.isValid) return [];
        const sorted = dateTimes.map(friendlyDateTime).filter((d)=>this.contains(d)).sort((a, b)=>a.toMillis() - b.toMillis()), results = [];
        let { s } = this, i = 0;
        while(s < this.e){
            const added = sorted[i] || this.e, next = +added > +this.e ? this.e : added;
            results.push(Interval.fromDateTimes(s, next));
            s = next;
            i += 1;
        }
        return results;
    }
    /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */ splitBy(duration) {
        const dur = Duration.fromDurationLike(duration);
        if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
            return [];
        }
        let { s } = this, idx = 1, next;
        const results = [];
        while(s < this.e){
            const added = this.start.plus(dur.mapUnits((x)=>x * idx));
            next = +added > +this.e ? this.e : added;
            results.push(Interval.fromDateTimes(s, next));
            s = next;
            idx += 1;
        }
        return results;
    }
    /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */ divideEqually(numberOfParts) {
        if (!this.isValid) return [];
        return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
    }
    /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */ overlaps(other) {
        return this.e > other.s && this.s < other.e;
    }
    /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */ abutsStart(other) {
        if (!this.isValid) return false;
        return +this.e === +other.s;
    }
    /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */ abutsEnd(other) {
        if (!this.isValid) return false;
        return +other.e === +this.s;
    }
    /**
   * Returns true if this Interval fully contains the specified Interval, specifically if the intersect (of this Interval and the other Interval) is equal to the other Interval; false otherwise.
   * @param {Interval} other
   * @return {boolean}
   */ engulfs(other) {
        if (!this.isValid) return false;
        return this.s <= other.s && this.e >= other.e;
    }
    /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */ equals(other) {
        if (!this.isValid || !other.isValid) {
            return false;
        }
        return this.s.equals(other.s) && this.e.equals(other.e);
    }
    /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */ intersection(other) {
        if (!this.isValid) return this;
        const s = this.s > other.s ? this.s : other.s, e = this.e < other.e ? this.e : other.e;
        if (s >= e) {
            return null;
        } else {
            return Interval.fromDateTimes(s, e);
        }
    }
    /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */ union(other) {
        if (!this.isValid) return this;
        const s = this.s < other.s ? this.s : other.s, e = this.e > other.e ? this.e : other.e;
        return Interval.fromDateTimes(s, e);
    }
    /**
   * Merge an array of Intervals into an equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * The resulting array will contain the Intervals in ascending order, that is, starting with the earliest Interval
   * and ending with the latest.
   *
   * @param {Array} intervals
   * @return {Array}
   */ static merge(intervals) {
        const [found, final] = intervals.sort((a, b)=>a.s - b.s).reduce(([sofar, current], item)=>{
            if (!current) {
                return [
                    sofar,
                    item
                ];
            } else if (current.overlaps(item) || current.abutsStart(item)) {
                return [
                    sofar,
                    current.union(item)
                ];
            } else {
                return [
                    sofar.concat([
                        current
                    ]),
                    item
                ];
            }
        }, [
            [],
            null
        ]);
        if (final) {
            found.push(final);
        }
        return found;
    }
    /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */ static xor(intervals) {
        let start = null, currentCount = 0;
        const results = [], ends = intervals.map((i)=>[
                {
                    time: i.s,
                    type: "s"
                },
                {
                    time: i.e,
                    type: "e"
                }
            ]), flattened = Array.prototype.concat(...ends), arr = flattened.sort((a, b)=>a.time - b.time);
        for (const i of arr){
            currentCount += i.type === "s" ? 1 : -1;
            if (currentCount === 1) {
                start = i.time;
            } else {
                if (start && +start !== +i.time) {
                    results.push(Interval.fromDateTimes(start, i.time));
                }
                start = null;
            }
        }
        return Interval.merge(results);
    }
    /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */ difference(...intervals) {
        return Interval.xor([
            this
        ].concat(intervals)).map((i)=>this.intersection(i)).filter((i)=>i && !i.isEmpty());
    }
    /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */ toString() {
        if (!this.isValid) return INVALID$1;
        return `[${this.s.toISO()} – ${this.e.toISO()})`;
    }
    /**
   * Returns a string representation of this Interval appropriate for the REPL.
   * @return {string}
   */ [Symbol.for("nodejs.util.inspect.custom")]() {
        if (this.isValid) {
            return `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`;
        } else {
            return `Interval { Invalid, reason: ${this.invalidReason} }`;
        }
    }
    /**
   * Returns a localized string representing this Interval. Accepts the same options as the
   * Intl.DateTimeFormat constructor and any presets defined by Luxon, such as
   * {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}. The exact behavior of this method
   * is browser-specific, but in general it will return an appropriate representation of the
   * Interval in the assigned locale. Defaults to the system's locale if no locale has been
   * specified.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {Object} [formatOpts=DateTime.DATE_SHORT] - Either a DateTime preset or
   * Intl.DateTimeFormat constructor options.
   * @param {Object} opts - Options to override the configuration of the start DateTime.
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(); //=> 11/7/2022 – 11/8/2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL); //=> November 7 – 8, 2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL, { locale: 'fr-FR' }); //=> 7–8 novembre 2022
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString(DateTime.TIME_SIMPLE); //=> 6:00 – 8:00 PM
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> Mon, Nov 07, 6:00 – 8:00 p
   * @return {string}
   */ toLocaleString(formatOpts = DATE_SHORT, opts = {}) {
        return this.isValid ? Formatter.create(this.s.loc.clone(opts), formatOpts).formatInterval(this) : INVALID$1;
    }
    /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */ toISO(opts) {
        if (!this.isValid) return INVALID$1;
        return `${this.s.toISO(opts)}/${this.e.toISO(opts)}`;
    }
    /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */ toISODate() {
        if (!this.isValid) return INVALID$1;
        return `${this.s.toISODate()}/${this.e.toISODate()}`;
    }
    /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */ toISOTime(opts) {
        if (!this.isValid) return INVALID$1;
        return `${this.s.toISOTime(opts)}/${this.e.toISOTime(opts)}`;
    }
    /**
   * Returns a string representation of this Interval formatted according to the specified format
   * string. **You may not want this.** See {@link Interval#toLocaleString} for a more flexible
   * formatting tool.
   * @param {string} dateFormat - The format string. This string formats the start and end time.
   * See {@link DateTime#toFormat} for details.
   * @param {Object} opts - Options.
   * @param {string} [opts.separator =  ' – '] - A separator to place between the start and end
   * representations.
   * @return {string}
   */ toFormat(dateFormat, { separator = " – " } = {}) {
        if (!this.isValid) return INVALID$1;
        return `${this.s.toFormat(dateFormat)}${separator}${this.e.toFormat(dateFormat)}`;
    }
    /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */ toDuration(unit, opts) {
        if (!this.isValid) {
            return Duration.invalid(this.invalidReason);
        }
        return this.e.diff(this.s, unit, opts);
    }
    /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */ mapEndpoints(mapFn) {
        return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
    }
}
/**
 * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
 */ class Info {
    /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */ static hasDST(zone = Settings.defaultZone) {
        const proto = DateTime.now().setZone(zone).set({
            month: 12
        });
        return !zone.isUniversal && proto.offset !== proto.set({
            month: 6
        }).offset;
    }
    /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */ static isValidIANAZone(zone) {
        return IANAZone.isValidZone(zone);
    }
    /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */ static normalizeZone(input) {
        return normalizeZone(input, Settings.defaultZone);
    }
    /**
   * Get the weekday on which the week starts according to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number} the start of the week, 1 for Monday through 7 for Sunday
   */ static getStartOfWeek({ locale = null, locObj = null } = {}) {
        return (locObj || Locale.create(locale)).getStartOfWeek();
    }
    /**
   * Get the minimum number of days necessary in a week before it is considered part of the next year according
   * to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number}
   */ static getMinimumDaysInFirstWeek({ locale = null, locObj = null } = {}) {
        return (locObj || Locale.create(locale)).getMinDaysInFirstWeek();
    }
    /**
   * Get the weekdays, which are considered the weekend according to the given locale
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number[]} an array of weekdays, 1 for Monday through 7 for Sunday
   */ static getWeekendWeekdays({ locale = null, locObj = null } = {}) {
        // copy the array, because we cache it internally
        return (locObj || Locale.create(locale)).getWeekendDays().slice();
    }
    /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */ static months(length = "long", { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}) {
        return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length);
    }
    /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */ static monthsFormat(length = "long", { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}) {
        return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length, true);
    }
    /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */ static weekdays(length = "long", { locale = null, numberingSystem = null, locObj = null } = {}) {
        return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length);
    }
    /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */ static weekdaysFormat(length = "long", { locale = null, numberingSystem = null, locObj = null } = {}) {
        return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length, true);
    }
    /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */ static meridiems({ locale = null } = {}) {
        return Locale.create(locale).meridiems();
    }
    /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */ static eras(length = "short", { locale = null } = {}) {
        return Locale.create(locale, null, "gregory").eras(length);
    }
    /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * * `localeWeek`: whether this environment supports different weekdays for the start of the week based on the locale
   * @example Info.features() //=> { relative: false, localeWeek: true }
   * @return {Object}
   */ static features() {
        return {
            relative: hasRelative(),
            localeWeek: hasLocaleWeekInfo()
        };
    }
}
function dayDiff(earlier, later) {
    const utcDayStart = (dt)=>dt.toUTC(0, {
            keepLocalTime: true
        }).startOf("day").valueOf(), ms = utcDayStart(later) - utcDayStart(earlier);
    return Math.floor(Duration.fromMillis(ms).as("days"));
}
function highOrderDiffs(cursor, later, units) {
    const differs = [
        [
            "years",
            (a, b)=>b.year - a.year
        ],
        [
            "quarters",
            (a, b)=>b.quarter - a.quarter + (b.year - a.year) * 4
        ],
        [
            "months",
            (a, b)=>b.month - a.month + (b.year - a.year) * 12
        ],
        [
            "weeks",
            (a, b)=>{
                const days = dayDiff(a, b);
                return (days - days % 7) / 7;
            }
        ],
        [
            "days",
            dayDiff
        ]
    ];
    const results = {};
    const earlier = cursor;
    let lowestOrder, highWater;
    /* This loop tries to diff using larger units first.
     If we overshoot, we backtrack and try the next smaller unit.
     "cursor" starts out at the earlier timestamp and moves closer and closer to "later"
     as we use smaller and smaller units.
     highWater keeps track of where we would be if we added one more of the smallest unit,
     this is used later to potentially convert any difference smaller than the smallest higher order unit
     into a fraction of that smallest higher order unit
  */ for (const [unit, differ] of differs){
        if (units.indexOf(unit) >= 0) {
            lowestOrder = unit;
            results[unit] = differ(cursor, later);
            highWater = earlier.plus(results);
            if (highWater > later) {
                // we overshot the end point, backtrack cursor by 1
                results[unit]--;
                cursor = earlier.plus(results);
                // if we are still overshooting now, we need to backtrack again
                // this happens in certain situations when diffing times in different zones,
                // because this calculation ignores time zones
                if (cursor > later) {
                    // keep the "overshot by 1" around as highWater
                    highWater = cursor;
                    // backtrack cursor by 1
                    results[unit]--;
                    cursor = earlier.plus(results);
                }
            } else {
                cursor = highWater;
            }
        }
    }
    return [
        cursor,
        results,
        highWater,
        lowestOrder
    ];
}
function diff(earlier, later, units, opts) {
    let [cursor, results, highWater, lowestOrder] = highOrderDiffs(earlier, later, units);
    const remainingMillis = later - cursor;
    const lowerOrderUnits = units.filter((u)=>[
            "hours",
            "minutes",
            "seconds",
            "milliseconds"
        ].indexOf(u) >= 0);
    if (lowerOrderUnits.length === 0) {
        if (highWater < later) {
            highWater = cursor.plus({
                [lowestOrder]: 1
            });
        }
        if (highWater !== cursor) {
            results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
        }
    }
    const duration = Duration.fromObject(results, opts);
    if (lowerOrderUnits.length > 0) {
        return Duration.fromMillis(remainingMillis, opts).shiftTo(...lowerOrderUnits).plus(duration);
    } else {
        return duration;
    }
}
const MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";
function intUnit(regex, post = (i)=>i) {
    return {
        regex,
        deser: ([s])=>post(parseDigits(s))
    };
}
const NBSP = String.fromCharCode(160);
const spaceOrNBSP = `[ ${NBSP}]`;
const spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");
function fixListRegex(s) {
    // make dots optional and also make them literal
    // make space and non breakable space characters interchangeable
    return s.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
}
function stripInsensitivities(s) {
    return s.replace(/\./g, "") // ignore dots that were made optional
    .replace(spaceOrNBSPRegExp, " ") // interchange space and nbsp
    .toLowerCase();
}
function oneOf(strings, startIndex) {
    if (strings === null) {
        return null;
    } else {
        return {
            regex: RegExp(strings.map(fixListRegex).join("|")),
            deser: ([s])=>strings.findIndex((i)=>stripInsensitivities(s) === stripInsensitivities(i)) + startIndex
        };
    }
}
function offset(regex, groups) {
    return {
        regex,
        deser: ([, h, m])=>signedOffset(h, m),
        groups
    };
}
function simple(regex) {
    return {
        regex,
        deser: ([s])=>s
    };
}
function escapeToken(value) {
    return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
/**
 * @param token
 * @param {Locale} loc
 */ function unitForToken(token, loc) {
    const one = digitRegex(loc), two = digitRegex(loc, "{2}"), three = digitRegex(loc, "{3}"), four = digitRegex(loc, "{4}"), six = digitRegex(loc, "{6}"), oneOrTwo = digitRegex(loc, "{1,2}"), oneToThree = digitRegex(loc, "{1,3}"), oneToSix = digitRegex(loc, "{1,6}"), oneToNine = digitRegex(loc, "{1,9}"), twoToFour = digitRegex(loc, "{2,4}"), fourToSix = digitRegex(loc, "{4,6}"), literal = (t)=>({
            regex: RegExp(escapeToken(t.val)),
            deser: ([s])=>s,
            literal: true
        }), unitate = (t)=>{
        if (token.literal) {
            return literal(t);
        }
        switch(t.val){
            // era
            case "G":
                return oneOf(loc.eras("short"), 0);
            case "GG":
                return oneOf(loc.eras("long"), 0);
            // years
            case "y":
                return intUnit(oneToSix);
            case "yy":
                return intUnit(twoToFour, untruncateYear);
            case "yyyy":
                return intUnit(four);
            case "yyyyy":
                return intUnit(fourToSix);
            case "yyyyyy":
                return intUnit(six);
            // months
            case "M":
                return intUnit(oneOrTwo);
            case "MM":
                return intUnit(two);
            case "MMM":
                return oneOf(loc.months("short", true), 1);
            case "MMMM":
                return oneOf(loc.months("long", true), 1);
            case "L":
                return intUnit(oneOrTwo);
            case "LL":
                return intUnit(two);
            case "LLL":
                return oneOf(loc.months("short", false), 1);
            case "LLLL":
                return oneOf(loc.months("long", false), 1);
            // dates
            case "d":
                return intUnit(oneOrTwo);
            case "dd":
                return intUnit(two);
            // ordinals
            case "o":
                return intUnit(oneToThree);
            case "ooo":
                return intUnit(three);
            // time
            case "HH":
                return intUnit(two);
            case "H":
                return intUnit(oneOrTwo);
            case "hh":
                return intUnit(two);
            case "h":
                return intUnit(oneOrTwo);
            case "mm":
                return intUnit(two);
            case "m":
                return intUnit(oneOrTwo);
            case "q":
                return intUnit(oneOrTwo);
            case "qq":
                return intUnit(two);
            case "s":
                return intUnit(oneOrTwo);
            case "ss":
                return intUnit(two);
            case "S":
                return intUnit(oneToThree);
            case "SSS":
                return intUnit(three);
            case "u":
                return simple(oneToNine);
            case "uu":
                return simple(oneOrTwo);
            case "uuu":
                return intUnit(one);
            // meridiem
            case "a":
                return oneOf(loc.meridiems(), 0);
            // weekYear (k)
            case "kkkk":
                return intUnit(four);
            case "kk":
                return intUnit(twoToFour, untruncateYear);
            // weekNumber (W)
            case "W":
                return intUnit(oneOrTwo);
            case "WW":
                return intUnit(two);
            // weekdays
            case "E":
            case "c":
                return intUnit(one);
            case "EEE":
                return oneOf(loc.weekdays("short", false), 1);
            case "EEEE":
                return oneOf(loc.weekdays("long", false), 1);
            case "ccc":
                return oneOf(loc.weekdays("short", true), 1);
            case "cccc":
                return oneOf(loc.weekdays("long", true), 1);
            // offset/zone
            case "Z":
            case "ZZ":
                return offset(new RegExp(`([+-]${oneOrTwo.source})(?::(${two.source}))?`), 2);
            case "ZZZ":
                return offset(new RegExp(`([+-]${oneOrTwo.source})(${two.source})?`), 2);
            // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
            // because we don't have any way to figure out what they are
            case "z":
                return simple(/[a-z_+-/]{1,256}?/i);
            // this special-case "token" represents a place where a macro-token expanded into a white-space literal
            // in this case we accept any non-newline white-space
            case " ":
                return simple(/[^\S\n\r]/);
            default:
                return literal(t);
        }
    };
    const unit = unitate(token) || {
        invalidReason: MISSING_FTP
    };
    unit.token = token;
    return unit;
}
const partTypeStyleToTokenVal = {
    year: {
        "2-digit": "yy",
        numeric: "yyyyy"
    },
    month: {
        numeric: "M",
        "2-digit": "MM",
        short: "MMM",
        long: "MMMM"
    },
    day: {
        numeric: "d",
        "2-digit": "dd"
    },
    weekday: {
        short: "EEE",
        long: "EEEE"
    },
    dayperiod: "a",
    dayPeriod: "a",
    hour12: {
        numeric: "h",
        "2-digit": "hh"
    },
    hour24: {
        numeric: "H",
        "2-digit": "HH"
    },
    minute: {
        numeric: "m",
        "2-digit": "mm"
    },
    second: {
        numeric: "s",
        "2-digit": "ss"
    },
    timeZoneName: {
        long: "ZZZZZ",
        short: "ZZZ"
    }
};
function tokenForPart(part, formatOpts, resolvedOpts) {
    const { type, value } = part;
    if (type === "literal") {
        const isSpace = /^\s+$/.test(value);
        return {
            literal: !isSpace,
            val: isSpace ? " " : value
        };
    }
    const style = formatOpts[type];
    // The user might have explicitly specified hour12 or hourCycle
    // if so, respect their decision
    // if not, refer back to the resolvedOpts, which are based on the locale
    let actualType = type;
    if (type === "hour") {
        if (formatOpts.hour12 != null) {
            actualType = formatOpts.hour12 ? "hour12" : "hour24";
        } else if (formatOpts.hourCycle != null) {
            if (formatOpts.hourCycle === "h11" || formatOpts.hourCycle === "h12") {
                actualType = "hour12";
            } else {
                actualType = "hour24";
            }
        } else {
            // tokens only differentiate between 24 hours or not,
            // so we do not need to check hourCycle here, which is less supported anyways
            actualType = resolvedOpts.hour12 ? "hour12" : "hour24";
        }
    }
    let val = partTypeStyleToTokenVal[actualType];
    if (typeof val === "object") {
        val = val[style];
    }
    if (val) {
        return {
            literal: false,
            val
        };
    }
    return undefined;
}
function buildRegex(units) {
    const re = units.map((u)=>u.regex).reduce((f, r)=>`${f}(${r.source})`, "");
    return [
        `^${re}$`,
        units
    ];
}
function match(input, regex, handlers) {
    const matches = input.match(regex);
    if (matches) {
        const all = {};
        let matchIndex = 1;
        for(const i in handlers){
            if (hasOwnProperty(handlers, i)) {
                const h = handlers[i], groups = h.groups ? h.groups + 1 : 1;
                if (!h.literal && h.token) {
                    all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
                }
                matchIndex += groups;
            }
        }
        return [
            matches,
            all
        ];
    } else {
        return [
            matches,
            {}
        ];
    }
}
function dateTimeFromMatches(matches) {
    const toField = (token)=>{
        switch(token){
            case "S":
                return "millisecond";
            case "s":
                return "second";
            case "m":
                return "minute";
            case "h":
            case "H":
                return "hour";
            case "d":
                return "day";
            case "o":
                return "ordinal";
            case "L":
            case "M":
                return "month";
            case "y":
                return "year";
            case "E":
            case "c":
                return "weekday";
            case "W":
                return "weekNumber";
            case "k":
                return "weekYear";
            case "q":
                return "quarter";
            default:
                return null;
        }
    };
    let zone = null;
    let specificOffset;
    if (!isUndefined(matches.z)) {
        zone = IANAZone.create(matches.z);
    }
    if (!isUndefined(matches.Z)) {
        if (!zone) {
            zone = new FixedOffsetZone(matches.Z);
        }
        specificOffset = matches.Z;
    }
    if (!isUndefined(matches.q)) {
        matches.M = (matches.q - 1) * 3 + 1;
    }
    if (!isUndefined(matches.h)) {
        if (matches.h < 12 && matches.a === 1) {
            matches.h += 12;
        } else if (matches.h === 12 && matches.a === 0) {
            matches.h = 0;
        }
    }
    if (matches.G === 0 && matches.y) {
        matches.y = -matches.y;
    }
    if (!isUndefined(matches.u)) {
        matches.S = parseMillis(matches.u);
    }
    const vals = Object.keys(matches).reduce((r, k)=>{
        const f = toField(k);
        if (f) {
            r[f] = matches[k];
        }
        return r;
    }, {});
    return [
        vals,
        zone,
        specificOffset
    ];
}
let dummyDateTimeCache = null;
function getDummyDateTime() {
    if (!dummyDateTimeCache) {
        dummyDateTimeCache = DateTime.fromMillis(1555555555555);
    }
    return dummyDateTimeCache;
}
function maybeExpandMacroToken(token, locale) {
    if (token.literal) {
        return token;
    }
    const formatOpts = Formatter.macroTokenToFormatOpts(token.val);
    const tokens = formatOptsToTokens(formatOpts, locale);
    if (tokens == null || tokens.includes(undefined)) {
        return token;
    }
    return tokens;
}
function expandMacroTokens(tokens, locale) {
    return Array.prototype.concat(...tokens.map((t)=>maybeExpandMacroToken(t, locale)));
}
/**
 * @private
 */ class TokenParser {
    constructor(locale, format){
        this.locale = locale;
        this.format = format;
        this.tokens = expandMacroTokens(Formatter.parseFormat(format), locale);
        this.units = this.tokens.map((t)=>unitForToken(t, locale));
        this.disqualifyingUnit = this.units.find((t)=>t.invalidReason);
        if (!this.disqualifyingUnit) {
            const [regexString, handlers] = buildRegex(this.units);
            this.regex = RegExp(regexString, "i");
            this.handlers = handlers;
        }
    }
    explainFromTokens(input) {
        if (!this.isValid) {
            return {
                input,
                tokens: this.tokens,
                invalidReason: this.invalidReason
            };
        } else {
            const [rawMatches, matches] = match(input, this.regex, this.handlers), [result, zone, specificOffset] = matches ? dateTimeFromMatches(matches) : [
                null,
                null,
                undefined
            ];
            if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
                throw new ConflictingSpecificationError("Can't include meridiem when specifying 24-hour format");
            }
            return {
                input,
                tokens: this.tokens,
                regex: this.regex,
                rawMatches,
                matches,
                result,
                zone,
                specificOffset
            };
        }
    }
    get isValid() {
        return !this.disqualifyingUnit;
    }
    get invalidReason() {
        return this.disqualifyingUnit ? this.disqualifyingUnit.invalidReason : null;
    }
}
function explainFromTokens(locale, input, format) {
    const parser = new TokenParser(locale, format);
    return parser.explainFromTokens(input);
}
function parseFromTokens(locale, input, format) {
    const { result, zone, specificOffset, invalidReason } = explainFromTokens(locale, input, format);
    return [
        result,
        zone,
        specificOffset,
        invalidReason
    ];
}
function formatOptsToTokens(formatOpts, locale) {
    if (!formatOpts) {
        return null;
    }
    const formatter = Formatter.create(locale, formatOpts);
    const df = formatter.dtFormatter(getDummyDateTime());
    const parts = df.formatToParts();
    const resolvedOpts = df.resolvedOptions();
    return parts.map((p)=>tokenForPart(p, formatOpts, resolvedOpts));
}
const INVALID = "Invalid DateTime";
const MAX_DATE = 8.64e15;
function unsupportedZone(zone) {
    return new Invalid("unsupported zone", `the zone "${zone.name}" is not supported`);
}
// we cache week data on the DT object and this intermediates the cache
/**
 * @param {DateTime} dt
 */ function possiblyCachedWeekData(dt) {
    if (dt.weekData === null) {
        dt.weekData = gregorianToWeek(dt.c);
    }
    return dt.weekData;
}
/**
 * @param {DateTime} dt
 */ function possiblyCachedLocalWeekData(dt) {
    if (dt.localWeekData === null) {
        dt.localWeekData = gregorianToWeek(dt.c, dt.loc.getMinDaysInFirstWeek(), dt.loc.getStartOfWeek());
    }
    return dt.localWeekData;
}
// clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties
function clone(inst, alts) {
    const current = {
        ts: inst.ts,
        zone: inst.zone,
        c: inst.c,
        o: inst.o,
        loc: inst.loc,
        invalid: inst.invalid
    };
    return new DateTime({
        ...current,
        ...alts,
        old: current
    });
}
// find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)
function fixOffset(localTS, o, tz) {
    // Our UTC time is just a guess because our offset is just a guess
    let utcGuess = localTS - o * 60 * 1000;
    // Test whether the zone matches the offset for this ts
    const o2 = tz.offset(utcGuess);
    // If so, offset didn't change and we're done
    if (o === o2) {
        return [
            utcGuess,
            o
        ];
    }
    // If not, change the ts by the difference in the offset
    utcGuess -= (o2 - o) * 60 * 1000;
    // If that gives us the local time we want, we're done
    const o3 = tz.offset(utcGuess);
    if (o2 === o3) {
        return [
            utcGuess,
            o2
        ];
    }
    // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time
    return [
        localTS - Math.min(o2, o3) * 60 * 1000,
        Math.max(o2, o3)
    ];
}
// convert an epoch timestamp into a calendar object with the given offset
function tsToObj(ts, offset) {
    ts += offset * 60 * 1000;
    const d = new Date(ts);
    return {
        year: d.getUTCFullYear(),
        month: d.getUTCMonth() + 1,
        day: d.getUTCDate(),
        hour: d.getUTCHours(),
        minute: d.getUTCMinutes(),
        second: d.getUTCSeconds(),
        millisecond: d.getUTCMilliseconds()
    };
}
// convert a calendar object to a epoch timestamp
function objToTS(obj, offset, zone) {
    return fixOffset(objToLocalTS(obj), offset, zone);
}
// create a new DT instance by adding a duration, adjusting for DSTs
function adjustTime(inst, dur) {
    const oPre = inst.o, year = inst.c.year + Math.trunc(dur.years), month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3, c = {
        ...inst.c,
        year,
        month,
        day: Math.min(inst.c.day, daysInMonth(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
    }, millisToAdd = Duration.fromObject({
        years: dur.years - Math.trunc(dur.years),
        quarters: dur.quarters - Math.trunc(dur.quarters),
        months: dur.months - Math.trunc(dur.months),
        weeks: dur.weeks - Math.trunc(dur.weeks),
        days: dur.days - Math.trunc(dur.days),
        hours: dur.hours,
        minutes: dur.minutes,
        seconds: dur.seconds,
        milliseconds: dur.milliseconds
    }).as("milliseconds"), localTS = objToLocalTS(c);
    let [ts, o] = fixOffset(localTS, oPre, inst.zone);
    if (millisToAdd !== 0) {
        ts += millisToAdd;
        // that could have changed the offset by going over a DST, but we want to keep the ts the same
        o = inst.zone.offset(ts);
    }
    return {
        ts,
        o
    };
}
// helper useful in turning the results of parsing into real dates
// by handling the zone options
function parseDataToDateTime(parsed, parsedZone, opts, format, text, specificOffset) {
    const { setZone, zone } = opts;
    if (parsed && Object.keys(parsed).length !== 0 || parsedZone) {
        const interpretationZone = parsedZone || zone, inst = DateTime.fromObject(parsed, {
            ...opts,
            zone: interpretationZone,
            specificOffset
        });
        return setZone ? inst : inst.setZone(zone);
    } else {
        return DateTime.invalid(new Invalid("unparsable", `the input "${text}" can't be parsed as ${format}`));
    }
}
// if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details
function toTechFormat(dt, format, allowZ = true) {
    return dt.isValid ? Formatter.create(Locale.create("en-US"), {
        allowZ,
        forceSimple: true
    }).formatDateTimeFromString(dt, format) : null;
}
function toISODate(o, extended, precision) {
    const longFormat = o.c.year > 9999 || o.c.year < 0;
    let c = "";
    if (longFormat && o.c.year >= 0) c += "+";
    c += padStart(o.c.year, longFormat ? 6 : 4);
    if (precision === "year") return c;
    if (extended) {
        c += "-";
        c += padStart(o.c.month);
        if (precision === "month") return c;
        c += "-";
    } else {
        c += padStart(o.c.month);
        if (precision === "month") return c;
    }
    c += padStart(o.c.day);
    return c;
}
function toISOTime(o, extended, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone, precision) {
    let showSeconds = !suppressSeconds || o.c.millisecond !== 0 || o.c.second !== 0, c = "";
    switch(precision){
        case "day":
        case "month":
        case "year":
            break;
        default:
            c += padStart(o.c.hour);
            if (precision === "hour") break;
            if (extended) {
                c += ":";
                c += padStart(o.c.minute);
                if (precision === "minute") break;
                if (showSeconds) {
                    c += ":";
                    c += padStart(o.c.second);
                }
            } else {
                c += padStart(o.c.minute);
                if (precision === "minute") break;
                if (showSeconds) {
                    c += padStart(o.c.second);
                }
            }
            if (precision === "second") break;
            if (showSeconds && (!suppressMilliseconds || o.c.millisecond !== 0)) {
                c += ".";
                c += padStart(o.c.millisecond, 3);
            }
    }
    if (includeOffset) {
        if (o.isOffsetFixed && o.offset === 0 && !extendedZone) {
            c += "Z";
        } else if (o.o < 0) {
            c += "-";
            c += padStart(Math.trunc(-o.o / 60));
            c += ":";
            c += padStart(Math.trunc(-o.o % 60));
        } else {
            c += "+";
            c += padStart(Math.trunc(o.o / 60));
            c += ":";
            c += padStart(Math.trunc(o.o % 60));
        }
    }
    if (extendedZone) {
        c += "[" + o.zone.ianaName + "]";
    }
    return c;
}
// defaults for unspecified units in the supported calendars
const defaultUnitValues = {
    month: 1,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
}, defaultWeekUnitValues = {
    weekNumber: 1,
    weekday: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
}, defaultOrdinalUnitValues = {
    ordinal: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
};
// Units in the supported calendars, sorted by bigness
const orderedUnits = [
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "millisecond"
], orderedWeekUnits = [
    "weekYear",
    "weekNumber",
    "weekday",
    "hour",
    "minute",
    "second",
    "millisecond"
], orderedOrdinalUnits = [
    "year",
    "ordinal",
    "hour",
    "minute",
    "second",
    "millisecond"
];
// standardize case and plurality in units
function normalizeUnit(unit) {
    const normalized = {
        year: "year",
        years: "year",
        month: "month",
        months: "month",
        day: "day",
        days: "day",
        hour: "hour",
        hours: "hour",
        minute: "minute",
        minutes: "minute",
        quarter: "quarter",
        quarters: "quarter",
        second: "second",
        seconds: "second",
        millisecond: "millisecond",
        milliseconds: "millisecond",
        weekday: "weekday",
        weekdays: "weekday",
        weeknumber: "weekNumber",
        weeksnumber: "weekNumber",
        weeknumbers: "weekNumber",
        weekyear: "weekYear",
        weekyears: "weekYear",
        ordinal: "ordinal"
    }[unit.toLowerCase()];
    if (!normalized) throw new InvalidUnitError(unit);
    return normalized;
}
function normalizeUnitWithLocalWeeks(unit) {
    switch(unit.toLowerCase()){
        case "localweekday":
        case "localweekdays":
            return "localWeekday";
        case "localweeknumber":
        case "localweeknumbers":
            return "localWeekNumber";
        case "localweekyear":
        case "localweekyears":
            return "localWeekYear";
        default:
            return normalizeUnit(unit);
    }
}
// cache offsets for zones based on the current timestamp when this function is
// first called. When we are handling a datetime from components like (year,
// month, day, hour) in a time zone, we need a guess about what the timezone
// offset is so that we can convert into a UTC timestamp. One way is to find the
// offset of now in the zone. The actual date may have a different offset (for
// example, if we handle a date in June while we're in December in a zone that
// observes DST), but we can check and adjust that.
//
// When handling many dates, calculating the offset for now every time is
// expensive. It's just a guess, so we can cache the offset to use even if we
// are right on a time change boundary (we'll just correct in the other
// direction). Using a timestamp from first read is a slight optimization for
// handling dates close to the current date, since those dates will usually be
// in the same offset (we could set the timestamp statically, instead). We use a
// single timestamp for all zones to make things a bit more predictable.
//
// This is safe for quickDT (used by local() and utc()) because we don't fill in
// higher-order units from tsNow (as we do in fromObject, this requires that
// offset is calculated from tsNow).
/**
 * @param {Zone} zone
 * @return {number}
 */ function guessOffsetForZone(zone) {
    if (zoneOffsetTs === undefined) {
        zoneOffsetTs = Settings.now();
    }
    // Do not cache anything but IANA zones, because it is not safe to do so.
    // Guessing an offset which is not present in the zone can cause wrong results from fixOffset
    if (zone.type !== "iana") {
        return zone.offset(zoneOffsetTs);
    }
    const zoneName = zone.name;
    let offsetGuess = zoneOffsetGuessCache.get(zoneName);
    if (offsetGuess === undefined) {
        offsetGuess = zone.offset(zoneOffsetTs);
        zoneOffsetGuessCache.set(zoneName, offsetGuess);
    }
    return offsetGuess;
}
// this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.
function quickDT(obj, opts) {
    const zone = normalizeZone(opts.zone, Settings.defaultZone);
    if (!zone.isValid) {
        return DateTime.invalid(unsupportedZone(zone));
    }
    const loc = Locale.fromObject(opts);
    let ts, o;
    // assume we have the higher-order units
    if (!isUndefined(obj.year)) {
        for (const u of orderedUnits){
            if (isUndefined(obj[u])) {
                obj[u] = defaultUnitValues[u];
            }
        }
        const invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);
        if (invalid) {
            return DateTime.invalid(invalid);
        }
        const offsetProvis = guessOffsetForZone(zone);
        [ts, o] = objToTS(obj, offsetProvis, zone);
    } else {
        ts = Settings.now();
    }
    return new DateTime({
        ts,
        zone,
        loc,
        o
    });
}
function diffRelative(start, end, opts) {
    const round = isUndefined(opts.round) ? true : opts.round, rounding = isUndefined(opts.rounding) ? "trunc" : opts.rounding, format = (c, unit)=>{
        c = roundTo(c, round || opts.calendary ? 0 : 2, opts.calendary ? "round" : rounding);
        const formatter = end.loc.clone(opts).relFormatter(opts);
        return formatter.format(c, unit);
    }, differ = (unit)=>{
        if (opts.calendary) {
            if (!end.hasSame(start, unit)) {
                return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
            } else return 0;
        } else {
            return end.diff(start, unit).get(unit);
        }
    };
    if (opts.unit) {
        return format(differ(opts.unit), opts.unit);
    }
    for (const unit of opts.units){
        const count = differ(unit);
        if (Math.abs(count) >= 1) {
            return format(count, unit);
        }
    }
    return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
}
function lastOpts(argList) {
    let opts = {}, args;
    if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
        opts = argList[argList.length - 1];
        args = Array.from(argList).slice(0, argList.length - 1);
    } else {
        args = Array.from(argList);
    }
    return [
        opts,
        args
    ];
}
/**
 * Timestamp to use for cached zone offset guesses (exposed for test)
 */ let zoneOffsetTs;
/**
 * Cache for zone offset guesses (exposed for test).
 *
 * This optimizes quickDT via guessOffsetForZone to avoid repeated calls of
 * zone.offset().
 */ const zoneOffsetGuessCache = new Map();
/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link DateTime.local}, {@link DateTime.utc}, and (most flexibly) {@link DateTime.fromObject}. To create one from a standard string format, use {@link DateTime.fromISO}, {@link DateTime.fromHTTP}, and {@link DateTime.fromRFC2822}. To create one from a custom string format, use {@link DateTime.fromFormat}. To create one from a native JS date, use {@link DateTime.fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link DateTime#toObject}), use the {@link DateTime#year}, {@link DateTime#month},
 * {@link DateTime#day}, {@link DateTime#hour}, {@link DateTime#minute}, {@link DateTime#second}, {@link DateTime#millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link DateTime#weekYear}, {@link DateTime#weekNumber}, and {@link DateTime#weekday} accessors.
 * * **Configuration** See the {@link DateTime#locale} and {@link DateTime#numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link DateTime#set}, {@link DateTime#reconfigure}, {@link DateTime#setZone}, {@link DateTime#setLocale}, {@link DateTime.plus}, {@link DateTime#minus}, {@link DateTime#endOf}, {@link DateTime#startOf}, {@link DateTime#toUTC}, and {@link DateTime#toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link DateTime#toRelative}, {@link DateTime#toRelativeCalendar}, {@link DateTime#toJSON}, {@link DateTime#toISO}, {@link DateTime#toHTTP}, {@link DateTime#toObject}, {@link DateTime#toRFC2822}, {@link DateTime#toString}, {@link DateTime#toLocaleString}, {@link DateTime#toFormat}, {@link DateTime#toMillis} and {@link DateTime#toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */ class DateTime {
    /**
   * @access private
   */ constructor(config){
        const zone = config.zone || Settings.defaultZone;
        let invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
        /**
     * @access private
     */ this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
        let c = null, o = null;
        if (!invalid) {
            const unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);
            if (unchanged) {
                [c, o] = [
                    config.old.c,
                    config.old.o
                ];
            } else {
                // If an offset has been passed and we have not been called from
                // clone(), we can trust it and avoid the offset calculation.
                const ot = isNumber(config.o) && !config.old ? config.o : zone.offset(this.ts);
                c = tsToObj(this.ts, ot);
                invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
                c = invalid ? null : c;
                o = invalid ? null : ot;
            }
        }
        /**
     * @access private
     */ this._zone = zone;
        /**
     * @access private
     */ this.loc = config.loc || Locale.create();
        /**
     * @access private
     */ this.invalid = invalid;
        /**
     * @access private
     */ this.weekData = null;
        /**
     * @access private
     */ this.localWeekData = null;
        /**
     * @access private
     */ this.c = c;
        /**
     * @access private
     */ this.o = o;
        /**
     * @access private
     */ this.isLuxonDateTime = true;
    }
    // CONSTRUCT
    /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */ static now() {
        return new DateTime({});
    }
    /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */ static local() {
        const [opts, args] = lastOpts(arguments), [year, month, day, hour, minute, second, millisecond] = args;
        return quickDT({
            year,
            month,
            day,
            hour,
            minute,
            second,
            millisecond
        }, opts);
    }
    /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @param {string} [options.weekSettings] - the week settings to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */ static utc() {
        const [opts, args] = lastOpts(arguments), [year, month, day, hour, minute, second, millisecond] = args;
        opts.zone = FixedOffsetZone.utcInstance;
        return quickDT({
            year,
            month,
            day,
            hour,
            minute,
            second,
            millisecond
        }, opts);
    }
    /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */ static fromJSDate(date, options = {}) {
        const ts = isDate(date) ? date.valueOf() : NaN;
        if (Number.isNaN(ts)) {
            return DateTime.invalid("invalid input");
        }
        const zoneToUse = normalizeZone(options.zone, Settings.defaultZone);
        if (!zoneToUse.isValid) {
            return DateTime.invalid(unsupportedZone(zoneToUse));
        }
        return new DateTime({
            ts: ts,
            zone: zoneToUse,
            loc: Locale.fromObject(options)
        });
    }
    /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} options.weekSettings - the week settings to set on the resulting DateTime instance
   * @return {DateTime}
   */ static fromMillis(milliseconds, options = {}) {
        if (!isNumber(milliseconds)) {
            throw new InvalidArgumentError(`fromMillis requires a numerical input, but received a ${typeof milliseconds} with value ${milliseconds}`);
        } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
            // this isn't perfect because we can still end up out of range because of additional shifting, but it's a start
            return DateTime.invalid("Timestamp out of range");
        } else {
            return new DateTime({
                ts: milliseconds,
                zone: normalizeZone(options.zone, Settings.defaultZone),
                loc: Locale.fromObject(options)
            });
        }
    }
    /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} options.weekSettings - the week settings to set on the resulting DateTime instance
   * @return {DateTime}
   */ static fromSeconds(seconds, options = {}) {
        if (!isNumber(seconds)) {
            throw new InvalidArgumentError("fromSeconds requires a numerical input");
        } else {
            return new DateTime({
                ts: seconds * 1000,
                zone: normalizeZone(options.zone, Settings.defaultZone),
                loc: Locale.fromObject(options)
            });
        }
    }
    /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.localWeekYear - a week year, according to the locale
   * @param {number} obj.localWeekNumber - a week number, between 1 and 52 or 53, depending on the year, according to the locale
   * @param {number} obj.localWeekday - a weekday, 1-7, where 1 is the first and 7 is the last day of the week, according to the locale
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system\'s locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @example DateTime.fromObject({ localWeekYear: 2022, localWeekNumber: 1, localWeekday: 1 }, { locale: "en-US" }).toISODate() //=> '2021-12-26'
   * @return {DateTime}
   */ static fromObject(obj, opts = {}) {
        obj = obj || {};
        const zoneToUse = normalizeZone(opts.zone, Settings.defaultZone);
        if (!zoneToUse.isValid) {
            return DateTime.invalid(unsupportedZone(zoneToUse));
        }
        const loc = Locale.fromObject(opts);
        const normalized = normalizeObject(obj, normalizeUnitWithLocalWeeks);
        const { minDaysInFirstWeek, startOfWeek } = usesLocalWeekValues(normalized, loc);
        const tsNow = Settings.now(), offsetProvis = !isUndefined(opts.specificOffset) ? opts.specificOffset : zoneToUse.offset(tsNow), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber;
        // cases:
        // just a weekday -> this week's instance of that weekday, no worries
        // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
        // (gregorian month or day) + ordinal -> error
        // otherwise just use weeks or ordinals or gregorian, depending on what's specified
        if ((containsGregor || containsOrdinal) && definiteWeekDef) {
            throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
        }
        if (containsGregorMD && containsOrdinal) {
            throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
        }
        const useWeekData = definiteWeekDef || normalized.weekday && !containsGregor;
        // configure ourselves to deal with gregorian dates or week stuff
        let units, defaultValues, objNow = tsToObj(tsNow, offsetProvis);
        if (useWeekData) {
            units = orderedWeekUnits;
            defaultValues = defaultWeekUnitValues;
            objNow = gregorianToWeek(objNow, minDaysInFirstWeek, startOfWeek);
        } else if (containsOrdinal) {
            units = orderedOrdinalUnits;
            defaultValues = defaultOrdinalUnitValues;
            objNow = gregorianToOrdinal(objNow);
        } else {
            units = orderedUnits;
            defaultValues = defaultUnitValues;
        }
        // set default values for missing stuff
        let foundFirst = false;
        for (const u of units){
            const v = normalized[u];
            if (!isUndefined(v)) {
                foundFirst = true;
            } else if (foundFirst) {
                normalized[u] = defaultValues[u];
            } else {
                normalized[u] = objNow[u];
            }
        }
        // make sure the values we have are in range
        const higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized, minDaysInFirstWeek, startOfWeek) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized), invalid = higherOrderInvalid || hasInvalidTimeData(normalized);
        if (invalid) {
            return DateTime.invalid(invalid);
        }
        // compute the actual time
        const gregorian = useWeekData ? weekToGregorian(normalized, minDaysInFirstWeek, startOfWeek) : containsOrdinal ? ordinalToGregorian(normalized) : normalized, [tsFinal, offsetFinal] = objToTS(gregorian, offsetProvis, zoneToUse), inst = new DateTime({
            ts: tsFinal,
            zone: zoneToUse,
            o: offsetFinal,
            loc
        });
        // gregorian data + weekday serves only to validate
        if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
            return DateTime.invalid("mismatched weekday", `you can't specify both a weekday of ${normalized.weekday} and a date of ${inst.toISO()}`);
        }
        if (!inst.isValid) {
            return DateTime.invalid(inst.invalid);
        }
        return inst;
    }
    /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @param {string} [opts.weekSettings] - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */ static fromISO(text, opts = {}) {
        const [vals, parsedZone] = parseISODate(text);
        return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
    }
    /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */ static fromRFC2822(text, opts = {}) {
        const [vals, parsedZone] = parseRFC2822Date(text);
        return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
    }
    /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */ static fromHTTP(text, opts = {}) {
        const [vals, parsedZone] = parseHTTPDate(text);
        return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
    }
    /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */ static fromFormat(text, fmt, opts = {}) {
        if (isUndefined(text) || isUndefined(fmt)) {
            throw new InvalidArgumentError("fromFormat requires an input string and a format");
        }
        const { locale = null, numberingSystem = null } = opts, localeToUse = Locale.fromOpts({
            locale,
            numberingSystem,
            defaultToEN: true
        }), [vals, parsedZone, specificOffset, invalid] = parseFromTokens(localeToUse, text, fmt);
        if (invalid) {
            return DateTime.invalid(invalid);
        } else {
            return parseDataToDateTime(vals, parsedZone, opts, `format ${fmt}`, text, specificOffset);
        }
    }
    /**
   * @deprecated use fromFormat instead
   */ static fromString(text, fmt, opts = {}) {
        return DateTime.fromFormat(text, fmt, opts);
    }
    /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */ static fromSQL(text, opts = {}) {
        const [vals, parsedZone] = parseSQL(text);
        return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
    }
    /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent.
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */ static invalid(reason, explanation = null) {
        if (!reason) {
            throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
        }
        const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
        if (Settings.throwOnInvalid) {
            throw new InvalidDateTimeError(invalid);
        } else {
            return new DateTime({
                invalid
            });
        }
    }
    /**
   * Check if an object is an instance of DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */ static isDateTime(o) {
        return o && o.isLuxonDateTime || false;
    }
    /**
   * Produce the format string for a set of options
   * @param formatOpts
   * @param localeOpts
   * @returns {string}
   */ static parseFormatForOpts(formatOpts, localeOpts = {}) {
        const tokenList = formatOptsToTokens(formatOpts, Locale.fromObject(localeOpts));
        return !tokenList ? null : tokenList.map((t)=>t ? t.val : null).join("");
    }
    /**
   * Produce the the fully expanded format token for the locale
   * Does NOT quote characters, so quoted tokens will not round trip correctly
   * @param fmt
   * @param localeOpts
   * @returns {string}
   */ static expandFormat(fmt, localeOpts = {}) {
        const expanded = expandMacroTokens(Formatter.parseFormat(fmt), Locale.fromObject(localeOpts));
        return expanded.map((t)=>t.val).join("");
    }
    static resetCache() {
        zoneOffsetTs = undefined;
        zoneOffsetGuessCache.clear();
    }
    // INFO
    /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */ get(unit) {
        return this[unit];
    }
    /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */ get isValid() {
        return this.invalid === null;
    }
    /**
   * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
   * @type {string}
   */ get invalidReason() {
        return this.invalid ? this.invalid.reason : null;
    }
    /**
   * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
   * @type {string}
   */ get invalidExplanation() {
        return this.invalid ? this.invalid.explanation : null;
    }
    /**
   * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
   *
   * @type {string}
   */ get locale() {
        return this.isValid ? this.loc.locale : null;
    }
    /**
   * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
   *
   * @type {string}
   */ get numberingSystem() {
        return this.isValid ? this.loc.numberingSystem : null;
    }
    /**
   * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
   *
   * @type {string}
   */ get outputCalendar() {
        return this.isValid ? this.loc.outputCalendar : null;
    }
    /**
   * Get the time zone associated with this DateTime.
   * @type {Zone}
   */ get zone() {
        return this._zone;
    }
    /**
   * Get the name of the time zone.
   * @type {string}
   */ get zoneName() {
        return this.isValid ? this.zone.name : null;
    }
    /**
   * Get the year
   * @example DateTime.local(2017, 5, 25).year //=> 2017
   * @type {number}
   */ get year() {
        return this.isValid ? this.c.year : NaN;
    }
    /**
   * Get the quarter
   * @example DateTime.local(2017, 5, 25).quarter //=> 2
   * @type {number}
   */ get quarter() {
        return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
    }
    /**
   * Get the month (1-12).
   * @example DateTime.local(2017, 5, 25).month //=> 5
   * @type {number}
   */ get month() {
        return this.isValid ? this.c.month : NaN;
    }
    /**
   * Get the day of the month (1-30ish).
   * @example DateTime.local(2017, 5, 25).day //=> 25
   * @type {number}
   */ get day() {
        return this.isValid ? this.c.day : NaN;
    }
    /**
   * Get the hour of the day (0-23).
   * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
   * @type {number}
   */ get hour() {
        return this.isValid ? this.c.hour : NaN;
    }
    /**
   * Get the minute of the hour (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
   * @type {number}
   */ get minute() {
        return this.isValid ? this.c.minute : NaN;
    }
    /**
   * Get the second of the minute (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
   * @type {number}
   */ get second() {
        return this.isValid ? this.c.second : NaN;
    }
    /**
   * Get the millisecond of the second (0-999).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
   * @type {number}
   */ get millisecond() {
        return this.isValid ? this.c.millisecond : NaN;
    }
    /**
   * Get the week year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
   * @type {number}
   */ get weekYear() {
        return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
    }
    /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */ get weekNumber() {
        return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
    }
    /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */ get weekday() {
        return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
    }
    /**
   * Returns true if this date is on a weekend according to the locale, false otherwise
   * @returns {boolean}
   */ get isWeekend() {
        return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
    }
    /**
   * Get the day of the week according to the locale.
   * 1 is the first day of the week and 7 is the last day of the week.
   * If the locale assigns Sunday as the first day of the week, then a date which is a Sunday will return 1,
   * @returns {number}
   */ get localWeekday() {
        return this.isValid ? possiblyCachedLocalWeekData(this).weekday : NaN;
    }
    /**
   * Get the week number of the week year according to the locale. Different locales assign week numbers differently,
   * because the week can start on different days of the week (see localWeekday) and because a different number of days
   * is required for a week to count as the first week of a year.
   * @returns {number}
   */ get localWeekNumber() {
        return this.isValid ? possiblyCachedLocalWeekData(this).weekNumber : NaN;
    }
    /**
   * Get the week year according to the locale. Different locales assign week numbers (and therefor week years)
   * differently, see localWeekNumber.
   * @returns {number}
   */ get localWeekYear() {
        return this.isValid ? possiblyCachedLocalWeekData(this).weekYear : NaN;
    }
    /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */ get ordinal() {
        return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
    }
    /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */ get monthShort() {
        return this.isValid ? Info.months("short", {
            locObj: this.loc
        })[this.month - 1] : null;
    }
    /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */ get monthLong() {
        return this.isValid ? Info.months("long", {
            locObj: this.loc
        })[this.month - 1] : null;
    }
    /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */ get weekdayShort() {
        return this.isValid ? Info.weekdays("short", {
            locObj: this.loc
        })[this.weekday - 1] : null;
    }
    /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */ get weekdayLong() {
        return this.isValid ? Info.weekdays("long", {
            locObj: this.loc
        })[this.weekday - 1] : null;
    }
    /**
   * Get the UTC offset of this DateTime in minutes
   * @example DateTime.now().offset //=> -240
   * @example DateTime.utc().offset //=> 0
   * @type {number}
   */ get offset() {
        return this.isValid ? +this.o : NaN;
    }
    /**
   * Get the short human name for the zone's current offset, for example "EST" or "EDT".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */ get offsetNameShort() {
        if (this.isValid) {
            return this.zone.offsetName(this.ts, {
                format: "short",
                locale: this.locale
            });
        } else {
            return null;
        }
    }
    /**
   * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */ get offsetNameLong() {
        if (this.isValid) {
            return this.zone.offsetName(this.ts, {
                format: "long",
                locale: this.locale
            });
        } else {
            return null;
        }
    }
    /**
   * Get whether this zone's offset ever changes, as in a DST.
   * @type {boolean}
   */ get isOffsetFixed() {
        return this.isValid ? this.zone.isUniversal : null;
    }
    /**
   * Get whether the DateTime is in a DST.
   * @type {boolean}
   */ get isInDST() {
        if (this.isOffsetFixed) {
            return false;
        } else {
            return this.offset > this.set({
                month: 1,
                day: 1
            }).offset || this.offset > this.set({
                month: 5
            }).offset;
        }
    }
    /**
   * Get those DateTimes which have the same local time as this DateTime, but a different offset from UTC
   * in this DateTime's zone. During DST changes local time can be ambiguous, for example
   * `2023-10-29T02:30:00` in `Europe/Berlin` can have offset `+01:00` or `+02:00`.
   * This method will return both possible DateTimes if this DateTime's local time is ambiguous.
   * @returns {DateTime[]}
   */ getPossibleOffsets() {
        if (!this.isValid || this.isOffsetFixed) {
            return [
                this
            ];
        }
        const dayMs = 86400000;
        const minuteMs = 60000;
        const localTS = objToLocalTS(this.c);
        const oEarlier = this.zone.offset(localTS - dayMs);
        const oLater = this.zone.offset(localTS + dayMs);
        const o1 = this.zone.offset(localTS - oEarlier * minuteMs);
        const o2 = this.zone.offset(localTS - oLater * minuteMs);
        if (o1 === o2) {
            return [
                this
            ];
        }
        const ts1 = localTS - o1 * minuteMs;
        const ts2 = localTS - o2 * minuteMs;
        const c1 = tsToObj(ts1, o1);
        const c2 = tsToObj(ts2, o2);
        if (c1.hour === c2.hour && c1.minute === c2.minute && c1.second === c2.second && c1.millisecond === c2.millisecond) {
            return [
                clone(this, {
                    ts: ts1
                }),
                clone(this, {
                    ts: ts2
                })
            ];
        }
        return [
            this
        ];
    }
    /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */ get isInLeapYear() {
        return isLeapYear(this.year);
    }
    /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */ get daysInMonth() {
        return daysInMonth(this.year, this.month);
    }
    /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */ get daysInYear() {
        return this.isValid ? daysInYear(this.year) : NaN;
    }
    /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */ get weeksInWeekYear() {
        return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
    }
    /**
   * Returns the number of weeks in this DateTime's local week year
   * @example DateTime.local(2020, 6, {locale: 'en-US'}).weeksInLocalWeekYear //=> 52
   * @example DateTime.local(2020, 6, {locale: 'de-DE'}).weeksInLocalWeekYear //=> 53
   * @type {number}
   */ get weeksInLocalWeekYear() {
        return this.isValid ? weeksInWeekYear(this.localWeekYear, this.loc.getMinDaysInFirstWeek(), this.loc.getStartOfWeek()) : NaN;
    }
    /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */ resolvedLocaleOptions(opts = {}) {
        const { locale, numberingSystem, calendar } = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this);
        return {
            locale,
            numberingSystem,
            outputCalendar: calendar
        };
    }
    // TRANSFORM
    /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */ toUTC(offset = 0, opts = {}) {
        return this.setZone(FixedOffsetZone.instance(offset), opts);
    }
    /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */ toLocal() {
        return this.setZone(Settings.defaultZone);
    }
    /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */ setZone(zone, { keepLocalTime = false, keepCalendarTime = false } = {}) {
        zone = normalizeZone(zone, Settings.defaultZone);
        if (zone.equals(this.zone)) {
            return this;
        } else if (!zone.isValid) {
            return DateTime.invalid(unsupportedZone(zone));
        } else {
            let newTS = this.ts;
            if (keepLocalTime || keepCalendarTime) {
                const offsetGuess = zone.offset(this.ts);
                const asObj = this.toObject();
                [newTS] = objToTS(asObj, offsetGuess, zone);
            }
            return clone(this, {
                ts: newTS,
                zone
            });
        }
    }
    /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */ reconfigure({ locale, numberingSystem, outputCalendar } = {}) {
        const loc = this.loc.clone({
            locale,
            numberingSystem,
            outputCalendar
        });
        return clone(this, {
            loc
        });
    }
    /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */ setLocale(locale) {
        return this.reconfigure({
            locale
        });
    }
    /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   *
   * This method also supports setting locale-based week units, i.e. `localWeekday`, `localWeekNumber` and `localWeekYear`.
   * They cannot be mixed with ISO-week units like `weekday`.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */ set(values) {
        if (!this.isValid) return this;
        const normalized = normalizeObject(values, normalizeUnitWithLocalWeeks);
        const { minDaysInFirstWeek, startOfWeek } = usesLocalWeekValues(normalized, this.loc);
        const settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber;
        if ((containsGregor || containsOrdinal) && definiteWeekDef) {
            throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
        }
        if (containsGregorMD && containsOrdinal) {
            throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
        }
        let mixed;
        if (settingWeekStuff) {
            mixed = weekToGregorian({
                ...gregorianToWeek(this.c, minDaysInFirstWeek, startOfWeek),
                ...normalized
            }, minDaysInFirstWeek, startOfWeek);
        } else if (!isUndefined(normalized.ordinal)) {
            mixed = ordinalToGregorian({
                ...gregorianToOrdinal(this.c),
                ...normalized
            });
        } else {
            mixed = {
                ...this.toObject(),
                ...normalized
            };
            // if we didn't set the day but we ended up on an overflow date,
            // use the last day of the right month
            if (isUndefined(normalized.day)) {
                mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
            }
        }
        const [ts, o] = objToTS(mixed, this.o, this.zone);
        return clone(this, {
            ts,
            o
        });
    }
    /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */ plus(duration) {
        if (!this.isValid) return this;
        const dur = Duration.fromDurationLike(duration);
        return clone(this, adjustTime(this, dur));
    }
    /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */ minus(duration) {
        if (!this.isValid) return this;
        const dur = Duration.fromDurationLike(duration).negate();
        return clone(this, adjustTime(this, dur));
    }
    /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */ startOf(unit, { useLocaleWeeks = false } = {}) {
        if (!this.isValid) return this;
        const o = {}, normalizedUnit = Duration.normalizeUnit(unit);
        switch(normalizedUnit){
            case "years":
                o.month = 1;
            // falls through
            case "quarters":
            case "months":
                o.day = 1;
            // falls through
            case "weeks":
            case "days":
                o.hour = 0;
            // falls through
            case "hours":
                o.minute = 0;
            // falls through
            case "minutes":
                o.second = 0;
            // falls through
            case "seconds":
                o.millisecond = 0;
                break;
        }
        if (normalizedUnit === "weeks") {
            if (useLocaleWeeks) {
                const startOfWeek = this.loc.getStartOfWeek();
                const { weekday } = this;
                if (weekday < startOfWeek) {
                    o.weekNumber = this.weekNumber - 1;
                }
                o.weekday = startOfWeek;
            } else {
                o.weekday = 1;
            }
        }
        if (normalizedUnit === "quarters") {
            const q = Math.ceil(this.month / 3);
            o.month = (q - 1) * 3 + 1;
        }
        return this.set(o);
    }
    /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */ endOf(unit, opts) {
        return this.isValid ? this.plus({
            [unit]: 1
        }).startOf(unit, opts).minus(1) : this;
    }
    // OUTPUT
    /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */ toFormat(fmt, opts = {}) {
        return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID;
    }
    /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */ toLocaleString(formatOpts = DATE_SHORT, opts = {}) {
        return this.isValid ? Formatter.create(this.loc.clone(opts), formatOpts).formatDateTime(this) : INVALID;
    }
    /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */ toLocaleParts(opts = {}) {
        return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
    }
    /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @param {string} [opts.precision='milliseconds'] - truncate output to desired presicion: 'years', 'months', 'days', 'hours', 'minutes', 'seconds' or 'milliseconds'. When precision and suppressSeconds or suppressMilliseconds are used together, precision sets the maximum unit shown in the output, however seconds or milliseconds will still be suppressed if they are 0.
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @example DateTime.now().toISO({ precision: 'day' }) //=> '2017-04-22Z'
   * @example DateTime.now().toISO({ precision: 'minute' }) //=> '2017-04-22T20:47Z'
   * @return {string|null}
   */ toISO({ format = "extended", suppressSeconds = false, suppressMilliseconds = false, includeOffset = true, extendedZone = false, precision = "milliseconds" } = {}) {
        if (!this.isValid) {
            return null;
        }
        precision = normalizeUnit(precision);
        const ext = format === "extended";
        let c = toISODate(this, ext, precision);
        if (orderedUnits.indexOf(precision) >= 3) c += "T";
        c += toISOTime(this, ext, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone, precision);
        return c;
    }
    /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @param {string} [opts.precision='day'] - truncate output to desired precision: 'years', 'months', or 'days'.
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @example DateTime.utc(1982, 5, 25).toISODate({ precision: 'month' }) //=> '1982-05'
   * @return {string|null}
   */ toISODate({ format = "extended", precision = "day" } = {}) {
        if (!this.isValid) {
            return null;
        }
        return toISODate(this, format === "extended", normalizeUnit(precision));
    }
    /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */ toISOWeekDate() {
        return toTechFormat(this, "kkkk-'W'WW-c");
    }
    /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @param {string} [opts.precision='milliseconds'] - truncate output to desired presicion: 'hours', 'minutes', 'seconds' or 'milliseconds'. When precision and suppressSeconds or suppressMilliseconds are used together, precision sets the maximum unit shown in the output, however seconds or milliseconds will still be suppressed if they are 0.
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, second: 56 }).toISOTime({ precision: 'minute' }) //=> '07:34Z'
   * @return {string}
   */ toISOTime({ suppressMilliseconds = false, suppressSeconds = false, includeOffset = true, includePrefix = false, extendedZone = false, format = "extended", precision = "milliseconds" } = {}) {
        if (!this.isValid) {
            return null;
        }
        precision = normalizeUnit(precision);
        let c = includePrefix && orderedUnits.indexOf(precision) >= 3 ? "T" : "";
        return c + toISOTime(this, format === "extended", suppressSeconds, suppressMilliseconds, includeOffset, extendedZone, precision);
    }
    /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */ toRFC2822() {
        return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
    }
    /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */ toHTTP() {
        return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
    }
    /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string|null}
   */ toSQLDate() {
        if (!this.isValid) {
            return null;
        }
        return toISODate(this, true);
    }
    /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */ toSQLTime({ includeOffset = true, includeZone = false, includeOffsetSpace = true } = {}) {
        let fmt = "HH:mm:ss.SSS";
        if (includeZone || includeOffset) {
            if (includeOffsetSpace) {
                fmt += " ";
            }
            if (includeZone) {
                fmt += "z";
            } else if (includeOffset) {
                fmt += "ZZ";
            }
        }
        return toTechFormat(this, fmt, true);
    }
    /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */ toSQL(opts = {}) {
        if (!this.isValid) {
            return null;
        }
        return `${this.toSQLDate()} ${this.toSQLTime(opts)}`;
    }
    /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */ toString() {
        return this.isValid ? this.toISO() : INVALID;
    }
    /**
   * Returns a string representation of this DateTime appropriate for the REPL.
   * @return {string}
   */ [Symbol.for("nodejs.util.inspect.custom")]() {
        if (this.isValid) {
            return `DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`;
        } else {
            return `DateTime { Invalid, reason: ${this.invalidReason} }`;
        }
    }
    /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */ valueOf() {
        return this.toMillis();
    }
    /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */ toMillis() {
        return this.isValid ? this.ts : NaN;
    }
    /**
   * Returns the epoch seconds (including milliseconds in the fractional part) of this DateTime.
   * @return {number}
   */ toSeconds() {
        return this.isValid ? this.ts / 1000 : NaN;
    }
    /**
   * Returns the epoch seconds (as a whole number) of this DateTime.
   * @return {number}
   */ toUnixInteger() {
        return this.isValid ? Math.floor(this.ts / 1000) : NaN;
    }
    /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */ toJSON() {
        return this.toISO();
    }
    /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */ toBSON() {
        return this.toJSDate();
    }
    /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */ toObject(opts = {}) {
        if (!this.isValid) return {};
        const base = {
            ...this.c
        };
        if (opts.includeConfig) {
            base.outputCalendar = this.outputCalendar;
            base.numberingSystem = this.loc.numberingSystem;
            base.locale = this.loc.locale;
        }
        return base;
    }
    /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */ toJSDate() {
        return new Date(this.isValid ? this.ts : NaN);
    }
    // COMPARE
    /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */ diff(otherDateTime, unit = "milliseconds", opts = {}) {
        if (!this.isValid || !otherDateTime.isValid) {
            return Duration.invalid("created by diffing an invalid DateTime");
        }
        const durOpts = {
            locale: this.locale,
            numberingSystem: this.numberingSystem,
            ...opts
        };
        const units = maybeArray(unit).map(Duration.normalizeUnit), otherIsLater = otherDateTime.valueOf() > this.valueOf(), earlier = otherIsLater ? this : otherDateTime, later = otherIsLater ? otherDateTime : this, diffed = diff(earlier, later, units, durOpts);
        return otherIsLater ? diffed.negate() : diffed;
    }
    /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */ diffNow(unit = "milliseconds", opts = {}) {
        return this.diff(DateTime.now(), unit, opts);
    }
    /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval|DateTime}
   */ until(otherDateTime) {
        return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
    }
    /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; only the locale of this DateTime is used
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */ hasSame(otherDateTime, unit, opts) {
        if (!this.isValid) return false;
        const inputMs = otherDateTime.valueOf();
        const adjustedToZone = this.setZone(otherDateTime.zone, {
            keepLocalTime: true
        });
        return adjustedToZone.startOf(unit, opts) <= inputMs && inputMs <= adjustedToZone.endOf(unit, opts);
    }
    /**
   * Equality check
   * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */ equals(other) {
        return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
    }
    /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds towards zero by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {string} [options.rounding="trunc"] - rounding method to use when rounding the numbers in the output. Can be "trunc" (toward zero), "expand" (away from zero), "round", "floor", or "ceil".
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */ toRelative(options = {}) {
        if (!this.isValid) return null;
        const base = options.base || DateTime.fromObject({}, {
            zone: this.zone
        }), padding = options.padding ? this < base ? -options.padding : options.padding : 0;
        let units = [
            "years",
            "months",
            "days",
            "hours",
            "minutes",
            "seconds"
        ];
        let unit = options.unit;
        if (Array.isArray(options.unit)) {
            units = options.unit;
            unit = undefined;
        }
        return diffRelative(base, this.plus(padding), {
            ...options,
            numeric: "always",
            units,
            unit
        });
    }
    /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */ toRelativeCalendar(options = {}) {
        if (!this.isValid) return null;
        return diffRelative(options.base || DateTime.fromObject({}, {
            zone: this.zone
        }), this, {
            ...options,
            numeric: "auto",
            units: [
                "years",
                "months",
                "days"
            ],
            calendary: true
        });
    }
    /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */ static min(...dateTimes) {
        if (!dateTimes.every(DateTime.isDateTime)) {
            throw new InvalidArgumentError("min requires all arguments be DateTimes");
        }
        return bestBy(dateTimes, (i)=>i.valueOf(), Math.min);
    }
    /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */ static max(...dateTimes) {
        if (!dateTimes.every(DateTime.isDateTime)) {
            throw new InvalidArgumentError("max requires all arguments be DateTimes");
        }
        return bestBy(dateTimes, (i)=>i.valueOf(), Math.max);
    }
    // MISC
    /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */ static fromFormatExplain(text, fmt, options = {}) {
        const { locale = null, numberingSystem = null } = options, localeToUse = Locale.fromOpts({
            locale,
            numberingSystem,
            defaultToEN: true
        });
        return explainFromTokens(localeToUse, text, fmt);
    }
    /**
   * @deprecated use fromFormatExplain instead
   */ static fromStringExplain(text, fmt, options = {}) {
        return DateTime.fromFormatExplain(text, fmt, options);
    }
    /**
   * Build a parser for `fmt` using the given locale. This parser can be passed
   * to {@link DateTime.fromFormatParser} to a parse a date in this format. This
   * can be used to optimize cases where many dates need to be parsed in a
   * specific format.
   *
   * @param {String} fmt - the format the string is expected to be in (see
   * description)
   * @param {Object} options - options used to set locale and numberingSystem
   * for parser
   * @returns {TokenParser} - opaque object to be used
   */ static buildFormatParser(fmt, options = {}) {
        const { locale = null, numberingSystem = null } = options, localeToUse = Locale.fromOpts({
            locale,
            numberingSystem,
            defaultToEN: true
        });
        return new TokenParser(localeToUse, fmt);
    }
    /**
   * Create a DateTime from an input string and format parser.
   *
   * The format parser must have been created with the same locale as this call.
   *
   * @param {String} text - the string to parse
   * @param {TokenParser} formatParser - parser from {@link DateTime.buildFormatParser}
   * @param {Object} opts - options taken by fromFormat()
   * @returns {DateTime}
   */ static fromFormatParser(text, formatParser, opts = {}) {
        if (isUndefined(text) || isUndefined(formatParser)) {
            throw new InvalidArgumentError("fromFormatParser requires an input string and a format parser");
        }
        const { locale = null, numberingSystem = null } = opts, localeToUse = Locale.fromOpts({
            locale,
            numberingSystem,
            defaultToEN: true
        });
        if (!localeToUse.equals(formatParser.locale)) {
            throw new InvalidArgumentError(`fromFormatParser called with a locale of ${localeToUse}, ` + `but the format parser was created for ${formatParser.locale}`);
        }
        const { result, zone, specificOffset, invalidReason } = formatParser.explainFromTokens(text);
        if (invalidReason) {
            return DateTime.invalid(invalidReason);
        } else {
            return parseDataToDateTime(result, zone, opts, `format ${formatParser.format}`, text, specificOffset);
        }
    }
    // FORMAT PRESETS
    /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */ static get DATE_SHORT() {
        return DATE_SHORT;
    }
    /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */ static get DATE_MED() {
        return DATE_MED;
    }
    /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */ static get DATE_MED_WITH_WEEKDAY() {
        return DATE_MED_WITH_WEEKDAY;
    }
    /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */ static get DATE_FULL() {
        return DATE_FULL;
    }
    /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */ static get DATE_HUGE() {
        return DATE_HUGE;
    }
    /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */ static get TIME_SIMPLE() {
        return TIME_SIMPLE;
    }
    /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */ static get TIME_WITH_SECONDS() {
        return TIME_WITH_SECONDS;
    }
    /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */ static get TIME_WITH_SHORT_OFFSET() {
        return TIME_WITH_SHORT_OFFSET;
    }
    /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */ static get TIME_WITH_LONG_OFFSET() {
        return TIME_WITH_LONG_OFFSET;
    }
    /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */ static get TIME_24_SIMPLE() {
        return TIME_24_SIMPLE;
    }
    /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */ static get TIME_24_WITH_SECONDS() {
        return TIME_24_WITH_SECONDS;
    }
    /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */ static get TIME_24_WITH_SHORT_OFFSET() {
        return TIME_24_WITH_SHORT_OFFSET;
    }
    /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */ static get TIME_24_WITH_LONG_OFFSET() {
        return TIME_24_WITH_LONG_OFFSET;
    }
    /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */ static get DATETIME_SHORT() {
        return DATETIME_SHORT;
    }
    /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */ static get DATETIME_SHORT_WITH_SECONDS() {
        return DATETIME_SHORT_WITH_SECONDS;
    }
    /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */ static get DATETIME_MED() {
        return DATETIME_MED;
    }
    /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */ static get DATETIME_MED_WITH_SECONDS() {
        return DATETIME_MED_WITH_SECONDS;
    }
    /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */ static get DATETIME_MED_WITH_WEEKDAY() {
        return DATETIME_MED_WITH_WEEKDAY;
    }
    /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */ static get DATETIME_FULL() {
        return DATETIME_FULL;
    }
    /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */ static get DATETIME_FULL_WITH_SECONDS() {
        return DATETIME_FULL_WITH_SECONDS;
    }
    /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */ static get DATETIME_HUGE() {
        return DATETIME_HUGE;
    }
    /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */ static get DATETIME_HUGE_WITH_SECONDS() {
        return DATETIME_HUGE_WITH_SECONDS;
    }
}
/**
 * @private
 */ function friendlyDateTime(dateTimeish) {
    if (DateTime.isDateTime(dateTimeish)) {
        return dateTimeish;
    } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
        return DateTime.fromJSDate(dateTimeish);
    } else if (dateTimeish && typeof dateTimeish === "object") {
        return DateTime.fromObject(dateTimeish);
    } else {
        throw new InvalidArgumentError(`Unknown datetime argument: ${dateTimeish}, of type ${typeof dateTimeish}`);
    }
}
const VERSION = "3.7.2";
;
}),
"[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
}),
"[project]/node_modules/next/dist/client/components/forbidden.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "forbidden", {
    enumerable: true,
    get: function() {
        return forbidden;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)");
// TODO: Add `forbidden` docs
/**
 * @experimental
 * This function allows you to render the [forbidden.js file](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden)
 * within a route segment as well as inject a tag.
 *
 * `forbidden()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * Read more: [Next.js Docs: `forbidden`](https://nextjs.org/docs/app/api-reference/functions/forbidden)
 */ const DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};403`;
function forbidden() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw new Error(`\`forbidden()\` is experimental and only allowed to be enabled when \`experimental.authInterrupts\` is enabled.`);
    }
    const error = new Error(DIGEST);
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/hooks-server-context.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DynamicServerError: null,
    isDynamicServerError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DynamicServerError: function() {
        return DynamicServerError;
    },
    isDynamicServerError: function() {
        return isDynamicServerError;
    }
});
const DYNAMIC_ERROR_CODE = 'DYNAMIC_SERVER_USAGE';
class DynamicServerError extends Error {
    constructor(description){
        super(`Dynamic server usage: ${description}`), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
    }
}
function isDynamicServerError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err) || typeof err.digest !== 'string') {
        return false;
    }
    return err.digest === DYNAMIC_ERROR_CODE;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HTTPAccessErrorStatus: null,
    HTTP_ERROR_FALLBACK_ERROR_CODE: null,
    getAccessFallbackErrorTypeByStatus: null,
    getAccessFallbackHTTPStatus: null,
    isHTTPAccessFallbackError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HTTPAccessErrorStatus: function() {
        return HTTPAccessErrorStatus;
    },
    HTTP_ERROR_FALLBACK_ERROR_CODE: function() {
        return HTTP_ERROR_FALLBACK_ERROR_CODE;
    },
    getAccessFallbackErrorTypeByStatus: function() {
        return getAccessFallbackErrorTypeByStatus;
    },
    getAccessFallbackHTTPStatus: function() {
        return getAccessFallbackHTTPStatus;
    },
    isHTTPAccessFallbackError: function() {
        return isHTTPAccessFallbackError;
    }
});
const HTTPAccessErrorStatus = {
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401
};
const ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
const HTTP_ERROR_FALLBACK_ERROR_CODE = 'NEXT_HTTP_ERROR_FALLBACK';
function isHTTPAccessFallbackError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const [prefix, httpStatus] = error.digest.split(';');
    return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
}
function getAccessFallbackHTTPStatus(error) {
    const httpStatus = error.digest.split(';')[1];
    return Number(httpStatus);
}
function getAccessFallbackErrorTypeByStatus(status) {
    switch(status){
        case 401:
            return 'unauthorized';
        case 403:
            return 'forbidden';
        case 404:
            return 'not-found';
        default:
            return;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/is-next-router-error.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNextRouterError", {
    enumerable: true,
    get: function() {
        return isNextRouterError;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect-error.js [app-rsc] (ecmascript)");
function isNextRouterError(error) {
    return (0, _redirecterror.isRedirectError)(error) || (0, _httpaccessfallback.isHTTPAccessFallbackError)(error);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_isUnrecognizedActionError: null,
    unstable_rethrow: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return _readonlyurlsearchparams.ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return RedirectType;
    },
    forbidden: function() {
        return _forbidden.forbidden;
    },
    notFound: function() {
        return _notfound.notFound;
    },
    permanentRedirect: function() {
        return _redirect.permanentRedirect;
    },
    redirect: function() {
        return _redirect.redirect;
    },
    unauthorized: function() {
        return _unauthorized.unauthorized;
    },
    unstable_isUnrecognizedActionError: function() {
        return unstable_isUnrecognizedActionError;
    },
    unstable_rethrow: function() {
        return _unstablerethrow.unstable_rethrow;
    }
});
const _readonlyurlsearchparams = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/readonly-url-search-params.js [app-rsc] (ecmascript)");
const _redirect = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect.js [app-rsc] (ecmascript)");
const _notfound = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/not-found.js [app-rsc] (ecmascript)");
const _forbidden = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/forbidden.js [app-rsc] (ecmascript)");
const _unauthorized = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/unauthorized.js [app-rsc] (ecmascript)");
const _unstablerethrow = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/unstable-rethrow.js [app-rsc] (ecmascript)");
function unstable_isUnrecognizedActionError() {
    throw new Error('`unstable_isUnrecognizedActionError` can only be used on the client.');
}
const RedirectType = {
    push: 'push',
    replace: 'replace'
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/not-found.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "notFound", {
    enumerable: true,
    get: function() {
        return notFound;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)");
/**
 * This function allows you to render the [not-found.js file](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
 * within a route segment as well as inject a tag.
 *
 * `notFound()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * - In a Server Component, this will insert a `<meta name="robots" content="noindex" />` meta tag and set the status code to 404.
 * - In a Route Handler or Server Action, it will serve a 404 to the caller.
 *
 * Read more: [Next.js Docs: `notFound`](https://nextjs.org/docs/app/api-reference/functions/not-found)
 */ const DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};404`;
function notFound() {
    const error = new Error(DIGEST);
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/readonly-url-search-params.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * ReadonlyURLSearchParams implementation shared between client and server.
 * This file is intentionally not marked as 'use client' or 'use server'
 * so it can be imported by both environments.
 */ /** @internal */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReadonlyURLSearchParams", {
    enumerable: true,
    get: function() {
        return ReadonlyURLSearchParams;
    }
});
class ReadonlyURLSearchParamsError extends Error {
    constructor(){
        super('Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams');
    }
}
class ReadonlyURLSearchParams extends URLSearchParams {
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ append() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ delete() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ set() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ sort() {
        throw new ReadonlyURLSearchParamsError();
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/redirect-error.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    REDIRECT_ERROR_CODE: null,
    isRedirectError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    REDIRECT_ERROR_CODE: function() {
        return REDIRECT_ERROR_CODE;
    },
    isRedirectError: function() {
        return isRedirectError;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect-status-code.js [app-rsc] (ecmascript)");
const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
function isRedirectError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const digest = error.digest.split(';');
    const [errorCode, type] = digest;
    const destination = digest.slice(2, -2).join(';');
    const status = digest.at(-2);
    const statusCode = Number(status);
    return errorCode === REDIRECT_ERROR_CODE && (type === 'replace' || type === 'push') && typeof destination === 'string' && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/redirect-status-code.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RedirectStatusCode", {
    enumerable: true,
    get: function() {
        return RedirectStatusCode;
    }
});
var RedirectStatusCode = /*#__PURE__*/ function(RedirectStatusCode) {
    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
    return RedirectStatusCode;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/redirect.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getRedirectError: null,
    getRedirectStatusCodeFromError: null,
    getRedirectTypeFromError: null,
    getURLFromRedirectError: null,
    permanentRedirect: null,
    redirect: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getRedirectError: function() {
        return getRedirectError;
    },
    getRedirectStatusCodeFromError: function() {
        return getRedirectStatusCodeFromError;
    },
    getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
    },
    getURLFromRedirectError: function() {
        return getURLFromRedirectError;
    },
    permanentRedirect: function() {
        return permanentRedirect;
    },
    redirect: function() {
        return redirect;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect-status-code.js [app-rsc] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect-error.js [app-rsc] (ecmascript)");
const _serverasyncstorage = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/server-async-storage.js [app-rsc] (ecmascript)");
function getRedirectError(url, type, statusCode = _redirectstatuscode.RedirectStatusCode.TemporaryRedirect) {
    const error = new Error(_redirecterror.REDIRECT_ERROR_CODE);
    error.digest = `${_redirecterror.REDIRECT_ERROR_CODE};${type};${url};${statusCode};`;
    return error;
}
function redirect(/** The URL to redirect to */ url, type) {
    type ??= _serverasyncstorage.actionAsyncStorage?.getStore()?.isAction ? 'push' : 'replace';
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.TemporaryRedirect);
}
function permanentRedirect(/** The URL to redirect to */ url, type = 'replace') {
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.PermanentRedirect);
}
function getURLFromRedirectError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.split(';').slice(2, -2).join(';');
}
function getRedirectTypeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw new Error('Not a redirect error');
    }
    return error.digest.split(';', 2)[1];
}
function getRedirectStatusCodeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw new Error('Not a redirect error');
    }
    return Number(error.digest.split(';').at(-2));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/server-async-storage.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Client-safe access to the server-only async-storage singletons. On the
// server these re-export the real storages; in the browser bundle this module
// is aliased to `./server-async-storage.browser` (see
// scripts/generate-browser-variant-aliases.mjs), which exports `undefined`
// stubs so the AsyncLocalStorage modules are never bundled into the client.
// Consumers must guard usage so the stubs are not dereferenced in the browser.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    actionAsyncStorage: null,
    workAsyncStorage: null,
    workUnitAsyncStorage: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    actionAsyncStorage: function() {
        return _actionasyncstorageexternal.actionAsyncStorage;
    },
    workAsyncStorage: function() {
        return _workasyncstorageexternal.workAsyncStorage;
    },
    workUnitAsyncStorage: function() {
        return _workunitasyncstorageexternal.workUnitAsyncStorage;
    }
});
const _actionasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/static-generation-bailout.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    StaticGenBailoutError: null,
    isStaticGenBailoutError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    StaticGenBailoutError: function() {
        return StaticGenBailoutError;
    },
    isStaticGenBailoutError: function() {
        return isStaticGenBailoutError;
    }
});
const NEXT_STATIC_GEN_BAILOUT = 'NEXT_STATIC_GEN_BAILOUT';
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args), this.code = NEXT_STATIC_GEN_BAILOUT;
    }
}
function isStaticGenBailoutError(error) {
    if (typeof error !== 'object' || error === null || !('code' in error)) {
        return false;
    }
    return error.code === NEXT_STATIC_GEN_BAILOUT;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/unauthorized.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unauthorized", {
    enumerable: true,
    get: function() {
        return unauthorized;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)");
// TODO: Add `unauthorized` docs
/**
 * @experimental
 * This function allows you to render the [unauthorized.js file](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized)
 * within a route segment as well as inject a tag.
 *
 * `unauthorized()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 *
 * Read more: [Next.js Docs: `unauthorized`](https://nextjs.org/docs/app/api-reference/functions/unauthorized)
 */ const DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};401`;
function unauthorized() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw new Error(`\`unauthorized()\` is experimental and only allowed to be used when \`experimental.authInterrupts\` is enabled.`);
    }
    const error = new Error(DIGEST);
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/unstable-rethrow.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const _dynamicrenderingutils = __turbopack_context__.r("[project]/node_modules/next/dist/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-rsc] (ecmascript)");
const _isnextroutererror = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/is-next-router-error.js [app-rsc] (ecmascript)");
const _dynamicrendering = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
const _hooksservercontext = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/hooks-server-context.js [app-rsc] (ecmascript)");
function unstable_rethrow(error) {
    if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error) || (0, _hooksservercontext.isDynamicServerError)(error) || (0, _dynamicrenderingutils.isHangingPromiseRejectionError)(error) || (0, _dynamicrendering.isPrerenderInterruptedError)(error)) {
        throw error;
    }
    if (error instanceof Error && 'cause' in error) {
        unstable_rethrow(error.cause);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/esm/build/templates/app-page-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAppPageEntrypoint",
    ()=>createAppPageEntrypoint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$dev$2d$render$2d$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-modules/app-page/dev-render-context.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$instrumentation$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/instrumentation/utils.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/request-meta.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$strip$2d$flight$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/strip-flight-headers.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$parse$2d$request$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-modules/app-page/parse-request-headers.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/base-http/node.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$is$2d$rsc$2d$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/is-rsc-request.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$is$2d$non$2d$html$2d$sec$2d$fetch$2d$dest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/is-non-html-sec-fetch-dest.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$entry$2d$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/entry-constants.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/request/fallback-params.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$manifests$2d$singleton$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/manifests-singleton.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/streaming-metadata.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$routes$2f$app$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/routes/app.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$server$2d$action$2d$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/server-action-request-meta.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript, Next.js server utility) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/response-cache/index.js [app-rsc] (ecmascript, Next.js server utility) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/response-cache/types.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/fallback.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/render-result.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/stream-utils/encoded-tags.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/send-payload.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$route$2d$cache$2d$key$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/route-cache-key.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$size$2d$limit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/size-limit.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$postponed$2d$request$2d$body$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/postponed-request-body.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/url.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/client/components/redirect-status-code.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/scheduler.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/get-segment-param.js [app-rsc] (ecmascript, Next.js server utility)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
/**
 * Builds the cache key for the most complete prerenderable shell we can derive
 * from the shell that matched this request. Only params that can still be
 * filled by `generateStaticParams` are substituted; fully dynamic params stay
 * as placeholders so a request like `/c/foo` can complete `/[one]/[two]` into
 * `/c/[two]` rather than `/c/foo`.
 */ function buildCompletedShellCacheKey(fallbackPathname, remainingPrerenderableParams, params) {
    const prerenderableParamsByName = new Map(remainingPrerenderableParams.map((param)=>[
            param.paramName,
            param
        ]));
    return fallbackPathname.split('/').map((segment)=>{
        const segmentParam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getSegmentParam"])(segment);
        if (!segmentParam) {
            return segment;
        }
        const remainingParam = prerenderableParamsByName.get(segmentParam.paramName);
        if (!remainingParam) {
            return segment;
        }
        const value = params == null ? void 0 : params[remainingParam.paramName];
        if (!value) {
            return segment;
        }
        const encodedValue = Array.isArray(value) ? value.map((item)=>encodeURIComponent(item)).join('/') : encodeURIComponent(value);
        return segment.replace((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["buildDynamicSegmentPlaceholder"])(remainingParam), encodedValue);
    }).join('/') || '/';
}
function createAppPageEntrypoint({ tree, page, pathname, require: __next_app_require__, loadChunk: __next_app_load_chunk__, interopDefault }) {
    const __next_app__ = {
        require: __next_app_require__,
        loadChunk: __next_app_load_chunk__
    };
    const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppPageRouteModule"]({
        definition: {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
            page,
            pathname,
            // The following aren't used in production.
            bundlePath: '',
            filename: '',
            appPaths: []
        },
        userland: {
            loaderTree: tree
        },
        distDir: ("TURBOPACK compile-time value", ".next\\dev") || '',
        relativeProjectDir: ("TURBOPACK compile-time value", "") || ''
    });
    let srcPage = page;
    // turbopack doesn't normalize `/index` in the page name
    // so we need to to process dynamic routes properly
    // TODO: fix turbopack providing differing value from webpack
    if ("TURBOPACK compile-time truthy", 1) {
        srcPage = srcPage.replace(/\/index$/, '') || '/';
    } else if (srcPage === '/index') {
        // we always normalize /index specifically
        srcPage = '/';
    }
    const normalizedSrcPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["normalizeAppPath"])(srcPage);
    // The legacy prerender manifest says whether unmatched values return 404,
    // but does not list all of the route's parameter names. Read them from the
    // route pattern once, since the names do not depend on the request.
    const routeParamNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$routes$2f$app$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["parseNormalizedAppRoute"])(normalizedSrcPage).dynamicSegments.map((segment)=>segment.param.paramName);
    async function handler(req, res, ctx) {
        var _this, _prerenderInfo_fallbackRouteParams, _prerenderInfo_fallbackRootParams, _prerenderInfo_fallbackRouteParams1, _prerenderInfo_fallbackRouteParams2;
        if (ctx.requestMeta) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["setRequestMeta"])(req, ctx.requestMeta);
        }
        if (routeModule.isDev) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["addRequestMeta"])(req, 'devRequestTimingInternalsEnd', process.hrtime.bigint());
        }
        const isMinimalMode = Boolean((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'minimalMode'));
        // Capture the request target before `prepare()` runs, since route
        // normalization (e.g. `normalizeCdnUrl`) rewrites `req.url` and would
        // otherwise change the `http.target` span attribute. This mirrors
        // `BaseServer.handleRequest`, which records the target before normalization.
        const httpTarget = req.url;
        const multiZoneDraftMode = ("TURBOPACK compile-time value", false);
        const prepareResult = await routeModule.prepare(req, res, {
            srcPage,
            multiZoneDraftMode
        });
        if (!prepareResult) {
            res.statusCode = 400;
            res.end('Bad Request');
            ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());
            return null;
        }
        const { buildId, query, params, pageIsDynamic, buildManifest, nextFontManifest, reactLoadableManifest, serverActionsManifest, clientReferenceManifest, subresourceIntegrityManifest, prerenderManifest, prefetchHintsManifest, isDraftMode, resolvedPathname, revalidateOnlyGenerated, routerServerContext, nextConfig, parsedUrl, interceptionRoutePatterns, deploymentId, clientAssetToken, previewProps } = prepareResult;
        let { isOnDemandRevalidate } = prepareResult;
        // We use the resolvedPathname instead of the parsedUrl.pathname because it
        // is not rewritten as resolvedPathname is. This will ensure that the correct
        // prerender info is used instead of using the original pathname as the
        // source.
        const prerenderMatch = routeModule.match(resolvedPathname, prerenderManifest);
        const prerenderInfo = (prerenderMatch == null ? void 0 : prerenderMatch.route) ?? null;
        // A sibling's prerender must not change this route's rendering mode or
        // supply prefetch metadata for its response.
        const prerenderedRoute = routeModule.isDev || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$route$2d$cache$2d$key$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["isRouteCacheOwner"])(resolvedPathname, routeModule.cacheOwner, prerenderManifest.routes[resolvedPathname]) ? prerenderManifest.routes[resolvedPathname] : undefined;
        const isPrerendered = Boolean(prerenderedRoute);
        const userAgent = req.headers['user-agent'] || '';
        const botType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__$3c$locals$3e$__["getBotType"])(userAgent);
        /**
     * If true, this indicates that the request being made is for an app
     * prefetch request.
     */ const isPrefetchRSCRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'isPrefetchRSCRequest') ?? req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_ROUTER_PREFETCH_HEADER"]] === '1' // exclude runtime prefetches, which use '2'
        ;
        // NOTE: Don't delete headers[RSC] yet, it still needs to be used in renderToHTML later
        const isRSCRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'isRSCRequest') ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$is$2d$rsc$2d$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["isRSCRequestHeader"])(req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RSC_HEADER"]]);
        const isPossibleServerAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$server$2d$action$2d$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getIsPossibleServerAction"])(req);
        // For subresource requests (e.g. images or fonts), return plain text 404
        // instead of rendering the not-found route.
        if (normalizedSrcPage === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$entry$2d$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["UNDERSCORE_NOT_FOUND_ROUTE"] && (req.method === 'GET' || req.method === 'HEAD') && !isRSCRequest && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$is$2d$non$2d$html$2d$sec$2d$fetch$2d$dest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["isNonHtmlSecFetchDest"])(req.headers['sec-fetch-dest'])) {
            res.statusCode = 404;
            res.setHeader('Cache-Control', 'private, no-cache, no-store, max-age=0, must-revalidate');
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.end('Not Found');
            ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());
            return null;
        }
        /**
     * If the route being rendered is an app page, and the ppr feature has been
     * enabled, then the given route _could_ support PPR.
     */ const couldSupportPPR = Boolean(nextConfig.cacheComponents);
        // Stash postponed state for server actions when in minimal mode.
        // We extract it here so the RDC is available for the re-render after the action completes.
        const resumeStateLengthHeader = req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_RESUME_STATE_LENGTH_HEADER"]];
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'postponed') && isMinimalMode && couldSupportPPR && isPossibleServerAction && resumeStateLengthHeader && typeof resumeStateLengthHeader === 'string') {
            const stateLength = parseInt(resumeStateLengthHeader, 10);
            const { maxPostponedStateSize, maxPostponedStateSizeBytes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$postponed$2d$request$2d$body$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getMaxPostponedStateSize"])(nextConfig.experimental.maxPostponedStateSize);
            if (!isNaN(stateLength) && stateLength > 0) {
                var _nextConfig_experimental_serverActions;
                if (stateLength > maxPostponedStateSizeBytes) {
                    res.statusCode = 413;
                    res.end((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$postponed$2d$request$2d$body$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getPostponedStateExceededErrorMessage"])(maxPostponedStateSize));
                    ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());
                    return null;
                }
                // Calculate max total body size to prevent buffering excessively large
                // payloads before the action handler checks. We use stateLength (not
                // maxPostponedStateSizeBytes) so the postponed state doesn't eat into
                // the action body budget - it's already validated above.
                const defaultActionBodySizeLimit = '1 MB';
                const actionBodySizeLimit = ((_nextConfig_experimental_serverActions = nextConfig.experimental.serverActions) == null ? void 0 : _nextConfig_experimental_serverActions.bodySizeLimit) ?? defaultActionBodySizeLimit;
                const actionBodySizeLimitBytes = actionBodySizeLimit !== defaultActionBodySizeLimit ? __turbopack_context__.r("[project]/node_modules/next/dist/compiled/bytes/index.js [app-rsc] (ecmascript)").parse(actionBodySizeLimit) : 1024 * 1024 // 1 MB
                ;
                const maxTotalBodySize = stateLength + actionBodySizeLimitBytes;
                const fullBody = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$postponed$2d$request$2d$body$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["readBodyWithSizeLimit"])(req, maxTotalBodySize);
                if (fullBody === null) {
                    res.statusCode = 413;
                    res.end(`Request body exceeded limit. ` + `To configure the body size limit for Server Actions, see: https://nextjs.org/docs/app/api-reference/next-config-js/serverActions#bodysizelimit`);
                    ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());
                    return null;
                }
                if (fullBody.length >= stateLength) {
                    // Extract postponed state from the beginning
                    const postponedState = fullBody.subarray(0, stateLength).toString('utf8');
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["addRequestMeta"])(req, 'postponed', postponedState);
                    // Store the remaining action body for the action handler
                    const actionBody = fullBody.subarray(stateLength);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["addRequestMeta"])(req, 'actionBody', actionBody);
                } else {
                    throw new Error(`invariant: expected ${stateLength} bytes of postponed state but only received ${fullBody.length} bytes`);
                }
            }
        }
        if (typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'postponed') !== 'string' && couldSupportPPR && req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_RESUME_HEADER"]] === '1' && req.method === 'POST') {
            const { maxPostponedStateSize, maxPostponedStateSizeBytes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$postponed$2d$request$2d$body$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getMaxPostponedStateSize"])(nextConfig.experimental.maxPostponedStateSize);
            // Decode the postponed state from the request body, it will come as
            // an array of buffers, so collect them and then concat them to form
            // the string.
            const body = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$postponed$2d$request$2d$body$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["readBodyWithSizeLimit"])(req, maxPostponedStateSizeBytes);
            if (body === null) {
                res.statusCode = 413;
                res.end((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$postponed$2d$request$2d$body$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getPostponedStateExceededErrorMessage"])(maxPostponedStateSize));
                ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());
                return null;
            }
            const postponed = body.toString('utf8');
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["addRequestMeta"])(req, 'postponed', postponed);
        }
        // When enabled, this will allow the use of the `?__nextppronly` query to
        // enable debugging of the static shell.
        const hasDebugStaticShellQuery = ("TURBOPACK compile-time value", false) === '1' && typeof query.__nextppronly !== 'undefined' && couldSupportPPR;
        // When enabled, this will allow the use of the `?__nextppronly` query
        // to enable debugging of the fallback shell.
        const hasDebugFallbackShellQuery = hasDebugStaticShellQuery && query.__nextppronly === 'fallback';
        // Whether the testing API is exposed (dev mode or explicit flag)
        const exposeTestingApi = nextConfig.cacheComponents === true && (routeModule.isDev === true || nextConfig.experimental.exposeTestingApiInProductionBuild === true);
        // Enable the Instant Navigation Testing API. Renders only the prefetched
        // portion of the page, excluding dynamic content. This allows tests to
        // assert on the prefetched UI state deterministically.
        //
        // The instant test cookie is sent automatically with all requests while a
        // navigation lock is held. We treat a request as a test render when the
        // cookie is present and either:
        // - it's a document request (no RSC header) — covers MPA navigations
        // - it's a prefetch RSC request — covers client-side prefetches
        // Regular RSC navigation requests proceed normally even during a locked
        // scope; blocking happens on the client side.
        const isInstantNavigationTest = exposeTestingApi && typeof req.headers.cookie === 'string' && req.headers.cookie.includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_INSTANT_TEST_COOKIE"] + '=') && (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$is$2d$rsc$2d$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["isRSCRequestHeader"])(req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RSC_HEADER"]]) || req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_ROUTER_PREFETCH_HEADER"]] === '1');
        // This page supports PPR if it is marked as being `PARTIALLY_STATIC` in the
        // prerender manifest and this is an app page.
        const isRoutePPREnabled = couldSupportPPR && (((_this = prerenderManifest.routes[normalizedSrcPage] ?? prerenderManifest.dynamicRoutes[normalizedSrcPage]) == null ? void 0 : _this.renderingMode) === 'PARTIALLY_STATIC' || // Ideally we'd want to check the appConfig to see if this page has PPR
        // enabled or not, but that would require plumbing the appConfig through
        // to the server during development. We assume that the page supports it
        // but only during development or when the testing API is exposed.
        (hasDebugStaticShellQuery || isInstantNavigationTest) && (exposeTestingApi || (routerServerContext == null ? void 0 : routerServerContext.experimentalTestProxy) === true));
        const isDebugStaticShell = (hasDebugStaticShellQuery || isInstantNavigationTest) && isRoutePPREnabled;
        // We should enable debugging dynamic accesses when the static shell
        // debugging has been enabled and we're also in development mode.
        const isDebugDynamicAccesses = isDebugStaticShell && routeModule.isDev === true;
        const isDebugFallbackShell = hasDebugFallbackShellQuery && isRoutePPREnabled;
        const isDebugPrerender = isDebugStaticShell || isDebugDynamicAccesses || isDebugFallbackShell;
        // If we're in minimal mode, then try to get the postponed information from
        // the request metadata. If available, use it for resuming the postponed
        // render.
        const minimalPostponed = isRoutePPREnabled ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'postponed') : undefined;
        const hasPostponedState = typeof minimalPostponed === 'string';
        // If PPR is enabled, and this is a RSC request (but not a prefetch), then
        // we can use this fact to only generate the flight data for the request
        // because we can't cache the HTML (as it's also dynamic).
        const staticPrefetchDataRoute = prerenderedRoute == null ? void 0 : prerenderedRoute.prefetchDataRoute;
        const isEnsureStaticPage = (prerenderInfo == null ? void 0 : prerenderInfo._isEnsureStaticPage) === true;
        let isDynamicRSCRequest = isRoutePPREnabled && isRSCRequest && !isPrefetchRSCRequest && // If generated at build time, treat the RSC request as static
        // so we can serve the prebuilt .rsc without a dynamic render.
        // Only do this for routes that have a concrete prefetchDataRoute.
        !staticPrefetchDataRoute && // Do not serve `ensureStatic = "navigation"` with a dynamic response,
        // (we want to do a blocking prerender instead)
        // TODO(ensure-static): express this in a cleaner way
        !isEnsureStaticPage;
        // During a PPR revalidation, the RSC request is not dynamic if postponed
        // metadata is absent. An empty string represents a resume request without
        // postponed state, which should perform a full dynamic render.
        if (isMinimalMode) {
            isDynamicRSCRequest = isDynamicRSCRequest && hasPostponedState;
        }
        // Need to read this before it's stripped by stripFlightHeaders. We don't
        // need to transfer it to the request meta because it's only read
        // within this function; the static segment data should have already been
        // generated, so we will always either return a static response or a 404.
        const rawSegmentPrefetchHeader = req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_ROUTER_SEGMENT_PREFETCH_HEADER"]];
        const segmentPrefetchHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'segmentPrefetchRSCRequest') ?? (isPrefetchRSCRequest ? typeof rawSegmentPrefetchHeader === 'string' ? rawSegmentPrefetchHeader : Array.isArray(rawSegmentPrefetchHeader) ? rawSegmentPrefetchHeader[0] : undefined : undefined);
        // TODO: investigate existing bug with shouldServeStreamingMetadata always
        // being true for a revalidate due to modifying the base-server this.renderOpts
        // when fixing this to correct logic it causes hydration issue since we set
        // serveStreamingMetadata to true during export
        const serveStreamingMetadata = !userAgent ? true : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["shouldServeStreamingMetadata"])(userAgent, nextConfig.htmlLimitedBots);
        // A PPR shell has already closed its head before the dynamic render resumes.
        // Blocking metadata resolved during the resume would therefore be emitted
        // after the head, where HTML-limited bots cannot observe it. Bypass the
        // shell so blocking metadata is included in the initial document head.
        const shouldForceDynamicPPRRender = isRoutePPREnabled && !serveStreamingMetadata;
        const isSSG = Boolean((prerenderInfo || isPrerendered || prerenderManifest.routes[normalizedSrcPage]) && !shouldForceDynamicPPRRender);
        // When a page supports cacheComponents, we can support RDC for Navigations
        const supportsRDCForNavigations = isRoutePPREnabled && nextConfig.cacheComponents === true;
        // In development, we always want to generate dynamic HTML.
        const supportsDynamicResponse = // a data request, in which case we only produce static HTML.
        routeModule.isDev === true || // If this is a draft mode request, it supports dynamic HTML.
        isDraftMode || // If this is not SSG or does not have static paths, then it supports
        // dynamic HTML.
        !isSSG || // If this request has provided postponed data, it supports dynamic
        // HTML.
        hasPostponedState || // If this handler supports onCacheEntryV2, then we can only support
        // dynamic responses if it's a dynamic RSC request and not in minimal mode. If it
        // doesn't support it we must fallback to the default behavior.
        (supportsRDCForNavigations && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'onCacheEntryV2') ? // RSC request, we'll pass the minimal postponed data to the render
        // which will trigger the `supportsDynamicResponse` to be true.
        isDynamicRSCRequest && !isMinimalMode : isDynamicRSCRequest);
        const remainingPrerenderableParams = (prerenderInfo == null ? void 0 : prerenderInfo.remainingPrerenderableParams) ?? [];
        const remainingFallbackRouteParams = nextConfig.cacheComponents ? (prerenderInfo == null ? void 0 : (_prerenderInfo_fallbackRouteParams = prerenderInfo.fallbackRouteParams) == null ? void 0 : _prerenderInfo_fallbackRouteParams.filter((param)=>!remainingPrerenderableParams.some((prerenderableParam)=>prerenderableParam.paramName === param.paramName))) ?? [] : [];
        // Concrete optional routes like `/optional-catchall` can still match their
        // generic shell entry (eg /optional-catchall/[[...slug]]) in the prerender manifest.
        // If the omitted param already resolved to a real prerendered path, keep serving that concrete result.
        const hasOmittedConcreteFallbackParam = isPrerendered && remainingPrerenderableParams.some((param)=>{
            const value = params == null ? void 0 : params[param.paramName];
            return value == null || Array.isArray(value) && value.length === 0;
        });
        const hasUnresolvedRootFallbackParams = (prerenderInfo == null ? void 0 : prerenderInfo.fallback) === null && (((_prerenderInfo_fallbackRootParams = prerenderInfo.fallbackRootParams) == null ? void 0 : _prerenderInfo_fallbackRootParams.length) ?? 0) > 0;
        // SSG writes and navigation RDC reads use the same shell key. Completion
        // uses the matched shell rather than the fully resolved pathname. A request
        // for `/prefix/c/foo` can complete `/prefix/[one]/[two]` to
        // `/prefix/c/[two]`. This avoids creating an entry for every value of
        // `two`.
        //
        // The completed-shell key also applies when unresolved root params require
        // a blocking render. A source shell cannot be shared across root branches.
        // Completion resolves the params into the key as follows:
        // - Root params and other prerenderable params use concrete values.
        // - Never-prerenderable params remain placeholders.
        // The values of those placeholder params must not partition the cache.
        const fallbackPathname = prerenderMatch ? typeof (prerenderInfo == null ? void 0 : prerenderInfo.fallback) === 'string' ? prerenderInfo.fallback : prerenderMatch.source : null;
        let shellCacheKey = null;
        if (nextConfig.cacheComponents && // A closed matcher has no fallback shell. Its generated outputs must
        // retain their concrete cache keys.
        (prerenderInfo == null ? void 0 : prerenderInfo.fallback) !== false && // Never-prerenderable params must stay out of the key even when Partial
        // Prefetching is disabled.
        (nextConfig.partialPrefetching || remainingFallbackRouteParams.length > 0) && fallbackPathname && (prerenderInfo == null ? void 0 : (_prerenderInfo_fallbackRouteParams1 = prerenderInfo.fallbackRouteParams) == null ? void 0 : _prerenderInfo_fallbackRouteParams1.length) && !hasOmittedConcreteFallbackParam) {
            const cacheKey = buildCompletedShellCacheKey(fallbackPathname, remainingPrerenderableParams, params);
            if (cacheKey !== fallbackPathname || remainingFallbackRouteParams.length > 0) {
                shellCacheKey = cacheKey;
            }
        }
        let ssgCacheKey = null;
        let usesShellCacheKey = false;
        if (!isDraftMode && isSSG && !supportsDynamicResponse && !isPossibleServerAction && !hasPostponedState && !isDynamicRSCRequest) {
            if (shellCacheKey !== null) {
                // Normal fallback serving uses the source shell's separate cache
                // lookup. Explicit revalidation skips that path, so it must write the
                // source key here even when no params can be completed.
                if (shellCacheKey !== fallbackPathname || isOnDemandRevalidate) {
                    ssgCacheKey = shellCacheKey;
                    usesShellCacheKey = true;
                }
            } else {
                ssgCacheKey = resolvedPathname;
            }
        }
        // the staticPathKey differs from ssgCacheKey since
        // ssgCacheKey is null in dev since we're always in "dynamic"
        // mode in dev to bypass the cache. It can also be null for partial
        // fallback shells that should remain shared and must not create a
        // param-specific ISR entry, but we still need to honor fallback handling.
        let staticPathKey = ssgCacheKey;
        if (!staticPathKey && (routeModule.isDev || isSSG && pageIsDynamic && (prerenderInfo == null ? void 0 : (_prerenderInfo_fallbackRouteParams2 = prerenderInfo.fallbackRouteParams) == null ? void 0 : _prerenderInfo_fallbackRouteParams2.length) && // Server action requests must not get a staticPathKey, otherwise they
        // enter the fallback rendering block below and return the cached HTML
        // shell with the action result appended, instead of responding with
        // just the RSC action result.
        !isPossibleServerAction)) {
            staticPathKey = resolvedPathname;
        }
        // If this is a request for an app path that should be statically generated
        // and we aren't in the edge runtime, strip the flight headers so it will
        // generate the static response.
        if (!routeModule.isDev && !isDraftMode && isSSG && isRSCRequest && !isDynamicRSCRequest) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$strip$2d$flight$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["stripFlightHeaders"])(req.headers);
        }
        const ComponentMod = {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__,
            tree,
            handler,
            routeModule,
            __next_app__
        };
        // Before rendering (which initializes component tree modules), we have to
        // set the reference manifests to our global store so Server Action's
        // encryption util can access to them at the top level of the page module.
        if (serverActionsManifest && clientReferenceManifest) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$manifests$2d$singleton$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["setManifestsSingleton"])({
                page: srcPage,
                clientReferenceManifest,
                serverActionsManifest
            });
        }
        const method = req.method || 'GET';
        const tracer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getTracer"])();
        const activeSpan = tracer.getActiveScopeSpan();
        const isWrappedByNextServer = Boolean(routerServerContext == null ? void 0 : routerServerContext.isWrappedByNextServer);
        const render404 = async ()=>{
            // TODO: should route-module itself handle rendering the 404
            if (routerServerContext == null ? void 0 : routerServerContext.render404) {
                await routerServerContext.render404(req, res, parsedUrl, false);
            } else {
                res.statusCode = 404;
                res.end('This page could not be found');
            }
            return null;
        };
        try {
            const varyHeader = routeModule.getVaryHeader(resolvedPathname, interceptionRoutePatterns);
            res.setHeader('Vary', varyHeader);
            let parentSpan;
            const invokeRouteModule = async (span, context, renderOperation)=>{
                const nextReq = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NodeNextRequest"](req);
                const nextRes = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NodeNextResponse"](res);
                const result = renderOperation === 'prerender' ? routeModule.prerender(nextReq, nextRes, context) : routeModule.render(nextReq, nextRes, context);
                return result.finally(()=>{
                    if (!span) return;
                    span.setAttributes({
                        'http.status_code': res.statusCode,
                        'next.rsc': isRSCRequest
                    });
                    if (res.statusCode && res.statusCode >= 500) {
                        // For 5xx status codes: SHOULD be set to 'Error' span status.
                        // x-ref: https://opentelemetry.io/docs/specs/semconv/http/http-spans/#status
                        span.setStatus({
                            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["SpanStatusCode"].ERROR
                        });
                        // For span status 'Error', SHOULD set 'error.type' attribute.
                        span.setAttribute('error.type', res.statusCode.toString());
                    }
                    const rootSpanAttributes = tracer.getRootSpanAttributes();
                    // We were unable to get attributes, probably OTEL is not enabled
                    if (!rootSpanAttributes) {
                        return;
                    }
                    if (rootSpanAttributes.get('next.span_type') !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["BaseServerSpan"].handleRequest) {
                        console.warn(`Unexpected root span type '${rootSpanAttributes.get('next.span_type')}'. Please report this Next.js issue https://github.com/vercel/next.js`);
                        return;
                    }
                    const route = rootSpanAttributes.get('next.route') || normalizedSrcPage;
                    const name = isRSCRequest ? `RSC ${method} ${route}` : `${method} ${route}`;
                    span.setAttributes({
                        'next.route': route,
                        'http.route': route,
                        'next.span_name': name
                    });
                    span.updateName(name);
                    // Propagate http.route to the parent span if one exists (e.g.
                    // a platform-created HTTP span in adapter deployments).
                    if (parentSpan && parentSpan !== span) {
                        parentSpan.setAttribute('http.route', route);
                        parentSpan.updateName(name);
                    }
                });
            };
            const incrementalCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'incrementalCache') || await routeModule.getIncrementalCache(req, nextConfig, previewProps, prerenderManifest, isMinimalMode);
            incrementalCache == null ? void 0 : incrementalCache.resetRequestCache();
            globalThis.__incrementalCache = incrementalCache;
            const doRender = async ({ span, postponed, fallbackRouteParams, renderOperation, allowEmptyStaticShell })=>{
                var _prerenderManifest_dynamicRoutes_normalizedSrcPage, _prerenderManifest_dynamicRoutes_normalizedSrcPage1;
                // A static page may have stripped Flight headers before reaching this
                // render. Parse only when the response cache invokes the render.
                const parsedRequestHeaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$parse$2d$request$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["parseRequestHeaders"])(req.headers, {
                    isRoutePPREnabled,
                    previewModeId: previewProps == null ? void 0 : previewProps.previewModeId
                });
                const routeMatch = {
                    resolvedPathname
                };
                const dev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$dev$2d$render$2d$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createDevRenderContext"])(req);
                const context = {
                    query,
                    params,
                    page: normalizedSrcPage,
                    routeMatch,
                    parsedRequestHeaders,
                    sharedContext: {
                        buildId,
                        deploymentId,
                        clientAssetToken
                    },
                    dev,
                    fallbackRouteParams,
                    renderOpts: {
                        App: ()=>null,
                        Document: ()=>null,
                        pageConfig: {},
                        ComponentMod,
                        Component: interopDefault(ComponentMod),
                        params,
                        routeModule,
                        page: srcPage,
                        postponed,
                        allowEmptyStaticShell,
                        serveStreamingMetadata,
                        supportsDynamicResponse: renderOperation === 'render' && (typeof postponed === 'string' || supportsDynamicResponse),
                        buildManifest,
                        nextFontManifest,
                        reactLoadableManifest,
                        subresourceIntegrityManifest,
                        setCacheStatus: routerServerContext == null ? void 0 : routerServerContext.setCacheStatus,
                        setIsrStatus: routerServerContext == null ? void 0 : routerServerContext.setIsrStatus,
                        setReactDebugChannel: routerServerContext == null ? void 0 : routerServerContext.setReactDebugChannel,
                        sendErrorsToBrowser: routerServerContext == null ? void 0 : routerServerContext.sendErrorsToBrowser,
                        dir: ("TURBOPACK compile-time truthy", 1) ? require('path').join(/* turbopackIgnore: true */ process.cwd(), routeModule.relativeProjectDir) : "TURBOPACK unreachable",
                        isDraftMode,
                        botType,
                        isOnDemandRevalidate,
                        isPossibleServerAction,
                        assetPrefix: routeModule.getAssetPrefixForRender(routerServerContext, nextConfig.assetPrefix),
                        nextConfigOutput: nextConfig.output,
                        crossOrigin: nextConfig.crossOrigin,
                        trailingSlash: nextConfig.trailingSlash,
                        images: nextConfig.images,
                        previewProps,
                        enableTainting: nextConfig.experimental.taint,
                        reactMaxHeadersLength: nextConfig.reactMaxHeadersLength,
                        multiZoneDraftMode,
                        prefetchHints: prefetchHintsManifest,
                        // With dynamicParams = false, every parameter is restricted to the
                        // paths generated at build time. Advertise this even for allowed
                        // URLs. Read the current manifest here because dev updates it as
                        // routes compile.
                        notFoundParams: (routeModule.isDev ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'devNotFoundParams') : undefined) ?? ((_prerenderManifest_dynamicRoutes_normalizedSrcPage = prerenderManifest.dynamicRoutes[normalizedSrcPage]) == null ? void 0 : _prerenderManifest_dynamicRoutes_normalizedSrcPage.notFoundParams) ?? (((_prerenderManifest_dynamicRoutes_normalizedSrcPage1 = prerenderManifest.dynamicRoutes[normalizedSrcPage]) == null ? void 0 : _prerenderManifest_dynamicRoutes_normalizedSrcPage1.fallback) === false ? routeParamNames : undefined),
                        incrementalCache,
                        cacheLifeProfiles: nextConfig.cacheLife,
                        staticPageGenerationTimeout: nextConfig.staticPageGenerationTimeout,
                        basePath: nextConfig.basePath,
                        serverActions: nextConfig.experimental.serverActions,
                        logServerFunctions: typeof nextConfig.logging === 'object' && Boolean(nextConfig.logging.serverFunctions),
                        ...isDebugStaticShell || isDebugDynamicAccesses || isDebugFallbackShell ? {
                            isBuildTimePrerendering: true,
                            isDebugDynamicAccesses: isDebugDynamicAccesses
                        } : {},
                        cacheComponents: Boolean(nextConfig.cacheComponents),
                        partialPrefetching: nextConfig.partialPrefetching,
                        // A fallback shell can only be upgraded to a concrete version if at
                        // least one of its fallback params is a `generateStaticParams`
                        // candidate (`remainingPrerenderableParams`), and only when Partial
                        // Prefetching is enabled (the upgrade itself is gated on it above).
                        // This gates whether the per-segment prefetch responses are flagged
                        // `isUpgradeableISRFallback`; without an upgrade to wait for, the
                        // client should not retry the prefetch.
                        isFallbackUpgradeable: Boolean(nextConfig.partialPrefetching) && remainingPrerenderableParams.length > 0,
                        validationLevel: nextConfig.experimental.instantInsights.validationLevel,
                        experimental: {
                            isRoutePPREnabled,
                            expireTime: nextConfig.expireTime,
                            staleTimes: nextConfig.experimental.staleTimes,
                            dynamicOnHover: Boolean(nextConfig.experimental.dynamicOnHover),
                            optimisticRouting: Boolean(nextConfig.experimental.optimisticRouting),
                            parallelRouteMetadata: Boolean(nextConfig.experimental.parallelRouteMetadata),
                            inlineCss: Boolean(nextConfig.experimental.inlineCss),
                            prefetchInlining: nextConfig.experimental.prefetchInlining ?? false,
                            authInterrupts: Boolean(nextConfig.experimental.authInterrupts),
                            reactBrowserBailout: Boolean(nextConfig.experimental.reactBrowserBailout),
                            serverComponentsHmrCancellation: Boolean(nextConfig.experimental.serverComponentsHmrCancellation),
                            useCacheTimeout: nextConfig.experimental.useCacheTimeout,
                            durableUseCacheEntries: Boolean(nextConfig.experimental.durableUseCacheEntries),
                            cachedNavigations: nextConfig.experimental.cachedNavigations ?? false,
                            clientTraceMetadata: nextConfig.experimental.clientTraceMetadata || [],
                            clientParamParsingOrigins: nextConfig.experimental.clientParamParsingOrigins,
                            maxPostponedStateSizeBytes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$size$2d$limit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["parseMaxPostponedStateSize"])(nextConfig.experimental.maxPostponedStateSize),
                            disableResumeDataCacheCompression: nextConfig.experimental.disableResumeDataCacheCompression ?? false,
                            exposeTestingApi
                        },
                        waitUntil: ctx.waitUntil,
                        onClose: (cb)=>{
                            res.on('close', cb);
                        },
                        onAfterTaskError: ()=>{},
                        onInstrumentationRequestError: (error, errorContext, silenceLog)=>routeModule.onRequestError(req, error, errorContext, silenceLog, routerServerContext),
                        err: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'invokeError')
                    }
                };
                const result = await invokeRouteModule(span, context, renderOperation);
                // Keep recovery output separate from successful response cache entries.
                if ('error' in result) {
                    ;
                    req.fetchMetrics = result.result.metadata.fetchMetrics;
                    return result;
                }
                const { metadata } = result;
                const { cacheControl, headers = {}, fetchTags: cacheTags, fetchMetrics } = metadata;
                // Apply the `expireTime` fallback as soon as we have the render's
                // `cacheControl`, so every downstream consumer (the cache stored via
                // `incrementalCache.set`, the response Cache-Control header, the outgoing
                // entry returned to `handleResponse`) sees a finalized `cacheControl`
                // with a populated `expire`. This mirrors the build-time fallback in
                // `build/index.ts` so we don't apply an expire to routes that opt out of
                // revalidation entirely (`revalidate: false`) or that are dynamic
                // (`revalidate: 0`).
                if (cacheControl && cacheControl.revalidate !== false && cacheControl.revalidate > 0 && cacheControl.expire === undefined) {
                    cacheControl.expire = nextConfig.expireTime;
                }
                if (cacheTags) {
                    headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_CACHE_TAGS_HEADER"]] = cacheTags;
                }
                // Pull any fetch metrics from the render onto the request.
                ;
                req.fetchMetrics = fetchMetrics;
                // we don't throw static to dynamic errors in dev as isSSG
                // is a best guess in dev since we don't have the prerender pass
                // to know whether the path is actually static or not
                if (isSSG && (cacheControl == null ? void 0 : cacheControl.revalidate) === 0 && !routeModule.isDev && !isRoutePPREnabled) {
                    const staticBailoutInfo = metadata.staticBailoutInfo;
                    const err = new Error(`Page changed from static to dynamic at runtime ${resolvedPathname}${(staticBailoutInfo == null ? void 0 : staticBailoutInfo.description) ? `, reason: ${staticBailoutInfo.description}` : ``}` + `\nsee more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`);
                    if (staticBailoutInfo == null ? void 0 : staticBailoutInfo.stack) {
                        const stack = staticBailoutInfo.stack;
                        err.stack = err.message + stack.substring(stack.indexOf('\n'));
                    }
                    throw err;
                }
                return {
                    value: {
                        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["CachedRouteKind"].APP_PAGE,
                        html: result,
                        headers,
                        rscData: metadata.flightData,
                        postponed: metadata.postponed,
                        status: metadata.statusCode,
                        segmentData: metadata.segmentData
                    },
                    cacheControl
                };
            };
            const responseGenerator = async ({ hasResolved, previousCacheEntry: previousIncrementalCacheEntry, isRevalidating, span, forceStaticRender = false })=>{
                const isProduction = routeModule.isDev === false;
                const didRespond = hasResolved || res.writableEnded;
                const reportRevalidationError = (error)=>routeModule.onRequestError(req, error, {
                        routerKind: 'App Router',
                        routePath: srcPage,
                        routeType: 'render',
                        revalidateReason: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$instrumentation$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRevalidateReason"])({
                            isStaticGeneration: isSSG,
                            isOnDemandRevalidate
                        })
                    }, false, routerServerContext);
                try {
                    var _prerenderInfo_fallbackRouteParams;
                    // skip on-demand revalidate if cache is not present and
                    // revalidate-if-generated is set
                    if (isOnDemandRevalidate && revalidateOnlyGenerated && !previousIncrementalCacheEntry && !isMinimalMode) {
                        if (routerServerContext == null ? void 0 : routerServerContext.render404) {
                            await routerServerContext.render404(req, res);
                        } else {
                            res.statusCode = 404;
                            res.end('This page could not be found');
                        }
                        return null;
                    }
                    let fallbackMode;
                    if (prerenderInfo) {
                        fallbackMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["parseFallbackField"])(prerenderInfo.fallback);
                    }
                    // A closed matcher rejects new paths, not regeneration of paths that
                    // were produced by the build. Their cache entries can be invalidated
                    // or evicted without removing the path from the build manifest.
                    if (fallbackMode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["FallbackMode"].NOT_FOUND && isPrerendered) {
                        fallbackMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["FallbackMode"].BLOCKING_STATIC_RENDER;
                    }
                    if (nextConfig.partialPrefetching && (prerenderInfo == null ? void 0 : prerenderInfo.fallback) === null && // TODO(ensure-static): express this in a cleaner way
                    !isEnsureStaticPage && !prerenderInfo.isExplicitlyBlocking && !hasOmittedConcreteFallbackParam && !hasUnresolvedRootFallbackParams && remainingPrerenderableParams.length > 0) {
                        // Generic source shells without unresolved root params don't have a
                        // concrete fallback file of their own, so they're marked as blocking.
                        // When we can complete the shell into a more specific
                        // prerendered shell for this request, treat it like a prerender
                        // fallback so we can serve that shell instead of blocking on the full
                        // route. Root-param shells stay blocking, since unknown root branches
                        // should not inherit a shell from another generated branch.
                        fallbackMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["FallbackMode"].PRERENDER;
                    }
                    // When serving a request that requires blocking metadata, we want to
                    // use a blocking render instead of the prerendered fallback. Without
                    // PPR, preserve the existing behavior for built-in bots.
                    if (fallbackMode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["FallbackMode"].PRERENDER && (isRoutePPREnabled ? !serveStreamingMetadata : Boolean(botType))) {
                        fallbackMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["FallbackMode"].BLOCKING_STATIC_RENDER;
                    }
                    if ((previousIncrementalCacheEntry == null ? void 0 : previousIncrementalCacheEntry.isStale) === -1) {
                        isOnDemandRevalidate = true;
                    }
                    // On-demand revalidation blocks for admitted paths. Cache contents
                    // must not make an otherwise closed path eligible for generation.
                    if (isOnDemandRevalidate && fallbackMode !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["FallbackMode"].NOT_FOUND) {
                        fallbackMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["FallbackMode"].BLOCKING_STATIC_RENDER;
                    }
                    if (// below. Only production, forced background work, and explicit
                    // shell debugging may enter fallback prerender handling.
                    (isProduction || forceStaticRender || isDebugPrerender) && !isMinimalMode && fallbackMode !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["FallbackMode"].BLOCKING_STATIC_RENDER && staticPathKey && !didRespond && !isDraftMode && pageIsDynamic && (isProduction || !isPrerendered)) {
                        // When cacheComponents is enabled, we can use the fallback
                        // response if the request is not a dynamic RSC request because the
                        // RSC data when this feature flag is enabled does not contain any
                        // param references. Without this feature flag enabled, the RSC data
                        // contains param references, and therefore we can't use the fallback.
                        if (isRoutePPREnabled && (nextConfig.cacheComponents ? !isDynamicRSCRequest : !isRSCRequest)) {
                            const cacheKey = isProduction && typeof (prerenderInfo == null ? void 0 : prerenderInfo.fallback) === 'string' ? prerenderInfo.fallback : normalizedSrcPage;
                            let fallbackRouteParams;
                            if (isProduction) {
                                // In production, rely on the prerender manifest's fallback
                                // entry — the authoritative set computed at build time by
                                // `buildAppStaticPaths`.
                                if (prerenderInfo == null ? void 0 : prerenderInfo.fallbackRouteParams) {
                                    fallbackRouteParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createOpaqueFallbackRouteParams"])(prerenderInfo.fallbackRouteParams);
                                } else if (isDebugFallbackShell) {
                                    fallbackRouteParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getFallbackRouteParams"])(normalizedSrcPage, routeModule);
                                } else {
                                    fallbackRouteParams = null;
                                }
                            } else {
                                // Dev selects the source for static-shell debug renders from
                                // the per-URL `getStaticPaths` result. The dev prerender
                                // manifest does not contain these ad-hoc paths. `base-server`
                                // passes the source's fallback params in request metadata.
                                // These renders need the source set, not the completed target's
                                // potentially smaller `stagedFallbackParams`.
                                if (isDebugFallbackShell) {
                                    fallbackRouteParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getFallbackRouteParams"])(normalizedSrcPage, routeModule);
                                } else if (isDebugStaticShell) {
                                    fallbackRouteParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'fallbackRouteParams') ?? null;
                                } else {
                                    fallbackRouteParams = null;
                                }
                            }
                            // Debug rendering stages the params of the selected source shell.
                            if (isDebugStaticShell) {
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["addRequestMeta"])(req, 'stagedFallbackParams', fallbackRouteParams);
                            }
                            // We use the response cache here to handle the revalidation and
                            // management of the fallback shell.
                            const fallbackResponse = await routeModule.handleResponse({
                                cacheKey,
                                req,
                                nextConfig,
                                routeKind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
                                isFallback: true,
                                previewProps,
                                prerenderManifest,
                                isRoutePPREnabled,
                                responseGenerator: async ()=>doRender({
                                        span,
                                        // We pass `undefined` as rendering a fallback isn't resumed
                                        // here.
                                        postponed: undefined,
                                        // Always serve the shell that matched this request
                                        // immediately. If there are still prerenderable params left,
                                        // the background path below will complete the shell into a
                                        // more specific cache entry for later requests.
                                        fallbackRouteParams,
                                        renderOperation: 'prerender',
                                        allowEmptyStaticShell: isInstantNavigationTest || undefined
                                    }),
                                waitUntil: ctx.waitUntil,
                                isMinimalMode
                            });
                            if (fallbackResponse === null || 'error' in fallbackResponse) {
                                return fallbackResponse;
                            }
                            // Otherwise, if we did get a fallback response, we should return it.
                            if (fallbackResponse) {
                                if (!isMinimalMode && isRoutePPREnabled && // Upgrading a fallback shell into a more specific ISR entry is
                                // only done when Partial Prefetching is enabled, mirroring the
                                // `partialFallback` flag the adapter emits for deployments.
                                nextConfig.partialPrefetching && // Match the build-time contract: only fallback shells that can
                                // still be completed with prerenderable params should upgrade.
                                remainingPrerenderableParams.length > 0 && ssgCacheKey && incrementalCache && !isOnDemandRevalidate && !isDebugFallbackShell && // The testing API relies on deterministic shell behavior, so
                                // don't upgrade fallback shells in the background when it's
                                // exposed.
                                !exposeTestingApi && // Instant Navigation Testing API requests intentionally keep
                                // the route in shell mode; don't upgrade these in background.
                                !isInstantNavigationTest) {
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["scheduleOnNextTick"])(async ()=>{
                                        const responseCache = routeModule.getResponseCache(req);
                                        try {
                                            // Only the params that were just specialized should be
                                            // removed from the fallback render. Any remaining fallback
                                            // params stay deferred so the revalidated result is a more
                                            // specific shell (e.g. `/prefix/c/[two]`), not a fully
                                            // concrete route (`/prefix/c/foo`).
                                            const result = await responseCache.revalidate(ssgCacheKey, incrementalCache, isRoutePPREnabled, false, (c)=>{
                                                return doRender({
                                                    span: c.span,
                                                    postponed: undefined,
                                                    fallbackRouteParams: remainingFallbackRouteParams.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createOpaqueFallbackRouteParams"])(remainingFallbackRouteParams) : null,
                                                    renderOperation: 'prerender'
                                                });
                                            }, null, hasResolved, ctx.waitUntil);
                                            if (result !== null && 'error' in result) {
                                                throw result.error;
                                            }
                                        } catch (err) {
                                            console.error('Error revalidating the page in the background', err);
                                        }
                                    });
                                }
                                // Remove the cache control from the response to prevent it from being
                                // used in the surrounding cache.
                                delete fallbackResponse.cacheControl;
                                return fallbackResponse;
                            }
                        }
                    }
                    // Only requests that aren't revalidating can be resumed. If we have the
                    // minimal postponed data, then we should resume the render with it.
                    let postponed = !isOnDemandRevalidate && !isRevalidating && minimalPostponed ? minimalPostponed : undefined;
                    let hasFullyStaticCacheEntry = false;
                    if (// use the postponed data from the static render (if available). This
                    // ensures that we can utilize the resume data cache (RDC) from the static
                    // render to ensure that the data is consistent between the static and
                    // dynamic renders (for navigations) or when re-rendering after a server
                    // action.
                    // Only enable RDC for Navigations if the feature is enabled.
                    supportsRDCForNavigations && ("TURBOPACK compile-time value", "nodejs") !== 'edge' && !isMinimalMode && incrementalCache && // Include both dynamic RSC requests (navigations) and server actions
                    (isDynamicRSCRequest || isPossibleServerAction) && // We don't typically trigger an on-demand revalidation for dynamic RSC
                    // requests, as we're typically revalidating the page in the background
                    // instead. However, if the cache entry is stale, we should trigger a
                    // background revalidation on dynamic RSC requests. This prevents us
                    // from entering an infinite loop of revalidations.
                    !forceStaticRender) {
                        const incrementalCacheKey = shellCacheKey ?? resolvedPathname;
                        const incrementalCacheEntry = await incrementalCache.get(incrementalCacheKey, {
                            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["IncrementalCacheKind"].APP_PAGE,
                            route: routeModule.cacheOwner,
                            isRoutePPREnabled: true,
                            isFallback: false
                        });
                        // If the cache entry is found, we should use the postponed data from
                        // the cache.
                        if (incrementalCacheEntry && incrementalCacheEntry.value && incrementalCacheEntry.value.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["CachedRouteKind"].APP_PAGE) {
                            // CRITICAL: we're assigning the postponed data from the cache entry
                            // here as we're using the RDC to resume the render.
                            postponed = incrementalCacheEntry.value.postponed;
                            hasFullyStaticCacheEntry = postponed === undefined;
                            // If the cache entry is stale, we should trigger a background
                            // revalidation so that subsequent requests will get a fresh response.
                            if (incrementalCacheEntry && // We want to trigger this flow if the cache entry is stale and if
                            // the requested revalidation flow is either foreground or
                            // background.
                            (incrementalCacheEntry.isStale === -1 || incrementalCacheEntry.isStale === true)) {
                                // We want to schedule this on the next tick to ensure that the
                                // render is not blocked on it.
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["scheduleOnNextTick"])(async ()=>{
                                    const responseCache = routeModule.getResponseCache(req);
                                    try {
                                        const result = await responseCache.revalidate(incrementalCacheKey, incrementalCache, isRoutePPREnabled, false, (c)=>responseGenerator({
                                                ...c,
                                                // CRITICAL: we need to set this to true as we're
                                                // revalidating in the background and typically this dynamic
                                                // RSC request is not treated as static.
                                                forceStaticRender: true
                                            }), // previous cache entry here (which is stale) will switch on
                                        // isOnDemandRevalidate and break the prerendering.
                                        null, hasResolved, ctx.waitUntil);
                                        if (result !== null && 'error' in result) {
                                            throw result.error;
                                        }
                                    } catch (err) {
                                        console.error('Error revalidating the page in the background', err);
                                    }
                                });
                            }
                        }
                    }
                    // When we're in minimal mode, if we're trying to debug the static shell,
                    // return an empty App Page response instead of resuming the dynamic
                    // render. The static shell has already been streamed by the platform.
                    if ((isDebugStaticShell || isDebugDynamicAccesses) && typeof postponed !== 'undefined') {
                        return {
                            cacheControl: {
                                revalidate: 1,
                                expire: undefined
                            },
                            value: {
                                kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["CachedRouteKind"].APP_PAGE,
                                html: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["default"].fromStatic('', isRSCRequest ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RSC_CONTENT_TYPE_HEADER"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["HTML_CONTENT_TYPE_HEADER"]),
                                rscData: undefined,
                                postponed,
                                segmentData: undefined,
                                headers: undefined,
                                status: undefined
                            }
                        };
                    }
                    const placeholderFallbackRouteParams = // defer only the unresolved subset instead of forcing all fallback
                    // params to suspend.
                    !routeModule.isDev && pageIsDynamic && (prerenderInfo == null ? void 0 : prerenderInfo.fallbackRouteParams) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getPlaceholderFallbackRouteParams"])(params, prerenderInfo.fallbackRouteParams) : null;
                    const fallbackRouteParamsForRender = placeholderFallbackRouteParams && placeholderFallbackRouteParams.length > 0 ? placeholderFallbackRouteParams : prerenderInfo == null ? void 0 : prerenderInfo.fallbackRouteParams;
                    const hasPlaceholderFallbackRouteParams = placeholderFallbackRouteParams != null && placeholderFallbackRouteParams.length > 0;
                    // When route-module.ts resolved partial nxtP* params during
                    // background revalidation, filter fallbackRouteParams to only the
                    // params that are still unresolved. This lets doRender produce an
                    // intermediate PPR shell that suspends only for those params.
                    let effectiveFallbackRouteParams = null;
                    if (nextConfig.cacheComponents && (prerenderInfo == null ? void 0 : prerenderInfo.fallbackRouteParams)) {
                        const resolvedKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'resolvedRouteParamKeys');
                        if (resolvedKeys && resolvedKeys.size > 0) {
                            effectiveFallbackRouteParams = prerenderInfo.fallbackRouteParams.filter((param)=>!resolvedKeys.has(param.paramName));
                        }
                    }
                    const fallbackRouteParams = // non-prerendered URL, use the prerender manifest's fallback route
                    // params which correctly identifies which params are unknown.
                    (isProduction && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'renderFallbackShell') || hasPlaceholderFallbackRouteParams || isDebugStaticShell && !isPrerendered) && fallbackRouteParamsForRender ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createOpaqueFallbackRouteParams"])(fallbackRouteParamsForRender) : // prerender suspends only for the unresolved params.
                    effectiveFallbackRouteParams && effectiveFallbackRouteParams.length > 0 && effectiveFallbackRouteParams.length < ((prerenderInfo == null ? void 0 : (_prerenderInfo_fallbackRouteParams = prerenderInfo.fallbackRouteParams) == null ? void 0 : _prerenderInfo_fallbackRouteParams.length) ?? 0) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createOpaqueFallbackRouteParams"])(effectiveFallbackRouteParams) : // shared entry. Per-request resumes resolve those params
                    // instead. Blocking renders and RSC-triggered revalidations
                    // both need this restriction.
                    //
                    // The serving modes obtain the unresolved params differently:
                    // - `next start` defers them in this branch.
                    // - Minimal mode uses the platform's placeholders above.
                    // The platform strips never-prerenderable param values before
                    // calling the origin.
                    !isMinimalMode && (usesShellCacheKey || forceStaticRender && shellCacheKey !== null) && remainingFallbackRouteParams.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createOpaqueFallbackRouteParams"])(remainingFallbackRouteParams) : isDebugFallbackShell ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getFallbackRouteParams"])(normalizedSrcPage, routeModule) : null;
                    // Staging defers params without replacing their values with opaque
                    // placeholders. A resumed render reads the selected artifact's mask
                    // from its postponed state.
                    if ((isProduction || isDebugStaticShell) && nextConfig.cacheComponents) {
                        let stagedFallbackParams;
                        if (hasPlaceholderFallbackRouteParams) {
                            stagedFallbackParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createOpaqueFallbackRouteParams"])(placeholderFallbackRouteParams);
                        } else if (isDebugStaticShell) {
                            stagedFallbackParams = fallbackRouteParams;
                        } else if (hasFullyStaticCacheEntry || isPrerendered) {
                            stagedFallbackParams = null;
                        } else if (postponed && (prerenderInfo == null ? void 0 : prerenderInfo.fallbackRouteParams)) {
                            // App-render uses this source-shell set only when the supplied
                            // state does not record its own fallback params.
                            stagedFallbackParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createOpaqueFallbackRouteParams"])(prerenderInfo.fallbackRouteParams);
                        } else if (prerenderInfo) {
                            stagedFallbackParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getStagedFallbackParams"])(prerenderInfo);
                        } else {
                            stagedFallbackParams = null;
                        }
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["addRequestMeta"])(req, 'stagedFallbackParams', stagedFallbackParams);
                    }
                    // Forced static and debug renders are prerenders even when the
                    // surrounding request otherwise supports dynamic rendering.
                    const isRequestSpecificRender = !forceStaticRender && !isDebugPrerender && (supportsDynamicResponse || isPossibleServerAction);
                    // Perform the render.
                    const result = await doRender({
                        span,
                        postponed,
                        fallbackRouteParams,
                        renderOperation: isRequestSpecificRender ? 'render' : 'prerender',
                        allowEmptyStaticShell: isInstantNavigationTest || undefined
                    });
                    // The response cache already served the stale entry, so response
                    // delivery cannot report this background failure.
                    if ('error' in result && hasResolved) {
                        await reportRevalidationError(result.error);
                    }
                    return result;
                } catch (err) {
                    // The foreground handler reports errors while it awaits a response.
                    // Report here only after the cache has resolved that response.
                    if (hasResolved) {
                        await reportRevalidationError(err);
                    }
                    throw err;
                }
            };
            const invokeOnCacheEntry = (cacheEntry)=>{
                var _parseUrl;
                // If we support RDC for Navigations, prefer the callback that can
                // deliver postponed state for both document and RSC requests.
                const onCacheEntry = supportsRDCForNavigations ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'onCacheEntryV2') ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'onCacheEntry') : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'onCacheEntry');
                if (!onCacheEntry) {
                    return false;
                }
                const rawCacheEntryUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'initURL') ?? req.url;
                const cacheEntryUrl = rawCacheEntryUrl ? ((_parseUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["parseUrl"])(rawCacheEntryUrl)) == null ? void 0 : _parseUrl.pathname) ?? rawCacheEntryUrl : undefined;
                return onCacheEntry(cacheEntry, {
                    url: cacheEntryUrl
                });
            };
            const resumeRender = (body, postponed, span)=>{
                // Attach the continuation before rendering so the prelude can start
                // streaming immediately.
                const transformer = new TransformStream();
                body.push(transformer.readable);
                // This metadata supplies fallback params when the saved state does not
                // record them. App-render uses the saved state's own set when present.
                if (nextConfig.cacheComponents && (prerenderInfo == null ? void 0 : prerenderInfo.fallbackRouteParams)) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["addRequestMeta"])(req, 'stagedFallbackParams', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createOpaqueFallbackRouteParams"])(prerenderInfo.fallbackRouteParams));
                }
                // Start the resume without awaiting it. The response consumes the
                // continuation stream attached above.
                doRender({
                    span,
                    postponed,
                    // The resume retains concrete param values; staging only defers
                    // access.
                    fallbackRouteParams: null,
                    renderOperation: 'render'
                }).then(async (result)=>{
                    var _result_value;
                    if (!result) {
                        throw new Error('Invariant: expected a result to be returned');
                    }
                    if ('error' in result) {
                        throw result.error;
                    }
                    if (((_result_value = result.value) == null ? void 0 : _result_value.kind) !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["CachedRouteKind"].APP_PAGE) {
                        var _result_value1;
                        throw new Error(`Invariant: expected a page response, got ${(_result_value1 = result.value) == null ? void 0 : _result_value1.kind}`);
                    }
                    // Pipe the resume result to the transformer.
                    await result.value.html.pipeTo(transformer.writable);
                }).catch((err)=>{
                    // An error occurred during piping or preparing the render, abort
                    // the transformers writer so we can terminate the stream.
                    transformer.writable.abort(err).catch((e)=>{
                        console.error("couldn't abort transformer", e);
                    });
                });
            };
            const handleResponse = async (span)=>{
                var _cacheEntry_value, _cachedData_headers;
                // Development evaluates the configured policy without emitting its
                // production matchers. Use that outcome at the same admission boundary.
                const devParamMatchingRejected = routeModule.isDev && !isDebugPrerender && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'devParamMatchingRejected');
                // Decide whether this URL is allowed before consulting ISR. An exact
                // build path remains valid even when its cached result is missing, and
                // the most specific matched route controls whether other paths may be
                // generated. Neither a cache hit nor revalidation changes that decision.
                // Server Actions may be forwarded to a worker's route pattern rather
                // than a concrete URL. That invokes the action, not a page navigation.
                if (!isMinimalMode && !isDraftMode && !isPossibleServerAction && pageIsDynamic && (devParamMatchingRejected || (prerenderInfo == null ? void 0 : prerenderInfo.fallback) === false && !isPrerendered)) {
                    if (nextConfig.adapterPath) {
                        return await render404();
                    }
                    throw new __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__["NoFallbackError"]();
                }
                const cacheEntry = await routeModule.handleResponse({
                    cacheKey: ssgCacheKey,
                    responseGenerator: (c)=>responseGenerator({
                            span,
                            ...c
                        }),
                    routeKind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
                    isOnDemandRevalidate,
                    isRoutePPREnabled,
                    req,
                    nextConfig,
                    previewProps,
                    prerenderManifest,
                    waitUntil: ctx.waitUntil,
                    isMinimalMode
                });
                if (cacheEntry !== null && 'error' in cacheEntry) {
                    if (res.headersSent || res.writableEnded) {
                        // The outer catch reports the error when we cannot send recovery.
                        throw cacheEntry.error;
                    }
                    // Returned failures bypass the outer catch's error reporting. Do not
                    // await async reporting before sending the error response.
                    const reportPrerenderError = ()=>{
                        const errorReporting = routeModule.onRequestError(req, cacheEntry.error, {
                            routerKind: 'App Router',
                            routePath: srcPage,
                            routeType: 'render',
                            revalidateReason: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$instrumentation$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRevalidateReason"])({
                                isStaticGeneration: isSSG,
                                isOnDemandRevalidate
                            })
                        }, false, routerServerContext).catch((err)=>{
                            console.error(err);
                        });
                        ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, errorReporting);
                    };
                    const { result } = cacheEntry;
                    for (const [name, value] of Object.entries(result.metadata.headers ?? {})){
                        if (value !== undefined) {
                            res.appendHeader(name, typeof value === 'number' ? value.toString() : value);
                        }
                    }
                    // Each request needs the failure status, including callers that
                    // reused another request's render through the response cache.
                    res.statusCode = 500;
                    span == null ? void 0 : span.setAttributes({
                        'http.status_code': 500,
                        'next.rsc': isRSCRequest,
                        'error.type': '500'
                    });
                    span == null ? void 0 : span.setStatus({
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["SpanStatusCode"].ERROR
                    });
                    res.removeHeader('x-nextjs-cache');
                    res.setHeader('Cache-Control', 'private, no-cache, no-store, max-age=0, must-revalidate');
                    let response = result;
                    if (isRSCRequest) {
                        // The router discards failed prefetches and falls back to a
                        // document load when navigation receives a failed Flight response.
                        response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["default"].fromStatic('', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RSC_CONTENT_TYPE_HEADER"]);
                    } else if (typeof result.metadata.postponed === 'string') {
                        // The platform needs the postponed state to resume with the actual
                        // request. This value is only for delivery; the response cache
                        // retains the failure and never persists it as ISR output.
                        //
                        // The callback writes to res without applying value.status. Its
                        // status and metadata headers must be set first.
                        if (await invokeOnCacheEntry({
                            value: {
                                kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["CachedRouteKind"].APP_PAGE,
                                html: result,
                                rscData: result.metadata.flightData,
                                postponed: result.metadata.postponed,
                                status: 500,
                                headers: undefined,
                                segmentData: undefined
                            },
                            cacheControl: {
                                revalidate: 0,
                                expire: undefined
                            }
                        })) {
                            reportPrerenderError();
                            return null;
                        }
                        if (isMinimalMode) {
                            // A prerender invocation may have filtered request headers, so
                            // only the platform can resume with the original request.
                            //
                            // Let the outer catch report this error once.
                            throw cacheEntry.error;
                        }
                        // Each request owns its continuation. The buffered prelude and
                        // postponed state can be shared by the response cache.
                        response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["default"].fromStatic(result.toUnchunkedString(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["HTML_CONTENT_TYPE_HEADER"]);
                        resumeRender(response, result.metadata.postponed, span);
                    }
                    reportPrerenderError();
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                        req,
                        res,
                        result: response,
                        generateEtags: false,
                        poweredByHeader: nextConfig.poweredByHeader,
                        cacheControl: undefined
                    });
                }
                if (isDraftMode) {
                    res.setHeader('Cache-Control', 'private, no-cache, no-store, max-age=0, must-revalidate');
                }
                // Documents and RSC payloads must not be stored in development.
                // Browsers reuse a stored response for a history navigation without
                // revalidating it, so a back navigation would restore a page from
                // before the latest edit. Static assets never reach this code. They
                // keep a revalidatable `Cache-Control`, so the browser caches them
                // between page loads.
                if (routeModule.isDev) {
                    res.setHeader('Cache-Control', 'no-store');
                }
                if (!cacheEntry) {
                    if (ssgCacheKey) {
                        // A cache entry might not be generated if a response is written
                        // in `getInitialProps` or `getServerSideProps`, but those shouldn't
                        // have a cache key. If we do have a cache key but we don't end up
                        // with a cache entry, then either Next.js or the application has a
                        // bug that needs fixing.
                        throw new Error('invariant: cache entry required but not generated');
                    }
                    return null;
                }
                if (((_cacheEntry_value = cacheEntry.value) == null ? void 0 : _cacheEntry_value.kind) !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["CachedRouteKind"].APP_PAGE) {
                    var _cacheEntry_value1;
                    throw new Error(`Invariant app-page handler received invalid cache entry ${(_cacheEntry_value1 = cacheEntry.value) == null ? void 0 : _cacheEntry_value1.kind}`);
                }
                const didPostpone = typeof cacheEntry.value.postponed === 'string';
                // Set the build ID header for RSC navigation requests when deploymentId is configured. This
                // corresponds with maybeAppendBuildIdToRSCPayload in app-render.tsx which omits the build ID
                // from the RSC payload when deploymentId is set (relying on this header instead). Server
                // actions are excluded here because action redirect responses get the deployment ID header
                // from the pre-fetched redirect target (via createRedirectRenderResult in action-handler.ts
                // which copies headers from the internal RSC fetch).
                // For static prerenders served from CDN, routes-manifest.json adds a header.
                if (isRSCRequest && !isPossibleServerAction && deploymentId) {
                    res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_NAV_DEPLOYMENT_ID_HEADER"], deploymentId);
                }
                if (isSSG && // We don't want to send a cache header for requests that contain dynamic
                // data. If this is a Dynamic RSC request or wasn't a Prefetch RSC
                // request, then we should set the cache header.
                !isDynamicRSCRequest && (!didPostpone || isPrefetchRSCRequest)) {
                    if (!isMinimalMode) {
                        // set x-nextjs-cache header to match the header
                        // we set for the image-optimizer
                        res.setHeader('x-nextjs-cache', isOnDemandRevalidate ? 'REVALIDATED' : cacheEntry.isMiss ? 'MISS' : cacheEntry.isStale ? 'STALE' : 'HIT');
                    }
                    // Set a header used by the client router to signal the response is static
                    // and should respect the `static` cache staleTime value.
                    res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_IS_PRERENDER_HEADER"], '1');
                }
                const { value: cachedData } = cacheEntry;
                // Coerce the cache control parameter from the render.
                let cacheControl;
                // If this is a resume request in minimal mode it is streamed with dynamic
                // content and should not be cached.
                if (hasPostponedState) {
                    cacheControl = {
                        revalidate: 0,
                        expire: undefined
                    };
                } else if (isDynamicRSCRequest) {
                    cacheControl = {
                        revalidate: 0,
                        expire: undefined
                    };
                } else if (!routeModule.isDev) {
                    // If this is a preview mode request, we shouldn't cache it
                    if (isDraftMode) {
                        cacheControl = {
                            revalidate: 0,
                            expire: undefined
                        };
                    } else if (!isSSG) {
                        if (!res.getHeader('Cache-Control')) {
                            cacheControl = {
                                revalidate: 0,
                                expire: undefined
                            };
                        }
                    } else if (cacheEntry.cacheControl) {
                        // If the cache entry has a cache control with a revalidate value that's
                        // a number, use it.
                        if (typeof cacheEntry.cacheControl.revalidate === 'number') {
                            if (cacheEntry.cacheControl.revalidate < 1) {
                                throw new Error(`Invalid revalidate configuration provided: ${cacheEntry.cacheControl.revalidate} < 1`);
                            }
                            cacheControl = {
                                revalidate: cacheEntry.cacheControl.revalidate,
                                expire: cacheEntry.cacheControl.expire
                            };
                        } else {
                            cacheControl = {
                                revalidate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["CACHE_ONE_YEAR_SECONDS"],
                                expire: undefined
                            };
                        }
                    }
                }
                cacheEntry.cacheControl = cacheControl;
                if (typeof segmentPrefetchHeader === 'string' && (cachedData == null ? void 0 : cachedData.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["CachedRouteKind"].APP_PAGE && cachedData.segmentData) {
                    var _cachedData_headers1;
                    // This is a prefetch request issued by the client Segment Cache. These
                    // should never reach the application layer (lambda). We should either
                    // respond from the cache (HIT) or respond with 404 (MISS).
                    // Set a header to indicate that PPR is enabled for this route. This
                    // lets the client distinguish between a regular cache miss and a cache
                    // miss due to PPR being disabled. In other contexts this header is used
                    // to indicate that the response contains dynamic data, but here we're
                    // only using it to indicate that the feature is enabled — the segment
                    // response itself contains whether the data is dynamic.
                    res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_DID_POSTPONE_HEADER"], '2');
                    // Add the cache tags header to the response if it exists and we're in
                    // minimal mode while rendering a static page.
                    const tags = (_cachedData_headers1 = cachedData.headers) == null ? void 0 : _cachedData_headers1[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_CACHE_TAGS_HEADER"]];
                    if (isMinimalMode && isSSG && tags && typeof tags === 'string') {
                        res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_CACHE_TAGS_HEADER"], tags);
                    }
                    const matchedSegment = cachedData.segmentData.get(segmentPrefetchHeader);
                    if (matchedSegment !== undefined) {
                        // Cache hit
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                            req,
                            res,
                            generateEtags: nextConfig.generateEtags,
                            poweredByHeader: nextConfig.poweredByHeader,
                            result: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["default"].fromStatic(matchedSegment, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RSC_CONTENT_TYPE_HEADER"]),
                            cacheControl: cacheEntry.cacheControl
                        });
                    }
                    // Cache miss. Either a cache entry for this route has not been generated
                    // (which technically should not be possible when PPR is enabled, because
                    // at a minimum there should always be a fallback entry) or there's no
                    // match for the requested segment. Respond with a 404.
                    res.statusCode = 404;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                        req,
                        res,
                        generateEtags: nextConfig.generateEtags,
                        poweredByHeader: nextConfig.poweredByHeader,
                        result: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["default"].EMPTY,
                        cacheControl: cacheEntry.cacheControl
                    });
                }
                // `onCacheEntry` lets the platform capture a freshly prerendered result
                // so the proxy can write it to the ISR cache; on deploy it returns true
                // and the function returns below. In debug-shell mode the render was
                // skipped and we only serve the already-cached shell, so there is nothing
                // to capture, and we need to reach the serve path below to close the
                // document. `onCacheEntry` is absent in `next start`/dev, so this guard
                // only affects the deploy (minimalMode) path.
                if (!isDebugStaticShell && await invokeOnCacheEntry(cacheEntry)) {
                    return null;
                }
                if (cachedData.headers) {
                    const headers = {
                        ...cachedData.headers
                    };
                    if (!isMinimalMode || !isSSG) {
                        delete headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_CACHE_TAGS_HEADER"]];
                    }
                    for (let [key, value] of Object.entries(headers)){
                        if (typeof value === 'undefined') continue;
                        if (Array.isArray(value)) {
                            for (const v of value){
                                res.appendHeader(key, v);
                            }
                        } else if (typeof value === 'number') {
                            value = value.toString();
                            res.appendHeader(key, value);
                        } else {
                            res.appendHeader(key, value);
                        }
                    }
                }
                // Add the cache tags header to the response if it exists and we're in
                // minimal mode while rendering a static page.
                const tags = (_cachedData_headers = cachedData.headers) == null ? void 0 : _cachedData_headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_CACHE_TAGS_HEADER"]];
                if (isMinimalMode && isSSG && tags && typeof tags === 'string') {
                    res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_CACHE_TAGS_HEADER"], tags);
                }
                // If the request is a data request, then we shouldn't set the status code
                // from the response because it should always be 200. This should be gated
                // behind the experimental PPR flag.
                if (cachedData.status && (!isRSCRequest || !isRoutePPREnabled)) {
                    res.statusCode = cachedData.status;
                }
                // Redirect information is encoded in RSC payload, so we don't need to use redirect status codes
                if (!isMinimalMode && cachedData.status && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RedirectStatusCode"][cachedData.status] && isRSCRequest) {
                    res.statusCode = 200;
                }
                // Mark that the request did postpone.
                if (didPostpone && !isDynamicRSCRequest) {
                    res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_DID_POSTPONE_HEADER"], '1');
                }
                // we don't go through this block when preview mode is true
                // as preview mode is a dynamic request (bypasses cache) and doesn't
                // generate both HTML and payloads in the same request so continue to just
                // return the generated payload
                if (isRSCRequest && !isDraftMode) {
                    // If this is a dynamic RSC request, then stream the response.
                    if (typeof cachedData.rscData === 'undefined') {
                        // If the response is not an RSC response, then we can't serve it.
                        if (cachedData.html.contentType !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RSC_CONTENT_TYPE_HEADER"]) {
                            if (nextConfig.cacheComponents) {
                                res.statusCode = 404;
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                                    req,
                                    res,
                                    generateEtags: nextConfig.generateEtags,
                                    poweredByHeader: nextConfig.poweredByHeader,
                                    result: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["default"].EMPTY,
                                    cacheControl: cacheEntry.cacheControl
                                });
                            } else {
                                // Otherwise this case is not expected.
                                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["InvariantError"](`Expected RSC response, got ${cachedData.html.contentType}`);
                            }
                        }
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                            req,
                            res,
                            generateEtags: nextConfig.generateEtags,
                            poweredByHeader: nextConfig.poweredByHeader,
                            result: cachedData.html,
                            cacheControl: cacheEntry.cacheControl
                        });
                    }
                    // As this isn't a prefetch request, we should serve the static flight
                    // data.
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                        req,
                        res,
                        generateEtags: nextConfig.generateEtags,
                        poweredByHeader: nextConfig.poweredByHeader,
                        result: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["default"].fromStatic(cachedData.rscData, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RSC_CONTENT_TYPE_HEADER"]),
                        cacheControl: cacheEntry.cacheControl
                    });
                }
                // This is a request for HTML data.
                const body = cachedData.html;
                // Instant Navigation Testing API: under the instant lock we serve the
                // static shell as a complete document without resuming the dynamic
                // render, either recovering from an empty (blocking) shell or appending
                // the closing tags to a non-empty one.
                if (isInstantNavigationTest && isDebugStaticShell) {
                    const isEmptyPrelude = typeof cachedData.postponed === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__.isEmptyHTMLPrelude(cachedData.postponed);
                    if (isEmptyPrelude) {
                        // A blocking route (a Suspense boundary above <body>, or `export
                        // const instant = false`) has an empty static shell. Serving it under
                        // the lock would be a blank document with no way to release the lock,
                        // so every reload would render the same blank shell and leave the
                        // user stuck. We surface the reason instead: in development we throw
                        // so it shows as an error overlay (the catch below clears the instant
                        // cookie via Set-Cookie); in production we serve a minimal document
                        // whose script clears the cookie client-side, since on deploy the
                        // edge has already served the cached shell and committed the response
                        // headers and this function only resumes by appending to the body, so
                        // a Set-Cookie could not take effect. `next start` reuses the same
                        // document, where throwing would render only a generic "Internal
                        // Server Error" page.
                        if (routeModule.isDev === true) {
                            throw new Error(`The Navigation Inspector was active, but you attempted to load a blocking route. Reload the page to reset the inspector.\n\n` + `To identify why this route is blocking, refer to the Instant Navigation docs: https://preview.nextjs.org/docs/app/guides/instant-navigation`);
                        }
                        const recoveryHtml = `<!DOCTYPE html><html><head><meta charSet="utf-8"/></head><body>` + `<script>document.cookie="${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_INSTANT_TEST_COOKIE"]}=; Path=/; Max-Age=0"</script>` + `<p>The Navigation Inspector was active, but you attempted to load a blocking route. Reload the page to reset the inspector.</p>` + `<p>To identify why this route is blocking, refer to the ` + `<a href="https://preview.nextjs.org/docs/app/guides/instant-navigation">Instant Navigation docs</a>.</p>` + `</body></html>`;
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                            req,
                            res,
                            generateEtags: nextConfig.generateEtags,
                            poweredByHeader: nextConfig.poweredByHeader,
                            result: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["default"].fromStatic(recoveryHtml, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["HTML_CONTENT_TYPE_HEADER"]),
                            cacheControl: {
                                revalidate: 0,
                                expire: undefined
                            }
                        });
                    }
                    // Non-empty shell: the cookie-guarded bootstrap that sets
                    // self.__next_instant_test is embedded in the prerendered shell via
                    // `bootstrapScriptContent`, so it is already present (in the served
                    // shell for a fresh render, or in the cached prelude on deploy). Append
                    // the closing tags so the browser can parse a complete document.
                    body.push(new ReadableStream({
                        start (controller) {
                            controller.enqueue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML);
                            controller.close();
                        }
                    }));
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                        req,
                        res,
                        generateEtags: nextConfig.generateEtags,
                        poweredByHeader: nextConfig.poweredByHeader,
                        result: body,
                        cacheControl: {
                            revalidate: 0,
                            expire: undefined
                        }
                    });
                }
                // If there's no postponed state, we should just serve the HTML. This
                // should also be the case for a resume request because it's completed
                // as a server render (rather than a static render).
                if (!didPostpone || isMinimalMode || isRSCRequest) {
                    // If we're in test mode, we should add a sentinel chunk to the response
                    // that's between the static and dynamic parts so we can compare the
                    // chunks and add assertions.
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                        req,
                        res,
                        generateEtags: nextConfig.generateEtags,
                        poweredByHeader: nextConfig.poweredByHeader,
                        result: body,
                        cacheControl: cacheEntry.cacheControl
                    });
                }
                // If we're debugging the static shell or the dynamic API accesses, we
                // should just serve the HTML without resuming the render. The returned
                // HTML will be the static shell so all the Dynamic API's will be used
                // during static generation.
                if (isDebugStaticShell || isDebugDynamicAccesses) {
                    // Since we're not resuming the render, we need to at least add the
                    // closing body and html tags to create valid HTML.
                    body.push(new ReadableStream({
                        start (controller) {
                            controller.enqueue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML);
                            controller.close();
                        }
                    }));
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                        req,
                        res,
                        generateEtags: nextConfig.generateEtags,
                        poweredByHeader: nextConfig.poweredByHeader,
                        result: body,
                        cacheControl: {
                            revalidate: 0,
                            expire: undefined
                        }
                    });
                }
                // If we're in test mode, we should add a sentinel chunk to the response
                // that's between the static and dynamic parts so we can compare the
                // chunks and add assertions.
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                resumeRender(body, cachedData.postponed, span);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: body,
                    // We don't want to cache the response if it has postponed data because
                    // the response being sent to the client it's dynamic parts are streamed
                    // to the client on the same request.
                    cacheControl: {
                        revalidate: 0,
                        expire: undefined
                    }
                });
            };
            // TODO: activeSpan code path is for when wrapped by
            // next-server can be removed when this is no longer used
            if (isWrappedByNextServer && activeSpan) {
                await handleResponse(activeSpan);
            } else {
                parentSpan = tracer.getActiveScopeSpan();
                return await tracer.withPropagatedContext(req.headers, ()=>tracer.trace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["BaseServerSpan"].handleRequest, {
                        spanName: `${method} ${srcPage}`,
                        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["SpanKind"].SERVER,
                        attributes: {
                            'http.method': method,
                            'http.target': httpTarget
                        }
                    }, handleResponse), undefined, !isWrappedByNextServer);
            }
        } catch (err) {
            // If an Instant Navigation Testing document render fails (e.g. the page
            // blocks at the root with no Suspense boundary above it, producing an empty
            // or bailed-out static shell), clear the instant navigation cookie before
            // serving the error page. Otherwise the cookie would persist and every
            // reload would re-render the same broken shell, leaving the user stuck
            // without a way to release the lock.
            if (isInstantNavigationTest && !res.headersSent) {
                res.setHeader('Set-Cookie', `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_INSTANT_TEST_COOKIE"]}=; Path=/; Max-Age=0`);
            }
            if (!(err instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__["NoFallbackError"])) {
                const silenceLog = false;
                await routeModule.onRequestError(req, err, {
                    routerKind: 'App Router',
                    routePath: srcPage,
                    routeType: 'render',
                    revalidateReason: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$instrumentation$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRevalidateReason"])({
                        isStaticGeneration: isSSG,
                        isOnDemandRevalidate
                    })
                }, silenceLog, routerServerContext);
            }
            // rethrow so that we can handle serving error page
            throw err;
        }
    }
    return {
        __next_app__,
        routeModule,
        handler
    };
}
// TODO: omit this from production builds, only test builds should include it
/**
 * Creates a readable stream that emits a PPR boundary sentinel.
 *
 * @returns A readable stream that emits a PPR boundary sentinel.
 */ function createPPRBoundarySentinel() {
    return new ReadableStream({
        start (controller) {
            controller.enqueue(new TextEncoder().encode('<!-- PPR_BOUNDARY_SENTINEL -->'));
            controller.close();
        }
    });
}
}),
"[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/t/[token]/page { METADATA_0 => \"[project]/src/app/icon.png.mjs { IMAGE => \\\"[project]/src/app/icon.png (static in ecmascript, tag client)\\\" } [app-rsc] (structured image object, ecmascript)\", MODULE_1 => \"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_2 => \"[project]/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_3 => \"[project]/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_4 => \"[project]/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_5 => \"[project]/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_6 => \"[project]/src/app/t/[token]/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_7 => \"[project]/src/app/t/[token]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)\" } [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientPageRoot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ClientPageRoot"],
    "ClientSegmentRoot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ClientSegmentRoot"],
    "Fragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["Fragment"],
    "HTTPAccessFallbackBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["HTTPAccessFallbackBoundary"],
    "InstantValidation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["InstantValidation"],
    "LayoutRouter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["LayoutRouter"],
    "LoadingBoundaryProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["LoadingBoundaryProvider"],
    "RenderFromTemplateContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RenderFromTemplateContext"],
    "RootLayoutBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RootLayoutBoundary"],
    "SegmentViewNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["SegmentViewNode"],
    "SegmentViewStateNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["SegmentViewStateNode"],
    "__next_app__",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$t$2f5b$token$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$icon$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$icon$2e$png__$28$static__in__ecmascript$2c$__tag__client$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$t$2f5b$token$5d2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f$t$2f5b$token$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["__next_app__"],
    "captureOwnerStack",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["captureOwnerStack"],
    "collectPrefetchHints",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["collectPrefetchHints"],
    "collectSegmentData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["collectSegmentData"],
    "createElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createElement"],
    "createMetadataComponents",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createMetadataComponents"],
    "createPrerenderParamsForClientSegment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createPrerenderParamsForClientSegment"],
    "createPrerenderSearchParamsForClientPage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createPrerenderSearchParamsForClientPage"],
    "createServerParamsForServerSegment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createServerParamsForServerSegment"],
    "createServerSearchParamsForServerPage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createServerSearchParamsForServerPage"],
    "createTemporaryReferenceSet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createTemporaryReferenceSet"],
    "decodeAction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeAction"],
    "decodeFormState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeFormState"],
    "decodeReply",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeReply"],
    "handler",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$t$2f5b$token$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$icon$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$icon$2e$png__$28$static__in__ecmascript$2c$__tag__client$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$t$2f5b$token$5d2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f$t$2f5b$token$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["handler"],
    "isEmptyHTMLPrelude",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["isEmptyHTMLPrelude"],
    "patchFetch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["patchFetch"],
    "preconnect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preconnect"],
    "preloadFont",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preloadFont"],
    "preloadStyle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preloadStyle"],
    "prerender",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["prerender"],
    "prerenderToNodeStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["prerenderToNodeStream"],
    "renderToPipeableStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["renderToPipeableStream"],
    "renderToReadableStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["renderToReadableStream"],
    "routeModule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$t$2f5b$token$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$icon$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$icon$2e$png__$28$static__in__ecmascript$2c$__tag__client$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$t$2f5b$token$5d2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f$t$2f5b$token$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["routeModule"],
    "serverHooks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["serverHooks"],
    "taintObjectReference",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["taintObjectReference"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$t$2f5b$token$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$icon$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$icon$2e$png__$28$static__in__ecmascript$2c$__tag__client$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$t$2f5b$token$5d2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f$t$2f5b$token$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/t/[token]/page { METADATA_0 => "[project]/src/app/icon.png.mjs { IMAGE => \\"[project]/src/app/icon.png (static in ecmascript, tag client)\\" } [app-rsc] (structured image object, ecmascript)", MODULE_1 => "[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", MODULE_2 => "[project]/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_3 => "[project]/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_4 => "[project]/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_5 => "[project]/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_6 => "[project]/src/app/t/[token]/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", MODULE_7 => "[project]/src/app/t/[token]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)" } [app-rsc] (ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)");
}),
"[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/t/[token]/page { METADATA_0 => \"[project]/src/app/icon.png.mjs { IMAGE => \\\"[project]/src/app/icon.png (static in ecmascript, tag client)\\\" } [app-rsc] (structured image object, ecmascript)\", MODULE_1 => \"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_2 => \"[project]/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_3 => \"[project]/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_4 => \"[project]/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_5 => \"[project]/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_6 => \"[project]/src/app/t/[token]/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_7 => \"[project]/src/app/t/[token]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)\" } [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__next_app__",
    ()=>__next_app__,
    "handler",
    ()=>handler,
    "routeModule",
    ()=>routeModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$module$2d$loading$2f$instrument$2d$module$2d$getter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/module-loading/instrument-module-getter.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/build/templates/app-page-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$interop$2d$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/interop-default.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <locals>");
;
const __TURBOPACK__icon__$23$0__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$module$2d$loading$2f$instrument$2d$module$2d$getter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["instrumentModuleGetter"])(()=>__turbopack_context__.r('[project]/src/app/icon.png.mjs { IMAGE => "[project]/src/app/icon.png (static in ecmascript, tag client)" } [app-rsc] (structured image object, ecmascript)'));
const __TURBOPACK__layout__$23$1__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$module$2d$loading$2f$instrument$2d$module$2d$getter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["instrumentModuleGetter"])(()=>__turbopack_context__.r("[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)"));
const __TURBOPACK__not$2d$found__$23$2__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$module$2d$loading$2f$instrument$2d$module$2d$getter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["instrumentModuleGetter"])(()=>__turbopack_context__.r("[project]/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)"));
const __TURBOPACK__forbidden__$23$3__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$module$2d$loading$2f$instrument$2d$module$2d$getter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["instrumentModuleGetter"])(()=>__turbopack_context__.r("[project]/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)"));
const __TURBOPACK__unauthorized__$23$4__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$module$2d$loading$2f$instrument$2d$module$2d$getter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["instrumentModuleGetter"])(()=>__turbopack_context__.r("[project]/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)"));
const __TURBOPACK__global$2d$error__$23$5__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$module$2d$loading$2f$instrument$2d$module$2d$getter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["instrumentModuleGetter"])(()=>__turbopack_context__.r("[project]/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)"));
const __TURBOPACK__not$2d$found__$23$6__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$module$2d$loading$2f$instrument$2d$module$2d$getter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["instrumentModuleGetter"])(()=>__turbopack_context__.r("[project]/src/app/t/[token]/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)"));
const __TURBOPACK__page__$23$7__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$module$2d$loading$2f$instrument$2d$module$2d$getter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["instrumentModuleGetter"])(()=>__turbopack_context__.r("[project]/src/app/t/[token]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)"));
;
;
const tree = [
    "",
    {
        "children": [
            "t",
            {
                "children": [
                    "[token]",
                    {
                        "children": [
                            "__PAGE__",
                            {},
                            {
                                metadata: {},
                                "page": [
                                    __TURBOPACK__page__$23$7__,
                                    "[project]/src/app/t/[token]/page.tsx"
                                ]
                            },
                            []
                        ]
                    },
                    {
                        metadata: {},
                        "not-found": [
                            __TURBOPACK__not$2d$found__$23$6__,
                            "[project]/src/app/t/[token]/not-found.tsx"
                        ]
                    },
                    []
                ]
            },
            {
                metadata: {}
            },
            []
        ]
    },
    {
        metadata: {
            icon: [
                async ()=>{
                    const mod = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$interop$2d$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["interopDefault"])(await __TURBOPACK__icon__$23$0__());
                    return [
                        {
                            url: "/icon.png" + `?${mod.src.split("/").splice(-1)[0]}`,
                            sizes: `${mod.width}x${mod.height}`,
                            type: `image/png`
                        }
                    ];
                }
            ]
        },
        "layout": [
            __TURBOPACK__layout__$23$1__,
            "[project]/src/app/layout.tsx"
        ],
        "not-found": [
            __TURBOPACK__not$2d$found__$23$2__,
            "[project]/node_modules/next/dist/client/components/builtin/not-found.js"
        ],
        "forbidden": [
            __TURBOPACK__forbidden__$23$3__,
            "[project]/node_modules/next/dist/client/components/builtin/forbidden.js"
        ],
        "unauthorized": [
            __TURBOPACK__unauthorized__$23$4__,
            "[project]/node_modules/next/dist/client/components/builtin/unauthorized.js"
        ],
        "global-error": [
            __TURBOPACK__global$2d$error__$23$5__,
            "[project]/node_modules/next/dist/client/components/builtin/global-error.js"
        ]
    },
    []
];
const __next_app_require__ = __turbopack_context__.r.bind(__turbopack_context__);
const __next_app_load_chunk__ = __turbopack_context__.l.bind(__turbopack_context__);
const entrypoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAppPageEntrypoint"])({
    tree,
    page: "/t/[token]/page",
    pathname: "/t/[token]",
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__,
    interopDefault: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$interop$2d$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["interopDefault"]
});
const __next_app__ = entrypoint.__next_app__;
const routeModule = entrypoint.routeModule;
const handler = entrypoint.handler;
;
}),
"[project]/node_modules/next/dist/lib/framework/boundary-constants.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    METADATA_BOUNDARY_NAME: null,
    OUTLET_BOUNDARY_NAME: null,
    ROOT_LAYOUT_BOUNDARY_NAME: null,
    VIEWPORT_BOUNDARY_NAME: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    METADATA_BOUNDARY_NAME: function() {
        return METADATA_BOUNDARY_NAME;
    },
    OUTLET_BOUNDARY_NAME: function() {
        return OUTLET_BOUNDARY_NAME;
    },
    ROOT_LAYOUT_BOUNDARY_NAME: function() {
        return ROOT_LAYOUT_BOUNDARY_NAME;
    },
    VIEWPORT_BOUNDARY_NAME: function() {
        return VIEWPORT_BOUNDARY_NAME;
    }
});
const METADATA_BOUNDARY_NAME = '__next_metadata_boundary__';
const VIEWPORT_BOUNDARY_NAME = '__next_viewport_boundary__';
const OUTLET_BOUNDARY_NAME = '__next_outlet_boundary__';
const ROOT_LAYOUT_BOUNDARY_NAME = '__next_root_layout_boundary__';
}),
"[project]/node_modules/next/dist/lib/scheduler.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    atLeastOneTask: null,
    scheduleImmediate: null,
    scheduleOnNextTick: null,
    waitAtLeastOneReactRenderTask: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    atLeastOneTask: function() {
        return atLeastOneTask;
    },
    scheduleImmediate: function() {
        return scheduleImmediate;
    },
    scheduleOnNextTick: function() {
        return scheduleOnNextTick;
    },
    waitAtLeastOneReactRenderTask: function() {
        return waitAtLeastOneReactRenderTask;
    }
});
const scheduleOnNextTick = (cb)=>{
    // We use Promise.resolve().then() here so that the operation is scheduled at
    // the end of the promise job queue, we then add it to the next process tick
    // to ensure it's evaluated afterwards.
    //
    // This was inspired by the implementation of the DataLoader interface: https://github.com/graphql/dataloader/blob/d336bd15282664e0be4b4a657cb796f09bafbc6b/src/index.js#L213-L255
    //
    Promise.resolve().then(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            process.nextTick(cb);
        }
    });
};
const scheduleImmediate = (cb)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        setImmediate(cb);
    }
};
function atLeastOneTask() {
    return new Promise((resolve)=>scheduleImmediate(resolve));
}
function waitAtLeastOneReactRenderTask() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return new Promise((r)=>setImmediate(r));
    }
}
}),
"[project]/node_modules/next/dist/server/app-render/blocking-route-messages.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createDynamicBodyError: null,
    createDynamicBodyErrorInNavigation: null,
    createDynamicBodyErrorInStaticRoute: null,
    createDynamicMetadataError: null,
    createDynamicMetadataErrorInStaticRoute: null,
    createDynamicOrRuntimeBodyError: null,
    createDynamicOrRuntimeMetadataError: null,
    createDynamicOrRuntimeViewportError: null,
    createDynamicViewportError: null,
    createDynamicViewportErrorInStaticRoute: null,
    createLinkBodyErrorInNavigation: null,
    createLinkMetadataError: null,
    createLinkViewportError: null,
    createNavigationBodyErrorInNavigation: null,
    createNavigationMetadataError: null,
    createNavigationViewportError: null,
    createNonPrerenderableBodyErrorInStaticRoute: null,
    createNonPrerenderableMetadataErrorInStaticRoute: null,
    createNonPrerenderableViewportErrorInStaticRoute: null,
    createPrefetchBodyErrorInNavigation: null,
    createPrefetchMetadataError: null,
    createPrefetchViewportError: null,
    createRuntimeBodyError: null,
    createRuntimeBodyErrorInNavigation: null,
    createRuntimeBodyErrorInStaticRoute: null,
    createRuntimeMetadataError: null,
    createRuntimeMetadataErrorInStaticRoute: null,
    createRuntimeViewportError: null,
    createRuntimeViewportErrorInStaticRoute: null,
    logBuildDebugHint: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createDynamicBodyError: function() {
        return createDynamicBodyError;
    },
    createDynamicBodyErrorInNavigation: function() {
        return createDynamicBodyErrorInNavigation;
    },
    createDynamicBodyErrorInStaticRoute: function() {
        return createDynamicBodyErrorInStaticRoute;
    },
    createDynamicMetadataError: function() {
        return createDynamicMetadataError;
    },
    createDynamicMetadataErrorInStaticRoute: function() {
        return createDynamicMetadataErrorInStaticRoute;
    },
    createDynamicOrRuntimeBodyError: function() {
        return createDynamicOrRuntimeBodyError;
    },
    createDynamicOrRuntimeMetadataError: function() {
        return createDynamicOrRuntimeMetadataError;
    },
    createDynamicOrRuntimeViewportError: function() {
        return createDynamicOrRuntimeViewportError;
    },
    createDynamicViewportError: function() {
        return createDynamicViewportError;
    },
    createDynamicViewportErrorInStaticRoute: function() {
        return createDynamicViewportErrorInStaticRoute;
    },
    createLinkBodyErrorInNavigation: function() {
        return createLinkBodyErrorInNavigation;
    },
    createLinkMetadataError: function() {
        return createLinkMetadataError;
    },
    createLinkViewportError: function() {
        return createLinkViewportError;
    },
    createNavigationBodyErrorInNavigation: function() {
        return createNavigationBodyErrorInNavigation;
    },
    createNavigationMetadataError: function() {
        return createNavigationMetadataError;
    },
    createNavigationViewportError: function() {
        return createNavigationViewportError;
    },
    createNonPrerenderableBodyErrorInStaticRoute: function() {
        return createNonPrerenderableBodyErrorInStaticRoute;
    },
    createNonPrerenderableMetadataErrorInStaticRoute: function() {
        return createNonPrerenderableMetadataErrorInStaticRoute;
    },
    createNonPrerenderableViewportErrorInStaticRoute: function() {
        return createNonPrerenderableViewportErrorInStaticRoute;
    },
    createPrefetchBodyErrorInNavigation: function() {
        return createPrefetchBodyErrorInNavigation;
    },
    createPrefetchMetadataError: function() {
        return createPrefetchMetadataError;
    },
    createPrefetchViewportError: function() {
        return createPrefetchViewportError;
    },
    createRuntimeBodyError: function() {
        return createRuntimeBodyError;
    },
    createRuntimeBodyErrorInNavigation: function() {
        return createRuntimeBodyErrorInNavigation;
    },
    createRuntimeBodyErrorInStaticRoute: function() {
        return createRuntimeBodyErrorInStaticRoute;
    },
    createRuntimeMetadataError: function() {
        return createRuntimeMetadataError;
    },
    createRuntimeMetadataErrorInStaticRoute: function() {
        return createRuntimeMetadataErrorInStaticRoute;
    },
    createRuntimeViewportError: function() {
        return createRuntimeViewportError;
    },
    createRuntimeViewportErrorInStaticRoute: function() {
        return createRuntimeViewportErrorInStaticRoute;
    },
    logBuildDebugHint: function() {
        return logBuildDebugHint;
    }
});
function createRuntimeBodyError(route) {
    return new Error(`Route "${route}": Next.js encountered runtime data during prerendering.\n\n` + `\`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` accessed outside of \`<Suspense>\` prevents the route from being prerendered, blocking the page load and leading to a slower user experience.\n\n` + `Ways to fix this:\n` + `  - [stream] Provide a placeholder with \`<Suspense fallback={...}>\` around the data access\n` + `  - [block] Set \`export const instant = false\` to allow a blocking route\n\n` + `Learn more: https://nextjs.org/docs/messages/blocking-prerender-runtime`);
}
function createDynamicBodyError(route) {
    return new Error(`Route "${route}": Next.js encountered uncached data during prerendering.\n\n` + `\`fetch(...)\` or \`connection()\` accessed outside of \`<Suspense>\` prevents the route from being prerendered, blocking the page load and leading to a slower user experience.\n\n` + `Ways to fix this:\n` + `  - [stream] Provide a placeholder with \`<Suspense fallback={...}>\` around the data access\n` + `  - [cache] Cache the data access with \`"use cache"\` (does not apply to \`connection()\`)\n` + `  - [block] Set \`export const instant = false\` to allow a blocking route\n\n` + `Learn more: https://nextjs.org/docs/messages/blocking-prerender-dynamic`);
}
function createRuntimeBodyErrorInNavigation(route) {
    return new Error(`Route "${route}": Next.js encountered runtime data during prerendering or a navigation.\n\n` + `\`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` accessed outside of \`<Suspense>\` prevents the route from being prerendered or the navigation from being instant, leading to a slower user experience.\n\n` + `Ways to fix this:\n` + `  - [stream] Provide a placeholder with \`<Suspense fallback={...}>\` around the data access\n` + `  - [block] Set \`export const instant = false\` to allow a blocking route\n\n` + `Learn more: https://nextjs.org/docs/messages/blocking-prerender-runtime`);
}
function createLinkBodyErrorInNavigation(route) {
    return new Error(`Route "${route}": Next.js encountered URL data during prerendering or a navigation.\n\n` + `\`params\` or \`searchParams\` accessed outside of \`<Suspense>\` may prevent the navigation from being instant, leading to a slower user experience.\n\n` + `Ways to fix this:\n` + `  - [stream] Provide a placeholder with \`<Suspense fallback={...}>\` around the data access\n` + `  - [block] Set \`export const instant = false\` to allow a blocking route\n\n` + `Learn more: https://nextjs.org/docs/messages/instant-shell-url-data`);
}
function createNavigationBodyErrorInNavigation(route) {
    return new Error(`Route "${route}": Next.js encountered \`navigation()\` during prerendering or a navigation.\n\n` + `\`navigation()\` called outside of \`<Suspense>\` may prevent the navigation from being instant, leading to a slower user experience.\n\n` + `Ways to fix this:\n` + `  - [stream] Provide a placeholder with \`<Suspense fallback={...}>\` around the component that calls \`navigation()\`\n` + `  - [block] Set \`export const instant = false\` to allow a blocking route\n\n` + `Learn more: https://nextjs.org/docs/messages/instant-navigation-stage`);
}
function createPrefetchBodyErrorInNavigation(route) {
    return new Error(`Route "${route}": Next.js encountered \`prefetch()\` during prerendering or a navigation.\n\n` + `\`prefetch()\` called outside of \`<Suspense>\` may prevent the navigation from being instant, leading to a slower user experience.\n\n` + `Ways to fix this:\n` + `  - [stream] Provide a placeholder with \`<Suspense fallback={...}>\` around the component that calls \`prefetch()\`\n` + `  - [block] Set \`export const instant = false\` to allow a blocking route\n\n` + `Learn more: https://nextjs.org/docs/messages/instant-navigation-stage`);
}
function createDynamicBodyErrorInNavigation(route) {
    return new Error(`Route "${route}": Next.js encountered uncached data during prerendering or a navigation.\n\n` + `\`fetch(...)\` or \`connection()\` accessed outside of \`<Suspense>\` prevents the route from being prerendered or the navigation from being instant, leading to a slower user experience.\n\n` + `Ways to fix this:\n` + `  - [stream] Provide a placeholder with \`<Suspense fallback={...}>\` around the data access\n` + `  - [cache] Cache the data access with \`"use cache"\` (does not apply to \`connection()\`)\n` + `  - [block] Set \`export const instant = false\` to allow a blocking route\n\n` + `Learn more: https://nextjs.org/docs/messages/blocking-prerender-dynamic`);
}
function createDynamicOrRuntimeBodyError(route) {
    return new Error(`Route "${route}": Next.js encountered uncached or runtime data during prerendering.\n\n` + `\`fetch(...)\`, \`cookies()\`, \`headers()\`, \`params\`, \`searchParams\`, or \`connection()\` accessed outside of \`<Suspense>\` prevents the route from being prerendered, blocking the page load and leading to a slower user experience.\n\n` + `Ways to fix this:\n` + `  - [stream] Provide a placeholder with \`<Suspense fallback={...}>\` around the data access\n` + `  - [cache] For uncached data (\`fetch\`, database calls): cache the access with \`"use cache"\` (does not apply to \`connection()\`)\n` + `  - [block] Set \`export const instant = false\` to allow a blocking route\n\n` + `Learn more: https://nextjs.org/docs/messages/blocking-prerender-dynamic`);
}
function createLinkMetadataError(route) {
    return new Error(`Route "${route}": Next.js encountered URL data in \`generateMetadata()\`.\n\n` + `This route's metadata is blocked, but the rest of its content can be prefetched. \`params\` or \`searchParams\` accessed in \`generateMetadata()\` prevent it from being prefetched.\n\n` + `Ways to fix this:\n` + `  - [static] Use a static metadata export instead of \`generateMetadata()\`\n` + `  - [dynamic] Render a marker component that calls \`await connection()\` inside \`<Suspense>\` on the page\n\n` + `Learn more: https://nextjs.org/docs/messages/blocking-prerender-metadata-runtime`);
}
function createRuntimeMetadataError(route) {
    return new Error(`Route "${route}": Next.js encountered runtime data in \`generateMetadata()\`.\n\n` + `This route's metadata is blocked, but the rest of its content can be prerendered. \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` accessed in \`generateMetadata()\` cause it to run dynamically.\n\n` + `Ways to fix this:\n` + `  - [static] Use a static metadata export instead of \`generateMetadata()\`\n` + `  - [dynamic] Render a marker component that calls \`await connection()\` inside \`<Suspense>\` on the page\n\n` + `Learn more: https://nextjs.org/docs/messages/blocking-prerender-metadata-runtime`);
}
function createNavigationMetadataError(route) {
    return new Error(`Route "${route}": Next.js encountered \`navigation()\` in \`generateMetadata()\`.\n\n` + `Metadata can already stream without blocking the route's UI, so delaying it until navigation may be unintentional.\n\n` + `Ways to fix this:\n` + `  - [remove] Remove \`navigation()\` from \`generateMetadata()\`\n` + `  - [mark] Render a marker component that calls \`await navigation()\` inside \`<Suspense>\` on the page\n\n` + `Learn more: https://nextjs.org/docs/messages/instant-navigation-stage-metadata`);
}
function createPrefetchMetadataError(route) {
    return new Error(`Route "${route}": Next.js encountered \`prefetch()\` in \`generateMetadata()\`.\n\n` + `Metadata can already stream without blocking the route's UI, so delaying it until a per-link prefetch or navigation may be unintentional.\n\n` + `Ways to fix this:\n` + `  - [remove] Remove \`prefetch()\` from \`generateMetadata()\`\n` + `  - [mark] Render a marker component that calls \`await prefetch()\` inside \`<Suspense>\` on the page\n\n` + `Learn more: https://nextjs.org/docs/messages/instant-navigation-stage-metadata`);
}
function createDynamicMetadataError(route) {
    return new Error(`Route "${route}": Next.js encountered uncached data in \`generateMetadata()\`.\n\n` + `This route's metadata is blocked, but the rest of its content can be prerendered. \`fetch(...)\` or \`connection()\` accessed in \`generateMetadata()\` cause it to run dynamically.\n\n` + `Ways to fix this:\n` + `  - [cache] Cache the metadata with \`"use cache"\` in \`generateMetadata()\` (does not apply to \`connection()\`)\n` + `  - [dynamic] Render a marker component that calls \`await connection()\` inside \`<Suspense>\` on the page\n\n` + `Learn more: https://nextjs.org/docs/messages/blocking-prerender-metadata-dynamic`);
}
function createLinkViewportError(route) {
    return new Error(`Route "${route}": Next.js encountered URL data in \`generateViewport()\`.\n\n` + `\`params\` or \`searchParams\` in \`generateViewport()\` prevents the page from being prerendered, leading to a slower user experience.\n\n` + `Ways to fix this:\n` + `  - [static] Use a static viewport export instead of \`generateViewport()\`\n` + `  - [block] Set \`export const instant = false\` to allow a blocking route\n\n` + `Learn more: https://nextjs.org/docs/messages/blocking-prerender-viewport-runtime`);
}
function createRuntimeViewportError(route) {
    return new Error(`Route "${route}": Next.js encountered runtime data in \`generateViewport()\`.\n\n` + `\`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` in \`generateViewport()\` prevents the page from being prerendered, leading to a slower user experience.\n\n` + `Ways to fix this:\n` + `  - [static] Use a static viewport export instead of \`generateViewport()\`\n` + `  - [block] Set \`export const instant = false\` to allow a blocking route\n\n` + `Learn more: https://nextjs.org/docs/messages/blocking-prerender-viewport-runtime`);
}
function createNavigationViewportError(route) {
    return new Error(`Route "${route}": Next.js encountered \`navigation()\` in \`generateViewport()\`.\n\n` + `This prevents Next.js from creating the App Shell, leading to a slower user experience.\n\n` + `Ways to fix this:\n` + `  - [remove] Remove \`navigation()\` from \`generateViewport()\`\n` + `  - [ignore] Set \`export const instant = false\` to disable validation for this segment\n\n` + `Learn more: https://nextjs.org/docs/messages/instant-navigation-stage-viewport`);
}
function createPrefetchViewportError(route) {
    return new Error(`Route "${route}": Next.js encountered \`prefetch()\` in \`generateViewport()\`.\n\n` + `This prevents Next.js from creating the App Shell, leading to a slower user experience.\n\n` + `Ways to fix this:\n` + `  - [remove] Remove \`prefetch()\` from \`generateViewport()\`\n` + `  - [ignore] Set \`export const instant = false\` to disable validation for this segment\n\n` + `Learn more: https://nextjs.org/docs/messages/instant-navigation-stage-viewport`);
}
function createDynamicViewportError(route) {
    return new Error(`Route "${route}": Next.js encountered uncached data in \`generateViewport()\`.\n\n` + `\`fetch(...)\` or \`connection()\` in \`generateViewport()\` prevents the page from being prerendered, leading to a slower user experience.\n\n` + `Ways to fix this:\n` + `  - [cache] Cache the viewport data with \`"use cache"\` in \`generateViewport()\` (does not apply to \`connection()\`)\n` + `  - [block] Set \`export const instant = false\` to allow a blocking route\n\n` + `Learn more: https://nextjs.org/docs/messages/blocking-prerender-viewport-dynamic`);
}
function createDynamicOrRuntimeViewportError(route) {
    return new Error(`Route "${route}": Next.js encountered uncached or runtime data in \`generateViewport()\`.\n\n` + `This prevents the page from being prerendered, leading to a slower user experience. Unlike metadata, viewport cannot be streamed behind \`<Suspense>\` because it affects the initial page load.\n\n` + `Ways to fix this:\n` + `  - [static] Use a static viewport export instead of \`generateViewport()\`\n` + `  - [cache] For uncached data (\`fetch\`, database calls): cache the viewport with \`"use cache"\` in \`generateViewport()\` (does not apply to \`connection()\`)\n` + `  - [block] Set \`export const instant = false\` to allow a blocking route\n\n` + `Learn more: https://nextjs.org/docs/messages/blocking-prerender-viewport-runtime`);
}
function createDynamicOrRuntimeMetadataError(route) {
    return new Error(`Route "${route}": Next.js encountered uncached or runtime data in \`generateMetadata()\`.\n\n` + `This route's metadata is blocked, but the rest of its content can be prerendered.\n\n` + `Ways to fix this:\n` + `  - [static] Use a static metadata export instead of \`generateMetadata()\`\n` + `  - [cache] Cache the metadata with \`"use cache"\` in \`generateMetadata()\` (does not apply to \`connection()\`)\n` + `  - [dynamic] Render a marker component that calls \`await connection()\` inside \`<Suspense>\` on the page\n\n` + `Learn more: https://nextjs.org/docs/messages/blocking-prerender-metadata-runtime`);
}
function createRuntimeBodyErrorInStaticRoute(route) {
    return new Error(`Route "${route}": Next.js encountered runtime data on a route that must be fully static.\n\n` + `This route is configured to be fully static, but runtime data from \`cookies()\`, \`headers()\`, \`params\`, \`searchParams\`, or a short-lived cache requires rendering at request time.\n\n` + `Ways to fix this:\n` + `  - [remove] Remove the data access\n` + `  - [client] Read the data on the client\n\n` + `Learn more: https://nextjs.org/docs/messages/static-route-runtime`);
}
function createDynamicBodyErrorInStaticRoute(route) {
    return new Error(`Route "${route}": Next.js encountered uncached data on a route that must be fully static.\n\n` + `This route is configured to be fully static, but an uncached \`fetch(...)\`, database call, or \`connection()\` requires rendering at request time.\n\n` + `Ways to fix this:\n` + `  - [cache] Cache the data access with \`"use cache"\` (does not apply to \`connection()\`)\n` + `  - [remove] Remove the data access\n` + `  - [client] Read the data on the client\n\n` + `Learn more: https://nextjs.org/docs/messages/static-route-dynamic`);
}
function createNonPrerenderableBodyErrorInStaticRoute(route) {
    return new Error(`Route "${route}": Next.js encountered uncached or runtime data on a route that must be fully static.\n\n` + `This route is configured to be fully static, but some data requires rendering at request time.\n\n` + `Ways to fix this:\n` + `  - [cache] For uncached data (\`fetch\`, database calls): cache the access with \`"use cache"\` (does not apply to \`connection()\`)\n` + `  - [remove] Remove the data access\n` + `  - [client] Read the data on the client\n\n` + `Learn more: https://nextjs.org/docs/messages/static-route-dynamic`);
}
function createRuntimeMetadataErrorInStaticRoute(route) {
    return new Error(`Route "${route}": Next.js encountered runtime data in \`generateMetadata()\` on a route that must be fully static.\n\n` + `This route is configured to be fully static, but runtime data from \`cookies()\`, \`headers()\`, \`params\`, \`searchParams\`, or a short-lived cache requires rendering at request time.\n\n` + `Ways to fix this:\n` + `  - [static] Replace the dynamic data used by \`generateMetadata()\` with static data\n\n` + `Learn more: https://nextjs.org/docs/messages/static-metadata-runtime`);
}
function createDynamicMetadataErrorInStaticRoute(route) {
    return new Error(`Route "${route}": Next.js encountered uncached data in \`generateMetadata()\` on a route that must be fully static.\n\n` + `This route is configured to be fully static, but an uncached \`fetch(...)\`, database call, or \`connection()\` requires rendering at request time.\n\n` + `Ways to fix this:\n` + `  - [cache] Cache the data used by \`generateMetadata()\` with \`"use cache"\` (does not apply to \`connection()\`)\n` + `  - [static] Replace the dynamic data used by \`generateMetadata()\` with static data\n\n` + `Learn more: https://nextjs.org/docs/messages/static-metadata-dynamic`);
}
function createNonPrerenderableMetadataErrorInStaticRoute(route) {
    return new Error(`Route "${route}": Next.js encountered uncached or runtime data in \`generateMetadata()\` on a route that must be fully static.\n\n` + `This route is configured to be fully static, but some data requires rendering at request time.\n\n` + `Ways to fix this:\n` + `  - [cache] For uncached data: cache the data used by \`generateMetadata()\` with \`"use cache"\` (does not apply to \`connection()\`)\n` + `  - [static] Replace the dynamic data used by \`generateMetadata()\` with static data\n\n` + `Learn more: https://nextjs.org/docs/messages/static-metadata-dynamic`);
}
function createRuntimeViewportErrorInStaticRoute(route) {
    return new Error(`Route "${route}": Next.js encountered runtime data in \`generateViewport()\` on a route that must be fully static.\n\n` + `This route is configured to be fully static, but runtime data from \`cookies()\`, \`headers()\`, \`params\`, \`searchParams\`, or a short-lived cache requires rendering at request time.\n\n` + `Ways to fix this:\n` + `  - [static] Replace the dynamic data used by \`generateViewport()\` with static data\n\n` + `Learn more: https://nextjs.org/docs/messages/static-viewport-runtime`);
}
function createDynamicViewportErrorInStaticRoute(route) {
    return new Error(`Route "${route}": Next.js encountered uncached data in \`generateViewport()\` on a route that must be fully static.\n\n` + `This route is configured to be fully static, but an uncached \`fetch(...)\`, database call, or \`connection()\` requires rendering at request time.\n\n` + `Ways to fix this:\n` + `  - [cache] Cache the data used by \`generateViewport()\` with \`"use cache"\` (does not apply to \`connection()\`)\n` + `  - [static] Replace the dynamic data used by \`generateViewport()\` with static data\n\n` + `Learn more: https://nextjs.org/docs/messages/static-viewport-dynamic`);
}
function createNonPrerenderableViewportErrorInStaticRoute(route) {
    return new Error(`Route "${route}": Next.js encountered uncached or runtime data in \`generateViewport()\` on a route that must be fully static.\n\n` + `This route is configured to be fully static, but some data requires rendering at request time.\n\n` + `Ways to fix this:\n` + `  - [cache] For uncached data: cache the data used by \`generateViewport()\` with \`"use cache"\` (does not apply to \`connection()\`)\n` + `  - [static] Replace the dynamic data used by \`generateViewport()\` with static data\n\n` + `Learn more: https://nextjs.org/docs/messages/static-viewport-dynamic`);
}
function logBuildDebugHint(route) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
}),
"[project]/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * The functions provided by this module are used to communicate certain properties
 * about the currently running code so that Next.js can make decisions on how to handle
 * the current execution in different rendering modes such as pre-rendering, resuming, and SSR.
 *
 * Today Next.js treats all code as potentially static. Certain APIs may only make sense when dynamically rendering.
 * Traditionally this meant deopting the entire render to dynamic however with PPR we can now deopt parts
 * of a React tree as dynamic while still keeping other parts static. There are really two different kinds of
 * Dynamic indications.
 *
 * The first is simply an intention to be dynamic. unstable_noStore is an example of this where
 * the currently executing code simply declares that the current scope is dynamic but if you use it
 * inside unstable_cache it can still be cached. This type of indication can be removed if we ever
 * make the default dynamic to begin with because the only way you would ever be static is inside
 * a cache scope which this indication does not affect.
 *
 * The second is an indication that a dynamic data source was read. This is a stronger form of dynamic
 * because it means that it is inappropriate to cache this at all. using a dynamic data source inside
 * unstable_cache should error. If you want to use some dynamic data inside unstable_cache you should
 * read that data outside the cache and pass it in as an argument to the cached function.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DynamicHoleKind: null,
    PreludeState: null,
    abortAndThrowOnSynchronousRequestDataAccess: null,
    abortOnSynchronousPlatformIOAccess: null,
    accessedDynamicData: null,
    annotateDynamicAccess: null,
    consumeDynamicAccess: null,
    createDynamicTrackingState: null,
    createDynamicValidationState: null,
    createHangingInputAbortSignal: null,
    createInstantValidationState: null,
    formatDynamicAPIAccesses: null,
    getDisallowedReasonsInStaticRoute: null,
    getFirstDynamicReason: null,
    getNavigationDisallowedDynamicReasons: null,
    getStaticShellDisallowedDynamicReasons: null,
    isPrerenderInterruptedError: null,
    logDisallowedDynamicError: null,
    markCurrentScopeAsDynamic: null,
    throwIfDisallowedDynamic: null,
    throwIfDisallowedDynamicInStaticRoute: null,
    throwIfSyncIOUsed: null,
    throwToInterruptStaticGeneration: null,
    trackAllowedDynamicAccess: null,
    trackDynamicAccessInStaticRoute: null,
    trackDynamicDataInDynamicRender: null,
    trackDynamicHoleInNavigation: null,
    trackDynamicHoleInStaticShell: null,
    trackThrownErrorInNavigation: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DynamicHoleKind: function() {
        return DynamicHoleKind;
    },
    PreludeState: function() {
        return PreludeState;
    },
    abortAndThrowOnSynchronousRequestDataAccess: function() {
        return abortAndThrowOnSynchronousRequestDataAccess;
    },
    abortOnSynchronousPlatformIOAccess: function() {
        return abortOnSynchronousPlatformIOAccess;
    },
    accessedDynamicData: function() {
        return accessedDynamicData;
    },
    annotateDynamicAccess: function() {
        return annotateDynamicAccess;
    },
    consumeDynamicAccess: function() {
        return consumeDynamicAccess;
    },
    createDynamicTrackingState: function() {
        return createDynamicTrackingState;
    },
    createDynamicValidationState: function() {
        return createDynamicValidationState;
    },
    createHangingInputAbortSignal: function() {
        return createHangingInputAbortSignal;
    },
    createInstantValidationState: function() {
        return createInstantValidationState;
    },
    formatDynamicAPIAccesses: function() {
        return formatDynamicAPIAccesses;
    },
    getDisallowedReasonsInStaticRoute: function() {
        return getDisallowedReasonsInStaticRoute;
    },
    getFirstDynamicReason: function() {
        return getFirstDynamicReason;
    },
    getNavigationDisallowedDynamicReasons: function() {
        return getNavigationDisallowedDynamicReasons;
    },
    getStaticShellDisallowedDynamicReasons: function() {
        return getStaticShellDisallowedDynamicReasons;
    },
    isPrerenderInterruptedError: function() {
        return isPrerenderInterruptedError;
    },
    logDisallowedDynamicError: function() {
        return logDisallowedDynamicError;
    },
    markCurrentScopeAsDynamic: function() {
        return markCurrentScopeAsDynamic;
    },
    throwIfDisallowedDynamic: function() {
        return throwIfDisallowedDynamic;
    },
    throwIfDisallowedDynamicInStaticRoute: function() {
        return throwIfDisallowedDynamicInStaticRoute;
    },
    throwIfSyncIOUsed: function() {
        return throwIfSyncIOUsed;
    },
    throwToInterruptStaticGeneration: function() {
        return throwToInterruptStaticGeneration;
    },
    trackAllowedDynamicAccess: function() {
        return trackAllowedDynamicAccess;
    },
    trackDynamicAccessInStaticRoute: function() {
        return trackDynamicAccessInStaticRoute;
    },
    trackDynamicDataInDynamicRender: function() {
        return trackDynamicDataInDynamicRender;
    },
    trackDynamicHoleInNavigation: function() {
        return trackDynamicHoleInNavigation;
    },
    trackDynamicHoleInStaticShell: function() {
        return trackDynamicHoleInStaticShell;
    },
    trackThrownErrorInNavigation: function() {
        return trackThrownErrorInNavigation;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)"));
const _hooksservercontext = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/hooks-server-context.js [app-rsc] (ecmascript)");
const _staticgenerationbailout = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/static-generation-bailout.js [app-rsc] (ecmascript)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/node_modules/next/dist/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)");
const _boundaryconstants = __turbopack_context__.r("[project]/node_modules/next/dist/lib/framework/boundary-constants.js [app-rsc] (ecmascript)");
const _scheduler = __turbopack_context__.r("[project]/node_modules/next/dist/lib/scheduler.js [app-rsc] (ecmascript)");
const _blockingroutemessages = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/blocking-route-messages.js [app-rsc] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
const _boundaryconstants1 = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/instant-validation/boundary-constants.js [app-rsc] (ecmascript)");
const _boundarytracking = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/instant-validation/boundary-tracking.js [app-rsc] (ecmascript)");
const _instantmessages = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/instant-messages.js [app-rsc] (ecmascript)");
const _reactbrowserbailout = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/react-browser-bailout.js [app-rsc] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function createDynamicTrackingState(isDebugDynamicAccesses) {
    return {
        isDebugDynamicAccesses,
        dynamicAccesses: [],
        syncDynamicErrorWithStack: null,
        syncDynamicErrorWithStackPostMicrotask: false
    };
}
function createDynamicValidationState() {
    return {
        hasSuspenseAboveBody: false,
        hasDynamicMetadata: false,
        dynamicMetadata: null,
        hasDynamicViewport: false,
        hasAllowedDynamic: false,
        dynamicErrors: []
    };
}
function getPendingClientSyncDynamicError(clientDynamic) {
    return clientDynamic.syncDynamicErrorWithStackPostMicrotask ? null : clientDynamic.syncDynamicErrorWithStack;
}
function getFirstDynamicReason(trackingState) {
    var _trackingState_dynamicAccesses_;
    return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? void 0 : _trackingState_dynamicAccesses_.expression;
}
function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'cache':
            case 'unstable-cache':
                // Inside cache scopes, marking a scope as dynamic has no effect,
                // because the outer cache scope creates a cache boundary. This is
                // subtly different from reading a dynamic data source, which is
                // forbidden inside a cache scope.
                return;
            case 'private-cache':
                // A private cache scope is already dynamic by definition.
                return;
            case 'prerender-legacy':
            case 'request':
            case 'build-time-generator':
                break;
            default:
                workUnitStore;
        }
    }
    // If we're forcing dynamic rendering or we're forcing static rendering, we
    // don't need to do anything here because the entire page is already dynamic
    // or it's static and it should not throw or postpone here.
    if (store.forceDynamic || store.forceStatic) return;
    if (store.dynamicShouldError) {
        throw new _staticgenerationbailout.StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
    }
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender-legacy':
                workUnitStore.revalidate = 0;
                // We aren't prerendering, but we are generating a static page. We need
                // to bail out of static generation.
                const err = new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
                store.dynamicUsageDescription = expression;
                store.dynamicUsageStack = err.stack;
                throw err;
            case 'request':
                markRequestStoreAsDynamic(workUnitStore);
                break;
            case 'build-time-generator':
                break;
            default:
                workUnitStore;
        }
    }
}
function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
    // We aren't prerendering but we are generating a static page. We need to bail out of static generation
    const err = new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
    prerenderStore.revalidate = 0;
    store.dynamicUsageDescription = expression;
    store.dynamicUsageStack = err.stack;
    throw err;
}
function trackDynamicDataInDynamicRender(workUnitStore) {
    switch(workUnitStore.type){
        case 'cache':
        case 'unstable-cache':
            // Inside cache scopes, marking a scope as dynamic has no effect,
            // because the outer cache scope creates a cache boundary. This is
            // subtly different from reading a dynamic data source, which is
            // forbidden inside a cache scope.
            return;
        case 'private-cache':
            // A private cache scope is already dynamic by definition.
            return;
        case 'prerender':
        case 'prerender-runtime':
        case 'prerender-legacy':
        case 'prerender-client':
        case 'validation-client':
        case 'build-time-generator':
            break;
        case 'request':
            markRequestStoreAsDynamic(workUnitStore);
            break;
        default:
            workUnitStore;
    }
}
function markRequestStoreAsDynamic(requestStore) {
    if (("TURBOPACK compile-time value", "1") && requestStore.phase === 'render') {
        requestStore.usedDynamic = true;
    }
}
function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
    const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
    const error = createPrerenderInterruptedError(reason);
    prerenderStore.controller.abort(error);
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking && dynamicTracking.syncDynamicErrorWithStack === null) {
        dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
        // React completes the task that is currently rendering before scheduled
        // abort cleanup. Client tracking can attribute the sync IO only during
        // that current task; server tracking keeps the error regardless.
        queueMicrotask(()=>{
            dynamicTracking.syncDynamicErrorWithStackPostMicrotask = true;
        });
    }
    abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
}
function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
    const prerenderSignal = prerenderStore.controller.signal;
    if (prerenderSignal.aborted === false) {
        // TODO it would be better to move this aborted check into the callsite so we can avoid making
        // the error object when it isn't relevant to the aborting of the prerender however
        // since we need the throw semantics regardless of whether we abort it is easier to land
        // this way. See how this was handled with `abortOnSynchronousPlatformIOAccess` for a closer
        // to ideal implementation
        abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
        // Preserve the exact server-side dynamic access for final validation after
        // interrupting this render.
        const dynamicTracking = prerenderStore.dynamicTracking;
        if (dynamicTracking) {
            if (dynamicTracking.syncDynamicErrorWithStack === null) {
                dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
            }
        }
    }
    throw createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
}
const NEXT_PRERENDER_INTERRUPTED = 'NEXT_PRERENDER_INTERRUPTED';
function createPrerenderInterruptedError(message) {
    const error = new Error(message);
    error.digest = NEXT_PRERENDER_INTERRUPTED;
    return error;
}
function isPrerenderInterruptedError(error) {
    return typeof error === 'object' && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && 'name' in error && 'message' in error && error instanceof Error;
}
function accessedDynamicData(dynamicAccesses) {
    return dynamicAccesses.length > 0;
}
function consumeDynamicAccess(serverDynamic, clientDynamic) {
    // We mutate because we only call this once we are no longer writing
    // to the dynamicTrackingState and it's more efficient than creating a new
    // array.
    serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
    return serverDynamic.dynamicAccesses;
}
function formatDynamicAPIAccesses(dynamicAccesses) {
    return dynamicAccesses.filter((access)=>typeof access.stack === 'string' && access.stack.length > 0).map(({ expression, stack })=>{
        stack = stack.split('\n') // Remove the "Error: " prefix from the first line of the stack trace as
        // well as the first 4 lines of the stack trace which is the distance
        // from the user code and the `new Error().stack` call.
        .slice(4).filter((line)=>{
            // Exclude Next.js internals from the stack trace.
            if (line.includes('node_modules/next/')) {
                return false;
            }
            // Exclude anonymous functions from the stack trace.
            if (line.includes(' (<anonymous>)')) {
                return false;
            }
            // Exclude Node.js internals from the stack trace.
            if (line.includes(' (node:')) {
                return false;
            }
            return true;
        }).join('\n');
        return `Dynamic API Usage Debug - ${expression}:\n${stack}`;
    });
}
function createHangingInputAbortSignal(workUnitStore) {
    switch(workUnitStore.type){
        case 'prerender':
        case 'prerender-runtime':
            const controller = new AbortController();
            if (workUnitStore.cacheSignal) {
                // If we have a cacheSignal it means we're in a prospective render. If
                // the input we're waiting on is coming from another cache, we do want
                // to wait for it so that we can resolve this cache entry too.
                workUnitStore.cacheSignal.inputReady().then(()=>{
                    controller.abort();
                });
            } else {
                // Otherwise we're in the final render and we should already have all
                // our caches filled.
                // If the prerender uses stages, we have wait until the final stage.
                // if an input didn't resolve at that point, then we can assume it never will.
                //
                // We might still be waiting on some microtasks so we
                // wait one tick before giving up. When we give up, we still want to
                // render the content of this cache as deeply as we can so that we can
                // suspend as deeply as possible in the tree or not at all if we don't
                // end up waiting for the input.
                const stagedRendering = (0, _workunitasyncstorageexternal.getStagedRenderingController)(workUnitStore);
                if (stagedRendering && stagedRendering.finalStage !== null) {
                    stagedRendering.waitForStage(stagedRendering.finalStage).then(()=>(0, _scheduler.scheduleOnNextTick)(()=>controller.abort()), noop);
                } else {
                    (0, _scheduler.scheduleOnNextTick)(()=>controller.abort());
                }
            }
            return controller.signal;
        case 'prerender-client':
        case 'validation-client':
        case 'prerender-legacy':
        case 'request':
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
        case 'build-time-generator':
            return undefined;
        default:
            workUnitStore;
    }
}
function noop() {}
function annotateDynamicAccess(expression, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
const hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
// Common implicit body tags that React will treat as body when placed directly in html
const bodyAndImplicitTags = 'body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6';
// Detects when RootLayoutBoundary (our framework marker component) appears
// after Suspense in the component stack, indicating the root layout is wrapped
// within a Suspense boundary. Ensures no body/html/implicit-body components are in between.
//
// Example matches:
//   at Suspense (<anonymous>)
//   at __next_root_layout_boundary__ (<anonymous>)
//
// Or with other components in between (but not body/html/implicit-body):
//   at Suspense (<anonymous>)
//   at SomeComponent (<anonymous>)
//   at __next_root_layout_boundary__ (<anonymous>)
const hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex = new RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:${bodyAndImplicitTags}) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${_boundaryconstants.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`);
const hasMetadataRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.METADATA_BOUNDARY_NAME}[\\n\\s]`);
const hasViewportRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`);
const hasOutletRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
const hasInstantValidationBoundaryRegex = new RegExp(`\\n\\s+at ${_boundaryconstants1.INSTANT_VALIDATION_BOUNDARY_NAME}[\\n\\s]`);
const slotMarkerRegex = new RegExp(`\\n\\s+at ${_boundaryconstants1.INSTANT_SLOT_MARKER_PREFIX}(\\d+)${_boundaryconstants1.INSTANT_SLOT_MARKER_SUFFIX}[\\n\\s]`);
/** Look up the config factory for the slot this error belongs to.
 * Checks the component stack for a slot marker (__next_instant_slot_N__)
 * and returns the config at that index. Falls back to index 0 (root
 * config) when no slot marker is found or the slot has no config. */ function resolveInstantStack(componentStack, dynamicValidation) {
    const { slotStacks } = dynamicValidation;
    if (slotStacks.length > 1) {
        const match = slotMarkerRegex.exec(componentStack);
        if (match) {
            // Slot markers are 0-indexed in the component name but
            // slotStacks is 1-indexed (index 0 is the root config).
            const slotIndex = parseInt(match[1], 10) + 1;
            const slotStack = slotStacks[slotIndex];
            if (slotStack != null) {
                return slotStack;
            }
        }
    }
    // Fall back to root config (index 0)
    return slotStacks[0] ?? null;
}
/**
 * Inspects the component stack of an outlet boundary to discover whether the
 * user placed a Suspense boundary above the document body, and records the
 * opt-in on `dynamicValidation.hasSuspenseAboveBody` if so.
 *
 * The outlet itself isn't a meaningful source of dynamic — it only resolves
 * when metadata/viewport are dynamic, which we track via their own boundaries.
 * However, the outlet renders alongside the page content, so its stack passes
 * through the user's layout chain (typically reaching into `<body>` via the
 * root layout). That makes the outlet stack our best opportunity to spot a
 * Suspense boundary above the body, even when no real body content is dynamic.
 * Without this, a route whose only dynamic source is `generateViewport()` would
 * miss the Suspense-above-body opt-in, because the viewport's stack lives in
 * the head and never sees the user's root layout.
 *
 * We deliberately only set `hasSuspenseAboveBody`, not `hasAllowedDynamic`. The
 * latter tracks whether the body has dynamic content that's been wrapped in
 * Suspense (i.e., the page is partially dynamic). The outlet rendering tells us
 * about the structural opt-in for an empty shell, not about the body being
 * partially dynamic. The distinction matters because dynamic metadata is only
 * acceptable when the page is partially dynamic (via real body holes), and we
 * don't want this outlet-based detection to mask that case.
 */ function trackOutletSuspenseAboveBody(componentStack, dynamicValidation) {
    if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        dynamicValidation.hasSuspenseAboveBody = true;
    }
}
function trackDynamicAccessInStaticRoute(dynamicReason, workStore, componentStack, dynamicValidation, clientDynamic, isServerPartial, kind) {
    const syncDynamicError = getPendingClientSyncDynamicError(clientDynamic);
    if (hasOutletRegex.test(componentStack)) {
        trackOutletSuspenseAboveBody(componentStack, dynamicValidation);
        return;
    }
    if (hasMetadataRegex.test(componentStack)) {
        dynamicValidation.dynamicErrors.push(addErrorContext(createMetadataErrorInStaticRoute(kind, workStore.route), componentStack, null));
        return;
    }
    if (hasViewportRegex.test(componentStack)) {
        dynamicValidation.dynamicErrors.push(addErrorContext(createViewportErrorInStaticRoute(kind, workStore.route), componentStack, null));
        return;
    }
    let hasSuspense = false;
    if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        // this error had a Suspense boundary above it, and it's above the body as well.
        dynamicValidation.hasSuspenseAboveBody = true;
        hasSuspense = true;
    } else if (hasSuspenseRegex.test(componentStack)) {
        // this error had a Suspense boundary above it.
        hasSuspense = true;
    }
    if (hasSuspense) {
        if (!isServerPartial) {
            // If we don't have holes caused by server data, then any holes must be caused
            // by client-only code, which is allowed.
            dynamicValidation.hasAllowedDynamic = true;
            return;
        }
        // We have holes that may be caused by server data.
        if (syncDynamicError || (0, _dynamicrenderingutils.isClientHookDynamicError)(dynamicReason)) {
            // We know this hole wasn't caused by server data, so it's allowed
            // (because it's wrapped in a Suspense)
            dynamicValidation.hasAllowedDynamic = true;
            return;
        }
        // Any remaining hole may be caused by a server hole.
        // These are not allowed even with Suspense.
        // (NOTE: this may misreport valid client dynamic holes as server holes)
        dynamicValidation.dynamicErrors.push(addErrorContext(createBodyErrorInStaticRoute(kind, workStore.route), componentStack, null));
        return;
    }
    if (syncDynamicError) {
        dynamicValidation.dynamicErrors.push(syncDynamicError);
        return;
    }
    if ((0, _dynamicrenderingutils.isClientHookDynamicError)(dynamicReason)) {
        dynamicValidation.dynamicErrors.push(addErrorContext(dynamicReason, componentStack, null));
        return;
    }
    const error = addErrorContext(isServerPartial ? createBodyErrorInStaticRoute(kind, workStore.route) : createBodyError(kind, workStore.route), componentStack, null);
    dynamicValidation.dynamicErrors.push(error);
}
function trackAllowedDynamicAccess(dynamicReason, workStore, componentStack, dynamicValidation, clientDynamic) {
    const dynamicHoleKind = 6;
    const syncDynamicError = getPendingClientSyncDynamicError(clientDynamic);
    if (hasOutletRegex.test(componentStack)) {
        trackOutletSuspenseAboveBody(componentStack, dynamicValidation);
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        dynamicValidation.hasDynamicMetadata = true;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        dynamicValidation.hasDynamicViewport = true;
        return;
    } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        // For Suspense within body, the prelude wouldn't be empty so it wouldn't violate the empty static shells rule.
        // But if you have Suspense above body, the prelude is empty but we allow that because having Suspense
        // is an explicit signal from the user that they acknowledge the empty shell and want dynamic rendering.
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        // this error had a Suspense boundary above it so we don't need to report it as a source
        // of disallowed
        dynamicValidation.hasAllowedDynamic = true;
        return;
    } else if (syncDynamicError) {
        dynamicValidation.dynamicErrors.push(syncDynamicError);
        return;
    }
    if ((0, _dynamicrenderingutils.isClientHookDynamicError)(dynamicReason)) {
        dynamicValidation.dynamicErrors.push(addErrorContext(dynamicReason, componentStack, null));
        return;
    }
    const error = addErrorContext(createBodyError(dynamicHoleKind, workStore.route), componentStack, null);
    dynamicValidation.dynamicErrors.push(error);
    return;
}
var DynamicHoleKind = /*#__PURE__*/ function(DynamicHoleKind) {
    /** We know that this hole is caused by runtime data. */ DynamicHoleKind[DynamicHoleKind["Runtime"] = 1] = "Runtime";
    /** We know that this hole is caused by link data. */ DynamicHoleKind[DynamicHoleKind["Link"] = 2] = "Link";
    /** We know that this hole is caused by navigation(). */ DynamicHoleKind[DynamicHoleKind["Navigation"] = 3] = "Navigation";
    /** We know that this hole is caused by prefetch(). */ DynamicHoleKind[DynamicHoleKind["Prefetch"] = 4] = "Prefetch";
    /** We know that this hole is caused by dynamic data. */ DynamicHoleKind[DynamicHoleKind["Dynamic"] = 5] = "Dynamic";
    /** We know that this hole is caused by runtime or dynamic data, but don't know which. */ DynamicHoleKind[DynamicHoleKind["RuntimeOrDynamic"] = 6] = "RuntimeOrDynamic";
    return DynamicHoleKind;
}({});
function createInstantValidationState(slotStacks) {
    return {
        hasDynamicMetadata: false,
        hasAllowedClientDynamicAboveBoundary: false,
        dynamicMetadata: null,
        hasDynamicViewport: false,
        hasAllowedDynamic: false,
        dynamicErrors: [],
        validationPreventingErrors: [],
        thrownErrorsOutsideBoundary: [],
        slotStacks
    };
}
function trackDynamicHoleInNavigation(dynamicReason, workStore, componentStack, dynamicValidation, clientDynamic, kind, boundaryState) {
    const syncDynamicError = getPendingClientSyncDynamicError(clientDynamic);
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    }
    // Resolve the config stack for this specific error. If the error
    // is inside a slot marker, use that slot's config. Otherwise fall
    // back to the default.
    const effectiveCreateInstantStack = resolveInstantStack(componentStack, dynamicValidation);
    if (hasMetadataRegex.test(componentStack)) {
        const error = addErrorContext(createMetadataError(kind, workStore.route), componentStack, effectiveCreateInstantStack);
        dynamicValidation.dynamicMetadata = error;
        return;
    }
    if (hasViewportRegex.test(componentStack)) {
        const error = addErrorContext(createViewportError(kind, workStore.route), componentStack, effectiveCreateInstantStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
    const boundaryLocation = hasInstantValidationBoundaryRegex.exec(componentStack);
    if (!boundaryLocation) {
        // We don't see the validation boundary in the component stack,
        // so this hole must be coming from a shared parent.
        // Shared parents are fully resolved and don't have RSC holes,
        // but they can still suspend in a client component during SSR.
        // If we managed to render all the validation boundaries, that means
        // that the client holes aren't blocking validation and we can disregard them.
        // Note that we don't even care whether they have suspense or not.
        if ((0, _boundarytracking.allRequiredBoundariesRendered)(boundaryState)) {
            dynamicValidation.hasAllowedClientDynamicAboveBoundary = true;
            dynamicValidation.hasAllowedDynamic = true // Holes outside the boundary contribute to allowing dynamic metadata
            ;
            return;
        } else {
            // TODO(instant-validation) TODO(NAR-787)
            // If shared parents blocked us from validating, we should only log
            // the errors from the innermost (segments), i.e. omit layouts whose
            // slots managed to render (because clearly they didn't block validation)
            const message = `Route "${workStore.route}": Could not validate \`instant\` because a Client Component in a parent segment prevented the page from rendering.`;
            const error = addErrorContext(new Error(message), componentStack, effectiveCreateInstantStack);
            dynamicValidation.validationPreventingErrors.push(error);
            return;
        }
    } else {
        // The hole originates inside the validation boundary.
        //
        // Check if we have a Suspense above the hole, but below the validation boundary.
        // If we do, then this dynamic usage wouldn't block a navigation to this subtree.
        // Conversely, if the nearest suspense is above the validation boundary, then this subtree would block.
        //
        // Note that in the component stack, children come before parents.
        //
        // Valid:
        //   ...
        //   at Suspense
        //   ...
        //   at __next_prefetch_validation_boundary__
        //
        // Invalid:
        //   ...
        //   at __next_prefetch_validation_boundary__
        //   ...
        //   at Suspense
        //
        const suspenseLocation = hasSuspenseRegex.exec(componentStack);
        if (suspenseLocation) {
            if (suspenseLocation.index < boundaryLocation.index) {
                dynamicValidation.hasAllowedDynamic = true;
                return;
            } else {
            // invalid - fallthrough
            }
        }
    }
    if (syncDynamicError) {
        if (effectiveCreateInstantStack !== null && syncDynamicError.cause === undefined) {
            syncDynamicError.cause = effectiveCreateInstantStack();
        }
        dynamicValidation.dynamicErrors.push(syncDynamicError);
        return;
    }
    if ((0, _dynamicrenderingutils.isClientHookDynamicError)(dynamicReason)) {
        dynamicValidation.dynamicErrors.push(addErrorContext(dynamicReason, componentStack, effectiveCreateInstantStack));
        return;
    }
    const error = addErrorContext(createBodyErrorInNavigation(kind, workStore.route), componentStack, effectiveCreateInstantStack);
    dynamicValidation.dynamicErrors.push(error);
    return;
}
function createBodyError(kind, route) {
    switch(kind){
        case 1:
            return (0, _blockingroutemessages.createRuntimeBodyError)(route);
        case 5:
            return (0, _blockingroutemessages.createDynamicBodyError)(route);
        case 6:
            return (0, _blockingroutemessages.createDynamicOrRuntimeBodyError)(route);
    }
}
function createBodyErrorInNavigation(kind, route) {
    switch(kind){
        case 1:
            return (0, _blockingroutemessages.createRuntimeBodyErrorInNavigation)(route);
        case 2:
            return (0, _blockingroutemessages.createLinkBodyErrorInNavigation)(route);
        case 3:
            return (0, _blockingroutemessages.createNavigationBodyErrorInNavigation)(route);
        case 4:
            return (0, _blockingroutemessages.createPrefetchBodyErrorInNavigation)(route);
        case 5:
            return (0, _blockingroutemessages.createDynamicBodyErrorInNavigation)(route);
    }
}
function createMetadataError(kind, route) {
    switch(kind){
        case 1:
            return (0, _blockingroutemessages.createRuntimeMetadataError)(route);
        case 2:
            return (0, _blockingroutemessages.createLinkMetadataError)(route);
        case 3:
            return (0, _blockingroutemessages.createNavigationMetadataError)(route);
        case 4:
            return (0, _blockingroutemessages.createPrefetchMetadataError)(route);
        case 5:
            return (0, _blockingroutemessages.createDynamicMetadataError)(route);
        case 6:
            return (0, _blockingroutemessages.createDynamicOrRuntimeMetadataError)(route);
    }
}
function createViewportError(kind, route) {
    switch(kind){
        case 1:
            return (0, _blockingroutemessages.createRuntimeViewportError)(route);
        case 2:
            return (0, _blockingroutemessages.createLinkViewportError)(route);
        case 3:
            return (0, _blockingroutemessages.createNavigationViewportError)(route);
        case 4:
            return (0, _blockingroutemessages.createPrefetchViewportError)(route);
        case 5:
            return (0, _blockingroutemessages.createDynamicViewportError)(route);
        case 6:
            return (0, _blockingroutemessages.createDynamicOrRuntimeViewportError)(route);
    }
}
function createBodyErrorInStaticRoute(kind, route) {
    switch(kind){
        case 1:
            return (0, _blockingroutemessages.createRuntimeBodyErrorInStaticRoute)(route);
        case 5:
            return (0, _blockingroutemessages.createDynamicBodyErrorInStaticRoute)(route);
        case 6:
            return (0, _blockingroutemessages.createNonPrerenderableBodyErrorInStaticRoute)(route);
    }
}
function createMetadataErrorInStaticRoute(kind, route) {
    switch(kind){
        case 1:
            return (0, _blockingroutemessages.createRuntimeMetadataErrorInStaticRoute)(route);
        case 5:
            return (0, _blockingroutemessages.createDynamicMetadataErrorInStaticRoute)(route);
        case 6:
            return (0, _blockingroutemessages.createNonPrerenderableMetadataErrorInStaticRoute)(route);
    }
}
function createViewportErrorInStaticRoute(kind, route) {
    switch(kind){
        case 1:
            return (0, _blockingroutemessages.createRuntimeViewportErrorInStaticRoute)(route);
        case 5:
            return (0, _blockingroutemessages.createDynamicViewportErrorInStaticRoute)(route);
        case 6:
            return (0, _blockingroutemessages.createNonPrerenderableViewportErrorInStaticRoute)(route);
    }
}
function trackThrownErrorInNavigation(workStore, dynamicValidation, thrownValue, componentStack, reactBrowserBailout) {
    const boundaryLocation = hasInstantValidationBoundaryRegex.exec(componentStack);
    if (!boundaryLocation) {
        // There's no validation boundary on the component stack.
        // This error may have blocked a boundary from rendering.
        // Wrap the error to provide component context.
        // This helps for errors from node_modules which would otherwise
        // have no useful stack information due to ignore-listing,
        // e.g. next/dynamic with `ssr: false`.
        if (reactBrowserBailout) {
            // React preserves Next's branded bailout reason as the error cause.
            // Replace the internal wrapper before storing the user-facing diagnostic.
            const browserBailoutReason = (0, _reactbrowserbailout.getReactBrowserBailoutReason)(thrownValue);
            if (browserBailoutReason !== undefined) {
                const browserBailoutError = thrownValue;
                browserBailoutError.cause = browserBailoutReason;
            }
        }
        const error = addErrorContext(new Error('An error occurred while attempting to validate instant UI. This error may be preventing the validation from completing.', {
            cause: thrownValue
        }), componentStack, null);
        dynamicValidation.thrownErrorsOutsideBoundary.push(error);
    } else {
        // There's validation boundary on the component stack,
        // so we know this error didn't block a validation boundary from rendering.
        // However, this error might be hiding be hiding dynamic content that would
        // cause validation to fail.
        const suspenseLocation = hasSuspenseRegex.exec(componentStack);
        if (suspenseLocation) {
            if (suspenseLocation.index < boundaryLocation.index) {
                // There's a Suspense below the validation boundary but above this error's location.
                // This subtree can't fail instant validation because any potential
                // dynamic holes would be guarded by the Suspense anyway,
                // so we can allow this.
                return;
            } else {
            // invalid - fallthrough
            }
        }
        if (reactBrowserBailout) {
            // React preserves Next's branded bailout reason as the error cause.
            // Replace the internal wrapper before storing the user-facing diagnostic.
            const browserBailoutReason = (0, _reactbrowserbailout.getReactBrowserBailoutReason)(thrownValue);
            if (browserBailoutReason !== undefined) {
                const browserBailoutError = thrownValue;
                browserBailoutError.cause = browserBailoutReason;
            }
        }
        const message = `Route "${workStore.route}": Could not validate \`instant\` because an error prevented the target segment from rendering.`;
        const error = addErrorContext(new Error(message, {
            cause: thrownValue
        }), componentStack, null // TODO(instant-validation-build): conflicting use of cause
        );
        dynamicValidation.validationPreventingErrors.push(error);
    }
}
function trackDynamicHoleInStaticShell(dynamicReason, workStore, componentStack, dynamicValidation, clientDynamic, kind) {
    const syncDynamicError = getPendingClientSyncDynamicError(clientDynamic);
    if (hasOutletRegex.test(componentStack)) {
        trackOutletSuspenseAboveBody(componentStack, dynamicValidation);
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        const error = addErrorContext(createMetadataError(kind, workStore.route), componentStack, null);
        dynamicValidation.dynamicMetadata = error;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        const error = addErrorContext(createViewportError(kind, workStore.route), componentStack, null);
        dynamicValidation.dynamicErrors.push(error);
        return;
    } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        // For Suspense within body, the prelude wouldn't be empty so it wouldn't violate the empty static shells rule.
        // But if you have Suspense above body, the prelude is empty but we allow that because having Suspense
        // is an explicit signal from the user that they acknowledge the empty shell and want dynamic rendering.
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        // this error had a Suspense boundary above it so we don't need to report it as a source
        // of disallowed
        dynamicValidation.hasAllowedDynamic = true;
        return;
    } else if (syncDynamicError) {
        dynamicValidation.dynamicErrors.push(syncDynamicError);
        return;
    }
    if ((0, _dynamicrenderingutils.isClientHookDynamicError)(dynamicReason)) {
        dynamicValidation.dynamicErrors.push(addErrorContext(dynamicReason, componentStack, null));
        return;
    }
    const error = addErrorContext(kind === 1 ? (0, _blockingroutemessages.createRuntimeBodyError)(workStore.route) : (0, _blockingroutemessages.createDynamicBodyError)(workStore.route), componentStack, null);
    dynamicValidation.dynamicErrors.push(error);
    return;
}
/**
 * In dev mode, we prefer using the owner stack, otherwise the provided
 * component stack is used.
 */ function addErrorContext(error, componentStack, createInstantStack) {
    const ownerStack = ("TURBOPACK compile-time value", "development") !== 'production' && _react.default.captureOwnerStack ? _react.default.captureOwnerStack() : null;
    if (createInstantStack !== null) {
        error.cause = createInstantStack();
    }
    // TODO go back to owner stack here if available. This is temporarily using componentStack to get the right
    //
    error.stack = error.name + ': ' + error.message + (ownerStack || componentStack);
    return error;
}
var PreludeState = /*#__PURE__*/ function(PreludeState) {
    PreludeState[PreludeState["Full"] = 0] = "Full";
    PreludeState[PreludeState["Empty"] = 1] = "Empty";
    PreludeState[PreludeState["Errored"] = 2] = "Errored";
    return PreludeState;
}({});
function logDisallowedDynamicError(workStore, error) {
    console.error(error);
    (0, _blockingroutemessages.logBuildDebugHint)(workStore.route);
}
function throwIfSyncIOUsed(workStore, serverDynamic) {
    if (serverDynamic.syncDynamicErrorWithStack) {
        logDisallowedDynamicError(workStore, serverDynamic.syncDynamicErrorWithStack);
        throw new _staticgenerationbailout.StaticGenBailoutError();
    }
}
function throwIfDisallowedDynamic(workStore, prelude, dynamicValidation, serverDynamic, allowEmptyStaticShell) {
    const dynamicHoleKind = 6;
    throwIfSyncIOUsed(workStore, serverDynamic);
    // The dynamic metadata error is a mistake-detection signal. It fires when the
    // rest of the shell is otherwise fully static apart from metadata, suggesting
    // the dynamic data access in `generateMetadata` was probably unintentional.
    // That condition is independent of whether the user or build phase accepted
    // an empty shell, so we surface it before any opt-in bypass.
    if (prelude === 0 && dynamicValidation.hasAllowedDynamic === false && dynamicValidation.hasDynamicMetadata) {
        console.error(createMetadataError(dynamicHoleKind, workStore.route).message);
        throw new _staticgenerationbailout.StaticGenBailoutError();
    }
    // Either flag expresses "this shell is allowed to be empty/blocking":
    //   - `allowEmptyStaticShell` covers `instant = false` (user opt-in)
    //     and the build-phase fallback-shell case.
    //   - `hasSuspenseAboveBody` is the structural opt-in inside the user's root
    //     layout.
    // Treat them as synonyms for the purpose of bypassing shell-failure errors.
    if (allowEmptyStaticShell || dynamicValidation.hasSuspenseAboveBody) {
        return;
    }
    if (prelude !== 0) {
        // We didn't have any sync bailouts but there may be user code which
        // blocked the root. We would have captured these during the prerender
        // and can log them here and then terminate the build/validating render
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
            for(let i = 0; i < dynamicErrors.length; i++){
                logDisallowedDynamicError(workStore, dynamicErrors[i]);
            }
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        // If we got this far then the only other thing that could be blocking
        // the root is dynamic Viewport. If this is dynamic then
        // you need to opt into that by adding a Suspense boundary above the body
        // to indicate your are ok with fully dynamic rendering.
        if (dynamicValidation.hasDynamicViewport) {
            console.error(createViewportError(dynamicHoleKind, workStore.route).message);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        if (prelude === 1) {
            // If we ever get this far then we messed up the tracking of invalid dynamic.
            // We still adhere to the constraint that you must produce a shell but invite the
            // user to report this as a bug in Next.js.
            console.error(`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
    }
}
function throwIfDisallowedDynamicInStaticRoute(workStore, prelude, dynamicValidation, serverDynamic, isFallbackShell, allowEmptyStaticShell, isServerPartial) {
    const reasons = getDisallowedReasonsInStaticRoute(workStore, prelude, dynamicValidation, serverDynamic, isFallbackShell, allowEmptyStaticShell, isServerPartial);
    if (reasons.length > 0) {
        for (const reason of reasons){
            logDisallowedDynamicError(workStore, reason);
        }
        throw new _staticgenerationbailout.StaticGenBailoutError();
    }
}
function getDisallowedReasonsInStaticRoute(workStore, prelude, dynamicValidation, serverDynamic, isFallbackShell, allowEmptyStaticShell, isServerPartial) {
    if (serverDynamic && serverDynamic.syncDynamicErrorWithStack) {
        return [
            serverDynamic.syncDynamicErrorWithStack
        ];
    }
    // We do a fallback shell prerender, but it's not meant to be validated --
    // we just need it to create the relevant prerender outputs.
    if (isFallbackShell) {
        return [];
    }
    // Suspense-above-body and `instant = false` bypass reporting
    // that the shell is blocked. However, if we have non-prerenderable server
    // data, we still have to error, regardless of those two.
    if (!isServerPartial && (allowEmptyStaticShell || dynamicValidation.hasSuspenseAboveBody)) {
        return [];
    }
    const { dynamicErrors } = dynamicValidation;
    if (dynamicErrors.length > 0) {
        return dynamicErrors;
    }
    // Dynamic data may have been passed into a client component without calling `use()`,
    // in which case we wouldn't see it during the prerender, but still need to error.
    // Fall back to a generic error message.
    if (isServerPartial) {
        return [
            new Error(`Route "${workStore.route}": Next.js encountered data that is not available during a static prerender, but is unable to provide a location.`)
        ];
    }
    if (prelude === 1 || prelude === 2) {
        // We've somehow ended up with an empty prelude but no dynamic errors.
        // We must've messed up the tracking somehow.
        return [
            new _invarianterror.InvariantError(`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason.`)
        ];
    }
    return [];
}
function getStaticShellDisallowedDynamicReasons(workStore, prelude, dynamicValidation, allowEmptyStaticShell) {
    // The dynamic metadata error is a mistake-detection signal. It fires when the
    // rest of the shell is otherwise fully static apart from metadata, suggesting
    // the dynamic data access in `generateMetadata` was probably unintentional.
    // That condition is independent of whether the user or build phase accepted
    // an empty shell, so we surface it before any opt-in bypass.
    if (prelude === 0 && dynamicValidation.hasAllowedDynamic === false && dynamicValidation.dynamicErrors.length === 0 && dynamicValidation.dynamicMetadata) {
        return [
            dynamicValidation.dynamicMetadata
        ];
    }
    // Either flag expresses "this shell is allowed to be empty/blocking":
    //   - `allowEmptyStaticShell` covers `instant = false` (user opt-in)
    //     and the build-phase fallback-shell case.
    //   - `hasSuspenseAboveBody` is the structural opt-in inside the user's root
    //     layout.
    // Treat them as synonyms for the purpose of bypassing shell-failure errors.
    if (allowEmptyStaticShell || dynamicValidation.hasSuspenseAboveBody) {
        return [];
    }
    if (prelude !== 0) {
        // We didn't have any sync bailouts but there may be user code which
        // blocked the root. We would have captured these during the prerender
        // and can log them here and then terminate the build/validating render
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
            return dynamicErrors;
        }
        if (prelude === 1) {
            // If we ever get this far then we messed up the tracking of invalid dynamic.
            // We still adhere to the constraint that you must produce a shell but invite the
            // user to report this as a bug in Next.js.
            return [
                new _invarianterror.InvariantError(`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason.`)
            ];
        }
    }
    // We had a non-empty prelude and there are no dynamic holes
    return [];
}
function getNavigationDisallowedDynamicReasons(workStore, prelude, dynamicValidation, validationSampleTracking, boundaryState, devRenderDidError) {
    // If we have errors related to missing samples, those should take precedence over everything else.
    if (validationSampleTracking) {
        const { missingSampleErrors } = validationSampleTracking;
        if (missingSampleErrors.length > 0) {
            return missingSampleErrors;
        }
    }
    const { validationPreventingErrors } = dynamicValidation;
    if (validationPreventingErrors.length > 0) {
        if (("TURBOPACK compile-time value", "1") && devRenderDidError) {
            // The dev render already surfaced server errors to the user.
            // The same errors likely caused validation to be inconclusive,
            // so reporting them again as validation failures would be noisy.
            return [];
        }
        return validationPreventingErrors;
    }
    // NOTE: We don't care about Suspense above body here,
    // we're only concerned with the validation boundary
    if (prelude !== 0) {
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
            return dynamicErrors;
        }
        if (prelude === 1 && !dynamicValidation.hasAllowedClientDynamicAboveBoundary && (0, _boundarytracking.allRequiredBoundariesRendered)(boundaryState)) {
            // If we ever get this far then we messed up the tracking of invalid
            // dynamic. (When boundaries are missing the deferred fallback below
            // will surface a more useful error.)
            return new _invarianterror.InvariantError(`Route "${workStore.route}" failed to render during instant validation and Next.js was unable to determine a reason.`);
        }
    } else {
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
            return dynamicErrors;
        }
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.dynamicMetadata) {
            return [
                dynamicValidation.dynamicMetadata
            ];
        }
    }
    // Missing boundaries on their own aren't a strong signal — a parent
    // layout may legitimately omit a slot. Defer this so the caller can
    // try shallower validation depths first; if every depth comes up
    // empty we still want to surface this so the user is made aware that
    // validation didn't complete. When we add a markers API, the
    // marker-based variant of this check can become strict again.
    if (!(0, _boundarytracking.allRequiredBoundariesRendered)(boundaryState)) {
        const { thrownErrorsOutsideBoundary } = dynamicValidation;
        const rootInstantStack = dynamicValidation.slotStacks[0];
        if (thrownErrorsOutsideBoundary.length === 0) {
            const missingFiles = [];
            for (const [id, filePaths] of boundaryState.requiredIds){
                if (!boundaryState.renderedIds.has(id)) {
                    for (const filePath of filePaths){
                        let normalized = filePath.replace(/^\[project\][\\/]?/, '').replace(process.cwd() + '/', '').replace(process.cwd() + '\\', '');
                        missingFiles.push(normalized);
                    }
                }
            }
            missingFiles.sort();
            return (0, _instantmessages.createUnrenderedSegmentError)(workStore.route, missingFiles);
        } else if (("TURBOPACK compile-time value", "1") && devRenderDidError) {
            // Errors outside the boundary likely blocked it from rendering,
            // but they're already being reported to the user via the dev
            // render. Suppress the validation failure to avoid noise.
            return [];
        } else if (thrownErrorsOutsideBoundary.length === 1) {
            const message = `Route "${workStore.route}": Could not validate \`instant\` because the target segment was prevented from rendering, likely due to the following error.`;
            const error = rootInstantStack !== null ? rootInstantStack() : new Error();
            error.name = 'Error';
            error.message = message;
            return new AggregateError([
                error,
                thrownErrorsOutsideBoundary[0]
            ]);
        } else {
            const message = `Route "${workStore.route}": Could not validate \`instant\` because the target segment was prevented from rendering, likely due to one of the following errors.`;
            const error = rootInstantStack !== null ? rootInstantStack() : new Error();
            error.name = 'Error';
            error.message = message;
            return new AggregateError([
                error,
                ...thrownErrorsOutsideBoundary
            ]);
        }
    }
    // We had a non-empty prelude and there are no dynamic holes
    return [];
}
}),
"[project]/node_modules/next/dist/server/app-render/instant-validation/boundary-constants.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    INSTANT_SLOT_MARKER_PREFIX: null,
    INSTANT_SLOT_MARKER_SUFFIX: null,
    INSTANT_VALIDATION_BOUNDARY_NAME: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    INSTANT_SLOT_MARKER_PREFIX: function() {
        return INSTANT_SLOT_MARKER_PREFIX;
    },
    INSTANT_SLOT_MARKER_SUFFIX: function() {
        return INSTANT_SLOT_MARKER_SUFFIX;
    },
    INSTANT_VALIDATION_BOUNDARY_NAME: function() {
        return INSTANT_VALIDATION_BOUNDARY_NAME;
    }
});
const INSTANT_VALIDATION_BOUNDARY_NAME = '__next_instant_validation_boundary__';
const INSTANT_SLOT_MARKER_PREFIX = '__next_instant_slot_';
const INSTANT_SLOT_MARKER_SUFFIX = '__';
}),
"[project]/node_modules/next/dist/server/app-render/instant-validation/boundary-tracking.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    allRequiredBoundariesRendered: null,
    createValidationBoundaryTracking: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    allRequiredBoundariesRendered: function() {
        return allRequiredBoundariesRendered;
    },
    createValidationBoundaryTracking: function() {
        return createValidationBoundaryTracking;
    }
});
function createValidationBoundaryTracking(/** Pass if the render is expected to render the same IDs as a previous one. */ matchPrevious) {
    return {
        requiredIds: matchPrevious ? new Map(matchPrevious.requiredIds) : new Map(),
        renderedIds: new Set()
    };
}
function allRequiredBoundariesRendered(state) {
    for (const id of state.requiredIds.keys()){
        if (!state.renderedIds.has(id)) {
            return false;
        }
    }
    return true;
}
}),
"[project]/node_modules/next/dist/server/app-render/module-loading/instrument-module-getter.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Wraps a module getter from the generated loader tree code so that the
 * result of an async module (e.g. due to a top-level await) is tracked as a
 * pending import, which the cache warming phase of a prerender waits for.
 * Both bundlers emit this around every module getter in the loader tree.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "instrumentModuleGetter", {
    enumerable: true,
    get: function() {
        return instrumentModuleGetter;
    }
});
function instrumentModuleGetter(getter) {
    if ("TURBOPACK compile-time truthy", 1) {
        // The tracking is only consumed when prerendering with Cache Components,
        // which is not supported in the edge runtime (and the tracking relies on
        // Node.js APIs).
        return getter;
    } else //TURBOPACK unreachable
    ;
}
}),
"[project]/node_modules/next/dist/server/app-render/segment-config/ensure-static.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    EnsureStaticLevel: null,
    resolveEnsureStaticConfig: null,
    resolveEnsureStaticLevel: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    EnsureStaticLevel: function() {
        return EnsureStaticLevel;
    },
    resolveEnsureStaticConfig: function() {
        return resolveEnsureStaticConfig;
    },
    resolveEnsureStaticLevel: function() {
        return resolveEnsureStaticLevel;
    }
});
const _parseloadertree = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/parse-loader-tree.js [app-rsc] (ecmascript)");
const _appdirmodule = __turbopack_context__.r("[project]/node_modules/next/dist/server/lib/app-dir-module.js [app-rsc] (ecmascript)");
var EnsureStaticLevel = /*#__PURE__*/ function(EnsureStaticLevel) {
    /** The route follows standard Partial Prefetching semantics. */ EnsureStaticLevel[EnsureStaticLevel["None"] = 0] = "None";
    /** The route requires that app shells must be statically prerendered. */ EnsureStaticLevel[EnsureStaticLevel["Shell"] = 1] = "Shell";
    /** The route requires that app shells and prefetches must be statically prerendered. */ EnsureStaticLevel[EnsureStaticLevel["Prefetch"] = 2] = "Prefetch";
    /** The route requires that app shells, prefetches, and the whole page must be statically prerendered. */ EnsureStaticLevel[EnsureStaticLevel["Navigation"] = 3] = "Navigation";
    return EnsureStaticLevel;
}({});
function getEnsureStaticLevel(ensureStatic) {
    switch(ensureStatic){
        case 'auto':
        case false:
            {
                return 0;
            }
        case 'shell':
            {
                return 1;
            }
        case 'prefetch':
            {
                return 2;
            }
        case 'navigation':
            {
                return 3;
            }
    }
}
async function resolveEnsureStaticLevel(tree, partialPrefetching) {
    return getEnsureStaticLevel(await resolveEnsureStaticConfig(tree, partialPrefetching));
}
async function resolveEnsureStaticConfig(tree, partialPrefetching) {
    let { config, filePath } = await resolveEnsureStaticConfigImpl(tree);
    if (!partialPrefetching) {
        // If Partial Prefetching is not enabled for this route, we only support
        // a subset of `ensureStatic` values.
        // (We error in `getAppPageStaticInfo` if `ensureStatic` is used without enabling
        // Cache Components, so we don't have to assert that here)
        switch(config){
            case 'auto':
                {
                    // Default to the equivalent of Cache Components prefetching behavior.
                    config = 'prefetch';
                    break;
                }
            case false:
            case 'shell':
                {
                    // Not meaningful in Cache Components without Partial Prefetching
                    const originalConfig = config;
                    config = 'prefetch';
                    console.warn(`${formatEnsureStaticExport(originalConfig)} has no effect unless the route is using Partial Prefetching.` + `\n  (from: ${filePath})`);
                    break;
                }
            case 'prefetch':
                break;
            case 'navigation':
                break;
            default:
                config;
        }
    }
    if (config === false) {
        // `false` and "auto" are equivalent once resolved.
        return 'auto';
    } else {
        return config;
    }
}
async function resolveEnsureStaticConfigImpl(tree) {
    const { mod: layoutOrPageMod, filePath } = await (0, _appdirmodule.getLayoutOrPageModule)(tree);
    const config = getEnsureStaticConfigForModule(layoutOrPageMod);
    const parentResult = {
        config,
        filePath: filePath ?? null
    };
    // Walk the slots if any and validate that they don't have incompatible configs
    // with each other. If compatible, pick the most constrained value from the slots.
    let slotsResult = null;
    let slotResultKey = null;
    const { parallelRoutes } = (0, _parseloadertree.parseLoaderTree)(tree);
    for(const parallelRouteKey in parallelRoutes){
        const parallelRoute = parallelRoutes[parallelRouteKey];
        const childResult = await resolveEnsureStaticConfigImpl(parallelRoute);
        if (!slotsResult) {
            slotsResult = childResult;
            slotResultKey = parallelRouteKey;
        } else {
            // Check if the child is compatible with the current result for the slots.
            switch(compareEnsureStatic(childResult.config, slotsResult.config)){
                case 2:
                    {
                        // 'auto' is compatible with anything, but if the current result is 'auto' and the new one isn't,
                        // we want to use the more specific result.
                        if (slotsResult.config === 'auto' && childResult.config !== 'auto') {
                            slotsResult = childResult;
                            slotResultKey = parallelRouteKey;
                        }
                        break;
                    }
                case 4:
                case 1:
                case 3:
                    {
                        throw new Error(`Parallel slots cannot have incompatible \`ensureStatic\`.` + `\n  ${formatParallelSlot(slotResultKey)}: ` + `\n    ${formatEnsureStaticExport(slotsResult.config)}` + `\n    (from: ${slotsResult.filePath})` + `\n` + `\n  ${formatParallelSlot(parallelRouteKey)}: ` + `\n    ${formatEnsureStaticExport(childResult.config)}` + `\n    (from: ${childResult.filePath})` + `\n` + `\n Possible fixes:` + `\n - Remove one of the \`ensureStatic\` exports` + `\n - Change one of the  \`ensureStatic\` exports to match the other`);
                    }
            }
        }
    }
    // Child segments can override the config from the parent with a more constrained value,
    // but they cannot have a less constrained value.
    if (!slotsResult) {
        return parentResult;
    } else {
        const comparison = compareEnsureStatic(slotsResult.config, parentResult.config);
        switch(comparison){
            case 2:
                {
                    // 'auto' is compatible with anything, but if the parent result is 'auto' and the slots one isn't,
                    // we want to use the more constrained result.
                    if (parentResult.config === 'auto' && slotsResult.config !== 'auto') {
                        return slotsResult;
                    } else {
                        return parentResult;
                    }
                }
            case 3:
                {
                    return slotsResult;
                }
            case 1:
            case 4:
                {
                    throw new Error((comparison === 1 ? `A child segment cannot override a parent segment with a less-constrained \`ensureStatic\`.` : `A child segment cannot override a parent segment with an incompatible \`ensureStatic\`.`) + `\n  Parent has: ` + `\n    ${formatEnsureStaticExport(parentResult.config)}` + `\n    (from: ${parentResult.filePath})` + `\n  Child has: ` + `\n    ${formatEnsureStaticExport(slotsResult.config)}` + `\n    (from: ${slotsResult.filePath})` + `\n` + `\n Possible fixes:` + `\n - Remove one of the \`ensureStatic\` exports` + `\n - Change one of the  \`ensureStatic\` exports to match the other`);
                }
        }
    }
}
function formatParallelSlot(slot) {
    return slot === 'children' ? slot : `@${slot}`;
}
function formatEnsureStaticExport(config) {
    return `export const ensureStatic = ${JSON.stringify(config)}`;
}
var Comparison = /*#__PURE__*/ function(Comparison) {
    Comparison[Comparison["LessConstrained"] = 1] = "LessConstrained";
    Comparison[Comparison["Compatible"] = 2] = "Compatible";
    Comparison[Comparison["MoreConstrained"] = 3] = "MoreConstrained";
    Comparison[Comparison["Incompatible"] = 4] = "Incompatible";
    return Comparison;
}(Comparison || {});
const ENSURE_STATIC_ORDER = [
    'shell',
    'prefetch',
    'navigation'
];
function compareEnsureStatic(left, right) {
    // 'auto' is compatible with everything.
    if (left === 'auto' || right === 'auto') {
        return 2;
    }
    // `false` is compatible with false.
    if (left === false && right === false) {
        return 2;
    }
    // If only one of the values is `false` (we know it's not both), it's incompatible.
    if (left === false || right === false) {
        return 4;
    }
    const leftSort = ENSURE_STATIC_ORDER.indexOf(left);
    const rightSort = ENSURE_STATIC_ORDER.indexOf(right);
    return leftSort < rightSort ? 1 : leftSort === rightSort ? 2 : 3;
}
function getEnsureStaticConfigForModule(mod) {
    return (mod ? mod.ensureStatic : undefined) ?? 'auto';
}
}),
"[project]/node_modules/next/dist/server/app-render/staged-rendering.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RENDER_STAGE_ADVANCE_ORDER: null,
    RenderStage: null,
    StagedRenderingController: null,
    SyncIOMode: null,
    getNextStage: null,
    isAdvanceableRenderStage: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RENDER_STAGE_ADVANCE_ORDER: function() {
        return RENDER_STAGE_ADVANCE_ORDER;
    },
    RenderStage: function() {
        return RenderStage;
    },
    StagedRenderingController: function() {
        return StagedRenderingController;
    },
    SyncIOMode: function() {
        return SyncIOMode;
    },
    getNextStage: function() {
        return getNextStage;
    },
    isAdvanceableRenderStage: function() {
        return isAdvanceableRenderStage;
    }
});
const _invarianterror = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
const _promisewithresolvers = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/promise-with-resolvers.js [app-rsc] (ecmascript)");
var RenderStage = /*#__PURE__*/ function(RenderStage) {
    RenderStage[RenderStage["Before"] = 1] = "Before";
    //
    RenderStage[RenderStage["ShellStatic"] = 10] = "ShellStatic";
    /** Discrimination-only stage: `prefetch()` in validation renders (static) */ RenderStage[RenderStage["PrefetchStatic_prefetchApi"] = 11] = "PrefetchStatic_prefetchApi";
    RenderStage[RenderStage["PrefetchStatic"] = 12] = "PrefetchStatic";
    RenderStage[RenderStage["NavigationStatic"] = 13] = "NavigationStatic";
    RenderStage[RenderStage["Static"] = 14] = "Static";
    //
    RenderStage[RenderStage["ShellRuntime"] = 20] = "ShellRuntime";
    /** Discrimination-only stage: `prefetch()` in validation renders (runtime) */ RenderStage[RenderStage["PrefetchRuntime_prefetchApi"] = 21] = "PrefetchRuntime_prefetchApi";
    RenderStage[RenderStage["PrefetchRuntime"] = 22] = "PrefetchRuntime";
    RenderStage[RenderStage["NavigationRuntime"] = 23] = "NavigationRuntime";
    //
    RenderStage[RenderStage["Dynamic"] = 30] = "Dynamic";
    RenderStage[RenderStage["Abandoned"] = 40] = "Abandoned";
    return RenderStage;
}({});
const RENDER_STAGE_ADVANCE_ORDER = [
    10,
    11,
    12,
    13,
    14,
    20,
    21,
    22,
    23,
    30
];
function getNextStage(stage) {
    return RENDER_STAGE_ADVANCE_ORDER[RENDER_STAGE_ADVANCE_ORDER.indexOf(stage) + 1];
}
function isAdvanceableRenderStage(stage) {
    return 1 < stage && stage <= 30;
}
var SyncIOMode = /*#__PURE__*/ function(SyncIOMode) {
    /** Sync IO does not error in any stage. */ SyncIOMode[SyncIOMode["Untracked"] = 1] = "Untracked";
    /** Before `partialPrefetching`: Sync IO errors in static stages, and is allowed otherwise. */ SyncIOMode[SyncIOMode["AllowedInRuntimeOrDynamic"] = 2] = "AllowedInRuntimeOrDynamic";
    /** After `partialPrefetching`: Sync IO errors in all stages other than dynamic. */ SyncIOMode[SyncIOMode["AllowedInDynamic"] = 3] = "AllowedInDynamic";
    return SyncIOMode;
}({});
class StagedRenderingController {
    constructor({ abortSignal, abandonController, syncIO, finalStage }){
        this.currentStage = 1;
        this.syncInterruptReason = null;
        this.triggers = createAdvanceableStageTriggers();
        this.abortSignal = abortSignal;
        this.abandonController = abandonController;
        this.syncIOMode = syncIO;
        this.finalStage = finalStage;
        if (abortSignal) {
            abortSignal.addEventListener('abort', ()=>{
                // Reject all stage promises that haven't already been resolved.
                // `cancelStageTrigger` is a noop if the trigger already resolved.
                const { reason } = abortSignal;
                for (const trigger of Object.values(this.triggers)){
                    cancelStageTrigger(trigger, reason);
                }
            }, {
                once: true
            });
        }
        if (abandonController) {
            abandonController.signal.addEventListener('abort', ()=>{
                this.abandonRender();
            }, {
                once: true
            });
        }
    }
    /**
   * Schedules a callback that will execute synchronously when the controller is advanced
   * to `stage` or past it, before any promises for that stage are resolved.
   * If the controller is already past `stage`, the callback is executed immediately.
   * */ onStage(stage, callback) {
        addSyncTriggerListener(this.triggers[stage], callback);
    }
    shouldTrackSyncInterrupt() {
        const { syncIOMode, currentStage } = this;
        switch(syncIOMode){
            case 1:
                {
                    return false;
                }
            case 2:
                {
                    // Legacy: track Sync IO only in static stages.
                    // Do not track it before the render, or in runtime/dynamic stages.
                    return currentStage > 1 && currentStage <= 14;
                }
            case 3:
                {
                    // Track sync IO in all cacheable stages.
                    // This means all stages except:
                    // - before the render
                    // - in the dynamic stage
                    return currentStage > 1 && currentStage < 30;
                }
        }
    }
    /** Note: only call this if `shouldTrackSyncInterrupt()` returned true */ syncInterruptCurrentStageWithReason(reason) {
        const { currentStage } = this;
        if (currentStage === 1 || currentStage === 30 || currentStage === 40) {
            // Not interruptible. Defensive noop.
            return;
        }
        // If Sync IO occurs during an abandonable render, we trigger the abandon.
        // The abandon listener will call abandonRender which advances through
        // stages to let caches fill before marking as Abandoned.
        if (this.abandonController) {
            this.abandonController.abort();
            return;
        }
        if (this.abortSignal) {
            // If this is an abortable render, we capture the interruption reason and stop advancing.
            // We don't release any more promises.
            // The caller is expected to abort the signal.
            this.syncInterruptReason = reason;
            this.currentStage = 40;
            return;
        }
        // If we're in a non-abandonable & non-abortable render,
        // we need to advance to the Dynamic stage and capture the interruption reason.
        // (in dev, this will be the restarted render)
        this.syncInterruptReason = reason;
        this.advanceStage(30);
    }
    getSyncInterruptReason() {
        return this.syncInterruptReason;
    }
    getStageEndTime(stage) {
        return this.triggers[getNextStage(stage)].triggeredAt ?? Infinity;
    }
    abandonRender() {
        // In staged rendering, only the initial render is abandonable.
        // We can abandon the initial render if
        //   1. We notice a cache miss, and need to wait for caches to fill
        //   2. A sync IO error occurs, and the render should be interrupted
        //      (this might be a lazy intitialization of a module,
        //       so we still want to restart in this case and see if it still occurs)
        // In either case, we'll be doing another render after this one,
        // so we only want to unblock the next stage, not Dynamic, because
        // unblocking the dynamic stage would likely lead to wasted (uncached) IO.
        const { currentStage } = this;
        if (currentStage === 1) {
            throw new _invarianterror.InvariantError("A render that hasn't started yet cannot be abandoned");
        }
        if (currentStage === 30 || currentStage === 40) {
            // We shouldn't ever trigger an abandon in these. Defensive noop.
            return;
        }
        // Resolve all stages after the current one, up to runtime (excluding dynamic)
        const nextStageIx = RENDER_STAGE_ADVANCE_ORDER.indexOf(currentStage) + 1;
        const dynamicStageIx = RENDER_STAGE_ADVANCE_ORDER.indexOf(30);
        for(let i = nextStageIx; i < dynamicStageIx; i++){
            this.resolveStage(RENDER_STAGE_ADVANCE_ORDER[i]);
        }
        this.currentStage = 40;
    }
    advanceStage(targetStage) {
        if (this.finalStage !== null && targetStage > this.finalStage) {
            throw new _invarianterror.InvariantError(`Attempted to advance to stage ${RenderStage[targetStage]} but the render is limited to ${RenderStage[this.finalStage]}`);
        }
        const { currentStage } = this;
        if (currentStage === 30 || currentStage === 40) {
            // Terminal stages, nowhere left to advance.
            return;
        }
        // If we're already at the target stage or beyond, do nothing.
        if (targetStage <= currentStage) {
            return;
        }
        this.currentStage = targetStage;
        // Resolve all stages between the current stage and the target.
        const nextStageIx = currentStage === 1 ? 0 : RENDER_STAGE_ADVANCE_ORDER.indexOf(currentStage) + 1;
        const targetStageIx = RENDER_STAGE_ADVANCE_ORDER.indexOf(targetStage);
        for(let i = nextStageIx; i <= targetStageIx; i++){
            this.resolveStage(RENDER_STAGE_ADVANCE_ORDER[i]);
        }
    }
    resolveStage(stage) {
        fireStageTrigger(this.triggers[stage]);
    }
    getStagePromise(stage) {
        return this.triggers[stage].promise;
    }
    waitForStage(stage) {
        return this.getStagePromise(stage);
    }
    delayUntilStage(stage, displayName, resolvedValue) {
        const stagePromise = this.getStagePromise(stage);
        const promise = ("TURBOPACK compile-time truthy", 1) ? makeDevtoolsIOPromiseFromIOTrigger(stagePromise, displayName, resolvedValue) : "TURBOPACK unreachable";
        // Analogously to `makeDynamicHangingPromise`, we might reject this promise if the signal is invoked.
        // (e.g. in the case where we don't want want the render to proceed to the dynamic stage and abort it).
        // We shouldn't consider this an unhandled rejection, so we attach a noop catch handler here to suppress this warning.
        if (this.abortSignal) {
            promise.catch(ignoreReject);
        }
        return promise;
    }
}
function createAdvanceableStageTriggers() {
    const triggers = {};
    for (const stage of RENDER_STAGE_ADVANCE_ORDER){
        triggers[stage] = createStageTrigger();
    }
    return triggers;
}
function ignoreReject() {}
// TODO(restart-on-cache-miss): the layering of `delayUntilStage`,
// `makeDevtoolsIOPromiseFromIOTrigger` and and `makeDevtoolsIOAwarePromise`
// is confusing, we should clean it up.
function makeDevtoolsIOPromiseFromIOTrigger(ioTrigger, displayName, resolvedValue) {
    // If we create a `new Promise` and give it a displayName
    // (with no userspace code above us in the stack)
    // React Devtools will use it as the IO cause when determining "suspended by".
    // In particular, it should shadow any inner IO that resolved/rejected the promise
    // (in case of staged rendering, this will be the `setTimeout` that triggers the relevant stage)
    const promise = new Promise((resolve, reject)=>{
        ioTrigger.then(resolve.bind(null, resolvedValue), reject);
    });
    if (displayName !== undefined) {
        // @ts-expect-error
        promise.displayName = displayName;
    }
    return promise;
}
function addSyncTriggerListener(trigger, listener) {
    if (trigger.state === 'pending') {
        trigger._listeners.push(listener);
    } else {
        listener();
    }
}
function createStageTrigger() {
    const { promise, resolve, reject } = (0, _promisewithresolvers.createPromiseWithResolvers)();
    return {
        state: 'pending',
        triggeredAt: null,
        promise,
        _listeners: [],
        _resolvePromise: resolve,
        _rejectPromise: reject
    };
}
function fireStageTrigger(trigger) {
    if (trigger.state !== 'pending') {
        return;
    }
    trigger.state = 'triggered';
    trigger.triggeredAt = performance.now() + performance.timeOrigin;
    try {
        const { _listeners: listeners } = trigger;
        for(let i = 0; i < listeners.length; i++){
            listeners[i]();
        }
        listeners.length = 0;
    } finally{
        trigger._resolvePromise();
    }
}
function cancelStageTrigger(trigger, reason) {
    if (trigger.state !== 'pending') {
        return;
    }
    trigger.state = 'cancelled';
    // we didn't trigger, so don't save `triggeredAt`.
    // We're not gonna fire the listeners, we may as well free them.
    trigger._listeners.length = 0;
    // Suppress unhandled rejection warnings for promises that no one is awaiting.
    trigger.promise.catch(ignoreReject);
    trigger._rejectPromise(reason);
}
}),
"[project]/node_modules/next/dist/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ClientHookDynamicError: null,
    RENDER_STAGES_BY_DATA_KIND: null,
    applyOwnerStack: null,
    createPrerenderDataTracking: null,
    finishPrerenderDataTracking: null,
    isClientHookDynamicError: null,
    isHangingPromiseRejectionError: null,
    makeClientHookHangingPromise: null,
    makeDevtoolsIOAwarePromise: null,
    makeDynamicHangingPromise: null,
    makeFallbackParamsHangingPromise: null,
    makePrefetchHangingPromise: null,
    makePromiseFromTrigger: null,
    makeSessionDataHangingPromise: null,
    makeURLDataHangingPromise: null,
    makeUnknownRuntimeDataHangingPromise: null,
    makeUntrackedHangingPromise: null,
    trackFallbackParamsAccessed: null,
    trackIncompatibleShellContent: null,
    trackPromiseUsed: null,
    trackURLDataAccessed: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ClientHookDynamicError: function() {
        return ClientHookDynamicError;
    },
    RENDER_STAGES_BY_DATA_KIND: function() {
        return RENDER_STAGES_BY_DATA_KIND;
    },
    applyOwnerStack: function() {
        return applyOwnerStack;
    },
    createPrerenderDataTracking: function() {
        return createPrerenderDataTracking;
    },
    finishPrerenderDataTracking: function() {
        return finishPrerenderDataTracking;
    },
    isClientHookDynamicError: function() {
        return isClientHookDynamicError;
    },
    isHangingPromiseRejectionError: function() {
        return isHangingPromiseRejectionError;
    },
    makeClientHookHangingPromise: function() {
        return makeClientHookHangingPromise;
    },
    makeDevtoolsIOAwarePromise: function() {
        return makeDevtoolsIOAwarePromise;
    },
    makeDynamicHangingPromise: function() {
        return makeDynamicHangingPromise;
    },
    makeFallbackParamsHangingPromise: function() {
        return makeFallbackParamsHangingPromise;
    },
    makePrefetchHangingPromise: function() {
        return makePrefetchHangingPromise;
    },
    makePromiseFromTrigger: function() {
        return makePromiseFromTrigger;
    },
    makeSessionDataHangingPromise: function() {
        return makeSessionDataHangingPromise;
    },
    makeURLDataHangingPromise: function() {
        return makeURLDataHangingPromise;
    },
    makeUnknownRuntimeDataHangingPromise: function() {
        return makeUnknownRuntimeDataHangingPromise;
    },
    makeUntrackedHangingPromise: function() {
        return makeUntrackedHangingPromise;
    },
    trackFallbackParamsAccessed: function() {
        return trackFallbackParamsAccessed;
    },
    trackIncompatibleShellContent: function() {
        return trackIncompatibleShellContent;
    },
    trackPromiseUsed: function() {
        return trackPromiseUsed;
    },
    trackURLDataAccessed: function() {
        return trackURLDataAccessed;
    }
});
const _invarianterror = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
const _promisewithresolvers = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/promise-with-resolvers.js [app-rsc] (ecmascript)");
const _ensurestatic = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/segment-config/ensure-static.js [app-rsc] (ecmascript)");
const _stagedrendering = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/staged-rendering.js [app-rsc] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _runtimereactsexternal = __turbopack_context__.r("[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)");
function isHangingPromiseRejectionError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === HANGING_PROMISE_REJECTION;
}
const HANGING_PROMISE_REJECTION = 'HANGING_PROMISE_REJECTION';
class HangingPromiseRejectionError extends Error {
    constructor(route, expression){
        super(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${route}".`), this.route = route, this.expression = expression, this.digest = HANGING_PROMISE_REJECTION;
    }
}
const CLIENT_HOOK_DYNAMIC = 'CLIENT_HOOK_DYNAMIC';
class ClientHookDynamicError extends Error {
    constructor(route, expression){
        super(`Route "${route}": Next.js encountered URL data \`${expression}\` in a Client Component outside of \`<Suspense>\`.\n\n` + `This blocks prerendering because the value is only available at runtime.\n\n` + `Ways to fix this:\n` + `  - [stream] Wrap the component in \`<Suspense fallback={...}>\` so the hook value streams in after prerendering\n` + `  - [block] Set \`export const instant = false\` to allow a blocking route\n\n` + `Learn more: https://nextjs.org/docs/messages/blocking-prerender-client-hook`), this.digest = CLIENT_HOOK_DYNAMIC;
    }
}
function isClientHookDynamicError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === CLIENT_HOOK_DYNAMIC;
}
const abortListenersBySignal = new WeakMap();
function makeDynamicHangingPromise(signal, route, expression) {
    return makeHangingPromiseWithError(signal, new HangingPromiseRejectionError(route, expression));
}
function makeUntrackedHangingPromise(signal, route, expression) {
    return makeHangingPromiseWithError(signal, new HangingPromiseRejectionError(route, expression));
}
function makeSessionDataHangingPromise(signal, route, expression, workUnitStore) {
    const promise = makeHangingPromiseWithError(signal, new HangingPromiseRejectionError(route, expression));
    return trackPromiseUsed(promise, trackSessionDataAccessed.bind(null, workUnitStore, expression));
}
function makeURLDataHangingPromise(signal, route, expression, workUnitStore) {
    const promise = makeHangingPromiseWithError(signal, new HangingPromiseRejectionError(route, expression));
    if (workUnitStore === null) {
        return promise;
    }
    return trackPromiseUsed(promise, trackURLDataAccessed.bind(null, workUnitStore, expression));
}
function makeUnknownRuntimeDataHangingPromise(signal, route, expression, workUnitStore) {
    // We don't know if this is session or URL data, i.e. if it should affect the shell
    // or only the prefetch. Track it conservatively as affecting both.
    return makeSessionDataHangingPromise(signal, route, expression, workUnitStore);
}
function makePrefetchHangingPromise(signal, route, expression) {
    return makeUntrackedHangingPromise(signal, route, expression);
}
function makeFallbackParamsHangingPromise(signal, route, expression, workUnitStore) {
    const promise = makeHangingPromiseWithError(signal, new HangingPromiseRejectionError(route, expression));
    if (workUnitStore === null) {
        return promise;
    }
    return trackPromiseUsed(promise, trackFallbackParamsAccessed.bind(null, workUnitStore, expression));
}
function createPrerenderDataTracking() {
    return {
        runtimeDataAccessed: (0, _promisewithresolvers.createPromiseWithResolvers)(),
        shouldAttemptStaticShell: true,
        shouldAttemptStaticPrefetch: true
    };
}
function finishPrerenderDataTracking(prerenderDataTracking) {
    // If a runtime data access already resolved this promise, this is a no-op.
    prerenderDataTracking.runtimeDataAccessed.resolve(false);
}
/**
 * Records on a static prerender store that the render accessed a data source
 * which would have resolved in a runtime shell (or runtime prefetch).
 * No-op for all other store types.
 *
 * Prefer `makeRuntimeHangingPromise`. Use this function only when implementing
 * similar tracking and that one is not enough.
 */ function trackSessionDataAccessed(workUnitStore, expression) {
    trackRuntimeDataAccessed(workUnitStore, 1, expression);
}
function trackURLDataAccessed(workUnitStore, expression) {
    trackRuntimeDataAccessed(workUnitStore, 2, expression);
}
function trackFallbackParamsAccessed(workUnitStore, expression) {
    trackRuntimeDataAccessed(workUnitStore, 3, expression);
}
function trackRuntimeDataAccessed(workUnitStore, dataKind, expression) {
    switch(workUnitStore.type){
        case 'prerender':
            {
                const { prerenderDataTracking, stagedRendering } = workUnitStore;
                if (!prerenderDataTracking || !stagedRendering) {
                    return;
                }
                const { currentStage } = stagedRendering;
                if (currentStage === _stagedrendering.RenderStage.Before) {
                    console.error(new _invarianterror.InvariantError('Unexpected trackRuntimeDataAccessed in the Before stage.'));
                    return;
                }
                if (currentStage >= _stagedrendering.RenderStage.NavigationStatic) {
                    // Ignore any accesses that happen after `navigation()` resolves.
                    // The purpose of this tracking is to judge whether a runtime prefetch
                    // would give us a more complete result than a static one.
                    // But `navigation()` wouldn't have resolved in a runtime prefetch,
                    // so e.g. `await navigation(); await cookies()` wouldn't have more content
                    // in those, and we shouldn't count it.
                    return;
                }
                const ensureStaticLevel = workUnitStore.ensureStaticLevel ?? _ensurestatic.EnsureStaticLevel.None;
                // NOTE: In general, we keep hints in sync with `needsRuntimeRequest`, but they
                // don't have to always match. The client re-uses hints for the entire route,
                // while `needsRuntimeRequest` can vary across individual prerendered param values
                // (e.g. if cookies are accessed depending on a param value).
                // Hints can also become outdated if a route only starts using runtime data
                // after a revalidation, so we have to expect this and be resilient to it.
                // Also see the upgradeable fallback params case below, which deliberately
                // puts them out of sync.
                switch(dataKind){
                    case 1:
                        {
                            // Potentially deopt both the shell and the prefetch,
                            // because if the shell accessed runtime data, so does the prefetch.
                            // However, if we're already past the shell stage, the shell is not affected.
                            // (which makes e.g. `await prefetch(); await cookies()` only affect the prefetch)
                            let firstAffectedStage = null;
                            if (currentStage <= _stagedrendering.RenderStage.ShellStatic && // Only track if we're not forcing the shell to be static.
                            ensureStaticLevel < _ensurestatic.EnsureStaticLevel.Shell) {
                                prerenderDataTracking.shouldAttemptStaticShell = false;
                                firstAffectedStage ??= _stagedrendering.RenderStage.ShellStatic;
                                logRuntimeDeopt == null ? void 0 : logRuntimeDeopt(expression, 'shell');
                            }
                            if (currentStage <= _stagedrendering.RenderStage.PrefetchStatic && // Only track if we're not forcing the prefetch to be static.
                            ensureStaticLevel < _ensurestatic.EnsureStaticLevel.Prefetch) {
                                prerenderDataTracking.shouldAttemptStaticPrefetch = false;
                                // NOTE: if the shell is affected, don't override it.
                                firstAffectedStage ??= _stagedrendering.RenderStage.PrefetchStatic;
                                logRuntimeDeopt == null ? void 0 : logRuntimeDeopt(expression, 'prefetch');
                            }
                            if (firstAffectedStage !== null) {
                                markRuntimeDataAccessWhenStageReached(prerenderDataTracking, stagedRendering, firstAffectedStage);
                            }
                            break;
                        }
                    case 3:
                        {
                            if (workUnitStore.isFallbackUpgradeable) {
                                // An fallback-param access is transient when the route is
                                // fallback-upgradeable (i.e. ISR later produces the concrete prerender a
                                // static prefetch would hit) so it does not indicate the need for a runtime
                                // request and thus does not affect the static hints.
                                //
                                // If runtime prefetches are not disallowed by `ensureStatic`, then we still
                                // set `runtimeDataAccessed` (while keeping the hints static). This means that
                                // if the concrete prerender isn't ready yet and we served the fallback, then
                                // the client knows it can use a *runtime* prefetch for speculative links --
                                // a runtime prefetch can provide the same content (or more) as the concrete
                                // prerender would.
                                if (ensureStaticLevel < _ensurestatic.EnsureStaticLevel.Prefetch) {
                                    markRuntimeDataAccessWhenStageReached(prerenderDataTracking, stagedRendering, _stagedrendering.RenderStage.PrefetchStatic);
                                    logRuntimeUpgradeableFallback == null ? void 0 : logRuntimeUpgradeableFallback();
                                }
                                break;
                            }
                        // not an upgradeable fallback param access, so we treat it as URL data.
                        // intentional fallthrough
                        }
                    case 2:
                        {
                            // Only deopt the prefetch, not the shell, which cannot access URL data anyway.
                            if (currentStage <= _stagedrendering.RenderStage.PrefetchStatic && ensureStaticLevel < _ensurestatic.EnsureStaticLevel.Prefetch) {
                                prerenderDataTracking.shouldAttemptStaticPrefetch = false;
                                logRuntimeDeopt == null ? void 0 : logRuntimeDeopt(expression, 'prefetch');
                                markRuntimeDataAccessWhenStageReached(prerenderDataTracking, stagedRendering, _stagedrendering.RenderStage.PrefetchStatic);
                            }
                            break;
                        }
                }
                break;
            }
        case 'prerender-client':
        case 'prerender-legacy':
        case 'prerender-runtime':
        case 'validation-client':
        case 'request':
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
        case 'build-time-generator':
            break;
        default:
            workUnitStore;
    }
}
/**
 * Tracks a runtime data access on the `runtimeDataAccessed` promise,
 * but with a delay until `targetStage`.
 *
 * When we encounter a URL data access like `await params`, we need to mark the
 * *prefetch* as needing runtime data, but the *shell* should remain unaffected
 * (because it cannot access params anyway).
 *
 * However, the shell and the prefetch share one `runtimeDataAccessed` promise,
 * and it needs to be accurately rewindable by the client
 * In other words, we need to make sure that it reads as `false` when rewound
 * to a shell, but as `true` in the final response (the prefetch).
 *
 * This means that if the `await params` is encountered during the shell stage, we
 * cannot resolve `runtimeDataAccessed` immediately.
 * Instead, we delay the resolution until the PrefetchStatic stage, so the promise
 * will remain unresolved when rewound to the shell stage (which reads as `false`).
 */ function markRuntimeDataAccessWhenStageReached(prerenderDataTracking, stageController, targetStage) {
    const { runtimeDataAccessed } = prerenderDataTracking;
    // NOTE: If we're already in or past the target stage, we can avoid allocating a closure,
    // because `onStage` would've executed the callback immediately anyway.
    if (stageController.currentStage >= targetStage) {
        runtimeDataAccessed.resolve(true);
    } else {
        stageController.onStage(targetStage, runtimeDataAccessed.resolve.bind(null, true));
    }
}
const logRuntimeDeopt = process.env.NEXT_PRIVATE_DEBUG_RUNTIME_DATA ? (expression, kind)=>{
    const { route } = _workasyncstorageexternal.workAsyncStorage.getStore();
    console.log(`Route '${route}': deopting to a runtime ${kind} because it used ${expression}`);
} : undefined;
const logRuntimeUpgradeableFallback = process.env.NEXT_PRIVATE_DEBUG_RUNTIME_DATA ? ()=>{
    const { route } = _workasyncstorageexternal.workAsyncStorage.getStore();
    console.log(`Route '${route}': marking upgradeable fallback as runtime prefetchable`);
} : undefined;
function trackIncompatibleShellContent(workUnitStore, reason) {
    const { stagedRendering } = workUnitStore;
    if (!stagedRendering) {
        return;
    }
    // TODO(app-shells): optimize this to only consider stages that are relevant for validation.
    // We should only track incompatible content when it can affect them.
    // For now, we simply exclude everything that happens in the dynamic stage.
    // (Note that we also need to account for cache misses that move things to a
    // different stage -- those should also preemptively set `hasIncompatibleShellContent`
    // because there's a chance that a render with warm caches would set it)
    const { currentStage } = stagedRendering;
    if (currentStage === _stagedrendering.RenderStage.Dynamic || currentStage === _stagedrendering.RenderStage.Abandoned) {
        return;
    }
    if (process.env.NEXT_PRIVATE_DEBUG_VALIDATION) {
        const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
        console.log(`Route ${workStore.route}: Incompatible shell content: ${reason}`);
    }
    workUnitStore.hasIncompatibleShellContent = true;
}
function makeClientHookHangingPromise(signal, error) {
    return makeHangingPromiseWithError(signal, error);
}
function makeHangingPromiseWithError(signal, error) {
    if (signal.aborted) {
        return Promise.reject(error);
    } else {
        const hangingPromise = new Promise((_, reject)=>{
            const boundRejection = reject.bind(null, error);
            let currentListeners = abortListenersBySignal.get(signal);
            if (currentListeners) {
                currentListeners.push(boundRejection);
            } else {
                const listeners = [
                    boundRejection
                ];
                abortListenersBySignal.set(signal, listeners);
                signal.addEventListener('abort', ()=>{
                    for(let i = 0; i < listeners.length; i++){
                        listeners[i]();
                    }
                }, {
                    once: true
                });
            }
        });
        // We are fine if no one actually awaits this promise. We shouldn't consider this an unhandled rejection so
        // we attach a noop catch handler here to suppress this warning. If you actually await somewhere or construct
        // your own promise out of it you'll need to ensure you handle the error when it rejects.
        hangingPromise.catch(ignoreReject);
        return hangingPromise;
    }
}
function ignoreReject() {}
function makePromiseFromTrigger(trigger, value) {
    const promise = trigger.then(()=>value);
    promise.catch(ignoreReject);
    return promise;
}
function makeDevtoolsIOAwarePromise(underlying, requestStore, stage) {
    if (requestStore.stagedRendering) {
        // We resolve each stage in a timeout, so React DevTools will pick this up as IO.
        return requestStore.stagedRendering.delayUntilStage(stage, undefined, underlying);
    }
    // in React DevTools if we resolve in a setTimeout we will observe
    // the promise resolution as something that can suspend a boundary or root.
    return new Promise((resolve)=>{
        // Must use setTimeout to be considered IO React DevTools. setImmediate will not work.
        setTimeout(()=>{
            resolve(underlying);
        }, 0);
    });
}
function trackPromiseUsed(promise, onUse) {
    // We can instrument `.then()/.catch()/.finally()` in one go by using a Promise subclass
    // that implements a custom `.then()`, because `catch` and `finally` delegate to it.
    //
    // Alternative implementation ideas that were tried and rejected:
    //
    // 1. Patching the methods directly via `promise.then = (..args) => { ... }`:
    //   doesn't work, because Node does not call the monkeypatched methods for native `await`:
    //   > Native Promise [...]: The promise is directly used and awaited natively, without calling `then()`.
    //   > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#description
    //
    // 2. Wrapping in a proxy that returns a custom `then/catch/finally`:
    //   breaks async stacks in React's IO tracking (stack becomes `Promise.then`)
    return TrackedPromise.from(promise, onUse);
}
class TrackedPromise extends Promise {
    #onUse;
    // We don't need derived promises to also be a TrackedPromise.
    // We only care about the first level of `.then()`.
    static get [Symbol.species]() {
        return Promise;
    }
    static from(promise, onUse) {
        // Whenever the promise we're tracking resolves/rejects, we should follow.
        const tracked = new TrackedPromise(promise.then.bind(promise));
        tracked.#onUse = onUse;
        // Hanging promises catch rejections when created. Tracked promises are generally derived
        // from promises that may hang & reject, so we need to do the same.
        // However, we have to bypass the tracking we do in `TrackedPromise.then`.
        // (we're using `then` directly, because `catch` ends up delegating `TrackedPromise.then`)
        Promise.prototype.then.call(tracked, undefined, ignoreReject);
        return tracked;
    }
    then(onFulfilled, onRejected) {
        const onUse = this.#onUse;
        if (onUse) {
            try {
                onUse();
            } catch (err) {
                // We don't want to break the method even if our tracking errored.
                console.error(err);
            }
        }
        return Promise.prototype.then.call(this, onFulfilled, onRejected);
    }
    constructor(...args){
        super(...args), this.#onUse = null;
    }
}
const RENDER_STAGES_BY_DATA_KIND = {
    sessionData: _stagedrendering.RenderStage.ShellRuntime,
    /**
   * Statically-prerenderable URL data, like static `params`.
   * It may need to be pushed to a runtime stage in a runtime prerender,
   * but it's semantically distinct from `runtimeUrlData` like `searchParams`,
   * which is always excluded from static prerenders.
   * */ staticUrlData: {
        /**
     * From that app's point of view, `prefetch()` is semantically the same as
     * `staticUrlData`, because it does not resolve in a shell but resolves in
     * a prefetch (even a static one).
     * We handle it separately to provide a specialized error in validation renders.
     */ prefetchApi: {
            static: _stagedrendering.RenderStage.PrefetchStatic_prefetchApi,
            runtime: _stagedrendering.RenderStage.PrefetchRuntime_prefetchApi
        },
        static: _stagedrendering.RenderStage.PrefetchStatic,
        runtime: _stagedrendering.RenderStage.PrefetchRuntime
    },
    /**
   * URL data that is never statically-prerenderable, like static `searchParams`.
   * */ runtimeUrlData: _stagedrendering.RenderStage.PrefetchRuntime
};
function applyOwnerStack(error) {
    if ("TURBOPACK compile-time truthy", 1) {
        var _getClientReact_captureOwnerStack, _getClientReact, _getServerReact_captureOwnerStack, _getServerReact;
        let ownerStack;
        const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
        // captureOwnerStack() returns the owner stack for the current React
        // rendering context. Inside a cache scope this only includes the inner
        // component tree. The outer owner stack (captured before entering the
        // cache boundary in use-cache-wrapper.ts) is stored on the cache store.
        // We concatenate both to get the full component tree.
        const innerOwnerStack = ((_getClientReact = (0, _runtimereactsexternal.getClientReact)()) == null ? void 0 : (_getClientReact_captureOwnerStack = _getClientReact.captureOwnerStack) == null ? void 0 : _getClientReact_captureOwnerStack.call(_getClientReact)) ?? ((_getServerReact = (0, _runtimereactsexternal.getServerReact)()) == null ? void 0 : (_getServerReact_captureOwnerStack = _getServerReact.captureOwnerStack) == null ? void 0 : _getServerReact_captureOwnerStack.call(_getServerReact));
        switch(workUnitStore == null ? void 0 : workUnitStore.type){
            case 'cache':
            case 'private-cache':
                ownerStack = (innerOwnerStack || '') + (workUnitStore.outerOwnerStack || '') || undefined;
                break;
            case 'unstable-cache':
            case 'request':
            case 'prerender':
            case 'prerender-legacy':
            case 'prerender-runtime':
            case 'prerender-client':
            case 'validation-client':
            case 'build-time-generator':
            case undefined:
                ownerStack = innerOwnerStack;
                break;
            default:
                workUnitStore;
        }
        if (ownerStack) {
            let stack = ownerStack;
            if (error.stack) {
                const frames = [];
                for (const frame of error.stack.split('\n').slice(1)){
                    if (frame.includes('react_stack_bottom_frame')) {
                        break;
                    }
                    frames.push(frame);
                }
                stack = '\n' + frames.join('\n') + stack;
            }
            error.stack = error.name + ': ' + error.message + stack;
        }
    }
    return error;
}
}),
"[project]/node_modules/next/dist/server/lib/app-dir-module.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getComponentTypeModule: null,
    getLayoutOrPageModule: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getComponentTypeModule: function() {
        return getComponentTypeModule;
    },
    getLayoutOrPageModule: function() {
        return getLayoutOrPageModule;
    }
});
const _segment = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/segment.js [app-rsc] (ecmascript)");
async function getLayoutOrPageModule(loaderTree) {
    const { layout, page, defaultPage } = loaderTree[2];
    const isLayout = typeof layout !== 'undefined';
    const isPage = typeof page !== 'undefined';
    const isDefaultPage = typeof defaultPage !== 'undefined' && loaderTree[0] === _segment.DEFAULT_SEGMENT_KEY;
    let mod = undefined;
    let modType = undefined;
    let filePath = undefined;
    if (isLayout) {
        mod = await layout[0]();
        modType = 'layout';
        filePath = layout[1];
    } else if (isPage) {
        mod = await page[0]();
        modType = 'page';
        filePath = page[1];
    } else if (isDefaultPage) {
        mod = await defaultPage[0]();
        modType = 'page';
        filePath = defaultPage[1];
    }
    return {
        mod,
        modType,
        filePath
    };
}
async function getComponentTypeModule(loaderTree, moduleType) {
    const { [moduleType]: module1 } = loaderTree[2];
    if (typeof module1 !== 'undefined') {
        return await module1[0]();
    }
    return undefined;
}
}),
"[project]/node_modules/next/dist/shared/lib/instant-messages.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createLinkPrefetchPartialError: null,
    createUnrenderedSegmentError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createLinkPrefetchPartialError: function() {
        return createLinkPrefetchPartialError;
    },
    createUnrenderedSegmentError: function() {
        return createUnrenderedSegmentError;
    }
});
function createUnrenderedSegmentError(route, missingFiles) {
    let message = `Route "${route}": Could not validate that a segment in your UI has instant navigation.`;
    if (missingFiles.length > 0) {
        const label = missingFiles.length === 1 ? 'Dropped segment' : 'Dropped segments';
        message += `\n\nThis segment was dropped from rendering. Issues that would prevent instant navigation will go undetected.` + `\n\n${label}:\n${missingFiles.map((p)=>`  ${p}`).join('\n')}` + `\n\nWays to fix this:` + `\n  - [render] Render the dropped segment` + `\n  - [ignore] Set \`export const instant = false\` to opt the dropped segment out of instant-navigation validation` + `\n\nLearn more: https://nextjs.org/docs/messages/instant-unrendered-segment`;
    }
    return new Error(message);
}
function createLinkPrefetchPartialError(pathname) {
    return new Error(`Next.js encountered dynamic data during prefetching for "${pathname}".\n\n` + `This will lead to slower, more expensive prefetches.\n\n` + `Ways to fix this:\n` + `  - [upgrade] Opt into Partial Prefetching by exporting \`const prefetch = 'partial'\` from the page or layout, or by setting \`partialPrefetching: true\` in next.config to opt the whole app in\n` + `  - [disable] Remove \`prefetch={true}\` from the <Link> to use the default prefetch\n` + `  - [ignore] Set \`export const instant = false\` to opt the route out of instant-navigation validation\n\n` + `Learn more: https://nextjs.org/docs/messages/instant-link-prefetch-partial`);
}
}),
"[project]/node_modules/next/dist/shared/lib/invariant-error.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "InvariantError", {
    enumerable: true,
    get: function() {
        return InvariantError;
    }
});
class InvariantError extends Error {
    constructor(message, options){
        super(`Invariant: ${message.endsWith('.') ? message : message + '.'} This is a bug in Next.js.`, options);
        this.name = 'InvariantError';
    }
}
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This has to be a shared module which is shared between client component error boundary and dynamic component
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    BailoutToCSRError: null,
    isBailoutToCSRError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BailoutToCSRError: function() {
        return BailoutToCSRError;
    },
    isBailoutToCSRError: function() {
        return isBailoutToCSRError;
    }
});
const BAILOUT_TO_CSR = 'BAILOUT_TO_CLIENT_SIDE_RENDERING';
class BailoutToCSRError extends Error {
    constructor(reason){
        super(`Bail out to client-side rendering: ${reason}`), this.reason = reason, this.digest = BAILOUT_TO_CSR;
    }
}
function isBailoutToCSRError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === BAILOUT_TO_CSR;
}
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/react-browser-bailout.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This module is bundled separately into user code and the precompiled App
// Router runtime. Use the global symbol registry so both copies recognize the
// same browser bailout reason.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createReactBrowserBailoutReason: null,
    getReactBrowserBailoutReason: null,
    isNextBrowserBailoutError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createReactBrowserBailoutReason: function() {
        return createReactBrowserBailoutReason;
    },
    getReactBrowserBailoutReason: function() {
        return getReactBrowserBailoutReason;
    },
    isNextBrowserBailoutError: function() {
        return isNextBrowserBailoutError;
    }
});
const REACT_BROWSER_BAILOUT_REASON = Symbol.for('next.browser-bailout-reason');
function createReactBrowserBailoutReason(reason) {
    return {
        $$typeof: REACT_BROWSER_BAILOUT_REASON,
        reason
    };
}
function getReactBrowserBailoutReason(error) {
    const cause = error?.cause;
    return cause?.$$typeof === REACT_BROWSER_BAILOUT_REASON ? cause.reason : undefined;
}
function isNextBrowserBailoutError(error) {
    return getReactBrowserBailoutReason(error) !== undefined;
}
}),
"[project]/node_modules/next/dist/shared/lib/promise-with-resolvers.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createPromiseWithResolvers", {
    enumerable: true,
    get: function() {
        return createPromiseWithResolvers;
    }
});
function createPromiseWithResolvers() {
    // Shim of Stage 4 Promise.withResolvers proposal
    let resolve;
    let reject;
    const promise = new Promise((res, rej)=>{
        resolve = res;
        reject = rej;
    });
    return {
        resolve: resolve,
        reject: reject,
        promise
    };
}
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/parse-loader-tree.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parseLoaderTree", {
    enumerable: true,
    get: function() {
        return parseLoaderTree;
    }
});
const _segment = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/segment.js [app-rsc] (ecmascript)");
function parseLoaderTree(tree) {
    const [segment, parallelRoutes, modules, staticSiblings] = tree;
    const { layout, template } = modules;
    let { page } = modules;
    // a __DEFAULT__ segment means that this route didn't match any of the
    // segments in the route, so we should use the default page
    page = segment === _segment.DEFAULT_SEGMENT_KEY ? modules.defaultPage : page;
    const conventionPath = layout?.[1] || template?.[1] || page?.[1];
    return {
        page,
        segment,
        modules,
        /* it can be either layout / template / page */ conventionPath,
        parallelRoutes,
        staticSiblings
    };
}
}),
"[project]/node_modules/next/dist/shared/lib/segment.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DEFAULT_SEGMENT_KEY: null,
    NOT_FOUND_SEGMENT_KEY: null,
    PAGE_SEGMENT_KEY: null,
    computeSelectedLayoutSegment: null,
    getSegmentValue: null,
    getSelectedLayoutSegmentPath: null,
    isGroupSegment: null,
    isParallelRouteSegment: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DEFAULT_SEGMENT_KEY: function() {
        return DEFAULT_SEGMENT_KEY;
    },
    NOT_FOUND_SEGMENT_KEY: function() {
        return NOT_FOUND_SEGMENT_KEY;
    },
    PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
    },
    computeSelectedLayoutSegment: function() {
        return computeSelectedLayoutSegment;
    },
    getSegmentValue: function() {
        return getSegmentValue;
    },
    getSelectedLayoutSegmentPath: function() {
        return getSelectedLayoutSegmentPath;
    },
    isGroupSegment: function() {
        return isGroupSegment;
    },
    isParallelRouteSegment: function() {
        return isParallelRouteSegment;
    }
});
function getSegmentValue(segment) {
    return Array.isArray(segment) ? segment[1] : segment;
}
function isGroupSegment(segment) {
    // Use array[0] for performant purpose
    return segment[0] === '(' && segment.endsWith(')');
}
function isParallelRouteSegment(segment) {
    return segment.startsWith('@') && segment !== '@children';
}
function computeSelectedLayoutSegment(segments, parallelRouteKey) {
    if (!segments || segments.length === 0) {
        return null;
    }
    // For 'children', use first segment; for other parallel routes, use last segment
    const rawSegment = parallelRouteKey === 'children' ? segments[0] : segments[segments.length - 1];
    // If the default slot is showing, return null since it's not technically "selected" (it's a fallback)
    // Returning an internal value like `__DEFAULT__` would be confusing
    return rawSegment === DEFAULT_SEGMENT_KEY ? null : rawSegment;
}
function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first = true, segmentPath = []) {
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        node = parallelRoutes.children ?? Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    let segmentValue = getSegmentValue(segment);
    if (!segmentValue || segmentValue === PAGE_SEGMENT_KEY) {
        return segmentPath;
    }
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
const PAGE_SEGMENT_KEY = '__PAGE__';
const DEFAULT_SEGMENT_KEY = '__DEFAULT__';
const NOT_FOUND_SEGMENT_KEY = '/_not-found';
}),
"[project]/node_modules/qrcode/node_modules/pngjs/lib/bitmapper.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let interlaceUtils = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/interlace.js [app-rsc] (ecmascript)");
let pixelBppMapper = [
    // 0 - dummy entry
    function() {},
    // 1 - L
    // 0: 0, 1: 0, 2: 0, 3: 0xff
    function(pxData, data, pxPos, rawPos) {
        if (rawPos === data.length) {
            throw new Error("Ran out of data");
        }
        let pixel = data[rawPos];
        pxData[pxPos] = pixel;
        pxData[pxPos + 1] = pixel;
        pxData[pxPos + 2] = pixel;
        pxData[pxPos + 3] = 0xff;
    },
    // 2 - LA
    // 0: 0, 1: 0, 2: 0, 3: 1
    function(pxData, data, pxPos, rawPos) {
        if (rawPos + 1 >= data.length) {
            throw new Error("Ran out of data");
        }
        let pixel = data[rawPos];
        pxData[pxPos] = pixel;
        pxData[pxPos + 1] = pixel;
        pxData[pxPos + 2] = pixel;
        pxData[pxPos + 3] = data[rawPos + 1];
    },
    // 3 - RGB
    // 0: 0, 1: 1, 2: 2, 3: 0xff
    function(pxData, data, pxPos, rawPos) {
        if (rawPos + 2 >= data.length) {
            throw new Error("Ran out of data");
        }
        pxData[pxPos] = data[rawPos];
        pxData[pxPos + 1] = data[rawPos + 1];
        pxData[pxPos + 2] = data[rawPos + 2];
        pxData[pxPos + 3] = 0xff;
    },
    // 4 - RGBA
    // 0: 0, 1: 1, 2: 2, 3: 3
    function(pxData, data, pxPos, rawPos) {
        if (rawPos + 3 >= data.length) {
            throw new Error("Ran out of data");
        }
        pxData[pxPos] = data[rawPos];
        pxData[pxPos + 1] = data[rawPos + 1];
        pxData[pxPos + 2] = data[rawPos + 2];
        pxData[pxPos + 3] = data[rawPos + 3];
    }
];
let pixelBppCustomMapper = [
    // 0 - dummy entry
    function() {},
    // 1 - L
    // 0: 0, 1: 0, 2: 0, 3: 0xff
    function(pxData, pixelData, pxPos, maxBit) {
        let pixel = pixelData[0];
        pxData[pxPos] = pixel;
        pxData[pxPos + 1] = pixel;
        pxData[pxPos + 2] = pixel;
        pxData[pxPos + 3] = maxBit;
    },
    // 2 - LA
    // 0: 0, 1: 0, 2: 0, 3: 1
    function(pxData, pixelData, pxPos) {
        let pixel = pixelData[0];
        pxData[pxPos] = pixel;
        pxData[pxPos + 1] = pixel;
        pxData[pxPos + 2] = pixel;
        pxData[pxPos + 3] = pixelData[1];
    },
    // 3 - RGB
    // 0: 0, 1: 1, 2: 2, 3: 0xff
    function(pxData, pixelData, pxPos, maxBit) {
        pxData[pxPos] = pixelData[0];
        pxData[pxPos + 1] = pixelData[1];
        pxData[pxPos + 2] = pixelData[2];
        pxData[pxPos + 3] = maxBit;
    },
    // 4 - RGBA
    // 0: 0, 1: 1, 2: 2, 3: 3
    function(pxData, pixelData, pxPos) {
        pxData[pxPos] = pixelData[0];
        pxData[pxPos + 1] = pixelData[1];
        pxData[pxPos + 2] = pixelData[2];
        pxData[pxPos + 3] = pixelData[3];
    }
];
function bitRetriever(data, depth) {
    let leftOver = [];
    let i = 0;
    function split() {
        if (i === data.length) {
            throw new Error("Ran out of data");
        }
        let byte = data[i];
        i++;
        let byte8, byte7, byte6, byte5, byte4, byte3, byte2, byte1;
        switch(depth){
            default:
                throw new Error("unrecognised depth");
            case 16:
                byte2 = data[i];
                i++;
                leftOver.push((byte << 8) + byte2);
                break;
            case 4:
                byte2 = byte & 0x0f;
                byte1 = byte >> 4;
                leftOver.push(byte1, byte2);
                break;
            case 2:
                byte4 = byte & 3;
                byte3 = byte >> 2 & 3;
                byte2 = byte >> 4 & 3;
                byte1 = byte >> 6 & 3;
                leftOver.push(byte1, byte2, byte3, byte4);
                break;
            case 1:
                byte8 = byte & 1;
                byte7 = byte >> 1 & 1;
                byte6 = byte >> 2 & 1;
                byte5 = byte >> 3 & 1;
                byte4 = byte >> 4 & 1;
                byte3 = byte >> 5 & 1;
                byte2 = byte >> 6 & 1;
                byte1 = byte >> 7 & 1;
                leftOver.push(byte1, byte2, byte3, byte4, byte5, byte6, byte7, byte8);
                break;
        }
    }
    return {
        get: function(count) {
            while(leftOver.length < count){
                split();
            }
            let returner = leftOver.slice(0, count);
            leftOver = leftOver.slice(count);
            return returner;
        },
        resetAfterLine: function() {
            leftOver.length = 0;
        },
        end: function() {
            if (i !== data.length) {
                throw new Error("extra data found");
            }
        }
    };
}
function mapImage8Bit(image, pxData, getPxPos, bpp, data, rawPos) {
    // eslint-disable-line max-params
    let imageWidth = image.width;
    let imageHeight = image.height;
    let imagePass = image.index;
    for(let y = 0; y < imageHeight; y++){
        for(let x = 0; x < imageWidth; x++){
            let pxPos = getPxPos(x, y, imagePass);
            pixelBppMapper[bpp](pxData, data, pxPos, rawPos);
            rawPos += bpp; //eslint-disable-line no-param-reassign
        }
    }
    return rawPos;
}
function mapImageCustomBit(image, pxData, getPxPos, bpp, bits, maxBit) {
    // eslint-disable-line max-params
    let imageWidth = image.width;
    let imageHeight = image.height;
    let imagePass = image.index;
    for(let y = 0; y < imageHeight; y++){
        for(let x = 0; x < imageWidth; x++){
            let pixelData = bits.get(bpp);
            let pxPos = getPxPos(x, y, imagePass);
            pixelBppCustomMapper[bpp](pxData, pixelData, pxPos, maxBit);
        }
        bits.resetAfterLine();
    }
}
exports.dataToBitMap = function(data, bitmapInfo) {
    let width = bitmapInfo.width;
    let height = bitmapInfo.height;
    let depth = bitmapInfo.depth;
    let bpp = bitmapInfo.bpp;
    let interlace = bitmapInfo.interlace;
    let bits;
    if (depth !== 8) {
        bits = bitRetriever(data, depth);
    }
    let pxData;
    if (depth <= 8) {
        pxData = Buffer.alloc(width * height * 4);
    } else {
        pxData = new Uint16Array(width * height * 4);
    }
    let maxBit = Math.pow(2, depth) - 1;
    let rawPos = 0;
    let images;
    let getPxPos;
    if (interlace) {
        images = interlaceUtils.getImagePasses(width, height);
        getPxPos = interlaceUtils.getInterlaceIterator(width, height);
    } else {
        let nonInterlacedPxPos = 0;
        getPxPos = function() {
            let returner = nonInterlacedPxPos;
            nonInterlacedPxPos += 4;
            return returner;
        };
        images = [
            {
                width: width,
                height: height
            }
        ];
    }
    for(let imageIndex = 0; imageIndex < images.length; imageIndex++){
        if (depth === 8) {
            rawPos = mapImage8Bit(images[imageIndex], pxData, getPxPos, bpp, data, rawPos);
        } else {
            mapImageCustomBit(images[imageIndex], pxData, getPxPos, bpp, bits, maxBit);
        }
    }
    if (depth === 8) {
        if (rawPos !== data.length) {
            throw new Error("extra data found");
        }
    } else {
        bits.end();
    }
    return pxData;
};
}),
"[project]/node_modules/qrcode/node_modules/pngjs/lib/bitpacker.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let constants = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/constants.js [app-rsc] (ecmascript)");
module.exports = function(dataIn, width, height, options) {
    let outHasAlpha = [
        constants.COLORTYPE_COLOR_ALPHA,
        constants.COLORTYPE_ALPHA
    ].indexOf(options.colorType) !== -1;
    if (options.colorType === options.inputColorType) {
        let bigEndian = function() {
            let buffer = new ArrayBuffer(2);
            new DataView(buffer).setInt16(0, 256, true);
            // Int16Array uses the platform's endianness.
            return new Int16Array(buffer)[0] !== 256;
        }();
        // If no need to convert to grayscale and alpha is present/absent in both, take a fast route
        if (options.bitDepth === 8 || options.bitDepth === 16 && bigEndian) {
            return dataIn;
        }
    }
    // map to a UInt16 array if data is 16bit, fix endianness below
    let data = options.bitDepth !== 16 ? dataIn : new Uint16Array(dataIn.buffer);
    let maxValue = 255;
    let inBpp = constants.COLORTYPE_TO_BPP_MAP[options.inputColorType];
    if (inBpp === 4 && !options.inputHasAlpha) {
        inBpp = 3;
    }
    let outBpp = constants.COLORTYPE_TO_BPP_MAP[options.colorType];
    if (options.bitDepth === 16) {
        maxValue = 65535;
        outBpp *= 2;
    }
    let outData = Buffer.alloc(width * height * outBpp);
    let inIndex = 0;
    let outIndex = 0;
    let bgColor = options.bgColor || {};
    if (bgColor.red === undefined) {
        bgColor.red = maxValue;
    }
    if (bgColor.green === undefined) {
        bgColor.green = maxValue;
    }
    if (bgColor.blue === undefined) {
        bgColor.blue = maxValue;
    }
    function getRGBA() {
        let red;
        let green;
        let blue;
        let alpha = maxValue;
        switch(options.inputColorType){
            case constants.COLORTYPE_COLOR_ALPHA:
                alpha = data[inIndex + 3];
                red = data[inIndex];
                green = data[inIndex + 1];
                blue = data[inIndex + 2];
                break;
            case constants.COLORTYPE_COLOR:
                red = data[inIndex];
                green = data[inIndex + 1];
                blue = data[inIndex + 2];
                break;
            case constants.COLORTYPE_ALPHA:
                alpha = data[inIndex + 1];
                red = data[inIndex];
                green = red;
                blue = red;
                break;
            case constants.COLORTYPE_GRAYSCALE:
                red = data[inIndex];
                green = red;
                blue = red;
                break;
            default:
                throw new Error("input color type:" + options.inputColorType + " is not supported at present");
        }
        if (options.inputHasAlpha) {
            if (!outHasAlpha) {
                alpha /= maxValue;
                red = Math.min(Math.max(Math.round((1 - alpha) * bgColor.red + alpha * red), 0), maxValue);
                green = Math.min(Math.max(Math.round((1 - alpha) * bgColor.green + alpha * green), 0), maxValue);
                blue = Math.min(Math.max(Math.round((1 - alpha) * bgColor.blue + alpha * blue), 0), maxValue);
            }
        }
        return {
            red: red,
            green: green,
            blue: blue,
            alpha: alpha
        };
    }
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            let rgba = getRGBA(data, inIndex);
            switch(options.colorType){
                case constants.COLORTYPE_COLOR_ALPHA:
                case constants.COLORTYPE_COLOR:
                    if (options.bitDepth === 8) {
                        outData[outIndex] = rgba.red;
                        outData[outIndex + 1] = rgba.green;
                        outData[outIndex + 2] = rgba.blue;
                        if (outHasAlpha) {
                            outData[outIndex + 3] = rgba.alpha;
                        }
                    } else {
                        outData.writeUInt16BE(rgba.red, outIndex);
                        outData.writeUInt16BE(rgba.green, outIndex + 2);
                        outData.writeUInt16BE(rgba.blue, outIndex + 4);
                        if (outHasAlpha) {
                            outData.writeUInt16BE(rgba.alpha, outIndex + 6);
                        }
                    }
                    break;
                case constants.COLORTYPE_ALPHA:
                case constants.COLORTYPE_GRAYSCALE:
                    {
                        // Convert to grayscale and alpha
                        let grayscale = (rgba.red + rgba.green + rgba.blue) / 3;
                        if (options.bitDepth === 8) {
                            outData[outIndex] = grayscale;
                            if (outHasAlpha) {
                                outData[outIndex + 1] = rgba.alpha;
                            }
                        } else {
                            outData.writeUInt16BE(grayscale, outIndex);
                            if (outHasAlpha) {
                                outData.writeUInt16BE(rgba.alpha, outIndex + 2);
                            }
                        }
                        break;
                    }
                default:
                    throw new Error("unrecognised color Type " + options.colorType);
            }
            inIndex += inBpp;
            outIndex += outBpp;
        }
    }
    return outData;
};
}),
"[project]/node_modules/qrcode/node_modules/pngjs/lib/chunkstream.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
let Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
let ChunkStream = module.exports = function() {
    Stream.call(this);
    this._buffers = [];
    this._buffered = 0;
    this._reads = [];
    this._paused = false;
    this._encoding = "utf8";
    this.writable = true;
};
util.inherits(ChunkStream, Stream);
ChunkStream.prototype.read = function(length, callback) {
    this._reads.push({
        length: Math.abs(length),
        allowLess: length < 0,
        func: callback
    });
    process.nextTick((function() {
        this._process();
        // its paused and there is not enought data then ask for more
        if (this._paused && this._reads && this._reads.length > 0) {
            this._paused = false;
            this.emit("drain");
        }
    }).bind(this));
};
ChunkStream.prototype.write = function(data, encoding) {
    if (!this.writable) {
        this.emit("error", new Error("Stream not writable"));
        return false;
    }
    let dataBuffer;
    if (Buffer.isBuffer(data)) {
        dataBuffer = data;
    } else {
        dataBuffer = Buffer.from(data, encoding || this._encoding);
    }
    this._buffers.push(dataBuffer);
    this._buffered += dataBuffer.length;
    this._process();
    // ok if there are no more read requests
    if (this._reads && this._reads.length === 0) {
        this._paused = true;
    }
    return this.writable && !this._paused;
};
ChunkStream.prototype.end = function(data, encoding) {
    if (data) {
        this.write(data, encoding);
    }
    this.writable = false;
    // already destroyed
    if (!this._buffers) {
        return;
    }
    // enqueue or handle end
    if (this._buffers.length === 0) {
        this._end();
    } else {
        this._buffers.push(null);
        this._process();
    }
};
ChunkStream.prototype.destroySoon = ChunkStream.prototype.end;
ChunkStream.prototype._end = function() {
    if (this._reads.length > 0) {
        this.emit("error", new Error("Unexpected end of input"));
    }
    this.destroy();
};
ChunkStream.prototype.destroy = function() {
    if (!this._buffers) {
        return;
    }
    this.writable = false;
    this._reads = null;
    this._buffers = null;
    this.emit("close");
};
ChunkStream.prototype._processReadAllowingLess = function(read) {
    // ok there is any data so that we can satisfy this request
    this._reads.shift(); // == read
    // first we need to peek into first buffer
    let smallerBuf = this._buffers[0];
    // ok there is more data than we need
    if (smallerBuf.length > read.length) {
        this._buffered -= read.length;
        this._buffers[0] = smallerBuf.slice(read.length);
        read.func.call(this, smallerBuf.slice(0, read.length));
    } else {
        // ok this is less than maximum length so use it all
        this._buffered -= smallerBuf.length;
        this._buffers.shift(); // == smallerBuf
        read.func.call(this, smallerBuf);
    }
};
ChunkStream.prototype._processRead = function(read) {
    this._reads.shift(); // == read
    let pos = 0;
    let count = 0;
    let data = Buffer.alloc(read.length);
    // create buffer for all data
    while(pos < read.length){
        let buf = this._buffers[count++];
        let len = Math.min(buf.length, read.length - pos);
        buf.copy(data, pos, 0, len);
        pos += len;
        // last buffer wasn't used all so just slice it and leave
        if (len !== buf.length) {
            this._buffers[--count] = buf.slice(len);
        }
    }
    // remove all used buffers
    if (count > 0) {
        this._buffers.splice(0, count);
    }
    this._buffered -= read.length;
    read.func.call(this, data);
};
ChunkStream.prototype._process = function() {
    try {
        // as long as there is any data and read requests
        while(this._buffered > 0 && this._reads && this._reads.length > 0){
            let read = this._reads[0];
            // read any data (but no more than length)
            if (read.allowLess) {
                this._processReadAllowingLess(read);
            } else if (this._buffered >= read.length) {
                // ok we can meet some expectations
                this._processRead(read);
            } else {
                break;
            }
        }
        if (this._buffers && !this.writable) {
            this._end();
        }
    } catch (ex) {
        this.emit("error", ex);
    }
};
}),
"[project]/node_modules/qrcode/node_modules/pngjs/lib/constants.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = {
    PNG_SIGNATURE: [
        0x89,
        0x50,
        0x4e,
        0x47,
        0x0d,
        0x0a,
        0x1a,
        0x0a
    ],
    TYPE_IHDR: 0x49484452,
    TYPE_IEND: 0x49454e44,
    TYPE_IDAT: 0x49444154,
    TYPE_PLTE: 0x504c5445,
    TYPE_tRNS: 0x74524e53,
    TYPE_gAMA: 0x67414d41,
    // color-type bits
    COLORTYPE_GRAYSCALE: 0,
    COLORTYPE_PALETTE: 1,
    COLORTYPE_COLOR: 2,
    COLORTYPE_ALPHA: 4,
    // color-type combinations
    COLORTYPE_PALETTE_COLOR: 3,
    COLORTYPE_COLOR_ALPHA: 6,
    COLORTYPE_TO_BPP_MAP: {
        0: 1,
        2: 3,
        3: 1,
        4: 2,
        6: 4
    },
    GAMMA_DIVISION: 100000
};
}),
"[project]/node_modules/qrcode/node_modules/pngjs/lib/crc.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let crcTable = [];
(function() {
    for(let i = 0; i < 256; i++){
        let currentCrc = i;
        for(let j = 0; j < 8; j++){
            if (currentCrc & 1) {
                currentCrc = 0xedb88320 ^ currentCrc >>> 1;
            } else {
                currentCrc = currentCrc >>> 1;
            }
        }
        crcTable[i] = currentCrc;
    }
})();
let CrcCalculator = module.exports = function() {
    this._crc = -1;
};
CrcCalculator.prototype.write = function(data) {
    for(let i = 0; i < data.length; i++){
        this._crc = crcTable[(this._crc ^ data[i]) & 0xff] ^ this._crc >>> 8;
    }
    return true;
};
CrcCalculator.prototype.crc32 = function() {
    return this._crc ^ -1;
};
CrcCalculator.crc32 = function(buf) {
    let crc = -1;
    for(let i = 0; i < buf.length; i++){
        crc = crcTable[(crc ^ buf[i]) & 0xff] ^ crc >>> 8;
    }
    return crc ^ -1;
};
}),
"[project]/node_modules/qrcode/node_modules/pngjs/lib/filter-pack.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let paethPredictor = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/paeth-predictor.js [app-rsc] (ecmascript)");
function filterNone(pxData, pxPos, byteWidth, rawData, rawPos) {
    for(let x = 0; x < byteWidth; x++){
        rawData[rawPos + x] = pxData[pxPos + x];
    }
}
function filterSumNone(pxData, pxPos, byteWidth) {
    let sum = 0;
    let length = pxPos + byteWidth;
    for(let i = pxPos; i < length; i++){
        sum += Math.abs(pxData[i]);
    }
    return sum;
}
function filterSub(pxData, pxPos, byteWidth, rawData, rawPos, bpp) {
    for(let x = 0; x < byteWidth; x++){
        let left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
        let val = pxData[pxPos + x] - left;
        rawData[rawPos + x] = val;
    }
}
function filterSumSub(pxData, pxPos, byteWidth, bpp) {
    let sum = 0;
    for(let x = 0; x < byteWidth; x++){
        let left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
        let val = pxData[pxPos + x] - left;
        sum += Math.abs(val);
    }
    return sum;
}
function filterUp(pxData, pxPos, byteWidth, rawData, rawPos) {
    for(let x = 0; x < byteWidth; x++){
        let up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
        let val = pxData[pxPos + x] - up;
        rawData[rawPos + x] = val;
    }
}
function filterSumUp(pxData, pxPos, byteWidth) {
    let sum = 0;
    let length = pxPos + byteWidth;
    for(let x = pxPos; x < length; x++){
        let up = pxPos > 0 ? pxData[x - byteWidth] : 0;
        let val = pxData[x] - up;
        sum += Math.abs(val);
    }
    return sum;
}
function filterAvg(pxData, pxPos, byteWidth, rawData, rawPos, bpp) {
    for(let x = 0; x < byteWidth; x++){
        let left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
        let up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
        let val = pxData[pxPos + x] - (left + up >> 1);
        rawData[rawPos + x] = val;
    }
}
function filterSumAvg(pxData, pxPos, byteWidth, bpp) {
    let sum = 0;
    for(let x = 0; x < byteWidth; x++){
        let left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
        let up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
        let val = pxData[pxPos + x] - (left + up >> 1);
        sum += Math.abs(val);
    }
    return sum;
}
function filterPaeth(pxData, pxPos, byteWidth, rawData, rawPos, bpp) {
    for(let x = 0; x < byteWidth; x++){
        let left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
        let up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
        let upleft = pxPos > 0 && x >= bpp ? pxData[pxPos + x - (byteWidth + bpp)] : 0;
        let val = pxData[pxPos + x] - paethPredictor(left, up, upleft);
        rawData[rawPos + x] = val;
    }
}
function filterSumPaeth(pxData, pxPos, byteWidth, bpp) {
    let sum = 0;
    for(let x = 0; x < byteWidth; x++){
        let left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
        let up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
        let upleft = pxPos > 0 && x >= bpp ? pxData[pxPos + x - (byteWidth + bpp)] : 0;
        let val = pxData[pxPos + x] - paethPredictor(left, up, upleft);
        sum += Math.abs(val);
    }
    return sum;
}
let filters = {
    0: filterNone,
    1: filterSub,
    2: filterUp,
    3: filterAvg,
    4: filterPaeth
};
let filterSums = {
    0: filterSumNone,
    1: filterSumSub,
    2: filterSumUp,
    3: filterSumAvg,
    4: filterSumPaeth
};
module.exports = function(pxData, width, height, options, bpp) {
    let filterTypes;
    if (!("filterType" in options) || options.filterType === -1) {
        filterTypes = [
            0,
            1,
            2,
            3,
            4
        ];
    } else if (typeof options.filterType === "number") {
        filterTypes = [
            options.filterType
        ];
    } else {
        throw new Error("unrecognised filter types");
    }
    if (options.bitDepth === 16) {
        bpp *= 2;
    }
    let byteWidth = width * bpp;
    let rawPos = 0;
    let pxPos = 0;
    let rawData = Buffer.alloc((byteWidth + 1) * height);
    let sel = filterTypes[0];
    for(let y = 0; y < height; y++){
        if (filterTypes.length > 1) {
            // find best filter for this line (with lowest sum of values)
            let min = Infinity;
            for(let i = 0; i < filterTypes.length; i++){
                let sum = filterSums[filterTypes[i]](pxData, pxPos, byteWidth, bpp);
                if (sum < min) {
                    sel = filterTypes[i];
                    min = sum;
                }
            }
        }
        rawData[rawPos] = sel;
        rawPos++;
        filters[sel](pxData, pxPos, byteWidth, rawData, rawPos, bpp);
        rawPos += byteWidth;
        pxPos += byteWidth;
    }
    return rawData;
};
}),
"[project]/node_modules/qrcode/node_modules/pngjs/lib/filter-parse-async.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
let ChunkStream = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/chunkstream.js [app-rsc] (ecmascript)");
let Filter = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/filter-parse.js [app-rsc] (ecmascript)");
let FilterAsync = module.exports = function(bitmapInfo) {
    ChunkStream.call(this);
    let buffers = [];
    let that = this;
    this._filter = new Filter(bitmapInfo, {
        read: this.read.bind(this),
        write: function(buffer) {
            buffers.push(buffer);
        },
        complete: function() {
            that.emit("complete", Buffer.concat(buffers));
        }
    });
    this._filter.start();
};
util.inherits(FilterAsync, ChunkStream);
}),
"[project]/node_modules/qrcode/node_modules/pngjs/lib/filter-parse-sync.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let SyncReader = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/sync-reader.js [app-rsc] (ecmascript)");
let Filter = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/filter-parse.js [app-rsc] (ecmascript)");
exports.process = function(inBuffer, bitmapInfo) {
    let outBuffers = [];
    let reader = new SyncReader(inBuffer);
    let filter = new Filter(bitmapInfo, {
        read: reader.read.bind(reader),
        write: function(bufferPart) {
            outBuffers.push(bufferPart);
        },
        complete: function() {}
    });
    filter.start();
    reader.process();
    return Buffer.concat(outBuffers);
};
}),
"[project]/node_modules/qrcode/node_modules/pngjs/lib/filter-parse.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let interlaceUtils = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/interlace.js [app-rsc] (ecmascript)");
let paethPredictor = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/paeth-predictor.js [app-rsc] (ecmascript)");
function getByteWidth(width, bpp, depth) {
    let byteWidth = width * bpp;
    if (depth !== 8) {
        byteWidth = Math.ceil(byteWidth / (8 / depth));
    }
    return byteWidth;
}
let Filter = module.exports = function(bitmapInfo, dependencies) {
    let width = bitmapInfo.width;
    let height = bitmapInfo.height;
    let interlace = bitmapInfo.interlace;
    let bpp = bitmapInfo.bpp;
    let depth = bitmapInfo.depth;
    this.read = dependencies.read;
    this.write = dependencies.write;
    this.complete = dependencies.complete;
    this._imageIndex = 0;
    this._images = [];
    if (interlace) {
        let passes = interlaceUtils.getImagePasses(width, height);
        for(let i = 0; i < passes.length; i++){
            this._images.push({
                byteWidth: getByteWidth(passes[i].width, bpp, depth),
                height: passes[i].height,
                lineIndex: 0
            });
        }
    } else {
        this._images.push({
            byteWidth: getByteWidth(width, bpp, depth),
            height: height,
            lineIndex: 0
        });
    }
    // when filtering the line we look at the pixel to the left
    // the spec also says it is done on a byte level regardless of the number of pixels
    // so if the depth is byte compatible (8 or 16) we subtract the bpp in order to compare back
    // a pixel rather than just a different byte part. However if we are sub byte, we ignore.
    if (depth === 8) {
        this._xComparison = bpp;
    } else if (depth === 16) {
        this._xComparison = bpp * 2;
    } else {
        this._xComparison = 1;
    }
};
Filter.prototype.start = function() {
    this.read(this._images[this._imageIndex].byteWidth + 1, this._reverseFilterLine.bind(this));
};
Filter.prototype._unFilterType1 = function(rawData, unfilteredLine, byteWidth) {
    let xComparison = this._xComparison;
    let xBiggerThan = xComparison - 1;
    for(let x = 0; x < byteWidth; x++){
        let rawByte = rawData[1 + x];
        let f1Left = x > xBiggerThan ? unfilteredLine[x - xComparison] : 0;
        unfilteredLine[x] = rawByte + f1Left;
    }
};
Filter.prototype._unFilterType2 = function(rawData, unfilteredLine, byteWidth) {
    let lastLine = this._lastLine;
    for(let x = 0; x < byteWidth; x++){
        let rawByte = rawData[1 + x];
        let f2Up = lastLine ? lastLine[x] : 0;
        unfilteredLine[x] = rawByte + f2Up;
    }
};
Filter.prototype._unFilterType3 = function(rawData, unfilteredLine, byteWidth) {
    let xComparison = this._xComparison;
    let xBiggerThan = xComparison - 1;
    let lastLine = this._lastLine;
    for(let x = 0; x < byteWidth; x++){
        let rawByte = rawData[1 + x];
        let f3Up = lastLine ? lastLine[x] : 0;
        let f3Left = x > xBiggerThan ? unfilteredLine[x - xComparison] : 0;
        let f3Add = Math.floor((f3Left + f3Up) / 2);
        unfilteredLine[x] = rawByte + f3Add;
    }
};
Filter.prototype._unFilterType4 = function(rawData, unfilteredLine, byteWidth) {
    let xComparison = this._xComparison;
    let xBiggerThan = xComparison - 1;
    let lastLine = this._lastLine;
    for(let x = 0; x < byteWidth; x++){
        let rawByte = rawData[1 + x];
        let f4Up = lastLine ? lastLine[x] : 0;
        let f4Left = x > xBiggerThan ? unfilteredLine[x - xComparison] : 0;
        let f4UpLeft = x > xBiggerThan && lastLine ? lastLine[x - xComparison] : 0;
        let f4Add = paethPredictor(f4Left, f4Up, f4UpLeft);
        unfilteredLine[x] = rawByte + f4Add;
    }
};
Filter.prototype._reverseFilterLine = function(rawData) {
    let filter = rawData[0];
    let unfilteredLine;
    let currentImage = this._images[this._imageIndex];
    let byteWidth = currentImage.byteWidth;
    if (filter === 0) {
        unfilteredLine = rawData.slice(1, byteWidth + 1);
    } else {
        unfilteredLine = Buffer.alloc(byteWidth);
        switch(filter){
            case 1:
                this._unFilterType1(rawData, unfilteredLine, byteWidth);
                break;
            case 2:
                this._unFilterType2(rawData, unfilteredLine, byteWidth);
                break;
            case 3:
                this._unFilterType3(rawData, unfilteredLine, byteWidth);
                break;
            case 4:
                this._unFilterType4(rawData, unfilteredLine, byteWidth);
                break;
            default:
                throw new Error("Unrecognised filter type - " + filter);
        }
    }
    this.write(unfilteredLine);
    currentImage.lineIndex++;
    if (currentImage.lineIndex >= currentImage.height) {
        this._lastLine = null;
        this._imageIndex++;
        currentImage = this._images[this._imageIndex];
    } else {
        this._lastLine = unfilteredLine;
    }
    if (currentImage) {
        // read, using the byte width that may be from the new current image
        this.read(currentImage.byteWidth + 1, this._reverseFilterLine.bind(this));
    } else {
        this._lastLine = null;
        this.complete();
    }
};
}),
"[project]/node_modules/qrcode/node_modules/pngjs/lib/format-normaliser.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function dePalette(indata, outdata, width, height, palette) {
    let pxPos = 0;
    // use values from palette
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            let color = palette[indata[pxPos]];
            if (!color) {
                throw new Error("index " + indata[pxPos] + " not in palette");
            }
            for(let i = 0; i < 4; i++){
                outdata[pxPos + i] = color[i];
            }
            pxPos += 4;
        }
    }
}
function replaceTransparentColor(indata, outdata, width, height, transColor) {
    let pxPos = 0;
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            let makeTrans = false;
            if (transColor.length === 1) {
                if (transColor[0] === indata[pxPos]) {
                    makeTrans = true;
                }
            } else if (transColor[0] === indata[pxPos] && transColor[1] === indata[pxPos + 1] && transColor[2] === indata[pxPos + 2]) {
                makeTrans = true;
            }
            if (makeTrans) {
                for(let i = 0; i < 4; i++){
                    outdata[pxPos + i] = 0;
                }
            }
            pxPos += 4;
        }
    }
}
function scaleDepth(indata, outdata, width, height, depth) {
    let maxOutSample = 255;
    let maxInSample = Math.pow(2, depth) - 1;
    let pxPos = 0;
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            for(let i = 0; i < 4; i++){
                outdata[pxPos + i] = Math.floor(indata[pxPos + i] * maxOutSample / maxInSample + 0.5);
            }
            pxPos += 4;
        }
    }
}
module.exports = function(indata, imageData) {
    let depth = imageData.depth;
    let width = imageData.width;
    let height = imageData.height;
    let colorType = imageData.colorType;
    let transColor = imageData.transColor;
    let palette = imageData.palette;
    let outdata = indata; // only different for 16 bits
    if (colorType === 3) {
        // paletted
        dePalette(indata, outdata, width, height, palette);
    } else {
        if (transColor) {
            replaceTransparentColor(indata, outdata, width, height, transColor);
        }
        // if it needs scaling
        if (depth !== 8) {
            // if we need to change the buffer size
            if (depth === 16) {
                outdata = Buffer.alloc(width * height * 4);
            }
            scaleDepth(indata, outdata, width, height, depth);
        }
    }
    return outdata;
};
}),
"[project]/node_modules/qrcode/node_modules/pngjs/lib/interlace.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Adam 7
//   0 1 2 3 4 5 6 7
// 0 x 6 4 6 x 6 4 6
// 1 7 7 7 7 7 7 7 7
// 2 5 6 5 6 5 6 5 6
// 3 7 7 7 7 7 7 7 7
// 4 3 6 4 6 3 6 4 6
// 5 7 7 7 7 7 7 7 7
// 6 5 6 5 6 5 6 5 6
// 7 7 7 7 7 7 7 7 7
let imagePasses = [
    {
        // pass 1 - 1px
        x: [
            0
        ],
        y: [
            0
        ]
    },
    {
        // pass 2 - 1px
        x: [
            4
        ],
        y: [
            0
        ]
    },
    {
        // pass 3 - 2px
        x: [
            0,
            4
        ],
        y: [
            4
        ]
    },
    {
        // pass 4 - 4px
        x: [
            2,
            6
        ],
        y: [
            0,
            4
        ]
    },
    {
        // pass 5 - 8px
        x: [
            0,
            2,
            4,
            6
        ],
        y: [
            2,
            6
        ]
    },
    {
        // pass 6 - 16px
        x: [
            1,
            3,
            5,
            7
        ],
        y: [
            0,
            2,
            4,
            6
        ]
    },
    {
        // pass 7 - 32px
        x: [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7
        ],
        y: [
            1,
            3,
            5,
            7
        ]
    }
];
exports.getImagePasses = function(width, height) {
    let images = [];
    let xLeftOver = width % 8;
    let yLeftOver = height % 8;
    let xRepeats = (width - xLeftOver) / 8;
    let yRepeats = (height - yLeftOver) / 8;
    for(let i = 0; i < imagePasses.length; i++){
        let pass = imagePasses[i];
        let passWidth = xRepeats * pass.x.length;
        let passHeight = yRepeats * pass.y.length;
        for(let j = 0; j < pass.x.length; j++){
            if (pass.x[j] < xLeftOver) {
                passWidth++;
            } else {
                break;
            }
        }
        for(let j = 0; j < pass.y.length; j++){
            if (pass.y[j] < yLeftOver) {
                passHeight++;
            } else {
                break;
            }
        }
        if (passWidth > 0 && passHeight > 0) {
            images.push({
                width: passWidth,
                height: passHeight,
                index: i
            });
        }
    }
    return images;
};
exports.getInterlaceIterator = function(width) {
    return function(x, y, pass) {
        let outerXLeftOver = x % imagePasses[pass].x.length;
        let outerX = (x - outerXLeftOver) / imagePasses[pass].x.length * 8 + imagePasses[pass].x[outerXLeftOver];
        let outerYLeftOver = y % imagePasses[pass].y.length;
        let outerY = (y - outerYLeftOver) / imagePasses[pass].y.length * 8 + imagePasses[pass].y[outerYLeftOver];
        return outerX * 4 + outerY * width * 4;
    };
};
}),
"[project]/node_modules/qrcode/node_modules/pngjs/lib/packer-async.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
let Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
let constants = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/constants.js [app-rsc] (ecmascript)");
let Packer = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/packer.js [app-rsc] (ecmascript)");
let PackerAsync = module.exports = function(opt) {
    Stream.call(this);
    let options = opt || {};
    this._packer = new Packer(options);
    this._deflate = this._packer.createDeflate();
    this.readable = true;
};
util.inherits(PackerAsync, Stream);
PackerAsync.prototype.pack = function(data, width, height, gamma) {
    // Signature
    this.emit("data", Buffer.from(constants.PNG_SIGNATURE));
    this.emit("data", this._packer.packIHDR(width, height));
    if (gamma) {
        this.emit("data", this._packer.packGAMA(gamma));
    }
    let filteredData = this._packer.filterData(data, width, height);
    // compress it
    this._deflate.on("error", this.emit.bind(this, "error"));
    this._deflate.on("data", (function(compressedData) {
        this.emit("data", this._packer.packIDAT(compressedData));
    }).bind(this));
    this._deflate.on("end", (function() {
        this.emit("data", this._packer.packIEND());
        this.emit("end");
    }).bind(this));
    this._deflate.end(filteredData);
};
}),
"[project]/node_modules/qrcode/node_modules/pngjs/lib/packer-sync.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let hasSyncZlib = true;
let zlib = __turbopack_context__.r("[externals]/zlib [external] (zlib, cjs)");
if (!zlib.deflateSync) {
    hasSyncZlib = false;
}
let constants = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/constants.js [app-rsc] (ecmascript)");
let Packer = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/packer.js [app-rsc] (ecmascript)");
module.exports = function(metaData, opt) {
    if (!hasSyncZlib) {
        throw new Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");
    }
    let options = opt || {};
    let packer = new Packer(options);
    let chunks = [];
    // Signature
    chunks.push(Buffer.from(constants.PNG_SIGNATURE));
    // Header
    chunks.push(packer.packIHDR(metaData.width, metaData.height));
    if (metaData.gamma) {
        chunks.push(packer.packGAMA(metaData.gamma));
    }
    let filteredData = packer.filterData(metaData.data, metaData.width, metaData.height);
    // compress it
    let compressedData = zlib.deflateSync(filteredData, packer.getDeflateOptions());
    filteredData = null;
    if (!compressedData || !compressedData.length) {
        throw new Error("bad png - invalid compressed data response");
    }
    chunks.push(packer.packIDAT(compressedData));
    // End
    chunks.push(packer.packIEND());
    return Buffer.concat(chunks);
};
}),
"[project]/node_modules/qrcode/node_modules/pngjs/lib/packer.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let constants = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/constants.js [app-rsc] (ecmascript)");
let CrcStream = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/crc.js [app-rsc] (ecmascript)");
let bitPacker = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/bitpacker.js [app-rsc] (ecmascript)");
let filter = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/filter-pack.js [app-rsc] (ecmascript)");
let zlib = __turbopack_context__.r("[externals]/zlib [external] (zlib, cjs)");
let Packer = module.exports = function(options) {
    this._options = options;
    options.deflateChunkSize = options.deflateChunkSize || 32 * 1024;
    options.deflateLevel = options.deflateLevel != null ? options.deflateLevel : 9;
    options.deflateStrategy = options.deflateStrategy != null ? options.deflateStrategy : 3;
    options.inputHasAlpha = options.inputHasAlpha != null ? options.inputHasAlpha : true;
    options.deflateFactory = options.deflateFactory || zlib.createDeflate;
    options.bitDepth = options.bitDepth || 8;
    // This is outputColorType
    options.colorType = typeof options.colorType === "number" ? options.colorType : constants.COLORTYPE_COLOR_ALPHA;
    options.inputColorType = typeof options.inputColorType === "number" ? options.inputColorType : constants.COLORTYPE_COLOR_ALPHA;
    if ([
        constants.COLORTYPE_GRAYSCALE,
        constants.COLORTYPE_COLOR,
        constants.COLORTYPE_COLOR_ALPHA,
        constants.COLORTYPE_ALPHA
    ].indexOf(options.colorType) === -1) {
        throw new Error("option color type:" + options.colorType + " is not supported at present");
    }
    if ([
        constants.COLORTYPE_GRAYSCALE,
        constants.COLORTYPE_COLOR,
        constants.COLORTYPE_COLOR_ALPHA,
        constants.COLORTYPE_ALPHA
    ].indexOf(options.inputColorType) === -1) {
        throw new Error("option input color type:" + options.inputColorType + " is not supported at present");
    }
    if (options.bitDepth !== 8 && options.bitDepth !== 16) {
        throw new Error("option bit depth:" + options.bitDepth + " is not supported at present");
    }
};
Packer.prototype.getDeflateOptions = function() {
    return {
        chunkSize: this._options.deflateChunkSize,
        level: this._options.deflateLevel,
        strategy: this._options.deflateStrategy
    };
};
Packer.prototype.createDeflate = function() {
    return this._options.deflateFactory(this.getDeflateOptions());
};
Packer.prototype.filterData = function(data, width, height) {
    // convert to correct format for filtering (e.g. right bpp and bit depth)
    let packedData = bitPacker(data, width, height, this._options);
    // filter pixel data
    let bpp = constants.COLORTYPE_TO_BPP_MAP[this._options.colorType];
    let filteredData = filter(packedData, width, height, this._options, bpp);
    return filteredData;
};
Packer.prototype._packChunk = function(type, data) {
    let len = data ? data.length : 0;
    let buf = Buffer.alloc(len + 12);
    buf.writeUInt32BE(len, 0);
    buf.writeUInt32BE(type, 4);
    if (data) {
        data.copy(buf, 8);
    }
    buf.writeInt32BE(CrcStream.crc32(buf.slice(4, buf.length - 4)), buf.length - 4);
    return buf;
};
Packer.prototype.packGAMA = function(gamma) {
    let buf = Buffer.alloc(4);
    buf.writeUInt32BE(Math.floor(gamma * constants.GAMMA_DIVISION), 0);
    return this._packChunk(constants.TYPE_gAMA, buf);
};
Packer.prototype.packIHDR = function(width, height) {
    let buf = Buffer.alloc(13);
    buf.writeUInt32BE(width, 0);
    buf.writeUInt32BE(height, 4);
    buf[8] = this._options.bitDepth; // Bit depth
    buf[9] = this._options.colorType; // colorType
    buf[10] = 0; // compression
    buf[11] = 0; // filter
    buf[12] = 0; // interlace
    return this._packChunk(constants.TYPE_IHDR, buf);
};
Packer.prototype.packIDAT = function(data) {
    return this._packChunk(constants.TYPE_IDAT, data);
};
Packer.prototype.packIEND = function() {
    return this._packChunk(constants.TYPE_IEND, null);
};
}),
"[project]/node_modules/qrcode/node_modules/pngjs/lib/paeth-predictor.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = function paethPredictor(left, above, upLeft) {
    let paeth = left + above - upLeft;
    let pLeft = Math.abs(paeth - left);
    let pAbove = Math.abs(paeth - above);
    let pUpLeft = Math.abs(paeth - upLeft);
    if (pLeft <= pAbove && pLeft <= pUpLeft) {
        return left;
    }
    if (pAbove <= pUpLeft) {
        return above;
    }
    return upLeft;
};
}),
"[project]/node_modules/qrcode/node_modules/pngjs/lib/parser-async.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
let zlib = __turbopack_context__.r("[externals]/zlib [external] (zlib, cjs)");
let ChunkStream = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/chunkstream.js [app-rsc] (ecmascript)");
let FilterAsync = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/filter-parse-async.js [app-rsc] (ecmascript)");
let Parser = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/parser.js [app-rsc] (ecmascript)");
let bitmapper = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/bitmapper.js [app-rsc] (ecmascript)");
let formatNormaliser = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/format-normaliser.js [app-rsc] (ecmascript)");
let ParserAsync = module.exports = function(options) {
    ChunkStream.call(this);
    this._parser = new Parser(options, {
        read: this.read.bind(this),
        error: this._handleError.bind(this),
        metadata: this._handleMetaData.bind(this),
        gamma: this.emit.bind(this, "gamma"),
        palette: this._handlePalette.bind(this),
        transColor: this._handleTransColor.bind(this),
        finished: this._finished.bind(this),
        inflateData: this._inflateData.bind(this),
        simpleTransparency: this._simpleTransparency.bind(this),
        headersFinished: this._headersFinished.bind(this)
    });
    this._options = options;
    this.writable = true;
    this._parser.start();
};
util.inherits(ParserAsync, ChunkStream);
ParserAsync.prototype._handleError = function(err) {
    this.emit("error", err);
    this.writable = false;
    this.destroy();
    if (this._inflate && this._inflate.destroy) {
        this._inflate.destroy();
    }
    if (this._filter) {
        this._filter.destroy();
        // For backward compatibility with Node 7 and below.
        // Suppress errors due to _inflate calling write() even after
        // it's destroy()'ed.
        this._filter.on("error", function() {});
    }
    this.errord = true;
};
ParserAsync.prototype._inflateData = function(data) {
    if (!this._inflate) {
        if (this._bitmapInfo.interlace) {
            this._inflate = zlib.createInflate();
            this._inflate.on("error", this.emit.bind(this, "error"));
            this._filter.on("complete", this._complete.bind(this));
            this._inflate.pipe(this._filter);
        } else {
            let rowSize = (this._bitmapInfo.width * this._bitmapInfo.bpp * this._bitmapInfo.depth + 7 >> 3) + 1;
            let imageSize = rowSize * this._bitmapInfo.height;
            let chunkSize = Math.max(imageSize, zlib.Z_MIN_CHUNK);
            this._inflate = zlib.createInflate({
                chunkSize: chunkSize
            });
            let leftToInflate = imageSize;
            let emitError = this.emit.bind(this, "error");
            this._inflate.on("error", function(err) {
                if (!leftToInflate) {
                    return;
                }
                emitError(err);
            });
            this._filter.on("complete", this._complete.bind(this));
            let filterWrite = this._filter.write.bind(this._filter);
            this._inflate.on("data", function(chunk) {
                if (!leftToInflate) {
                    return;
                }
                if (chunk.length > leftToInflate) {
                    chunk = chunk.slice(0, leftToInflate);
                }
                leftToInflate -= chunk.length;
                filterWrite(chunk);
            });
            this._inflate.on("end", this._filter.end.bind(this._filter));
        }
    }
    this._inflate.write(data);
};
ParserAsync.prototype._handleMetaData = function(metaData) {
    this._metaData = metaData;
    this._bitmapInfo = Object.create(metaData);
    this._filter = new FilterAsync(this._bitmapInfo);
};
ParserAsync.prototype._handleTransColor = function(transColor) {
    this._bitmapInfo.transColor = transColor;
};
ParserAsync.prototype._handlePalette = function(palette) {
    this._bitmapInfo.palette = palette;
};
ParserAsync.prototype._simpleTransparency = function() {
    this._metaData.alpha = true;
};
ParserAsync.prototype._headersFinished = function() {
    // Up until this point, we don't know if we have a tRNS chunk (alpha)
    // so we can't emit metadata any earlier
    this.emit("metadata", this._metaData);
};
ParserAsync.prototype._finished = function() {
    if (this.errord) {
        return;
    }
    if (!this._inflate) {
        this.emit("error", "No Inflate block");
    } else {
        // no more data to inflate
        this._inflate.end();
    }
};
ParserAsync.prototype._complete = function(filteredData) {
    if (this.errord) {
        return;
    }
    let normalisedBitmapData;
    try {
        let bitmapData = bitmapper.dataToBitMap(filteredData, this._bitmapInfo);
        normalisedBitmapData = formatNormaliser(bitmapData, this._bitmapInfo);
        bitmapData = null;
    } catch (ex) {
        this._handleError(ex);
        return;
    }
    this.emit("parsed", normalisedBitmapData);
};
}),
"[project]/node_modules/qrcode/node_modules/pngjs/lib/parser-sync.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let hasSyncZlib = true;
let zlib = __turbopack_context__.r("[externals]/zlib [external] (zlib, cjs)");
let inflateSync = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/sync-inflate.js [app-rsc] (ecmascript)");
if (!zlib.deflateSync) {
    hasSyncZlib = false;
}
let SyncReader = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/sync-reader.js [app-rsc] (ecmascript)");
let FilterSync = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/filter-parse-sync.js [app-rsc] (ecmascript)");
let Parser = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/parser.js [app-rsc] (ecmascript)");
let bitmapper = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/bitmapper.js [app-rsc] (ecmascript)");
let formatNormaliser = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/format-normaliser.js [app-rsc] (ecmascript)");
module.exports = function(buffer, options) {
    if (!hasSyncZlib) {
        throw new Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");
    }
    let err;
    function handleError(_err_) {
        err = _err_;
    }
    let metaData;
    function handleMetaData(_metaData_) {
        metaData = _metaData_;
    }
    function handleTransColor(transColor) {
        metaData.transColor = transColor;
    }
    function handlePalette(palette) {
        metaData.palette = palette;
    }
    function handleSimpleTransparency() {
        metaData.alpha = true;
    }
    let gamma;
    function handleGamma(_gamma_) {
        gamma = _gamma_;
    }
    let inflateDataList = [];
    function handleInflateData(inflatedData) {
        inflateDataList.push(inflatedData);
    }
    let reader = new SyncReader(buffer);
    let parser = new Parser(options, {
        read: reader.read.bind(reader),
        error: handleError,
        metadata: handleMetaData,
        gamma: handleGamma,
        palette: handlePalette,
        transColor: handleTransColor,
        inflateData: handleInflateData,
        simpleTransparency: handleSimpleTransparency
    });
    parser.start();
    reader.process();
    if (err) {
        throw err;
    }
    //join together the inflate datas
    let inflateData = Buffer.concat(inflateDataList);
    inflateDataList.length = 0;
    let inflatedData;
    if (metaData.interlace) {
        inflatedData = zlib.inflateSync(inflateData);
    } else {
        let rowSize = (metaData.width * metaData.bpp * metaData.depth + 7 >> 3) + 1;
        let imageSize = rowSize * metaData.height;
        inflatedData = inflateSync(inflateData, {
            chunkSize: imageSize,
            maxLength: imageSize
        });
    }
    inflateData = null;
    if (!inflatedData || !inflatedData.length) {
        throw new Error("bad png - invalid inflate data response");
    }
    let unfilteredData = FilterSync.process(inflatedData, metaData);
    inflateData = null;
    let bitmapData = bitmapper.dataToBitMap(unfilteredData, metaData);
    unfilteredData = null;
    let normalisedBitmapData = formatNormaliser(bitmapData, metaData);
    metaData.data = normalisedBitmapData;
    metaData.gamma = gamma || 0;
    return metaData;
};
}),
"[project]/node_modules/qrcode/node_modules/pngjs/lib/parser.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let constants = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/constants.js [app-rsc] (ecmascript)");
let CrcCalculator = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/crc.js [app-rsc] (ecmascript)");
let Parser = module.exports = function(options, dependencies) {
    this._options = options;
    options.checkCRC = options.checkCRC !== false;
    this._hasIHDR = false;
    this._hasIEND = false;
    this._emittedHeadersFinished = false;
    // input flags/metadata
    this._palette = [];
    this._colorType = 0;
    this._chunks = {};
    this._chunks[constants.TYPE_IHDR] = this._handleIHDR.bind(this);
    this._chunks[constants.TYPE_IEND] = this._handleIEND.bind(this);
    this._chunks[constants.TYPE_IDAT] = this._handleIDAT.bind(this);
    this._chunks[constants.TYPE_PLTE] = this._handlePLTE.bind(this);
    this._chunks[constants.TYPE_tRNS] = this._handleTRNS.bind(this);
    this._chunks[constants.TYPE_gAMA] = this._handleGAMA.bind(this);
    this.read = dependencies.read;
    this.error = dependencies.error;
    this.metadata = dependencies.metadata;
    this.gamma = dependencies.gamma;
    this.transColor = dependencies.transColor;
    this.palette = dependencies.palette;
    this.parsed = dependencies.parsed;
    this.inflateData = dependencies.inflateData;
    this.finished = dependencies.finished;
    this.simpleTransparency = dependencies.simpleTransparency;
    this.headersFinished = dependencies.headersFinished || function() {};
};
Parser.prototype.start = function() {
    this.read(constants.PNG_SIGNATURE.length, this._parseSignature.bind(this));
};
Parser.prototype._parseSignature = function(data) {
    let signature = constants.PNG_SIGNATURE;
    for(let i = 0; i < signature.length; i++){
        if (data[i] !== signature[i]) {
            this.error(new Error("Invalid file signature"));
            return;
        }
    }
    this.read(8, this._parseChunkBegin.bind(this));
};
Parser.prototype._parseChunkBegin = function(data) {
    // chunk content length
    let length = data.readUInt32BE(0);
    // chunk type
    let type = data.readUInt32BE(4);
    let name = "";
    for(let i = 4; i < 8; i++){
        name += String.fromCharCode(data[i]);
    }
    //console.log('chunk ', name, length);
    // chunk flags
    let ancillary = Boolean(data[4] & 0x20); // or critical
    //    priv = Boolean(data[5] & 0x20), // or public
    //    safeToCopy = Boolean(data[7] & 0x20); // or unsafe
    if (!this._hasIHDR && type !== constants.TYPE_IHDR) {
        this.error(new Error("Expected IHDR on beggining"));
        return;
    }
    this._crc = new CrcCalculator();
    this._crc.write(Buffer.from(name));
    if (this._chunks[type]) {
        return this._chunks[type](length);
    }
    if (!ancillary) {
        this.error(new Error("Unsupported critical chunk type " + name));
        return;
    }
    this.read(length + 4, this._skipChunk.bind(this));
};
Parser.prototype._skipChunk = function() {
    this.read(8, this._parseChunkBegin.bind(this));
};
Parser.prototype._handleChunkEnd = function() {
    this.read(4, this._parseChunkEnd.bind(this));
};
Parser.prototype._parseChunkEnd = function(data) {
    let fileCrc = data.readInt32BE(0);
    let calcCrc = this._crc.crc32();
    // check CRC
    if (this._options.checkCRC && calcCrc !== fileCrc) {
        this.error(new Error("Crc error - " + fileCrc + " - " + calcCrc));
        return;
    }
    if (!this._hasIEND) {
        this.read(8, this._parseChunkBegin.bind(this));
    }
};
Parser.prototype._handleIHDR = function(length) {
    this.read(length, this._parseIHDR.bind(this));
};
Parser.prototype._parseIHDR = function(data) {
    this._crc.write(data);
    let width = data.readUInt32BE(0);
    let height = data.readUInt32BE(4);
    let depth = data[8];
    let colorType = data[9]; // bits: 1 palette, 2 color, 4 alpha
    let compr = data[10];
    let filter = data[11];
    let interlace = data[12];
    // console.log('    width', width, 'height', height,
    //     'depth', depth, 'colorType', colorType,
    //     'compr', compr, 'filter', filter, 'interlace', interlace
    // );
    if (depth !== 8 && depth !== 4 && depth !== 2 && depth !== 1 && depth !== 16) {
        this.error(new Error("Unsupported bit depth " + depth));
        return;
    }
    if (!(colorType in constants.COLORTYPE_TO_BPP_MAP)) {
        this.error(new Error("Unsupported color type"));
        return;
    }
    if (compr !== 0) {
        this.error(new Error("Unsupported compression method"));
        return;
    }
    if (filter !== 0) {
        this.error(new Error("Unsupported filter method"));
        return;
    }
    if (interlace !== 0 && interlace !== 1) {
        this.error(new Error("Unsupported interlace method"));
        return;
    }
    this._colorType = colorType;
    let bpp = constants.COLORTYPE_TO_BPP_MAP[this._colorType];
    this._hasIHDR = true;
    this.metadata({
        width: width,
        height: height,
        depth: depth,
        interlace: Boolean(interlace),
        palette: Boolean(colorType & constants.COLORTYPE_PALETTE),
        color: Boolean(colorType & constants.COLORTYPE_COLOR),
        alpha: Boolean(colorType & constants.COLORTYPE_ALPHA),
        bpp: bpp,
        colorType: colorType
    });
    this._handleChunkEnd();
};
Parser.prototype._handlePLTE = function(length) {
    this.read(length, this._parsePLTE.bind(this));
};
Parser.prototype._parsePLTE = function(data) {
    this._crc.write(data);
    let entries = Math.floor(data.length / 3);
    // console.log('Palette:', entries);
    for(let i = 0; i < entries; i++){
        this._palette.push([
            data[i * 3],
            data[i * 3 + 1],
            data[i * 3 + 2],
            0xff
        ]);
    }
    this.palette(this._palette);
    this._handleChunkEnd();
};
Parser.prototype._handleTRNS = function(length) {
    this.simpleTransparency();
    this.read(length, this._parseTRNS.bind(this));
};
Parser.prototype._parseTRNS = function(data) {
    this._crc.write(data);
    // palette
    if (this._colorType === constants.COLORTYPE_PALETTE_COLOR) {
        if (this._palette.length === 0) {
            this.error(new Error("Transparency chunk must be after palette"));
            return;
        }
        if (data.length > this._palette.length) {
            this.error(new Error("More transparent colors than palette size"));
            return;
        }
        for(let i = 0; i < data.length; i++){
            this._palette[i][3] = data[i];
        }
        this.palette(this._palette);
    }
    // for colorType 0 (grayscale) and 2 (rgb)
    // there might be one gray/color defined as transparent
    if (this._colorType === constants.COLORTYPE_GRAYSCALE) {
        // grey, 2 bytes
        this.transColor([
            data.readUInt16BE(0)
        ]);
    }
    if (this._colorType === constants.COLORTYPE_COLOR) {
        this.transColor([
            data.readUInt16BE(0),
            data.readUInt16BE(2),
            data.readUInt16BE(4)
        ]);
    }
    this._handleChunkEnd();
};
Parser.prototype._handleGAMA = function(length) {
    this.read(length, this._parseGAMA.bind(this));
};
Parser.prototype._parseGAMA = function(data) {
    this._crc.write(data);
    this.gamma(data.readUInt32BE(0) / constants.GAMMA_DIVISION);
    this._handleChunkEnd();
};
Parser.prototype._handleIDAT = function(length) {
    if (!this._emittedHeadersFinished) {
        this._emittedHeadersFinished = true;
        this.headersFinished();
    }
    this.read(-length, this._parseIDAT.bind(this, length));
};
Parser.prototype._parseIDAT = function(length, data) {
    this._crc.write(data);
    if (this._colorType === constants.COLORTYPE_PALETTE_COLOR && this._palette.length === 0) {
        throw new Error("Expected palette not found");
    }
    this.inflateData(data);
    let leftOverLength = length - data.length;
    if (leftOverLength > 0) {
        this._handleIDAT(leftOverLength);
    } else {
        this._handleChunkEnd();
    }
};
Parser.prototype._handleIEND = function(length) {
    this.read(length, this._parseIEND.bind(this));
};
Parser.prototype._parseIEND = function(data) {
    this._crc.write(data);
    this._hasIEND = true;
    this._handleChunkEnd();
    if (this.finished) {
        this.finished();
    }
};
}),
"[project]/node_modules/qrcode/node_modules/pngjs/lib/png-sync.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let parse = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/parser-sync.js [app-rsc] (ecmascript)");
let pack = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/packer-sync.js [app-rsc] (ecmascript)");
exports.read = function(buffer, options) {
    return parse(buffer, options || {});
};
exports.write = function(png, options) {
    return pack(png, options);
};
}),
"[project]/node_modules/qrcode/node_modules/pngjs/lib/png.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
let Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
let Parser = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/parser-async.js [app-rsc] (ecmascript)");
let Packer = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/packer-async.js [app-rsc] (ecmascript)");
let PNGSync = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/png-sync.js [app-rsc] (ecmascript)");
let PNG = exports.PNG = function(options) {
    Stream.call(this);
    options = options || {}; // eslint-disable-line no-param-reassign
    // coerce pixel dimensions to integers (also coerces undefined -> 0):
    this.width = options.width | 0;
    this.height = options.height | 0;
    this.data = this.width > 0 && this.height > 0 ? Buffer.alloc(4 * this.width * this.height) : null;
    if (options.fill && this.data) {
        this.data.fill(0);
    }
    this.gamma = 0;
    this.readable = this.writable = true;
    this._parser = new Parser(options);
    this._parser.on("error", this.emit.bind(this, "error"));
    this._parser.on("close", this._handleClose.bind(this));
    this._parser.on("metadata", this._metadata.bind(this));
    this._parser.on("gamma", this._gamma.bind(this));
    this._parser.on("parsed", (function(data) {
        this.data = data;
        this.emit("parsed", data);
    }).bind(this));
    this._packer = new Packer(options);
    this._packer.on("data", this.emit.bind(this, "data"));
    this._packer.on("end", this.emit.bind(this, "end"));
    this._parser.on("close", this._handleClose.bind(this));
    this._packer.on("error", this.emit.bind(this, "error"));
};
util.inherits(PNG, Stream);
PNG.sync = PNGSync;
PNG.prototype.pack = function() {
    if (!this.data || !this.data.length) {
        this.emit("error", "No data provided");
        return this;
    }
    process.nextTick((function() {
        this._packer.pack(this.data, this.width, this.height, this.gamma);
    }).bind(this));
    return this;
};
PNG.prototype.parse = function(data, callback) {
    if (callback) {
        let onParsed, onError;
        onParsed = (function(parsedData) {
            this.removeListener("error", onError);
            this.data = parsedData;
            callback(null, this);
        }).bind(this);
        onError = (function(err) {
            this.removeListener("parsed", onParsed);
            callback(err, null);
        }).bind(this);
        this.once("parsed", onParsed);
        this.once("error", onError);
    }
    this.end(data);
    return this;
};
PNG.prototype.write = function(data) {
    this._parser.write(data);
    return true;
};
PNG.prototype.end = function(data) {
    this._parser.end(data);
};
PNG.prototype._metadata = function(metadata) {
    this.width = metadata.width;
    this.height = metadata.height;
    this.emit("metadata", metadata);
};
PNG.prototype._gamma = function(gamma) {
    this.gamma = gamma;
};
PNG.prototype._handleClose = function() {
    if (!this._parser.writable && !this._packer.readable) {
        this.emit("close");
    }
};
PNG.bitblt = function(src, dst, srcX, srcY, width, height, deltaX, deltaY) {
    // eslint-disable-line max-params
    // coerce pixel dimensions to integers (also coerces undefined -> 0):
    /* eslint-disable no-param-reassign */ srcX |= 0;
    srcY |= 0;
    width |= 0;
    height |= 0;
    deltaX |= 0;
    deltaY |= 0;
    /* eslint-enable no-param-reassign */ if (srcX > src.width || srcY > src.height || srcX + width > src.width || srcY + height > src.height) {
        throw new Error("bitblt reading outside image");
    }
    if (deltaX > dst.width || deltaY > dst.height || deltaX + width > dst.width || deltaY + height > dst.height) {
        throw new Error("bitblt writing outside image");
    }
    for(let y = 0; y < height; y++){
        src.data.copy(dst.data, (deltaY + y) * dst.width + deltaX << 2, (srcY + y) * src.width + srcX << 2, (srcY + y) * src.width + srcX + width << 2);
    }
};
PNG.prototype.bitblt = function(dst, srcX, srcY, width, height, deltaX, deltaY) {
    // eslint-disable-line max-params
    PNG.bitblt(this, dst, srcX, srcY, width, height, deltaX, deltaY);
    return this;
};
PNG.adjustGamma = function(src) {
    if (src.gamma) {
        for(let y = 0; y < src.height; y++){
            for(let x = 0; x < src.width; x++){
                let idx = src.width * y + x << 2;
                for(let i = 0; i < 3; i++){
                    let sample = src.data[idx + i] / 255;
                    sample = Math.pow(sample, 1 / 2.2 / src.gamma);
                    src.data[idx + i] = Math.round(sample * 255);
                }
            }
        }
        src.gamma = 0;
    }
};
PNG.prototype.adjustGamma = function() {
    PNG.adjustGamma(this);
};
}),
"[project]/node_modules/qrcode/node_modules/pngjs/lib/sync-inflate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let assert = __turbopack_context__.r("[externals]/assert [external] (assert, cjs)").ok;
let zlib = __turbopack_context__.r("[externals]/zlib [external] (zlib, cjs)");
let util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
let kMaxLength = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)").kMaxLength;
function Inflate(opts) {
    if (!(this instanceof Inflate)) {
        return new Inflate(opts);
    }
    if (opts && opts.chunkSize < zlib.Z_MIN_CHUNK) {
        opts.chunkSize = zlib.Z_MIN_CHUNK;
    }
    zlib.Inflate.call(this, opts);
    // Node 8 --> 9 compatibility check
    this._offset = this._offset === undefined ? this._outOffset : this._offset;
    this._buffer = this._buffer || this._outBuffer;
    if (opts && opts.maxLength != null) {
        this._maxLength = opts.maxLength;
    }
}
function createInflate(opts) {
    return new Inflate(opts);
}
function _close(engine, callback) {
    if (callback) {
        process.nextTick(callback);
    }
    // Caller may invoke .close after a zlib error (which will null _handle).
    if (!engine._handle) {
        return;
    }
    engine._handle.close();
    engine._handle = null;
}
Inflate.prototype._processChunk = function(chunk, flushFlag, asyncCb) {
    if (typeof asyncCb === "function") {
        return zlib.Inflate._processChunk.call(this, chunk, flushFlag, asyncCb);
    }
    let self = this;
    let availInBefore = chunk && chunk.length;
    let availOutBefore = this._chunkSize - this._offset;
    let leftToInflate = this._maxLength;
    let inOff = 0;
    let buffers = [];
    let nread = 0;
    let error;
    this.on("error", function(err) {
        error = err;
    });
    function handleChunk(availInAfter, availOutAfter) {
        if (self._hadError) {
            return;
        }
        let have = availOutBefore - availOutAfter;
        assert(have >= 0, "have should not go down");
        if (have > 0) {
            let out = self._buffer.slice(self._offset, self._offset + have);
            self._offset += have;
            if (out.length > leftToInflate) {
                out = out.slice(0, leftToInflate);
            }
            buffers.push(out);
            nread += out.length;
            leftToInflate -= out.length;
            if (leftToInflate === 0) {
                return false;
            }
        }
        if (availOutAfter === 0 || self._offset >= self._chunkSize) {
            availOutBefore = self._chunkSize;
            self._offset = 0;
            self._buffer = Buffer.allocUnsafe(self._chunkSize);
        }
        if (availOutAfter === 0) {
            inOff += availInBefore - availInAfter;
            availInBefore = availInAfter;
            return true;
        }
        return false;
    }
    assert(this._handle, "zlib binding closed");
    let res;
    do {
        res = this._handle.writeSync(flushFlag, chunk, inOff, availInBefore, this._buffer, this._offset, availOutBefore); // out_len
        // Node 8 --> 9 compatibility check
        res = res || this._writeState;
    }while (!this._hadError && handleChunk(res[0], res[1]))
    if (this._hadError) {
        throw error;
    }
    if (nread >= kMaxLength) {
        _close(this);
        throw new RangeError("Cannot create final Buffer. It would be larger than 0x" + kMaxLength.toString(16) + " bytes");
    }
    let buf = Buffer.concat(buffers, nread);
    _close(this);
    return buf;
};
util.inherits(Inflate, zlib.Inflate);
function zlibBufferSync(engine, buffer) {
    if (typeof buffer === "string") {
        buffer = Buffer.from(buffer);
    }
    if (!(buffer instanceof Buffer)) {
        throw new TypeError("Not a string or buffer");
    }
    let flushFlag = engine._finishFlushFlag;
    if (flushFlag == null) {
        flushFlag = zlib.Z_FINISH;
    }
    return engine._processChunk(buffer, flushFlag);
}
function inflateSync(buffer, opts) {
    return zlibBufferSync(new Inflate(opts), buffer);
}
module.exports = exports = inflateSync;
exports.Inflate = Inflate;
exports.createInflate = createInflate;
exports.inflateSync = inflateSync;
}),
"[project]/node_modules/qrcode/node_modules/pngjs/lib/sync-reader.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let SyncReader = module.exports = function(buffer) {
    this._buffer = buffer;
    this._reads = [];
};
SyncReader.prototype.read = function(length, callback) {
    this._reads.push({
        length: Math.abs(length),
        allowLess: length < 0,
        func: callback
    });
};
SyncReader.prototype.process = function() {
    // as long as there is any data and read requests
    while(this._reads.length > 0 && this._buffer.length){
        let read = this._reads[0];
        if (this._buffer.length && (this._buffer.length >= read.length || read.allowLess)) {
            // ok there is any data so that we can satisfy this request
            this._reads.shift(); // == read
            let buf = this._buffer;
            this._buffer = buf.slice(read.length);
            read.func.call(this, buf.slice(0, read.length));
        } else {
            break;
        }
    }
    if (this._reads.length > 0) {
        return new Error("There are some read requests waitng on finished stream");
    }
    if (this._buffer.length > 0) {
        return new Error("unrecognised content at end of stream");
    }
};
}),
]})(),
"[project]/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/client/components/redirect-status-code.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/client/components/redirect-status-code.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/lib/fallback.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/fallback.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/lib/scheduler.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/scheduler.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/lib/url.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/url.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <locals>", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript) <locals>"));
}),
"[project]/node_modules/next/dist/esm/server/app-render/interop-default.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/interop-default.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/app-render/manifests-singleton.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/manifests-singleton.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/app-render/strip-flight-headers.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/strip-flight-headers.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/base-http/node.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/base-http/node.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/instrumentation/utils.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/instrumentation/utils.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/lib/is-non-html-sec-fetch-dest.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/is-non-html-sec-fetch-dest.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/lib/is-rsc-request.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/is-rsc-request.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/lib/postponed-request-body.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/postponed-request-body.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/lib/route-cache-key.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/route-cache-key.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/lib/server-action-request-meta.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/server-action-request-meta.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/lib/streaming-metadata.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/streaming-metadata.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/render-result.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/render-result.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/request-meta.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/request-meta.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/request/fallback-params.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/request/fallback-params.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/response-cache/index.js [app-rsc] (ecmascript, Next.js server utility) <locals>", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/response-cache/index.js [app-rsc] (ecmascript) <locals>"));
}),
"[project]/node_modules/next/dist/esm/server/response-cache/types.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/response-cache/types.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/route-modules/app-page/dev-render-context.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-modules/app-page/dev-render-context.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
}
}),
"[project]/node_modules/next/dist/esm/server/route-modules/app-page/parse-request-headers.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-modules/app-page/parse-request-headers.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/send-payload.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/send-payload.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/stream-utils/encoded-tags.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/stream-utils/encoded-tags.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/shared/lib/entry-constants.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/entry-constants.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/shared/lib/router/routes/app.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/routes/app.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/get-segment-param.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/get-segment-param.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript, Next.js server utility) <locals>", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript) <locals>"));
}),
"[project]/node_modules/next/dist/esm/shared/lib/size-limit.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/size-limit.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/qrcode/lib/browser.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const canPromise = __turbopack_context__.r("[project]/node_modules/qrcode/lib/can-promise.js [app-rsc] (ecmascript)");
const QRCode = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/qrcode.js [app-rsc] (ecmascript)");
const CanvasRenderer = __turbopack_context__.r("[project]/node_modules/qrcode/lib/renderer/canvas.js [app-rsc] (ecmascript)");
const SvgRenderer = __turbopack_context__.r("[project]/node_modules/qrcode/lib/renderer/svg-tag.js [app-rsc] (ecmascript)");
function renderCanvas(renderFunc, canvas, text, opts, cb) {
    const args = [].slice.call(arguments, 1);
    const argsNum = args.length;
    const isLastArgCb = typeof args[argsNum - 1] === 'function';
    if (!isLastArgCb && !canPromise()) {
        throw new Error('Callback required as last argument');
    }
    if (isLastArgCb) {
        if (argsNum < 2) {
            throw new Error('Too few arguments provided');
        }
        if (argsNum === 2) {
            cb = text;
            text = canvas;
            canvas = opts = undefined;
        } else if (argsNum === 3) {
            if (canvas.getContext && typeof cb === 'undefined') {
                cb = opts;
                opts = undefined;
            } else {
                cb = opts;
                opts = text;
                text = canvas;
                canvas = undefined;
            }
        }
    } else {
        if (argsNum < 1) {
            throw new Error('Too few arguments provided');
        }
        if (argsNum === 1) {
            text = canvas;
            canvas = opts = undefined;
        } else if (argsNum === 2 && !canvas.getContext) {
            opts = text;
            text = canvas;
            canvas = undefined;
        }
        return new Promise(function(resolve, reject) {
            try {
                const data = QRCode.create(text, opts);
                resolve(renderFunc(data, canvas, opts));
            } catch (e) {
                reject(e);
            }
        });
    }
    try {
        const data = QRCode.create(text, opts);
        cb(null, renderFunc(data, canvas, opts));
    } catch (e) {
        cb(e);
    }
}
exports.create = QRCode.create;
exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
// only svg for now.
exports.toString = renderCanvas.bind(null, function(data, _, opts) {
    return SvgRenderer.render(data, opts);
});
}),
"[project]/node_modules/qrcode/lib/can-promise.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157
module.exports = function() {
    return typeof Promise === 'function' && Promise.prototype && Promise.prototype.then;
};
}),
"[project]/node_modules/qrcode/lib/core/alignment-pattern.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */ const getSymbolSize = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/utils.js [app-rsc] (ecmascript)").getSymbolSize;
/**
 * Calculate the row/column coordinates of the center module of each alignment pattern
 * for the specified QR Code version.
 *
 * The alignment patterns are positioned symmetrically on either side of the diagonal
 * running from the top left corner of the symbol to the bottom right corner.
 *
 * Since positions are simmetrical only half of the coordinates are returned.
 * Each item of the array will represent in turn the x and y coordinate.
 * @see {@link getPositions}
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinate
 */ exports.getRowColCoords = function getRowColCoords(version) {
    if (version === 1) return [];
    const posCount = Math.floor(version / 7) + 2;
    const size = getSymbolSize(version);
    const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
    const positions = [
        size - 7
    ] // Last coord is always (size - 7)
    ;
    for(let i = 1; i < posCount - 1; i++){
        positions[i] = positions[i - 1] - intervals;
    }
    positions.push(6); // First coord is always 6
    return positions.reverse();
};
/**
 * Returns an array containing the positions of each alignment pattern.
 * Each array's element represent the center point of the pattern as (x, y) coordinates
 *
 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
 * and filtering out the items that overlaps with finder pattern
 *
 * @example
 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
 * The alignment patterns, therefore, are to be centered on (row, column)
 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
 * and are not therefore used for alignment patterns.
 *
 * let pos = getPositions(7)
 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */ exports.getPositions = function getPositions(version) {
    const coords = [];
    const pos = exports.getRowColCoords(version);
    const posLength = pos.length;
    for(let i = 0; i < posLength; i++){
        for(let j = 0; j < posLength; j++){
            // Skip if position is occupied by finder patterns
            if (i === 0 && j === 0 || i === 0 && j === posLength - 1 || i === posLength - 1 && j === 0) {
                continue;
            }
            coords.push([
                pos[i],
                pos[j]
            ]);
        }
    }
    return coords;
};
}),
"[project]/node_modules/qrcode/lib/core/alphanumeric-data.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Mode = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/mode.js [app-rsc] (ecmascript)");
/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */ const ALPHA_NUM_CHARS = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    ' ',
    '$',
    '%',
    '*',
    '+',
    '-',
    '.',
    '/',
    ':'
];
function AlphanumericData(data) {
    this.mode = Mode.ALPHANUMERIC;
    this.data = data;
}
AlphanumericData.getBitsLength = function getBitsLength(length) {
    return 11 * Math.floor(length / 2) + 6 * (length % 2);
};
AlphanumericData.prototype.getLength = function getLength() {
    return this.data.length;
};
AlphanumericData.prototype.getBitsLength = function getBitsLength() {
    return AlphanumericData.getBitsLength(this.data.length);
};
AlphanumericData.prototype.write = function write(bitBuffer) {
    let i;
    // Input data characters are divided into groups of two characters
    // and encoded as 11-bit binary codes.
    for(i = 0; i + 2 <= this.data.length; i += 2){
        // The character value of the first character is multiplied by 45
        let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
        // The character value of the second digit is added to the product
        value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
        // The sum is then stored as 11-bit binary number
        bitBuffer.put(value, 11);
    }
    // If the number of input data characters is not a multiple of two,
    // the character value of the final character is encoded as a 6-bit binary number.
    if (this.data.length % 2) {
        bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
    }
};
module.exports = AlphanumericData;
}),
"[project]/node_modules/qrcode/lib/core/bit-buffer.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

function BitBuffer() {
    this.buffer = [];
    this.length = 0;
}
BitBuffer.prototype = {
    get: function(index) {
        const bufIndex = Math.floor(index / 8);
        return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
    },
    put: function(num, length) {
        for(let i = 0; i < length; i++){
            this.putBit((num >>> length - i - 1 & 1) === 1);
        }
    },
    getLengthInBits: function() {
        return this.length;
    },
    putBit: function(bit) {
        const bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) {
            this.buffer.push(0);
        }
        if (bit) {
            this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
        }
        this.length++;
    }
};
module.exports = BitBuffer;
}),
"[project]/node_modules/qrcode/lib/core/bit-matrix.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */ function BitMatrix(size) {
    if (!size || size < 1) {
        throw new Error('BitMatrix size must be defined and greater than 0');
    }
    this.size = size;
    this.data = new Uint8Array(size * size);
    this.reservedBit = new Uint8Array(size * size);
}
/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */ BitMatrix.prototype.set = function(row, col, value, reserved) {
    const index = row * this.size + col;
    this.data[index] = value;
    if (reserved) this.reservedBit[index] = true;
};
/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */ BitMatrix.prototype.get = function(row, col) {
    return this.data[row * this.size + col];
};
/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */ BitMatrix.prototype.xor = function(row, col, value) {
    this.data[row * this.size + col] ^= value;
};
/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */ BitMatrix.prototype.isReserved = function(row, col) {
    return this.reservedBit[row * this.size + col];
};
module.exports = BitMatrix;
}),
"[project]/node_modules/qrcode/lib/core/byte-data.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Mode = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/mode.js [app-rsc] (ecmascript)");
function ByteData(data) {
    this.mode = Mode.BYTE;
    if (typeof data === 'string') {
        this.data = new TextEncoder().encode(data);
    } else {
        this.data = new Uint8Array(data);
    }
}
ByteData.getBitsLength = function getBitsLength(length) {
    return length * 8;
};
ByteData.prototype.getLength = function getLength() {
    return this.data.length;
};
ByteData.prototype.getBitsLength = function getBitsLength() {
    return ByteData.getBitsLength(this.data.length);
};
ByteData.prototype.write = function(bitBuffer) {
    for(let i = 0, l = this.data.length; i < l; i++){
        bitBuffer.put(this.data[i], 8);
    }
};
module.exports = ByteData;
}),
"[project]/node_modules/qrcode/lib/core/error-correction-code.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const ECLevel = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/error-correction-level.js [app-rsc] (ecmascript)");
const EC_BLOCKS_TABLE = [
    // L  M  Q  H
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    1,
    2,
    2,
    4,
    1,
    2,
    4,
    4,
    2,
    4,
    4,
    4,
    2,
    4,
    6,
    5,
    2,
    4,
    6,
    6,
    2,
    5,
    8,
    8,
    4,
    5,
    8,
    8,
    4,
    5,
    8,
    11,
    4,
    8,
    10,
    11,
    4,
    9,
    12,
    16,
    4,
    9,
    16,
    16,
    6,
    10,
    12,
    18,
    6,
    10,
    17,
    16,
    6,
    11,
    16,
    19,
    6,
    13,
    18,
    21,
    7,
    14,
    21,
    25,
    8,
    16,
    20,
    25,
    8,
    17,
    23,
    25,
    9,
    17,
    23,
    34,
    9,
    18,
    25,
    30,
    10,
    20,
    27,
    32,
    12,
    21,
    29,
    35,
    12,
    23,
    34,
    37,
    12,
    25,
    34,
    40,
    13,
    26,
    35,
    42,
    14,
    28,
    38,
    45,
    15,
    29,
    40,
    48,
    16,
    31,
    43,
    51,
    17,
    33,
    45,
    54,
    18,
    35,
    48,
    57,
    19,
    37,
    51,
    60,
    19,
    38,
    53,
    63,
    20,
    40,
    56,
    66,
    21,
    43,
    59,
    70,
    22,
    45,
    62,
    74,
    24,
    47,
    65,
    77,
    25,
    49,
    68,
    81
];
const EC_CODEWORDS_TABLE = [
    // L  M  Q  H
    7,
    10,
    13,
    17,
    10,
    16,
    22,
    28,
    15,
    26,
    36,
    44,
    20,
    36,
    52,
    64,
    26,
    48,
    72,
    88,
    36,
    64,
    96,
    112,
    40,
    72,
    108,
    130,
    48,
    88,
    132,
    156,
    60,
    110,
    160,
    192,
    72,
    130,
    192,
    224,
    80,
    150,
    224,
    264,
    96,
    176,
    260,
    308,
    104,
    198,
    288,
    352,
    120,
    216,
    320,
    384,
    132,
    240,
    360,
    432,
    144,
    280,
    408,
    480,
    168,
    308,
    448,
    532,
    180,
    338,
    504,
    588,
    196,
    364,
    546,
    650,
    224,
    416,
    600,
    700,
    224,
    442,
    644,
    750,
    252,
    476,
    690,
    816,
    270,
    504,
    750,
    900,
    300,
    560,
    810,
    960,
    312,
    588,
    870,
    1050,
    336,
    644,
    952,
    1110,
    360,
    700,
    1020,
    1200,
    390,
    728,
    1050,
    1260,
    420,
    784,
    1140,
    1350,
    450,
    812,
    1200,
    1440,
    480,
    868,
    1290,
    1530,
    510,
    924,
    1350,
    1620,
    540,
    980,
    1440,
    1710,
    570,
    1036,
    1530,
    1800,
    570,
    1064,
    1590,
    1890,
    600,
    1120,
    1680,
    1980,
    630,
    1204,
    1770,
    2100,
    660,
    1260,
    1860,
    2220,
    720,
    1316,
    1950,
    2310,
    750,
    1372,
    2040,
    2430
];
/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */ exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
    switch(errorCorrectionLevel){
        case ECLevel.L:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
        default:
            return undefined;
    }
};
/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */ exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
    switch(errorCorrectionLevel){
        case ECLevel.L:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
        default:
            return undefined;
    }
};
}),
"[project]/node_modules/qrcode/lib/core/error-correction-level.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

exports.L = {
    bit: 1
};
exports.M = {
    bit: 0
};
exports.Q = {
    bit: 3
};
exports.H = {
    bit: 2
};
function fromString(string) {
    if (typeof string !== 'string') {
        throw new Error('Param is not a string');
    }
    const lcStr = string.toLowerCase();
    switch(lcStr){
        case 'l':
        case 'low':
            return exports.L;
        case 'm':
        case 'medium':
            return exports.M;
        case 'q':
        case 'quartile':
            return exports.Q;
        case 'h':
        case 'high':
            return exports.H;
        default:
            throw new Error('Unknown EC Level: ' + string);
    }
}
exports.isValid = function isValid(level) {
    return level && typeof level.bit !== 'undefined' && level.bit >= 0 && level.bit < 4;
};
exports.from = function from(value, defaultValue) {
    if (exports.isValid(value)) {
        return value;
    }
    try {
        return fromString(value);
    } catch (e) {
        return defaultValue;
    }
};
}),
"[project]/node_modules/qrcode/lib/core/finder-pattern.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const getSymbolSize = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/utils.js [app-rsc] (ecmascript)").getSymbolSize;
const FINDER_PATTERN_SIZE = 7;
/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */ exports.getPositions = function getPositions(version) {
    const size = getSymbolSize(version);
    return [
        // top-left
        [
            0,
            0
        ],
        // top-right
        [
            size - FINDER_PATTERN_SIZE,
            0
        ],
        // bottom-left
        [
            0,
            size - FINDER_PATTERN_SIZE
        ]
    ];
};
}),
"[project]/node_modules/qrcode/lib/core/format-info.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Utils = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/utils.js [app-rsc] (ecmascript)");
const G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
const G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
const G15_BCH = Utils.getBCHDigit(G15);
/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */ exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
    const data = errorCorrectionLevel.bit << 3 | mask;
    let d = data << 10;
    while(Utils.getBCHDigit(d) - G15_BCH >= 0){
        d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
    }
    // xor final data with mask pattern in order to ensure that
    // no combination of Error Correction Level and data mask pattern
    // will result in an all-zero data string
    return (data << 10 | d) ^ G15_MASK;
};
}),
"[project]/node_modules/qrcode/lib/core/galois-field.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const EXP_TABLE = new Uint8Array(512);
const LOG_TABLE = new Uint8Array(256);
(function initTables() {
    let x = 1;
    for(let i = 0; i < 255; i++){
        EXP_TABLE[i] = x;
        LOG_TABLE[x] = i;
        x <<= 1; // multiply by 2
        // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
        // This means that when a number is 256 or larger, it should be XORed with 0x11D.
        if (x & 0x100) {
            x ^= 0x11D;
        }
    }
    // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
    // stay inside the bounds (because we will mainly use this table for the multiplication of
    // two GF numbers, no more).
    // @see {@link mul}
    for(let i = 255; i < 512; i++){
        EXP_TABLE[i] = EXP_TABLE[i - 255];
    }
})();
/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */ exports.log = function log(n) {
    if (n < 1) throw new Error('log(' + n + ')');
    return LOG_TABLE[n];
};
/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */ exports.exp = function exp(n) {
    return EXP_TABLE[n];
};
/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */ exports.mul = function mul(x, y) {
    if (x === 0 || y === 0) return 0;
    // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
    // @see {@link initTables}
    return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
};
}),
"[project]/node_modules/qrcode/lib/core/kanji-data.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Mode = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/mode.js [app-rsc] (ecmascript)");
const Utils = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/utils.js [app-rsc] (ecmascript)");
function KanjiData(data) {
    this.mode = Mode.KANJI;
    this.data = data;
}
KanjiData.getBitsLength = function getBitsLength(length) {
    return length * 13;
};
KanjiData.prototype.getLength = function getLength() {
    return this.data.length;
};
KanjiData.prototype.getBitsLength = function getBitsLength() {
    return KanjiData.getBitsLength(this.data.length);
};
KanjiData.prototype.write = function(bitBuffer) {
    let i;
    // In the Shift JIS system, Kanji characters are represented by a two byte combination.
    // These byte values are shifted from the JIS X 0208 values.
    // JIS X 0208 gives details of the shift coded representation.
    for(i = 0; i < this.data.length; i++){
        let value = Utils.toSJIS(this.data[i]);
        // For characters with Shift JIS values from 0x8140 to 0x9FFC:
        if (value >= 0x8140 && value <= 0x9FFC) {
            // Subtract 0x8140 from Shift JIS value
            value -= 0x8140;
        // For characters with Shift JIS values from 0xE040 to 0xEBBF
        } else if (value >= 0xE040 && value <= 0xEBBF) {
            // Subtract 0xC140 from Shift JIS value
            value -= 0xC140;
        } else {
            throw new Error('Invalid SJIS character: ' + this.data[i] + '\n' + 'Make sure your charset is UTF-8');
        }
        // Multiply most significant byte of result by 0xC0
        // and add least significant byte to product
        value = (value >>> 8 & 0xff) * 0xC0 + (value & 0xff);
        // Convert result to a 13-bit binary string
        bitBuffer.put(value, 13);
    }
};
module.exports = KanjiData;
}),
"[project]/node_modules/qrcode/lib/core/mask-pattern.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Data mask pattern reference
 * @type {Object}
 */ exports.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
};
/**
 * Weighted penalty scores for the undesirable features
 * @type {Object}
 */ const PenaltyScores = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
};
/**
 * Check if mask pattern value is valid
 *
 * @param  {Number}  mask    Mask pattern
 * @return {Boolean}         true if valid, false otherwise
 */ exports.isValid = function isValid(mask) {
    return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7;
};
/**
 * Returns mask pattern from a value.
 * If value is not valid, returns undefined
 *
 * @param  {Number|String} value        Mask pattern value
 * @return {Number}                     Valid mask pattern or undefined
 */ exports.from = function from(value) {
    return exports.isValid(value) ? parseInt(value, 10) : undefined;
};
/**
* Find adjacent modules in row/column with the same color
* and assign a penalty value.
*
* Points: N1 + i
* i is the amount by which the number of adjacent modules of the same color exceeds 5
*/ exports.getPenaltyN1 = function getPenaltyN1(data) {
    const size = data.size;
    let points = 0;
    let sameCountCol = 0;
    let sameCountRow = 0;
    let lastCol = null;
    let lastRow = null;
    for(let row = 0; row < size; row++){
        sameCountCol = sameCountRow = 0;
        lastCol = lastRow = null;
        for(let col = 0; col < size; col++){
            let module = data.get(row, col);
            if (module === lastCol) {
                sameCountCol++;
            } else {
                if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
                lastCol = module;
                sameCountCol = 1;
            }
            module = data.get(col, row);
            if (module === lastRow) {
                sameCountRow++;
            } else {
                if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
                lastRow = module;
                sameCountRow = 1;
            }
        }
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
    }
    return points;
};
/**
 * Find 2x2 blocks with the same color and assign a penalty value
 *
 * Points: N2 * (m - 1) * (n - 1)
 */ exports.getPenaltyN2 = function getPenaltyN2(data) {
    const size = data.size;
    let points = 0;
    for(let row = 0; row < size - 1; row++){
        for(let col = 0; col < size - 1; col++){
            const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
            if (last === 4 || last === 0) points++;
        }
    }
    return points * PenaltyScores.N2;
};
/**
 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
 * preceded or followed by light area 4 modules wide
 *
 * Points: N3 * number of pattern found
 */ exports.getPenaltyN3 = function getPenaltyN3(data) {
    const size = data.size;
    let points = 0;
    let bitsCol = 0;
    let bitsRow = 0;
    for(let row = 0; row < size; row++){
        bitsCol = bitsRow = 0;
        for(let col = 0; col < size; col++){
            bitsCol = bitsCol << 1 & 0x7FF | data.get(row, col);
            if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++;
            bitsRow = bitsRow << 1 & 0x7FF | data.get(col, row);
            if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++;
        }
    }
    return points * PenaltyScores.N3;
};
/**
 * Calculate proportion of dark modules in entire symbol
 *
 * Points: N4 * k
 *
 * k is the rating of the deviation of the proportion of dark modules
 * in the symbol from 50% in steps of 5%
 */ exports.getPenaltyN4 = function getPenaltyN4(data) {
    let darkCount = 0;
    const modulesCount = data.data.length;
    for(let i = 0; i < modulesCount; i++)darkCount += data.data[i];
    const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
    return k * PenaltyScores.N4;
};
/**
 * Return mask value at given position
 *
 * @param  {Number} maskPattern Pattern reference value
 * @param  {Number} i           Row
 * @param  {Number} j           Column
 * @return {Boolean}            Mask value
 */ function getMaskAt(maskPattern, i, j) {
    switch(maskPattern){
        case exports.Patterns.PATTERN000:
            return (i + j) % 2 === 0;
        case exports.Patterns.PATTERN001:
            return i % 2 === 0;
        case exports.Patterns.PATTERN010:
            return j % 3 === 0;
        case exports.Patterns.PATTERN011:
            return (i + j) % 3 === 0;
        case exports.Patterns.PATTERN100:
            return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
        case exports.Patterns.PATTERN101:
            return i * j % 2 + i * j % 3 === 0;
        case exports.Patterns.PATTERN110:
            return (i * j % 2 + i * j % 3) % 2 === 0;
        case exports.Patterns.PATTERN111:
            return (i * j % 3 + (i + j) % 2) % 2 === 0;
        default:
            throw new Error('bad maskPattern:' + maskPattern);
    }
}
/**
 * Apply a mask pattern to a BitMatrix
 *
 * @param  {Number}    pattern Pattern reference number
 * @param  {BitMatrix} data    BitMatrix data
 */ exports.applyMask = function applyMask(pattern, data) {
    const size = data.size;
    for(let col = 0; col < size; col++){
        for(let row = 0; row < size; row++){
            if (data.isReserved(row, col)) continue;
            data.xor(row, col, getMaskAt(pattern, row, col));
        }
    }
};
/**
 * Returns the best mask pattern for data
 *
 * @param  {BitMatrix} data
 * @return {Number} Mask pattern reference number
 */ exports.getBestMask = function getBestMask(data, setupFormatFunc) {
    const numPatterns = Object.keys(exports.Patterns).length;
    let bestPattern = 0;
    let lowerPenalty = Infinity;
    for(let p = 0; p < numPatterns; p++){
        setupFormatFunc(p);
        exports.applyMask(p, data);
        // Calculate penalty
        const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
        // Undo previously applied mask
        exports.applyMask(p, data);
        if (penalty < lowerPenalty) {
            lowerPenalty = penalty;
            bestPattern = p;
        }
    }
    return bestPattern;
};
}),
"[project]/node_modules/qrcode/lib/core/mode.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const VersionCheck = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/version-check.js [app-rsc] (ecmascript)");
const Regex = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/regex.js [app-rsc] (ecmascript)");
/**
 * Numeric mode encodes data from the decimal digit set (0 - 9)
 * (byte values 30HEX to 39HEX).
 * Normally, 3 data characters are represented by 10 bits.
 *
 * @type {Object}
 */ exports.NUMERIC = {
    id: 'Numeric',
    bit: 1 << 0,
    ccBits: [
        10,
        12,
        14
    ]
};
/**
 * Alphanumeric mode encodes data from a set of 45 characters,
 * i.e. 10 numeric digits (0 - 9),
 *      26 alphabetic characters (A - Z),
 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
 * Normally, two input characters are represented by 11 bits.
 *
 * @type {Object}
 */ exports.ALPHANUMERIC = {
    id: 'Alphanumeric',
    bit: 1 << 1,
    ccBits: [
        9,
        11,
        13
    ]
};
/**
 * In byte mode, data is encoded at 8 bits per character.
 *
 * @type {Object}
 */ exports.BYTE = {
    id: 'Byte',
    bit: 1 << 2,
    ccBits: [
        8,
        16,
        16
    ]
};
/**
 * The Kanji mode efficiently encodes Kanji characters in accordance with
 * the Shift JIS system based on JIS X 0208.
 * The Shift JIS values are shifted from the JIS X 0208 values.
 * JIS X 0208 gives details of the shift coded representation.
 * Each two-byte character value is compacted to a 13-bit binary codeword.
 *
 * @type {Object}
 */ exports.KANJI = {
    id: 'Kanji',
    bit: 1 << 3,
    ccBits: [
        8,
        10,
        12
    ]
};
/**
 * Mixed mode will contain a sequences of data in a combination of any of
 * the modes described above
 *
 * @type {Object}
 */ exports.MIXED = {
    bit: -1
};
/**
 * Returns the number of bits needed to store the data length
 * according to QR Code specifications.
 *
 * @param  {Mode}   mode    Data mode
 * @param  {Number} version QR Code version
 * @return {Number}         Number of bits
 */ exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
    if (!mode.ccBits) throw new Error('Invalid mode: ' + mode);
    if (!VersionCheck.isValid(version)) {
        throw new Error('Invalid version: ' + version);
    }
    if (version >= 1 && version < 10) return mode.ccBits[0];
    else if (version < 27) return mode.ccBits[1];
    return mode.ccBits[2];
};
/**
 * Returns the most efficient mode to store the specified data
 *
 * @param  {String} dataStr Input data string
 * @return {Mode}           Best mode
 */ exports.getBestModeForData = function getBestModeForData(dataStr) {
    if (Regex.testNumeric(dataStr)) return exports.NUMERIC;
    else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;
    else if (Regex.testKanji(dataStr)) return exports.KANJI;
    else return exports.BYTE;
};
/**
 * Return mode name as string
 *
 * @param {Mode} mode Mode object
 * @returns {String}  Mode name
 */ exports.toString = function toString(mode) {
    if (mode && mode.id) return mode.id;
    throw new Error('Invalid mode');
};
/**
 * Check if input param is a valid mode object
 *
 * @param   {Mode}    mode Mode object
 * @returns {Boolean} True if valid mode, false otherwise
 */ exports.isValid = function isValid(mode) {
    return mode && mode.bit && mode.ccBits;
};
/**
 * Get mode object from its name
 *
 * @param   {String} string Mode name
 * @returns {Mode}          Mode object
 */ function fromString(string) {
    if (typeof string !== 'string') {
        throw new Error('Param is not a string');
    }
    const lcStr = string.toLowerCase();
    switch(lcStr){
        case 'numeric':
            return exports.NUMERIC;
        case 'alphanumeric':
            return exports.ALPHANUMERIC;
        case 'kanji':
            return exports.KANJI;
        case 'byte':
            return exports.BYTE;
        default:
            throw new Error('Unknown mode: ' + string);
    }
}
/**
 * Returns mode from a value.
 * If value is not a valid mode, returns defaultValue
 *
 * @param  {Mode|String} value        Encoding mode
 * @param  {Mode}        defaultValue Fallback value
 * @return {Mode}                     Encoding mode
 */ exports.from = function from(value, defaultValue) {
    if (exports.isValid(value)) {
        return value;
    }
    try {
        return fromString(value);
    } catch (e) {
        return defaultValue;
    }
};
}),
"[project]/node_modules/qrcode/lib/core/numeric-data.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Mode = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/mode.js [app-rsc] (ecmascript)");
function NumericData(data) {
    this.mode = Mode.NUMERIC;
    this.data = data.toString();
}
NumericData.getBitsLength = function getBitsLength(length) {
    return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
};
NumericData.prototype.getLength = function getLength() {
    return this.data.length;
};
NumericData.prototype.getBitsLength = function getBitsLength() {
    return NumericData.getBitsLength(this.data.length);
};
NumericData.prototype.write = function write(bitBuffer) {
    let i, group, value;
    // The input data string is divided into groups of three digits,
    // and each group is converted to its 10-bit binary equivalent.
    for(i = 0; i + 3 <= this.data.length; i += 3){
        group = this.data.substr(i, 3);
        value = parseInt(group, 10);
        bitBuffer.put(value, 10);
    }
    // If the number of input digits is not an exact multiple of three,
    // the final one or two digits are converted to 4 or 7 bits respectively.
    const remainingNum = this.data.length - i;
    if (remainingNum > 0) {
        group = this.data.substr(i);
        value = parseInt(group, 10);
        bitBuffer.put(value, remainingNum * 3 + 1);
    }
};
module.exports = NumericData;
}),
"[project]/node_modules/qrcode/lib/core/polynomial.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const GF = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/galois-field.js [app-rsc] (ecmascript)");
/**
 * Multiplies two polynomials inside Galois Field
 *
 * @param  {Uint8Array} p1 Polynomial
 * @param  {Uint8Array} p2 Polynomial
 * @return {Uint8Array}    Product of p1 and p2
 */ exports.mul = function mul(p1, p2) {
    const coeff = new Uint8Array(p1.length + p2.length - 1);
    for(let i = 0; i < p1.length; i++){
        for(let j = 0; j < p2.length; j++){
            coeff[i + j] ^= GF.mul(p1[i], p2[j]);
        }
    }
    return coeff;
};
/**
 * Calculate the remainder of polynomials division
 *
 * @param  {Uint8Array} divident Polynomial
 * @param  {Uint8Array} divisor  Polynomial
 * @return {Uint8Array}          Remainder
 */ exports.mod = function mod(divident, divisor) {
    let result = new Uint8Array(divident);
    while(result.length - divisor.length >= 0){
        const coeff = result[0];
        for(let i = 0; i < divisor.length; i++){
            result[i] ^= GF.mul(divisor[i], coeff);
        }
        // remove all zeros from buffer head
        let offset = 0;
        while(offset < result.length && result[offset] === 0)offset++;
        result = result.slice(offset);
    }
    return result;
};
/**
 * Generate an irreducible generator polynomial of specified degree
 * (used by Reed-Solomon encoder)
 *
 * @param  {Number} degree Degree of the generator polynomial
 * @return {Uint8Array}    Buffer containing polynomial coefficients
 */ exports.generateECPolynomial = function generateECPolynomial(degree) {
    let poly = new Uint8Array([
        1
    ]);
    for(let i = 0; i < degree; i++){
        poly = exports.mul(poly, new Uint8Array([
            1,
            GF.exp(i)
        ]));
    }
    return poly;
};
}),
"[project]/node_modules/qrcode/lib/core/qrcode.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Utils = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/utils.js [app-rsc] (ecmascript)");
const ECLevel = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/error-correction-level.js [app-rsc] (ecmascript)");
const BitBuffer = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/bit-buffer.js [app-rsc] (ecmascript)");
const BitMatrix = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/bit-matrix.js [app-rsc] (ecmascript)");
const AlignmentPattern = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/alignment-pattern.js [app-rsc] (ecmascript)");
const FinderPattern = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/finder-pattern.js [app-rsc] (ecmascript)");
const MaskPattern = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/mask-pattern.js [app-rsc] (ecmascript)");
const ECCode = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/error-correction-code.js [app-rsc] (ecmascript)");
const ReedSolomonEncoder = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/reed-solomon-encoder.js [app-rsc] (ecmascript)");
const Version = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/version.js [app-rsc] (ecmascript)");
const FormatInfo = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/format-info.js [app-rsc] (ecmascript)");
const Mode = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/mode.js [app-rsc] (ecmascript)");
const Segments = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/segments.js [app-rsc] (ecmascript)");
/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/ /**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */ function setupFinderPattern(matrix, version) {
    const size = matrix.size;
    const pos = FinderPattern.getPositions(version);
    for(let i = 0; i < pos.length; i++){
        const row = pos[i][0];
        const col = pos[i][1];
        for(let r = -1; r <= 7; r++){
            if (row + r <= -1 || size <= row + r) continue;
            for(let c = -1; c <= 7; c++){
                if (col + c <= -1 || size <= col + c) continue;
                if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) {
                    matrix.set(row + r, col + c, true, true);
                } else {
                    matrix.set(row + r, col + c, false, true);
                }
            }
        }
    }
}
/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */ function setupTimingPattern(matrix) {
    const size = matrix.size;
    for(let r = 8; r < size - 8; r++){
        const value = r % 2 === 0;
        matrix.set(r, 6, value, true);
        matrix.set(6, r, value, true);
    }
}
/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */ function setupAlignmentPattern(matrix, version) {
    const pos = AlignmentPattern.getPositions(version);
    for(let i = 0; i < pos.length; i++){
        const row = pos[i][0];
        const col = pos[i][1];
        for(let r = -2; r <= 2; r++){
            for(let c = -2; c <= 2; c++){
                if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) {
                    matrix.set(row + r, col + c, true, true);
                } else {
                    matrix.set(row + r, col + c, false, true);
                }
            }
        }
    }
}
/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */ function setupVersionInfo(matrix, version) {
    const size = matrix.size;
    const bits = Version.getEncodedBits(version);
    let row, col, mod;
    for(let i = 0; i < 18; i++){
        row = Math.floor(i / 3);
        col = i % 3 + size - 8 - 3;
        mod = (bits >> i & 1) === 1;
        matrix.set(row, col, mod, true);
        matrix.set(col, row, mod, true);
    }
}
/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */ function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
    const size = matrix.size;
    const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
    let i, mod;
    for(i = 0; i < 15; i++){
        mod = (bits >> i & 1) === 1;
        // vertical
        if (i < 6) {
            matrix.set(i, 8, mod, true);
        } else if (i < 8) {
            matrix.set(i + 1, 8, mod, true);
        } else {
            matrix.set(size - 15 + i, 8, mod, true);
        }
        // horizontal
        if (i < 8) {
            matrix.set(8, size - i - 1, mod, true);
        } else if (i < 9) {
            matrix.set(8, 15 - i - 1 + 1, mod, true);
        } else {
            matrix.set(8, 15 - i - 1, mod, true);
        }
    }
    // fixed module
    matrix.set(size - 8, 8, 1, true);
}
/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix}  matrix Modules matrix
 * @param  {Uint8Array} data   Data codewords
 */ function setupData(matrix, data) {
    const size = matrix.size;
    let inc = -1;
    let row = size - 1;
    let bitIndex = 7;
    let byteIndex = 0;
    for(let col = size - 1; col > 0; col -= 2){
        if (col === 6) col--;
        while(true){
            for(let c = 0; c < 2; c++){
                if (!matrix.isReserved(row, col - c)) {
                    let dark = false;
                    if (byteIndex < data.length) {
                        dark = (data[byteIndex] >>> bitIndex & 1) === 1;
                    }
                    matrix.set(row, col - c, dark);
                    bitIndex--;
                    if (bitIndex === -1) {
                        byteIndex++;
                        bitIndex = 7;
                    }
                }
            }
            row += inc;
            if (row < 0 || size <= row) {
                row -= inc;
                inc = -inc;
                break;
            }
        }
    }
}
/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Uint8Array}                    Buffer containing encoded codewords
 */ function createData(version, errorCorrectionLevel, segments) {
    // Prepare data buffer
    const buffer = new BitBuffer();
    segments.forEach(function(data) {
        // prefix data with mode indicator (4 bits)
        buffer.put(data.mode.bit, 4);
        // Prefix data with character count indicator.
        // The character count indicator is a string of bits that represents the
        // number of characters that are being encoded.
        // The character count indicator must be placed after the mode indicator
        // and must be a certain number of bits long, depending on the QR version
        // and data mode
        // @see {@link Mode.getCharCountIndicator}.
        buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));
        // add binary data sequence to buffer
        data.write(buffer);
    });
    // Calculate required number of bits
    const totalCodewords = Utils.getSymbolTotalCodewords(version);
    const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
    const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
    // Add a terminator.
    // If the bit string is shorter than the total number of required bits,
    // a terminator of up to four 0s must be added to the right side of the string.
    // If the bit string is more than four bits shorter than the required number of bits,
    // add four 0s to the end.
    if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
        buffer.put(0, 4);
    }
    // If the bit string is fewer than four bits shorter, add only the number of 0s that
    // are needed to reach the required number of bits.
    // After adding the terminator, if the number of bits in the string is not a multiple of 8,
    // pad the string on the right with 0s to make the string's length a multiple of 8.
    while(buffer.getLengthInBits() % 8 !== 0){
        buffer.putBit(0);
    }
    // Add pad bytes if the string is still shorter than the total number of required bits.
    // Extend the buffer to fill the data capacity of the symbol corresponding to
    // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
    // and 00010001 (0x11) alternately.
    const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
    for(let i = 0; i < remainingByte; i++){
        buffer.put(i % 2 ? 0x11 : 0xEC, 8);
    }
    return createCodewords(buffer, version, errorCorrectionLevel);
}
/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Uint8Array}                     Buffer containing encoded codewords
 */ function createCodewords(bitBuffer, version, errorCorrectionLevel) {
    // Total codewords for this QR code version (Data + Error correction)
    const totalCodewords = Utils.getSymbolTotalCodewords(version);
    // Total number of error correction codewords
    const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
    // Total number of data codewords
    const dataTotalCodewords = totalCodewords - ecTotalCodewords;
    // Total number of blocks
    const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);
    // Calculate how many blocks each group should contain
    const blocksInGroup2 = totalCodewords % ecTotalBlocks;
    const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
    const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
    const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
    const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
    // Number of EC codewords is the same for both groups
    const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
    // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
    const rs = new ReedSolomonEncoder(ecCount);
    let offset = 0;
    const dcData = new Array(ecTotalBlocks);
    const ecData = new Array(ecTotalBlocks);
    let maxDataSize = 0;
    const buffer = new Uint8Array(bitBuffer.buffer);
    // Divide the buffer into the required number of blocks
    for(let b = 0; b < ecTotalBlocks; b++){
        const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
        // extract a block of data from buffer
        dcData[b] = buffer.slice(offset, offset + dataSize);
        // Calculate EC codewords for this data block
        ecData[b] = rs.encode(dcData[b]);
        offset += dataSize;
        maxDataSize = Math.max(maxDataSize, dataSize);
    }
    // Create final data
    // Interleave the data and error correction codewords from each block
    const data = new Uint8Array(totalCodewords);
    let index = 0;
    let i, r;
    // Add data codewords
    for(i = 0; i < maxDataSize; i++){
        for(r = 0; r < ecTotalBlocks; r++){
            if (i < dcData[r].length) {
                data[index++] = dcData[r][i];
            }
        }
    }
    // Apped EC codewords
    for(i = 0; i < ecCount; i++){
        for(r = 0; r < ecTotalBlocks; r++){
            data[index++] = ecData[r][i];
        }
    }
    return data;
}
/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */ function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
    let segments;
    if (Array.isArray(data)) {
        segments = Segments.fromArray(data);
    } else if (typeof data === 'string') {
        let estimatedVersion = version;
        if (!estimatedVersion) {
            const rawSegments = Segments.rawSplit(data);
            // Estimate best version that can contain raw splitted segments
            estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
        }
        // Build optimized segments
        // If estimated version is undefined, try with the highest version
        segments = Segments.fromString(data, estimatedVersion || 40);
    } else {
        throw new Error('Invalid data');
    }
    // Get the min version that can contain data
    const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);
    // If no version is found, data cannot be stored
    if (!bestVersion) {
        throw new Error('The amount of data is too big to be stored in a QR Code');
    }
    // If not specified, use min version as default
    if (!version) {
        version = bestVersion;
    // Check if the specified version can contain the data
    } else if (version < bestVersion) {
        throw new Error('\n' + 'The chosen QR Code version cannot contain this amount of data.\n' + 'Minimum version required to store current data is: ' + bestVersion + '.\n');
    }
    const dataBits = createData(version, errorCorrectionLevel, segments);
    // Allocate matrix buffer
    const moduleCount = Utils.getSymbolSize(version);
    const modules = new BitMatrix(moduleCount);
    // Add function modules
    setupFinderPattern(modules, version);
    setupTimingPattern(modules);
    setupAlignmentPattern(modules, version);
    // Add temporary dummy bits for format info just to set them as reserved.
    // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
    // since the masking operation must be performed only on the encoding region.
    // These blocks will be replaced with correct values later in code.
    setupFormatInfo(modules, errorCorrectionLevel, 0);
    if (version >= 7) {
        setupVersionInfo(modules, version);
    }
    // Add data codewords
    setupData(modules, dataBits);
    if (isNaN(maskPattern)) {
        // Find best mask pattern
        maskPattern = MaskPattern.getBestMask(modules, setupFormatInfo.bind(null, modules, errorCorrectionLevel));
    }
    // Apply mask pattern
    MaskPattern.applyMask(maskPattern, modules);
    // Replace format info bits with correct values
    setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
    return {
        modules: modules,
        version: version,
        errorCorrectionLevel: errorCorrectionLevel,
        maskPattern: maskPattern,
        segments: segments
    };
}
/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */ exports.create = function create(data, options) {
    if (typeof data === 'undefined' || data === '') {
        throw new Error('No input text');
    }
    let errorCorrectionLevel = ECLevel.M;
    let version;
    let mask;
    if (typeof options !== 'undefined') {
        // Use higher error correction level as default
        errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
        version = Version.from(options.version);
        mask = MaskPattern.from(options.maskPattern);
        if (options.toSJISFunc) {
            Utils.setToSJISFunction(options.toSJISFunc);
        }
    }
    return createSymbol(data, version, errorCorrectionLevel, mask);
};
}),
"[project]/node_modules/qrcode/lib/core/reed-solomon-encoder.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Polynomial = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/polynomial.js [app-rsc] (ecmascript)");
function ReedSolomonEncoder(degree) {
    this.genPoly = undefined;
    this.degree = degree;
    if (this.degree) this.initialize(this.degree);
}
/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */ ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
    // create an irreducible generator polynomial
    this.degree = degree;
    this.genPoly = Polynomial.generateECPolynomial(this.degree);
};
/**
 * Encodes a chunk of data
 *
 * @param  {Uint8Array} data Buffer containing input data
 * @return {Uint8Array}      Buffer containing encoded data
 */ ReedSolomonEncoder.prototype.encode = function encode(data) {
    if (!this.genPoly) {
        throw new Error('Encoder not initialized');
    }
    // Calculate EC for this data block
    // extends data size to data+genPoly size
    const paddedData = new Uint8Array(data.length + this.degree);
    paddedData.set(data);
    // The error correction codewords are the remainder after dividing the data codewords
    // by a generator polynomial
    const remainder = Polynomial.mod(paddedData, this.genPoly);
    // return EC data blocks (last n byte, where n is the degree of genPoly)
    // If coefficients number in remainder are less than genPoly degree,
    // pad with 0s to the left to reach the needed number of coefficients
    const start = this.degree - remainder.length;
    if (start > 0) {
        const buff = new Uint8Array(this.degree);
        buff.set(remainder, start);
        return buff;
    }
    return remainder;
};
module.exports = ReedSolomonEncoder;
}),
"[project]/node_modules/qrcode/lib/core/regex.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const numeric = '[0-9]+';
const alphanumeric = '[A-Z $%*+\\-./:]+';
let kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' + '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' + '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' + '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+';
kanji = kanji.replace(/u/g, '\\u');
const byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+';
exports.KANJI = new RegExp(kanji, 'g');
exports.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g');
exports.BYTE = new RegExp(byte, 'g');
exports.NUMERIC = new RegExp(numeric, 'g');
exports.ALPHANUMERIC = new RegExp(alphanumeric, 'g');
const TEST_KANJI = new RegExp('^' + kanji + '$');
const TEST_NUMERIC = new RegExp('^' + numeric + '$');
const TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$');
exports.testKanji = function testKanji(str) {
    return TEST_KANJI.test(str);
};
exports.testNumeric = function testNumeric(str) {
    return TEST_NUMERIC.test(str);
};
exports.testAlphanumeric = function testAlphanumeric(str) {
    return TEST_ALPHANUMERIC.test(str);
};
}),
"[project]/node_modules/qrcode/lib/core/segments.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Mode = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/mode.js [app-rsc] (ecmascript)");
const NumericData = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/numeric-data.js [app-rsc] (ecmascript)");
const AlphanumericData = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/alphanumeric-data.js [app-rsc] (ecmascript)");
const ByteData = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/byte-data.js [app-rsc] (ecmascript)");
const KanjiData = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/kanji-data.js [app-rsc] (ecmascript)");
const Regex = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/regex.js [app-rsc] (ecmascript)");
const Utils = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/utils.js [app-rsc] (ecmascript)");
const dijkstra = __turbopack_context__.r("[project]/node_modules/dijkstrajs/dijkstra.js [app-rsc] (ecmascript)");
/**
 * Returns UTF8 byte length
 *
 * @param  {String} str Input string
 * @return {Number}     Number of byte
 */ function getStringByteLength(str) {
    return unescape(encodeURIComponent(str)).length;
}
/**
 * Get a list of segments of the specified mode
 * from a string
 *
 * @param  {Mode}   mode Segment mode
 * @param  {String} str  String to process
 * @return {Array}       Array of object with segments data
 */ function getSegments(regex, mode, str) {
    const segments = [];
    let result;
    while((result = regex.exec(str)) !== null){
        segments.push({
            data: result[0],
            index: result.index,
            mode: mode,
            length: result[0].length
        });
    }
    return segments;
}
/**
 * Extracts a series of segments with the appropriate
 * modes from a string
 *
 * @param  {String} dataStr Input string
 * @return {Array}          Array of object with segments data
 */ function getSegmentsFromString(dataStr) {
    const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
    const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
    let byteSegs;
    let kanjiSegs;
    if (Utils.isKanjiModeEnabled()) {
        byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
        kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
    } else {
        byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
        kanjiSegs = [];
    }
    const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
    return segs.sort(function(s1, s2) {
        return s1.index - s2.index;
    }).map(function(obj) {
        return {
            data: obj.data,
            mode: obj.mode,
            length: obj.length
        };
    });
}
/**
 * Returns how many bits are needed to encode a string of
 * specified length with the specified mode
 *
 * @param  {Number} length String length
 * @param  {Mode} mode     Segment mode
 * @return {Number}        Bit length
 */ function getSegmentBitsLength(length, mode) {
    switch(mode){
        case Mode.NUMERIC:
            return NumericData.getBitsLength(length);
        case Mode.ALPHANUMERIC:
            return AlphanumericData.getBitsLength(length);
        case Mode.KANJI:
            return KanjiData.getBitsLength(length);
        case Mode.BYTE:
            return ByteData.getBitsLength(length);
    }
}
/**
 * Merges adjacent segments which have the same mode
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */ function mergeSegments(segs) {
    return segs.reduce(function(acc, curr) {
        const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
        if (prevSeg && prevSeg.mode === curr.mode) {
            acc[acc.length - 1].data += curr.data;
            return acc;
        }
        acc.push(curr);
        return acc;
    }, []);
}
/**
 * Generates a list of all possible nodes combination which
 * will be used to build a segments graph.
 *
 * Nodes are divided by groups. Each group will contain a list of all the modes
 * in which is possible to encode the given text.
 *
 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
 * The group for '12345' will contain then 3 objects, one for each
 * possible encoding mode.
 *
 * Each node represents a possible segment.
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */ function buildNodes(segs) {
    const nodes = [];
    for(let i = 0; i < segs.length; i++){
        const seg = segs[i];
        switch(seg.mode){
            case Mode.NUMERIC:
                nodes.push([
                    seg,
                    {
                        data: seg.data,
                        mode: Mode.ALPHANUMERIC,
                        length: seg.length
                    },
                    {
                        data: seg.data,
                        mode: Mode.BYTE,
                        length: seg.length
                    }
                ]);
                break;
            case Mode.ALPHANUMERIC:
                nodes.push([
                    seg,
                    {
                        data: seg.data,
                        mode: Mode.BYTE,
                        length: seg.length
                    }
                ]);
                break;
            case Mode.KANJI:
                nodes.push([
                    seg,
                    {
                        data: seg.data,
                        mode: Mode.BYTE,
                        length: getStringByteLength(seg.data)
                    }
                ]);
                break;
            case Mode.BYTE:
                nodes.push([
                    {
                        data: seg.data,
                        mode: Mode.BYTE,
                        length: getStringByteLength(seg.data)
                    }
                ]);
        }
    }
    return nodes;
}
/**
 * Builds a graph from a list of nodes.
 * All segments in each node group will be connected with all the segments of
 * the next group and so on.
 *
 * At each connection will be assigned a weight depending on the
 * segment's byte length.
 *
 * @param  {Array} nodes    Array of object with segments data
 * @param  {Number} version QR Code version
 * @return {Object}         Graph of all possible segments
 */ function buildGraph(nodes, version) {
    const table = {};
    const graph = {
        start: {}
    };
    let prevNodeIds = [
        'start'
    ];
    for(let i = 0; i < nodes.length; i++){
        const nodeGroup = nodes[i];
        const currentNodeIds = [];
        for(let j = 0; j < nodeGroup.length; j++){
            const node = nodeGroup[j];
            const key = '' + i + j;
            currentNodeIds.push(key);
            table[key] = {
                node: node,
                lastCount: 0
            };
            graph[key] = {};
            for(let n = 0; n < prevNodeIds.length; n++){
                const prevNodeId = prevNodeIds[n];
                if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
                    graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
                    table[prevNodeId].lastCount += node.length;
                } else {
                    if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
                    graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version); // switch cost
                }
            }
        }
        prevNodeIds = currentNodeIds;
    }
    for(let n = 0; n < prevNodeIds.length; n++){
        graph[prevNodeIds[n]].end = 0;
    }
    return {
        map: graph,
        table: table
    };
}
/**
 * Builds a segment from a specified data and mode.
 * If a mode is not specified, the more suitable will be used.
 *
 * @param  {String} data             Input data
 * @param  {Mode | String} modesHint Data mode
 * @return {Segment}                 Segment
 */ function buildSingleSegment(data, modesHint) {
    let mode;
    const bestMode = Mode.getBestModeForData(data);
    mode = Mode.from(modesHint, bestMode);
    // Make sure data can be encoded
    if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
        throw new Error('"' + data + '"' + ' cannot be encoded with mode ' + Mode.toString(mode) + '.\n Suggested mode is: ' + Mode.toString(bestMode));
    }
    // Use Mode.BYTE if Kanji support is disabled
    if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
        mode = Mode.BYTE;
    }
    switch(mode){
        case Mode.NUMERIC:
            return new NumericData(data);
        case Mode.ALPHANUMERIC:
            return new AlphanumericData(data);
        case Mode.KANJI:
            return new KanjiData(data);
        case Mode.BYTE:
            return new ByteData(data);
    }
}
/**
 * Builds a list of segments from an array.
 * Array can contain Strings or Objects with segment's info.
 *
 * For each item which is a string, will be generated a segment with the given
 * string and the more appropriate encoding mode.
 *
 * For each item which is an object, will be generated a segment with the given
 * data and mode.
 * Objects must contain at least the property "data".
 * If property "mode" is not present, the more suitable mode will be used.
 *
 * @param  {Array} array Array of objects with segments data
 * @return {Array}       Array of Segments
 */ exports.fromArray = function fromArray(array) {
    return array.reduce(function(acc, seg) {
        if (typeof seg === 'string') {
            acc.push(buildSingleSegment(seg, null));
        } else if (seg.data) {
            acc.push(buildSingleSegment(seg.data, seg.mode));
        }
        return acc;
    }, []);
};
/**
 * Builds an optimized sequence of segments from a string,
 * which will produce the shortest possible bitstream.
 *
 * @param  {String} data    Input string
 * @param  {Number} version QR Code version
 * @return {Array}          Array of segments
 */ exports.fromString = function fromString(data, version) {
    const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
    const nodes = buildNodes(segs);
    const graph = buildGraph(nodes, version);
    const path = dijkstra.find_path(graph.map, 'start', 'end');
    const optimizedSegs = [];
    for(let i = 1; i < path.length - 1; i++){
        optimizedSegs.push(graph.table[path[i]].node);
    }
    return exports.fromArray(mergeSegments(optimizedSegs));
};
/**
 * Splits a string in various segments with the modes which
 * best represent their content.
 * The produced segments are far from being optimized.
 * The output of this function is only used to estimate a QR Code version
 * which may contain the data.
 *
 * @param  {string} data Input string
 * @return {Array}       Array of segments
 */ exports.rawSplit = function rawSplit(data) {
    return exports.fromArray(getSegmentsFromString(data, Utils.isKanjiModeEnabled()));
};
}),
"[project]/node_modules/qrcode/lib/core/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

let toSJISFunction;
const CODEWORDS_COUNT = [
    0,
    26,
    44,
    70,
    100,
    134,
    172,
    196,
    242,
    292,
    346,
    404,
    466,
    532,
    581,
    655,
    733,
    815,
    901,
    991,
    1085,
    1156,
    1258,
    1364,
    1474,
    1588,
    1706,
    1828,
    1921,
    2051,
    2185,
    2323,
    2465,
    2611,
    2761,
    2876,
    3034,
    3196,
    3362,
    3532,
    3706
];
/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */ exports.getSymbolSize = function getSymbolSize(version) {
    if (!version) throw new Error('"version" cannot be null or undefined');
    if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40');
    return version * 4 + 17;
};
/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */ exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
    return CODEWORDS_COUNT[version];
};
/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */ exports.getBCHDigit = function(data) {
    let digit = 0;
    while(data !== 0){
        digit++;
        data >>>= 1;
    }
    return digit;
};
exports.setToSJISFunction = function setToSJISFunction(f) {
    if (typeof f !== 'function') {
        throw new Error('"toSJISFunc" is not a valid function.');
    }
    toSJISFunction = f;
};
exports.isKanjiModeEnabled = function() {
    return typeof toSJISFunction !== 'undefined';
};
exports.toSJIS = function toSJIS(kanji) {
    return toSJISFunction(kanji);
};
}),
"[project]/node_modules/qrcode/lib/core/version-check.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */ exports.isValid = function isValid(version) {
    return !isNaN(version) && version >= 1 && version <= 40;
};
}),
"[project]/node_modules/qrcode/lib/core/version.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Utils = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/utils.js [app-rsc] (ecmascript)");
const ECCode = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/error-correction-code.js [app-rsc] (ecmascript)");
const ECLevel = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/error-correction-level.js [app-rsc] (ecmascript)");
const Mode = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/mode.js [app-rsc] (ecmascript)");
const VersionCheck = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/version-check.js [app-rsc] (ecmascript)");
// Generator polynomial used to encode version information
const G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
const G18_BCH = Utils.getBCHDigit(G18);
function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
    for(let currentVersion = 1; currentVersion <= 40; currentVersion++){
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
            return currentVersion;
        }
    }
    return undefined;
}
function getReservedBitsCount(mode, version) {
    // Character count indicator + mode indicator bits
    return Mode.getCharCountIndicator(mode, version) + 4;
}
function getTotalBitsFromDataArray(segments, version) {
    let totalBits = 0;
    segments.forEach(function(data) {
        const reservedBits = getReservedBitsCount(data.mode, version);
        totalBits += reservedBits + data.getBitsLength();
    });
    return totalBits;
}
function getBestVersionForMixedData(segments, errorCorrectionLevel) {
    for(let currentVersion = 1; currentVersion <= 40; currentVersion++){
        const length = getTotalBitsFromDataArray(segments, currentVersion);
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
            return currentVersion;
        }
    }
    return undefined;
}
/**
 * Returns version number from a value.
 * If value is not a valid version, returns defaultValue
 *
 * @param  {Number|String} value        QR Code version
 * @param  {Number}        defaultValue Fallback value
 * @return {Number}                     QR Code version number
 */ exports.from = function from(value, defaultValue) {
    if (VersionCheck.isValid(value)) {
        return parseInt(value, 10);
    }
    return defaultValue;
};
/**
 * Returns how much data can be stored with the specified QR code version
 * and error correction level
 *
 * @param  {Number} version              QR Code version (1-40)
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Mode}   mode                 Data mode
 * @return {Number}                      Quantity of storable data
 */ exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
    if (!VersionCheck.isValid(version)) {
        throw new Error('Invalid QR Code version');
    }
    // Use Byte mode as default
    if (typeof mode === 'undefined') mode = Mode.BYTE;
    // Total codewords for this QR code version (Data + Error correction)
    const totalCodewords = Utils.getSymbolTotalCodewords(version);
    // Total number of error correction codewords
    const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
    // Total number of data codewords
    const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
    if (mode === Mode.MIXED) return dataTotalCodewordsBits;
    const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);
    // Return max number of storable codewords
    switch(mode){
        case Mode.NUMERIC:
            return Math.floor(usableBits / 10 * 3);
        case Mode.ALPHANUMERIC:
            return Math.floor(usableBits / 11 * 2);
        case Mode.KANJI:
            return Math.floor(usableBits / 13);
        case Mode.BYTE:
        default:
            return Math.floor(usableBits / 8);
    }
};
/**
 * Returns the minimum version needed to contain the amount of data
 *
 * @param  {Segment} data                    Segment of data
 * @param  {Number} [errorCorrectionLevel=H] Error correction level
 * @param  {Mode} mode                       Data mode
 * @return {Number}                          QR Code version
 */ exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
    let seg;
    const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
    if (Array.isArray(data)) {
        if (data.length > 1) {
            return getBestVersionForMixedData(data, ecl);
        }
        if (data.length === 0) {
            return 1;
        }
        seg = data[0];
    } else {
        seg = data;
    }
    return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
};
/**
 * Returns version information with relative error correction bits
 *
 * The version information is included in QR Code symbols of version 7 or larger.
 * It consists of an 18-bit sequence containing 6 data bits,
 * with 12 error correction bits calculated using the (18, 6) Golay code.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Encoded version info bits
 */ exports.getEncodedBits = function getEncodedBits(version) {
    if (!VersionCheck.isValid(version) || version < 7) {
        throw new Error('Invalid QR Code version');
    }
    let d = version << 12;
    while(Utils.getBCHDigit(d) - G18_BCH >= 0){
        d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
    }
    return version << 12 | d;
};
}),
"[project]/node_modules/qrcode/lib/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*
*copyright Ryan Day 2012
*
* Licensed under the MIT license:
*   http://www.opensource.org/licenses/mit-license.php
*
* this is the main server side application file for node-qrcode.
* these exports use serverside canvas api methods for file IO and buffers
*
*/ module.exports = __turbopack_context__.r("[project]/node_modules/qrcode/lib/server.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/qrcode/lib/renderer/canvas.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Utils = __turbopack_context__.r("[project]/node_modules/qrcode/lib/renderer/utils.js [app-rsc] (ecmascript)");
function clearCanvas(ctx, canvas, size) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!canvas.style) canvas.style = {};
    canvas.height = size;
    canvas.width = size;
    canvas.style.height = size + 'px';
    canvas.style.width = size + 'px';
}
function getCanvasElement() {
    try {
        return document.createElement('canvas');
    } catch (e) {
        throw new Error('You need to specify a canvas element');
    }
}
exports.render = function render(qrData, canvas, options) {
    let opts = options;
    let canvasEl = canvas;
    if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = undefined;
    }
    if (!canvas) {
        canvasEl = getCanvasElement();
    }
    opts = Utils.getOptions(opts);
    const size = Utils.getImageWidth(qrData.modules.size, opts);
    const ctx = canvasEl.getContext('2d');
    const image = ctx.createImageData(size, size);
    Utils.qrToImageData(image.data, qrData, opts);
    clearCanvas(ctx, canvasEl, size);
    ctx.putImageData(image, 0, 0);
    return canvasEl;
};
exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
    let opts = options;
    if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = undefined;
    }
    if (!opts) opts = {};
    const canvasEl = exports.render(qrData, canvas, opts);
    const type = opts.type || 'image/png';
    const rendererOpts = opts.rendererOpts || {};
    return canvasEl.toDataURL(type, rendererOpts.quality);
};
}),
"[project]/node_modules/qrcode/lib/renderer/png.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
const PNG = __turbopack_context__.r("[project]/node_modules/qrcode/node_modules/pngjs/lib/png.js [app-rsc] (ecmascript)").PNG;
const Utils = __turbopack_context__.r("[project]/node_modules/qrcode/lib/renderer/utils.js [app-rsc] (ecmascript)");
exports.render = function render(qrData, options) {
    const opts = Utils.getOptions(options);
    const pngOpts = opts.rendererOpts;
    const size = Utils.getImageWidth(qrData.modules.size, opts);
    pngOpts.width = size;
    pngOpts.height = size;
    const pngImage = new PNG(pngOpts);
    Utils.qrToImageData(pngImage.data, qrData, opts);
    return pngImage;
};
exports.renderToDataURL = function renderToDataURL(qrData, options, cb) {
    if (typeof cb === 'undefined') {
        cb = options;
        options = undefined;
    }
    exports.renderToBuffer(qrData, options, function(err, output) {
        if (err) cb(err);
        let url = 'data:image/png;base64,';
        url += output.toString('base64');
        cb(null, url);
    });
};
exports.renderToBuffer = function renderToBuffer(qrData, options, cb) {
    if (typeof cb === 'undefined') {
        cb = options;
        options = undefined;
    }
    const png = exports.render(qrData, options);
    const buffer = [];
    png.on('error', cb);
    png.on('data', function(data) {
        buffer.push(data);
    });
    png.on('end', function() {
        cb(null, Buffer.concat(buffer));
    });
    png.pack();
};
exports.renderToFile = function renderToFile(path, qrData, options, cb) {
    if (typeof cb === 'undefined') {
        cb = options;
        options = undefined;
    }
    let called = false;
    const done = (...args)=>{
        if (called) return;
        called = true;
        cb.apply(null, args);
    };
    const stream = fs.createWriteStream(path);
    stream.on('error', done);
    stream.on('close', done);
    exports.renderToFileStream(stream, qrData, options);
};
exports.renderToFileStream = function renderToFileStream(stream, qrData, options) {
    const png = exports.render(qrData, options);
    png.pack().pipe(stream);
};
}),
"[project]/node_modules/qrcode/lib/renderer/svg-tag.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Utils = __turbopack_context__.r("[project]/node_modules/qrcode/lib/renderer/utils.js [app-rsc] (ecmascript)");
function getColorAttrib(color, attrib) {
    const alpha = color.a / 255;
    const str = attrib + '="' + color.hex + '"';
    return alpha < 1 ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
}
function svgCmd(cmd, x, y) {
    let str = cmd + x;
    if (typeof y !== 'undefined') str += ' ' + y;
    return str;
}
function qrToPath(data, size, margin) {
    let path = '';
    let moveBy = 0;
    let newRow = false;
    let lineLength = 0;
    for(let i = 0; i < data.length; i++){
        const col = Math.floor(i % size);
        const row = Math.floor(i / size);
        if (!col && !newRow) newRow = true;
        if (data[i]) {
            lineLength++;
            if (!(i > 0 && col > 0 && data[i - 1])) {
                path += newRow ? svgCmd('M', col + margin, 0.5 + row + margin) : svgCmd('m', moveBy, 0);
                moveBy = 0;
                newRow = false;
            }
            if (!(col + 1 < size && data[i + 1])) {
                path += svgCmd('h', lineLength);
                lineLength = 0;
            }
        } else {
            moveBy++;
        }
    }
    return path;
}
exports.render = function render(qrData, options, cb) {
    const opts = Utils.getOptions(options);
    const size = qrData.modules.size;
    const data = qrData.modules.data;
    const qrcodesize = size + opts.margin * 2;
    const bg = !opts.color.light.a ? '' : '<path ' + getColorAttrib(opts.color.light, 'fill') + ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>';
    const path = '<path ' + getColorAttrib(opts.color.dark, 'stroke') + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
    const viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"';
    const width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" ';
    const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n';
    if (typeof cb === 'function') {
        cb(null, svgTag);
    }
    return svgTag;
};
}),
"[project]/node_modules/qrcode/lib/renderer/svg.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const svgTagRenderer = __turbopack_context__.r("[project]/node_modules/qrcode/lib/renderer/svg-tag.js [app-rsc] (ecmascript)");
exports.render = svgTagRenderer.render;
exports.renderToFile = function renderToFile(path, qrData, options, cb) {
    if (typeof cb === 'undefined') {
        cb = options;
        options = undefined;
    }
    const fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
    const svgTag = exports.render(qrData, options);
    const xmlStr = '<?xml version="1.0" encoding="utf-8"?>' + '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">' + svgTag;
    fs.writeFile(path, xmlStr, cb);
};
}),
"[project]/node_modules/qrcode/lib/renderer/terminal.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const big = __turbopack_context__.r("[project]/node_modules/qrcode/lib/renderer/terminal/terminal.js [app-rsc] (ecmascript)");
const small = __turbopack_context__.r("[project]/node_modules/qrcode/lib/renderer/terminal/terminal-small.js [app-rsc] (ecmascript)");
exports.render = function(qrData, options, cb) {
    if (options && options.small) {
        return small.render(qrData, options, cb);
    }
    return big.render(qrData, options, cb);
};
}),
"[project]/node_modules/qrcode/lib/renderer/terminal/terminal-small.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const backgroundWhite = '\x1b[47m';
const backgroundBlack = '\x1b[40m';
const foregroundWhite = '\x1b[37m';
const foregroundBlack = '\x1b[30m';
const reset = '\x1b[0m';
const lineSetupNormal = backgroundWhite + foregroundBlack // setup colors
;
const lineSetupInverse = backgroundBlack + foregroundWhite // setup colors
;
const createPalette = function(lineSetup, foregroundWhite, foregroundBlack) {
    return {
        // 1 ... white, 2 ... black, 0 ... transparent (default)
        '00': reset + ' ' + lineSetup,
        '01': reset + foregroundWhite + '▄' + lineSetup,
        '02': reset + foregroundBlack + '▄' + lineSetup,
        10: reset + foregroundWhite + '▀' + lineSetup,
        11: ' ',
        12: '▄',
        20: reset + foregroundBlack + '▀' + lineSetup,
        21: '▀',
        22: '█'
    };
};
/**
 * Returns code for QR pixel
 * @param {boolean[][]} modules
 * @param {number} size
 * @param {number} x
 * @param {number} y
 * @return {'0' | '1' | '2'}
 */ const mkCodePixel = function(modules, size, x, y) {
    const sizePlus = size + 1;
    if (x >= sizePlus || y >= sizePlus || y < -1 || x < -1) return '0';
    if (x >= size || y >= size || y < 0 || x < 0) return '1';
    const idx = y * size + x;
    return modules[idx] ? '2' : '1';
};
/**
 * Returns code for four QR pixels. Suitable as key in palette.
 * @param {boolean[][]} modules
 * @param {number} size
 * @param {number} x
 * @param {number} y
 * @return {keyof palette}
 */ const mkCode = function(modules, size, x, y) {
    return mkCodePixel(modules, size, x, y) + mkCodePixel(modules, size, x, y + 1);
};
exports.render = function(qrData, options, cb) {
    const size = qrData.modules.size;
    const data = qrData.modules.data;
    const inverse = !!(options && options.inverse);
    const lineSetup = options && options.inverse ? lineSetupInverse : lineSetupNormal;
    const white = inverse ? foregroundBlack : foregroundWhite;
    const black = inverse ? foregroundWhite : foregroundBlack;
    const palette = createPalette(lineSetup, white, black);
    const newLine = reset + '\n' + lineSetup;
    let output = lineSetup // setup colors
    ;
    for(let y = -1; y < size + 1; y += 2){
        for(let x = -1; x < size; x++){
            output += palette[mkCode(data, size, x, y)];
        }
        output += palette[mkCode(data, size, size, y)] + newLine;
    }
    output += reset;
    if (typeof cb === 'function') {
        cb(null, output);
    }
    return output;
};
}),
"[project]/node_modules/qrcode/lib/renderer/terminal/terminal.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// let Utils = require('./utils')
exports.render = function(qrData, options, cb) {
    const size = qrData.modules.size;
    const data = qrData.modules.data;
    // let opts = Utils.getOptions(options)
    // use same scheme as https://github.com/gtanner/qrcode-terminal because it actually works! =)
    const black = '\x1b[40m  \x1b[0m';
    const white = '\x1b[47m  \x1b[0m';
    let output = '';
    const hMargin = Array(size + 3).join(white);
    const vMargin = Array(2).join(white);
    output += hMargin + '\n';
    for(let i = 0; i < size; ++i){
        output += white;
        for(let j = 0; j < size; j++){
            // let topModule = data[i * size + j]
            // let bottomModule = data[(i + 1) * size + j]
            output += data[i * size + j] ? black : white; // getBlockChar(topModule, bottomModule)
        }
        // output += white+'\n'
        output += vMargin + '\n';
    }
    output += hMargin + '\n';
    if (typeof cb === 'function') {
        cb(null, output);
    }
    return output;
}; /*
exports.renderToFile = function renderToFile (path, qrData, options, cb) {
  if (typeof cb === 'undefined') {
    cb = options
    options = undefined
  }

  let fs = require('fs')
  let utf8 = exports.render(qrData, options)
  fs.writeFile(path, utf8, cb)
}
*/ 
}),
"[project]/node_modules/qrcode/lib/renderer/utf8.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Utils = __turbopack_context__.r("[project]/node_modules/qrcode/lib/renderer/utils.js [app-rsc] (ecmascript)");
const BLOCK_CHAR = {
    WW: ' ',
    WB: '▄',
    BB: '█',
    BW: '▀'
};
const INVERTED_BLOCK_CHAR = {
    BB: ' ',
    BW: '▄',
    WW: '█',
    WB: '▀'
};
function getBlockChar(top, bottom, blocks) {
    if (top && bottom) return blocks.BB;
    if (top && !bottom) return blocks.BW;
    if (!top && bottom) return blocks.WB;
    return blocks.WW;
}
exports.render = function(qrData, options, cb) {
    const opts = Utils.getOptions(options);
    let blocks = BLOCK_CHAR;
    if (opts.color.dark.hex === '#ffffff' || opts.color.light.hex === '#000000') {
        blocks = INVERTED_BLOCK_CHAR;
    }
    const size = qrData.modules.size;
    const data = qrData.modules.data;
    let output = '';
    let hMargin = Array(size + opts.margin * 2 + 1).join(blocks.WW);
    hMargin = Array(opts.margin / 2 + 1).join(hMargin + '\n');
    const vMargin = Array(opts.margin + 1).join(blocks.WW);
    output += hMargin;
    for(let i = 0; i < size; i += 2){
        output += vMargin;
        for(let j = 0; j < size; j++){
            const topModule = data[i * size + j];
            const bottomModule = data[(i + 1) * size + j];
            output += getBlockChar(topModule, bottomModule, blocks);
        }
        output += vMargin + '\n';
    }
    output += hMargin.slice(0, -1);
    if (typeof cb === 'function') {
        cb(null, output);
    }
    return output;
};
exports.renderToFile = function renderToFile(path, qrData, options, cb) {
    if (typeof cb === 'undefined') {
        cb = options;
        options = undefined;
    }
    const fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
    const utf8 = exports.render(qrData, options);
    fs.writeFile(path, utf8, cb);
};
}),
"[project]/node_modules/qrcode/lib/renderer/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

function hex2rgba(hex) {
    if (typeof hex === 'number') {
        hex = hex.toString();
    }
    if (typeof hex !== 'string') {
        throw new Error('Color should be defined as hex string');
    }
    let hexCode = hex.slice().replace('#', '').split('');
    if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
        throw new Error('Invalid hex color: ' + hex);
    }
    // Convert from short to long form (fff -> ffffff)
    if (hexCode.length === 3 || hexCode.length === 4) {
        hexCode = Array.prototype.concat.apply([], hexCode.map(function(c) {
            return [
                c,
                c
            ];
        }));
    }
    // Add default alpha value
    if (hexCode.length === 6) hexCode.push('F', 'F');
    const hexValue = parseInt(hexCode.join(''), 16);
    return {
        r: hexValue >> 24 & 255,
        g: hexValue >> 16 & 255,
        b: hexValue >> 8 & 255,
        a: hexValue & 255,
        hex: '#' + hexCode.slice(0, 6).join('')
    };
}
exports.getOptions = function getOptions(options) {
    if (!options) options = {};
    if (!options.color) options.color = {};
    const margin = typeof options.margin === 'undefined' || options.margin === null || options.margin < 0 ? 4 : options.margin;
    const width = options.width && options.width >= 21 ? options.width : undefined;
    const scale = options.scale || 4;
    return {
        width: width,
        scale: width ? 4 : scale,
        margin: margin,
        color: {
            dark: hex2rgba(options.color.dark || '#000000ff'),
            light: hex2rgba(options.color.light || '#ffffffff')
        },
        type: options.type,
        rendererOpts: options.rendererOpts || {}
    };
};
exports.getScale = function getScale(qrSize, opts) {
    return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
};
exports.getImageWidth = function getImageWidth(qrSize, opts) {
    const scale = exports.getScale(qrSize, opts);
    return Math.floor((qrSize + opts.margin * 2) * scale);
};
exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
    const size = qr.modules.size;
    const data = qr.modules.data;
    const scale = exports.getScale(size, opts);
    const symbolSize = Math.floor((size + opts.margin * 2) * scale);
    const scaledMargin = opts.margin * scale;
    const palette = [
        opts.color.light,
        opts.color.dark
    ];
    for(let i = 0; i < symbolSize; i++){
        for(let j = 0; j < symbolSize; j++){
            let posDst = (i * symbolSize + j) * 4;
            let pxColor = opts.color.light;
            if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
                const iSrc = Math.floor((i - scaledMargin) / scale);
                const jSrc = Math.floor((j - scaledMargin) / scale);
                pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
            }
            imgData[posDst++] = pxColor.r;
            imgData[posDst++] = pxColor.g;
            imgData[posDst++] = pxColor.b;
            imgData[posDst] = pxColor.a;
        }
    }
};
}),
"[project]/node_modules/qrcode/lib/server.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const canPromise = __turbopack_context__.r("[project]/node_modules/qrcode/lib/can-promise.js [app-rsc] (ecmascript)");
const QRCode = __turbopack_context__.r("[project]/node_modules/qrcode/lib/core/qrcode.js [app-rsc] (ecmascript)");
const PngRenderer = __turbopack_context__.r("[project]/node_modules/qrcode/lib/renderer/png.js [app-rsc] (ecmascript)");
const Utf8Renderer = __turbopack_context__.r("[project]/node_modules/qrcode/lib/renderer/utf8.js [app-rsc] (ecmascript)");
const TerminalRenderer = __turbopack_context__.r("[project]/node_modules/qrcode/lib/renderer/terminal.js [app-rsc] (ecmascript)");
const SvgRenderer = __turbopack_context__.r("[project]/node_modules/qrcode/lib/renderer/svg.js [app-rsc] (ecmascript)");
function checkParams(text, opts, cb) {
    if (typeof text === 'undefined') {
        throw new Error('String required as first argument');
    }
    if (typeof cb === 'undefined') {
        cb = opts;
        opts = {};
    }
    if (typeof cb !== 'function') {
        if (!canPromise()) {
            throw new Error('Callback required as last argument');
        } else {
            opts = cb || {};
            cb = null;
        }
    }
    return {
        opts: opts,
        cb: cb
    };
}
function getTypeFromFilename(path) {
    return path.slice((path.lastIndexOf('.') - 1 >>> 0) + 2).toLowerCase();
}
function getRendererFromType(type) {
    switch(type){
        case 'svg':
            return SvgRenderer;
        case 'txt':
        case 'utf8':
            return Utf8Renderer;
        case 'png':
        case 'image/png':
        default:
            return PngRenderer;
    }
}
function getStringRendererFromType(type) {
    switch(type){
        case 'svg':
            return SvgRenderer;
        case 'terminal':
            return TerminalRenderer;
        case 'utf8':
        default:
            return Utf8Renderer;
    }
}
function render(renderFunc, text, params) {
    if (!params.cb) {
        return new Promise(function(resolve, reject) {
            try {
                const data = QRCode.create(text, params.opts);
                return renderFunc(data, params.opts, function(err, data) {
                    return err ? reject(err) : resolve(data);
                });
            } catch (e) {
                reject(e);
            }
        });
    }
    try {
        const data = QRCode.create(text, params.opts);
        return renderFunc(data, params.opts, params.cb);
    } catch (e) {
        params.cb(e);
    }
}
exports.create = QRCode.create;
exports.toCanvas = __turbopack_context__.r("[project]/node_modules/qrcode/lib/browser.js [app-rsc] (ecmascript)").toCanvas;
exports.toString = function toString(text, opts, cb) {
    const params = checkParams(text, opts, cb);
    const type = params.opts ? params.opts.type : undefined;
    const renderer = getStringRendererFromType(type);
    return render(renderer.render, text, params);
};
exports.toDataURL = function toDataURL(text, opts, cb) {
    const params = checkParams(text, opts, cb);
    const renderer = getRendererFromType(params.opts.type);
    return render(renderer.renderToDataURL, text, params);
};
exports.toBuffer = function toBuffer(text, opts, cb) {
    const params = checkParams(text, opts, cb);
    const renderer = getRendererFromType(params.opts.type);
    return render(renderer.renderToBuffer, text, params);
};
exports.toFile = function toFile(path, text, opts, cb) {
    if (typeof path !== 'string' || !(typeof text === 'string' || typeof text === 'object')) {
        throw new Error('Invalid argument');
    }
    if (arguments.length < 3 && !canPromise()) {
        throw new Error('Too few arguments provided');
    }
    const params = checkParams(text, opts, cb);
    const type = params.opts.type || getTypeFromFilename(path);
    const renderer = getRendererFromType(type);
    const renderToFile = renderer.renderToFile.bind(null, path);
    return render(renderToFile, text, params);
};
exports.toFileStream = function toFileStream(stream, text, opts) {
    if (arguments.length < 2) {
        throw new Error('Too few arguments provided');
    }
    const params = checkParams(text, opts, stream.emit.bind(stream, 'error'));
    const renderer = getRendererFromType('png') // Only png support for now
    ;
    const renderToFileStream = renderer.renderToFileStream.bind(null, stream);
    render(renderToFileStream, text, params);
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0zo5kzk2az6pi._.js.map