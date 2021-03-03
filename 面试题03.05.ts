namespace M0305 {
  class SortedStack {
    // 升序
    private _stack: number[] = [];

    push(val: number): void {
      let i = 0,
        j = this._stack.length - 1;
      let mid;

      if (val > this._stack[j]) {
        this._stack.push(val);
        return;
      }

      while (i < j) {
        mid = (i + j) >> 1;
        let compare = this._stack[mid];
        if (val > compare) {
          i = mid + 1;
        } else if (val < compare) {
          j = mid;
        } else {
          break;
        }
      }

      mid = (i + j) >> 1;

      this._stack.splice(mid, 0, val);
    }

    pop(): void {
      this._stack.shift();
    }

    peek(): number {
      return this._stack.length === 0 ? -1 : this._stack[0];
    }

    isEmpty(): boolean {
      return this._stack.length === 0;
    }

    show(): void {
      console.log(this._stack);
    }
  }

  var s: SortedStack = new SortedStack();
  s.push(4);
  s.push(2);
  s.push(1);
  s.push(3);
  s.push(9);
  s.push(5);
  s.push(2);
  s.push(-1);
  s.push(99);
  s.show();
}
