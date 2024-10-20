export abstract class Nutrient {
  protected abstract caloriesPerGram: number;
  
  constructor(protected grams: number) {
    this.grams = this.roundInput(grams);
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