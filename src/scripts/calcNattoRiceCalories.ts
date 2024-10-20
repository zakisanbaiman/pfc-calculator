import { PFCCalculator } from "../PFCCalculator"
import { Protein, Fat, Carbohydrate } from "../models"

function main (): void {
  // 白米
  const protein1 = new Protein(2.5)
  const fat1 = new Fat(0.3)
  const carbohydrate1 = new Carbohydrate(37.1)
  const calculator1 = new PFCCalculator(protein1, fat1, carbohydrate1)
  const totalCalories1 = calculator1.calculateTotalCalories()

  // 納豆
  const protein2 = new Protein(18.6)
  const fat2 = new Fat(9.8)
  const carbohydrate2 = new Carbohydrate(6.0)
  const calculator2 = new PFCCalculator(protein2, fat2, carbohydrate2)
  const totalCalories2 = calculator2.calculateTotalCalories()
  
  // 白米と納豆の合計カロリー
  const totalCalories = totalCalories1 + totalCalories2
  console.log(`Total calories: ${totalCalories}`)
}

main()