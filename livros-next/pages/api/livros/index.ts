import { NextApiRequest, NextApiResponse } from 'next';
import ControleLivros from '../../../classes/controle/ControleLivros';

const controleLivro = new ControleLivros();
export { controleLivro  };
export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const livros = controleLivro.obterLivros();
      res.status(200).json(livros);
    } else if (req.method === 'POST') {
      const livro = req.body;
      controleLivro.incluir(livro);
      res.status(200).json({ message: 'Livro adicionado com sucesso' });
    } else {
      res.status(405).end();
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
