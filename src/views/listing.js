import axios from 'axios'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ListItem from './listItem'
import LazyLoad from 'react-lazy-load'

export default function Listing() {
    const application = useSelector(state => state.reducer)
    const dispatch = useDispatch()

    const getData = async () => {
        const fetchData1 = await axios.get('./CONTENTLISTINGPAGE-PAGE1.json')
        const fetchData2 = await axios.get('./CONTENTLISTINGPAGE-PAGE2.json')
        const fetchData3 = await axios.get('./CONTENTLISTINGPAGE-PAGE3.json')

        const listData = await axios.all([fetchData1, fetchData2, fetchData3])
        let data = listData.map(item => {
            return item.data.page['content-items'].content
        })

        dispatch({
            type: 'SET_DATA',
            payload: data.flat()
        })
    }

    React.useEffect(() => {
        getData()
    }, [])

    return (
        <section className="list-container">
            {application.data.length && (
                application.data.map((item, idx) => {
                    return (
                        <LazyLoad height={200}>
                            <ListItem key={idx} item={item} />
                        </LazyLoad>
                    )
                })
            )}
        </section>
    )
}