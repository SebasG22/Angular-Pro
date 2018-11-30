export interface IMeal {
    uid: string;
    name: string;
    ingredients: string[];
    timestamp: number;
}

export interface IWorkout{
    uid: string;
    name:string;
    type:string;
    strength: any,
    endurance: any
}