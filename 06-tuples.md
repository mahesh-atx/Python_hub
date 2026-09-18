# Tuples

**Questions:** 20 (Basics 1–8 · Intermediate 9–16 · Advanced 17–20)

You already know: conditionals, loops, strings, functions, lists.

---

## You may use

- Everything from Lists (including `def` / `return`)
- Tuple creation: `(1, 2, 3)`, `tuple(...)`, packing `t = 1, 2`
- Indexing and slicing (same as lists): `t[0]`, `t[-1]`, `t[1:3]`
- `len(t)`, `in`, `.count()`, `.index()`
- Concatenation `+`, repeat `*`
- Looping: `for x in t`
- Unpacking: `name, marks = student`
- Functions that `return a, b` (this **is** a tuple — now allowed)
- A **list of tuples** (records)

## Do NOT use

- Sets, dictionaries
- List / set / dict comprehensions
- `namedtuple`, `dataclass`
- Files, exceptions, OOP
- Changing a tuple in place (`t[0] = 5` will crash — that is the lesson)

## Why tuples exist

A **list** is a bag you keep changing: cart, to-do, queue.

A **tuple** is a **fixed record**: `(name, phone)`, `(x, y)`, `(status, value)`.  
You are not supposed to append or overwrite pieces. If you need to “change” it, you build a **new** tuple.

| List | Tuple |
|------|--------|
| `[]` | `()` |
| grows and shrinks | length stays |
| `append` / `pop` | no such methods |
| “many of the same kind” | “a few fields that belong together” |

**Single-item tuple:** `(5,)` is a tuple. `(5)` is just the number 5. The comma is what makes the tuple.

From Q9 onward, put the core logic in a function.

---

# Basics (Q1–Q8)

---

### Q1 · Create and print

**Task:** Create a tuple of 4 integers: `10, 20, 30, 40`. Print the tuple and its type using `type(t)`.

**Expected:** something like

```
(10, 20, 30, 40)
<class 'tuple'>
```

---

### Q2 · Indexing

**Task:** `city = ("Solapur", "Pune", "Mumbai", "Nagpur")`  
Print first, last, and the item at index 2.

**Expected:**

```
Solapur
Nagpur
Mumbai
```

---

### Q3 · The comma rule

**Task:** Create three variables and print `type` of each:

- `a = (5)`
- `b = (5,)`
- `c = 5,`

Print whether each is a tuple or not (print the type).

**Expected idea:** `a` is `int`. `b` and `c` are `tuple`.

---

### Q4 · Length and membership

**Task:** `skills = ("python", "sql", "git", "html")`  
Take a skill from the user (lowercase it). Print `Found` or `Not found`. Also print `len(skills)`.

**Example:**

```
Input:  SQL
Output: Found
        4
```

---

### Q5 · Loop

**Task:** Loop over `skills` from Q4 and print `1. python` etc. (1-based).

---

### Q6 · count and index

**Task:** `marks = (80, 70, 80, 90, 80)`  

Print how many times 80 appears (`.count`).  
Print the index of the **first** 90 (`.index`).

**Expected:**

```
3
3
```

---

### Q7 · Slicing

**Task:** `nums = (1, 2, 3, 4, 5, 6)`  
Print: first 3, last 2, middle without first and last.

**Expected:**

```
(1, 2, 3)
(5, 6)
(2, 3, 4, 5)
```

---

### Q8 · Concatenate

**Task:** `a = (1, 2)`, `b = (3, 4)`  
Create `c = a + b` and `d = a * 3`. Print `c` and `d`.

**Expected:**

```
(1, 2, 3, 4)
(1, 2, 1, 2, 1, 2)
```

---

# Intermediate (Q9–Q16)

---

### Q9 · Unpack

**Task:** `student = ("Aisha", 87, "Solapur")`  
Unpack into `name`, `marks`, `city`. Print:

```
Aisha scored 87 from Solapur
```

**Guide:** `name, marks, city = student`. Number of variables must match the length.

**Hint 1:** If you write only two names, Python raises `ValueError`. That is a signal you unpacked wrong.

**Hint 2:** You can also unpack in a loop later: `for name, marks in records:`

---

### Q10 · Swap

**Task:** Take two integers `x` and `y`. Swap them using tuple unpacking. Print after swap.

Do **not** use a third variable `temp`.

**Example:**

```
Input:  3
        9
Output: 9 3
```

**Guide:** `x, y = y, x`. The right side builds a tuple, then unpacks into the left.

**Hint 1:** This is the same idea as `a, b = student`.

**Hint 2:** Works for three too: `x, y, z = z, x, y` (rotate) — not required here.

---

### Q11 · Function returns two values

**Task:** Write `def min_max(a, b, c):` that **returns both** the smallest and the largest (two numbers).

Main: take three integers, unpack: `lo, hi = min_max(x, y, z)` then print them.

**Example:**

```
Input:  4 9 1
Output: Min: 1
        Max: 9
```

**Guide:** `return small, large` is a tuple. Main unpacks it. This is why Functions banned `return a, b` until now.

**Hint 1:** Inside the function you may use `min()` / `max()` **or** ifs. Return once at the end.

**Hint 2:** `lo, hi = min_max(...)` — if you forget to unpack and print the return, you will see `(1, 9)`.

---

### Q12 · “Change” a tuple the legal way

**Task:** `t = (10, 20, 30, 40)`  
Change the 20 into 99 **without** `t[1] = 99` (that crashes).

Pattern: convert to list → change → convert back to tuple. Print the new tuple.

**Expected:**

```
(10, 99, 30, 40)
```

**Guide:** `a = list(t)` then `a[1] = 99` then `t = tuple(a)`. You replaced the whole tuple, you did not mutate it.

**Hint 1:** `tuple(list)` and `list(tuple)` are the two bridges.

**Hint 2:** Slicing also works: `t = t[:1] + (99,) + t[2:]`. Try this after the list way.

---

### Q13 · Record: one student

**Task:** Write `def make_student(name, marks, city):` that returns a tuple `(name.title(), marks, city.title())`.  
Reject marks outside 0–100 by returning `None` (main prints `Invalid marks`).

Main: take the three fields, call the function, if not `None` unpack and print a line.

**Example:**

```
Input:  aisha
        88
        solapur
Output: Aisha | 88 | Solapur
```

**Guide:** A tuple is a good return when the pieces belong together and will not grow.

**Hint 1:** `if marks < 0 or marks > 100: return None`

**Hint 2:** Main: `st = make_student(...)` then `if st is None:` else unpack.

---

### Q14 · List of tuples

**Task:** Take N students. Each student is stored as **one tuple** `(name, marks)` in a list `records`.

Print every student. Then print the topper name (first if tie). Write `def topper(records):` that returns the **name**.

**Example:**

```
Input:  3
        Aisha 80
        Ravi 95
        Meera 70
Output: Aisha 80
        Ravi 95
        Meera 70
        Topper: Ravi
```

**Guide:** This replaces **parallel lists**. One record, one tuple. Loop `for name, marks in records:`.

**Hint 1:** `records.append((name, marks))` — inner `()` needed, otherwise `append` sees two arguments.

**Hint 2:** Topper: `best = records[0]` then `if rec[1] > best[1]: best = rec`. Return `best[0]`.

---

### Q15 · Unpack in a loop + total

**Task:** Using the same `records` idea, write `def total_marks(records):` that returns the sum of marks.  
Main prints total and average (1 decimal). If N is 0, print `No students`.

**Guide:** `for name, marks in records: total += marks`. You can ignore name with `for _, marks in records:` if you like (`_` is a normal variable people use for “I do not need this”).

**Hint 1:** Average = total / len(records). Use `/`.

**Hint 2:** Empty list: check before you divide.

---

### Q16 · Nested tuple

**Task:** `point = ((2, 3), (7, 8))` is two points.  
Write `def distance_sq(p):` that takes **one** point `(x, y)` and returns `x*x + y*y` (squared distance from origin — no need for square root).

Main: print the squared distance of both points, and which point is farther (compare the two returned numbers). Print the point tuple that is farther.

**Expected:**

```
(2, 3) -> 13
(7, 8) -> 113
Farther: (7, 8)
```

**Guide:** `p1, p2 = point` then `x, y = p1`. Nested unpack.

**Hint 1:** `point[0][0]` is 2. Unpacking is cleaner than double indexes.

**Hint 2:** Compare `distance_sq(p1)` with `distance_sq(p2)`.

---

# Advanced (Q17–Q20)

---

### Q17 · Safe divide returns

**Real-world:** Functions often return “did it work?” plus a result. A tuple is the simple way (before exceptions).

**Task:** Write `def safe_div(a, b):` that returns:

- `("ok", result)` when b is not 0
- `("error", "Cannot divide by zero")` when b is 0

Main: take a and b, unpack `status, value = safe_div(a, b)`.  
If status is `ok`, print `Result: ...`  
If `error`, print `Error: ...`

**Example:**

```
Input:  12 4
Output: Result: 3.0
```

```
Input:  12 0
Output: Error: Cannot divide by zero
```

**Self-check:** `5 2` → `2.5`.

**Guide:** `return "ok", a / b` is already a tuple. Main must branch on `status`. Never divide before the check.

**Hint 1:** `if b == 0: return "error", "Cannot divide by zero"`

**Hint 2:** Main does not calculate. It only unpacks and prints.

**Hint 3:** Both branches return **two** things so unpacking never breaks.

---

### Q18 · Contact list as list of tuples

**Real-world:** A tiny phone book **before** dictionaries. Each contact is `(name, phone)`.

**Task:** Menu:

1. Add — name title case, phone 10 digits (reuse your digit-clean idea). Reject duplicate **phone**.
2. View — `Aisha - 9876543210`
3. Search by name keyword (ignore case)
4. Search by exact phone
5. Exit

Store `contacts = []` of tuples. To “edit” a contact you would replace the whole tuple (not required here).

Write functions: `add_contact`, `view`, `search_name`, `search_phone`.  
`find_phone(contacts, phone)` returns index or `-1`.

**Self-check:** Two adds with the same phone → second rejected. Empty search → `No match`.

**Guide:** `contacts.append((name, phone))`. Loop `for name, phone in contacts:`. Duplicate: scan phones.

**Hint 1:** Phone clean: keep digits only, `len == 10`.

**Hint 2:** Search name: `if key in name.lower()`.

**Hint 3:** You cannot `contacts[i][1] = new_phone`. To change later: `contacts[i] = (name, new_phone)`.

---

### Q19 · Sort records by marks

**Real-world:** Leaderboards. You have records; you want highest first.

**Task:** Take N `(name, marks)` records. Print them **sorted by marks descending**. If marks tie, keep original order (stable sort) or sort by name — **keep original order on ties** (Python’s `.sort` is stable).

Write `def by_marks(rec):` that returns `rec[1]`.  
Then `records.sort(key=by_marks, reverse=True)`.

Do **not** use `lambda` if you have not learned it. A named function is better practice anyway.

Print the sorted list.

**Example:**

```
Input:  4
        Aisha 80
        Ravi 95
        Meera 80
        Dev 70
Output: Ravi 95
        Aisha 80
        Meera 80
        Dev 70
```

(Aisha before Meera because she appeared first.)

**Self-check:** One student → just that line.

**Guide:** `key=` needs a function that takes **one record** and returns the field to sort on.

**Hint 1:** `def by_marks(rec): return rec[1]`

**Hint 2:** `reverse=True` for high to low.

**Hint 3:** `.sort` changes the list in place. Copy first with `records.copy()` if you also need the original.

---

### Q20 · Match result card

**Real-world:** A sports app stores one match as structured data, then a list of matches.

**Task:** Each match is a tuple:

`(home, away, home_goals, away_goals)`  
example: `("India", "Australia", 2, 1)`

Take N matches into a list.

Then print:

1. Each match as `India 2-1 Australia` and `Win: India` / `Draw`
2. How many wins for a team name the user types after the list (count home or away wins)
3. Highest scoring match (max `home_goals + away_goals`; first if tie) — print the match line

Functions:

- `def winner(match):` returns `"Draw"` or the winning team name
- `def total_goals(match):` returns the sum
- `def wins_for(records, team):` returns a count

**Example:**

```
Input:
2
India Australia 2 1
Spain Italy 1 1
Team: India
Output:
India 2-1 Australia  Win: India
Spain 1-1 Italy  Draw
Wins for India: 1
Highest scoring: India 2-1 Australia
```

**Self-check:** Team with 0 wins prints 0. Draw does not count as a win.

**Guide:** Unpack `home, away, hg, ag = match` inside each function. Compare `hg` and `ag`.

**Hint 1:** Winner: `if hg > ag: return home` elif `ag > hg: return away` else `"Draw"`.

**Hint 2:** `wins_for`: loop, `if winner(m) == team: count += 1`.

**Hint 3:** Highest: same “best so far” pattern on `total_goals(m)`.

---

# Mini project

**"Marksheet as records"**

List of tuples `(name, maths, science, english)`.

Menu: add student, view all, topper by **average**, failed if any subject < 35, search by name.

Each student is one tuple. Functions for average and pass/fail. No sets, no dicts.

---

## Ready for Sets

- You unpack without counting on your fingers
- `return a, b` feels natural
- You store pairs as `(name, phone)` not two lists
- You know why `t[0] = 1` is illegal and how to rebuild a tuple instead

Next file: `07-sets.md`
