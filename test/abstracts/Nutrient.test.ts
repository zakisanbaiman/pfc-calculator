import { Nutrient } from '../../src/abstracts/Nutrient';

/**
 * テスト用具象クラス
 */
class TestNutrient extends Nutrient {
  protected caloriesPerGram = 9;

  constructor(grams: number) {
    super(grams);
  }
}

describe('validate', () => {
  test('入力値が数値でない場合、エラーがスローされること', () => {
    const errMsg = 'Invalid input: grams must be a number';

    // undefinedを入力した場合
    const grams = undefined;
    expect(() => new TestNutrient(grams as any)).toThrowError(errMsg);

    // nullを入力した場合
    const grams2 = null;
    expect(() => new TestNutrient(grams2 as any)).toThrowError(errMsg);
    
    // 数値以外を入力した場合
    const grams3 = 'a';
    expect(() => new TestNutrient(grams as any)).toThrowError(errMsg);
  });

  test('最小値: 入力値が0未満の場合、エラーがスローされること', () => {
    // 0未満の値を入力した場合
    const grams = -1;
    expect(() => new TestNutrient(grams)).toThrowError('Invalid input: grams must be greater than or equal to 0');
  });

  test('最小値: 入力値が0以上の場合、エラーがスローされないこと', () => {
    // 0以上の値を入力した場合
    const grams = 0;
    expect(() => new TestNutrient(grams)).not.toThrowError();

    const grams2 = 1;
    expect(() => new TestNutrient(grams2)).not.toThrowError();
  });

  test('最大値: 入力値が100000以下の場合、エラーがスローされないこと', () => {
    const grams = 100000;
    expect(() => new TestNutrient(grams)).not.toThrowError();
  });

  test('最大値: 入力値が100000を超える場合、エラーがスローされないこと', () => {
    const grams = 100001;
    expect(() => new TestNutrient(grams)).toThrowError('Invalid input: grams must be less than or equal to 100000');
  });

});

describe('getCalories', () => {
  test('入力されたグラム数と1gあたりのカロリーから総カロリーが計算されること', () => {
    // TestNutrientの1gあたりのカロリーは9kcalであるため、10gの場合は90kcalとなる。
    const grams = 10;
    const nutrient = new TestNutrient(grams);
    expect(nutrient.getCalories()).toBe(90);
  });

  test('カロリーは整数(小数第一位を四捨五入)で返却されること', () => {
    // 10.6 * 9 = 95.4（小数第一位を四捨により95）
    const grams1 = 10.6;
    const nutrient1 = new TestNutrient(grams1);
    expect(nutrient1.getCalories()).toBe(95);

    // 20.5 * 9 = 184.5（小数第一位を五入により185）
    const grams2 = 20.5;
    const nutrient2 = new TestNutrient(grams2);
    expect(nutrient2.getCalories()).toBe(185);
  });
});

describe('roundInput', () => {
  test('小数点第2位を四捨五入されること', () => {
    // 10.14 => 10.1（小数第2位を四捨により10.1）
    const grams = 10.14;
    const nutrient = new TestNutrient(grams);
    const result = (nutrient as any).roundInput(grams);
    expect(result).toBe(10.1);

    // 10.15 => 10.2（小数第2位を五入により10.2）
    const grams2 = 10.15;
    const nutrient2 = new TestNutrient(grams2);
    const result2 = (nutrient2 as any).roundInput(grams2);
    expect(result2).toBe(10.2);
  });
});