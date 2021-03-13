namespace T331 {
  function isValidSerialization(preorder: string): boolean {
    let expectNull = 1;
    let preorderArr = preorder.split(",");

    for (let i = 0; i < preorderArr.length; i++) {
      const c = preorderArr[i];

      if (c === "#") {
        expectNull--;
        if (expectNull < 0) return false;
        if (expectNull === 0) return i === preorderArr.length - 1;
      } else {
        expectNull++;
      }
    }

    return expectNull === 0;
  }

  const pre = "9,3,44,#,#,1,#,#,2,#,6,#,#";
  console.log(isValidSerialization(pre));
}
