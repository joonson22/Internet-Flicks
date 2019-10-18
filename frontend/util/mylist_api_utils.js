export const fetchMylist = (id) => {
    return (
        $.ajax({
            method: "GET",
            url: `api/mylists/${id}`
        })
    )
} 