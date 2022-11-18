/* dropdown function */


const navDropdown = () => {
    if(document.getElementById('nav-links-toggle').className === 'nav-links') {
        document.getElementById('nav-links-toggle').className = 'nav-links show';
    } else {
        document.getElementById('nav-links-toggle').className = 'nav-links';
    }
}



window.addEventListener('load', () => {
    document.getElementById('hamburger-button').addEventListener('click', navDropdown)
  });

  /* game code */

  let naughtOrCross = 'X';

  let xArray = [];
  let oArray = [];

  let turnsTaken = 0;

  // const winCombinations = [
//     ['0', '1', '2'],
//     ['3', '4', '5'],
//     ['6', '7', '8'],
//     ['0', '3', '6'],
//     ['1', '4', '7'],
//     ['2', '5', '8'],
//     ['0', '4', '8'],
//     ['2', '4', '6']
// ]

  const checkWin = () => {    
    if((xArray.includes('0') && xArray.includes('4') && xArray.includes('8')) || 
        (xArray.includes('2') && xArray.includes('4') && xArray.includes('6')) || 
        (xArray.includes('0') && xArray.includes('1') && xArray.includes('2')) || 
        (xArray.includes('3') && xArray.includes('4') && xArray.includes('5')) || 
        (xArray.includes('6') && xArray.includes('7') && xArray.includes('8')) || 
        (xArray.includes('0') && xArray.includes('3') && xArray.includes('6')) || 
        (xArray.includes('1') && xArray.includes('4') && xArray.includes('7')) || 
        (xArray.includes('2') && xArray.includes('5') && xArray.includes('8'))
        ) {
        document.getElementById('win-message').innerText = 'X wins! Press Reset to play again';
        document.getElementById('game-grid').className += ' noclick';
    }
    if((oArray.includes('0') && oArray.includes('4') && oArray.includes('8')) || 
        (oArray.includes('2') && oArray.includes('4') && oArray.includes('6')) || 
        (oArray.includes('0') && oArray.includes('1') && oArray.includes('2')) || 
        (oArray.includes('3') && oArray.includes('4') && oArray.includes('5')) || 
        (oArray.includes('6') && oArray.includes('7') && oArray.includes('8')) || 
        (oArray.includes('0') && oArray.includes('3') && oArray.includes('6')) || 
        (oArray.includes('1') && oArray.includes('4') && oArray.includes('7')) || 
        (oArray.includes('2') && oArray.includes('5') && oArray.includes('8'))
        ) {
        document.getElementById('win-message').innerText = 'O wins! Press Reset to play again';
        document.getElementById('game-grid').className += ' noclick';

    }
    else if( turnsTaken > 8) {
        document.getElementById('win-message').innerText = 'NO WINNER! Press Reset';
    }    
}


  const gameListener = () => {
    document.querySelectorAll('.game-item').forEach((item) => {
        item.addEventListener('click', () => {
            const Paragraph = document.createElement('p');
            const paragraphText = document.createTextNode(naughtOrCross);
            Paragraph.appendChild(paragraphText);
            const Element = item
            Element.appendChild(Paragraph)
            item.className = 'grid-item noclick';
            turnsTaken += 1;
            if(naughtOrCross === 'X') {
                xArray.push(item.id);
            } if(naughtOrCross === 'O') {
                oArray.push(item.id);
            }
            // xArray.sort((a, b) => {return a - b});
            // oArray.sort((a, b) => {return a - b});
            checkWin();
            if(naughtOrCross === 'X') {
                naughtOrCross = 'O';
            } else {
                naughtOrCross = 'X';
            }            
                       
        })       
        
    })
  }


const resetButton = () => {
    document.getElementById('reset').addEventListener('click', () => {
        location.reload();
    })
}


window.addEventListener('load', () => {
    gameListener();
    resetButton();
})
