# Tuples — 2 basic + 1 hard

**May use:** lists, functions, `return a, b`, unpacking.  
**Must not:** sets, dicts.

---

## Basic 1 — Unpack a student

**What it must do**

`make_student(name, marks, city)` returns `(name.title(), marks, city.title())` or `None` if marks not 0–100.

Main: take three fields, unpack if not None, print `Aisha | 88 | Solapur`.

**Hint:** `st = make_student(...)` then `if st is None:` else `n, m, c = st`.

---

## Basic 2 — min_max return two values

**What it must do**

`min_max(a, b, c)` returns smallest and largest. Main: `lo, hi = min_max(...)` print them.

**Sample:** 4 9 1 → Min 1 Max 9.

**Hint:** `return small, large` is a tuple. Unpack in main.

---

## Hard — Contacts as list of tuples

**What it must do**

`contacts = []` of `(name, phone)`.

Menu: add (10-digit phone, unique phone), view, search name keyword, search exact phone, exit.

Functions: `add_contact`, `find_phone` returns index or -1.

You cannot do `contacts[i][1] = ...`. To change later you would replace the whole tuple (not required).

**Sample:** add Aisha 9000000001, search `ai` → that line.

**Hint 1:** `append((name, phone))` — inner `()`.  
**Hint 2:** `for name, phone in contacts:`.  
**Hint 3:** Duplicate phone: loop before append.
