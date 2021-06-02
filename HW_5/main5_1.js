// 1. Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги.
// Доска должна быть верно разлинована на черные и белые ячейки.
// Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.

function chessBoard(){
    const letter=['A','B','C','D','E','F','G','E'];
    const number=['',1,2,3,4,5,6,7,8]

    div_vert = document.createElement('div');
    div_vert.id="vert";
    document.body.appendChild(div_vert);

    for (let i=0; i<8; i++) {
        div_vert = document.createElement('div');
        div_vert.className="light";
        document.body.appendChild(div_vert);
        div_vert.innerHTML = letter[i];
    }

    for (let j=0; j<9; j++){
        div_num = document.createElement('div');
        div_num.className = "light";
        vert.appendChild(div_num);
        div_num.innerHTML = number[j];
    };

    div_chess = document.createElement('div');
    div_chess.id="chess";
    document.body.appendChild(div_chess);
    for (i=0; i<8; i++){
        for (let j=0; j<8; j++) {
            if ((j+i)%2==0) {
                div_dark = document.createElement('div');
                div_dark.className="dark";
                chess.appendChild(div_dark);} else {
                div_light = document.createElement('div');
                div_light.className="light";
                chess.appendChild(div_light);
            }
        }
    }
}

chessBoard()



