import React from 'react'
import './FilmTable.css'

const FilmTable = (props) => {

    let recolection = props.viewComplete === "yes" ? " was the last viewed season" : " sreaming pending or in process";

    const updateDisplays = (updateDisplay) => {
        if (updateDisplay === "title") {
            if (props.callId === "updates") {
                return (
                    <th>Genre</th>
                )
            }
        } else if (updateDisplay === "data") {

            if (props.update === "true") {
                return (
                    <td>{props.filmGenre}</td>
                )
            }

        }

    }

    const updateDataCellMoreInfoDis = (newVolCheck) => {
        let output;
        if (newVolCheck === "unknown") {
            output = "Update unknown."
        } else if (newVolCheck === "nill") {
            output = "No update."
        } else if (newVolCheck === "true") {
            output = "Update present."
        } else if (newVolCheck === "complete") {
            output = "End of stream."
        } else {
            output = ""
        }
        return output
    }

    const commentDataCellDis = (comment) => {
        let output;
        if (comment === "(d) dubbed") {
            output = "Dubbed version required ASP.";
        } else if (comment === "nill") {
            output = "No comment.";
        } else {
            output = "Comment.";
        }
        return output;
    };

    const buildTable = () => {
        if (props.call === "film-table") {
            return (
                <table className='bg-white'>
                    <thead className='bg-pink-700 text-white font-bold'>
                        <tr>
                            <th>{props.totalDisplay}</th>
                            <th>Title</th>
                            {updateDisplays("title")}
                            <th>Treasured</th>
                            <th>Last Stream</th>
                            <th>Completed</th>
                            <th title="New season/ volume">Update</th>
                            <th title='More'>&equiv;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.tableItems}
                    </tbody>
                </table>
            )
        } else if (props.call === "film-table-item") {

            return (

                <>
                    <tr className={props.newVolCheck === "no interest" ? "bg-neutral-300 text-neutral-100" : "hover:bg-pink-500 z-50"}>
                        <td>{props.itemNum}</td>
                        <td
                            title={props.filmTitle}
                            className={props.newVolCheck !== "no interest" ? "capitalize bg-blue-700 text-white font-medium" : "capitalize font-medium"}
                        >
                            {props.filmTitle.length > 30 ? props.filmTitle.slice(0, 31) + "..." : props.filmTitle}
                        </td>
                        {updateDisplays("data")}
                        <td className={props.treasureCellDisplay} title={props.treasured === "yes" ? "Favoured" : "No Stars"}>{props.treasured}</td>
                        <td title={props.viewProgress[0] === "s" ? props.viewProgress + recolection : props.viewProgress + recolection}>{props.viewProgress}</td>
                        <td title={props.viewComplete === "yes" ? props.viewProgress + " streaming completed" : props.viewProgress + " streaming not complete"}>{props.viewComplete}</td>
                        <td title={updateDataCellMoreInfoDis(props.newVolCheck)} className={props.NewVolCellDisplay}>{props.newVolCheck}</td>
                        <td className='flex justify-center items-center'>
                            <button type="button" className='dis-more-btn text-blue-700 font-bold text-xl cursor-pointer'>&dArr;</button>
                        </td>
                    </tr>
                    <tr className='hidden'>
                        <td colSpan={8}>
                            <table>
                                <thead className='bg-pink-700 text-white font-bold'>
                                    <tr>
                                        <th>Comment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td title={commentDataCellDis(props.comments)} className={props.commentCelDisplay} >{props.comments}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </>
            )
        }
    };

    return (
        <>
            {buildTable()}
        </>
    )
}

export default FilmTable
