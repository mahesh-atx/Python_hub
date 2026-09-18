# Lists — 2 basic + 1 hard

**May use:** functions, strings, loops, lists.  
**Must not:** tuples as storage, sets, dicts, comprehensions. From Q9-style: wrap logic in `def`.

---

## Basic 1 — Number list stats

**What it must do**

Take N integers into a list.

Print: length, sum **by a loop** (no `sum()`), max **without** `max()` (function `find_max`).

**Sample:** `4, 10 3 7 3` → length 4, sum 23, max 10.

**Hint:** `find_max`: start `a[0]`, loop the rest.

---

## Basic 2 — Name line

**What it must do**

Take N names. Print `1. Aisha` etc. Then take a keyword, print every name that **contains** it (ignore case). If none: `No match`.

Function `search(names, key)` can print matches and return how many.

**Hint:** `if key.lower() in name.lower()`.

---

## Hard — Mini to-do (menu)

**What it must do**

Empty list `tasks`. Menu:

1. Add (strip; reject empty)
2. View numbered; empty → `No tasks`
3. Remove by number (invalid → message)
4. Mark done: prefix `DONE: ` if not already
5. Exit

Functions for each action. Main is only the menu.

**Sample:** add buy milk, add call ravi, mark 1, view shows `DONE: buy milk`.

**Hint 1:** User numbers 1-based; `pop(i)` with `i = n-1`.  
**Hint 2:** `startswith("DONE: ")`.  
**Hint 3:** Do not `def` inside the loop — define functions at the top.
