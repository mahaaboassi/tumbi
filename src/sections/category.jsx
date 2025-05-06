import { categories } from "../data/data"

const Category = ()=>{

    return(<div >
        <div className="cloudy-container">
            {/* <img src={img} alt="cloudy" /> */}
        </div>
        <div className=" category pb-10 gap-5 px-5 sm:px-10 lg:px-24">
          {categories.map((e,idx)=><div className="card-cat p-4" key={`Categories_${e.name}_${idx}`}>{e.name}</div>)}
        </div>
        
        
    </div>)
}
export default Category