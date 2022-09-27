import React from 'react'
import { useEffect } from 'react'

export default function Archive() {
    useEffect(() => {
        document.title = 'Архив';
    })
    return (
        <div className='archive'>
            <div className='container'>

            </div>
        </div>
    )
}
