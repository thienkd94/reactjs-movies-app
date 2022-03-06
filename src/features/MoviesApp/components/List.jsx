import React from 'react'
import Item from './Item'

function List(props) {
    const { listData, baseImageUrl } = props
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-7">
            {listData.length > 0 &&
                listData.map((item) => {
                    return <Item key={`${item.id}-${item.popularity}`} item={item} baseImageUrl={baseImageUrl} />
                })}
        </div>
    )
}

export default List
