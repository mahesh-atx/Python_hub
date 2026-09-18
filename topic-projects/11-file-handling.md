# File handling — 2 basic + 1 hard

**May use:** `with open`, JSON, `os.path.exists`.  
**Must not:** `try/except` as the main tool, classes. Missing file → `exists` check.

Only create files in a folder you make, e.g. `practice/files/`.

---

## Basic 1 — Diary append

**What it must do**

Each run: take one line of text, **append** to `diary.txt` with a date stamp (`datetime`).  
Then read and print the **whole** file.

Run twice — two lines must remain. Never open with `"w"` on this file.

**Hint:** mode `"a"`. End with `\n`. `encoding="utf-8"`.

---

## Basic 2 — Names load/save

**What it must do**

`save_lines(path, items)` / `load_lines(path)` (missing → `[]`).

Main: save `["Aisha", "Ravi"]` to `names.txt`, load, print numbered.

**Hint:** Write `\n` after each name. Strip on read.

---

## Hard — JSON phone book that survives restart

**What it must do**

`phone.json`. Menu add / view / find / delete / exit.

Load at start: if file missing, start `{}`.  
Save after **every** change.

10-digit phones. Duplicate number refused.

Quit, run again — data still there.

**Hint 1:** `json.dump(book, f, indent=2)`  
**Hint 2:** `if not os.path.exists(path): return {}`  
**Hint 3:** Same menu as dict hard project, plus disk.
