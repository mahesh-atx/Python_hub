# Loops

**Questions:** 20 (Basics 1–8 · Intermediate 9–16 · Advanced 17–20)

You already know: variables, operators, conditionals, `input` / `print`.

---

## You may use

- Everything from conditionals
- `for`, `while`
- `range(n)`, `range(start, stop)`, `range(start, stop, step)`
- `break`, `continue`
- Nested loops (a loop inside a loop)
- Printing a symbol like `*` or a space (that is just output, not the Strings topic)

## Do NOT use

- String indexing, slicing, or methods (`.upper()`, `name[0]`, `for ch in text`, etc.)
- Lists, tuples, sets, dictionaries
- `def` (your own functions)
- `split()`

**Allowed exception:** you may compare a whole piece of text (`choice == "yes"`) or print `"*"`. You may **not** process text character by character.

How do you repeat without lists? With **`range`**, **counters**, **running totals**, and **while** with a condition. That is the core of loop logic.

## Real-world use

- Keep asking until the user types a valid PIN
- Add up 12 months of salary
- Retry a payment 3 times
- Draw a table / pattern
- Run a menu until the user chooses Exit
- Generate the next number until a target is reached

Projects are full of "do this again until …". That is a loop.

## How to practise

Same 4 steps: Read → Think (write the steps) → Type in a blank file → Test.  
10 minutes of struggle before hints.

---

# Basics (Q1–Q8)

---

### Q1 · Print 1 to N

**Task:** Take a positive integer N. Print numbers from 1 to N, each on its own line.

**Example:**

```
Input:  4
Output: 1
        2
        3
        4
```

---

### Q2 · Sum of first N natural numbers

**Task:** Take N. Print the sum 1 + 2 + … + N. Use a loop (do not only use the formula `N*(N+1)/2` — the point is to practise adding inside a loop).

**Example:**

```
Input:  5
Output: 15
```

---

### Q3 · Multiplication table

**Task:** Take a number. Print its table from 1 to 10.

**Example:**

```
Input:  7
Output: 7 x 1 = 7
        7 x 2 = 14
        ...
        7 x 10 = 70
```

---

### Q4 · Even numbers from 1 to N

**Task:** Take N. Print every even number from 1 to N (inclusive if N is even), separated by a space **or** one per line — either is fine.

**Example:**

```
Input:  10
Output: 2 4 6 8 10
```

---

### Q5 · Factorial

**Task:** Take a non-negative integer N. Print N! (1*2*…*N). By definition, 0! = 1. If N < 0, print `Invalid`.

**Example:**

```
Input:  5
Output: 120
```

```
Input:  0
Output: 1
```

---

### Q6 · Countdown

**Task:** Take N (N >= 1). Using a **while** loop, print N, N-1, …, 1, then print `Lift off`.

**Example:**

```
Input:  3
Output: 3
        2
        1
        Lift off
```

---

### Q7 · Count the digits

**Task:** Take a non-negative integer. Print how many digits it has. Do **not** convert it to a string. Use `// 10` in a loop.

**Example:**

```
Input:  50829
Output: 5
```

```
Input:  0
Output: 1
```

*(Zero has 1 digit.)*

---

### Q8 · Sum of digits

**Task:** Take a non-negative integer. Print the sum of its digits. Use `% 10` and `// 10`. No strings.

**Example:**

```
Input:  472
Output: 13
```

Explanation: 4 + 7 + 2 = 13

---

# Intermediate (Q9–Q16)

---

### Q9 · Reverse a number

**Task:** Take a non-negative integer. Print the number with digits reversed. 1200 reversed is 21 (leading zeros in the reverse are not printed, which happens naturally with maths).

**Example:**

```
Input:  1234
Output: 4321
```

```
Input:  1200
Output: 21
```

**Guide:** Loop: last digit = `n % 10`, attach it to a running `rev = rev * 10 + last`, then `n = n // 10`.

**Hint 1:** Start `rev = 0`. Repeat while n > 0.

**Hint 2:** Do not use strings. If you write `str(n)[::-1]` you are using the next topic — skip that.

---

### Q10 · Palindrome number

**Task:** Take a non-negative integer. Print `Palindrome` if it reads the same forward and backward, else `Not a palindrome`. Use the reverse-number idea from Q9. No strings.

**Example:**

```
Input:  1221
Output: Palindrome
```

```
Input:  123
Output: Not a palindrome
```

**Guide:** Save a copy of the original number before you destroy it with `// 10`. Compare original with reversed.

**Hint 1:** `original = n` at the start. Reverse into another variable. Compare.

**Hint 2:** 10 is not a palindrome (reverse is 1). 7 is a palindrome.

---

### Q11 · Prime check

**Task:** Take an integer N > 1. Print `Prime` or `Not prime`. (If N <= 1, print `Not prime`.)

A prime has no divisor from 2 through N-1 (you can stop at sqrt(N) if you know it, but looping to N-1 is acceptable here).

**Example:**

```
Input:  17
Output: Prime
```

```
Input:  15
Output: Not prime
```

```
Input:  1
Output: Not prime
```

**Guide:** Assume it is prime. Loop `i` from 2 to N-1. If `N % i == 0`, it is not prime — `break`. After the loop, decide.

**Hint 1:** A flag variable: `is_prime = True`. Set it to `False` when you find a divisor.

**Hint 2:** You can use `for-else` (the `else` on a for-loop runs only if you never `break`) — optional, not required.

---

### Q12 · Fibonacci first N terms

**Task:** Take N (N >= 1). Print the first N Fibonacci numbers: 0, 1, 1, 2, 3, 5, 8, …

**Example:**

```
Input:  7
Output: 0 1 1 2 3 5 8
```

**Guide:** Keep two variables `a, b = 0, 1`. Loop N times: print a, then set `a, b = b, a + b`. (If you cannot do parallel assignment, use a temporary variable.)

**Hint 1:** Temporary way: `next_val = a + b`, then `a = b`, then `b = next_val`.

**Hint 2:** If N is 1, print only `0`.

---

### Q13 · Power without `**`

**Task:** Take two non-negative integers base and exp. Print base raised to exp. Use a loop of multiplications. Do not use `**` or `pow`. Anything to the power 0 is 1.

**Example:**

```
Input:  2
        10
Output: 1024
```

```
Input:  5
        0
Output: 1
```

**Guide:** Start `result = 1`. Multiply `result` by `base`, `exp` times.

**Hint 1:** `for i in range(exp): result = result * base`

**Hint 2:** If exp is 0, the loop runs 0 times and result stays 1 — that is correct.

---

### Q14 · GCD

**Task:** Take two positive integers. Print their GCD. Use a loop (Euclid: while b != 0, a, b = b, a % b). Do not use `math.gcd`.

**Example:**

```
Input:  48
        18
Output: 6
```

**Guide:** Euclidean algorithm with `while`. Remainder becomes the next divisor.

**Hint 1:** `while b != 0:` then `temp = a % b`, `a = b`, `b = temp`. When b becomes 0, a is the GCD.

**Hint 2:** GCD of 7 and 13 is 1 (they are coprime).

---

### Q15 · Number triangle

**Task:** Take N. Print this pattern (example for N = 4):

```
1
1 2
1 2 3
1 2 3 4
```

**Guide:** Outer loop = row. Inner loop = columns in that row. Inner loop runs from 1 to row number.

**Hint 1:** `for i in range(1, n+1):` then inside `for j in range(1, i+1):` print j.

**Hint 2:** `print(j, end=" ")` keeps numbers on the same line. After the inner loop, a plain `print()` moves to the next line.

---

### Q16 · Running total until stop

**Task:** Keep taking numbers from the user (one per line). Add them to a running total.

- If the user enters `0`, stop taking numbers (0 is not added).
- If the user enters a **negative** number, **skip it** (`continue`) — do not add, do not stop.
- After stopping, print the total and how many **valid** (positive) numbers were added.

**Example:**

```
Input:  10
        20
        -5
        15
        0
Output: Total: 45
        Count: 3
```

**Guide:** `while True`. Read a number. `if n == 0: break`. `if n < 0: continue`. Else add and count.

**Hint 1:** `while True` is a loop you stop yourself with `break`. This is how menus work too.

**Hint 2:** Do not count negatives. Do not count zero.

---

# Advanced (Q17–Q20)

---

### Q17 · All primes in a range

**Real-world:** Prime checks appear in cryptography, hashing, and interview logic. Nested loops + a flag.

**Task:** Take two integers start and end (start may be less than 2). Print every prime number from start to end inclusive, separated by spaces. If there is no prime in the range, print `None`.

**Example:**

```
Input:  10
        20
Output: 11 13 17 19
```

```
Input:  14
        16
Output: None
```

**Self-check:** start=1, end=10 → `2 3 5 7`. start=8, end=8 → `None`.

**Guide:** Outer loop goes through each number in the range. Inner loop checks if that number is prime (reuse Q11 logic). Count how many you printed so you know whether to print `None`.

**Hint 1:** For each `num` in the range, skip if `num <= 1`. Then check divisors.

**Hint 2:** Use a flag `is_prime` for each number, reset it to True at the start of every outer iteration.

**Hint 3:** Keep `found = 0`. Each time you print a prime, do `found += 1`. After the outer loop, if found == 0, print `None`.

---

### Q18 · Number guessing game

**Real-world:** Games, OTP retry, PIN retry — all are "loop + condition + break + remaining attempts".

**Task:** The secret number is **37** (hard-code it; later you will learn to generate random numbers). The player has **7** attempts.

Each attempt:

- Take a guess (integer).
- If guess == 37 → print `Correct!` and print how many tries they used. Stop.
- If guess < 37 → print `Too low`
- If guess > 37 → print `Too high`
- Also print remaining attempts after a wrong guess.

If they fail 7 times, print `Out of attempts. The number was 37`.

**Example (shortened):**

```
Guess: 50
Too high
Attempts left: 6
Guess: 20
Too low
Attempts left: 5
Guess: 37
Correct!
Tries used: 3
```

**Self-check:** 7 wrong guesses must end with the "Out of attempts" line. A correct guess on try 7 still wins.

**Guide:** `for attempt in range(1, 8):` or a while with `left = 7`. `break` on success. After the loop, if they never hit it, print the fail message. You need a flag `won` so you do not print both success and fail.

**Hint 1:** `left = 7` then `while left > 0:`. After a wrong guess, `left -= 1`.

**Hint 2:** When they win, `break` immediately so you do not decrement leftover attempts wrongly.

**Hint 3:** Flag: `won = False` at start, set `True` when correct. After the loop: `if not won: print("Out of attempts...")`.

---

### Q19 · Menu-driven calculator that never dies until Exit

**Real-world:** Almost every terminal tool is this shape: while True → show menu → if choice … elif … elif exit break.

**Task:** Keep showing:

```
1. Add
2. Subtract
3. Multiply
4. Divide
5. Exit
```

Take a choice.

- 1–4: take two numbers, print the result, then show the menu again
- 4: if second number is 0, print `Cannot divide by zero` (do not crash)
- 5: print `Bye` and stop
- any other choice: print `Invalid choice` and show the menu again

Do **not** stop after one calculation.

**Example:**

```
(menu shown)
Choice: 1
10
3
Result: 13
(menu shown again)
Choice: 5
Bye
```

**Self-check:** Invalid choice 9 should not crash and should show the menu again. Divide by 0 should warn and return to menu.

**Guide:** `while True` around everything. `if choice == 1:` … `elif choice == 5: print("Bye"); break` `else: print("Invalid choice")`.

**Hint 1:** Convert choice with `int(input())`. If you want to be careful, you may assume the user types a number (error handling is a later topic).

**Hint 2:** Do not write four separate programs. One loop, one input for choice, then inner ifs.

**Hint 3:** Take the two numbers **inside** each of choices 1–4 (or take them once after you know choice is 1–4). If you take them before checking Exit, the user cannot exit without giving two dummy numbers.

---

### Q20 · Kirana running bill

**Real-world:** A shop counter. You do not need a list yet — only a running total, a count, and a loop.

**Task:** Keep taking **prices** of items (numbers).

Rules:

- Price `0` means "no more items" (stop).
- Negative price → print `Ignored` and skip (`continue`).
- After stopping:
  - If count of valid items is 0, print `No items` and stop.
  - Subtotal = sum of valid prices
  - If subtotal >= 1000, discount = 10% of subtotal, else discount = 0
  - GST = 5% of (subtotal − discount)
  - Grand total = subtotal − discount + GST
  - If the user also types `1` for UPI or `2` for cash **after** the items (ask once at the end): cash does nothing extra; UPI gives **another** Rs 10 off the grand total (not below 0)

Print:

```
Items: ...
Subtotal: ...
Discount: ...
GST: ...
Grand total: ...
```

**Example:**

```
Prices: 200
        400
        -50
        500
        0
Payment: 1
```

Subtotal = 1100, discount = 110, after discount 990, GST = 49.5, grand = 1039.5, UPI −10 → **1029.5**

**Self-check:** only `0` as first input → `No items`. Prices 100 then 0, payment 2 → subtotal 100, discount 0, GST 5, grand 105.

**Guide:** This is Q16 (running total) + conditionals from Topic 1 stacked on top. One while for prices. After the loop, the bill is pure if/else. No lists.

**Hint 1:** Variables you need: `subtotal`, `count`. You do not store each price.

**Hint 2:** Discount depends on subtotal **before** GST. GST is on the discounted amount.

**Hint 3:** Apply UPI Rs 10 last. If grand total is 5 and they chose UPI, print 0 (do not go negative).

---

# Mini project

Close this file. Empty `.py` file.

**"PIN lock"**

- Stored PIN: `1357` (integer)
- User has 3 attempts
- Wrong PIN: print remaining attempts
- 3 fails: print `Card blocked`
- Correct: print `Welcome` and then show a tiny menu: `1. Balance  2. Exit` in a loop (balance is 5000, just print it)

No lists. No strings processing. If you can do this, you own loops.

---

## Ready for Strings

- You can write a `while True` menu without copying
- Nested loops (Q15, Q17) make sense
- You use `break` / `continue` on purpose, not by accident
- Digit maths (`% 10`, `// 10`) no longer feels like a trick

Next file: `03-strings.md`
