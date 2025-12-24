import React from 'react'
import './Other.css'
import { Components, data } from '../../../Constants';

const Other = () => {

    document.title = data.otherTabTitle;

    let num = 0;
    let pageId = "other";

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

    const otherGenre = data.sortedFilmTitleArr.map((fitem) => {

        const filmList = data.films.map((sitem) => {
            if (sitem.title === fitem && sitem.genre === "other") {
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
                <Components.FilmTable call="film-table" callId="other" totalDisplay={totalDisplay()} tableItems={otherGenre} />
            </div>
        </main>
    )
}

export default Other
