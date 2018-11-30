export interface IMeal {
    uid: string;
    name: string;
    indredients: string[];
    timestamp: number;
    $exists: () => boolean
}