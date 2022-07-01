import {useState} from "react";


const RegisterUser = () => {
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
    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await fetch("/api/services/mobilemoney", {
            method: "POST",
            body: JSON.stringify({
                network: inputs.network,
                mobileNumber: inputs.phoneNum,
            }),
        })
    }

    const handleChange = (event) => {
        setInputs(
            {...inputs, [event.target.name]: event.target.value}
        )

    }


    return (
        <form>
            <div>
                <label>
                    House Number
                    <input
                        value={inputs.houseNum}
                        style={textStyle}
                        placeholder={"89"}
                        type={"text"}
                        maxLength={4}
                        pattern="[0-9]*"
                        onChange={handleChange}
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
                    />
                </label>
            </div>


            <input
                    className={"mb-3"}
                    style={{backgroundColor: "black", color: "white", width: "100%"}} type="submit"
                   value={"Add address"}
            />
        </form>
    )
}

export default RegisterUser;
