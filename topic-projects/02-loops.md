# Loops — 2 basic + 1 hard

**May use:** conditionals + `for`/`while`/`range`/`break`/`continue`.  
**Must not:** string indexing/methods, lists, `def`. `print("*")` is OK. PIN as integer.

---

## Basic 1 — PIN lock (3 tries)

**What it must do**

Stored PIN `1357`. User has 3 attempts.

- Wrong: print remaining tries
- 3 fails: `Card blocked` and stop
- Correct: `Welcome` then **stop** (no extra menu)

**What to use:** `while` or `for` + `break`. Flag `ok` so you do not print both Welcome and Blocked.

**Sample**

```
PIN: 0000
Attempts left: 2
PIN: 1357
Welcome
```

**Hint:** `left = 3` then `while left > 0`. On success `break`. After loop `if not ok: print blocked`.

---

## Basic 2 — Table + countdown

**What it must do**

Take N (N >= 1).

1. Print table of N from 1 to 10 (`7 x 3 = 21`)
2. Then countdown N to 1 with a **while**, then `Lift off`

**What to use:** `for i in range(1, 11)` then a while.

**Sample (N=3):** table of 3, then `3 2 1 Lift off` (one number per line).

**Hint:** Two separate loops, not nested.

---

## Hard — Menu calculator that never stops until Exit

**What it must do**

```
1. Add
2. Subtract
3. Multiply
4. Divide
5. Exit
```

- 1–4: take two numbers, print result, **show menu again**
- Divide by 0: `Cannot divide by zero` (no crash)
- Other choice: `Invalid choice`
- 5: `Bye` and `break`

No lists. No functions.

**What to use:** `while True`. `if/elif` on choice. Take the two numbers **inside** 1–4, not before Exit.

**Build order:** menu + exit only → add → other ops → divide zero → invalid.

**Sample:** choice 1, 10, 3 → 13 → menu → 5 → Bye.

**Hint 1:** Do not `break` after one calculation.  
**Hint 2:** `int(input())` for choice — assume they type a number (exceptions later).  
**Hint 3:** Nested if for divide.
