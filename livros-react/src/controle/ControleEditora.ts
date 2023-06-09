import Editora from "../modelo/Editora";

const editoras: Editora[] = [
  { codEditora: 1, nome: 'Editora A' },
  { codEditora: 2, nome: 'Editora B' },
  { codEditora: 3, nome: 'Editora C' }
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
