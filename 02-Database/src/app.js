const express = require("express");
const noteModel = require('./models/note.model')

const app = express();
app.use(express.json())

// POST /notes => create a note
app.post("/notes", async(req, res) => {

    const data = req.body  // {title, descrition}
    await noteModel.create({
        title: data.title,
        description: data.description,
    })

    res.status(201). json({
        message: "Note Created Successfully"
    })
})




// GET /notes => get all note
app.get("/notes", async(req, res) => {

    const notes = await noteModel.find() 
    // find(): find all notes in DB and store in notes variabe   &   always returns an array of object / array of matching documents.


    // const notes = await noteModel.findOne({
    //     title: "Rounak ji"   
    //     // only find one note with title - Rounak ji & returns object
    // })

    res.status(200).json({
        message: "Notes fetched successfully",
        notes: notes
    })
})




// DELETE /notes/:id => Delete a note
app.delete("/notes/:id", async (req, res) => {

    const id = req.params.id

    await noteModel.findOneAndDelete({
        _id: id
    })

    res.status(200).json({
        message: "Note Deleted Successfully"
    })
})




// PATCH /notes/:id => Update a note
app.patch("/notes/:id", async (req, res) => {
    const id = req.params.id
    const description = req.body.description

    await noteModel.findOneAndUpdate({ _id: id}, { description: description})

    res.status(200).json({
        message: "Note Updated Successfully"
    })
})

module.exports = app; 