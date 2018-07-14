const router = require("express").Router();
const {findContactsById} = require("../../services/users");

const {getReceiverId} = require("../../services/messages");
// fixed
router.get("/:id", (req, res) => {
    getReceiverId(req.params.id, (err, data) => {
        findContactsById(data, (err, data) => {
            if (!err) {
                res.data = data;
                res.json(res.data);
            } else {
                res.status(400);
                res.end();
            }
        });
    });
});
module.exports = router;