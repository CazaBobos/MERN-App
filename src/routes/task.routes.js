const express = require('express');
const Task = require('../models/task');
const router = express.Router();

//#region Unused
//Synchronous
/*
router.get('/',(req,res)=>{
    task.find((err,tasks)=>{
        console.log(tasks);
        res.json({
            status: 'API Working!'        
        });
    });
});*/
//Promise
/*
router.get('/',(req,res)=>{
    task.find()
        .then(data => console.log(data))
        .catch(err => console.err(err));
});
*/
//#endregion
router.get('/',async (req,res)=>{
    const tasks = await Task.find();
    console.log(tasks);
    res.json(tasks)
});
router.get('/:id',async (req,res)=>{
    const foundTask = await Task.findById(req.params.id);
    console.log(foundTask);
    res.json(foundTask)
});
router.post('/',async (req,res)=>{
    const { title, description } = req.body;
    const newTask = new Task(req.body);
    await newTask.save();
    res.json({status:'Task Saved'});
})
router.put('/:id',async (req,res)=>{
    const { title, description } = req.body;
    const newTask = ({title,description});
    
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({status:'Task Updated'});
})
router.delete('/:id',async (req,res)=>{
    const { title, description } = req.body;
    const newTask = ({title,description});
    
    await Task.findByIdAndRemove(req.params.id);
    res.json({status:'Task Deleted'});
})
module.exports = router;