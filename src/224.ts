namespace T224 {
  function calculate(s: string): number {
    // statement = element([+-]element)*
    // element = (statement) | NUM | [+-]element
    let curPos = 0;
    s = s.replace(/ /g, "");

    function statement(): number {
      let val = 0;

      val += element();
      while (curPos < s.length) {
        if (s[curPos] === "+") {
          curPos++;
          val += element();
        } else if (s[curPos] === "-") {
          curPos++;
          val -= element();
        } else {
          break;
        }
      }

      return val;
    }

    function element(): number {
      let val: number;
      const curChar = s[curPos];
      if (curChar === "(") {
        curPos++;
        val = statement();
        curPos++;
      } else if (curChar === "+") {
        curPos++;
        val = element();
      } else if (curChar === "-") {
        curPos++;
        val = -element();
      } else {
        let str = "";

        while (curPos < s.length) {
          const curCharCode = s[curPos].charCodeAt(0);
          if (curCharCode <= 57 && curCharCode >= 48) {
            str += s[curPos++];
          } else {
            break;
          }
        }

        val = parseInt(str);
      }
      return val;
    }

    return statement();
  }

  const str = "-2+1";
  console.log(calculate(str));
}
