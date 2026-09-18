# Dictionaries

**Questions:** 20 (Basics 1–8 · Intermediate 9–16 · Advanced 17–20)

You already know: lists, tuples, sets, functions, strings, loops, conditionals.

This topic is the one that most changes how you write projects. Parallel lists (`names[i]` with `phones[i]`) become **one lookup**: `phones["Aisha"]`.

---

## You may use

- Everything from Sets and Tuples
- `{}`, `dict()`, `{ "a": 1, "b": 2 }`
- Access: `d[key]`, `d.get(key)`, `d.get(key, default)`
- Add / change: `d[key] = value`
- Remove: `d.pop(key)`, `del d[key]`
- `in` (checks **keys**), `len(d)`
- `.keys()`, `.values()`, `.items()`
- `.update()`, `.copy()`, `.clear()`
- Nested dicts (`d["aisha"]["city"]`) when a question asks
- Values that are lists or sets
- Tuple **keys** (lists cannot be keys)

## Do NOT use

- Dict comprehensions: `{k: v for ...}`
- `collections.defaultdict`, `Counter` (you will write counting by hand)
- Files, JSON module, OOP
- `zip()` to build dicts — loop and assign instead (clearer now)

## Why dictionaries exist

A dict is a labelled box: **key → value**.

| Parallel lists (old) | Dictionary (now) |
|----------------------|------------------|
| `names[i]`, `phones[i]` | `phone["Aisha"]` |
| search by looping | lookup in one step |
| easy to go out of sync | one object |

Keys must be immutable: `str`, `int`, `tuple` are fine. A **list** cannot be a key.

`d["x"]` crashes if `x` is missing. `d.get("x")` returns `None`. `d.get("x", 0)` returns 0.

From Q9 onward: functions.

---

# Basics (Q1–Q8)

---

### Q1 · Create and print

**Task:** Create `person = {"name": "Aisha", "city": "Solapur", "age": 21}`  
Print the dict and `len(person)`.

**Expected:** length 3.

---

### Q2 · Access

**Task:** Using `person` from Q1, print the name and the city.

**Expected:**

```
Aisha
Solapur
```

---

### Q3 · Add and change

**Task:** Start with `{"name": "Ravi"}`.

1. Add key `city` → `"Pune"`
2. Change `name` to `"Ravi Kumar"`
3. Print the dict

---

### Q4 · Membership

**Task:** `d = {"html": 1, "css": 1, "python": 2}`  
Take a skill. Print `Yes` if it is a **key**, else `No`. Lowercase the input.

**Example:**

```
Input:  Python
Output: Yes
```

---

### Q5 · get vs square brackets

**Task:** `marks = {"Aisha": 80, "Ravi": 95}`  
Print `marks.get("Meera")`  
Print `marks.get("Meera", "Absent")`  
Do **not** write `marks["Meera"]` (it would crash).

**Expected:**

```
None
Absent
```

---

### Q6 · Loop keys

**Task:** Loop `person` from Q1 and print `key: value` for each field.  
Use `for k in person:` then `person[k]`, **or** `for k, v in person.items():`.

---

### Q7 · pop

**Task:** `d = {"a": 1, "b": 2, "c": 3}`  
Pop `"b"`. Print what pop returned, then print `d`.

**Expected idea:** returned `2`. Dict has `a` and `c`.

---

### Q8 · Build from input

**Task:** Take N. Then N times take a word and an integer. Store in a dict `word → number`. Print the dict.

If a word repeats, the **new** number overwrites the old (that is normal dict behaviour).

**Example:**

```
Input:  3
        tea 12
        coffee 20
        tea 15
Output: tea is 15 (coffee 20 too)
```

---

# Intermediate (Q9–Q16)

---

### Q9 · Mini phone book

**Task:** Write `def add(book, name, phone):` that stores `book[name.title()] = phone`.  
Write `def find(book, name):` that returns the phone or `"Not found"`.

Main: add 3 contacts (take from input), then take a search name, print `find(...)`.

**Example:**

```
(add Aisha 9000000001, Ravi 9000000002, Meera 9000000003)
Search: aisha
Output: 9000000001
```

**Guide:** One dict replaces two parallel lists. Lookup is `book.get(name.title(), "Not found")`.

**Hint 1:** Title-case the name when saving **and** when finding.

**Hint 2:** `add` changes the dict in place. No need to return the dict.

---

### Q10 · Word count

**Task:** Take a sentence. Count how many times each **word** appears (lowercase, ignore extra spaces). Print `word -> count` for each.

**Example:**

```
Input:  I love python and I love code
Output:
i -> 2
love -> 2
python -> 1
and -> 1
code -> 1
```

Order of lines does not matter.

**Guide:** `def word_count(s):` returns a dict. For each word: `d[w] = d.get(w, 0) + 1`.

**Hint 1:** `s.lower().split()`.

**Hint 2:** If you write `d[w] += 1` before the key exists, it crashes. Use `.get` or `if w in d`.

---

### Q11 · Topper from a dict

**Task:** Dict `name → marks`. Take N pairs into the dict. Write `def topper(d):` that returns the **name** of the highest marks (first name you see if tie — loop `.items()` in insertion order).

Print the name and marks.

**Example:**

```
Input:  3
        Aisha 80
        Ravi 95
        Meera 70
Output: Ravi 95
```

**Guide:** `best_name = None`, `best = -1`. Loop items. If `marks > best`, update both.

**Hint 1:** Do not sort. A single pass is enough.

**Hint 2:** `d[topper(d)]` gives the marks after you know the name.

---

### Q12 · items() report

**Task:** `prices = {"tea": 12, "coffee": 20, "vada pav": 20}`  
Print each as `tea - Rs 12`. Then print the costliest item name (tie: first).

Write `def costliest(d):` returning the name.

**Guide:** `for name, price in d.items():`. Same best-so-far as Q11.

**Hint 1:** `.items()` gives `(key, value)` tuples. You may unpack them.

**Hint 2:** Start `best_name` as `None`. First iteration always updates.

---

### Q13 · Nested dict

**Task:** Build:

```
student = {
    "name": "Aisha",
    "city": "Solapur",
    "marks": {"maths": 80, "science": 90, "english": 70}
}
```

Print name, city, then each subject line, then average of the three marks.

Write `def average(student):` that reads `student["marks"]` and returns the average.

**Expected average:** 80.0

**Guide:** Inner dict is still a dict. `student["marks"]["maths"]` is 80. Loop `student["marks"].items()`.

**Hint 1:** `m = student["marks"]` then `sum(m.values()) / len(m)`.

**Hint 2:** `sum(...)` on `.values()` is allowed.

---

### Q14 · Merge two dicts

**Task:**  
`a = {"tea": 12, "coffee": 20}`  
`b = {"coffee": 25, "water": 10}`  

Write `def merged(a, b):` that returns a **new** dict: all keys from both, and **b overwrites a** on clash (coffee becomes 25). Do not use `.update` on `a` itself (that would change `a`). You may `.copy()` then `.update`.

Print `a` (must still have coffee 20), then the merged dict.

**Guide:** `c = a.copy()` then `c.update(b)` then `return c`.

**Hint 1:** If you do `a.update(b)`, `a` is changed forever. Copy first.

**Hint 2:** You can also loop `b` and assign onto a copy.

---

### Q15 · Inventory with default 0

**Task:** `stock = {"soap": 10, "oil": 5}`  
Take an item name and a qty to **sell**.

- If item missing → `Unknown item`
- If qty > stock → `Only X left`
- Else reduce stock, print `Sold. Left: ...`

Write `def sell(stock, name, qty):` that returns a **message string** (one value). Main prints it.

Use `.get(name, None)` or `if name not in stock`.

**Example:**

```
Input:  soap
        3
Output: Sold. Left: 7
```

```
Input:  rice
        1
Output: Unknown item
```

**Guide:** Do not crash on missing keys. Check `in` first, then compare qty.

**Hint 1:** `name = name.strip().lower()`

**Hint 2:** After success: `stock[name] = stock[name] - qty`

---

### Q16 · Dict of lists

**Task:** Group students by city.

Take N. Each line: `name city`.  
Dict: `city → list of names`.

Print each city and its names.

**Example:**

```
Input:  4
        Aisha Solapur
        Ravi Pune
        Meera Solapur
        Dev Pune
Output:
Solapur: Aisha, Meera
Pune: Ravi, Dev
```

**Guide:** `def add_to_city(d, city, name):`  
If city not in d, `d[city] = []`. Then `d[city].append(name)`.

**Hint 1:** `d.setdefault(city, [])` also works — optional.

**Hint 2:** First student in a new city must create the list. If you `.append` on a missing key, it crashes.

---

# Advanced (Q17–Q20)

---

### Q17 · Phone book menu

**Real-world:** This is Set 1 Project 5, rewritten the way real code looks.

**Task:** `book = {}`  # name → phone

1. Add — title-case name, 10-digit phone. If name exists, ask `Overwrite? (yes/no)`. If phone already stored under **another** name, print `Number already saved for <name>` and do not add.
2. View all
3. Search by name keyword (print all keys that contain the keyword)
4. Search by exact phone (loop `.items()`)
5. Delete by name
6. Exit

Functions for each action. `phone_owner(book, phone)` returns the name or `None`.

**Self-check:** Two people cannot have the same number. Empty book view → `No contacts`.

**Guide:** Duplicate phone: loop values. Keyword: `if key.lower() find`. Delete: `if name in book: pop else not found`.

**Hint 1:** Store keys already title-cased so lookup is consistent.

**Hint 2:** Search phone must loop — values are not keys.

**Hint 3:** Overwrite: `if name in book:` ask; else add. Still check duplicate phone unless it is the same name keeping the same number.

---

### Q18 · Shop: name → {price, stock}

**Real-world:** One product, two facts. Nested dict.

**Task:** Start with:

```
shop = {
    "soap": {"price": 40, "stock": 10},
    "oil":  {"price": 180, "stock": 5},
    "rice": {"price": 60, "stock": 20}
}
```

Menu:

1. View — `soap  Rs 40  stock 10` + `LOW` if stock <= 3, `OUT` if 0
2. Sell — name, qty. Reduce stock. Print line total `price * qty`. Unknown / not enough stock → messages
3. Restock — name, qty (add). If unknown, **create** the product: ask price then set stock
4. Search keyword in product name
5. Low stock report
6. Exit

Functions: `view`, `sell`, `restock`, `search`, `low_stock`.  
`sell` returns a message string.

**Self-check:** Sell 5 oil when stock is 5 → stock 0, next view says OUT. Sell 1 more → Only 0 left / OUT.

**Guide:** `shop[name]["stock"]`. Restock new item: `shop[name] = {"price": p, "stock": q}`.

**Hint 1:** Always `.lower()` the product name.

**Hint 2:** Nested access: first check `name in shop`, then read inner keys.

**Hint 3:** Line total uses **current** price from the dict, not a number you invent in main.

---

### Q19 · Login + profile

**Real-world:** A tiny user database.

**Task:** Dict `users` with **username → profile dict**:

```
users = {
    "aisha": {"password": "ab12", "city": "Solapur", "role": "student"},
    "ravi":  {"password": "xy99", "city": "Pune",    "role": "staff"}
}
```

Menu:

1. Login — username (lowercase), password. 3 tries then back to menu. On success remember `current` username (a string, or `""` if logged out).
2. View my profile — only if logged in (do **not** print the password)
3. Change city — only if logged in
4. Logout
5. Register — new username, password (min 4 chars), city, role `student` or `staff`. Reject if username exists
6. Exit

Functions: `login`, `register`, `show_profile`. Passwords stay inside the dict; never print them.

**Self-check:** Unknown user → `Unknown username` (do not say whether password would have matched). Logged out view → `Login first`.

**Guide:** `users[u]["password"]`. `current` is a string in main. Register writes a new inner dict.

**Hint 1:** Same nested-if login idea as Conditionals Q14.

**Hint 2:** `if current == "":` for login-required actions.

**Hint 3:** Register: `if username in users: print exists`.

---

### Q20 · Canteen with dict menu + dict cart

**Real-world:** Set 1 Project 7, dict style. This is the “now I can write it from scratch” test.

**Task:**

```
menu = {"tea": 12, "coffee": 20, "vada pav": 20, "samosa": 15, "water": 10}
cart = {}   # item → qty
```

1. Show menu
2. Add to cart — name, qty > 0. Unknown → `Not sold here`. If already in cart, **add to qty**
3. View cart — each line name, qty, line total; then subtotal
4. Remove item by name (pop). If qty should decrease by 1 instead of full remove, do **full remove** for v1
5. Checkout — empty cart refuse. If subtotal >= 100 print `Free mint chutney`. Print `Pay: ...`. Clear cart with `.clear()`
6. Exit

Functions for every action. `line_total(menu, item, qty)` returns `menu[item] * qty`.  
`subtotal(menu, cart)` loops cart items.

**Self-check:** Add tea 2, add tea 1 → cart tea 3. Checkout clears. Next view cart empty.

**Guide:** Cart is a dict of quantities. Menu is a dict of prices. No parallel lists.

**Hint 1:** Add: `cart[name] = cart.get(name, 0) + qty`

**Hint 2:** Subtotal: `for item, qty in cart.items(): total += menu[item] * qty`

**Hint 3:** Remove: `if name in cart: cart.pop(name) else: print not in cart`

---

# Mini project

**"Class directory"**

`students` dict: roll number (string) → `{name, city, marks}`.

Menu: add, view all, find by roll, find by name keyword, topper, average marks, delete, exit.

Nested dict + functions. No files. If you can do this closed-book, you own dictionaries.

---

## Ready for Comprehensions

- You reach for a dict when you need lookup by name
- `.get` is your default for “maybe missing”
- Nested `shop[item]["stock"]` does not scare you
- You rebuilt the phone book **and** the canteen with dicts (Q17, Q20)
- You can explain why a list cannot be a key

Next topic: `09-comprehensions.md`, then Modules, File Handling, Exceptions, OOP.

Until then, rebuild **one** Set 1 project (phone book or canteen or shop) using dictionaries instead of parallel lists. That conversion is the real exam.

Full projects pack for this topic: `projects/projects-tuples-sets-dicts.md` (Set 3).
