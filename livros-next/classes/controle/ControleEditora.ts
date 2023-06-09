import Editora from "../modelo/Editora";

const editoras: Editora[] = [
  { codEditora: 1, nome: 'Alta Books' },
  { codEditora: 2, nome: 'Bookman' },
  { codEditora: 3, nome: 'Addison Wesley' },
  { codEditora: 4, nome: 'Pearson' }
];

class ControleEditora {
  getEditoras(): Editora[] {
    return editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editoraEncontrada = editoras.filter(editora => editora.codEditora === codEditora);
    if (editoraEncontrada.length > 0) {
      return editoraEncontrada[0].nome;
    }
    return undefined;
  }
}

export default ControleEditora;
