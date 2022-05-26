import React, {useState} from "react";
import styled from "styled-components";
import tw from "twin.macro";


export default function Forms() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email:"",
        textarea:""
    })

    console.log(formData)

    function toggle(e) {
        setFormData(prev => {
            return {
                ...prev, [e.target.formData]:e.target.value
            }
        })
    }

    return (
        <>
            <form>
                <input
                    type="text"
                    placeholder="first name"
                    onChange={toggle}
                    //name is value of state
                    name="firstName"
                    //value is a controlled componet
                    value={setFormData.firstName}
                />
                <input
                    type="text"
                    placeholder="first name"
                    onChange={toggle}
                    name="lastName"
                    value={setFormData.lastName}
                />
                <input
                    type="text"
                    placeholder="first name"
                    onChange={toggle}
                    name="email"
                    value={setFormData.email}
                />
                <textarea
                    placeholder="text"
                    onChange={toggle}
                    name="textarea"
                    value={setFormData.value}
                />
            </form>
        </>
    )
}
