import React, {useState} from "react";
import styled from "styled-components";
import tw from "twin.macro";


export default function Forms() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email:"",
        textarea:"",
        checkBox:false,
        options: "",
        favColor:""
    })


    function handleChange(e) {
        const {name, value, type, checkBox} = e.target
        setFormData(prev => {
            //only to check if checkbox is true or false
            return {
                ...prev,
                [name]:type === "checkBox" ? checkBox : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        //
        // submitToApi(formData)
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="first name"
                    onChange={handleChange}
                    //name is value of state
                    name="firstName"
                    //value is a controlled component
                    value={setFormData.firstName}
                />
                <input
                    type="text"
                    placeholder="first name"
                    onChange={handleChange}
                    name="lastName"
                    value={setFormData.lastName}
                />
                <input
                    type="text"
                    placeholder="first name"
                    onChange={handleChange}
                    name="email"
                    value={setFormData.email}
                />
                <textarea
                    placeholder="text"
                    onChange={handleChange}
                    name="textarea"
                    value={setFormData.value}
                />
                <input
                    type="checkbox"
                    //id must match with htmlFor
                    id="checkBoxxx"
                    checked={formData.checkBox}
                    onChange={handleChange}
                    name="checkBox"
                />
                <label htmlFor="checkBoxxx">I am not a robot</label>
                <fieldset>
                    <legend>Options</legend>
                    <input
                        type="radio"
                        id="option1"
                        name="options"
                        //value is the console.log value
                        value="option1"
                        onChange={handleChange}
                        checked={formData.options === "option1"}
                    />
                    <label htmlFor="option1">option 1</label>
                    <br/>
                    <input
                        type="radio"
                        id="option2"
                        name="options"
                        value="option2"
                        onChange={handleChange}
                        checked={formData.options === "option2"}

                    />
                    <label htmlFor="option2">option 2</label>
                    <br/>
                    <input
                        type="radio"
                        id="option3"
                        name="options"
                        value="option3"
                        onChange={handleChange}
                        checked={formData.options === "option3"}

                    />
                    <label htmlFor="option3">option 3</label>
                    <br/>

                    <label htmlFor="favColor">Favorite color?</label>
                    <br />
                    <select
                        id="favColor"
                        value={formData.favColor}
                        onChange={handleChange}
                        name="favColor"
                    >
                        <option value="">-- Choose --</option>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="indigo">Indigo</option>
                        <option value="violet">Violet</option>
                    </select>

                    <br />
                    <br />
                    //If button if found inside of form, it will trigger handleSubmit
                    <button>Submit</button>

                </fieldset>
            </form>
        </>
    )
}
