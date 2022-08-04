// Методы обьекта и this при обращении к свойствам метода

const playList = {
    name: 'my playlist',
    raitig: 4.8,
    tracks: ['track-1', 'track-2', 'track-3'],
    trackCount: 3,
    ///////////////////
    // getName : function () {
    //    console.log('This a function getName'); 
    // }
    ///////////////////
    // getName(a) {
    //     console.log('this a function getName', a );
    // }
    changeName(newName) {
        ////////Внутри метода обьектра никогда не использовать
        // имя самого объекта
        console.log('this внутри changeName: ', this);
        this.name = newName;
        // THIS есть только у функции
    },
    addTrack(track) {
        this.tracks.push(track);
        // this.trackCount = this.tracks.length; - это плохое решение
    },
    updetRating(newRaiting) {
        this.raitig = newRaiting;
    },
    getTrackCount() {
        return this.tracks.length;
    },
};

// playList.getName(3);
// console.log(playList);
playList.changeName('New name');
playList.addTrack('New track');
playList.updetRating('4.5');
console.log(playList);
console.log(playList.getTrackCount());