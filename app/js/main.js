window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Form
    const form = document.querySelectorAll('.form');
    const reminder = document.querySelector('.header__reminder');
    const userSatus = document.querySelector('#user-satus');


    form.forEach(form => {
        form.addEventListener('click', function(e) {
            e.preventDefault();

            const target = e.target;
            const stepOne = this.querySelector('.form__inputs_step-1'); 
            const stepTwo = this.querySelector('.form__inputs_step-2'); 
            const formTitle = this.querySelector('.form__title');
            const signUp = this.querySelector('.sign-up');

            if(signUp) {
                signUp.addEventListener('click', () => {
                    userSatus.innerText = 'Вы успешно отправили заявку';
                    reminder.innerHTML = `
                        <span class="emoji emoji-mailbox"></span>
                        <p class="header__reminder-text">
                            Отправили вам на почту запись вебинара
                        </p>
                    `;
                });
            }
            
            if(target.classList.contains('next-form')) {
                if(formTitle) {
                    formTitle.innerText = 'Шаг 2 из 2';
                }

                stepOne.classList.add('hide');
                stepTwo.classList.remove('hide');
            }

            if(target.classList.contains('prew-form')) {
                if(formTitle) {
                    formTitle.innerText = 'Шаг 1 из 2';
                }
                
                stepOne.classList.remove('hide');
                stepTwo.classList.add('hide');
            }
        });
    });


});