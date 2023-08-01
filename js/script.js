var display = document.getElementById("display");
display.value = "";
a = "";
b = "";
op = "";

document.body.addEventListener("keydown", function (e) {
  let n = e.key;

  let prev = display.value;

  if (isNaN(n)) {
    document.getElementById("display").value = prev;
  } else if (
    n === "0" ||
    n === "1" ||
    n === "2" ||
    n === "3" ||
    n === "4" ||
    n === "5" ||
    n === "6" ||
    n === "7" ||
    n === "8" ||
    n === "9" ||
    n === "." ||
    n === "+" ||
    n === "-" ||
    n === "/" ||
    n === "*" ||
    n === "%"
  ) {
    press(n);
  } else if (n === "Enter") {
    press("=");
  } else if (n === "Backspace") {
    press("bs");
  } else if (n === "Escape") {
    press("ac");
  } else if (n === " ") {
    press("pm");
  }
});

function press(n) {
  if (
    n == 0 ||
    n == 1 ||
    n == 2 ||
    n == 3 ||
    n == 4 ||
    n == 5 ||
    n == 6 ||
    n == 7 ||
    n == 8 ||
    n == 9 ||
    n == "."
  ) {
    if (display.value == "") {
      display.value = n;
    } else {
      display.value = display.value + n;
    }
  }

  if (n == "pm") {
    display.value = -1 * parseFloat(display.value);
  }

  if (n == "bs") {
    beforebs = parseFloat(document.getElementById("display").value);
    if (isNaN(beforebs)) {
      document.getElementById("display").value = "";
    } else {
      bs = beforebs % 10;
      finalbs = (beforebs - bs) / 10;
      if (finalbs == 0) {
        document.getElementById("display").value = "";
      } else {
        document.getElementById("display").value = finalbs;
      }
    }
  }

  if (n == "+" || n == "-" || n == "/" || n == "*" || n == "%") {
    if (a == "") {
      a = display.value;
      op = n;
      display.value = "";
    } else {
      if (op == "+") {
        b = display.value;
        a = parseFloat(a) + parseFloat(b);
        display.value = "";
        op = n;
      }

      if (op == "-") {
        b = display.value;
        a = parseFloat(a) - parseFloat(b);
        display.value = "";
        op = n;
      }

      if (op == "*") {
        b = display.value;
        a = parseFloat(a) * parseFloat(b);
        display.value = "";
        op = n;
      }

      if (op == "/") {
        b = display.value;
        a = parseFloat(a) / parseFloat(b);
        display.value = "";
        op = n;
      }

      if (op == "%") {
        b = display.value;
        a = parseFloat(a) % parseFloat(b);
        display.value = "";
        op = n;
      }
    }
  }

  if (n == "=") {
    b = display.value;
    if (op == "+") {
      display.value = parseFloat(a) + parseFloat(b);
    } else if (op == "-") {
      display.value = parseFloat(a) - parseFloat(b);
    } else if (op == "/") {
      display.value = parseFloat(a) / parseFloat(b);
    } else if (op == "*") {
      display.value = parseFloat(a) * parseFloat(b);
    } else if (op == "%") {
      display.value = parseFloat(a) % parseFloat(b);
    }
  }

  if (n == "ac") {
    display.value = "";
    a = "";
    b = "";
    op = "";
  }
}
