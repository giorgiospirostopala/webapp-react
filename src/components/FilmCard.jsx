import { Link } from 'react-router-dom';

export default function FilmCard() {
    return (
        <>
            <div className="card mb-4">
                <div className="card-body">
                    <figure>
                        <img src="" alt="Copertina del film" />
                    </figure>
                    <h5 className="card-title">Titolo</h5>
                    <span>Regia</span>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda officia minus, tempora totam porro architecto nobis accusamus laudantium ad? Officiis assumenda debitis facilis inventore suscipit unde ab sunt labore error.
                    </p>
                    <Link to={'films/2'}>Scopri</Link>
                </div>
            </div>
        </>
    );
}