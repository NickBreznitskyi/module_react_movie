export interface ICredit {
    id: number;
    cast: ICastCrew[];
    crew: ICastCrew[];
}

interface ICastCrew {
    adult: boolean;
    gender: number | null;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    cast_id: number;
    character?: string;
    credit_id: string;
    order: number;
    department?: string;
    job?: string;
}