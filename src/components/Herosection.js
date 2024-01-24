


// import { useState, useEffect } from 'react';

// function HeroSection() {
//     const images = [
//         { src: '/images/girl1.jpg', text: 'Overlay Text 1' },
//         { src: '/images/girl2.jpg', text: 'Overlay Text 2' },
//         { src: '/images/girl3.jpg', text: 'Overlay Text 3' },
//         { src: '/images/girl4.jpg', text: 'Overlay Text 4' },
//     ];

//     const [currentImageIndex, setCurrentImageIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentImageIndex((currentImageIndex + 1) % images.length);
//         }, 5000); // Change image every 5 seconds

//         return () => clearInterval(interval);
//     }, [currentImageIndex]);

//     return (
//         <div style={{
//             width: '100vw',
//             height: '100vh',
//             position: 'relative',
//             overflow: 'hidden',
//         }}>
//             {images.map((image, index) => (
//                 <div key={index} style={{
//                     display: index === currentImageIndex ? 'block' : 'none',
//                     position: 'absolute',
//                     width: '100%',
//                     height: '100%',
//                 }}>
//                     <img src={image.src} style={{
//                         width: '100%',
//                         height: '100%',
//                         objectFit: 'cover',
//                     }} />
//                     <p style={{
//                         position: 'absolute',
//                         top: '50%',
//                         left: '50%',
//                         transform: 'translate(-50%, -50%)',
//                         color: 'white',
//                         fontSize: '24px',
//                         fontWeight: 'bold',
//                         textAlign: 'center',
//                     }}>{image.text}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default HeroSection;


// import { useState, useEffect } from 'react';

// function HeroSection() {
//     const images = [
//         { src: '/images/girl1.jpg', text: 'Overlay Text 1' },
//         { src: '/images/girl2.jpg', text: 'Overlay Text 2' },
//         { src: '/images/girl3.jpg', text: 'Overlay Text 3' },
//         { src: '/images/girl4.jpg', text: 'Overlay Text 4' },
//     ];

//     const [currentImageIndex, setCurrentImageIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentImageIndex((currentImageIndex + 1) % images.length);
//         }, 5000); // Change image every 5 seconds

//         return () => clearInterval(interval);
//     }, [currentImageIndex]);

//     return (
//         <div style={{
//             width: '100vw',
//             height: '100vh',
//             position: 'relative',
//             overflow: 'hidden',
//         }}>
//             {images.map((image, index) => (
//                 <div key={index} style={{
//                     display: index === currentImageIndex ? 'block' : 'none',
//                     position: 'absolute',
//                     width: '100%',
//                     height: '100%',
//                 }}>
//                     <img src={image.src} style={{
//                         width: '100%',
//                         height: '100%',
//                         objectFit: 'cover',
//                     }} />
//                     <div style={{
//                         position: 'absolute',
//                         top: '50%',
//                         left: '50%',
//                         transform: 'translate(-50%, -50%)',
//                         color: 'white',
//                         fontSize: '24px',
//                         fontWeight: 'bold',
//                         textAlign: 'center',
//                         textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Text shadow for readability
//                         backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent background
//                         padding: '10px',
//                         borderRadius: '5px',
//                     }}>
//                         {image.text}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default HeroSection;


// import { useState, useEffect } from 'react';

// function HeroSection() {
//     const images = [
//         { src: '/images/girl1.jpg', mainText: 'Empowering Women in the Digital Age', subText: 'Join Ledger Lady and unlock the potential of blockchain.' },
//         { src: '/images/girl2.jpg', mainText: 'Unleash Your Financial Independence', subText: 'Learn cryptocurrency trading and investment with Ledger Lady.' },
//         { src: '/images/girl3.jpg', mainText: 'Breaking Barriers with Blockchain', subText: 'Explore the future of technology in a supportive community.' },
//         { src: '/images/girl4.jpg', mainText: 'Innovate, Educate, Inspire', subText: 'Transforming the world of finance, one woman at a time.' },
//     ];

//     const [currentImageIndex, setCurrentImageIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentImageIndex((currentImageIndex + 1) % images.length);
//         }, 5000); // Change image every 5 seconds

//         return () => clearInterval(interval);
//     }, [currentImageIndex]);

//     return (
//         <div style={{
//             width: '100vw',
//             height: '100vh',
//             position: 'relative',
//             overflow: 'hidden',
//         }}>
//             {images.map((image, index) => (
//                 <div key={index} style={{
//                     display: index === currentImageIndex ? 'block' : 'none',
//                     position: 'absolute',
//                     width: '100%',
//                     height: '100%',
//                 }}>
//                     <img src={image.src} style={{
//                         width: '100%',
//                         height: '100%',
//                         objectFit: 'cover',
//                     }} />
//                     <div style={{
//                         position: 'absolute',
//                         top: '50%',
//                         left: '50%',
//                         transform: 'translate(-50%, -50%)',
//                         color: 'white',
//                         fontSize: '24px',
//                         fontWeight: 'bold',
//                         textAlign: 'center',
//                         textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
//                         backgroundColor: 'rgba(0, 0, 0, 0.3)',
//                         padding: '20px',
//                         borderRadius: '5px',
//                     }}>
//                         <p>{image.mainText}</p>
//                         <p style={{ fontWeight: 'normal', fontSize: '18px', marginTop: '10px' }}>{image.subText}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default HeroSection;


import { useState, useEffect } from 'react';

function HeroSection() {
    const images = [
        { src: '/images/girl1.jpg', mainText: 'Empowering Women in the Digital Age', subText: 'Join Ledger Lady and unlock the potential of blockchain.' },
        { src: '/images/girl2.jpg', mainText: 'Unleash Your Financial Independence', subText: 'Learn cryptocurrency trading and investment with Ledger Lady.' },
        { src: '/images/girl3.jpg', mainText: 'Breaking Barriers with Blockchain', subText: 'Explore the future of technology in a supportive community.' },
        { src: '/images/girl4.jpg', mainText: 'Innovate, Educate, Inspire', subText: 'Transforming the world of finance, one woman at a time.' },
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {images.map((image, index) => (
                <div key={index} style={{
                    display: index === currentImageIndex ? 'block' : 'none',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    transition: 'opacity 1.5s ease-in-out',
                    opacity: index === currentImageIndex ? 1 : 0,
                }}>
                    <img src={image.src} style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 1.5s ease-in-out',
                    }} />
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        fontSize: '28px', // Increased font size
                        fontWeight: 'bold',
                        textAlign: 'center',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        padding: '20px',
                        borderRadius: '5px',
                        transition: 'all 1.5s ease-in-out', // Transition effect
                    }}>
                        <p style={{ marginBottom: '10px' }}>{image.mainText}</p>
                        <p style={{ fontWeight: 'normal', fontSize: '20px' }}>{image.subText}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default HeroSection;
