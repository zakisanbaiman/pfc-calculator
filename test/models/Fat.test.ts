import { Fat } from '../../src/models/Fat';

describe('Fat', () => {
  test('1gが9kcalとして計算されること', () => {
    const fat = new Fat(10);
    expect(fat.getCalories()).toBe(90);
  });
});