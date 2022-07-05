import {useState} from "react";

import {useRouter} from 'next/router'
const RegisterUser = (props) => {

    const router = useRouter()
    const submitBtn = props.submitBtn

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
            address: [
                {
                    houseNum: inputs.houseNum,
                    streetName: inputs.streetName,
                    area: inputs.area,
                    city: inputs.city,
                    province: inputs.province,
                    coordinates: [0, 0],
                }
            ]

        }
        console.log(formData)
        submitBtn(true)
        const res = await fetch("api/user", {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(formData),
        }).then(
            //async function (response) {
           // const result = await response.json()
          //  console.log(result)
          //  if (result.message === "user updated")
         //   {
          //      router.push("/")
          //  }
        //}
           // response => console.log(response.body)
            async function (response) {
                const result = await response.json()
                if(result.message ==="user updated"){
                    router.push("/")
                }else{
                    console.log("failed")
                }
            }
        )
            .then(data => console.log(data))
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
                        required
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
                        required
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
                        required
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
                        required
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
                        required
                    />
                </label>
            </div>


            <input
                    className={"mb-3"}

                    style={{backgroundColor: "black", color: "white", width: "100%"}} type="submit"
                   value={"Add address"}
                    required
            />
        </form>
    )
}

export default RegisterUser;
