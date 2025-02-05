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
