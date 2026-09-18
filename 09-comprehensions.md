# Comprehensions

**Questions:** 20 (Basics 1–8 · Intermediate 9–16 · Advanced 17–20)

You already know: lists, tuples, sets, dictionaries, functions, loops, `if`.

A comprehension does **not** add new power. It is a **short loop that builds a collection**. If you cannot write the `for` loop, do not write the comprehension.

---

## You may use

- Everything through Dictionaries
- List comps: `[expr for x in seq if cond]`
- Set comps: `{expr for x in seq}`
- Dict comps: `{k: v for ...}`
- Nested `for` in a comprehension (when a question asks)
- `enumerate()`, `zip()` — now allowed
- `range`, `split`, existing methods

## Do NOT use

- Generator functions (`yield`) — not this topic
- Modules beyond what you already used (`math` is OK if you know it; not required)
- File handling, `try/except`, classes / OOP
- A comprehension just to look clever when a loop is clearer (Q16–Q20 will still ask for comps so you practise them)

## The one picture

```
squares = []
for n in range(1, 6):
    squares.append(n * n)
```

is the same as:

```
squares = [n * n for n in range(1, 6)]
```

| Piece | Meaning |
|-------|---------|
| `n * n` | what you append / the value |
| `for n in range(1, 6)` | the loop |
| `if n % 2 == 0` (optional) | the filter |

**Wrong habit:** putting `print` or `.append` inside the expression. The comprehension **already** builds the list.

From Q9, wrap in a function that **returns** the new collection.

---

# Basics (Q1–Q8)

Write the `for` loop in comments first, then the comprehension. Print the result.

---

### Q1 · Squares

**Task:** Build a list of squares of 1 through 10.

**Expected:** `[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]`

---

### Q2 · First letters

**Task:** `names = ["Aisha", "Ravi", "Meera", "Dev"]`  
List of first letters.

**Expected:** `['A', 'R', 'M', 'D']`

---

### Q3 · Even numbers

**Task:** Evens from 1 to 20 inclusive, using `if` in the comprehension.

**Expected:** `[2, 4, 6, ..., 20]`

---

### Q4 · Lowercase

**Task:** `words = ["Tea", "COFFEE", "Water"]`  
New list of lowercase strings.

---

### Q5 · Lengths

**Task:** Same `words`. List of `len(w)` for each.

**Expected:** `[3, 6, 5]`

---

### Q6 · Set comprehension: unique lengths

**Task:** `words = ["aa", "bb", "ccc", "dd", "eee"]`  
A **set** of word lengths.

**Expected:** `{2, 3}` (order does not matter)

---

### Q7 · Dict comprehension: name → length

**Task:** `names = ["Aisha", "Ravi", "Dev"]`  
Dict mapping each name to its length.

**Expected:** `{"Aisha": 5, "Ravi": 4, "Dev": 3}`

---

### Q8 · From a string

**Task:** Take a sentence. List of characters that are **letters** only (skip spaces and digits). Keep original case.

**Example:** `"Hi 2 you"` → `['H', 'i', 'y', 'o', 'u']`

---

# Intermediate (Q9–Q16)

---

### Q9 · Filter + transform

**Task:** Write `def long_upper(words):`  
Return a list of words with length **> 3**, in **uppercase**.

```
Input words: ["hi", "python", "SQL", "code"]
Output: ["PYTHON", "CODE"]
```

(`SQL` has length 3, so it is out.)

**Guide:** `[w.upper() for w in words if len(w) > 3]`

**Hint 1:** Filter is `if`. Transform is the expression **before** `for`.

**Hint 2:** Do not write an `if/else` unless you need two different values (that is Q10).

---

### Q10 · if/else in the expression

**Task:** `nums = [5, -2, 0, 9, -7]`  
New list: negative numbers become `0`, others stay.  
`[0, 0, 0, 9, 0]` wait: 5 stays 5, -2 becomes 0, 0 stays 0, 9 stays 9, -7 becomes 0 → `[5, 0, 0, 9, 0]`

**Guide:** `[n if n >= 0 else 0 for n in nums]`  
The `if/else` is **part of the value**, not a filter. Filter `if` sits at the **end**.

**Hint 1:** Value-if-else: `x if cond else y` **before** `for`.  
Filter: `if cond` **after** `for`.

**Hint 2:** You cannot write `[n for n in nums if n >= 0 else 0]` — that is a syntax error.

---

### Q11 · Dict: even keys only

**Task:** `d = {"a": 1, "b": 2, "c": 3, "d": 4}`  
New dict of items whose **value is even**.

**Expected:** `{"b": 2, "d": 4}`

**Guide:** `{k: v for k, v in d.items() if v % 2 == 0}`

**Hint 1:** Loop `.items()`.

**Hint 2:** Filter on `v`, keep both `k` and `v`.

---

### Q12 · Invert a dict

**Task:** `{"Aisha": 80, "Ravi": 95, "Meera": 70}`  
New dict **marks → name**. Assume marks are unique.

**Expected:** `{80: "Aisha", 95: "Ravi", 70: "Meera"}`

**Guide:** `{v: k for k, v in d.items()}`

**Hint 1:** If two students had the same marks, the later one would overwrite. Unique is assumed.

**Hint 2:** Do not use a loop in the submitted code — comprehension only.

---

### Q13 · zip two lists into a dict

**Task:**  
`keys = ["tea", "coffee", "water"]`  
`vals = [12, 20, 10]`  
Dict via comprehension + `zip`.

**Expected:** `{"tea": 12, "coffee": 20, "water": 10}`

**Guide:** `{k: v for k, v in zip(keys, vals)}`  
(or `dict(zip(keys, vals))` — both OK; write the comprehension so you practise it)

**Hint 1:** `zip` stops at the shorter list.

**Hint 2:** Unpack the pair in the `for`.

---

### Q14 · Flatten one level

**Task:** `groups = [[1, 2], [3, 4, 5], [6]]`  
One list: `[1, 2, 3, 4, 5, 6]`

**Guide:** `[x for row in groups for x in row]`  
Read **left to right** like nested loops: outer `row`, inner `x`.

**Hint 1:**

```
for row in groups:
    for x in row:
        ...
```

**Hint 2:** Do not use `sum(groups, [])` even if you have seen it. Write the comprehension.

---

### Q15 · Set of vowels in a sentence

**Task:** Function `def vowels_used(s):` returns a **set** of vowels that appear (lowercase).

```
Input:  Education
Output: {'e', 'u', 'a', 'i', 'o'}   # any order; all five
```

**Guide:** `{ch.lower() for ch in s if ch.lower() in "aeiou"}`

**Hint 1:** Set comprehension gives uniqueness for free.

**Hint 2:** `"Rhythm"` → empty set.

---

### Q16 · Index labels with enumerate

**Task:** `tasks = ["code", "walk", "read"]`  
List of strings `"1. code"`, `"2. walk"`, `"3. read"`.

**Guide:** `[str(i) + ". " + t for i, t in enumerate(tasks, start=1)]`

**Hint 1:** `enumerate(seq, start=1)` gives 1-based numbers.

**Hint 2:** `i` is int — convert with `str(i)`.

---

# Advanced (Q17–Q20)

---

### Q17 · Menu dict → filtered list

**Real-world:** Show only items cheaper than a budget.

**Task:**  
`menu = {"tea": 12, "coffee": 20, "vada pav": 25, "water": 10, "biryani": 90}`  
Write `def under(menu, limit):` that returns a **list of names** whose price is `< limit`, **sorted**.

```
under(menu, 20) → ["tea", "water"]
```

**Self-check:** `limit 10` → `[]`. `limit 100` → all five names sorted.

**Guide:** `[name for name, price in menu.items() if price < limit]` then `.sort()` on the result, **or** `sorted(...)`.

**Hint 1:** Filter on price, collect **names**.

**Hint 2:** `sorted(the_list)` returns a new list.

**Hint 3:** Do not mutate `menu`.

---

### Q18 · Word length histogram

**Real-world:** Text stats.

**Task:** Take a sentence. Build a dict `{word: length}` for unique lowercase words (if a word repeats, still one key).

Then, using **another** comprehension, list of words with length `>= 5`.

```
Input:  I love python python lists
Output:
{'i': 1, 'love': 4, 'python': 6, 'lists': 5}
Long: ['python', 'lists']
```

**Guide:** First `{w: len(w) for w in set(s.lower().split())}` or from a list (last length wins, same). Then `[w for w, n in d.items() if n >= 5]`.

**Hint 1:** `split` + lowercase first.

**Hint 2:** Two comprehensions, two steps. Do not nest them into a mess.

**Hint 3:** Unique: set of words, then dict comp.

---

### Q19 · Matrix: flatten and diagonal

**Real-world:** Tables / grids.

**Task:**  
`m = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]`  (3×3)

1. Flatten to one list (Q14)
2. Main diagonal `[1, 5, 9]` — positions `[0][0]`, `[1][1]`, `[2][2]`
3. All values `> 4`

Write three functions, each one comprehension.

**Expected:**

```
[1, 2, 3, 4, 5, 6, 7, 8, 9]
[1, 5, 9]
[5, 6, 7, 8, 9]
```

**Guide:** Diagonal: `[m[i][i] for i in range(len(m))]`. Values > 4: flatten with `if x > 4`.

**Hint 1:** Square matrix assumed. `len(m)` rows.

**Hint 2:** Do not hard-code `m[0][0], m[1][1], m[2][2]` — use `range`.

**Hint 3:** Filter can sit on the flatten comprehension: `[x for row in m for x in row if x > 4]`

---

### Q20 · Index contacts

**Real-world:** Search index.

**Task:** List of tuples `(name, city)`:

```
data = [("Aisha", "Solapur"), ("Ravi", "Pune"), ("Meera", "Solapur"), ("Dev", "Pune")]
```

1. Dict `name → city` (comprehension)
2. Dict `city → list of names` — **this one is harder in a comprehension**. You may use a normal loop for (2), then for (3) use a comprehension.
3. From the city dict: list of cities that have **2 or more** people.

**Expected (3):** `["Solapur", "Pune"]` (any order)

**Self-check:** Add `("Omar", "Nashik")` → Nashik has 1, should not appear in (3).

**Guide:** (1) `{n: c for n, c in data}`. (2) loop `setdefault` / `if city not in`. (3) `[city for city, names in d.items() if len(names) >= 2]`

**Hint 1:** Building `city → list` in a comprehension is awkward (you would overwrite). A loop is the honest tool. That is part of the lesson.

**Hint 2:** Comprehensions are not always better. Use them to **map and filter**. Use a loop to **group**.

**Hint 3:** After the loop, (3) must be a comprehension.

---

# Mini project

**"Clean a messy name list"**

Input list like `["  aisha ", "RAVI", "aisha", " Dev", "ravi"]`.

Using comprehensions + a set:

1. Strip + title-case each
2. Unique names (order does not matter, or keep order with a loop — your choice, say which)
3. Dict name → length
4. List of names longer than 3 letters, sorted

No files. No classes.

---

## Ready for Modules

- You can expand a comprehension back into a `for` loop on paper
- You know `if` at the end = filter, `x if c else y` before `for` = two values
- You flatten with two `for`s
- You did **not** use a comprehension to group (Q20)

Next file: `10-modules-and-packages.md`
