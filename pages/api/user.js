
import axios from "axios";
export default function handler(req, res) {
    console.log("yo")
    let result = {}
    const email = JSON.parse(req.body)
    fetch("https://hammerhead-app-an67q.ondigitalocean.app/api/users", {
        headers:{
            'Content-Type': 'application/json'
        },
        mode: 'no-cors',
        method: "POST",
        body: JSON.stringify(email),
    }).then(async function (response) {
        result = await response.json()
        res.status(200).json(result)
    })

}
