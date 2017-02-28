export function authorsFormattedForDropdown(authors) {
    if (!authors) {
        return;
    }

    return authors.map(author => {
        return {
            value: author.id,
            text: `${author.firstName} ${author.lastName}`
        };
    });
}
