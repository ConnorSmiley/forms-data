import React, {useState} from "react";
import styled from "styled-components";
import tw from "twin.macro";


export default function Forms() {
    const [name, setName] = useState({firstName: "", lastName: ""})

    console.log(name)

    function toggle(e) {
        setName(prev => {
            return {
                ...prev, [e.target.name]:e.target.value
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
                    name="firstName"
                />
                <input
                    type="text"
                    placeholder="first name"
                    onChange={toggle}
                    name="lastName"
                />
            </form>
        </>
    )
}
