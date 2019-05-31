const Resturant = require('../models/restaurant')
const qrcode = require('qrcode')

exports.register = async (req, res) => {
    console.log(req.body)
    try {
        const resturant = new Resturant({
            name: req.body.name,
            address: req.body.address,
            open_closed: req.body.open_closed,
        })
        await resturant.save()
        let tag = resturant.name + ' ' + resturant._id
        qrcode.toDataURL(tag, function (err, url) {
            res.status(201).json({ 
                payload: resturant,
                qrcodeUrl: url
            })
        })
    }
    catch (err) {
        console.log(err)
    }
}

exports.find = async (req,res)=>{
    await Resturant.find({},(err,doc)=>{
        console.log(doc)
    })
}