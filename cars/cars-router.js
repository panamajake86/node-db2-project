const express = require('express');

const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const cars = await db('cars');
        res.status(200).json(cars)
    } catch {
        res.status(500).json({ message: 'Failed to get accounts!', err });
    };
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const cars = await db('cars').where('id', id);
        res.status(200).json(cars)
    } catch {
        res.status(500).json({ message: 'Failed to get accounts!', err });
    };
});

router.post('/', async (req, res) => {
    const data = req.body;

    try {
        const cars = await db('cars').insert(data);
        res.status(200).json(cars)
    } catch {
        res.status(500).json({ message: 'Failed to get accounts!', err });
    };
});

router.put('/:id', async (req, res) => {
    const data = req.body;
    const { id } = req.params;

    try {
        const cars = await db('cars').where('id', id).update(data);
        res.status(200).json(cars)
    } catch {
        res.status(500).json({ message: 'Failed to get accounts!', err });
    };
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const cars = await db('cars').where('id', id).del();
        res.status(200).json(cars)
    } catch {
        res.status(500).json({ message: 'Failed to get accounts!', err });
    };
});

module.exports = router;