# Python Practice Path — Plan, Method, and Recommendations

**Goal:** Stop only *watching* tutorials. Learn to **write Python from a blank file**, then reuse the same logic in real projects.

This folder is for these topics, **in this order**:

1. Conditional Statements
2. Loops
3. Strings
4. Functions
5. Lists
6. Tuples
7. Sets
8. Dictionaries
9. Comprehensions
10. Modules & Packages
11. File Handling
12. Exception Handling
13. Object-Oriented Programming

Functions sit **after Strings and before Lists**. That way you learn `def` / `return` with numbers and text first. Then lists become "functions that take a list".

Files:

| File | Topic | What is inside |
|------|--------|----------------|
| `01-conditional-statements.md` | if / elif / else | 20 questions |
| `02-loops.md` | for / while / range / nested / break / continue | 20 questions |
| `03-strings.md` | text processing | 20 questions |
| `04-functions.md` | `def`, parameters, `return` | 20 questions (no lists yet) |
| `05-lists.md` | collections of items | 20 questions (functions allowed) |
| `06-tuples.md` | fixed records, unpacking, `return a, b` | 20 questions (no sets/dicts) |
| `07-sets.md` | unique items, union / intersection | 20 questions (no dicts) |
| `08-dictionaries.md` | key → value lookup | 20 questions (no comprehensions) |
| `09-comprehensions.md` | short loops that build lists/sets/dicts | 20 questions |
| `10-modules-and-packages.md` | `import`, your own `.py`, packages | 20 questions |
| `11-file-handling.md` | `open`, JSON, save data | 20 questions |
| `12-exception-handling.md` | `try/except/else/finally`, `raise` | 20 questions |
| `13-oop.md` | classes, inheritance, small systems | **35 questions** (20 basic · 10 intermediate · 5 hard) |
| `projects/practice-projects.md` | lists + functions | Set 1 — 11 practical projects |
| `projects/more-practice-projects.md` | lists + functions | Set 2 — 11 more projects |
| `projects/projects-tuples-sets-dicts.md` | tuples + sets + dicts | Set 3 |
| `projects/projects-comprehensions-to-oop.md` | comps → modules → files → except → OOP | Set 4 |
| `topic-projects/` | **one topic at a time** | 2 basic + 1 hard per topic (13 files) |

---

## 1. Why tutorials did not make you able to code from scratch

Watching a tutorial feels like learning, but your brain is only **recognising** code, not **producing** it.

| Watching a tutorial | Writing from scratch |
|---------------------|----------------------|
| You see the answer first | You must invent the steps |
| You copy the teacher's structure | You decide the structure |
| You feel "I understood" | You discover what you did not understand |
| You cannot reuse it later | You build a mental toolbox |

**Understanding a topic ≠ being able to use it.**  
Ability comes only when you **struggle, decide, type, fail, fix, and retry** — with a blank editor.

That is what these **215 questions** are for (plus projects).

---

## 2. The rule that will actually build logic

> **In every question, use ONLY topics you have already learned. Never use the next topic.**

This is the most important design choice. Example:

| You are practising | You MAY use | You must NOT use |
|--------------------|-------------|------------------|
| Conditionals | variables, data types, operators, `input()`, `print()`, `int()`, `float()` | loops, string methods, lists, functions |
| Loops | everything above + `if` + `for`/`while`/`range`/`break`/`continue` | string indexing/slicing/methods, lists, functions |
| Strings | everything above + string indexing, slicing, methods, looping over characters | lists (`split()` is banned because it returns a list), functions |
| Functions | everything above + `def`, parameters, `return`, default/keyword args | lists, tuples, sets, dicts, `return a, b` |
| Lists | everything above + list indexing, slicing, methods, looping over items, **functions** | tuples as storage, sets, dictionaries, comprehensions |
| Tuples | everything above + `( )`, unpacking, `return a, b`, list of tuples | sets, dictionaries, comprehensions |
| Sets | everything above + `{ }`, union/intersection/difference | dictionaries, set comprehensions |
| Dictionaries | everything above + `key → value`, `.get`, `.items`, nested dicts | dict comprehensions, files, OOP |
| Comprehensions | list/set/dict comps | files, `try`, classes |
| Modules | `import`, stdlib, your packages | data-file `open`, classes |
| File Handling | `with open`, json | `try/except` as the main tool, classes |
| Exceptions | `try/except/raise` | custom exception **classes** |
| OOP | `class`, inheritance, composition | metaclasses / ABC |

If you jump to lists while practising `if`, you skip the muscle that thinks: *"I only have if and operators — how do I decide?"*

That muscle is what you need to write projects from scratch.

---

## 3. What I recommend

### Recommendation A — Built-ins always; your own `def` only from Topic 4

You **may** use:

- `print()`, `input()`, `int()`, `float()`, `str()`, `len()`, `abs()`, `round()`
- `range()` (needed for loops)
- later: string methods, then your own functions, then list methods

You **must not** write `def ...` until `04-functions.md`.  
From Functions onward (Lists + projects), you **should** write `def`.

Why: `print` and `input` are how a program talks to a human. Banning them would make practice fake. Banning **your own functions** until Topic 4 forces you to think in steps first. Then functions name those steps.

### Recommendation B — A string *value* is not the Strings topic

This is easy to confuse, so here is the line:

| Allowed before the Strings topic | Not allowed until the Strings topic |
|----------------------------------|-------------------------------------|
| `color == "red"` | `name.upper()`, `name[0]`, `name[1:4]` |
| `password == "admin123"` | `.strip()`, `.replace()`, `.find()` |
| `print("*")` to draw a pattern | looping over characters to count vowels |

- **Conditionals / loops** may *compare* or *print* short text.
- **Strings topic** is when you *process* text (index, slice, methods, character loops).

### Recommendation C — No solutions in these files (on purpose)

If answers sit next to the question, most people peek. Then you are watching a tutorial again.

Each question has **sample input/output** so you can check yourself.

**How to use hints (intermediate + advanced only):**

1. Try **10 minutes** with zero hints.
2. Read **Guide** (which tools to use). Try again.
3. Read **Hint 1**. Try again.
4. Read **Hint 2** only if still stuck.
5. Advanced questions have **Hint 3** — last resort.

If you still cannot solve it, leave it, do the next ones, come back next day. Do **not** search the full solution until you have a working attempt.

I can add a separate `solutions` folder later **after** you have tried — ask me when you want it.

### Recommendation D — The 4-step practice loop (do this for every question)

```
1. READ   the question once. Do not touch the keyboard yet.
2. THINK  write 3–7 steps on paper / as comments. Example:
          # 1. take age
          # 2. convert to int
          # 3. if age >= 18 print Eligible else print Not eligible
3. TYPE   in a blank .py file. No copy-paste from tutorials.
4. TEST   run it with the sample. Then invent one extra input and predict the output
          BEFORE you run it. If your prediction is wrong, your logic has a hole.
```

If you skip THINK and jump to TYPE, you will copy old tutorial shapes from memory. The THINK step is where logic is born.

### Recommendation E — How the 20 questions are split

| Level | Questions | Purpose | Time each |
|-------|-----------|---------|-----------|
| **Basics** | 1–8 | One idea. Build the reflex. | 5–12 min |
| **Intermediate** | 9–16 | Combine 2–3 ideas. Need a plan. | 15–25 min |
| **Advanced** | 17–20 | Tiny real feature. Feels like a project piece. | 30–45 min |

Do them **in order**. Do not jump to advanced. Basics install the tool. Intermediate teaches you to combine. Advanced teaches you to *recognise* the tool inside a real problem — that is the skill used in projects.

### Recommendation F — Finish a topic with a blank-page mini project

At the end of every file there is a **Mini Project**. Rules:

- Close the questions file.
- Open a new empty `.py` file.
- No notes, no previous code.
- If you can build it, you own the topic.
- If you cannot, you only recognised the topic. Redo 4 questions you found hard, then retry the mini project.

### Recommendation G — Suggested daily rhythm

You are in India (Solapur). A realistic pace:

| Day | Work |
|-----|------|
| Day 1–2 | Conditionals basics + intermediate (Q1–Q16) |
| Day 3 | Conditionals advanced + mini project |
| Day 4–5 | Loops basics + intermediate |
| Day 6 | Loops advanced + mini project |
| Day 7–8 | Strings basics + intermediate |
| Day 9 | Strings advanced + mini project |
| Day 10–11 | Functions basics + intermediate |
| Day 12 | Functions advanced + mini project |
| Day 13–14 | Lists basics + intermediate |
| Day 15 | Lists advanced + mini project |
| Day 16–17 | Tuples + Sets (one sitting each if you move fast) |
| Day 18–19 | Dictionaries basics + intermediate |
| Day 20 | Dictionaries advanced + mini project; rebuild phone book with a dict |
| Day 21–22 | Comprehensions |
| Day 23–24 | Modules & Packages (you will create extra `.py` files) |
| Day 25–26 | File Handling |
| Day 27 | Exception Handling |
| Day 28–30 | OOP basics 1–20, then intermediate, then one hard (31 / 33 / 35) |
| Then | Set 4: `projects/projects-comprehensions-to-oop.md` |
| Later | Set 2 list projects, then Set 3 after dictionaries |

That is about **10–15 focused hours**, not 13 full days of sitting. One sitting = 60–90 minutes. Stop while you still have energy. Tired practice creates copy-paste habits.

### Recommendation H — After these 8 topics, what you can already build

You will still not know files or OOP. That is fine. With **if + loops + strings + functions + lists + tuples + sets + dicts** you can already write real apps:

- phone book and canteen **with dictionaries** (not parallel lists)
- unique-visitor / common-friends reports with **sets**
- records and multiple `return` values with **tuples**

Do **not** rush to Comprehensions until Q17 and Q20 of Dictionaries work from a blank file. Extra list-only practice: the `projects/` folder (those were written before dicts; after dicts, rebuild one of them).

---

## 4. How each file is organised

Every topic file has:

1. **You may use / Do not use** — hard boundary
2. **Where this appears in real software** — so practice feels useful
3. **20 questions** with examples
4. **Guide + hints** on Q9–Q20 only
5. **Self-check** extra cases on advanced questions
6. **Mini project** + **You are ready for the next topic when...**

---

## 5. What's deliberately left out

- No `def` until `04-functions.md`
- No lists until `05-lists.md` (so Functions is practised with numbers and strings only)
- No dictionaries / sets / tuples as storage
- No list comprehensions
- No `split()` in the Strings file (it gives you a list too early)
- No file handling, no exceptions, no OOP
- No copy-paste starter code

If a later topic would make a question easier, that is exactly why it is banned. Struggle with the tools you have. That is how you later look at a project and think: *"I need a loop here, a list there, an if here."*

---

## 6. After all 13 topic files

You have the core of Python for writing programs from scratch.

**Still optional later:** testing, virtualenv, web APIs, iterators in depth.

Rebuild **one** old project with **classes + JSON files + try/except**. That is the real finish line of this folder.

When you want a projects pack that uses files + OOP, ask.

---

## Start here

Open `01-conditional-statements.md`.  
Create a folder on your computer like `practice/conditionals/q01.py`.  
One question = one file. Name it. Run it.

Order: conditionals → loops → strings → functions → lists → tuples → sets → dictionaries → comprehensions → modules → files → exceptions → **OOP**.

No more watching. Write.
