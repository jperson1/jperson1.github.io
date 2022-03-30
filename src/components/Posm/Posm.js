
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Footer from "../Footer";

export default function Posm() {
    const [images, setImages] = React.useState([]);
    const [loaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
        getImages();
    }, []);

    function getImages(count = 12) {
        var rand = 0;
        var temp = [];

        for(var i=0; i<count; i++){
            rand = Math.floor(Math.random() * 1137) + 1;
            temp.push('./possums/posm (' + rand + ').jpg')
        }

        setImages(images.concat(temp));
        setIsLoaded(true);
    }

    return (
        <div className="h-screen">

            <div className="bg-gray-900 pt-8 text-white">
                <h1 className="font-medium text-center text-4xl mb-4">Possum Scrolling</h1>
                <h2 className="font-medium text-center text-l">A collection of over 1000 possum images for you to scroll through!</h2>
                <h2 className="font-medium text-gray-400 text-center text-l">Please send more images to me at my email!</h2>

                <InfiniteScroll
                    dataLength={images}
                    next={() => getImages(5)}
                    hasMore={true}
                    loader={
                        <img
                            className="h-24 w-24"
                            src="https://c.tenor.com/I6kN-6X7nhAAAAAi/loading-buffering.gif"
                            alt="loading"
                        />}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row" style={{ marginTop: "30px" }}>
                        {loaded ?
                            images.map((image, key) => (
                                <PossumImage url={image} key={key} />
                            )) : ""}
                    </div>
                </InfiniteScroll>
            </div>

            <div className="bg-gray-800 shadow-md">
                <Footer />
            </div>
        </div>
    );
}

function PossumImage({ url, key }) {
    return(
    <div className="p-4 border-white">
        <img className="rounded-lg" src={url} key={key} alt={key}/>
    </div>
    );
}