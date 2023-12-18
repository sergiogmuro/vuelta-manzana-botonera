const effects = [
    {
        path: 'effects/42-circo-redoble-1.mp3',
        startTime: 3,
        color: '#d3caac',
        name: 'redoble'
    },
    {
        path: 'effects/62-torsion.mp3',
        startTime: 1,
        color: '#fd66f0',
        name: 'torsion'
    },
    {
        path: 'effects/62 2-DESLIZAR  Efecto de Sonido.mp3',
        startTime: 1,
        color: '#b466fd',
        name: 'DESLIZAR'
    },
    {
        path: 'effects/72-Correcaminos_Arreglan monopatin_.mp3',
        startTime: 1,
        color: '#d56758',
        name: 'Correcaminos'
    },
    {
        path: 'effects/bird-chirping-sound-effect.mp3',
        startTime: 0,
        color: '#e1fd66',
        name: 'Pajaritos'
    },
    {
        path: 'effects/bird-sounds.mp3',
        startTime: 0,
        color: '#ffad33',
        name: 'Pajaritos'
    },
    {
        path: 'effects/quack_5.mp3',
        startTime: 0,
        color: '#c0a782',
        name: 'Cuck'
    },
    {
        path: 'effects/boing_lmke36X.mp3',
        startTime: 0,
        color: '#fc6cab',
        name: 'Boing'
    },
]

const songs = [
    /*{
        path: 'songs_low/Obertura.mp3',
        startTime: 0,
        color: '#abcfe1',
        name: 'MUSICA ESPERA'
    },*/
    {
        path: 'songs_low/1-Relato inicio.mp3',
        startTime: 0.5,
        color: '#efa76c',
        name: '1 - Relato inicio'
    },
    {
        path: 'songs_low/2-Pajaritos y gallo desperdando a  Nicolas.mp3',
        startTime: 0,
        color: '#FF5733',
        name: '2 - Pajaritos y gallo esperando a Nicolas'
    },
    {
        path: 'songs_low/3-Pajarito molesto 10 seg.mp3',
        startTime: 0,
        color: '#FF5733',
        name: '3 - Pajarito molesto 10 seg'
    },
    {
        path: 'songs_low/4-Cancion espantapajaros(cuando sube Nicolas de vuelta).mp3',
        startTime: 48,
        color: '#FF5733',
        name: '4 - Cancion espantapajaros (Nicolas de vuelta)'
    },
    {
        path: 'songs_low/5-Cocineros-tarantella-napoletana 35 seg.mp3',
        startTime: 0.5,
        color: '#e1fd66',
        name: '5 - Cocineros tarantella napoletana 35 seg'
    },
    {
        path: 'songs_low/6-Soy una taza.mp3',
        startTime: 0,
        color: '#e1fd66',
        name: '6 - Soy una taza'
    },
    {
        path: 'songs_low/7-Albaniles(mezclar).mp3',
        startTime: 52,
        color: '#d3caac',
        name: '7 - Albañiles (mezclar)'
    },
    {
        path: 'songs_low/8-musica-benny-hill-show.mp3',
        startTime: 0,
        color: '#d3caac',
        name: '8 - Albañiles - Benny Hill'
    },
    /*
        {
            path: 'songs_low/9-Arquitecto inicio _Kill Bill silbido.mp3',
            startTime: 0,
            color: '#d56758',
            name: 'Arquitecto inicio _Kill Bill silbido'
        },
    */
    {
        path: 'songs_low/arquitecta_Queen_Another_One_Bites_the_Dust.mp3',
        startTime: 6,
        color: '#d56758',
        name: '9 - Arquitecto '
    },
    {
        path: 'songs_low/10-Panaderos_xuxa-quiero-pan-espanol.mp3',
        startTime: 0.2,
        color: '#fd66f0',
        name: '10 - Panaderos INTRO Xuxa',
        volume: 0.8
    },
    {
        path: 'songs_low/11-Panaderos-(frances).mp3',
        startTime: 0,
        color: '#fd66f0',
        name: '11 - Panaderos (frances)'
    },
    {
        path: 'songs_low/12- Bicicleteros - Inicio - min2_27 - Sin Rueditas.mp3',
        startTime: 146.3,
        color: '#66d5fd',
        name: ' 12 - Bicicleteros - Inicio - Sin Rueditas',
        volume: 0.8
    },
    {
        path: 'songs_low/Austin Powers Theme (320 kbps).mp3',
        startTime: 0,
        color: '#66d5fd',
        name: '12.5 - Austin Powers Theme',
        volume: 1
    },
    {
        path: 'songs_low/13-Muchachos.mp3',
        startTime: 0,
        color: '#66d5fd',
        name: '13 - Muchachos',
        volume: 0.8
    },
    {
        path: 'songs_low/LA LATA INSTRUMENTAL.mp3',
        startTime: 0.3,
        color: '#66d5fd',
        name: '14 - Zapateros - LA LATA',
        volume: 0.8
    },
    {
        path: 'songs_low/15-Chusma chisme.mp3',
        startTime: 0,
        color: '#ffad33',
        name: '15 - Vecinas Chusma chisme'
    },
    {
        path: 'songs_low/16-Minions Papaya .mp3',
        startTime: 0,
        color: '#ffad33',
        name: '16 - Hollines - Minions Papaya'
    },
    {
        path: 'songs_low/Deshollinadores - Al compas + musica obra.mp3',
        startTime: 0,
        color: '#c0a782',
        name: '17 - Desollinador ALT (entra y completa)'
    }/*,
    {
        path: 'songs_low/17-Desollinador_cuando entra y completa.mp3',
        startTime: 60.2,
        color: '#c0a782',
        name: 'Desollinador (cuando entra y completa)'
    }*/,
    {
        path: 'songs_low/18-Inspector Gadget - Theme Tune.mp3',
        startTime: 0,
        color: '#c29797',
        name: '18 - Detectives - Inspector Gadget',
        volume: 0.9
    },
    {
        path: 'songs_low/19-Oh no no no.mp3',
        startTime: 0,
        color: '#c29797',
        name: '19 - Detectives Oh no no no'
    },
    {
        path: 'songs_low/20-Detectives.mp3',
        startTime: 0.5,
        color: '#93c4a7',
        name: '20 - Detectives (Cancion Orig)'
    },
    {
        path: 'songs_low/21- vangelis_carros_de_fuego_(25-30 seg en total).mp3',
        startTime: 0,
        color: '#93c4a7',
        name: '21 - Carrosas de fuego (25-30 seg en total)',
        volume: 0.6
    },
    {
        path: 'songs_low/22-cancion grupal final.mp3',
        startTime: 0.6,
        color: '#b4efa9',
        name: '22 - Cancion Grupal FINAL'
    }
]

let currentEffect = null
let currentSong = null
let total = 0

const allAudioFiles = [...effects.map(effect => effect.path), ...songs.map(song => song.path)]

function loadServiceWorker() {
    if ('serviceWorker' in navigator) {
        const urlsToCache = [
            'sw.js',
            'index.html',
            'styles.css',
            'script.js',
            ...allAudioFiles,
        ];

        navigator.serviceWorker.register('sw.js')
            .then(registration => {
                console.log('Service Worker registered!');

                registration.active.postMessage({ urlsToCache });
            })
            .catch(error => {
                console.error('Error registering Service Worker:', error);
            });
    }
}

function preloadAudio() {
    const buttons = document.querySelectorAll('button'); // Seleccionamos todos los botones
    const audioLoaded = new Array(allAudioFiles.length).fill(false); // Array para rastrear la carga de cada audio

    buttons.forEach(button => {
        button.disabled = true;
    });

    buttons.forEach((button, index) => {
        const audio = new Audio(allAudioFiles[index]);
        audio.addEventListener('canplaythrough', () => {
            audioLoaded[index] = true; // Marcamos el audio actual como cargado completamente
            setTimeout(function() {
                audio.volume = 0;
                audio.play()
            }, 10)

            button.disabled = false;

            const allAudiosLoaded = audioLoaded.every(loaded => loaded); // Verificamos si todos los audios están cargados
            if (allAudiosLoaded) {
                console.log('Todos los archivos han sido cargados');

                document.getElementById('progress-container').style.display = 'none';
                loadServiceWorker();
                cacheAllAudios(buttons); // Llama a la función para almacenar en caché los audios.
            }
        });

        audio.load();
    });
}

async function cacheAllAudios(buttons) {
    if ('serviceWorker' in navigator) {
        try {
            const registration = await navigator.serviceWorker.ready;
            const cache = await caches.open('audios-cache');
            const audioRequests = allAudioFiles.map(audioFile => new Request(audioFile));

            await cache.addAll(audioRequests);
            console.log('Audios almacenados en caché');

            buttons.forEach(button => {
                button.disabled = false; // Habilitar botones una vez que los audios se almacenen en caché
            });
        } catch (error) {
            console.error('Error al almacenar en caché los audios:', error);
        }
    }
}

const audioTime = document.getElementById('time')
const audioName = document.getElementById('name')
let isPlaying = false
let isPlayingEffects = false

function createButtons(container, array, sectionType) {
    let currentPlayingButton = null
    let currentAudio = null
    let isCurrentPlaying = false

    array.forEach(item => {
        const button = document.createElement('button')
        // let songName = (sectionType === 'songs') ? `${++total} - ${item.name}` : item.name
         let songName = item.name
        button.textContent = songName

        let audioElement = new Audio(item.path)
        audioElement.currentTime = item.startTime
        audioElement.volume = item.volume || 1

        button.addEventListener('click', () => {
            if (currentPlayingButton && currentPlayingButton !== button) {
                currentPlayingButton.classList.remove('playing')
                currentPlayingButton.classList.add('played')
                stopButton(currentPlayingButton, currentAudio, sectionType, currentPlayingButton, currentAudio)
            }

            if ((sectionType === 'songs' && !isPlaying) || (sectionType === 'effects' && !isPlayingEffects)) {
                currentPlayingButton = button
                currentAudio = audioElement
                isCurrentPlaying = (sectionType === 'songs') ? isPlaying : isPlayingEffects

                playAudio(button, audioElement, item, sectionType, songName)
            } else {
                stopButton(button, audioElement, sectionType, currentPlayingButton, currentAudio)
            }
        })

        audioElement.addEventListener('ended', () => {
            stopButton(button, audioElement, sectionType, currentPlayingButton, currentAudio)
        })

        container.appendChild(button)
    })
}

function playAudio(button, audioElement, item, sectionType, songName) {
    audioElement.currentTime = item.startTime
    audioElement.volume = item.volume || 1
    audioElement.play()

    if (sectionType === 'effects') {
        currentEffect = audioElement
        button.classList.add('effects-playing')
        isPlayingEffects = true
    } else if (sectionType === 'songs') {
        audioElement.addEventListener('timeupdate', () => {
            const duration = audioElement.duration || 0;
            const currentTime = audioElement.currentTime || 0;
            const minutes = Math.floor(currentTime / 60);
            const seconds = Math.floor(currentTime % 60);
            const durationMinutes = Math.floor(duration / 60);
            const durationSeconds = Math.floor(duration % 60);

            audioName.textContent = songName
            audioTime.textContent = `${minutes}:${(seconds < 10 ? '0' : '') + seconds} / ${durationMinutes}:${(durationSeconds < 10 ? '0' : '') + durationSeconds}`;
        });

        audioElement.addEventListener('ended', () => {
            resetDisplay()
        })
        audioElement.addEventListener('paused', () => {
            resetDisplay()
        })
        audioElement.addEventListener('pause', () => {
            resetDisplay()
        })

        currentSong = audioElement
        button.classList.add('songs-playing')
        isPlaying = true
    }

    button.classList.add('playing')
    button.classList.remove('played')
}

function stopButton(button, audioElement, sectionType, currentPlayingButton, currentAudio) {
    if (audioElement) {
        audioElement.pause()
        audioElement.currentTime = 0
    }

    if (button) {
        button.classList.remove('playing', 'songs-playing', 'effects-playing')
        button.classList.add('played')
    }

    if (currentPlayingButton === button) {
        currentPlayingButton = null
        currentAudio = null

        if (sectionType === 'songs') {
            audioName.textContent = null
            isPlaying = false
        } else if (sectionType === 'effects') {
            isPlayingEffects = false
        }
    }
}

function resetDisplay() {
    setTimeout(function() {
        audioName.textContent = null
        audioTime.textContent = '0:00 / 0:00'
    }, 10)
}

const effectsContainer = document.getElementById('scroll-container-upper')
const songsContainer = document.getElementById('scroll-container-lower')

createButtons(effectsContainer, effects, 'effects')
createButtons(songsContainer, songs, 'songs')

preloadAudio()
resetDisplay()
