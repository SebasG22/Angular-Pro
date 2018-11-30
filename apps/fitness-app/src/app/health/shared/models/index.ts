export interface IMeal {
    uid: string;
    name: string;
    ingredients: string[];
    timestamp: number;
    $exists: () => boolean
}