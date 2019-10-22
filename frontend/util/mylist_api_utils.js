export const fetchMylist = (id) => {
    return (
        $.ajax({
            method: "GET",
            url: `api/mylists/${id}`
        })
    )
}

export const createMylist = (data) => {
    return(
        $.ajax({
            method: "POST",
            url: 'api/mylists',
            data
        })
    )
}

export const deleteMylist = (id) => {
    return(
        $.ajax({
            method: "Delete",
            url: `api/mylists/${id}`
        })
    )
}