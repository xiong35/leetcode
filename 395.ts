function longestSubstring(s: string, k: number): number {
  if (k === 1) return s.length;

  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let charMap = {};
    for (let j = i; j < s.length; j++) {
      const char = s[j];
      charMap[char] ? charMap[char]++ : (charMap[char] = 1);
      if (isValidCharMap(charMap, k)) {
        max = Math.max(max, j - i + 1);
      }
    }
  }

  return max;
}

function isValidCharMap(charMap, k: number): boolean {
  for (let key in charMap) {
    if (charMap[key] < k) return false;
  }
  return true;
}

let s: string = "ababbc";
let k: number = 2;

console.log(longestSubstring(s, k));
