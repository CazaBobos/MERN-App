const express = require('express');
const Task = require('../models/task');
const router = express.Router();

//Promise Example
/*
router.get('/',(req,res)=>{
    task.find()
        .then(data => console.log(data))
        .catch(err => console.err(err));
});
*/

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
    const modTask = ({title,description});
    
    await Task.findByIdAndUpdate(req.params.id, modTask);
    res.json({status:'Task Updated'});
})

router.delete('/:id',async (req,res)=>{
    await Task.findByIdAndRemove(req.params.id);
    res.json({status:'Task Deleted'});
})

module.exports = router;