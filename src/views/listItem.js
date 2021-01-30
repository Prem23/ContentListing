import React from 'react'

export default function ListItem({ item }) {

    return (
        <div className="list-item">
            <img src={`./${item['poster-image']}`} alt="content" />
            <div className="img-title">{item.name}</div>
        </div>
    )
}