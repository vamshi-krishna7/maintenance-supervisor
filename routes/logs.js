const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator'); 
const Logs = require('../models/Logs');
const Techs = require('../models/Techs');

router.get('/', async(req, res) => {
    try {
        const logs = await Logs.find();
        return res.status(200).json({
            success: true,
            data: logs
        });
    }catch(err) {
        console.error(err.message);
        return res.status(500).json('Server Error');
    }  
})

router.post('/', 
    [
        check('message', 'message is required').not().isEmpty()
    ], 
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            })
        }
        
        const { message, attention, tech } = req.body;

        try {
            let logs = new Logs({
                message,
                attention,
                tech
            });
            
            await logs.save();
            return res.status(201).json(logs);   // logs is object

        }catch(err) {
            console.error(err.message);
            return res.status(500).send('Server Error');
        }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedLog = await Logs.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
    
        if(!updatedLog) {
            return res.status(400).json({ success : false })
        }
        return res.status(200).json({
            success: true,
            data: updatedLog
        })
    }catch(err) {
        console.error(err.message);
        return res.status(400).json({ success: false });
    }
    
});

router.delete('/:id', async(req, res) => {

    try {
        const deleteLog = await Logs.findByIdAndDelete(req.params.id);

        if(!deleteLog){
            return res.status(400).json({success: false})
        }
    
        return res.status(200).json({
            success: true
        })
    }catch(err) {
        console.error(err.message);
        return res.status(400).json({success: false});
    }
    
})

module.exports = router;