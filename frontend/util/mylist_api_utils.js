export const fetchMylist = () => {
    return (
        $.ajax({
            method: "GET",
            url: 'api/mylists'
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