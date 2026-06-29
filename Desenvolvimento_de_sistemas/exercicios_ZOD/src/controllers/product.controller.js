export async function productController() {
    const product = req.body;

    return res.status(201).json({
      message: 'Produto criado com sucesso',
      data: product
    });
};