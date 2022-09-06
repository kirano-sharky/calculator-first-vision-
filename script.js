function 等於()
{
  let 白癡 = document.getElementById("result").value
  let 廢物;
  try {
    廢物 = eval(白癡)
  } catch (error) {
    console.log('oppps, is syntax error now!');
    alert("oppps, is syntax error now!");
    return;
  }

  document.getElementById("result").value = 廢物 
}

const 彩蛋 = new Audio();
彩蛋.src = 'quack_5.mp3';
