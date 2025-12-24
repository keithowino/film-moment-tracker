import { Components, data } from '../../../Constants'
import './Home.css'

const Home = () => {

    document.title = data.homeTabTitle;

    return (
        <div className="home">
            <Components.Hero heroStatA="SIGMA EGO" />
            <main>
                <Components.FavFilms />
            </main>
        </div>
    )
}

export default Home