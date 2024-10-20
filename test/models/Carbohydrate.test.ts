import { Carbohydrate } from '../../src/models/Carbohydrate';

describe('Carbohydrate', () => {
  test('1gが4kcalとして計算されること', () => {
    const carbohydrate = new Carbohydrate(60);
    expect(carbohydrate.getCalories()).toBe(240);
  });
});