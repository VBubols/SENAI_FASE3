export async function productValidator(schema) {
    return (req, res, next) => {
        try {
            const produtoValido = schema.safeParse(req.body);

            if(!produtoValido.success) {
                return res.status(400).json({ error: productValidator.error.issues });
            }
            next();
        } catch (error) {
            return res.status(400).json({ error: "Validação falhou"});
        }
    };
}