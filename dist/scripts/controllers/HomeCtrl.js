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
            this.bookDesc = this.novels[counter].description;
            this.bookBuy = this.novels[counter].amazon;
        }
        
        this.bookName = this.novels[0].name;
        this.bookCover = this.novels[0].image;
        this.bookDesc = this.novels[0].description;
        this.bookBuy = this.novels[0].amazon;
    
    }
    
    var books =[
            {
            name: "Kill River",
            image: "images/homeImage.png",
            description: "In the summer of 1983, thirteen-year-old Cyndi and her three new-found friends Stacy, Zack, and Brad decide to sneak away from their summer camp in the middle of the night by rafting down the nearby rivers. After spending a tense night lost in the woods, the four teenagers stumble into a mysterious water park that appears to be completely empty.At first, they are thrilled to have the rides all to themselves, at least until one of them disappears. Soon they discover that they are trapped in the park, and a dark figure is stalking them from the shadows, picking them off one by one. Once night falls, Cyndi will have to fight to escape the park, a masked maniac, and a living nightmare.Kill River is a wild water park ride filled with blood, gore, and '80s nostalgia. Slasher fans rejoice, old-school horror is back!",
            amazon: "https://www.amazon.com/Kill-River-Cameron-Roubique/dp/0692463666"
            },
        
            {
            name:"Disco DeathTrap",
            image: "images/DiscoDeathTrap.png",
            description: "On December 31, 1980, a masked killer crashes the New Year's Eve party at the Rollerville roller disco, turning a night of fun into a night of murder and mayhem.",
            amazon: "https://www.amazon.com/Disco-Deathtrap-Cameron-Roubique/dp/069277663X/ref=la_B0171542Q4_1_2?s=books&ie=UTF8&qid=1501609259&sr=1-2"
            }
        ];
    
    angular
        .module("killRiver")
        .controller("HomeCtrl", [HomeCtrl]);
})();