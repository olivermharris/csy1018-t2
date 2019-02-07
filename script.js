let a = 1;
let state = 1;
var timer;
function load()
{


  var circle = document.getElementById('circle');

  // circle.style.opacity = '0.5';

  circle.addEventListener('click', () => { clicked(circle) } );

  document.addEventListener('keydown', control);
}

function control(event)
{
  switch (event.keyCode)
  {
    // 5 STATE CHANGE
    case 12:
      if (state == 1)
      {
        state = 0;
      } else
      {
        state = 1;
      }
      if (timer)
      {
        clearInterval(timer);
      }
      break;
    // SPACE
    case 32:
      if (timer)
      {
        clearInterval(timer);
      }
      for (let i = 0; i < 200; i++)
      {
        setTimeout(() => {
          move(-1, -1);
        }, 10 * i);
      }
      break;
    // 9
    case 33:
      if (state == 1)
      {
        if (timer)
        {
          clearInterval(timer);
        }
        timer = setInterval(() => {
          move(1,-1);
        }, 10);
      } else
      {
        move(10,-10);
      }
      break;
    // 3
    case 34:
    if (state == 1)
    {
      if (timer)
      {
        clearInterval(timer);
      }
      timer = setInterval(() => {
        move(1,1);
      }, 10);
    } else
    {
      move(10, 10);
    }
      break;
    // 1
    case 35:
    if (state == 1)
    {
      if (timer)
      {
        clearInterval(timer);
      }
      timer = setInterval(() => {
        move(-1,1);
      }, 10);
    } else
    {
      move(-10,10);
    }
      break;
    // 7
    case 36:
    if (state == 1)
    {
      if (timer)
      {
        clearInterval(timer);
      }
      timer = setInterval(() => {
        move(-1,-1);
      }, 10);
    } else
    {
      move(-10,-10);
    }
      break;
    // 4 LEFT
    case 37:
    if (state == 1)
    {
      if (timer)
      {
        clearInterval(timer);
      }
      timer = setInterval(() => {
        move(-1,0);
      }, 10);
    } else
    {
      move(-10,0);
    }
      break;
    // 8 UP
    case 38:
    if (state == 1)
    {
      if (timer)
      {
        clearInterval(timer);
      }
      timer = setInterval(() => {
        move(0,-1);
      }, 10);
    } else
    {
      move(0,-10);
    }
      break;
    // 6 RIGHT
    case 39:
    if (state == 1)
    {
      if (timer)
      {
        clearInterval(timer);
      }
      timer = setInterval(() => {
        move(1,0);
      }, 10);
    } else
    {
      move(10,0);
    }
      break;
    // 2 DOWN
    case 40:
    if (state == 1)
    {
      if (timer)
      {
        clearInterval(timer);
      }
      timer = setInterval(() => {
        move(0,1);
      }, 10);
    } else
    {
      move(0,10);
    }
      break;
    default:
      console.log(event.keyCode);
      break;
  }
}

function clicked(element)
{
  // circle click events
  if (element.id == 'circle')
  {
    // alert("The Button Was Pressed");
    // element.style.backgroundColor = 'blue';
    // element.style.opacity = '1';

    var circle = document.getElementById('circle');
    circle.style.opacity = '1';
    // setInterval(alter, 10);
    move(-10 , 0);
  }
}

function alter()
{
  let element = document.getElementById('circle');
  let opacity = parseFloat(element.style.opacity);


  if (opacity == 1 | opacity == 0)
    {
      a = a * -1;
    }
    element.style.opacity = opacity + (0.01 * a);
}

function fade()
{
  let circle = document.getElementById('circle');
  let opacity = parseFloat(circle.style.opacity);
  if (opacity == 0)
  {
    circle.style.opacity = '1';
  } else
  {
    circle.style.opacity = opacity - 0.01;
  }
}

function move(dirX, dirY)
{
  let element = document.getElementById('circle');
  let posX = element.offsetLeft;
  let posY = element.offsetTop;

  element.style.left = (posX + dirX) + 'px';
  element.style.top = (posY + dirY) + 'px';
}

document.addEventListener('DOMContentLoaded', load);
