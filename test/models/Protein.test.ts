import { Protein } from '../../src/models/Protein';

describe('Protein', () => {
  test('1gが4kcalとして計算されること', () => {
    const protein = new Protein(10);
    expect(protein.getCalories()).toBe(40);
  });
});