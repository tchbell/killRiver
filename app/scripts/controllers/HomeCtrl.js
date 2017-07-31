(function () {
    function HomeCtrl() {
        
        this.products = books;
        this.test = 5;
        this.testIt = function(){
            console.log(books);
        }
        
        var books = [
            {
            name: "Kill River",
            image: "images/homeImage.png"
            };
        ];
    
    }
    angular
        .module("killRiver")
        .controller("HomeCtrl", [HomeCtrl]);
})();