const router = require("express").Router();
const userService = require("../../services/users");

router.get("/", (req, res) => {
    userService.findAll((err, data) => {
        if (!err) {
            res.data = data;
            res.json(res.data);
        } else {
            res.status(400);
            res.end();
        }
    });
});

router.get("/:id", (req, res) => {
    userService.findOne(req.params.id, (err, data) => {
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
    userService.save(req.body, (err, data) => {
        if (!err) {
            res.json(req.body);
        } else {
            res.status(400);
            res.end();
        }
    });
});

router.put("/:id", (req, res) => {
    userService.update(req.body, (err, data) => {
        if (!err) {
            res.data = data;
            res.json(res.data);
        } else {
            res.status(400);
            res.end();
        }
    });
});
router.delete("/:id", (req, res) => {
    userService.removeOne(req.params.id, (err, data) => {
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
