import {useState} from "react";

import {useRouter} from 'next/router'
const RegisterUser = (props) => {
    const router = useRouter()
    const [inputs, setInputs] = useState({
        phoneNum: "",
        houseNum: "",
        streetName: "",
        area: "",
        city: "",
        province: ""
    });

    const textStyle = {
        width: "100%",
        padding: "12px 20px",
        margin: "8px 0",
        display: "inline-block",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
        zIndex: "1000"
    }

    const email = props.email;
    const getUser = (email) => {
        let result
        fetch("https://hammerhead-app-an67q.ondigitalocean.app/api/users", {
            method: "POST",
            mode: 'no-cors',
            body: email
        }).then(async function (response) {
            result = await response
            console.log(result)
        })

    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            email:email,
            houseNum:inputs.houseNum,
            streetName: inputs.streetName,
            area:inputs.area,
            city: inputs.city,
            province: inputs.province,
            coordinates: [0,0],

        }
        console.log(formData)
        const res = await fetch("https://hammerhead-app-an67q.ondigitalocean.app/api/users", {
            method: "POST",
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(formData),
        }).then(async function (response) {
            const result = await response
            console.log(result)
        })
       // const res = await axios.post('https://hammerhead-app-an67q.ondigitalocean.app/api/users', formData);

    }

    const handleChange = (event) => {
        setInputs(
            {...inputs, [event.target.name]: event.target.value}
        )

    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    House Number
                    <input
                        type="tel"
                        value={inputs.houseNum}
                        style={textStyle}
                        placeholder={"89"}

                        maxLength={4}
                        pattern="[0-9]*"
                        onChange={handleChange}
                        name={"houseNum"}
                    />
                </label>
            </div>
            <div>
                <label>
                    Street Name
                    <input
                        value={inputs.streetName}
                        style={textStyle}
                        placeholder={"Kwacha Street"}
                        onChange={handleChange}
                        name={"streetName"}
                    />
                </label>
            </div>
            <div>
                <label>
                    Area
                    <input
                        value={inputs.area}
                        style={textStyle}
                        placeholder={"Nchanga South"}
                        onChange={handleChange}
                        name={"area"}
                    />
                </label>
            </div>
            <div>
                <label>
                    City
                    <input
                        value={inputs.city}
                        style={textStyle}
                        placeholder={"Chingola"}
                        onChange={handleChange}
                        name={"city"}
                    />
                </label>
            </div>
            <div>
                <label>
                    province
                    <input
                        value={inputs.province}
                        style={textStyle}
                        placeholder={"Chingola"}
                        onChange={handleChange}
                        name={"province"}
                    />
                </label>
            </div>


            <input
                    className={"mb-3"}
                    onClick={
                        ()=>router.push("/")
                    }
                    style={{backgroundColor: "black", color: "white", width: "100%"}} type="submit"
                   value={"Add address"}
            />
        </form>
    )
}

export default RegisterUser;
