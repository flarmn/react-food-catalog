import {useState, useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import { getAllCategories } from "../api";
import {Preloader} from "../components/Preloader"
import { CategoryList } from '../components/CategoryList';
import { Search } from '../components/Search'


function Home(){
    const [catalog, setCatalog] = useState([]);

    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const { pathname, search } = useLocation();
   // const {push} = useNavigate();
    const navigate = useNavigate();

    const handelSearch = (str) => {
        console.log("str", str, catalog);
        let sh = str
        setFilteredCatalog(
            catalog.filter( item => item.title.toLowerCase().includes(sh.toLowerCase()) )
        );

        navigate(`${pathname}?search=${str}`);
    }

    useEffect (() => {
        getAllCategories().then(data => {
            console.log(data)
            setCatalog(data.results)
            setFilteredCatalog( search 
                ? data.results.filter( item => item.title.toLowerCase().includes( search.split("=")[1].toLowerCase() ) ) 
                : data.results 
            ) 
        })
       
       
    }, [search])
    return <>
        <Search cb = {handelSearch} />
        {!catalog.length 
        ? <Preloader /> 
        : ( <CategoryList catalog = {filteredCatalog} /> )}
    </>
}

export {Home};