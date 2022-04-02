export const linkAdded  = (oriLink, shortenLink) => {
    return {
        type : 'ADDED_LINK',
        payload: {
            oriLink,
            shortenLink
        }
    }
}

export const linkCopied = (id) => {
    return {
        type : 'COPIED_LINK',
        payload: {
            id
        }
    }
}