const Url = require("../model/urlModel");
const randomstring = require("randomstring");
randomstring.generate({
    length: 6,
    charset: 'alphabetic'
});


//function to list all urls
async function list(req, res) {
    let data = req.body;
    try {
        let result = await Url.find({ status: true }).lean().exec();
        res.render("index", { urls: result });
    } catch (e) {
        console.log(e);
        let errMsg = `There was Error in viewing ${e}`;
        res.render("index", { err: errMsg });
    }
}

// create view for short code
async function viewAddShortcode(req, res) {

    try {
        res.render("addShortcode");
    } catch (e) {
        let errMsg = `There was Error in viewing ${e}`;
        res.render("addShortCode", { err: errMsg });
    }
}

//function to add shortcode
async function addShortcode(req, res) {
    let data = req.body;
    try {

        //generate the shortcode
        if (!data.shortcode) {
            data.shortcode = randomstring.generate(6);
        }
        let url_data = new Url(data);
        let result = await url_data.save();
        return res.json(result);
    } catch (e) {
        console.log(e);
        let errMsg = `There was Error in creating short code: ${e}`;
        res.render("addShortcode", { err: errMsg });
    }
}


//function to add shortcode details
async function getShortcodeDetails(req, res) {
    let shortcode = req.params.shortcode;
    console.log(shortcode);
    try {
        let result = await Url.findOneAndUpdate({ status: true, shortcode }, { "$inc": { counter: 1 } }, { new: true }).lean().exec();
        console.log(result);
        res.render("viewShortcode", result);
    } catch (e) {
        console.log(e);
        let errMsg = `There was Error in creating short code: ${e}`;
        res.render("viewShortcode", { err: errMsg });
    }
}

module.exports = {
    addShortcode,
    viewAddShortcode,
    list,
    getShortcodeDetails
}