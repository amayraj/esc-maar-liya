function calc() {
  let labs = [], quiz = [], normalized = [];
  let sxn = document.getElementById("section").value;
  let i;
  for(i = 0; i < 10; i++) {
    labs.push(document.getElementById("lab"+(i+1)).value);
  }
  for (i = 0; i < 3; i++) {
    quiz.push(document.getElementById("qz"+(i+1)).value);
  }
  normalized.push(labs[0] * 100 / 80);
  normalized.push(labs[1] * 100 / 60);
  normalized.push(labs[2] * 100 / 90);
  normalized.push(labs[3] * 100 / 100);
  normalized.push(labs[4] * 100 / 100);
  normalized.push(labs[5] * 100 / 110);
  normalized.push(labs[6] * 100 / 150);
  normalized.push(labs[7] * 100 / 150);
  normalized.push(labs[8] * 100 / 150);
  normalized.push(labs[9] * 100 / 150);
  // console.log(sxn);
  // console.log(normalized);
  // console.log(quiz);
  let score = 0, min9 = 101, min9_i = 0, min4 = 101, min4_i = 0;
  if(sxn == 'A') {
    for(i = 0; i < 10; i++) {
      if(normalized[i] < min9) {
        min9 = normalized[i];
        min9_i = i;
      }
    }
    // console.log(min9);
    // console.log(min9_i);
    if(min9_i < 4) {
      for(i = 0; i < 4; i++) {
        if(i != min9_i) {
          score += (0.06 * normalized[i]);
        }
      }
      for(i = 4; i < 10; i++) {
        score += (0.07 * normalized[i]);
      }
    }
    else {
      for(i = 0; i < 4; i++) {
        score += (0.045 * normalized[i]);
      }
      for(i = 4; i < 10; i++) {
        if(i != min9_i) {
          score += (0.084 * normalized[i]);
        }
      }
    }
  }
  
  else {
    for(i = 0; i < 4; i++) {
      if(normalized[i] < min4) {
        min4 = normalized[i];
        min4_i = i;
      }
    }
    // console.log(min4);
    // console.log(min4_i);
    for(i = 0; i < 4; i++) {
      if(i != min4_i) {
        score += (0.06 * normalized[i]);
      }
    }
    for(i = 4; i < 10; i++) {
      score += (0.07 * normalized[i]);
    }
  }
  // let qzz = (0.10 * quiz[0] * 100 / 154) + (0.15 * quiz[1] * 100 / 158) + (0.15 * quiz[2] * 100 / 200);
  // console.log(40-qzz);
  // console.log(60-score);
  score += (0.10 * quiz[0] * 100 / 154) + (0.15 * quiz[1] * 100 / 158) + (0.15 * quiz[2] * 100 / 200);
  score = score.toFixed(2);
  document.getElementById("score").innerHTML = score + "%";
  // return false;
}