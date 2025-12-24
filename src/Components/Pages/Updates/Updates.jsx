import React from 'react'
import './Updates.css'
import { Components, data } from '../../../Constants'

const Updates = () => {

    document.title = data.updatesTabTitle;

    let num = 0;
    let pageId = "updates";

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

    const updated = data.sortedFilmTitleArr.map((fitem) => {

        const filmList = data.films.map((sitem) => {
            if (sitem.title === fitem) {
                if (sitem['new volume'] === "true" || sitem['new volume'] === "unknown" || sitem.comment === "(d) dubbed") {
                    return (
                        <Components.FilmTable
                            key={sitem.title}
                            call="film-table-item"
                            filmTitle={sitem.title}
                            filmGenre={sitem.genre}
                            update="true"
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
            }
        })

        return filmList
    })

    return (
        <main className='mt-15 mx-3.5 mb-4'>
            <div className='flex flex-col align-middle justify-center'>
                <Components.ModularDivA pageId={pageId} />
                <Components.FilmTable call="film-table" callId="updates" totalDisplay={totalDisplay()} tableItems={updated} />
            </div>
        </main>
    )
}

export default Updates
