import { PFCCalculator } from '../src/PFCCalculator';
import { Protein } from '../src/models/Protein';
import { Fat } from '../src/models/Fat';
import { Carbohydrate } from '../src/models/Carbohydrate';

describe('validate', () => {
  const errMsg = 'Invalid input: nutrient must not be null or undefined';
  let protein: Protein;
  let fat: Fat;
  let carbohydrate: Carbohydrate;

  beforeAll(() => {
    protein = new Protein(2.5);
    fat = new Fat(0.3);
    carbohydrate = new Carbohydrate(37.1);
  });

  test('異常系: proteinがnullまたはundefinedの場合、エラーがスローされること', () => {
    expect(() => new PFCCalculator(null as any, fat, carbohydrate)).toThrowError(errMsg);
    expect(() => new PFCCalculator(undefined as any, fat, carbohydrate)).toThrowError(errMsg);
  });

  test('異常系: fatがnullまたはundefinedの場合、エラーがスローされること', () => {
    expect(() => new PFCCalculator(protein, null as any, carbohydrate)).toThrowError(errMsg);
    expect(() => new PFCCalculator(protein, undefined as any, carbohydrate)).toThrowError(errMsg);
  });

  test('異常系: carbohydrateがnullまたはundefinedの場合、エラーがスローされること', () => {
    expect(() => new PFCCalculator(protein, fat, null as any)).toThrowError(errMsg);
    expect(() => new PFCCalculator(protein, fat, undefined as any)).toThrowError(errMsg);
  });
});

describe('calculateTotalCalories', () => {
  test('各栄養素のカロリーを合計した値が返却されること', () => {
    const protein = new Protein(2.5);
    const fat = new Fat(0.3);
    const carbohydrate = new Carbohydrate(37.1);

    const pfcBalance = new PFCCalculator(protein, fat, carbohydrate);
    const totalCalories = pfcBalance.calculateTotalCalories();
    expect(totalCalories).toBe(10 + 3 + 148);
  });
});