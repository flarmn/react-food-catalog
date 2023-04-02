import { useEffect, useState } from "react";
import {useParams, Link} from  'react-router-dom'
import { getRecipeById } from "../api"
import {Preloader} from "../components/Preloader"

function Recipe(){
    const {id} = useParams(); 
    const [recipe, setRecipe] = useState({});
    //const {goBack} = useHistory(); 

    useEffect( ()=>{
        getRecipeById(id).then( data => setRecipe(data))
    }, [id]);
    return <>
        <Link to={-1} className = "btn">Go back</Link>
        {
            !recipe.id ? <Preloader /> : (
                <div className="recipe-container">
                    <img src = {recipe.image} alt={recipe.title}/>
                    <h2>{recipe.title}</h2>
                    <div dangerouslySetInnerHTML={{__html: `${recipe.summary}` }} />
                    <h3>Recipe</h3>
                   
                    <div dangerouslySetInnerHTML={{__html: `${recipe.instructions}` }} className = "recipe-text" />
                </div>
            )
        }
    </>
}

export {Recipe}