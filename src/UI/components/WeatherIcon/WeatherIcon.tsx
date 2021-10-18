import React from 'react';
import t01d from '../../../assets/weatherbit/t01d.png'
import t01n from '../../../assets/weatherbit/t01n.png'
import t02d from '../../../assets/weatherbit/t02d.png'
import t02n from '../../../assets/weatherbit/t02n.png'
import t03d from '../../../assets/weatherbit/t03d.png'
import t03n from '../../../assets/weatherbit/t03n.png'
import t04d from '../../../assets/weatherbit/t04d.png'
import t04n from '../../../assets/weatherbit/t04n.png'
import t05d from '../../../assets/weatherbit/t05d.png'
import t05n from '../../../assets/weatherbit/t05n.png'
import d01d from '../../../assets/weatherbit/d01d.png'
import d01n from '../../../assets/weatherbit/d01n.png'
import d02d from '../../../assets/weatherbit/d02d.png'
import d02n from '../../../assets/weatherbit/d02n.png'
import d03d from '../../../assets/weatherbit/d03d.png'
import d03n from '../../../assets/weatherbit/d03n.png'
import r01d from '../../../assets/weatherbit/r01d.png'
import r01n from '../../../assets/weatherbit/r01n.png'
import r02d from '../../../assets/weatherbit/r02d.png'
import r02n from '../../../assets/weatherbit/r02n.png'
import r03d from '../../../assets/weatherbit/r03d.png'
import r03n from '../../../assets/weatherbit/r03n.png'
import f01d from '../../../assets/weatherbit/f01d.png'
import f01n from '../../../assets/weatherbit/f01n.png'
import r04d from '../../../assets/weatherbit/r04d.png'
import r04n from '../../../assets/weatherbit/r04n.png'
import r05d from '../../../assets/weatherbit/r05d.png'
import r05n from '../../../assets/weatherbit/r05n.png'
import r06d from '../../../assets/weatherbit/r06d.png'
import r06n from '../../../assets/weatherbit/r06n.png'
import s01d from '../../../assets/weatherbit/s01d.png'
import s01n from '../../../assets/weatherbit/s01n.png'
import s02d from '../../../assets/weatherbit/s02d.png'
import s02n from '../../../assets/weatherbit/s02n.png'
import s03d from '../../../assets/weatherbit/s03d.png'
import s03n from '../../../assets/weatherbit/s03n.png'
import s04d from '../../../assets/weatherbit/s04d.png'
import s04n from '../../../assets/weatherbit/s04n.png'
import s05d from '../../../assets/weatherbit/s05d.png'
import s05n from '../../../assets/weatherbit/s05n.png'
import s06d from '../../../assets/weatherbit/s06d.png'
import s06n from '../../../assets/weatherbit/s06n.png'
import a01d from '../../../assets/weatherbit/a01d.png'
import a01n from '../../../assets/weatherbit/a01n.png'
import a02d from '../../../assets/weatherbit/a02d.png'
import a02n from '../../../assets/weatherbit/a02n.png'
import a03d from '../../../assets/weatherbit/a03d.png'
import a03n from '../../../assets/weatherbit/a03n.png'
import a04d from '../../../assets/weatherbit/a04d.png'
import a04n from '../../../assets/weatherbit/a04n.png'
import a05d from '../../../assets/weatherbit/a05d.png'
import a05n from '../../../assets/weatherbit/a05n.png'
import a06d from '../../../assets/weatherbit/a06d.png'
import a06n from '../../../assets/weatherbit/a06n.png'
import c01d from '../../../assets/weatherbit/c01d.png'
import c01n from '../../../assets/weatherbit/c01n.png'
import c02d from '../../../assets/weatherbit/c02d.png'
import c02n from '../../../assets/weatherbit/c02n.png'
import c03d from '../../../assets/weatherbit/c03d.png'
import c03n from '../../../assets/weatherbit/c03n.png'
import c04d from '../../../assets/weatherbit/c04d.png'
import c04n from '../../../assets/weatherbit/c04n.png'
import u00d from '../../../assets/weatherbit/u00d.png'
import u00n from '../../../assets/weatherbit/u00n.png'


type IWeatherIconProps = {
    code: string;
}



export const WeatherIcon: React.FC<IWeatherIconProps> = (props) => {
    let Icon;

    switch (props.code) {

        case 't01d':
            Icon = t01d;
            break;

        case 't01n':
            Icon = t01n;
            break;

        case 't02d':
            Icon = t02d;
            break;

        case 't02n':
            Icon = t02n;
            break;

        case 't03d':
            Icon = t03d;
            break;

        case 't03n':
            Icon = t03n;
            break;

        case 't04d':
            Icon = t04d;
            break;

        case 't04n':
            Icon = t04n;
            break;

        case 't05d':
            Icon = t05d;
            break;

        case 't05n':
            Icon = t05n;
            break;

        case 'd01d':
            Icon = d01d;
            break;

        case 'd01n':
            Icon = d01n;
            break;

        case 'd02d':
            Icon = d02d;
            break;

        case 'd02n':
            Icon = d02n;
            break;

        case 'd03d':
            Icon = d03d;
            break;

        case 'd03n':
            Icon = d03n;
            break;

        case 'r01d':
            Icon = r01d;
            break;

        case 'r01n':
            Icon = r01n;
            break;

        case 'r02d':
            Icon = r02d;
            break;

        case 'r02n':
            Icon = r02n;
            break;

        case 'r03d':
            Icon = r03d;
            break;

        case 'r03n':
            Icon = r03n;
            break;

        case 'f01d':
            Icon = f01d;
            break;

        case 'f01n':
            Icon = f01n;
            break;

        case 'r04d':
            Icon = r04d;
            break;

        case 'r04n':
            Icon = r04n;
            break;

        case 'r05d':
            Icon = r05d;
            break;

        case 'r05n':
            Icon = r05n;
            break;

        case 'r06d':
            Icon = r06d;
            break;

        case 'r06n':
            Icon = r06n;
            break;

        case 's01d':
            Icon = s01d;
            break;

        case 's01n':
            Icon = s01n;
            break;

        case 's02d':
            Icon = s02d;
            break;

        case 's02n':
            Icon = s02n;
            break;

        case 's03d':
            Icon = s03d;
            break;

        case 's03n':
            Icon = s03n;
            break;

        case 's04d':
            Icon = s04d;
            break;

        case 's04n':
            Icon = s04n;
            break;

        case 's05d':
            Icon = s05d;
            break;

        case 's05n':
            Icon = s05n;
            break;

        case 's06d':
            Icon = s06d;
            break;

        case 's06n':
            Icon = s06n;
            break;

        case 'a01d':
            Icon = a01d;
            break;

        case 'a01n':
            Icon = a01n;
            break;

        case 'a02d':
            Icon = a02d;
            break;

        case 'a02n':
            Icon = a02n;
            break;

        case 'a03d':
            Icon = a03d;
            break;

        case 'a03n':
            Icon = a03n;
            break;

        case 'a04d':
            Icon = a04d;
            break;

        case 'a04n':
            Icon = a04n;
            break;

        case 'a05d':
            Icon = a05d;
            break;

        case 'a05n':
            Icon = a05n;
            break;

        case 'a06d':
            Icon = a06d;
            break;

        case 'a06n':
            Icon = a06n;
            break;

        case 'c01d':
            Icon = c01d;
            break;

        case 'c01n':
            Icon = c01n;
            break;

        case 'c02d':
            Icon = c02d;
            break;

        case 'c02n':
            Icon = c02n;
            break;

        case 'c03d':
            Icon = c03d;
            break;

        case 'c03n':
            Icon = c03n;
            break;

        case 'c04d':
            Icon = c04d;
            break;

        case 'c04n':
            Icon = c04n;
            break;

        case 'u00d':
            Icon = u00d;
            break;

        case 'u00n':
            Icon = u00n;
            break;

        default:
            Icon = u00d;
    }
    return  <img src={Icon} alt='icon'/>;
};
