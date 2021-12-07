
function Modal() {

  return (
    <div >
      <form>
      <p>CRIAR POST</p>
      <div>
        <label>TÍTULO</label>
        <input type="text" placeholder="inserir título" />
      </div>

      <div>
        <label>TEXTO</label>
        <input type="text" placeholder="inserir texto" />
      </div>

      <div>
        <label>UPLOAD</label>
        <input type="file"/>
        <p>Escolha uma imagem direto do seu computador para seu perfil</p>
        <button>Upload</button>
      </div>
      </form>

      <div className="buttons">
        <div className="container">
          <button type="submit" form="login-form" className="button type-1">
            <span>Salvar</span>
          </button>
          <button className="button type-1" onClick={() => {
          }}>
            <span>Cancelar</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
