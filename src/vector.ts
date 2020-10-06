export default class Vector {
    private array: number[];
  
    constructor(input: string | string[], length?: number) {
      if (Array.isArray(input)) {
        this.array = input.map((item: string) => parseInt(item, 10));
        return;
      }
      if (!length) {
        this.array = [];
        return;
      }
      let arr = Array.from(input.replace(/\D+/g, "")).map((item: string) =>
        parseInt(item)
      );
      let missing = length - arr.length;
      if (missing > 0) {
        for (let index = 0; index < missing; index++) {
          arr.unshift(0);
        }
      } else {
        for (let index = 0; index < Math.abs(missing); index++) {
          arr.shift();
        }
      }
      this.array = arr;
    }
    mult(other: Vector) {
      let res = 0;
      let length = Math.min(this.array.length, other.array.length);
      for (let index = 0; index < length; index++) {
        res = res + this.array[index] * other.array[index];
      }
      return res;
    }
    get(index: number) {
      return this.array[index];
    }
  }