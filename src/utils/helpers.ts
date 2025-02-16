export function convertSupabaseDateToReadable(inputDate: string | undefined): string {

    let formattedDate = "";
    if (inputDate) {
        const date = new Date(inputDate);
        const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
        formattedDate = date.toLocaleDateString('en-US', options);
    }

    return formattedDate;
}
