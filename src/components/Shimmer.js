
const Shimmer = () => {
    return(
        <div className="shimmer">
            {Array(12).fill("").map((e,index)=>
                <div className="shimmer-card" key={index}>
                    <div className="shimmer-img"></div>
                </div>
            )}
        </div>
    );
}

export default Shimmer;