# Conditional Statements

**Questions:** 20 (Basics 1–8 · Intermediate 9–16 · Advanced 17–20)

---

## You may use

- Variables, numbers, booleans, simple text values
- Operators: `+ - * / // % **`, `== != < > <= >=`, `and or not`
- `input()`, `print()`, `int()`, `float()`, `str()`
- `if`, `elif`, `else`
- Nested `if` (an if inside another if)

## Do NOT use

- `for`, `while`, `range` (that is Loops)
- String methods or indexing: `.upper()`, `.strip()`, `name[0]`, slices
- Lists, tuples, sets, dictionaries
- `def` (your own functions)

**Allowed exception:** you may *compare* text, e.g. `color == "red"` or `password == "admin"`. That is just a value, not the Strings topic.

## Real-world use

Every app is a pile of decisions:

- Can this user log in?
- Is the cart total enough for free delivery?
- Which ticket price should this age get?
- Is there enough balance to withdraw?

If you cannot write `if/elif/else` from scratch, you cannot write projects. This file trains that.

## How to practise

1. Read. Think in steps. Type in a **blank** `.py` file.
2. Run the sample. Then invent one extra input.
3. Intermediate/Advanced: wait 10 minutes before opening hints.

---

# Basics (Q1–Q8)

One idea each. Goal: your fingers should type `if` without copying anyone.

---

### Q1 · Even or Odd

**Task:** Take an integer. Print `Even` if it is divisible by 2, otherwise print `Odd`.

**Example:**

```
Input:  7
Output: Odd
```

```
Input:  12
Output: Even
```

---

### Q2 · Positive, Negative, or Zero

**Task:** Take one number (it can be a decimal). Print `Positive`, `Negative`, or `Zero`.

**Example:**

```
Input:  -3.5
Output: Negative
```

```
Input:  0
Output: Zero
```

---

### Q3 · Greater of two numbers

**Task:** Take two integers. Print the greater one. If they are equal, print `Equal`.

**Example:**

```
Input:  15
        9
Output: 15
```

```
Input:  4
        4
Output: Equal
```

---

### Q4 · Voting eligibility

**Task:** Take age as an integer. If age is 18 or more, print `Eligible to vote`. Otherwise print `Not eligible`. Also, if age is less than 0, print `Invalid age` instead.

**Example:**

```
Input:  17
Output: Not eligible
```

```
Input:  18
Output: Eligible to vote
```

```
Input:  -2
Output: Invalid age
```

---

### Q5 · Divisible by 5?

**Task:** Take an integer. Print `Yes` if it is divisible by 5, else `No`.

**Example:**

```
Input:  40
Output: Yes
```

```
Input:  22
Output: No
```

---

### Q6 · Pass or Fail

**Task:** Take marks out of 100. If marks are 40 or more, print `Pass`. Otherwise print `Fail`. If marks are below 0 or above 100, print `Invalid marks`.

**Example:**

```
Input:  39
Output: Fail
```

```
Input:  105
Output: Invalid marks
```

---

### Q7 · Traffic light

**Task:** Take a colour as text: `red`, `yellow`, or `green` (exactly those lowercase words).

- `red` → print `Stop`
- `yellow` → print `Wait`
- `green` → print `Go`
- anything else → print `Invalid colour`

**Example:**

```
Input:  green
Output: Go
```

```
Input:  BLUE
Output: Invalid colour
```

---

### Q8 · Shop discount

**Task:** Take the bill amount (a number). If amount is greater than 1000, give 10% discount and print the **final amount to pay**. Otherwise print the same amount (no discount).

**Example:**

```
Input:  2000
Output: 1800.0
```

```
Input:  800
Output: 800
```

*(Printing `1800` or `1800.0` is both fine.)*

---

# Intermediate (Q9–Q16)

Now you combine operators, nested if, and `and` / `or`.  
Read the **Guide** only after you have a plan on paper.

---

### Q9 · Largest of three numbers

**Task:** Take three integers. Print the largest. If all three are equal, print `All equal`. If two share the highest value, print that value (the highest).

**Example:**

```
Input:  12  45  7
Output: 45
```

```
Input:  9  9  9
Output: All equal
```

```
Input:  10  10  3
Output: 10
```

**Guide:** Use nested `if` **or** chained comparisons with `and`. You need a special case when a == b == c.

**Hint 1:** First check the all-equal case. Then check if `a` is >= both others, else if `b` is >= both others, else `c`.

**Hint 2:** `>=` is safer than `>` here, because two numbers can tie for first place.

---

### Q10 · Exam grade

**Task:** Take marks (0 to 100). Print the grade:

| Marks        | Grade |
|--------------|-------|
| 90–100       | A     |
| 75–89        | B     |
| 60–74        | C     |
| 40–59        | D     |
| 0–39         | F     |
| outside 0–100| Invalid |

**Example:**

```
Input:  75
Output: B
```

```
Input:  39
Output: F
```

**Guide:** This is an `if / elif / else` ladder. Check from the top (highest band) downward.

**Hint 1:** After you know marks are between 0 and 100, the first `if` can be `marks >= 90`.

**Hint 2:** Order matters. If you write `marks >= 40` first, a score of 95 would become D. Start strict (90), then 75, then 60, then 40.

---

### Q11 · Leap year

**Task:** Take a year. Print `Leap year` or `Not a leap year`.

Rules:

- Divisible by 400 → leap
- Divisible by 100 but not 400 → not leap
- Divisible by 4 but not 100 → leap
- Otherwise → not leap

**Example:**

```
Input:  2000
Output: Leap year
```

```
Input:  1900
Output: Not a leap year
```

```
Input:  2024
Output: Leap year
```

```
Input:  2023
Output: Not a leap year
```

**Guide:** Combine `%` with `and` / `or`. Nested if also works. Do not guess — implement the four rules.

**Hint 1:** A compact condition is:  
`(year % 400 == 0) or (year % 4 == 0 and year % 100 != 0)`

**Hint 2:** Test 1900. Many people forget the "century year" rule and wrongly call 1900 a leap year.

---

### Q12 · Mini calculator

**Task:** Take two numbers and an operator as text: `+`, `-`, `*`, or `/`. Print the result.

Special cases:

- If operator is not one of those four, print `Invalid operator`
- If operator is `/` and the second number is 0, print `Cannot divide by zero`

**Example:**

```
Input:  12
        4
        /
Output: 3.0
```

```
Input:  8
        0
        /
Output: Cannot divide by zero
```

```
Input:  5
        2
        ^
Output: Invalid operator
```

**Guide:** `if/elif` on the operator. The zero check lives **inside** the division branch (nested if).

**Hint 1:** Take operator with `input()` and compare with `"+"`, `"-"`, `"*"`, `"/"`.

**Hint 2:** Check division by zero **before** you actually divide, otherwise the program crashes.

---

### Q13 · Triangle type

**Task:** Take three side lengths (positive numbers). First decide if they can form a triangle. Then print the type.

A triangle is valid only if **each pair-sum is greater than the third side**  
(a + b > c and b + c > a and a + c > b), and every side is > 0.

Then:

- all three equal → `Equilateral`
- exactly two equal → `Isosceles`
- all different → `Scalene`
- not valid → `Not a triangle`

**Example:**

```
Input:  5  5  5
Output: Equilateral
```

```
Input:  5  5  8
Output: Isosceles
```

```
Input:  1  2  3
Output: Not a triangle
```

**Guide:** Validate first. Only if valid, classify with `==` comparisons. Nested if is the clean shape.

**Hint 1:** Check `a > 0 and b > 0 and c > 0` together with the three pair-sum tests.

**Hint 2:** `1, 2, 3` fails because 1+2 is not greater than 3. Equal-to is not enough; it must be **greater**.

---

### Q14 · Login check

**Task:** Stored username is `admin` and password is `pass123` (do not change these). Take username and password from the user.

- both match → `Login successful`
- username wrong, password right → `Unknown username`
- username right, password wrong → `Wrong password`
- both wrong → `Unknown username`

(If username is wrong, do not reveal whether the password was right.)

**Example:**

```
Input:  admin
        pass123
Output: Login successful
```

```
Input:  admin
        hello
Output: Wrong password
```

```
Input:  ravi
        pass123
Output: Unknown username
```

**Guide:** Nested if. Outer check = username. Inner check = password. This is how real login screens avoid leaking information.

**Hint 1:** `if username == "admin":` then inside that, check the password. `else:` print unknown username.

**Hint 2:** Use `and` only for the success case if you prefer a flat structure — but then you still need extra ifs to tell "wrong password" vs "unknown username". Nested is cleaner.

---

### Q15 · BMI category

**Task:** Take weight in kg and height in metres. Compute BMI = weight / (height * height). Print BMI rounded to 1 decimal place **and** the category:

| BMI         | Category     |
|-------------|--------------|
| < 18.5      | Underweight  |
| 18.5 – 24.9 | Normal       |
| 25.0 – 29.9 | Overweight   |
| >= 30       | Obese        |

If weight or height is 0 or negative, print `Invalid input` and do not divide.

**Example:**

```
Input:  70
        1.75
Output: 22.9
        Normal
```

**Guide:** Validate first. Then compute. Then an elif ladder on BMI. Use `round(bmi, 1)` if you know `round`, or print as is.

**Hint 1:** Height is in metres, not centimetres. 175 cm means `1.75`.

**Hint 2:** Check invalid **before** the formula. Division by 0 happens if height is 0.

---

### Q16 · Maharashtra electricity bill

**Task:** Take units consumed (integer >= 0). Calculate bill:

| Units        | Rate          |
|--------------|---------------|
| first 100    | Rs 5 per unit |
| next 100 (101–200) | Rs 8 per unit |
| above 200    | Rs 12 per unit |

Print the bill amount. If units < 0, print `Invalid units`.

**Example:**

```
Input:  50
Output: 250
```

Explanation: 50 * 5 = 250

```
Input:  150
Output: 900
```

Explanation: 100*5 + 50*8 = 500 + 400 = 900

```
Input:  250
Output: 1900
```

Explanation: 100*5 + 100*8 + 50*12 = 500 + 800 + 600 = 1900

**Guide:** This is **slab** logic. You cannot just do `units * 12`. You must split the units into pieces with if/elif, then add.

**Hint 1:** Three cases: `units <= 100`, `units <= 200`, else. Each case uses a different formula.

**Hint 2:** For 250: bill = `100*5 + 100*8 + (units-200)*12`. Write that formula in the last branch.

---

# Advanced (Q17–Q20)

These are tiny pieces of real software. Same tools — more decisions stacked together.  
If you can write these from a blank file, you can use conditionals inside any future project.

---

### Q17 · Student result

**Real-world:** School software does this every exam.

**Task:** Take marks of 3 subjects (each 0–100).

Rules, in this order:

1. If any mark is outside 0–100 → print `Invalid marks` and stop (do not print anything else).
2. If **any** subject is below 35 → print `Fail` (even if the average is high).
3. Otherwise compute the average.
   - average >= 75 **and** every subject >= 60 → `Distinction`
   - average >= 60 → `First class`
   - average >= 50 → `Second class`
   - otherwise → `Pass`

Print the average (1 decimal is nice) and the result.

**Example:**

```
Input:  80  70  90
Output: Average: 80.0
        Distinction
```

```
Input:  90  90  20
Output: Fail
```

```
Input:  50  50  50
Output: Average: 50.0
        Second class
```

**Self-check:** `60 60 60` should be First class. `34 100 100` should be Fail.

**Guide:** Nested decisions. First validity, then fail-any-subject (`or`), then elif ladder on average. Distinction needs `and` on all three subjects.

**Hint 1:** Store the three marks in three variables. You do not need a list.

**Hint 2:** Fail check: `if m1 < 35 or m2 < 35 or m3 < 35`.

**Hint 3:** Distinction is not only average. A student with 100, 100, 40 has average 80 but should **not** get Distinction (40 < 60). If 40 < 35 they already failed; if 40 is between 35 and 59 they get First class from average 80, not Distinction.

---

### Q18 · Food delivery fee

**Real-world:** Swiggy / Zomato style fee rules.

**Task:** Take:

1. order amount (Rs)
2. distance in km (can be decimal)
3. raining? type `yes` or `no`
4. time as hour in 24-hour clock (0–23)

Base delivery fee:

- distance <= 3 km → Rs 20
- distance <= 7 km → Rs 40
- above 7 km → Rs 40 + Rs 8 for every extra km above 7  
  (you may use a simple formula; extra km can be decimal)

Then add:

- If raining is `yes` → add Rs 15
- If hour is >= 22 **or** hour < 6 (night) → add Rs 20
- If order amount >= 500 → delivery fee becomes **0**, but rain and night charges still apply
- If order amount >= 500 **and** not raining **and** not night → print `Free delivery` as the whole fee (0)

Print the **final delivery fee** only.

**Example:**

```
Input:  300
        2
        no
        14
Output: 20
```

```
Input:  600
        10
        yes
        23
Output: 35
```

Explanation: amount >= 500 so base fee 0, rain 15 + night 20 = 35

```
Input:  600
        2
        no
        12
Output: 0
```

**Self-check:** amount 100, distance 8, rain no, hour 10 → base = 40 + 8 = 48.

**Guide:** Compute `base` with elif on distance. Compute `extra` with two independent ifs (rain, night). Then one if on amount >= 500 that zeroes `base` only.

**Hint 1:** Keep three variables: `base`, `rain_fee`, `night_fee`. Final = base + rain_fee + night_fee. Then apply the "amount >= 500 zeroes base" rule **before** adding, or set base = 0 in that case.

**Hint 2:** Night is `hour >= 22 or hour < 6`. Hour 22, 23, 0, 5 are night. Hour 6 is morning — not night.

**Hint 3:** Extra km formula: if distance > 7, `base = 40 + (distance - 7) * 8`.

---

### Q19 · ATM withdrawal

**Real-world:** ATM software is nested ifs. No loops needed for one transaction.

**Task:** Stored PIN is `2468` (integer). Stored balance is `10000`.

Take:

1. PIN entered
2. amount to withdraw (integer)

Rules, in order:

1. If PIN is wrong → print `Wrong PIN` and **do not** touch balance.
2. If PIN is right but amount <= 0 → print `Invalid amount`
3. If amount is not a multiple of 100 → print `Enter amount in multiples of 100`
4. If amount > balance → print `Insufficient balance`
5. If amount > 5000 → print `Exceeds per-transaction limit of 5000`  
   (check this after PIN, even if balance is enough)
6. Otherwise: subtract, print `Withdrawal successful` and print `Balance: ...`

When two errors could apply, use this priority: wrong PIN, then invalid amount, then not multiple of 100, then exceeds limit, then insufficient balance.

**Example:**

```
Input:  2468
        1200
Output: Withdrawal successful
        Balance: 8800
```

```
Input:  1111
        1200
Output: Wrong PIN
```

```
Input:  2468
        5300
Output: Exceeds per-transaction limit of 5000
```

**Self-check:** PIN correct, amount 10050 → insufficient (also over limit — but your priority should print the limit message first if you follow rule 5 before rule 4; **follow the priority list above**: limit before insufficient). PIN correct, amount 250 → not multiple of 100.

**Guide:** One big nested if. Outer: PIN. Inside: a ladder of elifs for the money rules. Only the last else changes the balance.

**Hint 1:** Keep `balance = 10000` at the top. Only subtract in the success branch.

**Hint 2:** Multiple of 100 means `amount % 100 == 0`.

**Hint 3:** Order of elifs must match the priority list or your self-check will fail.

---

### Q20 · Hotel room quote

**Real-world:** Booking sites compute a price from several independent decisions, then add them.

**Task:** Take:

1. room type: `standard` (Rs 2000 / night) or `deluxe` (Rs 3500 / night)
2. nights (integer >= 1)
3. weekend stay? `yes` or `no`  (if yes, add 20% on the room subtotal)
4. extra guests (integer 0 or more). First 2 guests are free. Each extra guest costs Rs 400 per night.
5. coupon: `NONE` or `SAVE10` (10% off the **final** amount after weekend and guests) or `FLAT500` (Rs 500 off, but final cannot go below 0)

Invalid cases:

- room type not `standard` or `deluxe` → `Invalid room`
- nights < 1 → `Invalid nights`
- extra guests < 0 → `Invalid guests`

Print the final payable amount.

**Example:**

```
Input:  standard
        2
        no
        0
        NONE
Output: 4000
```

```
Input:  deluxe
        1
        yes
        3
        SAVE10
Output: 4140.0
```

Explanation:

- room = 3500
- weekend 20% → 4200
- extra guests: 3 guests, 1 extra (because 2 free) × 400 × 1 night = 400
- subtotal = 4600
- SAVE10 → 4140

**Self-check:** standard, 1 night, no weekend, 2 extra guests, FLAT500  
→ room 2000 + guests 2×400 = 800 → 2800 − 500 = 2300.

**Guide:** Validate first. Compute `rate` from room type. `subtotal = rate * nights`. Weekend multiplies subtotal. Guest fee is separate then added. Coupon last.

**Hint 1:** Free guests = 2. Chargeable guests = extra_guests − 2, but if extra_guests is 0, 1, or 2, chargeable is 0. You can do: if extra_guests > 2, charge (extra_guests − 2) * 400 * nights.

**Hint 2:** Weekend: `subtotal = subtotal + subtotal * 0.20` (or `* 1.20`). This is 20% **on room only**, not on guest fees — follow the example (deluxe 3500 → 4200, then guests added).

**Hint 3:** Apply coupon on (weekend room + guest fees). For FLAT500, if result would be negative, print 0.

---

# Mini project

Close this file. Open a new empty file. Build:

**"Auto rickshaw fare in Solapur"**

- Take distance in km and time: `day` or `night`
- Base: Rs 30 for first 1.5 km
- After that Rs 18 per km
- Night: add 25% on the total
- If distance <= 0: `Invalid distance`

No notes. No previous code. If you can do this, you own conditionals.

---

## Ready for Loops

- You can write Q17–Q20 without looking at hints
- Nested if does not scare you
- You naturally think: "first validate, then decide, then print"

Next file: `02-loops.md`
