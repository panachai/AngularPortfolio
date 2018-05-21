const express = require('express');
const router = express.Router();
const mongoClient = express('mogodb').mongoClient;


router.get('/show', function (req, res) {
    res.end("Hi, show api");
})

router.post('/add', function (req, res) {
    res.end("Hi, add api: " + req.body.name);
})

router.delete('/delete/:name', function (req, res) {
    res.end("Hi, delete api: " + req.params.name);
})

module.exports = router;






// const Joi = require('joi');
// const express = require('express');
// const router = express.Router();
// // const app = express();

// router.use(express.json());

// //mock data
// const products = [
//     { id: 1, name: 'pencil' },
//     { id: 2, name: 'pen' },
//     { id: 3, name: 'book' },
//     { id: 4, name: 'mouse' },
//     { id: 5, name: 'keyboard' },
//     { id: 6, name: 'smartwatch' },
// ];

// router.get('/', (req, res) => {
//     res.send('Hello World to Learning Node.js');
// });

// //Get ALL
// router.get('/api/product', (req, res) => {
//     res.send(products);
// });

// //Get by ID
// router.get('/api/product/:id', (req, res) => {
//     const product = products.find(c => c.id === parseInt(req.params.id));
//     if (!product) return res.status(404).send('The product with the given ID was not found.');
//     res.send(product);
// });

// //Post Add
// router.post('/api/product', (req, res) => {
//     // If invalid, return 400 - Bad request
//     const { error } = validateProduct(req.body); // result.error
//     if (error) return res.status(400).send(error.details[0].message);

//     const product = {
//         id: products.length + 1,
//         name: req.body.name
//     };
//     products.push(product);
//     res.send(product);
// });

// //Put Update
// router.put('/api/product/:id', (req, res) => {
//     // If not existing , return 404
//     const product = products.find(c => c.id === parseInt(req.params.id));
//     if (!product) return res.status(404).send('The product with the given ID was not found.')

//     // If invalid, return 400 - Bad request
//     const { error } = validateProduct(req.body); // result.error
//     if (error) return res.status(400).send(error.details[0].message);

//     //Update product
//     product.name = req.body.name

//     //return product new
//     res.send(product);
// });

// router.delete('/api/product/:id', (req, res) => {
//     // If not existing , return 404
//     const product = products.find(c => c.id === parseInt(req.params.id));
//     if (!product) return res.status(404).send('The product with the given ID was not found.');

//     const index = products.indexOf(product);
//     products.splice(index, 1);

//     res.send(product);
// });

// function validateProduct(product) {
//     const schema = {
//         name: Joi.string().min(3).required()
//     };

//     return Joi.validate(product, schema);
// }

// const port = process.env.PORT || 3000;
// router.listen(port, () => console.log(`Listenning on port ${port}...`));