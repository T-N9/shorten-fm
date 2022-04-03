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

export const linkDeleted = (id) => {
    return {
        type : 'DELETED_LINK',
        payload: {
            id
        }
    }
}

export const copyResolved = () => {
    return {
        type : 'RESOLVED_COPY',
    }
}