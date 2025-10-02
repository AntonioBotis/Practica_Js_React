'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
let map,mapEvent;

class App{
    #map;
    #mapEvent;
    constructor()
    {
        this._getPosition();
    }
    _getPosition()
    {
        if(navigator.geolocation)
        navigator.geolocation.getCurrentPosition(this._loadMap,bind(this),function()
    {
        alert('Could not get positon');
    });
    }
    _loadMap(position)
    {
        
        console.log(position);
        const{latitude}=position.coords;
        const{longitude}=position.coords;
        console.log(`https://www.google.com/maps/@${latitude},${'longitude'}`);

        const coords=[latitude,longitude];

        this.#map = L.map('map').setView(coords, 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);

        this.#map.on('click',function(mapEvent)
        {
    this.#mapEvent=mapEvent;
    form.classList.remove('hidden');
    inputDistance.focus();




    },function()
    {
        alert('nu merge');
    });

    }
        _showForm()
    {

    }
    _toggleElevationField()
    {

    }
    _newWorkout(e)
    
    {
    e.preventDefault(); 
        inputDistance.value=0;
        inputCadence.value=0;
        inputDuration.value=0;
        inputElevation.value=0;

        console.log(mapEvent);
    const{lat,lng}=mapEvent.latlng;
    L.marker([[lat,lng]]).addTo(map).bindPopup(L.popup({
        maxWidth:200,
        minWidth:150,
        autoClose:false,
        closeOnClick:false,
        class:'running--popup',
    })).setPopupContent('Workout')
    .openPopup();

    
    

    }
}

const app= new App();






inputType.addEventListener('change',function()
{
    inputElevation.closest('.form__row').classList.toggle('form-row__hidden');
    inputCadence.closest('.form__row').classList.toggle('form-row__hidden');

})



