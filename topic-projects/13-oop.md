# OOP — 2 basic + 1 hard

**May use:** everything previous, including files and `try`.  
**Must not:** metaclasses, ABC, multiple-inheritance tricks.

---

## Basic 1 — Student objects

**What it must do**

`Student(name, roll)` stores title-case name.  
`__str__` → `101 - Aisha`.  
Create 3 students, put in a list, loop `print`.

Helper `find_by_roll(students, roll)` returns Student or None.

**Hint:** `self.name = name.strip().title()`. Find: loop, compare `s.roll`.

---

## Basic 2 — BankAccount

**What it must do**

`BankAccount(owner, balance=0)`  
`deposit(amount)` — ignore amount <= 0  
`withdraw(amount)` — return True/False; no change if not enough  
`__str__` → `Aisha: 80`

Main: deposit 100, withdraw 30, print, withdraw 1000 → False, balance still 70.

**Hint:** Do not print inside deposit/withdraw. Return success from withdraw.

---

## Hard — TodoList + JSON

**What it must do**

- `Task(text, done=False)` — `__str__` `[ ] buy milk` / `[x] ...`
- `TodoList` — `add`, `complete(index)`, `remove`, `view`  
  `to_data()` list of dicts  
  `@classmethod from_data`  
  `save(path)` / `load(path)`  
  Missing file → empty list (`FileNotFoundError` or `exists`)
- Menu: add, view, complete, remove, exit. Save after each change.
- Empty text → `ValueError` caught in main. Bad index → message.

**Build order:** in-memory add/view/complete → to_data/from_data → save/load → menu + except.

**Hint 1:** User index 1-based.  
**Hint 2:** `json.dump(self.to_data(), f, indent=2)`  
**Hint 3:** `load` is a classmethod returning a `TodoList`.
