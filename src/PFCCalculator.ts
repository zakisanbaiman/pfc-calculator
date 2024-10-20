import { Protein, Fat, Carbohydrate } from './models';

/**
 * タンパク質、脂質、炭水化物を合わせた計算を行うクラス
 */
export class PFCCalculator {
  constructor(
    private protein: Protein,
    private fat: Fat,
    private carbohydrate: Carbohydrate
  ) {}

  calculateTotalCalories(): number {
    return this.protein.getCalories() + this.fat.getCalories() + this.carbohydrate.getCalories();
  }
}