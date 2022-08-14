// Модальные окна
document.addEventListener('DOMContentLoaded', () => {
    const modalButtons = document.querySelectorAll('.js-open-modal'),
          overlay      = document.querySelector('.js-overlay-modal'),
          closeButtons = document.querySelectorAll('.js-modal-close');
 
    modalButtons.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
 
            let modalId = e.target.getAttribute('data-modal'),
            modalElem = document.querySelector(`.modal[data-modal="${modalId}"]`);
    
            modalElem.classList.add('active');
            overlay.classList.add('active');
        }); // end click
    }); // end foreach
 
    closeButtons.forEach(item => {
        item.addEventListener('click', (e) => {
            let parentModal = e.target.closest('.modal');
    
            parentModal.classList.remove('active');
            overlay.classList.remove('active');
        }); // end click
    }); // end foreach
 
    overlay.addEventListener('click', (e) => {
        document.querySelector('.modal.active').classList.remove('active');
        e.target.classList.remove('active');
    }); // end click
});

// let transformTime = (start) => {
//     let minutes = Math.floor(start / 60);
//     let seconds = start % 60;

//     return `${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`;
// };

// let mask = (tel) => {
//     let x = tel.target.value.replace(/\D/g, '')
//             .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

//         if (!x[0]) {
//             tel.target.value = '+';
//             return;
//         }

//         if (!x[1]) {
//             tel.target.value = `7`;
//             return;
//         }

//         tel.target.value = `+7 `
//             +`(${x[2]}`
//             + ( x[3] ? `) ${x[3]}` : '' )
//             + ( x[4] ? `-${x[4]}` : '' )
//             + ( x[5] ? `-${x[5]}` : '' );
// };