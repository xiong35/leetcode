namespace T227 {
  function calculate(s: string): number {
    // statement = form([+-]form)*
    // form = NUM([*/]NUM)*
    let curPos = 0;
    s = s.replace(/ /g, "");

    function statement(): number {
      let val = form();

      while (curPos < s.length) {
        if (s[curPos] === "+") {
          curPos++;
          val += form();
        } else if (s[curPos] === "-") {
          curPos++;
          val -= form();
        } else {
          break;
        }
      }

      return val;
    }

    function form(): number {
      let val = num();

      while (curPos < s.length) {
        if (s[curPos] === "*") {
          curPos++;
          val *= num();
        } else if (s[curPos] === "/") {
          curPos++;
          val = Math.floor(val / num());
        } else {
          break;
        }
      }

      return val;
    }

    function num(): number {
      let str = "";

      while (curPos < s.length) {
        const curCharCode = s[curPos].charCodeAt(0);
        if (curCharCode <= 57 && curCharCode >= 48) {
          str += s[curPos++];
        } else {
          break;
        }
      }

      return parseInt(str);
    }

    return statement();
  }

  const str = "1+3*2";

  console.log(calculate(str));
}
