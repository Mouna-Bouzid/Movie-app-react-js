import React from 'react'
import './loading.css'

const loadingHoc = (Component) =>{
    return function loadingHoc({loading,...p}) {
        return (
        (loading) ? <div className="load"></div> : <Component {...p}/>
    )
}
}
export default (loadingHoc);