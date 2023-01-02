import { ThumbsUp, Trash } from 'phosphor-react'
import S from './Comment.module.css'

export function Comment() {
  return (
    <div className={S.comment}>
      <img
        src="https://github.com/lauragrassig.png"
        alt="Avatar Laura Grassi"
      />

      <div className={S.commentBox}>
        <div className={S.commentContent}>
          <header>
            <div className={S.authorAndTime}>
              <strong>Laura Grassi</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Excluir">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
