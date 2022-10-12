namespace T1047 {
  function removeDuplicates(S: string): string {
    const chars: string[] = S.split("");
    const stack: string[] = [];

    chars.forEach((c) => {
      if (stack[stack.length - 1] === c) {
        stack.pop();
      } else {
        stack.push(c);
      }
    });

    return stack.join("");
  }

  console.log(removeDuplicates("foofaf"));
}
