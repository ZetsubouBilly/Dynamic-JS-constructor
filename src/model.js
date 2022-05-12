import image from './assets/image.png';
import { TitleBlock, ImageBlock, ColumnsBlock, TextBlock } from './classes/blocks';

const text = `Osmanthus wine tastes the same as I remember... But where are those who share the memory?`;

export const model = [
    new TitleBlock( 'Конструктор сайтов на JS', {
        tag: 'h2',
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493249)',
                color: '#fff',
                'text-align': 'center',
                padding: '1.5rem',
            }
    } ),
    new ImageBlock( image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center',
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: "This is image",
    }),
    new ColumnsBlock([
        'Приложение на чистом JS, без использования библиотек',
        'Здесь могут сбываться мечты',
        'Или не могут, все зависит от тебя',
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            color: '#fff',
            padding: '2rem',
            'font-weight': 'bold',
        }
    }),
    new TextBlock( text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold',
        }
    }),
    
    
    
    

];