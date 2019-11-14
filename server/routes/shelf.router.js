const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    res.sendStatus(200); // For testing only, can be removed
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {   
    // sql query
    const query = `
        INSERT INTO item (description, image_url, user_id)
        VALUES ($1, $2, $3);
    `;
    // add new item to database
    pool.query(query, [req.body.name, req.body.imgUrl, req.user.id])
        .then((response) => {
            console.log('shelf POST response', response);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('shelf POST error', error);
            res.sendStatus(500);
        });
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {

});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;