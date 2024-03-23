interface FoodItem {
    fdcId: number;
    brandName: string;
    brandOwner: string;
    description: string;
    ingredients: string;
    servingSize: number;
    servingSizeUnit: string;
    score: number;
    packageWeight: string;
    foodCategory: string;
    foodNutrients: [Nutrient]
}

export default FoodItem;

interface Nutrient {
    nutrientId: number;
    nutrientName: string;
    value: number;
    unitName: string;
    percentDailyValue: number;
}