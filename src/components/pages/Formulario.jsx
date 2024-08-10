import React from "react";

const Form = (props) => {
    const { form, onSubmitProp, onChangeHandlerProp, errorProp } = props;

    return (
        <div className="container">
        <div
        className="d-flex justify-content-center">
        </div>
        <form onSubmit={onSubmitProp} 
        className="needs-validation">
            {errorProp.map((err, index) => (
            <div className="alert alert-danger" key={index}>
                {err}
            </div>
            ))}

            <div className="row">
            <div className="col-md-6">
                <div className="mb-3">
                <label htmlFor="InputName">Pirate Name:</label>

                <input
                    type="text"
                    className="form-control"
                    id="InputName"
                    name="name"
                    onChange={onChangeHandlerProp}
                    value={form.name || ""}
                />
                {form.name?.length === 0 ? (
                    ""
                ) : form.name?.length < 3 ? (
                    <span className="text-danger">
                    ¡El nombre del pirata debe tener al menos 3 letras!
                    </span>
                ) : (
                    ""
                )}
                </div>
                <div className="mb-3">
                <label htmlFor="InputImgURL" className="col-sm-4 col-form-label">
                    Image URL:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="InputImgURL"
                    name="imgURL"
                    onChange={onChangeHandlerProp}
                    value={form.imgURL || ""}
                />
                {form.imgURL?.length === 0 ? (
                    ""
                ) : form.imgURL?.length < 2 ? (
                    <span className="text-danger">
                    Se debe indicar la URL de la imagen de nuestro pirata.
                    </span>
                ) : (
                    ""
                )}
                </div>
                <div className="mb-3">
                <label
                    htmlFor="InputNumberOfTreasureChests"
                    className="col-sm-4 col-form-label"
                >
                    # of Treasure Chests:
                </label>
                <input
                    type="number"
                    className="form-control"
                    style={{ width: '70%', maxWidth: '160px', overflow: 'scroll' }} 
                    id="InputNumberOfTreasureChests"
                    name="numberOfTreasureChests"
                    onChange={onChangeHandlerProp}
                    value={form.numberOfTreasureChests || ""}
                />
                {form.numberOfTreasureChests === 0 ? (
                    ""
                ) : form.numberOfTreasureChests < 1 ? (
                    <span className="text-danger"
                    >
                    Se debe indicar la cantidad de cofres.
                    </span>
                ) : (
                    ""
                )}
                </div>
                <div className="mb-3">
                <label
                    htmlFor="InputPirateCatchPhrase"
                    className="col-sm-4 col-form-label"
                >
                    Pirate Catch Phrase:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="InputPirateCatchPhrase"
                    name="pirateCatchPhrase"
                    onChange={onChangeHandlerProp}
                    value={form.pirateCatchPhrase || ""}
                />
                {form.pirateCatchPhrase?.length === 0 ? (
                    ""
                ) : form.pirateCatchPhrase?.length < 4 ? (
                    <span className="text-danger">
                    ¡Una frase de pirata debe ser memorable al menos 4 letras!
                    </span>
                ) : (
                    ""
                )}
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-3">
                <label htmlFor="Select" className="col-sm-4 col-form-label">
                    Crew Position:
                </label>

                <select
                    className="form-select"
                    aria-label="Default select example"
                    name="crewPosition"
                    onChange={onChangeHandlerProp}
                    value={form.crewPosition || ""}
                >
                    <option disabled>Select a Crew Position</option>
                    <option>Captain</option> 
                    <option>First Mate</option>
                    <option>Quarter Master</option>
                    <option>Boatswain</option>
                    <option>Powder Monkey</option>
                </select>

                </div>
                <div className="mb-3">

                <div className="form-check">
                    <input
                    className="form-check-input"
                    type="checkbox"
                    id="pegLeg"
                    onChange={onChangeHandlerProp}
                    name="pegLeg"
                    checked={form.pegLeg || false}
                    />
                    <label className="form-check-label" htmlFor="pegLeg">
                    Peg Leg
                    </label>
                </div>

                <div className="form-check">
                    <input
                    className="form-check-input"
                    type="checkbox"
                    id="eyePatch"
                    onChange={onChangeHandlerProp}
                    name="eyePatch"
                    checked={form.eyePatch || false}
                    />
                    <label className="form-check-label" htmlFor="eyePatch">
                    Eye Patch
                    </label>
                </div>

                <div className="form-check">
                    <input
                    className="form-check-input"
                    type="checkbox"
                    id="hookHand"
                    onChange={onChangeHandlerProp}
                    name="hookHand"
                    checked={form.hookHand || false}
                    />
                    <label className="form-check-label" htmlFor="hookHand">
                    Hook Hand
                    </label>
                </div>
                </div>
                <div className="d-flex justify-content-center">
                <input
                    type="submit"
                    className="btn btn-primary btn-lg w-50"
                    id="botonsubmit"
                    value="Add Pirate"
                />
                </div>
            </div>
            </div>
        </form>
        </div>
    );
    };

    export default Form;
