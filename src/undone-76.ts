function minWindow(s: string, t: string): string {
  const char2Indexes = new Map<string, number[]>();
  const ind2Char = {};

  t.split("").forEach((c) =>
    char2Indexes.has(c) ? null : char2Indexes.set(c, [])
  );

  s.split("").forEach((c, ind) => {
    char2Indexes.has(c) ? char2Indexes.get(c).push(ind) : null;
    ind2Char[ind] = c;
  });

  const indexes = Object.keys(ind2Char)
    .map((k) => Number(k))
    .sort((a, b) => a - b);

  const initInd: number[] = [];

  for (let key of [...char2Indexes.keys()]) {
    if (char2Indexes.get(key).length === 0) return "";
    initInd.push(char2Indexes.get(key).shift());
  }

  let i = Math.max(...initInd),
    j = Math.min(...initInd);
  let minLen = j - i;
  let minPair = [i, j];

  while (1) {
    // 去除左边
    const toRemove = s[i];
    const nextInd = char2Indexes.get(toRemove).shift();
    if (!nextInd) return s.slice(minPair[0], minPair[1]);

    // 向右滑, 得到valid的窗口
  }
}
