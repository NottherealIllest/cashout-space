class Cashout {
    constructor() {
        window.addEventListener('load', () => {
            this.watchInputs();
        })
    }

    watchInputs() {
        const inputs = document.querySelectorAll('.co-form__input__main');

        const copyPlaceholders = document.querySelectorAll(".click-to-copy");

        inputs.forEach(input => {
            const inputWrapper = input.closest(".co-form__input");

            input.addEventListener('focus', () => {
                inputWrapper.classList.add("active");
            })

            input.addEventListener('blur', () => {
                inputWrapper.classList.remove("active");
            })
        })

        copyPlaceholders.forEach(placeholder => {
            const input = document.getElementById(placeholder.dataset.copyTarget);
            placeholder.addEventListener('click', e => {
                input.select();
                input.setSelectionRange(0, 99999);
                document.execCommand("copy");
                console.log("copied")
            });
        });
    }
}

window.cashout = new Cashout();