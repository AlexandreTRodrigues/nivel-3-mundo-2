import Head from 'next/head';
import { Menu } from '../componentes/Menu';
import { LinhaLivro } from '../componentes/LinhaLivro';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Livro from '../classes/modelo/Livro';
import 'bootstrap/dist/css/bootstrap.css'

const baseURL = 'http://localhost:3000/api/livros';

const obterLivros = async () => {
  const response = await fetch(baseURL);
  return response.json();
};

const excluirLivro = async (codigo: number) => {
  const response = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
  return response.ok;
};

const LivroLista: React.FC = () => {
  const [livros, setLivros] = useState<Array<Livro>>([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    obterLivros().then((data) => {
      setLivros(data);
      setCarregado(true);
    });
  }, [livros]);

  const excluir = async (codigo: number) => {
    await excluirLivro(codigo);
    setCarregado(false);
  };

  return (
    <div className='container'>
      <Head>
        <title>Livro Lista</title>
      </Head>
      <main className={styles.main}>
        <h1>Lista de Livros</h1>
        <table className='table table-striped'>
          <thead className='table-dark'>
            <tr>
              <th>Título</th>
              <th>Resumo</th>
              <th>Editora</th>
              <th>Autor</th>
            </tr>
          </thead>
          <tbody>
            {carregado &&
              livros.map((livro) => (
                <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
              ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
