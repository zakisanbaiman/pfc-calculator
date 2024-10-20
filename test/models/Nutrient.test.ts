import { Fat } from '../../src/models/Fat';

// Nutrientクラスは抽象クラスであるため、具象クラスであるFatクラスを用いてテストを行う。

describe('getCalories', () => {
  test('入力されたグラム数と1gあたりのカロリーから総カロリーが計算されること', () => {
    // Fatの1gあたりのカロリーは9kcalであるため、10gの場合は90kcalとなる。
    const grams = 10;
    const nutrient = new Fat(grams);
    expect(nutrient.getCalories()).toBe(90);
  });

  test('カロリーは整数(小数第一位を四捨五入)で返却されること', () => {
    // 10.6 * 9 = 95.4（小数第一位を四捨により95）
    const grams1 = 10.6;
    const nutrient1 = new Fat(grams1);
    expect(nutrient1.getCalories()).toBe(95);

    // 20.5 * 9 = 184.5（小数第一位を五入により185）
    const grams2 = 20.5;
    const nutrient2 = new Fat(grams2);
    expect(nutrient2.getCalories()).toBe(185);
  });
});

describe('roundInput', () => {
  test('小数点第2位を四捨五入されること', () => {
    // 10.14 => 10.1（小数第2位を四捨により10.1）
    const grams = 10.14;
    const nutrient = new Fat(grams);
    const result = (nutrient as any).roundInput(grams);
    expect(result).toBe(10.1);

    // 10.15 => 10.2（小数第2位を五入により10.2）
    const grams2 = 10.15;
    const nutrient2 = new Fat(grams2);
    const result2 = (nutrient2 as any).roundInput(grams2);
    expect(result2).toBe(10.2);
  });
});