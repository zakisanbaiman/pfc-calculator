import { PFCCalculator } from '../src/PFCCalculator';
import { Protein } from '../src/models/Protein';
import { Fat } from '../src/models/Fat';
import { Carbohydrate } from '../src/models/Carbohydrate';

describe('TotalCaloriesCalculator', () => {
  test('各栄養素のカロリーを合計した値が返却されること', () => {
    const protein = new Protein(20);
    const fat = new Fat(15);
    const carbohydrate = new Carbohydrate(60);

    const pfcBalance = new PFCCalculator(protein, fat, carbohydrate);
    const totalCalories = pfcBalance.calculateTotalCalories();
    expect(totalCalories).toBe(20 * 4 + 15 * 9 + 60 * 4);
  });

  test('グラム数が小数点第2位まで計算されること', () => {
    const protein = new Protein(20);
    const fat = new Fat(15);
    const carbohydrate = new Carbohydrate(60);

    const pfcBalance = new PFCCalculator(protein, fat, carbohydrate);
    const totalCalories = pfcBalance.calculateTotalCalories();
    expect(totalCalories).toBe(20 * 4 + 15 * 9 + 60 * 4);
  });
});