const router = require("express").Router();
const {findContactsById} = require("../../services/users");
const {getContacts} = require("../../services/messages");

router.get("/:id", (req, res, next) => {
    getContacts(req.params.id, (err, data) => {

        let receiversId = [];
        for (let i = 0; i < data.length; i++) {
            receiversId.push(data[i].receiverId);

        }
        console.log(receiversId);

        let i = receiversId.length;
        receiversId.sort();
        while (i--) {
            if (receiversId[i] == receiversId[i - 1]) {
                receiversId.splice(i, 1);
            }
        }

        console.log(receiversId);

        findContactsById(receiversId, (err, data) => {
            if (!err) {
                res.data = data;
                res.json(res.data);
            } else {
                res.status(400);
                res.end();
            }
        });

    })
});


module.exports = router;