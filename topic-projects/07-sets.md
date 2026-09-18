# Sets — 2 basic + 1 hard

**May use:** tuples, lists, functions, sets.  
**Must not:** dicts. Empty set = `set()`, not `{}`.

---

## Basic 1 — Unique check-in

**What it must do**

Set `inside`. Loop: take a name, `end` to stop.

- empty → skip
- already in set → `Already inside`
- else add, print how many unique so far

Then print unique count.

**Hint:** Store `.strip().title()`. `if name in inside`.

---

## Basic 2 — Saturday vs Sunday guests

**What it must do**

Two sets (type names until `end` for each day). Print:

- all unique (union)
- both days (intersection)
- only Saturday (difference)

Functions return sets. Main prints.

**Hint:** `a | b`, `a & b`, `a - b`. Lower/title consistently.

---

## Hard — Packing checklist

**What it must do**

Hard-code `required = {"id card", "ticket", "charger", "medicine", "water"}`.  
`bag = set()`.

Menu: pack, unpack (`discard`), status (missing, extra, `Ready` if required is subset), exit.

Functions: `missing`, `extra`, `is_ready`.

**Sample:** pack all five required → Ready. Pack `snacks` → extra, still ready if required done.

**Hint 1:** Missing = `required - bag`. Extra = `bag - required`.  
**Hint 2:** Extra must not block ready.  
**Hint 3:** Lowercase items.
