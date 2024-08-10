import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

const Main = (props) => {
    const [pirates, setPirates] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates/all")
        .then (res => {
            console.log(res.data)
            setPirates(res.data)
        })
        .catch (err => console.log(err))
    }, [])

    const onDeleteHandler = (_id, arrIndex) => {
        console.log("delete")
        axios.delete("http://localhost:8000/api/pirates/" + _id)
            .then(res => {
                console.log(res)
                const copyState = [...pirates]
                copyState.splice(arrIndex, 1)
                setPirates(copyState)
            })
            .catch(err => console.log(err.response))
    }

    return(
        <div className="body">
            <div id="nav">
            <h1 className="text-white fw-bold rounded-text center">Pirate Crew</h1>
            <Link to="/create" className="btn btn-primary w-25 my-4 border: 2px solid black">Add a Pirate</Link>
            </div>

            <div id="content">
                {
                    pirates.sort((a,b) => {
                        var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                        if (nameA < nameB) 
                            return -1;
                        if (nameA > nameB)
                            return 1;
                        return 0;
                    }).map((item, i) => {
                        return <div className="d-flex justify-content-around my-3" key={i} id="single">
                        <img src={item.imgURL} alt={item.name} id="foto"/>
                        <div className="d-flex flex-column my-5">
                            <h2 className="text-center fw-bold fs-1">{item.name}</h2>

                            <div className="d-flex justify-content-around">
                                <Link to={`/pirate/${item._id}`} 
                                className="btn btn-primary w-450 mx-3 mt-3" id = "viewbutton" >
                                    View Pirate
                                </Link>
                                <button id = "deletebutton" className="btn btn-danger w-450 mt-3" 
                                onClick={() => onDeleteHandler(item._id, i)}>
                                    Walk the Plank
                                </button>
                            </div>

                        </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Main;