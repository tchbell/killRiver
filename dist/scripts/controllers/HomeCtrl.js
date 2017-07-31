(function () {
    function HomeCtrl() {
        
        this.novels = books;
        this.test = 5;
        var counter = 0;
        
        
        this.cycle = function(){
            counter ++;
            if(counter >= this.novels.length){
                counter = 0;
            }
            console.log(counter);
            this.bookName = this.novels[counter].name;
            this.bookCover = this.novels[counter].image;
        }
        
        this.bookName = this.novels[0].name;
        this.bookCover = this.novels[0].image;
    
    }
    
    var books =[
            {
            name: "Kill River",
            image: "images/homeImage.png",
            description: "Talk about the Book"
            },
            {
            name:"Disco DeathTrap",
            image: "images/DiscoDeathTrap.png",
            description: "About disco deathtrap"
            }
        ];
    
    angular
        .module("killRiver")
        .controller("HomeCtrl", [HomeCtrl]);
})();