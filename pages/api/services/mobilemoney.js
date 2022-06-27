import Rave from "flutterwave-node-v3"

export default async function handler(req, res) {
    let result ={}
    let statusCode = 200
    console.log(req.body)
    try {

        const flw = new Rave(process.env["FLW_PUBLIC_KEY"], process.env["FLW_SECRET_KEY"]);
        const payload = {
            "tx_ref": "MC-15852113s09v5050e8",
            "amount": "1",
            "currency": "ZMW",
            "email": "tehillahkangamba@gmail.com",
            "phone_number": "0966780987",
            "fullname": "Tehillah Kangamba",
            "order_id": "URF_MMGH_1585323540079_5981535"

        }
        const response = await flw.MobileMoney.zambia(payload)
        result = response
    } catch (e) {
        statusCode = 400
        console.log("failed")

    }
    res.status(statusCode).json(result)
}
