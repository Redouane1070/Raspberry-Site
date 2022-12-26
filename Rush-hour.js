// Empty 6X6 table initialized with in deepcopy.
var empty_table =
    [[[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]],
    [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]],
    [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]],
    [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]],
    [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]],
    [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]]
// 1 = Red1/2; 2 = Brown; 3 = Light blue; 4 = Yellow; 5 = Purple; 6 = Green; 7 = Rose; 8 = Dark blue; 9 = Orange; 10 = cyan; 11 = darkgreen; 12 = magenta
// [0] => color; [1] => Number of following blocks / if 0 = empty; [2] => button to move
var intermediate_table =
    [[["lightblue", 2, "left"], ["lightblue", 2, "right"], ["rose", 2, "up"], ["orange", 3, "up"], ["white", 0, "middle"], ["white", 0, "middle"]],
    [["brown", 2, "left"], ["brown", 2, "right"], ["rose", 2, "down"], ["orange", 3, "middle"], ["white", 0, "middle"], ["white", 0, "middle"]],
    [["darkblue", 3, "up"], ["red1", 2, "left"], ["red2", 2, "right"], ["orange", 3, "down"], ["white", 0, "middle"], ["white", 0, "middle"]],
    [["darkblue", 3, "middle"], ["yellow", 3, "left"], ["yellow", 3, "middle"], ["yellow", 3, "right"], ["white", 0, "middle"], ["white", 0, "middle"]],
    [["darkblue", 3, "down"], ["purple", 2, "left"], ["purple", 2, "right"], ["white", 0, "middle"], ["white", 0, "middle"], ["white", 0, "middle"]],
    [["green", 3, "left"], ["green", 3, "middle"], ["green", 3, "right"], ["white", 0, "middle"], ["white", 0, "middle"], ["white", 0, "middle"]]];
var advanced_table =
    [[["white", 0, "middle"], ["yellow", 2, "up"], ["white", 0, "middle"], ["rose", 3, "left"], ["rose", 3, "middle"], ["rose", 3, "right"]],
    [["brown", 2, "up"], ["yellow", 2, "down"], ["white", 0, "middle"], ["darkblue", 2, "up"], ["cyan", 3, "up"], ["white", 0, "middle"]],
    [["brown", 2, "down"], ["red1", 2, "left"], ["red2", 2, "right"], ["darkblue", 2, "down"], ["cyan", 3, "middle"], ["darkgreen", 2, "up"]],
    [["lightblue", 2, "up"], ["purple", 3, "left"], ["purple", 3, "middle"], ["purple", 3, "right"], ["cyan", 3, "down"], ["darkgreen", 2, "down"]],
    [["lightblue", 2, "down"], ["white", 0, "middle"], ["green", 2, "up"], ["white", 0, "middle"], ["white", 0, "middle"], ["magenta", 2, "up"]],
    [["white", 0, "middle"], ["white", 0, "middle"], ["green", 2, "down"], ["orange", 2, "left"], ["orange", 2, "right"], ["magenta", 2, "down"]]];
var expert_table =
    [[["brown", 2, "up"], ["white", 0, "middle"], ["white", 0, "middle"], ["green", 3, "left"], ["green", 3, "middle"], ["green", 3, "right"]],
    [["brown", 2, "down"], ["lightblue", 2, "left"], ["lightblue", 2, "right"], ["rose", 2, "up"], ["white", 0, "middle"], ["white", 0, "middle"]],
    [["red1", 2, "left"], ["red2", 2, "right"], ["yellow", 2, "up"], ["rose", 2, "down"], ["white", 0, "middle"], ["darkgreen", 3, "up"]],
    [["white", 0, "middle"], ["white", 0, "middle"], ["yellow", 2, "down"], ["darkblue", 2, "left"], ["darkblue", 2, "right"], ["darkgreen", 3, "middle"]],
    [["white", 0, "middle"], ["white", 0, "middle"], ["purple", 2, "up"], ["orange", 2, "left"], ["orange", 2, "right"], ["darkgreen", 3, "down"]],
    [["white", 0, "middle"], ["white", 0, "middle"], ["purple", 2, "down"], ["cyan", 3, "left"], ["cyan", 3, "middle"], ["cyan", 3, "right"]]];
var grandmaster_table =
    [[["brown", 2, "left"], ["brown", 2, "right"], ["green", 2, "up"], ["white", 0, "middle"], ["orange", 2, "left"], ["orange", 2, "right"]],
    [["lightblue", 2, "left"], ["lightblue", 2, "right"], ["green", 2, "down"], ["white", 0, "middle"], ["cyan", 3, "up"], ["white", 0, "middle"]],
    [["yellow", 3, "up"], ["white", 0, "middle"], ["red1", 2, "left"], ["red2", 2, "right"], ["cyan", 3, "middle"], ["white", 0, "middle"]],
    [["yellow", 3, "middle"], ["rose", 3, "left"], ["rose", 3, "middle"], ["rose", 3, "right"], ["cyan", 3, "down"], ["darkgreen", 2, "up"]],
    [["yellow", 3, "down"], ["white", 0, "middle"], ["white", 0, "middle"], ["darkblue", 2, "up"], ["white", 0, "middle"], ["darkgreen", 2, "down"]],
    [["purple", 2, "left"], ["purple", 2, "right"], ["white", 0, "middle"], ["darkblue", 2, "down"], ["magenta", 2, "left"], ["magenta", 2, "right"]]];


let actual_table = deepcopy(intermediate_table); // Variable to store the actual table shoiwed on the screen.
let game_won = false; // Variable to check if the game is won.
let time = 0; // Variable to store the time.
let ROW = 6; // Number of rows.
let COL = 6; // Number of columns.
let lastmove = "";  // Variable to store the color of the last car moved. 
// Used to check if move count must be increased.
let moves = 0; // Variable to store the number of moves.
let level = 0; // Variable to store the number of level that is being played.

window.onload = function () {
    timer();
    draw_table(actual_table);
}

// Help function to effectivly copy values of a 3D array.
function deepcopy(arr) {
    var newarr = empty_table
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            for (var k = 0; k < arr[i][j].length; k++) {
                newarr[i][j].splice(k, 1, arr[i][j][k]);
            }
        }
    }
    return newarr;
}



function draw_table(table) {
    let table_html = generate_table_html(table);
    document.getElementById("table_container").innerHTML = table_html;
}


function table_ongoing(table) { // Function to generate the html code for the table while the game is ongoing.
    let table_inner_html_ongoing = "";
    for (let i = 0; i < ROW; i++) {
        let row_html = `<tr class="items">`;
        for (let j = 0; j < COL; j++) {
            if (table[i][j][1] == 0) {
                if ((i == 2) && (j == 5)){
                    row_html += `<td id="item_exit" class="item0" >&#10140</td>`;
                }
                else {
                    row_html += `<td class="item0"></td>`;
                }
            }
            else {
                let button_sym = ""
                let button_fun
                if (table[i][j][2] == "left") {
                    button_sym = "&#9664"
                    button_fun = "left(this)"
                }
                else if (table[i][j][2] == "right") {
                    button_sym = "&#9658"
                    button_fun = "right(this)"
                }
                else if (table[i][j][2] == "up") {
                    button_sym = "&#9650"
                    button_fun = "up(this)"
                }
                else if (table[i][j][2] == "down") {
                    button_sym = "&#9660"
                    button_fun = "down(this)"
                }
                else if (table[i][j][2] == "middle") {
                    button_sym = "&#9679"
                    button_fun = ""
                }
                if ((i == 2) && (j == 5)){
                    row_html += `<td id = item_exit class="item_${table[i][j][0]}" onclick="${button_fun}"> ${button_sym}</td>`;
                }
                else {
                    row_html += `<td class="item_${table[i][j][0]}" onclick="${button_fun}"> ${button_sym}</td>`;
                }
                
            }
        }
        row_html += "</tr>";
        table_inner_html_ongoing += row_html;
    }
    return table_inner_html_ongoing;
}


function table_won(table) { // Function to generate the html code for the table when the game is won.
    let table_inner_html_won = "";
    for (let i = 0; i < ROW; i++) {
        let row_html = `<tr class="items">`;
        for (let j = 0; j < COL; j++) {
            if (table[i][j][1] == 0) {
                row_html += `<td class="item0"></td>`;
            }
            else {
                let button_sym = ""
                if (table[i][j][2] == "left") {
                    button_sym = "&#9664"
                }
                else if (table[i][j][2] == "right") {
                    button_sym = "&#9658"
                }
                else if (table[i][j][2] == "up") {
                    button_sym = "&#9650"
                }
                else if (table[i][j][2] == "down") {
                    button_sym = "&#9660"
                    button_fun = "down(this)"
                }
                else if (table[i][j][2] == "middle") {
                    button_sym = "&#9679"
                }
                row_html += `<td class="item_${table[i][j][0]}"> ${button_sym}</td>`;
            }
        }
        row_html += "</tr>";
        table_inner_html_won += row_html
    }
    return table_inner_html_won
}



function generate_table_html(table) {
    let table_inner_html = ""; 
    let level_name = "";
    if (level == 0) {
        level_name = "Intermediate";
    }
    else if (level == 1) {
        level_name = "Advanced";
    }
    else if (level == 2) {
        level_name = "Expert";
    }
    else if (level == 3) {
        level_name = "Grand Master";
    };

    let min = Math.floor(time / 60);
    let sec = time % 60;
    let time_str;
    if (min == 0) {
        time_str = `${sec} seconds`;
    }
    else if (min == 1) {
        time_str = `${min} minute and ${sec} seconds`;
    }
    else {
        time_str = `${min} minutes and ${sec} seconds`;
    };

    if (game_won == false) { // If game is still ongoing, generates the html table with onclick buttons.
        table_inner_html += table_ongoing(table);
        return `<h1 class="actual_level">Playing <u>${level_name} Level</u></h1><table class="table">${table_inner_html}</table>`;
    }
    else { // If game is won, generates the html table without onclick buttons. And add a game won message.
        table_inner_html += table_won(table);
        return `<h1 class="win">Congratulations! You won the <u>${level_name} level</u> after ${time_str} using ${moves} moves!</h1><table class="table_won">${table_inner_html}</table>`
    }

}

// Function to move the car to the left
function left(cell) {
    let row = cell.parentNode.rowIndex;
    let col = cell.cellIndex;
    if (col < COL - 1) {
        if (actual_table[row][col - 1][1] == 0) {
            for (let i = 0; i < actual_table[row][col][1]; i++) {
                actual_table[row][col + i - 1][0] = actual_table[row][col + i][0];
                actual_table[row][col + i - 1][1] = actual_table[row][col + i][1];
                actual_table[row][col + i - 1][2] = actual_table[row][col + i][2];
            }
            actual_table[row][col + actual_table[row][col][1] - 1][1] = 0;
            if (lastmove != actual_table[row][col][0]) {
                lastmove = actual_table[row][col][0];
                moves++;
            }
            draw_table(actual_table);
            check_win();
        }
    }
}
// Function to move the car to the right.l
function right(cell) {
    let row = cell.parentNode.rowIndex;
    let col = cell.cellIndex;
    if (col < COL - 1) {
        if (actual_table[row][col + 1][1] == 0) {
            for (let i = 0; i < actual_table[row][col][1]; i++) {
                actual_table[row][col - i + 1][0] = actual_table[row][col - i][0];
                actual_table[row][col - i + 1][1] = actual_table[row][col - i][1];
                actual_table[row][col - i + 1][2] = actual_table[row][col - i][2];
            }
            actual_table[row][col - actual_table[row][col][1] + 1][1] = 0;
            if (lastmove != actual_table[row][col][0]) {
                lastmove = actual_table[row][col][0];
                moves++;
            }
            draw_table(actual_table);
            check_win();
        }
    }
}
// Function to move the car up.
function down(cell) {
    let row = cell.parentNode.rowIndex;
    let col = cell.cellIndex;
    if (row < ROW - 1) {
        if (actual_table[row + 1][col][1] == 0) {
            for (let i = 0; i < actual_table[row][col][1]; i++) {
                actual_table[row - i + 1][col][0] = actual_table[row - i][col][0];
                actual_table[row - i + 1][col][1] = actual_table[row - i][col][1];
                actual_table[row - i + 1][col][2] = actual_table[row - i][col][2];
            }
            actual_table[row - actual_table[row][col][1] + 1][col][1] = 0;
            if (lastmove != actual_table[row][col][0]) {
                lastmove = actual_table[row][col][0];
                moves++;
            }
            draw_table(actual_table);
            check_win();
        }
    }
}
// Function to move the car down.
function up(cell) {
    let row = cell.parentNode.rowIndex;
    let col = cell.cellIndex;
    if (row < ROW - 1) {
        if (actual_table[row - 1][col][1] == 0) {
            for (let i = 0; i < actual_table[row][col][1]; i++) {
                actual_table[row + i - 1][col][0] = actual_table[row + i][col][0];
                actual_table[row + i - 1][col][1] = actual_table[row + i][col][1];
                actual_table[row + i - 1][col][2] = actual_table[row + i][col][2];
            }
            actual_table[row + actual_table[row][col][1] - 1][col][1] = 0;
            if (lastmove != actual_table[row][col][0]) {
                lastmove = actual_table[row][col][0];
                moves++;
            }
            draw_table(actual_table);
            check_win();
        }
    }
}
// Function to check if the game is won.
function check_win() {
    if (actual_table[2][5][0] == "red2") {
        game_won = true;
        draw_table(actual_table);
    }
}
// Function to change the difficulty of the game.
function set_mode(mode) {
    if (mode == 0) {
        actual_table = deepcopy(intermediate_table);
        level = 0;
    }
    else if (mode == 1) {
        actual_table = deepcopy(advanced_table);
        level = 1;
    }
    else if (mode == 2) {
        actual_table = deepcopy(expert_table);
        level = 2;
    }
    else if (mode == 3) {
        actual_table = deepcopy(grandmaster_table);
        level = 3;
    }
    time = 0;
    moves = 0;
    game_won = false;
    draw_table(actual_table);

}
// Function to reset the actual level.
function reset() {
    set_mode(level);
    time = 0;
    moves = 0;
    game_won = false;
    draw_table(actual_table);
}
// Function to hold and print the timer.
function timer() {
    if (!game_won) {
        time++;
    }
    let min = Math.floor(time / 60);
    min = min < 10 ? "0" + min : min
    let sec = time % 60;
    sec = sec < 10 ? "0" + sec : sec
    document.getElementById("timer").innerHTML = `<table class="time"><tr><td class="time_box">${min} : ${sec}</td> <td class="time_box">${moves} moves</td></tr></table>`
}
