import { Link } from 'react-router-dom'

function CategoryItem(props) {
	const { id, title, image } = props;
	<img src={image} alt={title} />

	return <div className="card">

		<div className="card-image">
			<img src={image} alt={title} />
		</div>

		<div className="card-content">
			<span className="card-title">{title.slice(0, 25)}...</span>
		</div>

		<div className='card-action'>
			<Link to={`/recipe/${id}`} className='btn'>Watch recipe </Link>
		</div>

	</div>
}



export { CategoryItem }