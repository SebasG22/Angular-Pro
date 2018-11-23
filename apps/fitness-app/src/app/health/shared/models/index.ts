export interface IMeal {
    name: string;
    indredients: string[];
    timestamp: number;
    $key: string;
    $exists: () => boolean
}