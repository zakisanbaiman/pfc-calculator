import { Protein, Fat, Carbohydrate } from './models';

/**
 * タンパク質、脂質、炭水化物を合わせた計算を行うクラス
 */
export class PFCCalculator {
  constructor(
    private protein: Protein,
    private fat: Fat,
    private carbohydrate: Carbohydrate
  ) {
    this.validate();
  }

  private validate(): void {
    Object.values(this).forEach((nutrient) => {
      if (nutrient === null || nutrient === undefined) {
        throw new Error('Invalid input: nutrient must not be null or undefined');
      }
    });
  }

  calculateTotalCalories(): number {
    return this.protein.getCalories() + this.fat.getCalories() + this.carbohydrate.getCalories();
  }
}