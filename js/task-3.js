const profile={//bu nesnenin özellikleriyle çalışabilmemeiz için metod tanımlıcaz.
    username: "Jacob",
    playTime: 300,
     changeUsername:function (newName) {
        profile.username = newName;
    },
    updatePlayTime: function (hours) {
        profile.playTime += hours;
    },
    getInfo: function () {
        return `${profile.username} has ${profile.playTime} active hours!`;
    }
};
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"

