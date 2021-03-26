import React, { useEffect } from 'react'
import axios from 'axios'
import detailQuran from './detailSurat'

const Quran = () => {
    const [namaQurans,setNamaQuran] = React.useState([])
    const [nomor,setNomor]= React.useState([

    ])

    useEffect(()=>{
        axios.get("https://al-quran-8d642.firebaseio.com/data.json?print=pretty")
        .then(response => {
            console.log(response.data)
            setNamaQuran(response.data)
        })
    },[setNamaQuran])

   
  
    return(
        <React.Fragment>
            <div>
               {namaQurans.map((namaQuran,i)=>(
                   <div key={i}>
                       {namaQuran.asma}
                       {namaQuran.arti}
                       <button value={namaQuran.nomor} onClick={ e => setNomor(e.target.value)}></button>
                   </div>
               ))}
            </div>
        </React.Fragment>
    )
}

export default Quran
