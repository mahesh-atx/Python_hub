# Functions — 2 basic + 1 hard

**May use:** strings, loops, if, `def`, `return`, defaults.  
**Must not:** lists, sets, dicts, `return a, b` (tuples later). Return **one** value.

Print vs return: helpers **return**; main prints.

---

## Basic 1 — Name + temperature

**What it must do**

Write:

- `clean_name(s)` → strip + title, or `""` if empty
- `c_to_f(c)` → `c * 9/5 + 32`

Main: take name and C. If clean is empty → `Invalid name`. Else print `Hello, <name>` and the Fahrenheit value.

**Sample:** `  aisha `, `0` → `Hello, Aisha` and `32.0`

**Hint:** Do not print inside `c_to_f`.

---

## Basic 2 — Boolean helpers

**What it must do**

Write `is_even(n)`, `is_leap(year)` (return True/False).

Main: take n and year. Print `Even`/`Odd` using `is_even`. Print `Leap year` or not using `is_leap`.

**Hint:** Leap: `(y % 400 == 0) or (y % 4 == 0 and y % 100 != 0)`. No print inside helpers.

---

## Hard — Text desk (menu, no lists)

**What it must do**

Menu until Exit:

1. Reverse text — `reverse_text(s)` returns reverse (loop)
2. Count vowels — returns a number
3. Palindrome? — returns True/False (ignore case)
4. Mask phone — 10 digits (ignore spaces) → `98******10`, else `"Invalid"`
5. Exit

Each of 1–4 is a function that **returns**. Main inputs, calls, prints.

**What to use:** `while True` menu. Digit extract loop inside `mask_phone`.

**Build order:** reverse + menu → vowels → palindrome → mask.

**Sample:** option 4, `9876543210` → `98******10`

**Hint 1:** `digits_only` as its own function; `mask_phone` calls it.  
**Hint 2:** Palindrome: `reverse_text(s.lower()) == s.lower()` — reuse reverse.  
**Hint 3:** Invalid menu choice → message, loop continues.
