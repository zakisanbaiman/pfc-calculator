import { MAX_GRAMS } from "../constants";

export abstract class Nutrient {
  protected abstract caloriesPerGram: number;
  protected maxGrams = MAX_GRAMS;
  
  constructor(protected grams: number) {
    this.validate(grams);
    this.grams = this.roundInput(grams);
  }

  /**
   * 入力値が0未満の場合、エラーをスローする
   */
  protected validate(grams: number): void {
    if (grams === undefined || grams === null || isNaN(grams)) {
      throw new Error('Invalid input: grams must be a number');
    }

    if (grams < 0) {
      throw new Error('Invalid input: grams must be greater than or equal to 0');
    }

    if (grams > this.maxGrams) {
      throw new Error(`Invalid input: grams must be less than or equal to ${this.maxGrams}`);
    }
  }

  /**
   * 小数点第2位を四捨五入
   * @param input 
   * @returns 
   */
  private roundInput(input: number): number {
    return Math.round(input * 10) / 10;
  }

  public getCalories(): number {
    return Math.round(this.grams * this.caloriesPerGram);
  }
}