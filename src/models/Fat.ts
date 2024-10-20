import { Nutrient } from '../abstracts/Nutrient';
import { CALORIES_PER_GRAM } from '../constants';

export class Fat extends Nutrient {
  protected caloriesPerGram = CALORIES_PER_GRAM.FAT;

  constructor(grams: number) {
    super(grams);
  }
}