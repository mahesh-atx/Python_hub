# Conditionals — 2 basic + 1 hard

**May use:** variables, operators, `input`/`print`, `int`/`float`, `if`/`elif`/`else`, nested if.  
**Must not:** `for`/`while`, string methods, lists, `def`.

You may compare whole words: `weather == "rain"`.

---

## Basic 1 — Time greeting + weather

**What it must do**

Take:

1. hour (0–23)
2. weather: `hot`, `rain`, or `cold` (anything else → `Invalid weather` and stop)

Print:

- hour `< 0` or `> 23` → `Invalid hour` (do not print a greeting)
- else greeting: `< 12` Good morning; `< 17` Good afternoon; else Good evening
- then advice: hot → `Carry water`; rain → `Take an umbrella`; cold → `Wear a jacket`

**What to use:** `if/elif` for hour bands; separate `if/elif` for weather. Validate first.

**Build order:** hour greeting only → then weather → then invalid cases.

**Sample**

```
Input:  9
        rain
Output: Good morning
        Take an umbrella
```

**Hint:** Check invalid hour **before** greeting. Weather invalid should not still print advice.

---

## Basic 2 — Cinema ticket

**What it must do**

Take age and show type: `u`, `ua`, or `a` (lowercase).

Rules:

- age `< 0` or `> 120` → `Invalid age`
- `u` — any valid age → `Ticket: 150`
- `ua` — age `< 12` → `Need adult` (no price); else `Ticket: 200`
- `a` — age `< 18` → `Not allowed`; else `Ticket: 250`
- other type → `Invalid show`

**What to use:** nested if — outer = type, inner = age.

**Sample**

```
Input:  10
        ua
Output: Need adult
```

```
Input:  20
        a
Output: Ticket: 250
```

**Hint:** Validate age first. Then branch on type.

---

## Hard — Delivery fee (one order)

**What it must do**

A complete Swiggy-style fee for **one** order (no loop).

Take: amount, distance km, raining `yes`/`no`, hour 0–23.

- Distance `<= 3` → base 20; `<= 7` → 40; else `40 + 8 * (distance - 7)`
- Rain yes → +15
- Night (`hour >= 22 or hour < 6`) → +20
- Amount `>= 500` → **base becomes 0**; rain and night still add
- Amount `< 0` or distance `< 0` or hour not 0–23 → `Invalid input` and stop

Print **only** the final fee number.

**What to use:** variables `base`, `rain_fee`, `night_fee`. Nested if only where needed. No lists.

**Build order:** validate → base from distance → extras → zero base if amount >= 500 → print sum.

**Sample**

```
Input:  600  10  yes  23
Output: 35
```

(base 0 + rain 15 + night 20)

**Self-check:** 300, 2, no, 14 → 20.

**Hint 1:** Compute extras independently (two `if`s, not elif).  
**Hint 2:** Zero **base only**, not extras.  
**Hint 3:** Extra km: `(distance - 7) * 8` only when distance > 7.
