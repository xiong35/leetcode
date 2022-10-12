namespace T409 {
  function longestPalindrome(s: string): number {
    const map: Record<string, number> = {};

    for (let char of s) {
      map[char] ??= 0;
      map[char]++;
    }

    let count = 0;
    let hasOdd = false;

    Object.keys(map).forEach(key => {
      const value = map[key];
      if (value % 2 === 0) {
        count+=value;
      } else {
        hasOdd = true;
        count += value - 1;
      }
    })

    return count + (hasOdd ? 1 : 0);
  }

  console.log(longestPalindrome("abccccdd"))
}
