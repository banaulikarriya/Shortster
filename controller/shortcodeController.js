const Url = require("../model/urlModel");
const randomstring = require("randomstring");
randomstring.generate({
    length: 6,
    charset: 'alphabetic'
});


// create view for short code
async function viewAddShortcode(req, res) {

    try {
        res.render("addShortcode");
    } catch (e) {
        var errMsg = `There was Error in viewing ${e}`;
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
        var errMsg = `There was Error in creating short code: ${e}`;
        res.render("addShortcode", { err: errMsg });
    }
}

module.exports = {
    addShortcode,
    viewAddShortcode
}