const axios = require("axios");
const { param } = require("../Routers/axios");

module.exports.axiosGet = async (req, res) => {
    const header = req.headers.header;
    // console.log(header)
    try {
        const getInformation = await axios.get("https://rest.coinapi.io/v1/exchangerate/ETH/USD", {
            headers: {
                "X-CoinAPI-Key": header, // Include the API key in the request headers
            },



        })
        // console.log(getInformation)
        return res.status(200).send(getInformation.data)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports.getData = async (req, res) => {
    try {
        const getData = await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(getData)
        return res.status(200).send(getData.data)
    } catch (error) {
        return res.status(401).json(error.message)
    }
}


module.exports.postData = async(req, res) => {
    const {title, userId, body} = req.body;
    try {
        const getData = await axios.post("https://jsonplaceholder.typicode.com/posts", {
            title,
            userId, 
            body
        })
        console.log(getData)
        return res.status(200).send(getData.data)
    } catch (error) {
        return res.status(401).json(error.message)
    }
}

module.exports.getById = async(req, res) => {
    const id = req.params.id;
    console.log(id)
    try {
        const getData = await axios.get("https://jsonplaceholder.typicode.com/posts", {
            params: {
                id : id
            }
        })
      
        return res.status(200).send(getData.data)
    } catch (error) {
        return res.status(401).json(error.message)
    }
}

module.exports.updateData = async(req, res) => {
    const title = req.body.title;

    try {
        const getData = await axios.patch("https://jsonplaceholder.typicode.com/posts/1", {
            title: title
        })
      
        return res.status(200).send(getData.data)
    } catch (error) {
        return res.status(401).json(error.message)
    }
}


module.exports.postData1 = async(req, res) => {
    const {username, phoneNo, age, job, description} = req.body;
    try {
        const getData = await axios.post("https://ca4402a661e1525f2d2c.free.beeceptor.com/api/users/", {
            username, phoneNo, age, job, description
        })
        return res.status(200).send(getData.data)
    } catch (error) {
        return res.status(401).json(error.message)
    }
}

module.exports.getData1 = async(req, res) => {
    try {
        const getData = await axios.get("https://ca4402a661e1525f2d2c.free.beeceptor.com/api/users/",)
        return res.status(200).send(getData.data)
    } catch (error) {
        return res.status(401).json(error.message)
    }
}

module.exports.deleteData1 = async(req, res) => {
    const id = req.params.id
    try {
        const deleteData = await axios.delete("https://ca4402a661e1525f2d2c.free.beeceptor.com/api/users/",{
            params: {
                id: id
            }

        })
        return res.status(200).send(deleteData.data)
    } catch (error) {
        return res.status(401).json(error.message)
    }
}


