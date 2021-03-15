import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompletedList(inputText);
};

//未完了リストに追加する関数
const createIncompletedList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //button(完了)
  const completedButton = document.createElement("button");
  completedButton.innerText = "完了";
  completedButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(div)を未完了リストから削除
    const addTaret = completedButton.parentNode;
    deleteFromIncompletedList(addTaret);
    //完了リストに追加する
    const text = addTaret.firstElementChild.innerText;
    //div以下を初期化する
    addTaret.textContent = null;

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //戻すボタンタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグ(div)を完了リストから削除
      const deleteTaret = backButton.parentNode;
      deleteFromcompletedList(deleteTaret);

      //テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompletedList(text);
    });

    //divタグの子要素に各要素を設定
    addTaret.appendChild(li);
    addTaret.appendChild(backButton);

    //完了リストに追加
    document.getElementById("completed-list").appendChild(addTaret);
  });

  //button(削除)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompletedList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completedButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incompleted-list").appendChild(div);
};

//未完了リストから指定の要素を削除
const deleteFromIncompletedList = (target) => {
  document.getElementById("incompleted-list").removeChild(target);
};

//完了リストから指定の要素を削除
const deleteFromcompletedList = (target) => {
  document.getElementById("completed-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
