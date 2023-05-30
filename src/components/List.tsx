import React, { FC } from 'react'


interface ListProps<T>{
    items: T[];
    renderItem: (item: T) => React.ReactNode
}
export default function List<T>(props: ListProps<T>) {
    const {items, renderItem} = props
    return(
        <div>
            {items.map(renderItem)}
        </div>
    )
}