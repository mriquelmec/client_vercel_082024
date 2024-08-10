import React, { useState } from 'react';
import Form from '../pages/Formulario';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Create = (props) => {
    const [form, setForm] = useState({
        name: "",
        imgURL: "",
        crewPosition: "Captain",
        numberOfTreasureChests: null,
        pirateCatchPhrase: "",
        pegLeg: true,
        eyePatch: true,
        hookHand: true,
    });

    const [errors, setErrors] = useState([]); 
    const navigate = useNavigate();

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        });
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8000/api/pirates/create", form)
            .then(res => {
                console.log(res);
                navigate("/pirates");  
            })
            .catch(err => {
                console.error('Error response:', err.response);
                const errorResponse = err.response?.data?.err?.errors || {};
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            });
    };

    return (
        <div>
            <div id="nav">
                <h1 className="text-white fw-bold rounded-text" style ={{textAlign: "center"}}>Add a Pirate</h1>
                <Link to="/" className="btn btn-primary w-25 my-4">Crew Board</Link>
            </div>
            <div className="my-5">
                <Form form={form} 
                onChangeHandlerProp={onChangeHandler} 
                onSubmitProp={onSubmitHandler} 
                errorProp={errors}/> 
            </div>
        </div>
    );
};

export default Create;

