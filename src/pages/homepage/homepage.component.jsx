import React from 'react'
import './homepage.styles.scss'

import Directory from '../../components/directory/directory.component'

const HomePage = (props) => {
    return (
        <div className='homepage'>
            <h1>hello 阿寶, 隨便買入我數 XD</h1>
            <Directory />
        </div>
    )
}

export default HomePage;