# Practice Projects — Set 4  
## Comprehensions → Modules → Files → Exceptions → OOP

Do these **in order**. Each group uses the new topic and everything before it — not the next one.

| Part | Topic you are practising | Do not use yet |
|------|--------------------------|----------------|
| A Basic | Comprehensions | `open`, `try`, `class` |
| B | Modules & packages | data files, `try`, `class` |
| C Intermediate | File handling | `try/except` as the main tool, `class` |
| D | Exceptions | custom exception classes, `class` |
| E Hard | OOP | metaclasses / ABC |

**Functions rule:** every project has a thin main. Helpers return data. From Part C, save/load are functions. From Part E, **methods** do the work.

Build one feature, run it, then the next. 15 minutes of thinking before hints.

You should already have finished the matching question file (at least basics + intermediate) before that part.

---

# Basic (Comprehensions)

No files. No classes. No `try`.

---

## P1 · Shop filter board

**In real life:** A menu screen: “show me cheap veg items”.

### What it must do

Hard-code:

```
menu = {
    "tea": 12, "coffee": 20, "vada pav": 20,
    "samosa": 15, "biryani": 90, "water": 10, "lassi": 25
}
veg = {"tea", "coffee", "samosa", "water", "lassi"}
```

Take a **budget** (integer). Print, using **comprehensions**:

1. All names sorted
2. Names with price `< budget`, sorted
3. Veg names under budget
4. A **dict** `{name: price}` of those veg-under-budget items
5. Average price of the full menu (loop or `sum(menu.values()) / len(menu)` — then a list of names **strictly cheaper than average**)

Functions: `under(menu, limit)`, `veg_under(menu, veg, limit)`, `below_average(menu)`. Each returns a collection.

### What to use

| Need | Tool |
|------|------|
| Filter names | **list comprehension** + `.items()` |
| Veg and cheap | `if name in veg and price < budget` |
| New dict | **dict comprehension** |

### Build order

1. `under` + print.
2. Veg filter.
3. Below average.

### Sample run

```
Budget: 20
Under: samosa, tea, water
Veg under: tea, water, samosa   (any order then sort)
```

### Hints

**Hint 1:** `[n for n, p in menu.items() if p < budget]` then `sorted(...)`.

**Hint 2:** Dict: `{n: p for n, p in menu.items() if ...}`

---

## P2 · Name cleaner

**In real life:** A form dump of messy names.

### What it must do

Start with a messy list (or take N names):

```
raw = ["  aisha ", "RAVI", "aisha", " Dev", "ravi", "meera", "  "]
```

Using comprehensions + a set:

1. Strip; drop empty
2. Title-case
3. Unique (set is fine; order does not matter). If you want order, unique with a loop — then say so in a comment.
4. Dict `name → length`
5. Sorted list of names with length `>= 5`
6. A single string `"Aisha, Meera, Ravi"` from the unique title-case names sorted (`", ".join(sorted(...))`)

Functions return the new collections. Main prints.

### What to use

Comprehensions for 1–2 and 4–5. Set for unique.

### Hints

**Hint 1:** `[n.strip().title() for n in raw if n.strip()]`

**Hint 2:** Unique: `set(cleaned)` then dict comp on that set.

---

## P3 · Marks dashboard

**In real life:** One class, many stats — no files yet.

### What it must do

Take N students: name + marks (0–100). Store a dict `name → marks`.

Print:

1. Dict of **pass** students (marks >= 40) — dict comprehension
2. List of fail **names**
3. Topper name (function with a loop — grouping/top is not a good comprehension)
4. List of names **above average** (comprehension)
5. Dict `grade → list of names` (A/B/C/D/F). **Build this with a loop** (Q20 lesson: do not group with a comprehension). Grades: 90 A, 75 B, 60 C, 40 D, else F.

### What to use

| Filter/map | comprehension |
| Topper / group by grade | loop |

### Hints

**Hint 1:** `grade(m)` helper with if/elif, then loop `d.setdefault(g, []).append(name)`.

**Hint 2:** Above average needs average first, then `[n for n, m in d.items() if m > avg]`.

---

# Modules & packages

No `open` of data files. No `class`. Create extra `.py` files.

Work in a folder like `practice/set4/`.

---

## P4 · `toolbox` package + demo

**In real life:** Shared helpers every app imports.

### What it must do

```
toolbox/
  __init__.py      # export clean_name, digits_only, is_valid_phone, clamp
  text.py
  number.py        # is_even, clamp(n, lo, hi) → n limited to [lo, hi]
```

`demo.py` (parent of `toolbox/`):

1. Take a name, print cleaned
2. Take a phone, print Valid/Invalid
3. Take n, lo, hi, print clamped
4. `if __name__ == "__main__":` around the demo

No leftover prints when the package is imported.

### What to use

| Need | Tool |
|------|------|
| Import | `from toolbox import clean_name, ...` |
| Tests | `if __name__ == "__main__"` only in demo |

### Build order

1. `text.py` functions, import in demo.
2. `number.py`.
3. Re-export in `__init__.py`.

### Hints

**Hint 1:** Run `demo.py` from the folder that **contains** `toolbox/`.

**Hint 2:** `clamp`: if n < lo return lo; if n > hi return hi; else n.

---

## P5 · Quiz package

**In real life:** Data in one module, game in another.

### What it must do

```
quizpkg/
  __init__.py
  questions.py     # Q = [("OTP share?", "no"), ...]  at least 5 tuples
  engine.py        # def ask_one(q, a): ... returns True/False
                   # def play(qlist, n=3): pick n unique, return score
```

`play_quiz.py`: `random.seed` optional. Print score and a verdict (`Excellent` / `Good` / `Keep practising`). Play again loop.

`engine.play` uses `random.sample`. It must **not** `input` if you pass a function… keep it simple: `input` inside `ask_one` is OK for this project.

### Hints

**Hint 1:** `from quizpkg.questions import Q` and `from quizpkg.engine import play`

**Hint 2:** `sample(Q, k)` if k <= len(Q). If only 5 questions, `n=3` is safe.

---

## P6 · `shop` package billing

**In real life:** Prices in one module, totals in another.

### What it must do

Reuse the idea from Modules Q15–Q17:

```
shop/
  __init__.py
  prices.py     # MENU dict
  cart.py       # line_total, subtotal(cart_dict)
```

`bill.py`: take items until `end`, skip unknown, print lines + subtotal. If subtotal >= 50: `Free extra tea coupon`.

Cart is a **dict** name → qty. `subtotal` lives in `cart.py` and imports `MENU`.

### Hints

**Hint 1:** `cart[name] = cart.get(name, 0) + qty`

**Hint 2:** Unknown: `if name not in MENU`.

---

# Intermediate (File handling)

`with open`. JSON. `os.path.exists`. **No** `try/except` except you may skip it entirely. No classes.

---

## P7 · Guest list on disk

**In real life:** Names must still be there tomorrow.

### What it must do

`guests.txt` — one name per line.

Menu: add (unique, ignore case), view, remove by number, search keyword, exit.

Load at start (missing file → empty list). Save after **every** change (not only on exit).

`load_lines` / `save_lines` in a small `storage.py` you import (modules + files together).

### What to use

| Persist | text file, one name per line |
| Unique | set of lowercase when checking, list for order |

### Hints

**Hint 1:** If not `os.path.exists`, return `[]`.

**Hint 2:** Save after add and after remove.

---

## P8 · Phone book JSON

**In real life:** Dict that survives restart.

### What it must do

`phone.json` — `{ "Aisha": "9000000001", ... }`

Menu: add, view, find, delete, exit. 10-digit phones. Duplicate phone refused. Missing file → start `{}` and create on first save.

Load/save functions. `indent=2`, `encoding="utf-8"`.

### Hints

**Hint 1:** `json.dump(book, f, indent=2)`

**Hint 2:** After every successful add/delete, `save`.

---

## P9 · Marks CSV → report file

**In real life:** Teacher drops a csv, program writes a report.

### What it must do

Create `marks.csv` (from the program if missing):

```
name,marks
Aisha,80
Ravi,95
Meera,39
```

Read it (skip header), build dict, write `report.txt`:

- each name, marks, Pass/Fail (>= 40)
- average 1 decimal
- topper
- list of fail names

Functions: `load_csv`, `build_report`, `save_text`.

Comprehension OK for fail names: `[n for n, m in d.items() if m < 40]`

### Hints

**Hint 1:** `split(",")` — names have no commas.

**Hint 2:** Build the **whole** report string, then write once.

---

## P10 · Notes folder

**In real life:** Many small text files.

### What it must do

Folder `notes/`. `os.makedirs(..., exist_ok=True)`.

1. New note (title letters/digits/`_` only; body until line `END`)
2. List titles
3. Read
4. Delete if exists
5. Search keyword in bodies (print matching titles)
6. Exit

Missing read: if not exists, print `No such note` (**no try** — `os.path.exists`).

### Hints

**Hint 1:** Path = `os.path.join("notes", title + ".txt")`

**Hint 2:** Search: `os.listdir`, keep `.txt`, read, `if key in text.lower()`.

---

# Exception handling

Same apps, but **nothing** should print a traceback for normal mistakes.

---

## P11 · Safe calculator (never dies)

**In real life:** A tool you leave open.

### What it must do

Menu add/sub/mul/div/exit.

- Bad menu → message
- `int`/`float` fail → `ValueError` → message
- Divide by 0 → message
- Exit works
- Last resort: `except Exception as e: print("Unexpected:", e)`

Use `read_float(prompt)` that retries until valid (loop + except ValueError).

No files required.

### Hints

**Hint 1:** `try/except` **inside** the `while True`, not around the whole loop.

**Hint 2:** `return` from `read_float` on success.

---

## P12 · Safe JSON phone book

**In real life:** Corrupt files happen.

### What it must do

Project 8 + exceptions:

- Missing file → start `{}` (FileNotFoundError)
- Corrupt JSON → print `Corrupt file, starting empty` — **do not overwrite** the corrupt file until the user adds something and you ask `Overwrite corrupt file? (yes/no)` (or never overwrite — pick one and comment it)
- Empty name → ValueError raised by `add()`, caught in main
- Invalid menu int → ValueError
- Find missing name → message, no KeyError crash (use `.get` **or** except KeyError)

### Hints

**Hint 1:** Split `except FileNotFoundError` and `except json.JSONDecodeError`.

**Hint 2:** `add()` raises `ValueError("empty name")` — main prints `e`.

---

## P13 · Config + notes, both safe

**In real life:** Two files, two kinds of failure.

### What it must do

`config.json` default `{"folder": "notes", "max_title": 20}`.  
If missing, write default. If corrupt, use default in memory, do not overwrite.

Notes menu like Project 10, but:

- Title longer than `max_title` → ValueError
- Read/delete missing → FileNotFoundError → message
- Folder from config `folder` key; if key missing, KeyError → use `"notes"`

### Hints

**Hint 1:** `load_config()` returns a dict always.

**Hint 2:** `os.makedirs(cfg.get("folder", "notes"), exist_ok=True)`

---

# Hard (OOP + files + exceptions)

Classes are the model. JSON (or text) is memory on disk. `try` is the edges.

---

## P14 · Todo (Task + TodoList + JSON)

**In real life:** A todo app.

### What it must do

- `Task(text, done=False)` with `__str__` → `[ ] buy milk` / `[x] buy milk`
- `TodoList` with `tasks` list  
  `add`, `view`, `complete(i)`, `remove(i)`  
  `to_data()` → list of dicts  
  `@classmethod from_data(cls, data)`  
  `save(path)`, `load(path)` (FileNotFoundError → empty list)
- Main menu. Invalid index → message. Empty text → ValueError inside `add`.
- Save after every change.

### What to use

| Model | classes |
| Disk | JSON list of `{"text", "done"}` |
| Errors | ValueError, FileNotFoundError, JSONDecodeError |

### Build order

1. Task + TodoList in memory (no file).
2. `to_data` / `from_data`.
3. save/load + menu.
4. Exceptions on bad index / bad JSON.

### Hints

**Hint 1:** `complete`: `self.tasks[i].done = True` after checking range.

**Hint 2:** Load: try json, except missing → empty TodoList.

**Hint 3:** Index from user is 1-based.

---

## P15 · Library CLI (Book, Member, Library)

**In real life:** Issue desk that you can close and reopen.

### What it must do

Classes from OOP Q31.

Persist `library.json` something like:

```
{
  "books": [{"title": "Wings of Fire", "holder": "Aisha"}],
  "members": ["Aisha", "Ravi"]
}
```

Menu: add book, add member, issue, return, list books, list members, exit.

Errors (messages, no traceback):

- Unknown book / member
- Book already issued
- Return of a free book
- Bad menu choice

Save after issue/return/add.

### Build order

1. In-memory issue/return (OOP Q31).
2. `to_data` / `from_data` on Library.
3. Menu + save/load + except.

### Hints

**Hint 1:** On load, create Member objects first, then Books with holder names.

**Hint 2:** `find_book` returns None → main prints `No such book`.

**Hint 3:** Holder stored as **name string** in JSON, not a nested object.

---

## P16 · Shop (Product, Cart, Shop) + stock file

**In real life:** Counter with stock that persists.

### What it must do

OOP Q33 + `shop.json` nested dict `{name: {price, stock}}`.

Menu: view, add to cart, view cart, checkout, restock, exit.

Checkout: **check all stock first**, then reduce, then clear cart, then save. If any line fails, cart and stock unchanged, message.

`Shop.load` / `Shop.save`. Missing file → three default products.

Bad qty (`-1`, `abc`) handled.

### Hints

**Hint 1:** Cart holds Product references or names; prices from Product.

**Hint 2:** Checkout validate loop, then mutate loop.

**Hint 3:** `@classmethod load(cls, path)`.

---

## P17 · Mini bank (Account + Bank + JSON)

**In real life:** Passbooks on disk.

### What it must do

OOP Q32 + file.

- Open account (unique owner, 4-digit pin string)
- Login (3 PIN tries)
- Deposit / withdraw / transfer (logged in)
- Logout / exit

`bank.json`: `{ "Aisha": {"pin": "1357", "balance": 500}, ... }`

`withdraw` / `transfer` raise `ValueError`; main prints `e`.

Never print PINs.

Corrupt JSON → message, do not start with empty **if you can avoid destroying data** — same rule as Project 12.

### Hints

**Hint 1:** Do not save PIN changes you did not mean to. Save after successful money moves and open.

**Hint 2:** Transfer: withdraw then deposit; if withdraw raises, stop.

**Hint 3:** Login remembers `current` owner string.

---

# Done when

1. Sample behaviour works.
2. Invalid input does not show a traceback (from Part D onward).
3. After Part C, killing the program and running again still has data.
4. In Part E you can say: *this class owns X, this file stores Y, this except catches Z.*

## Suggested order

| Sitting | Project |
|---------|---------|
| 1 | 1 shop filter |
| 2 | 2 names + 3 marks |
| 3–4 | 4 toolbox, then 5 or 6 |
| 5 | 7 guests.txt |
| 6 | 8 phone.json |
| 7 | 9 csv report or 10 notes |
| 8 | 11 calculator |
| 9 | 12 safe phone book |
| 10–12 | **one** of 14 / 15 / 16 / 17 |

**Minimum path:** 1 → 4 → 8 → 12 → **14**.  
**Strong path:** 6, 10, 16 or 17.

When Project 14 or 16 runs with this file closed, you can write small Python projects from scratch — that was the original goal.
