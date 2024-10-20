import { Nutrient } from '../abstracts/Nutrient';
import { CALORIES_PER_GRAM } from '../constants';

export class Protein extends Nutrient {
  protected caloriesPerGram = CALORIES_PER_GRAM.PROTEIN;

  constructor(grams: number) {
    super(grams);
  }
}