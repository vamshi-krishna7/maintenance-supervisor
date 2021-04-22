const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Techs = require('../models/Techs');

router.get('/', async (req, res) => {
    try {
        let techs = await Techs.find();
    return res.status(200).json({
        success: true,
        data: techs
    })
    }catch(err){
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
    
})


router.post('/', 
    [
       check('firstName', 'firstName is required').not().isEmpty(),
       check('lastName', 'lastName is required').not().isEmpty()
    ],
    async(req, res) => {
        
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({
                    errors: errors.array()
                })
            }

            let { firstName, lastName } = req.body;
            try {
                let techs = new Techs({
                    firstName,
                    lastName
            });

            await techs.save();      
            return res.status(201).json(techs);
            
            } catch(err){
            console.error(err.message, 'from here');
            return res.status(500).send('Server Error');
        }
});


router.put('/:id', async(req, res) => {
    try {
        const updatedTechs = await Techs.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidator: true
        }) 

        if(!updatedTechs){
            return res.status(400).json({ success: false });
        }

        return res.status(200).json({success: true, data: updatedTechs});
    }catch(err){
        console.error(err.message);
        return res.status(400).json({success: false});
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const deleteTech = await Techs.findByIdAndDelete(req.params.id);

        if(!deleteTech) {
            return res.status(400).json({success: false});
        }
        return res.status(200).json({success: true});
    }catch(err){
        console.error(err.message);
        return res.status(400).json({success: false});
    }
})

module.exports = router;