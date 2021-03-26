import React, { useEffect } from 'react'
import axios from 'axios'
const DetailQuran = (props) =>{
    const [detailSurat,setDetailSurat] = React.useState([])
    useEffect(()=>{
        axios.get(`https://al-quran-8d642.firebaseio.com/surat/${props.nomor}.json?print=pretty`)
        .then(response => {
            console.log(response.data)
            setDetailSurat(response.data)
        })
    },[setDetailSurat])
    return(
        <React.Fragment>
            <div>
               {detailSurat.map((surat,i)=>(
                   <div key={i}>
                       {surat.ar}
                   </div>
               ))}
            </div>
        </React.Fragment>
    )
}

export default DetailQuran