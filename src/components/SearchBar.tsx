import React, { useState } from 'react';
import FoodItem from './FoodItem';
import AddFoodModal from './AddFoodModal';

export interface ModalProps {
    item: FoodItem;
    closeModal?: ({}) => void;
}


const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");
    const [foodList, setFoodList] = useState<Array<FoodItem>>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFood, setSelectedFood] = useState<FoodItem>()

    
    


    const searchHandler = (e:any) => {
        e.preventDefault();
        console.log("search!");

        let apiKey = 'iZqVPXy2m6RVDpPvvHWQp8bzoa21etTKm65LLJbW';

        // Very good nutrition api completely free
        // https://fdc.nal.usda.gov/api-guide.html
        const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${searchInput}`;
        console.log("url", url)
        fetchApi(url);
    }

    const fetchApi = async (url:string) => {
        try {
            const response = await fetch(url);
            const items = await response.json();
            console.log("items", items);
            setFoodList(items.foods);
        } catch(error) {
            console.log("Error!", error);
        }
    }

    const closeModal = () => {
        console.log("CLOSED!");
        setIsModalOpen(false);
    }

    const addFood = (key:number) =>  {
        console.log("addFood!", foodList[key]);
        let food: FoodItem = foodList[key];
        // pop up a  modal with the specific food clicked and how many servings
        // if added, it will be added to the users daily value
        setIsModalOpen(true);
        setSelectedFood(food);
    }

    return (
        <div>
            {isModalOpen && selectedFood !== undefined &&
                <AddFoodModal item={selectedFood} closeModal={closeModal} />
            }
            <form action="submit" onSubmit={searchHandler}>
                SEARCH BAR
                <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
                <button type='submit'>Search</button>
            </form>
            <div>
                <ul>
                    {foodList.map((item, key) => {
                        return(
                            <>
                                <li>
                                    <div>{item.brandName}</div>
                                    <div>{item.description}</div>
                                    <div>{item.foodCategory}</div>
                                    <button onClick={() => addFood(key)}>Add Item</button>
                                </li>
                            </>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}

export default SearchBar