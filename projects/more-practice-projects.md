# More Practice Projects — Set 2

This is a **second pack**. Same tools as Set 1:

`if` · loops · strings · **functions** · lists

Same bans: no dictionaries, no sets, no tuples as storage, no `return a, b`, no comprehensions, no files, no OOP.

Do these **after** at least the minimum path in `practice-projects.md` (Projects 1, 5, 7). These are new jobs, not copies of Set 1.

---

## Functions rule (same as Set 1)

| Level | What you must do |
|-------|------------------|
| **Basic (12–15)** | At least **2 helper functions** |
| **Intermediate (16–19)** | **Each menu action is a function.** Main is only the menu. |
| **Hard (20–22)** | Action functions **plus** helpers (`find_index`, `is_full`, `can_withdraw`, …) |

Build feature by feature. Run after every feature.

---

# Basic (Projects 12–15)

---

## P12 · Daily habit tracker

**In real life:** A notebook of habits for *today*: drink water, walk, study Python.

### What it must do

Lists: `habits` and `done` (`"yes"` or `"no"`). New habit starts as `"no"`.

1. **Add habit** — strip, reject empty, reject duplicate (ignore case).
2. **View today** — `1. [ ] drink water` or `1. [x] drink water`
3. **Mark done** — by number. If already yes → `Already done`.
4. **Unmark** — by number (set back to `"no"`).
5. **Progress** — print `3 / 5 done` and a message: all done → `Great day`; else `Keep going`.
6. **Reset day** — all `"no"`. Habits stay.
7. **Exit**

### What to use

| Need | Tool |
|------|------|
| Habit + done flag | **parallel lists** |
| Box drawing | **if** `done[i] == "yes"` then `"[x]"` else `"[ ]"` |
| Duplicate | function `habit_index(habits, name)` returns index or `-1` |
| Progress | function `count_done(done)` **returns** a number |

### Build order

1. `habit_index` + add + view (always `[ ]` first).
2. Mark done / unmark.
3. Progress + reset.

### Sample run

```
Choice: 1
Habit: walk
Added.

Choice: 3
Number: 1
Marked done.

Choice: 2
1. [x] walk

Choice: 5
1 / 1 done
Great day
```

### Hints

**Hint 1:** View uses the real index, so mark-done numbers match.

**Hint 2:** Reset is a loop: `done[i] = "no"`. Do not `clear()` the habits list.

---

## P13 · Home grocery restock

**In real life:** The fridge list on a kitchen wall. What is finished? What did you buy?

### What it must do

One list `items`. Each item is a string that may start with `BOUGHT: ` (same idea as the to-do list).

1. **Add needed item** — title case, reject empty, reject duplicate ignoring the `BOUGHT: ` prefix and case (`Milk` and `BOUGHT: milk` are the same item).
2. **View** — numbered. Bought lines show as `BOUGHT: Milk`.
3. **Mark bought** — by number. Prefix `BOUGHT: ` if not already.
4. **Remove** — by number (bought or not).
5. **Still need** — print only items that do **not** start with `BOUGHT: `. If none, `Nothing to buy`.
6. **Search** — keyword inside the name (ignore prefix and case).
7. **Exit**

### What to use

| Need | Tool |
|------|------|
| One list of strings | **list** |
| Bought or not | **`.startswith("BOUGHT: ")`** |
| Bare name | function `bare(s)` that returns the name without the prefix, lowercased |
| Duplicate | compare `bare(old) == bare(new)` |

### Build order

1. Add + view with no bought logic.
2. `bare()` + duplicate check.
3. Mark bought + still need + search.

### Sample run

```
Choice: 1
Item: milk
Added.

Choice: 3
Number: 1

Choice: 5
Nothing to buy
```

### Hints

**Hint 1:**

```
def bare(s):
    if s.startswith("BOUGHT: "):
        s = s[8:]
    return s.strip().lower()
```

**Hint 2:** Mark bought: `items[i] = "BOUGHT: " + bare(items[i]).title()` — or keep original casing from before the prefix.

---

## P14 · Class poll

**In real life:** “Where should the picnic be?” Options on the board, students raise hands.

### What it must do

Hard-code or let the teacher type options at the start (at least 2). Parallel lists: `options` and `votes` (all start at 0).

Then a voting menu:

1. **Show options** — `1. Lonavala  (0)`
2. **Vote** — student types an option **number**. `votes[i] += 1`. Invalid number → error.
3. **Results** — print all options with votes, then the **winner** (first option if a tie).
4. **Reset votes** — all back to 0. Options stay.
5. **Exit**

Optional extra (still basic): reject a vote if they type the option **name** instead of a number — print `Type the number`.

### What to use

| Need | Tool |
|------|------|
| Option + count | **parallel lists** |
| Vote | `votes[i] = votes[i] + 1` |
| Winner | function `winner_index(votes)` **returns** an index (use `>` so first wins ties) |

### Build order

1. Fill `options` (loop or hard-code). Create `votes = [0] * len(options)`.
2. Show + vote.
3. Results + winner + reset.

### Sample run

```
1. Lonavala  (0)
2. Mahabaleshwar  (0)
Vote: 2
Voted.

Results:
Lonavala  (0)
Mahabaleshwar  (1)
Winner: Mahabaleshwar
```

### Hints

**Hint 1:** Do not `append` a new option when someone votes. Only increase the matching count.

**Hint 2:** Winner: `best = 0` then `if votes[i] > votes[best]: best = i`.

---

## P15 · Reading log

**In real life:** A list of books you are reading or finished.

### What it must do

`titles` and `status` (`"reading"` or `"finished"`). New book starts as `"reading"`.

1. **Add book** — title case, reject empty / duplicate (ignore case).
2. **View** — all, or filter `reading` / `finished`.
3. **Mark finished** — by number.
4. **Remove** — by number.
5. **Search** — keyword in title.
6. **Count** — how many reading, how many finished.
7. **Exit**

View-all is numbered with the **real** index so mark-finished uses that number (same lesson as Set 1 watchlist, different story).

### What to use

| Need | Tool |
|------|------|
| Title + status | **parallel lists** |
| Duplicate | `book_index(titles, name)` |
| Filter | `if status[i] == "reading"` inside `view` |
| Count | function that **prints** two numbers (or returns one formatted string) |

### Build order

1. Add + view all.
2. Mark finished + remove.
3. Filter view + search + count.

### Sample run

```
Choice: 1
Title: atomic habits
Added.

Choice: 3
Number: 1
Marked finished.

Choice: 6
Reading: 0  Finished: 1
```

### Hints

**Hint 1:** Status is a string in a second list, not a boolean — easier to print.

**Hint 2:** Filter display should still show the real number: `3. [reading] ...` so the user can mark number 3.

---

# Intermediate (Projects 16–19)

Each menu action = one function.

---

## P16 · Token queue (clinic / bank)

**In real life:** You take a token. A display shows “Now serving”. People wait in a line.

### What it must do

List `queue` of names (front of the list = next person). Integer `now_serving` starts at 0 (no token yet). Integer `next_token` starts at 1.

1. **Take token** — take a name (not empty, title case). Append name. Print `Token N for <Name>` where N is `next_token`, then increase `next_token`.
2. **Now serving** — if queue empty → `Queue empty`. Else remove the **first** name (`pop(0)`), increase `now_serving`, print `Now serving Token X — <Name>`.
3. **Skip / no-show** — same as now serving, but print `Skipped: <Name>`. (Still leave the queue.)
4. **Waiting list** — numbered names still in `queue`. If empty, `No one waiting`.
5. **How many waiting** — `len(queue)`.
6. **Exit**

Token numbers: first person is token 1, second is 2, … They are **not** stored in a list. You only store names. `now_serving` is the last token you called.

Wait — if you only store names, after pop you may lose the mapping of token number to name.

**Simpler rule that works without extra lists:** do not print token numbers at all except “next token is N” when they join, and “called count” when serving. Even simpler:

**Use two parallel lists:** `names` and `tokens` (the number they got). `next_token` starts at 1. Serving always takes index 0 from **both** lists.

### What to use

| Need | Tool |
|------|------|
| Line of people | **two parallel lists** `names`, `tokens` |
| Join the back | `.append` on both |
| Serve the front | `.pop(0)` on both |
| Next number | integer `next_token` in main, passed into `take_token` or kept global-in-main |

Do not use `global` if you can avoid it. Keep `next_token` in main and pass it in; have `take_token` **return** the new next_token (one value).

### Build order

1. Take token + waiting list.
2. Now serving (`pop(0)`).
3. Skip. How many.

### Sample run

```
Choice: 1
Name: aisha
Token 1 for Aisha

Choice: 1
Name: ravi
Token 2 for Ravi

Choice: 2
Now serving Token 1 — Aisha

Choice: 4
1. Token 2  Ravi
```

### Hints

**Hint 1:** `pop(0)` removes the front. `pop()` without 0 removes the back — wrong for a queue.

**Hint 2:** After every pop, `len(names)` must equal `len(tokens)`.

**Hint 3:** `take_token` can return the updated `next_token`:

```
def take_token(names, tokens, next_token, name):
    names.append(name)
    tokens.append(next_token)
    return next_token + 1
```

---

## P17 · Society complaint desk

**In real life:** A housing society / hostel office log.

### What it must do

Parallel lists:

- `flats` — e.g. `"A-102"`
- `texts` — the complaint
- `status` — `"open"` or `"closed"`

Menu:

1. **New complaint** — flat (not empty, upper case like `A-102`), text (not empty). Status `open`.
2. **View** — filter `all` / `open` / `closed`. Numbered with **real** index.
3. **Close** — by number. If already closed → `Already closed`.
4. **Search** — keyword in flat **or** text (ignore case).
5. **Open count** — how many still open.
6. **Exit**

### What to use

| Need | Tool |
|------|------|
| Three lists, same index | **parallel lists** |
| Close | `status[i] = "closed"` (do not pop unless you also pop the others) |
| Search | loop, `if key in flats[i].lower() or key in texts[i].lower()` |
| Each action | **function** |

### Build order

1. New + view all.
2. Close + open count.
3. Filter view + search.

### Sample run

```
Choice: 1
Flat: a-102
Text: water leakage
Logged #1

Choice: 3
Number: 1
Closed.

Choice: 5
Open: 0
```

### Hints

**Hint 1:** Do not `pop` when closing. History should stay.

**Hint 2:** Flat: `flat.strip().upper()` so `a-102` and `A-102` look the same.

---

## P18 · Small library (issue / return)

**In real life:** A classroom library. Each book is free or with someone.

### What it must do

Start with a few books hard-coded:

```
books    = ["ncert physics", "wings of fire", "atomic habits", "ncert maths"]
holder   = ["", "", "", ""]    # empty = on the shelf
```

Menu:

1. **Catalogue** — `1. ncert physics  [available]` or `[with Aisha]`
2. **Issue** — take book **name** (ignore case, allow a keyword that matches **one** title). Take student name. If already issued → `Already issued to <holder>`. If keyword matches 0 books → `Not found`. If it matches 2+ → print the matches, ask them to type a fuller name.
3. **Return** — take book name. If available already → `Was not issued`. Else set holder to `""`, print `Returned. Thank you <old holder>`.
4. **My books** — take a student name, print every title they hold. If none, `None`.
5. **Available only** — print titles with empty holder.
6. **Exit**

You may also issue by catalogue number instead of name — that is easier. **Recommended:** issue by number from the catalogue.

### What to use

| Need | Tool |
|------|------|
| Book + who has it | **parallel lists** |
| Available | `holder[i] == ""` |
| Find by keyword | function `match_indexes(books, key)` **returns a list of indexes** |
| Issue / return / my books | **functions** |

### Build order

1. Catalogue.
2. Issue by number + return by number.
3. Then add name/keyword search if you want.
4. My books + available only.

### Sample run

```
Choice: 2
Number: 2
Student: aisha
Issued Wings Of Fire to Aisha

Choice: 1
1. ncert physics  [available]
2. wings of fire  [with Aisha]
...

Choice: 3
Number: 2
Returned. Thank you Aisha
```

### Hints

**Hint 1:** Title-case the book only when printing, or store already cleaned.

**Hint 2:** Keyword match: `if key in books[i].lower()`. If `len(matches) != 1`, do not issue.

**Hint 3:** Do not `pop` books. The shelf never shrinks.

---

## P19 · Music playlist

**In real life:** A simple music player list: add songs, play next / previous.

### What it must do

`songs` list. Integer `current` = `-1` meaning nothing playing.

1. **Add song** — reject empty / duplicate (ignore case). If this is the first song and nothing is playing, you may set `current = 0` or leave -1 until Play — pick one and stay consistent. **Recommended:** adding does not auto-play.
2. **View playlist** — mark the current song with `>`  
   `1. Kesariya`  
   `2. > Naatu Naatu`
3. **Play** — take a number, set `current`. Invalid → error. Empty playlist → `No songs`.
4. **Next** — `current = current + 1`. If past the last song, wrap to 0. If empty, error.
5. **Previous** — `current = current - 1`. If below 0, wrap to last index.
6. **Now playing** — print the current title, or `Nothing playing`.
7. **Remove** — by number. If you remove the current song, set `current` to `-1` **or** to the next song (your choice; write it in a comment). If you remove a song **before** current, `current` must shift down by 1 or it will point at the wrong title.
8. **Exit**

### What to use

| Need | Tool |
|------|------|
| Songs | **one list** |
| Which is playing | **integer index** `current` |
| Wrap next | `if current >= len(songs): current = 0` |
| Wrap prev | `if current < 0: current = len(songs) - 1` |
| Each action | **function**. `next_song` **returns** the new current (one value). |

### Build order

1. Add + view (no `>` yet).
2. Play + now playing + `>` in view.
3. Next / previous wrap.
4. Remove and **fix `current`**.

### Sample run

```
Choice: 1
Song: kesariya
Choice: 1
Song: naatu naatu
Choice: 3
Number: 2
Now playing: naatu naatu
Choice: 4
Now playing: kesariya
```

(If wrap from last to first.)

### Hints

**Hint 1:** View:

```
mark = "> " if i == current else "  "
print(str(i+1) + ". " + mark + songs[i])
```

**Hint 2:** Remove is the easy place to create a bug. After `pop(i)`:

- if list becomes empty → `current = -1`
- elif `i < current` → `current -= 1`
- elif `i == current` → set `-1` (simplest)

**Hint 3:** Next when `current == -1`: treat as play first song (`current = 0`).

---

# Hard (Projects 20–22)

Write the function names on paper first.

---

## P20 · Mini bank (many customers)

**In real life:** A tiny passbook system. Several people, each with a PIN and a balance.

### What it must do

Staff / ATM menu:

**Not logged in:**

1. **Open account** — name (title case, not empty). PIN exactly 4 **digits**. Starting balance 0. Reject duplicate name (ignore case).
2. **Login** — name + PIN. 3 wrong PIN attempts for **that try**, then back to menu (do not delete the account). On success, remember `logged_i` (the index).
3. **Exit**

**Logged in** (show a different menu):

4. **Balance**
5. **Deposit** — amount > 0
6. **Withdraw** — amount > 0 and <= balance, else `Insufficient`
7. **Logout** — `logged_i = -1`, back to the first menu

Parallel lists: `names`, `pins` (strings of 4 digits), `balances` (numbers).

No transfer between accounts required. Add it as extra only if the rest works.

### What to use

| Need | Tool |
|------|------|
| Three lists | **parallel** |
| Find customer | `account_index(names, name)` returns index or `-1` |
| PIN check | `check_pin(pins, i, entered)` returns True/False |
| Deposit / withdraw | functions that change `balances[i]` |
| Which menu | `if logged_i == -1:` show public menu else show account menu |

### Build order

1. Open account + list names (a hidden debug print of all names is fine while building).
2. Login with PIN (no attempt limit yet) + balance + logout.
3. Deposit / withdraw.
4. 3 PIN attempts.

### Sample run

```
Choice: 1
Name: aisha
PIN: 1357
Account opened.

Choice: 2
Name: aisha
PIN: 0000
Wrong PIN (2 left)
PIN: 1357
Welcome Aisha

Choice: 5
Amount: 500
Balance: 500
Choice: 6
Amount: 200
Balance: 300
Choice: 7
Logged out.
```

### Hints

**Hint 1:** Store PIN as a **string** so `0123` does not become `123`. Check with `isdigit()` and `len == 4`.

**Hint 2:** Never `print` the PIN list.

**Hint 3:** Withdraw:

```
def withdraw(balances, i, amount):
    if amount <= 0:
        return "Invalid amount"
    if amount > balances[i]:
        return "Insufficient"
    balances[i] = balances[i] - amount
    return "ok"
```

Main prints the message or the new balance.

---

## P21 · Parking lot

**In real life:** A small paid parking. Fixed slots. One vehicle per slot.

### What it must do

Hard-code slot labels:

```
slots   = ["A1", "A2", "A3", "B1", "B2"]
vehicle = ["", "", "", "", ""]   # empty = free
```

Menu:

1. **Board** — `A1 FREE` or `A1  MH12AB1234`
2. **Park** — take vehicle number (clean: upper case, no spaces). Take a slot name (or number). If slot free, save. If that vehicle is **already parked** in any slot → refuse. If slot booked → `Occupied`.
3. **Exit vehicle** — take vehicle number, free that slot. If not found → `Not parked here`.
4. **Find** — take vehicle number, print slot, or not found.
5. **Free slots** — print all free labels + how many free.
6. **Fill %** — print `3 / 5 slots used` (simple division is OK here — it is a parking fact, not a maths drill).
7. **Exit program**

Vehicle number: after removing spaces, length at least 6, only letters and digits.

### What to use

| Need | Tool |
|------|------|
| Slot + vehicle | **parallel lists** |
| Clean number | function `clean_vehicle(s)` returns upper digits+letters only |
| Find vehicle | `vehicle_index(vehicle, num)` returns index or `-1` |
| Find slot label | `slot_index(slots, label)` |
| Park / leave / find / board | **functions** |

### Build order

1. Board + park by slot label + board again.
2. Reject duplicate vehicle. Reject occupied slot.
3. Exit vehicle + find + free list + fill.

### Sample run

```
Choice: 2
Vehicle: mh12 ab1234
Slot: A1
Parked MH12AB1234 at A1

Choice: 2
Vehicle: MH12AB1234
Slot: A2
Already parked at A1

Choice: 3
Vehicle: MH12AB1234
Slot A1 is free
```

### Hints

**Hint 1:** Do not `pop` from `slots`. Only change `vehicle[i]`.

**Hint 2:** Clean:

```
def clean_vehicle(s):
    out = ""
    for ch in s:
        if ch.isalnum():
            out += ch.upper()
    return out
```

Then check `len(out) >= 6`.

**Hint 3:** Park: first `vehicle_index` — if not -1, refuse. Then `slot_index`. Then `if vehicle[i] != "": occupied`.

---

## P22 · Workshop registration + waitlist

**In real life:** A free Python workshop with limited seats. Extra names go on a waitlist. If someone cancels, the first waitlisted person gets the seat.

### What it must do

Constants at the top: `CAPACITY = 3` (use 3 while testing; you can raise it later).

Lists: `seats` (confirmed names), `wait` (waitlist names).

Menu:

1. **Register** — name (title case, not empty). If already in seats **or** wait (ignore case) → `Already registered`.  
   If `len(seats) < CAPACITY` → add to seats, print `Seat confirmed (2/3)`.  
   Else append to wait, print `Waitlist position 1`.
2. **View seats**
3. **View waitlist** (numbered 1 = first to get a seat)
4. **Cancel** — take a name.
   - If on seats: remove them. If waitlist is not empty, **move wait[0]** into seats and print `Moved from waitlist: <Name>`.
   - If on waitlist only: just remove from wait.
   - If neither: `Not found`.
5. **Search** — name → print `Confirmed` / `Waitlist #N` / `Not found`.
6. **Status** — `Seats 3/3 full` or `Seats 1/3` plus waitlist length.
7. **Exit**

### What to use

| Need | Tool |
|------|------|
| Confirmed vs waiting | **two lists** |
| Full? | `len(seats) >= CAPACITY` |
| Already in? | function `in_list(lst, name)` returns True/False |
| Find wait position | loop, return `i+1` or `-1` |
| Cancel + promote | `seats.remove` / `pop` then `seats.append(wait.pop(0))` |

### Build order

1. Register until full, then one waitlist person. View both.
2. Search + status.
3. Cancel a **confirmed** person and watch wait[0] move. Cancel a waitlist person (no promote).

### Sample run

```
CAPACITY = 3
Register Aisha → Seat confirmed (1/3)
Register Ravi  → Seat confirmed (2/3)
Register Meera → Seat confirmed (3/3)
Register Dev   → Waitlist position 1
Cancel Aisha   → Moved from waitlist: Dev
View seats     → Ravi, Meera, Dev
```

### Hints

**Hint 1:** Waitlist position is `len(wait)` **after** append.

**Hint 2:** Promote only when a **seat** is freed **and** wait is not empty. Cancelling from waitlist does not promote anyone.

**Hint 3:** Remove by name: find index with a loop (ignore case), then `pop(i)`. `.remove(name)` fails if casing differs.

---

# Done when

Same bar as Set 1: sample run works, invalid input does not crash, parallel lists stay the same length, you can explain each function out loud.

## Suggested order

| Sitting | Project |
|---------|---------|
| 1 | 12 habit tracker |
| 2 | 13 grocery **or** 15 reading log |
| 3 | 14 poll |
| 4–5 | 16 token queue |
| 6 | 17 complaints |
| 7–8 | 18 library |
| 9 | 19 playlist (careful on remove) |
| 10–12 | one hard: **20 bank** or **21 parking** or **22 waitlist** |

**Minimum Set 2 path:** 12, 16, 22.  
22 is the best “this is a real product” piece in this file.

When 20 or 22 runs with both project files closed, you are ready for **Tuples, Sets & Dictionaries**.
