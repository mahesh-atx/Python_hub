# Sets

**Questions:** 20 (Basics 1–8 · Intermediate 9–16 · Advanced 17–20)

You already know: lists, tuples, functions, strings, loops, conditionals.

---

## You may use

- Everything from Tuples
- `set()`, `{1, 2, 3}`, `set(a_list)`
- `.add()`, `.remove()`, `.discard()`, `.pop()`, `.clear()`, `.copy()`
- `.union()` / `|`, `.intersection()` / `&`, `.difference()` / `-`, `.symmetric_difference()` / `^`
- `.issubset()`, `.issuperset()`, `.isdisjoint()`, `.update()`
- `in` / `not in`, `len`, loop `for x in s`

## Do NOT use

- Dictionaries
- Set comprehensions: `{x for x in ...}`
- Files, exceptions, OOP
- Relying on set **order** (there is no order — no `s[0]`)

## Why sets exist

A set is a bag of **unique** items. No duplicates. No index.

| Use a list | Use a set |
|------------|-----------|
| Order matters (queue, playlist) | You only care “is it in or not?” |
| Duplicates allowed | Duplicates must vanish |
| `records[0]` | membership: `if name in invited` |

**Empty set:** `set()`  
`{}` is an **empty dict**, not a set. This is the #1 beginner trap.

From Q9 onward, wrap logic in functions.

---

# Basics (Q1–Q8)

---

### Q1 · Create

**Task:** Create a set of colours: red, green, blue, red (write red twice). Print the set and its length.

**Expected idea:** length is **3**. The second red disappeared.

---

### Q2 · Empty set trap

**Task:** Print `type(set())` and `type({})`.

**Expected:** `set` then `dict`.

Remember: always `set()` for empty.

---

### Q3 · add

**Task:** Start `s = {"tea", "coffee"}`. Add `"water"`, add `"tea"` again. Print `s` and `len(s)`.

**Expected idea:** still 3 items. Second add of tea does nothing.

---

### Q4 · remove vs discard

**Task:** `s = {"a", "b", "c"}`

1. `.discard("z")` — must **not** crash
2. `.discard("a")` — removes a
3. Try to think: `.remove("z")` **would** crash. Do **not** call remove on a missing item. Print `s` after the discards.

**Expected:** set with `b` and `c` (order may differ).

---

### Q5 · Membership

**Task:** `allowed = {"admin", "staff", "editor"}`  
Take a role. Print `Allowed` or `Denied` (compare lowercased).

**Example:**

```
Input:  ADMIN
Output: Allowed
```

---

### Q6 · Unique from a list

**Task:** Take N names (they may repeat). Build a set from the list. Print how many **unique** names.

**Example:**

```
Input:  5
        Aisha
        ravi
        Aisha
        Ravi
        meera
Output: Unique: 4
```

(If you lowercase before the set, Aisha/aisha merge. **Do lowercase** so `Aisha` and `aisha` count as one.)

---

### Q7 · Loop

**Task:** Loop over `{"python", "java", "sql"}` and print each on its own line.  
Do not expect a fixed order.

---

### Q8 · Convert back to list

**Task:** Take a list of integers with duplicates. Print a **list** of unique values. Order does not matter.

`list(set(a))` is allowed here. (In Lists Q14 you kept order without set. Here uniqueness is the point.)

---

# Intermediate (Q9–Q16)

These four operations are the whole heart of sets. Give them real names in your head:

- **union** — everyone in either group  
- **intersection** — in **both**  
- **difference** — in A but not B  
- **symmetric difference** — in one group, not both  

---

### Q9 · Union: all guests

**Task:**  
`saturday = {"Aisha", "Ravi", "Dev"}`  
`sunday = {"Ravi", "Meera", "Dev"}`

Write `def all_guests(a, b):` that returns the union set. Print it and the count.

**Expected idea:** 4 unique people: Aisha, Ravi, Dev, Meera.

**Guide:** `return a | b` or `a.union(b)`. `|` is union.

**Hint 1:** Union never duplicates Ravi.

**Hint 2:** Print `len(all_guests(saturday, sunday))`.

---

### Q10 · Intersection: came both days

**Task:** Using the same two sets, write `def both_days(a, b):` that returns people in **both**.

**Expected:** Ravi and Dev.

**Guide:** `a & b` or `a.intersection(b)`.

**Hint 1:** Intersection is “common”.

**Hint 2:** If no one is common, you get `set()` (empty).

---

### Q11 · Difference: only Saturday

**Task:** Write `def only_saturday(sat, sun):` — in sat but not sun.

**Expected:** Aisha.

**Guide:** `sat - sun` or `sat.difference(sun)`. Order matters. `sun - sat` is Meera.

**Hint 1:** Difference is not symmetric. Draw two circles if stuck.

**Hint 2:** “Only Sunday” is a different call: `sun - sat`.

---

### Q12 · Symmetric difference: exactly one day

**Task:** Write `def one_day_only(a, b):` — in either, but not both.

**Expected:** Aisha and Meera.

**Guide:** `a ^ b` or `a.symmetric_difference(b)`. Same as union minus intersection.

**Hint 1:** Ravi and Dev are in both, so they drop out.

**Hint 2:** Check: `(a | b) - (a & b)` should match.

---

### Q13 · Required skills

**Task:**  
`required = {"python", "git"}`  
Take N skills the candidate types into a set `have`.

Print `Eligible` if `required` is a **subset** of `have` (they may have extra skills). Else print `Missing:` and the missing skills (`required - have`).

**Example:**

```
Input:  3
        python
        sql
        git
Output: Eligible
```

```
Input:  2
        python
        sql
Output: Missing: git
```

(Printing `{'git'}` is fine.)

**Guide:** `required.issubset(have)` or `required <= have`. Missing = `required - have`.

**Hint 1:** Extra skills are OK. Subset means “all required are present”.

**Hint 2:** Lowercase every skill when adding.

---

### Q14 · Two batches disjoint?

**Task:** Two exam rooms. Take set A of roll numbers and set B.  
Print `No clash` if they share **nobody** (disjoint), else print `Clash:` and the common rolls.

**Guide:** `a.isdisjoint(b)` or `len(a & b) == 0`. Common = `a & b`.

**Hint 1:** Empty intersection means disjoint.

**Hint 2:** Take rolls as strings so `07` does not become `7`.

---

### Q15 · Unique words in a sentence

**Task:** Take a sentence. Split into words. Lowercase. Strip punctuation from each word: only keep letters (loop characters, `ch.isalpha()`). Build a set of words. Print how many unique words, then the set.

**Example:**

```
Input:  Hello hello, world!
Output: 2
        (a set containing hello and world)
```

**Guide:** Function `def unique_words(s):` returns a set. Split, clean, add.

**Hint 1:** `for w in s.split():` then build `clean = ""` from alpha chars.

**Hint 2:** Empty clean string → skip (do not add `""`).

---

### Q16 · Tags on two posts

**Task:** Post A tags, post B tags (take as one line each, split on spaces).  
Print:

1. All tags used (union)
2. Common tags
3. Tags only on A
4. Tags only on B

Functions for each, or one function that **prints** the report (printing is OK if it does not need to return four values).

**Example:**

```
Input:  python loops lists
        python functions lists
Output:
All: ...
Common: python lists
Only A: loops
Only B: functions
```

**Guide:** Four set operations you already wrote. Lowercase tags.

**Hint 1:** `set(line.split())` after `.lower()`.

**Hint 2:** If a line is empty, that set is empty — still valid.

---

# Advanced (Q17–Q20)

---

### Q17 · Unique visitors for a week

**Real-world:** Analytics. Each day a list of visitor names (repeats allowed). You care unique people.

**Task:** Take 3 days. Each day: first an integer K, then K names.  
Build a set per day. Then print:

- unique visitors each day (count)
- unique visitors all week (union of 3)
- visitors who came **every** day (intersection of 3)
- visitors who came on day 1 but never again (day1 − day2 − day3)

**Example (short):**

```
Day1: Aisha Ravi
Day2: Ravi Meera
Day3: Ravi Aisha
```

Week unique: 3 (Aisha, Ravi, Meera)  
Every day: Ravi  
Day1 only-never-again: (empty — Aisha came day 3)

**Self-check:** If someone comes only day 1, they appear in the last report.

**Guide:** `week = d1 | d2 | d3`. Every day: `d1 & d2 & d3`. Only day1: `d1 - d2 - d3`.

**Hint 1:** Lowercase names.

**Hint 2:** Intersection of three: `(d1 & d2) & d3`.

**Hint 3:** Difference chains left to right: `d1 - d2 - d3` is `(d1 - d2) - d3`.

---

### Q18 · Course enrollment report

**Real-world:** College office. Who takes what.

**Task:** Two courses, two sets of student names (take N then names, M then names).

Print a report:

```
Python only: ...
Java only: ...
Both: ...
All students: ...
Python size: ...
Java size: ...
```

Then take one student name and print:

- `Python` if only python
- `Java` if only java
- `Both` if both
- `Neither`

Write `def which_course(py, java, name):` that returns that word.

**Self-check:** Empty Java set: “Java only” is empty, “Both” is empty.

**Guide:** Only python = `py - java`. Lookup: if name in both, both; elif in py; elif in java; else neither.

**Hint 1:** `name in py and name in java` → Both. Check **both** first.

**Hint 2:** Lowercase when storing and when asking.

**Hint 3:** Print sets directly or join sorted for stable output: `sorted(list(s))` — `sorted` returns a list, allowed.

---

### Q19 · Required packing list vs packed bag

**Real-world:** Travel checklist.

**Task:** Hard-code:

```
required = {"id card", "ticket", "charger", "medicine", "water"}
```

Menu:

1. Pack an item (add to `bag` set). If not in required, still allow it (extra item).
2. Unpack (discard from bag)
3. Status:
   - missing = required − bag
   - extra = bag − required
   - packed required count / len(required)
   - `Ready to leave` only if missing is empty
4. Exit

Functions: `missing(required, bag)`, `extra(required, bag)`, `is_ready(...)`.

**Sample:**

```
Pack: ticket
Pack: id card
Status: Missing charger, medicine, water
Pack: charger
Pack: medicine
Pack: water
Status: Ready to leave
```

**Self-check:** Pack `snacks` → extra, still not ready if required missing.

**Guide:** Menu + three set operations. Lowercase items.

**Hint 1:** `discard` for unpack so missing items do not crash.

**Hint 2:** Ready: `len(missing(...)) == 0` or `required.issubset(bag)`.

**Hint 3:** Extra items do **not** block ready.

---

### Q20 · Unique SKU inventory

**Real-world:** A shop must not register the same product code twice. Two shops compare catalogues.

**Task:**

Two shops. For each shop: take N SKUs (strings like `SOAP12`). Store as a set (duplicates while typing are ignored automatically).

Then:

1. Print each shop’s unique count
2. Common SKUs (sold in both)
3. Only shop A, only shop B
4. Take one SKU and print `A`, `B`, `Both`, or `Neither`
5. If shop A adds a SKU that shop B already has, print `Also in B` (check with `in`)

Menu is optional. A linear script that does 1–4 is enough. A small menu is better practice.

**Self-check:** Adding `SOAP12` twice to A still counts as 1.

**Guide:** Same shape as Q18. SKUs: `.strip().upper()` so `soap12` and `SOAP12` merge.

**Hint 1:** `a.add(sku)` silently ignores duplicates — that is what you want.

**Hint 2:** Do not use a list + `if not in` unless you want to practise both. Set is the right tool.

**Hint 3:** `which =` function returning one word, like Q18.

---

# Mini project

**"Club memberships"**

Sets: `sports`, `music`, `coding` (student names).

Menu: add a student to a club, remove, list a club, then reports: all three clubs, only one club, in sports and coding, not in any of the three (you will need a fourth set `all_students` of everyone who ever joined).

No dictionaries. Functions for each report.

---

## Ready for Dictionaries

- You never write `s[0]` on a set
- You pick union / intersection / difference on purpose
- `set()` vs `{}` is automatic
- You use a set when the question is “unique / common / missing”, not “first / last / order”

Next file: `08-dictionaries.md`

Dictionaries will replace many parallel lists: lookup by **name**, not by index.
