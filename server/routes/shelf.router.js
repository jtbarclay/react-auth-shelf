const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM item`
    console.log('in GET server');
    
    pool.query(queryText)
        .then( (result) => res.send(result.rows))
        .catch( (error) => console.log('error in GET', error))
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', rejectUnauthenticated, (req, res) => {   
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
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const query = `
        DELETE FROM item
        WHERE id = $1 AND user_id = $2;
    `;

    console.log('IN DELETE itemId: ', req.params.id);
    console.log('IN DELETE user id: ', req.user.id);


    pool.query(query, [req.params.id, req.user.id])
        .then((response) => {
            console.log('shelf DELETE response', response);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('shelf DELETE error', error);
            res.sendStatus(500);
        });
    
    
});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/', rejectUnauthenticated, (req, res) => {   
    // sql query
    const query = `
        UPDATE "item" SET "description"=$1, "image_url"=$2
        WHERE id = $3 AND user_id = $4;
    `;
    // add new item to database
    pool.query(query, [req.body.description, req.body.image_url, req.body.id, req.user.id])
        .then((response) => {
            console.log('shelf PUT response', response);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('shelf PUT error', error);
            res.sendStatus(500);
        });
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