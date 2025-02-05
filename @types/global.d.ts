type TProgram = {
    id: string;
    title: string;
    details: string;
    program_length: number;
    workout_duration: number;
    equipment: string;
    specialization: string[];
    difficulty: string[];
    user_id: string;
}

type TExercise = {
    id: string;
    gif_id?: string;
    instructions?: string[];
    name_english: string;
    name_espanol: string;
    name_portugues: string;
    name_francais: string;
}
