import React from 'react';
import User, { userInfo, userMacros} from './User';

const MacroBars = () => {
    let userInfo:userInfo = {
        name: 'Steve Austin',
        age: 41,
        weight: 260
    }

    let userMacros:userMacros = {
        protein: 0,
        carbs: 0,
        fat: 0,
        calories: 0,
        calorieGoal: 4000
    }

    let user = new User(userInfo, userMacros);

    return (
        <div>
            <h3>Welcome back {user.getName()}</h3>
            <p>Age: {user.getAge()}</p>
            <p>weight: {user.getWeight()}</p>

            <h4>Macros:</h4>
            <div>protein: {user.getMacros().protein}</div>
            <div>carbs: {user.getMacros().carbs}</div>
            <div>fat: {user.getMacros().fat}</div>
            <div>calories: {user.getMacros().calories} out of {user.getMacros().calorieGoal}</div>
        </div>
    );
}

export default MacroBars;