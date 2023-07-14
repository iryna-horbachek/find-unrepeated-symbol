function getInputValue() {
    const btn = document.querySelector('.btn');

    btn.addEventListener('click', () => {
        const inputValue = document.querySelector('.text-field').value;
        const dividedToWords = inputValue.split(' ');
        let newArray = [];

        dividedToWords.filter((el) => {
            for(let i = 0; i < el.length; i++) {
                const letter = el.charAt(i);

                    if (letter.indexOf(el) === letter.lastIndexOf(el)) {
                        newArray.push(letter);
                    }
                    return null;
                }
            })


        const result = newArray.find((character) => {
            return newArray.indexOf(character) === newArray.lastIndexOf(character);
        })

        if (inputValue == '') {
            alert('Enter the text')
        } else {
            alert(`Your unrepeated symbol is '${result}'`)
        }
            
    });

}

getInputValue();

function clearText(){
    document.querySelector('.text-field').value='';
}
