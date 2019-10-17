export const SEARCH_TEXT = "SEARCH_TEXT";

export const updateSearch = (search) => {
    return({
        type: SEARCH_TEXT,
        search
    })
}