import { Nutrient } from '../abstracts/Nutrient';
import { CALORIES_PER_GRAM } from '../constants';

export class Carbohydrate extends Nutrient {
  protected caloriesPerGram = CALORIES_PER_GRAM.CARBOHYDRATE;

  constructor(grams: number) {
    super(grams);
  }
}