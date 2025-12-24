import React from 'react'
import './Anime.css'
import { Components, data } from '../../../Constants';

const Anime = () => {

    let num = 0;
    let pageId = "anime";

    document.title = data.animeTabTitle;

    const totalDisplay = () => {
        let output;
        if (num === 1) {
            output = num + " Item";
        } else if (num > 1) {
            output = num + " Items";
        } else {
            output = "***";
        }
        return output;
    };

    const filmData = data.sortedFilmTitleArr.map((fitem) => {

        const filmList = data.films.map((sitem) => {
            if (sitem.title === fitem && sitem.genre === "anime") {
                return (
                    <Components.FilmTable
                        key={sitem.title}
                        call="film-table-item"
                        filmTitle={sitem.title}
                        newVolCheck={sitem['new volume']}
                        itemNum={++num}
                        treasureCellDisplay={data.treasureCellDisplay(sitem.treasure, sitem['new volume'])}
                        treasured={sitem.treasure}
                        viewProgress={sitem['last stream']}
                        viewComplete={sitem.completed}
                        NewVolCellDisplay={data.NewVolCellDisplay(sitem['new volume'])}
                        commentCelDisplay={data.commentCelDisplay(sitem['new volume'], sitem.comment)}
                        comments={sitem.comment}
                    />
                )
            }
        })

        return filmList
    })

    return (
        <main className='mt-15 mx-3.5 mb-4'>
            <div className='flex flex-col align-middle justify-center'>
                <Components.ModularDivA pageId={pageId} />
                <Components.FilmTable call="film-table" callId="anime" totalDisplay={totalDisplay()} tableItems={filmData} />
            </div>
        </main>
    )
}

export default Anime
