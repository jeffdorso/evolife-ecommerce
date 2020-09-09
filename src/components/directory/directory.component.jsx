import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'hats',
                imageUrl:'https://images.pexels.com/photos/396777/pexels-photo-396777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                id: 1
            },
            {
              title: 'jackets',
              imageUrl:'https://images.pexels.com/photos/1336873/pexels-photo-1336873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              id: 2  
            },
            {
                title: 'sneakers',
                imageUrl: 'https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                id: 3 
            },
            {
                title: 'mens',
                imageUrl: 'https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                size: 'large',
                id: 4 
            },
            {
                title: 'women',
                imageUrl: 'https://images.pexels.com/photos/3373602/pexels-photo-3373602.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                size: 'large',
                id: 5
            },
        
        
        ]
       }
    }
    render () {
        return (
            <div className='directory-menu'>
                {
                this.state.sections.map(({title, imageUrl, id, size}) => (
                    <MenuItem key={id}  title= {title} imageUrl={imageUrl} size={size}/>
                ))
             }
            </div>
        )
    }
}

export default Directory;