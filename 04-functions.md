# Functions

**Questions:** 20 (Basics 1–8 · Intermediate 9–16 · Advanced 17–20)

You already know: variables, operators, conditionals, loops, strings.

---

## You may use

- Everything from conditionals, loops, and strings
- `def` to create your own functions
- Parameters (inputs of a function)
- `return` (output of a function)
- Default parameter values: `def greet(name, city="Solapur"):`
- Keyword arguments: `greet(name="Aisha", city="Pune")`
- One function calling another function
- Recursion (a function calling itself) — only where a question asks

## Do NOT use

- **Lists**, tuples, sets, dictionaries
- `.split()` / `.join()` (they need lists)
- List comprehensions
- `*args`, `**kwargs`
- Returning two values at once (`return a, b` is a tuple — later topic). **Return one value.** If you need two results, write two functions, or return one formatted string.

## The idea in one minute

A function is a **named recipe**.

```
def add(a, b):
    return a + b

total = add(10, 20)   # total becomes 30
print(total)
```

| Piece | Meaning |
|-------|---------|
| `def add(a, b):` | name is `add`, it needs two inputs |
| `return a + b` | send one answer **back** to the caller |
| `add(10, 20)` | run the recipe with 10 and 20 |

**Print vs return (this confuses everyone):**

- `print` shows something on the screen. The function still gives back `None`.
- `return` gives a value you can **store and reuse**.

Wrong:

```
def add(a, b):
    print(a + b)

x = add(2, 3)     # screen shows 5, but x is None
print(x + 1)      # crash
```

Right:

```
def add(a, b):
    return a + b

x = add(2, 3)
print(x + 1)      # 6
```

Use `print` in `main` (the code that talks to the user).  
Use `return` inside helper functions.

## Real-world use

Without functions, every project becomes one giant pile of copy-paste. With functions you write `is_valid_phone(s)` once and call it from signup, profile, and checkout.

That is how you later write projects from scratch: **break the job into named pieces**.

## How to practise

Same 4 steps. For every question, the **function** is the answer — then a few lines at the bottom take `input` and call it.

10 minutes before hints.

---

# Basics (Q1–Q8)

One idea each. Goal: `def` / parameter / `return` should feel normal.

---

### Q1 · Greet

**Task:** Write `def greet(name):` that **prints** `Hello, <name>!`  
Take a name from the user and call the function. Do not `return` in this question.

**Example:**

```
Input:  Aisha
Output: Hello, Aisha!
```

---

### Q2 · Add

**Task:** Write `def add(a, b):` that **returns** the sum.  
In the main code: take two numbers, call `add`, print the returned value.

**Example:**

```
Input:  10
        4
Output: 14
```

Do not print inside `add`. Print only after you receive the return value.

---

### Q3 · Is even?

**Task:** Write `def is_even(n):` that returns `True` if n is even, else `False`.  
Main: take n, call the function, print `Even` or `Odd` based on the boolean.

**Example:**

```
Input:  7
Output: Odd
```

---

### Q4 · Full name

**Task:** Write `def full_name(first, last):` that returns `first + " " + last` after `.strip()` and `.title()` on both parts.

**Example:**

```
Input:  aisha
        khan
Output: Aisha Khan
```

---

### Q5 · Default city

**Task:** Write `def welcome(name, city="Solapur"):` that **returns**  
`Welcome <name> from <city>`. Name in title case.

Main:

- First call: take only a name, call `welcome(name)` so city stays Solapur.
- Second call: take a name and a city, call `welcome(name, city)`.

Print both returned strings.

**Example:**

```
Input:  ravi
        meera
        pune
Output: Welcome Ravi from Solapur
        Welcome Meera from Pune
```

---

### Q6 · Celsius to Fahrenheit

**Task:** Write `def c_to_f(c):` that returns `c * 9 / 5 + 32`.  
Main: take a temperature, print the returned value.

**Example:**

```
Input:  0
Output: 32.0
```

```
Input:  37
Output: 98.6
```

---

### Q7 · Clean a name

**Task:** Write `def clean_name(s):` that returns the string with edges stripped and title case applied. If after strip it is empty, return `""`.

Main: take a name. If the function returns empty, print `Invalid name`. Else print `Hello, <cleaned>`.

**Example:**

```
Input:  "  aisha khan "
Output: Hello, Aisha Khan
```

```
Input:  "    "
Output: Invalid name
```

---

### Q8 · Print vs return

**Task:** Write **two** functions:

- `def show_double(n):` **prints** `2 * n` and returns nothing
- `def get_double(n):` **returns** `2 * n` and does not print

Main:

1. Call `show_double(5)` — you should see `10`
2. Store `x = get_double(5)`, then print `x + 3` — you should see `13`

If you print inside `get_double`, part 2 will be wrong.

**Expected:**

```
10
13
```

---

# Intermediate (Q9–Q16)

Now functions hold real logic you already practised (if, loops, strings).

---

### Q9 · Largest of three

**Task:** Write `def largest(a, b, c):` that **returns** the largest number. If all three are equal, still return that number (do not print `All equal` inside the function).

Main: take three integers, print the returned value. If they are all equal, print `All equal` **in main** (compare a, b, c there).

**Example:**

```
Input:  12 45 7
Output: 45
```

```
Input:  9 9 9
Output: 9
        All equal
```

**Guide:** The function only answers "which number is biggest?". Messages belong in main. That split is the whole point of functions.

**Hint 1:** Inside the function, nested if or `if a >= b and a >= c: return a`.

**Hint 2:** After `m = largest(a, b, c)`, print `m`. Then `if a == b == c: print("All equal")`.

---

### Q10 · Leap year as a boolean function

**Task:** Write `def is_leap(year):` that returns `True` or `False` (same rules as Conditionals Q11).  
Main: take a year, print `Leap year` or `Not a leap year` using the boolean.

**Example:**

```
Input:  2000
Output: Leap year
```

```
Input:  1900
Output: Not a leap year
```

**Guide:** Do not print inside `is_leap`. Return the boolean only. Main decides the English.

**Hint 1:** `return (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0)`

**Hint 2:** Main: `if is_leap(y): print("Leap year") else: print("Not a leap year")`

---

### Q11 · Reverse a string

**Task:** Write `def reverse_text(s):` that returns the reversed string. Build it with a loop (do not use `s[::-1]` in this question).

Main: take text, print the returned reverse.

**Example:**

```
Input:  hello
Output: olleh
```

**Guide:** Same loop as Strings Q9, but the result is **returned**, not printed.

**Hint 1:** `rev = ""` then `for ch in s: rev = ch + rev` then `return rev`

**Hint 2:** Main should be two lines after input: `print(reverse_text(s))`

---

### Q12 · Count vowels

**Task:** Write `def count_vowels(s):` that returns how many vowels (a e i o u, both cases) are in s.

Main: take a sentence, print `Vowels: <number>`.

**Example:**

```
Input:  Hello
Output: Vowels: 2
```

**Guide:** Loop characters. If `ch.lower() in "aeiou"`, add 1. Return the count.

**Hint 1:** Start `n = 0`. Return `n` at the end. Do not print inside.

**Hint 2:** Digits and spaces are not vowels — just skip them.

---

### Q13 · Valid phone?

**Task:** Write `def is_valid_phone(s):` that returns `True` only if there are **exactly 10 digits** in s (spaces allowed in the input, ignored when counting). No other letters or symbols allowed except spaces.

Main: take a phone string, print `Valid` or `Invalid`.

**Example:**

```
Input:  98765 43210
Output: Valid
```

```
Input:  987654
Output: Invalid
```

```
Input:  98ab543210
Output: Invalid
```

**Guide:** Loop characters. If `ch.isdigit()`, add it to a digits string (or count). If `ch` is not a digit and not a space, it is invalid — `return False` immediately.

**Hint 1:** You can `return False` in the middle of the function. You do not have to wait until the end.

**Hint 2:** At the end `return len(digits) == 10`.

---

### Q14 · Discounted price

**Task:** Write `def discounted(amount, percent=10):` that returns the price after discount.  
Formula: `amount - amount * percent / 100`  
If amount is negative, return `-1` (meaning error).

Main: take amount. Call once with default percent, print. Then take a custom percent and call again, print.

**Example:**

```
Input:  2000
        25
Output: 1800.0
        1500.0
```

**Guide:** Default parameter. Main makes two calls: `discounted(amount)` and `discounted(amount, percent)`.

**Hint 1:** Check `if amount < 0: return -1` first.

**Hint 2:** If the function returns `-1`, main should print `Invalid amount` instead of the number.

---

### Q15 · Functions calling functions

**Task:** Write three functions (no lists):

1. `def discount_amount(subtotal):`  
   if subtotal >= 1000 return 10% of subtotal, else return 0
2. `def gst(amount):`  
   return 5% of amount
3. `def final_bill(subtotal):`  
   use the two functions above.  
   payable = subtotal − discount + gst(subtotal − discount)  
   **return** payable

Main: take subtotal, print discount (call function 1), print GST on the discounted amount, print final (call function 3).

**Example:**

```
Input:  2000
Output: Discount: 200.0
        GST: 90.0
        Pay: 1890.0
```

Explanation: 2000 − 200 = 1800, GST 5% of 1800 = 90, pay 1890.

**Guide:** `final_bill` must **call** the other two. Do not copy their formulas again inside `final_bill`.

**Hint 1:**

```
def final_bill(subtotal):
    d = discount_amount(subtotal)
    after = subtotal - d
    g = gst(after)
    return after + g
```

**Hint 2:** Main can call `discount_amount` again just to print it. That is reuse — not a problem.

---

### Q16 · Keyword arguments

**Task:** Write `def id_line(name, city, role="student"):` that returns one line:

`NAME: <title> | CITY: <title> | ROLE: <upper>`

Main must call it **three** ways:

1. `id_line("aisha", "solapur")`
2. `id_line("ravi", "pune", "visitor")`
3. `id_line(city="nagpur", name="meera", role="staff")`  (keyword, different order)

Print the three returned lines.

**Expected:**

```
NAME: Aisha | CITY: Solapur | ROLE: STUDENT
NAME: Ravi | CITY: Pune | ROLE: VISITOR
NAME: Meera | CITY: Nagpur | ROLE: STAFF
```

**Guide:** Keyword arguments let you pass values by name, in any order. Default `role` is used only in call 1.

**Hint 1:** Inside: `name.title()`, `city.title()`, `role.upper()`.

**Hint 2:** Return one string using `+`. Do not print inside `id_line`.

---

# Advanced (Q17–Q20)

Tiny real features, split into functions. If you can do this, you can structure projects.

---

### Q17 · Password rules as small functions

**Real-world:** Signup pages. Each rule is one function. A bigger function combines them.

**Task:** Write:

- `def has_upper(s):` return True if at least one uppercase letter
- `def has_lower(s):` True if at least one lowercase
- `def has_digit(s):` True if at least one digit
- `def has_special(s):` True if at least one of `!@#$%^&*`
- `def no_space(s):` True if there is no space
- `def is_strong(s):` return True only if  
  length is 8–16 **and** all five helpers above are True

Main: take a password.

- If `is_strong(s)` is True, print `Strong password`
- Else print **every** failed rule (same messages as Strings Q17):  
  `Too short` / `Too long` / `Missing uppercase` / `Missing lowercase` / `Missing digit` / `Missing special character` / `Contains space`

**Example:**

```
Input:  abcdefgh
Output: Missing uppercase
        Missing digit
        Missing special character
```

```
Input:  Abcd1234@
Output: Strong password
```

**Self-check:** `Ab1@` → Too short. `GoodPass 1!` → Contains space (and is otherwise fine).

**Guide:** Helpers only return booleans. Main (or a separate printer) turns False into English. `is_strong` **calls** the helpers — do not rewrite the loops inside `is_strong`.

**Hint 1:** `has_upper`: loop, `if ch.isupper(): return True`. After the loop `return False`.

**Hint 2:** `is_strong`:

```
return (8 <= len(s) <= 16
    and has_upper(s) and has_lower(s) and has_digit(s)
    and has_special(s) and no_space(s))
```

**Hint 3:** When not strong, still check each rule separately in main so you can print every problem, not only the first.

---

### Q18 · Calculator menu with functions

**Real-world:** The Loops Q19 calculator, now with a clean shape: menu in main, maths in functions.

**Task:** Write:

- `def add(a, b):` return a + b
- `def sub(a, b):` return a - b
- `def mul(a, b):` return a * b
- `def div(a, b):` if b is 0, return the string `"Cannot divide by zero"`, else return the number

Main: `while True` menu 1 Add, 2 Subtract, 3 Multiply, 4 Divide, 5 Exit.  
Invalid choice → message, menu again.  
For 1–4 take two numbers, call the right function, print whatever it returned.

**Self-check:** Divide by 0 prints the message and the menu returns. Exit does not ask for two numbers.

**Guide:** Main is only input + if/elif + print. No formulae in main.

**Hint 1:** `result = add(x, y)` then `print(result)`. Same pattern for all four.

**Hint 2:** `div` can return either a number or a string. Main just prints it. That is allowed because you are returning **one** value.

**Hint 3:** Choice 5: `print("Bye")` then `break` before you take x and y.

---

### Q19 · Recursion: reverse text

**Real-world:** Recursion is a function that calls itself. You need a **stop rule**, or it never ends.

**Task:** Write `def reverse_rec(s):` that returns the reverse of s using recursion.  
Do not use a `for`/`while` inside this function. Do not use `s[::-1]`.

Rule:

- If `s` is empty or length 1, return `s` (stop rule)
- Otherwise return `reverse_rec(s[1:]) + s[0]`

Main: take a string, print the returned reverse. Also print whether it is a palindrome (compare original lowercased with the reverse lowercased) using your function.

**Example:**

```
Input:  Naman
Output: namaN
        Palindrome
```

```
Input:  hello
Output: olleh
        Not a palindrome
```

**Self-check:** empty string → empty reverse, palindrome.

**Guide:** `s[0]` is the first character, `s[1:]` is the rest. Recursion reverses the rest, then you stick the first character at the **end**.

**Hint 1:** Stop rule first, always. `if len(s) <= 1: return s`

**Hint 2:** Trace `"ab"`: reverse rest `"b"` → `"b"`, plus `"a"` → `"ba"`.

**Hint 3:** Palindrome in **main**: `reverse_rec(s.lower()) == s.lower()`. Do not add extra parameters.

---

### Q20 · Visitor desk

**Real-world:** A reception desk. No list of visitors yet — one visitor at a time. Structure it with functions anyway, so later you can drop this into a project.

**Task:** Hard-code `STAFF_PIN = "2468"` (string).

Write:

- `def check_pin(entered, real):` return True if they match
- `def digits_only(s):` return a new string of only digits
- `def mask_phone(s):` use `digits_only`. If not 10 digits, return `"Invalid"`. Else return first 2 + 6 stars + last 2
- `def format_card(name, city, phone):` return a multi-line card (like Projects profile card). Name/city title case. Phone shown **masked**. If phone invalid, return `"Invalid phone"`

Main menu (repeats until Exit):

```
1. Staff login (PIN, 3 attempts then lock this option — or lock whole program; your choice, document it)
2. Make visitor pass  (after login only — if not logged in, print Login first)
3. Exit
```

For option 2: take name, city, phone, print the returned card.

**Example (abridged):**

```
Choice: 2
Login first

Choice: 1
PIN: 2468
Logged in

Choice: 2
Name: aisha khan
City: solapur
Phone: 9876543210

========================
 NAME : Aisha Khan
 CITY : Solapur
 PHONE: 98******10
 ROLE : VISITOR
========================
```

**Self-check:** Wrong PIN three times → `Blocked`. Phone `123` → `Invalid phone` from `format_card`.

**Guide:** Main holds `logged_in = False` and a PIN attempt counter. Every real job is a function. No lists. One visitor at a time is enough.

**Hint 1:** `format_card` must **call** `mask_phone`. `mask_phone` must **call** `digits_only`. Do not copy digit loops three times.

**Hint 2:** Multi-line return:

```
return (
    "========================\n"
    " NAME : " + name.title() + "\n"
    ...
)
```

or several `line = line + ...` then return `line`.

**Hint 3:** Login attempts: a `while` in main, call `check_pin`. Do not put `input` inside `check_pin` — that function only compares two strings. Keeping input in main makes the function reusable.

---

# Mini project

Close this file. Empty `.py` file.

**"Text desk"** (no lists)

Menu:

1. Clean name  
2. Reverse text  
3. Count vowels  
4. Palindrome check  
5. Mask phone  
6. Exit

Each of 1–5 is a **function that returns** a value. Main only inputs, calls, prints.

If you can do this with the file closed, you own functions.

---

## Ready for Lists

- You automatically think `return` for helpers and `print` for main
- You can write a boolean function (`is_even`, `is_leap`, `is_valid_phone`) and use it in an `if`
- One function calling another (Q15, Q17, Q20) does not feel like magic
- You did the mini project without copying

Next file: `05-lists.md`

Lists will feel easier now: the loop still does the work, the function **names** that work so you can reuse it (`find_max`, `add_item`, `search`).
