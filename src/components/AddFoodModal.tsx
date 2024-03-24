import React, { useState } from 'react';
import FoodItem from './FoodItem';
import { ModalProps } from './SearchBar';
import './AddFoodModal.scss';

const AddFoodModal = ({item, closeModal}: ModalProps) => {

    const [servingSizeInput, setServingSizeInput] = useState("");

    const addToDayHandler = () => {
        let servings = parseInt(servingSizeInput);

        let protein = 0;
        let carbs = 0;
        let fat = 0;
        let calories = 0;

        for(let i = 0; i < item.foodNutrients.length; i++) {
            let name = item.foodNutrients[i].nutrientName;
            let value = item.foodNutrients[i].value;
            
            if(name === "Protein") {
                protein = value;
            }
            if(name === "Carbohydrate, by difference") {
                carbs = value;
            }
            if(name === "Total lipid (fat)") {
                fat = value;
            }
        }

        calories = (protein * 4) + (carbs * 4) + (fat * 9);
        calories = calories * servings;
        protein = protein * servings;
        carbs = carbs * servings;
        fat = fat * servings;
        console.log("calories", calories);
        console.log("protien", protein);
        console.log("carbs", carbs);
        console.log("fat", fat);
    }

    return (
        <div className="Modal">
            <div className="modal-box">
                <div className="top-row">
                    <h3>Add Serving Size</h3>
                    <button onClick={closeModal}>x</button>
                </div>
                <div className='bottom-row'>
                    <div>id: {item.fdcId}</div>
                    <div>description: {item.description}</div>
                    <div>category: {item.foodCategory}</div>
                    <div>Serving size: {item.servingSize} {item.servingSizeUnit}</div>
                    <label htmlFor="servings-input">How many servings?</label>
                    <input type="text" value={servingSizeInput} onChange={(e) => setServingSizeInput(e.target.value)} />
                    <button onClick={addToDayHandler}>Add to day</button>
                    {item.foodNutrients.map((nutrient, nutrientKey) => {
                        return(
                            <>
                                <div>{nutrient.nutrientName}: {nutrient.value.toString()} {nutrient.unitName}</div>
                            </>
                        );
                    })}
                </div>
            </div>
            
        </div>
    )
}

export default AddFoodModal