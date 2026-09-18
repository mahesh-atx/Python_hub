# Dictionaries — 2 basic + 1 hard

**May use:** sets, tuples, lists, functions, dicts.  
**Must not:** comprehensions, files, classes.

---

## Basic 1 — Mini translator

**What it must do**

Dict english → meaning.

Take 3 pairs (add). Then take a lookup word. Print meaning or `Not found` using `.get`.

Lowercase keys.

**Hint:** `d[en] = meaning` then `d.get(q, "Not found")`.

---

## Basic 2 — Word count

**What it must do**

Take a sentence. Print each word → count (lowercase). Function `word_count(s)` returns a dict.

**Sample:** `I love python and I love code` → i:2 love:2 python:1 and:1 code:1

**Hint:** `d[w] = d.get(w, 0) + 1`. Do not `d[w] += 1` before the key exists.

---

## Hard — Phone book menu

**What it must do**

`book = {}` name → phone.

1. Add (title-case name, 10 digits). Duplicate **phone** (other name) refused. Same name → ask overwrite.
2. View
3. Search name keyword
4. Search exact phone (loop `.items()`)
5. Delete
6. Exit

Functions for each action. `phone_owner(book, phone)` returns name or None.

**Hint 1:** `.get` for find by name.  
**Hint 2:** Keyword: `if key in name.lower()`.  
**Hint 3:** This replaces parallel lists. No `names[i]`.
