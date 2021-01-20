class Contestant{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }

    getCount(){
        var contestantCountRef = database.ref("contestantCount")
        contestantCountRef.on("value",function(data){
            contestantCount = data.val();
        })
    }

    updateCount(count){
        database.ref("/").update({contestantCount : count})
    }
    
    update(){
        var contestantIndex = "contestants/contestant" + contestantCount + this.index;
        database.ref(contestantIndex).set({name : this.name,distace : this.distance})
        
    }

    static getPlayerInfo(){
        var contestantInfoRef = database.ref("contestants")
        contestantInfoRef.on("value",(data) =>{
            allContestants = data.val();
        })
    }
}