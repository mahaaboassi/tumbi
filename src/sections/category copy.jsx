import { categories } from "../data/data"


const Category = ()=>{
    
    return(<div >
        <div className="cloudy-container">

        </div>
        <div className=" category pb-10 gap-5 px-5 sm:px-10 lg:px-24">
          {categories.map((e,idx)=><a key={`Categories_${e.name}_${idx}`} href="#rooms">
            <div  className="card-cat p-4" >{e.name}</div>
          </a>)}
        </div>
        
        
    </div>)
}
export default Category