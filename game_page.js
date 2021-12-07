player1_name = localStorage.getItem("player_1 name");
player2_name = localStorage.getItem("player_2 name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn :" + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn :" + player2_name;

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lower case" + word);

    charAT1 = word.charAT(1);
    console.log(charAT1);

    length_divide_2 = Math.floor(word.length/2);
    charAT2 = word.charAT(length_divide_2);
    console.log(charAT2);

    length_minus_1 = word.length - 1;
    charAT3 = word.charAT(length_minus_1);
    console.log(charAT3);

    remove_charAt1 = word.replace(charAT1 , "_");
    remove_charAt2 = remove_charAt1.replace(charAT2 , "_");
    remove_charAt3 = remove_charAt2.replace(charAT3 , "_");
    console.log(remove_charAt3)

    question_word = "<h4 id = 'word-display'> Q. "+remove_charAt3+"</h4>"; 
    input_box = "<br> Ans: <input type = 'text' id = 'input_check_box'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>CHECK</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
    }
    function check(){
        get_answer = document.getElementById("input_check_box").value;
        answer = get_answer.toLowerCase();
        console.log("answer in lower case - " + answer);
        if(answer == word){
            if(answer_turn == "player1_name"){
                player1_score = player1_score +1;
                document.getElementById("player1_score").innerHTML = player1_score;
            }
            else{
                player2_score = player2_score+1;
                document.getElementById("player2_score").innerHTML = player2_score;
            }
           
        } 
        if(question_turn == "player1_name"){
              question_turn = "player2_name";
              document.getElementById("player_question").innerHTML = question_turn;  
        }
        else{
            question_turn = "player1_name";
            document.getElementById("player_question").innerHTML = question_turn;
        }
        if(answer_turn == "player1_name"){
            answer_turn = "player2_name";
            document.getElementById("player_answer").innerHTML = answer_turn;  
      }
      else{
          answer_turn = "player1_name";
          document.getElementById("player_answer").innerHTML = answer_turn;
      }
      document.getElementById("output").innerHTML = "";
    }