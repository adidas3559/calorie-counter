class User {
    private userInfo:userInfo;
    private userMacros:userMacros;

    constructor(userInfo:userInfo, userMacros:userMacros) {
        this.userInfo = userInfo;
        this.userMacros = userMacros;
    }

    greet(): string {
        return "hello " + this.userInfo.name;
    }

    // Because our fields are private, we must have getters and setters
    // This is a bit of an anti pattern in JS because the default class var is public
    // and private vars were newly added, but I'm practising for other languages
    getName(): string {
        return this.userInfo.name;
    }

    setName(newName:string): void {
        this.userInfo.name = newName;
    }

    getAge(): number {
        return this.userInfo.age;
    }

    setAge(newAge:number): void {
        this.userInfo.age = newAge;
    }

    getWeight(): number {
        return this.userInfo.weight;
    }

    setWeight(newWeight:number): void {
        this.userInfo.weight = newWeight;
    }

    getMacros():userMacros {
        return this.userMacros;
    }

    setMacros(macros:userMacros): void {
        this.userMacros = macros;
    }

    setCalories(calories:number): void {
        this.userMacros.calories = calories;
    }

}

export default User;


export interface userInfo {
    name:string;
    age:number;
    weight:number;
}


export interface userMacros {
    protein:number;
    carbs:number;
    fat:number;
    calories:number;
    calorieGoal: number;
}

// export default userMacros;