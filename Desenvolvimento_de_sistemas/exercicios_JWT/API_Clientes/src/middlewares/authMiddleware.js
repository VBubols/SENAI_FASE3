import jwt from 'jsonwebtoken';

export async function autenticar(req, res, next){
    try {
        //Verifica o cabeçalho da requisição a procura da autorização
        const authHeader = req.headers['authorization'];
        //Se não tiver a requisição ou se ela estiver no formato errado retornar 401
        if(!authHeader || !authHeader.startsWith('Bearer ')){
            return res.status(401).json({erro: 'Token não fornecido ou formato inválido!'});
        }

        //Extrai o token do header "Bearer <token>"
        const token = authHeader.split(' ')[1];
        //Verifica o token e obtém os dados decodificados (payload)
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();

    } catch (error) {
        return res.status(401).json({ erro: 'Token inválido ou expirado' });
    }
}