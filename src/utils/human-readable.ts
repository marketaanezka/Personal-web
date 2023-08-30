export const unixToDate = (unix: number) => {
    const date = new Date(unix * 1000);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`
}