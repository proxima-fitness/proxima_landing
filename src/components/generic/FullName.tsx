"use client";

import { useUserFullName } from "@/api/hooks";

interface IProps {
    id: string;
    id_type: "program" | "user";
}

export const FullName: React.FC<IProps> = (props) => {

    const {
        id,
        id_type,
    } = props;

    const { data: fullName, isLoading: loadingFullName } = useUserFullName(id, id_type);

    if (loadingFullName) {
        return (
            <>Loading...</>
        );
    }

    return (
        <>
            { fullName }
        </>
    );
};
