# File Handling

**Questions:** 20 (Basics 1–8 · Intermediate 9–16 · Advanced 17–20)

You already know: modules (`os`, `json` is allowed here), functions, collections.

Programs forget everything when they stop — unless they **write a file**.

---

## You may use

- `open(path, mode)`, `with open(...) as f:`
- Modes: `"r"`, `"w"`, `"a"`, `"r+"` (use r/w/a mainly)
- `f.read()`, `f.readline()`, `f.readlines()`, `f.write()`, `f.writelines()`
- `encoding="utf-8"` (use it)
- `os.path.exists`, `os.path.join`, `os.remove` (careful)
- `json.dump` / `json.load` for dict/list storage
- Comprehensions to process lines

## Do NOT use

- `try/except` as the main tool (next topic). Use `with`. If a question needs a missing file, create it first or use `os.path.exists`.
- OOP classes
- Databases, CSV module is **optional** — prefer split/join or json unless a question asks `csv`
- Deleting random files on your computer. Only touch files **you create** inside a folder like `practice/files/`

## Rules that save you

1. Always `with open(...) as f:` — it closes the file even if you forget.
2. `"w"` **erases** the whole file. `"a"` adds to the end. `"r"` reads.
3. `write` does not add a newline unless you put `\n`.
4. Paths: `os.path.join("practice", "files", "notes.txt")` or a folder you make next to the script.

Create the folder `practice/files/` before you start.

From Q9, functions like `def load_lines(path):` **return** data; main prints.

---

# Basics (Q1–Q8)

---

### Q1 · Write

**Task:** Write `hello.txt` with one line: `Hello, Solapur` plus newline. Use `"w"` and `with`.

Open the file in a text editor to check.

---

### Q2 · Read all

**Task:** Read `hello.txt` with `f.read()` and print it.

---

### Q3 · Append

**Task:** Append a second line `Python practice` to `hello.txt`. Then read and print the whole file. You should see **two** lines.

---

### Q4 · write vs w again

**Task:** Open `hello.txt` with `"w"` and write only `Fresh start\n`. Read it. The old lines must be **gone**. This is the danger of `"w"`.

---

### Q5 · writelines

**Task:** `lines = ["tea\n", "coffee\n", "water\n"]`  
Write them to `menu.txt` with `writelines`. Read and print.

---

### Q6 · readlines + strip

**Task:** Read `menu.txt` with `readlines()`. Print a numbered list with `.strip()` on each line (no extra blank lines).

**Expected:**

```
1. tea
2. coffee
3. water
```

---

### Q7 · Loop the file

**Task:** `for line in f:` (do not `read()` first). Print each `line.strip()`.

This does not load the whole file at once — good for large files.

---

### Q8 · exists

**Task:** Ask the user a filename. If `os.path.exists(path)`, print `Found` and print its text. Else print `Not found` (do **not** open it).

Test with `menu.txt` and `nope.txt`.

---

# Intermediate (Q9–Q16)

---

### Q9 · save_lines / load_lines

**Task:**

```
def save_lines(path, items):
    # write each item on its own line

def load_lines(path):
    # return a list of stripped lines
    # if file missing: return []
```

Main: save `["Aisha", "Ravi"]` to `names.txt`, load, print.

**Guide:** Missing file: `if not os.path.exists(path): return []`. Do not use try/except.

**Hint 1:** Remember `\n` when writing.

**Hint 2:** Strip when reading or you keep `"Aisha\n"`.

---

### Q10 · Guest list on disk

**Task:** Menu: add name, view, exit.  
On **exit**, write all names to `guests.txt` (one per line).  
On **start**, if the file exists, load names into the list so they survive closing the program.

**Guide:** `load` at the top of main. `save` before `break` on exit.

**Hint 1:** Reuse Q9 functions.

**Hint 2:** If you save after every add, a crash still keeps data — even better. Do that if you want.

---

### Q11 · Count lines, words, characters

**Task:** Write `def wc(path):` that returns a tuple `(lines, words, chars)` of a text file.  
Chars can include spaces and newlines (`len(f.read())`). Words: `len(text.split())`. Lines: `len(text.splitlines())` or count `\n`.

Print the three numbers for `menu.txt`.

**Guide:** Return a tuple (you know unpacking). One `read()`.

**Hint 1:** Empty file → `(0, 0, 0)` or `(1,0,0)` depending on method — pick splitlines so empty is 0 lines.

**Hint 2:** `split()` without args splits on any whitespace.

---

### Q12 · Copy file

**Task:** `def copy_file(src, dest):` read src, write dest.  
If src does not exist, print `No source` and return.  
Copy `menu.txt` to `menu_backup.txt`. Read backup to verify.

**Guide:** Two `with` blocks, or read all then write. Do not use `shutil` (you may know it — still write it yourself).

**Hint 1:** `"rb"` / `"wb"` not needed for text.

**Hint 2:** `with open(src) as a, open(dest, "w") as b:` is allowed.

---

### Q13 · JSON save a dict

**Task:** `phone = {"Aisha": "9000000001", "Ravi": "9000000002"}`  
`json.dump(phone, f, indent=2)` to `phone.json`.  
Open the file in an editor: it should look like JSON, not Python.

Then `json.load` into a new dict, print `data["Aisha"]`.

**Guide:** `import json`. `with open(..., "w", encoding="utf-8")`. dump to the file object, not the path (unless you use a helper).

**Hint 1:** `json.dump(obj, f)` — first object, second file.

**Hint 2:** `indent=2` makes it readable.

---

### Q14 · JSON as the database

**Task:** Phone book menu (add, view, find, delete, exit).  
Load `phone.json` at start (if missing, start `{}` and create later).  
Save the **whole dict** after every change.

**Guide:** `load_book()` / `save_book(book)`. Same as Set 3 translator, but durable.

**Hint 1:** After `pop`, save again.

**Hint 2:** Keys are strings. Title-case names.

---

### Q15 · Log file

**Task:** Every time the program runs, append one line to `run.log`:

`2026-09-18 21:00  program started`

Use `datetime.datetime.now()` for the stamp. Run the program **three times**. The file must have three lines.

**Guide:** Mode `"a"`. Never `"w"` on a log.

**Hint 1:** `from datetime import datetime` then `datetime.now().strftime("%Y-%m-%d %H:%M")`

**Hint 2:** End with `\n`.

---

### Q16 · Simple CSV without csv module

**Task:** Write `marks.csv`:

```
name,marks
Aisha,80
Ravi,95
Meera,70
```

Read it: skip the header line, build a dict `name → int(marks)`. Print the topper.

**Guide:** `lines[0]` is header. For the rest: `name, marks = line.strip().split(",")`.

**Hint 1:** Do not split on comma inside names — keep names one word here.

**Hint 2:** `int(marks)` after split.

---

# Advanced (Q17–Q20)

---

### Q17 · Notes app

**Real-world:** A tiny notebook.

**Task:** `notes/` folder (create it). Each note is a file `title.txt` (safe title: only letters, digits, underscore).

Menu:

1. New note — title + body (one or more lines until a line that is only `END`)
2. List notes — filenames without `.txt`
3. Read note by title
4. Delete note (`os.remove` only if exists)
5. Search keyword — print titles whose **body** contains the keyword (ignore case)
6. Exit

Functions for safe_title, path_for, save, read.

**Self-check:** Invalid title `my note` (space) → reject or replace spaces with `_`. Your choice; be consistent.

**Guide:** `os.listdir` + keep files ending `.txt`. Search: load each file.

**Hint 1:** `os.path.join("notes", title + ".txt")`

**Hint 2:** Create `notes` with `os.makedirs("notes", exist_ok=True)` — `exist_ok` avoids error if it exists (this is not try/except).

**Hint 3:** Delete: `if os.path.exists(p): os.remove(p)`

---

### Q18 · Merge two guest files

**Real-world:** Two events, unique combined invite list.

**Task:** `sat.txt` and `sun.txt` — one name per line (create them in code first).  
Write `weekend.txt` with unique names (case-insensitive), **sorted**, one per line. Print how many unique.

Use a **set** of lowercase for uniqueness, but write Title case.

**Self-check:** Aisha on both days appears once.

**Guide:** Load lines → set of lower → sorted → title → save.

**Hint 1:** Reuse `load_lines`.

**Hint 2:** `sorted(set_of_lower)` then `.title()` when writing.

**Hint 3:** Empty input files are OK.

---

### Q19 · JSON nested: shop stock

**Real-world:** Inventory that survives restart.

**Task:** File `shop.json`:

```
{
  "soap": {"price": 40, "stock": 10},
  "oil": {"price": 180, "stock": 5}
}
```

Menu: view, sell, restock, exit. Load at start, save after sell/restock.

If `shop.json` missing, create it with the default dict above.

**Self-check:** Sell 2 soap, quit, run again — stock must be 8.

**Guide:** Nested dict + `json.dump` / `load`. Same as Dictionaries Q18 plus files.

**Hint 1:** `json.dump(shop, f, indent=2)`

**Hint 2:** After `load`, keys are str, numbers are int. Fine.

**Hint 3:** Missing file: `if not exists: save(default); shop = default`

---

### Q20 · Report from CSV-like file

**Real-world:** Teacher exports marks, program writes a report.

**Task:** Read `marks.csv` (Q16). Write `report.txt`:

```
Class report
------------
Aisha: 80  Pass
Ravi: 95  Pass
Meera: 70  Pass
Average: 81.7
Topper: Ravi
```

Pass if marks >= 40. Average 1 decimal.

All of this through functions: `load_csv`, `build_report_text`, `save_text`.

**Self-check:** Change a mark in csv, rerun, report changes.

**Guide:** Load to dict, compute, build **one string** with `\n`, write once.

**Hint 1:** Do not print-and-hope. Return the report string, then write it.

**Hint 2:** Topper: max by value.

**Hint 3:** UTF-8 encoding on write.

---

# Mini project

**"Todo on disk"**

List of tasks in `todo.json` as a list of dicts: `{"text": "...", "done": false}`.

Menu: add, view, mark done, delete, exit. Always save.

No classes. If the file is missing, start `[]`.

---

## Ready for Exception Handling

- `"w"` vs `"a"` is automatic
- You always use `with`
- JSON round-trip (save dict, load dict) works
- Q10 or Q14 still has data after you close the terminal

Next file: `12-exception-handling.md`
