# Exception handling — 2 basic + 1 hard

**May use:** files, `try/except/else/finally`, `raise`.  
**Must not:** `class`, custom exception classes, bare `except:`.

---

## Basic 1 — read_int until valid

**What it must do**

`read_int(prompt)` loops until `int(...)` works. Catch `ValueError`, print `Again`. Return the integer.

Main: `age = read_int("Age: ")` then print it.

**Hint:** `while True: try: return int(input(prompt)) except ValueError: print("Again")`

---

## Basic 2 — Safe divide

**What it must do**

Take a and b. Catch `ValueError` (not a number) and `ZeroDivisionError` separately. `else:` print the result (only on success). `finally:` print `Done`.

Test: `10 2`, `10 0`, `x 2`. `Done` every time.

**Hint:** Two `except` blocks. Result print only in `else`.

---

## Hard — Safe JSON phone book

**What it must do**

Phone book on `phone.json` (add/view/find/delete/exit).

Must **not traceback** when:

- file missing → start `{}`
- JSON corrupt → message, use `{}` in memory, **do not overwrite** corrupt file until user successfully adds and you choose to save (document your choice)
- empty name → `raise ValueError` in `add`, catch in main
- menu not a number → ValueError
- find missing key → `.get` or `KeyError` handler

**Hint 1:** `except FileNotFoundError` vs `except json.JSONDecodeError`.  
**Hint 2:** `try/except` inside the menu loop, not around the whole `while`.  
**Hint 3:** Helpers `raise`; main prints `e`.
