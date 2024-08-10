import React from 'react';
import { customAxios } from '../../handlers/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const VermiPirata = (props) => {
    const {_id} = useParams();
    const [pirate, setPirate] = useState([])

    useEffect (() => {
        customAxios.get(`/api/pirates/${_id}`)
            .then(res => {
                console.log(res.data)
                setPirate(res.data)
            })
            .catch(err => {console.log(err)});
    }, [])


    return(
        <div>
            <div id="nav">
                <h1>{pirate.name}</h1>
                <Link to="/" className="btn btn-primary w-25 my-4 "
                style={{ padding: '10px 10px', height: '50px', width: '50px', border: '2px solid black'}}
                >
                Crew Board</Link>
            </div>
            <div className="d-flex justify-content-evenly my-5" id='tp'>
                <div>
                    <img src={pirate.imgURL} alt={pirate.name} id="foto"/>
                    <h1 className="text-center">{`${pirate.pirateCatchPhrase}`}</h1>
                </div>

                <div style={{ width: '530px'}}>
                    <h1 className="text-center">About</h1>
                    <table className="table table-light table-bordered table-active ">
                        <tbody>
                            <tr>
                                <th className="centered-header">Position: </th>
                                <td className="centered-cell">{pirate.crewPosition}</td>
                            </tr>
                            <tr>
                                <th className="centered-header">Treasures: </th>
                                <td className="centered-cell">{pirate.numberOfTreasureChests}</td>
                            </tr>
                            <tr>
                                <th className="centered-header">Peg Leg: </th>
                                <td className="centered-cell">
                                    {pirate.pegLeg ? 
                                    <span className="d-flex justify-content-around">
                                        <p>Yes</p>
                                        <button className="btn btn-danger w-22">No</button>
                                    </span>
                                    : <span className="d-flex justify-content-around">
                                        <p>No</p>
                                        <button className="btn btn-success w-22">Yes</button>
                                    </span>
                                    }
                                </td>
                            </tr>
                            <tr>
                                <th className="centered-header">Eye Patch: </th>
                                <td className="centered-cell">
                                    <div>
                                    {pirate.eyePatch ? 
                                    <span className="d-flex justify-content-around">
                                        <p>Yes</p>
                                        <button className="btn btn-danger w-22">No</button>
                                    </span>
                                    : <span className="d-flex justify-content-around">
                                        <p>No</p>
                                        <button className="btn btn-success w-22">Yes</button>
                                    </span>
                                    }
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th className="centered-header">Hook Hand: </th>
                                <td>
                                    {pirate.hookHand ? 
                                    <span className="d-flex justify-content-around">
                                        <p>Yes</p>
                                        <button className="btn btn-danger w-22">No</button>
                                    </span>
                                    : <span className="d-flex justify-content-around">
                                        <p>No</p>
                                        <button className="btn btn-success w-22">Yes</button>
                                    </span>
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default VermiPirata;