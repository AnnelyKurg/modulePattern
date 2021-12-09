//standard module pattern
//will be UI Controller
const UIController = (function () {
    let text = 'Hello World'
    //declare private variables functions
    const changeText = function () {
        const element = document.querySelector('h1')
        element.textContent = text
    }

    return {
        //declare public variables and functions
        callChangeText: function () {
            changeText()
            console.log()
        }

    }
})();

UIController.callChangeText()