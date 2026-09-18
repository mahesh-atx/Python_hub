# Exception Handling

**Questions:** 20 (Basics 1–8 · Intermediate 9–16 · Advanced 17–20)

You already know: files, modules, functions.

An **exception** is Python stopping because something went wrong.  
`try/except` lets **you** decide what to do instead of a crash.

---

## You may use

- `try`, `except`, `else`, `finally`
- Named exceptions: `ValueError`, `ZeroDivisionError`, `TypeError`, `KeyError`, `IndexError`, `FileNotFoundError`, `OSError`
- `except Exception as e` (use sparingly)
- `raise`
- Files + `json` + everything before

## Do NOT use

- Custom exception **classes** (`class MyError(Exception)`) — that is OOP
- Bare `except:` (catches too much, including Ctrl+C)
- Swallowing errors with empty `except: pass` except where a question allows it

## The shape

```
try:
    n = int(input("Number: "))
except ValueError:
    print("Not a number")
else:
    print("You typed", n)
finally:
    print("always runs")
```

| Block | When it runs |
|-------|----------------|
| `try` | the risky code |
| `except` | only if that error happened |
| `else` | if **no** error in try |
| `finally` | always (error or not) |

From Q9, keep `input` in main; helpers **raise** or **return**.

---

# Basics (Q1–Q8)

---

### Q1 · int() crash

**Task:** Take input, `int(...)` **without** try. Type `hello`. See the `ValueError`.  
Then add `try/except ValueError` and print `Please type a number`.

---

### Q2 · ZeroDivisionError

**Task:** Take a and b. Print `a / b`. Catch `ZeroDivisionError` and print `Cannot divide by zero`.

---

### Q3 · Two excepts

**Task:** Same division, but also catch `ValueError` if `int()` fails. Two `except` blocks.

```
except ValueError:
    ...
except ZeroDivisionError:
    ...
```

---

### Q4 · IndexError

**Task:** `items = ["tea", "coffee"]`  
Take an integer i, print `items[i]`. Catch `IndexError` → `No such item`. Catch `ValueError` if i is not an int.

---

### Q5 · KeyError

**Task:** `menu = {"tea": 12, "coffee": 20}`  
Take a name, print `menu[name]` using **square brackets**. Catch `KeyError` → `Not sold`.

(Do not use `.get` in this question — practise except.)

---

### Q6 · FileNotFoundError

**Task:** `open("no_such_file.txt")` inside try. Catch `FileNotFoundError` and print `Missing file`.

---

### Q7 · else

**Task:** `int(input())` in try. `except ValueError`. `else:` print `Double is ...` (n*2).  
The double must **not** print when conversion fails.

---

### Q8 · finally

**Task:** Try `int(input())`. except print error. `finally: print("Done")`.  
Run once with `10`, once with `x`. `Done` must appear **both** times.

---

# Intermediate (Q9–Q16)

---

### Q9 · Retry until valid int

**Task:** Write `def read_int(prompt):` that loops until the user types a valid integer, then **returns** it. Catch `ValueError` inside the loop.

Main: `age = read_int("Age: ")` then print it.

**Guide:** `while True: try: return int(input(...)) except ValueError: print("Again")`

**Hint 1:** `return` inside try leaves the loop.

**Hint 2:** Do not use `break` plus a flag unless you prefer it — `return` is cleaner.

---

### Q10 · raise ValueError yourself

**Task:** `def set_marks(n):`  
If n is not 0–100, `raise ValueError("Marks 0-100")`.  
Else return n.

Main: take n, try to call, except print the message `e`.

```
except ValueError as e:
    print(e)
```

**Guide:** `raise` is how **your** function reports a bad value.

**Hint 1:** `if n < 0 or n > 100: raise ValueError("...")`

**Hint 2:** Main should not check 0–100 again. Trust the function + except.

---

### Q11 · Multiple errors from one input line

**Task:** Take `index` and convert to int, then use it on `a = [10, 20, 30]`, then divide `100 / a[index]`.

Catch separately:

- `ValueError` — bad int
- `IndexError` — bad index
- `ZeroDivisionError` — will not happen if a has no 0; add `0` to the list at index 1 so you can test it (`a = [10, 0, 30]`)

**Guide:** Order of excepts: specific types. Put `Exception` last if you use it — here you do not need it.

**Hint 1:** Test three inputs: `hello`, `9`, `1`.

**Hint 2:** `1` → divide by `a[1]` which is 0.

---

### Q12 · JSON load errors

**Task:** Ask a filename. Try `json.load`. Catch:

- `FileNotFoundError`
- `json.JSONDecodeError` (bad JSON)

Print friendly messages. Create `bad.json` with text `{not json` to test the second.

**Guide:** `import json`. `JSONDecodeError` lives on the json module: `except json.JSONDecodeError`.

**Hint 1:** Write a valid `ok.json` too: `{"a": 1}`

**Hint 2:** Two excepts, two messages.

---

### Q13 · else + finally with a file

**Task:** Try to open and read `menu.txt` (create it if you still have it from File Handling).

- `except FileNotFoundError`
- `else:` print `Lines: N`
- `finally:` print `Closed attempt`

Use `with open` **inside** try.

**Guide:** `with` still closes the file. `finally` runs for your extra message.

**Hint 1:** Count with `len(f.readlines())` inside try, store `n`, print in else — or print in try. else means success.

**Hint 2:** If you print lines inside try after an error, that code is skipped — that is the point of else.

---

### Q14 · Don’t catch everything blindly

**Task:** Write two versions of “take int”:

A) `except Exception:` print `Error`  
B) `except ValueError:` print `Not a number`

In A, also put `print(undefined_name)` inside try (a `NameError`). Version A swallows it. Version B does **not** catch NameError — the program crashes.

Write a short comment in your file: *why B is better*.

**Guide:** Catch the error you expect. Let unexpected errors show — they are bugs.

**Hint 1:** Run A and B.

**Hint 2:** Never use bare `except:`.

---

### Q15 · Re-try file open 3 times

**Task:** Ask a filename up to 3 times. If open works, print contents and stop. If all 3 fail with `FileNotFoundError`, print `Gave up`.

**Guide:** Loop `for attempt in range(3):` try open, `break` on success. `else` on the **for-loop** (for-else) runs if no break — you can print `Gave up` there.

**Hint 1:** for-else is optional. A flag `ok` also works.

**Hint 2:** Do not catch other errors here.

---

### Q16 · Safe dict access helper

**Task:** `def pick(d, key):`  
Try `return d[key]`.  
`except KeyError: return None`

Main: `menu = {"tea": 12}`. Print `pick(menu, "tea")` and `pick(menu, "oil")`.

Then write `def pick_required(d, key):` that **raises** KeyError with a message `No item: tea` if missing (use `raise KeyError("No item: " + key)`).

**Guide:** Sometimes you return None (optional). Sometimes you raise (required). Both are valid; the function name should say which.

**Hint 1:** `pick` never crashes.

**Hint 2:** Main uses try around `pick_required`.

---

# Advanced (Q17–Q20)

---

### Q17 · Calculator that never dies

**Real-world:** A CLI tool. Bad input must not kill it.

**Task:** Menu add/sub/mul/div/exit (like Loops Q19) but:

- Invalid menu choice → message, continue
- Non-numeric numbers → `ValueError` handled
- Divide by 0 handled
- Any other unexpected error: `except Exception as e: print("Unexpected:", e)` and continue

Exit still works.

**Self-check:** Type `abc` for a number. Type `/` with 0. Type menu `9`. Program still shows the menu.

**Guide:** One `while True`. Inner try around the calculation. `read_int` from Q9 helps.

**Hint 1:** `break` only on exit choice.

**Hint 2:** Keep excepts **inside** the loop, not around the whole `while` (or a bug would skip the menu forever).

**Hint 3:** Unexpected handler last.

---

### Q18 · Load config JSON with fallback

**Real-world:** Apps ship a default config if the file is missing or corrupt.

**Task:** `def load_config(path):`  
Try json load.  
On `FileNotFoundError` or `json.JSONDecodeError` or `KeyError`, return **default**:

```
{"app": "practice", "max_retries": 3}
```

Also **write** the default to disk if the file was missing (so next run works). If JSON was corrupt, print `Corrupt config, using default` and do **not** overwrite unless you want to — **do not overwrite corrupt** (user might fix it). Only write default when missing.

Main: print the config dict.

**Self-check:** Delete the file → default created. Edit file to `{` → message + default in memory, file still `{`.

**Guide:** Separate excepts. A flag `missing = False` set in FileNotFoundError branch.

**Hint 1:** `except (FileNotFoundError, json.JSONDecodeError):` is a tuple of types — you may split them for different behaviour.

**Hint 2:** Write default only in the missing branch.

**Hint 3:** After load, you may `cfg["max_retries"]` and catch KeyError if the file is `{}`.

---

### Q19 · Bank withdraw with raise

**Real-world:** Business rules as exceptions.

**Task:** Functions (no classes):

- `def withdraw(balance, amount):`  
  - if amount <= 0: `raise ValueError("amount must be positive")`  
  - if amount > balance: `raise ValueError("insufficient")`  
  - return new balance

Main menu: start `balance = 1000`. Deposit (amount > 0 else ValueError), withdraw, view, exit. All ValueErrors printed as messages. Invalid int handled.

**Self-check:** Withdraw 1000 OK. Withdraw 1 more → insufficient. Withdraw -5 → must be positive.

**Guide:** Rules live in functions via `raise`. UI lives in except.

**Hint 1:** Deposit can be a function that raises too.

**Hint 2:** After successful withdraw, `balance =` returned value.

**Hint 3:** Do not `print` inside `withdraw`.

---

### Q20 · Notes app + errors

**Real-world:** File Handling Q17, now safe.

**Task:** Same notes folder. Wrap reads/writes.

- Read missing title → `FileNotFoundError` → `No such note`
- Delete missing → friendly message
- New note: if title empty → `raise ValueError` caught in main
- Search: if `notes/` folder missing, create it (`os.makedirs(..., exist_ok=True)`) so it does not fail

Never crash to a traceback during normal use (wrong title, missing file).

**Self-check:** Read `zzzz` → message. Add `ideas` then read it.

**Guide:** `with` inside try. Functions raise or let FileNotFoundError bubble; main excepts.

**Hint 1:** Reuse File Handling code; add try/except at the edges.

**Hint 2:** `exist_ok=True` on makedirs.

**Hint 3:** Keep `except Exception` only as a last line that prints `Unexpected` — not around happy path only.

---

# Mini project

**"Safe phone book on disk"**

JSON phone book. Menu add/find/delete/exit.

Must survive: bad JSON, missing file, empty name, duplicate handling, non-numeric menu choice. No traceback on those.

---

## Ready for OOP

- You catch **named** errors, not everything
- Helpers `raise`; main `except`
- `else` / `finally` mean something to you
- A bad `int()` cannot kill your menu

Next file: `13-oop.md` (more questions than the other topics)
