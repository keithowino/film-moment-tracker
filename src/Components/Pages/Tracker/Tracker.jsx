import React, { useState } from 'react'
import './Tracker.css'
import { Components, data } from '../../../Constants'

const Tracker = () => {
    const [film, setFilm] = useState('');

    document.title = data.trackerTabTitle;

    let num = 0;

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

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const match = data.sortedFilmTitleArr.map((fitem) => {

        const filmList = data.films.map((sitem) => {
            if (sitem.title === fitem && sitem.title.includes(film.toLowerCase())) {
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
        <>
            <main className='mt-15 mx-3.5 mb-4'>
                <div>
                    <form onSubmit={handleSubmit} className='flex align-middle justify-center mb-2.5'>
                        <input
                            type="text"
                            value={film}
                            onChange={(e) => setFilm(e.target.value)}
                            placeholder="Solo Leveling"
                            className='p-0.5 font-medium bg-white border-none rounded-l-md'
                            required
                        />
                        <button type="submit" className='bg-[blue] text-white font-medium rounded-r-md pr-1.5 pl-1.5'>Enter title</button>
                    </form>
                </div>
                {/* <div> */}
                <div className='flex flex-col align-middle justify-center'>
                    <Components.FilmTable call="film-table" callId="tracker" totalDisplay={totalDisplay()} tableItems={match} />
                </div>
            </main>
        </>
    )
}

export default Tracker
