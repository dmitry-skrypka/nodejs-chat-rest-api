const router = require("express").Router();
const messageService = require("../../services/messages");

router.get("/", (req, res) => {
    messageService.findAll((err, data) => {
        if (!err) {
            res.data = data;
            res.json(res.data);
        } else {
            res.status(400);
            res.end();
        }
    });
});

router.get("/:_id", (req, res) => {
    messageService.findOne(req.params._id, (err, data) => {
        if (!err) {
            res.data = data;
            res.json(res.data);
        } else {
            res.status(400);
            res.end();
        }
    });
});

router.delete("/:_id", (req, res) => {
    messageService.removeOne(req.params._id, (err, data) => {
        if (!err) {
            res.data = data;
            res.json(res.data);
        } else {
            res.status(400);
            res.end();
        }
    });
});

router.post("/", (req, res) => {
    messageService.save(req.body, (err) => {
        if (!err) {
            res.json(req.body);
        } else {
            res.status(400);
            res.end();
        }
    });
});

router.put("/:_id", (req, res) => {
    messageService.updateOne(req.body, req.params._id, (err, data) => {
        console.log(req.body);
        if (!err) {
            res.data = data;
            res.json(res.data);
        } else {
            res.status(400);
            res.end();
        }
    });
});

module.exports = router;

