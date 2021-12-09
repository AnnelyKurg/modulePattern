//revealing module pattern
//will be item Controller
const ItemController = (function () {
    let data = []
    //declare private variables functions
    function add(item) {
        data.push(item)
        console.log('item is added')
    }

    function get(id){
        return data.find(item => {
            return item.id === id
        })
    }

    return {
        add: add,
        get: get
    }
})();

ItemController.add({id:1, name: 'Kate'})
