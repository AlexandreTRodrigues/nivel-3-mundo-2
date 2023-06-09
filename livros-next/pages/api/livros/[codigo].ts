import { NextApiRequest, NextApiResponse } from 'next';
import { controleLivro } from '.';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'DELETE') {
      const codigoLivro = req.query.codigo;
      controleLivro.excluir(Number(codigoLivro));
      res.status(200).json({ message: 'Livro excluído com sucesso' });
    } else {
      res.status(405).end();
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
