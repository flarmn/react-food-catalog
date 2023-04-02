import {useParams, Link} from  'react-router-dom'

function Movies(){
    console.log( useParams() )
   
    return <>
         <h1> Some movies </h1>


         <Link to={-1}>
            <button >← Back </button>
        </Link>
    </>
   
}

export {Movies};