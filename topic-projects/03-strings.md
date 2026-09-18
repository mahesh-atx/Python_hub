# Strings — 2 basic + 1 hard

**May use:** loops, if, string methods, indexing, slicing, `for ch in s`.  
**Must not:** lists, `split()`, `def`.

---

## Basic 1 — Profile line

**What it must do**

Take first name, last name, city.

Print:

```
AISHA KHAN | Solapur | initials: A.K.
```

Rules:

- names title-cased in the middle part? Wait - first part ALL CAPS full name
- city title case
- initials: first char of first + `.` + first char of last + `.`
- If first or last is empty after strip → `Invalid name`

**What to use:** `.strip()`, `.upper()`, `.title()`, `[0]`.

**Sample**

```
Input:  aisha
        khan
        solapur
Output: AISHA KHAN | Solapur | initials: A.K.
```

**Hint:** Build `full = first.strip().title() + " " + last.strip().title()` then `full.upper()` for the first piece.

---

## Basic 2 — Palindrome + vowels

**What it must do**

Take a string.

1. Print reverse (loop, **not** `[::-1]` for reverse — or slicing for palindrome check only; pick loop for reverse)
2. Print `Palindrome` or not (ignore case)
3. Count vowels (a e i o u, both cases)

**Sample:** `Naman` → reverse `namaN`, Palindrome, vowels 2.

**Hint:** `t = s.lower()` then `t == t[::-1]` is OK for step 2. Reverse print uses a loop.

---

## Hard — Signup checks (one password + username)

**What it must do**

Take username, then password. Print **every** problem (not only the first). If none, print `OK`.

Username:

- 5 to 12 chars
- only letters, digits, `_`
- must start with a letter
- not `admin` / `root` / `superuser` (lowercase compare)

Password (same rules as Strings Q17):

- length 8–16
- upper, lower, digit, special `!@#$%^&*`, no space

**What to use:** flags in a character loop. No lists of errors required — print as you find. Or print after all flags.

**Build order:** username rules → password flags → print OK if nothing failed.

**Sample:** username `ab`, password `abcdefgh` → Too short (user) + missing upper/digit/special (pass).

**Hint 1:** Loop password once, set `has_upper` etc.  
**Hint 2:** Username start: `name[0].isalpha()` after you know length > 0.  
**Hint 3:** A `failed` flag; if still False at end, `OK`.
