document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const answer = document.getElementById('answer');
    const buttons = document.querySelectorAll('button');
    let currentInput = '';
    let currentAnswer = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (button.classList.contains('numbers')) {
                currentInput += value;
                display.textContent = currentInput;
            } else if (button.id === 'delete') {
                currentInput = currentInput.slice(0, -1);
                display.textContent = currentInput;
            } else if (button.id === 'reset') {
                currentInput = '';
                currentAnswer = '';
                display.textContent = '';
                answer.textContent = '';
            } else if (button.id === 'equals') {
                try {
                    currentAnswer = eval(currentInput);
                    answer.textContent = currentAnswer;
                } catch (e) {
                    answer.textContent = 'Error';
                }
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });
});
