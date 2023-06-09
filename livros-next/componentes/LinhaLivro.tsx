import Livro from '../classes/modelo/Livro';
import ControleEditora from '../classes/controle/ControleEditora';

interface LinhaLivroProps {
  livro: Livro;
  excluir: (codigo: number) => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  const controleEditora = new ControleEditora();
  const nomeEditora = controleEditora.getNomeEditora(props.livro.codEditora);

  return (
    <tr>
            <td>{props.livro.titulo}
            <div>
                <button className="btn btn-danger" onClick={() => {props.excluir(props.livro.codigo)}}>Excluir</button>
            </div>
            </td>
            <td>{props.livro.resumo}</td>
            <td>{nomeEditora}</td>
            <td>
                <ul>
                    {props.livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>  
            </td>
        </tr>
  );
};
