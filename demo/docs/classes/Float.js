
/**
 * A floating number class
 */
class Float {
  /**
   * Create a float
   * @param {number} v - Value
   * @example
   * return new Float(3.5);
   */
  constructor(v) {
    this.v = v;
  }

  /**
   * Add a float
   * @param {Float} f - Float
   * @returns {Float} - The sum of the two floats
   * @example
   * const a = new Float(1.5);
   * const b = new Float(2.5);
   * return a.add(b);
   */
  add(f) {
    return new Float(this.v + f.v);
  }

  /**
   * Substract a float
   * @param {Float} f - Float
   * @returns {Float} - The difference between the two floats
   * @example
   * const a = new Float(3.5);
   * const b = new Float(2.5);
   * return a.sub(b);
   */
  sub(f) {
    return new Float(this.v - f.v);
  }


  /**
   * Multiply by a float
   * @param {Float} f - Float
   * @returns {Float} - The mutliplication between the two floats
   * @example
   * const a = new Float(1.5);
   * const b = new Float(2);
   * return a.mul(b);
   */
  mul(f) {
    return new Float(this.v * f.v);
  }
}

export { Float }