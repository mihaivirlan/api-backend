'use strict';

exports.getFunction = (req, res) => {
    res.json("this is a get request")
};

exports.postFunction = (req, res) => {
    res.json("this is a post request")
        // .post((req, res) => {
        //     let book = new Book({title: 'The Bull', author: 'Saki'});
        //     book.save();
        //     res.status(201).send(book)
        // })

    // exports.post("/data", (req, res) => {
    //     var myData = new User(req.body);
    //     myData.save()
    //         .then(item => {
    //             res.send("item saved to database");
    //         })
    //         .catch(err => {
    //             res.status(400).send("unable to save to database");
    //         });
    // });
};

exports.putFunction = (req, res) => {
    res.json("this is a put request")
};

exports.patchFunction = (req, res) => {
    res.json("this is a patch request")
};

exports.deleteFunction = (req, res) => {
    res.json("this is a delete request")
};