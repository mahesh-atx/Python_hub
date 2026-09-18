# Object-Oriented Programming

**Questions:** 35 (Basics 1–20 · Intermediate 21–30 · Hard 31–35)

You already know: functions, dicts, files, exceptions.

OOP is a way to **bundle data + the functions that belong to it**.

A `BankAccount` has a `balance` **and** `deposit` / `withdraw`.  
That is clearer than a dict plus loose functions — for bigger programs.

---

## You may use

- Everything from previous topics
- `class`, `self`, `__init__`, methods
- `__str__`
- Inheritance, `super()`
- Class attributes
- `_name` convention (internal)
- `@property`, `@classmethod` (intermediate)
- Lists of objects
- `try/except` around user input

## Do NOT use

- Metaclasses, ABC, multiple inheritance diamonds
- `**kwargs` heavy magic
- Third-party libraries
- `@staticmethod` unless you really want it (optional extra)

## The picture

```
class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        return self.name + " says woof"

d = Dog("Bruno")
print(d.bark())
```

| Word | Meaning |
|------|---------|
| `class Dog` | the blueprint |
| `d = Dog("Bruno")` | one **object** (instance) |
| `self` | “this object” |
| `__init__` | runs when you create the object |
| `self.name` | data stored on the object |
| `d.bark()` | a function that belongs to the object |

`self` is passed automatically. You never write `d.bark(d)`.

**Basics (1–20):** one class, `self`, methods. No inheritance.  
**Intermediate (21–30):** inheritance, class data, property.  
**Hard (31–35):** several classes working together — like a tiny project.

Write **one class per file** at first if it helps. From Q9, methods should `return` when they compute; `print` in main **or** in `__str__`.

---

# Basics (Q1–Q20)

One idea each. Type from a blank file.

---

### Q1 · Empty class

**Task:** `class Dog: pass`  
Create `d = Dog()`. Print `type(d)`.

---

### Q2 · Attribute from outside

**Task:** After creating `d`, set `d.name = "Bruno"`. Print `d.name`.

---

### Q3 · __init__

**Task:** Add `def __init__(self, name): self.name = name`  
Create `Dog("Bruno")`. Print `d.name`. Do not set name from outside.

---

### Q4 · Two objects

**Task:** `a = Dog("Bruno")`, `b = Dog("Lucy")`. Print both names. Changing `a.name` must **not** change `b.name`.

---

### Q5 · Method that prints

**Task:** Method `def bark(self): print("woof")`  
Call `a.bark()`.

---

### Q6 · Method uses self.name

**Task:** `bark` prints `Bruno says woof` using `self.name`.

---

### Q7 · __init__ with two fields

**Task:** `Dog(name, age)`. Store both. Print them.

---

### Q8 · Method changes data

**Task:** `have_birthday(self)` does `self.age += 1`.  
Call it, print age before and after.

---

### Q9 · Method returns bool

**Task:** `is_puppy(self)` returns `True` if `self.age < 2`.  
Print the result in main (do not print inside the method).

---

### Q10 · __str__

**Task:** `def __str__(self): return self.name + " (" + str(self.age) + ")"`  
`print(d)` should use that string.

Without `__str__`, `print(d)` looks ugly (`<__main__.Dog ...>`).

---

### Q11 · Student class

**Task:** `Student(name, roll)`. Store title-cased name and roll as string.

---

### Q12 · display method

**Task:** `display(self)` returns `"101 - Aisha"` (roll - name). Main prints it.

---

### Q13 · Circle

**Task:** `Circle(radius)`. Method `area(self)` returns `3.14 * radius * radius`.  
Do not print inside `area`.

---

### Q14 · Default argument

**Task:** `Student(name, roll, city="Solapur")`.  
Create one student with city default, one with `city="Pune"`.

---

### Q15 · List of objects

**Task:** Create 3 students, put them in a list, loop and print each (uses `__str__` or `display`).

---

### Q16 · Find in a list

**Task:** Function **or** method-free helper `def find_by_roll(students, roll):` that returns the Student or `None`.  
Main prints the name or `Not found`.

---

### Q17 · BankAccount deposit

**Task:** `BankAccount(owner, balance=0)`.  
`deposit(self, amount)` adds if amount > 0, else do nothing (or return without change).  
Print balance after depositing 100.

---

### Q18 · withdraw

**Task:** `withdraw(self, amount)` subtracts only if amount > 0 **and** amount <= balance.  
Return `True` if success, `False` otherwise.

Test: balance 50, withdraw 80 → False, balance still 50.

---

### Q19 · Book

**Task:** `Book(title, author)`.  
`is_written_by(self, name)` returns True if author matches (ignore case).

---

### Q20 · rename method

**Task:** `Student.rename(self, new_name)` sets `self.name` to title-case if new_name is not empty. Else leave old name.

---

# Intermediate (Q21–Q30)

Guide + hints. Inheritance starts here.

---

### Q21 · Inheritance

**Task:**

```
class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        return "..."

class Dog(Animal):
    def speak(self):
        return "woof"
```

Create a Dog, print `name` (from Animal) and `speak()`.

**Guide:** `class Dog(Animal)` means Dog **is an** Animal. It inherits `__init__` unless you replace it.

**Hint 1:** You do not rewrite `__init__` in Dog yet.

**Hint 2:** `d.speak()` uses Dog’s version (override).

---

### Q22 · super()

**Task:** `Dog.__init__(self, name, breed)` must set name **and** breed.  
Call `super().__init__(name)` then `self.breed = breed`.

Print name and breed.

**Guide:** `super()` runs the parent method. Use it so you do not copy parent’s init.

**Hint 1:** First line of Dog `__init__` should be `super().__init__(name)`.

**Hint 2:** If you skip super, `self.name` might be missing.

---

### Q23 · Override + extra behaviour

**Task:** `Cat(Animal)` with `speak` → `"meow"`.  
Add `Animal.describe(self)` that returns `self.name + " says " + self.speak()`.  
Dog and Cat both use describe without overriding it — but `speak()` inside is their own.

Print describe for one dog and one cat.

**Guide:** Parent method calling a child method is normal (polymorphism).

**Hint 1:** Do not override `describe` in Dog/Cat.

**Hint 2:** `speak` in Animal can stay as `"..."`.

---

### Q24 · Class attribute vs instance

**Task:**

```
class Student:
    school = "Solapur College"   # class attribute — shared
    def __init__(self, name):
        self.name = name
```

Create two students. Print `a.school`, `b.school`.  
Then `Student.school = "New College"`. Print both again — **both** change.  
Then `a.school = "Home"` (this creates an **instance** attribute on a only). Print `a.school`, `b.school`.

**Guide:** Shared data → class attribute. Per object → `self.x` in `__init__`.

**Hint 1:** `Student.school` changes the shared value.

**Hint 2:** `a.school = ...` does not change `b`.

---

### Q25 · isinstance

**Task:** Using Animal/Dog/Cat.  
Print `isinstance(d, Dog)`, `isinstance(d, Animal)`, `isinstance(d, Cat)`.  
Expected: True, True, False.

**Guide:** A Dog **is** an Animal. `isinstance` is the safe type check.

**Hint 1:** `type(d) == Animal` is False for a Dog — that is why we use isinstance.

**Hint 2:** `issubclass(Dog, Animal)` is True.

---

### Q26 · Composition

**Task:**

```
class Song:
    def __init__(self, title):
        self.title = title

class Playlist:
    def __init__(self, name):
        self.name = name
        self.songs = []
    def add(self, song):
        self.songs.append(song)
    def titles(self):
        return [s.title for s in self.songs]
```

Add 3 songs, print `titles()`.

**Guide:** Playlist **has** songs. That is composition, not inheritance. Do not make Playlist a subclass of Song.

**Hint 1:** `p.add(Song("Kesariya"))`

**Hint 2:** Inheritance = “is a”. Composition = “has a”. A playlist is not a song.

---

### Q27 · Encapsulation

**Task:** `BankAccount`: store `self._balance` (leading underscore = “please don’t touch from outside”).  
`deposit` / `withdraw` / `get_balance` are the only way to change or read it in main.

Main should not write `acc._balance = 999999`. Write a comment in your file explaining why.

**Guide:** Python does not truly hide `_balance`. The underscore is a **promise**.

**Hint 1:** `get_balance` returns `_balance`.

**Hint 2:** withdraw still returns True/False.

---

### Q28 · @property

**Task:** Same account. Replace `get_balance` with:

```
@property
def balance(self):
    return self._balance
```

Main: `print(acc.balance)` — no parentheses.  
Do **not** write `@balance.setter` yet — `acc.balance = 0` should fail or you simply don’t do it. Deposit/withdraw still change `_balance`.

**Guide:** `@property` lets you write `acc.balance` like data, but it runs a method.

**Hint 1:** The method name is `balance`.

**Hint 2:** Call deposit, then print `acc.balance` again.

---

### Q29 · @classmethod alternative constructor

**Task:**

```
class Student:
    def __init__(self, name, roll):
        ...
    @classmethod
    def from_line(cls, line):
        # line like "Aisha,101"
        name, roll = line.split(",")
        return cls(name.strip(), roll.strip())
```

Create a student with `Student.from_line("Aisha,101")`. Print name and roll.

**Guide:** `cls` is the class. `cls(...)` calls `__init__`. Class methods build objects from other shapes of data.

**Hint 1:** `return cls(...)` not `return Student(...)` (so subclasses still work).

**Hint 2:** Split once on comma.

---

### Q30 · Count instances

**Task:** Class attribute `Student.count = 0`. In `__init__`, `Student.count += 1`.  
Create 3 students, print `Student.count` → 3.

Optional: `def __del__(self):` is unreliable — **skip it**.

**Guide:** Use the **class name** `Student.count`, not `self.count += 1` (that can create an instance attr).

**Hint 1:** `Student.count += 1` inside `__init__`.

**Hint 2:** Print `Student.count` not `s.count` (both may work; class name is clearer).

---

# Hard (Q31–Q35)

Several classes. Functions for menus. This is project-level.

---

### Q31 · Library

**Real-world:** Issue desk as objects.

**Task:**

- `Book(title)` with `available` True/False and `holder` (None or Member)
- `Member(name)` with `borrowed` list of Books
- `Library` with `books` list and methods:
  - `add_book(title)`
  - `find_book(title)` → Book or None
  - `issue(title, member)` — fail if missing / not available
  - `return_book(title)` — fail if already available
- `__str__` on Book: `Wings of Fire [available]` or `[with Aisha]`

Main: create library, 3 books, 2 members, issue, print, return, issue to the other member.

**Self-check:** Cannot issue the same book to two people. After return, issue works.

**Guide:** Issue sets `book.available = False`, `book.holder = member`, `member.borrowed.append(book)`. Return reverses that.

**Hint 1:** Compare titles case-insensitive in `find_book`.

**Hint 2:** `return_book` should `member.borrowed.remove(book)` — need the holder reference.

**Hint 3:** Do not use dicts as the main model. Objects are the model. A dict `title → Book` inside Library is OK as an index.

---

### Q32 · Bank transfer

**Real-world:** Two accounts, one bank.

**Task:**

- `Account(owner, pin, balance=0)`
  - `deposit`, `withdraw` (raise `ValueError` on bad amount / insufficient / wrong pin on withdraw)
  - `check_pin(pin)` 
- `Bank` with `accounts` as **dict** `owner → Account`
  - `open(owner, pin)`
  - `get(owner)`
  - `transfer(from_owner, to_owner, pin, amount)`  
    withdraw from one, deposit to the other. If withdraw fails, **do not** deposit.

Main: open Aisha and Ravi, deposit, transfer 200, print both balances. Try transfer too much — balances unchanged.

**Self-check:** Wrong PIN on transfer → no change. Unknown owner → message.

**Guide:** `transfer` calls methods on Account objects. Catch ValueError.

**Hint 1:** Withdraw first, then deposit. If withdraw raises, deposit never runs.

**Hint 2:** PIN on the **from** account only.

**Hint 3:** `__str__` → `Aisha: 800`.

---

### Q33 · Shop: Product + Cart

**Real-world:** Canteen as classes.

**Task:**

- `Product(name, price, stock)`
  - `reduce_stock(qty)` raises ValueError if not enough
- `Cart` with dict `product_name → qty` **or** list of `(Product, qty)`  
  - `add(product, qty)`
  - `total(price_lookup or use Product.price)`
  - `checkout()` reduces stock for each line, then clears cart. If any reduce fails, **nothing** should be reduced (simple version: reduce as you go, or check all first — **check all first**, then reduce).
- `Shop` holds a dict `name → Product`, `find`, `restock`

Main: 3 products, add to cart, checkout, print stocks. Try qty > stock → error, stock unchanged.

**Guide:** Check stock for **all** cart lines before changing anything.

**Hint 1:** `Product` owns price and stock. Cart should not invent prices.

**Hint 2:** `shop.find("tea")` returns Product or None.

**Hint 3:** After checkout, cart empty, stocks down.

---

### Q34 · Courses and students

**Real-world:** College enrollment.

**Task:**

- `Student(name)` with a **set** `courses` of Course objects (or course names)
- `Course(code, capacity)` with a **set** `students` of Student objects
- `enroll(student, course)`  
  if full → False  
  if already enrolled → False  
  else add both sides (student.courses and course.students), True
- `drop(student, course)` both sides
- `common(course_a, course_b)` → set of student **names** in both

Main: 2 courses capacity 2, 3 students, enroll until full, print common, drop, enroll the third.

**Self-check:** Third student cannot enroll when full. After drop, can enroll.

**Guide:** Two-way link like Friends Set 3, but with objects. Sets of objects work if you don’t need to hash custom mess — **default hash by identity** is OK (don’t put them in a set if you implement `__eq__` without `__hash__`). Simplest: store **names** in course.students as strings, and Course objects in student.courses.

**Hint 1:** Storing names in the Course set avoids hashing issues.

**Hint 2:** `len(course.students) >= course.capacity` → full.

**Hint 3:** `common`: set intersection of name sets.

---

### Q35 · Parking lot objects + optional file

**Real-world:** Set 3 parking, as classes. Optional JSON save.

**Task:**

- `Slot(label)` with `vehicle` (string or `""`)
  - `is_free`, `park(num)`, `leave()`
- `ParkingLot` with list of Slots
  - `park(vehicle, label)` 
  - `find(vehicle)` returns label or None
  - `free_count`
  - `board` string for printing
- Reject duplicate vehicle, occupied slot, unknown label (raise ValueError or return a message — pick one style)

Main: 5 slots, park 2 cars, find, leave, board.

**Stretch:** `save("lot.json")` / `load` with a list of `{"label", "vehicle"}`. Use try/except FileNotFoundError on load.

**Guide:** Slot does one slot. Lot coordinates many. Main is the menu.

**Hint 1:** `find` loops `self.slots`.

**Hint 2:** Park: find slot by label, check free, check vehicle not already in lot.

**Hint 3:** JSON stretch: Lot.load is a `@classmethod` that returns a ParkingLot (like Q29).

---

# Mini project

Pick **one**:

**A. Todo app** — `Task(text, done=False)` + `TodoList` with add/view/complete/save json  

**B. Mini bank CLI** — reuse Q32 with a menu and JSON save  

**C. Library CLI** — Q31 with a text menu  

No tutorials open. If it runs, you can start writing real projects from scratch with classes.

---

## Ready for real projects

- You can explain `self` in one sentence
- You pick **inheritance** only for “is-a”, **composition** for “has-a”
- Q31 or Q33 works without copying
- Bad input does not crash the menu

There is no next topic file in this series. Remaining extras (if you want later): iterators, decorators-in-depth, testing, virtualenv, web APIs.

Rebuild **one** old list-based project (canteen or phone book) as classes. That conversion is the exam.

Full path projects: `projects/projects-comprehensions-to-oop.md` (Set 4, Part E).
