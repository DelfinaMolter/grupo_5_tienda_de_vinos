const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//Middlewares
const uploadFile = require('../middlewares/multerMiddlewares')

router.get('/', productController.products);
router.get('/detalle/:id', productController.detalle);
router.get('/crear', productController.create);
router.get('/editar', productController.edit);


router.post('/crear', uploadFile.single('product-img'), productController.save)
router.delete('/delete/:id', productController.delete)

//router.put("/update/:id",[upload.single("image")],product.update)


module.exports = router