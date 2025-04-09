/*const express = require("express")
const router = express.Router()
const comment_services = require("./comment_services")


router.get('/:id', (req, res) => {
    const id = req.params.id;

    try {
        result = comment_services.getComments(id)

        if (result && result.length > 0) {
            res.status(200).json(result)
        }
        else {
            res.status(404).send("No Comments found")
        }
    }
    catch(error)
    {   
        res.status(500).send("Internal Error")
    }
})

module.exports = router



const express = require("express");
const router = express.Router();
const commentServices = require("./commentservice"); // Ensure path matches your file name

// GET /comments/:id
router.get('/:id', (req, res) => {
    const id = req.params.id;

    try {
        const result = commentServices.getComments(id); // Declare result with const

        if (result && result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).send("No Comments found");
        }
    } catch (error) {
        res.status(500).send("Internal Error");
    }
});

module.exports = router;
*/


const express = require("express");
const router = express.Router();
const commentServices = require("./commentservice");  // Relative path should work here

// GET /comments/:id
router.get('/:id', (req, res) => {
    const id = req.params.id;

    try {
        const result = commentServices.getComments(id);  // Call the service function

        if (result && result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).send("No Comments found");
        }
    } catch (error) {
        console.error("Error in commentroute.js:", error);  // Log the error to help debug
        res.status(500).send("Internal Error");
    }
});

module.exports = router;
