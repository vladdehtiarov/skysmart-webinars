window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Form
    const form = document.querySelectorAll('.form');

    form.forEach(form => {
        form.addEventListener('click', function(e) {
            e.preventDefault();

            const target = e.target;
            const stepOne = this.querySelector('.form__inputs_step-1'); 
            const stepTwo = this.querySelector('.form__inputs_step-2'); 
            const formTitle = this.querySelector('.form__title');

            if(target.classList.contains('next-form')) {
                formTitle.innerText = 'Шаг 2 из 2';
                stepOne.classList.add('hide');
                stepTwo.classList.remove('hide');
            }

            if(target.classList.contains('prew-form')) {
                formTitle.innerText = 'Шаг 1 из 2';
                stepOne.classList.remove('hide');
                stepTwo.classList.add('hide');
            }
        });
    });


});