import { useState } from "react";


const Section = ({title, description, isVisible, setIsVisible}) => {

    return(
        <div>
            <h1>{title}</h1>
            {isVisible
            ? 
            <div>
            <button onClick={()=>setIsVisible(false)}>hide</button>
            <p>{description}</p>
            </div>
            :
            <button onClick={()=>setIsVisible(true)}>show</button>}
        </div>
    );

}

const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState("about");

    return(
        <div>
            <h1>Instamart page</h1>

            <Section title={"About"}
                     description={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}
                     isVisible ={visibleSection === "about"}
                     setIsVisible = {()=> setVisibleSection( visibleSection === "about"? "" : "about")}
                     />

                    <Section title={"Team"}
                     description={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}
                     isVisible ={visibleSection === "team"}
                     setIsVisible = {()=> setVisibleSection( visibleSection === "team"? "" : "team")}
                     />


                    <Section title={"Careers"}
                     description={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}
                     isVisible ={visibleSection === "careers"}
                     setIsVisible = {()=> setVisibleSection( visibleSection === "careers"? "" : "careers")}
                     />

        </div>
    );

}

export default Instamart;