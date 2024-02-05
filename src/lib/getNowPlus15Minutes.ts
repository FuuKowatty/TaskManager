export const blockPreviousDates = () => {
    return new Date().toISOString().split("T")[0];
}