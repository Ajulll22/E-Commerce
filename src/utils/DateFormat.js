const showFormattedDate = (date) => {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }
    return new Date(date).toLocaleDateString("id-ID", options)
}

const dateToId = (date) => {
    return new Date(date).toLocaleDateString('sv').replaceAll('-', '');
}

export { showFormattedDate, dateToId }