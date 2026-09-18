# Strings

**Questions:** 20 (Basics 1–8 · Intermediate 9–16 · Advanced 17–20)

You already know: variables, operators, conditionals, loops.

---

## You may use

- Everything from conditionals and loops
- Indexing: `s[0]`, `s[-1]`
- Slicing: `s[1:4]`, `s[:3]`, `s[::-1]`
- `len(s)`, concatenation `+`, repeat `*`, membership `in` / `not in`
- Looping over characters: `for ch in s`
- String methods: `.upper()`, `.lower()`, `.strip()`, `.replace()`, `.find()`, `.count()`, `.startswith()`, `.endswith()`, `.isdigit()`, `.isalpha()`, `.isalnum()`, `.isspace()`, `.title()`, `.capitalize()`, `.swapcase()`

## Do NOT use

- **Lists** — so **no `.split()`** (it returns a list), **no `.join()`** on a list, no `list(s)`
- Tuples, sets, dictionaries
- `def` (your own functions)
- List comprehensions

If you need "words", count spaces yourself or use `.find()` and slicing. That constraint is on purpose: it forces you to understand characters.

## Real-world use

- Username / email / password rules
- Search bars (does this text contain a keyword?)
- Masking a phone number or Aadhaar
- Cleaning form input (extra spaces, wrong case)
- Counting characters in a tweet / SMS

Every project that talks to a human talks in strings.

## How to practise

Read → Think in steps → Blank file → Test.  
10 minutes before hints.

---

# Basics (Q1–Q8)

---

### Q1 · Length of a name

**Task:** Take a name. Print how many characters it has (including spaces if they type a full name).

**Example:**

```
Input:  Ravi Kumar
Output: 10
```

---

### Q2 · Shout and whisper

**Task:** Take a sentence. Print it in ALL CAPS on one line, and in all lowercase on the next.

**Example:**

```
Input:  Hello Solapur
Output: HELLO SOLAPUR
        hello solapur
```

---

### Q3 · First and last character

**Task:** Take a non-empty word. Print the first character and the last character. If the string is empty, print `Empty`.

**Example:**

```
Input:  Python
Output: First: P
        Last: n
```

---

### Q4 · Join first and last name

**Task:** Take first name and last name (two inputs). Print them as one full name with a single space in between.

**Example:**

```
Input:  Aisha
        Khan
Output: Aisha Khan
```

---

### Q5 · Does it contain the keyword?

**Task:** Take a sentence and a keyword. Print `Found` if the keyword appears inside the sentence, else `Not found`. Case-sensitive is fine for this question.

**Example:**

```
Input:  I love python programming
        python
Output: Found
```

```
Input:  I love python programming
        Java
Output: Not found
```

---

### Q6 · Repeat a stamp

**Task:** Take a short word and an integer N. Print the word repeated N times with no extra space (use `*`).

**Example:**

```
Input:  Ha
        4
Output: HaHaHaHa
```

---

### Q7 · First three letters

**Task:** Take a word. Print the first 3 characters using slicing. If the word has fewer than 3 characters, print the whole word.

**Example:**

```
Input:  Mumbai
Output: Mum
```

```
Input:  Hi
Output: Hi
```

---

### Q8 · Count a letter

**Task:** Take a sentence and a single character. Print how many times that character appears. Use `.count()`. Matching is case-sensitive.

**Example:**

```
Input:  banana
        a
Output: 3
```

---

# Intermediate (Q9–Q16)

---

### Q9 · Reverse a string with a loop

**Task:** Take a string. Print it reversed. You may **not** use `s[::-1]` in this question. Build a new string in a loop.

**Example:**

```
Input:  hello
Output: olleh
```

**Guide:** Start `rev = ""`. Loop each character and do `rev = ch + rev` (put the new character in front).

**Hint 1:** `for ch in s: rev = ch + rev`

**Hint 2:** Index way: loop `i` from `len(s)-1` down to 0 with `range(len(s)-1, -1, -1)` and add `s[i]`.

---

### Q10 · Palindrome text

**Task:** Take a string. Print `Palindrome` or `Not a palindrome`. Ignore case (`Naman` is a palindrome). Do **not** ignore spaces in this question (`nurses run` is therefore not a palindrome here).

**Example:**

```
Input:  Naman
Output: Palindrome
```

```
Input:  Solapur
Output: Not a palindrome
```

**Guide:** Lowercase first, then compare with its reverse. You may use `s[::-1]` here.

**Hint 1:** `t = s.lower()` then `t == t[::-1]`

**Hint 2:** Empty string is a palindrome (optional decision — accept either, be consistent).

---

### Q11 · Vowels and consonants

**Task:** Take a string. Count vowels (a e i o u, both cases) and consonants (letters that are not vowels). Ignore digits, spaces, and symbols — do not count them as consonants.

Print:

```
Vowels: ...
Consonants: ...
```

**Example:**

```
Input:  Hello 123
Output: Vowels: 2
        Consonants: 3
```

Explanation: e, o are vowels; H, l, l are consonants; space and digits ignored.

**Guide:** Loop each character. Use `.isalpha()`. Check membership in `"aeiouAEIOU"`.

**Hint 1:** `if ch.isalpha():` then inside, vowel vs consonant.

**Hint 2:** `ch.lower() in "aeiou"` is a clean vowel test.

---

### Q12 · Toggle case by hand

**Task:** Take a string. Swap case of every letter: `Hello` → `hELLO`. Digits and symbols stay the same. You may use `.swapcase()`, **or** (better for logic) loop and build a new string with `.isupper()` / `.islower()` and `.lower()` / `.upper()`.

**Example:**

```
Input:  PaYal 99
Output: pAyAL 99
```

**Guide:** If you do it by hand: for each `ch`, if it is upper make lower, elif lower make upper, else keep it, add to result.

**Hint 1:** `result = result + ch.lower()` when `ch.isupper()`.

**Hint 2:** Do not use a list of characters. Build one string with `+`.

---

### Q13 · Remove all spaces

**Task:** Take a sentence. Print it with every space removed. Keep other characters as they are.

**Example:**

```
Input:  a b  c
Output: abc
```

**Guide:** Loop characters. If `ch != " "`, add it to a new string. (`.replace(" ", "")` is also allowed — try the loop first.)

**Hint 1:** `if not ch.isspace(): result += ch` also removes tabs.

**Hint 2:** For this question, removing only the normal space `" "` is enough.

---

### Q14 · Rough email check

**Task:** Take a string. Print `Valid email` only if **all** of these are true:

1. It contains exactly one `@` (not 0, not 2+)
2. There is at least 1 character before `@`
3. There is at least 1 character after `@`
4. In the part **after** `@`, there is at least one `.`
5. It does not start or end with `@` or `.`
6. No spaces anywhere

Otherwise print `Invalid email`.

This is **not** a full real email validator. It is enough to practise `find`, `count`, slicing.

**Example:**

```
Input:  ravi.k@gmail.com
Output: Valid email
```

```
Input:  ravi@@gmail.com
Output: Invalid email
```

```
Input:  ravi@gmail
Output: Invalid email
```

**Guide:** `.count("@")`, `.find("@")`, slice left/right of `@`, then `.find(".")` on the right part. Also `" " in s`.

**Hint 1:** `at = s.find("@")`. Left = `s[:at]`, right = `s[at+1:]`.

**Hint 2:** "exactly one @" means `s.count("@") == 1`. Then check `"." in right`.

---

### Q15 · Replace a character

**Task:** Take a string, a target character, and a replacement character. Build a new string where every target is replaced. Do **not** use `.replace()` in this question — use a loop. If target is not length 1, print `Target must be one character`.

**Example:**

```
Input:  banana
        a
        o
Output: bonono
```

**Guide:** For each character, if it equals target, add replacement, else add the original character.

**Hint 1:** `result = ""` then `if ch == target: result += repl else: result += ch`

**Hint 2:** This is how `.replace` works inside. Once you write it, you will never forget it.

---

### Q16 · Clean a name

**Task:** Take a messy name that may have extra spaces at the ends. Print it:

- ends trimmed (`.strip()`)
- displayed in Title Case (`.title()` is OK)

Do **not** yet collapse spaces in the middle (that is Q20). So `"  ravi kumar  "` becomes `"Ravi Kumar"`.

**Example:**

```
Input:  "  aisha khan "
Output: Aisha Khan
```

**Guide:** Chain methods: `s.strip().title()`. Or do it in two steps.

**Hint 1:** `.strip()` only kills edges. Middle double spaces stay — that is OK here.

**Hint 2:** `.title()` turns `aisha khan` into `Aisha Khan`.

---

# Advanced (Q17–Q20)

---

### Q17 · Password strength

**Real-world:** Every register page. This is loops + conditionals + string methods together.

**Task:** Take a password string. Check all rules. Print **every** rule that fails (not just the first). If all pass, print `Strong password`.

Rules:

1. Length at least 8
2. Length at most 16
3. At least one uppercase letter
4. At least one lowercase letter
5. At least one digit
6. At least one special character from this set: `!@#$%^&*`
7. No spaces

Example fail messages (print only the ones that fail):

```
Too short
Too long
Missing uppercase
Missing lowercase
Missing digit
Missing special character
Contains space
```

**Example:**

```
Input:  Ab1@
Output: Too short
```

```
Input:  Abcd1234@
Output: Strong password
```

```
Input:  abcdefgh
Output: Missing uppercase
        Missing digit
        Missing special character
```

**Self-check:** `GoodPass 1!` contains a space → must report space (and it is also length 12, has upper, lower, digit, special). `ABCDEFGH1!` → Missing lowercase.

**Guide:** Loop the password **once**, set flags: `has_upper`, `has_lower`, `has_digit`, `has_special`, `has_space`. Then a series of ifs that print problems. If none printed, it is strong. You can also count how many messages you printed.

**Hint 1:** `special = "!@#$%^&*"` then `if ch in special: has_special = True`

**Hint 2:** Use `.isupper()`, `.islower()`, `.isdigit()`. Do not use lists of characters.

**Hint 3:** A flag `failed = False`. Each time you print a problem, set it True. At the end `if not failed: print("Strong password")`.

---

### Q18 · Mask Aadhaar / phone

**Real-world:** Payment apps and KYC screens show `XXXX XXXX 1234`, never the full number.

**Task:** Take a string of digits (may also contain spaces). Ignore spaces when counting digits. Then:

- If the digit count is not 10 and not 12, print `Invalid number`
- If 10 digits (phone): print first 2 digits, then 6 stars, then last 2 digits. Example: `98******10`
- If 12 digits (Aadhaar): print last 4 digits only, with stars before them. Example: `********1234`

Do not use lists. Build the digit-only string with a loop (skip spaces), then slice.

**Example:**

```
Input:  9876543210
Output: 98******10
```

```
Input:  1234 5678 9012
Output: ********9012
```

```
Input:  12345
Output: Invalid number
```

**Self-check:** Phone `9000000001` → `90******01`. Aadhaar without spaces `111122223333` → `********3333`.

**Guide:** First build `digits = ""` by keeping only `ch.isdigit()`. Then `len(digits)` decides the branch. Stars can be `"*" * n`.

**Hint 1:** Phone mask = `digits[:2] + "*" * 6 + digits[-2:]`

**Hint 2:** Aadhaar mask = `"*" * 8 + digits[-4:]`

**Hint 3:** Do not use `.split()`. Spaces are just characters you skip.

---

### Q19 · Word count without split

**Real-world:** Blogs, SMS, Twitter-style limits. `split()` would make this too easy and it is banned (it returns a list).

**Task:** Take a sentence. Print:

1. Number of characters including spaces
2. Number of characters excluding spaces
3. Number of words

A word is a sequence of non-space characters separated by one or more spaces. Leading/trailing spaces must not create extra words.

**Example:**

```
Input:  I  love   python
Output: Chars: 16
        Chars no space: 11
        Words: 3
```

(`I  love   python` has 16 characters if typed exactly like that: I, space, space, l,o,v,e, space, space, space, p,y,t,h,o,n.)

```
Input:     hello
Output: Words: 1
```

```
Input:  (empty or only spaces)
Output: Words: 0
```

**Self-check:** `"a"` → 1 word. `"a b"` → 2 words. `"  a  b  "` → 2 words.

**Guide:** Loop characters and detect **edges**: a word starts when you see a non-space after a space (or at the beginning). Keep a boolean `in_word`.

**Hint 1:** `in_word = False`. When you see a non-space and `in_word` is False, that is a new word: `words += 1`, `in_word = True`. When you see a space, `in_word = False`.

**Hint 2:** Counting spaces and doing `spaces + 1` **fails** for double spaces and leading spaces. Use the flag method.

**Hint 3:** Character counts: `len(s)` and a loop that adds 1 when `ch != " "`.

---

### Q20 · Search + clean title

**Real-world:** A shop search box. User types messy text. You clean it, then check if a keyword is inside a product name.

**Task:** You have **one** product name stored in a variable (not a list):

`product = "  red cotton SHIRT  "`

Take a search keyword from the user.

Steps you must do:

1. Clean the product: strip edges, turn every letter to lowercase, and collapse any **double (or more) spaces in the middle into a single space**. Result should be `red cotton shirt`.
2. Clean the keyword the same way (strip, lowercase, collapse spaces).
3. If cleaned keyword is empty, print `Empty search`.
4. If cleaned keyword is found **inside** the cleaned product, print `Match: red cotton shirt`
5. Else print `No match`

You must collapse spaces **with a loop**, not with split/join.

**Example:**

```
Stored product: "  red cotton SHIRT  "
Input keyword:  "  SHIRT "
Output: Match: red cotton shirt
```

```
Input keyword:  jeans
Output: No match
```

```
Input keyword:  "   "
Output: Empty search
```

**Self-check:** keyword `Red   Cotton` (messy) should still match after both sides are cleaned.

**Guide:** Write the "collapse spaces" idea: loop characters, add a space to the result only if this character is a space **and** the previous added character was not already a space. Then `.strip().lower()` around it. Then use `in`.

**Hint 1:** You may build a helper pattern (still no `def`): copy-paste the collapse loop twice (once for product, once for keyword). When you learn functions you will not copy-paste.

**Hint 2:** Collapse sketch:

```
cleaned = ""
for ch in s:
    if ch == " ":
        if cleaned == "" or cleaned[-1] == " ":
            continue
        cleaned += " "
    else:
        cleaned += ch.lower()
```
Then `cleaned = cleaned.strip()` (leading space should already be skipped).

**Hint 3:** Membership after cleaning: `if keyword_clean in product_clean`.

---

# Mini project

Close this file. Empty `.py` file.

**"Username rules"**

Take a username and print Valid or list of problems:

- 5 to 12 characters
- only letters, digits, and underscore `_`
- must start with a letter
- not allowed: `admin`, `root`, `superuser` (compare in lowercase)

Then take a display name, strip it, title-case it, and print `Hello, <Display Name>`.

No lists. No `split`. No `def`. If you can do this, you own strings.

---

## Ready for Functions

- You can loop over characters without confusion
- You can build a new string with `result += ...`
- Indexing and slicing feel normal
- You did Q17 and Q19 without panicking

Next file: `04-functions.md`

You will wrap the same string logic inside `def` so you can reuse it. Still no lists.
