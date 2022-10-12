function compressString(S: string): string {
  let curChar = S[0];
  let count = 1;
  const newStr = (S + "@")
    .slice(1)
    .split("")
    .reduce((arr, char, ind) => {
      if (char === curChar) {
        count++;
        return arr;
      } else {
        arr.push(curChar);
        arr.push(count);
        curChar = char;
        count = 1;
        return arr;
      }
    }, [])
    .join("");
  return newStr.length > S.length ? S : newStr;
}

const S = "aabcccccaaa";

console.log(compressString(S));
