import React from "react";

export const user = {
    name: 'Ganesha',
    imageUrl:'https://th.bing.com/th?id=OIP.2CNSmp8HUA9a6EjI8hNFAQHaEo&w=316&h=197&c=8&rs=1&qlt=30&o=6&pid=3.1&rm=2',
    imageSize:90
};

function MyImage(){
    return (
<img className="avatar" src={user.imageUrl} alt={'Photo of '+user.name} style={{widows:user.imageSize,height:user.imageSize}}></img>
    );
}

export default MyImage;