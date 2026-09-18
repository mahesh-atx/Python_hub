# Practice Projects — Set 3 (Tuples, Sets, Dictionaries)

Set 1 and Set 2 used **lists**. This pack exists so you **use the new tools on purpose**.

| Tool | Use it when |
|------|-------------|
| **tuple** | A fixed record: `(name, marks)`, `return ok, value` |
| **set** | Unique / common / missing. No order. |
| **dict** | Lookup by name/id: `book["Aisha"]`, `stock["soap"]["qty"]` |

**Do not** go back to parallel lists (`names[i]` + `phones[i]`) unless a question truly needs order as a line of people (a queue). Even then, a **list of tuples** is better than two lists.

---

## You may use

- if / loops / strings / functions / lists
- tuples, unpacking, `return a, b`
- sets and set operations
- dictionaries, `.get`, `.items`, nested dicts
- `.split()` / `" ".join(...)`

## Do NOT use

- Comprehensions
- Files, JSON module, exceptions topic, OOP
- `collections.Counter` / `defaultdict` — count with `.get`
- `random` (not required)

## Functions rule

| Level | What you must do |
|-------|------------------|
| **Basic (1–4)** | At least **2 functions** |
| **Intermediate (5–8)** | **Each menu action is a function** |
| **Hard (9–11)** | Action functions + helpers (`find`, `mutual`, `subtotal`, …) |

Build feature by feature. 15 minutes of thinking before hints.

Do **Set 1 minimum** (1, 5, 7) and **Dictionaries Q1–Q16** before this file. You can skip Set 2.

---

# Basic (Projects 1–4)

Small. One main structure. 45–90 minutes.

---

## P1 · Mini translator (dict)

**In real life:** A notes app of words you are learning (English → Marathi / Hindi — pick one).

### What it must do

Dict `words`: english (lowercase) → meaning (string).

1. **Add** — two inputs. If the english key exists, ask `Overwrite? (yes/no)`.
2. **Lookup** — type english, print meaning or `Not found`.
3. **List all** — `hello -> नमस्ते` (or your language). Empty → `No words`.
4. **Delete**
5. **Count** — how many words saved
6. **Exit**

### What to use

| Need | Tool |
|------|------|
| Word → meaning | **dict** |
| Lookup | `.get(key, "Not found")` |
| Exists? | `if key in words` |

### Build order

1. Add + list + lookup with `.get`.
2. Overwrite question. Delete. Count.

### Sample run

```
Choice: 1
English: water
Meaning: pani
Saved.

Choice: 2
English: WATER
pani
```

### Hints

**Hint 1:** Always `english.strip().lower()` as the key.

**Hint 2:** Delete: `if key in words: words.pop(key)`.

---

## P2 · Event check-in (set)

**In real life:** A door scanner. Each person should count **once** even if they tap twice.

### What it must do

Set `inside`.

1. **Check in** — name title case. If already in the set → `Already inside`. Else add, print `Welcome, N inside`.
2. **Check out** — discard (must not crash if they were never in). Print `Bye` or `Was not inside`.
3. **Is X inside?** — yes/no
4. **How many inside**
5. **List names** (order does not matter; `sorted(list(inside))` is OK for stable print)
6. **Exit**

### What to use

| Need | Tool |
|------|------|
| Unique people | **set** |
| In or not | `name in inside` |
| Safe remove | `.discard` vs `.remove` |

### Build order

1. Check in + how many.
2. Duplicate check-in message.
3. Check out + is inside + list.

### Sample run

```
Check in: aisha
Welcome, 1 inside
Check in: Aisha
Already inside
```

### Hints

**Hint 1:** Store `clean_name` (strip + title) so `aisha` and `Aisha` are one person.

**Hint 2:** `.remove` on a missing name crashes. `.discard` does not. For checkout you still want a message: `if name in inside: discard; print Bye else: print Was not inside`.

---

## P3 · Delivery route (list of tuples)

**In real life:** A rider’s stop list. Each stop is a **record**, not two lists.

### What it must do

`stops = []` of tuples `(place, minutes)` — minutes = time from previous stop (integer > 0).

1. **Add stop** — place title case, minutes > 0. Append `(place, minutes)`.
2. **View route** — `1. Market (12 min)`
3. **Total time** — sum of minutes
4. **Longest stop** — place with largest minutes (first if tie). Return via a function that returns the **tuple**.
5. **Remove** by number
6. **Exit**

### What to use

| Need | Tool |
|------|------|
| One stop | **tuple** `(place, minutes)` |
| Ordered stops | **list of tuples** |
| Unpack | `for place, minutes in stops:` |
| Longest | function returns one tuple |

### Build order

1. Add + view.
2. Total + longest (unpack in the function).
3. Remove by index.

### Sample run

```
Add: Market 12
Add: College 20
View:
1. Market (12 min)
2. College (20 min)
Total: 32
Longest: College
```

### Hints

**Hint 1:** `stops.append((place, minutes))` — inner brackets required.

**Hint 2:** Longest: `best = stops[0]` then `if m > best[1]: best = rec`.

---

## P4 · Daily mood log (dict)

**In real life:** A 7-day mood diary. Day name → mood word.

### What it must do

Hard-code days as keys with empty mood:

```
log = {"mon": "", "tue": "", "wed": "", "thu": "", "fri": "", "sat": "", "sun": ""}
```

Allowed moods: `happy`, `ok`, `sad`, `tired` (lowercase).

1. **Set today** — take day (`mon` …) and mood. Invalid day / mood → error. Overwrite allowed.
2. **View week** — print all 7, empty shown as `-`
3. **Count** — how many days each mood (skip empty). Use a **dict** mood → count, or four counters.
4. **Days with mood X** — print day names (loop items)
5. **Clear day** — set that key back to `""`
6. **Exit**

### What to use

| Need | Tool |
|------|------|
| Day → mood | **dict** with fixed keys |
| Valid day | `if day in log` |
| Count | `counts[mood] = counts.get(mood, 0) + 1` |

### Build order

1. Set + view.
2. Invalid mood/day.
3. Count + filter by mood + clear.

### Sample run

```
Set: mon happy
Set: tue tired
Count:
happy 1
tired 1
Days with happy: mon
```

### Hints

**Hint 1:** Do not `log[day] = mood` before checking `day in log` — that would **create a new key** `monday` by mistake. Check first.

**Hint 2:** View: `if log[d] == "": print("-") else print(log[d])`.

---

# Intermediate (Projects 5–8)

Each menu action = one function.

---

## P5 · Staff directory (dict + tuple phone check)

**In real life:** Office directory. Name → email, plus a phone.

### What it must do

`directory = {}`  
value is a **tuple** `(email, phone)` so the pair stays together.

1. **Add** — name title case, email (must contain exactly one `@` and a `.` after it — same rough rules as Strings Q14), phone 10 digits. If name exists → overwrite question. If phone already used by another name → refuse.
2. **View** — `Aisha | aisha@college.edu | 9000000001`
3. **Find by name**
4. **Find by phone** — loop `.items()`, unpack the tuple
5. **Find by email keyword**
6. **Delete**
7. **Exit**

Helpers: `digits_only`, `is_valid_phone`, `is_rough_email`, `phone_owner(directory, phone)` returns name or `None`.

### What to use

| Need | Tool |
|------|------|
| Name → (email, phone) | **dict of tuples** |
| Unpack | `email, phone = directory[name]` |
| Phone unique | loop values |

### Build order

1. Add + view with no validation.
2. Phone 10 digits + duplicate phone.
3. Rough email. Finders. Delete.

### Sample run

```
Add Aisha, aisha@college.edu, 9000000001
Find phone 9000000001 → Aisha
```

### Hints

**Hint 1:** `directory[name] = (email.lower(), phone_digits)`

**Hint 2:** You cannot change `phone` inside the tuple. To edit later: replace the whole tuple.

**Hint 3:** `for name, rec in directory.items(): email, phone = rec`

---

## P6 · Two club memberships (sets)

**In real life:** Sports club vs coding club. Who is in both?

### What it must do

Sets `sports` and `coding`.

1. **Join** — take name and club (`sports` / `coding`). Same person may join both (add to both sets).
2. **Leave** a club
3. **List a club**
4. **Reports:**
   - only sports
   - only coding
   - both
   - all unique members (`sports | coding`)
   - count of each
5. **Lookup a name** — `Only sports` / `Only coding` / `Both` / `Neither`
6. **Exit**

Functions: `only_sports()`, `both()`, `which(name)` returning one word.

### What to use

| Need | Tool |
|------|------|
| Members | **two sets** |
| Reports | `\|` `&` `-` |
| Lookup | `name in sports` **and** `name in coding` — check **both first** |

### Build order

1. Join + list.
2. Leave.
3. All reports + lookup.

### Sample run

```
Join Aisha sports
Join Aisha coding
Join Ravi sports
Both: Aisha
Only sports: Ravi
Lookup Aisha → Both
```

### Hints

**Hint 1:** Title-case names in the set.

**Hint 2:** Leave: `sports.discard(name)` so leaving a club they never joined does not crash; still print a message using `if name in`.

**Hint 3:** `which`: if in both → Both; elif sports; elif coding; else Neither.

---

## P7 · Recipe book (dict → list)

**In real life:** Recipes. Name → ingredients.

### What it must do

`recipes = {}`  # name lowercase → **list** of ingredient strings (lowercase)

1. **Add recipe** — name, then keep taking ingredients until `end`. Reject empty recipe. If name exists → overwrite question.
2. **View one** — list ingredients numbered
3. **View all names**
4. **Search by ingredient** — print every recipe whose list **contains** that ingredient
5. **Delete recipe**
6. **Exit**

Optional extra: store ingredients as a **set** per recipe (unique, no “salt, salt”). List is also fine if you skip duplicates yourself.

### What to use

| Need | Tool |
|------|------|
| Name → ingredients | **dict of lists** (or dict of sets) |
| Contains ingredient | `if item in recipes[name]` |
| Search all | loop `.items()` |

### Build order

1. Add (inner loop until `end`) + view one + view names.
2. Search by ingredient.
3. Delete.

### Sample run

```
Add: poha
Ingredients: poha, onion, chili, end
Search: onion
Recipes: poha
```

### Hints

**Hint 1:** `recipes[name] = []` then `append` until end.

**Hint 2:** Search: `for name, ings in recipes.items(): if key in ings:`

**Hint 3:** Lowercase ingredients so `Onion` matches `onion`.

---

## P8 · Gradebook (nested dict)

**In real life:** Teacher software. Roll → profile with subject marks.

### What it must do

```
# roll (string) → { "name": ..., "marks": { "maths": 80, "science": 90 } }
```

Subjects allowed: `maths`, `science`, `english` only.

1. **Add student** — roll, name. Empty marks dict. Duplicate roll → refuse.
2. **Enter marks** — roll, subject, marks 0–100. Unknown roll / subject → error.
3. **View student** — name, each subject, average (only subjects that have marks). If no marks yet, average `N/A`.
4. **View class** — roll and name and average
5. **Topper** — highest average among students who have **at least one** mark. Tie: first seen.
6. **Failed** — any entered subject < 35
7. **Exit**

Helpers: `average(profile)` returns a number or `None`. `topper(book)` returns roll or `None`.

### What to use

| Need | Tool |
|------|------|
| Roll → profile | **nested dict** |
| Subject → mark | inner dict `profile["marks"]` |
| Average | `sum(m.values()) / len(m)` if len else None |

### Build order

1. Add + view class (names only).
2. Enter marks + view student + average.
3. Topper + failed.

### Sample run

```
Add 101 Aisha
Marks 101 maths 80
Marks 101 science 90
View 101
maths 80 science 90 avg 85.0
```

### Hints

**Hint 1:** `book[roll] = {"name": name, "marks": {}}`

**Hint 2:** Enter: `book[roll]["marks"][subject] = n`

**Hint 3:** Failed: loop students, loop `marks.values()`, if any `< 35`.

---

# Hard (Projects 9–11)

Write function names on paper first.

---

## P9 · Expense tracker (dict of list of tuples)

**In real life:** Where did this month’s money go?

### What it must do

`expenses = {}`  
key = category (`food`, `travel`, `bills`, `other` — or allow any word)  
value = **list of tuples** `(note, amount)`

1. **Add expense** — category, note, amount > 0. If category new, create empty list first.
2. **View category** — numbered notes and amounts, then category total
3. **View all** — each category total, then **grand total**
4. **Biggest single expense** — scan every tuple, print category + note + amount (first if tie)
5. **Search note keyword** — across all categories
6. **Delete** — category + item number
7. **Exit**

Helpers: `add_exp`, `total_of(cat)`, `grand_total()`, `biggest()` returns one tuple `(cat, note, amount)` or `None`.

### What to use

| Need | Tool |
|------|------|
| Category → entries | **dict of lists** |
| One entry | **tuple** `(note, amount)` |
| Totals | loop and unpack |

### Build order

1. Add + view category (remember `setdefault` / `if cat not in`).
2. View all + grand total.
3. Biggest + search + delete.

### Sample run

```
Add food, tea, 20
Add food, lunch, 80
Add travel, bus, 15
View all
food 100
travel 15
Grand 115
Biggest: food | lunch | 80
```

### Hints

**Hint 1:** `if cat not in expenses: expenses[cat] = []` then `append((note, amount))`

**Hint 2:** Biggest: nested loop `for cat, rows in expenses.items(): for note, amount in rows:`

**Hint 3:** Delete: `rows.pop(i)` after validating the number. If list becomes empty you may `pop` the category key.

---

## P10 · Friends (dict of sets) + mutual

**In real life:** A tiny social graph. Friendship is **two-way**.

### What it must do

`friends = {}`  # name → **set** of names

Rules:

- Adding A as friend of B also adds B as friend of A.
- A person is never in their own set.

Menu:

1. **Add person** — create empty set if new
2. **Make friends** — two names (must both exist, must not be the same person). Add each to the other’s set. If already friends → `Already friends`.
3. **Unfriend** — both sides `.discard`
4. **List friends of X**
5. **Mutual friends** of X and Y — intersection of the two sets (do not include X or Y)
6. **Suggest** for X — people who are friends-of-friends but not X and not already friends of X. Use unions of friends’ sets, then subtract.
7. **Count friends** of X
8. **Exit**

Helpers: `ensure(name)`, `make_friends(a, b)` returns a message, `mutual(a, b)` returns a set, `suggest(a)` returns a set.

### What to use

| Need | Tool |
|------|------|
| Name → friends | **dict of sets** |
| Two-way | add in **both** sets |
| Mutual | `friends[a] & friends[b]` |
| Suggest | union of `friends[f] for f in friends[a]`, then minus `{a}` minus `friends[a]` |

### Build order

1. Add person + make friends + list (test two-way: list B after adding from A).
2. Unfriend both sides.
3. Mutual.
4. Suggest (easy to get wrong — test on paper with 4 people).

### Sample run

```
People: Aisha, Ravi, Meera, Dev
Friends: Aisha-Ravi, Ravi-Meera, Aisha-Dev
Mutual Aisha, Ravi → (empty — they don't share a friend yet)
Suggest Aisha → Meera (via Ravi), not Dev (already friend), not Ravi
```

Draw it:

```
Aisha — Ravi — Meera
  |
 Dev
```

Suggest Aisha: Meera.

### Hints

**Hint 1:** `if a not in friends: print unknown` before you index.

**Hint 2:** Suggest:

```
out = set()
for f in friends[a]:
    out = out | friends[f]
out = out - friends[a]
out.discard(a)
return out
```

**Hint 3:** Never `friends[a].add(a)`.

---

## P11 · Fest events: capacity + waitlist (dict + set + list)

**In real life:** College fest. Several events, each with a seat limit. This is Set 2 Project 22, but **many events**.

### What it must do

```
events = {
    "code": {
        "capacity": 3,
        "seats": set(),      # unique names
        "wait": []           # list, order matters
    },
    "dance": {
        "capacity": 2,
        "seats": set(),
        "wait": []
    }
}
```

You may start with these two events hard-coded, plus menu option **create event** (name + capacity).

Menu:

1. **List events** — name, `len(seats)/capacity`, waitlist length
2. **Register** — event, name. Already in seats or wait of **that** event → `Already registered`. If seats not full → add to **set**. Else append wait **list**.
3. **Cancel** — event, name. If in seats: remove, then if wait not empty **promote** `wait.pop(0)` into seats. If only on wait: remove from list (loop to find index, ignore case).
4. **Who is in event** — print seats and wait
5. **Which events is X in?** — loop all events, check sets and wait lists
6. **Create event**
7. **Exit**

Helpers: `is_registered(ev, name)` True if in seats or wait, `register(...)`, `cancel(...)`, `promote` inside cancel.

### What to use

| Need | Tool |
|------|------|
| Event → data | **nested dict** |
| Unique confirmed | **set** |
| Wait order | **list** (not a set) |
| Promote | `seats.add(wait.pop(0))` |

### Build order

1. List + register until one event is full + one wait.
2. Cancel confirmed → wait[0] promoted.
3. Cancel wait only → no promote.
4. “Which events is X in?”
5. Create event.

### Sample run

```
Register code Aisha, Ravi, Meera  → full 3/3
Register code Dev → wait 1
Cancel code Aisha → Moved from waitlist: Dev
Seats: Ravi, Meera, Dev
```

### Hints

**Hint 1:** Names: title case in both set and wait so lookup matches.

**Hint 2:** Wait remove: build index with a loop on `.lower()`, then `pop(i)`. Do not `wait.remove(name)` if casing differs.

**Hint 3:** `is_registered`: `name in seats` or name in wait (loop wait if casing differs; better store consistently).

---

# Done when

1. Sample run works.
2. Invalid input does not crash.
3. You can say out loud *why* you picked dict vs set vs tuple vs list.
4. Friendship (P10) is two-way. Waitlist (P11) promotes only when a **seat** frees.

## Suggested order

| Sitting | Project |
|---------|---------|
| 1 | 1 translator |
| 2 | 2 check-in **and** 3 route |
| 3 | 4 mood log |
| 4–5 | 5 directory |
| 6 | 6 two clubs |
| 7 | 7 recipes |
| 8–9 | 8 gradebook |
| 10–12 | **9 expenses** or **10 friends** or **11 fest** |

**Minimum Set 3 path:** 1, 6, 9.  
**Best “I can write projects” path:** 5, 8, 10, 11.

When 10 or 11 runs with this file closed, you are ready for **Comprehensions** (they only shorten loops you can already write).
