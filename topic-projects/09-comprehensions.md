# Comprehensions — 2 basic + 1 hard

**May use:** dicts, comps.  
**Must not:** files, `try`, classes.

First write the `for` loop in comments, then the comprehension.

---

## Basic 1 — Squares and evens

**What it must do**

1. List of squares 1..10
2. Evens 1..20 (`if` filter)
3. From `["Tea", "COFFEE", "Water"]` — lowercase list **and** dict word→length

Print all four results.

**Hint:** `[n*n for n in range(1, 11)]`. Dict: `{w: len(w) for w in words}`.

---

## Basic 2 — Budget filter

**What it must do**

`menu = {"tea": 12, "coffee": 20, "biryani": 90, "water": 10}`  
Take budget. Print sorted names with price `< budget`. Function `under(menu, limit)` **returns** a list.

**Sample:** budget 20 → `tea`, `water`.

**Hint:** `[n for n, p in menu.items() if p < limit]` then `sorted`.

---

## Hard — Class dashboard (comps + one loop)

**What it must do**

Dict `name → marks` from N inputs.

1. Dict of pass students (>= 40) — **dict comp**
2. Fail names — **list comp**
3. Names above average — **list comp** (average with a loop or `sum` first)
4. Grade → list of names — **normal loop** (do not group with a comprehension)

Print all. Function `grade(m)` for bands (90 A, 75 B, 60 C, 40 D, else F).

**Hint 1:** Pass: `{n: m for n, m in d.items() if m >= 40}`  
**Hint 2:** Group: `g.setdefault(grade(m), []).append(n)`  
**Hint 3:** That last step is the lesson: comps map/filter; loops group.
