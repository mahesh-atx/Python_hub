# Modules — 2 basic + 1 hard

**May use:** import, your `.py` files, stdlib `math`/`random`/`datetime`/`os`.  
**Must not:** `open` data files, `try` as main tool, classes.

Create files next to each other. Run from that folder.

---

## Basic 1 — greetings.py

**What it must do**

`greetings.py`: `def hello(name): return "Hello, " + name.title()`  
At bottom: `if __name__ == "__main__": print(hello("test"))`

`main.py`: `import greetings` then take a name, print `greetings.hello(name)`.

Run `greetings.py` → see Hello, Test.  
Run `main.py` → **must not** print that test line.

**Hint:** `__name__` is `"__main__"` only when that file is launched.

---

## Basic 2 — textutils.py

**What it must do**

Module: `clean_name`, `digits_only`, `is_valid_phone` (10 digits).

Main: take name + phone, print cleaned name and Valid/Invalid.

**Hint:** `import textutils as tu`. No `input` inside the module.

---

## Hard — shop package + bill

**What it must do**

```
shop/
  __init__.py     # export MENU, line_total
  prices.py       # MENU = {"tea": 12, "coffee": 20, "water": 10}
  cart.py         # line_total(item, qty); subtotal(cart_dict)
bill.py           # user loop until end
```

`bill.py`: take item + qty until `end`. Skip unknown. Print lines and subtotal. Subtotal >= 50 → coupon message.

Run from the **parent** of `shop/`.

**Hint 1:** `from shop import MENU, line_total`  
**Hint 2:** Relative import in `cart.py`: `from .prices import MENU`  
**Hint 3:** Cart dict name→qty in `bill.py`; `subtotal` in the package.
