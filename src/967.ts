namespace T967 {
  interface NumRecord {
    [n: number]: {
      [first: number]: number[];
    };
  }

  function numsSameConsecDiff(n: number, k: number): number[] {
    let results: number[] = [];
    const record: NumRecord = {};

    function numsSameConsecDiffWithFirst(
      n: number,
      first: number
    ): number[] {
      if (n === 1) return [first];
      if (record?.[n]?.[first]) return record[n][first];

      let rtArr: number[] = [];

      const HEAD = first * 10 ** (n - 1);

      if (first + k <= 9) {
        rtArr = rtArr.concat(
          numsSameConsecDiffWithFirst(n - 1, first + k).map(
            (num) => HEAD + num
          )
        );
      }
      if (first - k >= 0 && k !== 0) {
        rtArr = rtArr.concat(
          numsSameConsecDiffWithFirst(n - 1, first - k).map(
            (num) => HEAD + num
          )
        );
      }

      record[n] ??= {};
      record[n][first] = rtArr;

      return rtArr;
    }

    for (let i = 1; i < 10; i++) {
      results = results.concat(numsSameConsecDiffWithFirst(n, i));
    }

    return results;
  }

  console.log(numsSameConsecDiff(2, 0));
}
