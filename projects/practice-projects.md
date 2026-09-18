# Practice Projects — Use what you learned

You have practised **conditionals, loops, strings, functions, and lists**.  
Questions trained one tool at a time. **Projects train you to pick the right tool** for a real job.

These are **not maths puzzles**. They are small programs people actually use: guest lists, quizzes, phone books, canteen orders, appointments, a shop counter.

---

## You may use

- `if` / `elif` / `else`
- `for`, `while`, `range`, `break`, `continue`
- Strings: indexing, slicing, methods, `in`
- **Functions:** `def`, parameters, `return`, default values
- Lists: indexing, slicing, methods, looping
- `input()`, `print()`, `int()`, `float()`, `len()`, `min()`, `max()`, `sum()`, `round()`
- `.split()` and `" ".join(...)`

## Do NOT use

- Dictionaries, sets, tuples as storage
- `return a, b` (two values) — return one value, or change a list in place
- List comprehensions
- Files, exceptions, modules, OOP, random (unless you already know `random` — not required here)

Use **parallel lists** when two things belong together  
(example: `names` and `phones` — same index = same person).

## Functions rule (do not skip)

A project that is one giant `while True` is the old you. Split it.

| Level | What you must do |
|-------|------------------|
| **Basic (1–4)** | At least **2 helper functions** (example: `clean_name`, `is_duplicate`) |
| **Intermediate (5–8)** | **Each menu action is a function.** Main only shows the menu and calls them. |
| **Hard (9–11)** | Same as intermediate, plus helpers like `find_index`, `print_bill`, `is_free_slot`. No fat functions that do everything. |

`input` and `print` for talking to the user can stay in main **or** in the action function — pick one style and stay consistent.

Lists are mutable: `def add_guest(guests, name): guests.append(name)` does not need to return the list.

---

## How to build (important)

Do **not** try to write the whole project in one go.

```
1. Read the whole project once.
2. Build Feature 1 only. Run it. Fix it.
3. Build Feature 2. Run it. Fix it.
4. Keep going until the sample run matches.
```

If you get stuck:

1. 15 minutes of your own thinking
2. Read **What to use** and **Build order**
3. Then **Hint 1**, then **Hint 2**

One project = one `.py` file. Name it `guest_list.py`, `phonebook.py`, and so on.

Do them **in order**: basic → intermediate → hard.

---

# Basic projects

Small. One main list. A short menu. You should finish one in 45–90 minutes.

---

## P1 · Event guest list

**In real life:** A wedding / birthday / college fest list. Who is invited? Is this person on the list?

### What it must do

Menu that repeats until Exit:

1. **Add guest** — take a name, strip spaces, title case it. Empty name → reject. If the name is already on the list (ignore case) → `Already invited`. Else add.
2. **View guests** — numbered list. If empty → `No guests yet`.
3. **Check invitation** — take a name, say Invited or Not invited (ignore case).
4. **Remove guest** — by number. Invalid number → error message.
5. **Exit**

### What to use

| Need | Tool |
|------|------|
| Remember many names | **list** |
| Menu that repeats | **`while True` + `break`** |
| Empty / duplicate / invalid number | **`if`** |
| Clean name, ignore case | **strings** + function `clean_name(s)` |
| Already invited? | function `is_invited(guests, name)` returning True/False |
| Show 1. 2. 3. | **`for i in range(len(guests))`** or `view_guests(guests)` |

### Build order

1. Write `clean_name` and `is_invited` first. Test them with a few print calls.
2. Empty list `guests = []` and a `while True` menu that only prints and `break`s on Exit.
3. Add guest (call the helpers). View guests.
4. Check invitation using `is_invited`.
5. Remove by number (`pop` index `number - 1`).

### Sample run

```
1. Add guest
2. View guests
3. Check invitation
4. Remove guest
5. Exit
Choice: 1
Name:   aisha khan
Added: Aisha Khan

Choice: 1
Name: Aisha Khan
Already invited

Choice: 3
Name: AISHA KHAN
Invited
```

### Hints

**Hint 1:** Duplicate check:

```
exists = False
for g in guests:
    if g.lower() == name.lower():
        exists = True
        break
```

**Hint 2:** User numbers start at 1. Python indexes start at 0.  
Valid: `1 <= num <= len(guests)`.

---

## P2 · 5-question quiz (internet safety)

**In real life:** Training apps, school quizzes, driving-licence mock tests. Same shape, different questions.

### What it must do

- Store 5 questions in a list, 5 answers in another list (same index).
- Answers are short text like `yes` / `no` or a word. Compare **ignoring case** and extra spaces.
- Ask one by one. After each question print `Correct` or `Wrong`.
- At the end print score `/ 5` and a message:
  - 5 → `Excellent`
  - 3 or 4 → `Good`
  - below 3 → `Keep practising`
- Ask `Play again? (yes/no)`. If yes, score resets and quiz repeats.

You may write your own 5 questions. Example set:

1. Should you share your OTP with anyone? → `no`
2. Is `123456` a strong password? → `no`
3. Should a website address start with https for payments? → `yes`
4. If a stranger emails a link to claim a prize, should you click it? → `no`
5. Should you log out on a public computer? → `yes`

### What to use

| Need | Tool |
|------|------|
| Questions and answers | **two parallel lists** |
| Ask all 5 | function `play_round()` that **returns** the score |
| Right / wrong / final band | **`if` / `elif`** — function `verdict(score)` returns the message |
| Clean the user's answer | **`.strip().lower()`** inside the round |
| Play again | **outer `while`** in main |

### Build order

1. Two lists. Loop 5 times, print question, take answer, count `score`.
2. Add Correct/Wrong after each.
3. Final message from score.
4. Wrap everything in `while True`. After results, ask play again. `no` → `break`.

### Sample run

```
Q1. Should you share your OTP with anyone?
Your answer: NO
Correct

...

Score: 4 / 5
Good
Play again? (yes/no): no
```

### Hints

**Hint 1:** `if user == answers[i]:` after you clean `user`.

**Hint 2:** Play-again must reset `score = 0` at the **start** of each round, not only once at the top of the file.

---

## P3 · Lost and found board

**In real life:** A notice board at a station, college, or society office.

### What it must do

Menu:

1. **Report lost item** — take a short description (example: `black umbrella`). Reject empty. Store in a list.
2. **Report found item** — same, store in a second list.
3. **View all** — print Lost items numbered, then Found items numbered.
4. **Search** — take a keyword. Print every lost **or** found item that **contains** that keyword (ignore case). If none, `No match`.
5. **Exit**

### What to use

| Need | Tool |
|------|------|
| Two boards | **`lost = []`, `found = []`** |
| Keyword inside a sentence | function `search(items, keyword)` that prints matches and **returns** how many |
| Search both lists | call `search` twice, add the two counts |
| Menu | **`while True`** in main |

### Build order

1. Menu + add to lost + add to found + view.
2. Search: lowercase both sides, use `in`.
3. Count matches so you can print `No match`.

### Sample run

```
Choice: 1
Item: Black umbrella
Logged as lost.

Choice: 4
Keyword: umbrella
Lost: black umbrella
```

### Hints

**Hint 1:** Store the description after `.strip()`. You may `.lower()` when storing so search is easier — or keep original and lower only when comparing.

**Hint 2:** Search both lists. Use a counter `hits = 0`. If still 0 at the end, print `No match`.

---

## P4 · Profile card maker

**In real life:** ID card desk, college registration, visitor pass. Collect → check → print neatly.

### What it must do

Keep making cards until the user says no.

For each card, take:

- full name
- city
- phone
- role: `student` or `visitor` (anything else → ask role again until valid)

**Checks:**

- name after strip cannot be empty
- phone must be **exactly 10 digits** (allow the user to type spaces; ignore spaces when checking). If wrong, ask phone again until valid.
- print a neat card:

```
========================
 NAME : Aisha Khan
 CITY : Solapur
 PHONE: 9876543210
 ROLE : STUDENT
========================
```

Name in title case, city in title case, role in uppercase, phone digits only.

Then `Make another? (yes/no)`.

### What to use

| Need | Tool |
|------|------|
| Ask role until valid | **`while True` + `break`** |
| Phone: keep only digits | function `digits_only(s)` **returns** a string |
| Valid phone? | function `is_valid_phone(s)` returns True/False |
| Pretty layout | function `format_card(...)` **returns** the card string |

### Build order

1. Take all four fields with no checks. Print a simple card.
2. Title case / upper case formatting.
3. Reject empty name (re-ask).
4. Phone loop: build `digits` string from characters that are digits. While `len(digits) != 10`, ask again.
5. Role loop until `student` or `visitor`.
6. Outer play-again loop.

### Sample run

```
Name:   aisha khan
City: solapur
Phone: 98765 43210
Role: teacher
Please type student or visitor.
Role: student

========================
 NAME : Aisha Khan
 CITY : Solapur
 PHONE: 9876543210
 ROLE : STUDENT
========================
```

### Hints

**Hint 1:** Digit extract:

```
digits = ""
for ch in phone:
    if ch.isdigit():
        digits += ch
```

**Hint 2:** Nested loops are OK: outer = another card, inner = re-ask phone.

---

# Intermediate projects

A real menu with 4–6 features. You must keep lists in sync. About 1.5–3 hours each.

---

## P5 · Phone book

**In real life:** Contacts app. Name + number together.

### What it must do

Parallel lists: `names` and `phones`.

1. **Add contact** — name (title case, not empty). Phone: 10 digits (same rule as Project 4). If that phone **already exists** → `Number already saved`. If that name already exists (ignore case) → ask `Name exists. Save anyway? (yes/no)`.
2. **View all** — `Aisha Khan - 9876543210`. If empty, say so.
3. **Search by name** — show every contact whose name **contains** the keyword (so `ai` finds Aisha).
4. **Search by number** — exact 10-digit match after cleaning.
5. **Delete** — by view-number. Delete **both** name and phone at that index.
6. **Exit**

### What to use

| Need | Tool |
|------|------|
| Pair name with phone | **parallel lists** (same index) |
| Each menu action | **its own function** (`add_contact`, `view_all`, `search_name`, `search_number`, `delete_contact`) |
| Search contains | **`keyword in names[i].lower()`** |
| Delete both | **`names.pop(i)` and `phones.pop(i)`** — same `i` |
| Unique phone | function `phone_index(phones, number)` returns index or `-1` |

### Build order

1. Add + view with no extra checks.
2. Phone 10-digit clean.
3. Duplicate phone. Duplicate name question.
4. Search name, search number.
5. Delete — if you pop only from `names`, phones shift wrongly. Always pop both.

### Sample run

```
Choice: 1
Name: ravi
Phone: 9000000001
Saved.

Choice: 3
Keyword: rav
Ravi - 9000000001
```

### Hints

**Hint 1:** After add, `len(names)` must equal `len(phones)`. Print both lengths while testing.

**Hint 2:** Delete: take `n`, check range, `i = n - 1`, pop both.

**Hint 3:** Search by name can print **multiple** people. Use a hit counter for `No match`.

---

## P6 · Movie / series watchlist

**In real life:** Netflix "My List", or a notebook of what to watch.

### What it must do

Two lists: `titles` and `status` (each status is `"watch"` or `"done"`).

1. **Add title** — strip, reject empty, reject duplicate (ignore case). Status starts as `watch`.
2. **View** — show all, with label. Optional filter: `all` / `watch` / `done`.
3. **Mark done** — by number. If already done → `Already watched`.
4. **Remove** — by number (pop both lists).
5. **Search** — keyword in title.
6. **Summary** — how many total, how many left to watch, how many done.
7. **Exit**

### What to use

| Need | Tool |
|------|------|
| Title + status | **parallel lists** |
| Each menu action | **function** (`add_title`, `view`, `mark_done`, `remove_title`, `summary`) |
| Filter view | **`if status[i] == "watch"`** inside `view` |
| Mark done | **`status[i] = "done"`** (do not append a new item) |
| Summary | function that **prints** counts (or returns one formatted string) |

### Build order

1. Add + view all.
2. Mark done + remove.
3. Filter view (ask all/watch/done).
4. Search + summary.

### Sample run

```
Choice: 1
Title: 12th fail
Added.

Choice: 3
Number: 1
Marked done.

Choice: 6
Total: 1 | Left: 0 | Done: 1
```

### Hints

**Hint 1:** Duplicate title: loop `titles` with `.lower()`.

**Hint 2:** View filter: still use the **real** index in the full list if you later mark by number. Easiest design: **always view ALL numbered**, and filter only as an extra display. Mixing filtered numbers with mark-done numbers confuses users. Recommendation: view-all is numbered; mark done uses that same numbering.

---

## P7 · Canteen order

**In real life:** College canteen / tea stall counter.

### What it must do

Fixed menu (you type these lists at the top of the file — not from input):

```
menu_names  = ["tea", "coffee", "vada pav", "samosa", "water"]
menu_prices = [12, 20, 20, 15, 10]
```

Customer cart: `cart_names = []`, `cart_qty = []`.

Menu of the **program**:

1. **Show menu** — numbered with prices.
2. **Add to cart** — user types item name (ignore case, strip). If not on the menu → `Not sold here`. Take qty (integer > 0). If the item is **already in the cart**, add to its qty instead of a new line.
3. **View cart** — each line: name, qty, line total (price * qty). Then subtotal.
4. **Remove from cart** — by number.
5. **Checkout** — if cart empty, refuse. Print a bill:
   - each line
   - subtotal
   - if subtotal >= 100 → message `Free mint chutney`
   - print `Pay: <subtotal>`
   - then **empty the cart** (next customer)
6. **Exit**

Keep money simple. No GST unless you want it as extra.

### What to use

| Need | Tool |
|------|------|
| Menu name → price | function `menu_index(name)` returns index or `-1` |
| Cart | **two more lists** |
| Line total | `menu_prices[menu_index] * qty` |
| Already in cart? | function `cart_index(name)` |
| Next customer | `cart_names.clear()` and `cart_qty.clear()` inside `checkout()` |

### Build order

1. Show menu from the two lists.
2. Add to cart (no "already in cart" yet) + view cart with line totals.
3. Merge qty if name already in cart.
4. Remove. Checkout + clear.

### Sample run

```
Choice: 2
Item: TEA
Qty: 2
Added 2 x tea

Choice: 2
Item: tea
Qty: 1
Cart now: 3 x tea

Choice: 5
tea x 3 = 36
Pay: 36
Cart cleared.
```

### Hints

**Hint 1:** Find menu index:

```
idx = -1
for i in range(len(menu_names)):
    if menu_names[i] == name:
        idx = i
        break
if idx == -1:
    print("Not sold here")
```

**Hint 2:** Price of a cart line: find that name in `menu_names` again to get the price. Or (cleaner) keep a third cart list of prices — not required if you search the menu each time.

**Hint 3:** Checkout must not `break` the main menu unless you want the shop to close. Only clear the cart.

---

## P8 · Class attendance

**In real life:** Teacher’s register. Same names every day, mark present or absent.

### What it must do

First, take N and the student names (title case, skip empty). Store in `names`.  
Create `marks = []` with the same length, each value `"-" ` meaning not marked yet.

Then a menu:

1. **Mark today’s attendance** — go through **every** student, ask `P` or `A` (accept `p`/`a`). Anything else → re-ask that student. Save `"P"` or `"A"` in `marks` at the same index.
2. **View register** — `Aisha - P`, `Ravi - A`, `Meera - -`
3. **Show absentees** — print only names with `"A"`. If nobody absent, `All present` (only if at least one P exists). If nobody marked yet, `Not marked yet`.
4. **Count** — how many P, how many A, how many not marked.
5. **Find a student** — name keyword, show their status.
6. **Reset marks** — set every status back to `"-"`. Names stay.
7. **Exit**

### What to use

| Need | Tool |
|------|------|
| Names collected once | **list + loop** |
| Status aligned with names | **parallel list** |
| Each menu action | **function** (`mark_today`, `view_register`, `show_absentees`, `counts`, `find_student`, `reset`) |
| Mark each student | **`for i in range(len(names))`** inner while for P/A |
| Absentees | **loop + `if marks[i] == "A"`** |

### Build order

1. Read names into a list. Create `marks` with `"-"` using a loop or `["-"] * n`.
2. View register.
3. Mark today.
4. Absentees + count + find.
5. Reset: loop and set `marks[i] = "-"`.

### Sample run

```
How many students? 3
Aisha
Ravi
Meera

Choice: 1
Aisha (P/A): p
Ravi (P/A): a
Meera (P/A): p

Choice: 3
Absentees:
Ravi
```

### Hints

**Hint 1:** `marks = ["-"] * len(names)` is allowed.

**Hint 2:** For "All present": you need at least one mark that is P or A, and zero A. If all still `"-"`, that is not "all present".

**Hint 3:** Re-marking today **overwrites** old P/A. That is correct.

---

# Hard projects

These feel like a small real product. Several lists must stay in sync. Plan on paper first: write the **function names** before any code. 3–6 hours each is normal. Finish Feature 1 before Feature 2.

---

## P9 · Salon / clinic appointment desk

**In real life:** A reception desk. Fixed time slots. One person per slot. Book, cancel, find.

### What it must do

Hard-code the day’s slots (you can change the times):

```
slots = ["10:00", "10:30", "11:00", "11:30", "12:00"]
```

Parallel:

```
customer = ["", "", "", "", ""]   # empty string = free
service  = ["", "", "", "", ""]   # "hair" / "beard" / "facial"  (or doctor name)
```

Allowed services: `hair`, `beard`, `facial` (or for a clinic: `general`, `dental`, `eye` — pick one theme and stick to it).

Program menu:

1. **Show board** — each slot: time, FREE or name + service.
2. **Book**
   - show only FREE slots numbered
   - user picks a free slot (not a booked one)
   - take customer name (not empty, title case)
   - take service; if invalid, re-ask
   - save into `customer[i]` and `service[i]`
   - if that customer name is **already booked** today (ignore case) → refuse (`Already has an appointment`)
3. **Cancel** — take name, find their slot, set both fields back to `""`. If not found → `No booking`.
4. **Find** — take name, print time + service, or not found.
5. **Day summary** — how many booked, how many free, count per service.
6. **Exit**

### What to use

| Need | Tool |
|------|------|
| Slot + person + service | **three parallel lists** |
| Free means | function `is_free(i)` or `customer[i] == ""` |
| Book / cancel / find | **functions** that find an index, then assign |
| One booking per person | function `has_booking(name)` returns True/False |
| Summary per service | function `day_summary()` that prints counts |

### Build order

1. Show board (all free at start).
2. Book without the "already has appointment" rule. Show board again to verify.
3. Refuse second booking for same name.
4. Cancel + find.
5. Summary counts.

### Sample run

```
Choice: 2
Free slots:
1. 10:00
2. 10:30
...
Pick: 1
Name: meera joshi
Service: hair
Booked Meera Joshi at 10:00 for hair.

Choice: 1
10:00 | Meera Joshi | hair
10:30 | FREE |
...
```

### Hints

**Hint 1:** Booking pick is easier if you store the **real index** in `slots`, not 1..count-of-free. Two ways:

- Ask the user to type the time (`10:00`) and search the list.
- Or show `index+1` for **all** slots and reject if that slot is not free.

Typing the time is often less buggy. Recommended.

**Hint 2:** Cancel:

```
for i in range(len(slots)):
    if customer[i].lower() == name.lower():
        customer[i] = ""
        service[i] = ""
```

**Hint 3:** Do not `pop` from `slots`. The times never change. Only the customer/service strings change.

---

## P10 · Mini kirana shop (stock + bill)

**In real life:** A counter with limited stock. You cannot sell 5 soaps if 2 remain.

### What it must do

Start with a small inventory (edit as you like):

```
products = ["soap", "oil", "rice", "tea", "salt"]
prices   = [40, 180, 60, 90, 20]
stock    = [10, 5, 20, 8, 15]
```

Staff menu:

1. **View inventory** — name, price, stock. If stock is 0, show `OUT OF STOCK`. If stock <= 3 (and not 0), show `LOW`.
2. **Sell (make a bill)** — this is a **sub-loop** for one customer:
   - take product name (`end` to finish this customer)
   - if unknown product → error, continue
   - take qty
   - if qty > stock → `Only X left`
   - else reduce stock, add line to **this bill** (bill names + bill qty lists)
   - after `end`: if bill empty, `No sale`. Else print bill lines, total, then **clear bill lists** (stock stays reduced)
3. **Restock** — product name + qty to add. Unknown product → error.
4. **Search product** — keyword, show matches with price and stock.
5. **Low stock report** — print items with stock <= 3.
6. **Exit**

Keep money simple: `line = price * qty`, `total` is sum of lines. No GST required.

### What to use

| Need | Tool |
|------|------|
| Product + price + stock | **three parallel lists** |
| Find product | function `product_index(name)` returns index or `-1` |
| One customer’s bill | **two extra lists**, cleared after print |
| Cannot sell more than stock | **`if qty > stock[i]`** inside `sell()` |
| Selling reduces stock | **`stock[i] = stock[i] - qty`** |
| View / restock / low stock | **each a function** |

### Build order

1. View inventory with LOW / OUT tags.
2. Search + low stock report.
3. Restock.
4. Sell **one item** (no multi-item bill yet) to test stock going down.
5. Multi-item bill with inner `while`, `end` to finish, then print and clear bill lists.

### Sample run

```
Choice: 2
Product: soap
Qty: 2
Added.

Product: oil
Qty: 100
Only 5 left

Product: end
soap x 2 = 80
Total: 80
```

After this, soap stock is 8.

### Hints

**Hint 1:** Finding a product:

```
p = name.strip().lower()
idx = -1
for i in range(len(products)):
    if products[i] == p:
        idx = i
        break
```

Store product names in lowercase in the list so matching is easy — or lower both sides.

**Hint 2:** Reduce stock **when the item is accepted**, not at checkout. If you wait until checkout and the customer cancels, it is harder (you have no cancel-sale feature). Simple rule: accepted line immediately reduces stock.

**Hint 3:** Bill lists are only for printing. Inventory lists are the shop’s memory. Do not `pop` products when stock hits 0 — keep the name, stock becomes 0.

---

## P11 · College helpdesk (FAQ bot + tickets)

**In real life:** A helpdesk chat. Known questions get an instant answer. Unknown ones become tickets for staff.

### What it must do

Hard-code a small knowledge base (parallel lists):

```
faqs = [
    "when does college start",
    "where is the library",
    "how to apply for bonafide",
    "holiday tomorrow",
    "exam form last date"
]
replies = [
    "Lectures start at 9:00 AM.",
    "Library is on the first floor, left of the stairs.",
    "Apply at the office with your ID card.",
    "Please check the notice board for holidays.",
    "Exam form last date is 30 September."
]
```

Also keep:

```
tickets = []          # the question text
ticket_status = []    # "open" or "closed"
```

**Student / staff menu:**

1. **Ask a question** (student)
   - take a sentence
   - clean it: strip, lowercase, collapse extra spaces (you did this in Strings Q20)
   - **match:** if the cleaned question **contains** a faq keyword, **or** the faq contains the question (use `in` both ways), show the reply
   - if **several** faqs match, print all matches numbered, let the user pick one
   - if **zero** matches: `No answer yet. Saved as ticket #N` and append to tickets as `open`
2. **View tickets** (staff) — numbered, show text + status. Filter: `all` / `open` / `closed`.
3. **Close a ticket** — by number. If already closed, say so.
4. **Search tickets** — keyword.
5. **FAQ list** — print all known questions (so you can test).
6. **Exit**

### What to use

| Need | Tool |
|------|------|
| Known Q → A | **parallel lists `faqs` / `replies`** |
| Clean text | function `clean_text(s)` returns the cleaned string |
| Match | function `match_indexes(q)` **returns a list of indexes** |
| Unknown Q | **append to `tickets`** |
| Several matches | use the returned index list, then ask which one |
| Each staff action | **function** (`view_tickets`, `close_ticket`, `search_tickets`) |

### Build order

1. FAQ list + ask question with **simple** match (`keyword in faq` or `faq in question`). Always print first match only.
2. Save to tickets when no match.
3. View tickets + close.
4. Multiple matches: build `matched_indexes = []`, if len==1 reply, if len>1 let them pick, if 0 save ticket.
5. Search tickets + filter view.
6. Clean the question (lowercase, collapse spaces) before matching.

### Sample run

```
Choice: 1
Your question: where is library
Answer: Library is on the first floor, left of the stairs.

Choice: 1
Your question: hostel mess timing
No answer yet. Saved as ticket #1

Choice: 2
1. [open] hostel mess timing
```

### Hints

**Hint 1:** Simple match that works well enough:

```
q = cleaned_question
matched_indexes = []
for i in range(len(faqs)):
    if faqs[i] in q or q in faqs[i]:
        matched_indexes.append(i)
    else:
        # also: if any word is long and appears in faq
        ...
```

For v1, **only** `faqs[i] in q or q in faqs[i]` is enough.  
Example: faq is `where is the library` and user types `library` — then `q in faqs[i]` is True.

**Hint 2:** Ticket number shown to humans is `len(tickets)` after append (1-based). Store nothing extra; the index is the number.

**Hint 3:** Collapse spaces the easy way now that lists are allowed:

```
parts = q.split()
q = " ".join(parts)
```

Empty question after strip → `Type a question` and do not save a ticket.

---

# How to know you are done with a project

It is not done when it "kind of works". It is done when:

1. The sample run works.
2. Empty input does not crash.
3. Invalid menu choice does not crash — it prints `Invalid choice` and shows the menu again.
4. Parallel lists never go out of sync (add together, delete together).
5. You can close this file and explain out loud: *this list stores X, this function does Y, this if checks Z.*
6. Helpers **return** values (or change a list in place). Main (or the action function) prints.

If you cannot explain it, you copied a shape. Rebuild the last feature from scratch.

---

## Suggested order in a week

| Sitting | Project |
|---------|---------|
| 1 | Project 1 (guest list) |
| 2 | Project 2 (quiz) then 3 (lost & found) |
| 3 | Project 4 (profile card) |
| 4–5 | Project 5 (phone book) |
| 6 | Project 6 (watchlist) |
| 7–8 | Project 7 (canteen) |
| 9 | Project 8 (attendance) |
| 10–12 | One hard project (9 or 10 or 11) |

You do **not** need all 11 before Set 2.

**Minimum path:** 1, 5, and 7.  
**Strong path:** 1, 5, 7, then 9 or 10.

When one hard project runs without notes, **and** it is split into functions, go to **Set 2**: `more-practice-projects.md` (habits, token queue, library, mini bank, parking, workshop waitlist).

After a hard project from Set 1 or Set 2 works with both files closed, you are ready for **Tuples, Sets & Dictionaries**.
