# Modules & Packages

**Questions:** 20 (Basics 1–8 · Intermediate 9–16 · Advanced 17–20)

You already know: functions, collections, comprehensions.

A **module** is a `.py` file you can `import`.  
A **package** is a **folder** of modules with an `__init__.py` file.

---

## You may use

- `import ...`, `from ... import ...`, `as` aliases
- Standard library: `math`, `random`, `datetime`, `os`, `sys`
- Your **own** `.py` files next to your script
- Comprehensions, functions, dicts, etc.

## Do NOT use

- File **read/write** of data files (`open("notes.txt")`) — next topic. `import` is not that.
- `try/except` as the main tool
- Classes / OOP
- `pip install` of third-party packages (stay on the standard library)
- `yield`

## How to practise

You **must create extra files**, not only one script.

Suggested folder:

```
practice/modules/
  q05_main.py
  greetings.py      # you create this
  shop/
    __init__.py
    prices.py
```

Run from that folder: `python q05_main.py`

From Q9, put reusable logic in a module, and keep `input`/`print` in main.

---

# Basics (Q1–Q8)

---

### Q1 · import math

**Task:** Import `math`. Print `math.pi` rounded to 2 decimals, and `math.sqrt(49)`.

**Expected idea:** `3.14` and `7.0`

---

### Q2 · from import

**Task:** `from math import floor, ceil`  
Print `floor(3.7)` and `ceil(3.2)`.

**Expected:** `3` and `4`

---

### Q3 · alias

**Task:** `import datetime as dt`  
Print today's **date** only (`dt.date.today()`).

Output will match **today on your machine**.

---

### Q4 · random

**Task:**

```
import random
random.seed(1)
print(random.randint(1, 6))
print(random.choice(["tea", "coffee", "water"]))
```

Run once, write down what you got. Run again — **same output** because of `seed(1)`.

Then remove the seed line, run twice, see that it can change.

---

### Q5 · Your first module

**Task:** Create `greetings.py`:

```
def hello(name):
    return "Hello, " + name.title()
```

Create `q05_main.py`:

```
import greetings
print(greetings.hello("aisha"))
```

Run `q05_main.py`. **Expected:** `Hello, Aisha`

Both files in the **same folder**.

---

### Q6 · from your module import

**Task:** In main: `from greetings import hello`  
Call `hello("ravi")` without the `greetings.` prefix.

---

### Q7 · os: cwd and join

**Task:** Import `os`. Print `os.getcwd()`.  
Build a path with `os.path.join(os.getcwd(), "greetings.py")` and print it.

Do not open the file. Just print the path.

---

### Q8 · dir() and help

**Task:** `import math` then `print(len(dir(math)))`  
Print whether `'sqrt'` is in `dir(math)`.

This is how you discover what a module contains without a tutorial.

---

# Intermediate (Q9–Q16)

---

### Q9 · `if __name__ == "__main__"`

**Task:** In `greetings.py` add at the bottom:

```
if __name__ == "__main__":
    print(hello("test"))
```

Run `greetings.py` directly — you should see `Hello, Test`.  
Run `q05_main.py` that imports it — you should **not** see that test print from the import.

**Guide:** When a file is imported, `__name__` is `"greetings"`. When run directly, `__name__` is `"__main__"`. Put tests / demo prints inside that `if`.

**Hint 1:** Never put leftover `print` at module top level if other files import it.

**Hint 2:** Main programs can use the same `if __name__ == "__main__":` around `input` code.

---

### Q10 · A utils module of functions you already wrote

**Task:** Create `textutils.py` with:

- `clean_name(s)` → strip + title
- `digits_only(s)` → only digit characters
- `is_valid_phone(s)` → True if exactly 10 digits after digits_only

Main: take a name and a phone, print cleaned name and Valid/Invalid.

**Guide:** You already wrote these in Functions / Strings. **Move** them. Main only talks to the user.

**Hint 1:** Import: `import textutils as tu` then `tu.clean_name(...)`.

**Hint 2:** Do not copy-paste different versions. One module, many programs later.

---

### Q11 · random quiz using a module

**Task:** `questions.py` holds two lists (or a dict) of 5 GK questions and answers (yes/no or a word).

Main: `random.choice` **indexes** — pick 3 **different** questions (use `random.sample(range(len(q)), 3)`), ask them, score.

**Guide:** Data in the module, game loop in main. `sample` avoids repeating the same question.

**Hint 1:** `random.sample(list_of_indexes, 3)`

**Hint 2:** Compare answers case-insensitive.

---

### Q12 · datetime: age in years

**Task:** Take birthday as three integers year, month, day.  
Use `datetime.date` to build `born` and `today = date.today()`.  
Print age in **full years**: `today.year - born.year` then subtract 1 if the birthday has not happened yet this year.

**Guide:** If `(today.month, today.day) < (born.month, born.day)`, they have not had the birthday yet.

**Hint 1:** `from datetime import date`

**Hint 2:** Do not use external age libraries.

---

### Q13 · math module: hypot and factorial

**Task:** Write `geometry.py` with `def hypot(a, b):` using `math.hypot` (or `math.sqrt(a*a + b*b)`).  
Main: take two sides of a right triangle, print hypotenuse rounded to 2 decimals.  
Also print `math.factorial(5)` as a second line (120).

**Guide:** Keep geometry functions in the module even if they are one-liners.

**Hint 1:** `round(x, 2)`

**Hint 2:** Factorial of a negative number errors — take 5 as a fixed demo, or skip negatives.

---

### Q14 · sys.argv

**Task:** `greet_cli.py`:

```
import sys
# python greet_cli.py Aisha
```

If `len(sys.argv) < 2`, print `Usage: python greet_cli.py <name>`  
Else print `Hello, <argv[1]>`.

Run from terminal with and without a name.

**Guide:** `sys.argv[0]` is the script name. Arguments start at `[1]`.

**Hint 1:** Do not `input()` in this question.

**Hint 2:** Names with spaces: `python greet_cli.py "Aisha Khan"`

---

### Q15 · Package: folder with __init__.py

**Task:** Create:

```
shop/
  __init__.py          # can be empty
  prices.py            # MENU = {"tea": 12, "coffee": 20}
  cart.py              # def line_total(item, qty): return MENU[item] * qty
```

In `cart.py`: `from shop.prices import MENU` **or** `from .prices import MENU` (relative).  
If relative import fails when you run `cart.py` directly, run from **outside**:

```
python -c "from shop.cart import line_total; print(line_total('tea', 3))"
```

from the **parent** folder of `shop/`.

**Expected:** `36`

**Guide:** A package is a folder you import. `__init__.py` marks it (Python 3 can work without it, but **write it** so the idea is clear).

**Hint 1:** Parent folder must be the current working directory (or on `sys.path`).

**Hint 2:** Empty `__init__.py` is enough for this question.

---

### Q16 · Re-export in __init__.py

**Task:** In `shop/__init__.py`:

```
from .prices import MENU
from .cart import line_total
```

Then from parent: `from shop import MENU, line_total`  
Print `line_total("coffee", 2)` → 40.

**Guide:** `__init__.py` can expose a clean public face so users do not write `shop.cart.line_total`.

**Hint 1:** Relative imports use the leading dot: `.prices`

**Hint 2:** If you see `ImportError: attempted relative import`, you launched the file the wrong way. Import from parent.

---

# Advanced (Q17–Q20)

---

### Q17 · bill.py as a real mini package user

**Real-world:** App code imports **your** package, not copy-paste.

**Task:** Using `shop` from Q15–Q16, write `bill.py` (parent folder):

- Take items until `end` (name + qty)
- Skip unknown items with a message (`if name not in MENU`)
- Print each line total and a subtotal
- If subtotal >= 50, print `Free extra tea coupon`

Functions that need prices live in the package. `bill.py` is only the conversation with the user.

**Self-check:** `tea 2`, `water` unknown, `coffee 1`, `end`.

**Guide:** `from shop import MENU, line_total`. Loop in main.

**Hint 1:** Lowercase item names to match MENU keys.

**Hint 2:** Keep a running subtotal; no list required, but a list of lines is nicer.

**Hint 3:** Do not put `input` inside `prices.py`.

---

### Q18 · dice module + seed option

**Real-world:** Games / simulations.

**Task:** `dice.py`:

- `def roll(n=6):` return `random.randint(1, n)`
- `def roll_many(times, n=6):` return a **list** of rolls

Main:

1. Roll 10 six-sided dice
2. Print how many 6s (count)
3. Print the average

Run twice without seed — results may differ. That is OK.

**Guide:** `random` imported **inside dice.py**. Main does not import random.

**Hint 1:** `roll_many` is a loop or a comprehension calling `roll`.

**Hint 2:** Average = `sum(a) / len(a)`

**Hint 3:** `if __name__ == "__main__":` in `dice.py` with a tiny demo.

---

### Q19 · date reports

**Real-world:** “What day is it / days until…”

**Task:** `dates.py`:

- `def today_str():` return `YYYY-MM-DD` via `date.today().isoformat()`
- `def days_between(y, m, d):` return **integer** days from today to that date (can be negative if in the past). Use `(target - today).days`

Main: print today, then take a target date, print `in N days` or `N days ago`.

**Self-check:** Target = today → `0 days`.

**Guide:** Subtracting two `date` objects gives `timedelta` with `.days`.

**Hint 1:** `from datetime import date`

**Hint 2:** Do not convert to strings before subtracting.

**Hint 3:** Main only formats the sentence.

---

### Q20 · Package `school` with two modules

**Real-world:** Split a project by topic.

**Task:**

```
school/
  __init__.py          # export grade, average
  grades.py            # def grade(marks): A/B/C/D/F  (Conditionals Q10 bands)
  stats.py             # def average(list_of_marks):
```

Main `report.py`: take N marks into a list, print average (1 decimal) and each mark with its grade.

**Self-check:** 90 → A, 40 → D, 39 → F. Average of `[90, 40]` is 65.0.

**Guide:** `from school import grade, average` after re-export. `stats` must not import `grade` unless needed — keep them independent.

**Hint 1:** `grades.py` has only if/elif. No input.

**Hint 2:** Empty list average: return `None`, main prints `No marks`.

**Hint 3:** Same folder layout as `shop/`. Run `report.py` from the parent.

---

# Mini project

**"toolbox" package**

```
toolbox/
  __init__.py
  text.py      # clean_name, unique_words (set)
  number.py    # is_even, clamp(n, lo, hi)
```

A `demo.py` that imports them and shows 3 calls.

`if __name__ == "__main__"` in `demo.py` only.

---

## Ready for File Handling

- You can create a `.py` file and import a function from it
- You know why `if __name__ == "__main__"` exists
- You have made one folder package with `__init__.py`
- Main is thin; the module has no `input()`

Next file: `11-file-handling.md`
