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
        if (document.querySelector('.modal.active')) {
            document.querySelector('.modal.active').classList.remove('active');
            e.target.classList.remove('active');
        }
    }); // end click
});