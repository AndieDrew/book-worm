export interface State {
    list: {
    displayName: string,
    queryName: string
    }[] | [],
    error: string,
    favorites: SingleBook[] | []
}

export interface ListProps {
    list: {
    displayName: string,
    queryName: string
    }[]
}

export interface BookshelfProps  {
    queryID?: string,
    favoritesHeader?: string,
    favoriteBooks?: SingleBook[] | null,
    addToFavorites?: (book: SingleBook) => void
}

export interface SingleBook {
    rank: number,
    publisher: string,
    description: string,
    title: string,
    author: string,
    bookImage: string,
    amazonProductUrl: string,
    id: string
}

export interface BookProps {
    title: string,
    author: string,
    rank: number,
    bookImage: string,
    id: string,
    handleClick: (id: string) => void
}

export interface BookshelfState {
    books: SingleBook[] | [],
    error: boolean
}