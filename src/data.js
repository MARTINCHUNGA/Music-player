
import { v4 as uuidv4 } from 'uuid';

function ChillHop(){
    
    return(
        [{
            id : uuidv4(),
            name : "Never Ending",
            artist : "Sitting Duck, squeeda",
            active: true,
            cover : "https://chillhop.com/wp-content/uploads/2020/08/63d2d2cdabbc5df023603b5f47b2fb97963cb537-1024x1024.jpg",
            audio : "https://mp3.chillhop.com/serve.php/?mp3=6836"  
        },
        {
            id : uuidv4(),
            name : "Happy Place",
            artist : "Philanthrope, Sitting Duck, squeeda",
            active: false,
            cover : "https://chillhop.com/wp-content/uploads/2020/08/63d2d2cdabbc5df023603b5f47b2fb97963cb537-1024x1024.jpg",
            audio :  "https://mp3.chillhop.com/serve.php/?mp3=12029"
        },
        {
            id : uuidv4(),
            name : "This Is Love",
            artist : "Pandrezz, Nymano, Namuuna",
            active: false,
            cover : "https://chillhop.com/wp-content/uploads/2020/07/46e61c111732cc3d72966225a1121a00bc693266-1024x1024.jpg",
            audio : "https://mp3.chillhop.com/serve.php/?mp3=2077"
        }]
    )
}



export default ChillHop