import React, { useState } from 'react';
import FoodItem from './FoodItem';
import { ModalProps } from './SearchBar';
import './AddFoodModal.scss';

const AddFoodModal = ({item, closeModal}: ModalProps) => {

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