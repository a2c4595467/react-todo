import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="ToDOを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のToDo</p>
        <ul>
          <li>
            あああ
            <button>完了</button>
            <button>削除</button>
          </li>
          <li>
            いいい
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>
      <div>
        <p>完了のToDo</p>
        <ul>
          <li>
            ううう
            <button>戻す</button>
          </li>
          <li>
            えええ
            <button>戻す</button>
          </li>
        </ul>
      </div>
    </>
  );
};
