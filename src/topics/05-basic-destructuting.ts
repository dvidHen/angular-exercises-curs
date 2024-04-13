interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

//La desestructuración toma un objeto completo y permite tomar de él las partes que se requieran
/*
const {song: anothersong , songDuration: duration, details: detailData, details: {author: songAuthor}} = audioPlayer;
const {author: finalAuthor} = detailData;

console.log(`Song: ${anothersong}`);
console.log(`Duration: ${duration}`);
console.log(`Autor: ${finalAuthor}`);
console.log(`Autor misma declaración: ${songAuthor}`);*/


export{};