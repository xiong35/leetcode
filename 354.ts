namespace T354 {
  interface EnvelopesInfo {
    area: number;
    w: number;
    h: number;
    canHold: number;
  }

  function maxEnvelopes(envelopes: number[][]): number {
    const areaDec = envelopes
      .map((e) => {
        const obj: EnvelopesInfo = {
          area: e[0] * e[1],
          w: e[0],
          h: e[1],
          canHold: 0,
        };
        return obj;
      })
      .sort((a, b) => a.area - b.area);

    let maxNum = 1;

    areaDec.forEach((curObj, ind) => {
      areaDec.slice(ind + 1).some((bigger) => {
        if (bigger.w > curObj.w && bigger.h > curObj.h) {
          bigger.canHold = Math.max(
            curObj.canHold + 1,
            bigger.canHold
          );
          maxNum = Math.max(maxNum, bigger.canHold + 1);
        }
      });
    });

    return maxNum;
  }

  const envelopes = [
    [2, 100],
    [3, 200],
    [4, 300],
    [5, 500],
    [5, 400],
    [5, 250],
    [6, 370],
    [6, 360],
    [7, 380],
  ];

  console.log(maxEnvelopes(envelopes));
}
