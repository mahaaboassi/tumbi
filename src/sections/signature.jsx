import Heading from "../components/heading"
import { dataSignature } from "../data/data"

const Signature = ()=>{
    return(<div className="px-5 sm:px-10 py-16 lg:px-24">
        <Heading isCenter={true} subTitle={"WHAT WE PROVIDE"} title={"Signature offering"} />
        <div className="container-sign pt-16">
            {dataSignature.map((e,idx)=>{
                return<div key={`Signature_${e.title}_${idx}`} className="card-sign" style={{
                    background:`url('${e.img}')`,
                    backgroundRepeat: "no-repeat"
                    }}>
                        <div className="content-sign p-5 gap-4">
                            <h4>{e.title}</h4>
                            <p>{e.description}</p>
                            <ul>
                                {e.children.map((child,index)=><li key={`Signature_Child_${child}_${index}`}>{child}</li>)}
                            </ul>
                        </div>
                    </div>
            })}
        </div>
    </div>)
}

export default Signature
