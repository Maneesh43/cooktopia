import RecipeCard from "../RecipeCard";
import useFetch from '../../../custom_hooks/useFetch';
import {useState} from  'react'


const Recipes = ({ recipeClassName }) => {

const[more,setmore]=useState(true)
	const url = "http://44.238.74.165:5000/recipes/random";
	let recipesData = useFetch(url, {})
	let recipearray;

if(!recipesData.loading){
	recipearray=recipesData.response.recipes
}
	return (
		<>
			{!recipesData.loading &&

			

				<>
					<div className="recipes-otd">
						<div className="max-width-cont">
							<div className="heading">
								<h3 role="heading" aria-label="Today's recipes">Recipes of Today</h3>
							</div>
							<div className="subheading">
								<p>
									<b aria-label="Cooktopia recommended ">Try CookTopia's</b> daily <b>recommended dishes.</b>
								</p>
							</div>
							<div className="recipes-otd-listing">
								{
									(more?recipearray.slice(0,3):recipearray).map((data, index) => {
										return (
											<RecipeCard
												key={index}
												recipeData={data}
											/>
										)
									})
								}
							</div>
							<div className="recipes-otd-load-more-btn-cont">
								<button role="button" aria-label="load more" title="load more" onClick={()=>{setmore(!more)}} className="recipes-otd-load-more-btn" type="button">
									{more?"load more":"show few"}
								</button>
							</div>
						</div>
					</div>
				</>

			}
		</>

	);
}

export default Recipes;
