import { supabase } from ".";

// GET THE PROGRAMS DISPLAYED ON THE EXPLORE PAGE
export const getExplorePagePrograms = async (limit: number) => {
    try {
        const { data, error } = await supabase
        .from('programs')
        .select('id,title,details,program_length,workout_duration,equipment,specialization,difficulty,user_id').eq('explore', true).limit(limit);
        if (error) {
            console.error('Error fetching explore page programs:', error);
        } else if (data && data.length > 0 ) {
            return data as unknown as TProgram[];
        }
    } catch (error: unknown) {
        console.error('Error fetching explore page programs:', error);
    }
};

// GET THE SCHEDULE FOR A SPECIFIC PROGRAM
export const getExplorePageProgramDetails = async (program_id: string) => {
    try {
            const { data, error } = await supabase
            .from('programs')
            .select(`
                id,
                title,
                schedule_workouts(
                    nthDay,
                    nthWeek,
                    day_title,
                    program_workout_exercises(
                        reps,
                        weights,
                        reps_max,
                        reps_range,
                        rpe,
                        rpe_range,
                        time_taken,
                        time_range,
                        amrap,
                        percent_rm,
                        exercises (
                            id,
                            gif_id,
                            instructions,
                            name_english,
                            name_espanol,
                            name_portugues,
                            name_francais
                        )
                    )
                )`,
            )
            .eq('id', program_id)
            .order('nthWeek', { referencedTable: 'schedule_workouts', ascending: true })
            .order('nthDay', { referencedTable: 'schedule_workouts', ascending: true });

            if (error) {
                console.error('Error fetching program details:', error);
            } else if (data && data.length > 0 ) {
                return data as unknown as TProgramDetails[];
            }
    } catch (error: unknown) {
        console.error('Error fetching program details:', error);
    }
};

// GET THE PROGRAMS DISPLAYED ON THE PROGRAMS PAGE INCLUDING THUMBNAILS
export const getPrograms = async (limit: number) => {
    try {
        const { data: programs, error } = await supabase
        .from('programs')
        .select('id,title,details,program_length,workout_duration,equipment,specialization,difficulty,user_id').eq('explore', true).limit(limit);
        if (error) {
            console.error('Error fetching explore page programs:', error);
        } else if (programs && programs.length > 0 ) {

            const programsWithThumbnails = await Promise.all(
                programs.map( async (program) => {
                    const thumbnail = await getProgramThumbnailByID(program.id);
                    return {...program, thumbnail};
                })
            );

            return programsWithThumbnails as unknown as TProgram[];
        }
    } catch (error: unknown) {
        console.error('Error fetching explore page programs:', error);
    }
};

// GET A SPECIFIC PROGRAM BY PROGRAM ID
export const getProgramByID = async (program_id: string) => {
    try {
        const { data, error } = await supabase
        .from('programs')
        .select('id,title,details,program_length,workout_duration,equipment,specialization,difficulty,user_id').eq("id",program_id);
        if (error) {
            console.error('Error fetching explore page programs:', error);
        } else if (data && data.length > 0 ) {
            console.log("data",data);
            return data as unknown as TProgram[];
        }
    } catch (error: unknown) {
        console.error('Error fetching explore page programs:', error);
    }
};

// CHECK IF A PROGRAM THUMBNAIL EXISTS IN USERS S3 STORAGE FOLDER (PROGRAM Exists ?)
export const getProgramThumbnailStatus = async (id?: string) => {

    try {
        const { data, error } = await supabase.storage.from('programs').list(id , {
            limit: 100,
            offset: 0,
            sortBy: { column: 'name', order: 'asc' },
        });
        if (error) {
            console.error('Error checking program thumbnail exists:', error);
            return null;
        } else {
            return data[0]?.name || null;
        }
    } catch ( error: unknown) {
        console.error('Error checking program thumbnail exists',error);
        return [];
    }
};



// GET PROGRAM THUMBNAIL FOR A PROGRAM VIA UUID
export const getProgramThumbnailByID = async (id: string) => {
    try {
            const fileName = await getProgramThumbnailStatus(id);
            if (fileName !== null  && fileName.length > 0) {
                const { data, error } = await supabase.storage.from('programs').download(id + "/" + fileName);
                if (error) {
                    console.error('Error fetching program thumbnail:', error);
                    return null;
                } else {
                    return data;
                }
            }
    } catch (error: unknown) {
        console.error('Error fetching program thumbnail:', error);
    }
};
