import { Link } from 'react-router-dom'

export default function FilmCard({ film }) {

    const { id, title, author, abstract, image } = film

    return (
        <>
            <div className="card mb-4">
                <img src={image} alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <span>
                        {author}
                    </span>
                    <p>
                        {abstract}
                    </p>
                    <Link to={`films/${id}`}>Read More</Link>
                </div>
            </div>

        </>
    )
}