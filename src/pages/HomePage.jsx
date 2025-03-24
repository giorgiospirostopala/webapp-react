// import FilmPage from "./FilmPage";
import FilmCard from "../components/FilmCard";


export default function HomePage() {
    return (
        <>
            <h1 className="pt-5 text-primary">Filmoora</h1>
            <h3 className="pt-2">Tutti i film a tua portata.</h3>
            <div className="row row-col-3">
                <FilmCard />
            </div>
        </>
    )
}