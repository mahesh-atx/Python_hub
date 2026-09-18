# Lists

**Questions:** 20 (Basics 1–8 · Intermediate 9–16 · Advanced 17–20)

You already know: variables, operators, conditionals, loops, strings, **functions**.

---

## You may use

- Everything from the previous four topics, including `def` / `return`
- List creation: `[]`, `[1, 2, 3]`, `[0] * n`
- Indexing and slicing: `a[0]`, `a[-1]`, `a[1:4]`
- `len(a)`, membership `in`
- Methods: `.append()`, `.insert()`, `.remove()`, `.pop()`, `.sort()`, `.reverse()`, `.count()`, `.index()`, `.extend()`, `.copy()`, `.clear()`
- Looping: `for item in a`, `for i in range(len(a))`
- `min()`, `max()`, `sum()` — but several questions ban them on purpose so you write the logic
- Nested lists only if a question asks
- `.split()` / `" ".join(...)` are now allowed (they produce / need a list)

## Do NOT use

- Tuples as storage, **sets** (`set()`, `{}` set operations) — especially not to remove duplicates
- Dictionaries
- List comprehensions: `[x for x in a if ...]`
- `zip()`, `enumerate()` — use `range(len(a))` instead (clearer at this stage)
- `return a, b` (two values) — return **one** list, or one number, or write two functions

**Parallel lists** (one list of names, one list of marks, same indexes) are how you store pairs **before** dictionaries. Several advanced questions use that on purpose.

## How to mix functions with lists

Basics (Q1–Q8): focus on list syntax. Functions are optional.

**From Q9 onward, wrap the core logic in a function.** Example:

```
def list_sum(a):
    total = 0
    for x in a:
        total += x
    return total

# main: build the list with input, then:
print(list_sum(a))
```

The function takes a list and returns **one** value (a number, a boolean, or a new list). Main talks to the user.

## Real-world use

- Shopping cart
- To-do list
- Marks of a class
- Playlist, inventory, chat messages
- Leaderboard of scores

If the program must remember **many values**, you need a list. Without lists you only had running totals (Loops Q20). Now you can keep every item.

## How to practise

Read → Think → Blank file → Test.  
10 minutes before hints.

**How to take a list as input in these questions (use this style unless the question says otherwise):**

```
n = int(input("How many items? "))
a = []
for i in range(n):
    value = int(input())   # or input() for text
    a.append(value)
```

You may also write a list directly in the file for testing, e.g. `marks = [80, 45, 90]`, but practising `input` + `append` is better.

---

# Basics (Q1–Q8)

---

### Q1 · Build and print

**Task:** Take N, then take N integers into a list. Print the list and its length.

**Example:**

```
Input:  4
        10 20 30 40     (one per line is also fine)
Output: [10, 20, 30, 40]
        Length: 4
```

---

### Q2 · First, last, middle

**Task:** Take a list of integers (N >= 1). Print first element, last element, and the middle element.

Middle: if N is odd, the one centre element. If N is even, print the **left-middle** (index `N//2 - 1`).

**Example:**

```
Input:  5
        11 22 33 44 55
Output: First: 11
        Last: 55
        Middle: 33
```

```
Input:  4
        10 20 30 40
Output: First: 10
        Last: 40
        Middle: 20
```

---

### Q3 · Append and insert

**Task:** Start with `nums = [10, 20, 30]`.

1. Append 40
2. Insert 15 at index 1
3. Print the list

**Expected output:**

```
[10, 15, 20, 30, 40]
```

---

### Q4 · Remove and pop

**Task:** Start with `nums = [5, 8, 5, 12, 5]`.

1. `.remove(5)` (removes the **first** 5)
2. `.pop()` (removes the last item)
3. Print the list and print what `pop` returned

**Expected:**

```
Popped: 5
List: [8, 5, 12]
```

---

### Q5 · Print each item with its position

**Task:** Take a list of names (strings). Print each name on its own line as `1. Name` starting from 1.

**Example:**

```
Input:  3
        Aisha
        Ravi
        Meera
Output: 1. Aisha
        2. Ravi
        3. Meera
```

---

### Q6 · Sum of a list

**Task:** Take a list of numbers. Print the sum. Use a loop. Do **not** use `sum()`.

**Example:**

```
Input:  3
        10 20 30
Output: 60
```

---

### Q7 · Is it in the list?

**Task:** Take a list of integers and one target. Print `Found at index i` for the **first** match, or `Not found`. You may use `.index()` **or** a loop. Loop is better practice.

**Example:**

```
Input:  4
        7 2 9 2
        2
Output: Found at index 1
```

---

### Q8 · Slice practice

**Task:** Take a list of at least 5 integers. Print:

1. First 3 items
2. Last 3 items
3. The list without first and last
4. Every second item (indexes 0, 2, 4, …)

**Example:**

```
Input:  6
        1 2 3 4 5 6
Output: [1, 2, 3]
        [4, 5, 6]
        [2, 3, 4, 5]
        [1, 3, 5]
```

---

# Intermediate (Q9–Q16)

Put the core logic in a **function**. Main only builds the list and prints.

---

### Q9 · Max and min without max()/min()

**Task:** Take a non-empty list of numbers. Print the largest and the smallest. Do **not** use `max()`, `min()`, or `.sort()`.

**Example:**

```
Input:  5
        4 9 1 7 3
Output: Max: 9
        Min: 1
```

**Guide:** Write `def find_max(a):` that returns the largest, and `def find_min(a):` that returns the smallest (two functions, one value each). Assume `a[0]` then loop the rest. Main prints both.

**Hint 1:** `for i in range(1, len(a)):` compare `a[i]` with largest.

**Hint 2:** Do not return two values from one function. Two functions is the clean rule until tuples.

---

### Q10 · Count evens and odds

**Task:** Take a list of integers. Print how many are even and how many are odd.

**Example:**

```
Input:  6
        1 2 3 4 5 6
Output: Even: 3
        Odd: 3
```

**Guide:** Write `def count_even(a):` returning the even count. Odd count in main can be `len(a) - count_even(a)`, or write `count_odd` too.

**Hint 1:** Do not create extra lists unless you want to. Counters are enough.

**Hint 2:** Negative even numbers like -4 are even (`-4 % 2 == 0` in Python).

---

### Q11 · Reverse a list without `.reverse()` or slicing

**Task:** Take a list. Build a **new** reversed list using a loop. Print the new list. Do not use `.reverse()`, `reversed()`, or `a[::-1]`.

**Example:**

```
Input:  4
        1 2 3 4
Output: [4, 3, 2, 1]
```

**Guide:** Write `def reversed_list(a):` that **returns a new list**. Start `rev = []`. Loop original from last index to 0, append each item. Main prints the returned list.

**Hint 1:** `for i in range(len(a)-1, -1, -1): rev.append(a[i])`

**Hint 2:** Do not modify the original if you are also looping over it with insert — building a new list is safer.

---

### Q12 · Second largest

**Task:** Take a list of integers that may contain duplicates. Print the second largest **distinct** value. If there is no second largest (all equal, or only one element), print `Not available`.

**Example:**

```
Input:  5
        10 10 9 8 9
Output: 9
```

```
Input:  3
        5 5 5
Output: Not available
```

**Guide:** Write `def second_largest(a):` that returns the number, or returns the string `"Not available"`. Find the largest first. Then find the largest value that is **not equal** to that. No sets.

**Hint 1:** Two-pass: first loop finds `m`. Second loop finds max of items `!= m`.

**Hint 2:** You can also keep two variables `first` and `second` in one pass. Update carefully when you see a new max (old first becomes second).

---

### Q13 · Merge two lists and sort

**Task:** Take two lists of integers. Create a third list that contains all items of both. Sort it in ascending order and print it. You may use `.extend()` and `.sort()`.

**Example:**

```
Input:
List 1: 3 1 2
List 2: 5 0
Output: [0, 1, 2, 3, 5]
```

**Guide:** Write `def merged_sorted(a, b):` that returns a new sorted list. `c = a + b` then `c.sort()` then `return c`.

**Hint 1:** `+` on lists concatenates. It does not add numbers.

**Hint 2:** `.sort()` changes the list in place and returns `None`. Do not write `c = c.sort()`.

---

### Q14 · Remove duplicates

**Task:** Take a list. Build a new list with unique items, **keeping first-seen order**. Do **not** use `set()`.

**Example:**

```
Input:  7
        4 1 4 2 1 3 2
Output: [4, 1, 2, 3]
```

**Guide:** Write `def unique_keep_order(a):` that returns a new list. Start `unique = []`. For each item, if it is **not already in** `unique`, append it. Return `unique`.

**Hint 1:** `if item not in unique: unique.append(item)`

**Hint 2:** `not in` on a list is a loop inside. That is OK. Sets would be faster but they are the next topic.

---

### Q15 · Parallel lists: topper

**Task:** Take N students. Take N names into `names` and N marks into `marks` (same order). Print the name of the student with the highest marks. If two share the highest, print the one who appeared **first**.

**Example:**

```
Input:  4
        Aisha 80
        Ravi 95
        Meera 95
        Dev 70
Output: Ravi
```

(You may take names and marks on separate lines. First 95 is Ravi.)

**Guide:** Write `def topper_index(marks):` that **returns the index** of the highest mark (first if tie). Main prints `names[that_index]`. Same index `i` means `names[i]` belongs to `marks[i]`.

**Hint 1:** `best_i = 0` then loop `i` from 1 to N-1. If `marks[i] > marks[best_i]`, update `best_i`. Use `>` not `>=` so the first topper stays.

**Hint 2:** Do not sort, because sorting marks would lose the connection to names unless you are very careful.

---

### Q16 · Filter into a new list

**Task:** Take a list of marks (0–100). Create a new list of only the marks that are **>= 40** (pass list) and another list of marks **< 40** (fail list). Print both.

**Example:**

```
Input:  6
        88 32 40 71 19 55
Output: Pass: [88, 40, 71, 55]
        Fail: [32, 19]
```

**Guide:** Two empty lists. Loop original. `if m >= 40: pass_list.append(m) else fail_list.append(m)`. This is the idea behind filter / comprehension, written by hand.

**Hint 1:** Do not remove from a list while you loop over the same list. Build new lists.

**Hint 2:** 40 is pass (as in Topic 1).

---

# Advanced (Q17–Q20)

---

### Q17 · Class marks report

**Real-world:** A teacher dashboard. One list, many statistics.

**Task:** Take a non-empty list of marks (0–100). Print:

1. Count of students
2. Average (1 decimal)
3. Highest and lowest (you may now use `max`/`min` **or** your Q9 logic)
4. How many passed (>= 40) and failed
5. How many scored above the average
6. A simple grade count: A (>=90), B (>=75), C (>=60), D (>=40), F (<40)

**Example:**

```
Input:  5
        90 40 75 30 60
Output:
Students: 5
Average: 59.0
Highest: 90
Lowest: 30
Pass: 4 Fail: 1
Above average: 3
A: 1  B: 1  C: 1  D: 1  F: 1
```

**Self-check:** All 50 → average 50.0, above average 0 (50 is not **above**).

**Guide:** Split into functions, each returning one value: `average(marks)`, `count_pass(marks)`, `count_grade(marks, letter)` or separate counters in one loop in `print_report(marks)` that **prints** (this one function may print the whole report). First pass for average. **Second pass:** count above average.

**Hint 1:** Two separate `for` loops is normal and clear.

**Hint 2:** Average = total / len(marks). Be careful not to integer-divide: use `/` not `//`.

**Hint 3:** Grade bands: use elif ladder from Topic 1, inside the first loop, increment counters `a_count`, `b_count`, …

---

### Q18 · To-do list

**Real-world:** This is a tiny project. Menu loop + list methods + strings.

**Task:** Start with an empty list `tasks`. Keep showing:

```
1. Add task
2. View tasks
3. Remove task by number
4. Mark done by number  (put "DONE: " in front of the text if not already done)
5. Exit
```

Rules:

- Add: take a line of text, `.strip()` it. If empty, print `Cannot add empty task`. Else append.
- View: if empty, print `No tasks`. Else print numbered list like Q5.
- Remove: take a number 1..len. Pop that index (`number - 1`). If number is invalid, print `Invalid number`.
- Mark done: same validity. If the task already starts with `DONE: `, print `Already done`. Else replace that index with `"DONE: " + old_text`.
- Exit: print `Bye` and `break`.

**Example (abridged):**

```
Choice 1 → buy milk
Choice 1 → call ravi
Choice 2
1. buy milk
2. call ravi
Choice 4 → 1
Choice 2
1. DONE: buy milk
2. call ravi
Choice 3 → 2
Choice 2
1. DONE: buy milk
```

**Self-check:** Remove number 0 or 99 → Invalid number. Mark done twice on same item → Already done.

**Guide:** Functions: `add_task(tasks, text)`, `view_tasks(tasks)`, `remove_task(tasks, num)`, `mark_done(tasks, num)`. Each **changes the same list** (lists are mutable — the function does not need to return the list if it uses `.append` / `.pop`). Main is only the `while True` menu. 1-based vs 0-based. `.startswith("DONE: ")`.

**Hint 1:** Valid number: `if num < 1 or num > len(tasks):`

**Hint 2:** Mark done: `tasks[i] = "DONE: " + tasks[i]`

**Hint 3:** After `pop`, later numbers shift down. That is correct list behaviour — do not fight it.

---

### Q19 · Kirana bill with item names

**Real-world:** A real bill needs the name **and** the price of each item. Two lists, same index. (Dictionaries would pair them later.)

**Task:**

Keep taking items until the name is `end` (any case: `end`, `END`).

Each item:

1. name (string)
2. price (number > 0; if price <= 0, print `Invalid price` and **do not** store that item; ask again for a new name)

Store names in `names`, prices in `prices`.

After `end`:

- If no items, print `No items` and stop.
- Print each line: `name - Rs price`
- Subtotal = sum of prices (loop or `sum`)
- If subtotal >= 1000, discount 10%, else 0
- GST 5% on (subtotal − discount)
- Print discount, GST, grand total
- Then print the **costliest item name** (if tie, the first)

**Example:**

```
rice
80
milk
60
ghee
900
end

rice - Rs 80
milk - Rs 60
ghee - Rs 900
Subtotal: 1040
Discount: 104.0
GST: 46.8
Grand total: 982.8
Costliest: ghee
```

**Self-check:** First input `end` → No items. Invalid price should not leave a name without a price (do not append name until price is valid — easiest: if price invalid, do not append either, and loop continues).

**Guide:** Functions: `add_item(names, prices, name, price)` (append both or reject), `subtotal(prices)`, `costliest_index(prices)`. Main is the input loop until `end`. Keep the two lists the same length.

**Hint 1:** Compare name with `.strip().lower() == "end"` so `End` still stops.

**Hint 2:** Costliest: `best = 0` then `if prices[i] > prices[best]: best = i` then print `names[best]`.

**Hint 3:** Keep the two lists the same length always. If you append name before checking price, they go out of sync — that bug is the whole lesson.

---

### Q20 · Cricket batting line

**Real-world:** Sports apps. A list of runs per batter, plus string names in a parallel list.

**Task:** Take N batters (N >= 1). For each, take name and runs (integer >= 0).

Then print a report:

1. Scorecard lines: `Name: runs`
2. Total team runs
3. Highest scorer and their runs (first if tie)
4. Number of ducks (runs == 0)
5. Number of batters with 50+ (half-centuries or more, including 100+)
6. Strike-ish stat: take one extra integer `balls` for the **whole team**, then print run rate as `total_runs / balls * 6` (runs per over), 2 decimals. If balls is 0, print `Run rate: N/A`

**Example:**

```
Input:
3
Rohit 88
Gill 0
Kohli 55
Balls: 90

Output:
Rohit: 88
Gill: 0
Kohli: 55
Total: 143
Highest: Rohit (88)
Ducks: 1
Fifty+: 2
Run rate: 9.53
```

143 / 90 * 6 = 9.533… → 9.53

**Self-check:** One batter, 0 runs, 0 balls → duck 1, fifty 0, run rate N/A, highest is that batter.

**Guide:** Parallel lists `names`, `runs`. One loop can print the card, add total, count ducks and fifties, and track best index at the same time. Run rate is after the loop.

**Hint 1:** Fifty+ means `runs[i] >= 50`. A 100 still counts as one fifty+ here (not a separate hundred counter unless you want extra).

**Hint 2:** Run rate: `round(total / balls * 6, 2)` — or print with formatting you know. If you do not know `round`, printing the raw decimal is OK.

**Hint 3:** Highest is the same pattern as Q15 / Q19. Do not sort.

---

# Mini project

Close this file. Empty `.py` file.

**"Solapur tiffin orders"**

Menu loop:

1. Add order (customer name + item name + price) — three parallel lists
2. View all orders
3. Cancel order by number
4. Print today's total and the customer who spent the most (if one customer appears twice, **simple version:** do not merge them; treat each order separately)
5. Exit

Use if, loops, strings, **functions**, and lists. Each menu action should be a function. If you can do this with the file closed, you can start small real projects.

---

## Ready for the projects folder

- You can take a list from input without copying
- Parallel lists (name/marks) feel obvious
- You never use a set to unique-ify (you can write Q14)
- Q18 (to-do) and Q19 (shop) run as **functions + a thin menu**
- The mini project uses `def`, not one giant script

Next: `06-tuples.md` (then sets, then dictionaries).

You can still do `projects/practice-projects.md` with lists only. After dictionaries, rebuild one of those projects with a dict — that is when the topic has stuck.
